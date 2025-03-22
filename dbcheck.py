from flask import Flask, request, jsonify,render_template
from flask_mysqldb import MySQL
import MySQLdb.cursors
app = Flask(__name__)

# MySQL Configuration
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = '23122006Guru*'
app.config['MYSQL_DB'] = 'Amazon'


mysql = MySQL(app)

@app.route('/')
def home():
    return render_template('Amazon.html')


@app.route('/Details')
def news():
    return render_template('AmazonDetails.html')

@app.route('/Signup')
def signup():
    return render_template('Signup.html')

@app.route('/Weather')
def weather():
    return render_template('Weather.html')

@app.route('/users', methods=['GET'])
def get_users():
    cursor = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
    cursor.execute("SELECT * FROM Amazon_users")  
    rows = cursor.fetchall()
  
    return {"data":rows}
    



@app.route('/getUser/<int:user_ID>',methods=["GET"])
def get_SpecificUser(user_ID):
    
    cursor = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
    cursor.execute("SELECT * FROM Amazon_users where user_ID=(%s)",(user_ID,))
    rows = cursor.fetchone()
    cursor.close()
    
    return {"data":rows}

@app.route('/',methods=["POST"])
def addUsers():
    data = request.get_json(force=True);
    id=data["id"]
    name = data["name"]
    email = data["email"]
    password = data["password"]
    
    cursor = mysql.connection.cursor()
    cursor.execute("Insert into users values (%s,%s,%s,%s)",(id,name,email,password))
    mysql.commit()
    return [{"message":"user added"}]

@app.route('/addUser',methods=["POST"])
def add():
    
    data = request.get_json(force=True);
     
    if (not data or data is None):
        return jsonify([{"message":"Data is empty"}])
          
    response = {
        "message":""
    }
    
    
    if("name" in data):
        name = data["name"]
        if(name is not None and isinstance(name,str)):
            if(not name=="" and (name.isalpha() or name.isspace())):
                 name = data["name"]
            else:
                response["message"] = "Given name contains alphabets charachters only"  
                return response
        else:
              response["message"] = "Given name should be string / not None"
              return response
     
    else:
         response["message"] = "name key in not found!"
         return response
     
    if("email" in data):
        email = data["email"]
        cursor = mysql.connection.cursor()
        cursor.execute("SELECT email FROM Amazon_users")  
        rows = cursor.fetchall()
        list=[]
        
        for i in rows:
            list.append(i[0])
        cursor.close()
        if(email is not None and isinstance(email,str)):
            if(not email=="" and (not email.isspace())):
                email = data["email"]
                if(email  in list):
                    response["message"] = "Email already Exist"
                    return response
                    
            else:
                 response["message"] = " Given email contains alphabets,numberic,speicalcharachters"
                 return response;
        else:
             response["message"] = "Given email should be string / not None"
             return response
    else:
        response["message"] = "email key is not found!"
        return response
    
    if("password" in data):
        password = data["password"]
        if(password is not None and isinstance(password,str)):
            if(not password=="" and (not password.isspace())):
                password = data["password"]
            else:
                response["message"] = " Given password contains alphabets,numberic,speicalcharachters"
                return response
        else:
            response["message"] = "Given password should be string / not None"
            return response
    else:
        response["message"] = "password key is not found!"
        return response
    if("address" in data):
        address = data["address"]
        if(address is not None and isinstance(address,str)):
            if(not address==""):
               address = data["address"]

            else:
                response["message"] = " Given address contains alphabets,numberic,speicalcharachters,whitespace"
                return response
        else:
            response["message"] = "Given address should be string / not None"
            return response
    else:
        response["message"] = "address key is not found!"
        return response
    if("pincode" in data):
        pincode = data["pincode"]
        if(pincode is not None and isinstance(pincode,int)):
            if(not pincode==0):
               pincode = data["pincode"]
            else:
                response["message"] = " Given pincode contains integer and length must be correctly 6 digits"
                return response
        else:
            response["message"] = "Given pincode should be integer digit / not None"
            return response
    else:
        response["message"] = "pincode key is not found!"
        return response
    
    cursor = mysql.connection.cursor()
    cursor.execute(
    "INSERT INTO Amazon_users(name, email, password, address, pincode) VALUES (%s, %s, %s, %s, %s)", 
    (name, email, password, address, pincode)
    )
    mysql.connection.commit()
    rows = cursor.rowcount  
    cursor.close()

    
    if(rows==1):
        return jsonify([{"message": "User added successfully!"}])
    else:
        return jsonify([{"message": "User not added!"}])





@app.route('/updateUser/<int:user_ID>', methods=["PUT"])
def updateUser(user_ID):
    data = request.get_json(force=True)
    
    response = {"message": ""}
    
    if not user_ID:  
        return jsonify({"error": "user_ID key is not found"})

    cursor = mysql.connection.cursor()
    cursor.execute("SELECT user_ID FROM Amazon_users")  
    rows = cursor.fetchall()
    user_list = [i[0] for i in rows]
    cursor.close()

    if user_ID not in user_list:
        return jsonify([{"message": "user_ID is not found"}])

    if "name" in data:
        name = data["name"]
        if name and isinstance(name, str) and (name.isalpha() or name.isspace()):
            cursor = mysql.connection.cursor()
            query = "UPDATE Amazon_users SET name = %s WHERE user_ID = %s"
            cursor.execute(query, (name, user_ID))
            mysql.connection.commit()
            cursor.close()
        else:
            return jsonify({"message": "Given name should contain only alphabets"})

    if "email" in data:
        email = data["email"]
        cursor = mysql.connection.cursor()
        cursor.execute("SELECT email FROM Amazon_users")  
        rows = cursor.fetchall()
        email_list = [i[0] for i in rows]
        cursor.close()

        if email and isinstance(email, str) and email not in email_list:
            cursor = mysql.connection.cursor()
            query = "UPDATE Amazon_users SET email = %s WHERE user_ID = %s"
            cursor.execute(query, (email, user_ID))
            mysql.connection.commit()
            cursor.close()
        else:
            return jsonify({"message": "Email already exists or is invalid"})

    if "password" in data:
        password = data["password"]
        if password and isinstance(password, str):
            cursor = mysql.connection.cursor()
            query = "UPDATE Amazon_users SET password = %s WHERE user_ID = %s"
            cursor.execute(query, (password, user_ID))
            mysql.connection.commit()
            cursor.close()
        else:
            return jsonify({"message": "Given password should be a valid string"})

    if "address" in data:
        address = data["address"]
        if address and isinstance(address, str):
            cursor = mysql.connection.cursor()
            query = "UPDATE Amazon_users SET address = %s WHERE user_ID = %s"
            cursor.execute(query, (address, user_ID))
            mysql.connection.commit()
            cursor.close()
        else:
            return jsonify({"message": "Given address should be a valid string"})

    if "pincode" in data:
        pincode = data["pincode"]
        if pincode and isinstance(pincode, int) and len(str(pincode)) == 6:
            cursor = mysql.connection.cursor()
            query = "UPDATE Amazon_users SET pincode = %s WHERE user_ID = %s"
            cursor.execute(query, (pincode, user_ID))
            mysql.connection.commit()
            cursor.close()
        else:
            return jsonify({"message": "Given pincode must be a 6-digit integer"})

    return jsonify([{"message": "User updated successfully!"}])



@app.route('/deleteUser/<int:user_ID>', methods=["DELETE"])
def deleteUser(user_ID):
    cursor = mysql.connection.cursor()

    cursor.execute("SELECT * FROM Amazon_users WHERE user_ID = %s", (user_ID,))
    user = cursor.fetchone()

    if user is None:
        cursor.close()
        return jsonify({"error": "User_id not found"}), 404

    query = "DELETE FROM Amazon_users WHERE user_ID = %s"
    cursor.execute(query, (user_ID,))
    mysql.connection.commit()

    cursor.close()
    return jsonify({"message": "User deleted successfully!"}), 200


if __name__ == '__main__':
    app.run(port=4903,debug=True)

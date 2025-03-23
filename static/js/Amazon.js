

// let product_name = document.getElementById("product_name").value;
// let product_country_name = document.getElementById("product_country_name").value;
// let brand_name = document.getElementById("brand_name").value;
// let sort_by = document.getElementById("sort_by").value;
// let isprime = document.getElementById("isPrime").value;
// let min_price = document.getElementById("min_price").value;
// let max_price = document.getElementById("max_price").value;
// let list = document.getElementById("List");

// document.getElementById("btn").addEventListener("click", () => {
//     // validateProduct();
//     var xhr = new XMLHttpRequest();
//     var url = `https://real-time-amazon-data.p.rapidapi.com/search?query=${product_name}=1&country=${product_country_name}&sort_by=${sort_by}&is_prime=${isPrime}&min_price=${min_price}&max_price=${max_price}`;


//     xhr.open("GET", url, true);
// xhr.setRequestHeader("x-rapidapi-host", "real-time-amazon-data.p.rapidapi.com");
// xhr.setRequestHeader("x-rapidapi-key", "fc7969d2f4mshdbf13b9cf99bb2ep1908d2jsn6c68a1bbf67b");

//     xhr.onreadystatechange = function () {
//         if (xhr.readyState === 4) {
//             if (xhr.status === 200) {
//                 let response = JSON.parse(xhr.responseText);
//                 let products = response.data.products;

//                 list.innerHTML = '';
//                 for (let i = 0; i < products.length; i++) {
//                     let product_title = products[i].product_title;
//                     let product_price = products[i].product_price;
//                     let currency = products[i].currency;
//                     let product_star_rating = products[i].product_star_rating;
//                     let product_num_ratings = products[i].product_num_ratings;
//                     let product_url = products[i].product_url;
//                     let product_photo = products[i].product_photo;
//                     let coupon_text = products[i].coupon_text;

//                     let card = document.createElement("div");
//                     card.classList.add("card");

//                     card.innerHTML = `
//                         <img src="${product_photo}" alt="${product_title}">
//                         <div class="card-content">
//                             <h3>${product_title}</h3>
//                             <p>Price: ${currency} ${product_price}</p>
//                             <p>Rating: ${product_star_rating} ⭐ (${product_num_ratings} ratings)</p>
//                             ${coupon_text ? `<p>Coupon: ${coupon_text}</p>` : ''}
//                             <a href="${product_url}" target="_blank">View Product</a>
//                         </div>
//                     `;
//                     list.appendChild(card);
//                 }
//             } else {
//                 console.error("Error: " + xhr.status, xhr.statusText);
//             }
//         }
//     };

//     xhr.send();
// });

// function validateProduct(){
//     if(product_name==="" || product_name===null){
//     //   setError(product_name,'product is required');
//       alert("Product name is required");
//     }

//     else{
//         // setSucces(username);
//     }
// }

// function setError(element,message){
//    const inputGroup = element.parentElement;
//    const errorElement = inputGroup.querySelector('.error');

//    errorElement.innerText = message;
//    inputGroup.classList.add('error')
//    inputGroup.classList.remove('success')
// }

// function setSucces(element){
//     const inputGroup = element.parentElement;
//     const errorElement = inputGroup.querySelector('.error');
 
//     errorElement.innerText = '';
//     inputGroup.classList.add('success')
//     inputGroup.classList.remove('error')
//  }

 
// document.getElementById("btn").addEventListener("click", () => {

//     let product_name = document.getElementById("product_name").value;
//     let product_country_name = document.getElementById("product_country_name").value;
//     let brand_name = document.getElementById("brand_name").value;
//     let sort_by = document.getElementById("sort_by").value;
//     let isPrime = document.getElementById("isPrime").value;
//     let min_price = document.getElementById("min_price").value;
//     let max_price = document.getElementById("max_price").value;
//     let list = document.getElementById("List");

//     let productData={};
//     if(product_name!="" && product_name!=undefined){
//         productData.query = product_name;
//     }
//     else{
//         alert("Product_name is required");
//     }

//     if(product_country_name!="" && product_country_name!=undefined){
//         productData.country = product_country_name;
//     }

//     if(brand_name!="" && brand_name!=undefined){
//         productData.brand = brand_name;
//     }

//     if(sort_by!="Do not include in request"){
//         productData.sort_by = sort_by;
//     }

//     if(isPrime!="Do not include in request"){
//         productData.isprime = isPrime;
//     }

//     if(min_price!="" && min_price!=0){
//         productData.min_price =parseFloat(min_price);
//     }

//     if(max_price!="" && max_price!=0){
//         productData.max_price = parseFloat(max_price);
//     }

//     var url = "https://real-time-amazon-data.p.rapidapi.com/product-details";

//     var params = new URLSearchParams(productData);

//     var xhr = new XMLHttpRequest();
//     xhr.open("GET", url+"?"+params.toString(), true);
//     xhr.setRequestHeader("x-rapidapi-host", "real-time-amazon-data.p.rapidapi.com");
//     xhr.setRequestHeader("x-rapidapi-key", "0fd83df7c1msh738f7d2e924aac3p157482jsn550301360bde");

//     xhr.onreadystatechange = function () {
//         if (xhr.readyState === 4) {
//             if (xhr.status === 400) {
//                 let response = JSON.parse(xhr.responseText);
//                 let products = response.data.products;

//                 list.innerHTML = '';
//                 for (let i = 0; i < products.length; i++) {
//                     let product_title = products[i].product_title;
//                     let product_price = products[i].product_price;
//                     let currency = products[i].currency;
//                     let product_star_rating = products[i].product_star_rating;
//                     let product_num_ratings = products[i].product_num_ratings;
//                     let product_url = products[i].product_url;
//                     let product_photo = products[i].product_photo;
//                     let coupon_text = products[i].coupon_text;

//                     let card = document.createElement("div");
//                     card.classList.add("card");

//                     card.innerHTML = `
//                         <img src="${product_photo}" alt="${product_title}">
//                         <div class="card-content">
//                             <h3>${product_title}</h3>
//                             <p>Price: ${currency} ${product_price}</p>
//                             <p>Rating: ${product_star_rating} ⭐ (${product_num_ratings} ratings)</p>
//                             ${coupon_text ? `<p>Coupon: ${coupon_text}</p>` : ''}
//                             <a href="${product_url}" target="_blank">View Product</a>
//                         </div>
//                     `;

//                     list.appendChild(card);
//                 }
//             }
//         }
//     };

//     xhr.send();
// });


document.getElementById("btn").addEventListener("click", () => {
    let product_name = document.getElementById("product_name").value.trim();
    let product_country_name = document.getElementById("product_country_name").value.trim();
    let brand_name = document.getElementById("brand_name").value.trim();
    let sort_by = document.getElementById("sort_by").value;
    let isPrime = document.getElementById("isPrime").value;
    let min_price = document.getElementById("min_price").value.trim();
    let max_price = document.getElementById("max_price").value.trim();
    let list = document.getElementById("List");

    if (!product_name) {
        alert("Product name is required");
        return;
    }

    let productData = { query: product_name };

    if (product_country_name) productData.country = product_country_name;
    if (brand_name) productData.brand = brand_name;
    if (sort_by !== "Do not include in request") productData.sort_by = "RELEVANCE"; // Fixed spelling
    if (isPrime !== "Do not include in request") productData.isprime = isPrime.toLowerCase(); // Ensures "true"/"false"
    if (min_price) productData.min_price = parseFloat(min_price);
    if (max_price) productData.max_price = parseFloat(max_price);

    let url = "https://real-time-amazon-data.p.rapidapi.com/search";
    let params = new URLSearchParams(productData);

    let xhr = new XMLHttpRequest();
    xhr.open("GET", url + "?" + params.toString(), true);
    xhr.setRequestHeader("x-rapidapi-host", "real-time-amazon-data.p.rapidapi.com");
    xhr.setRequestHeader("x-rapidapi-key", "a61f24eae2msha2fb64e3ae6af08p120982jsnf403eb9c1c69");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                try {
                    let response = JSON.parse(xhr.responseText);

                    if (!response.data || !response.data.products) {
                        alert("No products found.");
                        return;
                    }

                    let products = response.data.products;
                    list.innerHTML = '';

                    products.forEach(product => {
                        let {
                            product_title,
                            product_price,
                            currency,
                            product_star_rating,
                            product_num_ratings,
                            product_url,
                            product_photo,
                            coupon_text
                        } = product;

                        let card = document.createElement("div");
                        card.classList.add("card");

                        card.innerHTML = `
                            <img src="${product_photo}" alt="${product_title}">
                            <div class="card-content">
                                <h3>${product_title}</h3>
                                <p>Price: ${currency} ${product_price}</p>
                                <p>Rating: ${product_star_rating} ⭐ (${product_num_ratings} ratings)</p>
                                ${coupon_text ? `<p>Coupon: ${coupon_text}</p>` : ''}
                                <a href="${product_url}" target="_blank">View Product</a>
                            </div>
                        `;

                        list.appendChild(card);
                    });
                } catch (error) {
                    console.error("Error parsing response:", error);
                    alert("Unexpected error while fetching data.");
                }
            } else {
                console.error("API Request Failed:", xhr.status, xhr.statusText);
                alert(`Error: ${xhr.status} - ${xhr.statusText}`);
            }
        }
    };

    xhr.send();
});

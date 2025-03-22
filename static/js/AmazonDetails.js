
document.getElementById("btn").addEventListener("click", () => {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://real-time-amazon-data.p.rapidapi.com/product-details?asin=B07ZPKBL9V&country=US", true);
    xhr.setRequestHeader("x-rapidapi-host", "real-time-amazon-data.p.rapidapi.com");
    xhr.setRequestHeader("x-rapidapi-key", "fc7969d2f4mshdbf13b9cf99bb2ep1908d2jsn6c68a1bbf67b");
    
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 429) {
            let response = {
                "status": "OK",
                "request_id": "b033b244-ec79-4e3f-bcf1-482a587ec00f",
                "parameters": {
                    "asin": "https://www.amazon.com/dp/B07ZPKBL9V",
                    "country": "US"
                },
                "data": {
                    "asin": "B07ZPKBL9V",
                    "product_title": "Apple iPhone 11, 64GB, (PRODUCT)RED - Fully Unlocked (Renewed)",
                    "product_price": "$204.00",
                    "product_original_price": null,
                    "currency": "USD",
                    "country": "US",
                    "product_byline": "Visit the Amazon Renewed Store",
                    "product_byline_link": "https://www.amazon.com/Amazon-Renewed/b/ref=bl_dp_s_web_12653393011?ie=UTF8&node=12653393011&field-lbr_brands_browse-bin=Amazon+Renewed",
                    "product_byline_links": [
                        "https://www.amazon.com/Amazon-Renewed/b/ref=bl_dp_s_web_12653393011?ie=UTF8&node=12653393011&field-lbr_brands_browse-bin=Amazon+Renewed"
                    ],
                    "product_star_rating": "4.2",
                    "product_num_ratings": 55070,
                    "product_url": "https://www.amazon.com/dp/B07ZPKBL9V",
                    "product_photo": "https://m.media-amazon.com/images/I/514k7uOBMwL._AC_SL1000_.jpg",
                    "product_num_offers": 45,
                    "product_availability": "Only 2 left in stock - order soon.",
                    "is_best_seller": false,
                    "is_amazon_choice": false,
                    "is_prime": false,
                    "climate_pledge_friendly": true,
                    "sales_volume": "400+ bought in past month",
                    "about_product": [
                        "This phone is unlocked and compatible with any carrier of choice on GSM and CDMA networks (e.g. AT&T, T-Mobile, Sprint, Verizon, US Cellular, Cricket, Metro, Tracfone, Mint Mobile, etc.).",
                        "Tested for battery health and guaranteed to have a minimum battery capacity of 80%.",
                        "Successfully passed a full diagnostic test which ensures like-new functionality and removal of any prior-user personal information."
                    ],
                    "product_description": "The iPhone 11 features a 6.1-inch LCD display that Apple calls a \"Liquid Retina HD Display.\" It features a 1792 x 828 resolution at 326ppi, a 1400:1 contrast ratio, 625 nits max brightness, True Tone support for adjusting the white balance to the ambient lighting, and wide color support for true-to-life colors. The iPhone 11 is available in six different colors: White, Black, Yellow, (PRODUCT)RED, Purple, and Green.",
                    "product_information": {
                        "Product Dimensions": "7 x 5 x 4 inches",
                        "Item Weight": "6.7 ounces",
                        "ASIN": "B07ZPKBL9V",
                        "Item model number": "iPhone 11",
                        "Batteries": "1 Lithium Ion batteries required. (included)",
                        "Best Sellers Rank": "#509 in Cell Phones & Accessories (See Top 100 in Cell Phones & Accessories)   #6 in Renewed Smartphones   #7 in Cell Phones",
                        "Is Discontinued By Manufacturer": "No",
                        "OS": "iOS 16",
                        "RAM": "4 GB",
                        "Wireless communication technologies": "Cellular",
                        "Connectivity technologies": "Bluetooth, Wi-Fi, USB, NFC",
                        "GPS": "True",
                        "Special features": "Built-In GPS",
                        "Other display features": "Wireless",
                        "Human Interface Input": "Touchscreen",
                        "Scanner Resolution": "1792x828",
                        "Other camera features": "Front, Rear",
                        "Form Factor": "Smartphone",
                        "Color": "Red",
                        "Battery Power Rating": "3600",
                        "Whats in the box": "Apple iPhone, USB Data Cable",
                        "Manufacturer": "Apple Computer",
                        "Date First Available": "October 28, 2019",
                        "Memory Storage Capacity": "64 GB",
                        "Standing screen display size": "6.1 Inches",
                        "Ram Memory Installed Size": "4 GB",
                        "Weight": "0.19 Kilograms"
                    },
                    "product_photos": [
                        "https://m.media-amazon.com/images/I/514k7uOBMwL._AC_SL1000_.jpg",
                        "https://m.media-amazon.com/images/I/71fBbZoMdGL._AC_SL1500_.jpg",
                        "https://m.media-amazon.com/images/I/61PdhJpC4NL._AC_SL1500_.jpg",
                        "https://m.media-amazon.com/images/I/61Ed2L5egWL._AC_SL1500_.jpg"
                    ],
                    "product_videos": [],
                    "user_uploaded_videos": [
                        {
                            "id": "amzn1.vse.video.063c3d12b5a4478587d380594aebb49a",
                            "asin": "063c3d12b5a4478587d380594aebb49a",
                            "product_asin": "B07ZPKBL9V",
                            "parent_asin": "B097M74GSR",
                            "related_products": "B0CMZ5LT14,B0CHBNXK14,B07ZPKN6YR,B0CMZ61V7R,B0CJBJLFZ9",
                            "title": "Breakable screen? Is it worth the upgrade? Lets test it!",
                            "profile_image_url": "https://m.media-amazon.com/images/I/D1d2ZxH4ngL._CR0,663,2733,2733_._FMjpg_._SL34_.jpg",
                            "profile_link": "https://www.amazon.com/shop/2beerlovers",
                            "public_name": "Kim & Karym",
                            "creator_type": "Influencer",
                            "vendor_code": "2beerlovers:shop",
                            "vendor_name": "Kim & Karym",
                            "vendor_tracking_id": "onamzkaryma05-20",
                            "video_image_id": "61ghDbRb-lL",
                            "video_image_url": "https://m.media-amazon.com/images/I/61ghDbRb-lL._CR2,0,1276,720_SR684,386_.jpg",
                            "video_image_url_unchanged": "https://m.media-amazon.com/images/I/61ghDbRb-lL.jpg",
                            "video_image_width": "1280",
                            "video_image_height": "720",
                            "video_image_extension": "jpg",
                            "video_url": "https://m.media-amazon.com/images/S/vse-vms-transcoding-artifact-us-east-1-prod/fb1b1387-0447-4122-93d7-10bb91087baf/default.jobtemplate.hls.m3u8",
                            "video_previews": "https://m.media-amazon.com/images/S/vse-vms-transcoding-artifact-us-east-1-prod/d2f51c72-0f8a-46ab-ad09-c9b45afea5a7/videopreview.jobtemplate.mp4.default.mp4,342X192P_20HZ_350KBPS_VER_1_0,video/mp4,https://m.media-amazon.com/images/S/vse-vms-transcoding-artifact-us-east-1-prod/d2f51c72-0f8a-46ab-ad09-c9b45afea5a7/videopreview.jobtemplate.mp4.default.mp4,default,video/mp4,https://m.media-amazon.com/images/S/vse-vms-transcoding-artifact-us-east-1-prod/d2f51c72-0f8a-46ab-ad09-c9b45afea5a7/56e612b2-b30f-4682-8b41-227b949e6739/063c3d12b5a4478587d380594aebb49a_0-100-0-100_gandalf_preview.m3u8,gandalf,application/x-mpegURL",
                            "video_mime_type": "application/x-mpegURL"
                        },
                        {
                            "id": "amzn1.vse.video.0f294a8f9fc2427e9fcc8bc8cbd4b6a6",
                            "asin": "0f294a8f9fc2427e9fcc8bc8cbd4b6a6",
                            "product_asin": "B07ZPKBL9V",
                            "parent_asin": "B097M74GSR",
                            "related_products": "B07ZPKN6YR",
                            "title": "Still Feels Like Back In The Days!",
                            "profile_image_url": "https://m.media-amazon.com/images/I/C1uQ-mVCqBL._CR300,686,1716,1716_._FMjpg_._SL34_.jpg",
                            "profile_link": "https://www.amazon.com/shop/mrniceguy91111",
                            "public_name": "Mrniceguy91111",
                            "creator_type": "Influencer",
                            "vendor_code": "mrniceguy91111:shop",
                            "vendor_name": "Mrniceguy91111",
                            "vendor_tracking_id": "onamzcris0c70-20",
                            "video_image_id": "A1pTwcY-coL",
                            "video_image_url": "https://m.media-amazon.com/images/I/A1pTwcY-coL._CR0,0,4032,2275_SR684,386_.jpg",
                            "video_image_url_unchanged": "https://m.media-amazon.com/images/I/A1pTwcY-coL.jpg",
                            "video_image_width": "4032",
                            "video_image_height": "3024",
                            "video_image_extension": "jpg",
                            "video_url": "https://m.media-amazon.com/images/S/vse-vms-transcoding-artifact-us-east-1-prod/81a30aa2-63c2-4484-8f13-01c81981552f/default.jobtemplate.hls.m3u8",
                            "video_previews": "https://m.media-amazon.com/images/S/vse-vms-transcoding-artifact-us-east-1-prod/1f185404-f8fb-4b65-88bb-e0d2efbbbcee/videopreview.jobtemplate.mp4.default.mp4,342X192P_20HZ_350KBPS_VER_1_0,video/mp4,https://m.media-amazon.com/images/S/vse-vms-transcoding-artifact-us-east-1-prod/1f185404-f8fb-4b65-88bb-e0d2efbbbcee/videopreview.jobtemplate.mp4.default.mp4,default,video/mp4",
                            "video_mime_type": "application/x-mpegURL"
                        },
                        {
                            "id": "amzn1.vse.video.00384ddb6b2c4dc3be291424c668a34a",
                            "asin": "00384ddb6b2c4dc3be291424c668a34a",
                            "product_asin": "B07ZPKBL9V",
                            "parent_asin": "B097M74GSR",
                            "related_products": "B07ZPKBL9V",
                            "title": "This phone is garbage!!",
                            "profile_image_url": "https://m.media-amazon.com/images/S/amazon-avatars-global/f497691c-7c8f-4f88-9cfa-57b646290e35._CR0%2C51%2C230%2C230_UX460_._SL34_.jpg",
                            "profile_link": "https://www.amazon.com/gp/profile/amzn1.account.AHH454A6IXDEZPX4CFEO3UFAI5HQ",
                            "public_name": "taneika tigner",
                            "creator_type": "Customer",
                            "vendor_code": "AOD60",
                            "vendor_name": "taneika tigner",
                            "vendor_tracking_id": "",
                            "video_image_id": "51wKJLe2QML",
                            "video_image_url": "https://m.media-amazon.com/images/I/51wKJLe2QML._CR0,0,720,406_SR684,386_.jpg",
                            "video_image_url_unchanged": "https://m.media-amazon.com/images/I/51wKJLe2QML.jpg",
                            "video_image_width": "720",
                            "video_image_height": "1280",
                            "video_image_extension": "jpg",
                            "video_url": "https://m.media-amazon.com/images/S/vse-vms-transcoding-artifact-us-east-1-prod/e702648d-4f5b-4a35-9f3b-3b410b782578/default.vertical.jobtemplate.hls.m3u8",
                            "video_previews": "https://m.media-amazon.com/images/S/vse-vms-transcoding-artifact-us-east-1-prod/0cda938e-1081-4e5a-b164-49accd396851/videopreview.jobtemplate.mp4.default.mp4,342X192P_20HZ_350KBPS_VER_1_0,video/mp4,https://m.media-amazon.com/images/S/vse-vms-transcoding-artifact-us-east-1-prod/0cda938e-1081-4e5a-b164-49accd396851/videopreview.jobtemplate.mp4.default.mp4,default,video/mp4",
                            "video_mime_type": "application/x-mpegURL"
                        },
                        {
                            "id": "amzn1.vse.video.0e259e3623954549972506d7abbc960f",
                            "asin": "0e259e3623954549972506d7abbc960f",
                            "product_asin": "B07ZPKBL9V",
                            "parent_asin": "B097M74GSR",
                            "related_products": "B07ZPKBL9V,B07RV48RR1,B0BHNC3M5C",
                            "title": "iPhone X Vs iPhone 11 Full Comparison #thisorthat",
                            "profile_image_url": "https://images-na.ssl-images-amazon.com/images/S/influencer-profile-image-prod/logo/jasenf_1686409497759_original._FMjpg_._SL34_.jpeg",
                            "profile_link": "https://www.amazon.com/shop/jasenf",
                            "public_name": "Reviews 4 Days",
                            "creator_type": "Influencer",
                            "vendor_code": "jasenf:shop",
                            "vendor_name": "Reviews 4 Days",
                            "vendor_tracking_id": "onamznadegefr-20",
                            "video_image_id": "81YUI4HtNWL",
                            "video_image_url": "https://m.media-amazon.com/images/I/81YUI4HtNWL._CR7,0,1271,717_SR684,386_.jpg",
                            "video_image_url_unchanged": "https://m.media-amazon.com/images/I/81YUI4HtNWL.jpg",
                            "video_image_width": "1284",
                            "video_image_height": "717",
                            "video_image_extension": "jpg",
                            "video_url": "https://m.media-amazon.com/images/S/vse-vms-transcoding-artifact-us-east-1-prod/f5cd4d6d-90c5-4d78-946d-5df3c7418bf8/default.jobtemplate.hls.m3u8",
                            "video_previews": "https://m.media-amazon.com/images/S/vse-vms-transcoding-artifact-us-east-1-prod/b622d2b6-7bc4-40a6-8b2e-9af207182da7/videopreview.jobtemplate.mp4.default.mp4,342X192P_20HZ_350KBPS_VER_1_0,video/mp4,https://m.media-amazon.com/images/S/vse-vms-transcoding-artifact-us-east-1-prod/b622d2b6-7bc4-40a6-8b2e-9af207182da7/videopreview.jobtemplate.mp4.default.mp4,default,video/mp4,https://m.media-amazon.com/images/S/vse-vms-transcoding-artifact-us-east-1-prod/b622d2b6-7bc4-40a6-8b2e-9af207182da7/13272170-5c7c-4e6d-8eab-ad56f9642fb7/0e259e3623954549972506d7abbc960f_0-100-0-100_gandalf_preview.m3u8,gandalf,application/x-mpegURL",
                            "video_mime_type": "application/x-mpegURL"
                        },
                        {
                            "id": "amzn1.vse.video.0c3cb707fb604a6198d1e14715e11041",
                            "asin": "0c3cb707fb604a6198d1e14715e11041",
                            "product_asin": "B07ZPKBL9V",
                            "parent_asin": "B097M74GSR",
                            "related_products": "B07ZPKBL9V",
                            "title": "Phone Stopped Working After Warranty Period",
                            "profile_image_url": "https://m.media-amazon.com/images/S/amazon-avatars-global/fdf1f010-b659-4ad8-b68f-cc348abaec15._CR0%2C26%2C281%2C281_UX460_._SL34_.jpg",
                            "profile_link": "https://www.amazon.com/gp/profile/amzn1.account.AFCXFHWXYNAHVVID6QJEDYJS4UAA",
                            "public_name": "Lady Banks",
                            "creator_type": "Customer",
                            "vendor_code": "AOD60",
                            "vendor_name": "Lady Banks",
                            "vendor_tracking_id": "",
                            "video_image_id": "51rtA006RPL",
                            "video_image_url": "https://m.media-amazon.com/images/I/51rtA006RPL._CR0,0,720,406_SR684,386_.jpg",
                            "video_image_url_unchanged": "https://m.media-amazon.com/images/I/51rtA006RPL.jpg",
                            "video_image_width": "720",
                            "video_image_height": "1280",
                            "video_image_extension": "jpg",
                            "video_url": "https://m.media-amazon.com/images/S/vse-vms-transcoding-artifact-us-east-1-prod/ec4448f2-2132-4c86-af4e-08cbbdbac86e/default.vertical.jobtemplate.hls.m3u8",
                            "video_previews": "https://m.media-amazon.com/images/S/vse-vms-transcoding-artifact-us-east-1-prod/014c2d0c-ee53-4e73-92ef-529f4bcc3505/videopreview.jobtemplate.mp4.default.mp4,342X192P_20HZ_350KBPS_VER_1_0,video/mp4,https://m.media-amazon.com/images/S/vse-vms-transcoding-artifact-us-east-1-prod/014c2d0c-ee53-4e73-92ef-529f4bcc3505/videopreview.jobtemplate.mp4.default.mp4,default,video/mp4",
                            "video_mime_type": "application/x-mpegURL"
                        },
                        {
                            "id": "amzn1.vse.video.00e94dfc3b2049e7adf73d46c75b20bc",
                            "asin": "00e94dfc3b2049e7adf73d46c75b20bc",
                            "product_asin": "B07ZPKBL9V",
                            "parent_asin": "B097M74GSR",
                            "related_products": "B0CTD3SNPD,B0CTN3DMK7,B07ZPKN6YR",
                            "title": "Samsung Galaxy A15 5G VS Apple Iphone 11",
                            "profile_image_url": "https://images-na.ssl-images-amazon.com/images/S/influencer-profile-image-prod/logo/milob_1657646839908_original._CR418,0,533,533_._FMjpg_._SL34_.jpeg",
                            "profile_link": "https://www.amazon.com/shop/milob.",
                            "public_name": "Milo B.",
                            "creator_type": "Influencer",
                            "vendor_code": "milob.:shop",
                            "vendor_name": "Milo B.",
                            "vendor_tracking_id": "onamzmilob08-20",
                            "video_image_id": "91DFmIXaJwL",
                            "video_image_url": "https://m.media-amazon.com/images/I/91DFmIXaJwL._CR19,0,3771,2128_SR684,386_.jpg",
                            "video_image_url_unchanged": "https://m.media-amazon.com/images/I/91DFmIXaJwL.jpg",
                            "video_image_width": "3808",
                            "video_image_height": "2128",
                            "video_image_extension": "jpg",
                            "video_url": "https://m.media-amazon.com/images/S/vse-vms-transcoding-artifact-us-east-1-prod/02720c02-15e6-45d4-be79-e17d680095f3/default.jobtemplate.hls.m3u8",
                            "video_previews": "https://m.media-amazon.com/images/S/vse-vms-transcoding-artifact-us-east-1-prod/7b368fc0-12b1-4b8b-9bea-9f1ac77a69fe/videopreview.jobtemplate.mp4.default.mp4,342X192P_20HZ_350KBPS_VER_1_0,video/mp4,https://m.media-amazon.com/images/S/vse-vms-transcoding-artifact-us-east-1-prod/7b368fc0-12b1-4b8b-9bea-9f1ac77a69fe/videopreview.jobtemplate.mp4.default.mp4,default,video/mp4",
                            "video_mime_type": "application/x-mpegURL"
                        },
                        {
                            "id": "amzn1.vse.video.0f134276469a4408bd7be4481d210471",
                            "asin": "0f134276469a4408bd7be4481d210471",
                            "product_asin": "B07ZPKBL9V",
                            "parent_asin": "B097M74GSR",
                            "related_products": "B07ZPKN6YR",
                            "title": "iPhone 11 Plus Supcase UB Pro Case Review",
                            "profile_image_url": "https://images-na.ssl-images-amazon.com/images/S/influencer-profile-image-prod/logo/samstechstuff_1638327466198_original._CR21,24,567,567_._FMjpg_._SL34_.jpeg",
                            "profile_link": "https://www.amazon.com/shop/samstechstuff",
                            "public_name": "SamsTechStuff",
                            "creator_type": "Influencer",
                            "vendor_code": "samstechstuff:shop",
                            "vendor_name": "SamsTechStuff",
                            "vendor_tracking_id": "onamzsamstech-20",
                            "video_image_id": "81W6cvpiR2L",
                            "video_image_url": "https://m.media-amazon.com/images/I/81W6cvpiR2L._CR3,0,2548,1438_SR684,386_.jpg",
                            "video_image_url_unchanged": "https://m.media-amazon.com/images/I/81W6cvpiR2L.jpg",
                            "video_image_width": "2554",
                            "video_image_height": "1438",
                            "video_image_extension": "jpg",
                            "video_url": "https://m.media-amazon.com/images/S/vse-vms-transcoding-artifact-us-east-1-prod/ead331bb-5d66-4444-b437-22e72459dcf7/default.jobtemplate.hls.m3u8",
                            "video_previews": "https://m.media-amazon.com/images/S/vse-vms-transcoding-artifact-us-east-1-prod/e21953b3-2963-4086-a854-e07852a79e92/videopreview.jobtemplate.mp4.default.mp4,342X192P_20HZ_350KBPS_VER_1_0,video/mp4,https://m.media-amazon.com/images/S/vse-vms-transcoding-artifact-us-east-1-prod/e21953b3-2963-4086-a854-e07852a79e92/videopreview.jobtemplate.mp4.default.mp4,default,video/mp4",
                            "video_mime_type": "application/x-mpegURL"
                        },
                        {
                            "id": "amzn1.vse.video.0b036a95c21545c980fdf712cd1337c9",
                            "asin": "0b036a95c21545c980fdf712cd1337c9",
                            "product_asin": "B07ZPKBL9V",
                            "parent_asin": "B097M74GSR",
                            "related_products": "B07C357FSJ,B07ZPKBL9V,B08D969C67",
                            "title": "iPhone 11 Vs iPhone X Honest Review #thisorthat",
                            "profile_image_url": "https://images-na.ssl-images-amazon.com/images/S/influencer-profile-image-prod/logo/jasenf_1686409497759_original._FMjpg_._SL34_.jpeg",
                            "profile_link": "https://www.amazon.com/shop/jasenf",
                            "public_name": "Reviews 4 Days",
                            "creator_type": "Influencer",
                            "vendor_code": "jasenf:shop",
                            "vendor_name": "Reviews 4 Days",
                            "vendor_tracking_id": "onamznadegefr-20",
                            "video_image_id": "81GyKP9wJCL",
                            "video_image_url": "https://m.media-amazon.com/images/I/81GyKP9wJCL._CR31,0,1079,609_SR684,386_.jpg",
                            "video_image_url_unchanged": "https://m.media-amazon.com/images/I/81GyKP9wJCL.jpg",
                            "video_image_width": "1142",
                            "video_image_height": "609",
                            "video_image_extension": "jpg",
                            "video_url": "https://m.media-amazon.com/images/S/vse-vms-transcoding-artifact-us-east-1-prod/5420dedf-4ddb-41b8-a701-ccb571f8f276/default.jobtemplate.hls.m3u8",
                            "video_previews": "https://m.media-amazon.com/images/S/vse-vms-transcoding-artifact-us-east-1-prod/bc9ad539-4805-4c6a-a912-ac4a6dbd19a2/videopreview.jobtemplate.mp4.default.mp4,342X192P_20HZ_350KBPS_VER_1_0,video/mp4,https://m.media-amazon.com/images/S/vse-vms-transcoding-artifact-us-east-1-prod/bc9ad539-4805-4c6a-a912-ac4a6dbd19a2/videopreview.jobtemplate.mp4.default.mp4,default,video/mp4,https://m.media-amazon.com/images/S/vse-vms-transcoding-artifact-us-east-1-prod/bc9ad539-4805-4c6a-a912-ac4a6dbd19a2/264a25ed-1902-4e47-94ab-adb7dc06c034/0b036a95c21545c980fdf712cd1337c9_0-100-0-100_gandalf_preview.m3u8,gandalf,application/x-mpegURL",
                            "video_mime_type": "application/x-mpegURL"
                        },
                        {
                            "id": "amzn1.vse.video.0a8c633282384cc982a2ae9dc597acee",
                            "asin": "0a8c633282384cc982a2ae9dc597acee",
                            "product_asin": "B07ZPKBL9V",
                            "parent_asin": "B097M74GSR",
                            "related_products": "B07ZPL6Y2D,B08BHRNSFN,B08PNN2SKF,B08PP9FM9N,B099RCQZ8Z",
                            "title": "Iphone 11 VS Iphone 12 Mini  Comparison In 2024",
                            "profile_image_url": "https://images-na.ssl-images-amazon.com/images/S/influencer-profile-image-prod/logo/milob_1657646839908_original._CR418,0,533,533_._FMjpg_._SL34_.jpeg",
                            "profile_link": "https://www.amazon.com/shop/milob.",
                            "public_name": "Milo B.",
                            "creator_type": "Influencer",
                            "vendor_code": "milob.:shop",
                            "vendor_name": "Milo B.",
                            "vendor_tracking_id": "onamzmilob08-20",
                            "video_image_id": "911mFasLZ5L",
                            "video_image_url": "https://m.media-amazon.com/images/I/911mFasLZ5L._CR20,0,3764,2124_SR684,386_.jpg",
                            "video_image_url_unchanged": "https://m.media-amazon.com/images/I/911mFasLZ5L.jpg",
                            "video_image_width": "3804",
                            "video_image_height": "2124",
                            "video_image_extension": "jpg",
                            "video_url": "https://m.media-amazon.com/images/S/vse-vms-transcoding-artifact-us-east-1-prod/5654da20-2056-4bf3-8b1d-6c866e60e789/default.jobtemplate.hls.m3u8",
                            "video_previews": "https://m.media-amazon.com/images/S/vse-vms-transcoding-artifact-us-east-1-prod/1898d700-7b45-4425-8f29-3c9e3552848a/videopreview.jobtemplate.mp4.default.mp4,342X192P_20HZ_350KBPS_VER_1_0,video/mp4,https://m.media-amazon.com/images/S/vse-vms-transcoding-artifact-us-east-1-prod/1898d700-7b45-4425-8f29-3c9e3552848a/videopreview.jobtemplate.mp4.default.mp4,default,video/mp4,https://m.media-amazon.com/images/S/vse-vms-transcoding-artifact-us-east-1-prod/1898d700-7b45-4425-8f29-3c9e3552848a/087226c7-c85a-4511-a8ff-2143ca792309/0a8c633282384cc982a2ae9dc597acee_0-100-0-100_gandalf_preview.m3u8,gandalf,application/x-mpegURL",
                            "video_mime_type": "application/x-mpegURL"
                        },
                        {
                            "id": "amzn1.vse.video.0269f985bbfa4aae92f4f60c2b27076b",
                            "asin": "0269f985bbfa4aae92f4f60c2b27076b",
                            "product_asin": "B07ZPKBL9V",
                            "parent_asin": "B097M74GSR",
                            "related_products": "B07ZPKR714,B08BHTDLJR,B099RCQZ8Z",
                            "title": "iPhone 11 Unboxing and Full Overview Gotta Watch This !!!",
                            "profile_image_url": "https://images-na.ssl-images-amazon.com/images/S/influencer-profile-image-prod/logo/milob_1657646839908_original._CR418,0,533,533_._FMjpg_._SL34_.jpeg",
                            "profile_link": "https://www.amazon.com/shop/milob.",
                            "public_name": "Milo B.",
                            "creator_type": "Influencer",
                            "vendor_code": "milob.:shop",
                            "vendor_name": "Milo B.",
                            "vendor_tracking_id": "onamzmilob08-20",
                            "video_image_id": "917jyj1s-XL",
                            "video_image_url": "https://m.media-amazon.com/images/I/917jyj1s-XL._CR18,0,3774,2130_SR684,386_.jpg",
                            "video_image_url_unchanged": "https://m.media-amazon.com/images/I/917jyj1s-XL.jpg",
                            "video_image_width": "3810",
                            "video_image_height": "2130",
                            "video_image_extension": "jpg",
                            "video_url": "https://m.media-amazon.com/images/S/vse-vms-transcoding-artifact-us-east-1-prod/b5b386b0-d8f4-4de1-a8b7-857f0576f8ed/default.jobtemplate.hls.m3u8",
                            "video_previews": "https://m.media-amazon.com/images/S/vse-vms-transcoding-artifact-us-east-1-prod/c965aea5-fc84-4738-89c4-475af8cc0a5f/videopreview.jobtemplate.mp4.default.mp4,342X192P_20HZ_350KBPS_VER_1_0,video/mp4,https://m.media-amazon.com/images/S/vse-vms-transcoding-artifact-us-east-1-prod/c965aea5-fc84-4738-89c4-475af8cc0a5f/videopreview.jobtemplate.mp4.default.mp4,default,video/mp4,https://m.media-amazon.com/images/S/vse-vms-transcoding-artifact-us-east-1-prod/c965aea5-fc84-4738-89c4-475af8cc0a5f/8754ec77-b052-4a86-a9eb-b25e469423fa/0269f985bbfa4aae92f4f60c2b27076b_0-100-0-100_gandalf_preview.m3u8,gandalf,application/x-mpegURL",
                            "video_mime_type": "application/x-mpegURL"
                        }
                    ],
                    "has_video": false,
                    "product_details": {
                        "Brand": "Apple",
                        "Operating System": "iOS 16",
                        "Ram Memory Installed Size": "4 GB",
                        "CPU Model": "A13",
                        "CPU Speed": "690 MHz",
                        "Memory Storage Capacity": "64 GB",
                        "Screen Size": "6.1 Inches",
                        "Resolution": "1792x828",
                        "Refresh Rate": "60 Hz",
                        "Model Name": "iPhone 11"
                    },
                    "customers_say": "Customers find the cell phone functional and reliable. They appreciate its good looks and value for money. However, some customers dislike the sound quality. Opinions differ on battery life, screen scratches, and charging capabilities.",
                    "delivery": "FREE delivery February 20 - 21. Details Or fastest delivery Tomorrow, February 20. Order within 8 hrs 54 mins. Details",
                    "primary_delivery_time": "February 20 - 21",
                    "category": {
                        "id": "aps",
                        "name": "All Departments"
                    },
                    "category_path": [
                        {
                            "id": "2335752011",
                            "name": "Cell Phones & Accessories",
                            "link": "https://www.amazon.com/cell-phones-service-plans-accessories/b/ref=dp_bc_aui_C_1?ie=UTF8&node=2335752011"
                        },
                        {
                            "id": "7072561011",
                            "name": "Cell Phones",
                            "link": "https://www.amazon.com/cell-phone-devices/b/ref=dp_bc_aui_C_2?ie=UTF8&node=7072561011"
                        }
                    ],
                    "product_variations": [],
                    "has_aplus": false,
                    "has_brandstory": false
                }
            };
            let Product_data = response.data;

            let container = document.getElementById("MainContainer");
            

            let product_title = Product_data.product_title;
            let product_price = Product_data.product_price;
            let product_original_price = Product_data.product_original_price;
            let currency = Product_data.currency;
            let country = Product_data.country;
            let product_byline = Product_data.product_byline;
            let product_byline_link = Product_data.product_byline_link;
            let product_star_rating = Product_data.product_star_rating;
            let product_num_ratings = Product_data.product_num_ratings;
            let product_url = Product_data.product_url;
            let product_availability = Product_data.product_availability;
            let product_num_offers = Product_data.product_num_offers;
            let sales_volume = Product_data.sales_volume;
            let about_product = Product_data.about_product[0];
            let product_description = Product_data.product_description;
            let Product_Dimensions = Product_data.product_information["Product Dimensions"];
            let Item_Weight = Product_data.product_information["Item Weight"];
            let Item_model_number = Product_data.product_information["Item model number"];
            let Batteries = Product_data.product_information["Batteries"];
            let Best_Seller_Rank = Product_data.product_information["Best Seller Rank"];
            let Is_Manufacturer = Product_data.product_information["Is Discontinued By Manufacturer"];
            let OS = Product_data.product_information["OS"];
            let RAM = Product_data.product_information["RAM"];
            let Wireless = Product_data.product_information["Wireless communication technologies"];
            let Connectivity = Product_data.product_information["Connectivity technologies"];
            let GPS = Product_data.product_information["GPS"];
            let Special_features = Product_data.product_information["Special features"];
            let Display_features = Product_data.product_information["Other display features"];
            let Human_Interface = Product_data.product_information["Human Interface Input"];
            let Scanner_Resolution = Product_data.product_information["Scanner Resolution"];
            let camera_features = Product_data.product_information["Other camera features"];
            let Form_Factor=Product_data.product_information["Smartphone"];
            let Color = Product_data.product_information["Color"];
            let Battery_maah = Product_data.product_information["Battery Power Rating"];
            let Box = Product_data.product_information["Whats in the box"];
            let FirstDateAvaliable = Product_data.product_information["Date First Available"];
            let MemoryStorage = Product_data.product_information["Memory Storage Capacity"];
            let Ram_Memory = Product_data.product_information["Ram Memory Installed Size"];
            let Display_Size = Product_data.product_information["Standing screen display size"];
            let Weight = Product_data.product_information["Weight"];
            let Product_Photos = Product_data.product_photos;

            let photoObj = {};
            for(let i=0;i<Product_Photos.length;i++){
               photoObj["photo"+i] = Product_Photos[i];
            }
            

             container.innerHTML = `
               <span>
                    <img src=${Product_Photos} alt=${product_title}>
               </span>
               <div id="Content>
                   <h1>${product_title}</h1>
                   <br>
                   <a herf="${product_byline_link}">${product_byline}</a>
                   <p>Rating: ${product_star_rating} ⭐ (${product_num_ratings} ratings) | <a href="${product_url}">Search this page</p>
                   <hr>
                   <br>
                   <h1>${product_price} -/only</h1>
                   <h2 id="originalPrice">${product_original_price}</h2>
                   <hr>
                   <br>
                   <div id="orderContent">
                   <h2>⏳ Hurry up!</h2>
                   <p>product_num_offers:${product_num_offers}</p>
                   <p>product_availability: ${product_availability}</p>
                   <div>
                   <p>color: ${Color}</p>
               </div>
             `;

        } 
    };
    
    xhr.send();
    
});

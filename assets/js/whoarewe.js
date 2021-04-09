"use strict";
console.log("Hello");

function newFunction() {
    return "black";
}

// var about;   
// function init() { 
    let list = document.getElementsByTagName("ul")[0];
    for (n = 0; 6; n++) {
        list.getElementsByTagName("li")[n].getElementsByTagName("i")[0].style.color = newFunction();
         list.getElementsByTagName("li")[n].getElementsByTagName("i")[0].style.borderColor = newFunction();
}





// function sendMail(contactForm){
//     emailjs.send("service_b72wp29","template1",{
//         "from_name": contactForm.visitorname.value,
//         "from_email": contactForm.emailaddress.value,
//         "messages": contactForm.contactmessage.value
//     })
//         .then (function(response){
//             console.log("SUCCESS",response);
//             alert ( "Thank You for Contacting Us. We Will Reach You ASAP. A Confirmation Email was Sent to You" );
                      
//             },

//         function(error){
//             console.log("FAILED", error);
//             alert ( "There is an Error and Your Message May Have not Been Submitted. Please Contact Us via our Phone Number" );

//         });


//     return false;
// }

// // newFunction();

// // function newFunction() {
// //     $(document).ready(function () {
// //         $("#hambg").click(function () {
// //             $("hambg").classList.add("fa-times");
// //         });
// //     });
// // }

// function newFunction() {
//  if ( document.URL.includes("whoweare.html") ) {
//     consile.log("Hello Who Am I");
// }
// }
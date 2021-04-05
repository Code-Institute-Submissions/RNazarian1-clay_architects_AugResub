console.log("Hello");
function sendMail(contactForm){
    emailjs.send("service_b72wp29","template1",{
        "from_name": contactForm.visitorname.value,
        "from_email": contactForm.emailaddress.value,
        "message": contactForm.contactmessage.value
    })
        .then (function(response){
            console.log("SUCCESS",response);
        },

        function(error){
            console.log("FAILED", error);
        

        });


    return false;
}
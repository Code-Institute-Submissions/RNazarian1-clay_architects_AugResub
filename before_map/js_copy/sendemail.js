console.log("Hello");
function sendMail(contactForm){
    emailjs.send("service_b72wp29","template1",{
        "from_name": contactForm.visitorname.value,
        "from_email": contactForm.emailaddress.value,
        "messages": contactForm.contactmessage.value
    })
        .then (function(response){
            console.log("SUCCESS",response);
            alert ( "Thank You for Contacting Us. We Will Reach You ASAP. A Confirmation Email was Sent to You" );
                      
            },

        function(error){
            console.log("FAILED", error);
            alert ( "There is an Error and Your Message May Have not Been Submitted. Please Contact Us via our Phone Number" );

        });


    return false;
}


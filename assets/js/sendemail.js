console.log("Hello");
function sendMail(contactForm){
    emailjs.send("service_2f52xro","template1",{
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "message": contactForm.projectsummary.value
    })
        .then (function(response){
            console.log("SUCCESS",response);
        },

        function(error){
            console.log("FAILED", error);
        

        });


    return false;
}
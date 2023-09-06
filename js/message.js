function sendMail() {
    
    var params={
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    
    };


        const serviceId = "service_wxmr6p4";
        const templateId ="template_8glqc5f";

        emailjs.send(serviceId,templateId,params).then(
            (res)=>{
                document.getElementById("name").value=""
                document.getElementById("email").value=""
                document.getElementById("subject").value=""
                document.getElementById("message").value=""
             
                console.log(res);
                alert("Your message send successfully");


            }).catch((err)=>console.log(err));

    }

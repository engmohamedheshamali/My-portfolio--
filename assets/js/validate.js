function sendMessage(){
    (function(){
       emailjs.init("VWWHWC2Fh4tRzkx2g"); 
    })();

var serviceID ="service_rismwaf" ;
var templateID = "template_0e92kur";


var params = {
   
    sendername:document.querySelector("#name").value ,
    senderemail:document.querySelector("#email").value ,
    number:document.querySelector("#phone").value,
    message:document.querySelector("#message").value,
};
    emailjs.send(serviceID ,templateID ,params)
    .then (res =>{
       alert('thank you ,' + params['sendername'] + '!your message has been sent.');
    })
.catch();    
}

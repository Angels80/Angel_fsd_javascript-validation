
     
        let form=document.getElementById("form");
        let email=document.getElementById("inputEmail4");
        let error=document.getElementById("error");
        let err=document.getElementById("err");
        let pass=document.getElementById("pass");
        let regexp= /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z{2,3}])(.[a-z{2,3}])?$/
        
        function validate(){
           
       
        if(email.value==""){
            document.getElementById("error").innerHTML="Please provide email..";
            error.style.color="red";
            return false;
        }

        if(pass.value==""){
            // alert("Please prvide password.");
            document.getElementById("err").innerHTML="Please provide password..";
            return false;
        }
          // email validation
        if(regexp.test(email.value)){
       
            error.innerHTML="valid Email";
            error.style.color="green";
            return true;
           }else{

           error.innerHTML="invalid Email";
           error.style.color="red";
           return false;
         }

       
    
}


        let email=document.getElementById("inputEmail4").value;
        let error=document.getElementById("error").value;
        let err=document.getElementById("err").value;
        let pass=document.getElementById("pass").value;
        
        function validate(){

        // alert("hai");
        if(email==""){
            document.getElementById("error").innerHTML="*Please provide email..";
            error.style.color="red";
            return false;
        }

        if(num==""){
            document.getElementById("err").innerHTML="Please provide your number..";
            return false;
        }
        
    
}

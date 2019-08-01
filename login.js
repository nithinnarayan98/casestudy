$(document).ready(function()
{
    $("#login").click(function(){
        var name=$('#usn').val();
        var pass=$("#psd").val();
        console.log(name);
        console.log(pass);
        function validate(n,p,callback){
        if(name=="admin" && pass=="12345" )
      {  callback(0);
    }
    
   else { callback(1);
   }
      }
      validate(name,pass,(res)=>{
        if(res==1)
     {
         alert("invalid username or password");
     } 
  else if (res==0) {
      window.location.href="main.html";
  }
});
    });
});
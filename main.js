$(document).ready(function(){
var count=0;


    $.ajax({
        type:"GET",
        url:"https://jsonplaceholder.typicode.com/todos",
        success:function(data){
           //var count=0;
           
            var output="";
            for(var i in data){
                var title=data[i].title;
                 var complete=data[i].completed

                var id=data[i].id;
                if(complete==true){
                    output+="<div class='col col-sm-6 col-12'><div class='card-body'>";
                    output+="<input type='checkbox' checked disabled/><label>"+id+" "+title+"</label></div></div></div>";    
               
                }
                else{
                output+="<div class='col col-sm-6 col-12'><div class='card-body'>";
                 output+="<input type='checkbox'/><label>"+id+" "+title+"</label></div></div></div>";    
         
            } 
        }
$('#result').html(output);
$('input[type="checkbox"]').click(
    function(){
        //alert("check");
        if($(this).prop('checked')===true){
            count++;
            

            var mypromise=new Promise((resolve,reject)=>{
                if(count>=5){
                    resolve();}

                });
            
            mypromise.then(()=>{
                alert("congrats.5 tasks have been successfully completed");
                //window.location.href="main.html";  
            }).catch(()=>{
            console.log(count);
        })
    }
else count--;
}
)
        
}
    });
});


var username = ["Mahir","Billal","Harris"];

function check(e){
    var element = e.target;
    var val = element.value;
    var flag = 0;
    var error = document.getElementById("usererr");   
    for(var j=0 ; j<3 ; j++)
        {
            if(val != username[j])
                {
                    error.textContent = "Username not  Available!";
                    flag=1;
                    break;
                    //alert("Username not found");
                }
        }
    if(flag==0 && error.textContent!="")
        error.textContent = "Username Available";
            
    
}


function setactive(e){
    
var element = e.target;
var prev = document.getElementsByClassName('active');
    
    if(prev.length == 1)
        prev[0].setAttribute('class','form-acontrol'); 
    
    element.setAttribute('class','form-control active');
    
}

var elements = document.getElementsByTagName("input");
for(var i=0;i<elements.length;i++)
{
    if(elements[i].type!="submit" && elements[i].type!="reset")
        {
         elements[i].addEventListener('focus',setactive,false);
        }
}


var name = document.getElementById('username');
name.addEventListener('blur',check,false);
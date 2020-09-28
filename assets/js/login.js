
function register()
{
    
  var data=
   {
    "name":document.getElementById('regname').value,
     "email":document.getElementById('regemail').value,
     "password":document.getElementById('regpassword').value
   }
   inputchecker(data);
   console.log(data)
   var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://stocker-cc.herokuapp.com/auth/users/", true)
    xhr.setRequestHeader('Content-Type', 'application/json')
    xhr.send(JSON.stringify(data))
    xhr.onload=function()
    {
      if(this.status==201)
      {
        var data=JSON.parse(this.responseText);
        window.location.replace("login.html");        
      } 
      else
      {
        var data2=JSON.parse(this.responseText)
        console.log(data2)
        signupError(data2);
        document.getElementById('signup-form').reset();

      }
    }
}

function login()
{
   var data=
   {
    "name":"",
     "email":document.getElementById('email').value,
     "password":document.getElementById('password').value
   }
   console.log(data);
   var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://stocker-cc.herokuapp.com/auth/token/login/", true)
    xhr.setRequestHeader('Content-Type', 'application/json')
    xhr.send(JSON.stringify(data))
    xhr.onload=function()
    {
      if(this.status==200)
      {
        var data=JSON.parse(this.responseText);
        localStorage.setItem('TOKEN',"JWT "+data.token);
        localStorage.setItem('logged',true);
     
        console.log(data)
      
        window.location.assign("index.html");
      }
      else
      {
        var data2=JSON.parse(this.responseText)
        console.log(data2)
        loginerror(data2);
        document.getElementById('login-form').reset();
      
      }
    }


}
function logout()
{
    localStorage.removeItem('TOKEN')
    localStorage.setItem('logged',false)
    loggedout();
  
}

function loginerror(obj)
{
 var div=$('.error')
  div[0].classList.toggle('nodisplay')
  var element=$('.error-message')
  element[0].innerHTML=obj['non_field_errors'][0]+'<span style="float: right; padding: 5px;" onclick="removeError()" class="hvr-grow" ><i class="fas fa-times"></i></span> Please try again'
}

function removeError()
{
  var div=$('.error');
  div[0].classList.toggle('nodisplay')
}
function signupError(obj)
{
  var div=$('.error')
  div[0].classList.toggle('nodisplay')
  var element=$('.error-message')
  document.getElementById("signup-form").reset();
  element[0].innerHTML=obj['email'][0]+'<span style="float: right; padding: 5px;" onclick="removeError()" class="hvr-grow" ><i class="fas fa-times"></i></span> Please try again'
}
function inputchecker(obj)
{

}

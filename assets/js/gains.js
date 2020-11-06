var listcontent=$("#listHolder");
checker();
daily();
function daily()
{
    destroyer()
    changeTitle("DAILY")
    var jwt = localStorage.getItem('TOKEN')
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://stocker-cc.herokuapp.com/api/gain/daily/", true)
    xhr.setRequestHeader('Content-Type', 'application/json')
    xhr.setRequestHeader('Authorization',jwt)

    xhr.send()
    xhr.onload=function()
    {
        if(this.status==200)
        {
            var data = JSON.parse(this.responseText)
            makelist(data)
        }
        else if(this.status==400){
            alert('Error in getting items')
        }
        else if(this.status==401){
            unauthorised();
        }
    }


}
function weekly()
{
    destroyer();
    changeTitle("WEEKLY")

    var jwt = localStorage.getItem('TOKEN')
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://stocker-cc.herokuapp.com/api/gain/weekly/", true)
    xhr.setRequestHeader('Content-Type', 'application/json')
    xhr.setRequestHeader('Authorization',jwt)

    xhr.send()
    xhr.onload=function()
    {
        if(this.status==200)
        {
            var data = JSON.parse(this.responseText)
            makelist(data)
        }
        else if(this.status==400){
            alert('Error in getting items')
        }
        else if(this.status==401){
            console.log('Please authenticate user')
        }
    }


}
function monthly()
{
    destroyer();
    changeTitle("MONTHLY")

    var jwt = localStorage.getItem('TOKEN')
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://stocker-cc.herokuapp.com/api/gain/monthly/", true)
    xhr.setRequestHeader('Content-Type', 'application/json')
    xhr.setRequestHeader('Authorization',jwt)

    xhr.send()
    xhr.onload=function()
    {
        if(this.status==200)
        {
            var data = JSON.parse(this.responseText)
            makelist(data)
        }
        else if(this.status==400){
            alert('Error in getting items')
        }
        else if(this.status==401){
            alert('Please authenticate user')
        }
    }

}
function makelist(obj)
{
  for(var i=1;i<=10;++i)
  {
    creator(obj,i);

  }
}
function creator(obj,i)
{
    var div=document.createElement('div');
	div.classList.add("rest");
    listcontent.append(div);
    var company=document.createElement('h4');
	company.textContent=obj['Company '+i]["Company Name"];
    company.classList.add("brand")
    div.append(company);
    var percentage=document.createElement('p');
    var para=document.createElement('div');
    percentage.textContent=obj['Company '+i]['% Change'];
    percentage.classList.add('percentage');
    percentage.insertAdjacentHTML("afterbegin", "<span class='tags'>% change in price: </span>");
    para.append(percentage);
    var price=document.createElement('p');
    price.textContent=obj['Company '+i]['Current Price (Rs)'];
    price.classList.add('price');
    price.insertAdjacentHTML("afterbegin", "<span class='tags'>Current price (Rs): </span>");

    para.append(price);
    div.append(para)
}
function destroyer()
{
			var list=document.querySelectorAll(".rest");
			for(var i=0;i<list.length;++i)
			{
                list[i].remove();			
            }
 }
 function changeTitle(string)
 {
     var element=document.querySelector('#title')
    element.innerHTML='<h4 class="text-center text-white display-3 "> TOP 10 <span id="titlechange" class="animate__animated animate__bounceInDown">'+string+'</span> GAINERS</h4> '
    
 }
//  ----------------------------------------------------------------------------------------------
 function checker()
{
  
  var checkerlog=localStorage.getItem('logged')
  console.log(checkerlog)
    if(checkerlog==='true')
    {
     
        loggedout();
    }
}

function loggedout()
{
    var list=document.querySelectorAll('.loggedin-nav')
   
    for(var i=0;i<list.length;++i)
    {
      list[i].classList.toggle('nodisplay')
  
    }
    var list=document.getElementsByClassName('loggedout-nav')
 
     for(var i=0;i<list.length;++i)
     {
       list[i].classList.toggle('nodisplay')
     }
}
function unauthorised()
{
    var element=document.getElementById('authorization')
    console.log(element)
    element.classList.toggle('nodisplay')
}

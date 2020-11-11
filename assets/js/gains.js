var listcontent=$("#listHolder");
checker();
var titletype='GAINERS'
var titletime='DAILY'
var type=1;
var time='daily';
timeperiod(type);
var url
function timeperiod(period)
{
    if(typeof period==='number')
    {
        type=period;
        if(type==1)
        changeTitleType('GAINERS')
        else
        changeTitleType('LOSERS')
    }
       
    else
    {
        time=period;
        if(time=='daily')
        changeTitleTime('DAILY');
        else if(time==='weekly')
        changeTitleTime('WEEKLY');
        else
        changeTitleTime('MONTHLY')
    }
    
    if(time=='daily')
    {
        if(type==1)
        url='https://stocker-cc.herokuapp.com/api/gain/daily/'
        else
        url='https://stocker-cc.herokuapp.com/api/lose/daily/'
        request(url)
    }
    else if(time=='weekly')
    {
        if(type==1)
        url='https://stocker-cc.herokuapp.com/api/gain/weekly/';
        else
        url='https://stocker-cc.herokuapp.com/api/lose/weekly/';
        request(url)
    }
    else if(time=='monthly')
    {
        if(type==1)
        url='https://stocker-cc.herokuapp.com/api/gain/monthly/'
        else
        url='https://stocker-cc.herokuapp.com/api/lose/monthly/'
        request(url)
    }

}
function request(url)
{
    destroyer()
    var jwt = localStorage.getItem('TOKEN')
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true)
    xhr.setRequestHeader('Content-Type', 'application/json')
    xhr.setRequestHeader('Authorization',jwt)

    xhr.send()
    xhr.onload=function()
    {
        if(this.status==200)
        {
            var data = JSON.parse(this.responseText)
             console.log(data)
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
    div.classList.add('hvr-float')
    listcontent.append(div);
    var company=document.createElement('h4');
	company.textContent=obj['Company '+i]["Company Name"];
    company.classList.add("brand")
    div.append(company);
    var percentage=document.createElement('p');
    var para=document.createElement('div');
    percentage.textContent=obj['Company '+i]['% Change'];
    percentage.insertAdjacentHTML("afterbegin", "<span class='tags'>% change in price: </span>");
    if(type==0)
    percentage.classList.add('percentageloss')
    else
    percentage.classList.add('percentage');
    para.append(percentage);
    var price=document.createElement('p');
    price.textContent=obj['Company '+i]['Current Price (Rs)'];
    if(type==0)
    price.classList.add('priceloss')
    else
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
 //-----------------------------------------------------------------------------------------------------

 function changeTitleTime(string)
 {
     var element=document.querySelector('#title')
     titletime=string;
    element.innerHTML='<h4 class="text-center text-white display-3 "> TOP 10&nbsp;<span id="titlechange" class="animate__animated animate__bounceInDown">'+string+'&nbsp;</span><span id="titlechange">'+titletype+'</span></h4> '
    
 }
 function changeTitleType(string)
 {
    var element=document.querySelector('#title')
    titletype=string; 
    element.innerHTML='<h4 class="text-center text-white display-3 "> TOP 10 &nbsp;<span id="titlechange">'+titletime+'&nbsp;</span><span id="titletypechange" class="animate__animated animate__bounceInUp"> '+string+'</span></h4> '    
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

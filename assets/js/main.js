var div=document.querySelector('.content')
checker();

function categories(value)
{
 alert(value)
}
function showMoreInfo()
{
  console.log('showing')
 var div=$('.company-more-info')
  div[0].classList.toggle('show')
}

var obj={};
function makeCards(obj)
{
  for(var i=1;i<=5;++i)
  {
    var percentage=document.createElement('p');
    percentage.textContent=obj['Company '+i]['% Change'];
    percentage.classList.add('percentage');
    var price=document.createElement('p');
    price.textContent=obj['Company '+i]['Current Price (Rs)'];
    price.classList.add('price');
    div.insertAdjacentHTML('beforeend','<div class=" row aos-init aos-animate col" data-aos="zoom-in pokemon"  data-aos-duration="500"><div class="col-sm-12 col-md-6"><div class="card text-white company hvr-float"><div class="card-body"><img src="" alt=""><h5 class="card-title"> <span onclick="add()" class="float-right hvr-grow" data-toggle="tooltip" data-placement="top" title="Add under observation"><i class="fas fa-plus fa-sm"></i></span>'+obj['Company '+i]["Company Name"]+'</h5><p class="card-text"><span class="tags">% change in price: '+obj['Company '+i]['% Change']+ '</span> <span class="tags">Current price (Rs): '+obj['Company '+i]['Current Price (Rs)']+' </span></p><button class="btn btn-outline-success moreinfo" onclick="showMoreInfo()">More Info</button></div></div></div><div class="col-sm-12 col-md-6"><div class="card text-white company hvr-float"><div class="card-body"><img src="" alt=""><h5 class="card-title"> <span onclick="add()" class="float-right hvr-grow" data-toggle="tooltip" data-placement="top" title="Add to interests"><i class="fas fa-plus fa-sm"></i></span>'+obj['Company '+(i+1)]["Company Name"]+'</h5><p class="card-text"><span class="tags">% change in price: '+obj['Company '+i]['% Change']+' </span><span class="tags">Current price (Rs): '+obj["Company "+i]["Current Price (Rs)"]+' </span></p><button class="btn btn-outline-success moreinfo" onclick="showMoreInfo()">More Info</button></div></div></div></div>' )
    div.insertAdjacentHTML('beforeend','<br>')
  }
}
function requestt(url)
{
    destroy();
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
            console.log(data);
            makeCards(data)

        }
        else if(this.status==400){
            alert('Error in getting items')
        }
        else if(this.status==401){
            console.log('Please authenticate user')
        }
    }
}



 requestt('https://stocker-cc.herokuapp.com/api/sector/auto/')
//makeCards()
function destroy()
{
  var list=document.getElementsByClassName('pokemon');
  for(var i=0;i<list.length;++i)
  {
    list[i].remove();
  }
}



// -----------------------------chatbot-------------------------------------------------
// var button = document.getElementById('widget-container'); 
// button.onclick = chatbotToggle();
 

function chatbotToggle() 
{
    var div = document.querySelectorAll('#chatbot-body');
    div[0].classList.toggle('chatbot-expanded');
    div[0].classList.toggle('chatbot-minimised');
};

  function insertMessage() {
    msg = $('.message-input').val();
    if ($.trim(msg) == '') {
      return false;
    }
    $('<div class="message message-user">' + msg + '</div>').appendTo($('.message-container')).addClass('animate__animated animate__headShake');
  scrollSmoothToBottom('messagingBox')
    $('.message-input').val(null);
  }
  $('.message-submit').click(function() {
    insertMessage();
  });
  $(window).on('keydown', function(e) {
    if (e.which == 13) {
      insertMessage();
      return false;
    }
  })

  function scrollSmoothToBottom (id) {
    var div = document.getElementById('messagingBox');
    $('#' + id).animate({
       scrollTop: div.scrollHeight - div.clientHeight}, 350);
 }



  $('.btn-lg').click(function() {
    console.log('lol')
    $('<div class="message">lolololollolololololololololololololololololol</div>').appendTo($('.message-container')).addClass('animate__animated animate__headShake');
    scrollSmoothToBottom('messagingBox')

  });

 

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



$('.navbar-toggler').on('click', function(e) {
  e.preventDefault();
  var target = $(this).data('target');
  $(target).toggleClass('hide') ;
});
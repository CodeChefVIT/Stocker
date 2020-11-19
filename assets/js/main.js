var div=document.querySelector('.content')
const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
jQuery.noConflict();

if(vw>700)
{
  showSectorbar()
}
else if(vw<700)
{
  hideSectorbar();
}



checker();
sectorchoice('auto')
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
  for(var i=1;i<=10;i+=2)
  {
  
  div.insertAdjacentHTML('beforeend','<div class=" pekoms row aos-init aos-animate col" data-aos="zoom-in"  data-aos-duration="500"><div class="col-sm-12 col-md-6 d-flex align-items-stretch"><div class="card text-white company hvr-float"><div class="card-body"><h5 class="card-heading"><span class="companyTitle">'+obj['Company '+i]["Company Name"]+'</span></h5><p class="card-text"><span class="tags">% change in price: <span class="gl">'+obj['Company '+i]['% Change']+ '</span></span> <span class="tags">Current price (Rs): <span class="gl1">'+obj['Company '+i]['Current Price (Rs)']+' </span></p><button class="btn btn-outline-success moreinfo" onclick="showMoreInfo()">More Info</button></div></div></div><div class="col-sm-12 col-md-6 d-flex align-items-stretch"><div class="card text-white company hvr-float"><div class="card-body"><h5 class="card-heading"><span class="companyTitle">'+obj['Company '+(i+1)]["Company Name"]+'</span></h5><p class="card-text"><span class="tags">% change in price: <span class="gl">'+obj['Company '+(i+1)]['% Change']+'</span> </span><span class="tags">Current price (Rs): <span class="gl1">'+obj["Company "+(i+1)]["Current Price (Rs)"]+'</span> </span></p><button class="btn btn-outline-success moreinfo" onclick="showMoreInfo()">More Info</button></div></div></div><br></div>' )
    // $(".companyTitle").fitText(1.5,{minFontSize: '15px', maxFontSize: '40px'});
    
  }
}
function checkgl(obj)
{
  var list=document.getElementsByClassName('gl');
  var list1=document.getElementsByClassName('gl1')
  for(var i=1;i<=10;++i)
  {
    
    if(obj['Company '+i]['% Change']<0)
    {
      list[i-1].classList.add('percentageloss')
      list1[i-1].classList.add('percentageloss')
    }
    else{
      list[i-1].classList.add('percentage')
      list1[i-1].classList.add('percentage')
    }
    
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
            makeCards(data);
            checkgl(data)

        }
        else if(this.status==400){
            alert('Error in getting items')
        }
        else if(this.status==401){
            console.log('Please authenticate user')
            unauthorised();
        }
    }
}

function sectorchoice(val)
{

  var url='https://stocker-cc.herokuapp.com/api/sector/'+val+'/';
  requestt(url)
  const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
  if(vw<700)
  {
    $('#sticky-sidebar').toggleClass('hide') ;
  }


}


function destroy()
{
  var list=document.querySelectorAll('.pekoms');
  
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





//  ------------------------authorization--------------------

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

//-----------------sector recs----------------------------

$('.navbar-toggler').on('click', function(e)
 {
  e.preventDefault();
  var target = $(this).data('target');
  $(target).toggleClass('hide') ;
});

// $('.sectorbutton').on('click', function(e)
//  {
//      e.preventDefault();
//   var target = $(this).data('target');
//   $(target).toggleClass('hide') ;
// });


$(window).resize(function() {
const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
if(vw>700)
{
  showSectorbar();
}
else
  hideSectorbar()
});

function showSectorbar()
{
  if(document.querySelector('#sticky-sidebar').classList.contains('hide'))
  $('#sticky-sidebar').toggleClass('hide')
  $("#sectortoggler").css({'height':($("#sticky-sidebar").height()+'px')})
  
}
function hideSectorbar()
{
 
  if(!document.querySelector('#sticky-sidebar').classList.contains('hide'))
$('#sticky-sidebar').toggleClass('hide')
$("#sectortoggler").css({'height':($("#sticky-sidebar").height()+'px')})

}


//<span onclick="add()" class="float-right hvr-grow" data-toggle="tooltip" data-placement="top" title="Add to interests"><i class="fas fa-plus fa-sm"></i></span>
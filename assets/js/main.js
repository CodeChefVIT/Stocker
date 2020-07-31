var div=document.querySelector('.content')


function add()
{
  
}
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




function makeCards()
{

  for(var i=0;i<5;++i)
  {
    div.insertAdjacentHTML('beforeend','<div class="row aos-init aos-animate" data-aos="zoom-in"  data-aos-duration="500"><div class="col-sm-12 col-md-4"><div class="card text-white company hvr-float"><div class="card-body"><img src="" alt=""><h5 class="card-title"> <span onclick="add()" class="float-right hvr-grow" data-toggle="tooltip" data-placement="top" title="Add under observation"><i class="fas fa-plus fa-sm"></i></span>company</h5><p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam hic debitis quo modi a distinctio minima beatae laboriosam. Corrupti nemo voluptas fugiat eaque exercitationem a dicta hic dignissimos fugit vel?</p><button class="btn btn-outline-success text-white" onclick="showMoreInfo()">More Info</button></div></div></div><div class="col-sm-12 col-md-4"><div class="card text-white company hvr-float"><div class="card-body"><img src="" alt=""><h5 class="card-title"> <span onclick="add()" class="float-right hvr-grow" data-toggle="tooltip" data-placement="top" title="Add to interests"><i class="fas fa-plus fa-sm"></i></span>company</h5><p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam hic debitis quo modi a distinctio minima beatae laboriosam. Corrupti nemo voluptas fugiat eaque exercitationem a dicta hic dignissimos fugit vel?</p><button class="btn btn-outline-success text-white" onclick="showMoreInfo()">More Info</button></div></div></div><div class="col-sm-12 col-md-4"><div class="card text-white company hvr-float"><div class="card-body"><img src="" alt=""><h5 class="card-title"> <span onclick="add()" class="float-right hvr-grow" data-toggle="tooltip" data-placement="top" title="Add to interests"><i class="fas fa-plus fa-sm"></i></span>company</h5><p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam hic debitis quo modi a distinctio minima beatae laboriosam. Corrupti nemo voluptas fugiat eaque exercitationem a dicta hic dignissimos fugit vel?</p><button class="btn btn-outline-success text-white" onclick="showMoreInfo()">More Info</button></div></div></div></div>' )
    div.insertAdjacentHTML('beforeend','<br>')
  }
}

makeCards()

function destroy()
{
  var list=document.getElementsByClassName('row');
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
    console.log(msg)
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

  

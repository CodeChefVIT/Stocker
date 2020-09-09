var userContent=document.getElementById('user-content-my-profile')
function profileCards()
{

  for(var i=0;i<3;++i)
  {
    userContent.insertAdjacentHTML('beforeend','<div class="row"><div class="col-md-6 sm-12"><div class="card text-white company hvr-float"><div class="card-body"><img src="" alt=""><h5 class="card-title text-center">Company Name</h5><p class="card-text">Lorem ipsum dolor, sit amet consectetur adipi</p><button class="btn btn-outline-success text-white" onclick="showMoreInfo()">More Info</button></div></div></div><div class="col-md-6 sm-12"><div class="card text-white company hvr-float"><div class="card-body"><img src="" alt=""><h5 class="card-title text-center">Company Name</h5><p class="card-text">Lorem ipsum dolor, sit amet consectetur adipi</p><button class="btn btn-outline-success text-white" onclick="showMoreInfo()">More Info</button></div></div></div></div>')
    userContent.insertAdjacentHTML('beforeend','<br>')
  }

}
profileCards();
{/* <div class="col-md-6 sm-12"><div class="card text-white company hvr-float"><div class="card-body"><img src="" alt=""><h5 class="card-title text-center">Company Name</h5><p class="card-text">Lorem ipsum dolor, sit amet consectetur adipi</p><button class="btn btn-outline-success text-white" onclick="showMoreInfo()">More Info</button></div></div></div> */}

function showMoreInfo()
{
  console.log('showing')
 var div=$('.company-more-info')
  div[0].classList.toggle('show')
}
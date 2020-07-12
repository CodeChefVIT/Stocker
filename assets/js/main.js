var div=document.querySelector('.content')

function add()
{
  
}
function categories(value)
{
 alert(value)
}
function logout()
{

}
function login()
{

}
function Register()
{
  
}



function makeCards()
{
  for(var i=0;i<5;++i)
  {
    div.insertAdjacentHTML('beforeend','<div class="row"><div class="col-sm-12 col-md-4"><div class="card text-white border-success company hvr-float"><div class="card-body"><img src="" alt=""><h5 class="card-title"> <span onclick="add()" class="float-right hvr-grow" data-toggle="tooltip" data-placement="top" title="Add to interests"><i class="fas fa-plus fa-sm"></i></span>company</h5><p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam hic debitis quo modi a distinctio minima beatae laboriosam. Corrupti nemo voluptas fugiat eaque exercitationem a dicta hic dignissimos fugit vel?</p><a href="#" class="btn btn-outline-success text-white">More Info</a></div></div></div><div class="col-sm-12 col-md-4"><div class="card text-white border-success company hvr-float"><div class="card-body"><img src="" alt=""><h5 class="card-title"> <span onclick="add()" class="float-right hvr-grow" data-toggle="tooltip" data-placement="top" title="Add to interests"><i class="fas fa-plus fa-sm"></i></span>company</h5><p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam hic debitis quo modi a distinctio minima beatae laboriosam. Corrupti nemo voluptas fugiat eaque exercitationem a dicta hic dignissimos fugit vel?</p><a href="#" class="btn btn-outline-success text-white">More Info</a></div></div></div><div class="col-sm-12 col-md-4"><div class="card text-white border-success company hvr-float"><div class="card-body"><img src="" alt=""><h5 class="card-title"> <span onclick="add()" class="float-right hvr-grow" data-toggle="tooltip" data-placement="top" title="Add to interests"><i class="fas fa-plus fa-sm"></i></span>company</h5><p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam hic debitis quo modi a distinctio minima beatae laboriosam. Corrupti nemo voluptas fugiat eaque exercitationem a dicta hic dignissimos fugit vel?</p><a href="#" class="btn btn-outline-success text-white">More Info</a></div></div></div></div>' )
    div.insertAdjacentHTML('beforeend','<br>')
  }
}
makeCards()





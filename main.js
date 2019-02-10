//eslint-disable-next-line no-unused-vars
function imageSuccess(response) {
  // eslint-disable-next-line no-console
    
    console.log(response.data.urls.regular);
    var body = document.getElementsByTagName('body')[0];
body.style.backgroundImage = 'url(https://images.unsplash.com/photo-1547597033-73e2f68a35d0?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjU1NTAyfQ)';

   
}
// // eslint-disable-next-line no-console
function imageFail(error) { console.log(error); }


// // eslint-disable-next-line no-undef
axios({

  method: 'get',
  url: 'https://api.unsplash.com/photos/random/?client_id=211f51979f71311b162ccc85775e714ad06363c8e3116490633a2f067dd594ba',
}).then(imageSuccess)
  .catch(imageFail)
//eslint-disable-next-line no-unused-vars
//  function imageSuccess(response) {
//     //eslint-disable-next-line no-console
    
//      console.log(response.data.weather.description);
//      var body = document.getElementsByTagName('body');
//      body.style.backgroundImage = 'url(https://images.unsplash.com/photo-1547597033-73e2f68a35d0?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjU1NTAyfQ)';

   
// }
//  //eslint-disable-next-line no-console
// function imageFail(error) { console.log(error); }


//  eslint-disable-next-line no-undef
//  axios({

//    method: 'get',
//    url: 'api.openweathermap.org/data/2.5/weather?q={Riyadh}',
//  }).then(imageSuccess)
//    .catch(imageFail)
/* eslint-disable indent */
// eslint-disable-next-line no-undef
axios({
  method: 'get',
  url: 'http://api.openweathermap.org/data/2.5/weather?q=Riyadh&units=metric&appid=475c688bad551c7560e5f4b3357b1077',

})
  .then((response) => {
      console.log(response);
      
      const temp = response.data.main.temp;
      
      $('body').append(`<h4>${temp}</h4>`);
      
      let icon = 'http://openweathermap.org/img/w/' + response.data.weather[0].icon + '.png'
       $('img').attr('src', icon)
      const weathr = response.data.weather[0].description;
    
      $('body').append(`<h5>${weathr}</h5>`);
      
    
})
  // eslint-disable-next-line no-console
  .catch((error) => {
      console.log(error);
});

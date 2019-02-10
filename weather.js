/* eslint-disable indent */
// eslint-disable-next-line no-undef
axios({
  method: 'get',
  url: 'http://api.openweathermap.org/data/2.5/weather?q=Riyadh&units=metric&appid=475c688bad551c7560e5f4b3357b1077',

})
  .then((response) => {
      console.log(response);
      // eslint-disable-next-line prefer-destructuring
      const temp = response.data.main.temp;
      // eslint-disable-next-line no-undef
      $('body').append(`<h4>${temp}</h4>`);
      // eslint-disable-next-line prefer-destructuring
      // const icon = response.data.weather[0].icon;
      // // eslint-disable-next-line no-undef
      // $('body').append(`<h4>${icon}</h4>`);
      const weathr = response.data.weather[0].description;
    // eslint-disable-next-line no-undef
      $('body').append(`<h5>${weathr}</h5>`);
      
    
})
  // eslint-disable-next-line no-console
  .catch((error) => {
      console.log(error);
});

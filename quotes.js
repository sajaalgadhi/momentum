axios({
    method: 'get',
    url: 'https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en',
  
  })
    .then((response) => {
        
        // eslint-disable-next-line prefer-destructuring
        const quote = response.data.quoteText;
        // eslint-disable-next-line no-undef
        $('body').append(`<h2>${quote}</h2>`);
        // eslint-disable-next-line no-unused-expressions
        
        const Auther = response.data.quoteAuthor;
        // eslint-disable-next-line no-undef
        $('body').append(`<h3>${Auther}</h3>`);
         // eslint-disable-next-line no-unused-expressions
         
      
  })
    // eslint-disable-next-line no-console
    .catch((error) => {
        console.log(error);
  });
// eslint-disable-next-line no-undef

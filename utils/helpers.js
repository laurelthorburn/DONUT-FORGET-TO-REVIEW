const hb = require('handlebars');

hb.registerHelper('format_date', function(date) {
    date = new Date();
        y = date.getFullYear();
        m = date.getMonth() + 1;
        d = date.getDate();
   
        return m + "/" + d + "/" + y;
});

hb.registerHelper('loud', function (aString) {
  if (!aString){
    return aString;
  }
    return aString.toUpperCase()
})

// hb.registerHelper("log", function(something) {
//     console.log(something);
//   });

hb.registerHelper("debug", function(optionalValue) {
    console.log("Current Context");
    console.log("====================");
    console.log(this);
  
    if (optionalValue) {
      console.log("Value");
      console.log("====================");
      console.log(optionalValue);
    }
  });
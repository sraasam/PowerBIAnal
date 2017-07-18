var express = require('express');  
var app = new express();  
var port = 80;  
app.listen(port, function(err) {  
    if (typeof(err) == "undefined") {  
        console.log('Your application is running on : ' + port + ' port');  
    }  
});  
app.use(express.static('public')); //making public directory as static diectory   
app.use(express.static('src/views')); //making public directory as static diectory   
app.get('/', function(req, res) {  
    res.send('<h1>Hello C# Corner.</h1>');  
});  
app.get('/articles', function(req, res) {  
    res.send('<h1>Welcome to C# Corner Articles.</h1>');  
});  
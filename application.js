var fib = require('./fib');

// подключение express
const express = require("express");

// создаем объект приложения
const app = express();

// определяем обработчик для маршрута "/"
app.get("/", function(request, response){
    response.sendfile('interface.html');
});

app.get("/fib", function(request, response){

response.send("<p>Fib(7)=</p>" + fib(7));


});


// начинаем прослушивать подключения на 3000 порту
app.listen(3000);
console.log(`Server has Started http://localhost:3000/`)

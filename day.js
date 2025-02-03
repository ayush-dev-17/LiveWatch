var secondDiv = document.querySelector('#second');

var hourDiv = document.querySelector('#hour');
var minuteDiv = document.querySelector('#minute');
var dayDiv = document.querySelector('#day');

function runner(){
    var currentDate = new Date();
    var currentHour = currentDate.getHours();
    var currentMinute = currentDate.getMinutes();
    var currentSecond = currentDate.getSeconds();
    
    secondDiv.textContent = currentSecond;
    hourDiv.textContent = currentHour;
    minuteDiv.textContent = currentMinute;
    
      setDay(currentDate.getDay())
    
}
runner();

setInterval(function(){
runner();

},1000)

function setDay(day){
       switch(day){
           case 0:
               daysetter('sun');
               break;

               case 1:
               daysetter('mon');
               break;

               case 2:
               daysetter('tue');
               break;

               case 3:
               daysetter('wed');
               break;

               case 4:
               daysetter('thu');
               break;

               case 5:
               daysetter('fri');
               break;

               case 6:
               daysetter('sat');
               break;
               
       }

}

function daysetter(day){
    dayDiv.textContent = day;
}

var act = document.getElementById("btn-1");
var joke = document.getElementById("btn-2");
var quote = document.getElementById("btn-3");

var searched = false;


act.addEventListener("click", activityGenerator);
joke.addEventListener("click", getJoke);
food.addEventListener("click", getQuote);





function activityGenerator() {
    $(".activity").html("");
    $(".participants").html("");
    $(".type").html("");


$.getJSON(`https://www.boredapi.com/api/activity`, function(data){

var activity = data.activity;
var participants = data.participants;
var type = data.type;

$(".activity").append(activity);
$(".participants").append(participants);
$(".type").append(type);
 
}); 

}


function getJoke(){
    $(".setup").html("");
    $(".punchline").html("");
    $.getJSON(`https://official-joke-api.appspot.com/random_joke`, function(data){
   var setup = data.setup;
   var punchline = data.punchline;
   $(".setup").append(setup);
   $(".punchline").append(punchline);
});
}

function getQuote(){
    $(".content").html("");
    $(".author").html("");
    $.getJSON(`https://api.quotable.io/random`, function(data){
        var content = data.content;
        var author = data.author;
        $(".content").append(content);
        $(".author").append(" " + author);
    
    });

}


const tilt = $('.js-tilt').tilt();
tilt.on('change', callback);  // parameters: event, transforms
tilt.on('tilt.mouseLeave', callback); // parameters: event
tilt.on('tilt.mouseEnter', callback); // parameters: event


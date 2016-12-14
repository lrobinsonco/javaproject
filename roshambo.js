$(document).ready(function(){
  $("#link").hover(function(){
                 $("#article").toggle(2000);
               })

        // var url = 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=8bit';
//http://giphy.com/gifs/rock-paper-scissors-YXfnqjSWKKpPi
//http://media1.giphy.com/media/IgRsFEbEsfPBS/giphy.gif
//looser http://api.giphy.com/v1/gifs/Bx2JBIEcYSddm?api_key=dc6zaTOxFJmzC

$("#gifbtn").click(function(){
  var url = 'http://api.giphy.com/v1/gifs/IgRsFEbEsfPBS?api_key=dc6zaTOxFJmzC'
          $.getJSON(url, function(object) {
            var imageSource = object.data.images.original.url;
            var image = $('<img class="resize" src=' + imageSource + ' />');
            image.appendTo($('#gif'));
          });
});
//var counter = {computer: 0, human:0}
var compScore = 0
var humanScore = 0
$("#btn").click(function(){

function playGame(human){
var computer = Math.random()
console.log(computer);

if(computer <.33){
  computer = "rock";
  $("#computerChoice").html("Computer chooses rock")
} else if (computer < .66 && computer > .33) {
  computer = "paper";
  $("#computerChoice").html("Computer chooses paper")
} else {
  computer = "scissors";
  $("#computerChoice").html("Computer chooses scissors")
}

var winner;
if(human === 'rock'){
  if (computer === 'rock'){
  $("#result").html("Same");
  winner = 'Tie'
} else if (computer === 'paper'){
  $("#result").html("Paper beats rock");
  winner = 'Computer wins';
  compScore = compScore + 1
  //counter.computer += 1
} else if (computer === 'scissors'){
  $("#result").html("Rock beats scissors");
  winner = 'You win!';
  humanScore = humanScore +1
  //counter.human += 1
}
}
else if (human === 'paper'){
  if (computer === 'paper'){
    $("#result").html('Same');
    winner = 'Tie'
  } else if (computer === 'scissors'){
    $("#result").html("Scissors beat paper");
    winner = 'Computer wins';
    compScore = compScore + 1
    //counter.computer += 1
  } else if (computer === 'rock'){
    $("#result").html("Paper beats rock");
    winner = 'You win!';
    humanScore = humanScore + 1
    //counter.human += 1
  }
}
else if (human === 'scissors'){
  if (computer === 'scissors'){
    $("#result").html('Same');
    winner = 'Tie'
  } else if (computer === 'rock'){
    $("#result").html("Rock beats scissors");
    winner = 'Computer wins';
    compScore = compScore + 1
    //counter.computer += 1
  } else if (computer === 'paper'){
    $("#result").html("Scissors beat paper");
    winner = 'You win!';
    humanScore = humanScore + 1
    //counter.player += 1
  }
}
$("#winner").html(winner);
$("#compScore").html("Computer: " + compScore)
$("#humanScore").html("You: " + humanScore)
console.log(compScore);
console.log(humanScore);
}
})
})
// $.ajax({
//         type: "GET",
//         url: "http://en.wikipedia.org/w/api.php?action=parse&format=json&prop=text&section=0&page=Jimi_Hendrix&callback=?",
//         contentType: "application/json; charset=utf-8",
//         async: false,
//         dataType: "json",
//         success: function (data, textStatus, jqXHR) {
//
//             var markup = data.parse.text["*"];
//             var blurb = $("#article").html(markup);
// console.log(data)
//             // remove links as they will not work
//             blurb.find('a').each(function() { $(this).replaceWith($(this).html()); });
//
//             // remove any references
//             blurb.find('sup').remove();
//
//             // remove cite error
//             blurb.find('.mw-ext-cite-error').remove();
//             $('#article').html($(blurb).find('p'));
//
//         },
//         error: function (errorMessage) {
//         }
//     });

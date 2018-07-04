$(function(){
var turn = true;
console.log(document.body);
//let player draw if it's his turn

//show whos turn it is

//identify if a player or AI has won

//player won or ai won message

//reset board function
//remove circle and x functions from all td and clear all arrats holding x and o position.
//get button getElements


var getTd = $("td");//get Td array
var dataNum = $('[data-num]');
var number = 0;;
//array for O and X
var board ={};
var arrayO;//
var arrayX =[];//
var counter =0;//
var win; //counts if player win or ai win or no one has won yet

$('[data-num]').click(function(){
    if (turn == true){
       $(this).addClass("X").html("X");
//set value of arrayX to Xs data id and then , once array reaches
//a certain pattern, announce winner
      //set number
//
  number =   $(this).data("num");
counter++;

//
      $("h2").html("It is O's turn");

      turn = false;
    } else if (turn == false) {
      $(this).addClass("O").html("O");
      $("h2").html("It is X's turn");
      turn = true;
      number =   $(this).data("num");

      //  console.log($(this).data("num"));


    }
  });




  $('[data-num]').click(function(){
if(turn ==false)
{
console.log(number);
board[number] ="X";
    console.log(board);
}
else {
  {
  board[number] ="O";
  }
}

if (board[0] == "X" && board[1] == "X" && board[2] == "X" || board[0] == "O" && board[1] == "O" && board[2] == "O") {
    alert("somebody WON")
  }else if (board[3] == "X" && board[4] == "X" && board[5] == "X" || board[3] == "O" && board[4] == "O" && board[5] == "O" ) {
    alert("somebody WON")
  }else if (board[6] == "X" && board[7] == "X" && board[8] == "X" || board[6] == "O" && board[7] == "O" && board[8] == "O" ){
    alert("somebody WON")
  }else if (board[2] == "X" && board[5] == "X" && board[8] == "X" || board[2] == "O" && board[5] == "O" && board[8] == "O" ){
    alert("somebody WON")
  }else if (board[1] == "X" && board[4] == "X" && board[7] == "X" || board[1] == "O" && board[4] == "O" && board[7] == "O" ){
    alert("somebody WON")
  }else if (board[0] == "X" && board[3] == "X" && board[6] == "X" || board[0] == "O" && board[3] == "O" && board[6] == "O" ){
    alert("somebody WON")
  }else if (board[0] == "X" && board[4] == "X" && board[8] == "X" || board[0] == "O" && board[4] == "O" && board[8] == "O" ){
    alert("somebody WON")
  }else if (board[2] == "X" && board[4] == "X" && board[6] == "X" || board[2] == "O" && board[4] == "O" && board[6] == "O" ){
    alert("somebody WON");}


});

//put this in click function


//$('[data-num~="0"]').html("X");



$('#reset').click(function(){
  //remove class O and X from tds and make remove X and O by making its html content be nothing ""
$('td').removeClass("O X").html("");
//reset array containers as we clear X and O
//
board=[];

  });


});

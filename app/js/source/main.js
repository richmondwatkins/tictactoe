(function(){
  'use strict';

  $(document).ready(initialize);

  var player = 1;

  function initialize(){
    $('#board').on('click', 'td.table', select);
    $('#reset').click(reset);
  }

  function reset(){
    var newGame = $('tbody > tr > td');
    $(newGame).removeClass('x');
    $(newGame).removeClass('o');
    $(newGame).addClass('table');
  }

  function select(){

    if(player===1){

      // $(this).text('x');
      $(this).addClass('x');
      $(this).removeClass('table');

    } else {
      // $(this).text('o');
      $(this).addClass('o');
      $(this).removeClass('table');
    }
      player = player * -1;
      checkWin();
  }

  function checkWin(){
    var tdArray1 = $('tbody > tr:nth-child(1) > td');
    var tdArray2 = $('tbody > tr:nth-child(2) > td');
    var tdArray3 = $('tbody > tr:nth-child(3) > td');





      if($(tdArray1[0]).hasClass('x') && $(tdArray1[1]).hasClass('x') && $(tdArray1[2]).hasClass('x')){
        alert('Facebook Wins!');

      }
      if($(tdArray2[0]).hasClass('x') && $(tdArray2[1]).hasClass('x') && $(tdArray2[2]).hasClass('x')){
        alert('Facebook Wins!');
  }
      if($(tdArray3[0]).hasClass('x') && $(tdArray3[1]).hasClass('x') && $(tdArray3[2]).hasClass('x')){
        alert('Facebook Wins!');

  }
      if($(tdArray1[0]).hasClass('x') && $(tdArray2[0]).hasClass('x') && $(tdArray3[0]).hasClass('x')){
        alert('Facebook Wins!');

  }
      if($(tdArray1[1]).hasClass('x') && $(tdArray2[1]).hasClass('x') && $(tdArray3[1]).hasClass('x')){
        alert('Facebook Wins!');
}
      if($(tdArray1[2]).hasClass('x') && $(tdArray2[2]).hasClass('x') && $(tdArray3[2]).hasClass('x')){
        alert('Facebook Wins!');
}
      if($(tdArray1[0]).hasClass('x') && $(tdArray2[1]).hasClass('x') && $(tdArray3[2]).hasClass('x')){
        alert('Facebook Wins!');
}

      if($(tdArray1[2]).hasClass('x') && $(tdArray2[1]).hasClass('x') && $(tdArray3[0]).hasClass('x')){
        alert('Facebook Wins!');
}
      //============== start of the 'o's ============

      if($(tdArray1[0]).hasClass('o') && $(tdArray1[1]).hasClass('o') && $(tdArray1[2]).hasClass('o')){

        alert('Twitter Wins!');
      }
      if($(tdArray2[0]).hasClass('o') && $(tdArray2[1]).hasClass('o') && $(tdArray2[2]).hasClass('o')){
        alert('Twitter Wins!');
  }
      if($(tdArray3[0]).hasClass('o') && $(tdArray3[1]).hasClass('o') && $(tdArray3[2]).hasClass('o')){
        alert('Twitter Wins!');
  }
      if($(tdArray1[0]).hasClass('o') && $(tdArray2[0]).hasClass('o') && $(tdArray3[0]).hasClass('o')){
        alert('Twitter Wins!');

  }
      if($(tdArray1[1]).hasClass('o') && $(tdArray2[1]).hasClass('o') && $(tdArray3[1]).hasClass('o')){
        alert('Twitter Wins!');
}
      if($(tdArray1[2]).hasClass('o') && $(tdArray2[2]).hasClass('o') && $(tdArray3[2]).hasClass('o')){
        alert('Twitter Wins!');
}
      if($(tdArray1[0]).hasClass('o') && $(tdArray2[1]).hasClass('o') && $(tdArray3[2]).hasClass('o')){
        alert('Twitter Wins!');
}

      if($(tdArray1[2]).hasClass('o') && $(tdArray2[1]).hasClass('o') && $(tdArray3[0]).hasClass('o')){
        alert('Twitter Wins!');
}
}

})();

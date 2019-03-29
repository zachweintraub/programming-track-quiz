//here's that tasty business logic
var q1
var q2
var q3
var q4
var q5
var q6
var totalScore
var result

function checkComplete(a, b) {
  if(isNaN(a) || isNaN(b)) {
    return false;
  } else return true;
};

function calculateResult() {
  totalScore = q1 + q2 + q3 + q4 + q5 + q6;
  if(totalScore > 5 && totalScore < 11) {
    result = 'result1';
  } else if(totalScore > 10 && totalScore < 15) {
    result = 'result2';
  } else if (totalScore > 14) {
    result = 'result3';
  }
  return result;
};

//and now for the ui logic
$(function(){

  $('#start-btn').click(function(){
    $('#intro-text').slideUp();
    $('#category1').slideDown();
  });

  $('#btn1').click(function(){
    q1 = parseInt($("input:radio[name=q1a]:checked").val());
    q2 = parseInt($("input:radio[name=q1b]:checked").val());
    if(checkComplete(q1, q2)) {
      $('#category1').slideUp();
      $('#category2').slideDown();
    } else {
      $('span#category1error').show();
    }
  });

  $('#btn2').click(function(){
    q3 = parseInt($("input:radio[name=q2a]:checked").val());
    q4 = parseInt($("input:radio[name=q2b]:checked").val());
    if(checkComplete(q3, q4)) {
      $('#category2').slideUp();
      $('#category3').slideDown();
    } else {
      $('span#category2error').show();
    }
  });

  $('#btn3').click(function(){
    q5 = parseInt($("input:radio[name=q3a]:checked").val());
    q6 = parseInt($("input:radio[name=q3b]:checked").val());
    if(checkComplete(q5, q6)) {
      $('#category3').slideUp();
      $('#' + calculateResult()).slideDown();
    } else {
      $('span#category3error').show();
    }
  });

  $('.start-over').click(function(){
    $('input:radio').prop('checked', false);
    $('[id$="error"]').hide();
    $('[id^="result"]').slideUp();
    $('#category1').slideDown();
  });
});

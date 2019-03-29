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
  if(totalScore > 0 && totalScore < 7) {
    result = 'result1';
  } else if(totalScore > 6 && totalScore < 13) {
    result = 'result2';
  } else if (totalScore > 12) {
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
    $('#category2').slideUp();
    $('#category3').slideDown();
  });
  $('#btn3').click(function(){
    q5 = parseInt($("input:radio[name=q3a]:checked").val());
    q6 = parseInt($("input:radio[name=q3b]:checked").val());
    $('#category3').slideUp();
    $('#' + calculateResult).slideDown();
  });
});

// the following is for reference
// q1 = parseInt($("input:radio[name=q1a]:checked").val());
// q2 = parseInt($("input:radio[name=q1b]:checked").val());
// q3 = parseInt($("input:radio[name=q2a]:checked").val());
// q4 = parseInt($("input:radio[name=q2b]:checked").val());
// q5 = parseInt($("input:radio[name=q3a]:checked").val());
// q6 = parseInt($("input:radio[name=q3b]:checked").val());

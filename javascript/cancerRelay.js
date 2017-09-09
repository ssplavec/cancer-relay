$(document).ready(function(){
//  var divFocus = '';

  $(window).keypress(function(e){
    var x = e.which || e.keycode;
    if (x > 48 && x <= 57) {
      addItUp(x - 48);//, divFocus);
    }
  });

  $('#teamTotalDiv').click(function(){
    //var teamTotal = Number($('#teamTotalCount').text());
    //$('#teamTotalCount').text(teamTotal + 1);
    //addItUp(1);
    $('#teamTotalDiv').addClass('focus');
    $('#townTotalDiv').removeClass('focus');
//    divFocus = 'team';
//    increaseCount($('#teamTotalCount'));
  });

  $('#townTotalDiv').click(function(){
    //var townTotal = Number($('#townTotalCount').text());
    //$('#townTotalCount').text(townTotal + 1);
    //addItUp(1);
    $('#townTotalDiv').addClass('focus');
    $('#teamTotalDiv').removeClass('focus');
//    divFocus = 'town';
//    increaseCount($('#townTotalCount'));
  });
});

addItUp = function(entry){ //}, divFocus){
  if ($('#teamTotalDiv').hasClass('focus')) {
    incrementTeamCount(entry);
  } else if($('#townTotalDiv').hasClass('focus')) {
    incrementTownCount(entry);
  } else {
    return;
  }
  incrementTotalCount(entry);
};

incrementTeamCount = function(entry) {
    increaseCount($('#teamTotalCount'), entry);
};

incrementTownCount = function(entry) {
    increaseCount($('#townTotalCount'), entry);
};

incrementTotalCount = function(entry) {
  var total = Number($('#totalCount').text());
  var newTotal = total + entry;
  $('#totalCount').text(newTotal);
};

increaseCount = function(whichCounter, entry) {
  var totalCount = Number(whichCounter.text());
  whichCounter.text(totalCount + entry);
};

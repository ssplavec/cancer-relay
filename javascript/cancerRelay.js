$(document).ready(function() {

    if (typeof(Storage) !== undefined) {
        $('#teamTotalCount').text(localStorage.teamCount);
        $('#townTotalCount').text(localStorage.townCount);
        $('#totalCount').text(localStorage.totalCount);

        $('#teamMenTotal').text(localStorage.teamMenTotal);
        $('#teamWomenTotal').text(localStorage.teamWomenTotal);
        $('#townMenTotal').text(localStorage.townMenTotal);
        $('#townWomenTotal').text(localStorage.townWomenTotal);
    }

    $(window).keypress(function(e) {
        var x = e.which || e.keycode;
        if (x > 48 && x <= 57) {
          addItUp(x - 48);
        }
    });

    $('#teamMenDiv').click(function() {
        removeAllFocus();
        $('#teamMenDiv').addClass('focus');
    });

    $('#teamWomenDiv').click(function(){
        removeAllFocus();
        $('#teamWomenDiv').addClass('focus');
    });

    $('#townMenDiv').click(function() {
        removeAllFocus();
        $('#townMenDiv').addClass('focus');
    });

    $('#townWomenDiv').click(function(){
        removeAllFocus();
        $('#townWomenDiv').addClass('focus');
    });

    $('#logoDiv').dblclick(function(){
        if (typeof(Storage) !== undefined) {
          localStorage.teamCount = 0;
          localStorage.townCount = 0;
          localStorage.totalCount = 0;
          localStorage.teamMenTotal = 0;
          localStorage.teamWomenTotal = 0;
          localStorage.townMenTotal = 0;
          localStorage.townWomenTotal = 0;
        }
    });

    $('#headerRow').click(function() {
      removeAllFocus();
    });
    $('#totalsRow').click(function() {
      removeAllFocus();
    })
});

var removeAllFocus = function() {
  $('#teamMenDiv').removeClass('focus');
  $('#teamWomenDiv').removeClass('focus');
  $('#townMenDiv').removeClass('focus');
  $('#townWomenDiv').removeClass('focus');
};

var addItUp = function(entry) {
    if ($('#teamMenDiv').hasClass('focus')) {
        incrementTeamMenTotal(entry);
        incrementTeamCount(entry);
    } else if ($('#teamWomenDiv').hasClass('focus')) {
        incrementTeamWomenTotal(entry);
        incrementTeamCount(entry);
    } else if ($('#townMenDiv').hasClass('focus')) {
        incrementTownMenTotal(entry);
        incrementTownCount(entry);
    } else if ($('#townWomenDiv').hasClass('focus')) {
        incrementTownWomenTotal(entry);
        incrementTownCount(entry);
    } else {
        return;
    }
    incrementTotalCount(entry);
};

var incrementTeamCount = function(entry) {
    increaseCount($('#teamTotalCount'), entry);
    storeCount('team', entry);
};
var incrementTeamMenTotal = function(entry) {
    increaseCount($('#teamMenTotal'), entry);
    storeCount('teamMen', entry);
};
var incrementTeamWomenTotal = function(entry) {
    increaseCount($('#teamWomenTotal'), entry);
    storeCount('teamWomen', entry);
};
var incrementTownMenTotal = function(entry) {
    increaseCount($('#townMenTotal'), entry);
    storeCount('townMen', entry);
};
var incrementTownWomenTotal = function(entry) {
    increaseCount($('#townWomenTotal'), entry);
    storeCount('townWomen', entry);
};


var incrementTownCount = function(entry) {
    increaseCount($('#townTotalCount'), entry);
    storeCount('town', entry);
};

var incrementTotalCount = function(entry) {
  increaseCount($('#totalCount'), entry);
  storeCount('total', entry);
};

var increaseCount = function(whichCounter, entry) {
    var totalCount = Number(whichCounter.text());
    whichCounter.text(totalCount + entry);
};

var storeCount = function(whichCounter, value) {
    if (typeof(Storage) !== undefined) {
        if ('team' === whichCounter) {
          storeTeamCount(value);
        } else if ('teamMen' === whichCounter) {
          storeTeamMenTotal(value);
        } else if ('teamWomen' === whichCounter) {
          storeTeamWomenTotal(value);
        } else if ('town' === whichCounter) {
          storeTownCount(value);
        } else if ('townMen' === whichCounter) {
          storeTownMenTotal(value);
        } else if ('townWomen' === whichCounter) {
          storeTownWomenTotal(value);
        } else if ('total' === whichCounter) {
          storeTotalCount(value);
        }
    }
};

var storeTeamCount = function(value) {
    if (localStorage.teamCount) {
      localStorage.teamCount = Number(localStorage.teamCount) + value;
    } else {
      localStorage.teamCount = value;
    }
};
var storeTeamMenTotal = function(value) {
    if (localStorage.teamMenTotal) {
      localStorage.teamMenTotal = Number(localStorage.teamMenTotal) + value;
    } else {
      localStorage.teamMenTotal = value;
    }
};
var storeTeamWomenTotal = function(value) {
    if (localStorage.teamWomenTotal) {
      localStorage.teamWomenTotal = Number(localStorage.teamWomenTotal) + value;
    } else {
      localStorage.teamWomenTotal = value;
    }
};

var storeTownCount = function(value) {
    if (localStorage.townCount) {
        localStorage.townCount = Number(localStorage.townCount) + value;
    } else {
        localStorage.townCount = value;
    }
};
var storeTownMenTotal = function(value) {
    if (localStorage.townMenTotal) {
        localStorage.townMenTotal = Number(localStorage.townMenTotal) + value;
    } else {
        localStorage.townMenTotal = value;
    }
};
var storeTownWomenTotal = function(value) {
    if (localStorage.townWomenTotal) {
        localStorage.townWomenTotal = Number(localStorage.townWomenTotal) + value;
    } else {
        localStorage.townWomenTotal = value;
    }
};

var storeTotalCount = function(value) {
    if (localStorage.totalCount) {
        localStorage.totalCount = Number(localStorage.totalCount) + value;
    } else {
        localStorage.totalCount = value;
    }
};

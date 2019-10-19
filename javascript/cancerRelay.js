$(document).ready(function() {

    if (typeof(Storage) !== undefined) {
        $('#teamTotalCount').text(localStorage.teamCount);
        $('#townTotalCount').text(localStorage.townCount);
        $('#totalCount').text(localStorage.totalCount);
    }

    $(window).keypress(function(e) {
        var x = e.which || e.keycode;
        if (x > 48 && x <= 57) {
          addItUp(x - 48);
        }
    });

    $('#teamTotalDiv').click(function() {
        $('#teamTotalDiv').addClass('focus');
        $('#townTotalDiv').removeClass('focus');
    });

    $('#townTotalDiv').click(function(){
        $('#townTotalDiv').addClass('focus');
        $('#teamTotalDiv').removeClass('focus');
    });

    $('#logoDiv').click(function(){
        if (typeof(Storage) !== undefined) {
          localStorage.teamCount = 0;
          localStorage.townCount = 0;
          localStorage.totalCount = 0;
        }
    });

    $('#totalMileageRow').click(function() {
        $('#townTotalDiv').removeClass('focus');
        $('#teamTotalDiv').removeClass('focus');
    })
});

var addItUp = function(entry) {
    if ($('#teamTotalDiv').hasClass('focus')) {
        incrementTeamCount(entry);
    } else if ($('#townTotalDiv').hasClass('focus')) {
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
        } else if ('town' === whichCounter) {
          storeTownCount(value);
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

var storeTownCount = function(value) {
    if (localStorage.townCount) {
        localStorage.townCount = Number(localStorage.townCount) + value;
    } else {
        localStorage.townCount = value;
    }
};

var storeTotalCount = function(value) {
    if (localStorage.totalCount) {
        localStorage.totalCount = Number(localStorage.totalCount) + value;
    } else {
        localStorage.totalCount = value;
    }
};

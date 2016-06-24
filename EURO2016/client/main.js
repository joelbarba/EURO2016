import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';



/// Routing config
Router.configure({
  layoutTemplate: 'Main_template'
});

Router.route('/', function () {
  this.render('navbar', { to : "navbar" });    
  this.render('welcome_screen', { to : "main" });
});

Router.route('/principal', function () {
    this.render('navbar',           { to : "navbar" });
    this.render('principal_screen', { 
      to : "main",
      data : function() {
        return 0;
      }  
    }); 
  }, 
  { name : "prin" } // Parameter to know you are in this route
);

var match = [];
var bet = {};

Template.principal_screen.onRendered(function () { 



  create_tree(); 

});


function create_tree() {
  console.log('ini create_tree');

  var tab = $("#table").append("<tbody>");

  for (var h=0; h<=31; h++) {
    var fila = '<tr id="fila' + h +'">';
    for (var v=0; v<=19; v++) {
      var id = h + '-' + v;
      // fila += '<td id="col-' + id + '">' + id + '</td>';
      fila += '<td id="col-' + id + '"></td>';
    }
    fila += '</tr>';
    tab.append(fila);
  }

  for (var t = 0; t < 8; t++) {
    var mul = 4;
    var col = 1;
    var des = 1
    $('#col-' + ((t * mul) + des + 0) + '-' + col).attr('colspan', '2').addClass('team_col m1-' + ((t*2)+1)); $('#col-' + ((t * mul) + des + 0) + '-' + (col + 1)).remove();
    $('#col-' + ((t * mul) + des + 1) + '-' + col).attr('colspan', '2').addClass('team_col m1-' + ((t*2)+2)); $('#col-' + ((t * mul) + des + 1) + '-' + (col + 1)).remove();
    $('#col-' + ((t * mul) + des + 1) + '-' + (col + 2)).addClass('q1');
    $('#col-' + ((t * mul) + des + 1) + '-' + (col + 3)).addClass('q1');
    $('#col-' + ((t * mul) + des + 1) + '-' + (col + 4)).addClass('q1');
  }

  for (var t = 0; t < 4; t++) {
    var mul = 8;
    var col = 5;
    var des = 3;
    $('#col-' + ((t * mul) + des + 0) + '-' + col).attr('colspan', '2').addClass('team_col m2-' + ((t*2)+1)); $('#col-' + ((t * mul) + des + 0) + '-' + (col + 1)).remove();
    $('#col-' + ((t * mul) + des + 1) + '-' + col).attr('colspan', '2').addClass('team_col m2-' + ((t*2)+2)); $('#col-' + ((t * mul) + des + 1) + '-' + (col + 1)).remove();
    $('#col-' + ((t * mul) + des + 1) + '-' + (col + 2)).addClass('q1');
    $('#col-' + ((t * mul) + des + 1) + '-' + (col + 3)).addClass('q1');
    $('#col-' + ((t * mul) + des + 1) + '-' + (col + 4)).addClass('q1');
  }        

  for (var t = 0; t < 2; t++) {
    var mul = 16;
    var col = 9;
    var des = 7;
    $('#col-' + ((t * mul) + des + 0) + '-' + col).attr('colspan', '2').addClass('team_col m3-' + ((t*2)+1)); $('#col-' + ((t * mul) + des + 0) + '-' + (col + 1)).remove();
    $('#col-' + ((t * mul) + des + 1) + '-' + col).attr('colspan', '2').addClass('team_col m3-' + ((t*2)+2)); $('#col-' + ((t * mul) + des + 1) + '-' + (col + 1)).remove();
    $('#col-' + ((t * mul) + des + 1) + '-' + (col + 2)).addClass('q1');
    $('#col-' + ((t * mul) + des + 1) + '-' + (col + 3)).addClass('q1');
    $('#col-' + ((t * mul) + des + 1) + '-' + (col + 4)).addClass('q1');
  }  

  $('#col-15-13').attr('colspan', '2').addClass('team_col m4-1 '); $('#col-15-14').remove();
  $('#col-16-13').attr('colspan', '2').addClass('team_col m4-2'); $('#col-16-14').remove();

  $('#col-17-17').attr('colspan', '2').addClass('team_col m5-1'); $('#col-17-18').remove();
  
  $('#col-2-5').addClass('q2'); $('#col-5-5').addClass('q2');
  $('#col-10-5').addClass('q2'); $('#col-13-5').addClass('q2');
  $('#col-18-5').addClass('q2'); $('#col-21-5').addClass('q2');
  $('#col-26-5').addClass('q2'); $('#col-29-5').addClass('q2');

  $('#col-4-9').addClass('q2');
  $('#col-5-9').addClass('q2');
  $('#col-6-9').addClass('q2');
  $('#col-9-9').addClass('q2');
  $('#col-10-9').addClass('q2');
  $('#col-11-9').addClass('q2');
  
  $('#col-20-9').addClass('q2');
  $('#col-21-9').addClass('q2');
  $('#col-22-9').addClass('q2');
  $('#col-25-9').addClass('q2');
  $('#col-26-9').addClass('q2');
  $('#col-27-9').addClass('q2');

  $('#col-8-13').addClass('q2');
  $('#col-9-13').addClass('q2');
  $('#col-10-13').addClass('q2');
  $('#col-11-13').addClass('q2');
  $('#col-12-13').addClass('q2');
  $('#col-13-13').addClass('q2');
  $('#col-14-13').addClass('q2');

  $('#col-17-13').addClass('q2');
  $('#col-18-13').addClass('q2');
  $('#col-19-13').addClass('q2');
  $('#col-20-13').addClass('q2');
  $('#col-21-13').addClass('q2');
  $('#col-22-13').addClass('q2');
  $('#col-23-13').addClass('q2');
  
  $('#col-16-15').addClass('q1');
  $('#col-16-16').addClass('q1');
  $('#col-16-17').addClass('q1 q2');

  ///---

  var teams = [
    { id:   0, name: 'Switzerland' },
    { id:   1, name: 'Poland' },
    { id:   2, name: 'xxxxxxxxx2' },
    { id:   3, name: 'xxxxxxxxx3' },
    { id:   4, name: 'Wales' },
    { id:   5, name: 'xxxxxxxxx5' },
    { id:   6, name: 'xxxxxxxxx6' },
    { id:   7, name: 'xxxxxxxxx7' },
    { id:   8, name: 'Germany' },
    { id:   9, name: 'xxxxxxxxx9' },
    { id:  10, name: 'Italy' },
    { id:  11, name: 'xxxxxxxxx11' },
    { id:  12, name: 'France' },
    { id:  13, name: 'xxxxxxxxx13' },
    { id:  14, name: 'England' },
    { id:  15, name: 'xxxxxxxxx15' }
  ];
  
  match.push([teams[00], teams[01]]); // 0
  match.push([teams[02], teams[03]]); // 1
  match.push([teams[04], teams[05]]); // 2
  match.push([teams[06], teams[07]]); // 3
  match.push([teams[8],  teams[07]]); // 4
  match.push([teams[10], teams[11]]); // 5
  match.push([teams[12], teams[13]]); // 6
  match.push([teams[14], teams[15]]); // 7

  match.push([null, null]); // 8
  match.push([null, null]); // 9
  match.push([null, null]); // 10
  match.push([null, null]); // 11

  match.push([null, null]); // 12
  match.push([null, null]); // 13
  
  match.push([null, null]); // 14

  $('.m1-1').append( '<select> <option value="' + match[0][0].id + '">' + match[0][0].name + '</option> </select>');
  $('.m1-2').append( '<select> <option value="' + match[0][1].id + '">' + match[0][1].name + '</option> </select>');
  $('.m1-3').append( '<select> <option value="' + match[1][0].id + '">' + match[1][0].name + '</option> </select>');
  $('.m1-4').append( '<select> <option value="' + match[1][1].id + '">' + match[1][1].name + '</option> </select>');
  $('.m1-5').append( '<select> <option value="' + match[2][0].id + '">' + match[2][0].name + '</option> </select>');
  $('.m1-6').append( '<select> <option value="' + match[2][1].id + '">' + match[2][1].name + '</option> </select>');
  $('.m1-7').append( '<select> <option value="' + match[3][0].id + '">' + match[3][0].name + '</option> </select>');
  $('.m1-8').append( '<select> <option value="' + match[3][1].id + '">' + match[3][1].name + '</option> </select>');
  $('.m1-9').append( '<select> <option value="' + match[4][0].id + '">' + match[4][0].name + '</option> </select>');
  $('.m1-10').append('<select> <option value="' + match[4][1].id + '">' + match[4][1].name + '</option> </select>');
  $('.m1-11').append('<select> <option value="' + match[5][0].id + '">' + match[5][0].name + '</option> </select>');
  $('.m1-12').append('<select> <option value="' + match[5][1].id + '">' + match[5][1].name + '</option> </select>');
  $('.m1-13').append('<select> <option value="' + match[6][0].id + '">' + match[6][0].name + '</option> </select>');
  $('.m1-14').append('<select> <option value="' + match[6][1].id + '">' + match[6][1].name + '</option> </select>');
  $('.m1-15').append('<select> <option value="' + match[7][0].id + '">' + match[7][0].name + '</option> </select>');
  $('.m1-16').append('<select> <option value="' + match[7][1].id + '">' + match[7][1].name + '</option> </select>');

 

  setMatch = function (level, numMatch, sel) {
    var team1 = null;
    var team2 = null;

    if (level == 2) {
      nextMatch = numMatch - 1;
      team1 = match[nextMatch][0];
      team2 = match[nextMatch][1];
      nextClass = numMatch;
    }
    if (level == 3) {
      nextClass = Math.floor(numMatch / 2) + 1;
      nextMatch = 7 + nextClass;
      match[nextMatch][numMatch % 2] = teams[sel.value];
      team1 = match[nextMatch][0];
      team2 = match[nextMatch][1];
    }
    if (level == 4) {
      nextClass = Math.floor((numMatch - 8) / 2) + 1;
      nextMatch = 12 + nextClass;
      match[nextMatch][numMatch % 2] = teams[sel.value];
      team1 = match[nextMatch][0];
      team2 = match[nextMatch][1];
    }
    if (level == 5) {
      nextClass = 1;
      nextMatch = 14;
      match[14][numMatch % 2] = teams[sel.value];
      team1 = match[nextMatch][0];
      team2 = match[nextMatch][1];
    }          

    var sel = '<select onchange="setMatch(' + (level + 1) + ', ' + nextMatch  + ', this)"> ';
    sel += ' <option value="null"></option> ';
    if (team1) sel += ' <option value="' + team1.id + '">' + team1.name + '</option> ';
    if (team2) sel += ' <option value="' + team2.id + '">' + team2.name + '</option> ';
    sel += ' </select>';
    $('.m' + level + '-' + nextClass).html(sel);
  }

  setMatch(2, 1, null);
  setMatch(2, 2, null);
  setMatch(2, 3, null);
  setMatch(2, 4, null);
  setMatch(2, 5, null);
  setMatch(2, 6, null);
  setMatch(2, 7, null);
  setMatch(2, 8, null);  


  if (Meteor.user()) { 
    bet = Bets.findOne(
          { _id: Meteor.user()._id},
          { sort  : { _id: 1 }, 
            limit : 500}
      );
    // console.log(bet);
    if (bet) {
      match = bet.match;

      currMatch = match[8][0];
      if (currMatch) {
        $('.m2-1 select').val(currMatch.id);
        setMatch(3, 0, {value: currMatch.id});
      }

      currMatch = match[8][1];
      if (currMatch) {
        $('.m2-2 select').val(currMatch.id);
        setMatch(3, 1, {value: currMatch.id});
      }

      currMatch = match[9][0];
      if (currMatch) {
        $('.m2-3 select').val(currMatch.id);
        setMatch(3, 2, {value: currMatch.id});
      }

      currMatch = match[9][1];
      if (currMatch) {
        $('.m2-4 select').val(currMatch.id);
        setMatch(3, 3, {value: currMatch.id});
      }




    }
  }   



  console.log('end create_tree');
}


Template.principal_screen.helpers({
  getbets: function() {
    return Bets.find(
                {},
                { sort  : { _id: 1 }, 
                  limit : 500}
            );
  }
});

Template.principal_screen.events({
    "click .js-save-bet": function(event) { 
      console.log('save bet');
      // Bets.insert({
      //   matches     : [1, 2, 3, 5],
      //   user_id     : Meteor.user()._id,
      //   created     : 0,
      //   modified    : 0,
      //   points      : 342
      // });
      

      // var newBet = {
      //   match : match,
      //   // winner1:  match[8][0],
      //   // winner2:  match[8][1],
      //   // winner3:  match[9][0],
      //   // winner4:  match[9][1],
      //   // winner5:  match[10][0],
      //   // winner6:  match[10][1],
      //   // winner7:  match[11][0],
      //   // winner8:  match[11][1],
      //   // winner9:  match[12][0],
      //   // winner10: match[12][1],
      //   // winner11: match[13][0],
      //   // winner12: match[13][1],
      //   // winner13: match[14][0],
      //   // winner14: match[14][1],
      //   modified: new Date()
      // }
      var newBet = {
        _id         : Meteor.user()._id,
        modified    : new Date(),
        match       : match
      };

      Meteor.call( 'betUpsert', Meteor.user()._id, newBet );
      // betUpsert(Meteor.user()._id, { points: 40, matches: [3, 4, 6] });
      // Bets.update(
      //             { _id : Meteor.user()._id }, 
      //             { points: 40, matches: [3, 4, 6] },
      //             { upsert: true}
      //         );      

      // if (Bets.findOne({ _id: Meteor.user()._id })) {
      //   Bets.remove(
      //      { _id: Meteor.user()._id }, { justOne: true }
      //   ); 
      // }      
      // Bets.insert(newBet);
    }
});
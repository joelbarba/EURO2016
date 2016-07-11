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

Router.route('/ranking', function () {
    this.render('navbar',           { to : "navbar" });
    this.render('ranking_screen', { to : "main" }); 
  }, 
  { name : "rank" } // Parameter to know you are in this route
);

var match = [];
var bet = {};

Template.principal_screen.onRendered(function () { 

	setTimeout(function() {
	 	create_tree(); 
	 }, 
	 1000);

  

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
    { id:   2, name: 'Croatia' },
    { id:   3, name: 'Portugal' },
    { id:   4, name: 'Wales' },
    { id:   5, name: 'N. Ireland' },
    { id:   6, name: 'Hungary' },
    { id:   7, name: 'Belgium' },
    { id:   8, name: 'Germany' },
    { id:   9, name: 'Slovakia' },
    { id:  10, name: 'Italy' },
    { id:  11, name: 'Spain' },
    { id:  12, name: 'France' },
    { id:  13, name: 'Ireland' },
    { id:  14, name: 'England' },
    { id:  15, name: 'Iceland' }
  ];
  
  match.push([teams[00], teams[01]]); // 0
  match.push([teams[02], teams[03]]); // 1
  match.push([teams[04], teams[05]]); // 2
  match.push([teams[06], teams[07]]); // 3
  match.push([teams[8],  teams[9]]); // 4
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
  match.push([null, null]); // 15

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
      nextMatch = 11 + nextClass;
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
    if (level == 6) {
      if (match.length < 16) match.push([null, null]); // 15
      match[15][0] = teams[sel.value];
      return;
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

      currMatch = match[10][0];
      if (currMatch) {
        $('.m2-5 select').val(currMatch.id);
        setMatch(3, 4, {value: currMatch.id});
      }
      currMatch = match[10][1];
      if (currMatch) {
        $('.m2-6 select').val(currMatch.id);
        setMatch(3, 5, {value: currMatch.id});
      }

      currMatch = match[11][0];
      if (currMatch) {
        $('.m2-7 select').val(currMatch.id);
        setMatch(3, 6, {value: currMatch.id});
      }
      currMatch = match[11][1];
      if (currMatch) {
        $('.m2-8 select').val(currMatch.id);
        setMatch(3, 7, {value: currMatch.id});
      }


      currMatch = match[12][0];
      if (currMatch) {
        $('.m3-1 select').val(currMatch.id);
        setMatch(4, 8, {value: currMatch.id});
      }
      currMatch = match[12][1];
      if (currMatch) {
        $('.m3-2 select').val(currMatch.id);
        setMatch(4, 9, {value: currMatch.id});
      }

      currMatch = match[13][0];
      if (currMatch) {
        $('.m3-3 select').val(currMatch.id);
        setMatch(4, 10, {value: currMatch.id});
      }
      currMatch = match[13][1];
      if (currMatch) {
        $('.m3-4 select').val(currMatch.id);
        setMatch(4, 11, {value: currMatch.id});
      }


      currMatch = match[14][0];
      if (currMatch) {
        $('.m4-1 select').val(currMatch.id);
        setMatch(5, 12, {value: currMatch.id});
      }
      currMatch = match[14][1];
      if (currMatch) {
        $('.m4-2 select').val(currMatch.id);
        setMatch(5, 13, {value: currMatch.id});
      }

      currMatch = match[15][0];
      if (currMatch) {
        $('.m5-1 select').val(currMatch.id);
        setMatch(6, 14, {value: currMatch.id});
      }

    }
  }   



  console.log('end create_tree');
}



Template.principal_screen.events({
    "click .js-save-bet": function(event) { 
      console.log('save bet');
      if (new Date() > new Date(2016, 5, 25, 14)) {
          alert('I am sorry, it is too late to bet. Ask Joel if you want to change something');
          return -1;
      }

      var newBet = {
        _id         : Meteor.user()._id,
        modified    : new Date(),
        match       : match
      };

      Meteor.call( 'betUpsert', Meteor.user()._id, newBet );
      alert("Fine, good luck!");
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

Template.ranking_screen.events({
  "click .js-reload": function(event) { 
      // Meteor.users.insert({
        //   "_id":"4EsY3LsENRgayduqY",
        //   "createdAt":{"$date":"2016-06-24T13:15:46.360Z"},
        //   "services":{
        //       "password":{"bcrypt":"$2a$10$HKx1o3yTZWxuVVWLhVHDc.9Bg/pZb9OwWVtjROzHDmf.8D1oQt3MW"},
        //       "resume":{
        //         "loginTokens":[
        //           {"when":{"$date":"2016-06-24T13:29:24.844Z"},
        //           "hashedToken":"oZzx4/qCGWNOl/VdyBBifqsuwVlDwamts+beCwDOywE="}
        //           ,{"when":{"$date":"2016-06-24T19:09:19.250Z"},
        //           "hashedToken":"5JZiGqhtWtqlWO+BLdn0ZWaLuz05KtdyMLXT5BSNGqs="}
        //           ]
        //       }
        //   },
        //   "emails":[{"address":"joel.barba@one.com","verified":false}]
        // });
      alert('inserted');
    }
});

var ranking = [];



var winners = [
null, // 0
'Poland', // 1
'Portugal', // 2
'Wales', // 3
'Belgium', // 4
'Germany', // 5
'Italy', // 6
'France', // 7
'Iceland', // 8
'Portugal', // 9
'Wales', // 10
'Gernay', // 11
'France', // 12
'Portugal', // 13
'France', // 14
'Portugal' // 15
];

// DEPLOY_HOSTNAME=galaxy.meteor.com meteor deploy joel-euro2016.meteorapp.com --settings ./settings.json


Template.ranking_screen.helpers({
  getbets: function() {
    return Bets.find(
                {},
                { sort  : { _id: 1 }, 
                  limit : 500}
            );
  },
  getusers: function() {
    return Meteor.users.find(
                {},
                { sort  : { _id: 1 }, 
                  limit : 500}
            );
  },
  getwinner: function(num) {
    return winners[num];
  },
  getranking: function() {



    ranking = [];
    Bets.find({},{}).forEach(function(item) { 
      item.winner = [];
      item.points = 0;

      item.winner1 = item.match[8][0].name;
      item.winner2 = item.match[8][1].name;
      item.winner3 = item.match[9][0].name;
      item.winner4 = item.match[9][1].name;
      item.winner5 = item.match[10][0].name;
      item.winner6 = item.match[10][1].name;
      item.winner7 = item.match[11][0].name;
      item.winner8 = item.match[11][1].name;
      item.winner9 = item.match[12][0].name;
      item.winner10 = item.match[12][1].name;
      item.winner11 = item.match[13][0].name;
      item.winner12 = item.match[13][1].name;
      item.winner13 = item.match[14][0].name;
      item.winner14 = item.match[14][1].name;
      item.winner15 = item.match[15][0].name;

      if (winners[1] == item.winner1)   { item.result1 = 'ok'; item.points++; }
      if (winners[2] == item.winner2)   { item.result2 = 'ok'; item.points++; }
      if (winners[3] == item.winner3)   { item.result3 = 'ok'; item.points++; }
      if (winners[4] == item.winner4)   { item.result4 = 'ok'; item.points++; }
      if (winners[5] == item.winner5)   { item.result5 = 'ok'; item.points++; }
      if (winners[6] == item.winner6)   { item.result6 = 'ok'; item.points++; }
      if (winners[7] == item.winner7)   { item.result7 = 'ok'; item.points++; }
      if (winners[8] == item.winner8)   { item.result8 = 'ok'; item.points++; }
      if (winners[9] == item.winner9)   { item.result9 = 'ok'; item.points++; }
      if (winners[10] == item.winner10) { item.result10 = 'ok'; item.points++; }
      if (winners[11] == item.winner11) { item.result11 = 'ok'; item.points++; }
      if (winners[12] == item.winner12) { item.result12 = 'ok'; item.points++; }
      if (winners[13] == item.winner13) { item.result13 = 'ok'; item.points++; }
      if (winners[14] == item.winner14) { item.result14 = 'ok'; item.points++; }
      if (winners[15] == item.winner15) { item.result15 = 'ok'; item.points++; }

      ranking.push(item); 
    });


    // for (var t = 0; t < ranking.length; t++) {
    //   Meteor.call('getUser', ranking[t]._id, function(error, result){
    //     if(!error){
    //       if (result.emails) {

    //               for (var i = 0; i < ranking.length; i++) {
    //                 if (ranking[i]._id == result._id) {
    //                   ranking[i].nom2 = result.emails[0].address;
    //                 }
    //               }
    //       }
    //     }
    //   });
    // }
    // console.log(ranking);
    
    // Meteor.users.find({},{}).forEach(function(item) { 
    //   console.log(item)
    //   Meteor.call('getUser', item._id, function(error, result){
    //     if(!error){
    //       for (var t = 0; t < ranking.length; t++) {
    //         if (ranking[t]._id == result._id) {
    //           console.log('res', result, ranking[t]);
              
    //         }
    //       }
    //     }
    //   });  

    // });


    // Meteor.call( 'getUser', "4EsY3LsENRgayduqY", usuari);
  


    // ranking.forEach(function(bet) {
    //   var user = Meteor.users.findOne(
    //             { _id : bet._id },
    //             {}
    //         );
    //   bet.user = user;
    // });

    return ranking;
  }
});
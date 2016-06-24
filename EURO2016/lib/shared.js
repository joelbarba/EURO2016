//shared code
Meteor.methods({
  betUpsert: function( id, doc ){
  		console.log('bet updated');
     Bets.upsert( id, doc );
  }
});
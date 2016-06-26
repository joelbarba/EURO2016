//shared code
Meteor.methods({

  betUpsert: function( id, doc ){
  		if (new Date() < new Date(2016, 5, 25, 14)) {
	  		console.log('bet updated');
     		Bets.upsert( id, doc );
     	}
  },
  getUsers: function(usuaris) {
    usuaris = Meteor.users.find({},{});
    usuaris.forEach(function(i, e) { 
      // console.log(i, e); 
    });
    // return usuaris;
  },
  getUser: function(id) {
    var usuari = Meteor.users.findOne({_id: id},{});
    // console.log(usuari);
    return usuari;
  }

});
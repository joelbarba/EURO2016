Bets = new Mongo.Collection("bets");


// set up security on Websites collection
Bets.allow({

	update: function(user_id, doc) {
		return true;
	},

	insert: function(user_id, doc) {
		return true;
	}, 
	remove: function(user_id, doc) {
		return true;
	}
});


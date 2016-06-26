Bets = new Mongo.Collection("bets");
// users = new Mongo.Collection("users");

// set up security on Websites collection
Bets.allow({

	update: function(_id, doc) {
		return true;
	},

	insert: function(_id, doc) {
		return true;
	}, 
	remove: function(_id, doc) {
		return true;
	}
});


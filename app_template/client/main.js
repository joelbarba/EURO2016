
// ------- Routing config ----------------------------------------------------
Router.configure({
  layoutTemplate: 'Main_template'
});

Router.route('/', function () {
  this.render('navbar',         { to : "navbar" });    
  this.render('welcome_screen', { to : "main"   });
});

Router.route('/principal', function () {
    this.render('navbar',           { to : "navbar" });
    this.render('principal_screen', { to : "main"   }); 
  }, 
  { name : "prin" } // Parameter to know you are in this route
);




// ------- User loggin config ----------------------------------------------------
Accounts.ui.config({
    passwordSignupFields: "USERNAME_AND_EMAIL"
});




// ------- Template helpers ----------------------------------------------------

Template.body.helpers({
  username:function() {
    if (Meteor.user()) return Meteor.user().username;
    else               return "anonymous internet user";
  }
});



Template.principal_screen.helpers({
    principal_screen: function() {

      return Websites.find(
          {},
          { sort  : { count_vup: -1, count_vdw: 1 }, 
            limit : Session.get("itemsLimit")}
      );
    }
});





// ------- Template events ----------------------------------------------------

Template.navbar.events({

    "click .js-button1": function(event) {
        console.log("button 1 clicked");
        return false;
    }
});



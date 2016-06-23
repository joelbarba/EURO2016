// start up function that creates entries in the Websites databases.
Meteor.startup(function () {
    
    // code to run on server at startup
    if (!Websites.findOne()){
        console.log("No websites yet. Creating starter data.");
          Websites.insert({
            ...
          });
          // ...
    }
    
    // Definition for a function that run in the server and i can be called from the client
    Meteor.methods({
	  server_fun_to_be_call_from_the_client: function (param_url) {
          var resp = HTTP.call('GET', param_url, {});
          return resp;
	  }
    });
    
    
    // To execute constantly a function on the server
/*
    Meteor.setInterval(function() {
        console.log('I am the server, all ok!');
    }, 5 * 60 * 1000);  // Every 5 minutes
*/    
    

    
    console.log('Initialized');
    
});
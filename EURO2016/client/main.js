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
    this.render('principal_screen', { to : "main"   }); 
  }, 
  { name : "prin" } // Parameter to know you are in this route
);






Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});

if (Meteor.isClient) {

  Template.twitterfeed.helpers({
    counter: function () {
      
    }
  });

  Template.twitterfeed.events({
    'click .feed': function () {
      console.log('clicked feed');
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
Resolutions = new Mongo.Collection('resolutions');

Meteor.publish('userResolutions', function() {
  return Resolutions.find({user: this.userId});
});

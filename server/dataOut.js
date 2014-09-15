Meteor.publish('getDocs', function(query, options) {
  this.unblock();
  return Posts.find(query, options);
});

Meteor.methods({
  getDocs: function(query, options) {
    this.unblock();
    return Posts.find(query, options).fetch();
  }
});

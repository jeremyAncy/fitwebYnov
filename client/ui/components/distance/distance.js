import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

Meteor.call('addView', function(response) {
  console.log(response);
});

Template.distanceList.helpers({
	distances: function() {
        console.log(Distances.find());
        return Distances.find();
  }
});
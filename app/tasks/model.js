import DS from 'ember-data';

var todos = DS.Model.extend({
  title:DS.attr('string'),
  description:DS.attr('string'),
  date:DS.attr('date'),
  created:DS.attr('string', {
    defaultValue: function(){
      return new Date();
    }
  }),
});
todos.reopen({
  UF_modifiedDate: Ember.computed('modifiedDate',{
    get(){
      let date=new Date(this.get('modifiedDate'));
      return date.toDateString();
    }
  }),
});

export default todos;


//example

//
//  var TimeSlotController = Ember.ArrayController.extend({
//  content: [ ],
//
//  sortProperties: ['todayEvent'],
//  sortAscending: true,
//
//  day: Ember.A(['2017-03-07']),
//
//  todayEvent: function(){
// var  self = this;
//    var u = self.get('content');
//   console.log('u', u);
//   var kl =  u.filter(function(availableSlot) {
//    console.log ('a', availableSlot.get('date') );
//
//  return (moment(availableSlot.get('date')).format("YYYY-MM-DD") ===  self.get('day').toString() );
//   });
//
//    return kl;
//  }.property('day', 'content@each'),


// });

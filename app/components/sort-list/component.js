import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'ul',
  sortedReviews: Ember.computed.sort('finalresult', 'sortDefinition'),
  sortBy: '', // default sort by date
  sortDefinition: Ember.computed('sortBy', function() {
    return [ this.get('sortBy') ];
  }),
  init:function(){
    this._super.apply(this,this.arguments);
    this.set('sortBy',this.get('defaultsort'));
  },
  actions: {
      sort: function(sortBy) {
           this.set('sortBy',sortBy);
        }
      }


});

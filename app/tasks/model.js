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

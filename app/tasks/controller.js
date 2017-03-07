import Ember from 'ember';

export default Ember.Controller.extend({
  sortlist :[
    {'title':'Title','sortBy':'title'},
    {'title':'Due Date','sortBy':'date'},
    {'title':'Description','sortBy':'description'},
  ],
actions:{
  deleteTasks: function(id){
    this.store.findRecord('tasks',id).then(function(tasks){
      tasks.deleteRecord();
      tasks.save();
    });
  }
}
});

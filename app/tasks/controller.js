import Ember from 'ember';

export default Ember.Controller.extend({
actions:{
  deleteTasks: function(id){
    this.store.findRecord('tasks',id).then(function(tasks){
      tasks.deleteRecord();
      tasks.save();
    });
  }
}
});

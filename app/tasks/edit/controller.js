import Ember from 'ember';

export default Ember.Controller.extend({
  actions:{
    editTask:function(id){
      var self=this;
      var title=this.get('model.title');
      var description =this.get('model.description');
      var date=this.get('model.date');


      //Update tasks
      this.store.findRecords('tasks',id).then(function(tasks){
        task.set('title',title);
        task.set('descripition',description);
        task.set('date',new Date(date));

        //save the database
        tasks.save();
        self.transitionTo('tasks/index');
      });
    }
  }
});

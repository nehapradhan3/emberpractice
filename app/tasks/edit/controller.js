import Ember from 'ember';

export default Ember.Controller.extend({
  actions:{
    editTask:function(id){
      var self=this;
      var title=this.get('model.title');
      var description =this.get('model.description');
      var date=this.get('model.date');


      //Update tasks
      this.store.findRecord('tasks',id).then(function(tasks){
        tasks.set('title',title);
        tasks.set('descripition',description);
        tasks.set('date',new Date(date));

        //save the database
        tasks.save().then((e)=>{
          console.log("Result",e);
          this.setProperties({
            title:'',
            description:'',
            date:''
          });
        },function(e){
          console.log("Error",e);
        });

        self.transitionTo('tasks');
      });
    }

  }
});

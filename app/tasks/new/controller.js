import Ember from 'ember';

export default Ember.Controller.extend({
  actions:{
    addTask:function(){
      var title=this.get('title');
      var description =this.get('description');
      var date=this.get('date');


  //Create New tasks
  var newTask =this.store.createRecord('tasks',{
    title:title,
    description:description,
    date:new Date(date)
  });

  //save to firebase database
  newTask.save().then((e)=>{
    console.log("Result",e);
    this.setProperties({
      title:'',
      description:'',
      date:''
    });
  },function(e){
    console.log("Error",e);
  });

  //clear Form

    }
  }
});

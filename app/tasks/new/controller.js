import Ember from 'ember';

export default Ember.Controller.extend({
  actions:{
    addTask:function(){
      var title=this.get('title');
      alert(title);
    }
  }
});

"use strict";

/* jshint ignore:start */



/* jshint ignore:end */

define('emberapp/adapters/application', ['exports', 'emberfire/adapters/firebase'], function (exports, _emberfireAdaptersFirebase) {
  exports['default'] = _emberfireAdaptersFirebase['default'].extend({});
});
// import Ember from 'ember';
define('emberapp/app', ['exports', 'ember', 'emberapp/resolver', 'ember-load-initializers', 'emberapp/config/environment'], function (exports, _ember, _emberappResolver, _emberLoadInitializers, _emberappConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _emberappConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _emberappConfigEnvironment['default'].podModulePrefix,
    Resolver: _emberappResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _emberappConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define('emberapp/application/adapter', ['exports', 'emberfire/adapters/firebase'], function (exports, _emberfireAdaptersFirebase) {
  exports['default'] = _emberfireAdaptersFirebase['default'].extend({});
});
// import Ember from 'ember';
define('emberapp/components/sort-list', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    tagName: 'ul',
    sortedReviews: _ember['default'].computed.sort('sorts', 'sortDefinition'),
    sortBy: 'date', //default sort by date
    reverseSort: false, //default sort in ascending order
    sortDefinition: _ember['default'].computed('sortBy', 'reverseSort', function () {
      var sortOrder = this.get('reverseSort') ? 'desc' : 'asc';
      return [this.get('sortBy') + ':' + sortOrder];
    })
  });
});
define('emberapp/components/sort-list/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    tagName: 'ul',
    sortedReviews: _ember['default'].computed.sort('finalresult', 'sortDefinition'),
    sortBy: '', // default sort by date
    sortDefinition: _ember['default'].computed('sortBy', function () {
      return [this.get('sortBy')];
    }),
    init: function init() {
      this._super.apply(this, this.arguments);
      this.set('sortBy', this.get('defaultsort'));
    },
    actions: {
      sort: function sort(sortBy) {
        this.set('sortBy', sortBy);
      }
    }

  });
});
define("emberapp/components/sort-list/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "C94V0Juk", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"flush-element\"],[\"text\",\"\\n  \"],[\"comment\",\" {{radio-button value='date' groupValue=sortBy}}Date \"],[\"text\",\"\\n  \"],[\"append\",[\"helper\",[\"log\"],[\"dropdownlist\",[\"get\",[\"dropdownlist\"]]],null],false],[\"text\",\"\\n\"],[\"comment\",\"dropdown\"],[\"text\",\"\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"dropdown\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"btn btn-primary dropdown-toggle\"],[\"static-attr\",\"type\",\"button\"],[\"static-attr\",\"data-toggle\",\"dropdown\"],[\"flush-element\"],[\"text\",\"Sort By\\n    \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"caret\"],[\"flush-element\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"ul\",[]],[\"static-attr\",\"class\",\"dropdown-menu\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"dropdownlist\"]]],null,1],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"comment\",\"dropdown ends\"],[\"text\",\"\\n\"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"append\",[\"helper\",[\"input\"],null,[[\"type\",\"checked\"],[\"checkbox\",[\"get\",[\"reverseSort\"]]]]],false],[\"text\",\"Reverse sort\\n\"],[\"close-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"sortedReviews\"]]],null,0]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"open-element\",\"ul\",[]],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"sort\",\"title\"]],false],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"sort\",\"date\"]],false],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"sort\"]},{\"statements\":[[\"text\",\"        \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"#\"],[\"flush-element\"],[\"open-element\",\"button\",[]],[\"modifier\",[\"action\"],[[\"get\",[null]],\"sort\",[\"get\",[\"list\",\"sortBy\"]]]],[\"flush-element\"],[\"append\",[\"unknown\",[\"list\",\"title\"]],false],[\"close-element\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n\\n        \"],[\"comment\",\" {{action 'sortList'}} \"],[\"text\",\"\\n\"]],\"locals\":[\"list\",\"index\"]}],\"hasPartials\":false}", "meta": { "moduleName": "emberapp/components/sort-list/template.hbs" } });
});
define('emberapp/components/welcome-page', ['exports', 'ember-welcome-page/components/welcome-page'], function (exports, _emberWelcomePageComponentsWelcomePage) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberWelcomePageComponentsWelcomePage['default'];
    }
  });
});
define('emberapp/controller/controller', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({});
});
define('emberapp/helpers/app-version', ['exports', 'ember', 'emberapp/config/environment'], function (exports, _ember, _emberappConfigEnvironment) {
  exports.appVersion = appVersion;
  var version = _emberappConfigEnvironment['default'].APP.version;

  function appVersion() {
    return version;
  }

  exports['default'] = _ember['default'].Helper.helper(appVersion);
});
define('emberapp/helpers/format-date', ['exports', 'ember'], function (exports, _ember) {
  exports.formatDate = formatDate;

  function formatDate(params) {
    console.log(params, "fghjkl");
    return moment(params[0]).format('YYYY-MM-DD');
  }

  exports['default'] = _ember['default'].Helper.helper(formatDate);
});
define('emberapp/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _emberInflectorLibHelpersPluralize) {
  exports['default'] = _emberInflectorLibHelpersPluralize['default'];
});
define('emberapp/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _emberInflectorLibHelpersSingularize) {
  exports['default'] = _emberInflectorLibHelpersSingularize['default'];
});
define('emberapp/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'emberapp/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _emberappConfigEnvironment) {
  var _config$APP = _emberappConfigEnvironment['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(name, version)
  };
});
define('emberapp/initializers/container-debug-adapter', ['exports', 'ember-resolver/container-debug-adapter'], function (exports, _emberResolverContainerDebugAdapter) {
  exports['default'] = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _emberResolverContainerDebugAdapter['default']);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('emberapp/initializers/data-adapter', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `data-adapter` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'data-adapter',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('emberapp/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data/-private/core'], function (exports, _emberDataSetupContainer, _emberDataPrivateCore) {

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    App.StoreService = DS.Store.extend({
      adapter: 'custom'
    });
  
    App.PostsController = Ember.Controller.extend({
      // ...
    });
  
    When the application is initialized, `App.ApplicationStore` will automatically be
    instantiated, and the instance of `App.PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */

  exports['default'] = {
    name: 'ember-data',
    initialize: _emberDataSetupContainer['default']
  };
});
define('emberapp/initializers/emberfire', ['exports', 'emberfire/initializers/emberfire'], function (exports, _emberfireInitializersEmberfire) {
  exports['default'] = _emberfireInitializersEmberfire['default'];
});
define('emberapp/initializers/export-application-global', ['exports', 'ember', 'emberapp/config/environment'], function (exports, _ember, _emberappConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_emberappConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _emberappConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_emberappConfigEnvironment['default'].modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('emberapp/initializers/injectStore', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `injectStore` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'injectStore',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('emberapp/initializers/store', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `store` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'store',
    after: 'ember-data',
    initialize: function initialize() {}
  };
});
define('emberapp/initializers/transforms', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `transforms` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'transforms',
    before: 'store',
    initialize: function initialize() {}
  };
});
define("emberapp/instance-initializers/ember-data", ["exports", "ember-data/-private/instance-initializers/initialize-store-service"], function (exports, _emberDataPrivateInstanceInitializersInitializeStoreService) {
  exports["default"] = {
    name: "ember-data",
    initialize: _emberDataPrivateInstanceInitializersInitializeStoreService["default"]
  };
});
define('emberapp/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  exports['default'] = _emberResolver['default'];
});
define('emberapp/router', ['exports', 'ember', 'emberapp/config/environment'], function (exports, _ember, _emberappConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _emberappConfigEnvironment['default'].locationType,
    rootURL: _emberappConfigEnvironment['default'].rootURL
  });

  Router.map(function () {
    this.resource('tasks', function () {
      this.route('new');
      this.route('edit', { path: '/edit/:tasks_id' });
      // this.route('index');
    });
  });

  exports['default'] = Router;
});
define('emberapp/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _emberAjaxServicesAjax) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAjaxServicesAjax['default'];
    }
  });
});
define('emberapp/services/firebase-app', ['exports', 'emberfire/services/firebase-app'], function (exports, _emberfireServicesFirebaseApp) {
  exports['default'] = _emberfireServicesFirebaseApp['default'];
});
define('emberapp/services/firebase', ['exports', 'emberfire/services/firebase'], function (exports, _emberfireServicesFirebase) {
  exports['default'] = _emberfireServicesFirebase['default'];
});
define('emberapp/task/model', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    title: _emberData['default'].attr('string'),
    description: _emberData['default'].attr('string'),
    date: _emberData['default'].attr('date'),
    created: _emberData['default'].attr('string', {
      defaultValue: function defaultValue() {
        return new Date();
      }
    })
  });
});
define('emberapp/tasks/controller', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    sortlist: [{ 'title': 'Title', 'sortBy': 'title' }, { 'title': 'Due Date', 'sortBy': 'date' }, { 'title': 'Description', 'sortBy': 'description' }],
    actions: {
      deleteTasks: function deleteTasks(id) {
        this.store.findRecord('tasks', id).then(function (tasks) {
          tasks.deleteRecord();
          tasks.save();
        });
      }
    }
  });
});
define('emberapp/tasks/edit/controller', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    actions: {
      editTask: function editTask(id) {
        var self = this;
        var title = this.get('model.title');
        var description = this.get('model.description');
        var date = this.get('model.date');

        //Update tasks
        this.store.findRecord('tasks', id).then(function (tasks) {
          var _this = this;

          tasks.set('title', title);
          tasks.set('descripition', description);
          tasks.set('date', new Date(date));

          //save the database
          tasks.save().then(function (e) {
            console.log("Result", e);
            _this.setProperties({
              title: '',
              description: '',
              date: ''
            });
          }, function (e) {
            console.log("Error", e);
          });

          self.transitionTo('tasks');
        });
      }

    }
  });
});
define('emberapp/tasks/edit/model', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({});
});
define('emberapp/tasks/edit/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define("emberapp/tasks/edit/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "CzWZlLCT", "block": "{\"statements\":[[\"open-element\",\"form\",[]],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form-group\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"label\",[]],[\"flush-element\"],[\"text\",\"Title\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"append\",[\"helper\",[\"input\"],null,[[\"type\",\"class\",\"value\",\"placeholder\"],[\"text\",\"form-control\",[\"get\",[\"model\",\"title\"]],\"Add Task..\"]]],false],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form-group\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"label\",[]],[\"flush-element\"],[\"text\",\"Due Date\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"append\",[\"helper\",[\"input\"],null,[[\"type\",\"class\",\"value\"],[\"date\",\"form-control\",[\"get\",[\"model\",\"date\"]]]]],false],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form-group\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"label\",[]],[\"flush-element\"],[\"text\",\"Description\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"append\",[\"helper\",[\"textarea\"],null,[[\"class\",\"value\",\"placeholder\"],[\"form-control\",[\"get\",[\"model\",\"description\"]],\"Description Task..\"]]],false],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"btn btn-primary\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"editTask\",[\"get\",[\"model\",\"id\"]]]],[\"flush-element\"],[\"text\",\"Submit\"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "emberapp/tasks/edit/template.hbs" } });
});
define('emberapp/tasks/index/controller', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({});
});
define('emberapp/tasks/index/model', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    title: _emberData['default'].attr('string'),
    description: _emberData['default'].attr('string'),
    date: _emberData['default'].attr('date'),
    created: _emberData['default'].attr('string', {
      defaultValue: function defaultValue() {
        return new Date();
      }
    })
  });
});
define('emberapp/tasks/index/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model() {
      return this.store.findAll('tasks');
    }
  });
});
define("emberapp/tasks/index/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "ulPX27+F", "block": "{\"statements\":[[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "emberapp/tasks/index/template.hbs" } });
});
define('emberapp/tasks/model', ['exports', 'ember-data'], function (exports, _emberData) {

  var todos = _emberData['default'].Model.extend({
    title: _emberData['default'].attr('string'),
    description: _emberData['default'].attr('string'),
    date: _emberData['default'].attr('date'),
    created: _emberData['default'].attr('string', {
      defaultValue: function defaultValue() {
        return new Date();
      }
    })
  });
  todos.reopen({
    UF_modifiedDate: Ember.computed('modifiedDate', {
      get: function get() {
        var date = new Date(this.get('modifiedDate'));
        return date.toDateString();
      }
    })
  });

  exports['default'] = todos;

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
});
define('emberapp/tasks/new/controller', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    actions: {
      addTask: function addTask() {
        var _this = this;

        // var self=this;
        var title = this.get('title');
        var description = this.get('description');
        var date = this.get('date');

        //Create New tasks
        var newTask = this.store.createRecord('tasks', {
          title: title,
          description: description,
          date: new Date(date)
        });

        //save to firebase database
        newTask.save().then(function (e) {
          console.log("Result", e);
          _this.setProperties({
            title: '',
            description: '',
            date: ''
          });
        }, function (e) {
          console.log("Error", e);
        });

        // self.transitionTo('tasks');
      }
    }
  });
});
define('emberapp/tasks/new/model', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({});
});
define('emberapp/tasks/new/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define("emberapp/tasks/new/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "QDBqdxR+", "block": "{\"statements\":[[\"open-element\",\"form\",[]],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form-group\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"label\",[]],[\"flush-element\"],[\"text\",\"Title\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"append\",[\"helper\",[\"input\"],null,[[\"type\",\"class\",\"value\",\"placeholder\"],[\"text\",\"form-control\",[\"get\",[\"title\"]],\"Add Task..\"]]],false],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form-group\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"label\",[]],[\"flush-element\"],[\"text\",\"Due Date\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"append\",[\"helper\",[\"input\"],null,[[\"type\",\"class\",\"value\"],[\"date\",\"form-control\",[\"get\",[\"date\"]]]]],false],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form-group\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"label\",[]],[\"flush-element\"],[\"text\",\"Description\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"append\",[\"helper\",[\"textarea\"],null,[[\"class\",\"value\",\"placeholder\"],[\"form-control\",[\"get\",[\"description\"]],\"Description Task..\"]]],false],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"btn btn-primary\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"addTask\"]],[\"flush-element\"],[\"text\",\"Submit\"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "emberapp/tasks/new/template.hbs" } });
});
define('emberapp/tasks/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model() {
      return this.store.findAll('tasks');
    }

  });
});
define("emberapp/tasks/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "Fvcf3Y1g", "block": "{\"statements\":[[\"text\",\"\\n\"],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"],[\"append\",[\"helper\",[\"sort-list\"],null,[[\"dropdownlist\",\"finalresult\",\"defaultsort\"],[[\"get\",[\"sortlist\"]],[\"get\",[\"model\"]],\"date\"]]],false],[\"text\",\"\\n\"],[\"open-element\",\"h2\",[]],[\"flush-element\"],[\"text\",\" Tasks\"],[\"close-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"model\"]]],null,1]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"append\",[\"unknown\",[\"tasks\",\"title\"]],false]],\"locals\":[]},{\"statements\":[[\"append\",[\"helper\",[\"log\"],[\"model\",[\"get\",[\"tasks\"]]],null],false],[\"text\",\"\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"well\"],[\"flush-element\"],[\"text\",\"\\n\\n  \"],[\"open-element\",\"h4\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"tasks.edit\",[\"get\",[\"tasks\",\"id\"]]],null,0],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"small\",[]],[\"flush-element\"],[\"text\",\" Due: \"],[\"append\",[\"helper\",[\"format-date\"],[[\"get\",[\"tasks\",\"date\"]]],null],false],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"tasks\",\"description\"]],false],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"btn btn-danger\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"deleteTasks\",[\"get\",[\"tasks\",\"id\"]]]],[\"flush-element\"],[\"text\",\"Delete\"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"]],\"locals\":[\"tasks\",\"index\"]}],\"hasPartials\":false}", "meta": { "moduleName": "emberapp/tasks/template.hbs" } });
});
define("emberapp/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "ILty/3YK", "block": "{\"statements\":[[\"open-element\",\"nav\",[]],[\"static-attr\",\"class\",\"navbar navbar-default \"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"container\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"navbar-header\"],[\"flush-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"type\",\"button\"],[\"static-attr\",\"class\",\"navbar-toggle collapsed\"],[\"static-attr\",\"data-toggle\",\"collapse\"],[\"static-attr\",\"data-target\",\"#navbar\"],[\"static-attr\",\"aria-expanded\",\"false\"],[\"static-attr\",\"aria-controls\",\"navbar\"],[\"flush-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"sr-only\"],[\"flush-element\"],[\"text\",\"Toggle navigation\"],[\"close-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"icon-bar\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"icon-bar\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"icon-bar\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n          \"],[\"close-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"class\",\"navbar-brand\"],[\"static-attr\",\"href\",\"#\"],[\"flush-element\"],[\"text\",\"Emtasks\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"id\",\"navbar\"],[\"static-attr\",\"class\",\"collapse navbar-collapse\"],[\"flush-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"ul\",[]],[\"static-attr\",\"class\",\"nav navbar-nav\"],[\"flush-element\"],[\"text\",\"\\n              \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"tasks.index\"],null,1],[\"close-element\"],[\"text\",\"\\n              \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"tasks.new\"],null,0],[\"close-element\"],[\"text\",\"\\n          \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"comment\",\"/.nav-collapse \"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"container\"],[\"flush-element\"],[\"text\",\"\\n\\n    \"],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\\n    \"],[\"close-element\"],[\"comment\",\" /.container \"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"New tasks\"]],\"locals\":[]},{\"statements\":[[\"text\",\"Home\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "emberapp/templates/application.hbs" } });
});
define('emberapp/torii-providers/firebase', ['exports', 'emberfire/torii-providers/firebase'], function (exports, _emberfireToriiProvidersFirebase) {
  exports['default'] = _emberfireToriiProvidersFirebase['default'];
});
/* jshint ignore:start */



/* jshint ignore:end */

/* jshint ignore:start */

define('emberapp/config/environment', ['ember'], function(Ember) {
  var prefix = 'emberapp';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

/* jshint ignore:end */

/* jshint ignore:start */

if (!runningTests) {
  require("emberapp/app")["default"].create({"name":"emberapp","version":"0.0.0+275c03c7"});
}

/* jshint ignore:end */
//# sourceMappingURL=emberapp.map

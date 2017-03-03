import { moduleFor, test } from 'ember-qunit';
import FirebaseAdapter from 'emberfire/adapters/firebase';

moduleFor('adapter:application', 'Unit | Adapter | application', {
  // Specify the other units that are required for this test.
  // needs: ['serializer:foo']
});

// Replace this with your real tests.
test('it exists', function(assert) {
  var adapter = FirebaseAdapter; //this.subject();
  assert.ok(adapter);
});

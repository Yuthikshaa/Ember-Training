import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | premium-user', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:premium-user');
    assert.ok(route);
  });
});

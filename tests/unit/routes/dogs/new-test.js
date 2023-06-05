import { module, test } from 'qunit';
import { setupTest } from 'ember-project/tests/helpers';

module('Unit | Route | dogs/new', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:dogs/new');
    assert.ok(route);
  });
});

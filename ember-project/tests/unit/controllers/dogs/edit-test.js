import { module, test } from 'qunit';
import { setupTest } from 'ember-project/tests/helpers';

module('Unit | Controller | dogs/edit', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:dogs/edit');
    assert.ok(controller);
  });
});

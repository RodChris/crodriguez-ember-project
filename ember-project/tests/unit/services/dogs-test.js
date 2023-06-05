import { module, test } from 'qunit';
import { setupTest } from 'ember-project/tests/helpers';

module('Unit | Service | dogs', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let service = this.owner.lookup('service:dogs');
    assert.ok(service);
  });
});

import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class DogsNewRoute extends Route {
  @service dogs;

  model() {
    return {};
  }
}
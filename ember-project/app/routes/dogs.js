import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class DogsRoute extends Route {
  @service dogs;

  model() {
    return this.dogs.dogs;
  }
}
import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class DogsEditRoute extends Route {
  @service dogs;


  async model(params) {
    return this.dogs.findDog(params.dog_id);
  }

  setupController(controller, model) {
    super.setupController(controller, model);
    
    controller.tempDog = JSON.parse(JSON.stringify(model));
  }
}

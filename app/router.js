import EmberRouter from '@ember/routing/router';
import config from 'ember-project/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('dogs', function () {
    this.route('new');
    this.route('edit', { path: '/edit/:dog_id' });
  });
});

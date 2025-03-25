import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('product');
  this.route('cars');
  this.route('user');
  this.route('premium-user');
  this.route('student');
});

export default Router;

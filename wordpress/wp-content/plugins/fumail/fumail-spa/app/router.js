import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('send');
  this.route('wtf');
  this.route('message');
  this.route('address');
  this.route('envelope');
});

export default Router;

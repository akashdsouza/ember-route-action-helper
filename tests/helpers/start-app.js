import Ember from 'ember';
import Application from '../../app';
import config from '../../config/environment';

// NOTE:
// Although the default blueprint uses `Ember.merge` we prefer to use `Ember.assign`
// Please continue to use it through future upgrades
const assign = Ember.assign || Ember.merge;

export default function startApp(attrs) {
  let attributes = assign({}, config.APP);
  attributes = assign(attributes, attrs); // use defaults, but you can override;

  return Ember.run(() => {
    let application = Application.create(attributes);
    application.setupForTesting();
    application.injectTestHelpers();
    return application;
  });
}

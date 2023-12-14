import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-model-ucheta-дир-отд-по-раб-с-кл-l');
  this.route('i-i-s-model-ucheta-дир-отд-по-раб-с-кл-e',
  { path: 'i-i-s-model-ucheta-дир-отд-по-раб-с-кл-e/:id' });
  this.route('i-i-s-model-ucheta-дир-отд-по-раб-с-кл-e.new',
  { path: 'i-i-s-model-ucheta-дир-отд-по-раб-с-кл-e/new' });
  this.route('i-i-s-model-ucheta-длительность-l');
  this.route('i-i-s-model-ucheta-длительность-e',
  { path: 'i-i-s-model-ucheta-длительность-e/:id' });
  this.route('i-i-s-model-ucheta-длительность-e.new',
  { path: 'i-i-s-model-ucheta-длительность-e/new' });
  this.route('i-i-s-model-ucheta-договор-l');
  this.route('i-i-s-model-ucheta-договор-e',
  { path: 'i-i-s-model-ucheta-договор-e/:id' });
  this.route('i-i-s-model-ucheta-договор-e.new',
  { path: 'i-i-s-model-ucheta-договор-e/new' });
  this.route('i-i-s-model-ucheta-затр-время-l');
  this.route('i-i-s-model-ucheta-затр-время-e',
  { path: 'i-i-s-model-ucheta-затр-время-e/:id' });
  this.route('i-i-s-model-ucheta-затр-время-e.new',
  { path: 'i-i-s-model-ucheta-затр-время-e/new' });
  this.route('i-i-s-model-ucheta-клиент-l');
  this.route('i-i-s-model-ucheta-клиент-e',
  { path: 'i-i-s-model-ucheta-клиент-e/:id' });
  this.route('i-i-s-model-ucheta-клиент-e.new',
  { path: 'i-i-s-model-ucheta-клиент-e/new' });
  this.route('i-i-s-model-ucheta-расчет-ост-врем-l');
  this.route('i-i-s-model-ucheta-расчет-ост-врем-e',
  { path: 'i-i-s-model-ucheta-расчет-ост-врем-e/:id' });
  this.route('i-i-s-model-ucheta-расчет-ост-врем-e.new',
  { path: 'i-i-s-model-ucheta-расчет-ост-врем-e/new' });
  this.route('i-i-s-model-ucheta-услуги-l');
  this.route('i-i-s-model-ucheta-услуги-e',
  { path: 'i-i-s-model-ucheta-услуги-e/:id' });
  this.route('i-i-s-model-ucheta-услуги-e.new',
  { path: 'i-i-s-model-ucheta-услуги-e/new' });
});

export default Router;

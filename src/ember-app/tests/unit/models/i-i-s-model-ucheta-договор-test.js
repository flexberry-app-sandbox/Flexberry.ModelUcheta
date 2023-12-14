import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-model-ucheta-договор', 'Unit | Model | i-i-s-model-ucheta-договор', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-model-ucheta-длительность',
    'model:i-i-s-model-ucheta-договор',
    'model:i-i-s-model-ucheta-клиент',
    'model:i-i-s-model-ucheta-оказ-услуг',
    'model:i-i-s-model-ucheta-расчет-ост-врем',
    'model:i-i-s-model-ucheta-услуги',
    'model:директор',
    'model:затраченное-время',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});

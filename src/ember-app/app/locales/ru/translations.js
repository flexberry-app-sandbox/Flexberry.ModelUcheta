import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISModelUchetaДирОтдПоРабСКлLForm from './forms/i-i-s-model-ucheta-дир-отд-по-раб-с-кл-l';
import IISModelUchetaДлительностьLForm from './forms/i-i-s-model-ucheta-длительность-l';
import IISModelUchetaДоговорLForm from './forms/i-i-s-model-ucheta-договор-l';
import IISModelUchetaЗатрВремяLForm from './forms/i-i-s-model-ucheta-затр-время-l';
import IISModelUchetaКлиентLForm from './forms/i-i-s-model-ucheta-клиент-l';
import IISModelUchetaРасчетОстВремLForm from './forms/i-i-s-model-ucheta-расчет-ост-врем-l';
import IISModelUchetaУслугиLForm from './forms/i-i-s-model-ucheta-услуги-l';
import IISModelUchetaДирОтдПоРабСКлEForm from './forms/i-i-s-model-ucheta-дир-отд-по-раб-с-кл-e';
import IISModelUchetaДлительностьEForm from './forms/i-i-s-model-ucheta-длительность-e';
import IISModelUchetaДоговорEForm from './forms/i-i-s-model-ucheta-договор-e';
import IISModelUchetaЗатрВремяEForm from './forms/i-i-s-model-ucheta-затр-время-e';
import IISModelUchetaКлиентEForm from './forms/i-i-s-model-ucheta-клиент-e';
import IISModelUchetaРасчетОстВремEForm from './forms/i-i-s-model-ucheta-расчет-ост-врем-e';
import IISModelUchetaУслугиEForm from './forms/i-i-s-model-ucheta-услуги-e';
import IISModelUchetaДлительностьModel from './models/i-i-s-model-ucheta-длительность';
import IISModelUchetaДоговорModel from './models/i-i-s-model-ucheta-договор';
import IISModelUchetaКлиентModel from './models/i-i-s-model-ucheta-клиент';
import IISModelUchetaОказУслугModel from './models/i-i-s-model-ucheta-оказ-услуг';
import IISModelUchetaРасчетОстВремModel from './models/i-i-s-model-ucheta-расчет-ост-врем';
import IISModelUchetaУслугиModel from './models/i-i-s-model-ucheta-услуги';
import ДиректорModel from './models/директор';
import Затраченное времяModel from './models/затраченное-время';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-model-ucheta-длительность': IISModelUchetaДлительностьModel,
    'i-i-s-model-ucheta-договор': IISModelUchetaДоговорModel,
    'i-i-s-model-ucheta-клиент': IISModelUchetaКлиентModel,
    'i-i-s-model-ucheta-оказ-услуг': IISModelUchetaОказУслугModel,
    'i-i-s-model-ucheta-расчет-ост-врем': IISModelUchetaРасчетОстВремModel,
    'i-i-s-model-ucheta-услуги': IISModelUchetaУслугиModel,
    'директор': ДиректорModel,
    'затраченное-время': Затраченное времяModel
  },

  'application-name': 'Model ucheta',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Model ucheta',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Model ucheta',
          title: 'Model ucheta'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        'model-ucheta': {
          caption: 'ModelUcheta',
          title: 'ModelUcheta',
          'i-i-s-model-ucheta-услуги-l': {
            caption: 'Услуги',
            title: ''
          },
          'i-i-s-model-ucheta-затр-время-l': {
            caption: 'Затр время',
            title: ''
          },
          'i-i-s-model-ucheta-длительность-l': {
            caption: 'Длительность',
            title: ''
          },
          'i-i-s-model-ucheta-клиент-l': {
            caption: 'Клиент',
            title: ''
          },
          'i-i-s-model-ucheta-дир-отд-по-раб-с-кл-l': {
            caption: 'Дир отд по раб с кл',
            title: ''
          },
          'i-i-s-model-ucheta-расчет-ост-врем-l': {
            caption: 'Расчет ост врем',
            title: ''
          },
          'i-i-s-model-ucheta-договор-l': {
            caption: 'Договор',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-model-ucheta-дир-отд-по-раб-с-кл-l': IISModelUchetaДирОтдПоРабСКлLForm,
    'i-i-s-model-ucheta-длительность-l': IISModelUchetaДлительностьLForm,
    'i-i-s-model-ucheta-договор-l': IISModelUchetaДоговорLForm,
    'i-i-s-model-ucheta-затр-время-l': IISModelUchetaЗатрВремяLForm,
    'i-i-s-model-ucheta-клиент-l': IISModelUchetaКлиентLForm,
    'i-i-s-model-ucheta-расчет-ост-врем-l': IISModelUchetaРасчетОстВремLForm,
    'i-i-s-model-ucheta-услуги-l': IISModelUchetaУслугиLForm,
    'i-i-s-model-ucheta-дир-отд-по-раб-с-кл-e': IISModelUchetaДирОтдПоРабСКлEForm,
    'i-i-s-model-ucheta-длительность-e': IISModelUchetaДлительностьEForm,
    'i-i-s-model-ucheta-договор-e': IISModelUchetaДоговорEForm,
    'i-i-s-model-ucheta-затр-время-e': IISModelUchetaЗатрВремяEForm,
    'i-i-s-model-ucheta-клиент-e': IISModelUchetaКлиентEForm,
    'i-i-s-model-ucheta-расчет-ост-врем-e': IISModelUchetaРасчетОстВремEForm,
    'i-i-s-model-ucheta-услуги-e': IISModelUchetaУслугиEForm
  },

});

export default translations;

import {
  extend, ValidationObserver, ValidationProvider, localize,
} from 'vee-validate';
import {
  required, email, min, between, numeric,
} from 'vee-validate/dist/rules';
import zhTW from 'vee-validate/dist/locale/zh_TW.json';

localize('zh_tw', zhTW);
export default {
  install(Vue) {
    Vue.component('ValidationObserver', ValidationObserver);
    Vue.component('ValidationProvider', ValidationProvider);
    extend('required', required);
    extend('email', email, {
    });
    extend('min', min);
    extend('between', between);
    extend('numeric', numeric);
    extend('phone', {
      message: '請輸入10位的手機號碼',
      validate: (value) => value.length === 10 && /^09[0-9]{8}$/.test(value),
    });
  },
};

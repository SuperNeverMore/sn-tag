/**
 * Created by wanghongxiang on 2017/12/12.
 */
import Vue from 'vue';
import Loading from './sn-loading.vue';
const SNLoading = Vue.extend(Loading);
// eslint-disable-next-line no-unused-vars
exports.install = (Vue, options) =>{
  const insertDom = (parent, el, binding) => {
    if (el.originalPosition !== 'absolute' && el.originalPosition !== 'fixed') {
      parent.style.position = 'relative';
    }
    if (binding.modifiers.fullScreen) {
      parent.style.overflow = 'hidden';
    }
    el.domVisible = true;

    parent.appendChild(el.mask);
    Vue.nextTick(() => {
      el.instance.visible = binding.value;
    });
    el.domInserted = true;
    // }
  };
  Vue.directive('sn-loading', {
    // eslint-disable-next-line no-unused-vars
    bind: function(el, binding) {
      console.log('hello');
      // eslint-disable-next-line no-unused-vars
      const loading = new SNLoading({
        el: document.createElement('div'),
        data: {
          text: el.getAttribute('loading-text'),
          fullscreen: !!binding.modifiers.fullScreen
        }
      });
      el.instance = loading;
      el.mask = loading.$el;
      Vue.nextTick(()=>{
        if (binding.modifiers.fullScreen) {
          insertDom(document.body, el, binding);
        } else {
          insertDom(el, el, binding);
        }
      });
    },
    inserted: function() {
    },
    // eslint-disable-next-line no-unused-vars
    update: function(el, binding) {
      el.instance.setText(el.getAttribute('loading-text'));
      if (binding.oldValue !== binding.value) {
        insertDom(document.body, el, binding);
      }
    },
    // eslint-disable-next-line no-unused-vars
    unbind: function(el, binding) {
      if (el.domInserted) {
        if (binding.modifiers.fullScreen || binding.modifiers.body) {
          document.body.removeChild(el.mask);
        } else {
          el.mask && el.mask.parentNode && el.mask.parentNode.removeChild(el.mask);
        }
      }
    }
  });
};

import Vue from 'nativescript-vue'
import CollectionView from '@nativescript-community/ui-collectionview/vue';
Vue.use(CollectionView);

import Index from './views/Index'

new Vue({
  render: (h) => h('frame', [h(Index)]),
}).$start();
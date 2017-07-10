/**
 * Created by ranwei on 2017/7/10.
 */

require('../css/public.css');
require('../css/index.css');
require('../js/flexible');

import Vue from 'vue';
import test from './components/homeList';

new Vue({
    el:'nav',
    components:{test}

});


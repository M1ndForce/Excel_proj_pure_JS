import './scss/index.scss';
import '@babel/polyfill';
import {Excel} from '@/components/excel/Excel';

const excel = new Excel('#app', {
    components: []
})

console.log('Excel', excel)
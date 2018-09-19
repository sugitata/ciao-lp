import jquery from "jquery";
export default (window.$ = window.jQuery = jquery);

import 'popper.js/dist/popper-utils.min.js';
import 'popper.js/dist/popper.min.js';
import 'bootstrap/dist/css/bootstrap.css';
// TODO: `$ is not defined` でエラーになる
// import 'bootstrap/dist/js/bootstrap.min';

import './../scss/style.scss';

// $(function() {
//   $('.hoge').click(function() {
//     console.log('hello jquery')
//   })
// })
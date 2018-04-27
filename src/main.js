// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 解决移动端按钮点击延时数秒300ms的问题.
import fastClick from 'fastclick'
// 移动端解决兼容问题方案.
// import './assets/styles/reset.css'
// 1像素解决方案.
// import './assets/styles/border.css'
// bootstrap,jQuery.
// import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'
// 代码高亮.
import hljs from 'highlight.js'
import 'highlight.js/styles/googlecode.css'
// font awesome
import 'font-awesome/css/font-awesome.css'
// animate
import 'animate.css'

Vue.config.productionTip = false
fastClick.attach(document.body)

Vue.directive('highlight', (el) => {
  let blocks = el.querySelectorAll('pre code')
  blocks.forEach((block) => {
    hljs.highlightBlock(block)
  })
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

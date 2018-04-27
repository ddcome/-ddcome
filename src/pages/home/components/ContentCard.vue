<template>
  <div class="row content-card">
    <div class="col-lg-12 col-md-12 col-sm-12"></div>
    <vue-markdown class="col-lg-12 col-md-12 col-sm-12" v-highlight :source="content" :toc="true"></vue-markdown>
    <div class="col-lg-12 col-md-12 col-sm-12"></div>
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown' // 直接作为一个组件引入
export default {
  name: 'ContentCard',
  data () {
    return {
      content: '[toc] \n' +
      '# 函数\n' +
      '> 参考 https://www.liaoxuefeng.com/wiki/001434446689867b27157e896e74d51a89c25cc8b43bdb3000\n' +
      '\n' +
      '## 常用的函数\n' +
      '### stringObject.indexOf(searchvalue,fromindex)\n' +
      '> 返回某个指定的字符串值在字符串中首次出现的位置。\n' +
      '\n' +
      '参数 | 描述\n' +
      '--- | ---\n' +
      'searchvalue\t| 必需。规定需检索的字符串值。\n' +
      'fromindex | 可选的整数参数。规定在字符串中开始检索的位置。它的合法取值是 0 到 stringObject.length - 1。如省略该参数，则将从字符串的首字符开始检索。\n' +
      '\n' +
      '\n' +
      '## 高阶函数\n' +
      '### 简单例子\n' +
      '> 概念：JavaScript的函数其实都指向某个变量。既然变量可以指向函数，函数的参数能接收变量，那么一个函数就可以接收另一个函数作为参数，这种函数就称之为高阶函数。\n' +
      '\n' +
      '```\n' +
      'function add(x, y, f) {\n' +
      '    return f(x) + f(y);\n' +
      '}\n' +
      '\n' +
      'var result = add(1.2,2.3,Math.abs);\n' +
      'console.log(result);\n' +
      '```\n' +
      '### map/reduce\n' +
      '#### map\n' +
      '> 举例说明，比如我们有一个函数f(x)=x2，要把这个函数作用在一个数组[1, 2, 3, 4, 5, 6, 7, 8, 9]上，就可以用map实现如下：\n' +
      '```\n' +
      '1,   2,   3,   4,   5,   6,   7,   8,   9\n' +
      '|    |    |    |    |    |    |    |    |\n' +
      '1,   4,   9,  16,  25,  36,  49,  64,  81\n' +
      '```\n' +
      '> 由于map()方法定义在JavaScript的Array中，我们调用Array的map()方法，传入我们自己的函数\n' +
      '\n' +
      '```\n' +
      'function pow(x) {\n' +
      '    return x * x;\n' +
      '}\n' +
      'var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];\n' +
      'var results = arr.map(pow);\n' +
      'console.log(results);\n' +
      '\n' +
      'var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];\n' +
      'var a = arr.map(String);\n' +
      'console.log("a",a);\n' +
      '\n' +
      '```\n' +
      '#### reduce\n' +
      '> Array的reduce()把一个函数作用在这个Array的[x1, x2, x3...]上，这个函数必须接收两个参数，reduce()把结果继续和序列的下一个元素做累积计算，其效果就是：\n' +
      '\n' +
      '```\n' +
      '[x1, x2, x3, x4].reduce(f) = f(f(f(x1, x2), x3), x4)\n' +
      '```\n' +
      '> 例子,对数组求和\n' +
      '\n' +
      '```\n' +
      'var arr = [1,3,5,7,9];\n' +
      'arr.reduce(function(x, y) {\n' +
      '    return x + y;\n' +
      '});\n' +
      '//return 25\n' +
      '```\n' +
      '\n' +
      '\n' +
      '### filter\n' +
      '> 它用于把Array的某些元素过滤掉，然后返回剩下的元素。和map()类似，Array的filter()也接收一个函数。和map()不同的是，filter()把传入的函数依次作用于每个元素，然后根据返回值是true的保留，false舍弃。</br>\n' +
      '> 在一个Array中，删掉偶数，只保留奇数，可以这么写：\n' +
      '\n' +
      '```\n' +
      'var arr = [1, 2, 4, 5, 6, 9, 10, 15];\n' +
      'var r = arr.filter(function (x) {\n' +
      '    return x % 2 !== 0;\n' +
      '});\n' +
      'r; // [1, 5, 9, 15]\n' +
      '```'
    }
  },
  components: {
    VueMarkdown
  }
}
</script>

<style>
.content-card {
  border: 1px solid #ccc;
  padding-left: 50px;
  padding-right: 50px;
  padding-top: 70px;
  padding-bottom: 70px;

  overflow: scroll;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>

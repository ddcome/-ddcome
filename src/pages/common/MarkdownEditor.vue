<template>
  <div>
    <div class="btns">
      <button id="watch-btn">Enable watch</button>
      <button id="unwatch-btn">Disable watch</button>
    </div>
    <button @click="handlleClick">展示</button>
    <textarea name="md" v-html="markdownValue" cols="30" rows="10"></textarea>
  </div>
</template>

<script>
import markdown from 'vue-markdown'
export default {
  name: 'MarkdownEditor',
  props: {
    markdown: markdown,
    markdownValue: ''
  },
  methods: {
    handlleClick: function () {
      console.log(this.markdown)
      let markdown = this.markdown
      this.markdownValue = markdown.toHTML(`
      # dsds
      ## sdsd
      ### dsdfsd
      `)
      console.log(markdown.toHTML('Hello *World*!'))
    }
  }
}
</script>

<style>
</style>

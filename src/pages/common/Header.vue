<template>
  <div class="own-header">
    <navigation-bar></navigation-bar>
    <div class="row">
      <div class="col-12 own-color-line"></div>
    </div>
  </div>
</template>

<script>
import NavigationBar from './NavigationBar'
export default {
  name: 'Header',
  components: {
    NavigationBar: NavigationBar
  }
}
</script>

<style>
  .own-header {
    /*border-bottom: 1px solid #000;*/
  }
  .own-color-line {
    border: 1px solid #000;
  }
</style>

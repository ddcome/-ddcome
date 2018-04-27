<template>
  <div class="row">
    <home-header id="own-up-area" class="col-md-12"></home-header>
    <div id="own-middle-area" class="col-md-12">
      <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-6 main">
          <content-card></content-card>
        </div>
        <div class="col-md-3"></div>
      </div>
    </div>
    <home-footer id="own-down-area" class="col-md-12"></home-footer>
  </div>
</template>

<script>
import Header from '../common/Header'
import Footer from '../common/Footer'
import ContentCard from './components/ContentCard'

export default {
  name: 'Home',
  data () {
    return {
      contents: [1, 2, 3, 4, 5]
    }
  },
  components: {
    HomeHeader: Header,
    HomeFooter: Footer,
    ContentCard
  },
  created: function () {
    console.log('print: ', document.getElementById('#own-middle-area'))
  }
}
</script>

<style>
  .main {
  }
  #own-middle-area {
    margin-top: 50px;
    margin-bottom: 50px;
  }
  #own-down-area {
    text-align: center;
  }
</style>

<template>
  <div class="navigation-bar">
    <ul class="nav justify-content-center">
      <li class="nav-item">
        <a class="nav-link active animated fadeInDown" href="/"><i class="fa fa-home"></i></a>
      </li>
      <li class="nav-item">
        <a class="nav-link animated fadeInDown" href="#"><i class="fa fa-list-ul" aria-hidden="true"></i></a>
      </li>
      <li class="nav-item">
        <a class="nav-link animated fadeInDown" href="#"><i class="fa fa-address-card-o" aria-hidden="true"></i></a>
      </li>
      <li>
        <a class="nav-link animated fadeInDown" href="#"><i class="col-lg-1 fa fa-search"></i></a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'NavigationBar'
}
</script>

<style>
  .navigation-bar {
    /*font-size: 30px;*/
  }
</style>

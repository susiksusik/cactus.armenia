<template>
  <div id="app">
    <cactus/>
    <Header/>
    <slider/>
    <router-view></router-view>
    <footer/>
    <help/>
  </div>
</template>

<script>
  import Header from './components/Header.vue'
  import cactus from './components/cactus.vue'
  import Footer from './components/Footer.vue'
  import help from './components/help.vue'
  import slider from './components/slider.vue'
export default {
  name: 'app',
  components:{
    Header,
    cactus,
    slider,
    Footer,
    help
  }
}


</script>



<template>
  <div id="app">
    <cactus/>
    <Header />
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
export default {
  name: 'app',
  components:{
    Header,
    cactus,
    Footer,
    help
  }
}


</script>



<template>
  <section>

    <b-carousel
      :indicator="indicator"
      :indicator-background="indicatorBackground"
      :indicator-inside="indicatorInside"
      :indicator-mode="indicatorMode">
      <b-carousel-item v-for="(carousel, i) in carousels" :key="i">
        <section :class="`hero is-medium `">
          <div class="hero-body has-text-centered">
            <img :src="carousel.url" alt="" >
<!--            <img src="../assets/img/logo.jpg" alt="">-->
            <h1 class="title">{{carousel.title}}</h1>
          </div>
        </section>
      </b-carousel-item>
    </b-carousel>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        indicator: false,
        indicatorBackground: true,
        indicatorInside: true,
        indicatorMode: 'hover',
        carousels: [
          { title: 'Slide 1', img: 'info', url:  require('../assets/img/help.gif') },
          { title: 'Slide 2', img: 'success', url: require('../assets/img/carousel.jpg') },
          { title: 'Slide 3', img: 'warning', url: require('../assets/img/carousel1.jpg') },
          { title: 'Slide 4', img: 'danger',  url: require('../assets/img/carousel2.jpeg') }
        ]
      }
    }
  }
</script>

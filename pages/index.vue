<template>
  <section class="container">
    <carousel/>
    <b-row>
      <b-col xl="8" sm="12" offset-xl="2" class="header-section-headline">
        <h2 class="text-center">SharedBooksとは？？</h2>
      </b-col>
      <b-col xl="8" sm="12" offset-xl="2">
        <p class="text-center header-section-bodyline">
          SharedBooksは、本の感想や評価をチェックしたり、webやアプリで本棚をかんたんに作成し、感想やレビューを書いたり、読書の管理・記録をすることができるアプリです<br>
          Booklogのパクリです
        </p>
      </b-col>
    </b-row>
  </section>
</template>

<script>
import carousel from '~/components/Carousel.vue'

export default {
  components: {
    carousel
  }
}
</script>
<style scoped>
h2 {
  font-weight: bold;
}
.header-section-headline {
  margin-top: 2%;
}

.header-section-bodyline {
  margin-top: 1%;
  font-weight: bold;
  letter-spacing: 0.1em;
}
</style>

<template>
  <div class="movie-introduction card-default">
    <header>剧情简介</header>
    <div>
      {{ movieData.summary }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'MovieIntroduction',
  props: {
    movieData: {
      type: Object,
      required: true
    }
  },
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.movie-introduction{
  font-size: 18px;
  width: 695px;
  > header{}
  >div{
    font-size: 14px;
    color: #444;
    text-indent: 2em;
    line-height: 25px;
    text-align: justify;
  }
}
</style>

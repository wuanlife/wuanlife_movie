<template>
  <ribbon-card title="剧情简介">
    <p>
      {{ movieData.summary }}
    </p>
  </ribbon-card>
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

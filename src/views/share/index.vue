<template>
  <div class="view-container share">
    <share-resources
      :movieId="movieId"
      :resourcesData="resourcesData"
    ></share-resources>
  </div>
</template>

<script>
import ShareResources from './ShareResources'

export default {
  name: 'Share',
  components: {
    ShareResources
  },
  data () {
    return {
      movieId: null,
      resourcesData: null
    }
  },
  mounted () {
    this.movieId = this.$route.params.id
    this.resourcesData = this.$route.query.resourcesData
  }
}
</script>

<style lang="scss" scoped>
.share {
  padding: 71px 0;
}
</style>

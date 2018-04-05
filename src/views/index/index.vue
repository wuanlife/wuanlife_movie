<template>
  <div class="index-container view-container">
    <section>
      <ribbon-card title="最新影视">
        <movie-brief-list :movies="movies"></movie-brief-list>
        <el-pagination
          :style="{textAlign: 'center'}"
          background
          layout="prev, pager, next"
          :page-size="10"
          :total="1000">
        </el-pagination>
      </ribbon-card>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'index',
  data () {
    return {
      movies: [{}, {}]
    }
  },
  computed: {
    ...mapGetters(['user'])
  },
  created () {}
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.index-container {
  margin-top: 70px;
  section {
    width: 745px;
  }
}
</style>

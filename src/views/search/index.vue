<template>
  <div class="index-container view-container">
    <section>
      <ribbon-card :title="`搜索结果`">
        <div v-loading='loading' >
          <movie-brief-item :movies="movies">
          </movie-brief-item>
        </div>
        <el-pagination
          v-if="total > 20"
          :style="{textAlign: 'center'}"
          background
          layout="prev, pager, next"
          :page-size="20"
          :total="total">
        </el-pagination>
      </ribbon-card>
    </section>
  </div>
</template>

<script>
import { getSearchMovies } from 'api/movies'

export default {
  name: 'index',
  data () {
    return {
      movies: [],
      total: null,
      pagination: {
        limit: 20,
        offset: 0
      }
    }
  },
  mounted () {
    getSearchMovies({q: this.$route.query.search, limit: this.limit, offset: this.offset}).then(({total, movies}) => {
      debugger
      this.total = total
      this.movies = movies
    })
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.index-container {
  margin-top: 70px;
  section {
    width: 745px;
  }
}
.empty-container {
  color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
  h2 {
    font-size: 20px;
  }
}
</style>

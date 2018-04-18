<template>
  <div class="index-container view-container">
    <section>
      <ribbon-card :title="`搜索结果`">
        <div>
          <movie-brief-list :movies="movies">
          </movie-brief-list>
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
      total: null
    }
  },
  mounted () {
    this.SearchMovies()
  },
  methods: {
    SearchMovies (offset) {
      // var self = this
      return new Promise((resolve, reject) => {
        getSearchMovies(
          this.$route.query.search// ,
          // offset - 1 || 0,
          // self.pagination.limit
        )
          .then(res => {
            this.total = res.total
            this.movies = res.movies
            resolve()
          })
          .catch(error => {
            reject(error)
          })
      })
    }
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

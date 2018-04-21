<template>
  <div class="index-container view-container">
    <section>
      <ribbon-card :title="`搜索结果`">
        <div v-show="pagination.total===0" :style="{textAlign: 'center'}">
          <h4>没有找到相关的影视资源</h4>
        </div>
        <div v-show="pagination.total!==0">
          <movie-brief-list :movies="movies">
          </movie-brief-list>
        </div>
        <el-pagination
          v-if="pagination.total > pagination.limit"
          :style="{textAlign: 'center'}"
          background
          @current-change="pageChange"
          layout="prev, pager, next"
          :page-size="pagination.limit"
          :total="pagination.total">
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
      query: '',
      pagination: {
        limit: 20,
        offset: 0,
        total: 0
      }
    }
  },
  mounted () {
    this.query = this.$route.query.search
    this.searchMovies(this.$route.query.search, this.pagination.offset, this.pagination.limit)
  },
  methods: {
    SearchMovies (offset) {
      // var self = this
      return new Promise((resolve, reject) => {
        getSearchMovies(this.$route.query.search, offset)
          .then(res => {
            this.total = res.total
            this.movies = res.movies
            resolve()
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    searchMovies (query, page, limit) {
      getSearchMovies(query, page, limit)
        .then(res => {
          this.pagination.total = res.total
          this.movies = res.movies
        })
    },
    pageChange (page) {
      this.searchMovies(this.query, page - 1, this.pagination.limit)
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

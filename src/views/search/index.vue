<template>
  <div class="index-container view-container">
    <section>
      <ribbon-card :title="`搜索结果`">
        <div class="empty-container" v-if="emptyMovies">
          <h2>没有匹配到任何电影</h2>
        </div>
        <div class="relatedMoviewCardBox" v-loading='loading' v-else>
          <search-movie-list v-for="movie in relatedMovies"
                            :key="movie.id">
          </search-movie-list>
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
import { mapGetters } from 'vuex'
import { searchMovies } from '../../api/mock/post'

export default {
  name: 'index-container',
  data () {
    return {
      relatedPlantesData: [],
      relatedMovies: [],
      loading: false,
      i: 0,
      emptyMovies: false
    }
  },
  mounted () {
    this.getsearchMovies(1)
  },
  computed: {
    ...mapGetters(['movie'])
  },
  methods: {
    getsearchMovies (offset) {
      var self = this
      this.loading1 = true
      return new Promise((resolve, reject) => {
        searchMovies(
          this.$route.query.search,
          offset - 1 || 0,
          self.pagination.limit
        )
          .then(res => {
            if (res.articles == null) {
              self.emptyMovies = true
            } else {
              self.emptyMovies = false
              // 动态确定页码
              self.pagination.pageCount = Math.ceil(
                res.total / self.pagination.limit
              )
              self.relatedMovies = res.Movies
            }
            self.loading1 = false
            resolve()
          })
          .catch(error => {
            self.loading1 = false
            reject(error)
          })
      })
    },
    showMorePlanets () {
      this.morePlanetsBtn = false
      this.relatedPlantesData1 = this.relatedPlantesData
    },
    loadMore () {
      let self = this
      self.i += 1
      searchMovies(this.$route.query.search, 20 * self.i, 20)
        .then(res => {
          self.relatedPostsData = self.relatedPostsData.concat(
            self.dealTime(res.data)
          )
          self.loading1 = false
        })
        .catch(error => {
          console.log(error)
          self.loading1 = false
        })
    }
  },
  watch: {
    'pagination.currentPage': function (val) {
      // var offset = val - 1
      // getSearchArticles(offset)
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
.relatedMoviewCardBox {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>

<template>
  <div class="index-container view-container">
    <section>
      <ribbon-card :title="`最新${this.title}`">
        <movie-brief-list :movies="movies"></movie-brief-list>
        <el-pagination
          v-if="pagination.total > pagination.limit"
          :style="{textAlign: 'center'}"
          background
          layout="prev, pager, next"
          :page-size="pagination.limit"
          @current-change="handlePageChange"
          :total="pagination.total">
        </el-pagination>
      </ribbon-card>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { getMovies } from 'api/movies'
export default {
  name: 'index',
  data () {
    return {
      typeId: parseInt(this.$route.params.typeId),
      movies: [],
      title: '',
      pagination: {
        limit: 20,
        offset: 0,
        total: 0
      }
    }
  },
  computed: {
    ...mapGetters(['types'])
  },
  mounted () {
    const typeId = parseInt(this.$route.params.typeId)
    this.getAndSetMovies({type: this.typeId || '', offset: 0, limit: this.pagination.limit})
    if (typeId) {
      const type = this.types.find(type => type.type_id === typeId)
      this.title = (type && type.type_name) || ''
    } else {
      this.title = '影视'
    }
  },
  updated () {
    const typeId = parseInt(this.$route.params.typeId)
    if (typeId) {
      const type = this.types.find(type => type.type_id === typeId)
      this.title = (type && type.type_name) || ''
    } else {
      this.title = '影视'
    }
  },
  methods: {
    getAndSetMovies (query) {
      getMovies(query).then(res => {
        this.pagination.total = res.total
        this.movies = res.movies
      })
    },
    handlePageChange (page) {
      this.getAndSetMovies({
        type: this.typeId,
        limit: this.pagination.limit,
        offset: page - 1
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
</style>

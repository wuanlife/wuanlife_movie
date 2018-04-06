<template>
  <div class="index-container view-container">
    <section>
      <ribbon-card :title="`最新${this.title}`">
        <movie-brief-list :movies="movies"></movie-brief-list>
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
import { getMovies } from 'api/movies'
export default {
  name: 'index',
  data () {
    return {
      title: '影视',
      movies: [],
      total: null
    }
  },
  computed: {
    ...mapGetters(['types'])
  },
  mounted () {
    const typeId = parseInt(this.$route.params.typeId)
    if (typeId) {
      this.title = this.types.find(type => type.type_id === typeId).type_name
    }
    getMovies({type: typeId || ''}).then(({total, movies}) => {
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
</style>

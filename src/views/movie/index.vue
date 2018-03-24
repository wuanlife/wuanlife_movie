<template>
  <div class="view-container movie">
    <div class="left">
      <movie-datail
        :result="result"
        v-loading="loading1"
      ></movie-datail>
      <movie-introduction
        class="card"
        :result="result"
      ></movie-introduction>
      <related-resources
        class="card"
        :resources="resources"
        :deleteResources="deleteResources"
        v-loading="loading2"
      ></related-resources>
    </div>
    <div class="right">
      <planet></planet>
    </div>
  </div>
</template>

<script>
import MovieDatail from 'components/MovieDetail'
import MovieIntroduction from 'components/MovieIntroduction'
import Planet from 'components/Planet'
import RelatedResources from 'components/RelatedResources'
import { getMovie, getMovieResources, deleteMovieResources } from 'api/movies'
import { parseTime } from '../../filters'

export default {
  name: 'Movie',
  components: {
    'movie-datail': MovieDatail,
    'movie-introduction': MovieIntroduction,
    'planet': Planet,
    'related-resources': RelatedResources
  },
  data () {
    return {
      result: {},
      resources: [],
      loading1: false,
      loading2: false
    }
  },
  mounted () {
    this.loading1 = true
    this.loading2 = true
    getMovie(1)
      .then(response => this.setFetchMovieData(response))
      .catch(e => {
        console.log(e)
        this.loading1 = false
      })
    getMovieResources(1)
      .then(response => this.setFetchResourcesData(response))
      .catch(e => {
        console.log(e)
        this.loading2 = false
      })
  },
  methods: {
    setFetchResourcesData (res) {
      const { resources } = res
      const { id } = this.result
      resources.map(item => {
        item.create_at = parseTime(item.create_at)
        item.mid = id
      })
      this.resources = resources
      this.loading2 = false
    },
    setFetchMovieData (res) {
      const { genres, directors, casts } = res
      this.result = {
        ...res,
        genres: this.arrToString(genres),
        directors: this.arrToString(directors),
        casts: this.arrToString(casts),
        number_douban: this.urlToNumber(res.url_douban)
      }
      this.loading1 = false
    },
    deleteResources (mid, rid) {
      const resources = this.resources
      deleteMovieResources(mid, rid)
        .then(response => {
          this.resources = resources.filter(item => item.id !== rid)
        })
        .catch(e => console.log(e))
    },
    arrToString (arr) {
      const dataArr = arr.map(item => {
        let a = []
        for (let key in item) {
          a.push(item[key])
        }
        return a.join('')
      })
      return dataArr.join('/')
    },
    urlToNumber (url) {
      let a = url.split('/')
      return a[a.length - 2]
    }
  }
}
</script>

<style lang="scss" scoped>
.movie{
  padding-top: 70px;
  padding-bottom: 30px;
}
.right{
  margin-left: 58px;
}
.card{
  margin-top: 36px;
}
</style>

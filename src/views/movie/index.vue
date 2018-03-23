<template>
  <div class="view-container movie">
    <div class="left">
      <movie-datail
        :result="result"
      ></movie-datail>
      <movie-introduction
        class="card"
        :result="result"
      ></movie-introduction>
      <related-resources
        class="card"
        :resources="resources"
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
import { getMovie, getMovieResources } from 'api/movies'
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
      resources: []
    }
  },
  mounted () {
    getMovie(1)
      .then(response => this.setFetchMovieData(response))
      .catch(e => console.log(e))
    getMovieResources(1)
      .then(response => this.setFetchResourcesData(response))
      .catch(e => console.log(e))
  },
  methods: {
    setFetchResourcesData (res) {
      res.resources.map(item => {
        item.create_at = parseTime(item.create_at)
      })
      this.resources = res.resources
    },
    setFetchMovieData (res) {
      res.genres = this.arrToString(res.genres)
      res.directors = this.arrToString(res.directors)
      res.casts = this.arrToString(res.casts)
      res.number_douban = this.urlToNumber(res.url_douban)
      this.result = res
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

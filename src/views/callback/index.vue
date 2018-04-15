<template>
  <div class="index-container view-container find">
    请求用户信息中
  </div>
</template>

<script>
export default {
  name: 'Callback',
  data () {
    return {
      type: '',
      url: ''
    }
  },
  methods: {

  },
  created () {
    const { access_token: accessToken, id_token: idToken } = this.$route.query
    const user = JSON.parse(atob(idToken.split('.')[1]))
    this.$store.commit('SET_USER', {
      accessToken,
      idToken,
      userInfo: user
    })
    this.$router.push({path: '/'})
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

</style>

<template>
  <div class="nav-user">
    <div class="nav-user-logined">
      <router-link v-if="isLogined" to="/find" tag="span" class="nav-user-find">发现影视</router-link>
      <div>
        <span v-if="!isLogined" @click="goLogin" class="login">登录</span>
        <span v-if="!isLogined" @click="goSigup" class="signup">注册</span>
        <span v-if="isLogined" @click="show()">
          {{ name }}<icon-svg icon-class="triangle1" class="nav-user-triangle"></icon-svg>
        </span>
        <span v-if="isShow" @click="goPData" class="personalData">个人资料</span>
        <span @click="logout" v-if="isShow" class="logout">退出登录</span>
      </div>
    </div>
  </div>
</template>

<script>
import { logout } from 'api/user'
export default {
  name: 'NavUser',
  data () {
    return {
      isLogined: false,
      isShow: false,
      name: ''
    }
  },
  methods: {
    show () {
      this.isShow = !this.isShow
    },
    goLogin () {
      window.location = `${process.env.SSO_SITE}/authorize?client_id=wuan&redirect_uri=${window.location.origin + '/callback'}&response_type=code&state=maye&nonce=random `
    },
    goSigup () {
      window.location = `${process.env.SSO_SITE}/signup `
    },
    goPData () {
      window.location = `${process.env.SSO_SITE}/personal/profile `
    },
    logout () {
      window.localStorage.clear()
      logout().then(res => {
        this.$store.commit('CLEAR_USER')
        this.$nextTick(() => {
          this.isLogined = false
          this.isShow = false
          this.name = ''
        })
        location.reload()
      })
    }
  },
  mounted () {
    console.log(this.$store)
    if (this.$store.state.user.userInfo) {
      this.name = this.$store.state.user.userInfo.uname
      this.isLogined = true
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.nav-user{
  padding-top: 11px;
  .nav-user-logined{
    display: flex;
    justify-content: flex-start;
    height: 40px;
    .nav-user-find{
      background-color: rgba(255, 255, 255, 0.2);
      text-align: center;
      border-radius: 4px;
      color: #fff;
      font-size: 18px;
      width: 90px;
      line-height: 40px;
      cursor: pointer;
    }
    >div{
      position: relative;
      text-align: center;
      width: 100px;
      span{
        color: #fff;
        cursor: pointer;
        font-size: 18px;
        border-radius: 4px;
        display: block;
        line-height: 40px;
      }
      .login{
        width: 20px;
        display: inline;
      }
      .signup{
        width: 20px;
        display: inline;
        margin-left: 20px;
      }
      .logout{
        position: absolute;
        top: 82px;
        width: 100%;
        font-size: 14px;
        background-color: rgba(66, 66, 66, 0.2);
        z-index:9999;
      }
      .personalData{
        position: absolute;
        top: 40px;
        width: 100%;
        font-size: 14px;
        background-color: rgba(66, 66, 66, 0.2);
        z-index:9999;
      }
    }
  }
}
</style>

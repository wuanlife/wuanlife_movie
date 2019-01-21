<template>
  <ribbon-card title="相关资源">
    <router-link slot="header" :to="{ path: `/share/${movieId}` }" tag="span" class="share">+分享资源</router-link>
    <div class="related-resources">
      <ul v-if="data.length > 0">
        <li v-for="(item, index) in data" :key="item.id">
          <header :title="item.title"><a :href="item.url">【{{ item.type }}】{{ item.title }}</a></header>
          <span v-if="item.password">网盘密码：{{ item.password }}</span>
          <p>说明：{{ item.instruction }}</p>
          <footer>
            <span>分享者：{{ item.sharer.name }}</span>
            <time>{{ item.create_at }}</time>
            <div v-if="item.sharer.name === userName">
              <span
                @click="editResources(item.mid, item.id, index)"
              >编辑</span>
              <span
                @click="deleteResources(item.mid, item.id)"
              >删除</span>
            </div>
          </footer>
        </li>
      </ul>
      <span class="prompt" v-else>资源列表是空的，快去分享资源吧！</span>
    </div>
  </ribbon-card>
</template>

<script>
import { deleteMovieResources } from 'api/movies'

export default {
  name: 'RelatedResources',
  props: {
    resources: {
      type: Array,
      required: true
    },
    movieId: {
      required: true
    }
  },
  data () {
    return {
      data: [],
      userName: ''
    }
  },
  mounted () {
    const {accessToken, idToken, userInfo} = this.$store.getters.user
    if (accessToken && idToken) {
      this.userName = userInfo.uname
    }
  },
  watch: {
    resources: function () {
      this.data = this.resources
    }
  },
  methods: {
    deleteResources (mid, rid) {
      const {accessToken, idToken} = this.$store.getters.user
      if (accessToken && idToken) {
        deleteMovieResources(mid, rid)
          .then(response => {
            this.data = this.data.filter(item => item.id !== rid)
          })
          .catch(e => console.log(e))
      } else {
        this.$notify({
          title: '操作失败',
          message: '您没有权限操作！，请先登录',
          type: 'warning'
        })
      }
    },
    editResources (mid, rid, index) {
      const {accessToken, idToken} = this.$store.getters.user
      if (accessToken && idToken) {
        this.$router.push({
          path: `/share/${mid}`,
          query: {
            resourcesData: this.data[index],
            rid: rid
          }
        })
      } else {
        this.$notify({
          title: '操作失败',
          message: '您没有权限操作！，请先登录',
          type: 'warning'
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.share{
  font-size: 12px;
  cursor: pointer;
  color: #f32941;
  float: right;
  &:hover{
    font-weight: bold;
  }
}
.related-resources{
  position: relative;
  .share{
    position: absolute;
    right: 40px;
    top: -13px;
    font-size: 12px;
    color: #f32941;
    &:hover{
      font-weight: bold;
    }
  }
  >.prompt{
    color: #aaa;
    text-align: center;
    display: block;
    width: 100%;
  }
  >ul{
    font-size: 14px;
    >li{
      border-bottom: 1px solid #dcdcdc;
      padding: 15px 0;
      &:last-child{
        border-bottom: 0;
      }
      >header{
        @include text-ellipsis(100%);
        color: #666;
        margin-bottom: 10px;
        text-decoration: underline;
        cursor: pointer;
        &:hover{
          color: #f32941;
        }
      }
      >p{
        color: #666;
        margin-bottom: 5px;
      }
      >footer{
        display: flex;
        justify-content: flex-start;
        >span{
          color: #666;
        }
        >time{
          color: #999;
          margin-left: 34px;
        }
        >div{
          flex: 1;
          text-align: right;
          font-size: 10px;
          color: #f32941;
          >span{
            cursor: pointer;
            &:hover{
              font-weight: bold;
            }
            &:last-child{
              margin-left: 12px;
            }
          }
        }
      }
    }
  }
}
</style>

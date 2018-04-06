<template>
  <div class="card-default related-resources">
    <header>相关资源</header>
    <div>
      <router-link :to="{ path: `/share/${movieId}` }" class="share">+分享资源</router-link>
      <ul>
        <li v-for="item in data" :key="item.id">
          <header :title="item.title"><a :href="item.url">{{ item.title }}</a></header>
          <p>说明：{{ item.instruction }}</p>
          <footer>
            <span>分享者：{{ item.sharer.name }}</span>
            <time>{{ item.create_at }}</time>
            <div>
              <span>编辑</span>
              <span
                @click="deleteResources(item.mid, item.id)"
              >删除</span>
            </div>
          </footer>
        </li>
      </ul>
    </div>
  </div>
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
      data: []
    }
  },
  watch: {
    resources: function () {
      this.data = this.resources
    }
  },
  methods: {
    deleteResources (mid, rid) {
      deleteMovieResources(mid, rid)
        .then(response => {
          this.data = this.data.filter(item => item.id !== rid)
        })
        .catch(e => console.log(e))
    }
  }
}
</script>

<style lang="scss" scoped>
.related-resources{
  width: 695px;
  > header{
    font-size: 18px;
  }
  > div{
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
          color: #444;
          margin-bottom: 10px;
          text-decoration: underline;
          cursor: pointer;
          &:hover{
            color: #f32941;
          }
        }
        >p{
          color: #5e5e5e;
          margin-bottom: 10px;
        }
        >footer{
          display: flex;
          justify-content: flex-start;
          >span{
            color: #5e5e5e;
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
}
</style>

<template>
  <div class="card-default related-resources">
    <header>相关资源</header>
    <div>
      <router-link to="" class="share">+分享资源</router-link>
      <ul>
        <li v-for="(item, index) in data" :key="index">
          <header :title="item.title">{{ item.title }}</header>
          <p>{{ item.explanation }}</p>
          <footer>
            <span>分享者：{{ item.share_user }}</span>
            <time>{{ item.time }}</time>
            <div>
              <span>编辑</span>
              <span>删除</span>
            </div>
          </footer>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RelatedResources',
  //   props: ['data'],
  data () {
    return {
      data: [
        {
          title: '【电驴】肖申克的救赎说明：中英双语字幕，人人字幕组出品。说明：中英双语字幕，人人字幕组出品。',
          time: '2014-32-45',
          explanation: '说明：中英双语字幕，人人字幕组出品。',
          share_user: 'haha'
        },
        {
          title: '【电驴】肖申克的救赎',
          time: '2014-32-45',
          explanation: '说明：中英双语字幕，人人字幕组出品。',
          share_user: 'haha'
        },
        {
          title: '【电驴】肖申克的救赎',
          time: '2014-32-45',
          explanation: '说明：中英双语字幕，人人字幕组出品。',
          share_user: 'haha'
        }
      ]
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

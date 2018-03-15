<template>
  <div class="card-default planet">
    <header>的星球的星球的星球的星球的星球的星球的星球的星球的星球</header>
    <div>
      <ul>
        <li v-for="(item, index) in messageBox" :key="index">
          <img :src="item.img_url" alt="">
          <div>
            <div>
              <span class="user-name">{{ item.name }}</span>
              <span class="time">{{ item.time }}</span>
            </div>
            <p>{{ item.message }}</p>
          </div>
        </li>
      </ul>
      <div>
        <input type="text" placeholder="说点什么吧...">
        <icon-svg icon-class="ic_send_black_px" class="send"></icon-svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Planet',
  props: ['message'],
  data () {
    return {
      messageBox: [
        {
          name: '淘淘',
          img_url: 'ddd.jpg',
          time: '2周前',
          message: '哈哈，测试，。测试一下哈哈，测试，。测试一下哈哈，测试，。测试一下哈哈，测试，。测试一下哈哈，测试，。测试一下哈哈，测试，。测试一下'
        },
        {
          name: '淘淘',
          img_url: 'ddd.jpg',
          time: '2周前',
          message: '哈哈，测试，。测试一下'
        },
        {
          name: '淘淘',
          img_url: 'ddd.jpg',
          time: '2周前',
          message: '哈哈，测试，。测试一下'
        },
        {
          name: '淘淘',
          img_url: 'ddd.jpg',
          time: '2周前',
          message: '哈哈，测试，。测试一下'
        },
        {
          name: '淘淘',
          img_url: 'ddd.jpg',
          time: '2周前',
          message: '哈哈，测试，。测试一下'
        },
        {
          name: '淘淘',
          img_url: 'ddd.jpg',
          time: '2周前',
          message: '哈哈，测试，。测试一下'
        },
        {
          name: '淘淘',
          img_url: 'ddd.jpg',
          time: '2周前',
          message: '哈哈，测试，。测试一下'
        },
        {
          name: '淘淘',
          img_url: 'ddd.jpg',
          time: '2周前',
          message: '哈哈，测试，。测试一下'
        },
        {
          name: '淘淘',
          img_url: 'ddd.jpg',
          time: '2周前',
          message: '哈哈，测试，。测试一下'
        },
        {
          name: '淘淘',
          img_url: 'ddd.jpg',
          time: '2周前',
          message: '哈哈，测试，。测试一下'
        },
        {
          name: '淘淘',
          img_url: 'ddd.jpg',
          time: '2周前',
          message: '哈哈，测试，。测试一下'
        },
        {
          name: '淘淘',
          img_url: 'ddd.jpg',
          time: '2周前',
          message: '哈哈，测试，。测试一下'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.planet{
  width: 261px;
  height: 463px;
  padding: 15px 0 0 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  >header{
    font-size: 16px;
    margin-bottom: 13px;
  }
  >div{
    font-size: 10px;
    color: #333;
    padding: 0;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    >ul{
      padding: 12px 13px 6px 10px;
      border-top: 1px solid #f8f9fa;
      border-bottom: 1px solid #f8f9fa;
      background-color: #fdfdfe;
      overflow: auto;
      flex: 1;
      >li{
        display: flex;
        align-items: stretch;
        margin-bottom: 14px;
        &:last-child{
          margin-bottom: 0;
        }
        img{
          width: 31px;
          height: 30px;
          border-radius: 100%;
          background-color: rgb(219, 217, 217);
          margin-right: 7px;
        }
        >div{
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          >div{
            display: flex;
            justify-content: space-between;
            margin-bottom: 10px;
            .user-name{
              color: #f32941;
            }
            .time{
              font-size: 8px;
              color: #999;
            }
          }
          >p{
            text-align: justify;
          }
        }
      }
    }
    >div{
      background-color: #fff;
      border-radius: 0 0 4px 4px;
      position: relative;
      >input{
        border: 0;
        height: 100%;
        width: 100%;
        padding: 13px 30px 9px 14px;
        font-size: 12px;
        color: #999;
      }
      .send{
        color: #9c9c9c;
        width: 15px;
        font-size: 12px;
        position: absolute;
        right: 14px;
        top: 50%;
        transform: translateY(-50%);
      }
    }
  }
}
</style>

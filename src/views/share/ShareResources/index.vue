<template>
  <ribbon-card title="分享资源">
    <div class="form-box">
      <form>
        <div class="form-item">
          <span class="item-lebal">类型：</span>
          <div class="radio" @change.stop="changeRadio">
            <input class="radio-dot" id="online" value="在线" type="radio" v-model="form.type">
            <label class="radio-lebal" for="online">在线</label>
            <input class="radio-dot" id="cili" value="磁力" type="radio" v-model="form.type">
            <label class="radio-lebal" for="cili">磁力</label>
            <input class="radio-dot" id="dianlv" value="电驴" type="radio" v-model="form.type">
            <label class="radio-lebal" for="dianlv">电驴</label>
            <input class="radio-dot" id="pan" value="网盘" type="radio" v-model="form.type">
            <label class="radio-lebal" for="pan">网盘</label>
          </div>
          <span v-if="check.type" class="prompt">资源类型是必选的</span>
        </div>
        <div class="form-item">
          <span class="item-lebal">标题：</span>
          <input class="item-input" v-model.trim="form.title" type="text" @change="titleChange">
          <span v-if="check.title" class="prompt">标题不能为空</span>
        </div>
        <div class="form-item">
          <span class="item-lebal">链接：</span>
          <input class="item-input" v-model.trim="form.url" type="text" @change="urlChange">
          <span v-if="check.url" class="prompt">{{ urlPrompt }}</span>
        </div>
        <div v-if="showPassword" class="form-item">
          <span class="item-lebal">密码：</span>
          <input class="item-input" placeholder="选填"  v-model.trim="form.password" type="text">
        </div>
        <div class="form-item form-textarea">
          <span class="item-lebal">说明：</span>
          <textarea class="textarea" placeholder="选填"  v-model.trim="form.instruction" @change="instructionChange"></textarea>
        </div>
        <button @click.stop.prevent="checkLogin" class="submit">提交</button>
      </form>
    </div>
  </ribbon-card>
</template>

<script>
import { addMovieResources, updateMovieResources } from '../../../api/movies'

export default {
  name: 'ShareResources',
  props: ['movieId', 'resourcesData'],
  data () {
    return {
      form: {
        type: '',
        title: '',
        url: '',
        password: '',
        instruction: ''
      },
      check: {
        type: false,
        title: false,
        url: false
      },
      urlPrompt: '',
      typeReady: false,
      urlReady: false,
      titelReady: false,
      passwordReady: false,
      instructionReady: false,
      showPassword: false
    }
  },
  mounted () {
    if (this.$route.query.resourcesData) {
      const {title, type, url, instruction, password} = this.$route.query.resourcesData
      this.form.title = title
      this.form.url = url
      this.form.instruction = instruction || ''
      this.form.password = password || ''
      this.form.type = type || ''
      this.typeReady = true
      this.urlReady = true
      this.titelReady = true
      this.passwordReady = password || false
      this.instructionReady = instruction || false
      this.showPassword = type === '网盘' || false
    }
  },
  methods: {
    checkLogin: function () {
      const {accessToken, idToken} = this.$store.getters.user
      if (accessToken && idToken) {
        this.submit()
      } else {
        this.$notify({
          title: '操作失败',
          message: '您没有权限操作！，请先登录',
          type: 'warning'
        })
      }
    },
    submit: function () {
      if (this.typeReady && this.urlReady && this.titelReady) {
        if (this.form.title !== '' && this.form.url !== '' && this.form.type !== '') {
          if (this.$route.query.resourcesData) {
            updateMovieResources(this.movieId, this.$route.query.rid, this.form)
              .then(res => {
                this.$notify({
                  title: '更新成功',
                  message: '更新资源成功！',
                  type: 'success'
                })
                this.$router.go(-1)
              })
              .catch(err => console.log(err))
          } else {
            addMovieResources(this.movieId, this.form)
              .then(res => {
                this.$notify({
                  title: '分享成功',
                  message: '分享资源成功！',
                  type: 'success'
                })
                this.$router.go(-1)
              })
              .catch(err => console.log(err))
          }
        } else {
          this.$notify({
            title: '分享失败',
            message: '请检查必填选项是否填写完整，修改后再尝试',
            type: 'warning'
          })
        }
      } else {
        this.$notify({
          title: '分享失败',
          message: '请检查必填选项是否符合格式，修改后再尝试',
          type: 'warning'
        })
      }
    },
    changeRadio: function (events) {
      let type = events.target.innerText || events.target.attributes.value.value
      this.form.type = type
      if (type === '网盘') {
        this.showPassword = true
      } else {
        this.showPassword = false
      }
      this.typeReady = true
      this.urlChange()
    },
    titleChange: function () {
      if (this.form.title === '') {
        this.check.title = true
        this.titelReady = false
      } else {
        this.check.title = false
        this.titelReady = true
      }
    },
    urlChange: function () {
      if (this.form.url === '') {
        this.urlPrompt = 'url不能为空'
        this.check.url = true
        this.urlReady = false
        return false
      } else if (this.form.type === '') {
        this.urlPrompt = '选择资源类型后，再填入链接'
        this.check.url = true
        this.urlReady = false
        this.form.url = ''
        return false
      } else if (this.form.type === '磁力') {
        let a = this.form.url.indexOf('magnet')
        if (a !== 0) {
          this.urlPrompt = '磁力链接必须以 magnet 开头'
          this.check.url = true
          this.urlReady = false
          return false
        }
      } else if (this.form.type === '电驴') {
        let a = this.form.url.indexOf('ed2k')
        if (a !== 0) {
          this.urlPrompt = '电驴链接必须以 ed2k 开头'
          this.check.url = true
          this.urlReady = false
          return false
        }
      }
      this.urlReady = true
      this.check.url = false
    },
    instructionChange: function () {
      if (this.form.instruction === '') {
        this.instructionReady = false
      } else {
        this.instructionReady = true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.form-box {
  padding: 35px 0 35px 91px;
  width: 1000px;
}
.item-lebal {
  font-size: 14px;
  color: #333;
  font-weight: bold;
  margin-right: 23px;
}
.form-item {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 17px;
  position: relative;
}
.prompt {
  font-size: 8px;
  color: red;
  margin-left: 10px;
}
.radio {
  position: relative;
}
.radio-dot {
  width: 0;
  height: 0;
}
.radio-dot::before {
  content: '';
  width: 12px;
  height: 12px;
  background-color: #fff;
  display: block;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  border: 1px solid #aaa;
  border-radius: 100%;
  padding: 2px;
  background-clip: content-box;
}
.radio-dot:hover::before {
  border-color: #f32941;
}
.radio-dot:checked::before {
  border-color: #f32941;
  background-color: #f32941;
}
.radio-lebal {
  font-size: 14px;
  color: #333;
  font-weight: inherit;
  margin: 0 40px 0 15px;
}
.item-input {
  height: 32px;
}
.item-input, .textarea {
  width: 393px;
  border: none;
  background-color: rgba(209, 209, 209, 0.3);
  padding: 11px 13px 9px 13px;
  font-size: 12px;
  color: #444;
  border-radius: 4px;
  display: block;
  box-sizing: border-box;
}
.item-input:focus, .item-input:hover, .textarea:focus, .textarea:hover {
  border: 2px solid rgba(209, 209, 209, 0.3);
  background: #fff;
}
.item-input::-webkit-input-placeholder, .textarea::-webkit-input-placeholder {
  color: #999;
}
.textarea {
  height: 92px;
  resize: none;
}
.form-textarea {
  align-items: flex-start;
}
.submit {
  font-size: 14px;
  color: #fff;
  padding: 9px 32px 9px 33px;
  background: #f32941;
  border: solid 1px #f32941;
  border-radius: 4px;
  margin-top: 32px;
  margin-left: 65px;
  cursor: pointer;
}
</style>

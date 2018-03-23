<template>
  <div class="movie-introduction card-default">
    <header>剧情简介</header>
    <div>
      <p>20世纪40年代末，小有成就的青年银行家安迪（蒂姆·罗宾斯 Tim Robbins 饰）因涉嫌杀害妻子及她的情人而锒铛入狱。在这座名为肖申克的监狱内，希望似乎虚无缥缈，终身监禁的惩罚无疑注定了安迪接下来灰暗绝望的人生。未过多久，安迪尝试接近囚犯中颇有声望的瑞德（摩根·弗里曼 Morgan Freeman 饰），请求对方帮自己搞来小锤子。以此为契机，二人逐渐熟稔，安迪也仿佛在鱼龙混杂、罪恶横生、黑白混淆的牢狱中找到属于自己的求生之道。他利用自身的专业知识，帮助监狱管理层逃税、洗黑钱，同时凭借与瑞德的交往在犯人中间也渐渐受到礼遇。表面看来，他已如瑞德那样对那堵高墙从憎恨转变为处之泰然，但是对自由的渴望仍促使他朝着心中的希望和目标前进。而关于其罪行的真相，似乎更使这一切朝前推进了一步……</p>
      <p>本片根据著名作家斯蒂芬·金（Stephen Edwin King）的原著改编。©豆瓣 </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MovieIntroduction',
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.movie-introduction{
  font-size: 18px;
  width: 695px;
  > header{}
  >div{
    font-size: 14px;
    color: #444;
    text-indent: 2em;
    line-height: 25px;
    text-align: justify;
  }
}
</style>

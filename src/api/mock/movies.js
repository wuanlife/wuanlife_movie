export default function moviesRule(mockAdapter) {
  mockAdapter
    .onGet('/movies/1')
    .reply(200, {
      id:1,
      title:"肖申克的救赎",
      original_title:"The Shawshank Redemption",
      countries:"美国",
      year:"1994",
      genres:
          [
            {type:"剧情"},
            {type:"悬疑"}
          ],
      aka:"月黑风高/刺激1995",
      directors:
          [
            {name:"director"}
          ],
      casts:
          [
            {name:"蒂姆·罗宾斯"},
            {name:"摩根·弗里曼"},
            {name:"鲍勃·冈顿"},
            {name:"威廉姆·赛德勒"}
          ],
      summary:"20世纪40年代末，小有成就的青年银行家安迪...",
      rating:9.5,
      url_douban:"https://movie.douban.com/subject/6390825/",
    })
    .onGet('/movies/1/resources')
    .reply(200, {
      resources:
      [
        {
          id:1,
          type:"电驴",
          title:"肖申克的救赎.双语字幕.HR-HDTV.AC3.1024X576.X264-人人影视制作.mkv",
          instruction:"中英双语字幕，人人字幕组出品",
          url:"http://example.com",
          create_at:"2017-07-20T12:50:30.176Z",
          sharer:
          {
            id:1,
            name:"资源小王子"
          }
        },
        {
          id:2,
          type:"网盘",
          title:"【网盘】肖申克的救赎.双语字幕.HR-HDTV.AC3.1024X576.X264-人人影视制作.mkv",
          instruction:"中英双语字幕，人人字幕组出品",
          password:"s8ed",
          url:"http://example.com",
          create_at:"2017-07-20T12:50:30.176Z",
          sharer:
          {
            id:2,
            name:"资源大王子"
          }
        }
      ]
    })
    .onPost('/movies')
    .reply(200, {
      id: 410
    });
}

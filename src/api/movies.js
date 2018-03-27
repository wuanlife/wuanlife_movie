import fetch from 'utils/fetch'
import store from 'vuex-store'

// 获取电影详情
export function getMovie (id) {
  return fetch({
    url: `/movies/${id}`,
    method: 'get'
  })
}

// 获取电影资源列表
export function getMovieResources (id) {
  return fetch({
    url: `/movies/${id}/resources`,
    method: 'get'
  })
}

// 删除指定电影资源
export function deleteMovieResources (mid, rid) {
  return fetch({
    url: `/movies/${mid}/resources/${rid}`,
    method: 'delete'
  })
}

// 新增文章
export function postArticles (params) {
  const data = {
    ...params
  }
  return fetch({
    url: '/articles',
    method: 'post',
    data
  })
}

// 修改文章
export function putArticle (id, params) {
  const data = {
    ...params
  }
  return fetch({
    url: `/articles/${id}`,
    method: 'put',
    data
  })
}
export function deleteArticle (id) {
  return fetch({
    url: `/articles/${id}`,
    method: 'delete'
  })
}

// 点赞文章
export function approveArticle (id) {
  return fetch({
    url: `/articles/${id}/approval`,
    method: 'post',
    data: {}
  })
}
export function unapproveArticle (id) {
  return fetch({
    url: `/articles/${id}/approval`,
    method: 'delete',
    data: {}
  })
}

// 收藏文章
export function collectArticle (id) {
  return fetch({
    url: `/users/${store.state.user.id}/collections`,
    method: 'put',
    data: {
      article_id: id
    }
  })
}
export function uncollectArticle (id) {
  return fetch({
    url: `/users/${store.state.user.id}/collections`,
    method: 'delete',
    data: {
      article_id: id
    }
  })
}

// 锁定文章
export function lockArticle (id) {
  return fetch({
    url: `/articles/${id}/lock`,
    method: 'post'
  })
}
export function unlockArticle (id) {
  return fetch({
    url: `/articles/${id}/lock`,
    method: 'delete'
  })
}
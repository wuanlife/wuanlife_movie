import fetch from 'utils/fetch'
// import store from 'vuex-store'

export function getTypes () {
  return fetch({
    url: `/movies/type`,
    method: 'get'
  })
}

// 获取电影详情
export function getMovie (id) {
  return fetch({
    url: `/movies/${id}`,
    method: 'get'
  })
}

export function getMovies ({type = '', limit = 20, offset = 0}) {
  return fetch({
    url: `/movies?type=${type}&limit=${limit}&offset=${offset}`,
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

// 添加资源
export function addMovieResources (id, params) {
  const data = {
    ...params
  }
  return fetch({
    url: `/movies/${id}/resources`,
    method: 'post',
    data
  })
}

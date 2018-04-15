import fetch from 'utils/fetch'

export function getUserInfo (params) {
  const data = {
    mail: params.mail,
    password: params.password
  }
  return fetch({
    url: '/users/signin',
    method: 'post',
    data
  })
}

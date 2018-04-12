const getters = {
  user: state => state.user,
  types: state => state.movies.types || []
}
export default getters

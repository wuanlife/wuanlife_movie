import { getTypes as getTypesFromAPI } from 'api/movies'

const movies = {
  state: {
    types: [{
      type_id: '',
      type_name: '首页'
    }]
  },
  mutations: {
    SET_TYPES: (state, types) => {
      state.types = [{
        type_id: '',
        type_name: '首页'
      }].concat(types)
    },
    CLEAR: state => {
      for (const key in state) {
        state[key] = null
      }
    }
  },

  actions: {
    async getTypes ({ commit }) {
      const types = await getTypesFromAPI()
      commit('SET_TYPES', types.type)
      return types
    },
    clear ({ commit }) {
      commit('CLEAR_TYPES')
    }
  }
}

export default movies

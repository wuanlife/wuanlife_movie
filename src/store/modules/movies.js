import { getTypes as getTypesFromAPI } from 'api/movies'

const movies = {
  state: {
    types: []
  },
  mutations: {
    SET_TYPES: (state, types) => {
      state.types = types
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

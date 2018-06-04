import api from '~/api/recipe'
import * as uuidv4 from 'uuid/v4'

const state = {
  all: []
}

const getters = {
  allRecipes: (state, getters) => state.all
}

const actions = {
  checkoutRecipes ({ commit }) {
    api.getAllRecipes().then(
      (allRecipes) => commit('setRecipes', allRecipes)
    )
  },
  addRecipe ({ state, commit }, title = '') {
    if (!title) {
      commit('pushRecipe', 'New recipe')
    }
  }
}

const mutations = {
  setRecipes (state, recipes) {
    state.all = recipes
  },
  pushRecipe (state, title) {
    state.all.push({
      id: uuidv4(),
      title: title
    })
  }
}

export default { state, getters, actions, mutations }

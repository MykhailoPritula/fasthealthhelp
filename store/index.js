export const state = () => ({
  modal: false
})

export const mutations = {
  setModal(state, modal) {
    state.modal = modal
  }
}

export const actions = {
  getModal({ commit }) {
    commit('setModal', modal);
  }
}

export const getters = {
  modal: state => state.modal
}
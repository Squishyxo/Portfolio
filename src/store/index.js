import { createStore } from 'vuex'

export default createStore({
  state: {
     lightTheme: true,
  },
  getters: {
  },
  mutations: {
  changeTheme(state) {
    state.lightTheme = !state.lightTheme;
    if (state.lightTheme === true) {
      document.documentElement.style.setProperty('--primary-color', '#fff');
      document.documentElement.style.setProperty('--secondary-color', '#111');
      document.documentElement.style.setProperty('--third-color', '#42b983');
      document.documentElement.style.setProperty('--cards-color', '#E9EDDE');
      document.documentElement.style.setProperty('--code-color', '#111');
        } else {
      document.documentElement.style.setProperty('--primary-color', '#1a1a1a');
      document.documentElement.style.setProperty('--secondary-color', '#E9EDDE');
      document.documentElement.style.setProperty('--third-color', '#0f0f0f');
      document.documentElement.style.setProperty('--cards-color', '#111');
      document.documentElement.style.setProperty('--code-color', '#fff');
            }
        },
    },
  actions: {
  },
  modules: {
  }
})

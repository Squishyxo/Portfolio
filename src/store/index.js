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
      document.documentElement.style.setProperty('--primary-color', '#FFCB36');
      document.documentElement.style.setProperty('--secondary-color', '#0E141F');
      document.documentElement.style.setProperty('--third-color', '#42b983');
      document.documentElement.style.setProperty('--cards-color', '#E9EDDE');
      document.documentElement.style.setProperty('--code-color', '#111');
      document.documentElement.style.setProperty('--alerts-color', '#fff');
        } else {
      document.documentElement.style.setProperty('--primary-color', '#1a1a1a');
      document.documentElement.style.setProperty('--secondary-color', '#E9EDDE');
      document.documentElement.style.setProperty('--third-color', '#000080');
      document.documentElement.style.setProperty('--cards-color', '#111');
      document.documentElement.style.setProperty('--code-color', '#fff');
      document.documentElement.style.setProperty('--alerts-color', '#111');
            }
        },
    },
  actions: {
  },
  modules: {
  }
})

export const state = () => {
    isAuth: false
}

//memanipulasi state
export const mutations = {
    SET_IS_AUTH(state, payload){
        state.isAuth = payload
    }
}

export const actions = {
    nuxtServerInit({commit}, context){
        //  console.log(context.app.$auth.$state.loggedIn) 
        commit('SET_IS_AUTH', context.app.$auth.$state.loggedIn)
    }
}
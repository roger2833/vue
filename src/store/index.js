import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const LS = {
  load(){
    return JSON.parse(localStorage.getItem('vue-todo') ||'[]')
  },save(data){
    localStorage.setItem('vue-todo', JSON.stringify(data))
  }
}

const filter = {
  all(todos){
    return todos
  },
  active(todos){
    return todos.filter(o => !o.complete)
  },
  complete(todos){
    return todos.filter(o => o.complete)
  }

}

export default new Vuex.Store({
  strict: true,
  state: {
    todos:[
    ]
  },
  getters:{
    todoIndex(state){
      return filter[state.route.name](state.todos)
      .map(o => state.todos.indexOf(o)) 
    }
  },
  mutations: {
    SET_TODOS(state, data){
      this.state.todos = data;
      LS.save(state.todos);
    },
    ADD_TODO(state, data){
      this.state.todos.push(data)
      LS.save(state.todos);
    },
    UPDATE_TODO(state, { index, data }){
      //to do 要調整此寫法
      this.state.todos[index] = data
      LS.save(state.todos);
    },
    DELETE_TODO(state, index){
      this.state.todos.splice(index, 1)
      LS.save(state.todos);  
    }
  },
  actions: {
    INIT_TODOLIST({commit}){

      //讀取LS
      commit('SET_TODOS', LS.load())
    }
  }ㄔ
})

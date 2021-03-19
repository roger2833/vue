<template>
  <div id="app" class ="bg-primary h100">
    <div id="nav">
      <router-link to="/all">全部</router-link> |
      <router-link to="/active">未完成</router-link> |
      <router-link to="/complete">已完成</router-link>
    </div>
    <toDoinput />
    <div class="container list">
      <toDoListItem v-for="index in todoIndex" :key="index" :index = "index" />
    </div>
  </div>
</template>
<script>
import toDoinput from '@/components/input/input.vue'
import toDoListItem from '@/components/todoListItem/todoListItem.vue'
export default {
  components:{
    toDoinput,
    toDoListItem
  },
  computed:{
    todoIndex(){
      return this.$store.getters['todoIndex']
    }
  },
  mounted(){
     this.$store.dispatch('INIT_TODOLIST')
  }
}
</script>


<style>

.container{
  width: 800px;
  margin: 0 auto;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.bg-primary{
  background: #B5FFB5;
}

.h100{
  height: 100vh;
}



</style>

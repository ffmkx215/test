<template>
  <div id="app">
    <HelloWorld v-if="!isSummit"/>
    <Table v-if="isSummit"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Table from './components/Table.vue'
import { mapState} from "vuex";
export default {
  name: 'App',
  data(){
    return {
    }
  },
  components: {
    HelloWorld,
    Table
  },
  methods:{
  },
  computed: {
    ...mapState(["isSummit"]),
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

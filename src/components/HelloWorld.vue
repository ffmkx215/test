<template>
  <div class="hello">
    <div>
      <h1>Name</h1>
      <input type="text" v-model="Name" />
    </div>
    <div>
      <h1>Birthday</h1>
      <input type="date" v-model="Birthday" @change="countAge" />
    </div>
    <div>
      <h1>Age</h1>
      <p>{{ Age }}</p>
    </div>
    <button @click="Add" :disabled="isDisabled">
      Add
    </button>
    <List v-if="isList" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import List from "./List.vue";
export default {
  name: "HelloWorld",
  data() {
    return {
      Name: "",
      Age: 0,
      Birthday: "",
      isList: false,
    };
  },
  components: {
    List,
  },
  props: [],
  methods: {
    Add() {
      this.isList = true;
      let data = { name: this.Name, birthday: this.Birthday, age: this.Age };
      this.$store.commit("setList", data);
    },
    countAge() {
      let birthdays = new Date(this.Birthday.replace(/-/g, "/"));
      let d = new Date();
      let age =
        d.getFullYear() -
        birthdays.getFullYear() -
        (d.getMonth() < birthdays.getMonth() ||
        (d.getMonth() == birthdays.getMonth() &&
          d.getDate() < birthdays.getDate())
          ? 1
          : 0);
      this.Age = age;
    },
  },
  created() {},
  watch: {},
  computed: {
    ...mapState(["list"]),
    isDisabled: function() {
      if (this.Name != "" && this.Birthday != "" && this.Age >= 0) {
        return false;
      } else {
        return true;
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

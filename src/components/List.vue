<template>
  <div class="list">
    <table class="table">
      <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col">Name</th>
          <th scope="col">Birthday</th>
          <th scope="col">Age</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in list" :key="index">
          <th scope="row">{{ index }}</th>
          <td>{{ item.name }}</td>
          <td>{{ item.birthday }}</td>
          <td>{{ item.age }}</td>
        </tr>
      </tbody>
    </table>
    <button @click="Summit">Summit</button>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "List",
  data() {
    return {};
  },
  methods: {
    Summit() {
      this.$store.commit("setTab");
    },
  },
  props: [],
  created() {
  },
  computed: {
    ...mapState(["list"]),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>

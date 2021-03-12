<template>
<div>
  <div> 
    <div style='display:flex' v-for="(n,index) in dealMonth" :key="index">
      <table class="table" v-if="n.people.length!=0">
        <thead>
          <tr>
            <th scope="col">{{n.month}}</th>
          </tr>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Birthday</th>
            <th scope="col">Age</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item,index) in n.people" :key="index" >
            <td>{{item.name}}</td>
            <td>{{item.birthday}}</td>
            <td>{{item.age}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Table",
  data() {
    return {
      data:[
          {month:"Jan", people:[]},
          {month:"Feb", people:[]},
          {month:"Mar", people:[]},
          {month:"Apr", people:[]},
          {month:"May", people:[]},
          {month:"Jun", people:[]},
          {month:"Jul", people:[]},
          {month:"Aug", people:[]},
          {month:"Sep", people:[]},
          {month:"Oct", people:[]},
          {month:"Nov", people:[]},
          {month:"Dec", people:[]}
      ],
    };
  },
  computed: {
    ...mapState(["list"]),
    dealMonth(){
        this.list.forEach(element => {
            let birthdays = new Date(element.birthday.replace(/-/g, "/"));
            this.data[birthdays.getMonth()].people.push(element)
        });
        return this.data
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.table {
    padding: 1em;
    margin: 1em;
    width: 300px;
}
</style>

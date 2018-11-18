<template>
  <div class="mainview">
    <div v-if="singleView">
      <h1>Single View</h1>
      <member :member="active_member"></member>
    </div>
    <div v-else>
      <h1>Members App</h1>
      <Member :key="member.id" v-for="member in members" :member="member"></Member>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import Member from './Member'

export default {
  computed: {
    ...mapGetters([
      'active_member',
      'members',
      'singleView'
    ])
  },
  components: {
    Member
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mainview {
  flex: 3;
}
h1, h2 {
  font-weight: normal;
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

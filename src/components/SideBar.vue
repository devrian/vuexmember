<template>
  <div class="sidebar">
    <h2>Sidebar</h2>
    <Member 
    :key="member.id" 
    v-for="member in members" 
    :member="member" 
    @click.native.prevent="showMember(member)"> </Member>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import Member from './Member'

export default {
  computed: {
    ...mapGetters([
      'members'
    ])
  },
  components: {
    Member
  },
  methods: {
    ...mapActions([
      'showMember'
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sidebar {
  flex: 1;
}
</style>

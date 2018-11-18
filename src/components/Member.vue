<template>
    <div class="members">
      <h3>Member {{member.name}} - {{member.point}}</h3>
      <img :src="'/static/images/' + member.img" width="200">
    </div>
</template>

<script>
    export default {
        props: [
            'member'
        ]
    }
</script>

<style scoped>
.sidebar img {
  width: 100px
}
</style>
<template>
  <div class="home">
      <span>这是首页</span>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {

    }
  },
  mounted() {
    var params = {
      recommendType: 1,
      page: 3,
      perPage: 6,
      listType: 'recommend'
    }

    this.$axios({
      method: 'get',
      url: '/product/itemlist',
      params: {
        recommendType: 1,
        page: 3,
        perPage: 6,
        listType: 'recommend'
      }
    }).then(response => {
      console.log(response)
    })
  }
}
</script>

<style lang="scss" scoped>
  .home {
    span {
      font-size: 30px;
    }
  }

</style>

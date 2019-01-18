<template>
  <div>
    <div>main</div>
    <input
      type="button"
      @click="logout"
    >
  </div>
</template>

<script>
export default {
  // 写好路由以后该步骤可抽取到导航守卫中
  // beforeCreate() {
  //   let token = window.sessionStorage.getItem("token");
  //   if (token) {
  //   } else {
  //     this.$message.error("请先登录");
  //     this.$router.push("login");
  //   }
  // },
  methods: {
    logout() {
      window.sessionStorage.removeItem("token");
      this.$router.push("login");
    }
  }
};
</script>
<style lang="">
</style>
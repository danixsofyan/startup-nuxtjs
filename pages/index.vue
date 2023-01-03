<template>

</template>

<script>
export default {
  name: 'IndexPage',
  mounted() {
    let isLogin = this.$auth.loggedIn;
    if (isLogin) {
      let userInfo = this.$auth.user;
      this.$router.push('/home');
    } else {
      this.$router.push('/login');
    }
  }
}
</script>

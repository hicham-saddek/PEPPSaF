<template>
    <div class="flex flex-col h-screen bg-white dark:bg-dark">
      <Header />
      <router-view class="flex-grow" />
      <Footer />
    </div>
</template>

<script>
import Header from "@/components/Header"
import Footer from "@/components/Footer"


export default {
    name: "ApplicationLayout",
    components: {Header, Footer}
}
</script>

<style lang="scss">
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
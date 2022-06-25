<template>
  <navbar></navbar>
  <router-view></router-view>
  <footer1></footer1>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer1 from "@/components/Footer.vue";

export default {
  name: "Beranda",
  components: { Navbar, Footer1 },

  head: {
    link: [
      {
        rel: "icon",
        href: require("./assets/img/unw.png"),
      },
    ],
  },
};
</script>

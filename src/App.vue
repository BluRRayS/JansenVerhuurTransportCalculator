<template>
  <v-app>
    <NavBar />
    <v-main>
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </v-main>
    <Footer/>
  </v-app>
</template>

<script>
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

export default {
  name: "App",

  components: {
    NavBar,
    Footer,
  },

  data: () => ({
    //
  }),
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-in-out, transform 0.3s ease;
}
.fade-enter-active {
  transition-delay: 0.3s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.fade-enter-to,
.fade-leave {
  opacity: 1;
}
.lightbox{
  background:rgba(128,128,128,0.3)
}
</style>
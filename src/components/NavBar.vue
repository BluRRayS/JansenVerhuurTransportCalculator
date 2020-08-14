<template>
  <nav>
    <v-app-bar app class="primary">
      <v-app-bar-nav-icon class="white--text hidden-sm-and-up" @click="drawer = !drawer"></v-app-bar-nav-icon>
      <router-link to="/" tag="span" style="cursor: pointer">
        <v-toolbar-title class="text-uppercase white--text ">
          <span class="font-weight-light">Jansen Verhuur </span>
          <span>Transport</span>
        </v-toolbar-title>
      </router-link>

      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn primary dark text v-for="item in links" :key="item.title" :to="item.route">
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-navigation-drawer dark disable-resize-watcher app v-model="drawer" class="primary">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            <span class="font-weight-light">Jansen Verhuur</span>
            <span> Transport</span>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>
      <v-list dense nav>
        <v-list-item v-for="item in links" :key="item.title" link router :to="item.route">
        
            <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      drawer: false,
      links: [
        {
          title: "Home",
          route: "/",
        },
        {
          title: "Prijs berekenen",
          route: "/priceCalculator",
        },
        {
          title: "Over ons",
          route: "/about",
        },
        {
          title: "Contact",
          route: "/contact",
        },
      ],
    };
  },
};
</script>

<style>
</style>
<template>
  <v-app>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
      elevate-on-scroll
      color="grey lighten-3"
    >
      <v-toolbar-title v-text="title" />
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: [
        {
          icon: "mdi-home",
          title: "Home",
          to: "/"
        },
        {
          icon: "mdi-cards-heart",
          title: "Incidents",
          to: "/incidents"
        },
        {
          icon: "mdi-cards-diamond",
          title: "Topics",
          to: "/topics"
        },
        {
          icon: "mdi-cards-club",
          title: "Users",
          to: "/users"
        },
        {
          icon: "mdi-cards-spade",
          title: "Settings",
          to: "/settings"
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Drishtim"
    };
  }
};
</script>

<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <div class="d-flex justify-center align-center ma-2">
        <v-avatar class="profile" color="grey" size="100">
          <v-img src="/v.png"></v-img>
        </v-avatar>
      </div>
      <div class="d-flex justify-center align-center mt-2 mb-1">
        <span class="text-h5">
          DRISHTIM
        </span>
      </div>
      <v-divider> </v-divider>
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <template v-slot:append>
        <v-divider> </v-divider>
        <v-card inset class="d-flex justify-center align-center">
          <span class="overline">
            copy right
          </span>
        </v-card>
      </template>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />

      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn outlined>
        Logout
      </v-btn>
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

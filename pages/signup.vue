<template>
  <v-card max-width="500" class="mx-auto" style="margin-top:70px; ">
    <v-container>
      <v-row dense>
        <v-col cols="12" sm="12" md="12">
          <h2 class="text-center mt-6"><b>Sign Up</b></h2>
        </v-col>
        <v-col cols="12" sm="12" md="12">
          <v-card outlined class="pt-4 mx-3 px-3">
            <v-text-field
              class="mx-0 ma-3"
              v-model="user.realname"
              label="Full Name"
              outlined
              prepend-inner-icon="mdi-account"
              hide-details
            ></v-text-field>
            <v-text-field
              v-model="user.phonenumber"
              class="mx-0 ma-3"
              label="Phone Number"
              outlined
              prepend-inner-icon="mdi-account"
              type="tel"
              hide-details
            ></v-text-field>
          </v-card>
        </v-col>
        <v-col cols="12" sm="12" md="12">
          <v-card outlined class="pt-4 mx-3 pa-3">
            <v-text-field
              v-model="user.username"
              class="mx-0 ma-3"
              label="Username"
              outlined
              prepend-inner-icon="mdi-account"
              hide-details
            ></v-text-field>

            <v-text-field
              v-model="user.email"
              class="mx-0 ma-3"
              label="Email"
              outlined
              prepend-inner-icon="mdi-account"
              hide-details
            ></v-text-field>
            <v-text-field
              v-model="user.pass"
              class="mx-0 ma-3"
              label="Password"
              outlined
              type="password"
              prepend-inner-icon="mdi-lock"
              hide-details
            ></v-text-field>
          </v-card>
        </v-col>
      </v-row>

      <v-card-actions class="justify-center ">
        <v-btn class="primary mt-4" @click="signup">
          Sign Up
        </v-btn>
      </v-card-actions>
      <p align="center" style="margin-right:20px; margin-top:0px;">
        Already Registerd <a @click="signInAction()">Signin?</a>
      </p>
    </v-container>
  </v-card>
</template>
<script>
import { mapMutations, mapGetters, mapActions } from "vuex";
export default {
  layout: "empty",
  data() {
    return {
      user: {
        phonenumber: "976479092333",
        username: "dineshxxxvvv",
        pass: "aaaavvvaa",
        parentuserid: 0,
        realname: "Professor Ramos",
        email: "dddskhobragade@gmail.com",
        usertype: 1
      },
      loading: false,
      passwordType: "password",
      items: [
        {
          color: "#1F7087",
          src: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
          title: "Supermodel",
          artist: "Foster the People"
        },
        {
          color: "#952175",
          src: "https://cdn.vuetifyjs.com/images/cards/halcyon.png",
          title: "Halcyon Days",
          artist: "Ellie Goulding"
        }
      ]
    };
  },
  methods: {
    ...mapActions("module/user", ["ADD_USER"]),
    signup() {
      this.ADD_USER(this.user)
        .then(res => {
          this.$toast.show(res.data, {
            theme: "toasted-primary",
            position: "bottom-right",
            duration: 2000
          });
        })
        .catch(error => {
          this.$toast.show(error, {
            theme: "toasted-primary",
            position: "bottom-right",
            duration: 2000
          });
        });
    },
    signInAction() {
      this.$router.push("/signin");
    }
  }
};
</script>

<style lang="scss" scoped></style>

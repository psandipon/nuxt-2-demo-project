<template>
  <v-card
    max-width="400"
    class="mx-auto"
    height="430"
    style="margin-top:50px; "
  >
    <v-container>
      <v-row dense>
        <v-col cols="12" sm="12" md="12">
          <h2 class="text-center mt-6"><b>Login</b></h2>
        </v-col>
        <v-col cols="12" sm="12" md="12">
          <v-text-field
            v-model="user.username"
            style="margin-top:20px;margin-right:20px;margin-left:20px;"
            label="Email"
            outlined
            prepend-inner-icon="mdi-account"
          ></v-text-field>
          <v-text-field
            v-model="user.password"
            style="margin-right:20px;margin-left:20px; margin-bottom:0px;"
            label="Password"
            outlined
            type="password"
            prepend-inner-icon="mdi-lock"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="12" md="12">
          <p align="right" style="margin-right:20px; margin-top:0px;">
            <a>forgot passwod?</a>
          </p>
        </v-col>
      </v-row>

      <v-card-actions class="justify-center ">
        <v-btn class="primary" @click="login">
          Login
        </v-btn>
      </v-card-actions>
      <p align="center" style="margin-right:20px; margin-top:0px;">
        Want to register <a @click="goToSignUp()">Sign up?</a>
      </p>
    </v-container>
  </v-card>
</template>
<script>
export default {
  layout: "empty",
  data() {
    return {
      user: { username: "dineshxxxv", password: "aaaaaa" },
      loading: false,
      passwordType: "password"
    };
  },
  methods: {
    goToSignUp() {
      this.$router.push("/signup");
    },
    login() {
      if (true) {
        this.loading = true;
        this.$auth
          .loginWith("local", {
            data: this.user
          })
          .then(res => {
            let msg = "";
            if (res.error) {
              //  handling error
              msg = res.error;
            } else {
              //  handling success
              this.$auth.setUser(res.data.data);
              this.$router.push("/");
              msg = "Successful, Welcome " + res.data.data.realname;
            }
            this.$toast.show(msg, {
              theme: "toasted-primary",
              position: "bottom-right",
              duration: 2000
            });
          })
          .catch(err => {
            console.log("err:", err);
            this.$toast.show("Something went wrong", {
              theme: "toasted-primary",
              position: "bottom-right",
              duration: 2000
            });
          });
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>

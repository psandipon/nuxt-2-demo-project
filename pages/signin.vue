<template>
  <v-card
    class="d-flex justify-center align-center"
    :height="$vuetify.breakpoint.height - 20"
    flat
  >
    {{ loading }}
    <v-card height="500" width="500" color="" class="pa-10">
      <div class="d-flex justify-center align-center ma-2 mt-10">
        <v-avatar class="profile" color="grey" size="100">
          <v-img src="/v.png"></v-img>
        </v-avatar>
      </div>
      <div class="d-flex justify-center align-center mt-2 mb-1 mb-10">
        <span class="text-h5 white--text">
          DRISHTIM
        </span>
      </div>
      <v-text-field
        label="username"
        placeholder="username"
        outlined
        v-model="user.username"
      ></v-text-field>
      <v-text-field
        label="password"
        placeholder="password"
        outlined
        v-model="user.password"
      ></v-text-field>
      <v-btn @click="login">
        Login
      </v-btn>
    </v-card>
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
    login() {
      // this.$refs.form.validate()
      if (true) {
        this.loading = true;
        this.$auth
          .loginWith("local", {
            data: this.user
          })
          .then(res => {
            if (this.$auth.loggedIn) {
              this.loading = false;
              //   this.SET_NOTIFY({
              //     text: res.data.message
              //   });
              this.$auth.setUser(res.data);
              this.$router.push("/");
            } else {
              this.loading = false;
              //   this.SET_NOTIFY({
              //     text: res.data.message,
              //     type: "error"
              //   });
            }
            // console.log("this.$auth.loggedIn:", this.$auth.loggedIn);
            // console.log("res:", res);
          })
          .catch(err => {
            // this.SET_NOTIFY({
            //   text: err.data.message,
            //   type: "error"
            // });
            if (typeof err.response !== "undefined") {
              //   this.SET_NOTIFY({
              //     text: err.response.data.message,
              //     type: "error"
              //   });
            } else {
              //   this.SET_NOTIFY({
              //     text: err.message,
              //     type: "error"
              //   });
            }
            // console.log("err:", err);
          });
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>

<template>

  <v-card
    max-width="400"
    class="mx-auto"
    height="430"
    style="margin-top:50px; "

  >


  
    <v-container >
      <v-row dense>
        <v-col
          cols="12"
          sm="12"
          md="12"
        >
          <h2 class="text-center mt-6"><b>Login</b></h2>
        </v-col>
        <v-col
          cols="12"
          sm="12"
          md="12"
        >
          <v-text-field
            style="margin-top:20px;margin-right:20px;margin-left:20px;"
            label="Email"
            outlined
             prepend-inner-icon="mdi-account"
          ></v-text-field>

        </v-col>
        <v-col
          cols="12"
          sm="12"
          md="12"
        >
          <v-text-field
            style="margin-right:20px;margin-left:20px; margin-bottom:0px;"
            label="Password"
            outlined
            type="password"
             prepend-inner-icon="mdi-lock"
          ></v-text-field>
         <p align="right" style="margin-right:20px; margin-top:0px;"><a>forgot passwod?</a></p>
        </v-col>
        
      </v-row> 

      <v-card-actions class="justify-center ">
  <v-btn class="primary">
    Login
  </v-btn>
</v-card-actions>
 <p align="center" style="margin-right:20px; margin-top:0px;">Want to register <a @click="signUpAction()">Sign up?</a></p>
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
      passwordType: "password",
      items: [
        {
          color: '#1F7087',
          src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
          title: 'Supermodel',
          artist: 'Foster the People',
        },
        {
          color: '#952175',
          src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
          title: 'Halcyon Days',
          artist: 'Ellie Goulding',
        },
      ],
    };
  },
  methods: {
     signUpAction(){
       this.$router.push('/signup');
    },
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

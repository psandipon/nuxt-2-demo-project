<template>

  <v-card
    max-width="400"
    class="mx-auto"
    height="500"
    style="margin-top:70px; "

  >


  
    <v-container >
      <v-row dense>
        <v-col
          cols="12"
          sm="12"
          md="12"
        >
          <h2 class="text-center mt-6"><b>Sign Up</b></h2>
        </v-col>
          <v-col
          cols="12"
          sm="12"
          md="12"
        >
          <v-text-field
            style="margin-top:20px;margin-right:20px;margin-left:20px;"
            label="Full Name"
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
            style="margin-top:0px;margin-right:20px;margin-left:20px;"
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
        
        </v-col>
        
      </v-row> 

      <v-card-actions class="justify-center ">
        <v-btn class="primary">
          Sign Up
        </v-btn>
      </v-card-actions>
       <p align="center" style="margin-right:20px; margin-top:0px;">Already Registerd <a @click="signInAction()">Signin?</a></p>
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
    signInAction(){
       this.$router.push('/signin');
    }
  
  }
};
</script>

<style lang="scss" scoped></style>

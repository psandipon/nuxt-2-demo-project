<template>
  <v-card
    class="d-flex justify-center align-center"
    :height="$vuetify.breakpoint.height - 20"
    flat
  >
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
        label="Outlined"
        placeholder="Placeholder"
        outlined
      ></v-text-field>
      <v-text-field
        label="Outlined"
        placeholder="Placeholder"
        outlined
      ></v-text-field>
      <v-btn>
        Login
      </v-btn>
    </v-card>
  </v-card>
</template>

<script>
export default {
  layout: "empty"
};
</script>

<style lang="scss" scoped></style>

<template>
  <v-card
    height="115"
    class="d-flex justify-center align-center flex-column text-h5 pt-2"
  >
    <p>{{ title }}</p>
    <p>{{ number }}</p>
  </v-card>
</template>

<script>
export default {
  props: ["title", "number"]
};
</script>

<style lang="scss" scoped></style>

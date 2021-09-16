<template>
  <v-app-bar rounded flat dark color="primary">
    <v-toolbar-title class="text-capitalize font-weight-bold">
      {{ title }}
    </v-toolbar-title>
    <v-divider
      vertical
      class="mx-4"
      v-if="!hideBreadcrumb && breadcrumb.length > 0"
    />
    <span v-if="!hideBreadcrumb" class="overline mt-1">{{ breadcrumb }}</span>
    <v-spacer />
    <v-btn v-if="showBtn" @click="btnFunc()" outlined>
      <span class=""> {{ btnText }}</span>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  props: {
    title: {
      required: true
    },
    hideBreadcrumb: {
      type: Boolean,
      default: true
    },

    btnText: {
      type: String,
      default: "Add"
    },

    btnFunc: { type: Function },

    showBtn: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({}),
  computed: {
    breadcrumb() {
      let path = this.$nuxt.$route.path.trim().split("/");
      let bread = "";
      path.forEach((x, i) => {
        bread = bread + this.toSnakeCase(x);
        if (i != 0 && i != path.length - 1) bread = bread + " > ";
      });
      return bread;
    }
  },
  methods: {
    toSnakeCase(inputString) {
      return inputString
        .split("")
        .map(character => {
          if (character == character.toUpperCase()) {
            return " " + character.toLowerCase();
          } else {
            return character;
          }
        })
        .join("");
    }
  }
};
</script>

<style scoped></style>

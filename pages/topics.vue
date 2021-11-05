<template>
  <div>
    <BrandTitle title="Topics" />
    <v-data-table
      :headers="headers"
      :items="GET_TOPICS_DATA"
      :items-per-page="5"
      class="elevation-1"
    />
  </div>
</template>

<script>
import { mapMutations, mapGetters, mapActions } from "vuex";
export default {
  middleware: ["authMiddleware"],
  data() {
    return {
      headers: [
        {
          text: "Trip id",
          value: "tripid"
        },
        { text: "Create datetime", value: "createdatetime" },
        { text: "Email", value: "email" },
        { text: "End datetime", value: "enddatetime" },
        { text: "Real name", value: "realname" },
        { text: "Trip name", value: "tripname" },
        { text: "User name", value: "username" }
      ]
    };
  },
  mounted() {
    this.FETCH_TOPICS_DATA();
  },
  computed: {
    ...mapGetters("module/topic", ["GET_TOPICS_DATA"])
  },
  methods: {
    ...mapActions("module/topic", ["FETCH_TOPICS_DATA"])
  }
};
</script>

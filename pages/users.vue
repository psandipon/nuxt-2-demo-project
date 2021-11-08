<template>
  <div>
    <BrandTitle title="Users" />
    <v-data-table
      :headers="headers"
      :items="GET_USERS_DATA"
      :items-per-page="5"
      :loading="loading"
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
          text: "User Id",
          value: "userid"
        },
        { text: "User Name", value: "username" },
        { text: "Total Trips", value: "tripscount" },
        { text: "Total Incidents", value: "eventscount" }
      ],
      loading: false
    };
  },
  mounted() {
    this.loading = true;
    this.FETCH_USERS_DATA().then(res => {
      this.loading = false;
    });
  },
  computed: {
    ...mapGetters("module/user", ["GET_USERS_DATA"])
  },

  methods: {
    ...mapActions("module/user", ["FETCH_USERS_DATA"])
  }
};
</script>

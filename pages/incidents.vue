<template>
  <div>
    <BrandTitle title="Incidents" />
    <v-data-table
      :headers="headers"
      :items="GET_INCIDENTS_DATA"
      :items-per-page="5"
      :loading="loading"
      class="elevation-1"
    >
    </v-data-table>
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
          text: "User id",
          value: "userid"
        },
        {
          text: "Event id",
          value: "eventid"
        },

        { text: "Event Name", value: "eventname" },
        { text: "Real Name", value: "realname" },
        { text: "Date Time", value: "datetime" }
      ],
      loading: false
    };
  },
  mounted() {
    this.loading = true;
    this.FETCH_INCIDENTS_DATA().then(res => {
      this.loading = false;
    });
  },
  computed: {
    ...mapGetters("module/incidents", ["GET_INCIDENTS_DATA"])
  },

  methods: {
    ...mapActions("module/incidents", ["FETCH_INCIDENTS_DATA"])
  }
};
</script>

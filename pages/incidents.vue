<template>
  <div>
    <BrandTitle title="Incidents" />
    <v-data-table
      :headers="headers"
      :items="GET_INCIDENTS_DATA"
      :items-per-page="5"
      class="elevation-1"
    >
     
    </v-data-table>
  </div>
</template>

<script>
import { mapMutations, mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      headers: [
        {
          text: "Date",
          value: "date"
        },
        { text: "Incident Type", value: "incident" },
        { text: "Status", value: "status" },
        { text: "Video URL", value: "video" },
        { text: "Trip", value: "trip" },
        { text: "User", value: "user" }
      ],
     
    };
  },
  mounted() {

    this.FETCH_INCIDENTS_DATA();
  },
  computed: {
    ...mapGetters("module/incidents", ["GET_INCIDENTS_DATA"])
  },

  methods: {
    ...mapActions("module/incidents", ["FETCH_INCIDENTS_DATA"])
  }
};
</script>

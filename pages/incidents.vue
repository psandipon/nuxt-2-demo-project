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
          text: "Trip id",
          value: "tripid"
        },
        { text: "Create datetime", value: "createdatetime" },
        { text: "Email", value: "email" },
        { text: "End datetime", value: "enddatetime" },
        { text: "Real name", value: "realname" },
        { text: "Trip name", value: "tripname" },
        { text: "User name", value: "username" },
        
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

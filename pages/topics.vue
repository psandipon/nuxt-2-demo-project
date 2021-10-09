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
  data() {
    return {
      headers: [
        {
          text: "User Id",
          value: "id"
        },
        { text: "User Name", value: "name" },
        { text: "Total Trips", value: "total_trips" },
        { text: "Total Incidents", value: "total_incidents" }
      ],
   
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

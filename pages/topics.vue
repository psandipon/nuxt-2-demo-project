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

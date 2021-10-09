<template>
  <div>
    <BrandTitle title="Topics" />
    <v-data-table
      :headers="headers"
      :items="topics"
      :items-per-page="5"
      class="elevation-1"
    />
  </div>
</template>

<script>
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
      topics: [
        {
          id: "5",
          name: "Robin",
          total_trips: "11",
          total_incidents: "1"
        },
        {
          id: "9",
          name: "Mr Hood",
          total_trips: "7",
          total_incidents: "0"
        }
      ]
    };
  }
};
</script>

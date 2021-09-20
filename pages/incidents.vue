<template>
  <div>
    <BrandTitle title="Incidents" />
    <v-data-table
      :headers="headers"
      :items="incidents"
      :items-per-page="5"
      class="elevation-1"
    >
      <template v-slot:[`item.incident`]="{ item }">
        {{ item.incident.type }}
      </template>
      <template v-slot:[`item.video`]="{ item }">
        {{ item.video.url }}
      </template>
      <template v-slot:[`item.trip`]="{ item }">
        {{ item.trip.name }}
        <br />
        {{ item.trip.id }}
      </template>
      <template v-slot:[`item.user`]="{ item }">
        {{ item.user.name }}
      </template>
      <!-- <template v-slot:[`header.incident`]="{ header }">
        {{ header.text.toUpperCase() }}
      </template> -->
    </v-data-table>
  </div>
</template>

<script>
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
      incidents: [
        {
          date: "24-5-2020",
          incident: {
            title: "Something happend",
            type: "bad",
            id: "502"
          },
          status: "bad",
          video: {
            title: "https:www.youtube.com",
            id: "809",
            url: "https:www.youtube.com"
          },
          trip: {
            name: "journy by car",
            id: "502"
          },
          user: {
            name: "Robin"
          }
        },
        {
          date: "24-5-2020",
          incident: {
            title: "Something happend",
            type: "bad",
            id: "502"
          },
          status: "bad",
          video: {
            title: "https:www.youtube.com",
            id: "809",
            url: "https:www.youtube.com"
          },
          trip: {
            name: "journy by car",
            id: "502"
          },
          user: {
            name: "Robin"
          }
        }
      ]
    };
  }
};
</script>

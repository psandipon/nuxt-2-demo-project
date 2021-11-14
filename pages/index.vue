<template>
  <div class="ma-5">
    <v-row>
      <v-col cols="12" md="3" xs="12">
        <!-- <pre> {{ GET_TRIPS_LIVE_DATA }}</pre> -->
        <v-card
          height="250"
          class="d-flex justify-center align-center flex-column text-h5"
        >
          <span class="mb-10"> Current Trips </span>
          <p>Incidents - {{ GET_TRIPS_LIVE_DATA.liveeventscount }}</p>
          <p>Topics - {{ GET_TRIPS_LIVE_DATA.livetripscount }}</p>
        </v-card>
        <v-card
          class="d-flex justify-center align-end flex-column red--text overline elevation-0 transparent--text mt-n10 mr-5"
        >
          <b>LIVE</b>
        </v-card>
      </v-col>

      <v-col cols="12" md="9" xs="12">
        <v-row>
          <v-col
            cols="12"
            md="4"
            xs="12"
            v-for="(item, i) in dashBoardInfoArray"
            :key="i"
          >
            <DashboardInfocard
              :title="item.title"
              :number="GET_TRIPS_LIVE_DATA[item.numberOf]"
            />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <BrandTitle title="Incidents VS Time" />
        <v-card height="300" class="pa-5">
          <ChartsSpline v-if="charts" />
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <BrandTitle title="Topics VS Time" />
        <v-card height="300" class="pa-5">
          <ChartsSpline v-if="charts" />
        </v-card>
      </v-col>
    </v-row>
    <v-alert type="success" class="mt-5" dense outlined>
      For more chart demos, go to :
      <a href="https://apexcharts.com/vue-chart-demos/"
        >https://apexcharts.com/vue-chart-demos/</a
      >
    </v-alert>
  </div>
</template>

<script>
import { mapMutations, mapGetters, mapActions } from "vuex";
export default {
  middleware: ["authMiddleware"],
  data() {
    return {
      charts: false,
      series: [
        {
          name: "Net Profit",
          data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
        },
        {
          name: "Revenue",
          data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
        },
        {
          name: "Free Cash Flow",
          data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
        }
      ],
      chartOptions: {
        chart: {
          type: "bar",
          height: 250
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "55%",
            endingShape: "rounded"
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          width: 2,
          colors: ["transparent"]
        },
        xaxis: {
          categories: [
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct"
          ]
        },
        yaxis: {
          title: {
            text: "$ (thousands)"
          }
        },
        fill: {
          opacity: 1
        },
        tooltip: {
          y: {
            formatter: function(val) {
              return "$ " + val + " thousands";
            }
          }
        }
      },
      dashBoardInfoArray: [
        {
          title: "Incidents",
          numberOf: "totalincidents"
        },
        {
          title: "Trips",
          numberOf: "totaltrips"
        },
        {
          title: "Users",
          numberOf: "totalusers"
        },
        {
          title: "Tailgating",
          numberOf: "totaltailgating"
        },
        {
          title: "Distraction",
          numberOf: "totaldistraction"
        },
        {
          title: "Sleep",
          numberOf: "totalsleeping"
        }
      ]
    };
  },
  mounted() {
    this.charts = true;
    this.FETCH_TRIPS_LIVE_DATA();
  },
  computed: {
    ...mapGetters("module/topic", ["GET_TRIPS_LIVE_DATA"])
  },
  methods: {
    ...mapActions("module/topic", ["FETCH_TRIPS_LIVE_DATA"])
  }
};
</script>

<style>
th {
  font-weight: 900 !important;
  font-size: 16px !important;
  color: black !important;
  padding-top: 20px !important;
  padding-bottom: 20px !important;
}
</style>

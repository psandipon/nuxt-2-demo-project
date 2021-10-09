<template>
  <div class="ma-5">
    <v-row>
      <v-col cols="12" md="3" xs="12">
        <v-card
          height="250"
          class="d-flex justify-center align-center flex-column text-h4"
        >
          <span class="mb-10"> Current Trips </span>
          <p>Incidents - 25</p>
          <p>Topics - 25</p>
        </v-card>
        <v-card
          class="d-flex justify-center align-end flex-column red--text overline elevation-0 transparent--text mt-n10 mr-5"
        >
          <b>LIVE</b>
        </v-card>
      </v-col>
      <v-col cols="12" md="3" xs="12">
        <DashboardInfocard title="Incidents" number="25" />
        <DashboardInfocard title="Topic" number="7" class="mt-5" />
      </v-col>
      <v-col cols="12" md="3" xs="12">
        <DashboardInfocard title="Incidents" number="25" />
        <DashboardInfocard title="Topic" number="7" class="mt-5" />
      </v-col>
      <v-col cols="12" md="3" xs="12">
        <DashboardInfocard title="Incidents" number="25" />
        <DashboardInfocard title="Topic" number="7" class="mt-5" />
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
export default {
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
      }
    };
  },
  mounted() {
    this.charts = true;
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

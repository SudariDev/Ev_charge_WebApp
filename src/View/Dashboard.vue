<template>
  <v-container>
    <h2>Dashboard</h2>
    <v-row>

      <v-col
        cols="12"
        sm="6"
        lg="3"
      >
        <StatCardView
          color="info"
          icon="mdi-battery-charging"
          title="Charge"
          value="+245"
          sub-icon="mdi-clock"
          sub-text="Just Updated"
        />
      </v-col>
      
      <v-col
        cols="12"
        sm="6"
        lg="3"
      >
        <StatCardView
             color="primary"
             icon="mdi-history"
             title="History"
             value="75.521"
             sub-icon="mdi-tag"
             sub-text="Tracked from Google Analytics"
        />
      </v-col>

      <v-col
        cols="12"
        sm="6"
        lg="3"
      >
        <StatCardView
           color="success"
           icon="mdi-credit-card-outline"
           title="Top-up"
           value="$ 34,245"
           sub-icon="mdi-calendar"
           sub-text="Last 24 Hours"
        />
      </v-col>

      
      <v-col
        cols="12"
        sm="6"
        lg="3"
      >
         
        <StatCardView
          color="orange"
          icon="mdi-exit-to-app"
          title="Exit"
          value="184"
          sub-icon="mdi-alert"
          sub-icon-color="red"
          sub-text="Get More Space..."
        />
      </v-col>
    </v-row>

   <v-row>
        <v-col cols="12" sm="6">
          <v-card>
            <v-app-bar flat color="rgba(0,0,0,0)">
              <v-toolbar-title class="title black--text pl-0 ml-2">
                Impression 
              </v-toolbar-title>
              <v-spacer></v-spacer>
              <v-btn color="deep-purple" class="white--text mr-2">Weekly</v-btn>
              <v-btn color="deep-purple lighten-4" class="deep-purple--text ">Monthly</v-btn>
            </v-app-bar>
            <v-sparkline
            :fill="fill"
            :line-width="width"
            :padding="padding"
            :smooth="radius || false"
            :value="value"
            auto-draw
            color="deep-purple"></v-sparkline>
          </v-card>
        </v-col>

        
        <v-col cols="12" sm="6">
         <v-card
          class="mx-auto"
          max-width="600"
          title
  >
    <v-list-item>
      <v-list-item-content>
          <v-list-item-content class="title black--text pl-0 ml-2">Availability-Following Chargers are online now</v-list-item-content>
      </v-list-item-content>
    </v-list-item>

    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title>Awissawella</v-list-item-title>
        <v-list-item-title>Dambulla</v-list-item-title>
        <v-list-item-title>Anuradhapura</v-list-item-title>
        <v-list-item-title>Nuwaraeliya</v-list-item-title>
        <v-list-item-title>Kandy</v-list-item-title>
        <v-list-item-title>Pannipitiya</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-card>
        </v-col>



        <v-col cols="12" sm="6">
          <v-card height="180px">
            <v-row>
              <v-col cols="12" sm="4">
                <v-list-item three-line>
                  <v-list-item-content>
                    <v-list-item-subtitle class="grey--text">Average daily load curve in summer</v-list-item-subtitle>
                    <v-list-item-subtitle class="grey--text">as of 25 May 2022 9.41 am</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-col>
              <v-col cols="12" sm="8">
                <v-sparkline
                :value="value"
                :smooth="radius || false"
                :padding="padding"
                :line-width="width"
                :stroke-linecap="lineCap"
                :fill="fills"
                :type="type"
                :auto-line-width="autoLineWidth"
                auto-draw
                color="red"
                >

                </v-sparkline>
                <v-card-actions class="justify-end">
                  <v-btn text color="green">
                    <v-icon class="mt-n2 pr-2">fas fa-sort-down</v-icon> 8.5
                  </v-btn>
                </v-card-actions>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6">
          <v-card>
            <v-row>
              <v-col cols="12" sm="6" class="border">
                <v-list-item three-line>
                  <v-list-item-content>
                    <v-list-item-subtitle class="grey--text">EV charging load</v-list-item-subtitle>
                    <v-row>
                      <v-col cols="12" sm="6">
                        <v-progress-circular
                        rotate="360"
                        size="100"
                        width="15"
                        value="70"
                        color="teal"
                        >
                        70%
                        </v-progress-circular>
                      </v-col>
                      <v-col cols="12" sm="6">
                        <v-list-item-subtitle class="grey--text mt-8">150</v-list-item-subtitle>
                        <v-list-item-subtitle class="grey--text">250</v-list-item-subtitle>
                      </v-col>
                    </v-row>
                  </v-list-item-content>
                </v-list-item>
              </v-col>
              <v-sol cols="12" sm="6" align="center">
                <v-list-item two-line class="mt-10">
                  <v-list-item-content>
                     <v-list-item-title class="headline mb-1 black--text">
                    1500
                  </v-list-item-title>
                  <v-list-item-subtitle class="grey--text">CHARGER</v-list-item-subtitle>
                  </v-list-item-content>
                 
                </v-list-item>
              </v-sol>
            </v-row>
          </v-card>
        </v-col>
      </v-row>  


   
  </v-container>
</template>
<script>
import StatCardView from "../../src/assets/components/CardView/StatCard.vue";
const gradients = [
  ["#222"],
  ["#42b3f4"],
  ["red", "orange", "yellow"],
  ["purple", "violet"],
  ["#00c6ff", "#F0F", "#FF0"],
  ["#f72047", "#ffd200", "#1feaea"],
];
export default {
  data: () => ({
    color: "#00897",
    width: 2,
    radius: 10,
    padding: 8,
    lineCap: "round",
    gradient: gradients[5],
    value: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0],
    gradientDirection: "top",
    gradients,
    fill: false,
    type: "trend",
    autoLineWidth: false,
    selected: [2],
    
  }),
  components: {
    StatCardView,
  },
};
</script>


<style>
</style>
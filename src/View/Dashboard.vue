<template>
  <div>
    <b-container>
      <v-breadcrumbs :items="items" divider=">" small class="Black">
        <template v-slot:item="{ item }">
          <v-breadcrumbs-item
            v-if="item.disabled"
            :href="item.href"
            :disabled="item.unable"
            ><span class="font-weight-bold" style="color:black"
              ><h3>{{ item.text.toUpperCase() }}</h3></span
            >
          </v-breadcrumbs-item>
          <v-breadcrumbs-item
            v-if="item.active"
            :href="item.href"
            :disabled="item.unable"
            ><span class="font-weight-bold" style="color:#2DAF00"
              ><h3>{{ item.text.toUpperCase() }}</h3></span
            >
          </v-breadcrumbs-item>
        </template>
      </v-breadcrumbs>
    </b-container>
    <v-container>
      <div class="dashboard">
        <br />
        <v-row>
          <v-col lg="7" cols="12">
            <v-alert dense text type="success">
              Login Successfully! Welcome to <strong>Alison Burgas</strong>
            </v-alert>
            <v-row>
              <v-col
                lg="6"
                cols="12"
                v-for="(item, index) in activityLog"
                :key="index"
              >
                <v-card elevation="2" class="rounded-lg">
                  <v-card-text
                    class="d-flex justify-space-between align-center"
                  >
                    <div>
                      <strong>{{ item.title }}</strong> <br />
                      <span>Last 3 weeks</span>
                    </div>
                    <v-icon color="#2DAF00" size="50">{{ item.icon }}</v-icon>
                  </v-card-text>
                  <v-card-actions class="d-flex justify-space-between">
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" lg="5">
            <v-card>
              <v-card-title>Activities</v-card-title>
              <v-card-text class="py-0">
                <v-timeline align-top dense>
                  <v-timeline-item color="indigo" small>
                    <strong>Plug In</strong>
                    <div class="text-caption">
                      Connect to your charging part.
                    </div>
                  </v-timeline-item>
                  <v-timeline-item color="green" small>
                    <strong>Tap to Start Yoyr Charge</strong>
                    <div class="text-caption mb-2">
                      By EVgo app.RFID or credit Card.
                    </div>
                  </v-timeline-item>

                  <v-timeline-item color="indigo" small>
                    <strong>Charge Up and Go</strong>
                    <div class="text-caption">
                      Your next destination awaits.
                    </div>
                  </v-timeline-item>
                </v-timeline>
              </v-card-text>
            </v-card>
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
                <v-btn color="#2DAF00" class="white--text mr-2">Weekly</v-btn>
                <v-btn color="#2DAF00" class="white--text mr-2 ">Monthly</v-btn>
              </v-app-bar>
              <v-sparkline
                :fill="fill"
                :line-width="width"
                :padding="padding"
                :smooth="radius || false"
                :value="value"
                auto-draw
                color="#1B5E20"
              ></v-sparkline>
            </v-card>
          </v-col>

          <v-col cols="12" sm="6">
            <v-card class="mx-auto" max-width="600" title>
              <v-list-item>
                <v-list-item-content>
                  <v-card-title style="color: success"
                    ><h4>
                      Available-Following Charging are online now
                    </h4></v-card-title
                  >
                </v-list-item-content>
              </v-list-item>

              <v-list-item three-line>
                <v-list-item-content>
                  <ul>
                    <li>Awissawella</li>
                    <li>Dambulla</li>
                    <li>Anuradhapura</li>
                    <li>Nuwaraeliya</li>
                    <li>Kandy</li>
                    <li>Pannipitiya</li>
                  </ul>
                </v-list-item-content>
              </v-list-item>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<script>
const gradients = [
  ["#222"],
  ["#42b3f4"],
  ["red", "orange", "yellow"],
  ["purple", "violet"],
  ["#00c6ff", "#F0F", "#FF0"],
  ["#f72047", "#ffd200", "#1feaea"],
];

export default {
  name: "Dashboard",
  data: () => {
    return {
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

      activityLog: [
        {
          title: "Charge",
          icon: "mdi-battery-charging",
          color: "cyan lighten-3",
        },
        { title: "History", icon: "mdi-history", color: "green darken-2" },
        {
          title: "Top-up",
          icon: "mdi-credit-card-outline",
          color: "blue-grey darken-1",
        },
        {
          title: "Exit",
          icon: "mdi-exit-to-app",
          color: "deep-orange darken-1",
        },
      ],
      items: [
        {
          text: "Home",
          disabled: true,
          href: "b",
        },
        {
          text: "Dashboard",
          active: true,
          href: "",
        },
      ],
    };
  },
};
</script>

<style scoped>
.overlap-icon {
  position: absolute;
  top: -33px;
  text-align: center;
  padding-top: 12px;
}
</style>

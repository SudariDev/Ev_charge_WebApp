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

    <v-container fluid class="grey lighten-5">
      <v-container>
        <h3>Advance Charge</h3>
      </v-container>
      <v-container>
        <v-container>
          <v-card :elevation="1">
            <v-row>
              <v-col>
                <v-card></v-card>
                <v-card flat class="rounded-0 mx-auto" max-width="250">
                  <v-img
                    class=""
                    v-bind:src="require('../assets/imges/charging_stop.png')"
                  ></v-img>
                </v-card> </v-col
              ><v-col>
                <v-card :elevation="0" flat max-width="">
                  <div class="d-flex">
                    <h3>Battery</h3>
                    <v-spacer></v-spacer>
                    <v-icon>mdi-battery-charging-40</v-icon>
                  </div>
                  <hr />
                  <v-card-text class="flex-row">
                    <v-row>
                      <v-col
                        ><h4 class="indigo--text text--darken-2">
                          charging...
                        </h4></v-col
                      >
                    </v-row>
                  </v-card-text>
                  <v-card-title><h1>52%</h1></v-card-title>

                  <v-card-text class="flex-row">
                    <v-row>
                      <v-col><h4>Estimate Time to Full Charge::</h4></v-col>
                      <v-col><h4>45min</h4></v-col>
                    </v-row>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-card>
        </v-container>
      </v-container>
      <v-container class="d-flex justify-center mb-6">
        <div class="d-flex justify-center mb-6">
          <v-btn color="error" dark large>
            STOP CHARGING
          </v-btn>
        </div>
      </v-container>
    </v-container>
  </div>
</template>
<script>
export default {
  data: () => ({
    items: [
      {
        text: "Home",
        disabled: true,
        href: "b",
      },
      {
        text: "charge",
        active: true,
        href: "",
      },
    ],
    x: 0,
  }),
};
</script>

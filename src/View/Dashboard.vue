<template>
  
      <v-container>
         <v-row>
       
          <v-col :align="center"  no-gutters >
              <v-card class="cd1" >
                    <v-container class="d-flex flex-row">                      
                         <v-row>
                          <v-col>
                           <v-card flat class="rounded-0 mx-auto" max-width="130" :elevation="1">
                            <v-img 
                             class="#FFFFFF" v-bind:src="require('../assets/imges/battery-charge.png')" ></v-img>
                            <v-card-actions><span>Charge</span> </v-card-actions>      
                          </v-card></v-col>          
                          <v-col>
                           <v-card flat class="rounded-0 mx-auto" max-width="130" :elevation="1">
                            <v-img 
                             class="#FFFFFF" v-bind:src="require('../assets/imges/top-up-wallet.png')" ></v-img>
                            <v-card-actions><span>Top-up</span> </v-card-actions>      
                          </v-card></v-col></v-row>
                         
                         <v-row><v-col>
                         <v-card flat class="rounded-0 mx-auto" max-width="130" :elevation="1">
                            <v-img 
                             class="#FFFFFF" v-bind:src="require('../assets/imges/history.png')" ></v-img>
                            <v-card-actions><span>History</span> </v-card-actions>      
                          </v-card></v-col>
                          <v-col>
                         <v-card flat class="rounded-0 mx-auto" max-width="130" :elevation="1">
                            <v-img 
                             class="#FFFFFF" v-bind:src="require('../assets/imges/exit.png')" ></v-img>
                            <v-card-actions><span>Exit</span> </v-card-actions>      
                          </v-card></v-col>
                          
                          </v-row>
                        

                         
                    </v-container>
                            
                 
              </v-card>    
            </v-col >




          <v-col cols="12" md="4">
          <v-date-picker
        v-model="picker"
        elevation="15"
        color="orange"
         full-width
      :landscape="$vuetify.breakpoint.smAndUp"
      no-title="true"
      class="mt-3"
      ></v-date-picker>
          </v-col>

          <v-space></v-space>
           <v-col cols="12" md="4">
          
                  <h1 class="headline  grey--text">Total Tarif </h1>
                   <v-progress-circular
                  :value="76"
                  color="pink lighten-2"
                  size="200"
                  width="20"
                  

                >76%</v-progress-circular>
              <h1 class="headline pl-5">Rs67127.26 </h1>
              <h6 class=" grey--text pl-5">with 25 days </h6>
          </v-col>
         </v-row>

             <v-col cols="12" md="8">
          
                  <h1 class="headline  grey--text">The Company growth in two half years </h1>
                  <v-container fluid>
                      <v-sparkline
                        :value="value"
                        :gradient="gradient"
                        :smooth="radius || false"
                        :padding="padding"
                        :line-width="lineWidth"
                        :stroke-linecap="lineCap"
                        :gradient-direction="gradientDirection"
                        :fill="fill"
                        :type="type"
                        :auto-line-width="autoLineWidth"
                        auto-draw
                        :show-labels="showLabels"
                        :label-size="labelSize"
                      ></v-sparkline>
                  </v-container>
          </v-col>
        
      </v-container>
</template>

<script>

 const gradients = [
    ['#222'],
    ['#42b3f4'],
    ['red', 'orange', 'yellow'],
    ['purple', 'violet'],
    ['#00c6ff', '#F0F', '#FF0'],
    ['#f72047', '#ffd200', '#1feaea'],
  ]
export default {
    data () {
      return {
        picker: new Date().toISOString().substr(0, 10),
         chartData: [
       ["ID", "X", "Y", "In Million"],
        ["", 80, 167, 120],
        ["", 79, 136, 130],
        ["", 78, 184, 50],
        ["", 72, 278, 230],
        ["", 81, 200, 210],
        ["", 72, 170, 100],
        ["", 68, 477, 80]
      ],
      
      showLabels: false,
      lineWidth: 2,
      labelSize: 7,
      radius: 10,
      padding: 8,
      lineCap: 'round',
      gradient: gradients[5],
      value: [0, 2, 5, 9, 5, 10, 3, 5, -4, -10, 1, 8, 2, 9, 0],
      gradientDirection: 'top',
      gradients,
      fill: false,
      type: 'trend',
      autoLineWidth: false,
      }
    },
  
  }
</script>
<style scoped>
.v-progress-circular {
  margin: 1rem;
}
</style>
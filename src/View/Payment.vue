<template>
  <v-container>
     <div class="mb-3 sub-header-basic">
        </div>
      <v-container>
        <v-row>
          <v-col cols="12" sm="6">
                <v-card
                :loading="loading"
                class="mx-auto my-6"
                max-width="500"
                >
           <template slot="progress">
   
       </template>

      <v-card-title  style="color:blue">Payment Details</v-card-title>

      <v-divider class="mx-4"></v-divider>


     <v-card-text>
      <v-container fluid>
        <v-row>
          <v-col
            cols="12"
            sm="6"
            md="6"
          >
           <v-radio-group
              v-model="ex7"
              column
            >
          <v-radio
                label="Visa"
                color="red"
                value="red"
              ></v-radio>
            
           </v-radio-group>
          </v-col>
           <v-col
            cols="12"
            sm="6"
            md="6"
          >
            <v-radio-group
              v-model="ex8"
              column
            >
              <v-radio
                label="Master Card"
                color="primary"
                value="primary"
              ></v-radio>
            </v-radio-group>
           </v-col>

        <v-col
          cols="12"
        >
          <v-text-field
            label="Card Number*"
            outlined
            dense
            :rules="cardno_rule"
            >
            </v-text-field>
        </v-col>

            <v-col
            cols="12"
            sm="6"
        >
            <v-select
              :items="month"
              label="Expiration Month*"
              dense
              outlined
              :rules="month_rule"
            ></v-select>
        </v-col>

        <v-col
          cols="12"
          sm="6"
        >
        <v-select
              :items="year"
              label="Expiration Year*"
              dense
              outlined
              :rules="year_rule"
            ></v-select>
        </v-col>

        <v-card-subtitle style="color:blue">This code is a three or four digit number printed on the back or front of credit cards</v-card-subtitle>

        
        <v-col
          cols="12"
        >
          <v-text-field
            label="CVN*"
            outlined
            dense
            :rules="cvn_rule"
            >
            </v-text-field>
        </v-col>

          

        </v-row>
      </v-container>
     </v-card-text>

   
    <v-card-actions>
      <v-btn class="rounded-0" color="success" x-large block dark >NEXT</v-btn>
    </v-card-actions>
         </v-card>
         </v-col>

            <v-col cols="12" sm="6">
                <v-card
                :loading="loading"
                class="mx-auto my-6"
                max-width="480"
                >
           <template slot="progress">
   
       </template>

     <v-card-text>
      <v-container fluid>
        <v-row>
        <v-col
         cols="12">
          <v-text-field
            label="Amount(Rs.)*"
            outlined
            dense
            :rules="amount_rule"
            >
            </v-text-field>

         <v-card-title style="color:blue">Payment Summary</v-card-title>

         <v-divider class="mx-4"></v-divider>

         <v-card-text class="flex-row">
                <v-row>
                  <v-col>  <p class="font-italic">Item</p></v-col>
                  <v-col>  <p class="font-italic">Amount (Rs.)</p></v-col>
                  </v-row>
                  </v-card-text>

           <v-card-text class="flex-row">
                  <v-row>
                  <v-col><h4>ChargeNET Reload:</h4></v-col>
                  <v-col><h4>0</h4></v-col>
                  </v-row>
                  </v-card-text>
                
            <v-card-text class="flex-row">
                  <v-row>
                  <v-col><h4>Convenience Fee-3%</h4></v-col>
                  <v-col><h4>0</h4></v-col>
                  </v-row>
                  </v-card-text>

            <v-card-text class="flex-row">
                    <v-row>
                    <v-col><h4>Total:</h4></v-col>
                    <v-col><h4>0</h4></v-col>
                    </v-row>
                    </v-card-text>
                      
            
        </v-col>
        </v-row>
      </v-container>
     </v-card-text>

   
        <v-card-actions>
            <v-row justify="center" align="center">
              <v-col align="center">
              <v-btn class="rounded-0" color="success" dark>
              PROCEED TO PAYMENT
              </v-btn>
              <br>
            </v-col>
          </v-row>
         </v-card-actions>
         </v-card>
         </v-col>

        </v-row>



      </v-container>
  </v-container>

  </template>
  
 <script>
  export default{
   data(){
    return {
     cardno_rule: [
        (v) => !!v || "Card Number is Required",
      ],

      month: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "Septembe",
        "October",
        "November",
        "December",
      ],

      month_rule: [(v) => !!v || "month is Required"],

      year:  [
        "2013",
        "2014",
        "2013",
        "2014",
        "2015",
        "2016",
        "2017",
        "2018",
        "2019",
        "2020",
        "2021",
        "2022",
      ],

      year_rule: [(v) => !!v || "year is Required"],

      cvn_rule: [(v) => !!v || "CVN is Required"],

      amount_rule: [(v) => !!v || "Amount is Required"],

    }
   }
}
</script>
  


  
  
<template>
  <v-container
    id="user-profile"
    fluid
    tag="section"
  >
    <v-row justify="center">
      <v-col
        cols="12"
        md="8"
      >
        
<v-container>
     <v-row class="align" no-gutters>
         <v-col :align="align" no-gutters >
            <v-card class="justify-xl-center cd1">
              <v-form>
            <v-container class="py-0">
                    <v-row>
                     <v-col
                     cols="12"
                     md="6"
                    >
                 
                  <v-text-field
                    class="purple-input"
                    outlined
                    dense
                    label="First Name"
                    :rules="username_rule"
                  />
                </v-col>

                <v-col
                  cols="12"
                  md="4"
                >
                  <v-text-field
                    label="Last name"
                    outlined
                    dense
                    class="purple-input"
                    :rules="usernamelast_rule"
                  />
                </v-col>

                <v-col
                  cols="12"
                  md="4"
                >
                  <v-text-field
                    label="NIC"
                    outlined
                    dense
                    class="purple-input"
                    :rules="nic_rules"
                  />
                </v-col>

                <v-col
                  cols="12"
                  md="6"
                >
                  <v-text-field
                    label="Email"
                    outlined
                    dense
                    class="purple-input"
                    :rules="email_rules"
                  />
                </v-col>

                <v-col cols="12">
                  <v-text-field
                    label="Address"
                    outlined
                    dense
                    class="purple-input"
                    :rules="phonenum_rules"
                  />
                </v-col>

                <v-col
                  cols="12"
                  md="4"
                >
                  <v-text-field
                    label="Mobile No"
                    type="number"
                    outlined
                    dense
                    class="purple-input"
                    :rules="address_rule"
                  />
                </v-col>

                <v-col
                  cols="12"
                  md="4"
                >
                  <v-text-field
                    class="purple-input"
                    outlined
                    dense
                    label="Password"
                    type="password"
                    :rules=" password_rule"
                  />
                </v-col>

                <v-col cols="12">
                  <v-textarea
                    class="purple-input"
                    outlined
                    dense
                    label="About Me"
                    :rules=" about_rule"
                   
                  />
                </v-col>

                <v-col
                  cols="12"
                  class="text-right"
                >
                  <v-btn
                    color="success"
                    class="mr-0"
                  >
                    Update Profile
                  </v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
          </v-card>
         </v-col>
         
     </v-row>
</v-container>
       
      </v-col>


      
 
      <v-col
        cols="12"
        md="4"
      >
        <v-card>  
          <v-container>
        <v-card flat class="rounded-0 mx-auto" max-width="100" :elevation="1">
              <v-img class="#FFFFFF" v-bind:src="require('../assets/imges/user.png')" ></v-img>   
                </v-card>
          
       <v-card-text align="center"><h4 class="display-2 font-weight-light mb-3 black--text">Alison Burgas</h4></v-card-text>
       <v-card-text align="center"><h3 class="Black">967822406V</h3></v-card-text>
       <v-card-text align="center"><h3 class="">0717832129</h3></v-card-text>
       <v-card-text align="center"><h3 class="">Account Number: 84113556</h3></v-card-text>      
        
             <v-spacer></v-spacer>
              <div class="green accent-10 text-center">
              <span class="white--text"> <h3>Balance Rs : {{ x }}</h3></span>
              </div>
           
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    data(){
      return{
        username_rule: [
        (v) => !!v || "User Name is Required",
        (v) => (v && v.length > 6) || "Invalid User name",
      ],
      usernamelast_rule: [
        (v) => !!v || "User Name is Required",
        (v) => (v && v.length > 6) || "Invalid User name",
      ],
       nic_rules: [
        (v) => !!v || "NIC is Required",
        (v) => (v && v.length < 11) || "Invalid NIC",
      ],
       email_rules: [
        (v) => !!v || "Email is Required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
       phonenum_rules: [
        (v) => !!v || "Phone Number is Required",
        (v) => (v && v.length < 11) || "Invalid phone number",
      ],
      address_rule: [(v) => !!v || "Address is Required"],
       password_rule: [
        (v) => !!v || "Password is Required",
        (v) => (v && v.length < 11) || "Invalid Password",
      ],

       about_rule: [(v) => !!v || "About is Required"]


      
      }
    }
  }
</script>

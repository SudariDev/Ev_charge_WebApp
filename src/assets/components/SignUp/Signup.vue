<template>
  <v-container class="">
    <v-row align="center" justify="center" dense>
      <v-col cols="12" sm="10" lg="10">
        <v-card class="elevation-12 mx-auto my-12" max-width="550">

               <v-card-actions>
            <v-row justify="center" align="center">
              <v-col align="center">
                 <v-img
                max-width="300"
                max-height="300"
                src="../../imges/EvchargeB.png"
                class="grey darken-4"
              ></v-img>
              </v-col>
            </v-row>
          </v-card-actions>

          <v-card-text>
            <v-container fluid>
              <v-row>
                <v-col cols="12" sm="6">
                  <v-text-field
                    class="purple-input"
                    prepend-inner-icon="mdi-account"
                    type="text"
                    outlined
                    dense
                    label="First Name"
                    :rules="usernameFirst_rule"
                  />
                </v-col>

                <v-col cols="12" sm="6">
                  <v-text-field
                    class="purple-input"
                    prepend-inner-icon="mdi-account"
                    type="text"
                    outlined
                    dense
                    label="Last name"
                    :rules="usernamelast_rule"
                  />
                </v-col>

                <v-col cols="12">
                  <v-text-field
                    class="purple-input"
                    prepend-inner-icon="mdi-email"
                    type="email"
                    outlined
                    dense
                    label="Email"
                    :rules="email_rule"
                  />
                </v-col>

                <v-col cols="12" sm="6">
                  <v-text-field
                    class="purple-input"
                    prepend-inner-icon="mdi-cellphone"
                    type="text"
                    outlined
                    dense
                    label="Mobile Number"
                    :rules="mobile_rule"
                  />
                </v-col>

                <v-col cols="12" sm="6">
                  <v-text-field
                    class="purple-input"
                    prepend-inner-icon="mdi-map-marker"
                    type="text"
                    outlined
                    dense
                    label="Address"
                    :rules="address_rule"
                  />
                </v-col>

                <v-col cols="12">
                  <v-text-field
                    class="purple-input"
                    prepend-inner-icon="mdi-lock"
                    type="password"
                    outlined
                    dense
                    label="Password"
                    :rules="password_rule"
                  />
                </v-col>

                <v-card-actions class="ml-6 mr-6 text-center">
                  <v-checkbox
                    color="#000000"
                    label="I agree to the Privacy Policy and Terms of Service."
                  ></v-checkbox>
                </v-card-actions>
              </v-row>
            </v-container>
          </v-card-text>

          <v-card-actions>
            <v-row justify="center" align="center">
              <v-col align="center">
                <v-btn class="rounded-0" color="success" dark to="/Login">
                  REGISTER
                </v-btn>
                <br />
              </v-col>
            </v-row>
          </v-card-actions>

          <v-card-actions>
            <v-row justify="center" align="center">
              <v-col align="center">
                <v-card-text
                  >Already have an account?
                  <a href="#" class="pl-2" style="color: success">Sign In</a>
                </v-card-text>
              </v-col>
            </v-row>
          </v-card-actions>
          <br />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

 
<script>
  export default {
    data(){
      return{
        usernameFirst_rule: [
        (v) => !!v || "First Name is Required",
        (v) => (v && v.length > 6) || "Invalid User name",
      ],
       usernamelast_rule: [
        (v) => !!v || "Last Name is Required",
        (v) => (v && v.length > 6) || "Invalid User name",
      ],
       email_rule: [
        (v) => !!v || "Email is Required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
       mobile_rule: [
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

  



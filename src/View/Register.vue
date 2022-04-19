<template>
      <v-container >
        <v-row align="center" justify="center" dense>
          <v-col cols="12" sm="8" md="4" lg="4">
            <v-card elevation="12" max-width="500">
             
              <v-card-text>
                <v-form>
                  <v-text-field label="Enter your First Name" name="fname" prepend-inner-icon="mdi-account" type="text" class="rounded-0" outlined></v-text-field>
                  <!-- <v-text-field label="Enter your Last Name" name="lname" prepend-inner-icon="mdi-account" type="text" class="rounded-0" outlined></v-text-field> -->
                  <v-text-field label="Enter your Email" name="email" prepend-inner-icon="mdi-email" type="email" class="rounded-0" outlined></v-text-field>
                  <v-text-field label="Enter your Mobile Number" name="mobile number" prepend-inner-icon="mdi-cellphone" type="text" class="rounded-0" outlined></v-text-field>
                  <v-text-field label="Enter your Address" name="address" prepend-inner-icon="mdi-map-marker" type="text" class="rounded-0" outlined></v-text-field>
                  <v-text-field label="Enter your password" name="password" prepend-inner-icon="mdi-lock" type="password" class="rounded-0" outlined></v-text-field>
                  <!-- <v-text-field label="Re-enter password" name="password" prepend-inner-icon="mdi-lock-outline" type="password" class="rounded-0" outlined></v-text-field> -->
                  <v-btn class="rounded-0" color="#EF6C00" x-large block dark>Register</v-btn>
                  
                  <v-card-actions class="text--secondary">
                    <v-spacer></v-spacer>
                    <!-- <router-link :to="{ name: 'SignUp' }">Sign Up</router-link> -->
                    Already have an account? <a href="#" class="pl-2" style="color: #000000">Sign In</a>
                  </v-card-actions>
                </v-form>
              </v-card-text>
              <v-card-actions class="ml-6 mr-6 text-center">
                <p>By continuing, you agree to Ceylon Electricity Board <a href="#" class="pl-2" style="color: #000000">Policy</a> and <a href="#" class="pl-2" style="color: #000000">Terms of Use</a></p>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
 
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
</style>
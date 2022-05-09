<template>
   
         <v-container class="" >
            <v-row align="center" justify="center" dense>
               <v-col cols="12" sm="10" lg="10">
                  <v-card class="elevation-12 mx-auto my-12"  max-width="450">
                     <a href="https://edu-fedorae.netlify.app" name="Fedorae Education" title="Fedorae Education" target="_blank">
                         <v-img src="@/assets/logo.png" alt="Fedorae Education Log" contain height="150"></v-img>
                       </a>
                     <v-card-text>
                           <v-form>
                              <v-text-field label="Enter your email" name="email" prepend-inner-icon="mdi-email" type="email" class="rounded-0" outlined></v-text-field>
                              <v-text-field label="Enter your password" name="password" prepend-inner-icon="mdi-lock" type="password" suffix="| Forgot?" class="rounded-0" outlined></v-text-field>
                              <!-- <v-btn class="rounded-0" color="#EF6C00" x-large block dark>Login</v-btn> -->
                              <v-btn class="rounded-0" color="#EF6C00" x-large block dark to='/Dashboard'>Login</v-btn>
                              <v-card-actions class="text--secondary">
                                 <v-checkbox color="#000000" label="Remember me"></v-checkbox>
                                 <v-spacer></v-spacer>
                                 <!-- <router-link :to="{ name: 'SignUp' }">Sign Up</router-link> -->
                                 No account? <a href="#" class="pl-2" style="color: #EF6C00">Sign Up</a>
                                </v-card-actions>
                           </v-form>
                     </v-card-text>
                     <v-card-actions class="ml-6 mr-6 text-center">
                     <p>By continuing, you agree to Ceylon Electricity Board<a href="#" class="pl-2" style="color: #000000">Policy</a> and <a href="#" class="pl-2" style="color: #000000">Terms of Use</a></p>
                     </v-card-actions>
                  </v-card>
                  </v-col>
                  </v-row>
         </v-container>
    
</template>

<script>
export default{
   name:'Login'
}
</script>

<style lang="css" scoped>
</style>
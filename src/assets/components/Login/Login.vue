<template>
  <v-container class="">
    <v-row align="center" justify="center" dense>
      <v-col cols="12" sm="10" lg="10">
        <v-card class="elevation-12 mx-auto my-12" max-width="480">
          <v-card-actions>
            <v-row justify="center" align="center">
              <v-col align="center">
                 <v-img
                max-width="300"
                max-height="300"
                src="../../imges/EvchargeB.png"
                class="grey darken-4"
              ></v-img>
                <v-card-subtitle>
                  <h1>Login!</h1>
                </v-card-subtitle>
              </v-col>
            </v-row>
          </v-card-actions>
          <v-card-text>
            <v-form>
              <v-text-field
                label="Enter your email"
                name="email"
                prepend-inner-icon="mdi-email"
                type="email"
                class="rounded-0"
                outlined
                :rules="email_rule"
              ></v-text-field>

              <v-text-field
                label="Enter your password"
                name="password"
                prepend-inner-icon="mdi-lock"
                type="password"
                suffix="| Forgot?"
                class="rounded-0"
                outlined
                :rules="password_rule"
              ></v-text-field>
              <!-- <v-btn class="rounded-0" color="#EF6C00" x-large block dark>Login</v-btn> -->
              <v-btn
                class="rounded-0"
                color="success"
                x-large
                block
                dark
                to="/Dashboard"
                >Login</v-btn
              >
              <v-card-actions class="text--secondary">
                <v-checkbox color="#000000" label="Remember me"></v-checkbox>
                <v-spacer></v-spacer>
                <!-- <router-link :to="{ name: 'SignUp' }">Sign Up</router-link> -->
                No account?
                <a href="#" class="pl-2" style="color: #2DAF00">Sign Up</a>
              </v-card-actions>
            </v-form>
          </v-card-text>
          <v-card-actions class="ml-6 mr-6 text-center">
            <p>
              By continuing, you agree to Ceylon Electricity Board<a
                href="#"
                class="pl-2"
                style="color: #000000"
                >Policy</a
              >
              and
              <a href="#" class="pl-2" style="color: #000000">Terms of Use</a>
            </p>
          </v-card-actions>

          <v-card-actions>
            <v-row justify="center" align="center">
              <v-col align="center">
                <v-btn rounded color="#020F6E" dark to="/">
                  Back to Home
                </v-btn>
                <br />
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
  data() {
    return {
      email_rule: [
        (v) => !!v || "Email is Required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
      password_rule: [
        (v) => !!v || "Password is Required",
        (v) => (v && v.length < 11) || "Invalid Password",
      ],
    };
  },
};
</script>

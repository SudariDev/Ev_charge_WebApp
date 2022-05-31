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
      <div class="mb-3 sub-header-basic"></div>
      <v-container>
        <v-row>
          <v-col cols="12" sm="6">
            <v-card :loading="loading" class="mx-auto my-6" max-width="600">
              <template slot="progress"> </template>
              <v-card-title style="color:black">Edit Profile</v-card-title>

              <v-divider class="mx-4"></v-divider>

              <v-card-text>
                <v-container fluid>
                  <v-row>
                    <v-col cols="12" sm="6">
                      <v-text-field
                        class="purple-input"
                        prepend-inner-icon="mdi-account"
                        outlined
                        dense
                        label="First Name"
                        :rules="firstname_rule"
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6">
                      <v-text-field
                        class="purple-input"
                        prepend-inner-icon="mdi-account"
                        outlined
                        dense
                        label="Last Name"
                        :rules="lastname_rule"
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6">
                      <v-text-field
                        class="purple-input"
                        prepend-inner-icon="mdi-account-outline"
                        outlined
                        dense
                        label="NIC"
                        :rules="nic_rule"
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6">
                      <v-text-field
                        class="purple-input"
                        prepend-inner-icon="mdi-email"
                        outlined
                        dense
                        label="Email"
                        :rules="lastname_rule"
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12">
                      <v-text-field
                        class="purple-input"
                        prepend-inner-icon="mdi-map-marker"
                        outlined
                        dense
                        label="Address"
                        :rules="address_rule"
                      ></v-text-field>
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
                        prepend-inner-icon="mdi-lock"
                        type="password"
                        outlined
                        dense
                        label="Password"
                        :rules="password_rule"
                      />
                    </v-col>

                    <v-col cols="12" class="text-right">
                      <v-btn color="success" class="mr-0">
                        Update Profile
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
            </v-card>
          </v-col>

          <v-col cols="12" sm="6">
            <v-card :loading="loading" class="mx-auto my-6" max-width="500">
              <template slot="progress"> </template>
              <v-container fluid>
                <v-img height="175px" src="../assets/imges/Profile_service.jpg">
                  <v-app-bar flat color="rgba(0, 0, 0, 0)">
                    <v-btn color="white" icon>
                      <v-icon>mdi-dots-vertical</v-icon>
                    </v-btn>
                  </v-app-bar>

                  <v-card-title class="white--text mt-8">
                    <v-avatar size="56">
                      <img
                        alt="user"
                        src="https://randomuser.me/api/portraits/women/81.jpg"
                      />
                    </v-avatar>
                  </v-card-title>
                </v-img>
                <br />

                <v-card-text align="center"
                  ><h2 class="Black">Jane Smith</h2></v-card-text
                >

                <v-card-text align="center"
                  ><h3 class="Black">967822406V</h3></v-card-text
                >
                <v-card-text align="center"
                  ><h3 class="">0717832129</h3></v-card-text
                >
                <v-card-text align="center"
                  ><h3 class="">Account Number: 84113556</h3></v-card-text
                >

                <v-card-actions>
                  <v-row justify="center" align="center">
                    <v-col align="center">
                      <v-btn rounded color="success" dark to="/">
                        FOLLOW
                      </v-btn>
                      <br />
                    </v-col>
                  </v-row>
                </v-card-actions>
              </v-container>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstname_rule: [
        (v) => !!v || "First Name is Required",
        (v) => (v && v.length > 6) || "Invalid User name",
      ],

      lastname_rule: [
        (v) => !!v || "Last Name is Required",
        (v) => (v && v.length > 6) || "Invalid User name",
      ],

      nic_rule: [
        (v) => !!v || "NIC is Required",
        (v) => (v && v.length > 9) || "Invalid NIC",
      ],

      address_rule: [(v) => !!v || "Address is Required"],

      email_rule: [
        (v) => !!v || "Email is Required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
      mobile_rule: [
        (v) => !!v || "Phone Number is Required",
        (v) => (v && v.length < 11) || "Invalid phone number",
      ],

      password_rule: [
        (v) => !!v || "Password is Required",
        (v) => (v && v.length < 11) || "Invalid Password",
      ],

      items: [
        {
          text: "Home",
          disabled: true,
          href: "b",
        },
        {
          text: "Profile",
          active: true,
          href: "",
        },
      ],
    };
  },
};
</script>

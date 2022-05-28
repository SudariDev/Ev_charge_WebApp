<template>
  <v-app id="inspire">
    <v-app-bar app color="white" elevation="1">
      <v-avatar class="mb-4" color="#4caf50" size="48" outlined elevation="1">
        <v-img
          aspect-ratio="60"
          src="../assets/imges/dashBord_img/initial-letter-ev-modern-linked-260nw-444023206.webp"
        />
      </v-avatar>

      <v-container>
        <h3 style="color: #3DD807">EV Charge</h3>
      </v-container>

      <v-tabs centered class="ml-n9" color="grey darken-1">
        <v-tab v-for="link in links" :key="link">
          {{ link }}
        </v-tab>
      </v-tabs>
    </v-app-bar>

    <v-main class="">
      <v-container fluid>
        <v-card max-width="auto" elevation="0">
          <v-row>
            <v-colum cols="6">
              <v-card elevation="0">
                <v-container>
                  <v-card-title style="color: #2DAF00"
                    ><h1>E-V Charge</h1></v-card-title
                  >
                  <v-card-subtitle
                    ><h2 class="#388E3C">Sri Lanka</h2></v-card-subtitle
                  >
                  <v-card-title
                    ><h1>Let's change to friendly energy</h1>
                  </v-card-title>
                  <v-card-text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    <br />
                    <p>elit tellus, luctus nec ullamcorper</p>
                  </v-card-text>
                  <v-card-actions>
                    <v-row>
                      <v-col cols="3"> </v-col>
                      <v-col cols="3">
                        <v-btn normal color="success" style="color: white" to="/login">LogIn</v-btn>
                      </v-col>
                      <v-col cols="3">
                        <v-btn normal color="success" style="color: white" to="/register">SignUp</v-btn>
                      </v-col>
                      <v-col cols="3"> </v-col>
                    </v-row>
                  </v-card-actions> </v-container
              ></v-card>
            </v-colum>
            <v-colum cols="6">
              <v-row justify="center" align="center">
                <v-col align="center">
                  <v-img
                    max-width="700"
                    max-height="300"
                    src="../assets/imges/homeImg1.jpg"
                    class="grey darken-4"
                  ></v-img>
                </v-col>
              </v-row>
            </v-colum>
          </v-row>
        </v-card>
        <v-spacer></v-spacer><br />

        <v-container class="d-flex justify-end">
          <v-card class="d-flex justify-end" flat tile>
            <v-spacer></v-spacer>
            <v-card
              elevation="2"
              outlined
              shaped
              class="mx-auto my-12"
              max-width="200"
              color="#2DAF00"
            >
              <v-card-title
                ><v-span style="color: white">Car service</v-span></v-card-title
              >
              <v-card-subtitle
                ><v-span style="color: white"
                  >tLorem ipsum dolor sit amet, consectetur adipiscing
                  eli.</v-span
                ></v-card-subtitle
              >
            </v-card>
            <v-card
              elevation="5"
              outlined
              shaped
              class="mx-auto my-12"
              max-width="200"
              color="#2DAF00"
            >
              <v-card-title
                ><v-span style="color: white">Charging Station</v-span></v-card-title
              >
              <v-card-subtitle
                ><v-span style="color: white"
                  >tLorem ipsum dolor sit amet, consectetur adipiscing
                  eli.</v-span
                ></v-card-subtitle
              >
            </v-card>
            <v-card
              elevation="2"
              outlined
              shaped
              class="mx-auto my-12"
              max-width="200"
              color="#2DAF00"
            >
              <v-card-title
                ><v-span style="color: white">Batery maintenance</v-span></v-card-title
              >
              <v-card-subtitle
                ><v-span style="color: white"
                  >tLorem ipsum dolor sit amet, consectetur adipiscing
                  eli.</v-span
                ></v-card-subtitle
              > </v-card
            ><v-spacer></v-spacer>
          </v-card>
        </v-container>

        <v-spacer></v-spacer><br /><v-spacer></v-spacer><br />

        <v-container fluid>
          <v-card max-width="auto" elevation="0">
            <v-row>
              <v-col cols="6">
                <v-card elevation="2" outlined shaped>
                  <v-row justify="center" align="center">
                    <v-col align="center">
                      <v-img
                        max-width="700"
                        max-height="300"
                        src="../assets/imges/Networked_EV_charging_Main_0.png"
                        class="grey darken-4"
                      ></v-img>
                    </v-col>
                  </v-row>
                </v-card>
              </v-col>
              <v-col cols="6">
                <v-card elevation="0">
                  <card-subtitle>
                    <h1>Traveling without demanding our planet</h1>
                  

                  </card-subtitle>
                  <v-card-subtitle
                    ><h2 style="color:#2DAF00 ">We are the best on the town</h2></v-card-subtitle
                  >
                  <v-card-text>
                    Vivamus vel ultricies quam. Suspendisse tempus erat ac massa pharetra, sit amet euismod justo iaculis. Quisque ultrices euismod dui, sed aliquet odio eleifend at. In ac libero vel nisi auctor vehicula. Pellentesque facilisis sem eros, nec iaculis libero consectetur in Duis varius libero sit amet dolor eleifend.
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-card>
        </v-container>
        <br />
        <br />
        <br /><br />

        <v-container fluid>
          <v-card max-width="auto" elevation="0">
            <v-row>
              <v-col cols="6">
                <v-card max-height="300" elevation="0">
                  <v-card-title style="color: #2DAF00"
                    ><h1>Our mission to make</h1>
                    <br /><br />
                    <h1>vehicle more friendly for</h1>
                    <br />
                    <h1>for our planet</h1>
                    <br /><br />
                    <v-card-text style="color:#212121">We are passionate about accelerating the transition to low-carbon, zero-emission transport, providing EV charger at home and specialist electric vehicle solutions to achieve a sustainable future.</v-card-text>
                  </v-card-title>
                </v-card>
              </v-col>
              <v-col cols="6">
                <v-card elevation="0">
                  <v-card-title style="color: #212121"
                    ><h4>
                      EV Charger has a small footprint and is quick to deploy. It is suitable for home and private use, and it can also be used for new energy vehicle 4s shops, workshop debugging, etc.
                    </h4></v-card-title
                  >
                  <card-subtitle>
                    <ul>
                      <li>The best charging station for home and private use</li>
                      <li>Simple and intelligent</li>
                      <li>Wall-mount or floor-stand installation optional</li>
                      <li> Type 1 or Type 2 charging cable optional</li>
                    </ul>
                  </card-subtitle>
                </v-card>
              </v-col>
            </v-row>
          </v-card>
        </v-container>
        <v-spacer></v-spacer><br />
        <br />
        <br />
        <br />

        <v-container fluid>
          <v-card max-width="auto" elevation="0">
            <v-row>
              <v-col cols="6">
                <v-card elevation="0">
                  <v-img
                    max-width="700"
                    max-height="300"
                    src="../assets/imges/ev-charging-station-electric-car-260nw-2030441159.webp"
                    class="grey darken-4"
                  ></v-img>
                </v-card>
              </v-col>
              <v-col cols="6">
                <v-card elevation="0">
                  <v-card-title style="color: #2DAF00"
                    ><h5>We are near you</h5></v-card-title
                  >
                  <card-subtitle>
                    <h1>1,500 public charging points and car servicing</h1>
                  </card-subtitle>
                  <v-card-text>
                    Nam cursus nunc quis dolor mollis mollis. Cras vitae velit
                    mauris. Integer ut ex euismod, dignissim nunc imperdiet,
                    suscipit arcu. Donec ante lacus, placerat ac elit eu,
                    pharetra pulvinar leo. Cras condimentum urna scelerisque sem
                    congue dignissim.
                  </v-card-text>
                  <v-btn normal color="success">
                    <v-span style="color: white">Map</v-span>
                  </v-btn>
                </v-card>
              </v-col>
            </v-row>
          </v-card>
        </v-container>
        <br /><br />

        <v-container fluid>
          <v-card-title primary-title class="justify-center">
            <div>
              
              <div><h1>Read our latest article</h1></div>
            </div> </v-card-title
          >
        
        </v-container>

        <v-container>
          <div class="mb-3 sub-header-basic"></div>

          <v-container fluid>
            <v-row>
              <v-col cols="12" sm="4">
                <v-card
                  :loading="loading"
                  class="mx-auto my-12"
                  max-width="500"
                >
                  <v-img
                    height="250"
                    class=""
                    v-bind:src="require('../assets/imges/car services.jpg')"
                  ></v-img>

                  <v-card-title style="color:#2DAF00 "
                    ><h4 class="font-weight-bold">
                      So what maintenance does an electric car with low battery?
                    </h4></v-card-title
                  >

                  <v-card-text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum neque turpis, imperdiet at purus eget, sagittis
                    accumsan ante. Pellentesque ultrices a odio consectetur
                    sagittis.
                  </v-card-text>

                  <v-divider class="mx-4"></v-divider>

                  <v-card-text> February 14.2022-No comments </v-card-text>
                </v-card>
              </v-col>

              <v-col cols="12" sm="4">
                <v-card
                  :loading="loading"
                  class="mx-auto my-12"
                  max-width="500"
                >
                  <v-img
                    height="250"
                    class=""
                    v-bind:src="require('../assets/imges/Charging1.jpg')"
                  ></v-img>

                  <v-card-title style="color:#2DAF00"
                    ><h4 class="font-weight-bold">
                      Charging Solution for Electric Car & Hybrid Car
                    </h4></v-card-title
                  >

                  <v-card-text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum neque turpis, imperdiet at purus eget, sagittis
                    accumsan ante. Pellentesque ultrices a odio consectetur
                    sagittis.
                  </v-card-text>

                  <v-divider class="mx-4"></v-divider>

                  <v-card-text> February 14.2022-No comments </v-card-text>
                </v-card>
              </v-col>

              <v-col cols="12" sm="4">
                <v-card
                  :loading="loading"
                  class="mx-auto my-12"
                  max-width="500"
                >
                  <v-img
                    height="250"
                    class=""
                    v-bind:src="require('../assets/imges/Car.jpg')"
                  ></v-img>

                  <v-card-title style="color:#2DAF00"
                    ><h4 class="font-weight-bold">
                      Guide to Electrical Car Charging Points maintenance
                    </h4></v-card-title
                  >

                  <v-card-text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum neque turpis, imperdiet at purus eget, sagittis
                    accumsan ante. Pellentesque ultrices a odio consectetur
                    sagittis.
                  </v-card-text>

                  <v-divider class="mx-4"></v-divider>

                  <v-card-text> February 14.2022-No comments </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-container>

          <v-card>
            <div class="mb-3 sub-header-basic"></div>
          </v-card>
        </v-container>
      </v-container>

      <v-footer color="#2DAF00" padless>
        <v-row justify="center" no-gutters>
          <v-btn
            v-for="link in links"
            :key="link"
            color="white"
            text
            rounded
            class="my-2"
          >
            {{ link }}
          </v-btn>
          <v-col
            class="#4caf50 lighten-2 py-4 text-center white--text"
            cols="12"
          >
            {{ new Date().getFullYear() }} — <strong>EV_Charge.lk</strong>
          </v-col>
        </v-row>
      </v-footer>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    links: ["Home", "Services", "Contact", "About", "FAQ"],
  }),
};
</script>

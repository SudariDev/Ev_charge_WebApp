<template>
  <v-navigation-drawer v-model="drawer"  class="#263238" app>
    <v-img
      height="140"
      class="pa-4"
      src="../../imges/dashBord_img/initial-letter-ev-modern-linked-260nw-444023206.webp"
    >
      <div class="text-center">
        <!-- <v-avatar class="mb-4" color="grey darken-1" size="64">
          <v-img
            aspect-ratio="30"
            src="../../imges/logo/Logopngwing.com.png"
          />
        </v-avatar> -->
        <br ><br ><br><br>
         <h3 style="color: #4caf50" >EV Charge</h3>
      </div>
    </v-img>
    <br><br>
     <v-divider class="mx-4"></v-divider>

      <br><br>

    <v-list dense nav>
      <v-list-item v-for="item in items" :key="item.title" link :to="item.path">
        <v-list-item-icon>
          <v-icon class="#FFFFFF">{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title class="black--text">{{
            item.title
          }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {

  props: ["drawer"],
  data: () => {
    return {
      items: [
        { title: "Dashboard", icon: "mdi-view-dashboard", path: "/Dashboard" },
        { title: "charge", icon: "mdi-ev-plug-chademo", path: "/charge" },
        { title: "Profile", icon: "mdi-account", path: "/Profile" },
        { title: "Map", icon: "mdi-map-marker", path: "/Map" },
        { title: "Payment", icon: "mdi-credit-card-outline", path: "/Payment" },
        { title: "Reports", icon: "mdi-chart-areaspline", path: "/reports" },
        { title: "Notification", icon: "mdi-bell", path: "/Notification" },
      ],
    };
  },
  mounted() {
    //var admin = authHelper.getAdminStatus();
    //  if(admin == true){
    //     this.items = AppOptions.item
    //  }
    //  else{
    //    this.items = AppOptions.userItems
    //  }
  },
};
</script>
<style scoped>
</style>

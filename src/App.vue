<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
      dark
      class="#263238"
    >
        <div class="text-center mt-5">
           <h1 class="white--text">ev.ceb.lk</h1>
           <v-divider color="white" class="mt-4"></v-divider>
            <v-avatar class="my-5" size="60">
            <v-img src="https://cdn.vuetifyjs.com/images/lists/1.jpg" class="image"></v-img>
            </v-avatar>
            <h1 class="white--text">Alison Burgas</h1>
            <h6 class="grey--text ">admin@admin.com</h6>     
        </div>
      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          :to="item.path"
        >
          <v-list-item-icon>
            <v-icon class="#FFFFFF">{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="white--text">{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app elevation="1">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      
      <v-spacer> </v-spacer>
      
    </v-app-bar>

    <v-main class="blue-grey lighten-4">
       
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    data: () => {
      return {
        drawer:false,
        items:[
          { title: 'Dashboard', icon: 'mdi-view-dashboard',path:"/Dashboard" },
          { title: 'charge', icon: 'mdi-ev-plug-chademo',path:'/charge'},
          { title: 'Profile', icon: 'mdi-account' ,path:"/Profile"},
          { title: 'Map', icon: 'mdi-map-marker' ,path:"/Map"},
          { title: 'Payment', icon: 'mdi-credit-card-outline' ,path:"/Payment"},
          { title: "Reports", icon: "mdi-chart-areaspline",path:'/Report' },
          { title: 'Notification', icon: 'mdi-bell' ,path:"/Notification"},
          { title: 'Home',path:"/Home"},
          
        ]
      }


  }

  
  }
</script>
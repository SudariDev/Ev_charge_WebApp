<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
      dark
      color="#263238"
    >
        <div class="text-center mt-5">
           <h1 class="white--text">ev.ceb.lk</h1>
           <v-divider color="white" class="mt-4"></v-divider>   
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
        ]
      }
  }
   
  }
</script>
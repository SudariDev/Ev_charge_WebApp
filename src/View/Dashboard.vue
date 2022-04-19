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
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <!--  -->
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
       <v-toolbar-title>
                    
                    <v-spacer></v-spacer>
                   </v-toolbar-title>
                <v-spacer> </v-spacer>
                <v-btn flat color="#EF6C00">
                  <span class="white--text">Sign Out</span>
                </v-btn>

     
    </v-app-bar>

    <v-main>
      <!--  -->
    </v-main>
  
  </v-app>
</template>

<script>
  export default {
    data: () =>{
      return {
        drawer:false,
        items:[
          { title: 'Dashboard', icon: 'mdi-view-dashboard' },
          { title: 'charge', icon: 'mdi-ev-plug-type1' },
          { title: 'Session', icon: 'mdi-menu-open' },
          { title: 'Payments', icon: 'mdi-credit-card-marker' },
          { title: 'Notifications', icon: 'mdi-bell' },
          { title: 'Reports', icon: 'mdi-chart-areaspline' },
        ]
      }
    }
  }
</script>
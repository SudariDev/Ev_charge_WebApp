<template>
<v-app  id="inspire" >
  
    <v-main>
    
    
    <tool  v-if="validated" @drawerEvent="drawer = !drawer" />
    <router-view/>
    <SideBar v-if="validated" :drawer="drawer" />
   
    </v-main>
  </v-app>
 
</template>

<script>

import SideBar from '../src/assets/components/SideBarSection/SideBarSection.vue'
import tool from '../src/assets/components/ToolBar/TopBar.vue'

export default{
  name: "App",
  components:{
    tool,
    SideBar,
    
  }, 
 data() {
    return {
     drawer: null,
    };
  },
  computed:{
         validated(){
           
           if(this.$route.name == 'home'){
              return  false;
           }
            else if(this.$route.name == 'login'){
              return false;
           }
           else{
             return true;
           }
           }
         }
        

};

 
  
</script>
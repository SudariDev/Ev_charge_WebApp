<template>
<div>
    <b-container>  
         <v-breadcrumbs :items="items"  divider=">" small class="Black" >
           <template v-slot:item="{ item }">
            <v-breadcrumbs-item v-if=item.disabled
                :href="item.href"
                :disabled="item.unable"
            ><span style="color:black"> {{ item.text.toUpperCase() }}</span>
               
            </v-breadcrumbs-item>
             <v-breadcrumbs-item v-if=item.active
                :href="item.href"
                :disabled="item.unable"
            ><span style="color:blue"> {{ item.text.toUpperCase() }}</span>
               
            </v-breadcrumbs-item>
            </template>
         </v-breadcrumbs>
    </b-container>
   
    
<v-container>
    
        <v-row class="align" no-gutters>
            

            <v-col :align="align" no-gutters >
                <v-card class="justify-xl-center cd1">
                    <v-container class="justify-xl-center">
                      <v-spacer></v-spacer>
              
                      <v-card flat class="rounded-0 mx-auto" max-width="100" :elevation="1">
                            <v-img 
                             class="#FFFFFF" v-bind:src="require('../assets/imges/user.png')" ></v-img>   
                          </v-card>
                    <v-card-text align="center"><h1 class="Black">Alison Burgas</h1></v-card-text>
                    <v-card-text align="center"><h3 class="Black">967822406V</h3></v-card-text>
                    <v-card-text align="center"><h3 class="">0717832129</h3></v-card-text>
                    <v-card-text align="center"><h3 class="">Account Number: 84113556</h3></v-card-text>
                    
                 
                    <v-spacer></v-spacer>
                        <div class="green accent-10 text-center">
                         <span class="white--text"> <h3>Balance Rs : {{ x }}</h3></span>
                         </div>
                         
                
                    </v-container>

                </v-card>
            </v-col>
            <v-spacer></v-spacer>

            <v-col no-gutters >
        <v-card>      
  <v-container>
  
    <form>
      <v-text-field
        v-model="name"
        :error-messages="nameErrors"
        :counter="10"
        label="Name"
        required
        @input="$v.name.$touch()"
        @blur="$v.name.$touch()"
      ></v-text-field>
      <v-text-field
        v-model="email"
        :error-messages="emailErrors"
        label="E-mail"
        required
        @input="$v.email.$touch()"
        @blur="$v.email.$touch()"
      ></v-text-field>
      <v-select
        v-model="select"
        :items="items"
        :error-messages="selectErrors"
        label="Item"
        required
        @change="$v.select.$touch()"
        @blur="$v.select.$touch()"
      ></v-select>
      <v-checkbox
        v-model="checkbox"
        :error-messages="checkboxErrors"
        label="Do you agree?"
        required
        @change="$v.checkbox.$touch()"
        @blur="$v.checkbox.$touch()"
      ></v-checkbox>

      <v-btn
        class="mr-4"
        @click="submit"
      >
        submit
      </v-btn>
      <v-btn @click="clear">
        clear
      </v-btn>
    </form>
    
  </v-container> 
        </v-card>
            </v-col>           
       
        </v-row>
        
    
  </v-container>
   
</div>
</template>

<script>

 export default {
    data: () => ({
      items: [
        {
          text: 'Home',
          disabled: true,
          href: 'breadcrumbs_dashboard',
        },
        {
          text: 'Dashboard',
          active: true,
          href: 'breadcrumbs_link_1',
        },
        
      ],
       x:0,


    }),


    methods:{
    
    }
  }
  

</script>
<style>
.cd1{

}

</style>
<template>
  <v-footer
    dark
    padless
    app
    inset
    
  >
    <v-card
      class="flex"
      flat
      tile
      color="#E0E0E0"
      :elevation="10"
    >

      <v-card-text class="py-2 black--text text-center">
        {{ new Date().getFullYear() }} — <strong>Copyright 2022 Ceylon Electricity Board.All rights reserved</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>
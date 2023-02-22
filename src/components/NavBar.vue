<template>
    <v-app-bar>
      <v-container>
        <v-layout align-center>
          <v-flex xs4>
            <v-img
              src="#"
              max-height="32"
              contain
            ></v-img>
          </v-flex>
          <v-flex xs8>
            <v-toolbar-items class="hidden-xs-only">
              <v-tabs>
                <v-tab to="/home">Home</v-tab>
                <v-tab to="/about">About</v-tab>
                <v-tab to="/services">Services</v-tab>
                <v-tab to="/contact">Contact</v-tab>
              </v-tabs>
            </v-toolbar-items>
            <v-menu offset-y>
              <template v-slot:activator="{ on }">
                <v-btn icon v-on="on">
                  <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
              </template>
              <v-list>
                <v-list-item to="/home">
                  <v-list-item-title>Home</v-list-item-title>
                </v-list-item>
                <v-list-item to="/about">
                  <v-list-item-title>About</v-list-item-title>
                </v-list-item>
                <v-list-item to="/services">
                  <v-list-item-title>Services</v-list-item-title>
                </v-list-item>
                <v-list-item to="/contact">
                  <v-list-item-title>Contact</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-flex>
        </v-layout>
      </v-container>
    </v-app-bar>
  </template>

  <script>
    export default {
      name: 'NavBar',
      data: () => ({
        //
      })
    }
</script>


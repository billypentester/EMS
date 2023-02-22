<template>
    <v-row class="justify-center h-screen align-center w-screen text-center">
        <v-col cols="12">
            <ul>
                <h3 class="my-5 text-h5">Checkbox hover issue in login page</h3>
                <li><router-link to="/login">
                    <v-btn color="red">Login</v-btn>
                </router-link></li>
            </ul>
        </v-col>
    </v-row>
</template>
<script>
    export default {
        name: 'home',
        data() {
            return {
                
            }
        }
    }
</script>
<style>
    
</style>
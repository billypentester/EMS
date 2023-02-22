<template>

    <v-row class="pa-0 ma-0">

      <v-col cols="6" class="pa-0 elevation-10">
        <v-row class="justify-center align-center h-screen">
          <v-col cols="7">

            <div class="mb-5">
              <h1 class="text-red darken-2">{{ title }}</h1>
              <h3 class="text-red darken-2 text-subtitle-1">{{ subtitle }}</h3>
            </div>
            
            <v-form ref="form" class="mb-5">
              <v-text-field class="mb-3" v-model="user.name" :label="fields[0].label" variant="underlined" type="text" color="red darken-2" :rules="fields[0].rules"></v-text-field>
              <v-text-field class="mb-3" v-model="user.email" :label="fields[1].label" variant="underlined" type="email" color="red darken-2" :rules="fields[1].rules"></v-text-field>
              <v-text-field class="mb-3" v-model="user.password" :label="fields[2].label" variant="underlined" :rules="fields[2].rules" @click:append-inner="fields[2].showPassword = !fields[2].showPassword" :type="fields[2].showPassword ? 'text' : 'password'" color="red darken-2" :append-inner-icon="fields[2].showPassword ? 'mdi-eye' : 'mdi-eye-off'"></v-text-field>
              <v-text-field class="mb-3" v-model="user.confirmPassword" :label="fields[3].label" variant="underlined" :rules="fields[3].rules" @click:append-inner="fields[3].showPassword = !fields[3].showPassword" :type="fields[3].showPassword ? 'text' : 'password'" color="red darken-2" :append-inner-icon="fields[3].showPassword ? 'mdi-eye' : 'mdi-eye-off'"></v-text-field>
            </v-form>
            
            <v-btn color="red darken-2" prepend-icon="mdi-account-plus" class="mb-3" size="large" block @click="signup">Sign Up</v-btn>
            <v-btn color="red darken-2" prepend-icon="mdi-google" variant="outlined" size="large" block @click="googleLogin">Sign Up with Google</v-btn>

            <h3 class="text-center mt-10 text-subtitle-1">
              Already have an account? 
              <router-link to="/login">
                <span class="text-decoration-none  text-red darken-2 font-weight-bold">
                  Login
                </span>
              </router-link>
            </h3>

          </v-col>
        </v-row>
      </v-col>

      <v-col cols="6" class="pa-0">
        <v-img :src=image cover="true" class="h-screen"></v-img>
      </v-col>
    
    </v-row>

</template>
<script>

    import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
    import { auth } from './../firebase/init'

    export default {
      name: 'signup',
      data: ()=>({
        title: 'Create an Account',
        subtitle: "It's free and only takes a minute",
        image: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGV2ZW50fGVufDB8fDB8fA%3D%3D&w=1000&q=80",
        user: {
          name: '',
          email: '',
          password: '',
          confirmPassword: ''
        },
        fields:[
          {
            name: 'name',
            label: 'Name',
            type: 'text',
            rules: [
                v => !!v || 'name is required',
                v => (v && v.length <= 15) || 'Name must be less than 15 characters',
            ]
          },
          {
            name: 'email',
            label: 'Email',
            type: 'email',
            rules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
            ]
          },
          {
            name: 'password',
            label: 'Password',
            type: 'password',
            showPassword: false,
            rules: [
                v => !!v || 'Password is required',
                v => (v && v.length >= 8) || 'Password must be equal or greater than 8 characters',
            ]
          },
          {
            name: 'confirm_password',
            label: 'Confirm Password',
            type: 'password',
            showPassword: false,
            rules: [
              // v => !!v || 'Confirm Password is required',
              v => this.user.password === v || 'Passwords must match',
            ]
          },
        ]
      }),
      methods: {
        createAccount(){
          createUserWithEmailAndPassword(auth, this.user.email, this.user.password)
          .then((userCredential) => {
            const user = userCredential.user;
            console.log(user)
            alert('User created successfully')
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
          });
        },
        signup(){
          this.createAccount();
        },
        googleLogin(){
          const provider = new GoogleAuthProvider();
          signInWithPopup(auth, provider)
          .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;
            console.log(user)
            // ...
          }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.email;
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
          });
        }
      }
      
    }
</script>
<style scoped>
a{
  text-decoration: none;
}
</style>
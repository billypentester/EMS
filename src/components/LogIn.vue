<template>

    <v-row class="pa-0 ma-0">

      <v-col cols="6" class="pa-0 elevation-10">
        <v-row class="justify-center align-center h-screen">
          <v-col cols="7">

            <div class="mb-5 text-center">
              <h1 class="text-red darken-2">{{ title }}</h1>
              <h3 class="text-red darken-2 text-subtitle-1">{{ subtitle }}</h3>
            </div>
            
            <v-form ref="form" class="mb-5">
                <v-text-field class="mb-3" v-model="user.email" :label="fields[0].label" variant="underlined" type="email" color="red darken-2" :rules="fields[0].rules"></v-text-field>
                <v-text-field class="mb-3" v-model="user.password" :label="fields[1].label" variant="underlined" :rules="fields[1].rules" @click:append-inner="fields[1].showPassword = !fields[1].showPassword" :type="fields[1].showPassword ? 'text' : 'password'" color="red darken-2" :append-inner-icon="fields[1].showPassword ? 'mdi-eye' : 'mdi-eye-off'"></v-text-field>
                <v-row class="align-center">    
                    <v-checkbox color="red darken-2" label="Remember Me"></v-checkbox>
                    <router-link to="/forgotPassword">
                        <span class="text-decoration-none text-red darken-2 font-weight-bold">
                        Forgot Password?
                        </span>
                    </router-link>
                </v-row>
            </v-form>

            <v-btn color="red darken-2" prepend-icon="mdi-login" class="mb-3" size="large" block @click="login">Login</v-btn>
            <v-btn color="red darken-2" prepend-icon="mdi-google" variant="outlined" size="large" block @click="googleLogin">Login with Google</v-btn>

            <h3 class="text-center mt-10 text-subtitle-1">
                Don't have an account?
              <router-link to="/signup">
                <span class="text-decoration-none text-red darken-2 font-weight-bold">
                  Register
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

    import { GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
    import { auth } from './../firebase/init'

    export default {
      name: 'login',
      data: ()=>({
        title: 'Welcome Back',
        subtitle: "Let's get you logged in",
        image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZXZlbnQlMjB2ZW51ZXxlbnwwfHwwfHw%3D&w=1000&q=80",
        user: {
          email: '',
          password: ''
        },
        fields:[
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
            ]
          }
        ]
      }),
      methods: {
        login(){
            signInWithEmailAndPassword(auth, this.user.email, this.user.password)
            .then((userCredential) => {
                const user = userCredential.user;
                alert('Login Success')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage)
            });
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
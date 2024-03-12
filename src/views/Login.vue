<script setup>
import { ref } from 'vue'
import { apiRest } from '@/rest-api'
import Swal from 'sweetalert2'

import { isValidEmail } from '@/utils'

import { useCartStore } from '../stores/cart';

const cartStore = useCartStore()

const email = ref('')
const password = ref('')

const errorlogin = false


function submitForm(){
  if (password.value != null){
    const formData = {
        "username": email.value,
        "password": password.value
    }
    apiRest.post('/authToken/token/login', formData)
      .then( response => {
        const token = response.data.auth_token

        cartStore.setToken(token)        
        apiRest.defaults.headers.common["Authorization"] = "Token" + token

        Swal.fire({
          title: "Login succes!",
          text: "Your are log in !",
          icon: "success"
        })
      })
      .catch(error => {
        if (error.response) {
          console.log('error.response.data :')
          console.log(error.response.data)
          console.log('error.response :')
          console.log(error.response)
        }
      })
  }
}

</script>

<template>
  <div class="container sign-up-page">
    <div class="columns">
      <div class="column is-4 is-offset-4">
        <h1 class="title  has-text-centered">Login</h1>
        
        <form @submit.prevent="submitForm">

          <hr/>

          <div class="field">

            <label class="label is-large has-text-centered">Email</label>

            <div class="control has-icons-left">
              <input :class="{ 'is-danger' : errorlogin || (!isValidEmail(email) && email != '') }" 
                class="input is-rounded is-large" type="email" 
                placeholder="wonderful.me@email.ua" v-model="email">
              <span class="icon is-small is-left">
                <i class="fas fa-envelope"></i>
              </span>
              <span class="icon is-small is-right"  v-if="errorlogin">
                <i class="fas fa-exclamation-triangle"></i>
              </span>
            </div>
            <p class="help" v-if="errorlogin">ID or password error</p>
            <router-link v-if="errorlogin" to="/signup" class="button is-light ">for create new account</router-link>
          </div>

          <div class="field">

            <label class="label is-large has-text-centered">Password</label>

            <div class="control has-icons-left">
              <input class="input is-rounded is-large" type="password" placeholder="Password" v-model="password">
              <span class="icon is-small is-left">
                <i class="fas fa-lock"></i>
              </span>
              <span class="icon is-small is-right"  v-if="errorlogin">
                <i class="fas fa-exclamation-triangle"></i>
              </span>
            </div>
          </div>
          
          <div class="field">
            <p class="control">
              <button class="button is-success">
                Login
              </button>
            </p>
          </div>

        </form>
        <hr/>
      </div>
    </div>
  </div>
</template>
  
<style>

.container {
  max-width: 80%;
}

</style>
  @/rest-api
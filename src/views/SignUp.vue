<script setup>
import { ref } from 'vue'
import { apiRest } from '@/rest-api/http-api'
import Swal from 'sweetalert2'

import {isDifferentPass, isValidPassword, isValidEmail} from '@/utils'

const email = ref('')
const password = ref('')
const password2 = ref('')

const isUse = false

//Default : passwordOption = {'num': 1, 'length': 8, 'special': 1}
const passwordOption = undefined


function submitForm(){
  if (isValidPassword(password.value) && !isDifferentPass(password.value, password2.value) && isValidEmail(email.value)){
    const formData = {
    "email": email.value,
    "username": email.value,
    "password": password.value
}
    apiRest.post('/auth/users/', formData)
      .then( response => {
        Swal.fire({
          title: "create!",
          text: "Your acount is create",
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
        <h1 class="title  has-text-centered">Sign Up</h1>
        
        <form @submit.prevent="submitForm">

          <hr/>

          <div class="field">

            <label class="label is-large has-text-centered">Email</label>

            <div class="control has-icons-left">
              <input :class="{ 'is-danger' : isUse || (!isValidEmail(email) && email != '') }" 
                class="input is-rounded is-large" type="email" 
                placeholder="wonderful.me@email.ua" v-model="email">
              <span class="icon is-small is-left">
                <i class="fas fa-envelope"></i>
              </span>
              <span class="icon is-small is-right"  v-if="isUse">
                <i class="fas fa-exclamation-triangle"></i>
              </span>
            </div>
            <p class="help" v-if="isUse">This email is use</p>
          </div>

          <div class="field">

            <label class="label is-large has-text-centered">Password</label>

            <div class="control has-icons-left">
              <input class="input is-rounded is-large" type="password" placeholder="Password" v-model="password">
              <span class="icon is-small is-left">
                <i class="fas fa-lock"></i>
              </span>
              <span class="icon is-small is-right"  v-if="!isValidPassword(password, passwordOption) && password != ''">
                <i class="fas fa-exclamation-triangle"></i>
              </span>
            </div>
            <p class="help" v-if="!isValidPassword(password, passwordOption)">Pleas make a more secure password</p>
            <p class="help" v-if="!isValidPassword(password, passwordOption)">Useing specials caracters numbers and letters</p>
          </div>

          <div class="field">

            <label class="label is-medium has-text-centered">Repeat Password</label>

            <div class="control has-icons-left">
              <input class="input is-rounded is-large" type="password" placeholder="Password" v-model="password2">
              <span class="icon is-small is-left">
                <i class="fas fa-lock"></i>
              </span>
            </div>
            <p class="help" v-if="isDifferentPass(password, password2)">This is different !</p>
          </div>

          <div class="field">
            <p class="control">
              <button class="button is-success">
                Sign In
              </button>
            </p>
          </div>

        </form>
        <hr/>
         <p>Or <router-link to="/login">click here</router-link> to log in!</p>
      </div>
    </div>
  </div>
</template>
  
<style>

.container {
  max-width: 80%;
}

</style>
  
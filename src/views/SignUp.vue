<script setup>
import { ref } from 'vue'
import Swal from 'sweetalert2'

const mail = ref('')
const password = ref('')
const password2 = ref('')

const isUse = false
const notValidPass = false

const isDifferentPass =  () => (password.value !== password2.value)



function submitForm(){

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

            <label class="label is-large has-text-centered">Mail</label>

            <div class="control has-icons-left">
              <input :class="{ 'is-danger' : isUse }" class="input is-rounded is-large" type="mail" placeholder="wonderful.me@email.ua" v-model="mail">
              <span class="icon is-small is-left">
                <i class="fas fa-envelope"></i>
              </span>
              <span class="icon is-small is-right"  v-if="isUse">
                <i class="fas fa-exclamation-triangle"></i>
              </span>
            </div>
            <p class="help" v-if="isUse">This mail is use</p>
          </div>

          <div class="field">

            <label class="label is-large has-text-centered">Password</label>

            <div class="control has-icons-left">
              <input class="input is-rounded is-large" type="password" placeholder="Password" v-model="password">
              <span class="icon is-small is-left">
                <i class="fas fa-lock"></i>
              </span>
              <span class="icon is-small is-right"  v-if="notValidPass">
                <i class="fas fa-exclamation-triangle"></i>
              </span>
            </div>
            <p class="help" v-if="notValidPass">Pleas make a more secure password</p>
            <p class="help" v-if="notValidPass">Use special caracters numbers letters / 8 min</p>
          </div>

          <div class="field">

            <label class="label is-medium has-text-centered">Repeat Password</label>

            <div class="control has-icons-left">
              <input class="input is-rounded is-large" type="password" placeholder="Password" v-model="password2">
              <span class="icon is-small is-left">
                <i class="fas fa-lock"></i>
              </span>
            </div>
            <p class="help" v-if="isDifferentPass()">This is different !</p>
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
  
<template>
  <div>
    <h1>Register</h1>
    <!-- v-model is 2-way binding -->
    <input
      type="email"
      name="email"
      v-model="email"
      placeholder="email"/>
    <br>
    <input
      type="password"
      name="password"
      v-model="password"
      placeholder="password"/>
    <br>
    <!-- button has an onCLick listener to call a method when hit -->
    <button
      @click="register" >Register</button>

  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'

export default {
  data () { //data model updates when the value is input on the browser
    return {
      email: '',
      password: ''
    }
  },
  //when value of email changes it will be logged
  // watch: {
  //   email (value) {
  //       console.log('email has changed', value);
  //     }
  //   },
  methods: {
    // function for onClick
    register () {
      //call to register endpoint and pass in emaill and password, then log response
      //  AuthenticationService.register({
        // email: this.email,
        // password: this.password


      console.log('working ' + this.email + " " + this.password);
    }
  }
  //run a command when component loads
  // mounted () {
  //   setTimeout (() => {
  //     this.email = 'hello world'
  //   }, 2000)
  // }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

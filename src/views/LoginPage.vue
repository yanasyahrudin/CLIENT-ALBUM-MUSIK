<script>
import { mapActions } from 'pinia';
import { useAppStore } from '../stores';
import { GoogleLogin } from 'vue3-google-login';

export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  components: {
    GoogleLogin
  },
  methods: {
    ...mapActions(useAppStore, ['doLogin', 'googleLogin']),
    handleLogin() {
      this.doLogin({
        email: this.email,
        password: this.password
      })
    },
    loginGoogle(token) {
      this.googleLogin(token)
    }
  }
}
</script>

<template>
  <body>
    <div class="login-container">
      <img src="/src/assets/images/logo.png" alt="Logo" width="150" height="150" @click.prevent="$router.push('/')"/> <!-- Tambahkan path gambar di sini -->
      <h1>Login to Your Account</h1>
      <form @submit.prevent="handleLogin">
        <input v-model="email" type="email" placeholder="Email" required>
        <input v-model="password" type="password" placeholder="Password" required>
        <input type="submit" value="Login"><br>
        <GoogleLogin :callback="googleLogin"/>
      </form>
      <p>Don't have an account? <a href="register">Register here</a></p>
    </div>
  </body>
</template>

<style>
body {
  background-color: white;
  color: black;
  font-family: Arial, sans-serif;
  font-size: 16px;
}

.login-container {
  margin: 0 auto;
  padding: 40px;
  max-width: 400px;
  text-align: center;
  margin-top: 0 auto;
}

h1 {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}

input[type="email"],
input[type="password"] {
  display: block;
  margin: 0 auto;
  padding: 10px;
  width: 100%;
  max-width: 300px;
  border: 1px solid black;
  border-radius: 5px;
  margin-bottom: 20px;
}

input[type="submit"] {
  display: block;
  margin: 0 auto;
  padding: 10px 20px;
  background-color: black;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
}

input[type="submit"]:hover {
  background-color: gray;
}

p {
  margin-top: 20px;
  font-size: 14px;
}

a {
  color: black;
  text-decoration: none;
  font-weight: bold;
}
</style>
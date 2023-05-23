<script>
import { mapActions } from 'pinia';
import { useAppStore } from '../stores';


export default {
  data() {
    return {
        name: '',
        email: '',
        message: ''
    }
  },
  methods: {
    ...mapActions(useAppStore, ['contactUs']),
    handleContact() {
      this.contactUs({
        name: this.name,
        email: this.email,
        message: this.message
      })
    }
  }
}
</script>
<template>
  <body>

    <!-- Konten -->
    <div class="container mt-5 mb-5">
      <div class="row">
        <div class="col-lg-6">
          <h1 class="mb-4">Send us a message</h1>
          <form @submit.prevent="handleContact">
            <div class="form-group">
              <input v-model="name" type="text" class="form-control" placeholder="Name" required>
            </div>
            <div class="form-group">
              <input v-model="email" type="email" class="form-control" placeholder="Email" required>
            </div>
            <div class="form-group">
              <textarea v-model="message" type="text" class="form-control" rows="5" placeholder="Message" required></textarea>
            </div>
            <button type="submit" class="btn btn-dark">Send</button>
          </form>
        </div>
        <div class="col-lg-6">
          <h1 class="mb-4">Visit us</h1>
          <p>123 Main St</p>
          <p>Anytown, USA</p>
          <h1 class="mt-5 mb-4">Call us</h1>
          <p>Phone: (555) 555-1212</p>
        </div>
      </div>
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

input[type="text"],
input[type="email"],
textarea[type="text"] {
  margin: 0 auto;
  display: block;
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
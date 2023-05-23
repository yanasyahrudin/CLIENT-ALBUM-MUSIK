<script>
import { mapActions, mapWritableState } from 'pinia';
import { useAppStore } from '../stores';

export default {
  name: 'Navbar',
  computed: {
    ...mapWritableState(useAppStore, ['isLogin'])
  },
  methods: {
    logout() {
      Swal.fire({
        title: 'Are you sure?',
        text: "You will be logged out of your account!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, logout!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Logout!',
            'You have successfully logged out.',
            'success'
          )
          localStorage.clear()
          this.$router.push('/login')
          this.isLogin = false
        }
      })
    },
    login() {
      this.$router.push('/login')
    },
    favorites() {
      this.$router.push('/favorites')
    },
    home() {
      this.$router.push('/')
    },
    cart() {
      this.$router.push('/carts')
    }
  },
  created() {
    if (localStorage.getItem('access_token')) {
      this.isLogin = true
    }
  }
}
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark" style="border-radius: 0 0 10px 10px;">
    <div class="container">
      <a class="navbar-brand" href="#"><b>ALBUM MUSIK</b></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/favorites" class="nav-link" v-if="isLogin === true">Favorites</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/favorites" class="nav-link" v-if="isLogin === false" hidden>Favorites</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contact" class="nav-link">Contact</router-link>
          </li>
        </ul>
      </div>
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <button class="btn btn-outline-light" v-if="isLogin === false" @click="login">Login</button>
        </li>
      </ul>
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <button class="btn btn-outline-light" v-if="isLogin === true" @click="logout">Logout</button>
        </li>
      </ul>
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <button class="btn btn-outline-light" @click="cart">Cart</button>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style>
.navbar {
  background-color: #008080;
  /*ganti dengan warna yang Anda inginkan*/
  color: #fff;
  /*ganti dengan warna yang Anda inginkan*/
}

.navbar {
  font-family: 'Roboto', sans-serif;
  /*ganti dengan jenis font yang Anda inginkan*/
  font-size: 18px;
  /*ganti dengan ukuran font yang Anda inginkan*/
}

.navbar {
  font-family: 'Roboto', sans-serif;
  /*ganti dengan jenis font yang Anda inginkan*/
  font-size: 18px;
  /*ganti dengan ukuran font yang Anda inginkan*/
}

.navbar {
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  /*ganti dengan nilai yang Anda inginkan*/
}

.navbar .nav-link {
  color: #fff;
  /*ganti dengan warna yang Anda inginkan*/
}

.navbar .nav-link:hover {
  color: grey;
  /*ganti dengan warna yang Anda inginkan*/
}
</style>


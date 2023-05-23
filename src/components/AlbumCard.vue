<script>
import { mapActions, mapWritableState } from 'pinia';
import { useAppStore } from '../stores';

export default {
  name: 'AlbumCard',
  data() {
    return {
      id: '',
      title: '',
      description: '',
      imgUrl: '',
      rating: '',
      genre: '',
      peg: ''
    }
  },
  props: ['album', 'page'],
  computed: {
    ...mapWritableState(useAppStore, ['isLogin'])
  },
  methods: {
    ...mapActions(useAppStore, ['addFavorite', 'addCart', 'detailAlbum', 'destroyFavorite', 'buyNow']),
    addToFavorites(id) {
      this.addFavorite(id)
    },
    addToCarts(id) {
      this.addCart(id)
    },
    getDetails(id) {
      this.detailAlbum(id)
    },
    destroyToFavorites(idFav) {
      this.destroyFavorite(idFav)
    },
    confirmPurchase() {
      this.buyNow()
    },
    showMessageLogin() {
      Swal.fire({
        title: 'Oops!',
        text: 'You need to log in first to access this page.',
        icon: 'warning',
        confirmButtonText: 'Log In Now',
        showCancelButton: true,
        cancelButtonText: 'Later',
        cancelButtonColor: '#d33',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          // redirect to login page
          this.$router.push('/login')
        }
      })
    }
  },
  created() {
    if (this.page === 'home') {
      this.peg = 'home'
      this.id = this.album.id
      this.title = this.album.title
      this.imgUrl = this.album.imgUrl
      this.rating = this.album.rating
      this.genre = this.album.Genre.name
    } else if (this.page === 'favorites') {
      this.peg = 'favorites'
      this.id = this.album?.Album.id
      this.title = this.album?.Album.title
      this.imgUrl = this.album?.Album.imgUrl
      this.rating = this.album?.Album.rating
      this.genre = this.album?.Album.Genre.name
    }
    if (localStorage.getItem('access_token')) {
      this.isLogin = true
    }
  }
}
</script>

<template>
  <div class="col-md-4 mb-4">
    <div class="card">
      <img @click.prevent="$router.push(`/${id}`)" :src="imgUrl" class="card-img-top" alt="..." width="250" height="250">
      <div class="card-body">
        <h5 class="card-title">{{ title }}</h5>
        <a href="#" v-if="isLogin === true" @click="addToFavorites(id)" class="btn btn-secondary mb-2">Add
          Favorites</a>
        <a href="#" v-if="isLogin === false" @click="showMessageLogin()" class="btn btn-secondary mb-2">Add
          Favorites</a>
        <a href="#" v-if="isLogin === true" @click="addToCarts(id)" class="btn btn-light mb-2">Add
          Cart</a>
        <a href="#" v-if="isLogin === false" @click="showMessageLogin()" class="btn btn-light mb-2">Add
          Cart</a>
        <a href="#" v-if="isLogin === true" @click="confirmPurchase()" class="btn btn-dark mb-2">Buy Now</a>
        <a href="#" v-if="isLogin === false" @click="showMessageLogin()" class="btn btn-dark mb-2">Buy Now</a>
      </div>
    </div>
  </div>
</template>

<style>
.card {
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease-in-out;
}

.card:hover {
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
  transform: translateY(-5px);
}

.card-title {
  font-size: 1.2rem;
  margin-bottom: 10px;
}

.btn {
  border-radius: 20px;
  font-size: 0.9rem;
  margin-right: 10px;
  transition: all 0.3s ease-in-out;
}

.btn:hover {
  transform: scale(1.05);
}
</style>





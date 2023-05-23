<script>
import { mapActions, mapState } from 'pinia';
import { useAppStore } from '../stores';

export default {
  data() {
    return {
      showModal: false
    };
  },
  computed: {
    ...mapState(useAppStore, ['dataDetails', 'isLogin'])
  },
  methods: {
    ...mapActions(useAppStore, ['albumDetails', 'buyNow', 'addCart']),
    show() {
      this.showModal = true;
    },
    hide() {
      this.showModal = false;
    },
    confirmPurchase(){
      this.buyNow()
    },
    addToCarts(id){
      this.addCart(id)
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
    this.albumDetails(this.$route.params.id)
    if (localStorage.getItem('access_token')) {
      this.isLogin = true
    }
  }
}
</script>

<template>
  <div class="container mb-5 mt-5 my-5">
    <h1>ALBUM DETAILS</h1>
    <div class="row mt-5">
      <div class="col-md-6">
        <img :src="dataDetails.imgUrl" class="img-fluid" alt="Album Cover" :alt="dataDetails.title" width="250"
          height="250">
        <h5 class="mt-3">Tracklist:</h5>
        <ul>
          <li>Song 1</li>
          <li>Song 2</li>
          <li>Song 3</li>
        </ul>
      </div>
      <div class="col-md-6">
        <h2>{{ dataDetails.title }}</h2>
        <p>Artist: <span class="font-weight-bold">Artist Name</span></p>
        <p>Genre: <span class="font-weight-bold">{{ dataDetails.Genre?.name }}</span></p>
        <p>Price: <span class="font-weight-bold">IDR. 50.000</span></p>
        <p class="lead">{{ dataDetails.description }}</p>
        <img
          :src="`https://api.qrserver.com/v1/create-qr-code/?data=http://localhost:3000/users${this.$route.path}&size=100x100`"
          :alt="dataDetails.title" class="img-fluid mt-3 mb-4"> <br>
        <!-- <a href="https://open.spotify.com/album/album_id" class="btn btn-success" target="_blank">Listen on
          Spotify</a> -->
        <button  v-if="isLogin === true" @click="addToCarts(id)" class="btn btn-light">Add
          Cart</button>
        <button  v-if="isLogin === false" @click="showMessageLogin()" class="btn btn-light">Add
          Cart</button>
        <button class="btn btn-dark" v-if="isLogin === true" @click="showModal = true">Buy Now</button>
        <button class="btn btn-dark" v-if="isLogin === false" @click="showMessageLogin()" >Buy Now</button>
      </div>
    </div>
  </div>


  <!-- Modal -->
  <div v-if="showModal" class="modal">
    <div class="modal-content">
      <!-- Konten modal -->
      <h3>Order Confirmation</h3>
      <p>Anda akan melakukan pembelian untuk:</p>
      <ul>
        <li>Judul Album: {{ dataDetails.title }}</li>
        <li>Artis: Artist Name</li>
        <li>Genre: {{ dataDetails.Genre?.name }}</li>
        <li>Harga: IDR. 50.000</li>
      </ul>
      <p>Apakah Anda yakin ingin melanjutkan pembelian ini?</p>
      <button @click="confirmPurchase()" class="btn btn-dark mb-2">Checkout</button>
      <button @click="showModal = false" class="btn btn-secondary">Back</button>
    </div>
  </div>
</template>

<style scoped>
.container {
  background-image: linear-gradient(to right top, grey, white);
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  padding: 2rem;
}

.img-fluid {
  border-radius: 2%;
  margin-left: auto;
}

h1,
h2,
h3,
h4,
h5,
p {
  font-family: Montserrat, sans-serif;
}

.album-img {
  filter: grayscale(100%);
  transition: all 0.3s ease-in-out;
}

.album-img:hover {
  filter: none;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.modal-content {
  background-color: #fff;
  margin: auto;
  padding: 2rem;
  max-width: 500px;
  border-radius: 5px;
  animation: fade-in 0.3s ease-in-out;
}

@keyframes fade-in {
  from {
    opacity: 0;
    transform: translate(0, -50%);
  }

  to {
    opacity: 1;
    transform: translate(0, 0);
  }
}

.modal-content button {
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  color: #fff;
  font-size: 1rem;
  font-family: Montserrat, sans-serif;
  cursor: pointer;
}

.modal-content button.primary {
  background-color: #28a745;
}

.modal-content button.secondary {
  background-color: #dc3545;
  margin-left: 10px;
}</style>

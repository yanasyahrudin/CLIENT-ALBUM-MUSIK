import { defineStore } from 'pinia'
import axios from 'axios'

const server = 'http://localhost:3000/'

export const useAppStore = defineStore('app', {
    state: () => ({
        isLogin: false,
        pagin: 0,
        genreId: '',
        albumList: '',
        favoriteList: '',
        cartList: '',
        dataDetails: '',
        genreList: '',
        activePage: 1,
        dataDestroyFav: ''
    }),
    actions: {
        async doRegister(registerForm) {
            try {
                await axios({
                    method: 'POST',
                    url: `${server}users/register`,
                    data: registerForm
                })
                Swal.fire(
                    'Good job!',
                    'The account on Album Musik has been created successfully!',
                    'success'
                )
            } catch (error) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: error.response.data[0].message,
                    footer: '<a href="">Why do I have this issue?</a>'
                })
            }
        },
        async doLogin(form) {
            try {
                let { data } = await axios({
                    method: 'POST',
                    url: `${server}users/login`,
                    data: form
                })
                localStorage.setItem('access_token', data.access_token)
                this.isLogin = true
                this.router.push('/')
            } catch (error) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: error.response.data,
                    footer: '<a href="">Why do I have this issue?</a>'
                })
            }
        },
        async doFilter(data) {
            this.genreId = data
            this.fetchAlbums()
        },
        async doPagination(data) {
            this.pagin = data
            this.fetchAlbums()
        },
        async fetchAlbums() {
            try {
                let { data } = await axios({
                    url: `${server}users`,
                    params: {
                        offset: this.pagin,
                        genre: this.genreId
                    }
                })
                this.albumList = data
            } catch (error) {
                console.log(error);
            }
        },
        async fetchGenres() {
            try {
                let { data } = await axios({
                    url: `${server}genres`,
                    headers: { access_token: localStorage.access_token }
                })
                this.genreList = data
            } catch (error) {
                console.log(error);
            }
        },
        async albumDetails(albumId) {
            try {
                let { data } = await axios({
                    url: `${server}users/${albumId}`,
                })
                this.dataDetails = data
            } catch (error) {
                console.log(error);
            }
        },
        async fetchFavorites() {
            try {
                let { data } = await axios({
                    url: `${server}favorites`,
                    headers: { access_token: localStorage.access_token }
                })
                this.favoriteList = data
            } catch (error) {
                console.log(error);
            }
        },
        async fetchCarts() {
            try {
                let { data } = await axios({
                    url: `${server}carts`,
                    headers: { access_token: localStorage.access_token }
                })
                this.cartList = data
            } catch (error) {
                console.log(error);
            }
        },
        async addFavorite(albumId) {
            try {
                await axios({
                    method: 'POST',
                    url: `${server}favorites/${albumId}`,
                    headers: { access_token: localStorage.getItem('access_token') }
                })
                Swal.fire(
                    'Good job!',
                    'Successfully added to Favorites page!',
                    'success'
                )
            } catch (error) {
                console.log(error);
            }
        },
        async addCart(albumId) {
            try {
                await axios({
                    method: 'POST',
                    url: `${server}carts/${albumId}`,
                    headers: { access_token: localStorage.getItem('access_token') }
                })
                Swal.fire(
                    'Good job!',
                    'Successfully added to Cart page!',
                    'success'
                )
            } catch (error) {
                console.log(error)
            }
        },
        async destroyFavorite(albumId) {
            try {
                let data = await axios({
                    method: 'DELETE',
                    url: `${server}favorites/${albumId}`,
                    headers: { access_token: localStorage.getItem('access_token') }
                })
            } catch (error) {
                console.log(error);
            }
        },
        async googleLogin(credentials) {
            console.log('login', credentials);
            try {
                const { data } = await axios({
                    url: `${server}users/google`,
                    method: 'POST',
                    headers: { google_token: credentials.credential }
                })
                localStorage.setItem('access_token', data.access_token)
                this.isLogin = true
                this.router.push('/')
            } catch (error) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: error.response.data,
                    footer: '<a href="">Why do I have this issue?</a>'
                })
            }
        },
        async buyNow() {
            try {
                const { data } = await axios({
                    url: `${server}users/midtrans`,
                    method: 'POST',
                    headers: { access_token: localStorage.access_token }
                })
                window.snap.pay(data.token, {
                    onSuccess: function (result) {
                        /* You may add your own implementation here */
                        alert("payment success!"); console.log(result);
                    }
                })
            } catch (error) {
                console.log(error);
            }
        },
        async contactUs(form) {
            try {
                await axios({
                    url: `${server}contacts`,
                    method: 'POST',
                    data: form
                })
                Swal.fire(
                    'Good job!',
                    'The account on Album Musik has been created successfully!',
                    'success'
                )
            } catch (error) {
                console.log(error);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: error.response.data[0].message,
                    footer: '<a href="">Why do I have this issue?</a>'
                })
            }
        }
    }
})
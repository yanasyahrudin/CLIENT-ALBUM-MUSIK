<script>
import { mapActions, mapState } from 'pinia';
import { useAppStore } from '../stores';
import AlbumList from '../components/AlbumList.vue';


export default {
    components: {
        AlbumList
    },
    computed: {
        ...mapState(useAppStore, ['cartList'])
    },
    methods: {
        ...mapActions(useAppStore, ['fetchCarts'])
    },
    rupiah(number) {
        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR"
        }).format(number)
    },
    created() {
        this.fetchCarts()
    }
}
</script>

<template>
    <!-- Cart Items -->
    <section class="py-5">
        <div class="container">
            <h2 class="mb-4">Cart Items</h2>
            <div class="row">
                <div class="col-md-8">
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Album</th>
                                <th scope="col">Price</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <AlbumList v-for="album in cartList" :key="album.id" :album="album" :page="'carts'" />
                        </tbody>
                    </table>
                </div>
                <div class="col-md-4">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Cart Total</h5>
                            <p class="card-text">
                                Subtotal: $45 <br>
                                Tax: $5 <br>
                                Total: $50
                            </p>
                            <a href="#" class="btn btn-dark">Proceed to Checkout</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style></style>
<script>
import { mapActions, mapWritableState } from 'pinia';
import { useAppStore } from '../stores';


export default {
    name: 'Pagination',
    data() {
        return {
            currentPage: 1
        }
    },
    computed: {
        ...mapWritableState(useAppStore, ['activePage']),
    },
    methods: {
        ...mapActions(useAppStore, ['doPagination']),
        paginationAlbum(page) {
            this.doPagination(page),
                this.currentPage = page
        }
    }
}
</script>

<template>
    <!-- Pagination -->
    <nav>
        <ul class="pagination justify-content-center">
            <li class="page-item">
                <a class="page-link text-dark" @click.prevent="paginationAlbum(currentPage - 1)" href="#"
                    aria-label="Previous">
                    <span class="sr-only">Previous</span>
                </a>
            </li>
            <li v-for="(page, i) in 5" :key="i" class="page-item"><a @click.prevent="paginationAlbum(i)"
                    class="page-link text-dark" href="#">{{ i + 1 }}</a>
            </li>
            <li class="page-item">
                <a class="page-link text-dark" @click.prevent="paginationAlbum(currentPage + 1)" href="#" aria-label="Next">

                    <span class="sr-only">Next</span>
                </a>
            </li>
        </ul>
    </nav>
</template>

<style></style>
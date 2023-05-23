<script>
import { mapActions, mapState } from 'pinia';
import { useAppStore } from '../stores';
import AlbumCard from '../components/AlbumCard.vue';
import Filter from '../components/Filter.vue';
import Pagination from '../components/Pagination.vue';

export default {
  methods: {
    ...mapActions(useAppStore, ['fetchAlbums', 'fetchGenres'])
  },
  components: {
    AlbumCard, Filter, Pagination
  },
  computed: {
    ...mapState(useAppStore, ['albumList'])
  },
  created() {
    this.fetchAlbums()
    this.fetchGenres()
  }
}
</script>


<template>
  <div class="container mt-5 mb-5">
    <h1>ALBUM LIST</h1>
    <div class="row mt-5">
      <Filter />
      <div class="col-md-9">
        <!-- Cards -->
        <div class="row">
          <AlbumCard v-for="album in albumList" :key="album.id" :album="album" :page="'home'" />
        </div>
        <Pagination />
      </div>
    </div>
  </div>
</template>

<style>
h1 {
  animation: blink 3s infinite;
  font-size: medium;
}

@keyframes blink {
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}


nav ul.pagination {
  margin: 20px 0;
}

nav ul.pagination li {
  display: inline-block;
  margin-right: 5px;
}

nav ul.pagination li a {
  color: #212529;
  display: block;
  padding: 5px 10px;
  text-align: center;
  text-decoration: none;
  transition: background-color 0.3s ease-in-out;
}

nav ul.pagination li a:hover {
  background-color: #f8f9fa;
}

nav ul.pagination li.active a {
  background-color: #007bff;
  color: #fff;
}

nav ul.pagination li.disabled a {
  color: #6c757d;
  pointer-events: none;
}

nav ul.pagination li:first-child a,
nav ul.pagination li:last-child a {
  padding: 5px;
}

nav ul.pagination li:first-child a:hover,
nav ul.pagination li:last-child a:hover {
  background-color: transparent;
}

nav ul.pagination li:first-child a::before {
  content: "\00ab";
  margin-right: 5px;
}

nav ul.pagination li:last-child a::after {
  content: "\00bb";
  margin-left: 5px;
}
</style>
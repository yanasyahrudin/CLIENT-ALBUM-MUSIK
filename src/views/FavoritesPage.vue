<script>
import { mapActions, mapState } from 'pinia';
import AlbumCard from '../components/AlbumCard.vue';
import { useAppStore } from '../stores';

export default {
  components: {
    AlbumCard
  },
  computed: {
    ...mapState(useAppStore, ['favoriteList'])
  },
  methods: {
    ...mapActions(useAppStore, ['fetchFavorites'])
  },
  created() {
    this.fetchFavorites()
  }
}
</script>

<template>
  <div class="container mt-5 mb-5">
    <h1>FAVORITE LIST</h1>
    <div class="row mt-5">
      <div class="col-md-9" style="margin: 0 auto;">
        <!-- Cards -->
        <div class="row">
          <AlbumCard v-for="album in favoriteList" :key="album.id" :album="album" :page="'favorites'" />
        </div>
      </div>
    </div>
  </div>

</template>


<style>

</style>
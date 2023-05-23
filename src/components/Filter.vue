<script>
import { mapActions, mapState } from 'pinia';
import { useAppStore } from '../stores';


export default {
  name: 'Filter',
  data() {
    return {
      genreId: ''
    }
  },
  computed: {
    ...mapState(useAppStore, ['genreList'])
  },
  methods: {
    ...mapActions(useAppStore, ['doFilter']),
    filterGenre() {
      this.doFilter(this.genreId)
    }
  }
}
</script>

<template>
  <div class="col-md-3 mb-3">
    <!-- Filter -->
    <h5>Filter:</h5>
    <div class="form-group">
      <label for="category">Genre:</label>
      <select v-model="genreId" @change="filterGenre()" class="form-control" id="category">
        <option value="">All</option>
        <option :value="genreItem.id" v-for="genreItem, index in genreList" :key="genreItem.id">
          {{ genreItem.name }}</option>
      </select>
    </div>
  </div>
</template>


<style>
/* Style untuk kolom filter */
.col-md-3 {
  background-color: #f8f9fa;
  padding: 20px;
  border-radius: 10px;
}

/* Style untuk judul filter */
h5 {
  font-size: 1.5rem;
  margin-bottom: 15px;
}

/* Style untuk label filter */
label {
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 5px;
}

/* Style untuk select filter */
select {
  padding: 10px;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  background-color: #e9ecef;
  color: #212529;
  margin-bottom: 15px;
}

/* Style untuk opsi pada select filter */
option {
  font-size: 1rem;
}

/* Style untuk opsi terpilih pada select filter */
option:checked {
  background-color: #212529;
  color: #fff;
}

/* Style untuk opsi yang dipilih tetapi tidak terpilih pada select filter */
option:focus {
  background-color: #c3e6ff;
  outline: none;
}

/* Style untuk opsi pada select filter saat dihover */
option:hover {
  background-color: #c3e6ff;
}
</style>


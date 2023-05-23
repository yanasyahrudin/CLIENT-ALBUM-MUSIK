<script>
import { mapWritableState } from 'pinia';
import { useAppStore } from '../stores';

export default {
    name: 'AlbumList',
    data() {
        return {
            title: '',
            price: '',
        }
    },
    props: ['album', 'page'],
    computed: {
        ...mapWritableState(useAppStore, [])
    },
    created() {
        this.title = this.album.Album.title
        this.price = this.album.Album.price
    }
}
</script>

<template>
    <tr>
        <td>{{ title }}</td>
        <td>{{ price }}</td>
        <td>
            <input type="number" class="form-control" value="1">
        </td>
        <td>$20</td>
    </tr>
</template>
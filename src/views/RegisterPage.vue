<script>
import { mapActions } from 'pinia';
import { useAppStore } from '../stores';

export default {
    data() {
        return {
            registerForm: {
                username: '',
                email: '',
                password: ''
            }
        }
    },
    methods: {
        ...mapActions(useAppStore, ['doRegister']),
        handleRegister() {
            this.doRegister(this.registerForm)
                .then((response) => {
                    this.$router.push('login')
                })
                .catch((error) => {
                    console.log(error);
                })
        }
    }
}
</script>

<template>
    <body>
        <div class="login-container">
            <img src="/src/assets/images/logo.png" alt="Logo" width="150" height="150" @click.prevent="$router.push('/')"/> <!-- Tambahkan path gambar di sini -->
            <h1>Create your account now</h1>
            <form @submit.prevent="handleRegister">
                <input v-model="registerForm.username" type="text" placeholder="Username" required>
                <input v-model="registerForm.email" type="text" placeholder="Email" required>
                <input v-model="registerForm.password" type="password" placeholder="Password" required>
                <input type="submit" value="Register">
            </form>
            <p>Already have an account? <a href="login">Login here</a></p>
        </div>
    </body>
</template>

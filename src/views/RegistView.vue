<template>

    <div class="contenidor">
        <h2 class="text-white">Registro:</h2>
        <b-form class="text-white" @submit.prevent="register">
            <b-input v-model="usuario" class="m-3" type="text" placeholder="Usuario"></b-input>
            <b-input v-model="contrasena" class="m-3" type="password" placeholder="Contraseña"></b-input>
            <b-button class="m-3" type="submit" value="Acceder">Registrar</b-button>
        </b-form>
    </div>

</template>
<script>
 import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default {
    name: 'RegistView',
    data() {
        return {
            usuario: '',
            contrasena: ''
        }
    },
    methods: {
        register() {
            const auth = getAuth();
            createUserWithEmailAndPassword(auth, this.usuario, this.contrasena)
                .then((userCredential) => {
                    // Signed in
                    const user = userCredential.user;
                    alert('usuari creat'),
                    this.$router.replace('ListStarships')

                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // ..
                });
        }
    }
}
</script>

<style scoped>
.contenidor {
    margin-top: 40vh;
}

div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

}

form>* {
    display: block;
    border:solid yellow 3px;

}
</style>
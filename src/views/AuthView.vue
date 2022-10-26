<template>

    <div class="contenidor">
        <h2 class="text-white">Login:</h2>
        <b-form class="text-white" @submit.prevent="login">
            <b-input v-model="usuario" class="m-3" type="text" placeholder="Usuario"></b-input>
            <b-input v-model="contrasena" class="m-3" type="password" placeholder="Contraseña"></b-input>
            <b-button class="m-3" type="submit" value="Acceder">Acceder</b-button>
            <b-button class="m-3" @click="logout">Logout</b-button>
        </b-form>

    </div>

</template>
<script>
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";




export default {

    data() {
        return {
            usuario: '',
            contrasena: ''
        }
    },
    methods: {
        login() {

            const auth = getAuth();
            signInWithEmailAndPassword(auth, this.usuario, this.contrasena)
                .then((userCredential) => {
                    // Signed in
                    const user = userCredential.user;
                    // ...
                    this.$router.replace('ListStarships')
                   
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                });
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    // User is signed in, see docs for a list of available properties
                    // https://firebase.google.com/docs/reference/js/firebase.User
                    const uid = user.uid;
                    // ...
                } else {
                    // User is signed out
                    // ...
                }
            });
        },
        logout() {

            const auth = getAuth();
            signOut(auth).then(() => {
                // Sign-out successful.
                alert('Sign out')
            }).catch((error) => {
                // An error happened.
            });
        },
        info() {
            const auth = getAuth();
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    // User is signed in, see docs for a list of available properties
                    // https://firebase.google.com/docs/reference/js/firebase.User
                    const uid = user.uid;
                    console.log(uid)
                    // ...
                } else {
                    console.log('User is signed out')
                    // User is signed out
                    // ...
                }
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
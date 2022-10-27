<template>
    <div >
        <b-img rounded fluid :src="imageShips"></b-img>
    </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
    name: 'imageShip',
    computed: {
        ...mapState(['imageShips']),

    },
}
</script>
<style scoped>
.img{
    width: fit-content;
    height: auto;
}

</style>
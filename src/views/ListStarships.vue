<template>
    <div >
        <div class="llista ">
            <div class="col-sm-8 mx-auto  p-3 m-3  bg-dark" v-for="(item, i) in getStarShips.results" :key="i">
                <a class="nav-link  bg-dark text-secondary "
                    @click="setInfoShip(item), imatge(item), showImageShip(item), panell()">
                    <h5 class="bg-dark">{{ item.name }}</h5>
                    <h6 class="bg-dark">{{ item.model }}</h6>
                </a>
            </div>
            <div v-if="getCondition" class="navegacio">
                <button class="btn ml-5 text-white " @click="decreasePage">
                    <b-icon icon="arrow-left" font-scale="2"></b-icon>
                </button>
                <div class="p-4">
                    <a href="#">
                        <b-icon class="text-white" icon="arrow-bar-up" font-scale="2"></b-icon>
                    </a>
                </div>

                <button class="btn text-white" @click="increasePage">
                    <b-icon icon="arrow-right" font-scale="2"></b-icon>
                </button>
            </div>
            <footer>
                <img src="../assets/darthvader.jpg">
            </footer>
        </div>
    </div>
</template>
<script>
import { mapGetters, mapMutations, mapState } from 'vuex';

export default {
    name: 'ListStarships',

    computed: {
        ...mapGetters(['getStarShips', 'getCondition', 'getNumImg']),
        ...mapMutations(['setShips']),
        ...mapState(['numImg'])
    },

    methods: {
        setInfoShip(item) {
            this.$store.state.infoTechShip = item;
            console.log(item)
        },
        increasePage() {
            this.$store.state.page++;
            if (this.$store.state.page > 4) {
                this.$store.state.page = 4
            }
            this.$store.dispatch("GET_STARSHIPS")

        },
        decreasePage() {
            this.$store.state.page--;
            if (this.$store.state.page < 1) {
                this.$store.state.page = 1
            }
            this.$store.dispatch("GET_STARSHIPS")
        },
        imatge(item) {
            this.$store.state.numImg = item.url.split(/\D/g).join(''),
                console.log(this.$store.state.numImg)
        },
        showImageShip: function (item) {
            return this.$store.dispatch("GET_IMAGESHIPS", item)
        },
        panell() {
            this.$router.push("/panell");

        }

    },

}
</script>
<style scoped>

.llista {
    margin-top: 25vh;
    background-image: url(@/assets/stars.jpg);
    background-attachment: fixed;
    background-position: center;
}

.navegacio {
    display: flex;
    align-items: center;
    justify-content: center;
}


img {
    width: 100%;
    height: auto;
}
</style>
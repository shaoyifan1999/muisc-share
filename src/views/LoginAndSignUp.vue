<template>
    <div>
        <img :src="onShowImageUrl" :alt="onShowImageAlt" class="background">
        <Alert></Alert>
        <Login v-on:changeMode="change" v-if="isLogin"></Login>
        <SignUp v-on:changeMode="change" v-if="!isLogin"></SignUp>
    </div>
</template>

<script>
import Login from '@/components/Login.vue';
import SignUp from '@/components/SignUp.vue';
import Alert from "@/components/Alert";
export default {
    name: "LoginAndSignUp.vue",
    components: {
        Alert,
        SignUp,
        Login
    },
    data() {
        return {
            images: [
                {
                    url: require("../assets/welcome_1.jpg"),
                    alt: "英国Beatles乐队"
                },
                {
                    url: require("../assets/welcome_2.jpg"),
                    alt: "香港Beyond乐队"
                },
                {
                    url: require("../assets/welcome_3.jpg"),
                    alt: "美国Guns N' Roses乐队"
                }
            ],
            onShowImageUrl: require("../assets/welcome_3.jpg"),
            onShowImageAlt: "美国Guns N' Roses乐队",
            isLogin: true
        }
    },
    mounted() {
        const self = this;
        this.$nextTick(function () {
            let index = 0;
            setInterval(function () {
                self.onShowImageUrl = self.images[index].url;
                self.onShowImageAlt = self.images[index++].alt;
                index %= self.images.length;
            }, 5000);
        })
    },
    methods: {
        change() {
            this.isLogin = !this.isLogin;
        }
    }
}
</script>


<style scoped>
.background {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 1;
    left: 0;
    top: 0;
    opacity: 1;
}
</style>

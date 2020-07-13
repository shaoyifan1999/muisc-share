<template>
    <div>
        <b-card
                title="登入"
                tag="article"
                class="mb-2 card"
        >
            <b-form @submit="onSubmit">
                <b-form-group
                        label="手机号："
                        label-for="input-1"
                >
                    <b-form-input
                            id="input-1"
                            v-model="phone"
                            required
                            placeholder="请输入注册的手机号"
                    ></b-form-input>
                </b-form-group>
                <b-form-group
                        label="密码："
                        label-for="input-2"
                >
                    <b-form-input
                            id="input-2"
                            v-model="password"
                            required
                            type="password"
                            placeholder="请输入密码"
                    ></b-form-input>
                </b-form-group>
                <b-button type="submit" variant="primary" style="float: left">登录</b-button>
                <b-button @click="onChange" variant="primary" style="float: right">没有账号？</b-button>
            </b-form>
        </b-card>
    </div>
</template>

<script>
import { EventBus } from "@/components/EventBus";
export default {
    name: "Login.vue",
    data() {
        return {
            phone: "",
            password: ""
        }
    },
    methods: {
        onSubmit(e) {
            e.preventDefault();
            const self = this;
            this.$axios({
                method: 'post',
                url: '/login',
                data: {
                    phone: self.phone,
                    password: self.password
                }
            }).then(res => {
                console.log(res);
                if (res.status === 200) {
                    console.log(res.data.err);
                    if (res.data.err !== undefined) {
                        EventBus.$emit('login&signUp', {type: 'danger', content: res.data.err});
                    } else {
                        EventBus.$emit('login&signUp', {type: 'success', content: '登录成功'});
                    }
                }

            });
        },
        onChange() {
            this.$emit("changeMode");
        },

    }
}
</script>

<style scoped>
.card {
    position: absolute;
    width: 40rem; height: 20rem; text-align: left;
    left: 50%;
    top: 50%;
    margin-left: -20rem;
    margin-top: -10rem;
    opacity: 0.9;
    z-index: 10;
}
</style>

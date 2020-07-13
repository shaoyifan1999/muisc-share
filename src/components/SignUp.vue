<template>
    <div>
        <b-card
                title="注册"
                tag="article"
                class="mb-2 card"
        >
            <b-form>
                <b-form-group
                        label="手机号："
                        label-for="input-1"
                >
                    <b-form-input
                            id="input-1"
                            v-model="phone"
                            required
                            placeholder="请输入手机号"
                    ></b-form-input>
                </b-form-group>
                <b-form-group
                        label="密码："
                        label-for="input-2"
                >
                    <b-form-input
                            id="input-2"
                            v-model="password1"
                            required
                            type="password"
                            placeholder="请输入密码"
                    ></b-form-input>
                </b-form-group>
                <b-form-group
                        label="密码确认："
                        label-for="input-3"
                >
                    <b-form-input
                            id="input-3"
                            v-model="password2"
                            required
                            type="password"
                            placeholder="请再次输入密码"
                    ></b-form-input>
                </b-form-group>
                <b-button type="submit" @click="onSubmit" variant="primary" style="float: left">注册</b-button>
                <b-button @click="onChange" variant="primary" style="float: right">已有账号？</b-button>
            </b-form>
        </b-card>
    </div>
</template>

<script>
import { EventBus } from "@/components/EventBus";
    export default {
        name: "SignUp.vue",
        data() {
            return {
                phone: "",
                password1: "",
                password2: ""
            }
        },
        methods: {
            onSubmit(e) {
                e.preventDefault();
                if (this.password1 !== this.password2) {
                    EventBus.$emit('login&signUp', {type: 'warning', content: '两次密码输入不一致'});
                } else {
                    this.post();
                }
            },
            onChange() {
                this.$emit("changeMode");
            },
            post() {
                const self = this;
                this.$axios({
                    method: 'post',
                    url: '/signUp',
                    data: {
                        phone: self.phone,
                        password: self.password1
                    }
                }).then(res => {
                    console.log(res);
                    if (res.status === 200) {
                        console.log(res.data.err);
                        if (res.data.err !== undefined) {
                            EventBus.$emit('login&signUp', {type: 'danger', content: res.data.err});
                        } else {
                            EventBus.$emit('login&signUp', {type: 'success', content: '注册成功'});
                        }
                    }

                });
            }
        }
    }
</script>

<style scoped>
    .card {
        position: absolute;
        width: 40rem; height: 25rem; text-align: left;
        left: 50%;
        top: 50%;
        margin-left: -20rem;
        margin-top: -10rem;
        opacity: 0.9;
        z-index: 10;
    }
</style>

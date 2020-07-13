<template>
    <div class="myAlert">
        <b-alert
                :show="dismissCountDown"
                dismissible
                fade
                :variant="alertType"
                @dismiss-count-down="countDownChanged"
        >
            {{alertContent}}
        </b-alert>
    </div>
</template>

<script>
import { EventBus } from './EventBus.js';
    export default {
        name: "Alert",
        data() {
            return {
                dismissSecs: 2,
                dismissCountDown: 0,
                showDismissibleAlert: false,
                alertType: '',
                alertContent: ''
            }
        },
        methods: {
            countDownChanged(dismissCountDown) {
                this.dismissCountDown = dismissCountDown
            },
            showAlert(param) {
                this.dismissCountDown = this.dismissSecs;
                this.alertContent = param.content;
                this.alertType = param.type;
            },

        },
        mounted() {
            let self = this;
            EventBus.$on('login&signUp', (param) => {
                self.showAlert(param);
            });
        }
    }
</script>

<style scoped>
.myAlert {
    position: absolute;
    width: 40rem;
    z-index: 10;
    left: 50%;
    margin-left: -20rem;
    top: 20%;
}
</style>

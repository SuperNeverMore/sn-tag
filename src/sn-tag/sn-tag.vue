<template>
    <transition :name="openTransition ? '' : 'sn-fade-enter'">
        <span
                class="sn-tag"
        >
            <slot></slot>
            <i class="snfont sn-close"
               v-if="closable" @click="closeCallBack"
            ></i>
        </span>
    </transition>
</template>

<script>
    /* eslint-disable indent */
    export default {
        name: 'SNTag',
        props: {
            openTransition: {
                type: Boolean,
                default: true
            },
            closable: {
                type: Boolean,
                default: false
            },
            clickEvt: {
                type: Function,
                default: ()=>{}
            }
        },
        methods: {
            closeCallBack() {
                this.clickEvt();
            }
        }
    };
</script>

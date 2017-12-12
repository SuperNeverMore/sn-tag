<template>
    <transition :name="openTransition ? '' : 'sn-fade-enter'">
        <span class="sn-tag"
              :class="type ? 'sn-tag--'+type:''"
              @click = "clickFun"
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
            type: {
                type: String,
                default: ''
            },
            closable: {
                type: Boolean,
                default: false
            },
            iconClickEvt: {
                type: Function,
                default: ()=>{}
            },
            tagClickEvt: {
                type: Function,
                default: ()=>{}
            }
        },
        methods: {
            closeCallBack(e) {
                e.stopPropagation();
                e.preventDefault();
                this.iconClickEvt();
            },
            clickFun(e) {
                e.stopPropagation();
                e.preventDefault();
                this.tagClickEvt();
            }
        }
    };
</script>

/**
* Created by wanghongxiang on 2017/12/12.
 */

<template>
    <transition name="sn-loading-fade">
        <div v-show="visible"
                class="sn-loading-mask"
                :class="[customClass, { 'is-fullscreen': fullscreen }]">
            <div class="sn-loading-spinner">
                <svg class="lds-default" width="75" height="75" xmlns="http://www.w3.org/2000/svg"
                     xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"
                     style="background: none;">
                    <circle cx="75" cy="50" fill="undefined" r="3">
                        <animate attributeName="r" values="3;3;5;3;3" times="0;0.1;0.2;0.3;1" dur="1s" repeatCount="indefinite"
                                 begin="-0.917s"></animate>
                        <animate attributeName="fill" values="#ff4c4c;#ff4c4c;#0099e5;#ff4c4c;#ff4c4c" repeatCount="indefinite"
                                 times="0;0.1;0.2;0.3;1" dur="1s" begin="-0.917s"></animate>
                    </circle>
                    <circle cx="71.651" cy="62.5" fill="undefined" r="3.66933">
                        <animate attributeName="r" values="3;3;5;3;3" times="0;0.1;0.2;0.3;1" dur="1s" repeatCount="indefinite"
                                 begin="-0.833s"></animate>
                        <animate attributeName="fill" values="#ff4c4c;#ff4c4c;#0099e5;#ff4c4c;#ff4c4c" repeatCount="indefinite"
                                 times="0;0.1;0.2;0.3;1" dur="1s" begin="-0.833s"></animate>
                    </circle>
                    <circle cx="62.5" cy="71.651" fill="undefined" r="4.33333">
                        <animate attributeName="r" values="3;3;5;3;3" times="0;0.1;0.2;0.3;1" dur="1s" repeatCount="indefinite"
                                 begin="-0.75s"></animate>
                        <animate attributeName="fill" values="#ff4c4c;#ff4c4c;#0099e5;#ff4c4c;#ff4c4c" repeatCount="indefinite"
                                 times="0;0.1;0.2;0.3;1" dur="1s" begin="-0.75s"></animate>
                    </circle>
                    <circle cx="50" cy="75" fill="undefined" r="4.99733">
                        <animate attributeName="r" values="3;3;5;3;3" times="0;0.1;0.2;0.3;1" dur="1s" repeatCount="indefinite"
                                 begin="-0.667s"></animate>
                        <animate attributeName="fill" values="#ff4c4c;#ff4c4c;#0099e5;#ff4c4c;#ff4c4c" repeatCount="indefinite"
                                 times="0;0.1;0.2;0.3;1" dur="1s" begin="-0.667s"></animate>
                    </circle>
                    <circle cx="37.5" cy="71.651" fill="undefined" r="4.33067">
                        <animate attributeName="r" values="3;3;5;3;3" times="0;0.1;0.2;0.3;1" dur="1s" repeatCount="indefinite"
                                 begin="-0.583s"></animate>
                        <animate attributeName="fill" values="#ff4c4c;#ff4c4c;#0099e5;#ff4c4c;#ff4c4c" repeatCount="indefinite"
                                 times="0;0.1;0.2;0.3;1" dur="1s" begin="-0.583s"></animate>
                    </circle>
                    <circle cx="28.349" cy="62.5" fill="undefined" r="3.66667">
                        <animate attributeName="r" values="3;3;5;3;3" times="0;0.1;0.2;0.3;1" dur="1s" repeatCount="indefinite"
                                 begin="-0.5s"></animate>
                        <animate attributeName="fill" values="#ff4c4c;#ff4c4c;#0099e5;#ff4c4c;#ff4c4c" repeatCount="indefinite"
                                 times="0;0.1;0.2;0.3;1" dur="1s" begin="-0.5s"></animate>
                    </circle>
                    <circle cx="25" cy="50" fill="undefined" r="3.00267">
                        <animate attributeName="r" values="3;3;5;3;3" times="0;0.1;0.2;0.3;1" dur="1s" repeatCount="indefinite"
                                 begin="-0.417s"></animate>
                        <animate attributeName="fill" values="#ff4c4c;#ff4c4c;#0099e5;#ff4c4c;#ff4c4c" repeatCount="indefinite"
                                 times="0;0.1;0.2;0.3;1" dur="1s" begin="-0.417s"></animate>
                    </circle>
                    <circle cx="28.349" cy="37.5" fill="undefined" r="3">
                        <animate attributeName="r" values="3;3;5;3;3" times="0;0.1;0.2;0.3;1" dur="1s" repeatCount="indefinite"
                                 begin="-0.333s"></animate>
                        <animate attributeName="fill" values="#ff4c4c;#ff4c4c;#0099e5;#ff4c4c;#ff4c4c" repeatCount="indefinite"
                                 times="0;0.1;0.2;0.3;1" dur="1s" begin="-0.333s"></animate>
                    </circle>
                    <circle cx="37.5" cy="28.349" fill="undefined" r="3">
                        <animate attributeName="r" values="3;3;5;3;3" times="0;0.1;0.2;0.3;1" dur="1s" repeatCount="indefinite"
                                 begin="-0.25s"></animate>
                        <animate attributeName="fill" values="#ff4c4c;#ff4c4c;#0099e5;#ff4c4c;#ff4c4c" repeatCount="indefinite"
                                 times="0;0.1;0.2;0.3;1" dur="1s" begin="-0.25s"></animate>
                    </circle>
                    <circle cx="50" cy="25" fill="undefined" r="3">
                        <animate attributeName="r" values="3;3;5;3;3" times="0;0.1;0.2;0.3;1" dur="1s" repeatCount="indefinite"
                                 begin="-0.167s"></animate>
                        <animate attributeName="fill" values="#ff4c4c;#ff4c4c;#0099e5;#ff4c4c;#ff4c4c" repeatCount="indefinite"
                                 times="0;0.1;0.2;0.3;1" dur="1s" begin="-0.167s"></animate>
                    </circle>
                    <circle cx="62.5" cy="28.349" fill="undefined" r="3">
                        <animate attributeName="r" values="3;3;5;3;3" times="0;0.1;0.2;0.3;1" dur="1s" repeatCount="indefinite"
                                 begin="-0.083s"></animate>
                        <animate attributeName="fill" values="#ff4c4c;#ff4c4c;#0099e5;#ff4c4c;#ff4c4c" repeatCount="indefinite"
                                 times="0;0.1;0.2;0.3;1" dur="1s" begin="-0.083s"></animate>
                    </circle>
                    <circle cx="71.651" cy="37.5" fill="undefined" r="3">
                        <animate attributeName="r" values="3;3;5;3;3" times="0;0.1;0.2;0.3;1" dur="1s" repeatCount="indefinite"
                                 begin="0s"></animate>
                        <animate attributeName="fill" values="#ff4c4c;#ff4c4c;#0099e5;#ff4c4c;#ff4c4c" repeatCount="indefinite"
                                 times="0;0.1;0.2;0.3;1" dur="1s" begin="0s"></animate>
                    </circle>
                </svg>
                <p v-if="text" class="el-loading-text">{{ text }}</p>
            </div>
        </div>
    </transition>
</template>
<script>
    /* eslint-disable indent */
    export default {
      data() {
        return {
          text: 'hello',
          fullscreen: true,
          visible: false,
          customClass: ''
        };
      },
      methods: {
        setText(text) {
          this.text = text;
        }
      }
    };
</script>
<style lang="less" scoped>
    .sn-loading-mask {
        position: absolute;
        z-index: 10000;
        background-color: hsla(0,0%,100%,.9);
        margin: 0;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        transition: opacity .3s;
    }
    .sn-loading-spinner {
        top: 50%;
        margin-top: -21px;
        width: 100%;
        text-align: center;
        position: absolute;
    }
</style>

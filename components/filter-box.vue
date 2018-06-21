<template>
    <div class="transitionBox">
        <div class="default-box">
            <slot>
                <h1>我是顶部的盒子</h1>
            </slot>
        </div>

        <div class="transition-bottom">
            <div class="box" v-tab style="height: 0">
                <slot name="bottom">
                    <p>我是底部的盒子</p>
                    <p>我是底部的盒子</p>
                    <p>我是底部的盒子</p>
                    <p>我是底部的盒子</p>
                    <p>我是底部的盒子</p>
                    <p>我是底部的盒子</p>
                </slot>
            </div>
        </div>

        <div class="tab-wrap">
            <span v-show="!showMore" @click="handleShow(true)">更多选项</span>
            <span v-show="showMore" @click="handleShow(false)">收起选项</span>
        </div>

    </div>
</template>

<script>
    export default {
        name: "transitionBox",
        data() {
            return {
                showMore: false
            }
        },
        directives: {
            tab: {
                update(el,binding,vnode){
                    let isShow = vnode.context.$data.showMore;
                    if(isShow){
                        if(!window.getComputedStyle){
                            return
                        }
                        el.style.height = "auto";
                        let targetHeight = getComputedStyle(el).height;
                        el.style.height = "0px";
                        el.offsetHeight; //触发浏览器重排
                        el.style.height = targetHeight;

                    }
                    else {
                        if(!window.getComputedStyle){
                            return
                        }
                        el.style.height = 0;
                    }
                }
            }
        },
        methods: {
            handleShow(isShow) {
                this.showMore = isShow;
            }
        }
    }
</script>

<style scoped>
    .box {
        transition: height ease .5s;
        overflow: hidden;
    }
</style>
<template>
    <div class="transitionBox">
        <div class="default-box clearfix">
            <slot>
            </slot>
        </div>

        <div class="transition-middle">
            <div class="box clearfix" v-tab style="height: 0">
                <slot name="middle">
                </slot>
            </div>
        </div>
        <slot name="bottom">
            <h3>最底下的内容</h3>
        </slot>

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
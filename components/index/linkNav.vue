<template>
    <div>
        <div class="header-content clearfix">
            <h1 class="logo">
                <nuxt-link to="/" target="_blank">
                    <img src="/imgs/logo.png">
                </nuxt-link>
            </h1>
            <div class="select-city"><span>新城区 <i class="iconfont icon-jiantouxia"></i></span></div>
            <div class="nav clearfix" v-nav>
                        <span class="nav-item">
                            <nuxt-link to="/" target="_blank">首页</nuxt-link>
                        </span>
                <span class="nav-item">
                            <a href="secondHandHousingList.html" target="_blank">二手房</a>
                        </span>
                <span class="nav-item">
                            <a href="newHouseIndex.html" target="_blank">新房</a>
                        </span>
                <span class="nav-item">
                            <a href="rentalList.html" target="_blank">租房</a>
                        </span>
                <span class="nav-item">
                            <a href="secondSchoolHomesList.html" target="_blank">学区房</a>
                        </span>
                <span class="nav-item">
                            <a href="residentialQuartersList.html" target="_blank">小区</a>
                        </span>
                <span class="nav-item">
                            <a href="brokerList.html" target="_blank">经纪人</a>
                        </span>
                <span class="nav-item">
                            <a href="encyclopedias.html" target="_blank">百科</a>
                        </span>
                <span class="nav-item spinner" >
                            <a class="toggle" target="_blank" >在线委托</a>
                            <div class="spinner-content">
                                <div>
                                    <a href="homeOwer.html" target="_blank">我是业主</a>
                                </div>
                                <div>
                                    <a href="huntHouse.html" target="_blank">帮我找房</a>
                                </div>
                            </div>
                        </span>
                <span class="nav-item">
                            <a href="tool.html" target="_blank">工具</a>
                        </span>
                <span class="nav-item">
                            <a href="special.html" target="_blank">专题</a>
                        </span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "linkNav",
        directives: {
            nav:{
                inserted(el, binding, vnode){
                    let spans = [...el.children]
                    spans.forEach(item => {
                        if(item.children[0].getAttribute("href") == vnode.context.$route.path){
                            item.classList.add("active")
                        }
                    })
                }
            }
        },
        data() {
            return {
                showSpinnerContent: false
            }
        }
    }
</script>

<style scoped src="~/style/linkNav.scss" lang="scss">

</style>
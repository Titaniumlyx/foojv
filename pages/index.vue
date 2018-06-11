<template>
    <div v-cloak>
        <header>
            <userTop></userTop>
            <linkNav :regionList="region"></linkNav>
        </header>
        <div class="content">
            <div class="banner" v-banner>
                <div v-swiper:mySwiper="swiperOption" style="height: 100%;overflow: hidden;">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide" v-for="banner in banners">
                            <img :src="'http://www.fooju.cn/'+banner.picurl">
                        </div>
                    </div>
                    <div class="swiper-pagination"></div>
                </div>
                <div class="banner-search">
                    <div class="search-tab">
                        <ul class="search-header clearfix">
                            <li :class="{active: selectTab==1}" @click="selectTab=1">找二手房</li>
                            <li :class="{active: selectTab==2}" @click="selectTab=2">找新房</li>
                            <li :class="{active: selectTab==3}" @click="selectTab=3">找租房</li>
                            <li :class="{active: selectTab==4}" @click="selectTab=4">找学区房</li>
                            <li :class="{active: selectTab==5}" @click="selectTab=5">找小区</li>
                        </ul>
                        <ul class="search-inputs">
                            <li class="search-input active">
                                <input type="text" :placeholder="placeText">
                                <span class="search-btn">搜索</span>
                                <span class="map-find" v-if="selectTab<4">
                                    <img src="/imgs/mapSearch.png">
                                    地图找房
                                </span>
                            </li>
                            <li class="search-input"></li>
                            <li class="search-input"></li>
                            <li class="search-input"></li>
                            <li class="search-input"></li>
                        </ul>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from '~/plugins/axios'
    import userTop from '~/components/index/userTop'
    import linkNav from '~/components/index/linkNav'
    import api from '~/api'

    export default {
        async asyncData() {
            let bannerData = await axios.get(api.paramToUrl(api.adLists,{type: 0,position:0}))
            let res = await axios.get(api.regionListCopy)

            return {
                region: res.data.data,
                banners: bannerData.data.data
            }
        },
        head() {
            return {
                title: 'Users'
            }
        },
        directives: {
            "banner": {
                inserted(el) {
                    function setBannerHeight() {
                        let header = document.querySelector("header");
                        let headerHeight = header.offsetHeight;
                        let bodyHeight = document.documentElement.clientHeight || document.body.clientHeight;
                        let bodyWidth = document.documentElement.clientWidth || document.body.clientWidth;
                        let bannerHeight = bodyHeight - headerHeight;
                        let imgs = el.querySelectorAll(".swiper-wrapper img");
                        let bannerRatio = bodyWidth/bannerHeight;

                        el.style.height = bannerHeight + "px";
                        imgs = Array.from(imgs);
                        imgs.forEach(item => {
                            let imgRatio = item.offsetWidth/item.offsetHeight;
                            if(bannerRatio>imgRatio){
                                //banner的宽度比例比img的宽度比例大。
                                item.style.width = bodyWidth + "px";
                                item.style.height = "auto";

                                item.style.marginTop = (bannerHeight-item.offsetHeight)/2 + "px";
                                item.style.marginLeft = "0px";
                            }
                            else {
                                item.style.height = bannerHeight + "px";
                                item.style.width = "auto";
                                item.style.marginLeft = (bodyWidth-item.offsetWidth)/2 + "px";
                                item.style.marginTop = "0px";
                            }

                        })
                    }
                    setBannerHeight()
                   window.addEventListener("resize",setBannerHeight)
                }
            }
        },
        components: {
            userTop,
            linkNav
        },
        data() {
            return {
                swiperOption: {
                    autoplay: true
                },
                selectTab: 1
            }
        },
        mounted() {

        },
        computed: {
            placeText() {
                switch (this.selectTab){
                    case 1: return "输入小区名查找二手房";
                    case 2: return "输入楼盘名进行搜索";
                    case 3: return "输入小区名可以查找出租的房屋";
                    case 4: return "输入小区名搜索学区房";
                    case 5: return "输入小区名搜索小区";
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    header {
        background: #fff;
    }


    .content {
        position: relative;
    }
    .swiper-slide {
        position: relative;
        overflow: hidden;

        img {
            width: 100%;
            margin: 0 auto;
        }
    }
    .banner {
        position: relative;
    }
    .banner::after {
        content: "";
        display: block;
        position: absolute;
        z-index: 998;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,.3);
    }

    .content .banner .banner-search {
        width: 1100px;
        position: absolute;
        bottom: 10px;
        left: 50%;
        margin-left: -550px;
        z-index: 999;
        font-size: 16px;
        color: #fff;
    }
    .banner .banner-search .active {
        font-weight: 700;
    }
    .banner .banner-search .active::after {
        content: "";
        border: 10px solid transparent;
        border-bottom-color: #fff;
        position: absolute;
        bottom: 0;
        left: 50%;
        margin-left: -10px;
    }
    .banner .banner-search .search-header li{
        padding-bottom: 30px;
        position: relative;
        margin-right: 30px;
        float: left;
        cursor: pointer;
    }
    .banner .banner-search .search-inputs {
        li {
            display: none;
        }
        .active {
            display: block;
        }
        input {
            width: 740px;
            height: 60px;
            border-width: 0;
            padding: 0 0 0 10px;
            margin-bottom: 70px;
            border-bottom-left-radius: 3px;
            border-top-left-radius: 3px;
            font-size: 100%;
            outline: none;
        }
        .search-btn {
            border-bottom-right-radius: 3px;
            border-top-right-radius: 3px;
            width: 160px;
            background: #c30d23;
            margin-left: -5px;
            height: 60px;
            display: inline-block;
            vertical-align: top;
            text-align: center;
            line-height: 60px;
            cursor: pointer;
        }
        .map-find {
            float: right;
            width: 180px;
            height: 60px;
            background: #5f1985;
            border-radius: 3px;
            text-align: center;
            line-height: 60px;
            img {
                width: 20px;
                height: 20px;
                vertical-align: middle;
            }
        }
    }
</style>

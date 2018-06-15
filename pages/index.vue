<template>
    <div v-cloak>
        <header>
            <userTop></userTop>
            <linkNav :regionList="region"></linkNav>
        </header>
        <!--banner栏目开始-->
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
                            <li class="search-input" style="display: block">
                                <input type="text" :placeholder="placeText">
                                <span class="search-btn">搜索</span>
                                <span class="map-find" v-if="selectTab<4">
                                    <img src="/imgs/mapSearch.png">
                                    地图找房
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div class="bottom-slider" style="height: 30px">
                        <div class="headline-wrap" style="float: left;">
                            <img src="/imgs/toutiao.png">
                        </div>
                        <div v-swiper:headlineSwiper="headlineOption" style="line-height: 30px;overflow: hidden;float: left;height: 30px;margin-left: 15px;">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide" v-for="item in headlineData">
                                    <p>{{item.title}}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--banner栏目结束-->
        <!--快速链接开始-->
        <div class="quick-link">
            <!--小按钮链接-->
            <ul class="link-wrap clearfix">
                <li>
                    <nuxt-link to="#">
                        <img src="/imgs/store.png" alt="查门店">
                        <h2 class="link-title">查门店</h2>
                        <div>查优质门店</div>
                    </nuxt-link>
                </li>
                <li>
                    <nuxt-link to="#">
                        <img src="/imgs/entrust.png" alt="在线委托">
                        <h2 class="link-title">在线委托</h2>
                        <div>有问题我们帮您</div>
                    </nuxt-link>
                </li>
                <li>
                    <nuxt-link to="#">
                        <img src="/imgs/mapBlue.png" alt="地图找房">
                        <h2 class="link-title">地图找房</h2>
                        <div>地图找房</div>
                    </nuxt-link>
                </li>
                <li>
                    <nuxt-link to="#">
                        <img src="/imgs/encyclopedias.png" alt="福居百科">
                        <h2 class="link-title">福居百科</h2>
                        <div>看百科了解更多</div>
                    </nuxt-link>
                </li>
            </ul>
            <!--小按钮链接结束-->
            <!--大图标链接-->
            <ul class="features clearfix">
                <li v-for="(item,index) in features">
                    <img :src="'/imgs/'+(3-index)+'.png'" :alt="item.title">
                    <div class="desc">
                        {{item.title}}
                    </div>
                </li>
            </ul>
            <!--大图标链接结束-->
        </div>
        <!--快速链接结束-->
        <!--精品新房开始-->
        <div class="new-house main-list">
            <div class="title-top clearfix">
                <h2 class="main-title fll">精品新房</h2>
                <nuxt-link to="#" class="more flr" >
                    更多新房
                    <i class="iconfont icon-mjiantou"></i>
                </nuxt-link>
            </div>
            <p class="main-desc">
                在这里为您寻觅一个新家
            </p>
            <ul class="main-content clearfix">
               <li v-for="(item,index) in productData.new" v-if="index<3">
                   <div class="img-wrap">
                       <img :src="'/origin'+item.pic" >
                   </div>
                   <div class="img-desc-wrap clearfix">
                       <p class="img-desc fll">
                           {{item.title}}
                       </p>
                       <span class="price flr">
                            {{item.average_price}}元/平
                       </span>
                   </div>
               </li>
            </ul>
        </div>
        <!--精品新房结束-->
        <!--二手优品开始-->
        <div class="second-hand main-list">
            <div class="title-top clearfix">
                <h2 class="main-title fll">二手优品</h2>
                <nuxt-link to="#" class="more flr" >
                    更多二手房
                    <i class="iconfont icon-mjiantou"></i>
                </nuxt-link>
            </div>
            <p class="main-desc">
                生活因为宽广，才会不断延伸
            </p>
            <ul class="main-content clearfix">
                <li v-for="(item,index) in productData.used" v-if="index<3">
                    <div class="img-wrap">
                        <img :src="'/origin'+item.pic" alt="">
                    </div>
                    <div class="house-msg">
                        <div class="address">
                            {{item.title}}
                        </div>
                        <div class="area">
                            {{item.bedroom}}室{{item.livingroom}}厅{{item.wc}}卫{{item.built_area}}&nbsp;&nbsp;m²
                        </div>
                    </div>
                    <div class="fll-price">
                        {{item.total_price}}万
                    </div>
                </li>
            </ul>
        </div>
        <!--二手优品结束-->
        <!--广告栏-->
        <div class="ad-banner">
            <img src="/imgs/u764_state0.png" >
        </div>
        <!--广告栏结束-->
        <!--精品租房-->
        <div class="renting-house main-list">
            <div class="title-top clearfix">
                <h2 class="main-title fll">精品租房</h2>
                <nuxt-link to="#" class="more flr" >
                    更多租房
                    <i class="iconfont icon-mjiantou"></i>
                </nuxt-link>
            </div>
            <p class="main-desc">
                与其等待，不如坐享繁华
            </p>
            <ul class="main-content clearfix">
                <li v-for="(item,index) in productData.retal" v-if="index<3">
                    <div class="img-wrap">
                        <img :src="'/origin'+item.pic" alt="">
                    </div>
                    <div class="house-msg">
                        <div class="address">
                            {{item.title}}
                        </div>
                        <div class="area clearfix">
                            <span class="fll">
                                 {{item.bedroom}}室{{item.livingroom}}厅{{item.wc}}卫{{item.built_area}}&nbsp;&nbsp;m²
                            </span>
                            <span class="month-price flr">
                                {{item.rent}}元/月
                            </span>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <!--精品租房结束-->
        <!--友情链接-->
        <friend-link></friend-link>
        <!--友情链接结束-->
    </div>
</template>
<style lang="scss">
    .main-list {
        width: 1100px;
        margin: 40px auto 0;
        .title-top {
            margin-bottom: 20px;

            .main-title {
                color: #333;
                font-size: 30px;
                font-weight: 700;
            }
            .more {
                font-size: 16px;
                color: #999;
            }
        }
        .main-desc {
            font-size: 16px;
            color: #666;
            margin-bottom: 40px;
        }
        .main-content {
            li {
                float: left;
                position: relative;
                margin-right: 37px;

                .img-wrap {
                    width: 342px;
                    height: 277px;
                    overflow: hidden;
                }

                &:last-child {
                    margin-right: 0;
                }
                .img-wrap:hover img {
                    transform: scale(1.1);
                }

                .img-desc-wrap {
                    position: absolute;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    width: 100%;
                    padding: 5px 10px;
                    box-sizing: border-box;
                    z-index: 998;
                    background: rgba(0,0,0, .5);
                    color: #fff;
                    font-size: 16px;
                }

                .house-msg {
                    margin-top: 20px;
                    .address {
                        margin-bottom: 20px;
                        font-size: 16px;
                        color: #333;
                    }
                    .area {
                        font-size: 14px;
                        color: #666;
                    }
                }

                .fll-price {
                    position: absolute;
                    left: 0;
                    top: 10px;
                    z-index: 1000;
                    min-width: 70px;
                    height: 50px;
                    line-height: 50px;
                    padding-left: 10px;
                    padding-right: 20px;
                    background: url('/imgs/pricetag.png') no-repeat;
                    background-size: 100% 100%;
                    font-size: 20px;
                    color: #fff;
                }
                .month-price {
                    color: #c30d23;
                }
            }
        }
        img {
            transition: transform ease 1s;
            cursor: pointer;
            display: block;
            width: 342px;
            height: 277px;
        }
    }
    .ad-banner {
        width: 1100px;
        margin: 40px auto;
        max-height: 150px;
        overflow: hidden;
        img {
            display: block;
            width: 100%;
        }
    }
</style>

<script>
    import axios from '~/plugins/axios'
    import userTop from '~/components/index/userTop'
    import linkNav from '~/components/index/linkNav'
    import friendLink from '~/components/index/friendLink'
    import api from '~/api'

    export default {
        async asyncData() {
            let bannerData = await axios.get(api.paramToUrl(api.adLists,{type: 0,position:0}))
            let res = await axios.get(api.regionListCopy)
            let headlineData = await axios.get(api.paramToUrl(api.encyTop, {page_num: 0,page_size:10}))
            let features = await axios.get(api.linkData)
            let productData = await axios.get(api.paramToUrl(api.productRecommend, {plat: 2,page_num:1,page_size: 3}))

            return {
                region: res.data.data,
                banners: bannerData.data.data,
                headlineData: headlineData.data.datas[0],
                features: features.data.datas,
                productData: productData.data
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
            linkNav,
            friendLink
        },
        data() {
            return {
                swiperOption: {
                    autoplay: true
                },
                selectTab: 1,
                headlineOption: {
                    autoplay: true,
                    direction: 'vertical',
                    loop: true
                }
            }
        },
        mounted() {
            console.log(this.productData)
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

    /*快速链接*/
    .quick-link {
        width: 1100px;
        margin: 0 auto;
        /*小链接*/
        .link-wrap {
            li {
                padding: 40px 0;
                width: 275px;
                box-sizing: border-box;
                float: left;
                text-align: center;

                .link-title {
                    padding: 20px 0 10px;
                    font-size: 20px;
                    font-weight: 400;
                    color: #333;
                }

                div {
                    color: #888;
                    font-size: 14px;
                }
            }
        }

        /*大链接开始*/
        .features {
            li {
                position: relative;
                float: left;
                width: 300px;
                margin-right: 100px;
                img {
                    display: block;
                }
                &:last-child {
                    margin-right: 0;
                }
                .desc {
                    position: absolute;
                    color: #fff;
                    font-size: 24px;
                    width: 220px;
                    top: 140px;
                    left: 50%;
                    transform: translateX(-50%);
                    text-align: center;
                }
            }
        }

    }

</style>

<template>
    <div>
        <header class="secondhand-header">
            <top-links></top-links>
        </header>
        <logoLink></logoLink>
        <div class="breadcrumb-wrap">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/' }">福居网</el-breadcrumb-item>
                <el-breadcrumb-item>二手房</el-breadcrumb-item>
            </el-breadcrumb>
        </div>

        <!--搜索框-->
        <search></search>
        <!--搜索框结束-->

        <!--筛选盒子-->
        <div class="filter-box">
            <filterBox>
                <template>
                    <div class="region clearfix">
                        <!--区域-->
                        <span class="title">
                        区域
                    </span>
                        <el-checkbox-group v-model="formData.r_id" class="fll">
                            <el-checkbox v-for="(item,index) in regionData" :key="index" :label="item.id">
                                {{item.area}}
                            </el-checkbox>
                        </el-checkbox-group>
                        <!--区域-->
                    </div>
                    <div class="price clearfix mt-20">
                        <!--价格选择-->
                        <span class="title">价格</span>
                        <!--价格选择结束-->
                        <el-checkbox-group v-model="formData.total_price">
                            <el-checkbox v-for="item in priceData" :key="item.id" :label="item.id">{{item.title}}</el-checkbox>
                        </el-checkbox-group>
                    </div>
                    <div class="custom-price clearfix mt-20">
                        <span class="title fll">&nbsp;</span>
                        <div class="custom-price-wrap fll">
                            <input type="text" class="min-price" v-model="formData.minPrice">
                            <span class="split">-</span>
                            <input type="text" class="max-price" v-model="formData.maxPrice">
                            <span class="units">万</span>
                            <button class="custom-btn" @click="handleCustom">确定</button>
                        </div>
                    </div>
                    <!--户型-->
                    <div class="house-type mt-20">
                        <span class="title">户型</span>
                        <el-checkbox-group v-model="formData.bedroom">
                            <el-checkbox v-for="item in bedroomData" :key="item.id" :label="item.id">{{item.title}}</el-checkbox>
                        </el-checkbox-group>
                    </div>
                    <!--户型结束-->
                    <div class="type mt-20">
                        <span class="title">类型</span>
                        <el-checkbox-group v-model="formData.type">
                            <el-checkbox v-for="item in typeData"></el-checkbox>
                        </el-checkbox-group>

                    </div>

                </template>
                <template slot="bottom">

                </template>
            </filterBox>
        </div>
        <!--筛选盒子结束-->


        <friendlyLink></friendlyLink>
    </div>
</template>

<style lang="scss" scoped>
    .filter-box {
        .title {
            font-size: 14px;
            color: #333;
            float: left;
            width: 96px;
            font-weight: 400;
        }
        .custom-price-wrap {
            input {
                width: 56px;
                height: 16px;
                color: #999;
                font-size: 14px;
                border: 1px solid #ccc;
                outline: none;
                margin-left: 8px;
            }
            input:first-child {
                margin-left: 0;
            }
            .split,.units {
                margin-left: 8px;
            }
            .custom-btn {
                background: #c30d23;
                color: #fff;
                width: 55px;
                height: 25px;
                font-size: 13px;
                text-align: center;
                line-height: 23px;
                border: none;
                margin-left: 8px;
                outline: none;
            }
        }
    }
</style>


<script>
    import topLinks from '~/components/secondHand/header'
    import friendlyLink from '~/components/index/friendLink'
    import logoLink from '~/components/secondHand/logo-link'
    import filterBox from '~/components/filter-box'
    import search from '~/components/secondHand/search'
    import axios from '~/plugins/axios'
    import api from '~/api'

    export default {
        name: "secondHand",
        head() {
            return {
                title: "福居网二手房"
            }
        },
        async asyncData() {
            let regionData = await axios.get(api.paramToUrl(api.regionLists, {city: "呼和浩特"}))
            return {
                regionData: regionData.data.data
            }
        },
        data() {
            return {
                formData: {
                    r_id: [],
                    total_price: [],
                    bedroom: [],  //户型
                    minPrice: "",
                    maxPrice: "",
                    type: [],
                    decoration: [],
                    built_area: [],
                    minCustom_bulit_area: "",
                    maxCustom_bulit_area: "",

                },
                priceData: [
                    {
                        title: "不限",
                        id: 0
                    },
                    {
                        title: "30万以下",
                        id: 1
                    },
                    {
                        title: "30-40万",
                        id: 2
                    },
                    {
                        title: "40-50万",
                        id: 3
                    },
                    {
                        title: "50万以上",
                        id: 4
                    }
                ],
                bedroomData: [
                    {title: "一室",id: 0},
                    {title: "两室",id: 1},
                    {title: "三室",id: 2},
                    {title: "四室",id: 3},
                    {title: "五室",id: 4}
                ],
                typeData: [
                    {title: '平层',id: 0},
                    {title: '复式',id: 1},
                    {title: '跃层',id: 2}
                ],
                decorationData: [
                    {title: '平层',id: 0},
                    {title: '复式',id: 1},
                    {title: '跃层',id: 2}
                ],
                directionData: [
                    {title: '东',id: 0},
                    {title: '西',id: 1},
                    {title: '南',id: 2},
                    {title: '北',id: 3},
                    {title: '南北',id: 4},
                    {title: '西南',id: 5},
                    {title: '东北',id: 6},
                    {title: '东北',id: 7},
                    {title: '西北',id: 8},
                    {title: '东西',id: 9}
                ],
                built_areaData: [
                    {title: '不限',id: 0},
                    {title: '50平以下',id: 1},
                    {title: '50-70平',id: 2},
                    {title: '70-90平',id: 3},
                    {title: '90以上',id: 4}
                ],
            }
        },
        components: {
            friendlyLink,
            topLinks,
            logoLink,
            filterBox,
            search
        },
        methods: {
            handleCustom() {

            }
        }
    }

</script>

<style lang="scss" scoped>
    header {
        height: 60px;
        background: #f1f1f1;
    }

    .breadcrumb-wrap {
        width: 1100px;
        margin: 20px auto 0;

    }
    .filter-box {
        width: 1100px;
        margin: 30px auto 0;
    }
</style>
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
        margin: 0 auto;
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
            let regionData = await axios.get(api.regionListCopy)

            return {
                regionData: regionData.data
            }
        },
        data() {
            return {
                checkList: []
            }
        },
        components: {
            friendlyLink,
            topLinks,
            logoLink,
            filterBox,
            search
        }
    }

</script>
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
</style>



<script>
    import topLinks from '~/components/secondHand/header'
    import friendlyLink from '~/components/index/friendLink'
    import logoLink from '~/components/secondHand/logo-link'

    export default {
        name: "secondHand",
        head() {
            return {
                title: "福居网二手房"
            }
        },
        components: {
            friendlyLink,
            topLinks,
            logoLink
        }
    }

</script>
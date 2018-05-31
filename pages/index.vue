<template>
    <div>
        <header>
            <userTop></userTop>
            <linkNav></linkNav>
        </header>
    </div>
</template>

<script>
    import axios from '~/plugins/axios'
    import userTop from '~/components/index/userTop'
    import linkNav from '~/components/index/linkNav'

    export default {
        head() {
            return {
                title: 'Users'
            }
        },
        components: {
            userTop,
            linkNav
        }
    }
</script>

<style scoped>
    header {
        background: #fff;
    }
</style>

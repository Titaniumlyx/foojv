<template>
    <div>
        我是主页
    </div>
</template>

<script>
    import axios from '~/plugins/axios'

    export default {
        async asyncData() {
            let {data} = await axios.get('/api/users')
            return {users: data}
        },
        head() {
            return {
                title: 'Users'
            }
        }
    }
</script>

<style scoped>

</style>

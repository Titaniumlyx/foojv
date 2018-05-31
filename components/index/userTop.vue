<template>
    <div class="user-top">
        <span class="login">
            <a href="javascript:;">请登录</a>
        </span>
        <span class="register">
            <a href="javascript:;">立即注册</a>
        </span>
    </div>
</template>

<script>
    export default {
        name: "userTop"
    }
</script>

<style scoped>
.user-top {
    width: 1100px;
    margin: 0 auto;
    text-align: right;
    font-size: 12px;
    color: #333;
    padding: 15px 0 5px;
}
    .user-top .login {
        border-right: 1px solid #333;
    }

    .user-top .login, .user-top .register {
        display: inline-block;
        padding: 0 10px;
    }
</style>
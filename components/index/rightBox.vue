<template>
    <div class="right-box">
        <ul>
            <li>
                <a href="" target="_blank">
                    <i class="iconfont icon-rili"></i>
                    <div class="title">
                        日程
                    </div>
                </a>
            </li>
            <li>
                <a href="" target="_blank">
                    <i class="iconfont icon-shoucang1"></i>
                    <div class="title">
                        关注
                    </div>
                </a>
            </li>
            <li>
                <a href="" target="_blank">
                    <i class="iconfont icon-fangzi"></i>
                    <div class="title">
                        卖房
                    </div>
                </a>
            </li>
            <li>
                <a href="" target="_blank">
                    <i class="iconfont icon-toolsbar"></i>
                    <div class="title">
                        工具
                    </div>
                </a>
            </li>
            <li>
                <a href="" target="_blank">
                    <i class="iconfont icon-z-phone"></i>
                    <div class="title">
                        APP
                    </div>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "rightBox"
    }
</script>

<style scoped lang="scss">
    .right-box {
        position: fixed;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        background: #fff;
        z-index: 1002;

        ul {
            width: 40px;
            text-align: center;

            li {
                .title {
                    font-size: 14px;
                }
            }
        }

        .iconfont {
            font-size: 25px;
        }
    }

</style>
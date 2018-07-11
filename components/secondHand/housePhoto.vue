<template>
    <div class="house-photo">
        <h2 class="title">房源照片</h2>
        <ul class="img-list clearfix" id="imgList">
            <li v-for="(item,index) in 10">
                <img src="http://www.fooju.cn/fjw/uploads/base64/s_basepic_15312860513167.png" :alt="'Picture' + index">
            </li>
        </ul>
    </div>
</template>

<script>
    import 'viewerjs/src/index.css'
    import Viewer from 'viewerjs'

    export default {
        name: "housePhoto",
        mounted() {
            let options = {
                title: false,
                toolbar: false,
                tooltip: true,
                movable: false,
                rotatable: false,
                zoomable: false,
                scalable: false,
                loading: false,
                navbar: 2
            }
            this.$nextTick(()=> {
                this.viewer = new Viewer(document.querySelector("#imgList"),options)
            })
        }
    }
</script>

<style scoped lang="scss">
.house-photo {
    margin-top: 80px;
    
    .title {
        font-size: 30px;
        color: #333;
    }
    .img-list {
        margin-top: 40px;

        li {
            position: relative;
            margin-top: 20px;
            margin-right: 20px;
            float: left;
            width: 540px;
            height: 405px;
            &:nth-child(even){
                margin-right: 0;
            }
        }
        img {
            display: block;
            width: 540px;
            height: 405px;
        }
    }
}
</style>
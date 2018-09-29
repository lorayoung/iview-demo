<template>
    <Row class="all-row">
        <Col span="18"
             offset="3">
        <Menu mode="horizontal"
              active-name="1">
            <Menu-Item name="1">
                <router-link to="/">首页</router-link>
            </Menu-Item>
            <Menu-item name="2">
                <router-link to="/list">书单</router-link>
            </Menu-item>
            <Menu-item name="3">
                <router-link to="/manager/add">管理图书</router-link>
            </Menu-item>
            <Menu-item name="4">
                <Icon type="ios-cart-outline"></Icon>
                <Badge :count="num"
                       class-name="demo-badge-alone"></Badge>
                <router-link to="/cart">购物车</router-link>
            </Menu-item>
        </Menu>
        <div></div>
        <div>
            <router-view></router-view>
        </div>
        </Col>
    </Row>

</template>
<script>
import {mapGetters} from 'vuex'; 
    export default {
        data() {
            return {

            };
        },
        mounted() {

        },
        beforeDestroy() {

        },
        methods: {

        },
        computed:{
            ...mapGetters({buyBooks:'buyBooks'}),
            num(){
                return this.buyBooks.length
            }
        }
    };
</script>
<style>
.all-row{
    height: 100%;
}
</style>

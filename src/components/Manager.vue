<template>
    <Row class="manage-con">
        <Col span="6">
        <Menu active-name="1">
            <MenuItem name="1">
            <router-link to="/manager/add"
                         class="sub-a"> 添加图书</router-link>
            </MenuItem>
            <MenuItem name="2">
            <router-link to="/manager/update"
                         class="sub-a">修改图书</router-link>
            </MenuItem>
            <MenuItem name="3">
            <router-link to="/manager/delete"
                         class="sub-a">删除图书</router-link>
            </MenuItem>
        </Menu>
        <!-- <Breadcrumb>
        <Breadcrumb-item to="/manager/add">添加图书</Breadcrumb-item>
        <Breadcrumb-item to="/manager/update">修改图书</Breadcrumb-item>
        <Breadcrumb-item to="/manager/delete">删除图书</Breadcrumb-item>
    </Breadcrumb> -->
        <!-- <transition> -->

        </Col>
        <Col span="18">

        <router-view></router-view>
        <!-- </transition> -->

        </Col>
    </Row>
</template>
<script>
export default {
    
}
</script>
<style>
.ivu-col  form{
    padding-top: 30px
}
.sub-a{
    color: #000
}
.router-link-active{
    color: #2d8cf0
}
</style>

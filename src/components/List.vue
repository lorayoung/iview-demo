<template>
    <div class="listContainer">
        <Col span="5"
             offset="1"
             v-for="book in books"
             class="card-style">
        <Card>
            <p slot="title">{{book.bookName}}</p>
            <img :src="book.imgUrl"
                 alt=""
                 class="bookimg">
            <p>售价:{{book.price}}
                <router-link :to="{name:'detail',params:{id:book.id}}">详情</router-link>
            </p>
        </Card>
        </Col>
    </div>
</template>
<script>
import {mapGetters} from 'vuex';
export default {
    name: 'List',
    computed:{
       ...mapGetters({books:'books'})
    },
    
}
</script>
<style>
.bookimg {
    height: 200px;
}
.listContainer {
    padding-top: 30px;
}
.card-style{
    margin-top: 20px;
}
</style>



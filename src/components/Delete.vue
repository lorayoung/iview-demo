<template>
    <div class="listContainer">
        <Col span="5"
             offset="1"
             v-for="(book,index) in books"
             :key="index">
        <Card>
            <p slot="title">{{book.bookName}}</p>
            <img :src="book.imgUrl"
                 alt=""
                 class="bookimg">

            <Button type="error"
                    @click="deleteBook(book.id)">
                <Icon type="close-round"></Icon>
                <span> 删除</span>
            </Button>
        </Card>
        </Col>
    </div>
</template>
<script>
import {mapGetters} from 'vuex';
export default {
    computed:{
        ...mapGetters({books:'books'})
    },
    methods:{
        deleteBook(id){
            this.$store.dispatch("deleteBook",id)
        }
    }
}
</script>
<style>
.bookimg{
    height: 200px;
}
.listContent{
    padding-top:30px; 
}
.del-btn{
    margin-right: 10px;
}
</style>


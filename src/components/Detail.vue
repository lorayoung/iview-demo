<template>
    <div class="listContainer">
        <Col span="5"
             offset="1">
        <Card>
            <p slot="title">{{bookDetail.bookName}}</p>
            <img :src="bookDetail.imgUrl"
                 alt=""
                 class="bookimg">
            <p>售价:{{bookDetail.price}}
                <router-link :to="{name:'detail',params:{id:bookDetail.id}}">详情</router-link>
            </p>
            <Button class="text"
                    type="primary"
                    size="small"
                    @click="buy(bookDetail)">加入购物车</Button>
        </Card>
        </Col>
    </div>
</template>
<script>
import {mapGetters} from 'vuex';
export default {
    computed:{
        ...mapGetters({books:'books'}),
        bookDetail(){
            let bId=this.$route.params.id;
            //find返回对象 filter返回数组
            return this.books.find((item)=>
                item.id==bId
            )
        }
    },
    methods:{
        buy(book){
            this.$store.dispatch('buyBook',book)
        }
    }
}
</script>
<style>
.bookimg {
    height: 200px;
}
.text {
    text-align: center;
}
.listContainer {
    padding-top: 30px;
}
</style>

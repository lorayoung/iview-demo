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
            <p>售价:{{book.price}}</p>
            <Button type="info"
                    @click="openModal(book.id)">
                <span> 修改</span>
            </Button>
        </Card>

        </Col>
        <!-- @on-ok="ok" -->
        <!-- @on-cancel="cancel" -->
        <Modal v-model="model1"
               title="修改图书信息">
            <Form ref="bookForm"
                  :model="bookChoose"
                  :label-width="80"
                  :rules="ruleValidate">
                <FormItem label="书名"
                          prop="bookName">
                    <Input v-model="bookChoose.bookName"></Input>
                </FormItem>
                <FormItem label="价格"
                          prop="price">
                    <Input v-model="bookChoose.price"></Input>
                </FormItem>
                <FormItem label="封面"
                          prop="imgUrl">
                    <Input v-model="bookChoose.imgUrl"></Input>
                </FormItem>
            </Form>
            <div slot="footer">
                <Button type="primary"
                        size="large"
                        @click="ok('bookForm')">确认</Button>
                <Button size="large"
                        @click="cancel">取消</Button>
            </div>
        </Modal>
    </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
    computed:{
        ...mapGetters({books:'books'}),
        
    },
    data(){
        return{
            model1:false,
            bookChoose:{
                bookName:'',
                price:'',
                imgUrl:'',
                id:''
            },
            ruleValidate:{
                bookName:[{required:true,message:'the bookname cannot be empty', trigger: 'blur'}],
                price:[{required:true,message:'the price cannot be empty', trigger: 'blur'}],
            }
        }
    },
    methods:{
        openModal(id){
            this.model1=true;
            let books=this.$store.getters.books;
            this.bookChoose=books.find(item=>{
                return item.id==id
            })
            
        },
        ok(name){
            this.$refs[name].validate((valid)=>{
                if(valid){
                    this.$Message.success("提交成功")
                    this.model1=false;
                    this.$store.dispatch('updateBook',this.bookChoose)
                }else{
                    this.$Message.error("提交失败")
                }
            })

            
        },
        cancel(){
            this.model1=false;
        }
    }
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

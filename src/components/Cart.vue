<template>
    <div class="tab">
        <Table border
               :columns="columns1"
               :data="buybooks"></Table>
        <p class="sum-p">总计{{totalSum}}元</p>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    data(){
        return {
            columns1:[
                {
                    title:'商品',
                    key:'bookName',
                    align:'center'
                },{
                    title:'价格',
                    key:'price',
                    align:'cener'
                },{
                    title:'数量',
                    key:'num',
                    align:'center'
                },
                {
                    title:'合计',
                    key:'sun1',
                    width:150,
                    align:'center',
                    render:(h,params)=>{
                        return h('span',{},(params.row.price*params.row.num))
                    }
                },{
                    title:'操作',
                    key:'action',
                    width:150,
                    align:'center',
                    render:(h,params)=>{
                        return h('Button',{
                            props:{
                                type:'error',
                                size:'small'
                            },
                            on:{
                                click:()=>{
                                    this.removeBook(params.row.id,params.row.num,params.row.price)
                                }
                            }
                        },'删除')
                    }
                }
            ],
            
        }
    },
    computed:{
        ...mapGetters({
            allbooks:'buyBooks'
        }),
        buybooks(){
            return this.allbooks
        },
        // totalSum(){
        //     let allsum=0;
        //    this.allbooks.map(item=>{
        //        allsum+=item.num*item.price;
        //    })
        //    return allsum
        // }
        //一个计算属性，如果没有设置setter，也就是传入的是一个函数。或者传入的对象里没有set属性，当你尝试改变这个计算属性的值时，就会报错
        //Computed property "totalSum" was assigned to but it has no setter
        totalSum:{
            get:function(){
                let allsum=0;
                this.allbooks.map(item=>{
                    allsum+=item.num*item.price;
            })
                return allsum
            },
            set:function(newVal){
                let allsum=newVal
            }
        }
    },
    methods:{
        removeBook(id,num,price){
            this.totalSum=this.totalSum-num*price;
            this.$store.dispatch('cancelBook',id)
        }
    }
}
</script>
<style>
.sum-p{
    margin-top: 20px;
}
</style>


<template>
    <Col span="10">
    <Form ref="formCustom"
          :model="formCustom"
          style=""
          :label-width="80"
          :rules="ruleValidate">
        <FormItem label="书名"
                  prop="bookName">
            <Input v-model="formCustom.bookName"></Input>
        </FormItem>
        <FormItem label="价格"
                  prop="price">
            <Input v-model="formCustom.price"
                   number></Input>
        </FormItem>
        <FormItem label="封面"
                  prop="imgUrl">
            <Input v-model="formCustom.imgUrl"></Input>
        </FormItem>
        <FormItem>
            <!-- 此处传参表单内容应加双引号 -->
            <Button type="primary"
                    @click="handleSubmit('formCustom',formCustom)">添加</Button>
            <Button type="ghost"
                    @click="handleReset('formCustom')"
                    style="margin-left:8px">重置</Button>
        </FormItem>
    </Form>
    </Col>
</template>
<script>
export default {
    data(){
        const validatePrice=(rule,value,callback)=>{
            console.log(Number.isInteger(value))
            if(value===""){
                callback(new Error('the price cannot be empty'))
            }
            if(!Number.isInteger(value)){
                callback(new Error('the price should be numeric'))
            }else{
                callback()
            }
        }
        return{
            formCustom:{
                bookName:'',
                price:'',
                imgUrl:'',
                id:''
            },
            ruleValidate:{
                bookName:[{required:true,message:'the bookname cannot be empty', trigger: 'blur'}],
                price:[{validator:validatePrice,trigger: 'blur'}]
            }
        }
    },
        methods:{
            handleSubmit(name,form){
                this.$refs[name].validate((valid)=>{
                    if(valid){
                    this.$Message.success("提交成功")
                    this.$store.dispatch("addBook",form)
                    this.$router.push("/list")
                }else{
                    this.$Message.error("表单验证失败")
                }
                })
                
            },
            handleReset(name){
                //该方法起作用需要给每个formitem加prop
                this.$refs[name].resetFields()
            }
        }
}
</script>


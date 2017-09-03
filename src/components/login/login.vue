<template>
     <div class="login">
       <img src="../../assets/lol.png" alt="">
       <div class="info">
         <div class="register">
           <a class="login_left" ref="login" @click="login" href="javascript:;">
             登陆
           </a>
           <a class="register_right" ref="register" @click="register" href="javascript:;">
             注册
           </a>
         </div> 
        <input class="user" type="text" placeholder="账号" autofocus v-model="user">
        <input  class="user psw" v-model="password" type="password" placeholder="密码">
        <input class="user btn" type="button" value="确认" @click="start">
       </div>
     </div>
</template>
<script>
import { Toast } from 'mint-ui';
import { setCookie,getCookie} from "../../cookie/cookie";
export default {
  data () {
    return {
      selectColor:"#3D74B4",
      user:"",
      password:""
    }
  },
  methods: {
    login(){
      this.$refs.login.style.backgroundColor=this.selectColor;
      this.$refs.register.style.backgroundColor="";
    },
    register(){
      this.$refs.register.style.backgroundColor=this.selectColor;
      this.$refs.login.style.backgroundColor="";
    },
    start(){
      if(this.user && this.password){
           setCookie(this.user,this.password);
           this.$router.push({path: '/startgame'});
      }else{
          Toast("请输入账号和密码");
      }
    }
  },
  mounted(){
     this.$refs.login.style.backgroundColor=this.selectColor;
   },
  created() {
  }
}
</script>
<style scoped>
 .login{
    width:100%;
    height:550px;
    background: url("../../assets/alert.png") no-repeat;
    background-size: 100% 100%;
    margin:0;
    position:absolute;
    top:50%;
    left:50%;
 }
 .login > img{
  width:27%;
  position:absolute;
  top:28%;
  left:37%;
 }
 .login > .info{
   /*background: red;*/
   width:44%;
   height:174px;
   position:absolute;
   left:28%;
   top:40%;
 }
 .register,.user{
    width:100%;
    height:20px;
    border-radius: 10px;
    border:1px solid #fff;
    background:rgba(0,0,0,.5);
    font-size:14px;
    display: flex;
    overflow: hidden;
 }
 .register_right{
  float: right;
  /*width:50%;*/
  flex:1;
  color:#fff;
 }
 .login_left{
  float:left;
  width: 50%;
  color:#fff;
  border-right:1px solid #fff;
 }
 a{
  text-decoration: none;
 }
 .user{
  background:#fff;
  border:none;
  height:24px;
  border-radius: 0;
  margin-top:20px;
  border-radius:6px;
  border:none;
  padding:0 3px;
  outline-color:blue;
  box-sizing:border-box
 }
 .btn{
  background:url("../../assets/btn.png") no-repeat;
  background-size:100% 100%;
  height:33px;
  padding:0 39%;
  font-size: 18px;
  color:#F0F0F0;
  outline: none;
 }
 .psw{
  margin-top:12px;
 }

</style>

<template>
<div class="container">
  <div ref="backWidth" class="hello" id="backImg">
    <div class="box">
      <div class="logo">
          <a @click="active1" ref="myactive1" href="javascript:;" class="wz_left">
        <img src="../assets/wa.png" alt="">
      </a>
        <a @click="active2" ref="myactive2" href="javascript:;" class="yx_right">
          <img src="../assets/lol.png" alt="">
      </a>
      </div>
      <div ref="mycolor" class="district">
          {{active}}
          <p class="triangle" @click="get_list"></p>
        <ul v-show="isShow" class="district_list">
          <li  v-for="(item,index) in datalist" @click="select(index)">{{item}}</li>
        </ul>
     </div>
      <div class="game_pattern">
          <a href="javascript:;" v-for="(item,index) in gamelist" @click="selects(index)" v-html="item"
           ref="index">
         </a>
      </div>
      <div class="addirm_box">
        <a class="affirm" href="javascript:;" @click="affirm">确 认 报 名</a>
      </div>
   </div>
  </div>
    <login class="login" v-if="islogin"></login>
  </div>
</template>
<script>
import login from "./login/login";
import { Toast } from 'mint-ui';
import { setItem,getItem } from "../seetion/sesstion";
export default {
  components:{
    login
  },
  data () {
    return {
      islogin:false, //登陆页面
      hero:false,
      theKing:false,
      isShow:false,
      active:"选区",
      model:"",
      partition:"",
     datalist:[
     "德玛西亚1",
     "德玛西亚2",
     "德玛西亚3",
     "德玛西亚4",
     "德玛西亚1",
     "德玛西亚2",
     "德玛西亚3",
     "德玛西亚4",
     "德玛西亚2",
     "德玛西亚3",
     "德玛西亚4",
     "德玛西亚1",
     "德玛西亚2",
     "德玛西亚3",
     "德玛西亚4",
     "德玛西亚2",
     "德玛西亚3",
     "德玛西亚4",
     "德玛西亚1",
     "德玛西亚2",
     "德玛西亚3",
     "德玛西亚4"
     ],
    gamelist:[
            "个人场<br>6 4 人",
            " 5 v 5<br> 32 队",
            "5 v 5 <br>64 队"
            ],
      color:"rgba(0,0,0,.7)",
      cliWidth:window.innerHeight
    }
  },
  methods: {
    active1(){
        this.$refs.myactive1.style.background=this.color;
        this.$refs.myactive2.style.background="";
        this.yx=false;
        this.wz=true;
      },
     active2(){
          this.$refs.myactive2.style.background=this.color;
          this.wz=false;
          this.yx=true;
          this.$refs.myactive1.style.background="";
     },
     selects(index){
        this.model=index;
       for(var i=0;i<this.$refs.index.length;i++){
          this.$refs.index[i].style.backgroundColor="";
           this.$refs.index[i].style.color="rgba(0,0,0,.5)";
          if(i==index){
            this.$refs.index[i].style.backgroundColor=this.color;
            this.$refs.index[i].style.color="#fff";
          }
       }
    },
    select(index) {
        this.partition=index;
        this.$refs.mycolor.style.color="#000";
        this.$refs.mycolor.style.fontSize="14px";
        this.active=this.datalist[index];
        this.$emit("senddata",index);
        this.isShow=!this.isShow;
   },
   get_list(){
        this.isShow=!this.isShow;
    },
    affirm(){
      if( this.yx ||this.wz){
         if(this.partition||this.partition=="0"){
           if(this.model || this.model=="0"){
                //判断用户是否登陆
                if(getItem()){
                  this.$router.push({path: '/startgame'});
                }else{
                    this.islogin=true;
                    this.$refs.backWidth.style.filter="blur(3px)";
                }
           }else{ 
             Toast("请选择游戏模式");
           }
         }else{
            Toast("请选择游戏分区");
         }
      }else{
        Toast("请选择游戏");
      };
   
    }
    },
    mounted(){
        this.$refs.backWidth.style.height=this.cliWidth+"px";
    },
  created() {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #backImg{
    position: relative;
    background :url("../assets/home.png")center center no-repeat;
    background-size: 100% 100%;
    height:670px;
  }
  .box{
    width:100%;
    /* display: flex; */
    padding:0 30px;
    position: absolute;
    bottom:4%;
    left:0;
    /* overflow: hidden; */
    box-sizing: border-box;
  }
 .yx_right,.wz_left{
  /* flex:1; */
  padding:10px 15px;
  background:#fff;
  border-radius:8%;
  margin-bottom:30px;
   display: block;
   width:30%;
   height:40px;
 }
 .district{
    width:100%;
    height: 30px;
    background:#fff;
    border-radius:10px;
    text-align: left;
    padding-left:5px;
    line-height: 30px;
    color:#c0c0c0;
    position: relative;
  }
  .triangle{
    width:0;
    height: 0;
    border-width:10px;
    border-style:solid;
    position: absolute;
    right: 11px;
    top:-6px;
    border-color: #c0c0c0 transparent  transparent transparent ;
  }
 .district_list{
    width:100%;
    position: absolute;
    top:30px;
    left:0px;
    list-style: none;
    overflow: auto;
    padding:0;
    margin:0;
    color:black;
    background:#fff;
    height:200px;
  }
  .district_list > li{
    padding:3px 6px;
    text-align:left;
    border-top:1px dashed #ccc;
    font-size:14px;
  } 
 .logo{
   overflow: hidden;
 }
 .yx_right{
   float:right;
 }
 .wz_left{
   float:left;
 }
  .box img{
    width:100%;
    height:100%;
  }
 .game_pattern{
   width:100%;
    display: flex;
    margin-top:30px;
  }
  .game_pattern > a{
    width:33.33%;
    margin-left:20px;
    height:80px;
    color:rgba(0,0,0,.5);
    font-size: 18px;
    font-weight: 600;
    background: #fff;
    border-radius: 8px;
    padding-top:5px;
    line-height: 35px;
  }
  .game_pattern > a:first-of-type{
    margin:0;
  }
  a{
    text-decoration: none;
  }
  .addirm_box{
     width:100%;
     margin-top:30px;
  }
  .affirm{
    display: block;
    width:100%;
    height:60px;
    background: url("../assets/qun.png") center center no-repeat;
    background-size: 100% 100%;
    color:#fff;
    font-size: 22px;
    line-height: 60px;
  }
  .login{
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
  }
  .container{
    overflow: hidden;
  }
</style>

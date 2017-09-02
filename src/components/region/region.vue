<template>
  <div  id="app">
      <div ref="mycolor" class="district">
          {{active}}
          <p class="triangle" @click="get_list"></p>
        <ul v-show="isShow" class="district_list">
          <li  v-for="(item,index) in datalist" @click="select(index)">{{item}}</li>
        </ul>
     </div>
    
  </div>
</template>
<script>
export default {
  data () {
    return {
     isShow:false,
     active:"选区",
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
     ]
    }
  },
  methods: {
   select(index) {
    this.$refs.mycolor.style.color="#000";
     this.$refs.mycolor.style.fontSize="14px";
    this.active=this.datalist[index];
    this.$emit("senddata",index);
    this.isShow=!this.isShow;
   },
   get_list(){
        this.isShow=!this.isShow;
    }
  },
  created() {
     
  }
}
</script>

<style scoped>
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
</style>

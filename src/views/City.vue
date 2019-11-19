<template>
  <div id="city">
    <van-nav-bar
      :title="cityname"
      left-text=""
      right-text="切换城市"
      left-arrow
      @click-left="$router.go(-1)"
    />
  </div>
</template>

<script>
import { V1 } from "../assets/js/api";
export default {
  data() {
    return {
      inputVaule: "", // 搜索地址
      cityid: "", // 当前城市id
      cityname: "", // 当前城市名字
      placelist: [], // 搜索城市列表
      placeHistory: [], // 历史搜索记录
      historytitle: true, // 默认显示搜索历史头部，点击搜索后隐藏
      placeNone: false // 搜索无结果，显示提示信息
    };
  },
  mounted() {
    this.cityid = this.$route.params.cityid;
    V1.currentcity(this.cityid).then(res => {
      this.cityname = res.name;
    });
  }
};
</script>

<style lang="less" scoped></style>

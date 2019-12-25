<template>
  <div id="city">
    <van-nav-bar
      :title="cityname"
      left-text=""
      right-text="切换城市"
      left-arrow
      :fixed="true"
      @click-left="$router.go(-1)"
    />
    <van-search
      v-model="inputVaule"
      placeholder="请输入搜索关键词"
      show-action
      shape="round"
      @search="searchPlace"
    >
      <div slot="action" @click="searchPlace">搜索</div>
    </van-search>
    <van-divider v-if="historytitle">搜索记录</van-divider>
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      :error.sync="error"
      error-text="很抱歉！无搜索结果"
    >
      <van-cell
        v-for="(item, index) in placelist"
        v-show="nodata"
        :key="index"
        :title="item.name"
        :label="item.address"
        @click="nextpage(index, item.geohash)"
      />
    </van-list>
  </div>
</template>

<script>
import { v1Api } from "../assets/js/api";
export default {
  data() {
    return {
      inputVaule: "", // 搜索地址
      cityid: "", // 当前城市id
      cityname: "", // 当前城市名字
      placelist: [], // 搜索城市列表
      placeHistory: [], // 历史搜索记录
      historytitle: true, // 默认显示搜索历史头部，点击搜索后隐藏
      placeNone: false, // 搜索无结果，显示提示信息
      error: false,
      loading: false,
      finished: false,
      nodata: true
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.loading = false;
    });
    this.cityid = this.$route.params.cityid;
    //当前城市名
    v1Api.currentcity(this.cityid).then(res => {
      this.cityname = res.name;
    });
    //获取搜索历史记录
    if (localStorage.getItem("placeHistory")) {
      this.placelist = JSON.parse(localStorage.getItem("placeHistory"));
      console.log(this.placelist);
    } else {
      this.placelist = [];
    }
  },
  methods: {
    searchPlace() {
      this.loading = true;
      v1Api.searchplace(this.cityid, this.inputVaule).then(res => {
        this.historytitle = false;
        this.placelist = res;
        if (res.length) {
          this.nodata = true;
          this.error = false;
          this.loading = false;
          this.finished = true;
        } else {
          this.nodata = false;
          this.loading = false;
          this.finished = false;
          this.error = true;
        }
      });
    },
    nextpage(index, geohash) {
      let history = localStorage.getItem("placeHistory");
      let choosePlace = this.placelist[index];
      let checkrepeat = false;
      if (history) {
        this.placeHistory = JSON.parse(history);
        this.placeHistory.forEach(item => {
          if (item.geohash == geohash) {
            checkrepeat = true;
          }
        });
        if (!checkrepeat) {
          this.placeHistory.push(choosePlace);
        }
      } else {
        this.placeHistory.push(choosePlace);
      }
      localStorage.setItem("placeHistory", JSON.stringify(this.placeHistory));
      console.log(geohash);
    }
  }
};
</script>

<style lang="less" scoped></style>

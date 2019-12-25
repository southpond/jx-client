<template>
  <div id="msite">
    <van-nav-bar :z-index="99" :fixed="true">
      <van-icon name="search" slot="left" @click="leftJump" />
      <span slot="title" @click="titleJump">{{ msiteTitle }}</span>
      <span slot="right" @click="rightJump">登录|注册</span>
    </van-nav-bar>
    <van-grid square>
      <van-grid-item
        v-for="value in 8"
        :key="value"
        icon="photo-o"
        text="文字"
      />
    </van-grid>
    <van-list>
      <van-cell-group title="附近商家">
        <shop-list />
      </van-cell-group>
    </van-list>
    <van-tabbar v-model="active">
      <van-tabbar-item name="home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item name="search" icon="search">搜索</van-tabbar-item>
      <van-tabbar-item name="friends" icon="orders-o">订单</van-tabbar-item>
      <van-tabbar-item name="setting" icon="user-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import ShopList from "../components/ShopList";
export default {
  data() {
    return {
      geohash: "", // city页面传递过来的地址geohash
      msiteTitle: "请选择地址...", // msite页面头部标题
      foodTypes: [], // 食品分类列表
      hasGetData: false, //是否已经获取地理位置数据，成功之后再获取商铺列表信息
      imgBaseUrl: "https://fuss10.elemecdn.com", //图片域名地址
      active: "home",
      list: [],
      error: false,
      loading: false
    };
  },
  components: {
    ShopList
  },
  mounted() {},
  methods: {
    leftJump() {
      alert("left");
    },
    titleJump() {
      alert("title");
    },
    rightJump() {
      this.$router.push({ path: "/home" });
    }
  }
};
</script>

<style lang="less" scoped>
#msite {
  .van-card {
    padding: 0;
  }
}
</style>

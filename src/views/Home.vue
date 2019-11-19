<template>
  <div id="home">
    <van-nav-bar title="" :z-index="99" :fixed="true">
      <template v-slot:left>
        饿了么
      </template>
      <template v-slot:right>
        登录 | 注册
      </template>
    </van-nav-bar>
    <nav class="city_nav">
      <van-cell-group title="当前定位城市：">
        <van-cell :to="'/city/' + guessCityid" is-link>
          <template slot="title">
            <b>{{ guessCity }}</b>
          </template>
        </van-cell>
      </van-cell-group>
    </nav>
    <van-cell-group title="热门城市：">
      <van-grid>
        <van-grid-item
          v-for="item in hotcity"
          :key="item.id"
          :text="item.name"
          :to="'/city/' + item.id"
        />
      </van-grid>
    </van-cell-group>
    <van-index-bar :sticky="false" :index-list="sortLetters">
      <template v-for="(value, name, index) in sortCities">
        <van-index-anchor :index="name" :key="index" />
        <van-cell
          v-for="(item, index) in value"
          :title="item.name"
          :key="index"
          :to="'/city/' + item.id"
        />
      </template>
    </van-index-bar>
  </div>
</template>

<script>
import { V1 } from "../assets/js/api";
export default {
  data() {
    return {
      guessCity: "", //当前城市
      guessCityid: "", //当前城市id
      hotcity: [], //热门城市列表
      groupcity: {}, //所有城市列表
      sortCities: {},
      sortLetters: []
    };
  },
  watch: {
    groupcity(newVal) {
      //将获取的数据按照A-Z字母开头排序,获取所有的首字母
      let sortobj = {};
      let sortarr = [];
      for (let i = 65; i <= 90; i++) {
        if (newVal[String.fromCharCode(i)]) {
          sortobj[String.fromCharCode(i)] = newVal[String.fromCharCode(i)];
          sortarr.push(String.fromCharCode(i));
        }
      }
      this.sortCities = sortobj;
      this.sortLetters = sortarr;
    }
  },
  mounted() {
    // 获取当前城市
    V1.cityGuess().then(res => {
      console.log(res);
      this.guessCity = res.name;
      this.guessCityid = res.id;
    });
    //获取热门城市
    V1.hotcity().then(res => {
      this.hotcity = res;
    });
    //获取所有城市
    V1.groupcity().then(res => {
      this.groupcity = res;
      console.log(res);
    });
  }
};
</script>

<style lang="less" scoped>
#home {
  .city_nav {
    padding-top: 46px;
  }
}
</style>

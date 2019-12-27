<template>
  <div id="shoplist">
    <van-cell>
      <main>
        <aside>
          <img
            class="shop_img"
            src="https://www.runoob.com/try/demo_source/paris.jpg"
            alt=""
          />
        </aside>
        <article>
          <section class="shop_detail_header">
            <h3>我是一个标题</h3>
            <ul class="shop_detail_ul">
              <li>保</li>
              <li>准</li>
              <li>票</li>
            </ul>
          </section>
          <section class="rating_order_num">
            <div class="rating_order_num_left">
              <div class="rating_part">
                <van-rate
                  v-model="value"
                  allow-half
                  void-icon="star"
                  void-color="#eee"
                  size="10px"
                  readonly
                />
                <span class="rating_num">
                  4.7
                </span>
              </div>
              <span class="order_part">月售12单</span>
            </div>
            <section class="rating_order_num_right">
              <span class="delivery_left">aaaaaa</span>
              <span class="delivery_right">准时达</span>
            </section>
          </section>
          <section>
            <p class="fee">
              <span>¥20起送</span>
              <span>/</span>
              <span>配送费约¥5</span>
            </p>
            <p class="distance_time">
              <span>1406.1公里</span>
              <span>/</span>
              <span class="order_time">14小时59分钟</span>
            </p>
          </section>
        </article>
      </main>
    </van-cell>
    <van-cell>
      afasdfasf
    </van-cell>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: 2.5
    };
  }
};
</script>
<style lang="less">
#shoplist {
  .flex_space_between() {
    display: flex;
    justify-content: space-between;
  }
  main {
    display: flex;
    line-height: normal;
    aside {
      width: 70px;
      height: 70px;
      margin-right: 10px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    article {
      flex: auto;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .shop_detail_header {
        .flex_space_between();
        h3 {
          color: #333;
          font-weight: 700;
        }
        .shop_detail_ul {
          display: flex;
          li {
            color: #999;
            font-size: 10px;
            padding: 0 2px;
            margin-left: 2px;
            display: flex;
            align-items: center;
            border: 1px solid #f1f1f1;
          }
        }
      }
      .rating_order_num {
        .flex_space_between();
        font-size: 10px;
        .rating_order_num_left {
          display: flex;
          .rating_part {
            display: flex;
            .rating_num {
              color: #ff6000;
              margin: 0 5px;
            }
          }
          .order_part {
            color: #666;
          }
        }
        .rating_order_num_right {
          display: flex;
          justify-content: flex-end;
          span {
            padding: 0px 2px;
            margin-left: 2px;
            border: 1px solid @blue;
            border-radius: 2px;
          }
          .delivery_left {
            background-color: @blue;
            color: white;
          }
          .delivery_right {
            color: @blue;
          }
        }
      }
    }
  }
}
</style>

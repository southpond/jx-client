import fetch from "../fetch";
export default {
  /* 获取首页默认地址 */
  cityGuess: () => fetch("/api/v1/cities", { type: "guess" }),
  /* 获取首页热门城市 */
  hotcity: () => fetch("/api/v1/cities", { type: "hot" }),
  /* 获取首页所有城市 */
  groupcity: () => fetch("/api/v1/cities", { type: "group" }),
  /* 获取当前所在城市 */
  currentcity: number => fetch("/api/v1/cities/" + number),
  /* 获取验证码 */
  getcaptchas: () => fetch("/api/v1/captchas", {}, "POST"),
  /* 账号密码登录 */
  accountLogin: ({ username, password, captcha_code }) =>
    fetch("/api/v2/login", { username, password, captcha_code }, "POST"),
  /* 搜索地址 */
  searchplace: (city_id, keyword) =>
    fetch("/api/v1/pois", { type: "search", city_id, keyword })
};

import fetch from "../fetch";
export default {
  /* 获取首页默认地址 */
  cityGuess: () => fetch("/v1/cities", { type: "guess" }),
  /* 获取首页热门城市 */
  hotcity: () => fetch("/v1/cities", { type: "hot" }),
  /* 获取首页所有城市 */
  groupcity: () => fetch("/v1/cities", { type: "group" }),
  /* 获取当前所在城市 */
  currentcity: number => fetch("/v1/cities/" + number),
  /* 获取验证码 */
  getcaptchas: () => fetch("http://localhost:9000/v1/captchas", {}, "POST"),
  /* 账号密码登录 */
  accountLogin: ({ username, password, captcha_code }) =>
    fetch(
      "http://localhost:9000/v2/login",
      { username, password, captcha_code },
      "POST"
    )
};

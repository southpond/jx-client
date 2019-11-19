import fetch from "../fetch";
export default {
  /* 账号密码登录 */
  accountLogin: ({ username, password, captcha_code }) =>
    fetch(
      "http://localhost:9000/v2/login",
      { username, password, captcha_code },
      "POST"
    )
};

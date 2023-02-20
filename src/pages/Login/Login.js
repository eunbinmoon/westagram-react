import React from "react";
import "./Login.css";
const Login = () => {
  return (
    <div id="bgBoder">
      <h1 id="westargramLogo">westargram</h1>
      <div className="inputButtonContents">
        <input
          type="text"
          placeholder="전화번호, 사용자 이름 또는 이메일"
          className="id"
        />
        <input type="password" placeholder="비밀번호" className="password" />
        <button className="button">로그인</button>

        <a href="https://www.instagram.com/accounts/password/reset/">
          비밀번호를 잊으셨나요?
        </a>
      </div>
    </div>
  );
};

export default Login;
// const loginId = document.querySelector(".id");
// const loginPw = document.querySelector(".password");
// const loginBtn = document.querySelector(".button");

// document.body.addEventListener("keyup", () => {
//   let idvalue = loginId.value;
//   let pwvalue = loginPw.value;

//   if (idvalue.length >= 1 && pwvalue.length >= 1) {
//     loginBtn.style.backgroundColor = "#1f9dfd";
//   } else {
//     loginBtn.style.backgroundColor = "#acd7f8";
//   }
// });

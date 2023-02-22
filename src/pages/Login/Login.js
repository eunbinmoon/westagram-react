import React from "react";
import { useNavigate } from "react-router-dom";
import "./Login.scss";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="login">
      <div id="bgBoder">
        <h1 id="westargramLogo">westargram</h1>
        <div className="inputButtonContents">
          <input
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            className="id"
          />
          <input type="password" placeholder="비밀번호" className="password" />
          <button className="button" onClick={() => navigate("/main")}>
            로그인
          </button>

          <a href="https://www.instagram.com/accounts/password/reset/">
            비밀번호를 잊으셨나요?
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;

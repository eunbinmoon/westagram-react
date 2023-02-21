import React from "react";
import "./Main.scss";

const Main = () => {
  return (
    <>
      <nav>
        <div className="nav-leftTap">
          <i className="fa-brands fa-instagram"></i>
          <span className="westagramtext">| westagram </span>
        </div>
        <div className="nav-centerTap">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input className="search" placeholder="검색" />
        </div>
        <div className="nav-rightTap">
          <i className="fa-regular fa-compass"></i>
          <i className="fa-regular fa-heart"></i>
          <i className="fa-regular fa-user"></i>
        </div>
      </nav>
      <div className="main">
        <div className="feeds">
          <div className="article">
            <div className="profile">
              <img
                src="/images/profile.jpg"
                alt="프로필"
                className="profilePhoto"
              />
              <span className="daramId">
                &nbsp;&nbsp;<b>172_daram</b>{" "}
              </span>
              <i className="fa-solid fa-ellipsis"></i>
            </div>

            <img
              src="/images/newfeed.jpg"
              alt="게시 사진"
              className="feedPicture"
            />
            <div className="pictureUnderTap">
              <div className="pictureUnderTapLeftSide">
                <button className="likeThisFeed">
                  <i className="fa-regular fa-heart"></i>
                </button>
                <i className="fa-regular fa-comment feedComent"></i>
                <i className="fa-solid fa-arrow-up-from-bracket feedShare"></i>
                <i className="fa-regular fa-heart commentLikeI"></i>
              </div>
              <i className="fa-regular fa-bookmark feedsave"></i>
            </div>
            <div className="howManyLike">
              <img
                src="/images/wecode.jpg"
                alt="프로필"
                className="howManyLikePicture"
              />

              <span>
                <strong>wecode_bootcamp</strong>님 <strong>외 10명</strong>이
                좋아합니다.
              </span>
            </div>
            <span>
              <strong>&nbsp;&nbsp;172_daram</strong>10번 이상 본 나의 띵작...
              <span style={{ color: "rgb(151, 150, 150)" }}>
                &nbsp;&nbsp;더 보기
              </span>
              <br />
              &nbsp;&nbsp;<strong>eunsong_s2</strong> 말모 스타이즈본이즈러브
            </span>
            <br />
            <p className="minBefore" style={{ color: "rgb(151, 150, 150)" }}>
              &nbsp;&nbsp;54분 전
            </p>
          </div>
          <div id="commentpart"></div>
          <input className="comment" type="text" placeholder="댓글 달기..." />
          <button className="commentbutton">
            <strong>게시</strong>
          </button>
        </div>

        <div className="main-right">
          <div className="main-rightMyProfile">
            <img
              src="/images/profile.jpg"
              alt="프로필"
              className="main-rightMyProfileImg"
            />
            <p>
              &nbsp;&nbsp;<strong>172_daram</strong>
            </p>
          </div>
          <div className="friendStory">
            <div className="friendStorytext">
              <p className="storyText" style={{ color: "rgb(151, 150, 150)" }}>
                <b>스토리</b>
              </p>
              <p className="allStoryView">
                <b>모두 보기</b>
              </p>
            </div>

            <div className="main-rightfriendNameTime">
              <img
                src="/images/profile.jpg"
                alt="프로필"
                className="main-rightfriendPic"
              />
              <div className="main-rightfriendNameTimeP">
                <p className="main-rightfriendNameTimeP_1">
                  <b>eun_bin</b>
                </p>
                <p
                  className="main-rightfriendNameTimeP-1"
                  style={{ color: "rgb(151, 150, 150)" }}
                >
                  <b>2시간 전</b>
                </p>
              </div>
            </div>
            <div className="main-rightfriendNameTime">
              <img
                src="/images/profile.jpg"
                alt="프로필"
                className="main-rightfriendPic"
              />
              <div className="main-rightfriendNameTimeP">
                <p className="main-rightfriendNameTimeP_1">
                  <b>eun_bin</b>
                </p>
                <p
                  className="main-rightfriendNameTimeP-1"
                  style={{ color: "rgb(151, 150, 150)" }}
                >
                  <b>2시간 전</b>
                </p>
              </div>
            </div>
            <div className="main-rightfriendNameTime">
              <img
                src="/images/profile.jpg"
                alt="프로필"
                className="main-rightfriendPic"
              />
              <div className="main-rightfriendNameTimeP">
                <p className="main-rightfriendNameTimeP_1">
                  <b>eun_bin</b>
                </p>
                <p
                  className="main-rightfriendNameTimeP-1"
                  style={{ color: "rgb(151, 150, 150)" }}
                >
                  <b>2시간 전</b>
                </p>
              </div>
            </div>
            <div className="main-rightfriendNameTime">
              <img
                src="/images/profile.jpg"
                alt="프로필"
                className="main-rightfriendPic"
              />
              <div className="main-rightfriendNameTimeP">
                <p className="main-rightfriendNameTimeP_1">
                  <b>eun_bin</b>
                </p>
                <p
                  className="main-rightfriendNameTimeP-1"
                  style={{ color: "rgb(151, 150, 150)" }}
                >
                  <b>2시간 전</b>
                </p>
              </div>
            </div>
          </div>
          <div className="recomandFriendAll">
            <div className="recomandFriend">
              <p className="storyText" style={{ color: "rgb(151, 150, 150)" }}>
                <b> 회원님을 위한 추천</b>
              </p>
              <p className="allStoryView">
                <b>모두 보기</b>
              </p>
            </div>

            <div className="main-rightRecomandFriendName">
              <img
                src="/images/profile.jpg"
                alt="프로필"
                className="recomandFriendProfilePic"
              />
              <div main-rightRecomandFriendName_p>
                <p>
                  <b>eun_bin</b>
                </p>
                <p style={{ color: "rgb(151, 150, 150)" }}>
                  <b>mooneunbin님 외 12...</b>
                </p>
              </div>
              <button className="followButton">팔로우</button>
            </div>
            <div className="main-rightRecomandFriendName">
              <img
                src="/images/profile.jpg"
                alt="프로필"
                className="recomandFriendProfilePic"
              />
              <div main-rightRecomandFriendName_p>
                <p>
                  <b>eun_bin</b>
                </p>
                <p style={{ color: "rgb(151, 150, 150)" }}>
                  <b>mooneunbin님 외 12...</b>
                </p>
              </div>
              <button className="followButton">팔로우</button>
            </div>
            <div className="main-rightRecomandFriendName">
              <img
                src="/images/profile.jpg"
                alt="프로필"
                className="recomandFriendProfilePic"
              />
              <div main-rightRecomandFriendName_p>
                <p>
                  <b>eun_bin</b>
                </p>
                <p style={{ color: "rgb(151, 150, 150)" }}>
                  <b>mooneunbin님 외 12...</b>
                </p>
              </div>
              <button class="followButton">팔로우</button>
            </div>
          </div>
          <footer style={{ color: "rgb(151, 150, 150)" }}>
            &nbsp; wnstagram 정보·지원·홍보 센터·API·
            <br />
            &nbsp; &nbsp;&nbsp; 채용정보·개인정보처리방침·약관·
            <br />
            &nbsp;&nbsp; &nbsp; 디렉터리·프로필·해시태그·언어 <br />
            <br />
            &nbsp;&nbsp; &nbsp; ⓒ 2019 WESTAGRAM
          </footer>
        </div>
      </div>
    </>
  );
};

export default Main;
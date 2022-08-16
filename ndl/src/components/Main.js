import styled from "styled-components";

const Main = (props) => {
  return (
    <Container>
      <ShareBox>
        <div>
          <img src="images/user.svg"></img>
          <button>Start a post</button>
        </div>

        <div>
          <button>
            <img src="images/image.png"></img>
            <span>Photo</span>
          </button>

          <button>
            <img src="images/video-camera.png"></img>
            <span>Video</span>
          </button>

          <button>
            <img src="images/event.png"></img>
            <span>Events</span>
          </button>

          <button>
            <img src="images/newspaper.png"></img>
            <span>Article</span>
          </button>
        </div>
      </ShareBox>
      <Article>
        <SharedActor>
          <a>
            <img src="images/user.svg"></img>
            <div>
              <span>Title</span>
              <span>Info</span>
              <span>Date</span>
            </div>
          </a>
          <button>
            <img src="images/ellipsis.svg"></img>
          </button>
        </SharedActor>
        <Description>Description</Description>
        <SharedImg>
          <a>
            <img src="images/sharedimg.jpg"></img>
          </a>
        </SharedImg>
        <SocialCounts>
          <li>
            <button>
              <img src="https://img.icons8.com/ios-filled/20/228BE6/good-quality--v1.png" />
              <img src="https://img.icons8.com/glyph-neue/20/40C057/applause.png" />
              <span>75</span>
            </button>
          </li>
          <li>
            <a>2 comments</a>
          </li>
        </SocialCounts>
        <SocialActions>
          <button>
            <img src="https://img.icons8.com/ios-filled/20/22C3E6/thumb-up--v1.png" />
            <span>Like</span>
          </button>
          <button>
            <img src="https://img.icons8.com/cute-clipart/20/22C3E6/comments.png" />
            <span>Comments</span>
          </button>
          <button>
            <img src="https://img.icons8.com/ios-glyphs/20/22C3E6/forward-arrow.png" />
            <span>Share</span>
          </button>
          <button>
            <img src="https://img.icons8.com/ios-glyphs/20/228BE6/filled-sent.png" />
            <span>Send</span>
          </button>
        </SocialActions>
      </Article>
    </Container>
  );
};
const Container = styled.div`
  grid-area: main;
`;
const CommonCard = styled.div`
  text-align: center;
  position: relative;
  background-color: #fff;
  overflow: hidden;
  border: none;
  box-shadow: 0 0 0 1px rgba(0 0 0 / 15%), 0 0 0 2px rgba(0 0 0 / 20%);
  border-radius: 5px;
  margin-bottom: 8px;
  width: 100%;
`;
const ShareBox = styled(CommonCard)`
  display: flex;
  flex-direction: column;
  color: #958b7b;
  margin: 0 0 8px;
  background: white;
  div {
    button {
      outline: none;
      font-size: 14px;
      line-height: 1.5;
      min-height: 48px;
      background: transparent;
      border-radius: 10px;
      color: rgba(0, 0, 0, 0.6);
      border: none;
      display: flex;
      align-items: center;
      font-weight: 600;
      transition-duration: 167ms;
      padding: 0 12px 0;
      img {
        width: 30px;
      }
      &:hover {
        background-color: rgba(0, 0, 0, 0.05);
      }
    }
    &:first-child {
      display: flex;
      align-items: center;
      padding: 8px 16px 0px 16px;
      img {
        width: 48px;
        border-radius: 50%;
        margin-right: 8px;
      }
      button {
        margin: 4px 0;
        flex-grow: 1;
        border-radius: 35px;
        padding-left: 16px;
        border: 1px solid rgba(0, 0, 0, 0.15);
        text-align: left;
        background-color: white;
      }
    }
    &:nth-child(2) {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      padding: 4px;
      button {
        img {
          margin: 0 4px 0 -2px;
        }
        span {
          color: #70b5f9;
        }
      }
    }
  }
`;
const Article = styled(CommonCard)`
  padding: 0;
  margin: 0 0 8px;
  overflow: visible;
`;
const SharedActor = styled.div`
  padding: 40px;
  padding: 12px 16px 0;
  margin-bottom: 8px;
  align-items: center;
  display: flex;
  flex-wrap: nowrap;
  a {
    margin-right: 12px;
    flex-grow: 1;
    overflow: hidden;
    display: flex;
    text-decoration: none;

    img {
      width: 48px;
      height: 48px;
      border-radius: 5px;
    }
    div {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      flex-basis: 0;
      margin-left: 8px;
      overflow: hidden;
      span {
        text-align: left;
        &:first-child {
          font-size: 14px;
          font-weight: 700;
          color: rgba(0, 0, 0, 1);
        }
        &:nth-child(n + 1) {
          font-size: 12px;
          color: rgba(0, 0, 0, 0.6);
        }
      }
    }
  }
  button {
    position: absolute;
    right: 12px;
    top: 0;
    background: transparent;
    border: none;
    outline: none;
    transition-duration: 167ms;
    img {
      width: 20px;
    }
  }
`;
const Description = styled.div`
  padding: 0 16px;
  overflow: hidden;
  color: rgba(0, 0, 0, 0.9);
  font-size: 14px;
  text-align: left;
`;

const SharedImg = styled.div`
  margin-top: 8px;
  width: 100%;
  display: block;
  position: relative;
  background-color: #f9fafb;
  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
`;
const SocialCounts = styled.ul`
  text-decoration: none;
  list-style: none;
  display: flex;
  background: white;
  align-items: center;
  overflow: auto;
  margin: 0 16px;
  padding: 8px 0;
  border-bottom: 1px solid #e9e5df;
  li {
    margin-right: 5px;
    display: flex;

    font-size: 12px;
    button {
      display: flex;
      align-items: center;
      border: none;
      background: transparent;
    }
  }
`;
const SocialActions = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 4px 8px;
  margin: 0;
  min-height: 40px;
  justify-content: space-around;

  button {
    background-color: transparent;
    border: none;
    text-align: center;
    display: flex;
    padding: 8px;
    transition-duration: 67ms;
    border-radius: 5px;
    span {
      color: #0a66c2;
      margin-left: 5px;
    }
    &:hover {
      background-color: rgba(0, 0, 0, 0.05);
    }
  }
`;

export default Main;

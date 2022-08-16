import styled from "styled-components";

const Rightside = (props) => {
  return (
    <Container>
      <FollowCard>
        <Title>
          <h2>Add to your fleed</h2>
          <img src="images/feed-icon.svg"></img>
        </Title>
        <FeedList>
          <li>
            <a>
              <Avatar />
            </a>
            <div>
              <span>#Linkedin</span>
              <button>Follow</button>
            </div>
          </li>
          <li>
            <a>
              <Avatar />
            </a>
            <div>
              <span>#Video</span>
              <button>Follow</button>
            </div>
          </li>
        </FeedList>
        <Recommendation>
          View all recommendation
          <img src="images/right-icon.svg"></img>
        </Recommendation>
      </FollowCard>
    </Container>
  );
};
const Container = styled.div`
  grid-area: rightside;
`;
const FollowCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 0 0 1px rgba(0 0 0 / 15%), 0 0 0 2px rgba(0 0 0 / 20%);
  border: none;
  position: relative;
`;
const Title = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  width: 95%;
  color: rgba(0, 0, 0, 0.6);
  font-size: 16px;
  margin-top: 5px;
`;
const FeedList = styled.ul`
  list-style-type: none;
  margin-top: 16px;
  li {
    display: flex;
    align-items: center;
    margin: 12px 0;
    position: relative;
    font-size: 14px;
    & > div {
      display: flex;
      flex-direction: column;
    }
    button {
      background-color: transparent;
      color: rgba(0, 0, 0, 0.6);
      box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.6);
      padding: 16px;
      align-items: center;
      border-radius: 15px;
      box-sizing: border-box;
      font-weight: 600;
      display: inline-flex;
      justify-content: center;
      max-height: 32px;
      max-width: 480px;
      text-align: center;
      outline: none;
      transition-duration: 167ms;
      &:hover {
        color: #0a66c2;
        box-shadow: inset 0 0 0 1px #0a66c2;
      }
    }
  }
`;
const Avatar = styled.div`
  background-image: url("images/hashtag.svg");
  height: 50px;
  background-size: contain;
  background-repeat: no-repeat;
  width: 50px;
  margin-right: 8px;
`;
const Recommendation = styled.a`
  display: flex;
  font-size: 14px;
  align-items: center;
  padding: 5px 5px;
  margin: 5px 5px;
  color: #0a66c2;
  img {
    margin-left: 5px;
  }
`;
export default Rightside;

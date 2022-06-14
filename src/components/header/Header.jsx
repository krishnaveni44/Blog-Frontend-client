import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Vens</span>
        <span className="headerTitleLg">Article Writing App</span>
      </div>
      <img
        className="headerImg"
        src="https://employerschoicescreening.com/wp-content/uploads/AdobeStock_235931235-scaled.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt=""
      />
    </div>
  );
}

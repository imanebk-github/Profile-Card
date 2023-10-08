import "./styles.css";

export default function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <Skilllist />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <div>
      <img src="./avatar.jpg" alt="avatar" className="avatar" />
    </div>
  );
}

function Intro() {
  return (
    <div>
      <h1>Imane El bakir</h1>
      <p>
        👋 Hello! I'm Imane El Bakir, a creative professional with a diverse
        journey in the world of design and web development.
      </p>
    </div>
  );
}
function Skilllist() {
  return (
    <div>
      <ul className="skill-list">
        <Skill
          name="HTML+CSS"
          emoji="💪"
          colorBg={{
            backgroundColor: "#901931",
            padding: "7px",
            borderRadius: "5px"
          }}
        />
        <Skill
          name="Javascript"
          emoji="💪"
          colorBg={{
            backgroundColor: "#eacc26",
            padding: "7px",
            borderRadius: "5px"
          }}
        />
        <Skill
          name="Web Design"
          emoji="💪"
          colorBg={{
            backgroundColor: "#73a65d",
            padding: "7px",
            borderRadius: "5px"
          }}
        />
        <Skill
          name="Git and Github"
          emoji="💪"
          colorBg={{
            backgroundColor: "#245ca1",
            padding: "7px",
            borderRadius: "5px"
          }}
        />
        <Skill
          name="Node JS"
          emoji="💪"
          colorBg={{
            backgroundColor: "#efb441",
            padding: "7px",
            borderRadius: "5px"
          }}
        />
        <Skill
          name="Express JS"
          emoji="💪"
          colorBg={{
            backgroundColor: "#eb5271",
            padding: "7px",
            borderRadius: "5px"
          }}
        />
        <Skill
          name="MongoDB"
          emoji="💪"
          colorBg={{
            backgroundColor: "#3b7323",
            padding: "7px",
            borderRadius: "5px"
          }}
        />
      </ul>
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill">
      <li style={props.colorBg}>
        {props.name} {props.emoji}
      </li>
    </div>
  );
}

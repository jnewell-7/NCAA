import teamsData from './CollegeBasketballTeams.json'; // Import JSON as a module
import './App.css';

function Welcome() {
  return (
    <>
      <h1>Welcome to March Madness!</h1>
    </>
  );
}

function Team({
  school,
  name,
  city,
  state,
}: {
  school: string;
  name: string;
  city: string;
  state: string;
}) {
  return (
    <div className="team-card">
      <h2>{school}</h2>
      <h3>{name}</h3>
      <p>
        {city}, {state}
      </p>
    </div>
  );
}

function TeamList() {
  return (
    <div className="team-list">
      {teamsData.teams.map((singleTeam) => (
        <Team key={singleTeam.school} {...singleTeam} />
      ))}
    </div>
  );
}

function App() {
  return (
    <>
      <Welcome />
      <TeamList />
    </>
  );
}

export default App;

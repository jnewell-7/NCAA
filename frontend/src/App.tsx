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
    <div className="bg-white shadow-lg rounded-lg p-4 w-64">
      <h2 className="text-xl font-bold text-center">{school}</h2>
      <h3 className="text-md text-gray-600 text-center">{name}</h3>
      <p className="text-sm text-gray-500 text-center">
        {city}, {state}
      </p>
    </div>
  );
}

function TeamList() {
  return (
    <div className="flex flex-wrap justify-center gap-6 p-6">
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

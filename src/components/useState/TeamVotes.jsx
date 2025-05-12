import { useState } from "react";

export default function TeamVotes() {

    const [countTeamA, setCountA] = useState(0);
    const [countTeamB, setCountB] = useState(0);

    return (
        <>
        
        <h1>Votes</h1>

        <h2>Team A - {countTeamA}</h2>
        <h2>Team B - {countTeamB}</h2>
        <h3>Total Votes - {countTeamA + countTeamB}</h3>

        <p>Vote for Team A: </p><button onClick={() => setCountA(countTeamA + 1)}>+A</button>
        <p>Vote for team B:</p> <button onClick={() => setCountB(countTeamB + 1)}>+B</button>
        
        </>
    )
}
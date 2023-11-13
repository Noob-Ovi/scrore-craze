
import { useContext, useState } from "react";
import Navbar from "../../Navbar/Navbar";
import { Link } from "react-router-dom";
import { authContex } from "../../../AuthProvider/AuthProvider";

const Toss = () => {
    const [tossWonBy, setTossWonBy] = useState(null);
    const [optedTo, setOptedTo] = useState("");
    const {team1,setTeam1,team2,setTeam2} = useContext(authContex)
   
    // const [team1, setTeam1] = useState("");
    // const [team2, setTeam2] = useState("");

    const handlePreMatch = (e) => {
        e.preventDefault();
        console.log("Team 1:", team1);
        console.log("Team 2:", team2);
        console.log("Toss Won By:", tossWonBy);
        console.log("Opted To:", optedTo);
    };

    return (
        <div>
            <Navbar></Navbar>
            <div className=" text-center my-7 ">
                <form onSubmit={handlePreMatch} action="">
                    <h3 className="font-medium">Teams</h3>
                    <div className="flex text-center justify-center my-3">
                        <div>
                            <label>
                                <input
                                    onChange={(e) => setTeam1(e.target.value)}
                                    type="text"
                                    placeholder="Team-1"
                                    className="border-2 border-blue-200 mr-2"
                                    name="team1"
                                />

                            </label>
                        </div>
                        <div>
                            <label>
                                <input
                                    onChange={(e) => setTeam2(e.target.value)}
                                    placeholder="Team-2"
                                    type="text"
                                    className="border-2 border-blue-200"
                                    name="team2"
                                />

                            </label>
                        </div>
                    </div>

                    <div className="my-3">
                        <h3 className="font-medium ">Toss won by:</h3>
                        <label>
                            <input
                                value={team1}
                                checked={tossWonBy === team1}
                                onChange={(e) => setTossWonBy(e.target.value)}
                                type="radio"
                                name="radio-1"
                                className="radio"
                            />
                            <span className="font-medium"> {team1}</span>
                        </label>
                        <label>
                            <input
                                checked={tossWonBy === team2}
                                onChange={(e) => setTossWonBy(e.target.value)}
                                value={team2}
                                type="radio"
                                name="radio-1"
                                className="radio"
                            />
                            <span className="font-medium">{team2}</span>
                        </label>
                    </div>

                    <div className="my-5">
                        <h3 className="font-medium">Opted to:</h3>
                        <label htmlFor="" >
                            <input
                                checked={optedTo === "Bat"}
                                onChange={(e) => setOptedTo(e.target.value)}
                                value="Bat"
                                type="radio"
                                name="radio-2"
                                className="radio"
                            />
                            <span>Bat</span>
                        </label>

                        <label htmlFor="">
                            <input
                                checked={optedTo === "Bowl"}
                                onChange={(e) => setOptedTo(e.target.value)}
                                value="Bowl"
                                type="radio"
                                name="radio-2"
                                className="radio"
                            />
                            <span>Bowl</span>
                        </label>

                    </div>
                    <div className="text-center">
                        <Link to='/opener'>
                            <input type="submit" value='Start Match' className="border-2 p-2 font-medium rounded-md text-white bg-red-500" />
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Toss;

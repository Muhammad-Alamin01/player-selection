import './player.css';
import React, { useState } from 'react';
import fakeData from '../../fakeData.json';
import PlayerDetails from '../PlayerDetails/PlayerDetails';
import AddPlayer from '../AddPlayer.js/AddPlayer';
import SinglePlayerFullInfo from '../SinglePlayerFullInfo/SinglePlayerFullInfo';
import TransferCost from '../TransferCost/TransferCost';

const Player = () => {
    // console.log(fakeData);
    const [player, setPlayer] = useState([]);
    const [playerDetails, setPlayerDetails] = useState([]);

    const selectPlayer = (name) => {
        // console.log(name)

        const newPlayer = [...player, name];
        setPlayer(newPlayer);

    }

    const detailsPlayer = player => {
        // console.log(player);
        setPlayerDetails(player);
    }


    return (
        <div className="row" >
            <div className="row my-5">
                <div className="col-md-5">
                    <AddPlayer player={player} />
                </div>
                <div className="col-md-2 ">
                    <TransferCost player={player} />
                </div>
                <div className="col-md-5 text-center">
                    <SinglePlayerFullInfo playerDetails={playerDetails} />
                </div>
            </div>
            {
                fakeData.map(player => <PlayerDetails key={player.id}
                    player={player}
                    selectPlayer={selectPlayer}
                    detailsPlayer={detailsPlayer}

                />)
            }
        </div>
    );
};

export default Player;
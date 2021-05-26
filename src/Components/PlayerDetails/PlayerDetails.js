import './playerDetails.css';
import React from 'react';

const PlayerDetails = (props) => {
    const { email, first_name, img, present_club, salary } = props.player;
    return (

        <div id="singlePlayer">
            <img id="images" src={img} alt="" />
            <div className="text-center">
                <h3 >{first_name}</h3>
                <strong >Salary Per Year {salary} m&euro;</strong>
                <p style={{ marginBottom: '14px' }}>Present Club: {present_club}</p>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <a href="#details-player"><button onClick={() => { props.detailsPlayer(props.player) }} type="button" className="btn btn-success">Player Details</button></a>
                </div>
                <div className="col-md-6">
                    <div style={{ textAlign: 'right' }}>
                        <a href="#add-player"><button onClick={() => { props.selectPlayer(props.player) }} type="button" className="btn btn-success " >Select Player</button></a>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default PlayerDetails;
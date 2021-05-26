import React from 'react';

const SinglePlayerFullInfo = (props) => {
    const { first_name, email, img, present_club, salary, national_team, position } = props.playerDetails;
    return (
        <div id="details-player">
            <img id="images" src={img} alt="" />
            <div className="text-center">
                <h3 >{first_name}</h3>
                <p>E-mail: {email}</p>
                <strong >Salary Per Year: {salary} m&euro;</strong>
                <p style={{ marginBottom: '14px' }}>Current Club: {present_club}</p>
                <p>Nationality: {national_team}</p>
                <p>Position: {position}</p>
            </div>
        </div>
    );
};

export default SinglePlayerFullInfo;
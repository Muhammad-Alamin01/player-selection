import React from 'react';

const AddPlayer = (props) => {
    // console.log(props)
    const player = props.player;

    let name = '';
    for (let i = 0; i < player.length; i++) {
        const element = player[i];
        // console.log(element)
        name = `${name} ${element.first_name},`;

    }
    return (
        <div className="text-center">
            <h3 id="add-player">Add Player: {name}</h3>
        </div>
    );
};

export default AddPlayer;
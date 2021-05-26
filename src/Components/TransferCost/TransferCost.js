import React from 'react';

const TransferCost = (props) => {
    console.log(props.player[0]);
    const player = props.player;

    let salary = 0;
    for (let i = 0; i < player.length; i++) {
        const element = player[i];
        salary = salary + element.salary;
    }
    return (
        <div>
            <h4>Total Cost: {salary} m&euro; </h4>
        </div>
    );
};

export default TransferCost;
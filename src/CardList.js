import React from 'react';
import Card from './Card';
import './CardList.css';

const CardList = ({ robots }) => {

    // if(true){
    //     throw new Error('NOOOOOO!');
    // }   
    return (
        <div> 
            {
                robots.map((user,i) => {
                    return (
                        <Card 
                            id={robots[i].id} 
                            name={robots[i].name} 
                            email={robots[i].email} 
                        />
                    );

                })
            }
        </div>
    );
}

export default CardList;
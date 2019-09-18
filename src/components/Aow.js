import React, {Component} from 'react';

function Aow(props) {

    const {animalOfWeek} = props;
    return (
        <div>
            {(animalOfWeek !== undefined)
                ? (
                    <div>
                        <div className="headingContainer">
                            <img
                                src="https://res.cloudinary.com/osidekweenyasss/image/upload/v1568734664/grb2.png"
                                className="goldRibbon inline"/>
                            <h2 className="h2override inline">Congrats
                                <b className="aowText">
                                    {animalOfWeek
                                        .name
                                        .toUpperCase()}
                                </b>
                                for being Animal of the Week!</h2>
                        </div>
                        <img
                            className={`homePic ${animalOfWeek.classStyle} ${animalOfWeek.additionalStyle}`}
                            src={animalOfWeek.url}/>
                    </div>
                )
                : <div>Sorry, there is no animal of the week. Check back next week!</div>
            }           
        </div>
    );
}

export default Aow;
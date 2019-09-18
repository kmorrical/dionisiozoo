import React, {Component} from 'react';

function AnimalProfile(props) {

    const {favAnimal, addFavorite, animal} = props;
    
    return (
        <div>
            <div className="row">
                <div className="column">
                    <img className={`animalImg ${animal.classStyle}`} src={animal.url}/>
                </div>
                <div className="column">
                    <h1>{animal.name}</h1>
                    {animal.favorites !== {}
                        ? <div>
                                <h2>Fast Facts</h2>
                                <ol className="textLeft">
                                    {Object
                                        .entries(animal.favorites)
                                        .map(([key, value]) => <li>{key}: {value}</li>)}
                                </ol>
                            </div>
                        : null}
                    <div><input
                        type="checkbox"
                        checked={favAnimal === animal.name}
                        value={animal.name}
                        onChange={addFavorite}/>Animal of the Week</div>
                </div>
            </div>
        </div>
    );

}

export default AnimalProfile;
import React from 'react';

function ProfileCard({ firstName, lastName, picture, gitHub, LinkedIn }) {
    return (
        <div className="flex flex-column">
            <div className="flex flex-row">
                <div className="flex flex-column">
                    <span className="title-3">
                        { firstName } { lastName } <br/>
                    </span>
                    <span>
                    <a href={`${gitHub}`} target="_blank" rel="noreferrer">GitHub</a> { LinkedIn }
                    </span>
                </div>
                <div>
                    <img src={picture} className="photo" alt={`${firstName} ${lastName}`} />
                </div>
            </div>

        </div>
    );
}

export default ProfileCard;

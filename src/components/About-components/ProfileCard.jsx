import React from 'react';

function ProfileCard({ firstName, lastName, picture, gitHub, LinkedIn }) {
    return (
            <span className="flex profile-cards wrap">
                <span className="flex flex-row padding-top form-input">
                    <span className="flex flex-column">
                        <span className="title-2 padding-top">
                            <b>{firstName} {lastName} </b><br />
                        </span>
                        <span>
                            <a href={`${gitHub}`} target="_blank" rel="noreferrer">GitHub</a> {LinkedIn}
                        </span>
                    </span>
                    <span>
                        <img src={picture} className="photo" alt={`${firstName} ${lastName}`} />
                    </span>
                </span>

            </span>

    );
}

export default ProfileCard;

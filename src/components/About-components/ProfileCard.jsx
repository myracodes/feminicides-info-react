import React from 'react';

function ProfileCard({ firstName, lastName, picture, gitHub, LinkedIn }) {
    return (
            <span className="flex wrap">
                <span className="flex padding-top profile-cards flex-column">
                    <span className="flex flex-column">
                        <span className="title-2 padding-top">
                            <b>{firstName} {lastName} </b><br />
                        </span>
                        <span>
                            <a href={`${gitHub}`} target="_blank" rel="noreferrer"><i class="fab fa-github"></i> GitHub </a> {LinkedIn}
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

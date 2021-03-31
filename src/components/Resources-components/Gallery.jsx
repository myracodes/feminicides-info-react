import React, { Component } from 'react';
import apiHandler from './../../api/apiHandler';

export class Gallery extends Component {

    constructor(props) {
        super(props)
    }

    state = {
        events: [],
        pictureIndex: 0,
        imagePath: ""
    };


    componentDidMount() {
        apiHandler
            .allEvents()
            .then(data => this.setState({ events: data, pictureIndex: 0 }))
            .catch(error => console.log(error));
    }

    previousPicture = (event) => {
        console.log(this.state.events[this.state.pictureIndex].commemoration)
        const currentIndex = this.state.pictureIndex === 0
            ? this.state.events.length - 1
            : this.state.pictureIndex - 1;

        console.log("current index: ", currentIndex);
        this.setState({
            pictureIndex: currentIndex,
            imagePath: this.state.events[currentIndex].commemoration
        });
    };

    nextPicture = (event) => {
        const currentIndex = this.state.pictureIndex === this.state.events.length - 1
            ? 0
            : this.state.pictureIndex + 1;
        console.log("current index: ", currentIndex);
        this.setState({
            pictureIndex: currentIndex,
            imagePath: this.state.events[currentIndex].commemoration
        });
    };



    render() {

        if (this.state.events === [] || this.state.events === null) {
            return (
                <div>Merci de patienter pendant le chargement...</div>
            )
        }

        return (
            <div className="flex flex-column">
                <h1 className="title-1">Galerie photo</h1>

                {/* {if (this.state.imagePath === "") {
                    return (
                        <div><img src="https://scontent-cdt1-1.xx.fbcdn.net/v/t1.6435-9/134188995_201395188317135_7367171530112152291_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=1dUd6ZdF9bIAX9n59OY&_nc_ht=scontent-cdt1-1.xx&oh=2504fa9e947ca7a174da7a84bb325d93&oe=60899739" alt="stop-feminicides-collage-amazone"/></div>
                    )
                }} */}
                <div className="gallery flex flex-row gallery-container padding-top">
                    <span>
                        <button onClick={this.previousPicture} className="btn-3">←</button>
                    </span>
                    <span className="flex flex-column">
                        <img src={this.state.imagePath} alt="photo" />
                        <span>
                            Crédit photo : {this.state.imageSource}
                        </span>
                    </span>
                    <span>
                        <button onClick={this.nextPicture} className="btn-3">→</button>
                    </span>

                </div>

            </div>
        )
    }
}

export default Gallery;

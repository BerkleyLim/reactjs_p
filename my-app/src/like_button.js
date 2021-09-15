'use strict';

const e = React.createElement;

class LikeButton extends React.Compenent {
    constructor(props) {
        super(props);
        this.state= {liked: false};
    }

    render() {
        if (this.state.liked) {
            return 'You liked this.';
        }

    return e(
        'button',
        {onClick: () => this.ListeningStateChangedEvent({liked: true}) },
        'Like'
    );
    }
}

const domContainer = document.querySelector("#like_button_container");
ReactDon.render(e(LikeButton), domContainer);

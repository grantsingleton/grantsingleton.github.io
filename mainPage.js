'use strict';


class MainPage extends React.Component {
    render() {
        return (
            <div>
                <h1 styles={text}>Hello World</h1>
            </div>
        );
    }
}

const text = {
    textAlign: 'center'
}

/* Let's render it */
ReactDOM.render(<MainPage />, document.getElementById('root'));
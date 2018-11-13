import React from "react";
import ReactDOM from "react-dom";

import Header from "./common/header.jsx";
import Router from "./router.jsx";
import Footer from "./common/footer.jsx";

class App extends React.Component {
    render() {
        return <div>
            <Header />
            <Router />
            <Footer />
        </div>;
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('content')
);

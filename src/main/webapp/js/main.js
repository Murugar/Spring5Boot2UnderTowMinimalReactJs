
window.addEventListener("load", runReact);

// This function will be called after the page DOM is fully loaded
function runReact() {
    ReactDOM.render(
            React.createElement(HelloWorldBanner), document.getElementById('content')
    );
}

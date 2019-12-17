

export default class App extends Component {
    render() {
        return (
            <Route exact path="/" render={() => (
                <div>
                    <Registration />
                </div>
            )} />
        )
    }
}
ReactDOM.render(
    <Router>
        <App />
    </Router>
    , document.getElementById('root')
);



export default class App extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" render={() => (
                    <div>
                        <Productslist />
                    </div>
                )} />
                {/*<Route exact path="/sth" component={}/>*/}
            </Switch>
        )
    }
}
ReactDOM.render(
    <Router>
        <App />
    </Router>
    , document.getElementById('root')
);
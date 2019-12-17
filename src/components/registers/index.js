

export default class MMD extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" render={() => (
                    <div>
                        <Registerlist />
                    </div>
                )} />
                {/*<Route exact path="/sth" component={}/>*/}
            </Switch>
        );
        
    }
}
ReactDOM.render(
    <Router>
        <MMD />
    </Router>
    , document.getElementById('root')
);


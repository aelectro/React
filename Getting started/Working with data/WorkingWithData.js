const CardList = (props) => {
    return (
        <div>
            {props.cards.map(card => <Card {...card} />)}
        </div>
    );
}

class Form extends Rect.Component {
    state = {userName: ''}
    handleSubmit = (event) => {
        event.preventDefault();
        axios.get(`https:://api.github.com/users/${this.state.userName}`
        .then(resp => {
            this.props.onSubmit(resp.data);
            this.setState({userName: ''});
        }));
    };
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text"
                        value={this.state.userName}
                        onChange={(event) => this.setState({userName: event.target.value})}
                        placeholder="Github username" requierd />
                <button type="submit">Add card</button>
            </form>
        )
    }
}
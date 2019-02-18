class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    fetch('/api/v1/items.json')
      .then(response => response.json())
      .then(data => this.setState({ items: data }));
  }

  handleSubmit(item) {
    console.log(`Item: ${item}`);
    var newState = this.state.items.concat(item);
    this.setState({ items: newState })
  }

  render() {
    return (
      <div>
        <NewItem handleSubmit={this.handleSubmit} />
        <AllItems items={this.state.items}/>
      </div>
    )
  }
}

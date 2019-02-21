class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.removeItemClient = this.removeItemClient.bind(this);
  }

  componentDidMount() {
    const options = {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    };

    fetch('/api/v1/items.json', options)
      .then(response => response.json())
      .then(data => this.setState({ items: data }));
  }

  handleSubmit(item) {
    var newState = this.state.items.concat(item);
    this.setState({ items: newState })
  }

  handleDelete(id) {
    const options = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" }
    };

    fetch(`/api/v1/items/${id}`, options)
    .then(function(response) {
      if(response.ok){
        console.log(`Deletion successful (${id})`);
      } else {
        throw new Error("Delete Failed")
      }
    })
    .then(() => {
      M.toast({html: `Item deleted successfully.`});
      this.removeItemClient(id);
    })
    .catch(function(error) {
      console.log("Delete failed", error);
    });
  }

  removeItemClient(id) {
    var newItems = this.state.items.filter((item) => {
      return item.id != id;
    });

    this.setState({ items: newItems });
  }

  render() {
    return (
      <div>
        <NewItem handleSubmit={this.handleSubmit} />

        {this.state.items.length > 0 &&
          <AllItems
            items={this.state.items}
            handleDelete={this.handleDelete} />
        }
      </div>
    )
  }
}

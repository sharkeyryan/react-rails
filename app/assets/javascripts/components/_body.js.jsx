class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.updateItems = this.updateItems.bind(this);
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

  updateItems(item) {
    var items = this.state.items.filter((i) => {
      return i.id != item.id
    });

    items.push(item);

    this.setState({ items: items });
  }

  handleUpdate(item) {
    const body = {
      item: item
    };

    const options = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    };

    fetch(`/api/v1/items/${item.id}`, options)
      .then(function(response) {
        if(response.ok){
          console.log(`Update successful (${item.id})`);
          return response.json();
        } else {
          throw new Error("Update Failed")
        }
      })
      .then(function(responseBody){
        M.toast({
          html: `<span class="success">${item.name} item updated successfully.</span>`
        });

        return responseBody;
      })
      .then((item) => {
        this.updateItems(item);
      })
      .catch(function(error) {
        console.log("Update failed", error);
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
            handleDelete={this.handleDelete}
            handleUpdate={this.handleUpdate} />
        }
      </div>
    )
  }
}

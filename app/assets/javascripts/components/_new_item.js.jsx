class NewItem extends React.Component {
  constructor(props) {
    super(props);
    this.name = React.createRef();
    this.description = React.createRef();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const body = {
      item: {
        name: this.name.current.value,
        description: this.description.current.value
      }
    };

    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    };

    fetch("/api/v1/items", options)
    .then(function(response) {
      if(response.ok){
        return response.json();
      } else {
        throw new Error("Post Failed")
      }
    })
    .then(function(responseBody){
      return responseBody;
      console.log(JSON.stringify(responseBody));
    }).
    then((item) => {
      this.props.handleSubmit(item);
    })
    .catch(function(error) {
      console.log("Request failed", error);
    });
  }

  render() {
    return (
      <div>
        <div>
          <input
            type="text"
            ref={this.name}
            placeholder="Enter the name of the item"
          />
        </div>

        <div>
          <input
            type="text"
            ref={this.description}
            placeholder="Enter a description"
          />
        </div>

        <div>
          <a
            onClick={this.handleClick}
            className="waves-effect waves-light btn">
            <i class="material-icons left">save</i>Save</a>
        </div>
      </div>
    )
  }
}

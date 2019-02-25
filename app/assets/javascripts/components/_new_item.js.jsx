class NewItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fieldsBlank: false
    };

    this.name = React.createRef();
    this.description = React.createRef();
    this.handleClick = this.handleClick.bind(this);
    this.fieldsBlankValidate = this.fieldsBlankValidate.bind(this);
  }

  handleClick() {
    this.fieldsBlankValidate();

    if (this.state.fieldsBlank) {
      M.toast({
        html: `<span class="error">Error: Input fields cannot be blank.</span>`
      });

      return false;
    }

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
        M.toast({
          html: `<span class="success">${responseBody.name} item created successfully.</span>`
        });

        return responseBody;
      }).
      then((item) => {
        this.props.handleSubmit(item);

        this.name.current.value = "";
        this.description.current.value = "";
      })
      .catch(function(error) {
        console.log("Request failed", error);
      });
  }

  fieldsBlankValidate() {
    if (this.name.current.value == "" || this.description.current.value == "") {
      this.state.fieldsBlank = true;
    } else {
      this.state.fieldsBlank = false;
    }
  }

  render() {
    return (
      <div className="card-panel">
        <div className="row">
          <form className="col s12">
            <div className="row">
              <div className="input-field col s12">
                <i className="material-icons prefix">title</i>
                <input
                  id="icon_prefix"
                  ref={this.name}
                  type="text"
                  className="validate" />
                <label htmlFor="icon_prefix">Enter item name</label>
              </div>

              <div className="input-field col s12">
                <i className="material-icons prefix">subject</i>
                <textarea
                  id="textarea1"
                  ref={this.description}
                  className="materialize-textarea">
                </textarea>
                <label htmlFor="textarea1">Enter item description</label>
              </div>

              <div className="input-field col s12 right-align">
                <a
                  onClick={this.handleClick}
                  className="waves-effect waves-light btn">
                  <i className="material-icons left">add</i>Add Item</a>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

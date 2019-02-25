class Item extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editable: false
    };

    this.handleDelete = this.handleDelete.bind(this);
    this.name = React.createRef();
    this.description = React.createRef();
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleDelete() {
    var id = this.props.item.id;

    this.props.handleDelete(id);
  }

  handleEdit() {
    if(this.state.editable) {
      var id = this.props.item.id;
      var name = this.name.current.value;
      var description = this.description.current.value;
      var item = {id: id , name: name , description: description};

      this.props.handleUpdate(item);
    }

    this.setState({ editable: !this.state.editable })
  }

  render() {
    var name = this.state.editable ? <input type='text' ref={this.name} defaultValue={this.props.item.name} /> : <b>{this.props.item.name}</b>;
    var description = this.state.editable ? <input type='text' ref={this.description} defaultValue={this.props.item.description} />: <p>{this.props.item.description}</p>;

    if(this.state.editable == true) {
      editDelete = <a
        onClick={this.handleEdit}
        title="Edit"
        className="waves-effect waves-light btn">
        <i className="material-icons left">save</i>
        Save
      </a>
    } else {
      editDelete = <a
        onClick={this.handleEdit}
        title="Edit"
        className="waves-effect waves-light btn">
        <i className="material-icons left">edit</i>
        Edit
      </a>
    }

    return (
      <div>
        <div className="valign-wrapper">
          <h4><b>{name}</b></h4>
        </div>

        <div>{description}</div>

        <div className="right-align">
          {editDelete}

          <a
            onClick={this.handleDelete}
            title="Delete"
            className="waves-effect waves-light btn">
            <i className="material-icons left">delete</i>
            Delete
          </a>
        </div>
      </div>
    )
  }
}

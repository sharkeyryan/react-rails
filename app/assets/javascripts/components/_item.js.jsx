class Item extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editable: false
    };
  }

  // componentDidMount() {
  //   $(document).ready(function(){
  //     $('.collapsible').collapsible();
  //   });
  // }

  handleEdit() {
    console.log('edit button clicked')
    this.setState({editable: !this.state.editable})
  }

  render() {
    var name = this.state.editable ? <input type='text' defaultValue={this.props.item.name} /> : <b>{this.props.item.name}</b>;
    var description = this.state.editable ? <input type='text' defaultValue={this.props.item.description} />: <p>{this.props.item.description}</p>;

    return (
      <div>
        <div className="valign-wrapper">
          <b>{name}</b>
          <a
            onClick={this.handleEdit}
            title="Edit"
            className="secondary-content pointer delete-icon">
            <i className="material-icons">edit</i>
          </a>
          <a
            onClick={this.props.handleDelete}
            title="Delete"
            className="secondary-content pointer delete-icon">
            <i className="material-icons">delete</i>
          </a>
        </div>
        <div>{description}</div>
      </div>
    )
  }
}

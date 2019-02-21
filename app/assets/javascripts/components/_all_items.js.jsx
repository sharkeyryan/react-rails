class AllItems extends React.Component {
  constructor(props) {
    super(props);
  }

  handleDelete(id) {
    this.props.handleDelete(id);
  }

  render() {
    var items = this.props.items.map((item) => {
      return (
        <li className="collection-item" key={item.id}>
          <div>
            <b>{item.name}</b>
            <a
              onClick={this.handleDelete.bind(this, item.id)}
              title="Delete"
              className="secondary-content">
              <i className="material-icons">delete</i>
            </a>
          </div>
          <div>{item.description}</div>
        </li>
      )
    });

    return(
      <div>
        {items}
      </div>
    )
  }
}

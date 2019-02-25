class AllItems extends React.Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleDelete(id) {
    this.props.handleDelete(id);
  }

  handleUpdate(item) {
    this.props.handleUpdate(item);
  }

  render() {
    var items = this.props.items.map((item) => {
      return (
        <li
          key={item.id}
          className="collection-item">
          <Item item={item}
            handleDelete={this.handleDelete}
            handleUpdate={this.handleUpdate} />
        </li>
      )
    });

    return(
      <div>
        <ul className="collection z-depth-1">
          {items}
        </ul>
      </div>
    )
  }
}

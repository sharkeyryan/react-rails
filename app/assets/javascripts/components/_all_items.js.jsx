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
        <div>
          <ul className="collection">
            <li className="collection-item" key={item.id}>
              <b>{item.name}</b><br />
              <span>{item.description}</span>
              <a
                onClick={this.handleDelete.bind(this, item.id)}
                className="waves-effect waves-teal btn-flat right">
                <span>X</span>
              </a>
            </li>
          </ul>
        </div>
      )
    });

    return(
      <div>
        {items}
      </div>
    )
  }
}

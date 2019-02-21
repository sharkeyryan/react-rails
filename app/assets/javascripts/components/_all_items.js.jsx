class AllItems extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    $(document).ready(function(){
      $('.collapsible').collapsible();
    });
  }

  handleDelete(id) {
    this.props.handleDelete(id);
  }

  render() {
    var items = this.props.items.map((item) => {
      return (
        <li key={item.id}>
          <div className="collapsible-header valign-wrapper">
            <span className="arrow"></span>
            <b>{item.name}</b>
            <a
              onClick={this.handleDelete.bind(this, item.id)}
              title="Delete"
              className="secondary-content pointer delete-icon">
              <i className="material-icons">delete</i>
            </a>
          </div>
          <div className="collapsible-body grey lighten-4">{item.description}</div>
        </li>
      )
    });

    return(
      <div>
        <ul className="collapsible z-depth-1">
          {items}
        </ul>
      </div>
    )
  }
}

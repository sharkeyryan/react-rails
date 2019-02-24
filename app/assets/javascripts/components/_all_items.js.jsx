class AllItems extends React.Component {
  constructor(props) {
    super(props);
  }

  // componentDidMount() {
  //   $(document).ready(function(){
  //     $('.collapsible').collapsible();
  //   });
  // }

  handleDelete(id) {
    this.props.handleDelete(id);
  }

  render() {
    var items = this.props.items.map((item) => {
      return (
        <li
          key={item.id}
          className="collection-item">
          <Item item={item}
            handleDelete={this.handleDelete.bind(this, item.id)}
            handleEdit={this.handleEdit}/>
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

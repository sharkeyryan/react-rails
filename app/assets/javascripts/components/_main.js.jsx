class Main extends React.Component {
  render() {
    const name = 'Ryan';

    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col s12 m12 l6">
              <Header name={name} />
              <Body />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

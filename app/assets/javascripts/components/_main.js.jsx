class Main extends React.Component {
  render() {
    const name = 'Ryan';

    return (
      <div>
        <div className="container">
          <Header name={name} />
          <Body />
        </div>
      </div>
    )
  }
}

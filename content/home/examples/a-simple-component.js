class HelloMessage extends React.Component {
  render() {
    return (
      <div>
        Салом {this.props.name}
      </div>
    );
  }
}

ReactDOM.render(
  <HelloMessage name="Сомонҷон" />,
  document.getElementById('hello-example')
);
let Filter = React.createClass({
  displayName: "Filter",

  getInitialState: function () {
    return {
      dataBase: this.props.dataBase,
      oldDataBase: this.props.dataBase,
      defaultValue: "",
      isChecked: false,
    };
  },

  filter: function (e) {
    let newDataBase = [];
    this.props.dataBase.forEach((el) => {
      str = el.text;
      if (str.match(e.target.value)) {
        newDataBase.push(el);
      }
    });
    this.setState({
      dataBase: newDataBase,
      defaultValue: e.target.value,
    });
    console.log("тыц");
    this.SortABC();
  },

  refreash: function () {
    this.setState({
      dataBase: this.props.dataBase,
      defaultValue: "",
      isChecked: false,
    });
  },

  triger: function (e) {
    if (e.target.checked) {
      this.state.isChecked = true;
      this.SortABC();
    } else {
      this.state.isChecked = false;
      this.SortABC();
    }
  },

  SortABC: function () {
    if (this.state.isChecked) {
      this.state.oldDataBase = this.state.dataBase;
      let myarray = [];
      this.state.dataBase.forEach((el) => {
        myarray.push(el.text);
      });
      myarray = myarray.sort();
      let ABCdataBase = [];
      myarray.forEach((el) => {
        this.state.dataBase.forEach((element) => {
          if (element.text === el) {
            ABCdataBase.push(element);
          }
        });
      });
      this.setState({
        dataBase: ABCdataBase,
        isChecked: true,
      });
    } else {
      this.setState({
        dataBase: this.state.oldDataBase,
        isChecked: false,
      });
    }
  },

  render: function () {
    let dataBaseCodeOption = [];
    this.state.dataBase.forEach((el) => {
      dataBaseCodeOption.push(
        React.DOM.option(
          {
            key: `${el.code}`,
          },
          `${el.text}`
        )
      );
    });
    let dataBaseCode = React.DOM.select(
      {
        className: "list",
        name: "list",
        size: "5",
      },
      dataBaseCodeOption
    );

    return React.DOM.div(
      {
        className: "Filter",
      },
      React.DOM.input({
        type: "checkbox",
        onClick: this.triger,
        checked: this.state.isChecked,
      }),
      React.DOM.input({
        type: "text",
        onChange: this.filter,
        value: this.state.defaultValue,
      }),

      React.DOM.input({
        type: "button",
        value: "сброс",
        onClick: this.refreash,
      }),
      dataBaseCode
    );
  },
});

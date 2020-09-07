let Filter = React.createClass({
  displayName: "Filter",

  getInitialState: function () {
    return {
      dataBase: this.props.dataBase,
      inputValue: "",
      isChecked: false,
    };
  },

  filter: function () {
    let newDataBase = [];
    if (this.state.inputValue) {
      this.props.dataBase.forEach((el) => {
        str = el.text;
        if (str.match(this.state.inputValue)) {
          newDataBase.push(el);
        }
      });
      this.setState(
        {
          dataBase: newDataBase,
        },
        console.log(newDataBase),
        console.log(this.state.dataBase)
      );
    }
    if (this.state.inputValue === "") {
      this.setState({
        dataBase: this.props.dataBase,
      });
    }

    if (this.state.isChecked) {
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
      });
    }
  },

  refreash: function () {
    this.setState(
      {
        dataBase: this.props.dataBase,
        inputValue: "",
        isChecked: false,
      },
      this.filter
    );
  },

  checkOnOf: function (e) {
    this.setState(
      {
        isChecked: e.target.checked,
      },
      this.filter
    );
  },

  inputChange: function (e) {
    this.setState(
      {
        inputValue: e.target.value,
      },
      this.filter
    );
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
        checked: this.state.isChecked,
        onChange: this.checkOnOf,
      }),
      React.DOM.input({
        type: "text",
        value: this.state.inputValue,
        onChange: this.inputChange,
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

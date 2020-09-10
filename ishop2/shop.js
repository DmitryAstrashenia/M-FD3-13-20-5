let Shop = React.createClass({
  displayName: "Shop",

  getDefaultProps: function () {
    return {
      question: "Товара нет на складе!",
    }
  },

  getInitialState: function () {
    return {
      goods: this.props.goods,
      markedProductCode: null,
    };
  },

  deleteCard: function (code) {
    if (confirm("Уверены, что хотите удалить?")) {
      let newGoods = []
      this.state.goods.forEach(e => {
        if (e.vendorCode != code) {
          newGoods.push(e)
        }
      })
      this.setState({
        goods: newGoods
      })
    }
  },

  mark: function (code) {
    this.setState({
      markedProductCode: code
    })
  },

  render: function () {

    let goodsCardsArr = this.state.goods.map(el => React.createElement(GoodsList, {
      key: el.vendorCode,
      code: el.vendorCode,
      name: el.name,
      img: el.img,
      price: el.price,
      number: el.number,
      deleteCard: this.deleteCard,
      mark: this.mark,
      marked: this.state.markedProductCode
    }));

    return React.DOM.div({
        className: "Shop",
      },
      React.DOM.h2({
          className: "sectionName",
        },
        this.props.sectionName,
      ),
      React.DOM.div({
          className: "GoodsCardsArr",
        },
        goodsCardsArr
      )
    )
  }
})
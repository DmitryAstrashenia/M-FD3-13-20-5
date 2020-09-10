let GoodsList = React.createClass({
    displayName: "Goodslist",

    propTypes: {
        name: React.PropTypes.string.isRequired,
        price: React.PropTypes.number.isRequired,
        number: React.PropTypes.number.isRequired
    },

    answerClicked: function () {
        this.props.deleteCard(this.props.code)
    },

    answerMark: function () {
        this.props.mark(this.props.code)
    },

    render: function () {
        let classNames = ["Card"];
        if (this.props.marked === this.props.code) {
            classNames.push("mark")
        }
        return React.DOM.ul({
                key: this.props.vendorCode,
                className: classNames.join(" "),
                onClick: this.answerMark
            },
            React.DOM.li({
                className: null,
            }, React.DOM.input({
                className: "btn-close",
                type: "button",
                value: "x",
                id: "delete",
                onClick: this.answerClicked
            })),
            React.DOM.li({
                    className: "Name",
                },
                React.DOM.h3({
                        className: null,
                    },
                    this.props.name
                )
            ),
            React.DOM.li({
                    className: "Img",
                },
                React.DOM.img({
                    className: null,
                    src: this.props.img,
                })
            ),
            React.DOM.li({
                    className: "Price",
                },
                React.DOM.h4({
                        className: null,
                    },
                    "Цена: " + this.props.price + "BYN"
                )
            ),
            React.DOM.li({
                    className: "Number",
                },
                "Кол-во на складе: " + this.props.number + "шт."
            ),
            React.DOM.button({
                    className: "Button",
                },
                "Купить"
            )
        );
    }
})
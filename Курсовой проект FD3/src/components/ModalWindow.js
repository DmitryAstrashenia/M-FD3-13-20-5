"use strict"

import React from "react";
import { myEvents } from "./module/events";
import "./ModalWindow.css";

class ModalWindow extends React.Component {

    constructor(props) {
        super(props)
        this.priceChart = [];
        this.loadData();
    }

    btnClose = () => {
        myEvents.emit("btnClose");
    }

    loadData = () => {
        fetch("https://spreadsheets.google.com/feeds/list/1dnw6xEKDPUf0n3pSEcJbVY9fbxEBPDJkR3zHeaD6jDw/od6/public/values?alt=json")
            .then((obj) => obj.json())
            .then(data => {
                data = data['feed']['entry'];
                this.priceChart = this.filterGetJSON(data);
                let min = document.querySelector("#min");
                let max = document.querySelector("#max");
                let actual = document.querySelector("#actual")
                min.innerHTML = `Минимум: ${this.minPrice(this.priceChart)}BYN`;
                max.innerHTML = `Максимум: ${this.maxPrice(this.priceChart)}BYN`;
                actual.innerHTML = `Текущая цена: ${this.priceChart[this.priceChart.length - 1]}BYN`;
            })
            .then(() => this.viewChart())
    }

    filterGetJSON = (element) => {
        let dataPrice = [];
        for (let i = 0; i < element.length; i++) {
            dataPrice.push(element[i]['gsx$price']['$t']);
        }
        return dataPrice;
    }

    minPrice = (arr) => {
        let min = arr[0];
        arr.forEach((item) => {
            min = min > item ? item : min;
        })
        return min;
    }

    maxPrice = (arr) => {
        let max = arr[0];
        arr.forEach((item) => {
            max = max < item ? item : max;
        })
        return max;
    }

    viewChart = () => {
        let canvas = document.querySelector("#chart");
        let priceChart = this.priceChart;
        let ctx = canvas.getContext("2d");
        ctx.lineWidth = 1;
        ctx.strokeStyle = "black";

        ctx.clearRect(0, 0, 700, 250);
        ctx.beginPath();
        ctx.moveTo(50, 200);
        ctx.lineTo(650, 200);
        ctx.moveTo(50, 200);
        ctx.lineTo(50, 210);
        ctx.moveTo(150, 200);
        ctx.lineTo(150, 210);
        ctx.moveTo(250, 200);
        ctx.lineTo(250, 210);
        ctx.moveTo(350, 200);
        ctx.lineTo(350, 210);
        ctx.moveTo(450, 200);
        ctx.lineTo(450, 210);
        ctx.moveTo(550, 200);
        ctx.lineTo(550, 210);
        ctx.moveTo(650, 200);
        ctx.lineTo(650, 210);
        ctx.stroke();

        let date = new Date();
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        day = day < 10 ? "0" + day : day;
        month = month < 10 ? "0" + month : month;
        let numberOfDaysInAMonth = new Date(year, month - 1, 0).getDate();
        let nowDayMount = `${day}.${month}`;
        let dateX = [];
        dateX.push(nowDayMount);
        for (let i = 0; i < 6; i++) {
            if (day - 5 < 1) {
                day = day - 5 + numberOfDaysInAMonth;
                month = month < 10 ? "0" + (month - 1) : month - 1;
            } else {
                day = day - 5;
            }
            day = day < 10 ? "0" + day : day;
            month = month < 10 ? "0" + month : month;
            dateX.push(`${day}.${month}`);
        }
        for (let i = 0, j = 635; i < 7; i++) {
            ctx.beginPath();
            ctx.fillStyle = "black";
            ctx.font = "italic 12px Arial";
            ctx.fillText(dateX[i], j, 220);
            ctx.closePath();
            j -= 100;
        }

        let timer = 160;

        function drawChart() {
            if (timer > 0) {
                for (let i = 0, j = 50; i < priceChart.length; i++) {
                    ctx.lineWidth = 50;
                    ctx.strokeStyle = "green";
                    ctx.moveTo(j, 200);
                    ctx.lineTo(j, 200 - priceChart[i] + timer);
                    j += 100;
                    ctx.stroke();
                }
                window.requestAnimationFrame(drawChart);
            }
            timer -= 1;
        }

        window.requestAnimationFrame(drawChart);
    }

    render() {
        return (
            <div className="modal" id="myModal">
                <div className="modal-content">
                    <div className="modal-header">
                        <span className="close" onClick={this.btnClose}>&times;</span>
                        <h2>График цен для id:{this.props.id}</h2>
                        <div id="price">
                            <p id="min"></p>
                            <p id="max"></p>
                            <p id="actual"></p>
                        </div>
                    </div>
                    <div className="modal-body">
                        <canvas id="chart" width={700} height={250} ></canvas>
                    </div>
                    <div className="modal-footer">
                    </div>
                </div>
            </div>
        )
    }
}

export default ModalWindow;
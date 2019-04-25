import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';


class TxDayChart extends Component{
    constructor(){
        super();
        this.chartData = {           
                labels: ['','01', '02', '03', '04', '05','06','07'],
                datasets: [{
                    data: [0,12, 19, 3, 5, 2, 3,12],
                    backgroundColor: [
                        'rgba(249, 141, 101, 0.2)',
                    ],
                    label: '7 days Transaction',
                    pointBackgroundColor:'rgba(0, 0, 0, 0.1)',
                    pointHoverBackgroundColor:'',
                    pointBorderColor:'rgba(25, 78, 79, 0.5)',
                    pointBorderWidth:2,
                    pointHoverBorderWidth:4,
                    pointHoverBorderColor:'rgba(25, 78, 79, 1)',
                    borderWidth: 0.5
                }]
            };

        this.chartOptions = {
                responsive: true,
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                },
                title: {
                    display: true,
                    text: '7 days Transaction',
                    fontSize:14,
                    fontFamily:"'Hind',sans-serif",
                    fontColor: 'rgba(25, 78, 79, 1)',
                    fontStyle:'bold',
                    padding:10,
                    lineHeight:1.8,
                },

                legend: {
                    display: false,
                    position:'bottom',
                    labels: {
                        fontColor: '#333',
                        fontSize:16,
                        fontFamily:'Hind',
                    }
                }
            };
    }

    render(){
        return (
            <div className="cont cont01 chart">
                <Line id="first_chart" data={this.chartData} options={this.chartOptions} />
            </div>
        );
    }
}

export default TxDayChart;
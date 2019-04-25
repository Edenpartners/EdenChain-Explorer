import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';


class TxHourChart extends Component{
    constructor(){
        super();
        this.chartData = {           
            labels: ['00', '01', '02', '03', '04', '05','06','07','08','09',
            '10','11','12','13','14','15','16','17','18','19','20','21','22',
            '23','24'],
            datasets: [{
                label: '24 hours Transaction',
                data: [12, 19, 3, 5, 2, 3,12,6,3,5,18,5,8,9,2,4,6,2,8,7,3,6,7,4],
                backgroundColor: [
                    'rgba(249, 141, 101, 0.2)',
                    'rgba(0,150,136,0.2)',
                    'rgba(249, 141, 101, 0.2)',
                    'rgba(0,150,136,0.2)',
                    'rgba(249, 141, 101, 0.2)',
                    'rgba(0,150,136,0.2)',
                    'rgba(249, 141, 101, 0.2)',
                    'rgba(0,150,136,0.2)',
                    'rgba(249, 141, 101, 0.2)',
                    'rgba(0,150,136,0.2)',
                    'rgba(249, 141, 101, 0.2)',
                    'rgba(0,150,136,0.2)',
                    'rgba(249, 141, 101, 0.2)',
                    'rgba(0,150,136,0.2)',
                    'rgba(249, 141, 101, 0.2)',
                    'rgba(0,150,136,0.2)',
                    'rgba(249, 141, 101, 0.2)',
                    'rgba(0,150,136,0.2)',
                    'rgba(249, 141, 101, 0.2)',
                    'rgba(0,150,136,0.2)',
                    'rgba(249, 141, 101, 0.2)',
                    'rgba(0,150,136,0.2)',
                    'rgba(249, 141, 101, 0.2)',
                    'rgba(0,150,136,0.2)',
                ],
                borderColor: [
                    'rgba(249, 141, 101, 1)',
                    'rgba(0,150,136,1)',
                    'rgba(249, 141, 101, 1)',
                    'rgba(0,150,136,1)',
                    'rgba(249, 141, 101, 1)',
                    'rgba(0,150,136,1)',
                    'rgba(249, 141, 101, 1)',
                    'rgba(0,150,136,1)',
                    'rgba(249, 141, 101, 1)',
                    'rgba(0,150,136,1)',
                    'rgba(249, 141, 101, 1)',
                    'rgba(0,150,136,1)',
                    'rgba(249, 141, 101, 1)',
                    'rgba(0,150,136,1)',
                    'rgba(249, 141, 101, 1)',
                    'rgba(0,150,136,1)',
                    'rgba(249, 141, 101, 1)',
                    'rgba(0,150,136,1)',
                    'rgba(249, 141, 101, 1)',
                    'rgba(0,150,136,1)',
                    'rgba(249, 141, 101, 1)',
                    'rgba(0,150,136,1)',
                    'rgba(249, 141, 101, 1)',
                    'rgba(0,150,136,1)',
                ],
                borderWidth: 1
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
                text: '24 hours Transaction',
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
                    fontSize:10,
                    fontFamily:'Hind',
                }
            }
            };
    }

    render(){
        return <div className="cont cont02 chart"><Bar id="second_chart" data={this.chartData} options={this.chartOptions} /></div>
    }
}

export default TxHourChart;
import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';


class BlockDayChart extends Component{
    constructor(){
        super();
        this.chartData = {
                    labels:["01","02","03","04","05","06","07"],
                    options: {
                        responsive: true,
                        tooltips: {
                            mode: 'nearest'
                        }   
                    },
                    datasets: [
                    {
                        label: 'Blocks',
                        fill:false,
                        lineTention:0.1,
                        backgroundColor: 'rgba(249, 141, 101, 1)',
                        borderColor: 'rgba(249, 141, 101, 1)',
                        borderCapStyle:'butt',
                        borderAlign:'center',
                        borderDash:[],
                        borderDashOffset:0.0,
                        borderJoinStyle :'miter',
                        pointBorderColor:'rgba(25, 78, 79, 1)',
                        pointBackgroundColor:'#fff',
                        pointBorderWidth:1,
                        pointHoverRadius:5,
                        pointHoverBackgroundColor:'rgba(220,220,220,0.5)',
                        pointHoverBorderWidth:2,
                        pointRadius:1,
                        pointHitRadius:10,
                        data:[30,49,20,51,76,55,48]

                    }
                ]
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
                text: 'Blocks',
                fontSize:14,
                fontFamily:"'Hind',sans-serif",
                fontColor: '#194e4f',
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
        return <div className="cont cont03 chart"><Line id="third_chart" data={this.chartData} options={this.chartOptions} /></div>
    }
}

export default BlockDayChart;
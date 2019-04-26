import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';
import apis from '../../api/api';

class TxHourChart extends Component{
    constructor(){
        super();
        this.apis = new apis();


        // Create X-Axis
        this.labels=[]
        let today = new Date();
        today.setDate(today.getDate()-1);
        for(let i=0;i<=23;i++)
        {            
            today.setTime(today.getTime()+ (60*60*1000));
            this.labels.push(new String(today.getUTCHours()));
        }

        this.chartData = {           
            labels: this.labels,
            datasets: [{
                label: '24 hours Transaction',
                data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],                    
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
                text: '24 hours transactions',
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

            this.state = {chartData: this.chartData, chartOptions: this.cartOptions};
    }

    componentWillMount() {
        this._requests = this.apis.getTimeSeriesTransactions('hour').then((data)=>
        {
            this._requests = null;

            let cdata = this.state.chartData;
           
            
            for (let i=0;i<this.labels.length;i++){
                for (let j = 0;j<data.length;j++){                        
                        if(data[j].hasOwnProperty(this.labels[i]))
                        {                           
                            cdata.datasets[0].data[i] = data[j][this.labels[i]]
                        }
                }                
            }
                  
            this.setState({chartData:cdata});
        }
        );
    }

    componentWillUnmount(){
    }

    render(){
        return <div className="cont cont02 chart"><Bar id="second_chart" data={this.state.chartData} options={this.state.chartOptions} /></div>
    }
}

export default TxHourChart;
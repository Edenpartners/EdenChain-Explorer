import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';
import apis from '../../api/api';

class TxDayChart extends Component{
    constructor(){
        super();
        this.apis = new apis();

        // Create X-Axis
        this.labels=[]
        let today = new Date();
        today.setDate(today.getDate()-7);
        for(let i=0;i<7;i++)
        {            
            today.setDate(today.getDate()+1);
            this.labels.push(new String(today.getUTCDate()));
        }


        this.chartData = {           
                labels:  this.labels,
                datasets: [{
                    data: [0,0,0,0,0,0,0],
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
                    text: '7 days Transactions',
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

            this.state = {chartData: this.chartData, chartOptions: this.cartOptions};
    }

    componentWillMount() {
        this._requests = this.apis.getTimeSeriesTransactions('day').then((data)=>
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
        return (
            <div className="cont cont01 chart">
                <Line id="first_chart" data={this.state.chartData} options={this.state.chartOptions} />
            </div>
        );
    }
}

export default TxDayChart;
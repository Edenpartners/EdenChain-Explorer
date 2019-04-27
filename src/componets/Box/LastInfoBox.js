import React, {Component} from 'react';
import { Link } from "react-router-dom";
import apis from '../../api/api';

class LastInfoBox extends Component{
    constructor(){
        super();
        this.apis = new apis();
        this.state = {tps: '', date:''};
    }

    componentWillMount() {
        this._requests = this.apis.getLatestTransactionPerSecond().then((data)=>
        {
            this._requests = null;
            this.setState({tps:data})
        }
        );
        this._requests2 = this.apis.getLatestBlockCommitTime().then((data)=>
        {
            this._requests2 = null;
            this.setState({date:
                data.getUTCFullYear() + "-" + (data.getUTCMonth() + 1) + "-" + data.getUTCDate() + " " + data.getUTCHours() + ":" + data.getMinutes() + ":" + data.getSeconds() 
            })
        }
        );
    }

    componentWillUnmount(){

    }

    render(){      
        return (        
            <div className="cont cont03">
                <h5>TPS / Block Time</h5>
                <p>{this.state.tps}/<span>{this.state.date}</span></p>                                        
            <div className="more"><Link to="/txlist">Read More</Link></div>
        </div>
        );
    }
}

export default LastInfoBox;
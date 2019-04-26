import React, {Component} from 'react';
import { Link } from "react-router-dom";
import apis from '../../api/api';

class TotalTransactionBox extends Component{
    constructor(){
        super();
        this.apis = new apis();
        this.state = {count: ''};
    }

    componentWillMount() {
        this._requests = this.apis.getTotalTransactionCount().then((data)=>
        {
            this._requests = null;
            this.setState({count:data})
        }
        );
    }

    componentWillUnmount(){

            
    }

    render(){      
        return (        
            <div className="cont cont02">
                <h5>Total Transactions</h5>
                <p>{this.state.count}</p>
            <div className="more"><Link to="/txlist">Read More</Link></div>
        </div>
        );
    }
}

export default TotalTransactionBox;
import React, {Component} from 'react';
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
        this._requests = this.apis.getBlockHeight().then((data)=>
        {
            if(this._requests)
            {
                this._requests.cancel();
            }
        }
        );
    }

    render(){      
        return (        
            <div className="cont cont02">
                <h5>Total Transactions</h5>
                <p>{this.state.count}</p>
            <div className="more"><a href="">Read More</a></div>
        </div>
        );
    }
}

export default TotalTransactionBox;
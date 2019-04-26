import React, {Component} from 'react';
import { Link } from "react-router-dom";
import apis from '../../api/api';

class BlockHeightBox extends Component{
    constructor(){
        super();
        this.apis = new apis();
        this.state = {height: ''};
    }

    componentWillMount() {
        this._requests = this.apis.getBlockHeight().then((data)=>
        {
            this._requests = null;
            this.setState({height:data})
        }
        );
    }

    componentWillUnmount(){

    }

    render(){      
        return (        
            <div className="cont cont01">
                <h5>Block Height</h5>
                    <p>{this.state.height}</p>
                <div className="more"><Link to="/blocklist">Read More</Link></div>
            </div>
        );
    }
}

export default BlockHeightBox;
import React, {Component} from 'react';
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
        if(this._requests)
        {
            this._requests.cancel();
        }
    }

    render(){      
        return (        
            <div className="cont cont01">
                <h5>Block Height</h5>
                    <p>{this.state.height}</p>
                <div className="more"><a href="">Read More</a></div>
            </div>
        );
    }
}

export default BlockHeightBox;
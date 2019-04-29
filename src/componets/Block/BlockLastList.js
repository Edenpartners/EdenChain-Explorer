import React, {Component} from 'react';
import apis from '../../api/api';
import '../MainFront/flex_index.scss';
import { Link } from "react-router-dom";

class BlockLastList extends Component{
    constructor(){
        super();
        this.state = {data:undefined};
        this.apis = new apis();        
    }

    componentWillMount() {
        // Get Last page, 6 items.
        this._requests = this.apis.getBlockList(1,6).then((data)=>
        {                
            this.setState({data:data});
            this._requests = null;   
        }
        );
    }

    componentWillUnmount(){
 
    }

    ellipseString(data){
        if(data)
        {
            if(data.length>24)
                return data.substring(0,24)+"...";
            else
                return data;
        }
        else
            return data;
    }


    render(){

        let data_list = [];

        if(this.state.data)
        {
            for(let [index,d] of this.state.data.blocks.entries())
            {
                let date = new Date(d.timestamp*1000);
                let link = "/blockDetail/"+d.height;

                data_list.push( (                        
                    <tr key={index}>
                            <td className="blockId"><Link to={link}>
                                <span>{d.height}</span></Link>
                            </td>

                            <td><Link to={link}>
                                {                                    
                                        (()=>{
                                            if (d.transactions.length>1)
                                            {
                                                return(<span>{this.ellipseString(d.transactions[0])} [{d.transactions.length}]</span>);
                                            }
                                            else
                                            {
                                                return(<span>{this.ellipseString(d.transactions[0])}</span>);
                                            }
                                            
                                        }
                                        )()
                                       
                                    }</Link>
                            </td>

                            <td><Link to={link}>
                                <span>{this.ellipseString(d.hash)}</span></Link>
                            </td>

                    </tr>
                ));
            }
        }

        return (
            <div className="mainCon mainCon01">
            <h3>
                <span className="titL">                                 
                <i className="eden-box"></i>Block List</span>
                <span className="titR">
                    
                    <Link to="/blocklist">
                        <button type="button">view all</button>
                    </Link> </span>
            </h3>


            <div className="tables01 conT">
                
                <table border="0" cellPadding="0" cellSpacing="0">


                    <tbody>
                        <tr className="col">
                            <th width="10%">
                                <span>Height</span>
                            </th>

                            <th width="45%">
                                <span>Transaction NO</span>
                            </th>

                            <th width="45%">
                                <span>Block Hash</span>
                            </th>
                        </tr>

                        {data_list}


                        

                    </tbody>


                    <tfoot>


                    </tfoot>
                </table>
            </div>
        </div>
        )
    }
}

export default BlockLastList;

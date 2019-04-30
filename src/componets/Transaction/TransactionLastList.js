import React, {Component} from 'react';
import apis from '../../api/api';
import { Link } from "react-router-dom";
import '../MainFront/flex_index.scss';

class TransactionLastList extends Component{
    constructor(){
        super();
        this.state = {data:undefined};
        this.apis = new apis();     
        this._requests = null;   
    }

    componentWillMount() {
        // Get Last page, 6 items.
        this._requests = this.apis.getTransactionList(1,6).then((data)=>
        {   
            this._requests = null;                
            this.setState({data:data});            
        }
        );
    }

    componentWillUnmount(){

    }

    ellipseString(data){
        if(data)
        {
            if(data.length>30)
                return data.substring(0,30)+"...";
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
            for(let [index,d] of this.state.data.transactions.entries())
            {
                let date = new Date(d.timestamp*1000)
                let link = "/txDetail/"+d.id;
                data_list.push( (
                        <tr key={index}>
                            <td className="blockId"><Link to={link}>
                                <span>{this.ellipseString(d.id)} </span></Link>
                            </td>

                            <td><Link to={link}>
                                <span>{this.ellipseString(d.associated_asset)}</span></Link>
                            </td>                     
                        </tr>
                ));
            }
        }

        


        return (
            <div className="mainCon mainCon02">
            <h3>
                <span className="titL"><i className="eden-database"></i>Transaction List</span>
                <span className="titR"><Link to="/txlist"><button type="button">view all</button></Link> </span>
            </h3>
            <div className="tables01 conT">
                
                <table border="0" cellPadding="0" cellSpacing="0">


                    <tbody>
                        <tr className="col">
                            <th width="50%">
                                <span>Transaction ID</span>
                            </th>

                            <th width="40%">
                                <span>Namespace</span>
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

export default TransactionLastList;
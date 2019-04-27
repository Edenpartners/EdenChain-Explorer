import React, {Component} from 'react';
import Footer from '../Footer/footer';
import { Link } from "react-router-dom";
import './sub_transaction.scss';
import HeaderMenu from '../HeaderMenu/HeaderMenu';
import apis from '../../api/api';


class TransactionDetail extends Component {
    constructor()
    {
        super();
        this.apis = new apis();   
        this.state = {data : undefined};
          
    }

    componentWillMount() {
        // Get Last page, 6 items.
        const { match: { params } } = this.props;

        this._requests = this.apis.getTransactionInformation(params.tx_id).then((data)=>
            {                
                this.setState({data:data});
                this._requests = null;                   
            }
        );
    }
    

    componentWillUnmount(){

    }

    render(){

        // const decimal = document.getElementById('decimal');
        // document.write(decimal);
        // document.write(decimal.toFixed(6));
        let data = {}
        let date = undefined;

        if(!this.state.data)
        {
            data.id = '';
            data.request_transaction_amount = [];
        }
        else
        {
            data = this.state.data;
            date = new Date(data.timestamp*1000);    
        }
        

        return (

            <div className="TransactionDetail wrapper subContainer">
                <HeaderMenu></HeaderMenu>

                <div className="container">

                <div className="fixed">
                

                    <h3><i className="eden-database"></i>Transaction Detail</h3>
                    <div className="detailBox">
                        <h4>  Transaction ID  {data.id} <span></span></h4>

                        <table cellPadding="0" cellSpacing="0" border="0">
                            <tbody>
                                <tr className="">
                                    <th>TX ID</th>
                                    <td>
                                        <span className="">{data.id}</span>                                        
                                    </td>
                                </tr>
                                <tr></tr>

                                <tr>
                                    <th>Time Stamp</th>
                                    <td>{
                                        data.timestamp && 
                                        date.getUTCFullYear()+"-"+(date.getUTCMonth()+1)+"-"+date.getUTCDate()+" "+
                                        date.getUTCHours()+":"+date.getMinutes()+":"+date.getSeconds()+"(UTC)"
                                    }</td>
                                </tr>
                                <tr></tr>

                                <tr>
                                    <th>Operation</th>
                                    <td>{data.operation}</td>
                                </tr>
                                <tr></tr>

                                <tr>
                                    <th>Asset ID</th>
                                    <td>{data.associated_asset}</td>
                                </tr>
                                <tr></tr>

                                <tr>
                                    <th>From ADDR</th>
                                    <td>
                                        <span className=""><Link to={"/txUserList/"+data.before_owner}>{data.before_owner}</Link></span>
                                        <span className=""></span>
                                    </td>
                                </tr>
                                <tr></tr>

                                <tr>
                                    <th>To ADDR</th>
                                    <td>
                                        <span className=""><Link to={data.request_transaction_amount.length>0 && "/txUserList/"+data.request_transaction_amount[0].address}>{data.request_transaction_amount.length>0 && data.request_transaction_amount[0].address}</Link></span>
                                        <span className=""></span>
                                    </td>
                                </tr>
                                <tr></tr>

                                <tr>
                                    <th>Amount</th>
                                    <td id="decimal">{data.request_transaction_amount.length>0 && data.request_transaction_amount[0].amount}</td>
                                </tr>
                            </tbody>
                        </table>


                    </div>
                </div>
               </div>
               <Footer></Footer>
            </div>


        );
    }
};

export default TransactionDetail;
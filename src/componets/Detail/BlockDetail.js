import React, {Component} from 'react';
import Footer from '../Footer/footer';
import { Link } from "react-router-dom";
import apis from '../../api/api';
import './sub_transaction.scss';
import HeaderMenu from '../HeaderMenu/HeaderMenu';



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

        this._requests = this.apis.getBlockInformation(params.block_height).then((data)=>
            {                
                this.setState({data:data});
                this._requests = null;   
            }
        );
    }
    

    componentWillUnmount(){

    }

    render(){
        let data = this.state.data;
        let date = new Date();
        let data_list = []
        if(!data)
        {
            data = {}
            data.transactions = [''];
            data.height="";
            data.hash="";
            data.timestamp = undefined;
        }
        else
        {
            date = new Date(data.timestamp*1000)

            for(let [index,d] of this.state.data.transactions.entries())
            {
                let link = "/txDetail/"+d;
                data_list.push(<Link to={link} key={index}><span>{d}</span><br/></Link>)
            }
        }
        

        return (
            <div className="TransactionDetail wrapper subContainer">
                <HeaderMenu></HeaderMenu>

                <div className="container">

                <div className="fixed">
                

                    <h3><i className="eden-database"></i>Block Detail <span>{data.height}</span></h3>
                    <div className="detailBox">
                        <h4>Block Number <span>{data.height}</span></h4>

                        <table cellPadding="0" cellSpacing="0" border="0">
                            <tbody>
                                <tr className="">
                                    <th>Block Height</th>
                                    <td>{data.height}</td>
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
                                    <th>Hash</th>
                                    <td>{data.hash}</td>
                                </tr>
                                <tr></tr>

                                <tr>
                                    <th>Transaction</th>
                                    <td>
                                        {data_list}
                                        
                                    </td>
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
import React, {Component} from 'react';
import Footer from '../Footer/footer';
import { Link } from "react-router-dom";
import apis from '../../api/api';
import './sub_transaction.scss';
import HeaderMenu from '../HeaderMenu/HeaderMenu';



class TermsOfService extends Component {
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

        return (
            <div className="TransactionDetail wrapper subContainer">
                <HeaderMenu></HeaderMenu>

                <div className="container">

                <div className="fixed">
                

                    <h3><i className="eden-database"></i>Block Detail <span>{data.height}</span></h3>
                    <div className="detailBox">
                        <h4>Block Number <span>{data.height}</span></h4>

                        

                    </div>
                </div>
               </div>
               <Footer></Footer>
            </div>

        );
    }
};

export default TermsOfService;
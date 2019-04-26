import React, { Component } from 'react';
import Footer from '../SubFooter/footer';
import HeaderMenu from '../HeaderMenu/HeaderMenu';
import './sub.scss';
import apis from '../../api/api';
import { Link } from "react-router-dom";

class BlockFullList extends Component {
    constructor(){
        super();
        this.state = {data:undefined, page:1, countperpage:14};
        this.apis = new apis();        
    }

    componentWillMount() {
        this._requests = this.apis.getBlockList(this.state.page,this.state.countperpage).then((data)=>
            {   
                this._requests = null;               
                this.setState({data:data});                 
            }
        );
    }

    componentWillUnmount(){
     
    }

    render() {

        let data_list = [];

        if(this.state.data)
        {
            for(let [index,d] of this.state.data.blocks.entries())
            {
                let date = new Date(d.timestamp*1000)
                let link = "/blockDetail/"+d.height;

                data_list.push( (                        
                    <div className="tbTit" key={index}>
                    <Link to={link}>
                        <ul className="tbUl tbUl01">
                            <li className="tit tit01"><i className=""></i>Block Number</li>
                            <li className="con01">{d.height}</li>
                        </ul>


                        <ul className="tbUl tbUl02">
                            <li className="tit tit01"><i className=""></i>Transaction NO</li>
                            {                                    
                                        (()=>{
                                            if (d.transactions.length>1)
                                            {
                                                return(<li className="con01">{d.transactions[0]}...</li>);
                                            }
                                            else
                                            {
                                                return(<li className="con01">{d.transactions[0]}</li>);
                                            }
                                            
                                        }
                                        )()
                                       
                            }
                        </ul>

                        <ul className="tbUl tbUl03">
                            <li className="tit tit01"><i className=""></i>Block Hash</li>
                            <li className="con01">{d.hash}<i className="eden-file"></i></li>
                        </ul>
                        </Link>
                    </div>
                ));
            }
        }

        return (
            <div className="BlockFullList wrapper">

                <HeaderMenu></HeaderMenu>

                <div className="container">

                    <div className="fixed">
                        <div className="content" id="fullCon">

                            <h3><i className="eden-box"></i>Block List <span>Data Information for Developer</span></h3>
                            <div className="tables02">


                               {data_list}

                            </div>
                            
                        </div>
                        
                    </div>
                    
                </div>
                <Footer></Footer>
            </div>

        );
    }
};

export default BlockFullList;
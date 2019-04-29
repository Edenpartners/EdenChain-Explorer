import React, { Component } from 'react';
import Footer from '../Footer/footer';
import HeaderMenu from '../HeaderMenu/HeaderMenu';
import './sub.scss';
import apis from '../../api/api';
import { Link } from "react-router-dom";



class BlockFullList extends Component {
    constructor(){
        super();
        this.state = {data:undefined, page:1, countperpage:15,endpage:1,maxpage:5,skippage:0};
        this.apis = new apis();        
    }


    componentWillMount() {
        this.queryPage();
    }

    componentWillUnmount(){
     
    }

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    queryPage(){
        this._requests = this.apis.getBlockList(this.state.page,this.state.countperpage).then((data)=>
        {   
            //console.log(data);            
            this.setState({data:data,endpage:this.getEndPage(data.total_count,this.state.countperpage )});
            this._requests = null;                   
        }
        );
    }

    getEndPage(total, countPerPage) {
        return Math.ceil(total/countPerPage);
    }

    handlePrev(){
        if(this.state.skippage>0) {
            if(this.state.page > this.state.skippage+this.state.maxpage ||
                this.state.page > this.state.endpage ||
                this.state.page-1<=this.state.skippage )
            this.setState({skippage: this.state.skippage-1})
        }

        if(this.state.skippage <= this.state.page-1 && this.state.page >1  ) {
            this.state.page--;
            this.queryPage(); 
        }
    }

    handleNext() {        
        if(this.state.skippage < this.state.endpage &&
            this.state.skippage < this.state.page + this.state.maxpage &&
            this.state.skippage+this.state.maxpage < this.state.endpage) {            
            this.setState({skippage: this.state.skippage+1 })
        }

        if( this.state.page-1 <= this.state.skippage ||
            this.state.page < this.state.endpage){
            
            this.state.page ++;
            this.queryPage();
        }        
    }

    handlePageMove(page) {
        this.state.page = page;
        this.queryPage();
    }

    getPageList()   {
        //pagination
        let page_list=[];

        page_list.push(<li key="-1"><a id="prev" onClick={() => this.handlePrev()}><i className="eden-chevrons-left"></i></a></li>);

        let start = this.state.skippage;
        let end = Math.min( this.state.endpage+this.state.skippage, this.state.maxpage+this.state.skippage);

        for(let i = start; i< end ;i++)
        {
            if(this.state.page==(i+1))
                page_list.push(
                    (
                        <li key={i}><a href="#" className="active" >{i+1}</a></li>
                    )
                );

            else
                page_list.push(
                    (
                        <li key={i}><a href="#" onClick={() => this.handlePageMove(i+1)} value={i}>{i+1}</a></li>
                    )
                );
        }
        page_list.push(<li key="-2"><a id="next" onClick={() => this.handleNext()}><i className="eden-chevrons-right"></i></a></li>);

        return page_list;
    }

    render() {        
        let page_list=[];

        if(this.state.data)
        {            
           page_list = this.getPageList();
        }


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

                    <div className="center">
                        <ul className="pagination">
                            {page_list}                           
                        </ul>
                    </div>

                    
                </div>
                <Footer></Footer>
            </div>

        );
    }
};

export default BlockFullList;
import React, { Component } from 'react';
import Footer from '../Footer/footer';
import HeaderMenu from '../HeaderMenu/HeaderMenu';
import  './sub_transaction.scss';
import apis from '../../api/api';
import { Link } from "react-router-dom";

class TransactionUserList extends Component {
    constructor(){
      super();
      this.apis = new apis();
      this.state = {data:undefined, page:1, countperpage:15,endpage:1,maxpage:5,skippage:0};      
    }

    componentWillMount() {
        const { match: { params } } = this.props;
        this.params = params;
        this.queryPage();
        
    }

    componentWillUnmount(){

    }

    queryPage() {
      this._requests = this.apis.searchKeyword(this.params.keyword, this.state.page,this.state.countperpage).then((data)=>
        {   
            this.setState({data:data, endpage:this.getEndPage(data.data.total_count,this.state.countperpage)});
            this._requests = null;   
        }
        );
    }


    getEndPage(total, countPerPage){
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

  getPageList()  {
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

  render(){

    let page_list=[];

    if(this.state.data)
    {            
       page_list = this.getPageList();
    }



    let data_list = [];

    if(this.state.data)
    {
        for(let [index,d] of this.state.data.data.transactions.entries())
        {
            let date = new Date(d.timestamp*1000);
            let link = "/txDetail/"+d.id;

            data_list.push( (

                  <tr key={index}>

                      <td width="10%"><Link to={link}>{index}</Link></td>
                      <td width="10%"><Link to={link}>{d.id}</Link></td>
                      <td width="20%"><Link to={link}>{date.getUTCFullYear()+"-"+(date.getUTCMonth()+1)+"-"+date.getUTCDate()+" "+
                                  date.getUTCHours()+":"+date.getMinutes()+":"+date.getSeconds()+"(UTC)"}</Link></td>
                      <td width="20%" className="none"><Link to={link}>{d.before_owner[0]}</Link></td>
                      <td width="20%"><Link to={link}>{d.request_transaction_amount[0] && d.request_transaction_amount[0].address}</Link></td>
                      <td width="20%"><Link to={link}>{d.request_transaction_amount[0] && d.request_transaction_amount[0].amount}</Link></td>
                
                  </tr>
              
            ));
        }
    }

    

    return (
        <div className="TransactionFullList wrapper subContainer">
            <HeaderMenu></HeaderMenu>

            <div className="container">

            <div className="fixed">
            <div className="content" id="fullCon">

                <h3><i className="eden-box"></i>User Transaction List <span>Data Information for Developer</span></h3>

              <section className="tblWrapp">
                
                <div className="tbl-con tbl-header">
                  
                  <table cellPadding="0" cellSpacing="0" border="0">
                    <thead>
                      <tr>
                        <th width="10%">NO</th>
                        <th width="10%">TX Hash</th>
                        <th width="20%">Create Time(UTC)</th>
                        <th width="20%" className="none">From</th>                          
                        <th width="20%">To</th>
                        <th width="20%">Amount</th>
                      </tr>
                    </thead>
                  </table>

                </div>
                <div className="tbl-con tbl-content" >
                  
                <table cellPadding="0" cellSpacing="0" border="0">
                  <tbody>
                    {data_list}
                  </tbody>
                  </table>
                </div>

            </section>

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

export default TransactionUserList;
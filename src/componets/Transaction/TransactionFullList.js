import React, { Component } from 'react';
import Footer from '../Footer/footer';
import HeaderMenu from '../HeaderMenu/HeaderMenu';
import  './sub_transaction.scss';
import apis from '../../api/api';
import { Link } from "react-router-dom";
import $ from "jquery";



class TransactionFullList extends Component {
    constructor(){
      super();
      this.apis = new apis();
      this.state = {data:undefined,page:1, countperpage:14};
    }

    componentWillMount() {
      // Get Last page, 6 items.
      this._requests = this.apis.getTransactionList(this.state.page,this.state.countperpage).then((data)=>
      {                
          this.setState({data:data});
          this._requests = null;   
      }
      );
  }

  componentWillUnmount(){

  }
 

  render() {

          let data_list = [];

          if(this.state.data)
          {
              for(let [index,d] of this.state.data.transactions.entries())
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


    
              $('ul.pagination').on('click', 'a', function() { // listen for click on pagination link
      if($(this).hasClass('active')) return false;
    
      let active_elm = $('ul.pagination a.active');
    
      if(this.id == 'next'){
        var _next = active_elm.parent().next().children('a');
        if($(_next).attr('id') == 'next') {
    
          // appending next button if reach end
          let num = parseInt($('a.active').text())+1;
          active_elm.removeClass('active');
          $('<li><a class="active" href="#">'+num+'</a></li>').insertBefore($('#next').parent());
    
          $('#prev').parent().next().remove();
          return; 
        }
        _next.addClass('active');   
    
    
    
    
      }
      else if(this.id == 'prev') {
        let _prev = active_elm.parent().prev().children('a');
    
    
        if($(_prev).attr('id') == 'prev') {
          let num = parseInt($('a.active').text()) - 1;
          active_elm.removeClass('active');
          _prev = $('<li><a class="active" href="#">'+num+'</a></li>').insertAfter($('#prev').parent());
    
          $('#next').parent().prev().remove();
    
        };
        _prev.addClass('active');   
    
      } else {
        $(this).addClass('active');
      }
      active_elm.removeClass('active');
    
    });
     //pagination


    return (
      <div className="TransactionFullList wrapper subContainer">
        <HeaderMenu></HeaderMenu>

        <div className="container">

          <div className="fixed">
            <div className="content" id="fullCon">

              <h3><i className="eden-box"></i>Transaction List<span>Data Information for Developer</span></h3>

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
                <li><a id="prev"><i className="eden-chevrons-left"></i></a></li>
                <li><a id="test1" className="active"  href="#">1</a></li>
                <li><a id="test2" href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li><a href="#">4</a></li>
                <li><a href="#">5</a></li>
                <li><a href="#" className="none">6</a></li>
                <li><a href="#" className="none">7</a></li>
                <li><a href="#" className="none">8</a></li>
                <li><a href="#" className="none">9</a></li>
                <li><a href="#" className="none">10</a></li>
                <li><a id="next"><i className="eden-chevrons-right"></i></a></li>
              </ul>
            </div>


        </div>

        <Footer></Footer>

      </div>

    );
  }
};

export default TransactionFullList;
import React, { Component } from 'react';
import Footer from '../Footer/footer';
import HeaderMenu from '../HeaderMenu/HeaderMenu';
import styles from './sub_transaction.scss';

import $ from "jquery";




class TransactionFullList extends Component {
  
  render() {

     //pagination 스크립트 s
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
     //pagination 스크립트 e


    return (
      <div className="TransactionFullList wrapper subContainer">
        <HeaderMenu></HeaderMenu>

        <div className="container">

          <div className="fixed">
            <div className="content" id="fullCon">

              <h3><i className="eden-box"></i>Transaction List<span>Data Information for Developer</span></h3>

              <section className="tblWrapp">

                <div className="tbl-con tbl-header">

                  <table cellpadding="0" cellspacing="0" border="0">
                    <thead>
                      <tr>
                        <th width="10%">NO</th>
                        <th width="10%">TX Hash</th>
                        <th width="20%" class="none">Block NO</th>
                        <th width="20%">생성시간</th>
                        <th width="20%">Before_transaction_ids</th>
                        <th width="20%">Request_transaction_amount</th>
                      </tr>
                    </thead>
                  </table>

                </div>



                <div className="tbl-con tbl-content">

                  <table cellpadding="0" cellspacing="0" border="0">
                    <tbody>
                      <tr>

                        <td width="10%"><a href="/txDtail">1</a></td>
                        <td width="10%"><a href="/txDtail">ddd</a></td>
                        <td width="20%" class="none"><a href="/txDtail">67887768687</a></td>
                        <td width="20%"><a href="/txDtail">2017 17:40:60</a></td>
                        <td width="20%"><a href="/txDtail">38</a></td>
                        <td width="20%"><a href="/txDtail">55</a></td>

                      </tr>
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
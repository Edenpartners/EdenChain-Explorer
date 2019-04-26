import React, { Component } from 'react';
import Footer from '../Footer/footer';
import HeaderMenu from '../HeaderMenu/HeaderMenu';
import './sub.scss';
import apis from '../../api/api';
import { Link } from "react-router-dom";

import $ from "jquery";


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

export default BlockFullList;
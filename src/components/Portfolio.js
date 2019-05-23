import React, { Component } from 'react';
import Modal from './Modal'
export default class Portfolio extends Component {
  state = { show: "modalNotShow",modalId:"none" };

    showModal = (item) => {
      this.setState({ show: "modalShow",modalId:item });
      console.log(item)
    };
  
    hideModal = () => {
      console.log("test")
      this.setState({ show: "modalNotShow",modalId:"none"});
    };
  render() {
    
    
    let resumeData = this.props.resumeData;
    return (
     
      <section id="portfolio">
      <div className="modalStyle">
      
      </div>
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Works.</h1>
          <Modal item={this.state.modalId} show={this.state.show} handleClose={this.hideModal}></Modal>
     
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
         
          {
            resumeData.portfolio && resumeData.portfolio.map((item)=>{
              return(
                
                <div className="columns portfolio-item">
                
                  <div className="item-wrap">
                    <div onClick={(e) => this.showModal(item)} >
                      <img src={`${item.imgurl} `} className="item-img"/>
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>{item.name}</h5>
                          <p>{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
          }
          </div>
        </div>
      </div>
  </section>
        );
  }
}
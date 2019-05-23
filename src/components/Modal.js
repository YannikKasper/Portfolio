import React, { Component } from 'react';

export default class Modal extends Component {
  constructor(props) {
    console.log(props)
    super(props);
    this.handleClose = props.handleClose
    this.showHideClassname = props.showHideClassname
    this.modal = props.modal

  }

  render() {

    this.show = this.props.show
    this.item = this.props.item
    console.log(this.props.item)

    return (
      <div className={this.show}>

        <div className="modal-content">
          <div className="modalTitle">{this.item.name}</div>
          <button className="btnClose" onClick={this.handleClose}>Close</button>
          <img className="imageStyle" src={this.item.imgurl}></img>
          <p className="modalText">{this.item.text}</p>
        </div>

      </div>
    );
  }
}
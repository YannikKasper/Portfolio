import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Impressum from './Impressum';
export default class Footer extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <footer>
      <div className="row">
        <div className="twelve columns">
          <ul className="social-links">
            {
              resumeData.socialLinks && resumeData.socialLinks.map((item)=>{
                return(
                  <li>
                    <a href={item.url}>
                    <i className={item.className} />
                    </a>
                  </li>
                )
              })
            }
          </ul>
          
          
        </div>
        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
        <Link to={"./Datenschutz"}>Datenschutz</Link>
        <br/>
        <Link to={"./Impressum"}>Impressum</Link>
      </div>
    </footer>
    );
  }
}
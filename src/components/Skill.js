import React, { Component } from 'react';

export default  class Skill extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="skill">
      
      
      <div className="row " >
              

              <div className="three columns header-col">
                 <h1><span>Skills</span></h1>
              </div>
  
              <div className="nine columns main-col skill">
  
                 <p>
                 {resumeData.skillsDescription}
                 </p>
  
             <div className="bars">
  
                <ul className="skills">
                <div className="skillCategory">Programming</div>
                  {
                    resumeData["Programming Skills"] && resumeData["Programming Skills"].map((item) => {
                      const levelStyle={
                        width:item.level,
                      };
  
                      return(
                        <li>
                        <span style={levelStyle} className={`bar-expand`}>
                        </span><em>{item.skillname}</em>
                        </li>
                      )
                    })
                  }
  
               </ul>
               
               <ul className="skills">
               <div className="skillCategory">Environments</div>
                  {
                    
                    resumeData["IT Environments"] && resumeData["IT Environments"].map((item) => {
                      const levelStyle={
                        width:item.level,
                      };
  
                      return(
                   
                        <li>
                        <span style={levelStyle} className={`bar-expand`}>
                        </span><em>{item.skillname}</em>
                        </li>
                      )
                    })
                  }
  
               </ul>
              
               <ul className="skills">
               <div className="skillCategory">Others</div>
                  {
                    resumeData["Others"] && resumeData["Others"].map((item) => {
                      const levelStyle={
                        width:item.level,
                      };
  
                      return(
                        <li>
                        <span style={levelStyle} className={`bar-expand`}>
                        </span><em>{item.skillname}</em>
                        </li>
                      )
                    })
                  }
  
               </ul>
  
             </div>
  
           </div>
  
           </div>
  
      </section>

    );

  }
}
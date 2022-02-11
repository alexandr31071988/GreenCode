import React from "react";


function HeaderData() {
   return <GroupData {...groupData2}
   />
}

export default HeaderData

function GroupData {props} {
   const {
   spanText,
   vector1Stroke,
   union,
   vector2Stroke,
   vector3Stroke,
   vectorContainer,
   vector4Stroke,
   vector5,
   menu,
   people,
   notification,
   group1,
   search,
   group2,
   icon,
   groupProps,
   } = props;

   return (
      <div className="group-data">
         <div className="group-3">
            <div className="header">
               <div className="logo">
                  <h1 className="title">
                     <span className="epilogue" {spanText}>
                     </span>
                  </h1>
                  <div className="group-2">
                     <img className="vector1Stroke" src= {vector1Stroke}></img>
                     <img className="union" src= {union}></img>
                  </div>
                  <div className="stroke-container">
                     <img className="vector2Stroke" src= {vector2Stroke}></img>
                     <img className="vector3Stroke" src= {vector3Stroke}></img>
                  </div>
                  <div className="vector-container">
                     
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
   
}
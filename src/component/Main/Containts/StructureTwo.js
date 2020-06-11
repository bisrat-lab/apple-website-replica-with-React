import React, {Component } from 'react';

const StructureTwo = (props) => {
       return ( 
            <div className={`${props.wrapperClass} col-sm-12 col-md-6`}>
                <div className={props.innerClassName}>
                    <div className={`title-wraper ${props.titleColor}`}>
                       {props.title}
                    </div> 
                    <div className="description-wraper">
                       {props.description}
                    </div>
                    <div className="price-wrapper">
                        {props.price}
                    </div>
                   <div className={`links-wrapper ${props.linkColor}`}>
                        <ul>
                            <li><a href="">{props.link}</a></li>
                            <li>{props.children}</li>
                        </ul> 
                    </div>
                </div>
            </div>
         );
}
 
export default StructureTwo;


// class StructureTwo extends Component {
    
//     render() { 
//         const {wrapperClass, innerClassName,title,description,price,link,linkColor,titleColor}=this.props;
//         return ( 
//             <div className={`${wrapperClass} col-sm-12 col-md-6`}>
//                 <div className={innerClassName}>
//                     <div className={`title-wraper ${titleColor}`}>
//                        {title}
//                     </div> 
//                     <div className="description-wraper$">
//                        {description}
//                     </div>
//                     <div className="price-wrapper">
//                         {price}
//                     </div>

//                     <div className={`links-wrapper ${linkColor}`}>
//                         <ul>
//                             <li><a href="">{link}</a></li>
//                             <li>{this.props.children}</li>
                           
//                         </ul> 
//                     </div>
//                 </div>
//             </div>
           
//          );
//     }
// }
 
// export default StructureTwo;


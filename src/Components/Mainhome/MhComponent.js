import React from "react";
import './Mhbody.css';
import bell from '../images/bell.png';

function MainhomeComponent1(props,style){
    return(
        <React.Fragment>
            <h1 className='py-5 home-heading'>
                <strong><span style={{color: props.color1}}>{props.frist1}</span><span style={{color: props.color2}}>{props.frist2}</span></strong>
                    <br/>
                <strong><span style={{color: props.color2}}>{props.second1}</span><span style={{color: props.color1}}>{props.second2}</span></strong>
                    <br/>
                <strong>{props.third}</strong>
                <strong>{props.forth}</strong>
            </h1>

            <p className='home-paragraph'>
                {props.pharagraph}
            </p>

            <div className='py-5'>
                <button className='btn home-button'>{props.buttonname}</button>
            </div>
        </React.Fragment>
        );
}
function MainhomeComponent2(props){
    return(
        <React.Fragment>
            <div className='text-center'>
                <div className='text-center py-4'>
                    <button className='btn category-button'>
                        <img src={bell} alt='bell icon' className='bell-icon'/><span>{props.categoryname}</span>
                    </button> 
                </div>

                <div className="wrapper">
                    <img className="play" src={props.cat1}  alt='item1' style={{top:'5%'}}/>
                    <img className="play" src={props.cat2}  alt='item2'  style={{top:'37%'}}/>
                    <img className="play" src={props.cat3}  alt='item3'  style={{top:'68%'}}/>
                    <img src={props.cat} alt='mainitem' className="mainimage"/>
                </div>
                <br/><br/>
            </div>
        </React.Fragment>
        );
}
export {MainhomeComponent1,MainhomeComponent2};
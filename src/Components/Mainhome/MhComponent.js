import React from "react";
import './Mhbody.css';
import bell from '../images/bell.png';

function MainhomeComponent1(props,style){
    return(
        <React.Fragment>
            <h1 className='py-5 home-heading'>
                <strong>{props.frist1}</strong><strong style={{color: props.color}}>{props.frist2}
                    <br/>
                {props.middle1}</strong>
                <strong>{props.middle2}
                <   br/>
                {props.last}
                    <br/>
                {props.other}</strong>
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
                    <button className='btn' style={{borderRadius:'30px',backgroundColor:'#F6C06A',width:'200px',height:'50px'}}>
                        <img src={bell} alt='bell icon' style={{width:'26px',height:'26px',paddingRight:'1px'}}/><span>   {props.categoryname}</span>
                    </button> 
                </div>

                <div className="wrapper">
                    <img className="play" src={props.cat1}  alt='dkkdk' style={{top:'5%'}}/>
                    <img className="play" src={props.cat2}  alt='dkkdk'  style={{top:'37%'}}/>
                    <img className="play" src={props.cat3}  alt='dkkdk'  style={{top:'68%'}}/>
                        <img src={props.cat} alt='dkkdk' className="styim"/>
                </div>
            </div>
        </React.Fragment>
        );
}
export {MainhomeComponent1,MainhomeComponent2};
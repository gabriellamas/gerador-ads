import React, {Component} from 'react';
import styled from 'styled-components'


const CustomDivElement = styled.div `

    --main-color: ${ props => props.colorPrimary ? props.colorPrimary : '#a7a7a7'};
        position:relative;
        width:728px;
        height:90px;
        border:1px solid #d8d8d8;
        padding:0px;
        font-family: 'Roboto', sans-serif;
        overflow:hidden;
        background:#fff;
        .for-reset-function{
        .first-text-area, .second-text-area{
            position: absolute;
            z-index:1;
            padding: 0px 0px 0px 10px;
            left:20px;
            top:50%;
            transform:translate(0%,-50%);
            &:after{
                content:'';
                position:absolute;
                left:0px;
                top:0%;
                height:100%;
                width:3px;
                background:var(--main-color);
                animation: downBar728x90;
                animation-timing-function: cubic-bezier(.03,.16,.68,1.91);
                animation-duration:${props => props.speed === 1? '7s' : `${7/2}s`};
                animation-delay: none;
                animation-fill-mode:both;
                animation-play-state:${props => props.playPause};

                @keyframes downBar728x90 {
                    0% {
                        height:10%;
                        opacity:0;
                        transform: translate(0%,-120%);
                    }
                    10%{
                        height:100%;
                        opacity:1;
                        transform: translate(0%,0%);
                    }
                    90%{
                        height:100%;
                        opacity:1;
                        transform: translate(0%,0%);
                    }
                    100% {
                        height:20%;
                        opacity:0;
                        transform: translate(0%,-120%);
                    }
                }
            }
            p{
                color:#727272;
                font-size:18px;
                max-width:300px;
                line-height:20px;
                text-align:left;
                animation: enterFade728x90;
                animation-timing-function: ease;
                animation-duration: ${props => props.speed === 1? '7s' : `${7/2}s`};
                animation-delay:none;
                animation-fill-mode:both;
                animation-play-state:${props => props.playPause};
                word-wrap: break-word;

                @keyframes enterFade728x90 {
                    0% {
                        opacity: 0;
                        transform: translate(50%,0%);
                    }
                    10%{
                        opacity: 0;
                        transform: translate(50%,0%);
                    }
                    20%{
                        opacity: 1;
                        transform: translate(0%,0%);
                    }
                    90%{
                        opacity: 1;
                        transform: translate(0%,0%);
                    }
                    100% {
                        opacity: 0;
                        transform: translate(50%,0%);
                    }
                }
            }
        }

        .translate-shape-orange, .translate-shape-white{
            position:absolute;
            z-index:9;
            top:0px;
            left:0px;
            width:100%;
            height:100%;
            background:var(--main-color);
            animation: shapeOrangeAnimation728x90;
            animation-timing-function: ease;
            animation-duration: ${props => props.speed === 1? '7s' : `${7/2}s`};
            animation-delay:${props => props.speed === 1? '7s' : `${7/2}s`};
            animation-fill-mode:both;
            animation-play-state:${props => props.playPause};

            @keyframes shapeOrangeAnimation728x90 {
                0% {
                    opacity: 0;
                    height:0%;
                }
                10% {
                    opacity: 1;
                    height:100%;
                }
                90%{
                    opacity: 1;
                    height:100%;
                }
                100% {
                    opacity: 0;
                    height:0%;
                }
            }
        }

        .second-text-area{
            width:70%;
            max-width:70%;
            animation-delay:${props => props.speed === 1? '7.5s' : `${7.5/2}s`};
            z-index:10;

            &:after{
                animation-delay:${props => props.speed === 1? '7.5s' : `${7.5/2}s`};
                background:#fff;
            }
                
            p{
                animation-delay:${props => props.speed === 1? '7.5s' : `${7.5/2}s`};
                color:#fff;
            }
        }

        .img-product{
            position:absolute;
            z-index:2;
            bottom: 4px;
            left:60%;
            transform:translate(-50%,0%);
            max-width:auto;
            max-height:80px;
            animation: productAnimation728x90;
            animation-timing-function: ease;
            animation-duration:${props => props.speed === 1? '7s' : `${7/2}s`};
            animation-delay:${props => props.speed === 1? '1s' : `${1/2}s`};
            animation-fill-mode:both;
            animation-play-state:${props => props.playPause};

            @keyframes productAnimation728x90 {
                0% {
                    opacity: 0;
                    transform:translate(50%,0%);
                }
                10% {
                    opacity: 1;
                    transform:translate(-50%,0%);
                }
                100% {
                    opacity: 1;
                }
            }
            
        }

        .img-logo{
            position:absolute;
            z-index:1;
            top: 50%;
            right:15px;
            transform:translate(0%,-50%);
            max-width:80px;
            max-height:40px;
        }
        
        .translate-shape-white{
            z-index:7;
            background:#fff;
            animation: shapeWhiteAnimation728x90;
            animation-timing-function: ease;
            animation-duration: ${props => props.speed === 1? '0.5s' : `${0.5/2}s`};
            animation-delay:${props => props.speed === 1? '10s' : `${10/2}s`};
            animation-fill-mode:both;
            animation-play-state:${props => props.playPause};
            @keyframes shapeWhiteAnimation728x90 {
                0% {
                    opacity: 0;
                    transform: scale(0.5) translate(100%,-50%);
                }
                100% {
                    opacity: 1;
                    transform: scale(1) translate(0%,0%);
                }
            }
        }

        .last-text-area{
            position:absolute;
            display:flex;
            align-items:center;
            justify-content:flex-start;
            text-align:center;
            top:50%;
            left:50%;
            transform:translate(-50%,-50%);
            z-index:8;
            animation: lastTextAreaAnimation728x90;
            animation-timing-function: ease;
            animation-duration: ${props => props.speed === 1? '1s' : `${1/2}s`};
            animation-delay:${props => props.speed === 1? '14s' : `${14/2}s`};
            animation-fill-mode:both;
            animation-play-state:${props => props.playPause};
            width:90%;
            word-wrap: break-word;
            @keyframes lastTextAreaAnimation728x90 {
                0% {
                    opacity: 0;
                }
                100% {
                    opacity: 1;
                }
            }
            .text{
                color:var(--main-color);
                font-size:24px;
                text-align:center;
                width: 300px;
                font-family: 'Quicksand', sans-serif;
                padding: 0px 2px;
            }
            .fake-button{
                width:100%;
                max-width:150px;
                text-decoration:none;
                color:#fff;
                background:var(--main-color);
                text-align:center;
                display:inline-block;
                padding:10px 10px;
                border-bottom:3px solid rgba(0,0,0,0.3);
                border-radius:4px;
                animation: fakeButton728x90;
                animation-timing-function: cubic-bezier(.37,.83,.73,1.27);
                animation-duration: ${props => props.speed === 1? '.5s' : `${0.5/2}s`};
                animation-delay:${props => props.speed === 1? '14s' : `${14/2}s`};
                animation-fill-mode:both;
                animation-play-state:${props => props.playPause};
                @keyframes fakeButton728x90 {
                    0% {
                        opacity: 0;
                        transform:scale(0.5);
                    }
                    100% {
                        opacity: 1;
                        transform:scale(1);
                    }
                }
            }
        }
        .img-logo-last{
            position:absolute;
            z-index:10;
            max-width:80px;
            max-height:40px;
            top: 50%;
            right:15px;
            transform:translate(0%,-50%);
            animation: logoLast728x90;
            animation-timing-function: ease;
            animation-duration: ${props => props.speed === 1? '2s' : `${2/2}s`};
            animation-delay:${props => props.speed === 1? '14s' : `${14/2}s`};
            animation-fill-mode:both;
            animation-play-state:${props => props.playPause};
            @keyframes logoLast728x90 {
                0% {
                    opacity: 0;
                }
                100% {
                    opacity: 1;
                }
            }
        }
        .img-product-final{
            max-width:130px;
            max-height:80px;
        }
    }
`;

class Banner728x90 extends Component {

    render() {
        return ( 
            <CustomDivElement colorPrimary={this.props.colorPrimary} playPause={this.props.playPause} speed={this.props.speed}>

                <div className="for-reset-function">
                    <div className="first-text-area">
                        <p>{this.props.firstText}</p> 
                    </div>

                    <img className="img-product" name="product" src={this.props.productImage} alt="Product"/>

                    <div className="translate-shape-orange"></div>

                    <div className="second-text-area">
                        <p> {this.props.secondText} </p> 
                    </div>

                    <img className="img-logo" name="logo" src={this.props.productLogo} alt="Logo"/>

                    <div className="translate-shape-white"></div>

                    <div className="last-text-area">
                        <img className="img-product-final" name="product" src={this.props.productImage} alt="Product"/>

                        <p className="text"> {this.props.lastText} </p> 

                        <p className="fake-button">{this.props.buttonText}</p>
                    </div>

                    <img className="img-logo-last" name="logo" src={this.props.productLogo} alt="Logo"/>
                </div>
            </CustomDivElement>
    
    );}
}

export default Banner728x90;
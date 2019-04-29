import React, {Component} from 'react';
import styled from 'styled-components'


const CustomDivElement = styled.div `

    --main-color: ${ props => props.colorPrimary ? props.colorPrimary : '#a7a7a7'};
        position:relative;
        width:300px;
        height:250px;
        border:1px solid #d8d8d8;
        padding:20px;
        font-family: 'Roboto', sans-serif;
        overflow:hidden;
        background:#fff;
        .for-reset-function{

        .first-text-area, .second-text-area{
            position: absolute;
            z-index:1;
            padding: 0px 0px 0px 10px;
            left:20px;
            top:20px;
            &:after{
                content:'';
                position:absolute;
                left:0px;
                top:0px;
                height:100%;
                width:3px;
                background: var(--main-color);
                animation: downBar300x250;
                animation-timing-function: cubic-bezier(.03,.16,.68,1.91);
                animation-duration:${props => props.speed === 1? '7s' : `${7/2}s`};
                animation-delay: none;
                animation-fill-mode:both;
                animation-play-state:${props => props.playPause};

                @keyframes downBar300x250 {
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
                max-width:190px;
                line-height:20px;
                text-align:left;
                animation: enterFade300x250;
                animation-timing-function: ease;
                animation-duration:${props => props.speed === 1? '7s' : `${7/2}s` };
                animation-delay:none;
                animation-fill-mode:both;
                animation-play-state:${props => props.playPause};
                word-wrap: break-word;

                @keyframes enterFade300x250 {
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
            animation: shapeOrangeAnimation300x250;
            animation-timing-function: ease;
            animation-duration:${props => props.speed === 1? '7s' : `${7/2}s` };
            animation-delay:${props => props.speed === 1? '7s' : `${7/2}s` };
            animation-fill-mode:both;
            animation-play-state:${props => props.playPause};

            @keyframes shapeOrangeAnimation300x250 {
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
            animation-delay:${props => props.speed === 1? '7.5s' : `${7.5/2}s` };
            z-index:10;
            top:40px;

            &:after{
                animation-delay:${props => props.speed === 1? '7.5s' : `${7.5/2}s` };
                background:#fff;
            }
                
            p{
                animation-delay:${props => props.speed === 1? '7.5s' : `${7.5/2}s` };
                color:#fff;
            }
        }

        .img-product{
            position:absolute;
            z-index:2;
            bottom: 15px;
            left:15px;
            max-height:100px;
            max-width:150px;
            animation: productAnimation300x250;
            animation-timing-function: ease;
            animation-duration:${props => props.speed === 1? '7s' : `${7/2}s` };
            animation-delay:${props => props.speed === 1? '1s' : `${1/2}s` };
            animation-fill-mode:both;
            animation-play-state:${props => props.playPause};

            @keyframes productAnimation300x250 {
                0% {
                    opacity: 0;
                    transform:translate(-50%,0%);
                }
                10% {
                    opacity: 1;
                    transform:translate(0%,0%);
                }
                100% {
                    opacity: 1;
                    transform:translate(0%,0%);
                }
            }
            
        }

        .img-logo{
            position:absolute;
            z-index:1;
            bottom: 15px;
            right:15px;
            max-width:80px;
            max-height:40px;
        }
        
        .translate-shape-white{
            z-index:7;
            background:#fff;
            animation: shapeWhiteAnimation;
            animation-timing-function: ease;
            animation-duration:${props => props.speed === 1? '0.5s' : `${0.5/2}s` };
            animation-delay:${props => props.speed === 1? '10s' : `${10/2}s` };
            animation-fill-mode:both;
            animation-play-state:${props => props.playPause};
            @keyframes shapeWhiteAnimation {
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
            top:50%;
            left:50%;
            transform:translate(-50%,-60%);
            text-align:center;
            z-index:8;
            animation: lastTextAreaAnimation;
            animation-timing-function: ease;
            animation-duration:${props => props.speed === 1? '1s' : `${1/2}s` };
            animation-delay:${props => props.speed === 1? '14s' : `${14/2}s` };
            animation-fill-mode:both;
            animation-play-state:${props => props.playPause};
            width:90%;
            word-wrap: break-word;
            @keyframes lastTextAreaAnimation {
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
                font-family: 'Quicksand', sans-serif;
                padding: 0px 2px;
            }
            .fake-button{
                max-width:100%;
                text-decoration:none;
                color:#fff;
                background:var(--main-color);
                text-align:center;
                display:inline-block;
                padding:10px 35px;
                border-bottom:3px solid rgba(0,0,0,0.3);
                margin:10px auto 0px auto;
                border-radius:4px;
                animation: fakeButton300x250;
                animation-timing-function: cubic-bezier(.37,.83,.73,1.27);
                animation-duration:${props => props.speed === 1? '0.5s' : `${0.5/2}s` };
                animation-delay:${props => props.speed === 1? '14s' : `${14/2}s` };
                animation-fill-mode:both;
                animation-play-state:${props => props.playPause};
                @keyframes fakeButton300x250 {
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
            bottom:10px;
            left:50%;
            transform:translate(-50%,0%);
            animation: logoLast300x250;
            animation-timing-function: ease;
            animation-duration:${props => props.speed === 1? '2s' : `${2/2}s`};
            animation-delay:${props => props.speed === 1? '14s' : `${14/2}s`};
            animation-fill-mode:both;
            animation-play-state:${props => props.playPause};
            @keyframes logoLast300x250 {
                0% {
                    opacity: 0;
                }
                100% {
                    opacity: 1;
                }
            }
        }
        .img-product-final{
            max-width:150px;
            max-height:80px;
        }
 
    }
`;

class Banner300x250 extends Component {

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

export default Banner300x250;
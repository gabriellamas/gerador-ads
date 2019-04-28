import React, {Component} from 'react';
import styled from 'styled-components'


const CutomDiv = styled.div `
    margin:10px 0px;
    .for-reset-function{
        position: relative;
        width:100%;
        background:#f7f7f7;
        .progress-bar{
            display:block;
            width:100%;
            height:5px;
            background:#acacac;
            border-radius:5px;
            animation:${props => props.speed === 1? 'progressbar 15s linear both' : 'progressbar 7.5s linear both' };
            animation-play-state:${props => props.playPause};
            @keyframes progressbar {
                0% {
                    width:0%;
                }
                100% {
                    width:100%;
                }
            }
        }
    }
`;

class ProgressBar extends Component {

    render() {
        return ( 

        <CutomDiv customMargin={this.props.customMargin} playPause={this.props.playPause} speed={this.props.speed}>
            <div className="for-reset-function">
                <span className="progress-bar"></span>
            </div>  
        </CutomDiv>
    );}
}

export default ProgressBar;
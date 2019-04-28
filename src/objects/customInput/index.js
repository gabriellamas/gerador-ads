import React, {Component} from 'react';
import styled from 'styled-components'
import loading from '../../img/loading.svg'


const CutomLabel = styled.label `
    position:relative;
    display:flex;
    flex-direction:column;
    & + label{
        margin-top:20px;
    }
    span{
        font-size: 14px;
        margin:${props => props.customtype === 'file' || props.customtype === 'color'? '0px 0px 8px 0px;' : '0px 0px 3px 0px;'}
    }
    input{
        border:none;
        background:none;
    }
    input[type='text']{
        padding:5px 5px;
        font-size:14px;
        color:inherit;
        border-bottom:1px solid;
        border-color:inherit;
    }
    &[name='text'] span{
        font-size:14px;
        color:inherit;
    }
    .fake-input-file, .fake-input-color{
        position:relative;
        background: rgba(255,255,255,.1);
        border-radius: 3px;
        display: flex;
        width:auto;
        align-items: center;
        justify-content: space-between;
        padding: 10px 10px;
        cursor: pointer;
        transition:300ms;
        i{
            opacity: 0.8;
        }
        &:hover i{
            opacity: 1;
        }
    }
    .fake-input-color{
        background:none;
        padding:0;
        width:100%;
        display:flex;
        justify-content:flex-start;
        align-items:center;
        span{
            margin:0px 0px 0px 10px;
        }
    }
    .colorpicker-icon{
        height:auto;
    }
    .fake-input-file{
        padding:8px 10px;
        overflow:hidden;
        &:hover{
            background: rgba(255,255,255,.2);
        }
    }
    .loading-img-wrap{
        position:absolute;
        left:0px;
        top:0px;
        z-index:5;
        width:100%;
        height:100%;
        background:rgba(0,0,0,0.6);
        display:block;
       img{
            position:absolute;
            z-index:10;
            top:50%;
            left:50%;
            transform:translate(-50%,-50%);
       }
    }
    .text-input-fake{
        padding:8px;
        font-size: 14px;
    }
    .fake-input-file-after-upload{
        .text-input-fake{
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
        }
    }
    .suggested-size{
        font-size:12px;
        margin-top:5px;
        text-align:right;
        opacity:.5;
    }
    .color-example{
        width:20px;
        height:20px;
        background:#fff;
        border-radius:50%;
        border:1px solid #acacac;
    }
    .hide{
        display:none;
    }
`;

class CustomInput extends Component {

    render() {
        return ( 
        <CutomLabel customMargin={this.props.customMargin} name={this.props.customtype} customtype={this.props.customtype}>
            <span>{this.props.customLabel}</span>

            {
                this.props.customtype === 'file' 
                ? 
                <>
                    <div className={`fake-input-file ${this.props.id}`}>
                        <p className="text-input-fake">Add</p><i className="material-icons">control_point</i>
                        <div className="loading-img-wrap hide">
                            <img src={loading} alt="loading"/>
                        </div>
                    </div>
                    <p className="suggested-size">{this.props.suggestedSize}</p>
                </>
                :
                (this.props.customtype === 'color' ? <div className="fake-input-color"><i className="material-icons">format_color_fill</i><span className="color-example hide"></span></div> : false)
            }

            <input 
                data-nameimg={this.props.id} 
                data-namefakelabel={this.props.id} 
                onChange={this.props.customOnChange} 
                type={this.props.customtype} 
                className={this.props.customtype === 'file' || this.props.customtype === 'color'? 'hide' : '' }
            />
        </CutomLabel>
    );}
}

export default CustomInput;
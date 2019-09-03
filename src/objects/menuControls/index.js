import React, {Component} from 'react';
import styled from 'styled-components'
import CustomInput from  '../customInput/index'


const CutomDiv = styled.div `
    position:absolute;
    left:0px;
    top:0px;
    z-index:999;
    width:95%;
    max-width:300px;
    background:#00112d;
    padding:0px 0px 40px 0px;
    border-radius:0px;
    box-shadow:0px 0px 5px rgba(0,0,0,0.3);
    height:100vh;
    color:#fff;
    overflow:hidden;
    header{
      position:relative;
      padding:20px 30px;
      background:#182E51;
      color:#DCDFE5;
      display:flex;
      align-items:center;
      justify-content:space-between;
      &:after{
        content:'';
        position:absolute;
        bottom:3px;
        left:50%;
        transform:translate(-50%,50%) rotate(45deg);
        width:20px;
        height:20px;
        background:#182E51;
      }
    }
    .body-controls{
      padding:35px 30px 30px;
      color:#DCDFE5;
    }
  }
    
`;

class ProgressBar extends Component {

    render() {
        return ( 

        <CutomDiv>
            <header>
                <h2>Customize</h2>
                <i className="material-icons">arrow_right_alt</i>
            </header>

            <div className="body-controls">

                <CustomInput 
                    customLabel={'Message 1'}
                    customOnChange={this.props.getValueInputText1}
                    customMargin={'0px 0px 20px 0px'}
                    customtype={'text'}
                />

                <CustomInput 
                    customLabel={'Message 2'}
                    customOnChange={this.props.getValueInputText2}
                    customMargin={'0px 0px 20px 0px'}
                    customtype={'text'}
                />

                <CustomInput 
                    customLabel={'Message 3'}
                    customOnChange={this.props.getValueInputText3}
                    customMargin={'0px 0px 20px 0px'}
                    customtype={'text'}
                />

                <CustomInput 
                    customLabel={'Call to Action button'}
                    customOnChange={this.props.getValueInputText4}
                    customMargin={'0px 0px 20px 0px'}
                    customtype={'text'}
                />

                <CustomInput 
                    customLabel={'Primary Color'}
                    customOnChange={this.props.verifyInputColor}
                    customMargin={'0px 0px 20px 0px'}
                    customtype={'color'}
                />

                <CustomInput 
                    customLabel={'Upload product image'}
                    suggestedSize={'Suggested Size: 300 x 159'}
                    customOnChange={this.props.verifyInputFile}
                    customMargin={'0px 0px 20px 0px'}
                    customtype={'file'}
                    id={'product'}
                />

                <CustomInput 
                    customLabel={'Upload logo'}
                    customOnChange={this.props.verifyInputFile}
                    customMargin={'0px 0px 20px 0px'}
                    customtype={'file'}
                    id={'logo'}
                />

                <button type="button" className="bt-download-banners" onClick={()=>this.props.generateBanners()}><i className="material-icons">cloud_download</i><span>Download Banners</span></button>

            </div>

           
        </CutomDiv>
    );}
}

export default ProgressBar;

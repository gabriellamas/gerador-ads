import React, { Component } from 'react';
import styled from 'styled-components'
import Banner300x250 from  '../../banners/300x250/index.js'
import Banner728x90 from  '../../banners/728x90/index.js'
import Banner160x600 from  '../../banners/160x600/index.js'
import CustomInput from  '../../objects/customInput/index'
import ProgressBar from '../../objects/progress-bar/index'
import logo from '../../img/logo.png'
import car from '../../img/carro-example.png'

const CustomSectionElement = styled.section`
  .container-banners{
    width:728px;
    margin:20px auto;
    display:grid;
    grid-template-columns: auto auto; 
    grid-template-rows: auto auto;
    grid-column-gap: 20px;
    grid-row-gap: 20px;
  }

  .banner-728x90-area{
    grid-column-start: 1;
    grid-column-end: two;
    grid-row-start: row1-start;
    grid-row-end: 1;
  }

  .container-controls{
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

  .timeline-controls{
    position:relative;
    margin:15px auto 0px;
    width:100%;
    max-width:400px;
    .obs{
      position:absolute;
      left:50px;
      top:0px;
      font-size:12px;
      width:250px;
      background:#fff;
      border:1px solid #acacac;
      border-bottom:2px solid #acacac;
      padding:10px;
      border-radius:5px;
    }
  }
  .restart, .play, .pause, .speed{
    background:#f7f7f7;
    border:none;
    border-radius:50%;
    width:40px;
    height:40px;
    outline:none;
    color:#6d6d6d;
    border-bottom:2px solid rgba(0,0,0,0.1);
    cursor:pointer;
    font-size:12px;
    margin:0px 2.5px;
    &:active{
      color:#b7b7b7;
      border-bottom:2px solid #fff;
      transform:translate(0px,2px)
    }
  }
  .speed{
    margin:0px 0px;
  }
  .speed-2x{
    background:#d9f4dd;
    position:relative;
    &::after{
      content:'2x';
      position:absolute;
      top:50%;
      right:0px;
      transform:translate(100%,-32%);
      width:20px;
      height:20px;
    }
  }

  .bt-download-banners{
    position:absolute;
    bottom:0px;
    left:50%;
    transform:translate(-50%, -50%);
    border:none;
    border-bottom:3px solid rgba(0,0,0,.5);
    color:#fff;
    background:#ea5b02;
    padding:15px 10px;
    width:90%;
    font-size:18px;
    cursor:pointer;
    border-radius:4px;
    transition:300ms;
    display:flex;
    align-items:center;
    justify-content:center;
    i{
      margin-right:8px;
    }
    &:hover{
      background:#ff680a;
    }
  }

`;

class AdsGenerator extends Component {

  state = {
    logo: logo,
    product: car,
    firstText:'This layout is for you that has a large input text, for the first scene of the animation.',
    secondText:'Your second information may be even slightly smaller',
    lastText:'Leave your final message here',
    buttonText:'Know more',
    colorPrimary:'#e8501e',
    playPause:'running',
    speed:1
  }

  getValueInputText1 = event=>{
    let inputValue = event.target.value;
    this.setState({
      firstText: inputValue
    });
  }
  getValueInputText2 = event=>{
    let inputValue = event.target.value;
    this.setState({
      secondText: inputValue
    });
  }
  getValueInputText3 = event=>{
    let inputValue = event.target.value;
    this.setState({
      lastText: inputValue
    });
  }

  getValueInputText4 = event=>{
    let inputValue = event.target.value;
    this.setState({
      buttonText: inputValue
    });
  }


  play = ()=> {
    this.setState({
      playPause: 'running'
    });
  }

  pause = ()=> {
    this.setState({
      playPause: 'paused'
    });
  }

  fast = ()=> {
    if(this.state.speed === 1){
      this.setState({
        speed:2
      });
    }else if(this.state.speed === 2){
      this.setState({
        speed:1
      });
    }
  }

  reset = event=> {
    let banners = document.querySelectorAll('.for-reset-function');
    banners.forEach(function(element){
      element.classList.remove('for-reset-function')
      void event.target.offsetWidth;
      element.classList.add('for-reset-function')
    })

    this.setState({
      playPause: 'running'
    });
  }


  verifyInputFile = event => {
    
    let input = event.target;
    let nameFakeLabel = input.dataset.namefakelabel;
    let fakeInputProduct = document.querySelector(`.${nameFakeLabel}`);

    if (input.files && input.files[0]) {

      let reader = new FileReader();

      reader.readAsDataURL(input.files[0]);

      reader.onloadstart = () => {
        fakeInputProduct.childNodes[2].classList.remove('hide')
      }

      reader.onload = event => {

        fakeInputProduct.childNodes[2].classList.add('hide')

        let copyLoading = this.state.loading;
        copyLoading = 'hide'
        this.setState({
          loading: copyLoading
        });

        let nameImg = input.dataset.nameimg
        let logoCliente = document.querySelectorAll(`img[name=${nameImg}]`)

        logoCliente.forEach(function(product){
          product.setAttribute('src', event.target.result);
        })
 
        if (!fakeInputProduct.classList.contains('fake-input-file-after-upload')) {
          fakeInputProduct.classList.toggle('fake-input-file-after-upload')
        }
        
        fakeInputProduct.childNodes[0].textContent = input.files[0].name;
        fakeInputProduct.childNodes[1].textContent = 'autorenew'

      };

    }

  }


  verifyInputColor = event => {
    let selectedColor = event.target.value

    this.setState({
      colorPrimary: selectedColor
    })

    let colorExample = document.querySelector('.color-example')
    colorExample.classList.remove('hide')
    colorExample.style.background = selectedColor;
  }


  
  render() {

    return (
      <CustomSectionElement>

        <div className="container-controls">

          <header>
            <h2>Customize</h2>
            <i className="material-icons">arrow_right_alt</i>
          </header>

          <div className="body-controls">

            <CustomInput 
              customLabel={'Message 1'}
              customOnChange={this.getValueInputText1}
              customMargin={'0px 0px 20px 0px'}
              customtype={'text'}
            />

            <CustomInput 
              customLabel={'Message 2'}
              customOnChange={this.getValueInputText2}
              customMargin={'0px 0px 20px 0px'}
              customtype={'text'}
            />

            <CustomInput 
              customLabel={'Message 3'}
              customOnChange={this.getValueInputText3}
              customMargin={'0px 0px 20px 0px'}
              customtype={'text'}
            />

            <CustomInput 
              customLabel={'Call to Action button'}
              customOnChange={this.getValueInputText4}
              customMargin={'0px 0px 20px 0px'}
              customtype={'text'}
            />

            <CustomInput 
              customLabel={'Primary Color'}
              customOnChange={this.verifyInputColor}
              customMargin={'0px 0px 20px 0px'}
              customtype={'color'}
            />

            <CustomInput 
              customLabel={'Upload product image'}
              suggestedSize={'Suggested Size: 300 x 159'}
              customOnChange={this.verifyInputFile}
              customMargin={'0px 0px 20px 0px'}
              customtype={'file'}
              id={'product'}
            />

            <CustomInput 
              customLabel={'Upload logo'}
              customOnChange={this.verifyInputFile}
              customMargin={'0px 0px 20px 0px'}
              customtype={'file'}
              id={'logo'}
            />

            <button type="button" className="bt-download-banners"><i class="material-icons">cloud_download</i><span>Download Banners</span></button>

          </div>
         
        </div>  

        <div className="timeline-controls">
        <ProgressBar playPause={this.state.playPause} speed={this.state.speed}/>
          <div className="flex-area a-items-center j-content-center w-lg-100">
            <button onClick={this.reset} customtype="button" className="restart noselect"><i className="material-icons">replay</i></button>
            <button onClick={this.play} customtype="button" className="play noselect"><i className="material-icons">play_arrow</i></button>
            <button onClick={this.pause} customtype="button" className="pause noselect"><i className="material-icons">pause</i></button>
            <button onClick={this.fast} type="button" className={`speed ${this.state.speed === 2 ? 'speed-2x' : ''}`}><i className="material-icons">fast_forward</i></button>

            {/* <div className="flex-area relative">
              <p className="obs">Aumente a velocidade da animação clicando no relógio, isso vai te ajudar a editar os quadros com mais agilidade</p>
              <button onClick={this.reset} type="button" className="restart"><i className="material-icons">timer</i></button>
            </div> */}

          </div>
        </div>

        <div className="container-banners">

          <div className="banner-728x90-area">
            <Banner728x90 
              productLogo={this.state.logo}
              productImage={this.state.product}
              firstText={this.state.firstText} 
              secondText={this.state.secondText}
              lastText={this.state.lastText}
              buttonText={this.state.buttonText}
              colorPrimary={this.state.colorPrimary}
              playPause={this.state.playPause}
              speed={this.state.speed}
            />
          </div>

          <div className="banner-300x250-area">
            <Banner300x250 
              productLogo={this.state.logo}
              productImage={this.state.product}
              firstText={this.state.firstText} 
              secondText={this.state.secondText}
              lastText={this.state.lastText}
              buttonText={this.state.buttonText}
              colorPrimary={this.state.colorPrimary}
              playPause={this.state.playPause}
              speed={this.state.speed}
            />
          </div>

          <div className="banner-160x600-area">
            <Banner160x600 
              productLogo={this.state.logo}
              productImage={this.state.product}
              firstText={this.state.firstText} 
              secondText={this.state.secondText}
              lastText={this.state.lastText}
              buttonText={this.state.buttonText}
              colorPrimary={this.state.colorPrimary}
              playPause={this.state.playPause}
              speed={this.state.speed}
            />
          </div>
          
        </div>

      </CustomSectionElement>
    );
  }
}

export default AdsGenerator;

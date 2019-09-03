import React, { Component } from 'react';
import styled from 'styled-components'
import Banner300x250 from  '../../banners/300x250/index.js'
import Banner728x90 from  '../../banners/728x90/index.js'
import Banner160x600 from  '../../banners/160x600/index.js'
import ProgressBar from '../../objects/progress-bar/index'
import logo from '../../img/logo.png'
import car from '../../img/carro-example.png'
import MenuControls from '../../objects/menuControls/index'

import JSZip from 'jszip'
import { saveAs } from 'file-saver';

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


  play = event=> {
    
    if(document.querySelector('.progress-bar').offsetWidth === 400)
      this.reset(event)
    else
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

  reset = event => {
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

  generateBanners = ()=>{
    console.log('oi')

    let zip = new JSZip();
    zip.file("Hello.txt", "Hello World\n");
    let img = zip.folder("img");
    img.file(car, '', {base64: true});
    zip.generateAsync({type:"blob"})
    .then(function(content) {
        // see FileSaver.js
        saveAs(content, "example.zip");
    });
  }


  
  render() {

    return (
      <CustomSectionElement>

        <MenuControls 
          getValueInputText1={this.getValueInputText1}
          getValueInputText2={this.getValueInputText2}
          getValueInputText3={this.getValueInputText3}
          getValueInputText4={this.getValueInputText4}
          verifyInputFile={this.verifyInputFile} 
          verifyInputColor={this.verifyInputColor}
          generateBanners={this.generateBanners}
        />

        <div className="timeline-controls">
          <ProgressBar playPause={this.state.playPause} speed={this.state.speed}/>
          <div className="flex-area a-items-center j-content-center w-lg-100">
            <button onClick={this.reset} customtype="button" className="restart noselect"><i className="material-icons">replay</i></button>
            <button onClick={this.play} customtype="button" className="play noselect"><i className="material-icons">play_arrow</i></button>
            <button onClick={this.pause} customtype="button" className="pause noselect"><i className="material-icons">pause</i></button>
            <button onClick={this.fast} type="button" className={`speed ${this.state.speed === 2 ? 'speed-2x' : ''}`}><i className="material-icons">fast_forward</i></button>
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

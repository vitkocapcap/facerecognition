import React, {Component} from 'react';
import Navigation from './components/Navigation/Navigation';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Logo from './components/Logo/Logo'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank'
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import './App.css';

const app = new Clarifai.App({
  apiKey: '0728b1eab97743cfb129f351f6ff42fe'
});

const particlesOptions ={
  particles: {
    number:{
      value:30,
      density:{
        enable: true,
        value_area: 800
      }
    }
  }
}

class App extends Component {
  constructor(){
    super();
    this.state={
      input:'',
      imageUrl:''
    }
  }

  onInputChange = (event) =>{
    this.setState({input: event.target.value});
  }

  onButtonSubmit = ()=>{
    this.setState({imageUrl: this.state.input})
    console.log('click');
    app.models
    .predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
    .then(
    function(response){
      console.log(response);
    },
    function(err){

    }
  ); 
  }

  render() {
    return (
      <div className="App">
        <Particles className='particles'
          params={particlesOptions}
        />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
        <FaceRecognition imageUrl={this.state.imageUrl}/> 
        {/* <Logo />
 */}

      </div>
    );
  }
}

export default App;

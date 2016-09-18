import React, { Component } from 'react';
import './speech-recognition.scss';
import mic from './mic.gif';
import micAnimate from './mic-animate.gif'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      supportVoice: 'webkitSpeechRecognition' in window,
    };
  }

  componentDidMount() {
    if (this.state.supportVoice) {
      const WebkitSpeechRecognition = window.webkitSpeechRecognition;
      this.recognition = new WebkitSpeechRecognition();
      this.recognition.continuous = true;
      this.recognition.interimResults = true;
      this.recognition.lang = 'en-CA';
      this.recognition.onresult = (event) => {
        let interimTranscript = '';
        let finalTranscript = '';
        for (let i = event.resultIndex; i < event.results.length; ++i) {
          if (event.results[i].isFinal) {
            finalTranscript += event.results[i][0].transcript;
            this.setState({
              inputValue: finalTranscript,
            });
            if (this.props.onChange) this.props.onChange(finalTranscript);
            if (this.props.onEnd) this.props.onEnd(finalTranscript);
          } else {
            interimTranscript += event.results[i][0].transcript;
            this.setState({
              inputValue: interimTranscript,
            });
            if (this.props.onChange) this.props.onChange(interimTranscript);
          }
        }
      };
    }
  }

  changeValue(event) {
    this.setState({
      inputValue: event.target.value,
    });
  }

  say() {
    if (this.state.supportVoice) {
      if (!this.state.speaking) {
        // start listening
        this.recognition.start();
      } else {
        this.recognition.stop();
        const question = this.state.inputValue;
      }
      this.setState({
        speaking: !this.state.speaking,
        inputValue: '',
      });
    }
  }

  render() {
    return (
      <div className={"chatInputWrapper " + this.props.className} >
        {
          this.state.supportVoice &&
          <img
            src={this.state.speaking ? micAnimate : mic}
            className="micImg"
            onClick={this.say.bind(this)} />
        }
        <input
          value={this.state.inputValue}
          onChange={this.changeValue.bind(this)}
          className="chatMessageInput"
          placeholder="Type your message" />
      </div>
    );
  }
}
import React, { Component } from 'react';
import './App.css';
import AceEditor from 'react-ace';

import 'brace/mode/java';
import 'brace/theme/monokai';
import 'brace/ext/language_tools';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      code: '',
      errors:'',
      output:'',
      consoleText:'',
      passedTestCount:'',
      totalTestCount:'' 
    };
  }


  onChange = (value) => {
      this.setState({code:value});
  }

  onLoad = (_editor) => {
      _editor.$blockScrolling = Infinity;
    // console.log('load',newValue);
  }

  onTest = () => {
    //run the code against test cases
  }

  onSubmit = () => {
    //check if all test cases passed and score accordingly
  }

  runCode = () => {
    
    let consoleLog = (msg) => {
      this.setState({consoleText: msg})
    }

    window.console.log = consoleLog;

    try{
      const output = eval(this.state.code);
      if(output !== undefined){
        const temp = eval(this.state.code).toString();
        this.setState({output:temp, consoleText:''});
      }

      
    }
    catch(err){
      //take previous output and append to it
      this.setState({consoleText:err.toString(), output:''});
    }

  }

  render() {
    return (
      
      <div className="App">
        <h1 className="pull-left"> Write Your code here : </h1>
        
        <div className="codeSpace">
            
            {/* for writing code */}
            <AceEditor
              mode="javascript"
              theme="monokai"
              className="codeEditor"
              name="code"
              onLoad={this.onLoad}
              onChange={this.onChange}
              fontSize={14}
              showPrintMargin={true}
              showGutter={true}
              highlightActiveLine={true}
              value={this.state.code}
              setOptions={{
                    enableBasicAutocompletion: true,
                    enableLiveAutocompletion: true,
                    enableSnippets: true,
                    showLineNumbers: true,
                    tabSize: 2,
                  }}
            />
              
            {/* for code results */}
            <AceEditor
              mode="javascript"
              theme="monokai"
              className="codeResult"
              readOnly={true}
              name="code"
              onLoad={this.onLoad}
              onChange={this.onChange}
              fontSize={14}
              showPrintMargin={true}
              showGutter={true}
              highlightActiveLine={true}
              value={this.state.output}
              setOptions={{
                    enableBasicAutocompletion: false,
                    enableLiveAutocompletion: false,
                    enableSnippets: true,
                    showLineNumbers: false,
                    tabSize: 2,
                  }}
            />      

          </div>    

          <div className="margin-left-10 margin-top-30 btn-group">
            <button className="btn btn-primary" onClick={this.runCode}>
              Run Code
            </button>
            <button className="btn btn-success" onClick={this.onSubmit}>Submit</button>
          </div>
  
          <h5>Console</h5>
          <AceEditor
              mode="javascript"
              theme="monokai"
              className="codeResult"
              readOnly={true}
              name="code"
              onLoad={this.onLoad}
              onChange={this.onChange}
              fontSize={14}
              showPrintMargin={true}
              showGutter={true}
              highlightActiveLine={true}
              value={this.state.consoleText}
              setOptions={{
                    enableBasicAutocompletion: false,
                    enableLiveAutocompletion: false,
                    enableSnippets: true,
                    showLineNumbers: false,
                    tabSize: 2,
                  }}
            />      

      </div>
    );
  }
}


export default App;

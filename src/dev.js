import './dev.scss';

import ReactVirtualInput from './main';

class App extends React.Component{
  state = {
    value:'Hello react virtual input!',
    focused: true,
  };
  _change = (e) =>{
    this.setState({value:e.target.value})
  };

  _clear =(e) =>{
    this.setState({value:''})
  }

  _toPwd (inValue){
    return inValue.replace(/\w/g,'*');
  }

  _click1 = e => {
    this.setState({
      focused: false
    });
  };


  _focus = e => {
    this.setState({
      focused: true
    });
  };

  render(){
    return (
      <div className="hello-react-virtual-input">
          <button onClick={this._click1}>Test blur</button>
          <input type="text" value={this.state.value} onChange={this._change}/>
          <ReactVirtualInput 
            focused={this.state.focused} 
            clearable={true} 
            onClear={this._clear} 
            placeholder="input your text.." 
            filter={this._toPwd.bind(this)} 
            maxLength={100} 
            onFocus={this._focus}
            value={this.state.value} />
      </div>
    );
  }
}


ReactDOM.render(
    <App />,
    document.getElementById('app')
);

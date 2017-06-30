import './dev.scss';

import ReactVirtualInput from './main';

class App extends React.Component{
  state = {
    value:'Hello react virtual input!'
  };
  _change = (e) =>{
    this.setState({value:e.target.value})
  };

  _clear =(e) =>{
    this.setState({value:''})
  }

  render(){
    return (
      <div className="hello-react-virtual-input">
          <input type="text" value={this.state.value} onChange={this._change}/>
          <ReactVirtualInput onClear={this._clear} maxLength={100} value={this.state.value} />
      </div>
    );
  }
}


ReactDOM.render(
    <App />,
    document.getElementById('app')
);

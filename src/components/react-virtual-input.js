import './style.scss';

import React,{PureComponent} from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import closeImg from './close@3x.png';
import noop from 'noop';

export default class extends PureComponent{
  static propTypes = {
    className:PropTypes.string,
    onClear:PropTypes.func,
    maxLength:PropTypes.number,
    value:PropTypes.string,
    placeholder:PropTypes.string,
    filter: PropTypes.func,
    focused:PropTypes.bool,
    onFocus:PropTypes.func,
    onBlur:PropTypes.func
  };

  static defaultProps = {
    maxLength:Number.MAX_VALUE,
    focused:false,
    filter: function(inValue){
      return inValue;
    },
    onFocus:noop,
    onBlur:noop,
    onClear:noop,
  };

  constructor(props){
    super(props);
    this.state = {
      focused:props.focused
    };
  }

  componentWillMount(){
    const {onBlur} = this.props;
    document.addEventListener('click',()=>{
      this.setState({ focused:false });
      onBlur(this);
    },false);
  }

  componentWillReceiveProps(nextProps){
    const { focused } = nextProps;
    if(focused !== this.state.focused){
      this.setState({ focused });
    }
  }

  getSlicedValue(){
    const { maxLength,value,filter } = this.props;
    return filter(value.slice(0,maxLength));
  }

  stop(inEvent){
    inEvent.nativeEvent.stopImmediatePropagation();
    inEvent.nativeEvent.stopPropagation();
  }

  _onClick = (inEvent) => {
    const {focused,onFocus} = this.props;
    const { clear,root } = this.refs;
    this.stop(inEvent);
    if(inEvent.target === root){
      this.setState({ focused:true });
      onFocus(this);
    }
  };

  _onClear = inEvent => {
    const {onClear} = this.props;
    this.stop(inEvent);
    onClear(inEvent);
  };

  render(){
    const {className,value,onClear,focused,placeholder,filter,...props} = this.props;
    const hasValue = !!value;
    return (
      <div {...props} onClick={this._onClick} ref='root' className={classNames('react-virtual-input',className)}>
        <span className="react-virtual-input-text">{this.getSlicedValue()}</span>
        {!hasValue && <span className="react-virtual-input-placeholder">{placeholder}</span>}
        {this.state.focused && <span data-value={hasValue} className="blinking-cursor" />}
        {hasValue && <span className="react-virtual-input-close" onClick={this._onClear} ><img src={closeImg} /></span>}
      </div>
    );
  }
}

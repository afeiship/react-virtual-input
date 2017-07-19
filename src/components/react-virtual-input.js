import './style.scss';

import React,{PureComponent} from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import closeImg from './close@3x.png';
import noop from 'noop';

export default class extends PureComponent{
  static propTypes = {
    className:PropTypes.string,
    clearable: PropTypes.bool,
    blinkable: PropTypes.bool,
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
    maxLength: Number.MAX_VALUE,
    clearable: true,
    blinkable: true,
    focused: false,
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
      this.setState({ focused: false })
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
    const { clear,root,text } = this.refs;
    this.stop(inEvent);
    if(root.contains(inEvent.target) && inEvent.target !== clear){
      this.setState({ focused:true },onFocus);
    }
  };

  _onClear = inEvent => {
    const {onClear} = this.props;
    this.stop(inEvent);
    onClear(inEvent);
  };

  render(){
    const {className,value,clearable,blinkable,onClear,focused,placeholder,filter,...props} = this.props;
    const hasValue = !!value;
    return (
      <div {...props} ref='root'
          onClick={this._onClick}
          data-focuced={focused}
          data-clearable={clearable}
          data-blinkable={blinkable}
          className={classNames('react-virtual-input',className)}>
        <span className="react-virtual-input-text" ref='text'>{this.getSlicedValue()}</span>
        {!hasValue && <span className="react-virtual-input-placeholder">{placeholder}</span>}
        {blinkable && this.state.focused && <span data-value={hasValue} className="blinking-cursor" />}
        {clearable && hasValue && <span className="react-virtual-input-close" onClick={this._onClear} ><img src={closeImg} /></span>}
      </div>
    );
  }
}

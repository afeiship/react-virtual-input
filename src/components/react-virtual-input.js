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
    focused:PropTypes.bool,
    onFocus:PropTypes.func,
    onBlur:PropTypes.func,
  };

  static defaultProps = {
    maxLength:Number.MAX_VALUE,
    focused:false,
    onFocus:noop,
    onBlur:noop
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
    },true);
  }

  componentWillReceiveProps(nextProps){
    const { focused } = nextProps;
    if(focused !== this.state.focused){
      this.setState({ focused });
    }
  }

  getSlicedValue(){
    const { maxLength,value } = this.props;
    return value.slice(0,maxLength);
  }

  _onClick = (inEvent) => {
    const {focused,onFocus} = this.props;
    this.setState({ focused:true });
    onFocus(this);
  };

  render(){
    const {className,value,onClear,focused,...props} = this.props;
    const hasValue = !!value;
    return (
      <div {...props} onClick={this._onClick} className={classNames('react-virtual-input',className)}>
        <span className="react-virtual-input-text">{this.getSlicedValue()}</span>
        {this.state.focused && <span data-value={hasValue} className="blinking-cursor" />}
        {hasValue && <span className="react-virtual-input-close" onClick={onClear} ><img src={closeImg} /></span>}
      </div>
    );
  }
}

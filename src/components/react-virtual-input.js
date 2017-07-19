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
    onFocus: PropTypes.func,
  };

  static defaultProps = {
    maxLength: Number.MAX_VALUE,
    clearable: true,
    blinkable: true,
    focused: false,
    onFocus: noop,
    filter: function(inValue){
      return inValue;
    },
    onClear:noop,
  };


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
      onFocus(inEvent);
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
        {blinkable && focused && <span data-value={hasValue} className="blinking-cursor" />}
        {clearable && hasValue && <span className="react-virtual-input-close" onClick={this._onClear} ><img src={closeImg} /></span>}
      </div>
    );
  }
}

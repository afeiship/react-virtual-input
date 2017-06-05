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
  };

  static defaultProps = {
    maxLength:1000000
  };

  getSlicedValue(){
    const {maxLength,value} = this.props;
    console.log(value.slice(0,maxLength));
    return value.slice(0,maxLength);
  }

  render(){
    const {className,value,onClear,...props} = this.props;
    return (
      <div {...props} className={classNames('react-virtual-input',className)}>
        <span className="react-virtual-input-text">{this.getSlicedValue()}</span>
        <span className="blinking-cursor">|</span>
        {!!value && <span className="react-virtual-input-close" onClick={onClear} ><img src={closeImg} /></span>}
      </div>
    );
  }
}

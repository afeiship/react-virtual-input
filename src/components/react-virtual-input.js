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
  };

  constructor(props){
    super(props);
    this.state = {
      value:props.value
    };
  }

  componentWillReceiveProps(nextProps){
    this.setState(nextProps);
  }

  render(){
    const {className,value,onClear,...props} = this.props;
    return (
      <div {...props} className={classNames('react-virtual-input',className)}>
        <span className="react-virtual-input-text">{this.state.value}</span>
        <span className="blinking-cursor">|</span>
        {!!this.state.value && <img className="react-virtual-input-close" onClick={onClear} src={closeImg} />}
      </div>
    );
  }
}

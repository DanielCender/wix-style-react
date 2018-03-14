import React, {Component} from 'react';
import PropTypes from 'prop-types';
import reactElementToJSXString from 'react-element-to-jsx-string';

import Range from '../../src/Range';
import DatePicker from '../../src/DatePicker';
import Input from '../../src/Input';
import Label from '../../src/Label';
import storySettings from './StorySettings';

export default class Form extends Component {

  static propTypes = {
    onChange: PropTypes.func.isRequired,
    withLabel: PropTypes.bool,
    label: PropTypes.object,
    firstInput: PropTypes.object,
    lastInput: PropTypes.object,
    firstDate: PropTypes.object,
    lastDate: PropTypes.object,
    required: PropTypes.bool,
    info: PropTypes.string,
    rangeType: PropTypes.object
  };

  componentDidUpdate(props) {
    props.onChange(reactElementToJSXString(this.getComponent()));
  }

  componentDidMount() {
    this.props.onChange(reactElementToJSXString(this.getComponent()));
  }

  getComponent() {
    return (
      <Range dataHook={storySettings.dataHook} required={this.props.required} info={this.props.info}>
        {this.props.withLabel ? <Label {...this.props.label}/> : null}
        {(this.props.rangeType.value === 'InputRange') ?
          <Input id="first" {...this.props.firstInput}/> : <DatePicker placeholderText="From" id="fromDate" {...this.props.firstDate}/>}
        {(this.props.rangeType.value === 'InputRange') ?
          <Input id="last" {...this.props.lastInput}/> : <DatePicker placeholderText="To" id="toDate" {...this.props.lastDate}/>}
      </Range>
    );
  }

  render() {
    return this.getComponent();
  }
}

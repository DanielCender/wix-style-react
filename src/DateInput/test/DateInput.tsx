import * as React from 'react';
import DateInput from '..';
import { dateInputTestkitFactory } from '../../../testkit';
import { dateInputTestkitFactory as dateInputEnzymeTestkitFactory } from '../../../testkit/enzyme';
import { dateInputTestkitFactory as dateInputPuppeteerTestkitFactory } from '../../../testkit/puppeteer';
import * as enzyme from 'enzyme';
import * as puppeteer from 'puppeteer';

function DateInputWithMandatoryProps() {
  return <DateInput />;
}

function DateInputWithAllProps() {
  return (
    <DateInput
      ariaControls="label"
      ariaDescribedby="label"
      ariaLabel="text"
      autoFocus
      autoSelect
      autocomplete="off"
      className="cls"
      clearButton
      customInput={<span />}
      dataHook="hook"
      dateFormat={'12/01/19'}
      defaultValue="value"
      disableEditing
      disabled
      forceFocus
      forceHover
      hideStatusSuffix
      id="1"
      locale="en"
      max={10}
      maxLength={100}
      menuArrow
      min={5}
      name="name"
      noLeftBorderRadius
      noRightBorderRadius
      onBlur={_ev => {}}
      onChange={_ev => {}}
      onClear={_ev => {}}
      onCompositionChange={_isComposing => {}}
      onEnterPressed={_ev => {}}
      onEscapePressed={_ev => {}}
      onFocus={_ev => {}}
      onInputClicked={_ev => {}}
      onKeyDown={_ev => {}}
      onKeyUp={_ev => {}}
      onPaste={_ev => {}}
      placeholder="placeholder"
      prefix={<div />}
      readOnly
      ref={React.createRef()}
      required
      roundInput
      rtl
      size="large"
      status="error"
      statusMessage="msg"
      step={1}
      suffix={<div />}
      tabIndex={0}
      textOverflow="clip"
      tooltipPlacement="bottom"
      type="text"
      value="value"
      withSelection
    />
  );
}

async function testkits() {
  const testkit = dateInputTestkitFactory({
    dataHook: 'hook',
    wrapper: document.createElement('div'),
  });

  const enzymeTestkit = dateInputEnzymeTestkitFactory({
    dataHook: 'hook',
    wrapper: enzyme.mount(<div />),
  });

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const puppeteerTestkit = await dateInputPuppeteerTestkitFactory({
    dataHook: 'hook',
    page,
  });
}

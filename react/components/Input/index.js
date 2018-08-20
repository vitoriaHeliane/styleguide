import React, { Component } from 'react'
import PropTypes from 'prop-types'
import config from 'vtex-tachyons/config.json'
import SearchIcon from '../icon/Search'
import DenyIcon from '../icon/Deny'

class Input extends Component {
  constructor(props) {
    super(props)

    this.state = {
      active: false,
    }
  }

  handleChange = event => {
    this.props.onChange && this.props.onChange(event)
  }

  handleKeyPress = event => {
    this.props.onKeyPress && this.props.onKeyPress(event)
  }

  handleClickClear = event => {
    this.props.onChange &&
      this.props.onChange({
        ...event,
        target: {
          ...event.target,
          value: '',
        },
      })
  }

  handleFocus = event => {
    this.setState({ active: true })
    this.props.onFocus && this.props.onFocus(event)
  }

  handleBlur = event => {
    this.setState({ active: false })
    this.props.onBlur && this.props.onBlur(event)
  }

  handleSubmit = event => {
    this.props.onSubmit && this.props.onSubmit(event, this.props.value)
  }

  render() {
    const {
      errorMessage,
      error,
      label,
      size,
      token,
      helpText,
      dataAttributes,
      type,
      disabled,
      prefix,
    } = this.props
    const { active } = this.state

    const isSearch = type === 'search'

    const dataAttrs = Object.keys(dataAttributes).reduce((acc, key) => {
      acc[`data-${key}`] = dataAttributes[key]
      return acc
    }, {})

    const borderWidth = 1
    const border = `bw${borderWidth} br2 b--solid outline-0 ${
      error || errorMessage ? 'b--red hover-b--red' : ''
    } `
    let classes = `w-100 ma0 border-box near-black ${border} ${
      token ? 'code' : ''
    } `

    if (disabled) {
      classes += 'bg-light-gray bg-light-silver b--light-silver silver '
    } else {
      classes += `bg-white ${
        active ? 'b--gray' : 'b--light-gray'
      } hover-b--silver `
    }

    const topBottomHeight = config.borderRadius[borderWidth] * 2
    const prefixAndSuffixPosition = `${config.borderRadius[1]}rem`
    const calcPrefixAndSuffixHeight = `calc(100% - ${topBottomHeight}rem)`

    let prefixAndSuffixClasses = 'absolute gray fw5 flex items-center '
    let iconSize = 16

    switch (size) {
      case 'large':
        classes += `f5 pv4 ${prefix ? 'pl8 pr6' : 'ph5'}`
        prefixAndSuffixClasses += 'ph4 f5'
        iconSize = 18
        break
      case 'x-large':
        classes += `f4 pv5 ${prefix ? 'pl8 pr7' : 'ph5'}`
        prefixAndSuffixClasses += 'ph5 f4 '
        iconSize = 22
        break
      default:
        classes += `f6 pv3 ${prefix ? 'pl7 pr5' : 'ph5'}`
        prefixAndSuffixClasses += 'ph3 fw5 f6 '
        iconSize = 16
        break
    }

    const suffix = isSearch ? (
      this.props.value ? (
        <span onClick={this.handleClickClear}>
          <DenyIcon color={config.colors.blue} size={iconSize - 2} />
        </span>
      ) : (
        <SearchIcon color={config.colors.blue} size={iconSize} />
      )
    ) : (
      this.props.suffix
    )

    const showHelpText = !errorMessage && helpText

    const inputContent = (
      <label className="vtex-input w-100">
        {label && (
          <span className="vtex-input__label db mb3 w-100">{label}</span>
        )}
        <div className="flex vtex-input-prefix__group relative">
          {prefix && (
            <span
              style={{
                height: calcPrefixAndSuffixHeight,
                top: prefixAndSuffixPosition,
                left: prefixAndSuffixPosition,
              }}
              className={`vtex-input__prefix ${prefixAndSuffixClasses}`}
            >
              {prefix}
            </span>
          )}
          <input
            {...dataAttrs}
            onBlur={this.handleBlur}
            onFocus={this.handleFocus}
            onChange={this.handleChange}
            onKeyPress={this.handleKeyPress}
            className={classes}
            disabled={this.props.disabled}
            accept={this.props.accept}
            autoComplete={this.props.autoComplete}
            autoCorrect={this.props.autoCorrect}
            autoFocus={this.props.autoFocus}
            autoSave={this.props.autoSave}
            defaultValue={this.props.defaultValue}
            inputMode={this.props.inputMode}
            list={this.props.list}
            max={this.props.max}
            maxLength={this.props.maxLength}
            min={this.props.min}
            minLength={this.props.minLength}
            multiple={this.props.multiple}
            name={this.props.name}
            pattern={this.props.pattern}
            placeholder={this.props.placeholder}
            readOnly={this.props.readOnly}
            required={this.props.required}
            spellCheck={this.props.spellCheck}
            src={this.props.src}
            step={this.props.step}
            tabIndex={this.props.tabIndex}
            type={this.props.type}
            value={this.props.value}
            id={this.props.id}
          />
          {suffix && (
            <span
              style={{
                height: calcPrefixAndSuffixHeight,
                top: prefixAndSuffixPosition,
                right: prefixAndSuffixPosition,
              }}
              className={`vtex-input__suffix ${prefixAndSuffixClasses}`}
            >
              {suffix}
            </span>
          )}
        </div>
        {errorMessage && (
          <div className="red f6 mt3 lh-title">{errorMessage}</div>
        )}
        {showHelpText && (
          <div className="mid-gray f6 mt3 lh-title">{helpText}</div>
        )}
      </label>
    )

    if (isSearch) {
      return <form onSubmit={this.handleSubmit}>{inputContent}</form>
    }

    return <React.Fragment>{inputContent}</React.Fragment>
  }
}

Input.defaultProps = {
  autoFocus: false,
  token: false,
  dataAttributes: {},
  disabled: false,
  label: '',
  multiple: false,
  readOnly: false,
  error: false,
  size: 'regular',
  prefix: '',
  suffix: '',
}

Input.propTypes = {
  /** Error highlight */
  error: PropTypes.bool,
  /** Error message */
  errorMessage: PropTypes.string,
  /** If the input is an API Key, App Key or App Token */
  token: PropTypes.bool,
  /** Help text */
  helpText: PropTypes.node,
  /** Input size */
  size: PropTypes.oneOf(['regular', 'large', 'x-large']),
  /** Label */
  label: PropTypes.string,
  /** Prefix */
  prefix: PropTypes.string,
  /** Prefix */
  suffix: PropTypes.string,
  /** Spec attribute */
  accept: PropTypes.string,
  /** Spec attribute */
  disabled: PropTypes.bool,
  /** Spec attribute */
  autoComplete: PropTypes.string,
  /** Spec attribute */
  autoCorrect: PropTypes.string,
  /** Spec attribute */
  autoFocus: PropTypes.bool,
  /** Spec attribute */
  autoSave: PropTypes.string,
  /** List of data attributes as a object like `{'locale': 'en-US'}` */
  dataAttributes: PropTypes.object,
  /** Spec attribute */
  defaultValue: PropTypes.string,
  /** Spec attribute */
  id: PropTypes.string,
  /** Spec attribute */
  inputMode: PropTypes.string,
  /** Spec attribute */
  list: PropTypes.string,
  /** Spec attribute */
  max: PropTypes.string,
  /** Spec attribute */
  maxLength: PropTypes.string,
  /** Spec attribute */
  min: PropTypes.string,
  /** Spec attribute */
  minLength: PropTypes.string,
  /** Spec attribute */
  multiple: PropTypes.bool,
  /** Spec attribute */
  name: PropTypes.string,
  /** Spec attribute */
  pattern: PropTypes.string,
  /** Spec attribute */
  placeholder: PropTypes.string,
  /** Spec attribute */
  readOnly: PropTypes.bool,
  /** Spec attribute */
  required: PropTypes.bool,
  /** Spec attribute */
  spellCheck: PropTypes.string,
  /** Spec attribute */
  src: PropTypes.string,
  /** Spec attribute */
  step: PropTypes.string,
  /** Spec attribute */
  tabIndex: PropTypes.string,
  /** Spec attribute */
  type: PropTypes.string,
  /** Spec attribute */
  value: PropTypes.string,
  /** onChange event */
  onChange: PropTypes.func,
  /** onKeyPress event */
  onKeyPress: PropTypes.func,
  /** onFocus event */
  onFocus: PropTypes.func,
  /** onBlur event */
  onBlur: PropTypes.func,
  /** onSubmit event */
  onSubmit: PropTypes.func,
}

export default Input

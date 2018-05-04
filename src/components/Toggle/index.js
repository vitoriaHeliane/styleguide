import React, { Component } from 'react'
import PropTypes from 'prop-types'

import DenyIcon from '../icon/Deny'
import CheckIcon from '../icon/Check'

import config from 'vtex-tachyons/config.json'

class Toggle extends Component {
  render() {
    const { semantic, disabled, id, checked, label } = this.props

    let classes = 'flex items-center relative h2 w3 ph1 br4 bg-animate '
    let circleClasses = 'absolute br-100 pa3 mh2 '
    let iconDenyClasses = 'absolute mh2 dn c-danger '
    let iconCheckClasses = 'absolute mh3 dn c-success '

    if (semantic) {
      if (!disabled && !checked) {
        classes += 'bg-danger '
        iconDenyClasses += 'flex o-100 '
        iconCheckClasses += 'flex o-0 '
      }

      if (!disabled && checked) {
        classes += 'bg-success '
        iconDenyClasses += 'flex o-0 '
        iconCheckClasses += 'flex o-100 '
      }
    } else {
      if (disabled) {
        classes += 'bg-base-2 '
      } else {
        if (checked) {
          classes += 'bg-primary '
        } else {
          classes += 'bg-base-6 '
        }
      }
    }

    if (checked) {
      circleClasses += 'left-2 '
      iconDenyClasses += 'left-2 '
      iconCheckClasses += 'left-2 '
    } else {
      circleClasses += 'left-0 '
      iconDenyClasses += 'left-0 '
      iconCheckClasses += 'left-0 '
    }

    if (disabled) {
      circleClasses += 'bg-base-4 '
    } else {
      circleClasses += 'bg-base-1 '
    }

    return (
      <label
        htmlFor={id || undefined}
        className={`flex flex-row items-center ${!disabled && 'pointer'}`}
      >
        <div className={`vtex-toggle ${classes}`}>
          <div
            style={{
              height: '1.5rem',
              width: '1.5rem',
              transition: 'all .2s ease-out',
              boxShadow: disabled ? 'none' : '0 0 10px rgba(0,0,0,0.2)',
            }}
            className={`${circleClasses}`}
          />
          <div
            className={iconDenyClasses}
            style={{
              marginLeft: '.5rem',
              transition: 'left .2s ease-out',
            }}
          >
            <DenyIcon color="currentColor" />
          </div>
          <div
            className={iconCheckClasses}
            style={{
              transition: 'left .2s ease-out',
            }}
          >
            <CheckIcon color="currentColor" />
          </div>
        </div>
        <input
          id={id || undefined}
          type="checkbox"
          className="dn"
          disabled={disabled}
          checked={checked}
          onClick={this.props.onClick}
          onChange={this.props.onChange}
        />
        {label && <span className="ml5">{label}</span>}
      </label>
    )
  }
}

Toggle.defaultProps = {
  checked: false,
  disabled: false,
  semantic: false,
  label: '',
}

Toggle.propTypes = {
  checked: PropTypes.bool,
  semantic: PropTypes.bool,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
}

export default Toggle

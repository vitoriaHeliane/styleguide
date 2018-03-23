import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Button extends Component {
  handleClick = event => {
    !this.props.disabled && this.props.onClick && this.props.onClick(event)
  };

  render() {
    const {
      large,
      xLarge,
      block,
      primary,
      secondary,
      disabled,
      add,
      edit,
    } = this.props

    if (secondary && primary) {
      throw new Error('Button component cannot be primary AND secondary')
    }

    if (large && xLarge) {
      throw new Error(
        'Button component cannot have two sizes at the same time'
      )
    }

    let classes = 'bw1 ba fw5 ttu br2 fw4 '

    if (large) {
      classes += 'pv4 ph6 '
      classes += 'f5 '
    } else if (xLarge) {
      classes += 'pv5 ph7 '
      classes += 'f4 '
    } else {
      classes += 'pv3 ph5 '
      classes += 'f6 '
    }

    if (!secondary && !primary && !disabled) {
      classes += 'b--transparent blue bg-transparent hover-heavy-blue hover-b--transparent '
    }

    if (secondary && !disabled) {
      classes += 'bg-white b--blue blue hover-white '
    }
    if (secondary) {
      classes += 'hover-bg-blue '
    }

    if (primary && !disabled) {
      classes += 'b--blue bg-blue white hover-bg-heavy-blue hover-b--heavy-blue '
    }

    if (disabled) {
      classes += 'b--light-gray bg-light-gray gray '
    } else {
      classes += 'pointer '
    }

    if (block) {
      classes += 'w-100 '
    }

    let iconSize
    let iconColor
    let iconClasses = ' '

    if (add || edit) {
      if (large) {
        iconSize = '12'
        iconClasses += 'mr3'
      } else if (xLarge) {
        iconSize = '14'
        iconClasses += 'mr4'
      } else {
        iconSize = '10'
        iconClasses += 'mr2'
      }

      if (primary) {
        iconColor = '#ffffff'
      } else if (disabled) {
        iconColor = '#979899'
      } else {
        iconColor = '#368DF7'
      }
    }

    return (
      <button
        id={this.props.id}
        autoFocus={this.props.autoFocus}
        disabled={this.props.disabled}
        name={this.props.name}
        type={this.props.type}
        value={this.props.value}
        className={classes}
        onClick={this.handleClick}
        onMouseEnter={this.props.onMouseEnter}
        onMouseLeave={this.props.onMouseLeave}
        onMouseOver={this.props.onMouseOver}
        onMouseOut={this.props.onMouseOut}
        onMouseUp={this.props.onMouseUp}
        onMouseDown={this.props.onMouseDown}
        ref={this.props.ref}
      >
        <div className="flex items-center">
          {
            add &&
            <div className="flex-none">
              <svg className={iconClasses} version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 16 16" width={iconSize} height={iconSize}>
                <path fill={iconColor} d="M15,7H9V1c0-0.6-0.4-1-1-1S7,0.4,7,1v6H1C0.4,7,0,7.4,0,8s0.4,1,1,1h6v6c0,0.6,0.4,1,1,1s1-0.4,1-1V9h6 c0.6,0,1-0.4,1-1S15.6,7,15,7z"></path>
              </svg>
            </div>
          }
          {
            edit &&
            <div className="flex-none">
              <svg className={iconClasses} version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 16 16" width={iconSize} height={iconSize}>
                <rect y="14" fill={iconColor} width="16" height="2"></rect> <path fill={iconColor} d="M11.7,3.3c0.4-0.4,0.4-1,0-1.4l-1.6-1.6c-0.4-0.4-1-0.4-1.4,0L0,9v3h3L11.7,3.3z"></path>
              </svg>
            </div>
          }
          <div className="flex-none">
            {this.props.children}
          </div>
        </div>
      </button>
    )
  }
}

Button.defaultProps = {
  large: false,
  xLarge: false,
  block: false,
  primary: false,
  secondary: false,
  disabled: false,
  autoFocus: false,
  type: 'button',
}

Button.propTypes = {
  /** Large style */
  large: PropTypes.bool,
  /** xLarge style */
  xLarge: PropTypes.bool,
  /** Block style */
  block: PropTypes.bool,
  /** Primary style */
  primary: PropTypes.bool,
  /** Secondary style */
  secondary: PropTypes.bool,
  /** Add icon */
  add: PropTypes.bool,
  /** Edit icon */
  edit: PropTypes.bool,
  /** (Button spec attribute) */
  id: PropTypes.string,
  /** (Button spec attribute) */
  autoFocus: PropTypes.bool,
  /** (Button spec attribute) */
  autoComplete: PropTypes.string,
  /** (Button spec attribute) */
  disabled: PropTypes.bool,
  /** (Button spec attribute) */
  name: PropTypes.string,
  /** (Button spec attribute) */
  type: PropTypes.string,
  /** (Button spec attribute) */
  value: PropTypes.string,
  /** Label of the Button */
  children: PropTypes.node.isRequired,
  /** onClick event */
  onClick: PropTypes.func,
  /** onMouseEnter event */
  onMouseEnter: PropTypes.func,
  /** onMouseLeave event */
  onMouseLeave: PropTypes.func,
  /** onMouseOver event */
  onMouseOver: PropTypes.func,
  /** onMouseOut event */
  onMouseOut: PropTypes.func,
  /** onMouseUp event */
  onMouseUp: PropTypes.func,
  /** onMouseDown event */
  onMouseDown: PropTypes.func,
  /** ref function */
  ref: PropTypes.func,
}

export default Button

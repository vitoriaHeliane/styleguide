import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SuccessIcon from '../icon/Success'
import FailureIcon from '../icon/Failure'
import WarningIcon from '../icon/Warning'
import CloseIcon from '../icon/Close'
import config from 'vtex-tachyons/config.json'

class Alert extends Component {
  componentDidMount() {
    if (this.props.autoClose && this.props.onClose) {
      this.timeout = setTimeout(this.props.onClose, this.props.autoClose)
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timeout)
  }

  render() {
    const { type, onClose } = this.props
    let classes = 'pa5 br2 '
    let showIcon = false
    let Icon = 'div'
    let color = 'c-default'

    switch (type) {
      case 'success': {
        showIcon = true
        classes += 'bg-success--light '
        Icon = SuccessIcon
        color = 'c-success'
        break
      }
      case 'error': {
        showIcon = true
        classes += 'bg-danger--light '
        Icon = FailureIcon
        color = 'c-danger'
        break
      }
      case 'warning': {
        showIcon = true
        classes += 'bg-warning--light '
        Icon = WarningIcon
        color = 'c-warning'
        break
      }
      default: {
        classes += 'bg-info--light '
        break
      }
    }

    return (
      <div className={`vtex-alert flex justify-between f5 c-base-8 ${classes}`}>
        <div className="flex items-center">
          {showIcon && <span className={color}>
            <Icon color="currentColor" size={18} />
          </span>}

          <div className={`${showIcon ? 'ph5 flex' : 'pr5'}`}>
            {this.props.children}
          </div>
        </div>

        {onClose &&
          <div className="vtex-alert__close-icon pointer flex items-center pv2 c-base-8" onClick={onClose}>
            <CloseIcon color="currentColor" size={10} />
          </div>}
      </div>
    )
  }
}

Alert.propTypes = {
  /** Style of the alert */
  type: PropTypes.oneOf(['success', 'error', 'warning', 'info']),
  /** Content of the alert */
  children: PropTypes.node.isRequired,
  /** If this function is defined, a close icon will appear and this function will be called when alert is closed. */
  onClose: PropTypes.func,
  /** Time in ms to auto close the alert */
  autoClose: PropTypes.number,
}

Alert.defaultProps = {
  type: 'info',
}

export default Alert

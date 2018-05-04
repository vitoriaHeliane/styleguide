import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import ResponsiveModal from 'react-responsive-modal'
import Button from '../Button'

class Modal extends PureComponent {
  render() {
    const {
      isOpen,
      centered,
      onClose,
      confirmButton,
      cancelButton,
      onConfirm,
      onCancel,
      customButtons,
      title,
    } = this.props

    // Paddings and window size are set like this (rather than through Tachyons)
    // due to the react-responsive-modal classes overriding the Tachyons classes.
    // TODO: Investigate if it's possible to avoid doing that
    const rem = parseFloat(getComputedStyle(document.documentElement).fontSize)
    const isMobile = window.innerWidth < 40 * rem

    const modalHorizontalPadding = isMobile ? '1.5rem' : '3rem'
    const modalVerticalPadding = isMobile ? '2rem' : '2.5rem'
    const buttonsPaddingBottom = isMobile ? '1.5rem' : '2rem'

    const closeButtonOffset = isMobile ? '0rem' : '0.25rem'
    const hasButtons = (confirmButton || cancelButton || customButtons)

    return (
      <ResponsiveModal
        open={isOpen}
        center={centered}
        onClose={onClose}
        animationDuration={100}
        classNames={{
          overlay: 'vtex-modal__overlay',
          modal: 'vtex-modal__modal br2',
          closeIcon: 'vtex-modal__close-icon',
        }}
        styles={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
          },
          modal: {
            padding: modalHorizontalPadding,
            paddingTop: modalVerticalPadding,
            paddingBottom: hasButtons ? buttonsPaddingBottom : modalVerticalPadding,
          },
          closeButton: {
            top: closeButtonOffset,
            right: closeButtonOffset,
            padding: '0.75rem',
          },
        }}
        closeIconSize={18}
      >
        {title && (
          <h3 className="mt0">
            {title}
          </h3>
        )}
        {this.props.children}
        {hasButtons && (
          <div className="flex justify-end pt5 pt6-m">
            {customButtons}
            {cancelButton && (
              <Button onClick={onCancel}>{cancelButton}</Button>
            )}
            {confirmButton && (
              <Button primary onClick={onConfirm}>{confirmButton}</Button>
            )}
          </div>
        )}
      </ResponsiveModal>
    )
  }
}

Modal.defaultProps = {
  isOpen: false,
  onConfirm: () => {},
  onCancel: () => {},
  customButtons: null,
}

Modal.propTypes = {
  /** Content of the modal */
  children: PropTypes.node.isRequired,
  /** Modal title */
  title: PropTypes.string,
  /** Center the modal (for small content) */
  centered: PropTypes.bool,
  /** Show or hide the modal */
  isOpen: PropTypes.bool.isRequired,
  /** Function to call when the close action is triggered */
  onClose: PropTypes.func.isRequired,
  /** Confirm button text */
  confirmButton: PropTypes.string,
  /** Confirm button function */
  onConfirm: PropTypes.func,
  /** Cancel button text */
  cancelButton: PropTypes.string,
  /** Cancel button function */
  onCancel: PropTypes.func,
  /** Component containing custom buttons */
  customButtons: PropTypes.node,
}

export default Modal

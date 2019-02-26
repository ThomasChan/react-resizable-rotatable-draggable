import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Rect from './Rect'
import { centerToTL, tLToCenter, getNewStyle, degToRadian } from './utils'

export default class DrrHOC extends Component {

  static propTypes = {
    className: PropTypes.string,
    left: PropTypes.number.isRequired,
    top: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    rotatable: PropTypes.bool,
    rotateAngle: PropTypes.number,
    parentRotateAngle: PropTypes.number,
    zoomable: PropTypes.string,
    minWidth: PropTypes.number,
    minHeight: PropTypes.number,
    aspectRatio: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.bool
    ]),
    onRotateStart: PropTypes.func,
    onRotate: PropTypes.func,
    onRotateStop: PropTypes.func,
    onResizeStart: PropTypes.func,
    onResize: PropTypes.func,
    onResizeStop: PropTypes.func,
    onDragStart: PropTypes.func,
    onDrag: PropTypes.func,
    onDragStop: PropTypes.func
  }

  static defaultProps = {
    parentRotateAngle: 0,
    rotateAngle: 0,
    rotatable: true,
    zoomable: '',
    minWidth: 10,
    minHeight: 10
  }

  handleRotate = (angle, startAngle, el) => {
    if (!this.props.onRotate) return
    let rotateAngle = Math.round(startAngle + angle)
    if (rotateAngle >= 360) {
      rotateAngle -= 360
    } else if (rotateAngle < 0) {
      rotateAngle += 360
    }
    if (rotateAngle > 356 || rotateAngle < 4) {
      rotateAngle = 0
    } else if (rotateAngle > 86 && rotateAngle < 94) {
      rotateAngle = 90
    } else if (rotateAngle > 176 && rotateAngle < 184) {
      rotateAngle = 180
    } else if (rotateAngle > 266 && rotateAngle < 274) {
      rotateAngle = 270
    }
    return [rotateAngle, el]
  }

  onRotate = (...p) => {
    if (typeof this.props.onRotate === 'function') {
      this.props.onRotate(...this.handleRotate(...p))
    }
  }

  onRotateStop = (...p) => {
    if (typeof this.props.onRotateStop === 'function') {
      this.props.onRotateStop(...this.handleRotate(...p))
    }
  }

  handleResize = (length, alpha, rect, type, isShiftKey, el) => {
    if (!this.props.onResize) return
    const { rotateAngle, aspectRatio, minWidth, minHeight, parentRotateAngle } = this.props
    const beta = alpha - degToRadian(rotateAngle + parentRotateAngle)
    const deltaW = length * Math.cos(beta)
    const deltaH = length * Math.sin(beta)
    const ratio = isShiftKey && !aspectRatio ? rect.width / rect.height : aspectRatio
    const {
      position: { centerX, centerY },
      size: { width, height }
    } = getNewStyle(type, { ...rect, rotateAngle }, deltaW, deltaH, ratio, minWidth, minHeight)

    return [centerToTL({ centerX, centerY, width, height, rotateAngle }), isShiftKey, type, el]
  }

  onResize = (...p) => {
    if (typeof this.props.onResize === 'function') {
      this.props.onResize(...this.handleResize(...p))
    }
  }

  onResizeStop = (...p) => {
    if (typeof this.props.onResizeStop === 'function') {
      this.props.onResizeStop(...this.handleResize(...p))
    }
  }

  render () {
    const {
      top, left, width, height, rotateAngle, parentRotateAngle, zoomable, rotatable,
      className, children,
      ...props
    } = this.props

    const styles = tLToCenter({ top, left, width, height, rotateAngle })

    return (
      <Rect
        className={className}
        styles={styles}
        zoomable={zoomable}
        rotatable={rotatable}
        parentRotateAngle={parentRotateAngle}
        {...props}
        onResize={this.onResize}
        onResizeStop={this.onResizeStop}
        onRotate={this.onRotate}
        onRotateStop={this.onRotateStop}
      >
        {children}
      </Rect>
    )
  }
}

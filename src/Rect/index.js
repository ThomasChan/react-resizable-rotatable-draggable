import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'
import { getLength, getAngle, getCursor } from '../utils'

const zoomableMap = {
  'n': 't',
  's': 'b',
  'e': 'r',
  'w': 'l',
  'ne': 'tr',
  'nw': 'tl',
  'se': 'br',
  'sw': 'bl'
}

export default class Rect extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    styles: PropTypes.object,
    zoomable: PropTypes.string,
    rotatable: PropTypes.bool,
    onResizeStart: PropTypes.func,
    onResize: PropTypes.func,
    onResizeStop: PropTypes.func,
    onRotateStart: PropTypes.func,
    onRotate: PropTypes.func,
    onRotateStop: PropTypes.func,
    onDragStart: PropTypes.func,
    onDrag: PropTypes.func,
    onDragStop: PropTypes.func,
    parentRotateAngle: PropTypes.number
  }

  setElementRef = (ref) => {
    this.$element = ref;
    if (typeof this.props.ref === 'function') {
      this.props.ref(ref);
    }
  }

  // Drag
  startDrag = (e) => {
    e.preventDefault()
    e.stopPropagation()
    this.startX = e.clientX
    this.startY = e.clientY
    this.props.onMouseDown && this.props.onMouseDown(e)
    this.props.onDragStart && this.props.onDragStart()
    this._isDragging = true
    document.addEventListener('mousemove', this.onDragMove)
    document.addEventListener('mouseup', this.onDragUp)
  }

  onDragMove = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (!this._isDragging) return // patch: fix windows press win key during mouseup issue
    const { clientX, clientY } = e
    const deltaX = clientX - this.startX
    const deltaY = clientY - this.startY
    this.props.onDrag(deltaX, deltaY)
    this.startX = clientX
    this.startY = clientY
  }

  onDragUp = (e) => {
    e.preventDefault()
    e.stopPropagation()
    document.removeEventListener('mousemove', this.onDragMove)
    document.removeEventListener('mouseup', this.onDragUp)
    if (!this._isDragging) return
    this._isDragging = false
    const { clientX, clientY } = e
    const deltaX = clientX - this.startX
    const deltaY = clientY - this.startY
    this.props.onDragStop && this.props.onDragStop(deltaX, deltaY)
  }

  // Rotate
  startRotate = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.button !== 0) return
    const { clientX, clientY } = e
    const rect = this.$element.getBoundingClientRect()
    this.center = {
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2
    }
    this.startVector = {
      x: clientX - this.center.x,
      y: clientY - this.center.y
    }
    this.startAngle = this.props.styles.transform.rotateAngle
    this.props.onRotateStart && this.props.onRotateStart()
    this._isRotating = true
    document.addEventListener('mousemove', this.onRotateMove)
    document.addEventListener('mouseup', this.onRotateUp)
  }

  onRotateMove = (e) => {
    if (!this._isRotating) return // patch: fix windows press win key during mouseup issue
    const { clientX, clientY } = e
    const rotateVector = {
      x: clientX - this.center.x,
      y: clientY - this.center.y
    }
    const angle = getAngle(this.startVector, rotateVector)
    this.props.onRotate(angle, this.startAngle)
  }

  onRotateUp = (e) => {
    document.removeEventListener('mousemove', this.onRotateMove)
    document.removeEventListener('mouseup', this.onRotateUp)
    if (!this._isRotating) return
    this._isRotating = false
    const { clientX, clientY } = e
    const rotateVector = {
      x: clientX - this.center.x,
      y: clientY - this.center.y
    }
    const angle = getAngle(this.startVector, rotateVector)
    this.props.onRotateStop && this.props.onRotateStop(angle, this.startAngle)
  }
  // Resize
  startResize = (e, cursor) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.button !== 0) return
    document.body.style.cursor = cursor
    const { styles: { position: { centerX, centerY }, size: { width, height }, transform: { rotateAngle } } } = this.props
    this.startX = e.clientX
    this.startY = e.clientY
    this.rect = { width, height, centerX, centerY, rotateAngle }
    this.type = e.target.getAttribute('class').split(' ')[ 0 ]
    this.props.onResizeStart && this.props.onResizeStart()
    this._isResizing = true
    document.addEventListener('mousemove', this.onResizeMove)
    document.addEventListener('mouseup', this.onResizeUp)
  }

  onResizeMove = (e) => {
    if (!this._isResizing) return // patch: fix windows press win key during mouseup issue
    const { clientX, clientY } = e
    const deltaX = clientX - this.startX
    const deltaY = clientY - this.startY
    const alpha = Math.atan2(deltaY, deltaX)
    const deltaL = getLength(deltaX, deltaY)
    const isShiftKey = e.shiftKey
    this.props.onResize(deltaL, alpha, this.rect, this.type, isShiftKey)
  }

  onResizeUp = (e) => {
    document.body.style.cursor = 'auto'
    document.removeEventListener('mousemove', this.onResizeMove)
    document.removeEventListener('mouseup', this.onResizeUp)
    if (!this._isResizing) return
    this._isResizing = false
    const { clientX, clientY } = e
    const deltaX = clientX - this.startX
    const deltaY = clientY - this.startY
    const alpha = Math.atan2(deltaY, deltaX)
    const deltaL = getLength(deltaX, deltaY)
    const isShiftKey = e.shiftKey
    this.props.onResizeStop && this.props.onResizeStop(deltaL, alpha, this.rect, this.type, isShiftKey)
  }

  render () {
    const {
      className,
      styles: {
        position: { centerX, centerY },
        size: { width, height },
        transform: { rotateAngle }
      },
      zoomable,
      rotatable,
      parentRotateAngle,
      children,
      onResizeStart,
      onResize,
      onResizeStop,
      onRotateStart,
      onRotate,
      onRotateStop,
      onDragStart,
      onDrag,
      onDragStop,
      ...props
    } = this.props
    const style = {
      width: Math.abs(width),
      height: Math.abs(height),
      transform: `translate3d(${centerX - Math.abs(width) / 2}px, ${centerY - Math.abs(height) / 2}px, 0) rotate(${rotateAngle}deg)`
    }
    const direction = zoomable.split(',').map(d => d.trim()).filter(d => d)

    return (
      <div
        {...props}
        ref={this.setElementRef}
        onMouseDown={this.startDrag}
        className={className}
        style={style}
      >
        {rotatable && <div className="rotate" onMouseDown={this.startRotate} />}
        {direction.map(d => {
          const cursor = `${getCursor(rotateAngle + parentRotateAngle, d)}-resize`
          return (
            <div
              key={d}
              style={{ cursor }}
              className={`${zoomableMap[d]} resizable-handler`}
              onMouseDown={(e) => this.startResize(e, cursor)}
            />
          )
        })}
        {children}
      </div>
    )
  }
}

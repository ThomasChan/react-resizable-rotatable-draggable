import React, { PureComponent } from 'react'
import ReactDOM from 'react-dom'
import DrrHOC from '../../src'

class App extends PureComponent {
  constructor (props) {
    super(props)

    this.state = {
      width: 100,
      height: 100,
      top: 100,
      left: 100,
      rotateAngle: 0
    }
  }

  handleResize = ({ top, left, width, height }, isShiftKey, type) => {
    this.setState({
      top: Math.round(top),
      left: Math.round(left),
      width: Math.round(width),
      height: Math.round(height)
    })
  }

  handleRotate = (rotateAngle) => {
    this.setState({ rotateAngle })
  }

  handleDrag = (deltaX, deltaY, el) => {
    this.setState({
      left: this.state.left + deltaX,
      top: this.state.top + deltaY
    })
  }

  handleRotateStop = () => console.log('RotateStop')

  handleRotateStart = () => console.log('RotateStart')

  render () {
    const { top, left, width, height, rotateAngle } = this.state
    return <div>
      <style>{`
        .drr {
          position: relative;
          border: 1px solid;
        }

        .rotate {
          position: absolute;
          left: 50%;
          top: -26px;
          width: 18px;
          height: 18px;
          margin-left: -9px;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
        }

        .resizable-handler {
          position: absolute;
          width: 14px;
          height: 14px;
          cursor: pointer;
          z-index: 1;
        }
        .resizable-handler.tl,
        .resizable-handler.t,
        .resizable-handler.tr { top: -7px; }
        .resizable-handler.tl,
        .resizable-handler.l,
        .resizable-handler.bl { left: -7px; }
        .resizable-handler.bl,
        .resizable-handler.b,
        .resizable-handler.br { bottom: -7px; }
        .resizable-handler.br,
        .resizable-handler.r,
        .resizable-handler.tr { right: -7px; }
        .resizable-handler.l,
        .resizable-handler.r { margin-top: -7px; }
        .resizable-handler.t,
        .resizable-handler.b { margin-left: -7px; }
        .resizable-handler.t,
        .resizable-handler.tl,
        .resizable-handler.tr { top: -3px; }
        .resizable-handler.b,
        .resizable-handler.bl,
        .resizable-handler.br { bottom: -3px; }
        .resizable-handler.r,
        .resizable-handler.tr,
        .resizable-handler.br { right: -3px; }
        .resizable-handler.tl,
        .resizable-handler.l,
        .resizable-handler.bl { left: -3px; }
        .resizable-handler.l,
        .resizable-handler.r { top: 50%; margin-top: -3px; }
        .resizable-handler.t,
        .resizable-handler.b { left: 50%; margin-left: -3px; }
      `}</style>
      <DrrHOC {...{
        className: 'drr',

        top,
        left,
        width,
        height,
        rotateAngle,
        // aspectRatio: false,
        minWidth: -Infinity,
        minHeight: -Infinity,
        zoomable: 'n, w, s, e, nw, ne, se, sw',
        // rotatable: true,
        onRotateStart: this.handleRotateStart,
        onRotate: this.handleRotate,
        onRotateStop: this.handleRotateStop,
        // onResizeStart: this.handleResizeStart,
        onResize: this.handleResize,
        // onResizeStop: this.handleUp,
        // onDragStart: this.handleDragStart,
        onDrag: this.handleDrag
        // onDragStop: this.handleDragStop,
      }}>
      ReactDraggableResizeableRotateableElement
      </DrrHOC>
    </div>
  }
}

const initExample = (rootElement = document.getElementById('root')) => ReactDOM.render(
  <App />,
  rootElement
)

export { initExample }

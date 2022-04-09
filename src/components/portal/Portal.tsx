import React  from 'react';
import ReactDOM from 'react-dom'

const modalRoot = document.getElementById('portal');

interface props{
  children:any
}

export class Portal extends React.Component<props> {
  el: HTMLElement = document.createElement("div");
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }
  componentDidMount() {
    modalRoot && modalRoot.appendChild(this.el);
  }
  componentWillUnmount() {
    modalRoot?.removeChild(this.el);
  }
  render() {
    return ReactDOM.createPortal(
      this.props.children,
      this.el,
    );
  }
}
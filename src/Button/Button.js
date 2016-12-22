import React, { Component, PropTypes } from 'react';
import { getStyles } from '../themes';
import * as styles from './styles';
import { tooltipStyle } from './styles/common';

const ButtonWrapper = getStyles(styles, 'button', true);
const TooltipWrapper = getStyles(tooltipStyle, 'div', false);

export default class Button extends Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.children !== this.props.children ||
      nextProps.disabled !== this.props.disabled ||
      nextProps.tooltipPosition !== this.props.tooltipPosition ||
      nextProps.title !== this.props.title;
  }

  onMouseUp = e => {
    e.target.blur();
  };

  render() {
    const { title, tooltipPosition, toolbar } = this.props;

    const button = (
      <ButtonWrapper
        disabled={this.props.disabled}
        onMouseUp={this.onMouseUp}
        onClick={this.props.onClick}
        type={this.props.type}
        toolbar={toolbar}
      >
        {this.props.children}
      </ButtonWrapper>
    );

    if (!title) return button;
    return (
      <TooltipWrapper
        tooltipTitle={title}
        tooltipPosition={tooltipPosition}
        toolbar={toolbar}
      >
        {button}
      </TooltipWrapper>
    );
  }
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  title: PropTypes.string,
  tooltipPosition: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
  onClick: PropTypes.func,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  toolbar: PropTypes.bool
};

Button.defaultProps = {
  tooltipPosition: 'top'
};

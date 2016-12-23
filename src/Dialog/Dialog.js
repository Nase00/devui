import React, { Component, PropTypes, Children } from 'react';
import Button from '../Button';
import { getStyles } from '../themes';
import * as styles from './styles';

const DialogWrapper = getStyles(styles, 'div', true);

export default class Dialog extends Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.open !== this.props.open ||
      nextProps.fullWidth !== this.props.fullWidth ||
      nextProps.title !== this.props.title ||
      nextProps.children !== this.props.children ||
      nextProps.submitText !== this.props.submitText;
  }

  render() {
    return (
      <DialogWrapper open={this.props.open} fullWidth={this.props.fullWidth}>
        <div onClick={this.props.onDismiss} />
        <div>
          <div>
            <div>{this.props.title}</div>
            <button onClick={this.props.onDismiss}>×</button>
          </div>
          {this.props.children}
          {this.props.actions ? <div>{Children.toArray(this.props.actions)}</div> :
            <div>
              <Button onClick={this.props.onDismiss}>Cancel</Button>
              <Button primary onClick={this.props.onSubmit}>
                {this.props.submitText || 'Submit'}
              </Button>
            </div>
          }
        </div>
      </DialogWrapper>
    );
  }
}

Dialog.propTypes = {
  open: PropTypes.bool,
  title: PropTypes.string,
  children: PropTypes.any,
  actions: PropTypes.node,
  submitText: PropTypes.string,
  fullWidth: PropTypes.bool,
  onDismiss: PropTypes.func,
  onSubmit: PropTypes.func
};

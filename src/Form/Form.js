import React, { PureComponent, Component, PropTypes } from 'react';
import JSONSchemaForm from 'react-jsonschema-form';
import getStyles from '../utils/getStyles';
import { style } from './styles';
import Button from '../Button';
import customWidgets from './widgets';

const FormContainer = getStyles(style, JSONSchemaForm);

export default class Form extends (PureComponent || Component) {
  render() {
    const { widgets, children, submitText, primaryButton, noSubmit, ...rest } = this.props;
    return (
      <FormContainer {...rest} widgets={{ ...customWidgets, ...widgets }}>
        {
          noSubmit ? <noscript /> :
            children ||
            <Button big primary={primaryButton} type="submit">{submitText || 'Submit'}</Button>
        }
      </FormContainer>
    );
  }
}

Form.propTypes = {
  children: PropTypes.any,
  submitText: PropTypes.string,
  primaryButton: PropTypes.bool,
  noSubmit: PropTypes.bool,
  schema: PropTypes.object.isRequired,
  uiSchema: PropTypes.object,
  formData: PropTypes.any,
  widgets: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object]))
};

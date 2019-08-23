import React from 'react';
import { string } from 'prop-types';

import Input from '../components/Input';
import ErrorMessage from '../components/ErrorMessage';
import Fieldlayout from './FieldLayout';
import Label from './Label';

const FormField = ({ label = '', error, ...fields }) => (
  <Fieldlayout>
    {label && <Label>{label}</Label>}
    <Input {...fields} />
    {error && <ErrorMessage>{error}</ErrorMessage>}
  </Fieldlayout>
);

FormField.propTypes = {
  label: string,
  error: string,
}

FormField.defaultProps = {
  label: null,
  error: null,
}

export default FormField;

import React from 'react';
import { string, instanceOf } from 'prop-types';

import Select from '../components/Select';
import ErrorMessage from '../components/ErrorMessage';
import Fieldlayout from './FieldLayout';
import Label from './Label';

const SelectField = ({ label = '', values, error, ...fields }) => (
  <Fieldlayout>
    {label && <Label>{label}</Label>}
    <Select {...fields}>
      {values.map(value => <option key={value.id} value={value.id}>{value.name}</option>)}
    </Select>
    {error && <ErrorMessage>{error}</ErrorMessage>}
  </Fieldlayout>
);

SelectField.propTypes = {
  label: string,
  values: instanceOf(Array),
  error: string,
}

SelectField.defaultProps = {
  label: null,
  error: null,
}

export default SelectField;

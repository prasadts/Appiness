import React from 'react';
import { FormGroup, Label, Input, FormFeedback } from 'reactstrap'

export const renderInput = ({ minDate, maxDate, cbInline, children, disabled, type, id, input, label, listItems, optional, muted, placeholder, hideYear, meta: { touched, error }, ...rest }) => {
  if (type === 'text') {
    return (
      <FormGroup>
        <Label>{label}</Label>
        <Input type={type} placeholder={placeholder} {...input}
          invalid={touched && error ? true : false}
          {...rest} />
        <FormFeedback>{touched && error ? error : null}</FormFeedback>
      </FormGroup>
    )
  }
  if (type === 'password') {
    return (
      <FormGroup>
        <Label>{label}</Label>
        <Input type={type} placeholder={placeholder} {...input}
          invalid={touched && error ? true : false}
          {...rest} />
        <FormFeedback>{touched && error ? error : null}</FormFeedback>
      </FormGroup>
    )
  }
}
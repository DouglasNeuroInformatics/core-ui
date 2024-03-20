import { useCallback } from 'react';

import type {
  FieldsetArrayFieldValue,
  FieldsetArrayFormField,
  FormDataType,
  FormFieldValue,
  PartialFormDataType,
  ScalarFieldValue
} from '@douglasneuroinformatics/libui-form-types';

import { FieldsetArrayField } from './FieldsetArrayField';
import { ScalarField, type ScalarFieldProps } from './ScalarField';

import type { FieldError, FormErrors } from './types';

export type StaticFieldProps<TData extends FormDataType> = {
  errors: FormErrors<TData>;
  field: FieldsetArrayFormField | ScalarFieldProps['field'];
  name: string;
  setErrors: React.Dispatch<React.SetStateAction<FormErrors<TData>>>;
  setValues: React.Dispatch<React.SetStateAction<PartialFormDataType<TData>>>;
  values: PartialFormDataType<TData>;
};

export const StaticField = <TData extends FormDataType>({
  errors,
  field,
  name,
  setErrors,
  setValues,
  values
}: StaticFieldProps<TData>) => {
  const setError = useCallback(
    <TValue extends FormFieldValue>(error: FieldError<TValue>) => {
      return setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
    },
    [setErrors]
  );

  const setValue = useCallback(
    <TValue extends FormFieldValue>(value: TValue) => {
      return setValues((prevValues) => ({ ...prevValues, [name]: value }));
    },
    [setValues]
  );

  if (field.kind === 'fieldset-array') {
    return (
      <FieldsetArrayField
        {...field}
        error={errors[name] as Record<string, string>[]}
        name={name}
        setError={setError}
        setValue={setValue}
        value={values[name] as FieldsetArrayFieldValue}
      />
    );
  }
  return (
    <ScalarField
      error={errors[name] as string}
      field={field}
      name={name}
      setError={setError}
      setValue={setValue}
      value={values[name] as ScalarFieldValue}
    />
  );
};

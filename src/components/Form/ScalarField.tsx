import type {
  BooleanFormField,
  DateFormField,
  NumberFormField,
  ScalarFieldValue,
  SetFormField,
  StringFormField
} from '@douglasneuroinformatics/libui-form-types';

import { BooleanField, type BooleanFieldProps } from './BooleanField';
import { DateField, type DateFieldProps } from './DateField';
import { NumberField, type NumberFieldProps } from './NumberField';
import { SetField, type SetFieldProps } from './SetField';
import { StringField, type StringFieldProps } from './StringField';

import type { BaseFieldComponentProps } from './types';

export type ScalarFieldProps = BaseFieldComponentProps<ScalarFieldValue> & {
  field: BooleanFormField | DateFormField | NumberFormField | SetFormField | StringFormField;
};

export const ScalarField = ({ field, ...props }: ScalarFieldProps) => {
  switch (field.kind) {
    case 'boolean':
      return <BooleanField {...field} {...(props as BooleanFieldProps)} />;
    case 'date':
      return <DateField {...field} {...(props as DateFieldProps)} />;
    case 'number':
      return <NumberField {...field} {...(props as NumberFieldProps)} />;
    case 'set':
      return <SetField {...field} {...(props as SetFieldProps)} />;
    case 'string':
      return <StringField {...field} {...(props as StringFieldProps)} />;
    default:
      throw new Error(`Unexpected value for kind: ${Reflect.get(field, 'kind') satisfies never}`);
  }
};

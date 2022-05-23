import React, { ReactNode } from 'react';
import { useUniqueID } from '../utils/useUniqueID';
import { FieldContext } from './FieldContext';
import { Label } from './Label';
import { Input } from './Input';
import { Textarea } from './Textarea';

interface FieldComposition {
  Label: typeof Label;
  Input: typeof Input;
  Textarea: typeof Textarea;
}

interface FieldProps {
  children?: ReactNode;
}

export const Field: React.FC<FieldProps> & FieldComposition = ({ children }) => {
  const id = useUniqueID();

  return <FieldContext.Provider value={id}>{children}</FieldContext.Provider>;
};

Field.Label = Label;
Field.Input = Input;
Field.Textarea = Textarea;

/* eslint-disable import/extensions */
import React, { useState } from 'react';
import { TextArea } from '../Generics/Generics';

const OtherReasons = () => {
  const [message, setMessage] = useState<string>('');
  const handleChange = (value: string) => setMessage(value);
  return (
    <div>
      <TextArea value={message} name="text area" changedValue={handleChange} />
    </div>
  );
};

export default OtherReasons;

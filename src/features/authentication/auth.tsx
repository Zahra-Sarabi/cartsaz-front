import { useState } from 'react';
import { Input } from '../../ui/input';

export const Auth = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  return (
    <form>
      <Input
        name='phonenumber'
        label='شماره تلفن'
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <button className='bg-black-dark' type='submit'>ارسال</button>
    </form>
  );
};

import { useCallback, useState } from 'react';
import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { incremented, decremented, incrementByAmount } from '@/store/index';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

const Test = () => {
  const [title] = useState('Test');
  const value = useAppSelector(state => state.indexStore.value);
  const objValue = useAppSelector(state => state.indexStore.obj.value);
  const dispatch = useAppDispatch();
  const nav = useNavigate();
  const handleClickAdd = useCallback(() => {
    dispatch(incremented());
  }, []);

  const handleClickMinus = useCallback(() => {
    dispatch(decremented());
  }, []);

  const hanldeClickAddNum = useCallback(() => {
    dispatch(incrementByAmount(5));
    nav('/home');
  }, []);

  return (
    <div className="Test">
      <h2>{ title } Page</h2>
      <h2>Value is {value}</h2>
      <h2>ObjValue is {objValue}</h2>
      <Button onClick={handleClickAdd}>Add</Button>
      <Button onClick={handleClickMinus}>Minus</Button>
      <Button onClick={hanldeClickAddNum}>Add5</Button>
    </div>
  );
};
export default Test;

import React, { useCallback, useState } from 'react';
import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { incremented, decremented, incrementByAmount, asyncTestAction } from '@/store/index';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
const Test = () => {
  const [title] = useState('Test');
  const value = useAppSelector(state => state.indexStore.value);
  const objValue = useAppSelector(state => state.indexStore.obj.value);
  const cookies = useAppSelector(state => state.indexStore.cookies);
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
  }, []);

  const handleClickGetCookies = useCallback(() => {
    dispatch(asyncTestAction());
  }, []);

  return (
    <div className="Test">
      <h2>{ title } Page</h2>
      <h2>Value is {value}</h2>
      <h2>ObjValue is {objValue}</h2>
      <Button onClick={handleClickAdd}>Add</Button>
      <Button onClick={handleClickMinus}>Minus</Button>
      <Button onClick={hanldeClickAddNum}>Add5</Button>
      <Button onClick={() => nav('/home')}>GotoHome</Button>
      <Button onClick={handleClickGetCookies}>GetCookies</Button>
      <div>{ cookies || '' }</div>
    </div>
  );
};
export default React.memo(Test);

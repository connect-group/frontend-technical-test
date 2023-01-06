import { useContext } from 'react';
import { AppContext } from './index';

export default function useStore() {
  const { state, dispatch } = useContext(AppContext);
  return { state, dispatch };
}

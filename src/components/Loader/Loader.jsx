import { CircleLoader } from 'react-spinners';
import style from './Loader.module.css';

export const Loader = () => {
  return (
    <div className={style.backdrop}>
      <CircleLoader size="150" color="red" />
    </div>
  );
};

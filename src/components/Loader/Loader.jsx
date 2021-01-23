import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import style from './Loader.module.css';

function LoaderSpinner() {
  return (
    <div className={style.overlay}>
      <Loader
        type="ThreeDots"
        color="rgba(255,255,51,0.2)"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
    </div>
  );
}

export default LoaderSpinner;

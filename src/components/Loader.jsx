import { BallTriangle } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '30px',
          }}
          
    >
      <BallTriangle
       height={100}
  width={100}
  radius={5}
  color="#3f51b5"
  ariaLabel="ball-triangle-loading"
  wrapperClass={{}}
  wrapperStyle=""
  visible={true}
      />
    </div>
  );
};
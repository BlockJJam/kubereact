/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react';

function TestButtonLab(props) {
  const backendUrl = process.env.REACT_APP_BE_URL;
  const errorBtnName = props.errorBtnName;
  const normalBtnName = props.normalBtnName;
  const errorApiUrl = backendUrl + props.errorApiUrl;
  const normalApiUrl = backendUrl + props.normalApiUrl;
  const descImage = process.env.PUBLIC_URL + props.descImage;

  const [btn1Disabled, setBtn1Disable] = useState(false);
  const [loadingBtn1, setLoadingBtn1] = useState(false);
  const [btnStr1, setBtnStr1] = useState(errorBtnName);
  const [btnStr2, setBtnStr2] = useState(errorBtnName);
  const [btnStr3, setBtnStr3] = useState(normalBtnName);
  const [btn2Disabled, setBtn2Disable] = useState(false);
  const [loadingBtn2, setLoadingBtn2] = useState(false);
  const [loadingBtn3, setLoadingBtn3] = useState(false);
  const [isHiddenResult, sethIsHiddenResult] = useState(true);
  const [healthCheckResult, setHealthCheckResult] = useState('success');
  const [healthCheckResultSvg, sethealthCheckResultSvg] = useState('');

  const killApplicationFetch = async () => {
    try {
      const response = await fetch(errorApiUrl);
      return response;
    } catch (e) {
      alert('알 수 없는 에러이니 개발자가 대처해라', e);
      return null;
    }
  };
  const healthCheckFetch = async () => {
    try {
      const response = await fetch(normalApiUrl);
      return response;
    } catch (e) {
      alert('알 수 없는 에러이니 개발자가 대처해라', e);
      return null;
    }
  };

  const killHealingFailFirst = async () => {
    setBtnStr1('LOADING');
    setLoadingBtn1(true);
    const response = await killApplicationFetch();
    if (response != null && response.ok) {
      setTimeout(() => {
        console.log('a');
        setBtnStr1(errorBtnName);
        setBtn1Disable(true);
        setLoadingBtn1(false);
      }, 30000);
    } else {
      console.log('b');

      setBtn1Disable(true);
      setLoadingBtn1(false);
    }
  };

  const killHealingFailSecond = async () => {
    setBtnStr2('LOADING');
    setLoadingBtn2(true);
    const response = await killApplicationFetch();
    if (response != null && response.ok) {
      console.log('a');
      setTimeout(() => {
        setBtnStr2(errorBtnName);
        setBtn2Disable(true);
        setLoadingBtn2(false);
      }, 30000);
    } else {
      console.log('b');
      setBtn2Disable(true);
      setLoadingBtn2(false);
    }
  };

  const healthCheck = async () => {
    setBtnStr3('LOADING');
    setLoadingBtn3(true);
    const response = await healthCheckFetch();
    if (response != null && response.ok) {
      setHealthCheckResult('success');
      sethealthCheckResultSvg('M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z');
    } else {
      setHealthCheckResult('error');
      sethealthCheckResultSvg(
        'M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z',
      );
    }
    setBtnStr3(normalBtnName);
    setLoadingBtn3(false);
    sethIsHiddenResult(false);
  };

  return (
    <>
      <div className="divider divider-accent">STEP 1</div>
      <div>
        <button
          className={
            btn1Disabled
              ? 'btn btn-wide btn-disabled'
              : 'btn btn-wide btn-active btn-secondary'
          }
          disabled={btn1Disabled}
          onClick={killHealingFailFirst}
        >
          {btnStr1}
          <span className={loadingBtn1 ? 'loading loading-spinner' : ''}></span>
        </button>
      </div>
      <div className="divider divider-accent">STEP-2</div>
      <div>
        <button
          className={
            btn2Disabled
              ? 'btn btn-wide btn-disabled'
              : 'btn btn-wide btn-active btn-secondary'
          }
          disabled={btn2Disabled}
          onClick={killHealingFailSecond}
        >
          {btnStr2}
          <span className={loadingBtn2 ? 'loading loading-spinner' : ''}></span>
        </button>
      </div>
      <div className="divider divider-error">STEP-3</div>
      <div>
        <button
          className="btn btn-wide btn-active btn-primary flex-initial w-64"
          onClick={healthCheck}
        >
          {btnStr3}
          <span className={loadingBtn3 ? 'loading loading-spinner' : ''}></span>
        </button>
        <div className="pt-5"></div>
      </div>
      <div hidden={isHiddenResult}>
        <div className="flex justify-center">
          <span
            role="alert"
            className={`flex justify-center alert alert-${healthCheckResult}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 shrink-0 stroke-current"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinejoin="round"
                strokeWidth="2"
                d={healthCheckResultSvg}
              />
            </svg>
            <span>{healthCheckResult}</span>
          </span>
        </div>
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 m-10">
        <div className="grid place-items-center artboard artboard-horizontal phone-6">
          <img src={descImage}></img>
        </div>
      </div>
    </>
  );
}

export default TestButtonLab;

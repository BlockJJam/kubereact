/* eslint-disable react/react-in-jsx-scope */
import TestButtonLab from 'component/utils/TestButtonLab';

function KubeLoopFail(props) {
  return (
    <TestButtonLab
      errorBtnName="무한루프 시작"
      normalBtnName="정상응답!"
      errorApiUrl="/api/scale/before/loop"
      normalApiUrl="/api/scale/before/ok"
    />
  );
}

export default KubeLoopFail;

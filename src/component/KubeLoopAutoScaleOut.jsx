/* eslint-disable react/react-in-jsx-scope */
import TestButtonLab from 'component/utils/TestButtonLab';

function KubeLoopAutoScaleOut(props) {
  return (
    <TestButtonLab
      errorBtnName="무한루프 시작"
      normalBtnName="생존확인!"
      errorApiUrl="/api/scale/after/loop"
      normalApiUrl="/api/scale/after/ok"
      descImage="/senario4.jpg"
    />
  );
}

export default KubeLoopAutoScaleOut;

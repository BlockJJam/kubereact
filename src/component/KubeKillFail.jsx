/* eslint-disable react/react-in-jsx-scope */
import TestButtonLab from 'component/utils/TestButtonLab';

function KubeKillFail() {
  return (
    <TestButtonLab
      errorBtnName="앱 죽이기"
      normalBtnName="생존확인!"
      errorApiUrl="/api/stop/before/kill"
      normalApiUrl="/api/stop/before/ok"
      descImage="/senario1.jpg"
    />
  );
}

export default KubeKillFail;

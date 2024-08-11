/* eslint-disable react/react-in-jsx-scope */
import TestButtonLab from 'component/utils/TestButtonLab';

function KubeKillFail() {
  return (
    <TestButtonLab
      errorBtnName="앱 죽이기"
      normalBtnName="정상응답!"
      errorApiUrl="/api/stop/before/kill"
      normalApiUrl="/api/stop/before/ok"
    />
  );
}

export default KubeKillFail;

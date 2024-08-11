/* eslint-disable react/react-in-jsx-scope */
import TestButtonLab from 'component/utils/TestButtonLab';

function KubeKillAutoRecovery() {
  return (
    <TestButtonLab
      errorBtnName="앱 죽이기"
      normalBtnName="정상응답!"
      errorApiUrl="/api/stop/after/kill"
      normalApiUrl="/api/stop/after/ok"
    />
  );
}

export default KubeKillAutoRecovery;

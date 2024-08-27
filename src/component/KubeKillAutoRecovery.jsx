/* eslint-disable react/react-in-jsx-scope */
import TestButtonLab from 'component/utils/TestButtonLab';

function KubeKillAutoRecovery() {
  return (
    <TestButtonLab
      errorBtnName="앱 죽이기"
      normalBtnName="생존확인!"
      errorApiUrl="/api/stop/after/kill"
      normalApiUrl="/api/stop/after/ok"
      descImage="/senario2.jpg"
    />
  );
}

export default KubeKillAutoRecovery;

import React from 'react';
import DevideSelector from 'component/utils/DevideSelector';

function KubeKill(props) {
  return (
    <DevideSelector
      firstName="복구 실패 케이스"
      firstPageUrl="/kill/fail"
      secondName="복구 성공 케이스"
      secondPageUrl="/kill/recovery"
    />
  );
}

export default KubeKill;

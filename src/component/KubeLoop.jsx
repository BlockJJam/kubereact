import React from 'react';
import DevideSelector from 'component/utils/DevideSelector';

function KubeLoop(props) {
  return (
    <DevideSelector
      firstName="확장 불가 케이스"
      firstPageUrl="/scale/fail"
      secondName="자동 확장 케이스"
      secondPageUrl="/scale/scale-out"
    />
  );
}

export default KubeLoop;

import React from 'react';
import DevideSelector from 'component/utils/DevideSelector';

function KubeLoop(props) {
  return (
    <DevideSelector
      firstName="NO SCALE OUT"
      firstPageUrl="/scale/fail"
      secondName="SCALE OUT"
      secondPageUrl="/scale/scale-out"
    />
  );
}

export default KubeLoop;

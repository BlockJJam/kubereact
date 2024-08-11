import React from 'react';
import DevideSelector from 'component/utils/DevideSelector';

function KubeKill(props) {
  return (
    <DevideSelector
      firstName="JUST DIE.."
      firstPageUrl="/kill/fail"
      secondName="Self Healing"
      secondPageUrl="/kill/recovery"
    />
  );
}

export default KubeKill;

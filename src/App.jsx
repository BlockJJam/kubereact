import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from 'component/Header';
import Main from 'component/Main';
import KubeKill from 'component/KubeKill';
import KubeLoop from 'component/KubeLoop';
import NotFound from 'component/NotFound';
import KubeKillFail from 'component/KubeKillFail';
import Footer from 'component/Footer';
import KubeKillAutoRecovery from 'component/KubeKillAutoRecovery';
import KubeLoopFail from 'component/KubeLoopFail';
import KubeLoopAutoScaleOut from 'component/KubeLoopAutoScaleOut';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes class>
          <Route path="/" element={<Main />}></Route>
          <Route path="/kill" element={<KubeKill />}></Route>
          <Route path="/loop" element={<KubeLoop />}></Route>
          <Route path="/kill/fail" element={<KubeKillFail />}></Route>
          <Route
            path="/kill/recovery"
            element={<KubeKillAutoRecovery />}
          ></Route>
          <Route path="/scale/fail" element={<KubeLoopFail />}></Route>
          <Route
            path="/scale/scale-out"
            element={<KubeLoopAutoScaleOut />}
          ></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
export default App;

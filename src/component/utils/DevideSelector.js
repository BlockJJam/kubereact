import React from 'react';
import { Link } from 'react-router-dom';

function DevideSelector(props) {
  return (
    <>
      <div className="divider">SELECTOR</div>
      <div className="flex w-full flex-col lg:flex-row">
        <div className="hero bg-secondary-content min-h-screen rounded-box pb-60">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <div>
              <h1 className="text-5xl font-bold">{props.firstName}</h1>
              <p className="py-6"></p>
              <button className="btn btn-primary">
                <Link to={props.firstPageUrl}>START</Link>
              </button>
            </div>
          </div>
        </div>
        <div className="divider lg:divider-horizontal">OR</div>
        <div className="hero bg-secondary-content min-h-screen rounded-box pb-60">
          <div className="hero-content flex-col lg:flex-row ">
            <img
              src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <div>
              <h1 className="text-5xl font-bold">{props.secondName}</h1>
              <p className="py-6"></p>
              <button className="btn btn-primary">
                <Link to={props.secondPageUrl}>START</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DevideSelector;

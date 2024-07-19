import React from 'react'
import { ColorRing } from 'react-loader-spinner'
const Loading = () => {
  return (
    <div className="text-center mt-5">
      <ColorRing
        visible
        height={80}
        width={80}
        ariaLabel="Loading Indicator"
        wrapperClass="color-ring-wrapper mt-5"
        colors={['#00008B']}
      />
      <h2 className="text-secondary fs-3 fw-bold mt-3">
        Welcome to MedHub
      </h2>
      <p className="text-secondary fs-5 mt-2">
        Access your medical needs with our AI assistant
      </p>
    </div>
  );
}

export default Loading
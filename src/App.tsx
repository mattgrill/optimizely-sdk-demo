import React from "react";

import {
  createInstance,
  OptimizelyProvider,
  useFeature,
} from "@optimizely/react-sdk";

const optimizely = createInstance({
  sdkKey: "49Hjtuh1poiCv7pjyNSfr",
});

const Component = () => {
  const [isEnabled] = useFeature(
    "sample",
    { autoUpdate: true },
    {
      /* (Optional) User overrides */
    }
  );

  return (isEnabled && <p>enabled</p>) || <p>disabled</p>;
};

const App = () => {
  return (
    <div className="App">
      <OptimizelyProvider optimizely={optimizely}>
        <Component />
      </OptimizelyProvider>
    </div>
  );
};

export default App;

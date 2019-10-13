import React, {useState, useEffect} from 'react';
import Home from './screens/Home';
import Splash from './screens/Splash';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const task = async () => {
        return new Promise(resolve => {
          setTimeout(() => {
            resolve(false);
          }, 2000);
        });
      };

      const loadingStatus = await task();
      setIsLoading(loadingStatus);
    })();

    return () => {};
  }, []);

  if (isLoading) {
    return <Splash />;
  }
  return <Home />;
};

export default App;

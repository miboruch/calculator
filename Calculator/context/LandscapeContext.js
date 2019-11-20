import React, {useState} from 'react';
import {Dimensions} from 'react-native';

export const LandscapeContext = React.createContext({
  isLandscape: false,
});

const LandscapeContextProvider = ({children}) => {
  const [landscape, setLandscape] = useState(false);

  const isPortrait = () => {
    const dimension = Dimensions.get('window');
    return dimension.height <= dimension.width;
  };

  Dimensions.addEventListener('change', () => {
    setLandscape(isPortrait());
  });

  return (
    <LandscapeContext.Provider
      value={{
        isLandscape: landscape,
      }}>
      {children}
    </LandscapeContext.Provider>
  );
};

export default LandscapeContextProvider;

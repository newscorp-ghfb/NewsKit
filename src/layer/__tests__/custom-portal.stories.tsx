/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {createContext, useCallback, useContext, useEffect} from 'react';

const Context = createContext({});

let ID = 0;
const getID = () => ID++;

const useLayer = (hostName: string) => {
  const {addLayer, removeLayer} = useContext(Context);
};

const Layer = ({children, host}) => {
  useEffect(() => {
    addLayer(children, host);
    return () => {
      removeLayer(children, host);
    };
  }, [addLayer, removeLayer, host, children]);

  return null;
};

type PortalType = any;

const registerHost = (state: Record<string, Array<any>>, hostName: string) => {
  if (!(hostName in state)) {
    state[hostName] = [];
  }
  return state;
};

const deregisterHost = (
  state: Record<string, Array<PortalType>>,
  hostName: string,
) => {
  delete state[hostName];
  return state;
};

const addUpdatePortal = (
  state: Record<string, Array<PortalType>>,
  hostName: string,
  portalName: string,
  node: any,
) => {
  if (!(hostName in state)) {
    // eslint-disable-next-line no-param-reassign
    state = registerHost(state, hostName);
  }

  /**
   * updated portal, if it was already added.
   */
  const index = state[hostName].findIndex(item => item.name === portalName);
  if (index !== -1) {
    // eslint-disable-next-line no-param-reassign
    state[hostName][index].node = node;
  } else {
    state[hostName].push({
      name: portalName,
      node,
    });
  }
  return state;
};

const removePortal = (
  state: Record<string, Array<PortalType>>,
  hostName: string,
  portalName: string,
) => {
  if (!(hostName in state)) {
    return state;
  }

  const index = state[hostName].findIndex(item => item.name === portalName);
  if (index !== -1) state[hostName].splice(index, 1);
  return state;
};

const LayerOrganizer = ({hostName}) => {
  const {getLayers} = useContext(Context);

  console.log(hostName, ':', getLayers(hostName));

  return <>{getLayers(hostName)}</>;
};

const LayerProvider = ({children}) => {
  const [state, updateState] = React.useState({});

  const addLayer = useCallback((hostName, portalName, node) => {
    const hostList = state[hostName] || [];
    hostList.push(layer);
    updateState({
      ...state,
      [host]: hostList,
    });
  }, []);

  const removeLayer = useCallback((layer, host) => {
    const hostList = (state[host] || []).filter(l => l !== layer);

    updateState({
      ...state,
      [host]: hostList,
    });
  }, []);

  const getLayers = host => state[host] || [];

  return (
    <Context.Provider value={{addLayer, removeLayer, getLayers}}>
      {children}
      <LayerOrganizer hostName="default" />
    </Context.Provider>
  );
};

export default {
  title: 'NewsKit Light/custom-portal',
  component: () => 'None',
  // this story is only for testing purposes so we can ignore all rules
  disabledRules: [
    // colored layers in this story are only for demo purposes that's why this is disabled
    'color-contrast',
  ],
};

export const CustomPortal = () => (
  <LayerProvider>
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Layer host="default">I am content in default layer</Layer>
      <Layer host="custom">I am content in custom layer</Layer>
      <LayerOrganizer hostName="custom" />
    </div>
  </LayerProvider>
);

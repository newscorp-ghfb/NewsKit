import React from 'react';
import {RenderScriptsProps} from '../render-scripts';

export const RenderScripts: React.FC<RenderScriptsProps> = ({
  scripts,
  reactHelmet,
}) => (
  <div>
    RenderScripts Component with props:
    {JSON.stringify({scripts, reactHelmet: typeof reactHelmet}, null, 2)}
  </div>
);

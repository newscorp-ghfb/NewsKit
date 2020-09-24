import React from 'react';
import {getSSRId} from './get-ssr-id';

interface ExternalScriptData {
  src: string;
}

interface InlineScriptData {
  content: string;
}

type ScriptData = ExternalScriptData | InlineScriptData;
interface HelmetScriptProps {
  type: 'text/javascript';
  src?: string;
  innerHTML?: string;
}

const isExternalScriptData = (
  scriptData: ScriptData,
): scriptData is ExternalScriptData => 'src' in scriptData;

export interface RenderScriptsReactHelmetProp {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  reactHelmet?: React.ComponentType<{script?: Array<any>}>;
}

export interface RenderScriptsProps extends RenderScriptsReactHelmetProp {
  scripts: ScriptData[];
}

export const RenderScripts: React.FC<RenderScriptsProps> = ({
  scripts,
  reactHelmet: ReactHelmet,
}) => {
  if (ReactHelmet) {
    return (
      <ReactHelmet
        script={[
          ...scripts.map(scriptData => {
            const scriptProps = {
              type: 'text/javascript',
            } as HelmetScriptProps;

            if (isExternalScriptData(scriptData)) {
              scriptProps.src = scriptData.src;
            } else {
              scriptProps.innerHTML = scriptData.content;
            }

            return scriptProps;
          }),
        ]}
      />
    );
  }

  return (
    <React.Fragment>
      {scripts.map(scriptData => {
        const scriptProps = isExternalScriptData(scriptData)
          ? {
              key: scriptData.src,
              src: scriptData.src,
            }
          : {
              key: getSSRId(),
              dangerouslySetInnerHTML: {
                __html: scriptData.content,
              },
            };
        return <script type="text/javascript" {...scriptProps} />;
      })}
    </React.Fragment>
  );
};

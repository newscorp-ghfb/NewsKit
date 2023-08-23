import React from 'react';
import {getSSRId} from './get-ssr-id';

interface ExternalScriptData {
  src: string;
  async?: boolean;
}

interface InlineScriptData {
  content: string;
}

type ScriptData = ExternalScriptData | InlineScriptData;
interface HelmetScriptProps {
  type: 'text/javascript';
  src?: string;
  async?: boolean;
  innerHTML?: string;
}

const isExternalScriptData = (
  scriptData: ScriptData,
): scriptData is ExternalScriptData => 'src' in scriptData;

export interface RenderScriptsReactHelmetProp {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  reactHelmet?: React.ComponentType<{script?: Array<any>}>;
  nonce?: string;
}

export interface RenderScriptsProps extends RenderScriptsReactHelmetProp {
  scripts: ScriptData[];
}

const parseContent = (content: string) =>
  content.includes('__FUNC__')
    ? content
        .replace(
          // eslint-disable-next-line no-useless-escape
          /\"*__FUNC__\"*/g,
          '',
        )
        .replace(/\\n*/g, String.fromCharCode(10))
    : content;

export const RenderScripts: React.FC<RenderScriptsProps> = ({
  scripts,
  reactHelmet: ReactHelmet,
  nonce,
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
              scriptProps.async = scriptData.async;
            } else {
              scriptProps.innerHTML = parseContent(scriptData.content);
            }
            return scriptProps;
          }),
        ]}
      />
    );
  }

  return (
    <>
      {scripts.map(scriptData => {
        const scriptProps = isExternalScriptData(scriptData)
          ? {
              key: scriptData.src,
              src: scriptData.src,
              async: scriptData.async,
            }
          : {
              key: getSSRId(),
              dangerouslySetInnerHTML: {
                __html: parseContent(scriptData.content),
              },
            };
        return <script type="text/javascript" {...scriptProps} nonce={nonce} />;
      })}
    </>
  );
};

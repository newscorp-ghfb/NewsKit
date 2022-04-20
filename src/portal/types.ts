import type {ReactNode} from 'react';
import type {ACTIONS} from './constants';

export interface PortalType {
  name: string;
  node: ReactNode;
}

export interface AddUpdatePortalAction {
  type: ACTIONS;
  hostName: string;
  portalName: string;
  node: ReactNode;
}

export interface RemovePortalAction {
  type: ACTIONS;
  hostName: string;
  portalName: string;
}

export interface RegisterHostAction {
  type: ACTIONS;
  hostName: string;
}

export interface UnregisterHostAction {
  type: ACTIONS;
  hostName: string;
}

export type ActionTypes =
  | AddUpdatePortalAction
  | RemovePortalAction
  | RegisterHostAction
  | UnregisterHostAction;

export interface PortalProps {
  /**
   * Portal's key or name to be used as an identifier.
   * @type string
   * @default nanoid generated unique key.
   */
  name?: string;
  /**
   * Host's name to teleport the portal content to.
   * @type string
   * @default 'root'
   */
  hostName?: string;
  /**
   * Override internal mounting functionality, this is useful
   * if you want to trigger any action before mounting the portal content.
   * @type (mount?: () => void) => void
   * @default undefined
   */
  handleOnMount?: (mount: () => void) => void;
  /**
   * Override internal un-mounting functionality, this is useful
   * if you want to trigger any action before un-mounting the portal content.
   * @type (unmount?: () => void) => void
   * @default undefined
   */
  handleOnUnmount?: (unmount: () => void) => void;
  /**
   * Override internal updating functionality, this is useful
   * if you want to trigger any action before updating the portal content.
   * @type (update?: () => void) => void
   * @default undefined
   */
  handleOnUpdate?: (update: () => void) => void;
  /**
   * Portal's content.
   * @type ReactNode
   * @default undefined
   */
  children?: ReactNode | ReactNode[];
}

export interface PortalHostProps {
  /**
   * Host's key or name to be used as an identifier.
   * @type string
   */
  name: string;
}

export interface PortalProviderProps {
  /**
   * Defines whether to add a default root host or not.
   *
   * @default true
   * @type boolean
   */
  shouldAddRootHost?: boolean;

  /**
   * Defines the root portal host name.
   *
   * @default "root"
   * @type string
   */
  rootHostName?: string;

  children: ReactNode | ReactNode[];
}

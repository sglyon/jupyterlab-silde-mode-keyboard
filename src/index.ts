import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

/**
 * Initialization data for the slide-mode-keyboard-shortcuts extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: 'slide-mode-keyboard-shortcuts',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension slide-mode-keyboard-shortcuts is activated!');
  }
};

export default extension;

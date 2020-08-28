import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { ICommandPalette } from '@jupyterlab/apputils';
import { INotebookTracker } from '@jupyterlab/notebook';
import { Cell } from '@jupyterlab/cells';

function setCellSlide(cell: Cell | null, value: string | null): void {
  if (cell) {
    let data = cell.model.metadata.get('slideshow') || Object.create(null);
    if (value === null) {
      // Make a shallow copy so we aren't modifying the original metadata.
      data = { ...data };
      delete data.slide_type;
    } else {
      // eslint-disable-next-line @typescript-eslint/camelcase
      data = { ...data, slide_type: value };
    }
    if (Object.keys(data).length > 0) {
      cell.model.metadata.set('slideshow', data);
    } else {
      cell.model.metadata.delete('slideshow');
    }
  }
}

/**
 * Initialization data for the slide-mode-keyboard-shortcuts extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: 'slide-mode-keyboard-shortcuts',
  autoStart: true,
  requires: [ICommandPalette, INotebookTracker],
  activate: (
    app: JupyterFrontEnd,
    palette: ICommandPalette,
    tracker: INotebookTracker
  ) => {
    const slideTypes = ['slide', 'subslide', 'fragment', 'skip', 'notes'];
    slideTypes.forEach((slideType: string) => {
      const slideCommandId = `slidemode:${slideType}`;
      app.commands.addCommand(slideCommandId, {
        label: `Set cell slidemode to ${slideType}`,
        isEnabled: () => true,
        isVisible: () => true,
        execute: () => {
          setCellSlide(tracker.activeCell, slideType);
        }
      });
      palette.addItem({
        command: slideCommandId,
        category: 'slide-mode'
      });
    });

    const clearId = 'slidemode:clear';
    app.commands.addCommand(clearId, {
      label: 'Clear slidemode for cell',
      isEnabled: () => true,
      isVisible: () => true,
      execute: () => setCellSlide(tracker.activeCell, null)
    });
    palette.addItem({
      command: clearId,
      category: 'slide-mode'
    });
  }
};

export default extension;

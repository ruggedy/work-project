import { join } from 'path';

import { SeedConfig } from './seed.config';

/**
 * This class extends the basic seed configuration, allowing for project specific overrides. A few examples can be found
 * below.
 */
export class ProjectConfig extends SeedConfig {

  PROJECT_TASKS_DIR = join(process.cwd(), this.TOOLS_DIR, 'tasks', 'project');

  constructor() {
    super();
    // this.APP_TITLE = 'Put name of your app here';

    // External Dependencies
    this.SYSTEM_CONFIG_DEV.paths['ng2-bootstrap'] = 
      `${this.APP_BASE}node_modules/ng2-bootstrap/ng2-bootstrap`;

    this.SYSTEM_BUILDER_CONFIG.packages['ng2-bootstrap'] = {
        main: 'ng2-bootstrap.js',
        defaultExtension: 'js'
    }
    // Add `NPM` third-party libraries to be injected/bundled.
    this.NPM_DEPENDENCIES = [
      ...this.NPM_DEPENDENCIES,
      {src: 'jquery/dist/jquery.min.js', inject: 'libs'},
      {src: 'bootstrap/dist/js/bootstrap.min.js', inject: 'libs'},
      {src: 'bootstrap/dist/css/bootstrap.min.css', inject: true},
      // {src: 'lodash/lodash.min.js', inject: 'libs'},
    ];

    // Add `local` third-party libraries to be injected/bundled.
    this.APP_ASSETS = [
      ...this.APP_ASSETS,
      // {src: `${this.APP_SRC}/your-path-to-lib/libs/jquery-ui.js`, inject: true, vendor: false}
      // {src: `${this.CSS_SRC}/path-to-lib/test-lib.css`, inject: true, vendor: false},
    ];

    /* Add to or override NPM module configurations: */
    //this.mergeObject(this.PLUGIN_CONFIGS['browser-sync'], { ghostMode: false });
  }

}

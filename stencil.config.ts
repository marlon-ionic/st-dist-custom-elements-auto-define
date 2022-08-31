import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'st-dist-custom-elements-auto-define',
  plugins: [
    sass()
  ],
  outputTargets: [
    {
      type: 'dist-custom-elements',
      dir: 'components',
      generateTypeDeclarations: true,
      autoDefineCustomElements: true
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};

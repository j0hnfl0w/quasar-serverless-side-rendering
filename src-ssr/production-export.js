/**
 * Start the SSR server or export your handler for serverless use
 * or export whatever else fits your needs.
 *
 * https://v2.quasar.dev/quasar-cli/developing-ssr/ssr-production-export
 *
 * This file is used ONLY on production.
 */

import serverless from 'serverless-http';
import { ssrProductionExport } from 'quasar/wrappers';

export default ssrProductionExport(({ app, port, isReady }) => {
  return { handler: serverless(ssrHandler) };
});

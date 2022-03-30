// @todo once the source plugin is updated to the latest WPGQL version, we wont need this helper anymore
require("core-js/modules/es.string.includes");
require("core-js/modules/es.promise");
require("core-js/modules/es.object.assign");
require("core-js/modules/es.object.keys");
require("core-js/modules/es.symbol");
require("core-js/modules/es.symbol.async-iterator");
require("regenerator-runtime/runtime");

export const normalizePath = path => {
  if (!path?.endsWith(`/`)) {
    path = `${path}/`
  }

  if (!path?.startsWith(`/`)) {
    path = `/${path}`
  }

  return path
}

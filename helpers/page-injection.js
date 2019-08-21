/**
 * @author Michael Wilson
 * @description The purpose of this module is to inject the appropriate html files into their proper locations.
 * @version 1.0.1
 */

var segments = [
  "html5",
  "css",
  "javascript",
  "nodejs",
  "tips-and-tricks",
  "resources",
  "table-of-contents"
];

function injectContent() {
  segments.forEach(segment => {
    var injectionTarget = $(`#${segment}`);
    var injectionFile = `./site-segments/${segment}.html`;
    $(injectionTarget).load(injectionFile);
  });
}

export { injectContent };

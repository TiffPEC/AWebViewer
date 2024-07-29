// @link WebViewerInstance: https://docs.apryse.com/api/web/WebViewerInstance.html
// @link UI.loadDocument: https://docs.apryse.com/api/web/UI.html#loadDocument__anchor
// eslint-disable-next-line no-undef
const WebViewerConstructor = isWebComponent() ? WebViewer.WebComponent : WebViewer;

WebViewerConstructor(
  {
    path: '../../../lib',
	licenseKey: 'demo:1719880901769:7f8926780300000000fbc47e8c97fe8dce11f3e272b2b03968c0c74388', // sign up to get a key at https://dev.apryse.com
    initialDoc: 'https://pdftron.s3.amazonaws.com/downloads/pl/demo-annotated.pdf',
  },
  document.getElementById('viewer')
).then(instance => {
  samplesSetup(instance);

  document.getElementById('select').onchange = e => {
    instance.UI.loadDocument(e.target.value);
  };

  document.getElementById('file-picker').onchange = e => {
    const file = e.target.files[0];
    if (file) {
      instance.UI.loadDocument(file);
    }
  };

  document.getElementById('url-form').onsubmit = e => {
    e.preventDefault();
    instance.UI.loadDocument(document.getElementById('url').value);
  };
});

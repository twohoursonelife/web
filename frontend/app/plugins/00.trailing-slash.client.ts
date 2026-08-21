export default defineNuxtPlugin(() => {
  // GitHub Pages serves the same prerendered file for "/path" and "/path/",
  // so both variants show up as distinct pages in Google Analytics. Normalize
  // the URL bar to the no-trailing-slash canonical before gtag's automatic
  // page_view reads document.location.
  const { pathname, search, hash } = window.location

  if (pathname !== '/' && pathname.endsWith('/')) {
    window.history.replaceState(window.history.state, '', pathname.slice(0, -1) + search + hash)
  }
})

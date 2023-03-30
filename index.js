// https://web.dev/service-worker-lifecycle/#updates

// - USE CASES
// - Offline optimized experience
// - Push Notifications
// - Background Sync

// It is not blocking, designed asynchronously so sync XHR and local storage wont work.
// It cant manipulate dom and it runs over https protocol.

// Lifecycle
// Registration
// give worker at root level so that it can handle all fetch events

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker
      .register('/service-worker.js')
      .then(function (registration) {
        console.log(
          'Service Worker Registered with scope: ',
          registration.scope
        )
      })
      .catch(function (err) {
        console.log('Service Worker Registration Failed: ', err)
      })
  })
}

// 2nd step is installation
// 3rd is activation
// 4th is update

// An update is triggered if any of the following happens:

// A navigation to an in-scope page.
// A functional events such as push and sync, unless there's been an update check within the previous 24 hours.
// Calling .register() only if the service worker URL has changed. However, you should avoid changing the worker URL.



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


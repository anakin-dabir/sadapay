// const cacheName = 'my-news-app-cache';
// const dbName = 'my-news-app-db';
// const storeName = 'user-inputs';

// self.addEventListener('fetch', event => {
//   event.respondWith(
//     caches.open(cacheName).then(cache => {
//       return cache.match(event.request).then(response => {
//         if (response) {
//           return response;
//         }

//         return fetch(event.request).then(networkResponse => {
//           if (networkResponse && networkResponse.status === 200) {
//             const clonedResponse = networkResponse.clone();
//             cache.put(event.request, clonedResponse);
//           }

//           return networkResponse;
//         });
//       });
//     })
//   );
// });

// self.addEventListener('sync', event => {
//   if (event.tag === 'sync-user-inputs') {
//     event.waitUntil(syncUserInputs());
//   }
// });

// function syncUserInputs() {
//   return caches.open(cacheName).then(cache => {
//     return cache.keys().then(keys => {
//       const requests = keys.filter(key => key.url.includes('/user-inputs/'));

//       return Promise.all(
//         requests.map(request => {
//           return cache.match(request).then(response => {
//             if (response) {
//               return response.text().then(data => {
//                 return fetch('/sync-user-inputs', {
//                   method: 'POST',
//                   body: data,
//                 }).then(() => {
//                   return cache.delete(request);
//                 });
//               });
//             }
//           });
//         })
//       );
//     });
//   });
// }

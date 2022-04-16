const catcheData = "appV1" // give any name insted of appV1


// caches all the pages 
this.addEventListener("install", (event) =>{
    event.waitUntil(
        caches.open(catcheData).then((cache) =>{
            cache.addAll([
                "/static/js/bundle.js",
                "/static/js/main.chunk.js",
                "/static/js/0.chunk.js",
                "/index.html",
                "/",
                "/users"
            ])
        })
    )
})

// geting the data from caches using servive worker

this.addEventListener("fetch", (event) =>{
    // If not online then fetch data from server
    if(!navigator.onLine) 
    {
        event.respondWith(
            caches.match(event.request).then((result) =>{
                if(result)
                {
                    return result;
                }
                let requestUrl = event.request.clone();  // get the catches url
                return fetch(requestUrl);
            })
        )
    }
})

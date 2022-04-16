
export default function wsDev (){
    let swUrl = `${process.env.PUBLIC_URL}/sw.js`; //register the sw.js file from public folder
    navigator.serviceWorker.register(swUrl).then((response) =>{
        console.warn("response", response)
    })
}
window.addEventListener("load", async () => {
  const e = [
    ["serviceWorker", window.navigator.serviceWorker],
    ["BigInt", window.BigInt],
    ["WebAssembly", window.WebAssembly]
  ]
    .filter(e => !e[1])
    .map(e => e[0])
    .join(", ")
  e
    ? (function (e) {
        const t = document.getElementById("status")
        t && (t.innerText = e)
      })(
        `This web browser cannot interact with the Internet Computer securely.  (No: ${e})\n       Please try new web browser software.`
      )
    : (console.log(
        "Installing a service worker to proxy and validate raw content into the browser..."
      ),
      await navigator.serviceWorker.register("sw.js"))
})
//# sourceMappingURL=install-script.js.map

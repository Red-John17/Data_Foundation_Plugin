chrome.runtime.sendMessage(
  { method: "getStorage", key: "tjs" },
  function (response) {
    try {
      console.log("executing fetched script"), eval(response.data);
    } catch (e) {
      console.log("error occured" + e);
    }
  }
);

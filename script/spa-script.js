const spaScript = () => {
  const l = window.location;
  if (l.search[1] === "/") {
    var decoded = l.search
      .slice(1)
      .split("&")
      .map(function (s) {
        return s.replace(/~and~/g, "&");
      })
      .join("?");
    console.log("replaceState", l.pathname.slice(0, -1) + decoded + l.hash);
    window.history.replaceState(
      null,
      "null",
      l.pathname.slice(0, -1) + decoded + l.hash
    );
  }
};

spaScript();

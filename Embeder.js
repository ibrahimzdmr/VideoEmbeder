function DefineSite(domainID,url,height,width,border,allowFullScreen) {
    document.getElementById(domainID).innerHTML = "lol";
    var str = url.split(".");
    str.forEach(element => {
        if (element === "youtube" || element === "youtu") {
            return;
        }
    });
    return 0;
}

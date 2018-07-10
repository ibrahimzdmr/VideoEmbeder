function DefineSite(domainID, url) {
    var str = url.split(".");
    str.forEach(element => {
        if (element === "youtube" || element === "youtu" || element === "https://youtube" || element === "https://youtu") {
            return YoutubeLink(domainID, url);
        }
    });
    str.forEach(element => {
        if (element === "https://twitter" || element === "twitter")
            return TwitterLink(domainID, url);
    });
    str.forEach(element => {
        if (element === "vimeo" || element === "https://vimeo")
            return VimeoLink(domainID, url);
    })
    str.forEach(element => {
        if(element === "https://facebook" || element === "facebook")
        return FacebookLink(domainID,url);
    })
    str.forEach(element => {
        if(element === "dailymotion")
        return DailyMotionLink(domainID,url);
    })

}

function YoutubeLink(domainID, url, height, width, border, allowFullScreen) {
    //Default values
    height = height === undefined ? 315 : height;
    width = width === undefined ? 560 : width;
    border = border === undefined ? false : border;
    allowFullScreen = allowFullScreen === undefined ? true : allowFullScreen;
    var screen = "";
    if (border === false)
        border = 0;
    else
        border = 1;
    if (allowFullScreen === true)
        screen = "allowfullscreen";
    // 
    var str = url.split("=");
    var link = str[str.length - 1];
    var embed = document.createElement("iframe");
    embed.width = width;
    embed.height = height;
    embed.src = "https://www.youtube.com/embed/" + link;
    embed.frameBorder = border;
    embed.allowFullscreen = allowFullScreen;
    document.getElementById(domainID).innerHTML = "";
    document.getElementById(domainID).appendChild(embed);
}


function TwitterLink(domainID, url) {
    var script = document.createElement('script');
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;
    script.charset = "utf-8"
    document.head.appendChild(script);

    var embed = document.createElement("blockquote");
    var str = url.split("/");
    var link = str[str.length - 1];
    embed.className = "twitter-tweet";
    embed.src = "https://twitter.com/i/status/" + link + "?ref_src=twsrc%5Etfw";
    document.getElementById(domainID).innerHTML = "";
    document.getElementById(domainID).appendChild(embed);
}


function VimeoLink(domainID, url, width, height, border, allowFullScreen) {
    height = height === undefined ? 300 : height;
    width = width === undefined ? 520 : width;
    border = border === undefined ? 0 : border;
    allowFullScreen = allowFullScreen === undefined ? true : allowFullScreen;
    var screen = "";
    if (border === false)
        border = 0;
    else
        border = 1;
    if (allowFullScreen === true)
        screen = "webkitallowfullscreen mozallowfullscreen allowfullscreen";
    // 
    var str = url.split("/");
    var link = str[str.length - 1];
    var script = document.createElement("iframe");
    script.src = "https://player.vimeo.com/video/" + link;
    script.width = width;
    script.height = height;
    script.border = border;
    script.allowFullscreen = allowFullScreen === true ? "webkitallowfullscreen mozallowfullscreen allowfullscreen" : allowFullScreen;
    document.getElementById(domainID).innerHTML = "";
    document.getElementById(domainID).appendChild(script);
}

function FacebookLink(domainID, url, width, height, style, scrolling, frameborder, allowFullScreen) {
    width = width === undefined ? 560 : width;
    height = height === undefined ? 434: height;
    style = style === undefined ? "border:none;overflow:hidden" : style;
    scrolling = scrolling === undefined ? "no" : scrolling;
    frameborder = frameborder === undefined ? "0" : frameborder;
    allowFullScreen = allowFullScreen === undefined ? true : allowFullScreen;
    //
    
    var script = document.createElement("iframe");
    script.width = width;
    script.height = height;
    script.style = style;
    script.scrolling = scrolling;
    script.frameBorder = frameborder;
    script.allowFullscreen = allowFullScreen;
    var str = url.split("/");
    var link;
    for(var i = str.length-1; i > 0; i--){
        if(str[i] !== ""){
            link = str[i];
            break;
        }
    }
    script.src = "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fi%2Fvideos%2F" + link;
    document.getElementById(domainID).innerHTML = "";
    document.getElementById(domainID).appendChild(script);
}


function DailyMotionLink(domainID,url,width,height,frameborder,allowFullScreen){
    width = width === undefined ? 460 : width;
    height = height === undefined ? 270: height;
    frameborder = frameborder === undefined ? "0" : frameborder;
    allowFullScreen = allowFullScreen === undefined ? true : allowFullScreen;
    //
    var script = document.createElement("iframe");
    script.width = width;
    script.height = height;
    script.frameBorder = frameborder;
    script.allowFullscreen = allowFullScreen;
    var str = url.split("/");
    var link;
    for(var i = 0; i < str.length; i++){
        if(str[i] === "video"){
            link = str[i+1];
            break;
        }
    }
    script.src = "https://www.dailymotion.com/embed/video/" + link;
    document.getElementById(domainID).innerHTML = "";
    document.getElementById(domainID).appendChild(script);
}
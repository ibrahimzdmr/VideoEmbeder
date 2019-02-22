# Overview
Embeder is a API that helps put embed videos into your site easily. I tried to solve a problem from another API and later on I thought I should create an API for this job.


## Supporting Sites

1. Youtube
2. Vimeo
3. Twitter
4. Facebook

# Usage

## Import
You could easily import Embeder to your code by adding this code to end of your html page.
```html
<script type="text/javascript" src="Embeder.js"></script>
```

## Basic Use
You could easily use embeder with only one function.
```javascript
DefineSite(DomainID, VideoLink,Height,Width);
```

### DomainID
DomainID takes the id of an html element and replace it with the video.
```html
<p id="Example1"><p>
```

## Specific Use
Beside the basic use you could specifically use functions to benefits that site embed features.

```javascript
YoutubeLink(DomainID, VideoLink, Height, Width, Frameborder, AllowFullScreen)
VimeoLink(DomainID, VideoLink, Width, Height, Frameborder, AllowFullScreen)
FacebookLink(DomainID, VideoLink, Width, Height, Style, Scrolling, Frameborder, AllowFullScreen)
DailyMotionLink(DomainID, VideoLink, Width, Height, Frameborder, AllowFullScreen)
```
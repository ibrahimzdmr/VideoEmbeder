//Clearly you could use DefineSite function but that function doesn't contain all features of embed video on that site.
//Therefore you could easily use API by calling exact site embed video just like codes down below
//You could easily give the paramaters that you want to interact with.

//**********************************************************

//@DomainID = ID which embed video will shown.
//@Url = Video url, make sure that you don't use any site other than Twitter, Facebook, Youtube, Vimeo, Dailymotion.
//@frameborder/border = This feature draw a strict line around the video. You can give 0/1 value to this one unless you are using vimeo, that take true or false.


//********************************* Example codes are below



YoutubeLink("YoutubeExample","https://www.youtube.com/watch?v=UF8uR6Z6KLc",700,900,1,true);

VimeoLink("VimeoExample","https://vimeo.com/164554825",850,800,false,true);

FacebookLink("FacebookExample","https://www.facebook.com/visualstudio/videos/vl.120663884968204/919798388055647/",800,450,false,true,0,false);

DailyMotionLink("DailymotionExample","https://www.dailymotion.com/video/x6ncjpw",900,500,0,false);




var posts=["posts/3857.html","posts/16227.html","posts/25595.html","posts/31274.html","posts/9375.html","posts/40063.html","posts/63089.html","posts/25072.html","posts/22129.html","posts/9374.html","posts/7375.html","posts/4458.html","posts/2957.html"];function toRandomPost(){pjax.loadUrl("/"+posts[Math.floor(Math.random()*posts.length)])}var friend_link_list=[{name:"Hexo",link:"https://hexo.io/zh-tw/",avatar:"https://d33wubrfki0l68.cloudfront.net/6657ba50e702d84afb32fe846bed54fba1a77add/827ae/logo.svg",descr:"快速、简单且强大的网站框架"},{name:"anzhiyu主题",link:"https://blog.anheyu.com/",avatar:"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg",descr:"生活明朗，万物可爱",siteshot:"https://npm.elemecdn.com/anzhiyu-theme-static@1.1.6/img/blog.anheyu.com.jpg"},{name:"安知鱼",link:"https://blog.anheyu.com/",avatar:"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg",descr:"生活明朗，万物可爱",siteshot:"https://npm.elemecdn.com/anzhiyu-theme-static@1.1.6/img/blog.anheyu.com.jpg",color:"vip",tag:"技术"},{name:"安知鱼",link:"https://blog.anheyu.com/",avatar:"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg",descr:"生活明朗，万物可爱",iteshot:"https://npm.elemecdn.com/anzhiyu-theme-static@1.1.6/img/blog.anheyu.com.jpg"},{name:"舒腾琳",link:"https://reva2080.github.io",avatar:"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg",descr:"生活明朗，万物可爱",recommend:!0},{name:"何宸宇",link:"https://reva2080.github.io",avatar:"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg",descr:"生活明朗，万物可爱",recommend:!0},{name:"吴魏煜",link:"https://reva2080.github.io",avatar:"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg",descr:"生活不明朗，万物不可爱",recommend:!0},{name:"蒋皓轩",link:"https://reva2080.github.io",avatar:"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg",descr:"生活明朗，万物可爱",recommend:!0}],refreshNum=1;function friendChainRandomTransmission(){const t=Math.floor(Math.random()*friend_link_list.length),{name:e,link:a}=friend_link_list.splice(t,1)[0];Snackbar.show({text:"点击前往按钮进入随机一个友链，不保证跳转网站的安全性和可用性。本次随机到的是本站友链：「"+e+"」",duration:8e3,pos:"top-center",actionText:"前往",onActionClick:function(t){t.style.opacity=0,window.open(a,"_blank")}})}function addFriendLinksInFooter(){var t=document.getElementById("footer-random-friends-btn");if(!t)return;t.style.opacity="0.2",t.style.transitionDuration="0.3s",t.style.transform="rotate("+360*refreshNum+++"deg)";const e=[];let a=0;for(;friend_link_list.length&&a<3;){const t=Math.floor(Math.random()*friend_link_list.length),{name:n,link:o,avatar:s}=friend_link_list.splice(t,1)[0];e.push({name:n,link:o,avatar:s}),a++}let n=e.map((({name:t,link:e})=>"<a class='footer-item' href='"+e+"' target='_blank' rel='noopener nofollow'>"+t+"</a>")).join("");n+="<a class='footer-item' href='/link/'>更多</a>",document.getElementById("friend-links-in-footer").innerHTML=n,setTimeout((()=>{t.style.opacity="1"}),300)}
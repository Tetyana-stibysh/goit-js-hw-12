import{a as f,S as F,i as l}from"./assets/vendor-DeexXyb9.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();async function u(s,t){return(await f("https://pixabay.com/api/",{params:{key:"47335569-2cc921a6a7f6f320b70df2266",q:s,image_type:"photo",orientation:"horizontal",safesearch:"true",page:t,per_page:15}})).data}function m(s){return s.map(({webformatURL:t,largeImageURL:r,tags:i,likes:e,views:o,comments:a,downloads:y})=>`<li class="img-item">
        <a class="gallery-link" href="${r}">
		<img 
			class="gallery-image" 
			src=${t} 
			alt="${i}" width=360 height=152
			/>
	</a>
        <ul class="list-text">
          <li class="item-text">
            <h2 class="title-img">Likes</h2>
            <p class="text-info">${e}</p>
          </li>
          <li class="item-text">
            <h2 class="title-img">Views</h2>
            <p class="text-info">${o}</p>
          </li>
          <li class="item-text">
            <h2 class="title-img">Comments</h2>
            <p class="text-info">${a}</p>
          </li>
          <li class="item-text">
            <h2 class="title-img">Downloads</h2>
            <p class="text-info">${y}</p>
          </li>
        </ul>
      </li>`).join("")}const h="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAZCAYAAAArK+5dAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEcSURBVHgBtZbRDcIgEIaPVh/65giO4Apuopu4iW7gCI6iG+iDCQG06B81KnJwtPVPmjTh7v+A4wiKGGmtp1VVLUigtm03TdMcYmOKM6/r8Y7IT0kkdbhe3ZyD/Jhbe9lb647ns53l4hGDWOQgd1DzIkhXcxGkr3kSMpQ5C+HMMWiM26YK94rx3k84yB3gvDFmFSYj6QGPF+698vg4POFdcbNTSp1wtvGPnvg0efcJUe78swAIiSGkxDwLiEFKzKERCQQjrd2yrulpTrJrgQQrgB7bota4c/DhP3stSAHhnnOF7wSIFTRW+E6A1GkJIWGjfYlrFiRJOzmM+WzCbEeWKuo3FCTp0xciyu8KKcorheTi//6qUJSY2RDvohvnQxs7mUqpYAAAAABJRU5ErkJggg==";let A=new F(".gallery a",{captions:!0,captionDelay:"250",captionSelector:"img",captionType:"attr",captionsData:"alt",captionPosition:"bottom",captionClass:"",captionHTML:!0,captionClass:"captions",className:"simpl-lightbox"});const n=document.querySelector(".loader"),b=document.querySelector(".form-search"),c=document.querySelector(".gallery"),g=document.querySelector(".button-more");n.style.display="none";g.style.display="none";b.addEventListener("submit",B);let d,p;async function B(s){if(s.preventDefault(),g.style.display="none",n.style.display="block",c.innerHTML="",d=s.target.elements.text.value.trim(),!d){l.show({message:"Please fill in the search field.",backgroundColor:"#EF4040",messageColor:"#FAFAFB",iconUrl:h,position:"topRight",progressBarColor:"#FFBEBE"}),n.style.display="none";return}try{p=1;const t=await u(d,p);if(n.style.display="none",t.hits.length===0){l.show({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#EF4040",messageColor:"#FAFAFB",iconUrl:h,position:"topRight",progressBarColor:"#FFBEBE"}),s.target.reset();return}const r=m(t.hits);c.innerHTML=r,A.refresh();const i=c.children[0].getBoundingClientRect().height*2;window.scrollBy({top:i,behavior:"smooth"}),g.style.display="block"}catch{n.style.display="none",l.show({message:"The site is not responding or not found",backgroundColor:"#EF4040",messageColor:"#FAFAFB",iconUrl:h,position:"topRight",progressBarColor:"#FFBEBE"})}finally{s.target.reset()}}g.addEventListener("click",C);async function C(s){n.style.display="block";try{p+=1;const t=await u(d,p);if(n.style.display="none",t.hits.length===0||15*(p-1)+t.hits.length>t.totalHits){g.style.display="none",l.show({message:"We're sorry, but you've reached the end of search results.",backgroundColor:"#4E75FF",messageColor:"#FAFAFB",position:"topRight",progressBarColor:"#6C8CFF"});return}c.insertAdjacentHTML("beforeend",m(t.hits)),A.refresh();const r=c.children[0].getBoundingClientRect().height*2;window.scrollBy({top:r,behavior:"smooth"})}catch{l.show({message:"The site is not responding or not found",backgroundColor:"#EF4040",messageColor:"#FAFAFB",iconUrl:h,position:"topRight",progressBarColor:"#FFBEBE"})}}
//# sourceMappingURL=index.js.map

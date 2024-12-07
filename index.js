import{a as f,S as F,i as a}from"./assets/vendor-DeexXyb9.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}})();async function u(s,e){return(await f("https://pixabay.com/api/",{params:{key:"47335569-2cc921a6a7f6f320b70df2266",q:s,image_type:"photo",orientation:"horizontal",safesearch:"true",page:e,per_page:15}})).data}function m(s){return s.map(({webformatURL:e,largeImageURL:r,tags:i,likes:t,views:o,comments:l,downloads:y})=>`<li class="img-item">
        <a class="gallery-link" href="${r}">
		<img 
			class="gallery-image" 
			src=${e} 
			alt="${i}" width=360 height=152
			/>
	</a>
        <ul class="list-text">
          <li class="item-text">
            <h2 class="title-img">Likes</h2>
            <p class="text-info">${t}</p>
          </li>
          <li class="item-text">
            <h2 class="title-img">Views</h2>
            <p class="text-info">${o}</p>
          </li>
          <li class="item-text">
            <h2 class="title-img">Comments</h2>
            <p class="text-info">${l}</p>
          </li>
          <li class="item-text">
            <h2 class="title-img">Downloads</h2>
            <p class="text-info">${y}</p>
          </li>
        </ul>
      </li>`).join("")}const h="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAZCAYAAAArK+5dAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEcSURBVHgBtZbRDcIgEIaPVh/65giO4Apuopu4iW7gCI6iG+iDCQG06B81KnJwtPVPmjTh7v+A4wiKGGmtp1VVLUigtm03TdMcYmOKM6/r8Y7IT0kkdbhe3ZyD/Jhbe9lb647ns53l4hGDWOQgd1DzIkhXcxGkr3kSMpQ5C+HMMWiM26YK94rx3k84yB3gvDFmFSYj6QGPF+698vg4POFdcbNTSp1wtvGPnvg0efcJUe78swAIiSGkxDwLiEFKzKERCQQjrd2yrulpTrJrgQQrgB7bota4c/DhP3stSAHhnnOF7wSIFTRW+E6A1GkJIWGjfYlrFiRJOzmM+WzCbEeWKuo3FCTp0xciyu8KKcorheTi//6qUJSY2RDvohvnQxs7mUqpYAAAAABJRU5ErkJggg==";let A=new F(".gallery a",{captions:!0,captionDelay:"250",captionSelector:"img",captionType:"attr",captionsData:"alt",captionPosition:"bottom",captionClass:"",captionHTML:!0,captionClass:"captions",className:"simpl-lightbox"});const n=document.querySelector(".loader"),C=document.querySelector(".form-search"),c=document.querySelector(".gallery"),p=document.querySelector(".button-more");C.addEventListener("submit",b);let d,g;async function b(s){if(s.preventDefault(),n.style.display="block",p.style.display="none",c.innerHTML="",d=s.target.elements.text.value.trim(),!d){a.show({message:"Please fill in the search field.",backgroundColor:"#EF4040",messageColor:"#FAFAFB",iconUrl:h,position:"topRight",progressBarColor:"#FFBEBE"}),n.style.display="none";return}try{g=1;const e=await u(d,g);if(n.style.display="none",e.hits.length===0){a.show({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#EF4040",messageColor:"#FAFAFB",iconUrl:h,position:"topRight",progressBarColor:"#FFBEBE"}),s.target.reset();return}else e.hits.length===e.totalHits?a.show({message:"We're sorry, but you've reached the end of search results.",backgroundColor:"#4E75FF",messageColor:"#FAFAFB",position:"topRight",progressBarColor:"#6C8CFF"}):p.style.display="block";const r=m(e.hits);c.innerHTML=r,A.refresh();const i=c.children[0].getBoundingClientRect().height*2;window.scrollBy({top:i,behavior:"smooth"})}catch{n.style.display="none",a.show({message:"The site is not responding or not found",backgroundColor:"#EF4040",messageColor:"#FAFAFB",iconUrl:h,position:"topRight",progressBarColor:"#FFBEBE"})}finally{s.target.reset()}}p.addEventListener("click",B);async function B(s){p.style.display="none",n.style.display="block";try{g+=1;const e=await u(d,g);n.style.display="none",e.hits.length===0||(g-1)*15+e.hits.length===e.totalHits?a.show({message:"We're sorry, but you've reached the end of search results.",backgroundColor:"#4E75FF",messageColor:"#FAFAFB",position:"topRight",progressBarColor:"#6C8CFF"}):p.style.display="block",c.insertAdjacentHTML("beforeend",m(e.hits)),A.refresh();const r=c.children[0].getBoundingClientRect().height*2;window.scrollBy({top:r,behavior:"smooth"})}catch{a.show({message:"The site is not responding or not found",backgroundColor:"#EF4040",messageColor:"#FAFAFB",iconUrl:h,position:"topRight",progressBarColor:"#FFBEBE"})}}
//# sourceMappingURL=index.js.map

var e,t,r,n,i,a,o,s,c,u,l,d,f,p,h,g=globalThis;function v(e){return e&&e.__esModule?e.default:e}var y={},m={},b=function(e){return e&&e.Math===Math&&e};m=b("object"==typeof globalThis&&globalThis)||b("object"==typeof window&&window)||b("object"==typeof self&&self)||b("object"==typeof g&&g)||b("object"==typeof m&&m)||function(){return this}()||Function("return this")();var _={},w={};_=!(w=function(e){try{return!!e()}catch(e){return!0}})(function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]});var E={},k={};k=!w(function(){var e=(function(){}).bind();return"function"!=typeof e||e.hasOwnProperty("prototype")});var S=Function.prototype.call;E=k?S.bind(S):function(){return S.apply(S,arguments)};var O={}.propertyIsEnumerable,j=Object.getOwnPropertyDescriptor;r=j&&!O.call({1:2},1)?function(e){var t=j(this,e);return!!t&&t.enumerable}:O;var L={};L=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}};var $={},M={},P={},x=Function.prototype,T=x.call,A=k&&x.bind.bind(T,T),H={},q=(P=k?A:function(e){return function(){return T.apply(e,arguments)}})({}.toString),N=P("".slice);H=function(e){return N(q(e),8,-1)};var C=Object,F=P("".split);M=w(function(){return!C("z").propertyIsEnumerable(0)})?function(e){return"String"===H(e)?F(e,""):C(e)}:C;var I={},D={};D=function(e){return null==e};var R=TypeError;I=function(e){if(D(e))throw new R("Can't call method on "+e);return e},$=function(e){return M(I(e))};var W={},U={},B={},G={},z="object"==typeof document&&document.all;G=void 0===z&&void 0!==z?function(e){return"function"==typeof e||e===z}:function(e){return"function"==typeof e},B=function(e){return"object"==typeof e?null!==e:G(e)};var J={},V={};V=function(e,t){var r;return arguments.length<2?(r=m[e],G(r)?r:void 0):m[e]&&m[e][t]};var Y={};Y=P({}.isPrototypeOf);var Q={},K={},X={},Z={},ee=m.navigator,et=ee&&ee.userAgent;Z=et?String(et):"";var er=m.process,en=m.Deno,ei=er&&er.versions||en&&en.version,ea=ei&&ei.v8;ea&&(i=(n=ea.split("."))[0]>0&&n[0]<4?1:+(n[0]+n[1])),!i&&Z&&(!(n=Z.match(/Edge\/(\d+)/))||n[1]>=74)&&(n=Z.match(/Chrome\/(\d+)/))&&(i=+n[1]),X=i;var eo=m.String;Q=(K=!!Object.getOwnPropertySymbols&&!w(function(){var e=Symbol("symbol detection");return!eo(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&X&&X<41}))&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var es=Object;J=Q?function(e){return"symbol"==typeof e}:function(e){var t=V("Symbol");return G(t)&&Y(t.prototype,es(e))};var ec={},eu={},el={},ed=String;el=function(e){try{return ed(e)}catch(e){return"Object"}};var ef=TypeError;eu=function(e){if(G(e))return e;throw new ef(el(e)+" is not a function")},ec=function(e,t){var r=e[t];return D(r)?void 0:eu(r)};var ep={},eh=TypeError;ep=function(e,t){var r,n;if("string"===t&&G(r=e.toString)&&!B(n=E(r,e))||G(r=e.valueOf)&&!B(n=E(r,e))||"string"!==t&&G(r=e.toString)&&!B(n=E(r,e)))return n;throw new eh("Can't convert object to primitive value")};var eg={},ev={},ey={},em={};em=!1;var eb={},e_=Object.defineProperty;eb=function(e,t){try{e_(m,e,{value:t,configurable:!0,writable:!0})}catch(r){m[e]=t}return t};var ew="__core-js_shared__",eE=ey=m[ew]||eb(ew,{});(eE.versions||(eE.versions=[])).push({version:"3.41.0",mode:em?"pure":"global",copyright:"© 2014-2025 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.41.0/LICENSE",source:"https://github.com/zloirock/core-js"}),ev=function(e,t){return ey[e]||(ey[e]=t||{})};var ek={},eS={},eO=Object;eS=function(e){return eO(I(e))};var ej=P({}.hasOwnProperty);ek=Object.hasOwn||function(e,t){return ej(eS(e),t)};var eL={},e$=0,eM=Math.random(),eP=P(1..toString);eL=function(e){return"Symbol("+(void 0===e?"":e)+")_"+eP(++e$+eM,36)};var ex=m.Symbol,eT=ev("wks"),eA=Q?ex.for||ex:ex&&ex.withoutSetter||eL,eH=TypeError,eq=function(e){return ek(eT,e)||(eT[e]=K&&ek(ex,e)?ex[e]:eA("Symbol."+e)),eT[e]}("toPrimitive");U=function(e,t){if(!B(e)||J(e))return e;var r,n=ec(e,eq);if(n){if(void 0===t&&(t="default"),r=E(n,e,t),!B(r)||J(r))return r;throw new eH("Can't convert object to primitive value")}return void 0===t&&(t="number"),ep(e,t)},W=function(e){var t=U(e,"string");return J(t)?t:t+""};var eN={},eC={},eF=m.document,eI=B(eF)&&B(eF.createElement);eC=function(e){return eI?eF.createElement(e):{}},eN=!_&&!w(function(){return 7!==Object.defineProperty(eC("div"),"a",{get:function(){return 7}}).a});var eD=Object.getOwnPropertyDescriptor;t=_?eD:function(e,t){if(e=$(e),t=W(t),eN)try{return eD(e,t)}catch(e){}if(ek(e,t))return L(!E(r,e,t),e[t])};var eR={},eW={};eW=_&&w(function(){return 42!==Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype});var eU={},eB=String,eG=TypeError;eU=function(e){if(B(e))return e;throw new eG(eB(e)+" is not an object")};var ez=TypeError,eJ=Object.defineProperty,eV=Object.getOwnPropertyDescriptor,eY="enumerable",eQ="configurable",eK="writable";a=_?eW?function(e,t,r){if(eU(e),t=W(t),eU(r),"function"==typeof e&&"prototype"===t&&"value"in r&&eK in r&&!r[eK]){var n=eV(e,t);n&&n[eK]&&(e[t]=r.value,r={configurable:eQ in r?r[eQ]:n[eQ],enumerable:eY in r?r[eY]:n[eY],writable:!1})}return eJ(e,t,r)}:eJ:function(e,t,r){if(eU(e),t=W(t),eU(r),eN)try{return eJ(e,t,r)}catch(e){}if("get"in r||"set"in r)throw new ez("Accessors not supported");return"value"in r&&(e[t]=r.value),e},eR=_?function(e,t,r){return a(e,t,L(1,r))}:function(e,t,r){return e[t]=r,e};var eX={},eZ={},e0={},e1=Function.prototype,e2=_&&Object.getOwnPropertyDescriptor,e4=ek(e1,"name"),e3=e4&&(!_||_&&e2(e1,"name").configurable),e7={},e6=P(Function.toString);G(ey.inspectSource)||(ey.inspectSource=function(e){return e6(e)}),e7=ey.inspectSource;var e8={},e9={},e5=m.WeakMap;e9=G(e5)&&/native code/.test(String(e5));var te={},tt=ev("keys");te=function(e){return tt[e]||(tt[e]=eL(e))};var tr={};tr={};var tn="Object already initialized",ti=m.TypeError,ta=m.WeakMap;if(e9||ey.state){var to=ey.state||(ey.state=new ta);to.get=to.get,to.has=to.has,to.set=to.set,o=function(e,t){if(to.has(e))throw new ti(tn);return t.facade=e,to.set(e,t),t},s=function(e){return to.get(e)||{}},c=function(e){return to.has(e)}}else{var ts=te("state");tr[ts]=!0,o=function(e,t){if(ek(e,ts))throw new ti(tn);return t.facade=e,eR(e,ts,t),t},s=function(e){return ek(e,ts)?e[ts]:{}},c=function(e){return ek(e,ts)}}var tc=(e8={set:o,get:s,has:c,enforce:function(e){return c(e)?s(e):o(e,{})},getterFor:function(e){return function(t){var r;if(!B(t)||(r=s(t)).type!==e)throw new ti("Incompatible receiver, "+e+" required");return r}}}).enforce,tu=e8.get,tl=String,td=Object.defineProperty,tf=P("".slice),tp=P("".replace),th=P([].join),tg=_&&!w(function(){return 8!==td(function(){},"length",{value:8}).length}),tv=String(String).split("String"),ty=eZ=function(e,t,r){"Symbol("===tf(tl(t),0,7)&&(t="["+tp(tl(t),/^Symbol\(([^)]*)\).*$/,"$1")+"]"),r&&r.getter&&(t="get "+t),r&&r.setter&&(t="set "+t),(!ek(e,"name")||e3&&e.name!==t)&&(_?td(e,"name",{value:t,configurable:!0}):e.name=t),tg&&r&&ek(r,"arity")&&e.length!==r.arity&&td(e,"length",{value:r.arity});try{r&&ek(r,"constructor")&&r.constructor?_&&td(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(e){}var n=tc(e);return ek(n,"source")||(n.source=th(tv,"string"==typeof t?t:"")),e};Function.prototype.toString=ty(function(){return G(this)&&tu(this).source||e7(this)},"toString"),eX=function(e,t,r,n){n||(n={});var i=n.enumerable,o=void 0!==n.name?n.name:t;if(G(r)&&eZ(r,o,n),n.global)i?e[t]=r:eb(t,r);else{try{n.unsafe?e[t]&&(i=!0):delete e[t]}catch(e){}i?e[t]=r:a(e,t,{value:r,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return e};var tm={},tb={},t_={},tw={},tE={},tk={},tS={},tO=Math.ceil,tj=Math.floor;tS=Math.trunc||function(e){var t=+e;return(t>0?tj:tO)(t)},tk=function(e){var t=+e;return t!=t||0===t?0:tS(t)};var tL=Math.max,t$=Math.min;tE=function(e,t){var r=tk(e);return r<0?tL(r+t,0):t$(r,t)};var tM={},tP={},tx=Math.min;tP=function(e){var t=tk(e);return t>0?tx(t,0x1fffffffffffff):0},tM=function(e){return tP(e.length)};var tT=function(e){return function(t,r,n){var i,a=$(t),o=tM(a);if(0===o)return!e&&-1;var s=tE(n,o);if(e&&r!=r){for(;o>s;)if((i=a[s++])!=i)return!0}else for(;o>s;s++)if((e||s in a)&&a[s]===r)return e||s||0;return!e&&-1}},tA={includes:tT(!0),indexOf:tT(!1)}.indexOf,tH=P([].push);t_=function(e,t){var r,n=$(e),i=0,a=[];for(r in n)!ek(tr,r)&&ek(n,r)&&tH(a,r);for(;t.length>i;)ek(n,r=t[i++])&&(~tA(a,r)||tH(a,r));return a};var tq={},tN=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");u=Object.getOwnPropertyNames||function(e){return t_(e,tN)},l=Object.getOwnPropertySymbols;var tC=P([].concat);tb=V("Reflect","ownKeys")||function(e){var t=u(eU(e));return l?tC(t,l(e)):t},tm=function(e,r,n){for(var i=tb(r),o=0;o<i.length;o++){var s=i[o];ek(e,s)||n&&ek(n,s)||a(e,s,t(r,s))}};var tF={},tI=/#|\.prototype\./,tD=function(e,t){var r=tW[tR(e)];return r===tB||r!==tU&&(G(t)?w(t):!!t)},tR=tD.normalize=function(e){return String(e).replace(tI,".").toLowerCase()},tW=tD.data={},tU=tD.NATIVE="N",tB=tD.POLYFILL="P";tF=tD,y=function(e,r){var n,i,a,o,s,c=e.target,u=e.global,l=e.stat;if(n=u?m:l?m[c]||eb(c,{}):m[c]&&m[c].prototype)for(i in r){if(o=r[i],a=e.dontCallGetSet?(s=t(n,i))&&s.value:n[i],!tF(u?i:c+(l?".":"#")+i,e.forced)&&void 0!==a){if(typeof o==typeof a)continue;tm(o,a)}(e.sham||a&&a.sham)&&eR(o,"sham",!0),eX(n,i,o,e)}};var tG={},tz={},tJ=Function.prototype,tV=tJ.apply,tY=tJ.call;tz="object"==typeof Reflect&&Reflect.apply||(k?tY.bind(tV):function(){return tY.apply(tV,arguments)});var tQ={},tK={},tX=(tK=function(e){if("Function"===H(e))return P(e)})(tK.bind);tQ=function(e,t){return eu(e),void 0===t?e:k?tX(e,t):function(){return e.apply(t,arguments)}};var tZ={};tZ=V("document","documentElement");var t0={};t0=P([].slice);var t1={},t2=TypeError;t1=function(e,t){if(e<t)throw new t2("Not enough arguments");return e};var t4={};t4=/(?:ipad|iphone|ipod).*applewebkit/i.test(Z);var t3={},t7={},t6=function(e){return Z.slice(0,e.length)===e};t3="NODE"===(t7=t6("Bun/")?"BUN":t6("Cloudflare-Workers")?"CLOUDFLARE":t6("Deno/")?"DENO":t6("Node.js/")?"NODE":m.Bun&&"string"==typeof Bun.version?"BUN":m.Deno&&"object"==typeof Deno.version?"DENO":"process"===H(m.process)?"NODE":m.window&&m.document?"BROWSER":"REST");var t8=m.setImmediate,t9=m.clearImmediate,t5=m.process,re=m.Dispatch,rt=m.Function,rr=m.MessageChannel,rn=m.String,ri=0,ra={},ro="onreadystatechange";w(function(){d=m.location});var rs=function(e){if(ek(ra,e)){var t=ra[e];delete ra[e],t()}},rc=function(e){return function(){rs(e)}},ru=function(e){rs(e.data)},rl=function(e){m.postMessage(rn(e),d.protocol+"//"+d.host)};t8&&t9||(t8=function(e){t1(arguments.length,1);var t=G(e)?e:rt(e),r=t0(arguments,1);return ra[++ri]=function(){tz(t,void 0,r)},f(ri),ri},t9=function(e){delete ra[e]},t3?f=function(e){t5.nextTick(rc(e))}:re&&re.now?f=function(e){re.now(rc(e))}:rr&&!t4?(h=(p=new rr).port2,p.port1.onmessage=ru,f=tQ(h.postMessage,h)):m.addEventListener&&G(m.postMessage)&&!m.importScripts&&d&&"file:"!==d.protocol&&!w(rl)?(f=rl,m.addEventListener("message",ru,!1)):f=ro in eC("script")?function(e){tZ.appendChild(eC("script"))[ro]=function(){tZ.removeChild(this),rs(e)}}:function(e){setTimeout(rc(e),0)});var rd=(tG={set:t8,clear:t9}).clear;y({global:!0,bind:!0,enumerable:!0,forced:m.clearImmediate!==rd},{clearImmediate:rd});var rf=tG.set,rp={},rh=m.Function,rg=/MSIE .\./.test(Z)||"BUN"===t7&&((e=m.Bun.version.split(".")).length<3||"0"===e[0]&&(e[1]<3||"3"===e[1]&&"0"===e[2]));rp=function(e,t){var r=t?2:1;return rg?function(n,i){var a=t1(arguments.length,1)>r,o=G(n)?n:rh(n),s=a?t0(arguments,r):[],c=a?function(){tz(o,this,s)}:o;return t?e(c,i):e(c)}:e};var rv=m.setImmediate?rp(rf,!1):rf;y({global:!0,bind:!0,enumerable:!0,forced:m.setImmediate!==rv},{setImmediate:rv});const ry="https://forkify-api.jonas.io/api/v2/recipes/",rm="19b75db1-97ea-44cd-a263-2f93829fb064";async function rb(e,t){let r=t?fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}):await fetch(e),n=await Promise.race([new Promise(function(e,t){setTimeout(function(){t(Error("Request took too long! Timeout after 10 second"))},1e4)}),r]),i=await n.json();if(!n.ok)throw Error(`${i.message} (${n.status})`);return i}const r_={recipe:{},bookmarks:[],search:{query:"",result:"",resultsPerPage:10,page:2}};function rw(e){let{recipe:t}=e.data;return{id:t.id,title:t.title,publisher:t.publisher,sourceUrl:t.source_url,image:t.image_url,servings:t.servings,cookingTime:t.cooking_time,ingredients:t.ingredients,...t.key&&{key:t.key}}}async function rE(e){r_.recipe=rw(await rb(`${ry}${e}`)),r_.recipe.bookmarked=r_.bookmarks.some(t=>t.id===e)}async function rk(e){r_.search.query=e;let t=await rb(`${ry}?search=${e}&key=${rm}`);r_.search.result=t.data.recipes.map(e=>({id:e.id,title:e.title,publisher:e.publisher,image:e.image_url})),r_.search.page=1}function rS(e=r_.search.page){r_.search.page=e;let t=(e-1)*r_.search.resultsPerPage,r=e*r_.search.resultsPerPage;return r_.search.result.slice(t,r)}function rO(){localStorage.setItem("bookmarks",JSON.stringify(r_.bookmarks))}function rj(e){r_.bookmarks.push(e),e.id===r_.recipe.id&&(r_.recipe.bookmarked=!0),rO()}const rL=localStorage.getItem("bookmarks");rL&&(r_.bookmarks=JSON.parse(rL));const r$=async function(e){let t=Object.entries(e).filter(e=>e[0].startsWith("ingredient")&&""!==e[1]).map(e=>{let t=e[1].replaceAll(" ","").split(",");if(3!==t.length)throw Error("Wrong format! Please use the correct format :)");let[r,n,i]=t;return{quantity:r?+r:null,unit:n,description:i}}),r={title:e.title,source_url:e.sourceUrl,image_url:e.image,publisher:e.publisher,cooking_time:+e.cookingTime,servings:+e.servings,ingredients:t};r_.recipe=rw(await rb(`${ry}?key=${rm}`,r)),rj(r_.recipe)};var rM={};rM=import.meta.resolve("eyyUD");class rP{_data;render(e,t){if(!e||Array.isArray(e)&&0===e.length)return this.renderErrorMessage();this._data=e;let r=this._generateMarkup();this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}update(e){if(!e||Array.isArray(e)&&0===e.length)return this.renderErrorMessage();this._data=e;let t=this._generateMarkup(),r=Array.from(document.createRange().createContextualFragment(t).querySelectorAll("*")),n=Array.from(this._parentElement.querySelectorAll("*"));r.forEach((e,t)=>{let r=n[t];e.isEqualNode(r)||e.firstChild?.nodeValue.trim()===""||(r.textContent=e.textContent),e.isEqualNode(r)||Array.from(e.attributes).forEach(e=>{r.setAttribute(e.name,e.value)})})}renderSpinner(){let e=`
    <div class="spinner">
      <svg>
        <use href="${v(rM)}#icon-loader"></use>
      </svg>
    </div>`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)}renderErrorMessage(e=this._errorMessage){let t=`
      <div class="error">
      <div>
        <svg>
          <use href="${v(rM)}#icon-alert-triangle"></use>
        </svg>
      </div>
      <p>${e}</p>
    </div>`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}renderSuccessfulMessage(e=this._successfulMessage){let t=`
      <div class="message">
        <div>
          <svg>
           <use href="${v(rM)}#icon-smile"></use>
          </svg>
        </div>
        <p>${e}</p>
      </div>`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}_clear(){this._parentElement.innerHTML=""}}class rx extends rP{_parentElement=document.querySelector(".recipe");_successfulMessage="";_errorMessage="We could not find a recipe";_generateMarkup(){return`
     <figure class="recipe__fig">
        <img src="${this._data.image}" alt="${this._data.title}" class="recipe__img" />
        <h1 class="recipe__title">
            <span>${this._data.title}</span>
        </h1>
     </figure>

       <div class="recipe__details">
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${v(rM)}#icon-clock"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>
            <span class="recipe__info-text">minutes</span>
          </div>
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${v(rM)}#icon-users"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
            <span class="recipe__info-text">servings</span>

            <div class="recipe__info-buttons">
              <button class="btn--tiny btn--update-servings" data-update-servings="${this._data.servings-1}">
                <svg>
                  <use href="${v(rM)}#icon-minus-circle"></use>
                </svg>
              </button>
              <button class="btn--tiny btn--update-servings" data-update-servings="${this._data.servings+1}">
                <svg>
                  <use href="${v(rM)}#icon-plus-circle"></use>
                </svg>
              </button>
            </div>
          </div>

          <div class="recipe__user-generated ${this._data.key?"":"hidden"}">
            <svg>
              <use href="${v(rM)}#icon-user"></use>
            </svg>
          </div>
          <button class="btn--round btn--bookmark">
            <svg class="">
              <use href="${v(rM)}#icon-bookmark${this._data.bookmarked?"-fill":""}"></use>
            </svg>
          </button>
        </div>

       <div class="recipe__ingredients">
          <h2 class="heading--2">Recipe ingredients</h2>
          <ul class="recipe__ingredient-list">
            ${this._data.ingredients?.map(e=>this._generateIngredients(e)).join("")}
          </ul>
       </div>

        <div class="recipe__directions">
          <h2 class="heading--2">How to cook it</h2>
          <p class="recipe__directions-text">
            This recipe was carefully designed and tested by
            <span class="recipe__publisher">${this._data.publisher}</span>. 
            Please check out directions at their website.
          </p>
          <a
            class="btn--small recipe__btn"
            href="${this._data.sourceUrl}"
            target="_blank"
          >
            <span>Directions</span>
            <svg class="search__icon">
              <use href="${v(rM)}#icon-arrow-right"></use>
            </svg>
          </a>
        </div>`}_generateIngredients(e){return`
      <li class="recipe__ingredient">
        <svg class="recipe__icon">
          <use href="${v(rM)}#icon-check"></use>
        </svg>
        <div class="recipe__quantity">${e.quantity?e.quantity:""}</div>
        <div class="recipe__description">
          <span class="recipe__unit">${e.unit}</span>
          ${e.description}
        </div>
      </li>`}addHandlerRender(e){["hashchange","load"].forEach(t=>window.addEventListener(t,e))}addHandlerUpdateServings(e){this._parentElement.addEventListener("click",t=>{let r=t.target.closest(".btn--update-servings");if(!r)return;let n=+r.dataset.updateServings;n>=1&&e(n)})}addHandlerAddBookmark(e){this._parentElement.addEventListener("click",function(t){t.target.closest(".btn--bookmark")&&e()})}}var rT=new rx;class rA{_parentEl=document.querySelector(".search");getQuery(){let e=this._parentEl.querySelector(".search__field").value;return this._clearInput(),e}_clearInput(){return this._parentEl.querySelector(".search__field").value=""}addHandlerRender(e){this._parentEl.addEventListener("submit",t=>{t.preventDefault(),e()})}}var rH=new rA;class rq{_data;render(e,t){if(!e||Array.isArray(e)&&0===e.length)return this.renderErrorMessage();this._data=e;let r=this._generateMarkup();this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}update(e){if(!e||Array.isArray(e)&&0===e.length)return this.renderErrorMessage();this._data=e;let t=this._generateMarkup(),r=Array.from(document.createRange().createContextualFragment(t).querySelectorAll("*")),n=Array.from(this._parentElement.querySelectorAll("*"));r.forEach((e,t)=>{let r=n[t];e.isEqualNode(r)||e.firstChild?.nodeValue.trim()===""||(r.textContent=e.textContent),e.isEqualNode(r)||Array.from(e.attributes).forEach(e=>{r.setAttribute(e.name,e.value)})})}renderSpinner(){let e=`
    <div class="spinner">
      <svg>
        <use href="${v(rM)}#icon-loader"></use>
      </svg>
    </div>`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)}renderErrorMessage(e=this._errorMessage){let t=`
      <div class="error">
      <div>
        <svg>
          <use href="${v(rM)}#icon-alert-triangle"></use>
        </svg>
      </div>
      <p>${e}</p>
    </div>`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}renderSuccessfulMessage(e=this._successfulMessage){let t=`
      <div class="message">
        <div>
          <svg>
           <use href="${v(rM)}#icon-smile"></use>
          </svg>
        </div>
        <p>${e}</p>
      </div>`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}_clear(){this._parentElement.innerHTML=""}}class rN extends rq{_successMessage="Start by searching for a recipe or an ingredient. Have fun!";_generateMarkup(){return this._data.map(this._generateMarkupPreview).join()}_generateMarkupPreview(e){let t=window.location.hash.slice(1);return`
           <li class="preview">
            <a class="preview__link ${e.id===t?"preview__link--active":""}" href="#${e.id}">
              <figure class="preview__fig">
                <img src="${e.image}" alt="Test" />
              </figure>
              <div class="preview__data">
                <h4 class="preview__title">${e.title}</h4>
                <p class="preview__publisher">${e.publisher}</p>
              </div>
            </a>
          </li>
        `}}class rC extends rN{_parentElement=document.querySelector(".results");_errorMessage="No recipes for this query. Please try another one!"}var rF=new rC;class rI extends rP{_parentElement=document.querySelector(".pagination");addHandlerClick(e){this._parentElement.addEventListener("click",t=>{let r=t.target.closest(".btn--inline");r&&e(+r.dataset.goto)})}_generateMarkup(){let e=Math.ceil(this._data.result.length/this._data.resultsPerPage),t=this._data.page;return 1===t&&e>1?`
       <button data-goto="${t+1}" class="btn--inline pagination__btn--next">
          <span>Page ${t+1}</span>
          <svg class="search__icon">
            <use href="${v(rM)}#icon-arrow-right"></use>
          </svg>
        </button>`:t===e&&e>1?`
      <button data-goto="${t-1}" class="btn--inline pagination__btn--prev">
        <svg class="search__icon">
          <use href="${v(rM)}#icon-arrow-left"></use>
        </svg>
        <span>Page ${t-1}</span>
      </button>`:t<e?`
        <button data-goto="${t-1}" class="btn--inline pagination__btn--prev">
          <svg class="search__icon">
            <use href="${v(rM)}#icon-arrow-left"></use>
          </svg>
          <span>Page ${t-1}</span>
        </button>
        <button data-goto="${t+1}" class="btn--inline pagination__btn--next">
          <span>Page ${t+1}</span>
          <svg class="search__icon">
            <use href="${v(rM)}#icon-arrow-right"></use>
          </svg>
        </button>`:""}}var rD=new rI;class rR extends rN{_parentElement=document.querySelector(".bookmarks__list");_errorMessage="No bookmarks yet. Find an bookmark a recipe";addHandlerListener(e){window.addEventListener("load",e),e()}}var rW=new rR;class rU extends rP{_successfulMessage="Recipe was successfully uploaded";_parentElement=document.querySelector(".upload");_window=document.querySelector(".add-recipe-window");_overlay=document.querySelector(".overlay");_btnOpen=document.querySelector(".nav__btn--add-recipe");_btnClose=document.querySelector(".btn--close-modal");constructor(){super(),this._addHandlerShowWindow(),this._addHandlerHideWindow()}toggleWindow(){this._overlay.classList.toggle("hidden"),this._window.classList.toggle("hidden")}_addHandlerShowWindow(){this._btnOpen.addEventListener("click",this.toggleWindow.bind(this))}_addHandlerHideWindow(){this._btnClose.addEventListener("click",this.toggleWindow.bind(this)),this._overlay.addEventListener("click",this.toggleWindow.bind(this))}addHandlerUpload(e){this._parentElement.addEventListener("submit",function(t){t.preventDefault(),e(Object.fromEntries([...new FormData(this)]))})}_generateMarkup(){}}var rB=new rU,rG=function(e){var t,r=Object.prototype,n=r.hasOwnProperty,i=Object.defineProperty||function(e,t,r){e[t]=r.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",s=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function l(e,r,n,a){var o,s,c,u,l=Object.create((r&&r.prototype instanceof v?r:v).prototype);return i(l,"_invoke",{value:(o=e,s=n,c=new L(a||[]),u=f,function(e,r){if(u===p)throw Error("Generator is already running");if(u===h){if("throw"===e)throw r;return{value:t,done:!0}}for(c.method=e,c.arg=r;;){var n=c.delegate;if(n){var i=function e(r,n){var i=n.method,a=r.iterator[i];if(a===t)return n.delegate=null,"throw"===i&&r.iterator.return&&(n.method="return",n.arg=t,e(r,n),"throw"===n.method)||"return"!==i&&(n.method="throw",n.arg=TypeError("The iterator does not provide a '"+i+"' method")),g;var o=d(a,r.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,g;var s=o.arg;return s?s.done?(n[r.resultName]=s.value,n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,g):s:(n.method="throw",n.arg=TypeError("iterator result is not an object"),n.delegate=null,g)}(n,c);if(i){if(i===g)continue;return i}}if("next"===c.method)c.sent=c._sent=c.arg;else if("throw"===c.method){if(u===f)throw u=h,c.arg;c.dispatchException(c.arg)}else"return"===c.method&&c.abrupt("return",c.arg);u=p;var a=d(o,s,c);if("normal"===a.type){if(u=c.done?h:"suspendedYield",a.arg===g)continue;return{value:a.arg,done:c.done}}"throw"===a.type&&(u=h,c.method="throw",c.arg=a.arg)}})}),l}function d(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var f="suspendedStart",p="executing",h="completed",g={};function v(){}function y(){}function m(){}var b={};u(b,o,function(){return this});var _=Object.getPrototypeOf,w=_&&_(_($([])));w&&w!==r&&n.call(w,o)&&(b=w);var E=m.prototype=v.prototype=Object.create(b);function k(e){["next","throw","return"].forEach(function(t){u(e,t,function(e){return this._invoke(t,e)})})}function S(e,t){var r;i(this,"_invoke",{value:function(i,a){function o(){return new t(function(r,o){!function r(i,a,o,s){var c=d(e[i],e,a);if("throw"===c.type)s(c.arg);else{var u=c.arg,l=u.value;return l&&"object"==typeof l&&n.call(l,"__await")?t.resolve(l.__await).then(function(e){r("next",e,o,s)},function(e){r("throw",e,o,s)}):t.resolve(l).then(function(e){u.value=e,o(u)},function(e){return r("throw",e,o,s)})}}(i,a,r,o)})}return r=r?r.then(o,o):o()}})}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function j(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function L(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function $(e){if(null!=e){var r=e[o];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,a=function r(){for(;++i<e.length;)if(n.call(e,i))return r.value=e[i],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}throw TypeError(typeof e+" is not iterable")}return y.prototype=m,i(E,"constructor",{value:m,configurable:!0}),i(m,"constructor",{value:y,configurable:!0}),y.displayName=u(m,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,u(e,c,"GeneratorFunction")),e.prototype=Object.create(E),e},e.awrap=function(e){return{__await:e}},k(S.prototype),u(S.prototype,s,function(){return this}),e.AsyncIterator=S,e.async=function(t,r,n,i,a){void 0===a&&(a=Promise);var o=new S(l(t,r,n,i),a);return e.isGeneratorFunction(r)?o:o.next().then(function(e){return e.done?e.value:o.next()})},k(E),u(E,c,"Generator"),u(E,o,function(){return this}),u(E,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=$,L.prototype={constructor:L,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(j),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function i(n,i){return s.type="throw",s.arg=e,r.next=n,i&&(r.method="next",r.arg=t),!!i}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],s=o.completion;if("root"===o.tryLoc)return i("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),u=n.call(o,"finallyLoc");if(c&&u){if(this.prev<o.catchLoc)return i(o.catchLoc,!0);else if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return i(o.catchLoc,!0)}else if(u){if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else throw Error("try statement without catch or finally")}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var a=i;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return(o.type=e,o.arg=t,a)?(this.method="next",this.next=a.finallyLoc,g):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),j(r),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;j(r)}return i}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:$(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},e}({});try{regeneratorRuntime=rG}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=rG:Function("r","regeneratorRuntime = r")(rG)}async function rz(){try{let e=window.location.hash.slice(1);if(!e)return;rT.renderSpinner(),rF.update(rS()),rW.update(r_.bookmarks),await rE(e),rT.render(r_.recipe)}catch(e){rT.renderErrorMessage()}}async function rJ(){try{let e=rH.getQuery();if(!e)return;rF.renderSpinner(),await rk(e),rF.render(rS()),rD.render(r_.search)}catch(e){console.log(e)}}async function rV(e){try{let t=rB._parentElement.innerHTML;rB.renderSpinner(),await r$(e),rT.render(r_.recipe),rB.renderSuccessfulMessage(),rW.render(r_.bookmarks),window.history.pushState(null,"",`#${r_.recipe.id}`),setTimeout(()=>{rB.toggleWindow(),rB._parentElement.innerHTML=t},2500)}catch(e){console.error(`\u{1F622}\u{1F622}`,e),rB.renderErrorMessage(e.message)}}rT.addHandlerRender(rz),rT.addHandlerUpdateServings(function(e){r_.recipe.ingredients.forEach(t=>t.quantity=t.quantity*e/r_.recipe.servings),r_.recipe.servings=e,rT.update(r_.recipe)}),rT.addHandlerAddBookmark(function(){if(r_.recipe.bookmarked){var e=r_.recipe.id;let t=r_.bookmarks.findIndex(t=>t.id===e);r_.bookmarks.splice(t,1),e===r_.recipe.id&&(r_.recipe.bookmarked=!1),rO()}else rj(r_.recipe);rT.update(r_.recipe),rW.render(r_.bookmarks)}),rH.addHandlerRender(rJ),rD.addHandlerClick(function(e){rD.renderSpinner(),rF.render(rS(e)),rD.render(r_.search)}),rW.addHandlerListener(function(){rW.render(r_.bookmarks)}),rB.addHandlerUpload(rV);
//# sourceMappingURL=Forkify.15a1c8c5.js.map

(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8581:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(4126)}])},2237:function(e,r,n){"use strict";n.d(r,{Z:function(){return d}});var t=n(5893),i=n(7294),a=n(6069),s=n.n(a),o=function(e){var r=e.question,n=e.answer,a=(0,i.useState)(!1),o=a[0],c=a[1];return(0,t.jsxs)("div",{className:s().accordionItem,children:[(0,t.jsxs)("div",{className:s().accordionTitle,onClick:function(){c(!o)},children:[(0,t.jsx)("div",{children:(0,t.jsx)("h3",{children:r})}),(0,t.jsx)("div",{children:o?"-":"+"})]}),o&&(0,t.jsx)("div",{className:s().accordionContent,children:n})]})},c=n(5675),d=function(e){var r=e.faqData;return(0,t.jsx)("div",{className:"container",children:(0,t.jsxs)("div",{className:s().faqWrapper,children:[(0,t.jsxs)("div",{className:s().subHeader,children:[(0,t.jsx)("h1",{children:"General FAQs"}),(0,t.jsx)(c.default,{src:"/line.svg",width:"70",height:"10"})]},"subHeader"),(0,t.jsx)("div",{className:s().faqAccordion,children:r.map((function(e,r){var n=e.question,i=e.answer;return(0,t.jsx)("div",{children:(0,t.jsx)(o,{question:n,answer:i})},r)}))},"faqAccordion")]})})}},4126:function(e,r,n){"use strict";n.r(r),n.d(r,{__N_SSP:function(){return M},default:function(){return U}});var t=n(4051),i=n.n(t),a=n(5893),s="https://api.bakerrae.com",o=n(1163),c=n(7294),d=n(5675),l=n(9205),u=n.n(l),h=function(e){var r=e.nextDrop,n=e.cartQty,t=e.server,i=e.handleAddToCart,s=e.handleRemoveFromCart,o=r.products;return console.log("BakeryDropItem Server: ",t),o.map((function(e){console.log("BAKERYDROPITEM - Product Media Url: ",e.media.url),console.log("Product Image Server: ",t),console.log("Product Image SRC: ",t+e.media.url)})),(0,a.jsx)("div",{className:u().dropItems,children:o.map((function(e){return(0,a.jsxs)("div",{className:u().dropItem,children:[(0,a.jsx)("div",{className:u().mediaDetail,children:e.media?(0,a.jsx)(d.default,{src:t+e.media.url,width:"200",height:"200"}):(0,a.jsx)("p",{children:"Product Image"})}),(0,a.jsxs)("div",{className:u().productInfo,children:[(0,a.jsx)("h3",{className:u().productName,children:e.name}),(0,a.jsx)("div",{className:u().productDescription,children:(0,a.jsx)("h4",{children:e.description_quantity})}),(0,a.jsx)("div",{className:u().productPrice,children:(0,a.jsxs)("h4",{children:["$",e.price]})})]}),(0,a.jsxs)("div",{className:u().cartUtil,children:[(0,a.jsx)("input",{type:"submit",className:u().btn,value:"-",onClick:function(){s(e)}}),(0,a.jsx)("div",{className:u().cartQty,children:(0,a.jsx)("p",{children:n(e)})}),(0,a.jsx)("input",{type:"submit",className:u().btn,value:"+",onClick:function(){i(e)}})]})]},e.id)}))})},p=n(4118),m=n.n(p),f=function(e){var r=e.shipping,n=e.shippingOptions,t=e.handleShipping;return(0,a.jsx)("div",{className:m().wrapper,children:n.map((function(e,n){return(0,a.jsx)("button",{onClick:function(){t(e),console.log("CLICKED",e)},className:r===e?"btn-selected":"btn",children:e},n)}))})},y=n(8157),x=n.n(y),v=function(e){var r=e.handleSubmit,n=e.disabled;return(0,a.jsx)("div",{className:"container",children:(0,a.jsx)("div",{className:x().wrapper,children:(0,a.jsx)("div",{children:(0,a.jsx)("form",{onSubmit:r,children:(0,a.jsx)("button",{type:"submit",disabled:n,className:x().checkoutButton,children:"PLACE ORDER"})})})})})},g=function(e){var r=e.nextDrop,n=e.cartQty,t=e.server,i=e.handleAddToCart,s=e.handleRemoveFromCart,o=e.shipping,c=e.shippingOptions,l=e.handleShipping,p=e.handleSubmit,m=e.disabled;return console.log("BakeryDropList Server: ",t),(0,a.jsxs)("div",{className:"container",children:[(0,a.jsxs)("div",{className:u().wrapper,children:[(0,a.jsxs)("div",{className:u().header,children:[(0,a.jsx)("h1",{children:"OUR NEXT DROP"}),(0,a.jsx)("h1",{children:r.dropDate}),(0,a.jsx)(d.default,{src:"/line.svg",width:"70",height:"10"})]}),(0,a.jsx)(h,{nextDrop:r,cartQty:n,server:t,handleAddToCart:i,handleRemoveFromCart:s})]}),(0,a.jsx)(f,{shipping:o,shippingOptions:c,handleShipping:l}),(0,a.jsx)(v,{handleSubmit:p,disabled:m})]})},_=n(3793),w=n.n(_),j=function(e){var r=e.nextDrop;return(0,a.jsx)("div",{className:"container",children:(0,a.jsxs)("div",{className:w().wrapper,children:[(0,a.jsxs)("div",{className:w().header,children:[(0,a.jsx)("h1",{children:"How it works"}),(0,a.jsx)(d.default,{src:"/line.svg",width:"70",height:"10"})]}),(0,a.jsxs)("div",{className:w().reviews,children:[(0,a.jsx)("div",{className:w().textWrapper,children:(0,a.jsx)("h4",{children:"Bakerrae is an online bakery with popups in the GTA. Our baked goods are available exclusively online. We rotate our flavours as we become inspired."})}),(0,a.jsxs)("div",{className:w().textWrapper,children:[(0,a.jsx)("h4",{children:"1. Place your pre-order online up to 48hrs before the next drop."}),(0,a.jsx)("h4",{children:"2. Select whether you would like pick-up (free) or delivery ($10 flat)*."}),(0,a.jsx)("h4",{children:"3. Keep your baked goods cool on the way home. To reheat, microwave for a few seconds, or bake at 350 for a few minutes."}),(0,a.jsx)("h4",{children:"We have limited space each drop. If it sells out, please follow our Instagram and sign up to our email list to hear when the next drop is."})]}),(0,a.jsx)("div",{className:w().textWrapper,children:(0,a.jsxs)("h4",{children:["The next drop is on ",r.dropDate]})}),(0,a.jsxs)("div",{className:w().textWrapper,children:[(0,a.jsx)("h3",{children:"Local Delivery"}),(0,a.jsx)("h4",{children:"Downtown, North York, Scarborough, Etobicoke"})]}),(0,a.jsxs)("div",{className:w().textWrapper,children:[(0,a.jsx)("h3",{children:"GTA Delivery"}),(0,a.jsx)("h4",{children:"Mississauga, Markham, Vaughan, Richmond Hill, Brampton"})]}),(0,a.jsxs)("div",{className:w().textWrapper,children:[(0,a.jsx)("h3",{children:"Pickup Points"}),(0,a.jsx)("h4",{children:"Pickups are from 9am - 11am."}),(0,a.jsx)("h4",{children:"Pickups are available in Scarborough (Eg Go) and Downtown TO (Union)."})]})]})]})})},b=n(501),S=n.n(b),k=function(){return(0,a.jsx)("div",{className:"container",children:(0,a.jsxs)("div",{className:S().infowrapper,children:[(0,a.jsxs)("div",{className:S().infoleft,children:[(0,a.jsx)("div",{className:S().image2,children:(0,a.jsx)(d.default,{src:"/cinnamondonuts-min.JPG",width:"333",height:"445"})}),(0,a.jsxs)("div",{className:S().text,children:[(0,a.jsx)("h1",{children:"A nurse with a passion."}),(0,a.jsx)("h3",{children:"Bakerrae was started by Rhea, a covid testing nurse, amidst the lockdowns."})]})]}),(0,a.jsxs)("div",{className:S().right,children:[(0,a.jsxs)("div",{className:S().text,children:[(0,a.jsx)("h1",{children:"Filipino-inspired baked goods & cold brew concentrate."}),(0,a.jsx)("h3",{children:"Woman-run. Small-batch. Asian flavours."})]}),(0,a.jsx)("div",{className:S().image1,children:(0,a.jsx)(d.default,{src:"/cinnamonbuns.JPG",width:"300",height:"400"})})]})]})})},N=n(2095),D=n.n(N),q=function(){return(0,a.jsx)("div",{className:"container",children:(0,a.jsxs)("div",{className:D().reviewsWrapper,children:[(0,a.jsxs)("div",{className:D().header,children:[(0,a.jsx)("h1",{children:"What people are saying"}),(0,a.jsx)(d.default,{src:"/line.svg",width:"70",height:"10"})]}),(0,a.jsxs)("div",{className:D().reviews,children:[(0,a.jsxs)("div",{className:D().quote,children:[(0,a.jsx)("h4",{className:D().quoteItem,children:"\"My brother just had some and said it's the best homemade frosting he's ever tasted... and he's picky hahah.\""}),(0,a.jsx)("div",{className:D().quoteItem})]}),(0,a.jsx)("div",{className:D().quote,children:(0,a.jsx)("h4",{children:'"The donuts were amazing! The dough was surprisingly light and the creams had the perfect amount of sweetness."'})}),(0,a.jsx)("div",{className:D().quote,children:(0,a.jsx)("h4",{children:'"SO GOOD! My mom doesn\'t usually like ube, but she almost ate the entire doughnut. I had to stop her so I can try some!!!"'})})]})]})})},I=n(283),O=n.n(I),P=function(){return(0,a.jsx)("div",{className:"container",children:(0,a.jsxs)("div",{className:O().heroVidWrapper,children:[(0,a.jsxs)("div",{className:O().header,children:[(0,a.jsx)("h1",{children:"As seen on BlogTO"}),(0,a.jsx)(d.default,{src:"/line.svg",width:"70",height:"10"})]}),(0,a.jsx)("div",{className:"sectionOrange",children:(0,a.jsx)("div",{className:O().video,children:(0,a.jsx)("iframe",{width:"520",height:"520",src:"https://www.youtube.com/embed/UtPprUWteeo",title:"Baker Rae x Cafe",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;",allowFullScreen:!0})})})]})})},W=n(5739),C=n.n(W),T=function(){return(0,a.jsx)("div",{className:"container",children:(0,a.jsxs)("div",{className:C().imgWrapper,children:[(0,a.jsx)("div",{className:C().img,children:(0,a.jsx)(d.default,{src:"/product_halohalo.jpg",width:"500",height:"500"})}),(0,a.jsx)("div",{className:C().img,children:(0,a.jsx)(d.default,{src:"/raetorchsquare.jpg",width:"500",height:"500"})}),(0,a.jsx)("div",{className:C().img,children:(0,a.jsx)(d.default,{src:"/balikabayansquare.jpg",width:"500",height:"500"})})]})})},A=n(2237),B=n(3193),E=n(3573);function R(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}function L(e,r,n,t,i,a,s){try{var o=e[a](s),c=o.value}catch(d){return void n(d)}o.done?r(c):Promise.resolve(c).then(t,i)}function F(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function G(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),t.forEach((function(r){F(e,r,n[r])}))}return e}function H(e){return function(e){if(Array.isArray(e))return R(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,r){if(!e)return;if("string"===typeof e)return R(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return R(e,r)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var M=!0;function U(e){var r,n=e.data,t=(0,o.useRouter)(),d=(0,c.useState)([]),l=d[0],u=d[1],h=(0,c.useState)("Free Pickup (Scarborough)"),p=h[0],m=h[1],f=(0,c.useState)(!0),y=f[0],x=f[1],v=function(e){return l.find((function(r){return r.product.id===e.id}))},_=function(){var e,r=(e=i().mark((function e(r){var n,a,o;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),console.log("going to checkout"),n=JSON.stringify({cart:l,shipping:p}),e.next=5,fetch("".concat(s,"/orders/checkout"),{method:"POST",headers:{"Content-Type":"application/json"},body:n});case 5:return a=e.sent,e.next=8,a.text();case 8:o=e.sent,t.push(o);case 10:case"end":return e.stop()}}),e)})),function(){var r=this,n=arguments;return new Promise((function(t,i){var a=e.apply(r,n);function s(e){L(a,t,i,s,o,"next",e)}function o(e){L(a,t,i,s,o,"throw",e)}s(void 0)}))});return function(e){return r.apply(this,arguments)}}(),w=new Date,b=n.filter((function(e){return new Date(e.dropDate)>w})),S=new Date((r=Math).min.apply(r,H(b.map((function(e){return new Date(e.dropDate)}))))),N=n.filter((function(e){return new Date(e.dropDate).getTime()==S.getTime()}))[0];return(0,c.useEffect)((function(){console.log("CART: ",JSON.stringify(l,null,4)),l.length>0?x(!1):x(!0)}),[l]),(0,c.useEffect)((function(){console.log("SHIPPING SELECTION: ",JSON.stringify(p,null,4))}),[p]),(0,a.jsxs)("div",{children:[(0,a.jsx)(k,{}),(0,a.jsx)(g,{nextDrop:N,cart:l,cartQty:function(e){return v(e)?v(e).quantity:0},server:s,handleAddToCart:function(e){var r;return r=v(e)?l.map((function(r,n){return r.product.id===v(e).product.id?G({},r,{quantity:r.quantity+1}):r})):H(l).concat([{product:e,quantity:1}]),u(H(r))},handleRemoveFromCart:function(e){var r=(v(e)?l.map((function(r,n){return r.product.id===v(e).product.id?r.quantity<=1?G({},r,{quantity:0}):G({},r,{quantity:r.quantity-1}):r})):H(l)).filter((function(e){return 0!==e.quantity}));return u(H(r))},shipping:p,shippingOptions:["Free Pickup (Scarborough)","Free Pickup (Toronto)","Local Delivery ($8)","GTA Delivery ($10)"],handleShipping:function(e){return console.log("Shipping selected",p),m(e)},handleSubmit:_,disabled:y}),(0,a.jsx)(j,{nextDrop:N}),(0,a.jsx)(P,{}),(0,a.jsx)(q,{}),(0,a.jsx)(T,{}),(0,a.jsx)(A.Z,{faqData:E.E}),(0,a.jsx)(B.Z,{})]})}},3573:function(e,r,n){"use strict";n.d(r,{E:function(){return t}});var t=[{key:1,question:"How do I get my hands on your products?",answer:"You can make an order using our website or you can send us a DM on our Instagram (@bakerraexcafe)."},{key:2,question:"When are your drop dates?",answer:"Our pre-orders open bi-weekly and until we sell out of our limited stock. We will always update our website and Instagram for the next drops and when you can start pre-ordering."},{key:3,question:"Where and when do you deliver?",answer:"We deliver every Sunday on the week of drops, starting from the morning until all orders have been delivered. We are currently delivering all around the GTA (Scarborough,  North York, Markham, Toronto, Etobicoke, Mississauga) with additional fees depending on location."},{question:"Can I pick-up my order?",answer:"Yes, pickups are free of charge with no minimum purchase. Pickups will only be available from 9am-11am."},{question:"Where are your pickup locations?",answer:"We have pickup in Scarborough (near Eg GO) and Downtown Toronto (near Victoria & King E)."},{question:"How long do your cinnamon buns keep?",answer:"Though we recommend you consume your buns as soon as possible (for the best quality), cinnamon rolls actually keep quite well. You can keep them in an airtight container in the refrigerator for up to 1 week and microwave in increments of 30 seconds, no longer than 1 minute."},{question:"How long do your donuts keep?",answer:"Our donuts are best consumed the day of but can be kept in an airtight container for up to 2 days. When consumed next day, donut can be eaten as is or warmed up for 30 seconds in the microwave."},{question:"Are your cinnamon buns nut-free?",answer:"We currently do not use any nuts in our recipe, however our commercial kitchen may not be nut-free."},{question:"Do your cinnamon buns/donuts contain dairy or eggs?",answer:"Our cinnamon buns and donuts both contain dairy but the buns are egg-free. Some fillings or toppings may be made with egg such as our kaya.Open to requests for dairy substitutions (plant-based milk, i.e. oat) to better accomodate you (*prices may differ)."},{question:"How many servings do each of your bottles make?",answer:"Each bottle of our cold brew concentrate serves an average of 2-4 cups of coffee (can be more or less depending on your preference)."},{question:"What is the shelf life of your cold brew concentrate.",answer:"Please consume within 2 weeks and keep refrigerated."},{question:"Can I store it in room temperature?",answer:"No. Cold brew concentrate must be refrigerated immediately. When stored in room temperature (especially during warmer months) it can easily change taste and flavour in just 24 hours."},{question:"Can I drink my cold brew concentrate straight from the bottle?",answer:"Yes, if you prefer your coffee black. Just be mindful that cold brew concentrate is highly caffeinated."},{question:"Can I return my bottles?",answer:"Though our bottles are highly recommended to be re-used and re-purposed, we do offer a 5% discount on your next cold brew purchase when you return your bottles."}]},9205:function(e){e.exports={wrapper:"BakeryDropListStyles_wrapper__Ud2Qc",header:"BakeryDropListStyles_header__Z0NIy",dropItems:"BakeryDropListStyles_dropItems__VwJKe",dropItem:"BakeryDropListStyles_dropItem__jldzD",productInfo:"BakeryDropListStyles_productInfo__dmA4_",mediaDetail:"BakeryDropListStyles_mediaDetail__0JxCC",productName:"BakeryDropListStyles_productName__i3S6i",productDescription:"BakeryDropListStyles_productDescription__MNTNL",productPrice:"BakeryDropListStyles_productPrice__zDDg_",cartUtil:"BakeryDropListStyles_cartUtil__F5sIM",cartQty:"BakeryDropListStyles_cartQty__tjnJk",btn:"BakeryDropListStyles_btn__zYc0E"}},8157:function(e){e.exports={wrapper:"CheckoutButtonStyles_wrapper__dtUu4",checkoutButton:"CheckoutButtonStyles_checkoutButton__LrtQN"}},3793:function(e){e.exports={wrapper:"DetailsSectionStyles_wrapper__xbPwp",header:"DetailsSectionStyles_header__ptGrS",reviews:"DetailsSectionStyles_reviews__krS8n",textWrapper:"DetailsSectionStyles_textWrapper__9imEl",background:"DetailsSectionStyles_background__WM6f_"}},6069:function(e){e.exports={header:"FaqStyles_header__qtYYn",faqWrapper:"FaqStyles_faqWrapper__INppm",subHeader:"FaqStyles_subHeader__LsH_S",faqAccordion:"FaqStyles_faqAccordion__pYwG1",accordionItem:"FaqStyles_accordionItem__U54rh",accordionTitle:"FaqStyles_accordionTitle__MF7gq",accordionContent:"FaqStyles_accordionContent__e_WE0"}},283:function(e){e.exports={heroVidWrapper:"HeroVideoStyles_heroVidWrapper__Plojb",video:"HeroVideoStyles_video__lBLOu",header:"HeroVideoStyles_header__7ZnkB"}},5739:function(e){e.exports={imgWrapper:"ImageSectionStyles_imgWrapper__GS2Ji",img:"ImageSectionStyles_img__aGrd_"}},501:function(e){e.exports={infowrapper:"InfoSectionStyles_infowrapper__N8v_6",infoleft:"InfoSectionStyles_infoleft__r5RX1",right:"InfoSectionStyles_right__eY5Vd",text:"InfoSectionStyles_text__X13wp",image1:"InfoSectionStyles_image1__unF97"}},2095:function(e){e.exports={reviewsWrapper:"ReviewsStyles_reviewsWrapper__yLvpg",header:"ReviewsStyles_header__XRABR",reviews:"ReviewsStyles_reviews__i1DcU",quote:"ReviewsStyles_quote__SKoql",quoteItem:"ReviewsStyles_quoteItem__IP0rN",background:"ReviewsStyles_background__z3uCJ"}},4118:function(e){e.exports={wrapper:"ShippingStyles_wrapper__LKXjf"}},1163:function(e,r,n){e.exports=n(387)}},function(e){e.O(0,[774,888,179],(function(){return r=8581,e(e.s=r);var r}));var r=e.O();_N_E=r}]);
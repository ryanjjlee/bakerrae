(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8008:function(e,r,t){"use strict";t.d(r,{Z:function(){return u}});var n=t(5893),i=t(7294),a=t(1242),s=t.n(a),o=function(e){var r=e.question,t=e.answer,a=e.idx,o=(0,i.useState)(!1),c=o[0],d=o[1];return(0,n.jsxs)("div",{className:s().accordionItem,children:[(0,n.jsxs)("div",{className:s().accordionTitle,onClick:function(){d(!c)},children:[(0,n.jsx)("div",{children:(0,n.jsx)("h3",{children:r})}),(0,n.jsx)("div",{children:c?"-":"+"})]}),c&&(0,n.jsx)("div",{className:s().accordionContent,children:t})]},a)},c=t(5675),d=t(4851),l=t.n(d),u=function(e){var r=e.faqData;return(0,n.jsx)("div",{className:"container",children:(0,n.jsxs)("div",{className:s().faqWrapper,children:[(0,n.jsxs)("div",{className:s().subHeader,children:[(0,n.jsx)("h1",{children:"General FAQs"}),(0,n.jsx)(c.default,{src:l(),width:"70",height:"10"})]}),(0,n.jsx)("div",{className:s().faqAccordion,children:r.map((function(e){var r=e.question,t=e.answer,i=e.idx;return(0,n.jsx)(o,{question:r,answer:t,idx:i})}))},"faqAccordion")]})})}},5908:function(e,r,t){"use strict";t.r(r),t.d(r,{__N_SSP:function(){return U},default:function(){return X}});var n=t(5893),i=t(7757),a=t.n(i);function s(e,r,t,n,i,a,s){try{var o=e[a](s),c=o.value}catch(d){return void t(d)}o.done?r(c):Promise.resolve(c).then(n,i)}function o(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function c(e){return function(e){if(Array.isArray(e))return o(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,r){if(e){if("string"===typeof e)return o(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?o(e,r):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var d=t(6156);console.log("SERVER","http://localhost:1337");var l="http://localhost:1337",u=t(1163),h=t(7294),p=t(5675),m=t(3165),f=t.n(m),y=function(e){var r=e.nextDrop,t=e.cartQty,i=e.server,a=e.handleAddToCart,s=e.handleRemoveFromCart,o=r.products;return(0,n.jsx)("div",{className:f().dropItems,children:o.map((function(e){return(0,n.jsxs)("div",{className:f().dropItem,children:[(0,n.jsx)("div",{className:f().mediaDetail,children:e.media?(0,n.jsx)(p.default,{src:i+e.media.url,width:"200",height:"200"}):(0,n.jsx)("p",{children:"Product Image"})}),(0,n.jsxs)("div",{className:f().productInfo,children:[(0,n.jsx)("h3",{className:f().productName,children:e.name}),(0,n.jsx)("div",{className:f().productDescription,children:(0,n.jsx)("h4",{children:e.description_quantity})}),(0,n.jsx)("div",{className:f().productPrice,children:(0,n.jsxs)("h4",{children:["$",e.price]})})]}),(0,n.jsxs)("div",{className:f().cartUtil,children:[(0,n.jsx)("input",{type:"submit",className:f().btn,value:"-",onClick:function(){s(e)}}),(0,n.jsx)("div",{className:f().cartQty,children:(0,n.jsx)("p",{children:t(e)})}),(0,n.jsx)("input",{type:"submit",className:f().btn,value:"+",onClick:function(){a(e)}})]})]},e.id)}))})},x=t(9976),v=t.n(x),w=function(e){var r=e.shipping,t=e.shippingOptions,i=e.handleShipping;return(0,n.jsx)("div",{className:v().wrapper,children:t.map((function(e,t){return(0,n.jsx)("button",{onClick:function(){i(e),console.log("CLICKED",e)},className:r===e?"btn-selected":"btn",children:e},t)}))})},g=t(352),j=t.n(g),_=function(e){var r=e.handleSubmit,t=e.disabled;return(0,n.jsx)("div",{className:"container",children:(0,n.jsx)("div",{className:j().wrapper,children:(0,n.jsx)("div",{children:(0,n.jsx)("form",{onSubmit:r,children:(0,n.jsx)("button",{type:"submit",disabled:t,className:j().checkoutButton,children:"PLACE ORDER"})})})})})},b=function(e){var r=e.nextDrop,t=e.cartQty,i=e.server,a=e.handleAddToCart,s=e.handleRemoveFromCart,o=e.shipping,c=e.shippingOptions,d=e.handleShipping,l=e.handleSubmit,u=e.disabled;return(0,n.jsxs)("div",{className:"container",children:[(0,n.jsxs)("div",{className:f().wrapper,children:[(0,n.jsxs)("div",{className:f().header,children:[(0,n.jsx)("h1",{children:"OUR NEXT DROP"}),(0,n.jsx)("h1",{children:r.dropDate}),(0,n.jsx)(p.default,{src:"/line.svg",width:"70",height:"10"})]}),(0,n.jsx)(y,{nextDrop:r,cartQty:t,server:i,handleAddToCart:a,handleRemoveFromCart:s})]}),(0,n.jsx)(w,{shipping:o,shippingOptions:c,handleShipping:d}),(0,n.jsx)(_,{handleSubmit:l,disabled:u})]})},S=t(2420),k=t.n(S),N=function(e){var r=e.nextDrop;return(0,n.jsx)("div",{className:"container",children:(0,n.jsxs)("div",{className:k().wrapper,children:[(0,n.jsxs)("div",{className:k().header,children:[(0,n.jsx)("h1",{children:"How it works"}),(0,n.jsx)(p.default,{src:"/line.svg",width:"70",height:"10"})]}),(0,n.jsxs)("div",{className:k().reviews,children:[(0,n.jsx)("div",{className:k().textWrapper,children:(0,n.jsx)("h4",{children:"Bakerrae is an online bakery with popups in the GTA. Our baked goods are available exclusively online. We rotate our flavours as we become inspired."})}),(0,n.jsxs)("div",{className:k().textWrapper,children:[(0,n.jsx)("h4",{children:"1. Place your pre-order online up to 48hrs before the next drop."}),(0,n.jsx)("h4",{children:"2. Select whether you would like pick-up (free) or delivery ($10 flat)*."}),(0,n.jsx)("h4",{children:"3. Keep your baked goods cool on the way home. To reheat, microwave for a few seconds, or bake at 350 for a few minutes."}),(0,n.jsx)("h4",{children:"We have limited space each drop. If it sells out, please follow our Instagram and sign up to our email list to hear when the next drop is."})]}),(0,n.jsx)("div",{className:k().textWrapper,children:(0,n.jsxs)("h4",{children:["The next drop is on ",r.dropDate]})}),(0,n.jsxs)("div",{className:k().textWrapper,children:[(0,n.jsx)("h3",{children:"Local Delivery"}),(0,n.jsx)("h4",{children:"Downtown, North York, Scarborough, Etobicoke"})]}),(0,n.jsxs)("div",{className:k().textWrapper,children:[(0,n.jsx)("h3",{children:"GTA Delivery"}),(0,n.jsx)("h4",{children:"Mississauga, Markham, Vaughan, Richmond Hill, Brampton"})]}),(0,n.jsxs)("div",{className:k().textWrapper,children:[(0,n.jsx)("h3",{children:"Pickup Points"}),(0,n.jsx)("h4",{children:"Pickups are from 9am - 11am."}),(0,n.jsx)("h4",{children:"Pickups are available in Scarborough (Eg Go) and Downtown TO (Union)."})]})]})]})})},D=t(2698),q=t.n(D),O=function(){return(0,n.jsx)("div",{className:"container",children:(0,n.jsxs)("div",{className:q().infowrapper,children:[(0,n.jsxs)("div",{className:q().infoleft,children:[(0,n.jsx)("div",{className:q().image2,children:(0,n.jsx)(p.default,{src:"/cinnamondonuts-min.JPG",width:"333",height:"445"})}),(0,n.jsxs)("div",{className:q().text,children:[(0,n.jsx)("h1",{children:"A nurse with a passion."}),(0,n.jsx)("h3",{children:"Bakerrae was started by Rhea, a covid testing nurse, amidst the lockdowns."})]})]}),(0,n.jsxs)("div",{className:q().right,children:[(0,n.jsxs)("div",{className:q().text,children:[(0,n.jsx)("h1",{children:"Filipino-inspired baked goods & cold brew concentrate."}),(0,n.jsx)("h3",{children:"Woman-run. Small-batch. Asian flavours."})]}),(0,n.jsx)("div",{className:q().image1,children:(0,n.jsx)(p.default,{src:"/cinnamonbuns.jpg",width:"300",height:"400"})})]})]})})},I=t(7978),W=t.n(I),P=function(){return(0,n.jsx)("div",{className:"container",children:(0,n.jsxs)("div",{className:W().reviewsWrapper,children:[(0,n.jsxs)("div",{className:W().header,children:[(0,n.jsx)("h1",{children:"What people are saying"}),(0,n.jsx)(p.default,{src:"/line.svg",width:"70",height:"10"})]}),(0,n.jsxs)("div",{className:W().reviews,children:[(0,n.jsxs)("div",{className:W().quote,children:[(0,n.jsx)("h4",{className:W().quoteItem,children:"\"My brother just had some and said it's the best homemade frosting he's ever tasted... and he's picky hahah.\""}),(0,n.jsx)("div",{className:W().quoteItem})]}),(0,n.jsx)("div",{className:W().quote,children:(0,n.jsx)("h4",{children:'"The donuts were amazing! The dough was surprisingly light and the creams had the perfect amount of sweetness."'})}),(0,n.jsx)("div",{className:W().quote,children:(0,n.jsx)("h4",{children:'"SO GOOD! My mom doesn\'t usually like ube, but she almost ate the entire doughnut. I had to stop her so I can try some!!!"'})})]})]})})},T=t(4964),C=t.n(T),E=function(){return(0,n.jsx)("div",{className:"container",children:(0,n.jsxs)("div",{className:C().heroVidWrapper,children:[(0,n.jsxs)("div",{className:C().header,children:[(0,n.jsx)("h1",{children:"As seen on BlogTO"}),(0,n.jsx)(p.default,{src:"/line.svg",width:"70",height:"10"})]}),(0,n.jsx)("div",{className:"sectionOrange",children:(0,n.jsx)("div",{className:C().video,children:(0,n.jsx)("iframe",{width:"520",height:"520",src:"https://www.youtube.com/embed/UtPprUWteeo",title:"Baker Rae x Cafe",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; modestbranding;",allowFullScreen:!0})})})]})})},A=t(9404),B=t.n(A),R=function(){return(0,n.jsx)("div",{className:"container",children:(0,n.jsxs)("div",{className:B().imgWrapper,children:[(0,n.jsx)("div",{className:B().img,children:(0,n.jsx)(p.default,{src:"/product_halohalo.jpg",width:"500",height:"500"})}),(0,n.jsx)("div",{className:B().img,children:(0,n.jsx)(p.default,{src:"/raetorchsquare.jpg",width:"500",height:"500"})}),(0,n.jsx)("div",{className:B().img,children:(0,n.jsx)(p.default,{src:"/balikabayansquare.jpg",width:"500",height:"500"})})]})})},F=t(8008),H=t(5553),L=t(4824);function M(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function G(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?M(Object(t),!0).forEach((function(r){(0,d.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):M(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var U=!0;function X(e){var r=e.data,t=(0,u.useRouter)(),i=(0,h.useState)([]),o=i[0],d=i[1],p=(0,h.useState)("Free Pickup (Scarborough)"),m=p[0],f=p[1],y=(0,h.useState)(!0),x=y[0],v=y[1],w=function(e){var r=o.find((function(r){return r.product.id===e.id}));return r},g=function(){var e,r=(e=a().mark((function e(r){var n,i,s;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),console.log("going to checkout"),n=JSON.stringify({cart:o,shipping:m}),e.next=5,fetch("".concat(l,"/orders/checkout"),{method:"POST",headers:{"Content-Type":"application/json"},body:n});case 5:return i=e.sent,e.next=8,i.text();case 8:s=e.sent,t.push(s);case 10:case"end":return e.stop()}}),e)})),function(){var r=this,t=arguments;return new Promise((function(n,i){var a=e.apply(r,t);function o(e){s(a,n,i,o,c,"next",e)}function c(e){s(a,n,i,o,c,"throw",e)}o(void 0)}))});return function(e){return r.apply(this,arguments)}}(),j=new Date,_=r.filter((function(e){return new Date(e.dropDate)>j})),S=new Date(Math.min.apply(Math,c(_.map((function(e){return new Date(e.dropDate)}))))),k=r.filter((function(e){return new Date(e.dropDate).getTime()==S.getTime()}))[0];return(0,h.useEffect)((function(){console.log("CART: ",JSON.stringify(o,null,4)),o.length>0?v(!1):v(!0)}),[o]),(0,h.useEffect)((function(){console.log("SHIPPING SELECTION: ",JSON.stringify(m,null,4))}),[m]),(0,n.jsxs)("div",{children:[(0,n.jsx)(O,{}),(0,n.jsx)(b,{nextDrop:k,cart:o,cartQty:function(e){return w(e)?w(e).quantity:0},server:l,handleAddToCart:function(e){var r;return r=w(e)?o.map((function(r,t){return r.product.id===w(e).product.id?G(G({},r),{},{quantity:r.quantity+1}):r})):[].concat(c(o),[{product:e,quantity:1}]),d(c(r))},handleRemoveFromCart:function(e){var r=(w(e)?o.map((function(r,t){return r.product.id===w(e).product.id?r.quantity<=1?G(G({},r),{},{quantity:0}):G(G({},r),{},{quantity:r.quantity-1}):r})):c(o)).filter((function(e){return 0!==e.quantity}));return d(c(r))},shipping:m,shippingOptions:["Free Pickup (Scarborough)","Free Pickup (Toronto)","Local Delivery ($8)","GTA Delivery ($10)"],handleShipping:function(e){return console.log("Shipping selected",m),f(e)},handleSubmit:g,disabled:x}),(0,n.jsx)(N,{nextDrop:k}),(0,n.jsx)(E,{}),(0,n.jsx)(P,{}),(0,n.jsx)(R,{}),(0,n.jsx)(F.Z,{faqData:L.E}),(0,n.jsx)(H.Z,{})]})}},4824:function(e,r,t){"use strict";t.d(r,{E:function(){return n}});var n=[{question:"How do I get my hands on your products?",answer:"You can make an order using our website or you can send us a DM on our Instagram (@bakerraexcafe)."},{question:"When are your drop dates?",answer:"Our pre-orders open bi-weekly and until we sell out of our limited stock. We will always update our website and Instagram for the next drops and when you can start pre-ordering."},{question:"Where and when do you deliver?",answer:"We deliver every Sunday on the week of drops, starting from the morning until all orders have been delivered. We are currently delivering all around the GTA (Scarborough,  North York, Markham, Toronto, Etobicoke, Mississauga) with additional fees depending on location."},{question:"Can I pick-up my order?",answer:"Yes, pickups are free of charge with no minimum purchase. Pickups will only be available from 9am-11am."},{question:"Where are your pickup locations?",answer:"We have pickup in Scarborough (near Eg GO) and Downtown Toronto (near Victoria & King E)."},{question:"How long do your cinnamon buns keep?",answer:"Though we recommend you consume your buns as soon as possible (for the best quality), cinnamon rolls actually keep quite well. You can keep them in an airtight container in the refrigerator for up to 1 week and microwave in increments of 30 seconds, no longer than 1 minute."},{question:"How long do your donuts keep?",answer:"Our donuts are best consumed the day of but can be kept in an airtight container for up to 2 days. When consumed next day, donut can be eaten as is or warmed up for 30 seconds in the microwave."},{question:"Are your cinnamon buns nut-free?",answer:"We currently do not use any nuts in our recipe, however our commercial kitchen may not be nut-free."},{question:"Do your cinnamon buns/donuts contain dairy or eggs?",answer:"Our cinnamon buns and donuts both contain dairy but the buns are egg-free. Some fillings or toppings may be made with egg such as our kaya.Open to requests for dairy substitutions (plant-based milk, i.e. oat) to better accomodate you (*prices may differ)."},{question:"How many servings do each of your bottles make?",answer:"Each bottle of our cold brew concentrate serves an average of 2-4 cups of coffee (can be more or less depending on your preference)."},{question:"What is the shelf life of your cold brew concentrate.",answer:"Please consume within 2 weeks and keep refrigerated."},{question:"Can I store it in room temperature?",answer:"No. Cold brew concentrate must be refrigerated immediately. When stored in room temperature (especially during warmer months) it can easily change taste and flavour in just 24 hours."},{question:"Can I drink my cold brew concentrate straight from the bottle?",answer:"Yes, if you prefer your coffee black. Just be mindful that cold brew concentrate is highly caffeinated."},{question:"Can I return my bottles?",answer:"Though our bottles are highly recommended to be re-used and re-purposed, we do offer a 5% discount on your next cold brew purchase when you return your bottles."}]},8581:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(5908)}])},3165:function(e){e.exports={wrapper:"BakeryDropListStyles_wrapper__wPXgv",header:"BakeryDropListStyles_header__2e3FS",dropItems:"BakeryDropListStyles_dropItems__3kZdz",dropItem:"BakeryDropListStyles_dropItem__I-qQ4",productInfo:"BakeryDropListStyles_productInfo__3ogTZ",mediaDetail:"BakeryDropListStyles_mediaDetail__2qX4-",productName:"BakeryDropListStyles_productName__38REc",productDescription:"BakeryDropListStyles_productDescription__3eXir",productPrice:"BakeryDropListStyles_productPrice__3RW7W",cartUtil:"BakeryDropListStyles_cartUtil__2361D",cartQty:"BakeryDropListStyles_cartQty__20sQK",btn:"BakeryDropListStyles_btn__1oMDa"}},352:function(e){e.exports={wrapper:"CheckoutButtonStyles_wrapper__2GZat",checkoutButton:"CheckoutButtonStyles_checkoutButton__xuyPZ"}},2420:function(e){e.exports={wrapper:"DetailsSectionStyles_wrapper__2g-xk",header:"DetailsSectionStyles_header__UXHLn",reviews:"DetailsSectionStyles_reviews__34XHt",textWrapper:"DetailsSectionStyles_textWrapper__KS2l1",background:"DetailsSectionStyles_background__2563e"}},1242:function(e){e.exports={header:"FaqStyles_header__3RYMe",faqWrapper:"FaqStyles_faqWrapper__Bb8XU",subHeader:"FaqStyles_subHeader__1OC-T",faqAccordion:"FaqStyles_faqAccordion__2tZC2",accordionItem:"FaqStyles_accordionItem__20lNQ",accordionTitle:"FaqStyles_accordionTitle__2S9um",accordionContent:"FaqStyles_accordionContent__3UHrZ"}},4964:function(e){e.exports={heroVidWrapper:"HeroVideoStyles_heroVidWrapper__3qyM5",video:"HeroVideoStyles_video__3BR2U",header:"HeroVideoStyles_header__78OEg"}},9404:function(e){e.exports={imgWrapper:"ImageSectionStyles_imgWrapper__1TFwI",img:"ImageSectionStyles_img__38mNp"}},2698:function(e){e.exports={infowrapper:"InfoSectionStyles_infowrapper__1bM-X",infoleft:"InfoSectionStyles_infoleft__3VI6a",right:"InfoSectionStyles_right__xfo_F",text:"InfoSectionStyles_text__xGD9M"}},7978:function(e){e.exports={reviewsWrapper:"ReviewsStyles_reviewsWrapper__20Hpy",header:"ReviewsStyles_header__3TtdP",reviews:"ReviewsStyles_reviews__I4eoz",quote:"ReviewsStyles_quote__GAguS",quoteItem:"ReviewsStyles_quoteItem__3mbX1",background:"ReviewsStyles_background__2fzZj"}},9976:function(e){e.exports={wrapper:"ShippingStyles_wrapper__2YtHX"}},1163:function(e,r,t){e.exports=t(2441)},4851:function(){throw new Error('Module parse failed: Unexpected token (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> <svg width="132" height="2" viewBox="0 0 132 2" fill="none" xmlns="http://www.w3.org/2000/svg">\n| <path d="M0 1H132" stroke="black"/>\n| </svg>')}},function(e){e.O(0,[774,888,179],(function(){return r=8581,e(e.s=r);var r}));var r=e.O();_N_E=r}]);
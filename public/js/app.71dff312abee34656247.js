webpackJsonp([1],{0:function(e,t,i){e.exports=i("nplA")},"05Ij":function(e,t){e.exports={secp128r1:{p:"fffffffdffffffffffffffffffffffff",a:"fffffffdfffffffffffffffffffffffc",b:"e87579c11079f43dd824993c2cee5ed3",n:"fffffffe0000000075a30d1b9038a115",h:"01",Gx:"161ff7528b899b2d0c28607ca52c5b86",Gy:"cf5ac8395bafeb13c02da292dded7a83"},secp160k1:{p:"fffffffffffffffffffffffffffffffeffffac73",a:"00",b:"07",n:"0100000000000000000001b8fa16dfab9aca16b6b3",h:"01",Gx:"3b4c382ce37aa192a4019e763036f4f5dd4d7ebb",Gy:"938cf935318fdced6bc28286531733c3f03c4fee"},secp160r1:{p:"ffffffffffffffffffffffffffffffff7fffffff",a:"ffffffffffffffffffffffffffffffff7ffffffc",b:"1c97befc54bd7a8b65acf89f81d4d4adc565fa45",n:"0100000000000000000001f4c8f927aed3ca752257",h:"01",Gx:"4a96b5688ef573284664698968c38bb913cbfc82",Gy:"23a628553168947d59dcc912042351377ac5fb32"},secp192k1:{p:"fffffffffffffffffffffffffffffffffffffffeffffee37",a:"00",b:"03",n:"fffffffffffffffffffffffe26f2fc170f69466a74defd8d",h:"01",Gx:"db4ff10ec057e9ae26b07d0280b7f4341da5d1b1eae06c7d",Gy:"9b2f2f6d9c5628a7844163d015be86344082aa88d95e2f9d"},secp192r1:{p:"fffffffffffffffffffffffffffffffeffffffffffffffff",a:"fffffffffffffffffffffffffffffffefffffffffffffffc",b:"64210519e59c80e70fa7e9ab72243049feb8deecc146b9b1",n:"ffffffffffffffffffffffff99def836146bc9b1b4d22831",h:"01",Gx:"188da80eb03090f67cbf20eb43a18800f4ff0afd82ff1012",Gy:"07192b95ffc8da78631011ed6b24cdd573f977a11e794811"},secp256k1:{p:"fffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f",a:"00",b:"07",n:"fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141",h:"01",Gx:"79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798",Gy:"483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8"},secp256r1:{p:"ffffffff00000001000000000000000000000000ffffffffffffffffffffffff",a:"ffffffff00000001000000000000000000000000fffffffffffffffffffffffc",b:"5ac635d8aa3a93e7b3ebbd55769886bc651d06b0cc53b0f63bce3c3e27d2604b",n:"ffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc632551",h:"01",Gx:"6b17d1f2e12c4247f8bce6e563a440f277037d812deb33a0f4a13945d898c296",Gy:"4fe342e2fe1a7f9b8ee7eb4a7c0f9e162bce33576b315ececbb6406837bf51f5"}}},"0uvu":function(e,t,i){"use strict";(function(e){var a=i("Dfrr"),r=i.n(a),n=i("CYRF"),f=i.n(n);t.a={name:"register-page",components:{},data:function(){return{ethereumPrivateKey:null,ethereumPublicKey:null,ethereumAddress:null,convertedEOSPublicKey:null,convertedEOSPrivateKey:null,statusMessage:null}},methods:{convertEthereumPrivateToEOSPrivate:function(){if(this.statusMessage="",f.a.isValidPrivate(e.from(this.ethereumPrivateKey,"hex"))){this.ethereumAddress="0x"+f.a.privateToAddress(e.from(this.ethereumPrivateKey,"hex")).toString("hex"),this.ethereumPublicKey=f.a.privateToPublic(e.from(this.ethereumPrivateKey,"hex")).toString("hex");var t=r.a.PrivateKey(e.from(this.ethereumPrivateKey,"hex")).toWif();this.convertedEOSPrivateKey=t,this.convertedEOSPublicKey=r.a.privateToPublic(t),this.statusMessage="   Success!"}else this.statusMessage="Invalid Ethereum Private Key"},switchLanguage:function(e){this.$i18n.locale=e}}}}).call(t,i("EuP9").Buffer)},1:function(e,t){},"1QQ/":function(e,t){e.exports={_from:"bigi@^1.4.2",_id:"bigi@1.4.2",_inBundle:!1,_integrity:"sha1-nGZalfiLiwj8Bc/XMfVhhZ1yWCU=",_location:"/bigi",_phantomChildren:{},_requested:{type:"range",registry:!0,raw:"bigi@^1.4.2",name:"bigi",escapedName:"bigi",rawSpec:"^1.4.2",saveSpec:null,fetchSpec:"^1.4.2"},_requiredBy:["/ecurve","/eosjs-ecc"],_resolved:"https://registry.npmjs.org/bigi/-/bigi-1.4.2.tgz",_shasum:"9c665a95f88b8b08fc05cfd731f561859d725825",_spec:"bigi@^1.4.2",_where:"/Users/jafri/Google Drive/eoskeyio/node_modules/eosjs-ecc",bugs:{url:"https://github.com/cryptocoinjs/bigi/issues"},bundleDependencies:!1,dependencies:{},deprecated:!1,description:"Big integers.",devDependencies:{coveralls:"^2.11.2",istanbul:"^0.3.5",jshint:"^2.5.1",mocha:"^2.1.0",mochify:"^2.1.0"},homepage:"https://github.com/cryptocoinjs/bigi#readme",keywords:["cryptography","math","bitcoin","arbitrary","precision","arithmetic","big","integer","int","number","biginteger","bigint","bignumber","decimal","float"],main:"./lib/index.js",name:"bigi",repository:{url:"git+https://github.com/cryptocoinjs/bigi.git",type:"git"},scripts:{"browser-test":"mochify --wd -R spec",coverage:"istanbul cover ./node_modules/.bin/_mocha -- --reporter list test/*.js",coveralls:"npm run-script coverage && node ./node_modules/.bin/coveralls < coverage/lcov.info",jshint:"jshint --config jshint.json lib/*.js ; true",test:"_mocha -- test/*.js",unit:"mocha"},testling:{files:"test/*.js",harness:"mocha",browsers:["ie/9..latest","firefox/latest","chrome/latest","safari/6.0..latest","iphone/6.0..latest","android-browser/4.2..latest"]},version:"1.4.2"}},2:function(e,t){},3:function(e,t){},"3Puz":function(e,t){},"6ZSt":function(e,t){e.exports={"aes-128-ecb":{cipher:"AES",key:128,iv:0,mode:"ECB",type:"block"},"aes-192-ecb":{cipher:"AES",key:192,iv:0,mode:"ECB",type:"block"},"aes-256-ecb":{cipher:"AES",key:256,iv:0,mode:"ECB",type:"block"},"aes-128-cbc":{cipher:"AES",key:128,iv:16,mode:"CBC",type:"block"},"aes-192-cbc":{cipher:"AES",key:192,iv:16,mode:"CBC",type:"block"},"aes-256-cbc":{cipher:"AES",key:256,iv:16,mode:"CBC",type:"block"},aes128:{cipher:"AES",key:128,iv:16,mode:"CBC",type:"block"},aes192:{cipher:"AES",key:192,iv:16,mode:"CBC",type:"block"},aes256:{cipher:"AES",key:256,iv:16,mode:"CBC",type:"block"},"aes-128-cfb":{cipher:"AES",key:128,iv:16,mode:"CFB",type:"stream"},"aes-192-cfb":{cipher:"AES",key:192,iv:16,mode:"CFB",type:"stream"},"aes-256-cfb":{cipher:"AES",key:256,iv:16,mode:"CFB",type:"stream"},"aes-128-cfb8":{cipher:"AES",key:128,iv:16,mode:"CFB8",type:"stream"},"aes-192-cfb8":{cipher:"AES",key:192,iv:16,mode:"CFB8",type:"stream"},"aes-256-cfb8":{cipher:"AES",key:256,iv:16,mode:"CFB8",type:"stream"},"aes-128-cfb1":{cipher:"AES",key:128,iv:16,mode:"CFB1",type:"stream"},"aes-192-cfb1":{cipher:"AES",key:192,iv:16,mode:"CFB1",type:"stream"},"aes-256-cfb1":{cipher:"AES",key:256,iv:16,mode:"CFB1",type:"stream"},"aes-128-ofb":{cipher:"AES",key:128,iv:16,mode:"OFB",type:"stream"},"aes-192-ofb":{cipher:"AES",key:192,iv:16,mode:"OFB",type:"stream"},"aes-256-ofb":{cipher:"AES",key:256,iv:16,mode:"OFB",type:"stream"},"aes-128-ctr":{cipher:"AES",key:128,iv:16,mode:"CTR",type:"stream"},"aes-192-ctr":{cipher:"AES",key:192,iv:16,mode:"CTR",type:"stream"},"aes-256-ctr":{cipher:"AES",key:256,iv:16,mode:"CTR",type:"stream"},"aes-128-gcm":{cipher:"AES",key:128,iv:12,mode:"GCM",type:"auth"},"aes-192-gcm":{cipher:"AES",key:192,iv:12,mode:"GCM",type:"auth"},"aes-256-gcm":{cipher:"AES",key:256,iv:12,mode:"GCM",type:"auth"}}},KSNH:function(e,t){},KYqO:function(e,t){e.exports={_from:"elliptic@^6.2.3",_id:"elliptic@6.4.0",_inBundle:!1,_integrity:"sha1-ysmvh2LIWDYYcAPI3+GT5eLq5d8=",_location:"/elliptic",_phantomChildren:{},_requested:{type:"range",registry:!0,raw:"elliptic@^6.2.3",name:"elliptic",escapedName:"elliptic",rawSpec:"^6.2.3",saveSpec:null,fetchSpec:"^6.2.3"},_requiredBy:["/browserify-sign","/create-ecdh","/secp256k1"],_resolved:"https://registry.npmjs.org/elliptic/-/elliptic-6.4.0.tgz",_shasum:"cac9af8762c85836187003c8dfe193e5e2eae5df",_spec:"elliptic@^6.2.3",_where:"/Users/jafri/Google Drive/eoskeyio/node_modules/secp256k1",author:{name:"Fedor Indutny",email:"fedor@indutny.com"},bugs:{url:"https://github.com/indutny/elliptic/issues"},bundleDependencies:!1,dependencies:{"bn.js":"^4.4.0",brorand:"^1.0.1","hash.js":"^1.0.0","hmac-drbg":"^1.0.0",inherits:"^2.0.1","minimalistic-assert":"^1.0.0","minimalistic-crypto-utils":"^1.0.0"},deprecated:!1,description:"EC cryptography",devDependencies:{brfs:"^1.4.3",coveralls:"^2.11.3",grunt:"^0.4.5","grunt-browserify":"^5.0.0","grunt-cli":"^1.2.0","grunt-contrib-connect":"^1.0.0","grunt-contrib-copy":"^1.0.0","grunt-contrib-uglify":"^1.0.1","grunt-mocha-istanbul":"^3.0.1","grunt-saucelabs":"^8.6.2",istanbul:"^0.4.2",jscs:"^2.9.0",jshint:"^2.6.0",mocha:"^2.1.0"},files:["lib"],homepage:"https://github.com/indutny/elliptic",keywords:["EC","Elliptic","curve","Cryptography"],license:"MIT",main:"lib/elliptic.js",name:"elliptic",repository:{type:"git",url:"git+ssh://git@github.com/indutny/elliptic.git"},scripts:{jscs:"jscs benchmarks/*.js lib/*.js lib/**/*.js lib/**/**/*.js test/index.js",jshint:"jscs benchmarks/*.js lib/*.js lib/**/*.js lib/**/**/*.js test/index.js",lint:"npm run jscs && npm run jshint",test:"npm run lint && npm run unit",unit:"istanbul test _mocha --reporter=spec test/index.js",version:"grunt dist && git add dist/"},version:"6.4.0"}},N12Q:function(e,t){},R58i:function(e,t){},Zq8D:function(e,t,i){e.exports=i.p+"img/eos_collab.5294bda.png"},ma1X:function(e,t){},mxF7:function(e,t){},nplA:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i("Dd8w"),r=i.n(a),n=i("/5sW"),f=i("7109");n.a.use(f.B,{components:{QLayout:f.m,QLayoutHeader:f.o,QLayoutDrawer:f.n,QPageContainer:f.s,QPage:f.r,QToolbar:f.x,QToolbarTitle:f.y,QBtn:f.b,QIcon:f.i,QList:f.p,QListHeader:f.q,QItem:f.j,QItemMain:f.k,QItemSide:f.l,QCard:f.c,QCardTitle:f.h,QCardMain:f.e,QCardMedia:f.f,QCardSeparator:f.g,QCardActions:f.d,QTable:f.t,QTh:f.w,QTr:f.z,QTd:f.v,QTableColumns:f.u},directives:{Ripple:f.A},plugins:{Notify:f.a}});i("L4dm"),i("trlb"),i("3Puz"),i("N12Q");var s=function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"q-app"}},[t("router-view")],1)},l=[];s._withStripped=!0;var o=i("XyMi"),c=!1;var u=function(e){c||i("tHqv")},d=Object(o.a)({name:"App"},s,l,!1,u,null,null);d.options.__file="src/App.vue";var v=d.exports,p=i("/ocq"),y={name:"LayoutDefault",data:function(){return{leftDrawerOpen:!0}},computed:{showDownload:function(){var e=!!this.$q.platform.is.electron,t=!!this.$q.platform.is.cordova;return!e&&!t}},methods:{openURL:f.C,openPage:function(e){this.$router.push(e)}}},b=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-layout",{attrs:{view:"lHh Lpr lFf"}},[a("q-layout-header",[a("q-toolbar",{attrs:{color:"primary",inverted:"ios"===e.$q.theme}},[a("q-btn",{attrs:{flat:"",dense:"",round:"","aria-label":"Menu"},on:{click:function(t){e.leftDrawerOpen=!e.leftDrawerOpen}}},[a("q-icon",{attrs:{name:"fa fa-bars"}})],1),e._v(" "),a("q-toolbar-title",[a("p",{staticStyle:{float:"left",margin:"0"}},[e._v("EOS Key")]),e._v(" "),a("p",{staticStyle:{float:"right",margin:"0"}},[e._v("EOS Cafe Calgary")])])],1)],1),e._v(" "),a("q-layout-drawer",{attrs:{"content-class":"mat"===e.$q.theme?"bg-grey-2":null},model:{value:e.leftDrawerOpen,callback:function(t){e.leftDrawerOpen=t},expression:"leftDrawerOpen"}},[a("q-list",{attrs:{"no-border":"",link:"","inset-delimiter":""}},[a("img",{staticClass:"center",staticStyle:{width:"250px","padding-top":"10px"},attrs:{id:"logo",src:i("Zq8D"),alt:"EOS Calgary x EOS Cafe"}}),e._v(" "),a("q-list-header",[e._v(e._s(e.$t("sidebar.convertEthereumKeyToEOSKey")))]),e._v(" "),a("q-item",{nativeOn:{click:function(t){e.openPage("/")}}},[a("q-item-side",{attrs:{icon:"fa fa-registered"}}),e._v(" "),a("q-item-main",{attrs:{label:e.$t("sidebar.mainnetRegister")}})],1),e._v(" "),a("q-list-header",[e._v(e._s(e.$t("sidebar.createAndConfirmEOSKeys")))]),e._v(" "),a("q-item",{nativeOn:{click:function(t){e.openPage("generate")}}},[a("q-item-side",{attrs:{icon:"fa fa-key"}}),e._v(" "),a("q-item-main",{attrs:{label:e.$t("sidebar.generateAndValidateKeys")}})],1),e._v(" "),e.showDownload?a("q-list-header",[e._v(e._s(e.$t("sidebar.download")))]):e._e(),e._v(" "),e.showDownload?a("q-item",{nativeOn:{click:function(t){e.openURL("browser.eoskey.io")}}},[a("q-item-side",{attrs:{icon:"fa fa-download"}}),e._v(" "),a("q-item-main",{attrs:{label:"Browser"}})],1):e._e(),e._v(" "),e.showDownload?a("q-item",{nativeOn:{click:function(t){e.openURL("macos.eoskey.io")}}},[a("q-item-side",{attrs:{icon:"fa fa-download"}}),e._v(" "),a("q-item-main",{attrs:{label:"MacOS"}})],1):e._e(),e._v(" "),e.showDownload?a("q-item",{nativeOn:{click:function(t){e.openURL("windows.eoskey.io")}}},[a("q-item-side",{attrs:{icon:"fa fa-download"}}),e._v(" "),a("q-item-main",{attrs:{label:"Windows"}})],1):e._e(),e._v(" "),e.showDownload?a("q-item",{nativeOn:{click:function(t){e.openURL("linux.eoskey.io")}}},[a("q-item-side",{attrs:{icon:"fa fa-download"}}),e._v(" "),a("q-item-main",{attrs:{label:"Linux"}})],1):e._e(),e._v(" "),e.showDownload?a("q-item",{nativeOn:{click:function(t){e.openURL("android.eoskey.io")}}},[a("q-item-side",{attrs:{icon:"fa fa-download"}}),e._v(" "),a("q-item-main",{attrs:{label:"Android"}})],1):e._e(),e._v(" "),e.showDownload?a("q-item",{nativeOn:{click:function(t){e.openURL("ios.eoskey.io")}}},[a("q-item-side",{attrs:{icon:"fa fa-download"}}),e._v(" "),a("q-item-main",{attrs:{label:"iOS"}})],1):e._e()],1)],1),e._v(" "),a("q-page-container",[a("router-view")],1)],1)},_=[];b._withStripped=!0;var m=!1;var g=function(e){m||i("xwNl")},h=Object(o.a)(y,b,_,!1,g,null,null);h.options.__file="src/layouts/default.vue";var E=h.exports,P=i("0uvu"),K=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("q-page",{attrs:{padding:""}},[i("main",[i("div",{staticClass:"left-side"},[i("div",{staticClass:"title"},[e._v(e._s(e.$t("register.warning"))+":")]),e._v("\n        "+e._s(e.$t("register.warningMessage"))+"\n\n        "),i("div",{staticClass:"doc",staticStyle:{"padding-top":"30px"}},[i("div",{staticClass:"title"},[e._v(e._s(e.$t("register.convertPrivateTitle")))]),e._v(" "),i("p",[e._v("\n            "+e._s(e.$t("register.ethereumPrivateKey"))+":\n            "),i("span",{staticStyle:{"padding-left":"7px"}}),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.ethereumPrivateKey,expression:"ethereumPrivateKey"}],staticClass:"form-style",attrs:{placeholder:e.$t("register.ethereumPrivateKeyText")},domProps:{value:e.ethereumPrivateKey},on:{input:function(t){t.target.composing||(e.ethereumPrivateKey=t.target.value)}}})]),e._v(" "),i("p",{staticClass:"mid-text"},[e._v(e._s(e.$t("register.ethereumAddress"))+" : "+e._s(e.ethereumAddress))]),e._v(" "),i("p",{staticClass:"mid-text"},[e._v(e._s(e.$t("register.eosPrivateKey"))+" : "+e._s(e.convertedEOSPrivateKey))]),e._v(" "),i("p",{staticClass:"mid-text"},[e._v(e._s(e.$t("register.eosPublicKey"))+" : "+e._s(e.convertedEOSPublicKey))]),e._v(" "),i("button",{staticStyle:{"margin-top":"10px"},on:{click:e.convertEthereumPrivateToEOSPrivate}},[e._v(e._s(e.$t("register.generatePrivateButton"))+" ")]),e._v("\n          "+e._s(e.statusMessage)+"\n        ")]),e._v(" "),i("div",{staticClass:"doc",staticStyle:{"padding-top":"30px"}},[i("div",{staticClass:"title"},[e._v(e._s(e.$t("register.languageTitle")))]),e._v(" "),i("button",{staticClass:"alt",on:{click:function(t){e.switchLanguage("en")}}},[e._v("English")]),e._v(" "),i("button",{staticClass:"alt",on:{click:function(t){e.switchLanguage("es")}}},[e._v("Español")]),e._v(" "),i("button",{staticClass:"alt",on:{click:function(t){e.switchLanguage("zh_cn")}}},[e._v("简体中文")]),e._v(" "),i("button",{staticClass:"alt",on:{click:function(t){e.switchLanguage("kr")}}},[e._v("한국어")])])])])])},S=[];K._withStripped=!0;var C=!1;var A=function(e){C||i("ma1X")},T=Object(o.a)(P.a,K,S,!1,A,null,null);T.options.__file="src/pages/homepage.vue";var w=T.exports,k=i("Dfrr"),I=i.n(k),O={name:"generate",components:{},data:function(){return{newPublicKey:null,newPrivateKey:null,validatePublicKey:null,validatePrivateKey:null,validationStatus:null,privateKeyToGeneratePublic:null,publicKeyFromPrivateKey:null,generatePublicKeyStatus:null}},methods:{generateNewKeys:function(){var e=this;I.a.randomKey().then(function(t){var i=I.a.privateToPublic(t);e.newPrivateKey=t,e.newPublicKey=i})},validateKeys:function(){var e=this.validatePublicKey,t=this.validatePrivateKey;if(I.a.isValidPublic(e))if(I.a.isValidPrivate(t)){var i=I.a.privateToPublic(t);this.validationStatus=i===e?this.$t("generate.validKeyPair"):this.$t("generate.invalidPublicKey")}else this.validationStatus=this.$t("generate.invalidPrivateKey");else this.validationStatus=this.$t("generate.invalidPublicKey")},generatePublicFromPrivate:function(){var e=this.privateKeyToGeneratePublic;if(I.a.isValidPrivate(e)){var t=I.a.privateToPublic(this.privateKeyToGeneratePublic);this.publicKeyFromPrivateKey=t}else this.generatePublicKeyStatus=this.$t("generate.invalidPrivateKey")},switchLanguage:function(e){this.$i18n.locale=e}}},L=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("q-page",{attrs:{padding:""}},[i("main",[i("div",{staticClass:"left-side"},[i("div",{staticClass:"doc"},[i("div",{staticClass:"title"},[e._v(e._s(e.$t("generate.generateTitle")))]),e._v(" "),i("p",[e._v(e._s(e.$t("generate.publicKey"))+" : "+e._s(e.newPublicKey))]),e._v(" "),i("p",[e._v(e._s(e.$t("generate.privateKey"))+" : "+e._s(e.newPrivateKey))]),e._v(" "),i("button",{on:{click:e.generateNewKeys}},[e._v(e._s(e.$t("generate.generateButton")))])]),e._v(" "),i("div",{staticClass:"doc",staticStyle:{"padding-top":"30px"}},[i("div",{staticClass:"title"},[e._v(e._s(e.$t("generate.validateTitle")))]),e._v(" "),i("p",[e._v("\n            "+e._s(e.$t("generate.publicKey"))+":\n            "),i("span",{staticStyle:{"padding-left":"7px"}}),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.validatePublicKey,expression:"validatePublicKey"}],staticClass:"form-style",attrs:{placeholder:e.$t("generate.validatePublicKeyText")},domProps:{value:e.validatePublicKey},on:{input:function(t){t.target.composing||(e.validatePublicKey=t.target.value)}}})]),e._v(" "),i("p",[e._v("\n            "+e._s(e.$t("generate.privateKey"))+":\n            "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.validatePrivateKey,expression:"validatePrivateKey"}],staticClass:"form-style",attrs:{placeholder:e.$t("generate.validatePrivateKeyText")},domProps:{value:e.validatePrivateKey},on:{input:function(t){t.target.composing||(e.validatePrivateKey=t.target.value)}}})]),e._v(" "),i("button",{on:{click:e.validateKeys}},[e._v(e._s(e.$t("generate.validateButton"))+" ")]),e._v(" "),e.validationStatus?i("p",{staticClass:"status-text"},[e._v(" "+e._s(e.validationStatus)+" ")]):e._e()]),e._v(" "),i("div",{staticClass:"doc",staticStyle:{"padding-top":"30px"}},[i("div",{staticClass:"title"},[e._v(e._s(e.$t("generate.findPublicKey")))]),e._v(" "),i("p",[e._v("\n            "+e._s(e.$t("generate.privateKey"))+":\n            "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.privateKeyToGeneratePublic,expression:"privateKeyToGeneratePublic"}],staticClass:"form-style",attrs:{placeholder:e.$t("generate.validatePrivateKeyText")},domProps:{value:e.privateKeyToGeneratePublic},on:{input:function(t){t.target.composing||(e.privateKeyToGeneratePublic=t.target.value)}}})]),e._v(" "),i("p",[e._v(e._s(e.$t("generate.publicKey"))+" : "+e._s(e.publicKeyFromPrivateKey))]),e._v(" "),i("button",{on:{click:e.generatePublicFromPrivate}},[e._v(e._s(e.$t("generate.findButton"))+" ")]),e._v(" "),e.generatePublicKeyStatus?i("p",{staticClass:"status-text"},[e._v(" "+e._s(e.generatePublicKeyStatus)+" ")]):e._e()]),e._v(" "),i("div",{staticClass:"doc",staticStyle:{"padding-top":"30px"}},[i("div",{staticClass:"title"},[e._v(e._s(e.$t("generate.languageTitle")))]),e._v(" "),i("button",{staticClass:"alt",on:{click:function(t){e.switchLanguage("en")}}},[e._v("English")]),e._v(" "),i("button",{staticClass:"alt",on:{click:function(t){e.switchLanguage("es")}}},[e._v("Español")]),e._v(" "),i("button",{staticClass:"alt",on:{click:function(t){e.switchLanguage("zh_cn")}}},[e._v("简体中文")]),e._v(" "),i("button",{staticClass:"alt",on:{click:function(t){e.switchLanguage("kr")}}},[e._v("한국어")])])])])])},x=[];L._withStripped=!0;var D=!1;var B=function(e){D||i("mxF7")},N=Object(o.a)(O,L,x,!1,B,null,null);N.options.__file="src/pages/generate.vue";var R=N.exports,q=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"fixed-center text-center"},[e._m(0),e._v(" "),e._m(1),e._v(" "),i("q-btn",{staticStyle:{width:"200px"},attrs:{color:"secondary"},on:{click:function(t){e.$router.push("/")}}},[e._v("Go back")])],1)},G=[function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{staticStyle:{width:"30vw","max-width":"150px"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",{staticClass:"text-faded"},[this._v("Sorry, nothing here..."),t("strong",[this._v("(404)")])])}];q._withStripped=!0;var j=Object(o.a)(null,q,G,!1,null,null,null);j.options.__file="src/pages/404.vue";var V=[{path:"/",component:E,children:[{path:"",component:w},{path:"generate",component:R}]},{path:"*",component:j.exports}];n.a.use(p.a);var $=new p.a({mode:"history",base:"/",scrollBehavior:function(){return{y:0}},routes:V}),F=i("TXmL"),Y={en:{sidebar:{convertEthereumKeyToEOSKey:"Convert Ethereum Key to EOS Key",mainnetRegister:"Mainnet Register",createAndConfirmEOSKeys:"Create and Confirm EOS Key Pairs",generateAndValidateKeys:"Generate and Validate Keys",download:"Download Offline"},register:{warning:"WARNING",warningMessage:"This tool only works if you have sent atleast 1 outgoing transaction from ethereum account and have NOT registered your EOS yet!",convertPrivateTitle:"Convert Ethereum Private Key to EOS Private Key",convertPublicTitle:"Convert Ethereum Public Key to EOS Public Key",generatePrivateButton:"Generate EOS Private Key",generatePublicButton:"Generate EOS Public Key",ethereumPrivateKey:"Ethereum Private Key",ethereumPublicKey:"Ethereum Public Key",ethereumAddress:"Ethereum Address",ethereumPrivateKeyText:"Enter ethereum private key",eosPrivateKey:"EOS Private Key",eosPublicKey:"EOS Public Key",languageTitle:"Language"},generate:{generateTitle:"Generate Keys",publicKey:"Public Key",privateKey:"Private Key",generateButton:"Generate",validateTitle:"Validate Key Pair",validatePublicKeyText:"Enter public key (starts with 'EOS')",validatePrivateKeyText:"Enter private key",validateButton:"Validate",findPublicKey:"Find Public Key",findButton:"Find",languageTitle:"Language",validKeyPair:"Valid Key Pair!",invalidPrivateKey:"Invalid Private Key.",invalidPublicKey:"Invalid Public Key.",warning:"WARNING"}},zh_cn:{sidebar:{convertEthereumKeyToEOSKey:"转换以太坊密钥为EOS 密钥",mainnetRegister:"主网注册",createAndConfirmEOSKeys:"生成并确认EOS 密钥对",generateAndValidateKeys:"生成并校验密钥对",download:"下载"},register:{warning:"警告",warningMessage:"这个工具必须在你的以太坊地址至少成功的发生过一次交易，并且没有被EOS 注册的情况下才会生效",convertPrivateTitle:" 转换以太坊私钥为EOS私钥",convertPublicTitle:"转换以太坊公钥为EOS 公钥",generatePrivateButton:"生成EOS私钥",generatePublicButton:"生成EOS公钥",ethereumPrivateKey:"以太坊私钥",ethereumPublicKey:"以太坊公钥",ethereumAddress:"以太坊地址",ethereumPrivateKeyText:"输入以太坊私钥",eosPrivateKey:"EOS私钥",eosPublicKey:"EOS公钥",languageTitle:"选择语言"},generate:{generateTitle:"密钥生成器",publicKey:"公钥",privateKey:"私钥",generateButton:"生成",validateTitle:"验证密钥对",validatePublicKeyText:"输入你的公钥",validatePrivateKeyText:"输入你的私钥",validateButton:"验证",findPublicKey:"查找公钥",findButton:"查找",languageTitle:"语言",validKeyPair:"验证密钥对",invalidPrivateKey:"不正确的私钥",invalidPublicKey:"不正确的公钥",warning:"警告"}},kr:{sidebar:{convertEthereumKeyToEOSKey:"이더리움 키를 EOS 키로 변환",mainnetRegister:"메인넷 등록",createAndConfirmEOSKeys:"EOS 키 쌍 생성 및 승인",generateAndValidateKeys:"키 생성 및 유효성 검증",download:"다운로드"},register:{warning:"경고",warningMessage:"이 툴은 아직 EOS를 정상 등록하지 못하신 분들에게만 정상적으로 동작하며,  적어도 한번 이상의 외부 트랜잭션이 일어난 이더리움 계정에 한해 사용이 가능합니다.",convertPrivateTitle:"이더리움 프라이빗 키를 EOS 프라이빗 키로 변경",convertPublicTitle:"이더리움 퍼블릭키를 EOS 퍼블릭 키로 변경",generatePrivateButton:"EOS 프라이빗 키 생성",generatePublicButton:"EOS 퍼블릭키 생성",ethereumPrivateKey:"이더리움 프라이빗 키 생성",ethereumPublicKey:"이더리움 퍼블릭 키",ethereumAddress:"이더리움 주소",ethereumPrivateKeyText:"이더리움 프라이빗 키 입력",eosPrivateKey:"EOS 프라이빗 키",eosPublicKey:"EOS 퍼블릭 키",languageTitle:"언어"},generate:{generateTitle:"키(keys) 생성하기",publicKey:"공개키",privateKey:"개인키",generateButton:"생성하기",validateTitle:"키(keys) 매칭 유효성 확인하기 ",validatePublicKeyText:"공개키를 입력하세요 (‘EOS’로 시작하는)",validatePrivateKeyText:"개인키를 입력하세요",validateButton:"검사하기",findPublicKey:"공개 키(key) 확인하기",findButton:"발견",languageTitle:"언어",validKeyPair:"유효하지 않은 공개키",invalidPrivateKey:"유효하지 않은 개인키",invalidPublicKey:"유효하지 않은 공개키",warning:"경고"}},es:{sidebar:{download:"Descargar"},register:{warning:"ADVERTENCIA",warningMessage:"This tool only works if you have sent atleast 1 outgoing transaction from ethereum account and have NOT registered your EOS yet!",convertPrivateTitle:"Convertir Private Key de Ethereum a Private Key de EOS",convertPublicTitle:"Convertir Public Key de Ethereum a Public Key de EOS",generatePrivateButton:"Generar Private Key de EOS",generatePublicButton:"Generar Public Key de EOS",ethereumPrivateKey:"Private Key de Ethereum",ethereumPublicKey:"Public Key de Ethereum",ethereumAddress:"Dirección Ethereum",ethereumPrivateKeyText:"Ingresa la Private Key de Ethereum",eosPrivateKey:"Private Key de EOS",eosPublicKey:"Public Key de EOS",languageTitle:"Idioma"},generate:{generateTitle:"Generar Keys",publicKey:"Public Key",privateKey:"Private Key",generateButton:"Generar",validateTitle:"Validar Key Pair",validatePublicKeyText:"Ingresa public key (empieza con 'EOS')",validatePrivateKeyText:"Ingresa private key",validateButton:"Validar",findPublicKey:"Encontrar Public Key",findButton:"Encontrar",languageTitle:"Idioma",validKeyPair:"Validar Key Pair!",invalidPrivateKey:"Invalidar Private Key.",invalidPublicKey:"Invalidar Public Key.",warning:"ADVERTENCIA"}}};n.a.config.productionTip=!1;var M=r()({el:"#q-app",router:$},v),Q=[];Q.push(function(e){var t=e.app;e.Vue.use(F.a),t.i18n=new F.a({locale:"en",fallbackLocale:"en",messages:Y})}),Q.forEach(function(e){return e({app:M,router:$,Vue:n.a})}),new n.a(M)},o13F:function(e,t){e.exports={COMPRESSED_TYPE_INVALID:"compressed should be a boolean",EC_PRIVATE_KEY_TYPE_INVALID:"private key should be a Buffer",EC_PRIVATE_KEY_LENGTH_INVALID:"private key length is invalid",EC_PRIVATE_KEY_RANGE_INVALID:"private key range is invalid",EC_PRIVATE_KEY_TWEAK_ADD_FAIL:"tweak out of range or resulting private key is invalid",EC_PRIVATE_KEY_TWEAK_MUL_FAIL:"tweak out of range",EC_PRIVATE_KEY_EXPORT_DER_FAIL:"couldn't export to DER format",EC_PRIVATE_KEY_IMPORT_DER_FAIL:"couldn't import from DER format",EC_PUBLIC_KEYS_TYPE_INVALID:"public keys should be an Array",EC_PUBLIC_KEYS_LENGTH_INVALID:"public keys Array should have at least 1 element",EC_PUBLIC_KEY_TYPE_INVALID:"public key should be a Buffer",EC_PUBLIC_KEY_LENGTH_INVALID:"public key length is invalid",EC_PUBLIC_KEY_PARSE_FAIL:"the public key could not be parsed or is invalid",EC_PUBLIC_KEY_CREATE_FAIL:"private was invalid, try again",EC_PUBLIC_KEY_TWEAK_ADD_FAIL:"tweak out of range or resulting public key is invalid",EC_PUBLIC_KEY_TWEAK_MUL_FAIL:"tweak out of range",EC_PUBLIC_KEY_COMBINE_FAIL:"the sum of the public keys is not valid",ECDH_FAIL:"scalar was invalid (zero or overflow)",ECDSA_SIGNATURE_TYPE_INVALID:"signature should be a Buffer",ECDSA_SIGNATURE_LENGTH_INVALID:"signature length is invalid",ECDSA_SIGNATURE_PARSE_FAIL:"couldn't parse signature",ECDSA_SIGNATURE_PARSE_DER_FAIL:"couldn't parse DER signature",ECDSA_SIGNATURE_SERIALIZE_DER_FAIL:"couldn't serialize signature to DER format",ECDSA_SIGN_FAIL:"nonce generation function failed or private key is invalid",ECDSA_RECOVER_FAIL:"couldn't recover public key from signature",MSG32_TYPE_INVALID:"message should be a Buffer",MSG32_LENGTH_INVALID:"message length is invalid",OPTIONS_TYPE_INVALID:"options should be an Object",OPTIONS_DATA_TYPE_INVALID:"options.data should be a Buffer",OPTIONS_DATA_LENGTH_INVALID:"options.data length is invalid",OPTIONS_NONCEFN_TYPE_INVALID:"options.noncefn should be a Function",RECOVERY_ID_TYPE_INVALID:"recovery should be a Number",RECOVERY_ID_VALUE_INVALID:"recovery should have value between -1 and 4",TWEAK_TYPE_INVALID:"tweak should be a Buffer",TWEAK_LENGTH_INVALID:"tweak length is invalid"}},tHqv:function(e,t){},xwNl:function(e,t){}},[0]);
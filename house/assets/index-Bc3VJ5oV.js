(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Th="170",Wp=0,_u=1,Xp=2,of=1,af=2,Oi=3,qi=0,gn=1,rn=2,us=0,lr=1,xo=2,xu=3,vu=4,qp=5,Ts=100,Yp=101,jp=102,Kp=103,Zp=104,$p=200,Jp=201,Qp=202,em=203,vl=204,yl=205,tm=206,nm=207,im=208,sm=209,rm=210,om=211,am=212,cm=213,lm=214,Ml=0,Sl=1,wl=2,pr=3,bl=4,Tl=5,El=6,Al=7,cf=0,hm=1,um=2,ds=0,dm=1,fm=2,pm=3,lf=4,mm=5,gm=6,_m=7,yu="attached",xm="detached",hf=300,mr=301,gr=302,Rl=303,Cl=304,oc=306,Cs=1e3,Si=1001,Va=1002,_n=1003,uf=1004,Qr=1005,Nn=1006,Ta=1007,Hi=1008,Yi=1009,df=1010,ff=1011,vo=1012,Eh=1013,Ps=1014,ri=1015,Uo=1016,Ah=1017,Rh=1018,_r=1020,pf=35902,mf=1021,gf=1022,Gn=1023,_f=1024,xf=1025,hr=1026,xr=1027,Ch=1028,Ph=1029,vf=1030,Ih=1031,Lh=1033,Ea=33776,Aa=33777,Ra=33778,Ca=33779,Pl=35840,Il=35841,Ll=35842,Dl=35843,Nl=36196,Ul=37492,Fl=37496,Ol=37808,Bl=37809,kl=37810,zl=37811,Hl=37812,Vl=37813,Gl=37814,Wl=37815,Xl=37816,ql=37817,Yl=37818,jl=37819,Kl=37820,Zl=37821,Pa=36492,$l=36494,Jl=36495,yf=36283,Ql=36284,eh=36285,th=36286,Mf=2200,vm=2201,ym=2202,yo=2300,Mo=2301,Ac=2302,sr=2400,rr=2401,Ga=2402,Dh=2500,Mm=2501,Sm=0,Sf=1,nh=2,wm=3200,bm=3201,Nh=0,Tm=1,ls="",Bt="srgb",Tn="srgb-linear",ac="linear",St="srgb",Bs=7680,Mu=519,Em=512,Am=513,Rm=514,wf=515,Cm=516,Pm=517,Im=518,Lm=519,ih=35044,Su="300 es",Vi=2e3,Wa=2001;class Us{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let wu=1234567;const io=Math.PI/180,vr=180/Math.PI;function Xn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(dn[s&255]+dn[s>>8&255]+dn[s>>16&255]+dn[s>>24&255]+"-"+dn[e&255]+dn[e>>8&255]+"-"+dn[e>>16&15|64]+dn[e>>24&255]+"-"+dn[t&63|128]+dn[t>>8&255]+"-"+dn[t>>16&255]+dn[t>>24&255]+dn[n&255]+dn[n>>8&255]+dn[n>>16&255]+dn[n>>24&255]).toLowerCase()}function sn(s,e,t){return Math.max(e,Math.min(t,s))}function Uh(s,e){return(s%e+e)%e}function Dm(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Nm(s,e,t){return s!==e?(t-s)/(e-s):0}function so(s,e,t){return(1-t)*s+t*e}function Um(s,e,t,n){return so(s,e,1-Math.exp(-t*n))}function Fm(s,e=1){return e-Math.abs(Uh(s,e*2)-e)}function Om(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Bm(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function km(s,e){return s+Math.floor(Math.random()*(e-s+1))}function zm(s,e){return s+Math.random()*(e-s)}function Hm(s){return s*(.5-Math.random())}function Vm(s){s!==void 0&&(wu=s);let e=wu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Gm(s){return s*io}function Wm(s){return s*vr}function Xm(s){return(s&s-1)===0&&s!==0}function qm(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Ym(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function jm(s,e,t,n,i){const r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":s.set(a*h,c*u,c*d,a*l);break;case"YZY":s.set(c*d,a*h,c*u,a*l);break;case"ZXZ":s.set(c*u,c*d,a*h,a*l);break;case"XZX":s.set(a*h,c*g,c*f,a*l);break;case"YXY":s.set(c*f,a*h,c*g,a*l);break;case"ZYZ":s.set(c*g,c*f,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function ii(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Mt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Sn={DEG2RAD:io,RAD2DEG:vr,generateUUID:Xn,clamp:sn,euclideanModulo:Uh,mapLinear:Dm,inverseLerp:Nm,lerp:so,damp:Um,pingpong:Fm,smoothstep:Om,smootherstep:Bm,randInt:km,randFloat:zm,randFloatSpread:Hm,seededRandom:Vm,degToRad:Gm,radToDeg:Wm,isPowerOfTwo:Xm,ceilPowerOfTwo:qm,floorPowerOfTwo:Ym,setQuaternionFromProperEuler:jm,normalize:Mt,denormalize:ii};class re{constructor(e=0,t=0){re.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(sn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ze{constructor(e,t,n,i,r,o,a,c,l){Ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l)}set(e,t,n,i,r,o,a,c,l){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],_=i[0],m=i[3],p=i[6],w=i[1],S=i[4],x=i[7],L=i[2],R=i[5],I=i[8];return r[0]=o*_+a*w+c*L,r[3]=o*m+a*S+c*R,r[6]=o*p+a*x+c*I,r[1]=l*_+h*w+u*L,r[4]=l*m+h*S+u*R,r[7]=l*p+h*x+u*I,r[2]=d*_+f*w+g*L,r[5]=d*m+f*S+g*R,r[8]=d*p+f*x+g*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+i*r*l-i*o*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,d=a*c-h*r,f=l*r-o*c,g=t*u+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=u*_,e[1]=(i*l-h*n)*_,e[2]=(a*n-i*o)*_,e[3]=d*_,e[4]=(h*t-i*c)*_,e[5]=(i*r-a*t)*_,e[6]=f*_,e[7]=(n*c-l*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Rc.makeScale(e,t)),this}rotate(e){return this.premultiply(Rc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Rc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Rc=new Ze;function bf(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function So(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Km(){const s=So("canvas");return s.style.display="block",s}const bu={};function eo(s){s in bu||(bu[s]=!0,console.warn(s))}function Zm(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function $m(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Jm(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const ot={enabled:!0,workingColorSpace:Tn,spaces:{},convert:function(s,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===St&&(s.r=Gi(s.r),s.g=Gi(s.g),s.b=Gi(s.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(s.applyMatrix3(this.spaces[e].toXYZ),s.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===St&&(s.r=ur(s.r),s.g=ur(s.g),s.b=ur(s.b))),s},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ls?ac:this.spaces[s].transfer},getLuminanceCoefficients:function(s,e=this.workingColorSpace){return s.fromArray(this.spaces[e].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,e,t){return s.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function Gi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ur(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const Tu=[.64,.33,.3,.6,.15,.06],Eu=[.2126,.7152,.0722],Au=[.3127,.329],Ru=new Ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Cu=new Ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ot.define({[Tn]:{primaries:Tu,whitePoint:Au,transfer:ac,toXYZ:Ru,fromXYZ:Cu,luminanceCoefficients:Eu,workingColorSpaceConfig:{unpackColorSpace:Bt},outputColorSpaceConfig:{drawingBufferColorSpace:Bt}},[Bt]:{primaries:Tu,whitePoint:Au,transfer:St,toXYZ:Ru,fromXYZ:Cu,luminanceCoefficients:Eu,outputColorSpaceConfig:{drawingBufferColorSpace:Bt}}});let ks;class Qm{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ks===void 0&&(ks=So("canvas")),ks.width=e.width,ks.height=e.height;const n=ks.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ks}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=So("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Gi(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Gi(t[n]/255)*255):t[n]=Gi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let e0=0;class Tf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:e0++}),this.uuid=Xn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Cc(i[o].image)):r.push(Cc(i[o]))}else r=Cc(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Cc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Qm.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let t0=0;class Jt extends Us{constructor(e=Jt.DEFAULT_IMAGE,t=Jt.DEFAULT_MAPPING,n=Si,i=Si,r=Nn,o=Hi,a=Gn,c=Yi,l=Jt.DEFAULT_ANISOTROPY,h=ls){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:t0++}),this.uuid=Xn(),this.name="",this.source=new Tf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new re(0,0),this.repeat=new re(1,1),this.center=new re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==hf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Cs:e.x=e.x-Math.floor(e.x);break;case Si:e.x=e.x<0?0:1;break;case Va:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Cs:e.y=e.y-Math.floor(e.y);break;case Si:e.y=e.y<0?0:1;break;case Va:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Jt.DEFAULT_IMAGE=null;Jt.DEFAULT_MAPPING=hf;Jt.DEFAULT_ANISOTROPY=1;class dt{constructor(e=0,t=0,n=0,i=1){dt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(l+1)/2,x=(f+1)/2,L=(p+1)/2,R=(h+d)/4,I=(u+_)/4,T=(g+m)/4;return S>x&&S>L?S<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(S),i=R/n,r=I/n):x>L?x<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(x),n=R/i,r=T/i):L<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(L),n=I/r,i=T/r),this.set(n,i,r,t),this}let w=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(w)<.001&&(w=1),this.x=(m-g)/w,this.y=(u-_)/w,this.z=(d-h)/w,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class n0 extends Us{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new dt(0,0,e,t),this.scissorTest=!1,this.viewport=new dt(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Nn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Jt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Tf(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Is extends n0{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Ef extends Jt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=_n,this.minFilter=_n,this.wrapR=Si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class i0 extends Jt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=_n,this.minFilter=_n,this.wrapR=Si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class oi{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3];const d=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(u!==_||c!==d||l!==f||h!==g){let m=1-a;const p=c*d+l*f+h*g+u*_,w=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){const L=Math.sqrt(S),R=Math.atan2(L,p*w);m=Math.sin(m*R)/L,a=Math.sin(a*R)/L}const x=a*w;if(c=c*m+d*x,l=l*m+f*x,h=h*m+g*x,u=u*m+_*x,m===1-a){const L=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=L,l*=L,h*=L,u*=L}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+h*u+c*f-l*d,e[t+1]=c*g+h*d+l*u-a*f,e[t+2]=l*g+h*f+a*d-c*u,e[t+3]=h*g-a*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),u=a(r/2),d=c(n/2),f=c(i/2),g=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-i)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+l)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(r-l)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(sn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+i*l-r*c,this._y=i*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class A{constructor(e=0,t=0,n=0){A.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Pu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Pu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*i-a*n),h=2*(a*t-r*i),u=2*(r*n-o*t);return this.x=t+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=i+c*u+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Pc.copy(this).projectOnVector(e),this.sub(Pc)}reflect(e){return this.sub(Pc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(sn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Pc=new A,Pu=new oi;class di{constructor(e=new A(1/0,1/0,1/0),t=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint($n.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint($n.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=$n.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,$n):$n.fromBufferAttribute(r,o),$n.applyMatrix4(e.matrixWorld),this.expandByPoint($n);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Xo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Xo.copy(n.boundingBox)),Xo.applyMatrix4(e.matrixWorld),this.union(Xo)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,$n),$n.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(kr),qo.subVectors(this.max,kr),zs.subVectors(e.a,kr),Hs.subVectors(e.b,kr),Vs.subVectors(e.c,kr),Qi.subVectors(Hs,zs),es.subVectors(Vs,Hs),gs.subVectors(zs,Vs);let t=[0,-Qi.z,Qi.y,0,-es.z,es.y,0,-gs.z,gs.y,Qi.z,0,-Qi.x,es.z,0,-es.x,gs.z,0,-gs.x,-Qi.y,Qi.x,0,-es.y,es.x,0,-gs.y,gs.x,0];return!Ic(t,zs,Hs,Vs,qo)||(t=[1,0,0,0,1,0,0,0,1],!Ic(t,zs,Hs,Vs,qo))?!1:(Yo.crossVectors(Qi,es),t=[Yo.x,Yo.y,Yo.z],Ic(t,zs,Hs,Vs,qo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,$n).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize($n).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ii),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ii=[new A,new A,new A,new A,new A,new A,new A,new A],$n=new A,Xo=new di,zs=new A,Hs=new A,Vs=new A,Qi=new A,es=new A,gs=new A,kr=new A,qo=new A,Yo=new A,_s=new A;function Ic(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){_s.fromArray(s,r);const a=i.x*Math.abs(_s.x)+i.y*Math.abs(_s.y)+i.z*Math.abs(_s.z),c=e.dot(_s),l=t.dot(_s),h=n.dot(_s);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const s0=new di,zr=new A,Lc=new A;class Ei{constructor(e=new A,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):s0.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;zr.subVectors(e,this.center);const t=zr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(zr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Lc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(zr.copy(e.center).add(Lc)),this.expandByPoint(zr.copy(e.center).sub(Lc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Li=new A,Dc=new A,jo=new A,ts=new A,Nc=new A,Ko=new A,Uc=new A;class Fo{constructor(e=new A,t=new A(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Li)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Li.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Li.copy(this.origin).addScaledVector(this.direction,t),Li.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Dc.copy(e).add(t).multiplyScalar(.5),jo.copy(t).sub(e).normalize(),ts.copy(this.origin).sub(Dc);const r=e.distanceTo(t)*.5,o=-this.direction.dot(jo),a=ts.dot(this.direction),c=-ts.dot(jo),l=ts.lengthSq(),h=Math.abs(1-o*o);let u,d,f,g;if(h>0)if(u=o*c-a,d=o*a-c,g=r*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Dc).addScaledVector(jo,d),f}intersectSphere(e,t){Li.subVectors(e.center,this.origin);const n=Li.dot(this.direction),i=Li.dot(Li)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Li)!==null}intersectTriangle(e,t,n,i,r){Nc.subVectors(t,e),Ko.subVectors(n,e),Uc.crossVectors(Nc,Ko);let o=this.direction.dot(Uc),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ts.subVectors(this.origin,e);const c=a*this.direction.dot(Ko.crossVectors(ts,Ko));if(c<0)return null;const l=a*this.direction.dot(Nc.cross(ts));if(l<0||c+l>o)return null;const h=-a*ts.dot(Uc);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ye{constructor(e,t,n,i,r,o,a,c,l,h,u,d,f,g,_,m){Ye.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l,h,u,d,f,g,_,m)}set(e,t,n,i,r,o,a,c,l,h,u,d,f,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ye().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Gs.setFromMatrixColumn(e,0).length(),r=1/Gs.setFromMatrixColumn(e,1).length(),o=1/Gs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=o*h,f=o*u,g=a*h,_=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+g*l,t[5]=d-_*l,t[9]=-a*c,t[2]=_-d*l,t[6]=g+f*l,t[10]=o*c}else if(e.order==="YXZ"){const d=c*h,f=c*u,g=l*h,_=l*u;t[0]=d+_*a,t[4]=g*a-f,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-g,t[6]=_+d*a,t[10]=o*c}else if(e.order==="ZXY"){const d=c*h,f=c*u,g=l*h,_=l*u;t[0]=d-_*a,t[4]=-o*u,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*h,t[9]=_-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const d=o*h,f=o*u,g=a*h,_=a*u;t[0]=c*h,t[4]=g*l-f,t[8]=d*l+_,t[1]=c*u,t[5]=_*l+d,t[9]=f*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const d=o*c,f=o*l,g=a*c,_=a*l;t[0]=c*h,t[4]=_-d*u,t[8]=g*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=f*u+g,t[10]=d-_*u}else if(e.order==="XZY"){const d=o*c,f=o*l,g=a*c,_=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+_,t[5]=o*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=a*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(r0,e,o0)}lookAt(e,t,n){const i=this.elements;return Ln.subVectors(e,t),Ln.lengthSq()===0&&(Ln.z=1),Ln.normalize(),ns.crossVectors(n,Ln),ns.lengthSq()===0&&(Math.abs(n.z)===1?Ln.x+=1e-4:Ln.z+=1e-4,Ln.normalize(),ns.crossVectors(n,Ln)),ns.normalize(),Zo.crossVectors(Ln,ns),i[0]=ns.x,i[4]=Zo.x,i[8]=Ln.x,i[1]=ns.y,i[5]=Zo.y,i[9]=Ln.y,i[2]=ns.z,i[6]=Zo.z,i[10]=Ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],w=n[3],S=n[7],x=n[11],L=n[15],R=i[0],I=i[4],T=i[8],v=i[12],M=i[1],C=i[5],z=i[9],O=i[13],B=i[2],W=i[6],k=i[10],K=i[14],H=i[3],ce=i[7],fe=i[11],pe=i[15];return r[0]=o*R+a*M+c*B+l*H,r[4]=o*I+a*C+c*W+l*ce,r[8]=o*T+a*z+c*k+l*fe,r[12]=o*v+a*O+c*K+l*pe,r[1]=h*R+u*M+d*B+f*H,r[5]=h*I+u*C+d*W+f*ce,r[9]=h*T+u*z+d*k+f*fe,r[13]=h*v+u*O+d*K+f*pe,r[2]=g*R+_*M+m*B+p*H,r[6]=g*I+_*C+m*W+p*ce,r[10]=g*T+_*z+m*k+p*fe,r[14]=g*v+_*O+m*K+p*pe,r[3]=w*R+S*M+x*B+L*H,r[7]=w*I+S*C+x*W+L*ce,r[11]=w*T+S*z+x*k+L*fe,r[15]=w*v+S*O+x*K+L*pe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+r*c*u-i*l*u-r*a*d+n*l*d+i*a*f-n*c*f)+_*(+t*c*f-t*l*d+r*o*d-i*o*f+i*l*h-r*c*h)+m*(+t*l*u-t*a*f-r*o*u+n*o*f+r*a*h-n*l*h)+p*(-i*a*h-t*c*u+t*a*d+i*o*u-n*o*d+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],w=u*m*l-_*d*l+_*c*f-a*m*f-u*c*p+a*d*p,S=g*d*l-h*m*l-g*c*f+o*m*f+h*c*p-o*d*p,x=h*_*l-g*u*l+g*a*f-o*_*f-h*a*p+o*u*p,L=g*u*c-h*_*c-g*a*d+o*_*d+h*a*m-o*u*m,R=t*w+n*S+i*x+r*L;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/R;return e[0]=w*I,e[1]=(_*d*r-u*m*r-_*i*f+n*m*f+u*i*p-n*d*p)*I,e[2]=(a*m*r-_*c*r+_*i*l-n*m*l-a*i*p+n*c*p)*I,e[3]=(u*c*r-a*d*r-u*i*l+n*d*l+a*i*f-n*c*f)*I,e[4]=S*I,e[5]=(h*m*r-g*d*r+g*i*f-t*m*f-h*i*p+t*d*p)*I,e[6]=(g*c*r-o*m*r-g*i*l+t*m*l+o*i*p-t*c*p)*I,e[7]=(o*d*r-h*c*r+h*i*l-t*d*l-o*i*f+t*c*f)*I,e[8]=x*I,e[9]=(g*u*r-h*_*r-g*n*f+t*_*f+h*n*p-t*u*p)*I,e[10]=(o*_*r-g*a*r+g*n*l-t*_*l-o*n*p+t*a*p)*I,e[11]=(h*a*r-o*u*r-h*n*l+t*u*l+o*n*f-t*a*f)*I,e[12]=L*I,e[13]=(h*_*i-g*u*i+g*n*d-t*_*d-h*n*m+t*u*m)*I,e[14]=(g*a*i-o*_*i-g*n*c+t*_*c+o*n*m-t*a*m)*I,e[15]=(o*u*i-h*a*i+h*n*c-t*u*c-o*n*d+t*a*d)*I,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,d=r*l,f=r*h,g=r*u,_=o*h,m=o*u,p=a*u,w=c*l,S=c*h,x=c*u,L=n.x,R=n.y,I=n.z;return i[0]=(1-(_+p))*L,i[1]=(f+x)*L,i[2]=(g-S)*L,i[3]=0,i[4]=(f-x)*R,i[5]=(1-(d+p))*R,i[6]=(m+w)*R,i[7]=0,i[8]=(g+S)*I,i[9]=(m-w)*I,i[10]=(1-(d+_))*I,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Gs.set(i[0],i[1],i[2]).length();const o=Gs.set(i[4],i[5],i[6]).length(),a=Gs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Jn.copy(this);const l=1/r,h=1/o,u=1/a;return Jn.elements[0]*=l,Jn.elements[1]*=l,Jn.elements[2]*=l,Jn.elements[4]*=h,Jn.elements[5]*=h,Jn.elements[6]*=h,Jn.elements[8]*=u,Jn.elements[9]*=u,Jn.elements[10]*=u,t.setFromRotationMatrix(Jn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=Vi){const c=this.elements,l=2*r/(t-e),h=2*r/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i);let f,g;if(a===Vi)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Wa)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=Vi){const c=this.elements,l=1/(t-e),h=1/(n-i),u=1/(o-r),d=(t+e)*l,f=(n+i)*h;let g,_;if(a===Vi)g=(o+r)*u,_=-2*u;else if(a===Wa)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Gs=new A,Jn=new Ye,r0=new A(0,0,0),o0=new A(1,1,1),ns=new A,Zo=new A,Ln=new A,Iu=new Ye,Lu=new oi;class bi{constructor(e=0,t=0,n=0,i=bi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(sn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-sn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(sn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-sn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(sn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-sn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Iu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Iu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Lu.setFromEuler(this),this.setFromQuaternion(Lu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}bi.DEFAULT_ORDER="XYZ";class Fh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let a0=0;const Du=new A,Ws=new oi,Di=new Ye,$o=new A,Hr=new A,c0=new A,l0=new oi,Nu=new A(1,0,0),Uu=new A(0,1,0),Fu=new A(0,0,1),Ou={type:"added"},h0={type:"removed"},Xs={type:"childadded",child:null},Fc={type:"childremoved",child:null};class Ot extends Us{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:a0++}),this.uuid=Xn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ot.DEFAULT_UP.clone();const e=new A,t=new bi,n=new oi,i=new A(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ye},normalMatrix:{value:new Ze}}),this.matrix=new Ye,this.matrixWorld=new Ye,this.matrixAutoUpdate=Ot.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ws.setFromAxisAngle(e,t),this.quaternion.multiply(Ws),this}rotateOnWorldAxis(e,t){return Ws.setFromAxisAngle(e,t),this.quaternion.premultiply(Ws),this}rotateX(e){return this.rotateOnAxis(Nu,e)}rotateY(e){return this.rotateOnAxis(Uu,e)}rotateZ(e){return this.rotateOnAxis(Fu,e)}translateOnAxis(e,t){return Du.copy(e).applyQuaternion(this.quaternion),this.position.add(Du.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Nu,e)}translateY(e){return this.translateOnAxis(Uu,e)}translateZ(e){return this.translateOnAxis(Fu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Di.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?$o.copy(e):$o.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Hr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Di.lookAt(Hr,$o,this.up):Di.lookAt($o,Hr,this.up),this.quaternion.setFromRotationMatrix(Di),i&&(Di.extractRotation(i.matrixWorld),Ws.setFromRotationMatrix(Di),this.quaternion.premultiply(Ws.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ou),Xs.child=e,this.dispatchEvent(Xs),Xs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(h0),Fc.child=e,this.dispatchEvent(Fc),Fc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Di.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Di.multiply(e.parent.matrixWorld)),e.applyMatrix4(Di),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ou),Xs.child=e,this.dispatchEvent(Xs),Xs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hr,e,c0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hr,l0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Ot.DEFAULT_UP=new A(0,1,0);Ot.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Qn=new A,Ni=new A,Oc=new A,Ui=new A,qs=new A,Ys=new A,Bu=new A,Bc=new A,kc=new A,zc=new A,Hc=new dt,Vc=new dt,Gc=new dt;class si{constructor(e=new A,t=new A,n=new A){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Qn.subVectors(e,t),i.cross(Qn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Qn.subVectors(i,t),Ni.subVectors(n,t),Oc.subVectors(e,t);const o=Qn.dot(Qn),a=Qn.dot(Ni),c=Qn.dot(Oc),l=Ni.dot(Ni),h=Ni.dot(Oc),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(l*c-a*h)*d,g=(o*h-a*c)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Ui)===null?!1:Ui.x>=0&&Ui.y>=0&&Ui.x+Ui.y<=1}static getInterpolation(e,t,n,i,r,o,a,c){return this.getBarycoord(e,t,n,i,Ui)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Ui.x),c.addScaledVector(o,Ui.y),c.addScaledVector(a,Ui.z),c)}static getInterpolatedAttribute(e,t,n,i,r,o){return Hc.setScalar(0),Vc.setScalar(0),Gc.setScalar(0),Hc.fromBufferAttribute(e,t),Vc.fromBufferAttribute(e,n),Gc.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(Hc,r.x),o.addScaledVector(Vc,r.y),o.addScaledVector(Gc,r.z),o}static isFrontFacing(e,t,n,i){return Qn.subVectors(n,t),Ni.subVectors(e,t),Qn.cross(Ni).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Qn.subVectors(this.c,this.b),Ni.subVectors(this.a,this.b),Qn.cross(Ni).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return si.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return si.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return si.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return si.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return si.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;qs.subVectors(i,n),Ys.subVectors(r,n),Bc.subVectors(e,n);const c=qs.dot(Bc),l=Ys.dot(Bc);if(c<=0&&l<=0)return t.copy(n);kc.subVectors(e,i);const h=qs.dot(kc),u=Ys.dot(kc);if(h>=0&&u<=h)return t.copy(i);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(qs,o);zc.subVectors(e,r);const f=qs.dot(zc),g=Ys.dot(zc);if(g>=0&&f<=g)return t.copy(r);const _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(Ys,a);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Bu.subVectors(r,i),a=(u-h)/(u-h+(f-g)),t.copy(i).addScaledVector(Bu,a);const p=1/(m+_+d);return o=_*p,a=d*p,t.copy(n).addScaledVector(qs,o).addScaledVector(Ys,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Af={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},is={h:0,s:0,l:0},Jo={h:0,s:0,l:0};function Wc(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Be{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Bt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ot.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=ot.workingColorSpace){return this.r=e,this.g=t,this.b=n,ot.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=ot.workingColorSpace){if(e=Uh(e,1),t=sn(t,0,1),n=sn(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Wc(o,r,e+1/3),this.g=Wc(o,r,e),this.b=Wc(o,r,e-1/3)}return ot.toWorkingColorSpace(this,i),this}setStyle(e,t=Bt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Bt){const n=Af[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Gi(e.r),this.g=Gi(e.g),this.b=Gi(e.b),this}copyLinearToSRGB(e){return this.r=ur(e.r),this.g=ur(e.g),this.b=ur(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Bt){return ot.fromWorkingColorSpace(fn.copy(this),e),Math.round(sn(fn.r*255,0,255))*65536+Math.round(sn(fn.g*255,0,255))*256+Math.round(sn(fn.b*255,0,255))}getHexString(e=Bt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ot.workingColorSpace){ot.fromWorkingColorSpace(fn.copy(this),t);const n=fn.r,i=fn.g,r=fn.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(i-r)/u+(i<r?6:0);break;case i:c=(r-n)/u+2;break;case r:c=(n-i)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=ot.workingColorSpace){return ot.fromWorkingColorSpace(fn.copy(this),t),e.r=fn.r,e.g=fn.g,e.b=fn.b,e}getStyle(e=Bt){ot.fromWorkingColorSpace(fn.copy(this),e);const t=fn.r,n=fn.g,i=fn.b;return e!==Bt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(is),this.setHSL(is.h+e,is.s+t,is.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(is),e.getHSL(Jo);const n=so(is.h,Jo.h,t),i=so(is.s,Jo.s,t),r=so(is.l,Jo.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const fn=new Be;Be.NAMES=Af;let u0=0;class ai extends Us{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:u0++}),this.uuid=Xn(),this.name="",this.blending=lr,this.side=qi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=vl,this.blendDst=yl,this.blendEquation=Ts,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Be(0,0,0),this.blendAlpha=0,this.depthFunc=pr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Mu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Bs,this.stencilZFail=Bs,this.stencilZPass=Bs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==lr&&(n.blending=this.blending),this.side!==qi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==vl&&(n.blendSrc=this.blendSrc),this.blendDst!==yl&&(n.blendDst=this.blendDst),this.blendEquation!==Ts&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==pr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Mu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Bs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Bs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Bs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class on extends ai{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bi,this.combine=cf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Xt=new A,Qo=new re;class an{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ih,this.updateRanges=[],this.gpuType=ri,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Qo.fromBufferAttribute(this,t),Qo.applyMatrix3(e),this.setXY(t,Qo.x,Qo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix3(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix4(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.applyNormalMatrix(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.transformDirection(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ii(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Mt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ii(t,this.array)),t}setX(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ii(t,this.array)),t}setY(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ii(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ii(t,this.array)),t}setW(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),i=Mt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),i=Mt(i,this.array),r=Mt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ih&&(e.usage=this.usage),e}}class Rf extends an{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Cf extends an{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class It extends an{constructor(e,t,n){super(new Float32Array(e),t,n)}}let d0=0;const Bn=new Ye,Xc=new Ot,js=new A,Dn=new di,Vr=new di,tn=new A;class Zt extends Us{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:d0++}),this.uuid=Xn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(bf(e)?Cf:Rf)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ze().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Bn.makeRotationFromQuaternion(e),this.applyMatrix4(Bn),this}rotateX(e){return Bn.makeRotationX(e),this.applyMatrix4(Bn),this}rotateY(e){return Bn.makeRotationY(e),this.applyMatrix4(Bn),this}rotateZ(e){return Bn.makeRotationZ(e),this.applyMatrix4(Bn),this}translate(e,t,n){return Bn.makeTranslation(e,t,n),this.applyMatrix4(Bn),this}scale(e,t,n){return Bn.makeScale(e,t,n),this.applyMatrix4(Bn),this}lookAt(e){return Xc.lookAt(e),Xc.updateMatrix(),this.applyMatrix4(Xc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(js).negate(),this.translate(js.x,js.y,js.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new It(n,3))}else{for(let n=0,i=t.count;n<i;n++){const r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new di);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Dn.setFromBufferAttribute(r),this.morphTargetsRelative?(tn.addVectors(this.boundingBox.min,Dn.min),this.boundingBox.expandByPoint(tn),tn.addVectors(this.boundingBox.max,Dn.max),this.boundingBox.expandByPoint(tn)):(this.boundingBox.expandByPoint(Dn.min),this.boundingBox.expandByPoint(Dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ei);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new A,1/0);return}if(e){const n=this.boundingSphere.center;if(Dn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Vr.setFromBufferAttribute(a),this.morphTargetsRelative?(tn.addVectors(Dn.min,Vr.min),Dn.expandByPoint(tn),tn.addVectors(Dn.max,Vr.max),Dn.expandByPoint(tn)):(Dn.expandByPoint(Vr.min),Dn.expandByPoint(Vr.max))}Dn.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)tn.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(tn));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)tn.fromBufferAttribute(a,l),c&&(js.fromBufferAttribute(e,l),tn.add(js)),i=Math.max(i,n.distanceToSquared(tn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new an(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let T=0;T<n.count;T++)a[T]=new A,c[T]=new A;const l=new A,h=new A,u=new A,d=new re,f=new re,g=new re,_=new A,m=new A;function p(T,v,M){l.fromBufferAttribute(n,T),h.fromBufferAttribute(n,v),u.fromBufferAttribute(n,M),d.fromBufferAttribute(r,T),f.fromBufferAttribute(r,v),g.fromBufferAttribute(r,M),h.sub(l),u.sub(l),f.sub(d),g.sub(d);const C=1/(f.x*g.y-g.x*f.y);isFinite(C)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(C),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(C),a[T].add(_),a[v].add(_),a[M].add(_),c[T].add(m),c[v].add(m),c[M].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let T=0,v=w.length;T<v;++T){const M=w[T],C=M.start,z=M.count;for(let O=C,B=C+z;O<B;O+=3)p(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const S=new A,x=new A,L=new A,R=new A;function I(T){L.fromBufferAttribute(i,T),R.copy(L);const v=a[T];S.copy(v),S.sub(L.multiplyScalar(L.dot(v))).normalize(),x.crossVectors(R,v);const C=x.dot(c[T])<0?-1:1;o.setXYZW(T,S.x,S.y,S.z,C)}for(let T=0,v=w.length;T<v;++T){const M=w[T],C=M.start,z=M.count;for(let O=C,B=C+z;O<B;O+=3)I(e.getX(O+0)),I(e.getX(O+1)),I(e.getX(O+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new an(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new A,r=new A,o=new A,a=new A,c=new A,l=new A,h=new A,u=new A;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)tn.fromBufferAttribute(e,t),tn.normalize(),e.setXYZ(t,tn.x,tn.y,tn.z)}toNonIndexed(){function e(a,c){const l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h);let f=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*h;for(let p=0;p<h;p++)d[g++]=l[f++]}return new an(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Zt,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=e(c,n);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){const d=l[h],f=e(d,n);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(i[c]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(t))}const r=e.morphAttributes;for(const l in r){const h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ku=new Ye,xs=new Fo,ea=new Ei,zu=new A,ta=new A,na=new A,ia=new A,qc=new A,sa=new A,Hu=new A,ra=new A;class Z extends Ot{constructor(e=new Zt,t=new on){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){sa.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],u=r[c];h!==0&&(qc.fromBufferAttribute(u,e),o?sa.addScaledVector(qc,h):sa.addScaledVector(qc.sub(t),h))}t.add(sa)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ea.copy(n.boundingSphere),ea.applyMatrix4(r),xs.copy(e.ray).recast(e.near),!(ea.containsPoint(xs.origin)===!1&&(xs.intersectSphere(ea,zu)===null||xs.origin.distanceToSquared(zu)>(e.far-e.near)**2))&&(ku.copy(r).invert(),xs.copy(e.ray).applyMatrix4(ku),!(n.boundingBox!==null&&xs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,xs)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],w=Math.max(m.start,f.start),S=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let x=w,L=S;x<L;x+=3){const R=a.getX(x),I=a.getX(x+1),T=a.getX(x+2);i=oa(this,p,e,n,l,h,u,R,I,T),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const w=a.getX(m),S=a.getX(m+1),x=a.getX(m+2);i=oa(this,o,e,n,l,h,u,w,S,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],w=Math.max(m.start,f.start),S=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let x=w,L=S;x<L;x+=3){const R=x,I=x+1,T=x+2;i=oa(this,p,e,n,l,h,u,R,I,T),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const w=m,S=m+1,x=m+2;i=oa(this,o,e,n,l,h,u,w,S,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function f0(s,e,t,n,i,r,o,a){let c;if(e.side===gn?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,e.side===qi,a),c===null)return null;ra.copy(a),ra.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(ra);return l<t.near||l>t.far?null:{distance:l,point:ra.clone(),object:s}}function oa(s,e,t,n,i,r,o,a,c,l){s.getVertexPosition(a,ta),s.getVertexPosition(c,na),s.getVertexPosition(l,ia);const h=f0(s,e,t,n,ta,na,ia,Hu);if(h){const u=new A;si.getBarycoord(Hu,ta,na,ia,u),i&&(h.uv=si.getInterpolatedAttribute(i,a,c,l,u,new re)),r&&(h.uv1=si.getInterpolatedAttribute(r,a,c,l,u,new re)),o&&(h.normal=si.getInterpolatedAttribute(o,a,c,l,u,new A),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new A,materialIndex:0};si.getNormal(ta,na,ia,d.normal),h.face=d,h.barycoord=u}return h}class Fn extends Zt{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new It(l,3)),this.setAttribute("normal",new It(h,3)),this.setAttribute("uv",new It(u,2));function g(_,m,p,w,S,x,L,R,I,T,v){const M=x/I,C=L/T,z=x/2,O=L/2,B=R/2,W=I+1,k=T+1;let K=0,H=0;const ce=new A;for(let fe=0;fe<k;fe++){const pe=fe*C-O;for(let Re=0;Re<W;Re++){const tt=Re*M-z;ce[_]=tt*w,ce[m]=pe*S,ce[p]=B,l.push(ce.x,ce.y,ce.z),ce[_]=0,ce[m]=0,ce[p]=R>0?1:-1,h.push(ce.x,ce.y,ce.z),u.push(Re/I),u.push(1-fe/T),K+=1}}for(let fe=0;fe<T;fe++)for(let pe=0;pe<I;pe++){const Re=d+pe+W*fe,tt=d+pe+W*(fe+1),j=d+(pe+1)+W*(fe+1),ie=d+(pe+1)+W*fe;c.push(Re,tt,ie),c.push(tt,j,ie),H+=6}a.addGroup(f,H,v),f+=H,d+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function yr(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function yn(s){const e={};for(let t=0;t<s.length;t++){const n=yr(s[t]);for(const i in n)e[i]=n[i]}return e}function p0(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Pf(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ot.workingColorSpace}const If={clone:yr,merge:yn};var m0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,g0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ti extends ai{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=m0,this.fragmentShader=g0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=yr(e.uniforms),this.uniformsGroups=p0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Lf extends Ot{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ye,this.projectionMatrix=new Ye,this.projectionMatrixInverse=new Ye,this.coordinateSystem=Vi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ss=new A,Vu=new re,Gu=new re;class Mn extends Lf{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=vr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(io*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return vr*2*Math.atan(Math.tan(io*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ss.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ss.x,ss.y).multiplyScalar(-e/ss.z),ss.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ss.x,ss.y).multiplyScalar(-e/ss.z)}getViewSize(e,t){return this.getViewBounds(e,Vu,Gu),t.subVectors(Gu,Vu)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(io*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ks=-90,Zs=1;class _0 extends Ot{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Mn(Ks,Zs,e,t);i.layers=this.layers,this.add(i);const r=new Mn(Ks,Zs,e,t);r.layers=this.layers,this.add(r);const o=new Mn(Ks,Zs,e,t);o.layers=this.layers,this.add(o);const a=new Mn(Ks,Zs,e,t);a.layers=this.layers,this.add(a);const c=new Mn(Ks,Zs,e,t);c.layers=this.layers,this.add(c);const l=new Mn(Ks,Zs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===Vi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Wa)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Df extends Jt{constructor(e,t,n,i,r,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:mr,super(e,t,n,i,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class x0 extends Is{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Df(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Nn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Fn(5,5,5),r=new Ti({name:"CubemapFromEquirect",uniforms:yr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:gn,blending:us});r.uniforms.tEquirect.value=t;const o=new Z(i,r),a=t.minFilter;return t.minFilter===Hi&&(t.minFilter=Nn),new _0(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}const Yc=new A,v0=new A,y0=new Ze;class vi{constructor(e=new A(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Yc.subVectors(n,t).cross(v0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Yc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||y0.getNormalMatrix(e),i=this.coplanarPoint(Yc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const vs=new Ei,aa=new A;class Oh{constructor(e=new vi,t=new vi,n=new vi,i=new vi,r=new vi,o=new vi){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Vi){const n=this.planes,i=e.elements,r=i[0],o=i[1],a=i[2],c=i[3],l=i[4],h=i[5],u=i[6],d=i[7],f=i[8],g=i[9],_=i[10],m=i[11],p=i[12],w=i[13],S=i[14],x=i[15];if(n[0].setComponents(c-r,d-l,m-f,x-p).normalize(),n[1].setComponents(c+r,d+l,m+f,x+p).normalize(),n[2].setComponents(c+o,d+h,m+g,x+w).normalize(),n[3].setComponents(c-o,d-h,m-g,x-w).normalize(),n[4].setComponents(c-a,d-u,m-_,x-S).normalize(),t===Vi)n[5].setComponents(c+a,d+u,m+_,x+S).normalize();else if(t===Wa)n[5].setComponents(a,u,_,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),vs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),vs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(vs)}intersectsSprite(e){return vs.center.set(0,0,0),vs.radius=.7071067811865476,vs.applyMatrix4(e.matrixWorld),this.intersectsSphere(vs)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(aa.x=i.normal.x>0?e.max.x:e.min.x,aa.y=i.normal.y>0?e.max.y:e.min.y,aa.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(aa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Nf(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function M0(s){const e=new WeakMap;function t(a,c){const l=a.array,h=a.usage,u=l.byteLength,d=s.createBuffer();s.bindBuffer(c,d),s.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=s.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=s.SHORT;else if(l instanceof Uint32Array)f=s.UNSIGNED_INT;else if(l instanceof Int32Array)f=s.INT;else if(l instanceof Int8Array)f=s.BYTE;else if(l instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const h=c.array,u=c.updateRanges;if(s.bindBuffer(l,a),u.length===0)s.bufferSubData(l,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],_=u[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const _=u[f];s.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(s.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:r,update:o}}class Yt extends Zt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,u=e/a,d=t/c,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const w=p*d-o;for(let S=0;S<l;S++){const x=S*u-r;g.push(x,-w,0),_.push(0,0,1),m.push(S/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let w=0;w<a;w++){const S=w+l*p,x=w+l*(p+1),L=w+1+l*(p+1),R=w+1+l*p;f.push(S,x,R),f.push(x,L,R)}this.setIndex(f),this.setAttribute("position",new It(g,3)),this.setAttribute("normal",new It(_,3)),this.setAttribute("uv",new It(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yt(e.width,e.height,e.widthSegments,e.heightSegments)}}var S0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,w0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,b0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,T0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,E0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,A0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,R0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,C0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,P0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,I0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,L0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,D0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,N0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,U0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,F0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,O0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,B0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,k0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,z0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,H0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,V0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,G0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,W0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,X0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,q0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Y0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,j0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,K0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Z0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,J0="gl_FragColor = linearToOutputTexel( gl_FragColor );",Q0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,eg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,tg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ng=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ig=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,rg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,og=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ag=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,cg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,lg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,hg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ug=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,dg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,pg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,mg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_g=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,vg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,yg=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Mg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Sg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,wg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,bg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Tg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Eg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ag=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Rg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Cg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Pg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Ig=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Dg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ng=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ug=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Fg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Og=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Bg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,zg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Hg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Wg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Xg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Yg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,jg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Kg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Zg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,$g=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Jg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Qg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,e_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,t_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,n_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,i_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,s_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,r_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,o_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,a_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,c_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,l_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,h_=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,u_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,d_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,f_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,p_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,m_=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,g_=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,__=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,x_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,v_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,y_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const M_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,S_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,w_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,b_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,T_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,E_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,A_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,R_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,C_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,P_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,I_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,L_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,D_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,N_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,U_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,F_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,O_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,B_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,k_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,z_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,H_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,V_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,G_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,W_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,X_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,q_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Y_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,j_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,K_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Z_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,J_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Q_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ex=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,et={alphahash_fragment:S0,alphahash_pars_fragment:w0,alphamap_fragment:b0,alphamap_pars_fragment:T0,alphatest_fragment:E0,alphatest_pars_fragment:A0,aomap_fragment:R0,aomap_pars_fragment:C0,batching_pars_vertex:P0,batching_vertex:I0,begin_vertex:L0,beginnormal_vertex:D0,bsdfs:N0,iridescence_fragment:U0,bumpmap_pars_fragment:F0,clipping_planes_fragment:O0,clipping_planes_pars_fragment:B0,clipping_planes_pars_vertex:k0,clipping_planes_vertex:z0,color_fragment:H0,color_pars_fragment:V0,color_pars_vertex:G0,color_vertex:W0,common:X0,cube_uv_reflection_fragment:q0,defaultnormal_vertex:Y0,displacementmap_pars_vertex:j0,displacementmap_vertex:K0,emissivemap_fragment:Z0,emissivemap_pars_fragment:$0,colorspace_fragment:J0,colorspace_pars_fragment:Q0,envmap_fragment:eg,envmap_common_pars_fragment:tg,envmap_pars_fragment:ng,envmap_pars_vertex:ig,envmap_physical_pars_fragment:pg,envmap_vertex:sg,fog_vertex:rg,fog_pars_vertex:og,fog_fragment:ag,fog_pars_fragment:cg,gradientmap_pars_fragment:lg,lightmap_pars_fragment:hg,lights_lambert_fragment:ug,lights_lambert_pars_fragment:dg,lights_pars_begin:fg,lights_toon_fragment:mg,lights_toon_pars_fragment:gg,lights_phong_fragment:_g,lights_phong_pars_fragment:xg,lights_physical_fragment:vg,lights_physical_pars_fragment:yg,lights_fragment_begin:Mg,lights_fragment_maps:Sg,lights_fragment_end:wg,logdepthbuf_fragment:bg,logdepthbuf_pars_fragment:Tg,logdepthbuf_pars_vertex:Eg,logdepthbuf_vertex:Ag,map_fragment:Rg,map_pars_fragment:Cg,map_particle_fragment:Pg,map_particle_pars_fragment:Ig,metalnessmap_fragment:Lg,metalnessmap_pars_fragment:Dg,morphinstance_vertex:Ng,morphcolor_vertex:Ug,morphnormal_vertex:Fg,morphtarget_pars_vertex:Og,morphtarget_vertex:Bg,normal_fragment_begin:kg,normal_fragment_maps:zg,normal_pars_fragment:Hg,normal_pars_vertex:Vg,normal_vertex:Gg,normalmap_pars_fragment:Wg,clearcoat_normal_fragment_begin:Xg,clearcoat_normal_fragment_maps:qg,clearcoat_pars_fragment:Yg,iridescence_pars_fragment:jg,opaque_fragment:Kg,packing:Zg,premultiplied_alpha_fragment:$g,project_vertex:Jg,dithering_fragment:Qg,dithering_pars_fragment:e_,roughnessmap_fragment:t_,roughnessmap_pars_fragment:n_,shadowmap_pars_fragment:i_,shadowmap_pars_vertex:s_,shadowmap_vertex:r_,shadowmask_pars_fragment:o_,skinbase_vertex:a_,skinning_pars_vertex:c_,skinning_vertex:l_,skinnormal_vertex:h_,specularmap_fragment:u_,specularmap_pars_fragment:d_,tonemapping_fragment:f_,tonemapping_pars_fragment:p_,transmission_fragment:m_,transmission_pars_fragment:g_,uv_pars_fragment:__,uv_pars_vertex:x_,uv_vertex:v_,worldpos_vertex:y_,background_vert:M_,background_frag:S_,backgroundCube_vert:w_,backgroundCube_frag:b_,cube_vert:T_,cube_frag:E_,depth_vert:A_,depth_frag:R_,distanceRGBA_vert:C_,distanceRGBA_frag:P_,equirect_vert:I_,equirect_frag:L_,linedashed_vert:D_,linedashed_frag:N_,meshbasic_vert:U_,meshbasic_frag:F_,meshlambert_vert:O_,meshlambert_frag:B_,meshmatcap_vert:k_,meshmatcap_frag:z_,meshnormal_vert:H_,meshnormal_frag:V_,meshphong_vert:G_,meshphong_frag:W_,meshphysical_vert:X_,meshphysical_frag:q_,meshtoon_vert:Y_,meshtoon_frag:j_,points_vert:K_,points_frag:Z_,shadow_vert:$_,shadow_frag:J_,sprite_vert:Q_,sprite_frag:ex},de={common:{diffuse:{value:new Be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},envMapRotation:{value:new Ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new Be(16777215)},opacity:{value:1},center:{value:new re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},yi={basic:{uniforms:yn([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:et.meshbasic_vert,fragmentShader:et.meshbasic_frag},lambert:{uniforms:yn([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Be(0)}}]),vertexShader:et.meshlambert_vert,fragmentShader:et.meshlambert_frag},phong:{uniforms:yn([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Be(0)},specular:{value:new Be(1118481)},shininess:{value:30}}]),vertexShader:et.meshphong_vert,fragmentShader:et.meshphong_frag},standard:{uniforms:yn([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new Be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag},toon:{uniforms:yn([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new Be(0)}}]),vertexShader:et.meshtoon_vert,fragmentShader:et.meshtoon_frag},matcap:{uniforms:yn([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:et.meshmatcap_vert,fragmentShader:et.meshmatcap_frag},points:{uniforms:yn([de.points,de.fog]),vertexShader:et.points_vert,fragmentShader:et.points_frag},dashed:{uniforms:yn([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:et.linedashed_vert,fragmentShader:et.linedashed_frag},depth:{uniforms:yn([de.common,de.displacementmap]),vertexShader:et.depth_vert,fragmentShader:et.depth_frag},normal:{uniforms:yn([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:et.meshnormal_vert,fragmentShader:et.meshnormal_frag},sprite:{uniforms:yn([de.sprite,de.fog]),vertexShader:et.sprite_vert,fragmentShader:et.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:et.background_vert,fragmentShader:et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ze}},vertexShader:et.backgroundCube_vert,fragmentShader:et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:et.cube_vert,fragmentShader:et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:et.equirect_vert,fragmentShader:et.equirect_frag},distanceRGBA:{uniforms:yn([de.common,de.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:et.distanceRGBA_vert,fragmentShader:et.distanceRGBA_frag},shadow:{uniforms:yn([de.lights,de.fog,{color:{value:new Be(0)},opacity:{value:1}}]),vertexShader:et.shadow_vert,fragmentShader:et.shadow_frag}};yi.physical={uniforms:yn([yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new Be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new Be(0)},specularColor:{value:new Be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag};const ca={r:0,b:0,g:0},ys=new bi,tx=new Ye;function nx(s,e,t,n,i,r,o){const a=new Be(0);let c=r===!0?0:1,l,h,u=null,d=0,f=null;function g(w){let S=w.isScene===!0?w.background:null;return S&&S.isTexture&&(S=(w.backgroundBlurriness>0?t:e).get(S)),S}function _(w){let S=!1;const x=g(w);x===null?p(a,c):x&&x.isColor&&(p(x,1),S=!0);const L=s.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(w,S){const x=g(S);x&&(x.isCubeTexture||x.mapping===oc)?(h===void 0&&(h=new Z(new Fn(1,1,1),new Ti({name:"BackgroundCubeMaterial",uniforms:yr(yi.backgroundCube.uniforms),vertexShader:yi.backgroundCube.vertexShader,fragmentShader:yi.backgroundCube.fragmentShader,side:gn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,R,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),ys.copy(S.backgroundRotation),ys.x*=-1,ys.y*=-1,ys.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(ys.y*=-1,ys.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(tx.makeRotationFromEuler(ys)),h.material.toneMapped=ot.getTransfer(x.colorSpace)!==St,(u!==x||d!==x.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,f=s.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Z(new Yt(2,2),new Ti({name:"BackgroundMaterial",uniforms:yr(yi.background.uniforms),vertexShader:yi.background.vertexShader,fragmentShader:yi.background.fragmentShader,side:qi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=ot.getTransfer(x.colorSpace)!==St,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,u=x,d=x.version,f=s.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null))}function p(w,S){w.getRGB(ca,Pf(s)),n.buffers.color.setClear(ca.r,ca.g,ca.b,S,o)}return{getClearColor:function(){return a},setClearColor:function(w,S=1){a.set(w),c=S,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(w){c=w,p(a,c)},render:_,addToRenderList:m}}function ix(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,o=!1;function a(M,C,z,O,B){let W=!1;const k=u(O,z,C);r!==k&&(r=k,l(r.object)),W=f(M,O,z,B),W&&g(M,O,z,B),B!==null&&e.update(B,s.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,x(M,C,z,O),B!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function c(){return s.createVertexArray()}function l(M){return s.bindVertexArray(M)}function h(M){return s.deleteVertexArray(M)}function u(M,C,z){const O=z.wireframe===!0;let B=n[M.id];B===void 0&&(B={},n[M.id]=B);let W=B[C.id];W===void 0&&(W={},B[C.id]=W);let k=W[O];return k===void 0&&(k=d(c()),W[O]=k),k}function d(M){const C=[],z=[],O=[];for(let B=0;B<t;B++)C[B]=0,z[B]=0,O[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:z,attributeDivisors:O,object:M,attributes:{},index:null}}function f(M,C,z,O){const B=r.attributes,W=C.attributes;let k=0;const K=z.getAttributes();for(const H in K)if(K[H].location>=0){const fe=B[H];let pe=W[H];if(pe===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(pe=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(pe=M.instanceColor)),fe===void 0||fe.attribute!==pe||pe&&fe.data!==pe.data)return!0;k++}return r.attributesNum!==k||r.index!==O}function g(M,C,z,O){const B={},W=C.attributes;let k=0;const K=z.getAttributes();for(const H in K)if(K[H].location>=0){let fe=W[H];fe===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(fe=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(fe=M.instanceColor));const pe={};pe.attribute=fe,fe&&fe.data&&(pe.data=fe.data),B[H]=pe,k++}r.attributes=B,r.attributesNum=k,r.index=O}function _(){const M=r.newAttributes;for(let C=0,z=M.length;C<z;C++)M[C]=0}function m(M){p(M,0)}function p(M,C){const z=r.newAttributes,O=r.enabledAttributes,B=r.attributeDivisors;z[M]=1,O[M]===0&&(s.enableVertexAttribArray(M),O[M]=1),B[M]!==C&&(s.vertexAttribDivisor(M,C),B[M]=C)}function w(){const M=r.newAttributes,C=r.enabledAttributes;for(let z=0,O=C.length;z<O;z++)C[z]!==M[z]&&(s.disableVertexAttribArray(z),C[z]=0)}function S(M,C,z,O,B,W,k){k===!0?s.vertexAttribIPointer(M,C,z,B,W):s.vertexAttribPointer(M,C,z,O,B,W)}function x(M,C,z,O){_();const B=O.attributes,W=z.getAttributes(),k=C.defaultAttributeValues;for(const K in W){const H=W[K];if(H.location>=0){let ce=B[K];if(ce===void 0&&(K==="instanceMatrix"&&M.instanceMatrix&&(ce=M.instanceMatrix),K==="instanceColor"&&M.instanceColor&&(ce=M.instanceColor)),ce!==void 0){const fe=ce.normalized,pe=ce.itemSize,Re=e.get(ce);if(Re===void 0)continue;const tt=Re.buffer,j=Re.type,ie=Re.bytesPerElement,xe=j===s.INT||j===s.UNSIGNED_INT||ce.gpuType===Eh;if(ce.isInterleavedBufferAttribute){const ae=ce.data,Ie=ae.stride,De=ce.offset;if(ae.isInstancedInterleavedBuffer){for(let ke=0;ke<H.locationSize;ke++)p(H.location+ke,ae.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let ke=0;ke<H.locationSize;ke++)m(H.location+ke);s.bindBuffer(s.ARRAY_BUFFER,tt);for(let ke=0;ke<H.locationSize;ke++)S(H.location+ke,pe/H.locationSize,j,fe,Ie*ie,(De+pe/H.locationSize*ke)*ie,xe)}else{if(ce.isInstancedBufferAttribute){for(let ae=0;ae<H.locationSize;ae++)p(H.location+ae,ce.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let ae=0;ae<H.locationSize;ae++)m(H.location+ae);s.bindBuffer(s.ARRAY_BUFFER,tt);for(let ae=0;ae<H.locationSize;ae++)S(H.location+ae,pe/H.locationSize,j,fe,pe*ie,pe/H.locationSize*ae*ie,xe)}}else if(k!==void 0){const fe=k[K];if(fe!==void 0)switch(fe.length){case 2:s.vertexAttrib2fv(H.location,fe);break;case 3:s.vertexAttrib3fv(H.location,fe);break;case 4:s.vertexAttrib4fv(H.location,fe);break;default:s.vertexAttrib1fv(H.location,fe)}}}}w()}function L(){T();for(const M in n){const C=n[M];for(const z in C){const O=C[z];for(const B in O)h(O[B].object),delete O[B];delete C[z]}delete n[M]}}function R(M){if(n[M.id]===void 0)return;const C=n[M.id];for(const z in C){const O=C[z];for(const B in O)h(O[B].object),delete O[B];delete C[z]}delete n[M.id]}function I(M){for(const C in n){const z=n[C];if(z[M.id]===void 0)continue;const O=z[M.id];for(const B in O)h(O[B].object),delete O[B];delete z[M.id]}}function T(){v(),o=!0,r!==i&&(r=i,l(r.object))}function v(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:T,resetDefaultState:v,dispose:L,releaseStatesOfGeometry:R,releaseStatesOfProgram:I,initAttributes:_,enableAttribute:m,disableUnusedAttributes:w}}function sx(s,e,t){let n;function i(l){n=l}function r(l,h){s.drawArrays(n,l,h),t.update(h,n,1)}function o(l,h,u){u!==0&&(s.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function a(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];t.update(f,n,1)}function c(l,h,u,d){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)o(l[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];t.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function rx(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(I){return!(I!==Gn&&n.convert(I)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(I){const T=I===Uo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==Yi&&n.convert(I)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==ri&&!T)}function c(I){if(I==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),w=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),S=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,R=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:w,maxVaryings:S,maxFragmentUniforms:x,vertexTextures:L,maxSamples:R}}function ox(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new vi,a=new Ze,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!i||g===null||g.length===0||r&&!m)r?h(null):l();else{const w=r?0:n,S=w*4;let x=p.clippingState||null;c.value=x,x=h(g,d,S,f);for(let L=0;L!==S;++L)x[L]=t[L];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=w}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=f+_*4,w=d.matrixWorldInverse;a.getNormalMatrix(w),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,x=f;S!==_;++S,x+=4)o.copy(u[S]).applyMatrix4(w,a),o.normal.toArray(m,x),m[x+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function ax(s){let e=new WeakMap;function t(o,a){return a===Rl?o.mapping=mr:a===Cl&&(o.mapping=gr),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Rl||a===Cl)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new x0(c.height);return l.fromEquirectangularTexture(s,o),e.set(o,l),o.addEventListener("dispose",i),t(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Bh extends Lf{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const or=4,Wu=[.125,.215,.35,.446,.526,.582],Es=20,jc=new Bh,Xu=new Be;let Kc=null,Zc=0,$c=0,Jc=!1;const bs=(1+Math.sqrt(5))/2,$s=1/bs,qu=[new A(-bs,$s,0),new A(bs,$s,0),new A(-$s,0,bs),new A($s,0,bs),new A(0,bs,-$s),new A(0,bs,$s),new A(-1,1,-1),new A(1,1,-1),new A(-1,1,1),new A(1,1,1)];class sh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Kc=this._renderer.getRenderTarget(),Zc=this._renderer.getActiveCubeFace(),$c=this._renderer.getActiveMipmapLevel(),Jc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ku(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ju(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Kc,Zc,$c),this._renderer.xr.enabled=Jc,e.scissorTest=!1,la(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===mr||e.mapping===gr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Kc=this._renderer.getRenderTarget(),Zc=this._renderer.getActiveCubeFace(),$c=this._renderer.getActiveMipmapLevel(),Jc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Nn,minFilter:Nn,generateMipmaps:!1,type:Uo,format:Gn,colorSpace:Tn,depthBuffer:!1},i=Yu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Yu(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=cx(r)),this._blurMaterial=lx(r,e,t)}return i}_compileMaterial(e){const t=new Z(this._lodPlanes[0],e);this._renderer.compile(t,jc)}_sceneToCubeUV(e,t,n,i){const a=new Mn(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Xu),h.toneMapping=ds,h.autoClear=!1;const f=new on({name:"PMREM.Background",side:gn,depthWrite:!1,depthTest:!1}),g=new Z(new Fn,f);let _=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,_=!0):(f.color.copy(Xu),_=!0);for(let p=0;p<6;p++){const w=p%3;w===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):w===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const S=this._cubeSize;la(i,w*S,p>2?S:0,S,S),h.setRenderTarget(i),_&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===mr||e.mapping===gr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ku()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ju());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new Z(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;la(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,jc)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=qu[(i-r-1)%qu.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Z(this._lodPlanes[i],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Es-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):Es;m>Es&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Es}`);const p=[];let w=0;for(let I=0;I<Es;++I){const T=I/_,v=Math.exp(-T*T/2);p.push(v),I===0?w+=v:I<m&&(w+=2*v)}for(let I=0;I<p.length;I++)p[I]=p[I]/w;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:S}=this;d.dTheta.value=g,d.mipInt.value=S-n;const x=this._sizeLods[i],L=3*x*(i>S-or?i-S+or:0),R=4*(this._cubeSize-x);la(t,L,R,3*x,2*x),c.setRenderTarget(t),c.render(u,jc)}}function cx(s){const e=[],t=[],n=[];let i=s;const r=s-or+1+Wu.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let c=1/a;o>s-or?c=Wu[o-s+or-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,m=2,p=1,w=new Float32Array(_*g*f),S=new Float32Array(m*g*f),x=new Float32Array(p*g*f);for(let R=0;R<f;R++){const I=R%3*2/3-1,T=R>2?0:-1,v=[I,T,0,I+2/3,T,0,I+2/3,T+1,0,I,T,0,I+2/3,T+1,0,I,T+1,0];w.set(v,_*g*R),S.set(d,m*g*R);const M=[R,R,R,R,R,R];x.set(M,p*g*R)}const L=new Zt;L.setAttribute("position",new an(w,_)),L.setAttribute("uv",new an(S,m)),L.setAttribute("faceIndex",new an(x,p)),e.push(L),i>or&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Yu(s,e,t){const n=new Is(s,e,t);return n.texture.mapping=oc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function la(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function lx(s,e,t){const n=new Float32Array(Es),i=new A(0,1,0);return new Ti({name:"SphericalGaussianBlur",defines:{n:Es,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:kh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:us,depthTest:!1,depthWrite:!1})}function ju(){return new Ti({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:kh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:us,depthTest:!1,depthWrite:!1})}function Ku(){return new Ti({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:kh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:us,depthTest:!1,depthWrite:!1})}function kh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function hx(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Rl||c===Cl,h=c===mr||c===gr;if(l||h){let u=e.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new sh(s)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return l&&f&&f.height>0||h&&f&&i(f)?(t===null&&(t=new sh(s)),u=l?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function i(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function ux(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&eo("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function dx(s,e,t,n){const i={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)e.remove(_[m])}d.removeEventListener("dispose",o),delete i[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function c(u){const d=u.attributes;for(const g in d)e.update(d[g],s.ARRAY_BUFFER);const f=u.morphAttributes;for(const g in f){const _=f[g];for(let m=0,p=_.length;m<p;m++)e.update(_[m],s.ARRAY_BUFFER)}}function l(u){const d=[],f=u.index,g=u.attributes.position;let _=0;if(f!==null){const w=f.array;_=f.version;for(let S=0,x=w.length;S<x;S+=3){const L=w[S+0],R=w[S+1],I=w[S+2];d.push(L,R,R,I,I,L)}}else if(g!==void 0){const w=g.array;_=g.version;for(let S=0,x=w.length/3-1;S<x;S+=3){const L=S+0,R=S+1,I=S+2;d.push(L,R,R,I,I,L)}}else return;const m=new(bf(d)?Cf:Rf)(d,1);m.version=_;const p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function fx(s,e,t){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,f){s.drawElements(n,f,r,d*o),t.update(f,n,1)}function l(d,f,g){g!==0&&(s.drawElementsInstanced(n,f,r,d*o,g),t.update(f,n,g))}function h(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function u(d,f,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/o,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,g);let p=0;for(let w=0;w<g;w++)p+=f[w]*_[w];t.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function px(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function mx(s,e,t){const n=new WeakMap,i=new dt;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let M=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",M)};var f=M;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],w=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let x=0;g===!0&&(x=1),_===!0&&(x=2),m===!0&&(x=3);let L=a.attributes.position.count*x,R=1;L>e.maxTextureSize&&(R=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const I=new Float32Array(L*R*4*u),T=new Ef(I,L,R,u);T.type=ri,T.needsUpdate=!0;const v=x*4;for(let C=0;C<u;C++){const z=p[C],O=w[C],B=S[C],W=L*R*4*C;for(let k=0;k<z.count;k++){const K=k*v;g===!0&&(i.fromBufferAttribute(z,k),I[W+K+0]=i.x,I[W+K+1]=i.y,I[W+K+2]=i.z,I[W+K+3]=0),_===!0&&(i.fromBufferAttribute(O,k),I[W+K+4]=i.x,I[W+K+5]=i.y,I[W+K+6]=i.z,I[W+K+7]=0),m===!0&&(i.fromBufferAttribute(B,k),I[W+K+8]=i.x,I[W+K+9]=i.y,I[W+K+10]=i.z,I[W+K+11]=B.itemSize===4?i.w:1)}}d={count:u,texture:T,size:new re(L,R)},n.set(a,d),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const _=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(s,"morphTargetBaseInfluence",_),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function gx(s,e,t,n){let i=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=e.get(c,h);if(i.get(u)!==l&&(e.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return u}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}class Uf extends Jt{constructor(e,t,n,i,r,o,a,c,l,h=hr){if(h!==hr&&h!==xr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===hr&&(n=Ps),n===void 0&&h===xr&&(n=_r),super(null,i,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:_n,this.minFilter=c!==void 0?c:_n,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Ff=new Jt,Zu=new Uf(1,1),Of=new Ef,Bf=new i0,kf=new Df,$u=[],Ju=[],Qu=new Float32Array(16),ed=new Float32Array(9),td=new Float32Array(4);function Rr(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=$u[i];if(r===void 0&&(r=new Float32Array(i),$u[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function Qt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function en(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function cc(s,e){let t=Ju[e];t===void 0&&(t=new Int32Array(e),Ju[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function _x(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function xx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;s.uniform2fv(this.addr,e),en(t,e)}}function vx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Qt(t,e))return;s.uniform3fv(this.addr,e),en(t,e)}}function yx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;s.uniform4fv(this.addr,e),en(t,e)}}function Mx(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Qt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,n))return;td.set(n),s.uniformMatrix2fv(this.addr,!1,td),en(t,n)}}function Sx(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Qt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,n))return;ed.set(n),s.uniformMatrix3fv(this.addr,!1,ed),en(t,n)}}function wx(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Qt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,n))return;Qu.set(n),s.uniformMatrix4fv(this.addr,!1,Qu),en(t,n)}}function bx(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Tx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;s.uniform2iv(this.addr,e),en(t,e)}}function Ex(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Qt(t,e))return;s.uniform3iv(this.addr,e),en(t,e)}}function Ax(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;s.uniform4iv(this.addr,e),en(t,e)}}function Rx(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Cx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;s.uniform2uiv(this.addr,e),en(t,e)}}function Px(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Qt(t,e))return;s.uniform3uiv(this.addr,e),en(t,e)}}function Ix(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;s.uniform4uiv(this.addr,e),en(t,e)}}function Lx(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Zu.compareFunction=wf,r=Zu):r=Ff,t.setTexture2D(e||r,i)}function Dx(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Bf,i)}function Nx(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||kf,i)}function Ux(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Of,i)}function Fx(s){switch(s){case 5126:return _x;case 35664:return xx;case 35665:return vx;case 35666:return yx;case 35674:return Mx;case 35675:return Sx;case 35676:return wx;case 5124:case 35670:return bx;case 35667:case 35671:return Tx;case 35668:case 35672:return Ex;case 35669:case 35673:return Ax;case 5125:return Rx;case 36294:return Cx;case 36295:return Px;case 36296:return Ix;case 35678:case 36198:case 36298:case 36306:case 35682:return Lx;case 35679:case 36299:case 36307:return Dx;case 35680:case 36300:case 36308:case 36293:return Nx;case 36289:case 36303:case 36311:case 36292:return Ux}}function Ox(s,e){s.uniform1fv(this.addr,e)}function Bx(s,e){const t=Rr(e,this.size,2);s.uniform2fv(this.addr,t)}function kx(s,e){const t=Rr(e,this.size,3);s.uniform3fv(this.addr,t)}function zx(s,e){const t=Rr(e,this.size,4);s.uniform4fv(this.addr,t)}function Hx(s,e){const t=Rr(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Vx(s,e){const t=Rr(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Gx(s,e){const t=Rr(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Wx(s,e){s.uniform1iv(this.addr,e)}function Xx(s,e){s.uniform2iv(this.addr,e)}function qx(s,e){s.uniform3iv(this.addr,e)}function Yx(s,e){s.uniform4iv(this.addr,e)}function jx(s,e){s.uniform1uiv(this.addr,e)}function Kx(s,e){s.uniform2uiv(this.addr,e)}function Zx(s,e){s.uniform3uiv(this.addr,e)}function $x(s,e){s.uniform4uiv(this.addr,e)}function Jx(s,e,t){const n=this.cache,i=e.length,r=cc(t,i);Qt(n,r)||(s.uniform1iv(this.addr,r),en(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Ff,r[o])}function Qx(s,e,t){const n=this.cache,i=e.length,r=cc(t,i);Qt(n,r)||(s.uniform1iv(this.addr,r),en(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Bf,r[o])}function ev(s,e,t){const n=this.cache,i=e.length,r=cc(t,i);Qt(n,r)||(s.uniform1iv(this.addr,r),en(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||kf,r[o])}function tv(s,e,t){const n=this.cache,i=e.length,r=cc(t,i);Qt(n,r)||(s.uniform1iv(this.addr,r),en(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Of,r[o])}function nv(s){switch(s){case 5126:return Ox;case 35664:return Bx;case 35665:return kx;case 35666:return zx;case 35674:return Hx;case 35675:return Vx;case 35676:return Gx;case 5124:case 35670:return Wx;case 35667:case 35671:return Xx;case 35668:case 35672:return qx;case 35669:case 35673:return Yx;case 5125:return jx;case 36294:return Kx;case 36295:return Zx;case 36296:return $x;case 35678:case 36198:case 36298:case 36306:case 35682:return Jx;case 35679:case 36299:case 36307:return Qx;case 35680:case 36300:case 36308:case 36293:return ev;case 36289:case 36303:case 36311:case 36292:return tv}}class iv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Fx(t.type)}}class sv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=nv(t.type)}}class rv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const Qc=/(\w+)(\])?(\[|\.)?/g;function nd(s,e){s.seq.push(e),s.map[e.id]=e}function ov(s,e,t){const n=s.name,i=n.length;for(Qc.lastIndex=0;;){const r=Qc.exec(n),o=Qc.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){nd(t,l===void 0?new iv(a,s,e):new sv(a,s,e));break}else{let u=t.map[a];u===void 0&&(u=new rv(a),nd(t,u)),t=u}}}class Ia{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);ov(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function id(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const av=37297;let cv=0;function lv(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const sd=new Ze;function hv(s){ot._getMatrix(sd,ot.workingColorSpace,s);const e=`mat3( ${sd.elements.map(t=>t.toFixed(4))} )`;switch(ot.getTransfer(s)){case ac:return[e,"LinearTransferOETF"];case St:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function rd(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+lv(s.getShaderSource(e),o)}else return i}function uv(s,e){const t=hv(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function dv(s,e){let t;switch(e){case dm:t="Linear";break;case fm:t="Reinhard";break;case pm:t="Cineon";break;case lf:t="ACESFilmic";break;case gm:t="AgX";break;case _m:t="Neutral";break;case mm:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ha=new A;function fv(){ot.getLuminanceCoefficients(ha);const s=ha.x.toFixed(4),e=ha.y.toFixed(4),t=ha.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function pv(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(to).join(`
`)}function mv(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function gv(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function to(s){return s!==""}function od(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ad(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const _v=/^[ \t]*#include +<([\w\d./]+)>/gm;function rh(s){return s.replace(_v,vv)}const xv=new Map;function vv(s,e){let t=et[e];if(t===void 0){const n=xv.get(e);if(n!==void 0)t=et[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return rh(t)}const yv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cd(s){return s.replace(yv,Mv)}function Mv(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function ld(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Sv(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===of?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===af?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Oi&&(e="SHADOWMAP_TYPE_VSM"),e}function wv(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case mr:case gr:e="ENVMAP_TYPE_CUBE";break;case oc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function bv(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case gr:e="ENVMAP_MODE_REFRACTION";break}return e}function Tv(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case cf:e="ENVMAP_BLENDING_MULTIPLY";break;case hm:e="ENVMAP_BLENDING_MIX";break;case um:e="ENVMAP_BLENDING_ADD";break}return e}function Ev(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Av(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=Sv(t),l=wv(t),h=bv(t),u=Tv(t),d=Ev(t),f=pv(t),g=mv(r),_=i.createProgram();let m,p,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(to).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(to).join(`
`),p.length>0&&(p+=`
`)):(m=[ld(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(to).join(`
`),p=[ld(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ds?"#define TONE_MAPPING":"",t.toneMapping!==ds?et.tonemapping_pars_fragment:"",t.toneMapping!==ds?dv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",et.colorspace_pars_fragment,uv("linearToOutputTexel",t.outputColorSpace),fv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(to).join(`
`)),o=rh(o),o=od(o,t),o=ad(o,t),a=rh(a),a=od(a,t),a=ad(a,t),o=cd(o),a=cd(a),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Su?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Su?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=w+m+o,x=w+p+a,L=id(i,i.VERTEX_SHADER,S),R=id(i,i.FRAGMENT_SHADER,x);i.attachShader(_,L),i.attachShader(_,R),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function I(C){if(s.debug.checkShaderErrors){const z=i.getProgramInfoLog(_).trim(),O=i.getShaderInfoLog(L).trim(),B=i.getShaderInfoLog(R).trim();let W=!0,k=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(W=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,L,R);else{const K=rd(i,L,"vertex"),H=rd(i,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+z+`
`+K+`
`+H)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(O===""||B==="")&&(k=!1);k&&(C.diagnostics={runnable:W,programLog:z,vertexShader:{log:O,prefix:m},fragmentShader:{log:B,prefix:p}})}i.deleteShader(L),i.deleteShader(R),T=new Ia(i,_),v=gv(i,_)}let T;this.getUniforms=function(){return T===void 0&&I(this),T};let v;this.getAttributes=function(){return v===void 0&&I(this),v};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(_,av)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=cv++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=L,this.fragmentShader=R,this}let Rv=0;class Cv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Pv(e),t.set(e,n)),n}}class Pv{constructor(e){this.id=Rv++,this.code=e,this.usedTimes=0}}function Iv(s,e,t,n,i,r,o){const a=new Fh,c=new Cv,l=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return l.add(v),v===0?"uv":`uv${v}`}function m(v,M,C,z,O){const B=z.fog,W=O.geometry,k=v.isMeshStandardMaterial?z.environment:null,K=(v.isMeshStandardMaterial?t:e).get(v.envMap||k),H=K&&K.mapping===oc?K.image.height:null,ce=g[v.type];v.precision!==null&&(f=i.getMaxPrecision(v.precision),f!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",f,"instead."));const fe=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,pe=fe!==void 0?fe.length:0;let Re=0;W.morphAttributes.position!==void 0&&(Re=1),W.morphAttributes.normal!==void 0&&(Re=2),W.morphAttributes.color!==void 0&&(Re=3);let tt,j,ie,xe;if(ce){const yt=yi[ce];tt=yt.vertexShader,j=yt.fragmentShader}else tt=v.vertexShader,j=v.fragmentShader,c.update(v),ie=c.getVertexShaderID(v),xe=c.getFragmentShaderID(v);const ae=s.getRenderTarget(),Ie=s.state.buffers.depth.getReversed(),De=O.isInstancedMesh===!0,ke=O.isBatchedMesh===!0,Je=!!v.map,$=!!v.matcap,se=!!K,P=!!v.aoMap,be=!!v.lightMap,te=!!v.bumpMap,Se=!!v.normalMap,J=!!v.displacementMap,ve=!!v.emissiveMap,le=!!v.metalnessMap,b=!!v.roughnessMap,y=v.anisotropy>0,N=v.clearcoat>0,X=v.dispersion>0,Q=v.iridescence>0,q=v.sheen>0,Ae=v.transmission>0,ue=y&&!!v.anisotropyMap,Ee=N&&!!v.clearcoatMap,it=N&&!!v.clearcoatNormalMap,oe=N&&!!v.clearcoatRoughnessMap,Ce=Q&&!!v.iridescenceMap,Ge=Q&&!!v.iridescenceThicknessMap,We=q&&!!v.sheenColorMap,Pe=q&&!!v.sheenRoughnessMap,ct=!!v.specularMap,Qe=!!v.specularColorMap,Et=!!v.specularIntensityMap,D=Ae&&!!v.transmissionMap,_e=Ae&&!!v.thicknessMap,Y=!!v.gradientMap,ne=!!v.alphaMap,we=v.alphaTest>0,ye=!!v.alphaHash,je=!!v.extensions;let Ht=ds;v.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(Ht=s.toneMapping);const un={shaderID:ce,shaderType:v.type,shaderName:v.name,vertexShader:tt,fragmentShader:j,defines:v.defines,customVertexShaderID:ie,customFragmentShaderID:xe,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:f,batching:ke,batchingColor:ke&&O._colorsTexture!==null,instancing:De,instancingColor:De&&O.instanceColor!==null,instancingMorph:De&&O.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ae===null?s.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:Tn,alphaToCoverage:!!v.alphaToCoverage,map:Je,matcap:$,envMap:se,envMapMode:se&&K.mapping,envMapCubeUVHeight:H,aoMap:P,lightMap:be,bumpMap:te,normalMap:Se,displacementMap:d&&J,emissiveMap:ve,normalMapObjectSpace:Se&&v.normalMapType===Tm,normalMapTangentSpace:Se&&v.normalMapType===Nh,metalnessMap:le,roughnessMap:b,anisotropy:y,anisotropyMap:ue,clearcoat:N,clearcoatMap:Ee,clearcoatNormalMap:it,clearcoatRoughnessMap:oe,dispersion:X,iridescence:Q,iridescenceMap:Ce,iridescenceThicknessMap:Ge,sheen:q,sheenColorMap:We,sheenRoughnessMap:Pe,specularMap:ct,specularColorMap:Qe,specularIntensityMap:Et,transmission:Ae,transmissionMap:D,thicknessMap:_e,gradientMap:Y,opaque:v.transparent===!1&&v.blending===lr&&v.alphaToCoverage===!1,alphaMap:ne,alphaTest:we,alphaHash:ye,combine:v.combine,mapUv:Je&&_(v.map.channel),aoMapUv:P&&_(v.aoMap.channel),lightMapUv:be&&_(v.lightMap.channel),bumpMapUv:te&&_(v.bumpMap.channel),normalMapUv:Se&&_(v.normalMap.channel),displacementMapUv:J&&_(v.displacementMap.channel),emissiveMapUv:ve&&_(v.emissiveMap.channel),metalnessMapUv:le&&_(v.metalnessMap.channel),roughnessMapUv:b&&_(v.roughnessMap.channel),anisotropyMapUv:ue&&_(v.anisotropyMap.channel),clearcoatMapUv:Ee&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:it&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Ce&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:Ge&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:We&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&_(v.sheenRoughnessMap.channel),specularMapUv:ct&&_(v.specularMap.channel),specularColorMapUv:Qe&&_(v.specularColorMap.channel),specularIntensityMapUv:Et&&_(v.specularIntensityMap.channel),transmissionMapUv:D&&_(v.transmissionMap.channel),thicknessMapUv:_e&&_(v.thicknessMap.channel),alphaMapUv:ne&&_(v.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(Se||y),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!W.attributes.uv&&(Je||ne),fog:!!B,useFog:v.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Ie,skinning:O.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:pe,morphTextureStride:Re,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:s.shadowMap.enabled&&C.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ht,decodeVideoTexture:Je&&v.map.isVideoTexture===!0&&ot.getTransfer(v.map.colorSpace)===St,decodeVideoTextureEmissive:ve&&v.emissiveMap.isVideoTexture===!0&&ot.getTransfer(v.emissiveMap.colorSpace)===St,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===rn,flipSided:v.side===gn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:je&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(je&&v.extensions.multiDraw===!0||ke)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return un.vertexUv1s=l.has(1),un.vertexUv2s=l.has(2),un.vertexUv3s=l.has(3),l.clear(),un}function p(v){const M=[];if(v.shaderID?M.push(v.shaderID):(M.push(v.customVertexShaderID),M.push(v.customFragmentShaderID)),v.defines!==void 0)for(const C in v.defines)M.push(C),M.push(v.defines[C]);return v.isRawShaderMaterial===!1&&(w(M,v),S(M,v),M.push(s.outputColorSpace)),M.push(v.customProgramCacheKey),M.join()}function w(v,M){v.push(M.precision),v.push(M.outputColorSpace),v.push(M.envMapMode),v.push(M.envMapCubeUVHeight),v.push(M.mapUv),v.push(M.alphaMapUv),v.push(M.lightMapUv),v.push(M.aoMapUv),v.push(M.bumpMapUv),v.push(M.normalMapUv),v.push(M.displacementMapUv),v.push(M.emissiveMapUv),v.push(M.metalnessMapUv),v.push(M.roughnessMapUv),v.push(M.anisotropyMapUv),v.push(M.clearcoatMapUv),v.push(M.clearcoatNormalMapUv),v.push(M.clearcoatRoughnessMapUv),v.push(M.iridescenceMapUv),v.push(M.iridescenceThicknessMapUv),v.push(M.sheenColorMapUv),v.push(M.sheenRoughnessMapUv),v.push(M.specularMapUv),v.push(M.specularColorMapUv),v.push(M.specularIntensityMapUv),v.push(M.transmissionMapUv),v.push(M.thicknessMapUv),v.push(M.combine),v.push(M.fogExp2),v.push(M.sizeAttenuation),v.push(M.morphTargetsCount),v.push(M.morphAttributeCount),v.push(M.numDirLights),v.push(M.numPointLights),v.push(M.numSpotLights),v.push(M.numSpotLightMaps),v.push(M.numHemiLights),v.push(M.numRectAreaLights),v.push(M.numDirLightShadows),v.push(M.numPointLightShadows),v.push(M.numSpotLightShadows),v.push(M.numSpotLightShadowsWithMaps),v.push(M.numLightProbes),v.push(M.shadowMapType),v.push(M.toneMapping),v.push(M.numClippingPlanes),v.push(M.numClipIntersection),v.push(M.depthPacking)}function S(v,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),v.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),v.push(a.mask)}function x(v){const M=g[v.type];let C;if(M){const z=yi[M];C=If.clone(z.uniforms)}else C=v.uniforms;return C}function L(v,M){let C;for(let z=0,O=h.length;z<O;z++){const B=h[z];if(B.cacheKey===M){C=B,++C.usedTimes;break}}return C===void 0&&(C=new Av(s,M,v,r),h.push(C)),C}function R(v){if(--v.usedTimes===0){const M=h.indexOf(v);h[M]=h[h.length-1],h.pop(),v.destroy()}}function I(v){c.remove(v)}function T(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:L,releaseProgram:R,releaseShaderCache:I,programs:h,dispose:T}}function Lv(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,c){s.get(o)[a]=c}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function Dv(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function hd(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function ud(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(u,d,f,g,_,m){let p=s[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},s[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),e++,p}function a(u,d,f,g,_,m){const p=o(u,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function c(u,d,f,g,_,m){const p=o(u,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function l(u,d){t.length>1&&t.sort(u||Dv),n.length>1&&n.sort(d||hd),i.length>1&&i.sort(d||hd)}function h(){for(let u=e,d=s.length;u<d;u++){const f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:h,sort:l}}function Nv(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new ud,s.set(n,[o])):i>=r.length?(o=new ud,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function Uv(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new A,color:new Be};break;case"SpotLight":t={position:new A,direction:new A,color:new Be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new A,color:new Be,distance:0,decay:0};break;case"HemisphereLight":t={direction:new A,skyColor:new Be,groundColor:new Be};break;case"RectAreaLight":t={color:new Be,position:new A,halfWidth:new A,halfHeight:new A};break}return s[e.id]=t,t}}}function Fv(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let Ov=0;function Bv(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function kv(s){const e=new Uv,t=Fv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new A);const i=new A,r=new Ye,o=new Ye;function a(l){let h=0,u=0,d=0;for(let v=0;v<9;v++)n.probe[v].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,w=0,S=0,x=0,L=0,R=0,I=0;l.sort(Bv);for(let v=0,M=l.length;v<M;v++){const C=l[v],z=C.color,O=C.intensity,B=C.distance,W=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=z.r*O,u+=z.g*O,d+=z.b*O;else if(C.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(C.sh.coefficients[k],O);I++}else if(C.isDirectionalLight){const k=e.get(C);if(k.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const K=C.shadow,H=t.get(C);H.shadowIntensity=K.intensity,H.shadowBias=K.bias,H.shadowNormalBias=K.normalBias,H.shadowRadius=K.radius,H.shadowMapSize=K.mapSize,n.directionalShadow[f]=H,n.directionalShadowMap[f]=W,n.directionalShadowMatrix[f]=C.shadow.matrix,w++}n.directional[f]=k,f++}else if(C.isSpotLight){const k=e.get(C);k.position.setFromMatrixPosition(C.matrixWorld),k.color.copy(z).multiplyScalar(O),k.distance=B,k.coneCos=Math.cos(C.angle),k.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),k.decay=C.decay,n.spot[_]=k;const K=C.shadow;if(C.map&&(n.spotLightMap[L]=C.map,L++,K.updateMatrices(C),C.castShadow&&R++),n.spotLightMatrix[_]=K.matrix,C.castShadow){const H=t.get(C);H.shadowIntensity=K.intensity,H.shadowBias=K.bias,H.shadowNormalBias=K.normalBias,H.shadowRadius=K.radius,H.shadowMapSize=K.mapSize,n.spotShadow[_]=H,n.spotShadowMap[_]=W,x++}_++}else if(C.isRectAreaLight){const k=e.get(C);k.color.copy(z).multiplyScalar(O),k.halfWidth.set(C.width*.5,0,0),k.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=k,m++}else if(C.isPointLight){const k=e.get(C);if(k.color.copy(C.color).multiplyScalar(C.intensity),k.distance=C.distance,k.decay=C.decay,C.castShadow){const K=C.shadow,H=t.get(C);H.shadowIntensity=K.intensity,H.shadowBias=K.bias,H.shadowNormalBias=K.normalBias,H.shadowRadius=K.radius,H.shadowMapSize=K.mapSize,H.shadowCameraNear=K.camera.near,H.shadowCameraFar=K.camera.far,n.pointShadow[g]=H,n.pointShadowMap[g]=W,n.pointShadowMatrix[g]=C.shadow.matrix,S++}n.point[g]=k,g++}else if(C.isHemisphereLight){const k=e.get(C);k.skyColor.copy(C.color).multiplyScalar(O),k.groundColor.copy(C.groundColor).multiplyScalar(O),n.hemi[p]=k,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=de.LTC_FLOAT_1,n.rectAreaLTC2=de.LTC_FLOAT_2):(n.rectAreaLTC1=de.LTC_HALF_1,n.rectAreaLTC2=de.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const T=n.hash;(T.directionalLength!==f||T.pointLength!==g||T.spotLength!==_||T.rectAreaLength!==m||T.hemiLength!==p||T.numDirectionalShadows!==w||T.numPointShadows!==S||T.numSpotShadows!==x||T.numSpotMaps!==L||T.numLightProbes!==I)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=x+L-R,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=I,T.directionalLength=f,T.pointLength=g,T.spotLength=_,T.rectAreaLength=m,T.hemiLength=p,T.numDirectionalShadows=w,T.numPointShadows=S,T.numSpotShadows=x,T.numSpotMaps=L,T.numLightProbes=I,n.version=Ov++)}function c(l,h){let u=0,d=0,f=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,w=l.length;p<w;p++){const S=l[p];if(S.isDirectionalLight){const x=n.directional[u];x.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),u++}else if(S.isSpotLight){const x=n.spot[f];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),f++}else if(S.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(S.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(S.width*.5,0,0),x.halfHeight.set(0,S.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(S.isPointLight){const x=n.point[d];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),d++}else if(S.isHemisphereLight){const x=n.hemi[_];x.direction.setFromMatrixPosition(S.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:n}}function dd(s){const e=new kv(s),t=[],n=[];function i(h){l.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function zv(s){let e=new WeakMap;function t(i,r=0){const o=e.get(i);let a;return o===void 0?(a=new dd(s),e.set(i,[a])):r>=o.length?(a=new dd(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class Hv extends ai{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=wm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Vv extends ai{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Gv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Wv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Xv(s,e,t){let n=new Oh;const i=new re,r=new re,o=new dt,a=new Hv({depthPacking:bm}),c=new Vv,l={},h=t.maxTextureSize,u={[qi]:gn,[gn]:qi,[rn]:rn},d=new Ti({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new re},radius:{value:4}},vertexShader:Gv,fragmentShader:Wv}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Zt;g.setAttribute("position",new an(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Z(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=of;let p=this.type;this.render=function(R,I,T){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const v=s.getRenderTarget(),M=s.getActiveCubeFace(),C=s.getActiveMipmapLevel(),z=s.state;z.setBlending(us),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const O=p!==Oi&&this.type===Oi,B=p===Oi&&this.type!==Oi;for(let W=0,k=R.length;W<k;W++){const K=R[W],H=K.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);const ce=H.getFrameExtents();if(i.multiply(ce),r.copy(H.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/ce.x),i.x=r.x*ce.x,H.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/ce.y),i.y=r.y*ce.y,H.mapSize.y=r.y)),H.map===null||O===!0||B===!0){const pe=this.type!==Oi?{minFilter:_n,magFilter:_n}:{};H.map!==null&&H.map.dispose(),H.map=new Is(i.x,i.y,pe),H.map.texture.name=K.name+".shadowMap",H.camera.updateProjectionMatrix()}s.setRenderTarget(H.map),s.clear();const fe=H.getViewportCount();for(let pe=0;pe<fe;pe++){const Re=H.getViewport(pe);o.set(r.x*Re.x,r.y*Re.y,r.x*Re.z,r.y*Re.w),z.viewport(o),H.updateMatrices(K,pe),n=H.getFrustum(),x(I,T,H.camera,K,this.type)}H.isPointLightShadow!==!0&&this.type===Oi&&w(H,T),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(v,M,C)};function w(R,I){const T=e.update(_);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,f.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Is(i.x,i.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,s.setRenderTarget(R.mapPass),s.clear(),s.renderBufferDirect(I,null,T,d,_,null),f.uniforms.shadow_pass.value=R.mapPass.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,s.setRenderTarget(R.map),s.clear(),s.renderBufferDirect(I,null,T,f,_,null)}function S(R,I,T,v){let M=null;const C=T.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(C!==void 0)M=C;else if(M=T.isPointLight===!0?c:a,s.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){const z=M.uuid,O=I.uuid;let B=l[z];B===void 0&&(B={},l[z]=B);let W=B[O];W===void 0&&(W=M.clone(),B[O]=W,I.addEventListener("dispose",L)),M=W}if(M.visible=I.visible,M.wireframe=I.wireframe,v===Oi?M.side=I.shadowSide!==null?I.shadowSide:I.side:M.side=I.shadowSide!==null?I.shadowSide:u[I.side],M.alphaMap=I.alphaMap,M.alphaTest=I.alphaTest,M.map=I.map,M.clipShadows=I.clipShadows,M.clippingPlanes=I.clippingPlanes,M.clipIntersection=I.clipIntersection,M.displacementMap=I.displacementMap,M.displacementScale=I.displacementScale,M.displacementBias=I.displacementBias,M.wireframeLinewidth=I.wireframeLinewidth,M.linewidth=I.linewidth,T.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const z=s.properties.get(M);z.light=T}return M}function x(R,I,T,v,M){if(R.visible===!1)return;if(R.layers.test(I.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&M===Oi)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,R.matrixWorld);const O=e.update(R),B=R.material;if(Array.isArray(B)){const W=O.groups;for(let k=0,K=W.length;k<K;k++){const H=W[k],ce=B[H.materialIndex];if(ce&&ce.visible){const fe=S(R,ce,v,M);R.onBeforeShadow(s,R,I,T,O,fe,H),s.renderBufferDirect(T,null,O,fe,R,H),R.onAfterShadow(s,R,I,T,O,fe,H)}}}else if(B.visible){const W=S(R,B,v,M);R.onBeforeShadow(s,R,I,T,O,W,null),s.renderBufferDirect(T,null,O,W,R,null),R.onAfterShadow(s,R,I,T,O,W,null)}}const z=R.children;for(let O=0,B=z.length;O<B;O++)x(z[O],I,T,v,M)}function L(R){R.target.removeEventListener("dispose",L);for(const T in l){const v=l[T],M=R.target.uuid;M in v&&(v[M].dispose(),delete v[M])}}}const qv={[Ml]:Sl,[wl]:El,[bl]:Al,[pr]:Tl,[Sl]:Ml,[El]:wl,[Al]:bl,[Tl]:pr};function Yv(s,e){function t(){let D=!1;const _e=new dt;let Y=null;const ne=new dt(0,0,0,0);return{setMask:function(we){Y!==we&&!D&&(s.colorMask(we,we,we,we),Y=we)},setLocked:function(we){D=we},setClear:function(we,ye,je,Ht,un){un===!0&&(we*=Ht,ye*=Ht,je*=Ht),_e.set(we,ye,je,Ht),ne.equals(_e)===!1&&(s.clearColor(we,ye,je,Ht),ne.copy(_e))},reset:function(){D=!1,Y=null,ne.set(-1,0,0,0)}}}function n(){let D=!1,_e=!1,Y=null,ne=null,we=null;return{setReversed:function(ye){if(_e!==ye){const je=e.get("EXT_clip_control");_e?je.clipControlEXT(je.LOWER_LEFT_EXT,je.ZERO_TO_ONE_EXT):je.clipControlEXT(je.LOWER_LEFT_EXT,je.NEGATIVE_ONE_TO_ONE_EXT);const Ht=we;we=null,this.setClear(Ht)}_e=ye},getReversed:function(){return _e},setTest:function(ye){ye?ae(s.DEPTH_TEST):Ie(s.DEPTH_TEST)},setMask:function(ye){Y!==ye&&!D&&(s.depthMask(ye),Y=ye)},setFunc:function(ye){if(_e&&(ye=qv[ye]),ne!==ye){switch(ye){case Ml:s.depthFunc(s.NEVER);break;case Sl:s.depthFunc(s.ALWAYS);break;case wl:s.depthFunc(s.LESS);break;case pr:s.depthFunc(s.LEQUAL);break;case bl:s.depthFunc(s.EQUAL);break;case Tl:s.depthFunc(s.GEQUAL);break;case El:s.depthFunc(s.GREATER);break;case Al:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ne=ye}},setLocked:function(ye){D=ye},setClear:function(ye){we!==ye&&(_e&&(ye=1-ye),s.clearDepth(ye),we=ye)},reset:function(){D=!1,Y=null,ne=null,we=null,_e=!1}}}function i(){let D=!1,_e=null,Y=null,ne=null,we=null,ye=null,je=null,Ht=null,un=null;return{setTest:function(yt){D||(yt?ae(s.STENCIL_TEST):Ie(s.STENCIL_TEST))},setMask:function(yt){_e!==yt&&!D&&(s.stencilMask(yt),_e=yt)},setFunc:function(yt,Kn,Ci){(Y!==yt||ne!==Kn||we!==Ci)&&(s.stencilFunc(yt,Kn,Ci),Y=yt,ne=Kn,we=Ci)},setOp:function(yt,Kn,Ci){(ye!==yt||je!==Kn||Ht!==Ci)&&(s.stencilOp(yt,Kn,Ci),ye=yt,je=Kn,Ht=Ci)},setLocked:function(yt){D=yt},setClear:function(yt){un!==yt&&(s.clearStencil(yt),un=yt)},reset:function(){D=!1,_e=null,Y=null,ne=null,we=null,ye=null,je=null,Ht=null,un=null}}}const r=new t,o=new n,a=new i,c=new WeakMap,l=new WeakMap;let h={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,w=null,S=null,x=null,L=null,R=null,I=new Be(0,0,0),T=0,v=!1,M=null,C=null,z=null,O=null,B=null;const W=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,K=0;const H=s.getParameter(s.VERSION);H.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(H)[1]),k=K>=1):H.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),k=K>=2);let ce=null,fe={};const pe=s.getParameter(s.SCISSOR_BOX),Re=s.getParameter(s.VIEWPORT),tt=new dt().fromArray(pe),j=new dt().fromArray(Re);function ie(D,_e,Y,ne){const we=new Uint8Array(4),ye=s.createTexture();s.bindTexture(D,ye),s.texParameteri(D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(D,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let je=0;je<Y;je++)D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY?s.texImage3D(_e,0,s.RGBA,1,1,ne,0,s.RGBA,s.UNSIGNED_BYTE,we):s.texImage2D(_e+je,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,we);return ye}const xe={};xe[s.TEXTURE_2D]=ie(s.TEXTURE_2D,s.TEXTURE_2D,1),xe[s.TEXTURE_CUBE_MAP]=ie(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),xe[s.TEXTURE_2D_ARRAY]=ie(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),xe[s.TEXTURE_3D]=ie(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ae(s.DEPTH_TEST),o.setFunc(pr),te(!1),Se(_u),ae(s.CULL_FACE),P(us);function ae(D){h[D]!==!0&&(s.enable(D),h[D]=!0)}function Ie(D){h[D]!==!1&&(s.disable(D),h[D]=!1)}function De(D,_e){return u[D]!==_e?(s.bindFramebuffer(D,_e),u[D]=_e,D===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=_e),D===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=_e),!0):!1}function ke(D,_e){let Y=f,ne=!1;if(D){Y=d.get(_e),Y===void 0&&(Y=[],d.set(_e,Y));const we=D.textures;if(Y.length!==we.length||Y[0]!==s.COLOR_ATTACHMENT0){for(let ye=0,je=we.length;ye<je;ye++)Y[ye]=s.COLOR_ATTACHMENT0+ye;Y.length=we.length,ne=!0}}else Y[0]!==s.BACK&&(Y[0]=s.BACK,ne=!0);ne&&s.drawBuffers(Y)}function Je(D){return g!==D?(s.useProgram(D),g=D,!0):!1}const $={[Ts]:s.FUNC_ADD,[Yp]:s.FUNC_SUBTRACT,[jp]:s.FUNC_REVERSE_SUBTRACT};$[Kp]=s.MIN,$[Zp]=s.MAX;const se={[$p]:s.ZERO,[Jp]:s.ONE,[Qp]:s.SRC_COLOR,[vl]:s.SRC_ALPHA,[rm]:s.SRC_ALPHA_SATURATE,[im]:s.DST_COLOR,[tm]:s.DST_ALPHA,[em]:s.ONE_MINUS_SRC_COLOR,[yl]:s.ONE_MINUS_SRC_ALPHA,[sm]:s.ONE_MINUS_DST_COLOR,[nm]:s.ONE_MINUS_DST_ALPHA,[om]:s.CONSTANT_COLOR,[am]:s.ONE_MINUS_CONSTANT_COLOR,[cm]:s.CONSTANT_ALPHA,[lm]:s.ONE_MINUS_CONSTANT_ALPHA};function P(D,_e,Y,ne,we,ye,je,Ht,un,yt){if(D===us){_===!0&&(Ie(s.BLEND),_=!1);return}if(_===!1&&(ae(s.BLEND),_=!0),D!==qp){if(D!==m||yt!==v){if((p!==Ts||x!==Ts)&&(s.blendEquation(s.FUNC_ADD),p=Ts,x=Ts),yt)switch(D){case lr:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case xo:s.blendFunc(s.ONE,s.ONE);break;case xu:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case vu:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case lr:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case xo:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case xu:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case vu:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}w=null,S=null,L=null,R=null,I.set(0,0,0),T=0,m=D,v=yt}return}we=we||_e,ye=ye||Y,je=je||ne,(_e!==p||we!==x)&&(s.blendEquationSeparate($[_e],$[we]),p=_e,x=we),(Y!==w||ne!==S||ye!==L||je!==R)&&(s.blendFuncSeparate(se[Y],se[ne],se[ye],se[je]),w=Y,S=ne,L=ye,R=je),(Ht.equals(I)===!1||un!==T)&&(s.blendColor(Ht.r,Ht.g,Ht.b,un),I.copy(Ht),T=un),m=D,v=!1}function be(D,_e){D.side===rn?Ie(s.CULL_FACE):ae(s.CULL_FACE);let Y=D.side===gn;_e&&(Y=!Y),te(Y),D.blending===lr&&D.transparent===!1?P(us):P(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),r.setMask(D.colorWrite);const ne=D.stencilWrite;a.setTest(ne),ne&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),ve(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ae(s.SAMPLE_ALPHA_TO_COVERAGE):Ie(s.SAMPLE_ALPHA_TO_COVERAGE)}function te(D){M!==D&&(D?s.frontFace(s.CW):s.frontFace(s.CCW),M=D)}function Se(D){D!==Wp?(ae(s.CULL_FACE),D!==C&&(D===_u?s.cullFace(s.BACK):D===Xp?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ie(s.CULL_FACE),C=D}function J(D){D!==z&&(k&&s.lineWidth(D),z=D)}function ve(D,_e,Y){D?(ae(s.POLYGON_OFFSET_FILL),(O!==_e||B!==Y)&&(s.polygonOffset(_e,Y),O=_e,B=Y)):Ie(s.POLYGON_OFFSET_FILL)}function le(D){D?ae(s.SCISSOR_TEST):Ie(s.SCISSOR_TEST)}function b(D){D===void 0&&(D=s.TEXTURE0+W-1),ce!==D&&(s.activeTexture(D),ce=D)}function y(D,_e,Y){Y===void 0&&(ce===null?Y=s.TEXTURE0+W-1:Y=ce);let ne=fe[Y];ne===void 0&&(ne={type:void 0,texture:void 0},fe[Y]=ne),(ne.type!==D||ne.texture!==_e)&&(ce!==Y&&(s.activeTexture(Y),ce=Y),s.bindTexture(D,_e||xe[D]),ne.type=D,ne.texture=_e)}function N(){const D=fe[ce];D!==void 0&&D.type!==void 0&&(s.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function X(){try{s.compressedTexImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Q(){try{s.compressedTexImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function q(){try{s.texSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ae(){try{s.texSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ue(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ee(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function it(){try{s.texStorage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function oe(){try{s.texStorage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ce(){try{s.texImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ge(){try{s.texImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function We(D){tt.equals(D)===!1&&(s.scissor(D.x,D.y,D.z,D.w),tt.copy(D))}function Pe(D){j.equals(D)===!1&&(s.viewport(D.x,D.y,D.z,D.w),j.copy(D))}function ct(D,_e){let Y=l.get(_e);Y===void 0&&(Y=new WeakMap,l.set(_e,Y));let ne=Y.get(D);ne===void 0&&(ne=s.getUniformBlockIndex(_e,D.name),Y.set(D,ne))}function Qe(D,_e){const ne=l.get(_e).get(D);c.get(_e)!==ne&&(s.uniformBlockBinding(_e,ne,D.__bindingPointIndex),c.set(_e,ne))}function Et(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},ce=null,fe={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,w=null,S=null,x=null,L=null,R=null,I=new Be(0,0,0),T=0,v=!1,M=null,C=null,z=null,O=null,B=null,tt.set(0,0,s.canvas.width,s.canvas.height),j.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ae,disable:Ie,bindFramebuffer:De,drawBuffers:ke,useProgram:Je,setBlending:P,setMaterial:be,setFlipSided:te,setCullFace:Se,setLineWidth:J,setPolygonOffset:ve,setScissorTest:le,activeTexture:b,bindTexture:y,unbindTexture:N,compressedTexImage2D:X,compressedTexImage3D:Q,texImage2D:Ce,texImage3D:Ge,updateUBOMapping:ct,uniformBlockBinding:Qe,texStorage2D:it,texStorage3D:oe,texSubImage2D:q,texSubImage3D:Ae,compressedTexSubImage2D:ue,compressedTexSubImage3D:Ee,scissor:We,viewport:Pe,reset:Et}}function fd(s,e,t,n){const i=jv(n);switch(t){case mf:return s*e;case _f:return s*e;case xf:return s*e*2;case Ch:return s*e/i.components*i.byteLength;case Ph:return s*e/i.components*i.byteLength;case vf:return s*e*2/i.components*i.byteLength;case Ih:return s*e*2/i.components*i.byteLength;case gf:return s*e*3/i.components*i.byteLength;case Gn:return s*e*4/i.components*i.byteLength;case Lh:return s*e*4/i.components*i.byteLength;case Ea:case Aa:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ra:case Ca:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Il:case Dl:return Math.max(s,16)*Math.max(e,8)/4;case Pl:case Ll:return Math.max(s,8)*Math.max(e,8)/2;case Nl:case Ul:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Fl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ol:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Bl:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case kl:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case zl:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Hl:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Vl:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Gl:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Wl:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Xl:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case ql:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Yl:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case jl:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Kl:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Zl:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Pa:case $l:case Jl:return Math.ceil(s/4)*Math.ceil(e/4)*16;case yf:case Ql:return Math.ceil(s/4)*Math.ceil(e/4)*8;case eh:case th:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function jv(s){switch(s){case Yi:case df:return{byteLength:1,components:1};case vo:case ff:case Uo:return{byteLength:2,components:1};case Ah:case Rh:return{byteLength:2,components:4};case Ps:case Eh:case ri:return{byteLength:4,components:1};case pf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function Kv(s,e,t,n,i,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new re,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,y){return f?new OffscreenCanvas(b,y):So("canvas")}function _(b,y,N){let X=1;const Q=le(b);if((Q.width>N||Q.height>N)&&(X=N/Math.max(Q.width,Q.height)),X<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const q=Math.floor(X*Q.width),Ae=Math.floor(X*Q.height);u===void 0&&(u=g(q,Ae));const ue=y?g(q,Ae):u;return ue.width=q,ue.height=Ae,ue.getContext("2d").drawImage(b,0,0,q,Ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+q+"x"+Ae+")."),ue}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),b;return b}function m(b){return b.generateMipmaps}function p(b){s.generateMipmap(b)}function w(b){return b.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?s.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function S(b,y,N,X,Q=!1){if(b!==null){if(s[b]!==void 0)return s[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let q=y;if(y===s.RED&&(N===s.FLOAT&&(q=s.R32F),N===s.HALF_FLOAT&&(q=s.R16F),N===s.UNSIGNED_BYTE&&(q=s.R8)),y===s.RED_INTEGER&&(N===s.UNSIGNED_BYTE&&(q=s.R8UI),N===s.UNSIGNED_SHORT&&(q=s.R16UI),N===s.UNSIGNED_INT&&(q=s.R32UI),N===s.BYTE&&(q=s.R8I),N===s.SHORT&&(q=s.R16I),N===s.INT&&(q=s.R32I)),y===s.RG&&(N===s.FLOAT&&(q=s.RG32F),N===s.HALF_FLOAT&&(q=s.RG16F),N===s.UNSIGNED_BYTE&&(q=s.RG8)),y===s.RG_INTEGER&&(N===s.UNSIGNED_BYTE&&(q=s.RG8UI),N===s.UNSIGNED_SHORT&&(q=s.RG16UI),N===s.UNSIGNED_INT&&(q=s.RG32UI),N===s.BYTE&&(q=s.RG8I),N===s.SHORT&&(q=s.RG16I),N===s.INT&&(q=s.RG32I)),y===s.RGB_INTEGER&&(N===s.UNSIGNED_BYTE&&(q=s.RGB8UI),N===s.UNSIGNED_SHORT&&(q=s.RGB16UI),N===s.UNSIGNED_INT&&(q=s.RGB32UI),N===s.BYTE&&(q=s.RGB8I),N===s.SHORT&&(q=s.RGB16I),N===s.INT&&(q=s.RGB32I)),y===s.RGBA_INTEGER&&(N===s.UNSIGNED_BYTE&&(q=s.RGBA8UI),N===s.UNSIGNED_SHORT&&(q=s.RGBA16UI),N===s.UNSIGNED_INT&&(q=s.RGBA32UI),N===s.BYTE&&(q=s.RGBA8I),N===s.SHORT&&(q=s.RGBA16I),N===s.INT&&(q=s.RGBA32I)),y===s.RGB&&N===s.UNSIGNED_INT_5_9_9_9_REV&&(q=s.RGB9_E5),y===s.RGBA){const Ae=Q?ac:ot.getTransfer(X);N===s.FLOAT&&(q=s.RGBA32F),N===s.HALF_FLOAT&&(q=s.RGBA16F),N===s.UNSIGNED_BYTE&&(q=Ae===St?s.SRGB8_ALPHA8:s.RGBA8),N===s.UNSIGNED_SHORT_4_4_4_4&&(q=s.RGBA4),N===s.UNSIGNED_SHORT_5_5_5_1&&(q=s.RGB5_A1)}return(q===s.R16F||q===s.R32F||q===s.RG16F||q===s.RG32F||q===s.RGBA16F||q===s.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function x(b,y){let N;return b?y===null||y===Ps||y===_r?N=s.DEPTH24_STENCIL8:y===ri?N=s.DEPTH32F_STENCIL8:y===vo&&(N=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Ps||y===_r?N=s.DEPTH_COMPONENT24:y===ri?N=s.DEPTH_COMPONENT32F:y===vo&&(N=s.DEPTH_COMPONENT16),N}function L(b,y){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==_n&&b.minFilter!==Nn?Math.log2(Math.max(y.width,y.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?y.mipmaps.length:1}function R(b){const y=b.target;y.removeEventListener("dispose",R),T(y),y.isVideoTexture&&h.delete(y)}function I(b){const y=b.target;y.removeEventListener("dispose",I),M(y)}function T(b){const y=n.get(b);if(y.__webglInit===void 0)return;const N=b.source,X=d.get(N);if(X){const Q=X[y.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&v(b),Object.keys(X).length===0&&d.delete(N)}n.remove(b)}function v(b){const y=n.get(b);s.deleteTexture(y.__webglTexture);const N=b.source,X=d.get(N);delete X[y.__cacheKey],o.memory.textures--}function M(b){const y=n.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),n.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(y.__webglFramebuffer[X]))for(let Q=0;Q<y.__webglFramebuffer[X].length;Q++)s.deleteFramebuffer(y.__webglFramebuffer[X][Q]);else s.deleteFramebuffer(y.__webglFramebuffer[X]);y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer[X])}else{if(Array.isArray(y.__webglFramebuffer))for(let X=0;X<y.__webglFramebuffer.length;X++)s.deleteFramebuffer(y.__webglFramebuffer[X]);else s.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&s.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let X=0;X<y.__webglColorRenderbuffer.length;X++)y.__webglColorRenderbuffer[X]&&s.deleteRenderbuffer(y.__webglColorRenderbuffer[X]);y.__webglDepthRenderbuffer&&s.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const N=b.textures;for(let X=0,Q=N.length;X<Q;X++){const q=n.get(N[X]);q.__webglTexture&&(s.deleteTexture(q.__webglTexture),o.memory.textures--),n.remove(N[X])}n.remove(b)}let C=0;function z(){C=0}function O(){const b=C;return b>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+i.maxTextures),C+=1,b}function B(b){const y=[];return y.push(b.wrapS),y.push(b.wrapT),y.push(b.wrapR||0),y.push(b.magFilter),y.push(b.minFilter),y.push(b.anisotropy),y.push(b.internalFormat),y.push(b.format),y.push(b.type),y.push(b.generateMipmaps),y.push(b.premultiplyAlpha),y.push(b.flipY),y.push(b.unpackAlignment),y.push(b.colorSpace),y.join()}function W(b,y){const N=n.get(b);if(b.isVideoTexture&&J(b),b.isRenderTargetTexture===!1&&b.version>0&&N.__version!==b.version){const X=b.image;if(X===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(N,b,y);return}}t.bindTexture(s.TEXTURE_2D,N.__webglTexture,s.TEXTURE0+y)}function k(b,y){const N=n.get(b);if(b.version>0&&N.__version!==b.version){j(N,b,y);return}t.bindTexture(s.TEXTURE_2D_ARRAY,N.__webglTexture,s.TEXTURE0+y)}function K(b,y){const N=n.get(b);if(b.version>0&&N.__version!==b.version){j(N,b,y);return}t.bindTexture(s.TEXTURE_3D,N.__webglTexture,s.TEXTURE0+y)}function H(b,y){const N=n.get(b);if(b.version>0&&N.__version!==b.version){ie(N,b,y);return}t.bindTexture(s.TEXTURE_CUBE_MAP,N.__webglTexture,s.TEXTURE0+y)}const ce={[Cs]:s.REPEAT,[Si]:s.CLAMP_TO_EDGE,[Va]:s.MIRRORED_REPEAT},fe={[_n]:s.NEAREST,[uf]:s.NEAREST_MIPMAP_NEAREST,[Qr]:s.NEAREST_MIPMAP_LINEAR,[Nn]:s.LINEAR,[Ta]:s.LINEAR_MIPMAP_NEAREST,[Hi]:s.LINEAR_MIPMAP_LINEAR},pe={[Em]:s.NEVER,[Lm]:s.ALWAYS,[Am]:s.LESS,[wf]:s.LEQUAL,[Rm]:s.EQUAL,[Im]:s.GEQUAL,[Cm]:s.GREATER,[Pm]:s.NOTEQUAL};function Re(b,y){if(y.type===ri&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Nn||y.magFilter===Ta||y.magFilter===Qr||y.magFilter===Hi||y.minFilter===Nn||y.minFilter===Ta||y.minFilter===Qr||y.minFilter===Hi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(b,s.TEXTURE_WRAP_S,ce[y.wrapS]),s.texParameteri(b,s.TEXTURE_WRAP_T,ce[y.wrapT]),(b===s.TEXTURE_3D||b===s.TEXTURE_2D_ARRAY)&&s.texParameteri(b,s.TEXTURE_WRAP_R,ce[y.wrapR]),s.texParameteri(b,s.TEXTURE_MAG_FILTER,fe[y.magFilter]),s.texParameteri(b,s.TEXTURE_MIN_FILTER,fe[y.minFilter]),y.compareFunction&&(s.texParameteri(b,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(b,s.TEXTURE_COMPARE_FUNC,pe[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===_n||y.minFilter!==Qr&&y.minFilter!==Hi||y.type===ri&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const N=e.get("EXT_texture_filter_anisotropic");s.texParameterf(b,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function tt(b,y){let N=!1;b.__webglInit===void 0&&(b.__webglInit=!0,y.addEventListener("dispose",R));const X=y.source;let Q=d.get(X);Q===void 0&&(Q={},d.set(X,Q));const q=B(y);if(q!==b.__cacheKey){Q[q]===void 0&&(Q[q]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,N=!0),Q[q].usedTimes++;const Ae=Q[b.__cacheKey];Ae!==void 0&&(Q[b.__cacheKey].usedTimes--,Ae.usedTimes===0&&v(y)),b.__cacheKey=q,b.__webglTexture=Q[q].texture}return N}function j(b,y,N){let X=s.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(X=s.TEXTURE_2D_ARRAY),y.isData3DTexture&&(X=s.TEXTURE_3D);const Q=tt(b,y),q=y.source;t.bindTexture(X,b.__webglTexture,s.TEXTURE0+N);const Ae=n.get(q);if(q.version!==Ae.__version||Q===!0){t.activeTexture(s.TEXTURE0+N);const ue=ot.getPrimaries(ot.workingColorSpace),Ee=y.colorSpace===ls?null:ot.getPrimaries(y.colorSpace),it=y.colorSpace===ls||ue===Ee?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,it);let oe=_(y.image,!1,i.maxTextureSize);oe=ve(y,oe);const Ce=r.convert(y.format,y.colorSpace),Ge=r.convert(y.type);let We=S(y.internalFormat,Ce,Ge,y.colorSpace,y.isVideoTexture);Re(X,y);let Pe;const ct=y.mipmaps,Qe=y.isVideoTexture!==!0,Et=Ae.__version===void 0||Q===!0,D=q.dataReady,_e=L(y,oe);if(y.isDepthTexture)We=x(y.format===xr,y.type),Et&&(Qe?t.texStorage2D(s.TEXTURE_2D,1,We,oe.width,oe.height):t.texImage2D(s.TEXTURE_2D,0,We,oe.width,oe.height,0,Ce,Ge,null));else if(y.isDataTexture)if(ct.length>0){Qe&&Et&&t.texStorage2D(s.TEXTURE_2D,_e,We,ct[0].width,ct[0].height);for(let Y=0,ne=ct.length;Y<ne;Y++)Pe=ct[Y],Qe?D&&t.texSubImage2D(s.TEXTURE_2D,Y,0,0,Pe.width,Pe.height,Ce,Ge,Pe.data):t.texImage2D(s.TEXTURE_2D,Y,We,Pe.width,Pe.height,0,Ce,Ge,Pe.data);y.generateMipmaps=!1}else Qe?(Et&&t.texStorage2D(s.TEXTURE_2D,_e,We,oe.width,oe.height),D&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,oe.width,oe.height,Ce,Ge,oe.data)):t.texImage2D(s.TEXTURE_2D,0,We,oe.width,oe.height,0,Ce,Ge,oe.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Qe&&Et&&t.texStorage3D(s.TEXTURE_2D_ARRAY,_e,We,ct[0].width,ct[0].height,oe.depth);for(let Y=0,ne=ct.length;Y<ne;Y++)if(Pe=ct[Y],y.format!==Gn)if(Ce!==null)if(Qe){if(D)if(y.layerUpdates.size>0){const we=fd(Pe.width,Pe.height,y.format,y.type);for(const ye of y.layerUpdates){const je=Pe.data.subarray(ye*we/Pe.data.BYTES_PER_ELEMENT,(ye+1)*we/Pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,ye,Pe.width,Pe.height,1,Ce,je)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,0,Pe.width,Pe.height,oe.depth,Ce,Pe.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Y,We,Pe.width,Pe.height,oe.depth,0,Pe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Qe?D&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,0,Pe.width,Pe.height,oe.depth,Ce,Ge,Pe.data):t.texImage3D(s.TEXTURE_2D_ARRAY,Y,We,Pe.width,Pe.height,oe.depth,0,Ce,Ge,Pe.data)}else{Qe&&Et&&t.texStorage2D(s.TEXTURE_2D,_e,We,ct[0].width,ct[0].height);for(let Y=0,ne=ct.length;Y<ne;Y++)Pe=ct[Y],y.format!==Gn?Ce!==null?Qe?D&&t.compressedTexSubImage2D(s.TEXTURE_2D,Y,0,0,Pe.width,Pe.height,Ce,Pe.data):t.compressedTexImage2D(s.TEXTURE_2D,Y,We,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qe?D&&t.texSubImage2D(s.TEXTURE_2D,Y,0,0,Pe.width,Pe.height,Ce,Ge,Pe.data):t.texImage2D(s.TEXTURE_2D,Y,We,Pe.width,Pe.height,0,Ce,Ge,Pe.data)}else if(y.isDataArrayTexture)if(Qe){if(Et&&t.texStorage3D(s.TEXTURE_2D_ARRAY,_e,We,oe.width,oe.height,oe.depth),D)if(y.layerUpdates.size>0){const Y=fd(oe.width,oe.height,y.format,y.type);for(const ne of y.layerUpdates){const we=oe.data.subarray(ne*Y/oe.data.BYTES_PER_ELEMENT,(ne+1)*Y/oe.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ne,oe.width,oe.height,1,Ce,Ge,we)}y.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,Ce,Ge,oe.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,We,oe.width,oe.height,oe.depth,0,Ce,Ge,oe.data);else if(y.isData3DTexture)Qe?(Et&&t.texStorage3D(s.TEXTURE_3D,_e,We,oe.width,oe.height,oe.depth),D&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,Ce,Ge,oe.data)):t.texImage3D(s.TEXTURE_3D,0,We,oe.width,oe.height,oe.depth,0,Ce,Ge,oe.data);else if(y.isFramebufferTexture){if(Et)if(Qe)t.texStorage2D(s.TEXTURE_2D,_e,We,oe.width,oe.height);else{let Y=oe.width,ne=oe.height;for(let we=0;we<_e;we++)t.texImage2D(s.TEXTURE_2D,we,We,Y,ne,0,Ce,Ge,null),Y>>=1,ne>>=1}}else if(ct.length>0){if(Qe&&Et){const Y=le(ct[0]);t.texStorage2D(s.TEXTURE_2D,_e,We,Y.width,Y.height)}for(let Y=0,ne=ct.length;Y<ne;Y++)Pe=ct[Y],Qe?D&&t.texSubImage2D(s.TEXTURE_2D,Y,0,0,Ce,Ge,Pe):t.texImage2D(s.TEXTURE_2D,Y,We,Ce,Ge,Pe);y.generateMipmaps=!1}else if(Qe){if(Et){const Y=le(oe);t.texStorage2D(s.TEXTURE_2D,_e,We,Y.width,Y.height)}D&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ce,Ge,oe)}else t.texImage2D(s.TEXTURE_2D,0,We,Ce,Ge,oe);m(y)&&p(X),Ae.__version=q.version,y.onUpdate&&y.onUpdate(y)}b.__version=y.version}function ie(b,y,N){if(y.image.length!==6)return;const X=tt(b,y),Q=y.source;t.bindTexture(s.TEXTURE_CUBE_MAP,b.__webglTexture,s.TEXTURE0+N);const q=n.get(Q);if(Q.version!==q.__version||X===!0){t.activeTexture(s.TEXTURE0+N);const Ae=ot.getPrimaries(ot.workingColorSpace),ue=y.colorSpace===ls?null:ot.getPrimaries(y.colorSpace),Ee=y.colorSpace===ls||Ae===ue?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);const it=y.isCompressedTexture||y.image[0].isCompressedTexture,oe=y.image[0]&&y.image[0].isDataTexture,Ce=[];for(let ne=0;ne<6;ne++)!it&&!oe?Ce[ne]=_(y.image[ne],!0,i.maxCubemapSize):Ce[ne]=oe?y.image[ne].image:y.image[ne],Ce[ne]=ve(y,Ce[ne]);const Ge=Ce[0],We=r.convert(y.format,y.colorSpace),Pe=r.convert(y.type),ct=S(y.internalFormat,We,Pe,y.colorSpace),Qe=y.isVideoTexture!==!0,Et=q.__version===void 0||X===!0,D=Q.dataReady;let _e=L(y,Ge);Re(s.TEXTURE_CUBE_MAP,y);let Y;if(it){Qe&&Et&&t.texStorage2D(s.TEXTURE_CUBE_MAP,_e,ct,Ge.width,Ge.height);for(let ne=0;ne<6;ne++){Y=Ce[ne].mipmaps;for(let we=0;we<Y.length;we++){const ye=Y[we];y.format!==Gn?We!==null?Qe?D&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,we,0,0,ye.width,ye.height,We,ye.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,we,ct,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Qe?D&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,we,0,0,ye.width,ye.height,We,Pe,ye.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,we,ct,ye.width,ye.height,0,We,Pe,ye.data)}}}else{if(Y=y.mipmaps,Qe&&Et){Y.length>0&&_e++;const ne=le(Ce[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,_e,ct,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(oe){Qe?D&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Ce[ne].width,Ce[ne].height,We,Pe,Ce[ne].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,ct,Ce[ne].width,Ce[ne].height,0,We,Pe,Ce[ne].data);for(let we=0;we<Y.length;we++){const je=Y[we].image[ne].image;Qe?D&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,we+1,0,0,je.width,je.height,We,Pe,je.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,we+1,ct,je.width,je.height,0,We,Pe,je.data)}}else{Qe?D&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,We,Pe,Ce[ne]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,ct,We,Pe,Ce[ne]);for(let we=0;we<Y.length;we++){const ye=Y[we];Qe?D&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,we+1,0,0,We,Pe,ye.image[ne]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,we+1,ct,We,Pe,ye.image[ne])}}}m(y)&&p(s.TEXTURE_CUBE_MAP),q.__version=Q.version,y.onUpdate&&y.onUpdate(y)}b.__version=y.version}function xe(b,y,N,X,Q,q){const Ae=r.convert(N.format,N.colorSpace),ue=r.convert(N.type),Ee=S(N.internalFormat,Ae,ue,N.colorSpace),it=n.get(y),oe=n.get(N);if(oe.__renderTarget=y,!it.__hasExternalTextures){const Ce=Math.max(1,y.width>>q),Ge=Math.max(1,y.height>>q);Q===s.TEXTURE_3D||Q===s.TEXTURE_2D_ARRAY?t.texImage3D(Q,q,Ee,Ce,Ge,y.depth,0,Ae,ue,null):t.texImage2D(Q,q,Ee,Ce,Ge,0,Ae,ue,null)}t.bindFramebuffer(s.FRAMEBUFFER,b),Se(y)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,X,Q,oe.__webglTexture,0,te(y)):(Q===s.TEXTURE_2D||Q>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,X,Q,oe.__webglTexture,q),t.bindFramebuffer(s.FRAMEBUFFER,null)}function ae(b,y,N){if(s.bindRenderbuffer(s.RENDERBUFFER,b),y.depthBuffer){const X=y.depthTexture,Q=X&&X.isDepthTexture?X.type:null,q=x(y.stencilBuffer,Q),Ae=y.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ue=te(y);Se(y)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ue,q,y.width,y.height):N?s.renderbufferStorageMultisample(s.RENDERBUFFER,ue,q,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,q,y.width,y.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ae,s.RENDERBUFFER,b)}else{const X=y.textures;for(let Q=0;Q<X.length;Q++){const q=X[Q],Ae=r.convert(q.format,q.colorSpace),ue=r.convert(q.type),Ee=S(q.internalFormat,Ae,ue,q.colorSpace),it=te(y);N&&Se(y)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,it,Ee,y.width,y.height):Se(y)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,it,Ee,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,Ee,y.width,y.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ie(b,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,b),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const X=n.get(y.depthTexture);X.__renderTarget=y,(!X.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),W(y.depthTexture,0);const Q=X.__webglTexture,q=te(y);if(y.depthTexture.format===hr)Se(y)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Q,0,q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Q,0);else if(y.depthTexture.format===xr)Se(y)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Q,0,q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function De(b){const y=n.get(b),N=b.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==b.depthTexture){const X=b.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),X){const Q=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,X.removeEventListener("dispose",Q)};X.addEventListener("dispose",Q),y.__depthDisposeCallback=Q}y.__boundDepthTexture=X}if(b.depthTexture&&!y.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");Ie(y.__webglFramebuffer,b)}else if(N){y.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(t.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[X]),y.__webglDepthbuffer[X]===void 0)y.__webglDepthbuffer[X]=s.createRenderbuffer(),ae(y.__webglDepthbuffer[X],b,!1);else{const Q=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,q=y.__webglDepthbuffer[X];s.bindRenderbuffer(s.RENDERBUFFER,q),s.framebufferRenderbuffer(s.FRAMEBUFFER,Q,s.RENDERBUFFER,q)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=s.createRenderbuffer(),ae(y.__webglDepthbuffer,b,!1);else{const X=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Q=y.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Q),s.framebufferRenderbuffer(s.FRAMEBUFFER,X,s.RENDERBUFFER,Q)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function ke(b,y,N){const X=n.get(b);y!==void 0&&xe(X.__webglFramebuffer,b,b.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),N!==void 0&&De(b)}function Je(b){const y=b.texture,N=n.get(b),X=n.get(y);b.addEventListener("dispose",I);const Q=b.textures,q=b.isWebGLCubeRenderTarget===!0,Ae=Q.length>1;if(Ae||(X.__webglTexture===void 0&&(X.__webglTexture=s.createTexture()),X.__version=y.version,o.memory.textures++),q){N.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(y.mipmaps&&y.mipmaps.length>0){N.__webglFramebuffer[ue]=[];for(let Ee=0;Ee<y.mipmaps.length;Ee++)N.__webglFramebuffer[ue][Ee]=s.createFramebuffer()}else N.__webglFramebuffer[ue]=s.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){N.__webglFramebuffer=[];for(let ue=0;ue<y.mipmaps.length;ue++)N.__webglFramebuffer[ue]=s.createFramebuffer()}else N.__webglFramebuffer=s.createFramebuffer();if(Ae)for(let ue=0,Ee=Q.length;ue<Ee;ue++){const it=n.get(Q[ue]);it.__webglTexture===void 0&&(it.__webglTexture=s.createTexture(),o.memory.textures++)}if(b.samples>0&&Se(b)===!1){N.__webglMultisampledFramebuffer=s.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let ue=0;ue<Q.length;ue++){const Ee=Q[ue];N.__webglColorRenderbuffer[ue]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,N.__webglColorRenderbuffer[ue]);const it=r.convert(Ee.format,Ee.colorSpace),oe=r.convert(Ee.type),Ce=S(Ee.internalFormat,it,oe,Ee.colorSpace,b.isXRRenderTarget===!0),Ge=te(b);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ge,Ce,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ue,s.RENDERBUFFER,N.__webglColorRenderbuffer[ue])}s.bindRenderbuffer(s.RENDERBUFFER,null),b.depthBuffer&&(N.__webglDepthRenderbuffer=s.createRenderbuffer(),ae(N.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(q){t.bindTexture(s.TEXTURE_CUBE_MAP,X.__webglTexture),Re(s.TEXTURE_CUBE_MAP,y);for(let ue=0;ue<6;ue++)if(y.mipmaps&&y.mipmaps.length>0)for(let Ee=0;Ee<y.mipmaps.length;Ee++)xe(N.__webglFramebuffer[ue][Ee],b,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ee);else xe(N.__webglFramebuffer[ue],b,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);m(y)&&p(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ae){for(let ue=0,Ee=Q.length;ue<Ee;ue++){const it=Q[ue],oe=n.get(it);t.bindTexture(s.TEXTURE_2D,oe.__webglTexture),Re(s.TEXTURE_2D,it),xe(N.__webglFramebuffer,b,it,s.COLOR_ATTACHMENT0+ue,s.TEXTURE_2D,0),m(it)&&p(s.TEXTURE_2D)}t.unbindTexture()}else{let ue=s.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(ue=b.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ue,X.__webglTexture),Re(ue,y),y.mipmaps&&y.mipmaps.length>0)for(let Ee=0;Ee<y.mipmaps.length;Ee++)xe(N.__webglFramebuffer[Ee],b,y,s.COLOR_ATTACHMENT0,ue,Ee);else xe(N.__webglFramebuffer,b,y,s.COLOR_ATTACHMENT0,ue,0);m(y)&&p(ue),t.unbindTexture()}b.depthBuffer&&De(b)}function $(b){const y=b.textures;for(let N=0,X=y.length;N<X;N++){const Q=y[N];if(m(Q)){const q=w(b),Ae=n.get(Q).__webglTexture;t.bindTexture(q,Ae),p(q),t.unbindTexture()}}}const se=[],P=[];function be(b){if(b.samples>0){if(Se(b)===!1){const y=b.textures,N=b.width,X=b.height;let Q=s.COLOR_BUFFER_BIT;const q=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ae=n.get(b),ue=y.length>1;if(ue)for(let Ee=0;Ee<y.length;Ee++)t.bindFramebuffer(s.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ee,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Ae.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ee,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let Ee=0;Ee<y.length;Ee++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(Q|=s.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(Q|=s.STENCIL_BUFFER_BIT)),ue){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ae.__webglColorRenderbuffer[Ee]);const it=n.get(y[Ee]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,it,0)}s.blitFramebuffer(0,0,N,X,0,0,N,X,Q,s.NEAREST),c===!0&&(se.length=0,P.length=0,se.push(s.COLOR_ATTACHMENT0+Ee),b.depthBuffer&&b.resolveDepthBuffer===!1&&(se.push(q),P.push(q),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,P)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,se))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ue)for(let Ee=0;Ee<y.length;Ee++){t.bindFramebuffer(s.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ee,s.RENDERBUFFER,Ae.__webglColorRenderbuffer[Ee]);const it=n.get(y[Ee]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Ae.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ee,s.TEXTURE_2D,it,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&c){const y=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[y])}}}function te(b){return Math.min(i.maxSamples,b.samples)}function Se(b){const y=n.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function J(b){const y=o.render.frame;h.get(b)!==y&&(h.set(b,y),b.update())}function ve(b,y){const N=b.colorSpace,X=b.format,Q=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||N!==Tn&&N!==ls&&(ot.getTransfer(N)===St?(X!==Gn||Q!==Yi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),y}function le(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(l.width=b.naturalWidth||b.width,l.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(l.width=b.displayWidth,l.height=b.displayHeight):(l.width=b.width,l.height=b.height),l}this.allocateTextureUnit=O,this.resetTextureUnits=z,this.setTexture2D=W,this.setTexture2DArray=k,this.setTexture3D=K,this.setTextureCube=H,this.rebindTextures=ke,this.setupRenderTarget=Je,this.updateRenderTargetMipmap=$,this.updateMultisampleRenderTarget=be,this.setupDepthRenderbuffer=De,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=Se}function Zv(s,e){function t(n,i=ls){let r;const o=ot.getTransfer(i);if(n===Yi)return s.UNSIGNED_BYTE;if(n===Ah)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Rh)return s.UNSIGNED_SHORT_5_5_5_1;if(n===pf)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===df)return s.BYTE;if(n===ff)return s.SHORT;if(n===vo)return s.UNSIGNED_SHORT;if(n===Eh)return s.INT;if(n===Ps)return s.UNSIGNED_INT;if(n===ri)return s.FLOAT;if(n===Uo)return s.HALF_FLOAT;if(n===mf)return s.ALPHA;if(n===gf)return s.RGB;if(n===Gn)return s.RGBA;if(n===_f)return s.LUMINANCE;if(n===xf)return s.LUMINANCE_ALPHA;if(n===hr)return s.DEPTH_COMPONENT;if(n===xr)return s.DEPTH_STENCIL;if(n===Ch)return s.RED;if(n===Ph)return s.RED_INTEGER;if(n===vf)return s.RG;if(n===Ih)return s.RG_INTEGER;if(n===Lh)return s.RGBA_INTEGER;if(n===Ea||n===Aa||n===Ra||n===Ca)if(o===St)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ea)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Aa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ra)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ca)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ea)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Aa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ra)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ca)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Pl||n===Il||n===Ll||n===Dl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Pl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Il)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ll)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Dl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Nl||n===Ul||n===Fl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Nl||n===Ul)return o===St?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Fl)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ol||n===Bl||n===kl||n===zl||n===Hl||n===Vl||n===Gl||n===Wl||n===Xl||n===ql||n===Yl||n===jl||n===Kl||n===Zl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ol)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Bl)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===kl)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===zl)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Hl)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Vl)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Gl)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Wl)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Xl)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ql)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Yl)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===jl)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Kl)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Zl)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Pa||n===$l||n===Jl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Pa)return o===St?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===$l)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Jl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===yf||n===Ql||n===eh||n===th)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Pa)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ql)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===eh)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===th)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===_r?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}class $v extends Mn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class He extends Ot{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Jv={type:"move"};class el{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new He,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new He,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new He,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Jv)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new He;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Qv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ey=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class ty{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new Jt,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Ti({vertexShader:Qv,fragmentShader:ey,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Z(new Yt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ny extends Us{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null;const _=new ty,m=t.getContextAttributes();let p=null,w=null;const S=[],x=[],L=new re;let R=null;const I=new Mn;I.viewport=new dt;const T=new Mn;T.viewport=new dt;const v=[I,T],M=new $v;let C=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ie=S[j];return ie===void 0&&(ie=new el,S[j]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(j){let ie=S[j];return ie===void 0&&(ie=new el,S[j]=ie),ie.getGripSpace()},this.getHand=function(j){let ie=S[j];return ie===void 0&&(ie=new el,S[j]=ie),ie.getHandSpace()};function O(j){const ie=x.indexOf(j.inputSource);if(ie===-1)return;const xe=S[ie];xe!==void 0&&(xe.update(j.inputSource,j.frame,l||o),xe.dispatchEvent({type:j.type,data:j.inputSource}))}function B(){i.removeEventListener("select",O),i.removeEventListener("selectstart",O),i.removeEventListener("selectend",O),i.removeEventListener("squeeze",O),i.removeEventListener("squeezestart",O),i.removeEventListener("squeezeend",O),i.removeEventListener("end",B),i.removeEventListener("inputsourceschange",W);for(let j=0;j<S.length;j++){const ie=x[j];ie!==null&&(x[j]=null,S[j].disconnect(ie))}C=null,z=null,_.reset(),e.setRenderTarget(p),f=null,d=null,u=null,i=null,w=null,tt.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(j){l=j},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(j){if(i=j,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",O),i.addEventListener("selectstart",O),i.addEventListener("selectend",O),i.addEventListener("squeeze",O),i.addEventListener("squeezestart",O),i.addEventListener("squeezeend",O),i.addEventListener("end",B),i.addEventListener("inputsourceschange",W),m.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(L),i.renderState.layers===void 0){const ie={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,ie),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),w=new Is(f.framebufferWidth,f.framebufferHeight,{format:Gn,type:Yi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ie=null,xe=null,ae=null;m.depth&&(ae=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=m.stencil?xr:hr,xe=m.stencil?_r:Ps);const Ie={colorFormat:t.RGBA8,depthFormat:ae,scaleFactor:r};u=new XRWebGLBinding(i,t),d=u.createProjectionLayer(Ie),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),w=new Is(d.textureWidth,d.textureHeight,{format:Gn,type:Yi,depthTexture:new Uf(d.textureWidth,d.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),tt.setContext(i),tt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function W(j){for(let ie=0;ie<j.removed.length;ie++){const xe=j.removed[ie],ae=x.indexOf(xe);ae>=0&&(x[ae]=null,S[ae].disconnect(xe))}for(let ie=0;ie<j.added.length;ie++){const xe=j.added[ie];let ae=x.indexOf(xe);if(ae===-1){for(let De=0;De<S.length;De++)if(De>=x.length){x.push(xe),ae=De;break}else if(x[De]===null){x[De]=xe,ae=De;break}if(ae===-1)break}const Ie=S[ae];Ie&&Ie.connect(xe)}}const k=new A,K=new A;function H(j,ie,xe){k.setFromMatrixPosition(ie.matrixWorld),K.setFromMatrixPosition(xe.matrixWorld);const ae=k.distanceTo(K),Ie=ie.projectionMatrix.elements,De=xe.projectionMatrix.elements,ke=Ie[14]/(Ie[10]-1),Je=Ie[14]/(Ie[10]+1),$=(Ie[9]+1)/Ie[5],se=(Ie[9]-1)/Ie[5],P=(Ie[8]-1)/Ie[0],be=(De[8]+1)/De[0],te=ke*P,Se=ke*be,J=ae/(-P+be),ve=J*-P;if(ie.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(ve),j.translateZ(J),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Ie[10]===-1)j.projectionMatrix.copy(ie.projectionMatrix),j.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const le=ke+J,b=Je+J,y=te-ve,N=Se+(ae-ve),X=$*Je/b*le,Q=se*Je/b*le;j.projectionMatrix.makePerspective(y,N,X,Q,le,b),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function ce(j,ie){ie===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ie.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(i===null)return;let ie=j.near,xe=j.far;_.texture!==null&&(_.depthNear>0&&(ie=_.depthNear),_.depthFar>0&&(xe=_.depthFar)),M.near=T.near=I.near=ie,M.far=T.far=I.far=xe,(C!==M.near||z!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),C=M.near,z=M.far),I.layers.mask=j.layers.mask|2,T.layers.mask=j.layers.mask|4,M.layers.mask=I.layers.mask|T.layers.mask;const ae=j.parent,Ie=M.cameras;ce(M,ae);for(let De=0;De<Ie.length;De++)ce(Ie[De],ae);Ie.length===2?H(M,I,T):M.projectionMatrix.copy(I.projectionMatrix),fe(j,M,ae)};function fe(j,ie,xe){xe===null?j.matrix.copy(ie.matrixWorld):(j.matrix.copy(xe.matrixWorld),j.matrix.invert(),j.matrix.multiply(ie.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ie.projectionMatrix),j.projectionMatrixInverse.copy(ie.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=vr*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(j){c=j,d!==null&&(d.fixedFoveation=j),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=j)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let pe=null;function Re(j,ie){if(h=ie.getViewerPose(l||o),g=ie,h!==null){const xe=h.views;f!==null&&(e.setRenderTargetFramebuffer(w,f.framebuffer),e.setRenderTarget(w));let ae=!1;xe.length!==M.cameras.length&&(M.cameras.length=0,ae=!0);for(let De=0;De<xe.length;De++){const ke=xe[De];let Je=null;if(f!==null)Je=f.getViewport(ke);else{const se=u.getViewSubImage(d,ke);Je=se.viewport,De===0&&(e.setRenderTargetTextures(w,se.colorTexture,d.ignoreDepthValues?void 0:se.depthStencilTexture),e.setRenderTarget(w))}let $=v[De];$===void 0&&($=new Mn,$.layers.enable(De),$.viewport=new dt,v[De]=$),$.matrix.fromArray(ke.transform.matrix),$.matrix.decompose($.position,$.quaternion,$.scale),$.projectionMatrix.fromArray(ke.projectionMatrix),$.projectionMatrixInverse.copy($.projectionMatrix).invert(),$.viewport.set(Je.x,Je.y,Je.width,Je.height),De===0&&(M.matrix.copy($.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ae===!0&&M.cameras.push($)}const Ie=i.enabledFeatures;if(Ie&&Ie.includes("depth-sensing")){const De=u.getDepthInformation(xe[0]);De&&De.isValid&&De.texture&&_.init(e,De,i.renderState)}}for(let xe=0;xe<S.length;xe++){const ae=x[xe],Ie=S[xe];ae!==null&&Ie!==void 0&&Ie.update(ae,ie,l||o)}pe&&pe(j,ie),ie.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ie}),g=null}const tt=new Nf;tt.setAnimationLoop(Re),this.setAnimationLoop=function(j){pe=j},this.dispose=function(){}}}const Ms=new bi,iy=new Ye;function sy(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Pf(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,w,S,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,w,S):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===gn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===gn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const w=e.get(p),S=w.envMap,x=w.envMapRotation;S&&(m.envMap.value=S,Ms.copy(x),Ms.x*=-1,Ms.y*=-1,Ms.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Ms.y*=-1,Ms.z*=-1),m.envMapRotation.value.setFromMatrix4(iy.makeRotationFromEuler(Ms)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,w,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*w,m.scale.value=S*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,w){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===gn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const w=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function ry(s,e,t,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(w,S){const x=S.program;n.uniformBlockBinding(w,x)}function l(w,S){let x=i[w.id];x===void 0&&(g(w),x=h(w),i[w.id]=x,w.addEventListener("dispose",m));const L=S.program;n.updateUBOMapping(w,L);const R=e.render.frame;r[w.id]!==R&&(d(w),r[w.id]=R)}function h(w){const S=u();w.__bindingPointIndex=S;const x=s.createBuffer(),L=w.__size,R=w.usage;return s.bindBuffer(s.UNIFORM_BUFFER,x),s.bufferData(s.UNIFORM_BUFFER,L,R),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,S,x),x}function u(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(w){const S=i[w.id],x=w.uniforms,L=w.__cache;s.bindBuffer(s.UNIFORM_BUFFER,S);for(let R=0,I=x.length;R<I;R++){const T=Array.isArray(x[R])?x[R]:[x[R]];for(let v=0,M=T.length;v<M;v++){const C=T[v];if(f(C,R,v,L)===!0){const z=C.__offset,O=Array.isArray(C.value)?C.value:[C.value];let B=0;for(let W=0;W<O.length;W++){const k=O[W],K=_(k);typeof k=="number"||typeof k=="boolean"?(C.__data[0]=k,s.bufferSubData(s.UNIFORM_BUFFER,z+B,C.__data)):k.isMatrix3?(C.__data[0]=k.elements[0],C.__data[1]=k.elements[1],C.__data[2]=k.elements[2],C.__data[3]=0,C.__data[4]=k.elements[3],C.__data[5]=k.elements[4],C.__data[6]=k.elements[5],C.__data[7]=0,C.__data[8]=k.elements[6],C.__data[9]=k.elements[7],C.__data[10]=k.elements[8],C.__data[11]=0):(k.toArray(C.__data,B),B+=K.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,z,C.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(w,S,x,L){const R=w.value,I=S+"_"+x;if(L[I]===void 0)return typeof R=="number"||typeof R=="boolean"?L[I]=R:L[I]=R.clone(),!0;{const T=L[I];if(typeof R=="number"||typeof R=="boolean"){if(T!==R)return L[I]=R,!0}else if(T.equals(R)===!1)return T.copy(R),!0}return!1}function g(w){const S=w.uniforms;let x=0;const L=16;for(let I=0,T=S.length;I<T;I++){const v=Array.isArray(S[I])?S[I]:[S[I]];for(let M=0,C=v.length;M<C;M++){const z=v[M],O=Array.isArray(z.value)?z.value:[z.value];for(let B=0,W=O.length;B<W;B++){const k=O[B],K=_(k),H=x%L,ce=H%K.boundary,fe=H+ce;x+=ce,fe!==0&&L-fe<K.storage&&(x+=L-fe),z.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=x,x+=K.storage}}}const R=x%L;return R>0&&(x+=L-R),w.__size=x,w.__cache={},this}function _(w){const S={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(S.boundary=4,S.storage=4):w.isVector2?(S.boundary=8,S.storage=8):w.isVector3||w.isColor?(S.boundary=16,S.storage=12):w.isVector4?(S.boundary=16,S.storage=16):w.isMatrix3?(S.boundary=48,S.storage=48):w.isMatrix4?(S.boundary=64,S.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),S}function m(w){const S=w.target;S.removeEventListener("dispose",m);const x=o.indexOf(S.__bindingPointIndex);o.splice(x,1),s.deleteBuffer(i[S.id]),delete i[S.id],delete r[S.id]}function p(){for(const w in i)s.deleteBuffer(i[w]);o=[],i={},r={}}return{bind:c,update:l,dispose:p}}class oy{constructor(e={}){const{canvas:t=Km(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const w=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Bt,this.toneMapping=ds,this.toneMappingExposure=1;const x=this;let L=!1,R=0,I=0,T=null,v=-1,M=null;const C=new dt,z=new dt;let O=null;const B=new Be(0);let W=0,k=t.width,K=t.height,H=1,ce=null,fe=null;const pe=new dt(0,0,k,K),Re=new dt(0,0,k,K);let tt=!1;const j=new Oh;let ie=!1,xe=!1;const ae=new Ye,Ie=new Ye,De=new A,ke=new dt,Je={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let $=!1;function se(){return T===null?H:1}let P=n;function be(E,U){return t.getContext(E,U)}try{const E={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Th}`),t.addEventListener("webglcontextlost",ne,!1),t.addEventListener("webglcontextrestored",we,!1),t.addEventListener("webglcontextcreationerror",ye,!1),P===null){const U="webgl2";if(P=be(U,E),P===null)throw be(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let te,Se,J,ve,le,b,y,N,X,Q,q,Ae,ue,Ee,it,oe,Ce,Ge,We,Pe,ct,Qe,Et,D;function _e(){te=new ux(P),te.init(),Qe=new Zv(P,te),Se=new rx(P,te,e,Qe),J=new Yv(P,te),Se.reverseDepthBuffer&&d&&J.buffers.depth.setReversed(!0),ve=new px(P),le=new Lv,b=new Kv(P,te,J,le,Se,Qe,ve),y=new ax(x),N=new hx(x),X=new M0(P),Et=new ix(P,X),Q=new dx(P,X,ve,Et),q=new gx(P,Q,X,ve),We=new mx(P,Se,b),oe=new ox(le),Ae=new Iv(x,y,N,te,Se,Et,oe),ue=new sy(x,le),Ee=new Nv,it=new zv(te),Ge=new nx(x,y,N,J,q,f,c),Ce=new Xv(x,q,Se),D=new ry(P,ve,Se,J),Pe=new sx(P,te,ve),ct=new fx(P,te,ve),ve.programs=Ae.programs,x.capabilities=Se,x.extensions=te,x.properties=le,x.renderLists=Ee,x.shadowMap=Ce,x.state=J,x.info=ve}_e();const Y=new ny(x,P);this.xr=Y,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const E=te.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=te.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(E){E!==void 0&&(H=E,this.setSize(k,K,!1))},this.getSize=function(E){return E.set(k,K)},this.setSize=function(E,U,V=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=E,K=U,t.width=Math.floor(E*H),t.height=Math.floor(U*H),V===!0&&(t.style.width=E+"px",t.style.height=U+"px"),this.setViewport(0,0,E,U)},this.getDrawingBufferSize=function(E){return E.set(k*H,K*H).floor()},this.setDrawingBufferSize=function(E,U,V){k=E,K=U,H=V,t.width=Math.floor(E*V),t.height=Math.floor(U*V),this.setViewport(0,0,E,U)},this.getCurrentViewport=function(E){return E.copy(C)},this.getViewport=function(E){return E.copy(pe)},this.setViewport=function(E,U,V,G){E.isVector4?pe.set(E.x,E.y,E.z,E.w):pe.set(E,U,V,G),J.viewport(C.copy(pe).multiplyScalar(H).round())},this.getScissor=function(E){return E.copy(Re)},this.setScissor=function(E,U,V,G){E.isVector4?Re.set(E.x,E.y,E.z,E.w):Re.set(E,U,V,G),J.scissor(z.copy(Re).multiplyScalar(H).round())},this.getScissorTest=function(){return tt},this.setScissorTest=function(E){J.setScissorTest(tt=E)},this.setOpaqueSort=function(E){ce=E},this.setTransparentSort=function(E){fe=E},this.getClearColor=function(E){return E.copy(Ge.getClearColor())},this.setClearColor=function(){Ge.setClearColor.apply(Ge,arguments)},this.getClearAlpha=function(){return Ge.getClearAlpha()},this.setClearAlpha=function(){Ge.setClearAlpha.apply(Ge,arguments)},this.clear=function(E=!0,U=!0,V=!0){let G=0;if(E){let F=!1;if(T!==null){const he=T.texture.format;F=he===Lh||he===Ih||he===Ph}if(F){const he=T.texture.type,Me=he===Yi||he===Ps||he===vo||he===_r||he===Ah||he===Rh,Ne=Ge.getClearColor(),Ue=Ge.getClearAlpha(),Xe=Ne.r,Ke=Ne.g,Fe=Ne.b;Me?(g[0]=Xe,g[1]=Ke,g[2]=Fe,g[3]=Ue,P.clearBufferuiv(P.COLOR,0,g)):(_[0]=Xe,_[1]=Ke,_[2]=Fe,_[3]=Ue,P.clearBufferiv(P.COLOR,0,_))}else G|=P.COLOR_BUFFER_BIT}U&&(G|=P.DEPTH_BUFFER_BIT),V&&(G|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ne,!1),t.removeEventListener("webglcontextrestored",we,!1),t.removeEventListener("webglcontextcreationerror",ye,!1),Ee.dispose(),it.dispose(),le.dispose(),y.dispose(),N.dispose(),q.dispose(),Et.dispose(),D.dispose(),Ae.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",lu),Y.removeEventListener("sessionend",hu),ms.stop()};function ne(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function we(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const E=ve.autoReset,U=Ce.enabled,V=Ce.autoUpdate,G=Ce.needsUpdate,F=Ce.type;_e(),ve.autoReset=E,Ce.enabled=U,Ce.autoUpdate=V,Ce.needsUpdate=G,Ce.type=F}function ye(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function je(E){const U=E.target;U.removeEventListener("dispose",je),Ht(U)}function Ht(E){un(E),le.remove(E)}function un(E){const U=le.get(E).programs;U!==void 0&&(U.forEach(function(V){Ae.releaseProgram(V)}),E.isShaderMaterial&&Ae.releaseShaderCache(E))}this.renderBufferDirect=function(E,U,V,G,F,he){U===null&&(U=Je);const Me=F.isMesh&&F.matrixWorld.determinant()<0,Ne=Hp(E,U,V,G,F);J.setMaterial(G,Me);let Ue=V.index,Xe=1;if(G.wireframe===!0){if(Ue=Q.getWireframeAttribute(V),Ue===void 0)return;Xe=2}const Ke=V.drawRange,Fe=V.attributes.position;let ut=Ke.start*Xe,At=(Ke.start+Ke.count)*Xe;he!==null&&(ut=Math.max(ut,he.start*Xe),At=Math.min(At,(he.start+he.count)*Xe)),Ue!==null?(ut=Math.max(ut,0),At=Math.min(At,Ue.count)):Fe!=null&&(ut=Math.max(ut,0),At=Math.min(At,Fe.count));const Lt=At-ut;if(Lt<0||Lt===1/0)return;Et.setup(F,G,Ne,V,Ue);let En,pt=Pe;if(Ue!==null&&(En=X.get(Ue),pt=ct,pt.setIndex(En)),F.isMesh)G.wireframe===!0?(J.setLineWidth(G.wireframeLinewidth*se()),pt.setMode(P.LINES)):pt.setMode(P.TRIANGLES);else if(F.isLine){let Oe=G.linewidth;Oe===void 0&&(Oe=1),J.setLineWidth(Oe*se()),F.isLineSegments?pt.setMode(P.LINES):F.isLineLoop?pt.setMode(P.LINE_LOOP):pt.setMode(P.LINE_STRIP)}else F.isPoints?pt.setMode(P.POINTS):F.isSprite&&pt.setMode(P.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)pt.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(te.get("WEBGL_multi_draw"))pt.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Oe=F._multiDrawStarts,Pi=F._multiDrawCounts,mt=F._multiDrawCount,Zn=Ue?X.get(Ue).bytesPerElement:1,Os=le.get(G).currentProgram.getUniforms();for(let In=0;In<mt;In++)Os.setValue(P,"_gl_DrawID",In),pt.render(Oe[In]/Zn,Pi[In])}else if(F.isInstancedMesh)pt.renderInstances(ut,Lt,F.count);else if(V.isInstancedBufferGeometry){const Oe=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Pi=Math.min(V.instanceCount,Oe);pt.renderInstances(ut,Lt,Pi)}else pt.render(ut,Lt)};function yt(E,U,V){E.transparent===!0&&E.side===rn&&E.forceSinglePass===!1?(E.side=gn,E.needsUpdate=!0,Wo(E,U,V),E.side=qi,E.needsUpdate=!0,Wo(E,U,V),E.side=rn):Wo(E,U,V)}this.compile=function(E,U,V=null){V===null&&(V=E),p=it.get(V),p.init(U),S.push(p),V.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),E!==V&&E.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),p.setupLights();const G=new Set;return E.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const he=F.material;if(he)if(Array.isArray(he))for(let Me=0;Me<he.length;Me++){const Ne=he[Me];yt(Ne,V,F),G.add(Ne)}else yt(he,V,F),G.add(he)}),S.pop(),p=null,G},this.compileAsync=function(E,U,V=null){const G=this.compile(E,U,V);return new Promise(F=>{function he(){if(G.forEach(function(Me){le.get(Me).currentProgram.isReady()&&G.delete(Me)}),G.size===0){F(E);return}setTimeout(he,10)}te.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let Kn=null;function Ci(E){Kn&&Kn(E)}function lu(){ms.stop()}function hu(){ms.start()}const ms=new Nf;ms.setAnimationLoop(Ci),typeof self<"u"&&ms.setContext(self),this.setAnimationLoop=function(E){Kn=E,Y.setAnimationLoop(E),E===null?ms.stop():ms.start()},Y.addEventListener("sessionstart",lu),Y.addEventListener("sessionend",hu),this.render=function(E,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(U),U=Y.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,U,T),p=it.get(E,S.length),p.init(U),S.push(p),Ie.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),j.setFromProjectionMatrix(Ie),xe=this.localClippingEnabled,ie=oe.init(this.clippingPlanes,xe),m=Ee.get(E,w.length),m.init(),w.push(m),Y.enabled===!0&&Y.isPresenting===!0){const he=x.xr.getDepthSensingMesh();he!==null&&Ec(he,U,-1/0,x.sortObjects)}Ec(E,U,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(ce,fe),$=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,$&&Ge.addToRenderList(m,E),this.info.render.frame++,ie===!0&&oe.beginShadows();const V=p.state.shadowsArray;Ce.render(V,E,U),ie===!0&&oe.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=m.opaque,F=m.transmissive;if(p.setupLights(),U.isArrayCamera){const he=U.cameras;if(F.length>0)for(let Me=0,Ne=he.length;Me<Ne;Me++){const Ue=he[Me];du(G,F,E,Ue)}$&&Ge.render(E);for(let Me=0,Ne=he.length;Me<Ne;Me++){const Ue=he[Me];uu(m,E,Ue,Ue.viewport)}}else F.length>0&&du(G,F,E,U),$&&Ge.render(E),uu(m,E,U);T!==null&&(b.updateMultisampleRenderTarget(T),b.updateRenderTargetMipmap(T)),E.isScene===!0&&E.onAfterRender(x,E,U),Et.resetDefaultState(),v=-1,M=null,S.pop(),S.length>0?(p=S[S.length-1],ie===!0&&oe.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,w.pop(),w.length>0?m=w[w.length-1]:m=null};function Ec(E,U,V,G){if(E.visible===!1)return;if(E.layers.test(U.layers)){if(E.isGroup)V=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(U);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||j.intersectsSprite(E)){G&&ke.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Ie);const Me=q.update(E),Ne=E.material;Ne.visible&&m.push(E,Me,Ne,V,ke.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||j.intersectsObject(E))){const Me=q.update(E),Ne=E.material;if(G&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),ke.copy(E.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),ke.copy(Me.boundingSphere.center)),ke.applyMatrix4(E.matrixWorld).applyMatrix4(Ie)),Array.isArray(Ne)){const Ue=Me.groups;for(let Xe=0,Ke=Ue.length;Xe<Ke;Xe++){const Fe=Ue[Xe],ut=Ne[Fe.materialIndex];ut&&ut.visible&&m.push(E,Me,ut,V,ke.z,Fe)}}else Ne.visible&&m.push(E,Me,Ne,V,ke.z,null)}}const he=E.children;for(let Me=0,Ne=he.length;Me<Ne;Me++)Ec(he[Me],U,V,G)}function uu(E,U,V,G){const F=E.opaque,he=E.transmissive,Me=E.transparent;p.setupLightsView(V),ie===!0&&oe.setGlobalState(x.clippingPlanes,V),G&&J.viewport(C.copy(G)),F.length>0&&Go(F,U,V),he.length>0&&Go(he,U,V),Me.length>0&&Go(Me,U,V),J.buffers.depth.setTest(!0),J.buffers.depth.setMask(!0),J.buffers.color.setMask(!0),J.setPolygonOffset(!1)}function du(E,U,V,G){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[G.id]===void 0&&(p.state.transmissionRenderTarget[G.id]=new Is(1,1,{generateMipmaps:!0,type:te.has("EXT_color_buffer_half_float")||te.has("EXT_color_buffer_float")?Uo:Yi,minFilter:Hi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ot.workingColorSpace}));const he=p.state.transmissionRenderTarget[G.id],Me=G.viewport||C;he.setSize(Me.z,Me.w);const Ne=x.getRenderTarget();x.setRenderTarget(he),x.getClearColor(B),W=x.getClearAlpha(),W<1&&x.setClearColor(16777215,.5),x.clear(),$&&Ge.render(V);const Ue=x.toneMapping;x.toneMapping=ds;const Xe=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),p.setupLightsView(G),ie===!0&&oe.setGlobalState(x.clippingPlanes,G),Go(E,V,G),b.updateMultisampleRenderTarget(he),b.updateRenderTargetMipmap(he),te.has("WEBGL_multisampled_render_to_texture")===!1){let Ke=!1;for(let Fe=0,ut=U.length;Fe<ut;Fe++){const At=U[Fe],Lt=At.object,En=At.geometry,pt=At.material,Oe=At.group;if(pt.side===rn&&Lt.layers.test(G.layers)){const Pi=pt.side;pt.side=gn,pt.needsUpdate=!0,fu(Lt,V,G,En,pt,Oe),pt.side=Pi,pt.needsUpdate=!0,Ke=!0}}Ke===!0&&(b.updateMultisampleRenderTarget(he),b.updateRenderTargetMipmap(he))}x.setRenderTarget(Ne),x.setClearColor(B,W),Xe!==void 0&&(G.viewport=Xe),x.toneMapping=Ue}function Go(E,U,V){const G=U.isScene===!0?U.overrideMaterial:null;for(let F=0,he=E.length;F<he;F++){const Me=E[F],Ne=Me.object,Ue=Me.geometry,Xe=G===null?Me.material:G,Ke=Me.group;Ne.layers.test(V.layers)&&fu(Ne,U,V,Ue,Xe,Ke)}}function fu(E,U,V,G,F,he){E.onBeforeRender(x,U,V,G,F,he),E.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),F.onBeforeRender(x,U,V,G,E,he),F.transparent===!0&&F.side===rn&&F.forceSinglePass===!1?(F.side=gn,F.needsUpdate=!0,x.renderBufferDirect(V,U,G,F,E,he),F.side=qi,F.needsUpdate=!0,x.renderBufferDirect(V,U,G,F,E,he),F.side=rn):x.renderBufferDirect(V,U,G,F,E,he),E.onAfterRender(x,U,V,G,F,he)}function Wo(E,U,V){U.isScene!==!0&&(U=Je);const G=le.get(E),F=p.state.lights,he=p.state.shadowsArray,Me=F.state.version,Ne=Ae.getParameters(E,F.state,he,U,V),Ue=Ae.getProgramCacheKey(Ne);let Xe=G.programs;G.environment=E.isMeshStandardMaterial?U.environment:null,G.fog=U.fog,G.envMap=(E.isMeshStandardMaterial?N:y).get(E.envMap||G.environment),G.envMapRotation=G.environment!==null&&E.envMap===null?U.environmentRotation:E.envMapRotation,Xe===void 0&&(E.addEventListener("dispose",je),Xe=new Map,G.programs=Xe);let Ke=Xe.get(Ue);if(Ke!==void 0){if(G.currentProgram===Ke&&G.lightsStateVersion===Me)return mu(E,Ne),Ke}else Ne.uniforms=Ae.getUniforms(E),E.onBeforeCompile(Ne,x),Ke=Ae.acquireProgram(Ne,Ue),Xe.set(Ue,Ke),G.uniforms=Ne.uniforms;const Fe=G.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Fe.clippingPlanes=oe.uniform),mu(E,Ne),G.needsLights=Gp(E),G.lightsStateVersion=Me,G.needsLights&&(Fe.ambientLightColor.value=F.state.ambient,Fe.lightProbe.value=F.state.probe,Fe.directionalLights.value=F.state.directional,Fe.directionalLightShadows.value=F.state.directionalShadow,Fe.spotLights.value=F.state.spot,Fe.spotLightShadows.value=F.state.spotShadow,Fe.rectAreaLights.value=F.state.rectArea,Fe.ltc_1.value=F.state.rectAreaLTC1,Fe.ltc_2.value=F.state.rectAreaLTC2,Fe.pointLights.value=F.state.point,Fe.pointLightShadows.value=F.state.pointShadow,Fe.hemisphereLights.value=F.state.hemi,Fe.directionalShadowMap.value=F.state.directionalShadowMap,Fe.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Fe.spotShadowMap.value=F.state.spotShadowMap,Fe.spotLightMatrix.value=F.state.spotLightMatrix,Fe.spotLightMap.value=F.state.spotLightMap,Fe.pointShadowMap.value=F.state.pointShadowMap,Fe.pointShadowMatrix.value=F.state.pointShadowMatrix),G.currentProgram=Ke,G.uniformsList=null,Ke}function pu(E){if(E.uniformsList===null){const U=E.currentProgram.getUniforms();E.uniformsList=Ia.seqWithValue(U.seq,E.uniforms)}return E.uniformsList}function mu(E,U){const V=le.get(E);V.outputColorSpace=U.outputColorSpace,V.batching=U.batching,V.batchingColor=U.batchingColor,V.instancing=U.instancing,V.instancingColor=U.instancingColor,V.instancingMorph=U.instancingMorph,V.skinning=U.skinning,V.morphTargets=U.morphTargets,V.morphNormals=U.morphNormals,V.morphColors=U.morphColors,V.morphTargetsCount=U.morphTargetsCount,V.numClippingPlanes=U.numClippingPlanes,V.numIntersection=U.numClipIntersection,V.vertexAlphas=U.vertexAlphas,V.vertexTangents=U.vertexTangents,V.toneMapping=U.toneMapping}function Hp(E,U,V,G,F){U.isScene!==!0&&(U=Je),b.resetTextureUnits();const he=U.fog,Me=G.isMeshStandardMaterial?U.environment:null,Ne=T===null?x.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Tn,Ue=(G.isMeshStandardMaterial?N:y).get(G.envMap||Me),Xe=G.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Ke=!!V.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Fe=!!V.morphAttributes.position,ut=!!V.morphAttributes.normal,At=!!V.morphAttributes.color;let Lt=ds;G.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Lt=x.toneMapping);const En=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,pt=En!==void 0?En.length:0,Oe=le.get(G),Pi=p.state.lights;if(ie===!0&&(xe===!0||E!==M)){const On=E===M&&G.id===v;oe.setState(G,E,On)}let mt=!1;G.version===Oe.__version?(Oe.needsLights&&Oe.lightsStateVersion!==Pi.state.version||Oe.outputColorSpace!==Ne||F.isBatchedMesh&&Oe.batching===!1||!F.isBatchedMesh&&Oe.batching===!0||F.isBatchedMesh&&Oe.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Oe.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Oe.instancing===!1||!F.isInstancedMesh&&Oe.instancing===!0||F.isSkinnedMesh&&Oe.skinning===!1||!F.isSkinnedMesh&&Oe.skinning===!0||F.isInstancedMesh&&Oe.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Oe.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Oe.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Oe.instancingMorph===!1&&F.morphTexture!==null||Oe.envMap!==Ue||G.fog===!0&&Oe.fog!==he||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==oe.numPlanes||Oe.numIntersection!==oe.numIntersection)||Oe.vertexAlphas!==Xe||Oe.vertexTangents!==Ke||Oe.morphTargets!==Fe||Oe.morphNormals!==ut||Oe.morphColors!==At||Oe.toneMapping!==Lt||Oe.morphTargetsCount!==pt)&&(mt=!0):(mt=!0,Oe.__version=G.version);let Zn=Oe.currentProgram;mt===!0&&(Zn=Wo(G,U,F));let Os=!1,In=!1,Or=!1;const Dt=Zn.getUniforms(),mi=Oe.uniforms;if(J.useProgram(Zn.program)&&(Os=!0,In=!0,Or=!0),G.id!==v&&(v=G.id,In=!0),Os||M!==E){J.buffers.depth.getReversed()?(ae.copy(E.projectionMatrix),$m(ae),Jm(ae),Dt.setValue(P,"projectionMatrix",ae)):Dt.setValue(P,"projectionMatrix",E.projectionMatrix),Dt.setValue(P,"viewMatrix",E.matrixWorldInverse);const $i=Dt.map.cameraPosition;$i!==void 0&&$i.setValue(P,De.setFromMatrixPosition(E.matrixWorld)),Se.logarithmicDepthBuffer&&Dt.setValue(P,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Dt.setValue(P,"isOrthographic",E.isOrthographicCamera===!0),M!==E&&(M=E,In=!0,Or=!0)}if(F.isSkinnedMesh){Dt.setOptional(P,F,"bindMatrix"),Dt.setOptional(P,F,"bindMatrixInverse");const On=F.skeleton;On&&(On.boneTexture===null&&On.computeBoneTexture(),Dt.setValue(P,"boneTexture",On.boneTexture,b))}F.isBatchedMesh&&(Dt.setOptional(P,F,"batchingTexture"),Dt.setValue(P,"batchingTexture",F._matricesTexture,b),Dt.setOptional(P,F,"batchingIdTexture"),Dt.setValue(P,"batchingIdTexture",F._indirectTexture,b),Dt.setOptional(P,F,"batchingColorTexture"),F._colorsTexture!==null&&Dt.setValue(P,"batchingColorTexture",F._colorsTexture,b));const Br=V.morphAttributes;if((Br.position!==void 0||Br.normal!==void 0||Br.color!==void 0)&&We.update(F,V,Zn),(In||Oe.receiveShadow!==F.receiveShadow)&&(Oe.receiveShadow=F.receiveShadow,Dt.setValue(P,"receiveShadow",F.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(mi.envMap.value=Ue,mi.flipEnvMap.value=Ue.isCubeTexture&&Ue.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&U.environment!==null&&(mi.envMapIntensity.value=U.environmentIntensity),In&&(Dt.setValue(P,"toneMappingExposure",x.toneMappingExposure),Oe.needsLights&&Vp(mi,Or),he&&G.fog===!0&&ue.refreshFogUniforms(mi,he),ue.refreshMaterialUniforms(mi,G,H,K,p.state.transmissionRenderTarget[E.id]),Ia.upload(P,pu(Oe),mi,b)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Ia.upload(P,pu(Oe),mi,b),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Dt.setValue(P,"center",F.center),Dt.setValue(P,"modelViewMatrix",F.modelViewMatrix),Dt.setValue(P,"normalMatrix",F.normalMatrix),Dt.setValue(P,"modelMatrix",F.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const On=G.uniformsGroups;for(let $i=0,Ji=On.length;$i<Ji;$i++){const gu=On[$i];D.update(gu,Zn),D.bind(gu,Zn)}}return Zn}function Vp(E,U){E.ambientLightColor.needsUpdate=U,E.lightProbe.needsUpdate=U,E.directionalLights.needsUpdate=U,E.directionalLightShadows.needsUpdate=U,E.pointLights.needsUpdate=U,E.pointLightShadows.needsUpdate=U,E.spotLights.needsUpdate=U,E.spotLightShadows.needsUpdate=U,E.rectAreaLights.needsUpdate=U,E.hemisphereLights.needsUpdate=U}function Gp(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(E,U,V){le.get(E.texture).__webglTexture=U,le.get(E.depthTexture).__webglTexture=V;const G=le.get(E);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=V===void 0,G.__autoAllocateDepthBuffer||te.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,U){const V=le.get(E);V.__webglFramebuffer=U,V.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(E,U=0,V=0){T=E,R=U,I=V;let G=!0,F=null,he=!1,Me=!1;if(E){const Ue=le.get(E);if(Ue.__useDefaultFramebuffer!==void 0)J.bindFramebuffer(P.FRAMEBUFFER,null),G=!1;else if(Ue.__webglFramebuffer===void 0)b.setupRenderTarget(E);else if(Ue.__hasExternalTextures)b.rebindTextures(E,le.get(E.texture).__webglTexture,le.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Fe=E.depthTexture;if(Ue.__boundDepthTexture!==Fe){if(Fe!==null&&le.has(Fe)&&(E.width!==Fe.image.width||E.height!==Fe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(E)}}const Xe=E.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(Me=!0);const Ke=le.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ke[U])?F=Ke[U][V]:F=Ke[U],he=!0):E.samples>0&&b.useMultisampledRTT(E)===!1?F=le.get(E).__webglMultisampledFramebuffer:Array.isArray(Ke)?F=Ke[V]:F=Ke,C.copy(E.viewport),z.copy(E.scissor),O=E.scissorTest}else C.copy(pe).multiplyScalar(H).floor(),z.copy(Re).multiplyScalar(H).floor(),O=tt;if(J.bindFramebuffer(P.FRAMEBUFFER,F)&&G&&J.drawBuffers(E,F),J.viewport(C),J.scissor(z),J.setScissorTest(O),he){const Ue=le.get(E.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+U,Ue.__webglTexture,V)}else if(Me){const Ue=le.get(E.texture),Xe=U||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,Ue.__webglTexture,V||0,Xe)}v=-1},this.readRenderTargetPixels=function(E,U,V,G,F,he,Me){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=le.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Me!==void 0&&(Ne=Ne[Me]),Ne){J.bindFramebuffer(P.FRAMEBUFFER,Ne);try{const Ue=E.texture,Xe=Ue.format,Ke=Ue.type;if(!Se.textureFormatReadable(Xe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Se.textureTypeReadable(Ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=E.width-G&&V>=0&&V<=E.height-F&&P.readPixels(U,V,G,F,Qe.convert(Xe),Qe.convert(Ke),he)}finally{const Ue=T!==null?le.get(T).__webglFramebuffer:null;J.bindFramebuffer(P.FRAMEBUFFER,Ue)}}},this.readRenderTargetPixelsAsync=async function(E,U,V,G,F,he,Me){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ne=le.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Me!==void 0&&(Ne=Ne[Me]),Ne){const Ue=E.texture,Xe=Ue.format,Ke=Ue.type;if(!Se.textureFormatReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Se.textureTypeReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=E.width-G&&V>=0&&V<=E.height-F){J.bindFramebuffer(P.FRAMEBUFFER,Ne);const Fe=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Fe),P.bufferData(P.PIXEL_PACK_BUFFER,he.byteLength,P.STREAM_READ),P.readPixels(U,V,G,F,Qe.convert(Xe),Qe.convert(Ke),0);const ut=T!==null?le.get(T).__webglFramebuffer:null;J.bindFramebuffer(P.FRAMEBUFFER,ut);const At=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Zm(P,At,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Fe),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,he),P.deleteBuffer(Fe),P.deleteSync(At),he}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,U=null,V=0){E.isTexture!==!0&&(eo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,E=arguments[1]);const G=Math.pow(2,-V),F=Math.floor(E.image.width*G),he=Math.floor(E.image.height*G),Me=U!==null?U.x:0,Ne=U!==null?U.y:0;b.setTexture2D(E,0),P.copyTexSubImage2D(P.TEXTURE_2D,V,0,0,Me,Ne,F,he),J.unbindTexture()},this.copyTextureToTexture=function(E,U,V=null,G=null,F=0){E.isTexture!==!0&&(eo("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,E=arguments[1],U=arguments[2],F=arguments[3]||0,V=null);let he,Me,Ne,Ue,Xe,Ke,Fe,ut,At;const Lt=E.isCompressedTexture?E.mipmaps[F]:E.image;V!==null?(he=V.max.x-V.min.x,Me=V.max.y-V.min.y,Ne=V.isBox3?V.max.z-V.min.z:1,Ue=V.min.x,Xe=V.min.y,Ke=V.isBox3?V.min.z:0):(he=Lt.width,Me=Lt.height,Ne=Lt.depth||1,Ue=0,Xe=0,Ke=0),G!==null?(Fe=G.x,ut=G.y,At=G.z):(Fe=0,ut=0,At=0);const En=Qe.convert(U.format),pt=Qe.convert(U.type);let Oe;U.isData3DTexture?(b.setTexture3D(U,0),Oe=P.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(b.setTexture2DArray(U,0),Oe=P.TEXTURE_2D_ARRAY):(b.setTexture2D(U,0),Oe=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,U.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,U.unpackAlignment);const Pi=P.getParameter(P.UNPACK_ROW_LENGTH),mt=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Zn=P.getParameter(P.UNPACK_SKIP_PIXELS),Os=P.getParameter(P.UNPACK_SKIP_ROWS),In=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,Lt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Lt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Ue),P.pixelStorei(P.UNPACK_SKIP_ROWS,Xe),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ke);const Or=E.isDataArrayTexture||E.isData3DTexture,Dt=U.isDataArrayTexture||U.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){const mi=le.get(E),Br=le.get(U),On=le.get(mi.__renderTarget),$i=le.get(Br.__renderTarget);J.bindFramebuffer(P.READ_FRAMEBUFFER,On.__webglFramebuffer),J.bindFramebuffer(P.DRAW_FRAMEBUFFER,$i.__webglFramebuffer);for(let Ji=0;Ji<Ne;Ji++)Or&&P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,le.get(E).__webglTexture,F,Ke+Ji),E.isDepthTexture?(Dt&&P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,le.get(U).__webglTexture,F,At+Ji),P.blitFramebuffer(Ue,Xe,he,Me,Fe,ut,he,Me,P.DEPTH_BUFFER_BIT,P.NEAREST)):Dt?P.copyTexSubImage3D(Oe,F,Fe,ut,At+Ji,Ue,Xe,he,Me):P.copyTexSubImage2D(Oe,F,Fe,ut,At+Ji,Ue,Xe,he,Me);J.bindFramebuffer(P.READ_FRAMEBUFFER,null),J.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else Dt?E.isDataTexture||E.isData3DTexture?P.texSubImage3D(Oe,F,Fe,ut,At,he,Me,Ne,En,pt,Lt.data):U.isCompressedArrayTexture?P.compressedTexSubImage3D(Oe,F,Fe,ut,At,he,Me,Ne,En,Lt.data):P.texSubImage3D(Oe,F,Fe,ut,At,he,Me,Ne,En,pt,Lt):E.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,F,Fe,ut,he,Me,En,pt,Lt.data):E.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,F,Fe,ut,Lt.width,Lt.height,En,Lt.data):P.texSubImage2D(P.TEXTURE_2D,F,Fe,ut,he,Me,En,pt,Lt);P.pixelStorei(P.UNPACK_ROW_LENGTH,Pi),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,mt),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Zn),P.pixelStorei(P.UNPACK_SKIP_ROWS,Os),P.pixelStorei(P.UNPACK_SKIP_IMAGES,In),F===0&&U.generateMipmaps&&P.generateMipmap(Oe),J.unbindTexture()},this.copyTextureToTexture3D=function(E,U,V=null,G=null,F=0){return E.isTexture!==!0&&(eo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,G=arguments[1]||null,E=arguments[2],U=arguments[3],F=arguments[4]||0),eo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,U,V,G,F)},this.initRenderTarget=function(E){le.get(E).__webglFramebuffer===void 0&&b.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?b.setTextureCube(E,0):E.isData3DTexture?b.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?b.setTexture2DArray(E,0):b.setTexture2D(E,0),J.unbindTexture()},this.resetState=function(){R=0,I=0,T=null,J.reset(),Et.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=ot._getDrawingBufferColorSpace(e),t.unpackColorSpace=ot._getUnpackColorSpace()}}class zf extends Ot{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bi,this.environmentIntensity=1,this.environmentRotation=new bi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class ay{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ih,this.updateRanges=[],this.version=0,this.uuid=Xn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const vn=new A;class zh{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)vn.fromBufferAttribute(this,t),vn.applyMatrix4(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)vn.fromBufferAttribute(this,t),vn.applyNormalMatrix(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)vn.fromBufferAttribute(this,t),vn.transformDirection(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=ii(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Mt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ii(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ii(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ii(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ii(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),i=Mt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),i=Mt(i,this.array),r=Mt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new an(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new zh(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const pd=new A,md=new dt,gd=new dt,cy=new A,_d=new Ye,ua=new A,tl=new Ei,xd=new Ye,nl=new Fo;class ly extends Z{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=yu,this.bindMatrix=new Ye,this.bindMatrixInverse=new Ye,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new di),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ua),this.boundingBox.expandByPoint(ua)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Ei),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ua),this.boundingSphere.expandByPoint(ua)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),tl.copy(this.boundingSphere),tl.applyMatrix4(i),e.ray.intersectsSphere(tl)!==!1&&(xd.copy(i).invert(),nl.copy(e.ray).applyMatrix4(xd),!(this.boundingBox!==null&&nl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,nl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new dt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===yu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===xm?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;md.fromBufferAttribute(i.attributes.skinIndex,e),gd.fromBufferAttribute(i.attributes.skinWeight,e),pd.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=gd.getComponent(r);if(o!==0){const a=md.getComponent(r);_d.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(cy.copy(pd).applyMatrix4(_d),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Hf extends Ot{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Hh extends Jt{constructor(e=null,t=1,n=1,i,r,o,a,c,l=_n,h=_n,u,d){super(null,o,a,c,l,h,i,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const vd=new Ye,hy=new Ye;class Vh{constructor(e=[],t=[]){this.uuid=Xn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ye)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ye;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:hy;vd.multiplyMatrices(a,t[r]),vd.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Vh(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Hh(t,e,e,Gn,ri);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Hf),this.bones.push(o),this.boneInverses.push(new Ye().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class oh extends an{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Js=new Ye,yd=new Ye,da=[],Md=new di,uy=new Ye,Gr=new Z,Wr=new Ei;class dy extends Z{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new oh(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,uy)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new di),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Js),Md.copy(e.boundingBox).applyMatrix4(Js),this.boundingBox.union(Md)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ei),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Js),Wr.copy(e.boundingSphere).applyMatrix4(Js),this.boundingSphere.union(Wr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Gr.geometry=this.geometry,Gr.material=this.material,Gr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Wr.copy(this.boundingSphere),Wr.applyMatrix4(n),e.ray.intersectsSphere(Wr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Js),yd.multiplyMatrices(n,Js),Gr.matrixWorld=yd,Gr.raycast(e,da);for(let o=0,a=da.length;o<a;o++){const c=da[o];c.instanceId=r,c.object=this,t.push(c)}da.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new oh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Hh(new Float32Array(i*this.count),i,this.count,Ch,ri));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=i*e;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Gh extends ai{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Be(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Xa=new A,qa=new A,Sd=new Ye,Xr=new Fo,fa=new Ei,il=new A,wd=new A;class Wh extends Ot{constructor(e=new Zt,t=new Gh){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Xa.fromBufferAttribute(t,i-1),qa.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Xa.distanceTo(qa);e.setAttribute("lineDistance",new It(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),fa.copy(n.boundingSphere),fa.applyMatrix4(i),fa.radius+=r,e.ray.intersectsSphere(fa)===!1)return;Sd.copy(i).invert(),Xr.copy(e.ray).applyMatrix4(Sd);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=l){const p=h.getX(_),w=h.getX(_+1),S=pa(this,e,Xr,c,p,w);S&&t.push(S)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(f),p=pa(this,e,Xr,c,_,m);p&&t.push(p)}}else{const f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=l){const p=pa(this,e,Xr,c,_,_+1);p&&t.push(p)}if(this.isLineLoop){const _=pa(this,e,Xr,c,g-1,f);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function pa(s,e,t,n,i,r){const o=s.geometry.attributes.position;if(Xa.fromBufferAttribute(o,i),qa.fromBufferAttribute(o,r),t.distanceSqToSegment(Xa,qa,il,wd)>n)return;il.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(il);if(!(c<e.near||c>e.far))return{distance:c,point:wd.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}const bd=new A,Td=new A;class Vf extends Wh{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)bd.fromBufferAttribute(t,i),Td.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+bd.distanceTo(Td);e.setAttribute("lineDistance",new It(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class fy extends Wh{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Oo extends ai{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Be(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ed=new Ye,ah=new Fo,ma=new Ei,ga=new A;class lc extends Ot{constructor(e=new Zt,t=new Oo){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ma.copy(n.boundingSphere),ma.applyMatrix4(i),ma.radius+=r,e.ray.intersectsSphere(ma)===!1)return;Ed.copy(i).invert(),ah.copy(e.ray).applyMatrix4(Ed);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){const d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let g=d,_=f;g<_;g++){const m=l.getX(g);ga.fromBufferAttribute(u,m),Ad(ga,m,c,i,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,_=f;g<_;g++)ga.fromBufferAttribute(u,g),Ad(ga,g,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Ad(s,e,t,n,i,r,o){const a=ah.distanceSqToPoint(s);if(a<t){const c=new A;ah.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Cr extends Jt{constructor(e,t,n,i,r,o,a,c,l){super(e,t,n,i,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ai{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-o,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===o)return i/(r-1);const h=n[i],d=n[i+1]-h,f=(o-h)/d;return(i+f)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),c=t||(o.isVector2?new re:new A);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new A,i=[],r=[],o=[],a=new A,c=new Ye;for(let f=0;f<=e;f++){const g=f/e;i[f]=this.getTangentAt(g,new A)}r[0]=new A,o[0]=new A;let l=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(sn(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(i[f],r[f])}if(t===!0){let f=Math.acos(sn(r[0].dot(r[e]),-1,1));f/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(i[g],f*g)),o[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Xh extends Ai{constructor(e=0,t=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new re){const n=t,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+e*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class py extends Xh{constructor(e,t,n,i,r,o){super(e,t,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function qh(){let s=0,e=0,t=0,n=0;function i(r,o,a,c){s=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){i(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let d=(o-r)/l-(a-r)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,f*=h,i(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return s+e*r+t*o+n*a}}}const _a=new A,sl=new qh,rl=new qh,ol=new qh;class Gf extends Ai{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new A){const n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=i[(a-1)%r]:(_a.subVectors(i[0],i[1]).add(i[0]),l=_a);const u=i[a%r],d=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(_a.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=_a),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),sl.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,_,m),rl.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,_,m),ol.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(sl.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),rl.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),ol.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(sl.calc(c),rl.calc(c),ol.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new A().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Rd(s,e,t,n,i){const r=(n-e)*.5,o=(i-t)*.5,a=s*s,c=s*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*s+t}function my(s,e){const t=1-s;return t*t*e}function gy(s,e){return 2*(1-s)*s*e}function _y(s,e){return s*s*e}function ro(s,e,t,n){return my(s,e)+gy(s,t)+_y(s,n)}function xy(s,e){const t=1-s;return t*t*t*e}function vy(s,e){const t=1-s;return 3*t*t*s*e}function yy(s,e){return 3*(1-s)*s*s*e}function My(s,e){return s*s*s*e}function oo(s,e,t,n,i){return xy(s,e)+vy(s,t)+yy(s,n)+My(s,i)}class Wf extends Ai{constructor(e=new re,t=new re,n=new re,i=new re){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new re){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(oo(e,i.x,r.x,o.x,a.x),oo(e,i.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Sy extends Ai{constructor(e=new A,t=new A,n=new A,i=new A){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new A){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(oo(e,i.x,r.x,o.x,a.x),oo(e,i.y,r.y,o.y,a.y),oo(e,i.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Xf extends Ai{constructor(e=new re,t=new re){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new re){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new re){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class wy extends Ai{constructor(e=new A,t=new A){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new A){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new A){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class qf extends Ai{constructor(e=new re,t=new re,n=new re){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new re){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(ro(e,i.x,r.x,o.x),ro(e,i.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Yf extends Ai{constructor(e=new A,t=new A,n=new A){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new A){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(ro(e,i.x,r.x,o.x),ro(e,i.y,r.y,o.y),ro(e,i.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class jf extends Ai{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new re){const n=t,i=this.points,r=(i.length-1)*e,o=Math.floor(r),a=r-o,c=i[o===0?o:o-1],l=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(Rd(a,c.x,l.x,h.x,u.x),Rd(a,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new re().fromArray(i))}return this}}var Ya=Object.freeze({__proto__:null,ArcCurve:py,CatmullRomCurve3:Gf,CubicBezierCurve:Wf,CubicBezierCurve3:Sy,EllipseCurve:Xh,LineCurve:Xf,LineCurve3:wy,QuadraticBezierCurve:qf,QuadraticBezierCurve3:Yf,SplineCurve:jf});class by extends Ai{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ya[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const o=i[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const o=r[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new Ya[i.type]().fromJSON(i))}return this}}class ja extends by{constructor(e){super(),this.type="Path",this.currentPoint=new re,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Xf(this.currentPoint.clone(),new re(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const r=new qf(this.currentPoint.clone(),new re(e,t),new re(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,o){const a=new Wf(this.currentPoint.clone(),new re(e,t),new re(n,i),new re(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new jf(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,i,r,o),this}absarc(e,t,n,i,r,o){return this.absellipse(e,t,n,n,i,r,o),this}ellipse(e,t,n,i,r,o,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,i,r,o,a,c),this}absellipse(e,t,n,i,r,o,a,c){const l=new Xh(e,t,n,i,r,o,a,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Wi extends Zt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const r=[],o=[],a=[],c=[],l=new A,h=new re;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){const f=n+u/t*i;l.x=e*Math.cos(f),l.y=e*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new It(o,3)),this.setAttribute("normal",new It(a,3)),this.setAttribute("uv",new It(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wi(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Pt extends Zt{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],d=[],f=[];let g=0;const _=[],m=n/2;let p=0;w(),o===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new It(u,3)),this.setAttribute("normal",new It(d,3)),this.setAttribute("uv",new It(f,2));function w(){const x=new A,L=new A;let R=0;const I=(t-e)/n;for(let T=0;T<=r;T++){const v=[],M=T/r,C=M*(t-e)+e;for(let z=0;z<=i;z++){const O=z/i,B=O*c+a,W=Math.sin(B),k=Math.cos(B);L.x=C*W,L.y=-M*n+m,L.z=C*k,u.push(L.x,L.y,L.z),x.set(W,I,k).normalize(),d.push(x.x,x.y,x.z),f.push(O,1-M),v.push(g++)}_.push(v)}for(let T=0;T<i;T++)for(let v=0;v<r;v++){const M=_[v][T],C=_[v+1][T],z=_[v+1][T+1],O=_[v][T+1];(e>0||v!==0)&&(h.push(M,C,O),R+=3),(t>0||v!==r-1)&&(h.push(C,z,O),R+=3)}l.addGroup(p,R,0),p+=R}function S(x){const L=g,R=new re,I=new A;let T=0;const v=x===!0?e:t,M=x===!0?1:-1;for(let z=1;z<=i;z++)u.push(0,m*M,0),d.push(0,M,0),f.push(.5,.5),g++;const C=g;for(let z=0;z<=i;z++){const B=z/i*c+a,W=Math.cos(B),k=Math.sin(B);I.x=v*k,I.y=m*M,I.z=v*W,u.push(I.x,I.y,I.z),d.push(0,M,0),R.x=W*.5+.5,R.y=k*.5*M+.5,f.push(R.x,R.y),g++}for(let z=0;z<i;z++){const O=L+z,B=C+z;x===!0?h.push(B,B+1,O):h.push(B+1,B,O),T+=3}l.addGroup(p,T,x===!0?1:2),p+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class wo extends Pt{constructor(e=1,t=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new wo(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ka extends ja{constructor(e){super(e),this.uuid=Xn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new ja().fromJSON(i))}return this}}const Ty={triangulate:function(s,e,t=2){const n=e&&e.length,i=n?e[0]*t:s.length;let r=Kf(s,0,i,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,u,d,f;if(n&&(r=Py(s,e,r,t)),s.length>80*t){a=l=s[0],c=h=s[1];for(let g=t;g<i;g+=t)u=s[g],d=s[g+1],u<a&&(a=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);f=Math.max(l-a,h-c),f=f!==0?32767/f:0}return bo(r,o,t,a,c,f,0),o}};function Kf(s,e,t,n,i){let r,o;if(i===Hy(s,e,t,n)>0)for(r=e;r<t;r+=n)o=Cd(r,s[r],s[r+1],o);else for(r=t-n;r>=e;r-=n)o=Cd(r,s[r],s[r+1],o);return o&&hc(o,o.next)&&(Eo(o),o=o.next),o}function Ls(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(hc(t,t.next)||kt(t.prev,t,t.next)===0)){if(Eo(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function bo(s,e,t,n,i,r,o){if(!s)return;!o&&r&&Uy(s,n,i,r);let a=s,c,l;for(;s.prev!==s.next;){if(c=s.prev,l=s.next,r?Ay(s,n,i,r):Ey(s)){e.push(c.i/t|0),e.push(s.i/t|0),e.push(l.i/t|0),Eo(s),s=l.next,a=l.next;continue}if(s=l,s===a){o?o===1?(s=Ry(Ls(s),e,t),bo(s,e,t,n,i,r,2)):o===2&&Cy(s,e,t,n,i,r):bo(Ls(s),e,t,n,i,r,1);break}}}function Ey(s){const e=s.prev,t=s,n=s.next;if(kt(e,t,n)>=0)return!1;const i=e.x,r=t.x,o=n.x,a=e.y,c=t.y,l=n.y,h=i<r?i<o?i:o:r<o?r:o,u=a<c?a<l?a:l:c<l?c:l,d=i>r?i>o?i:o:r>o?r:o,f=a>c?a>l?a:l:c>l?c:l;let g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&ar(i,a,r,c,o,l,g.x,g.y)&&kt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Ay(s,e,t,n){const i=s.prev,r=s,o=s.next;if(kt(i,r,o)>=0)return!1;const a=i.x,c=r.x,l=o.x,h=i.y,u=r.y,d=o.y,f=a<c?a<l?a:l:c<l?c:l,g=h<u?h<d?h:d:u<d?u:d,_=a>c?a>l?a:l:c>l?c:l,m=h>u?h>d?h:d:u>d?u:d,p=ch(f,g,e,t,n),w=ch(_,m,e,t,n);let S=s.prevZ,x=s.nextZ;for(;S&&S.z>=p&&x&&x.z<=w;){if(S.x>=f&&S.x<=_&&S.y>=g&&S.y<=m&&S!==i&&S!==o&&ar(a,h,c,u,l,d,S.x,S.y)&&kt(S.prev,S,S.next)>=0||(S=S.prevZ,x.x>=f&&x.x<=_&&x.y>=g&&x.y<=m&&x!==i&&x!==o&&ar(a,h,c,u,l,d,x.x,x.y)&&kt(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;S&&S.z>=p;){if(S.x>=f&&S.x<=_&&S.y>=g&&S.y<=m&&S!==i&&S!==o&&ar(a,h,c,u,l,d,S.x,S.y)&&kt(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;x&&x.z<=w;){if(x.x>=f&&x.x<=_&&x.y>=g&&x.y<=m&&x!==i&&x!==o&&ar(a,h,c,u,l,d,x.x,x.y)&&kt(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function Ry(s,e,t){let n=s;do{const i=n.prev,r=n.next.next;!hc(i,r)&&Zf(i,n,n.next,r)&&To(i,r)&&To(r,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Eo(n),Eo(n.next),n=s=r),n=n.next}while(n!==s);return Ls(n)}function Cy(s,e,t,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&By(o,a)){let c=$f(o,a);o=Ls(o,o.next),c=Ls(c,c.next),bo(o,e,t,n,i,r,0),bo(c,e,t,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function Py(s,e,t,n){const i=[];let r,o,a,c,l;for(r=0,o=e.length;r<o;r++)a=e[r]*n,c=r<o-1?e[r+1]*n:s.length,l=Kf(s,a,c,n,!1),l===l.next&&(l.steiner=!0),i.push(Oy(l));for(i.sort(Iy),r=0;r<i.length;r++)t=Ly(i[r],t);return t}function Iy(s,e){return s.x-e.x}function Ly(s,e){const t=Dy(s,e);if(!t)return e;const n=$f(t,s);return Ls(n,n.next),Ls(t,t.next)}function Dy(s,e){let t=e,n=-1/0,i;const r=s.x,o=s.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const d=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=r&&d>n&&(n=d,i=t.x<t.next.x?t:t.next,d===r))return i}t=t.next}while(t!==e);if(!i)return null;const a=i,c=i.x,l=i.y;let h=1/0,u;t=i;do r>=t.x&&t.x>=c&&r!==t.x&&ar(o<l?r:n,o,c,l,o<l?n:r,o,t.x,t.y)&&(u=Math.abs(o-t.y)/(r-t.x),To(t,s)&&(u<h||u===h&&(t.x>i.x||t.x===i.x&&Ny(i,t)))&&(i=t,h=u)),t=t.next;while(t!==a);return i}function Ny(s,e){return kt(s.prev,s,e.prev)<0&&kt(e.next,s,s.next)<0}function Uy(s,e,t,n){let i=s;do i.z===0&&(i.z=ch(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,Fy(i)}function Fy(s){let e,t,n,i,r,o,a,c,l=1;do{for(t=s,s=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<l&&(a++,n=n.nextZ,!!n);e++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,a--):(i=n,n=n.nextZ,c--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;t=n}r.nextZ=null,l*=2}while(o>1);return s}function ch(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function Oy(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function ar(s,e,t,n,i,r,o,a){return(i-o)*(e-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(i-o)*(n-a)}function By(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!ky(s,e)&&(To(s,e)&&To(e,s)&&zy(s,e)&&(kt(s.prev,s,e.prev)||kt(s,e.prev,e))||hc(s,e)&&kt(s.prev,s,s.next)>0&&kt(e.prev,e,e.next)>0)}function kt(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function hc(s,e){return s.x===e.x&&s.y===e.y}function Zf(s,e,t,n){const i=va(kt(s,e,t)),r=va(kt(s,e,n)),o=va(kt(t,n,s)),a=va(kt(t,n,e));return!!(i!==r&&o!==a||i===0&&xa(s,t,e)||r===0&&xa(s,n,e)||o===0&&xa(t,s,n)||a===0&&xa(t,e,n))}function xa(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function va(s){return s>0?1:s<0?-1:0}function ky(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&Zf(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function To(s,e){return kt(s.prev,s,s.next)<0?kt(s,e,s.next)>=0&&kt(s,s.prev,e)>=0:kt(s,e,s.prev)<0||kt(s,s.next,e)<0}function zy(s,e){let t=s,n=!1;const i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function $f(s,e){const t=new lh(s.i,s.x,s.y),n=new lh(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Cd(s,e,t,n){const i=new lh(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Eo(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function lh(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Hy(s,e,t,n){let i=0;for(let r=e,o=t-n;r<t;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}class ao{static area(e){const t=e.length;let n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return ao.area(e)<0}static triangulateShape(e,t){const n=[],i=[],r=[];Pd(e),Id(n,e);let o=e.length;t.forEach(Pd);for(let c=0;c<t.length;c++)i.push(o),o+=t[c].length,Id(n,t[c]);const a=Ty.triangulate(n,i);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function Pd(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function Id(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class Ao extends Zt{constructor(e=new Ka([new re(.5,.5),new re(-.5,.5),new re(-.5,-.5),new re(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],r=[];for(let a=0,c=e.length;a<c;a++){const l=e[a];o(l)}this.setAttribute("position",new It(i,3)),this.setAttribute("uv",new It(r,2)),this.computeVertexNormals();function o(a){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1;let d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,w=t.UVGenerator!==void 0?t.UVGenerator:Vy;let S,x=!1,L,R,I,T;p&&(S=p.getSpacedPoints(h),x=!0,d=!1,L=p.computeFrenetFrames(h,!1),R=new A,I=new A,T=new A),d||(m=0,f=0,g=0,_=0);const v=a.extractPoints(l);let M=v.shape;const C=v.holes;if(!ao.isClockWise(M)){M=M.reverse();for(let $=0,se=C.length;$<se;$++){const P=C[$];ao.isClockWise(P)&&(C[$]=P.reverse())}}const O=ao.triangulateShape(M,C),B=M;for(let $=0,se=C.length;$<se;$++){const P=C[$];M=M.concat(P)}function W($,se,P){return se||console.error("THREE.ExtrudeGeometry: vec does not exist"),$.clone().addScaledVector(se,P)}const k=M.length,K=O.length;function H($,se,P){let be,te,Se;const J=$.x-se.x,ve=$.y-se.y,le=P.x-$.x,b=P.y-$.y,y=J*J+ve*ve,N=J*b-ve*le;if(Math.abs(N)>Number.EPSILON){const X=Math.sqrt(y),Q=Math.sqrt(le*le+b*b),q=se.x-ve/X,Ae=se.y+J/X,ue=P.x-b/Q,Ee=P.y+le/Q,it=((ue-q)*b-(Ee-Ae)*le)/(J*b-ve*le);be=q+J*it-$.x,te=Ae+ve*it-$.y;const oe=be*be+te*te;if(oe<=2)return new re(be,te);Se=Math.sqrt(oe/2)}else{let X=!1;J>Number.EPSILON?le>Number.EPSILON&&(X=!0):J<-Number.EPSILON?le<-Number.EPSILON&&(X=!0):Math.sign(ve)===Math.sign(b)&&(X=!0),X?(be=-ve,te=J,Se=Math.sqrt(y)):(be=J,te=ve,Se=Math.sqrt(y/2))}return new re(be/Se,te/Se)}const ce=[];for(let $=0,se=B.length,P=se-1,be=$+1;$<se;$++,P++,be++)P===se&&(P=0),be===se&&(be=0),ce[$]=H(B[$],B[P],B[be]);const fe=[];let pe,Re=ce.concat();for(let $=0,se=C.length;$<se;$++){const P=C[$];pe=[];for(let be=0,te=P.length,Se=te-1,J=be+1;be<te;be++,Se++,J++)Se===te&&(Se=0),J===te&&(J=0),pe[be]=H(P[be],P[Se],P[J]);fe.push(pe),Re=Re.concat(pe)}for(let $=0;$<m;$++){const se=$/m,P=f*Math.cos(se*Math.PI/2),be=g*Math.sin(se*Math.PI/2)+_;for(let te=0,Se=B.length;te<Se;te++){const J=W(B[te],ce[te],be);ae(J.x,J.y,-P)}for(let te=0,Se=C.length;te<Se;te++){const J=C[te];pe=fe[te];for(let ve=0,le=J.length;ve<le;ve++){const b=W(J[ve],pe[ve],be);ae(b.x,b.y,-P)}}}const tt=g+_;for(let $=0;$<k;$++){const se=d?W(M[$],Re[$],tt):M[$];x?(I.copy(L.normals[0]).multiplyScalar(se.x),R.copy(L.binormals[0]).multiplyScalar(se.y),T.copy(S[0]).add(I).add(R),ae(T.x,T.y,T.z)):ae(se.x,se.y,0)}for(let $=1;$<=h;$++)for(let se=0;se<k;se++){const P=d?W(M[se],Re[se],tt):M[se];x?(I.copy(L.normals[$]).multiplyScalar(P.x),R.copy(L.binormals[$]).multiplyScalar(P.y),T.copy(S[$]).add(I).add(R),ae(T.x,T.y,T.z)):ae(P.x,P.y,u/h*$)}for(let $=m-1;$>=0;$--){const se=$/m,P=f*Math.cos(se*Math.PI/2),be=g*Math.sin(se*Math.PI/2)+_;for(let te=0,Se=B.length;te<Se;te++){const J=W(B[te],ce[te],be);ae(J.x,J.y,u+P)}for(let te=0,Se=C.length;te<Se;te++){const J=C[te];pe=fe[te];for(let ve=0,le=J.length;ve<le;ve++){const b=W(J[ve],pe[ve],be);x?ae(b.x,b.y+S[h-1].y,S[h-1].x+P):ae(b.x,b.y,u+P)}}}j(),ie();function j(){const $=i.length/3;if(d){let se=0,P=k*se;for(let be=0;be<K;be++){const te=O[be];Ie(te[2]+P,te[1]+P,te[0]+P)}se=h+m*2,P=k*se;for(let be=0;be<K;be++){const te=O[be];Ie(te[0]+P,te[1]+P,te[2]+P)}}else{for(let se=0;se<K;se++){const P=O[se];Ie(P[2],P[1],P[0])}for(let se=0;se<K;se++){const P=O[se];Ie(P[0]+k*h,P[1]+k*h,P[2]+k*h)}}n.addGroup($,i.length/3-$,0)}function ie(){const $=i.length/3;let se=0;xe(B,se),se+=B.length;for(let P=0,be=C.length;P<be;P++){const te=C[P];xe(te,se),se+=te.length}n.addGroup($,i.length/3-$,1)}function xe($,se){let P=$.length;for(;--P>=0;){const be=P;let te=P-1;te<0&&(te=$.length-1);for(let Se=0,J=h+m*2;Se<J;Se++){const ve=k*Se,le=k*(Se+1),b=se+be+ve,y=se+te+ve,N=se+te+le,X=se+be+le;De(b,y,N,X)}}}function ae($,se,P){c.push($),c.push(se),c.push(P)}function Ie($,se,P){ke($),ke(se),ke(P);const be=i.length/3,te=w.generateTopUV(n,i,be-3,be-2,be-1);Je(te[0]),Je(te[1]),Je(te[2])}function De($,se,P,be){ke($),ke(se),ke(be),ke(se),ke(P),ke(be);const te=i.length/3,Se=w.generateSideWallUV(n,i,te-6,te-3,te-2,te-1);Je(Se[0]),Je(Se[1]),Je(Se[3]),Je(Se[1]),Je(Se[2]),Je(Se[3])}function ke($){i.push(c[$*3+0]),i.push(c[$*3+1]),i.push(c[$*3+2])}function Je($){r.push($.x),r.push($.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Gy(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];n.push(a)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new Ya[i.type]().fromJSON(i)),new Ao(n,e.options)}}const Vy={generateTopUV:function(s,e,t,n,i){const r=e[t*3],o=e[t*3+1],a=e[n*3],c=e[n*3+1],l=e[i*3],h=e[i*3+1];return[new re(r,o),new re(a,c),new re(l,h)]},generateSideWallUV:function(s,e,t,n,i,r){const o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[i*3],f=e[i*3+1],g=e[i*3+2],_=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new re(o,1-c),new re(l,1-u),new re(d,1-g),new re(_,1-p)]:[new re(a,1-c),new re(h,1-u),new re(f,1-g),new re(m,1-p)]}};function Gy(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Ft extends Zt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new A,d=new A,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const w=[],S=p/n;let x=0;p===0&&o===0?x=.5/t:p===n&&c===Math.PI&&(x=-.5/t);for(let L=0;L<=t;L++){const R=L/t;u.x=-e*Math.cos(i+R*r)*Math.sin(o+S*a),u.y=e*Math.cos(o+S*a),u.z=e*Math.sin(i+R*r)*Math.sin(o+S*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(R+x,1-S),w.push(l++)}h.push(w)}for(let p=0;p<n;p++)for(let w=0;w<t;w++){const S=h[p][w+1],x=h[p][w],L=h[p+1][w],R=h[p+1][w+1];(p!==0||o>0)&&f.push(S,x,R),(p!==n-1||c<Math.PI)&&f.push(x,L,R)}this.setIndex(f),this.setAttribute("position",new It(g,3)),this.setAttribute("normal",new It(_,3)),this.setAttribute("uv",new It(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ft(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class fs extends Zt{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],c=[],l=[],h=new A,u=new A,d=new A;for(let f=0;f<=n;f++)for(let g=0;g<=i;g++){const _=g/i*r,m=f/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(_),u.y=(e+t*Math.cos(m))*Math.sin(_),u.z=t*Math.sin(m),a.push(u.x,u.y,u.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(g/i),l.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=i;g++){const _=(i+1)*f+g-1,m=(i+1)*(f-1)+g-1,p=(i+1)*(f-1)+g,w=(i+1)*f+g;o.push(_,m,w),o.push(m,p,w)}this.setIndex(o),this.setAttribute("position",new It(a,3)),this.setAttribute("normal",new It(c,3)),this.setAttribute("uv",new It(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fs(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Yh extends Zt{constructor(e=new Yf(new A(-1,-1,0),new A(-1,1,0),new A(1,1,0)),t=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:r};const o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new A,c=new A,l=new re;let h=new A;const u=[],d=[],f=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new It(u,3)),this.setAttribute("normal",new It(d,3)),this.setAttribute("uv",new It(f,2));function _(){for(let S=0;S<t;S++)m(S);m(r===!1?t:0),w(),p()}function m(S){h=e.getPointAt(S/t,h);const x=o.normals[S],L=o.binormals[S];for(let R=0;R<=i;R++){const I=R/i*Math.PI*2,T=Math.sin(I),v=-Math.cos(I);c.x=v*x.x+T*L.x,c.y=v*x.y+T*L.y,c.z=v*x.z+T*L.z,c.normalize(),d.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,u.push(a.x,a.y,a.z)}}function p(){for(let S=1;S<=t;S++)for(let x=1;x<=i;x++){const L=(i+1)*(S-1)+(x-1),R=(i+1)*S+(x-1),I=(i+1)*S+x,T=(i+1)*(S-1)+x;g.push(L,R,T),g.push(R,I,T)}}function w(){for(let S=0;S<=t;S++)for(let x=0;x<=i;x++)l.x=S/t,l.y=x/i,f.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Yh(new Ya[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class rt extends ai{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Nh,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Kt extends rt{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new re(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return sn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Be(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Be(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Be(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Wy extends ai{static get type(){return"MeshToonMaterial"}constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.color=new Be(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Nh,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}function ya(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Xy(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function qy(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Ld(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let c=0;c!==e;++c)i[o++]=s[a+c]}return i}function Jf(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}class Bo{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Yy extends Bo{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:sr,endingEnd:sr}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,o=e+1,a=i[r],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case rr:r=e,a=2*t-n;break;case Ga:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case rr:o=e,c=2*n-t;break;case Ga:o=1,c=n+i[1]-i[0];break;default:o=e-1,c=t}const l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),_=g*g,m=_*g,p=-d*m+2*d*_-d*g,w=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,S=(-1-f)*m+(1.5+f)*_+.5*g,x=f*m-f*_;for(let L=0;L!==a;++L)r[L]=p*o[h+L]+w*o[l+L]+S*o[c+L]+x*o[u+L];return r}}class Qf extends Bo{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[l+d]*u+o[c+d]*h;return r}}class jy extends Bo{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Ri{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ya(t,this.TimeBufferType),this.values=ya(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ya(e.times,Array),values:ya(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new jy(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Qf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Yy(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case yo:t=this.InterpolantFactoryMethodDiscrete;break;case Mo:t=this.InterpolantFactoryMethodLinear;break;case Ac:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return yo;case this.InterpolantFactoryMethodLinear:return Mo;case this.InterpolantFactoryMethodSmooth:return Ac}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(i!==void 0&&Xy(i))for(let a=0,c=i.length;a!==c;++a){const l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Ac,r=e.length-1;let o=1;for(let a=1;a<r;++a){let c=!1;const l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(i)c=!0;else{const u=a*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){const _=t[u+g];if(_!==t[d+g]||_!==t[f+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];const u=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Ri.prototype.TimeBufferType=Float32Array;Ri.prototype.ValueBufferType=Float32Array;Ri.prototype.DefaultInterpolation=Mo;class Pr extends Ri{constructor(e,t,n){super(e,t,n)}}Pr.prototype.ValueTypeName="bool";Pr.prototype.ValueBufferType=Array;Pr.prototype.DefaultInterpolation=yo;Pr.prototype.InterpolantFactoryMethodLinear=void 0;Pr.prototype.InterpolantFactoryMethodSmooth=void 0;class ep extends Ri{}ep.prototype.ValueTypeName="color";class Mr extends Ri{}Mr.prototype.ValueTypeName="number";class Ky extends Bo{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(i-t);let l=e*a;for(let h=l+a;l!==h;l+=4)oi.slerpFlat(r,0,o,l-a,o,l,c);return r}}class Sr extends Ri{InterpolantFactoryMethodLinear(e){return new Ky(this.times,this.values,this.getValueSize(),e)}}Sr.prototype.ValueTypeName="quaternion";Sr.prototype.InterpolantFactoryMethodSmooth=void 0;class Ir extends Ri{constructor(e,t,n){super(e,t,n)}}Ir.prototype.ValueTypeName="string";Ir.prototype.ValueBufferType=Array;Ir.prototype.DefaultInterpolation=yo;Ir.prototype.InterpolantFactoryMethodLinear=void 0;Ir.prototype.InterpolantFactoryMethodSmooth=void 0;class wr extends Ri{}wr.prototype.ValueTypeName="vector";class hh{constructor(e="",t=-1,n=[],i=Dh){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Xn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push($y(n[o]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(Ri.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);const h=qy(c);c=Ld(c,1,h),l=Ld(l,1,h),!i&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new Mr(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){const l=e[a],h=l.name.match(r);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(l)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,g,_){if(f.length!==0){const m=[],p=[];Jf(f,m,p,g),m.length!==0&&_.push(new u(d,m,p))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let u=0;u<l.length;u++){const d=l[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)f[d[g].morphTargets[_]]=-1;for(const _ in f){const m=[],p=[];for(let w=0;w!==d[g].morphTargets.length;++w){const S=d[g];m.push(S.time),p.push(S.morphTarget===_?1:0)}i.push(new Mr(".morphTargetInfluence["+_+"]",m,p))}c=f.length*o}else{const f=".bones["+t[u].name+"]";n(wr,f+".position",d,"pos",i),n(Sr,f+".quaternion",d,"rot",i),n(wr,f+".scale",d,"scl",i)}}return i.length===0?null:new this(r,c,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Zy(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Mr;case"vector":case"vector2":case"vector3":case"vector4":return wr;case"color":return ep;case"quaternion":return Sr;case"bool":case"boolean":return Pr;case"string":return Ir}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function $y(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Zy(s.type);if(s.times===void 0){const t=[],n=[];Jf(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const hs={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class Jy{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){const f=l[u],g=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}}const Qy=new Jy;class Lr{constructor(e){this.manager=e!==void 0?e:Qy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Lr.DEFAULT_MATERIAL_NAME="__DEFAULT";const Fi={};class eM extends Error{constructor(e,t){super(e),this.response=t}}class tp extends Lr{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=hs.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Fi[e]!==void 0){Fi[e].push({onLoad:t,onProgress:n,onError:i});return}Fi[e]=[],Fi[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=Fi[e],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0;let _=0;const m=new ReadableStream({start(p){w();function w(){u.read().then(({done:S,value:x})=>{if(S)p.close();else{_+=x.byteLength;const L=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let R=0,I=h.length;R<I;R++){const T=h[R];T.onProgress&&T.onProgress(L)}p.enqueue(x),w()}},S=>{p.error(S)})}}});return new Response(m)}else throw new eM(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a===void 0)return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{hs.add(e,l);const h=Fi[e];delete Fi[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{const h=Fi[e];if(h===void 0)throw this.manager.itemError(e),l;delete Fi[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class tM extends Lr{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=hs.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=So("img");function c(){h(),hs.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(u){h(),i&&i(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class nM extends Lr{constructor(e){super(e)}load(e,t,n,i){const r=new Jt,o=new tM(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class uc extends Ot{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Be(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class iM extends uc{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ot.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Be(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const al=new Ye,Dd=new A,Nd=new A;class jh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new re(512,512),this.map=null,this.mapPass=null,this.matrix=new Ye,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Oh,this._frameExtents=new re(1,1),this._viewportCount=1,this._viewports=[new dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Dd.setFromMatrixPosition(e.matrixWorld),t.position.copy(Dd),Nd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Nd),t.updateMatrixWorld(),al.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(al),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(al)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class sM extends jh{constructor(){super(new Mn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=vr*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Kh extends uc{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ot.DEFAULT_UP),this.updateMatrix(),this.target=new Ot,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new sM}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Ud=new Ye,qr=new A,cl=new A;class rM extends jh{constructor(){super(new Mn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new re(4,2),this._viewportCount=6,this._viewports=[new dt(2,1,1,1),new dt(0,1,1,1),new dt(3,1,1,1),new dt(1,1,1,1),new dt(3,0,1,1),new dt(1,0,1,1)],this._cubeDirections=[new A(1,0,0),new A(-1,0,0),new A(0,0,1),new A(0,0,-1),new A(0,1,0),new A(0,-1,0)],this._cubeUps=[new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,0,1),new A(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),qr.setFromMatrixPosition(e.matrixWorld),n.position.copy(qr),cl.copy(n.position),cl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(cl),n.updateMatrixWorld(),i.makeTranslation(-qr.x,-qr.y,-qr.z),Ud.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ud)}}class hi extends uc{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new rM}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class oM extends jh{constructor(){super(new Bh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Zh extends uc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ot.DEFAULT_UP),this.updateMatrix(),this.target=new Ot,this.shadow=new oM}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class co{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class aM extends Lr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=hs.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{t&&t(l),r.manager.itemEnd(e)}).catch(l=>{i&&i(l)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return hs.add(e,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){i&&i(l),hs.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});hs.add(e,c),r.manager.itemStart(e)}}class cM{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Fd(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Fd();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Fd(){return performance.now()}class lM{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,o;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,r=e*i+i;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[r+a]=n[a];o=t}else{o+=t;const a=t/o;this._mixBufferRegion(n,r,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const c=t*this._origIndex;this._mixBufferRegion(n,i,c,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){a.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,o=i;r!==o;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]}_slerp(e,t,n,i){oi.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){const o=this._workIndex*r;oi.multiplyQuaternionsFlat(e,o,e,t,e,n),oi.slerpFlat(e,t,e,t,e,o,i)}_lerp(e,t,n,i,r){const o=1-i;for(let a=0;a!==r;++a){const c=t+a;e[c]=e[c]*o+e[n+a]*i}}_lerpAdditive(e,t,n,i,r){for(let o=0;o!==r;++o){const a=t+o;e[a]=e[a]+e[n+o]*i}}}const $h="\\[\\]\\.:\\/",hM=new RegExp("["+$h+"]","g"),Jh="[^"+$h+"]",uM="[^"+$h.replace("\\.","")+"]",dM=/((?:WC+[\/:])*)/.source.replace("WC",Jh),fM=/(WCOD+)?/.source.replace("WCOD",uM),pM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Jh),mM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Jh),gM=new RegExp("^"+dM+fM+pM+mM+"$"),_M=["material","materials","bones","map"];class xM{constructor(e,t,n){const i=n||_t.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class _t{constructor(e,t,n){this.path=t,this.parsedPath=n||_t.parseTrackName(t),this.node=_t.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new _t.Composite(e,t,n):new _t(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(hM,"")}static parseTrackName(e){const t=gM.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);_M.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const c=n(a.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=_t.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const o=e[i];if(o===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}_t.Composite=xM;_t.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};_t.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};_t.prototype.GetterByBindingType=[_t.prototype._getValue_direct,_t.prototype._getValue_array,_t.prototype._getValue_arrayElement,_t.prototype._getValue_toArray];_t.prototype.SetterByBindingTypeAndVersioning=[[_t.prototype._setValue_direct,_t.prototype._setValue_direct_setNeedsUpdate,_t.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_array,_t.prototype._setValue_array_setNeedsUpdate,_t.prototype._setValue_array_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_arrayElement,_t.prototype._setValue_arrayElement_setNeedsUpdate,_t.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_fromArray,_t.prototype._setValue_fromArray_setNeedsUpdate,_t.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class vM{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const r=t.tracks,o=r.length,a=new Array(o),c={endingStart:sr,endingEnd:sr};for(let l=0;l!==o;++l){const h=r[l].createInterpolant(null);a[l]=h,h.settings=c}this._interpolantSettings=c,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=vm,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,r=e._clip.duration,o=r/i,a=i/r;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,r=i.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);const c=a.parameterPositions,l=a.sampleValues;return c[0]=r,c[1]=r+n,l[0]=e/o,l[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const c=(e-r)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);const o=this._updateTime(t),a=this._updateWeight(e);if(a>0){const c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case Mm:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(o),l[h].accumulateAdditive(a);break;case Dh:default:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(o),l[h].accumulate(i,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,r=this._loopCount;const o=n===ym;if(e===0)return r===-1?i:o&&(r&1)===1?t-i:i;if(n===Mf){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=t||i<0){const a=Math.floor(i/t);i-=t*a,r+=Math.abs(a);const c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){const l=e<0;this._setEndings(l,!l,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(o&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=rr,i.endingEnd=rr):(e?i.endingStart=this.zeroSlopeAtStart?rr:sr:i.endingStart=Ga,t?i.endingEnd=this.zeroSlopeAtEnd?rr:sr:i.endingEnd=Ga)}_scheduleFading(e,t,n){const i=this._mixer,r=i.time;let o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,c=o.sampleValues;return a[0]=r,c[0]=t,a[1]=r+e,c[1]=n,this}}const yM=new Float32Array(1);class MM extends Us{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,o=e._propertyBindings,a=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName;let h=l[c];h===void 0&&(h={},l[c]=h);for(let u=0;u!==r;++u){const d=i[u],f=d.name;let g=h[f];if(g!==void 0)++g.referenceCount,o[u]=g;else{if(g=o[u],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,c,f));continue}const _=t&&t._propertyBindings[u].binding.parsedPath;g=new lM(_t.create(n,f,_),d.ValueTypeName,d.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,c,f),o[u]=g}a[u].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,r=this._actionsByClip;let o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{const a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,o=this._actionsByClip,a=o[r],c=a.knownActions,l=c[c.length-1],h=e._byClipCacheIndex;l._byClipCacheIndex=h,c[h]=l,c.pop(),e._byClipCacheIndex=null;const u=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],c.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,r=this._bindings;let o=i[t];o===void 0&&(o={},i[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[i],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new Qf(new Float32Array(2),new Float32Array(2),1,yM),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){const i=t||this._root,r=i.uuid;let o=typeof e=="string"?hh.findByName(i,e):e;const a=o!==null?o.uuid:e,c=this._actionsByClip[a];let l=null;if(n===void 0&&(o!==null?n=o.blendMode:n=Dh),c!==void 0){const u=c.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;l=c.knownActions[0],o===null&&(o=l._clip)}if(o===null)return null;const h=new vM(this,o,t,n);return this._bindAction(h,l),this._addInactiveAction(h,a,r),h}existingAction(e,t){const n=t||this._root,i=n.uuid,r=typeof e=="string"?hh.findByName(n,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(i,e,r,o);const a=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)a[l].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){const o=r.knownActions;for(let a=0,c=o.length;a!==c;++a){const l=o[a];this._deactivateAction(l);const h=l._cacheIndex,u=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,c=a[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}const i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(const o in r){const a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}const Od=new Ye;class SM{constructor(e,t,n=0,i=1/0){this.ray=new Fo(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Fh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Od.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Od),this}intersectObject(e,t=!0,n=[]){return uh(e,this,n,t),n.sort(Bd),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)uh(e[i],this,n,t);return n.sort(Bd),n}}function Bd(s,e){return s.distance-e.distance}function uh(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let o=0,a=r.length;o<a;o++)uh(r[o],e,t,!0)}}const kd=new re;class dc{constructor(e=new re(1/0,1/0),t=new re(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=kd.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,kd).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Th}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Th);class wM extends zf{constructor(){super();const e=new Fn;e.deleteAttribute("uv");const t=new rt({side:gn}),n=new rt,i=new hi(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);const r=new Z(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const o=new Z(e,n);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);const a=new Z(e,n);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);const c=new Z(e,n);c.position.set(6.167,.857,7.803),c.rotation.set(0,.561,0),c.scale.set(3.927,6.285,3.687),this.add(c);const l=new Z(e,n);l.position.set(-2.017,.018,6.124),l.rotation.set(0,.333,0),l.scale.set(2.002,4.566,2.064),this.add(l);const h=new Z(e,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);const u=new Z(e,n);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);const d=new Z(e,Qs(50));d.position.set(-16.116,14.37,8.208),d.scale.set(.1,2.428,2.739),this.add(d);const f=new Z(e,Qs(50));f.position.set(-16.109,18.021,-8.207),f.scale.set(.1,2.425,2.751),this.add(f);const g=new Z(e,Qs(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);const _=new Z(e,Qs(43));_.position.set(-.462,8.89,14.52),_.scale.set(4.38,5.441,.088),this.add(_);const m=new Z(e,Qs(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);const p=new Z(e,Qs(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function Qs(s){const e=new on;return e.color.setScalar(s),e}const Yr=new A;function kn(s,e,t,n,i,r){const o=2*Math.PI*i/4,a=Math.max(r-2*i,0),c=Math.PI/4;Yr.copy(e),Yr[n]=0,Yr.normalize();const l=.5*o/(o+a),h=1-Yr.angleTo(s)/c;return Math.sign(Yr[t])===1?h*l:a/(o+a)+l+l*(1-h)}class bM extends Fn{constructor(e=1,t=1,n=1,i=2,r=.1){if(i=i*2+1,r=Math.min(e/2,t/2,n/2,r),super(1,1,1,i,i,i),i===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const a=new A,c=new A,l=new A(e,t,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,f=h.length/6,g=new A,_=.5/i;for(let m=0,p=0;m<h.length;m+=3,p+=2)switch(a.fromArray(h,m),c.copy(a),c.x-=Math.sign(c.x)*_,c.y-=Math.sign(c.y)*_,c.z-=Math.sign(c.z)*_,c.normalize(),h[m+0]=l.x*Math.sign(a.x)+c.x*r,h[m+1]=l.y*Math.sign(a.y)+c.y*r,h[m+2]=l.z*Math.sign(a.z)+c.z*r,u[m+0]=c.x,u[m+1]=c.y,u[m+2]=c.z,Math.floor(m/f)){case 0:g.set(1,0,0),d[p+0]=kn(g,c,"z","y",r,n),d[p+1]=1-kn(g,c,"y","z",r,t);break;case 1:g.set(-1,0,0),d[p+0]=1-kn(g,c,"z","y",r,n),d[p+1]=1-kn(g,c,"y","z",r,t);break;case 2:g.set(0,1,0),d[p+0]=1-kn(g,c,"x","z",r,e),d[p+1]=kn(g,c,"z","x",r,n);break;case 3:g.set(0,-1,0),d[p+0]=1-kn(g,c,"x","z",r,e),d[p+1]=1-kn(g,c,"z","x",r,n);break;case 4:g.set(0,0,1),d[p+0]=1-kn(g,c,"x","y",r,e),d[p+1]=1-kn(g,c,"y","x",r,t);break;case 5:g.set(0,0,-1),d[p+0]=kn(g,c,"x","y",r,e),d[p+1]=1-kn(g,c,"y","x",r,t);break}}}function fi(s,e){const t=document.createElement("canvas");return t.width=s,t.height=e,{c:t,g:t.getContext("2d")}}function Fs(s,e=1,t=1,n=!0){const i=new Cr(s);return i.wrapS=i.wrapT=Cs,i.repeat.set(e,t),i.anisotropy=8,n&&(i.colorSpace=Bt),i}let ll=7;const vt=()=>(ll=ll*16807%2147483647,(ll-1)/2147483646);function Ro(s=["#9c6b43","#a97650","#8f603b","#b0805a","#99673f","#a5724a"]){const{c:e,g:t}=fi(1024,1024),n=8,i=1024/n;for(let r=0;r<n;r++){let o=-vt()*400;for(;o<1024;){const a=300+vt()*380;t.fillStyle=s[Math.floor(vt()*s.length)],t.fillRect(o,r*i,a,i);for(let c=0;c<26;c++){t.strokeStyle=`rgba(${vt()<.5?"60,35,15":"210,170,120"},${.05+vt()*.08})`,t.lineWidth=1+vt()*2;const l=r*i+vt()*i;t.beginPath(),t.moveTo(o,l),t.bezierCurveTo(o+a*.3,l+(vt()-.5)*10,o+a*.6,l+(vt()-.5)*10,o+a,l+(vt()-.5)*6),t.stroke()}t.fillStyle="rgba(40,22,10,.55)",t.fillRect(o,r*i,3,i),o+=a}t.fillStyle="rgba(40,22,10,.6)",t.fillRect(0,r*i,1024,3)}return Fs(e,2.2,2.2)}function cs(s="#2e4a47",e="rgba(214,190,130,.22)"){const{c:t,g:n}=fi(512,512);n.fillStyle=s,n.fillRect(0,0,512,512);for(let r=0;r<900;r++)n.fillStyle=`rgba(0,0,0,${vt()*.035})`,n.fillRect(vt()*512,vt()*512,8+vt()*30,8+vt()*30);n.strokeStyle=e,n.fillStyle=e,n.lineWidth=2.2;const i=(r,o,a)=>{n.save(),n.translate(r,o),n.scale(a,a),n.beginPath(),n.moveTo(0,22),n.quadraticCurveTo(2,0,0,-22),n.stroke();for(let c=-2;c<=2;c++)n.beginPath(),n.ellipse(-7,c*8,7,2.6,-.5,0,Math.PI*2),n.fill(),n.beginPath(),n.ellipse(7,c*8-3,7,2.6,.5,0,Math.PI*2),n.fill();n.restore()};for(let r=0;r<4;r++)for(let o=-1;o<4;o++)i(64+o*128+r%2*64,64+r*128,1);return Fs(t,3,1.5)}function np(s="#d9d2bf",e="#5d6e62"){const{c:t,g:n}=fi(512,512),i=4,r=512/i;for(let o=0;o<i;o++)for(let a=0;a<i;a++){n.fillStyle=(a+o)%2?s:e,n.fillRect(a*r,o*r,r,r);for(let c=0;c<40;c++)n.fillStyle=`rgba(0,0,0,${vt()*.04})`,n.fillRect(a*r+vt()*r,o*r+vt()*r,6,6)}n.strokeStyle="rgba(60,55,45,.5)",n.lineWidth=3;for(let o=0;o<=i;o++)n.beginPath(),n.moveTo(o*r,0),n.lineTo(o*r,512),n.stroke(),n.beginPath(),n.moveTo(0,o*r),n.lineTo(512,o*r),n.stroke();return Fs(t,3,3)}function La(s=["#6b2430","#1f2a44","#d6b26a","#2c3a5c","#b9863c","#7d2e3a","#e2cfa0"]){const{c:e,g:t}=fi(1024,768);t.fillStyle=s[0],t.fillRect(0,0,1024,768);const n=(i,r,o)=>{t.strokeStyle=o,t.lineWidth=r,t.strokeRect(i,i,1024-i*2,768-i*2)};n(26,20,s[1]),n(60,6,s[2]),n(92,30,s[3]),n(120,4,s[2]),t.fillStyle=s[2];for(let i=120;i<910;i+=46)t.beginPath(),t.arc(i,92,7,0,7),t.arc(i,676,7,0,7),t.fill();for(let i=140;i<640;i+=46)t.beginPath(),t.arc(92,i,7,0,7),t.arc(932,i,7,0,7),t.fill();t.save(),t.translate(512,384);for(let i=0;i<4;i++){t.fillStyle=[s[1],s[4],s[5],s[6]][i],t.beginPath();const r=210-i*50;for(let o=0;o<=16;o++){const a=o/16*Math.PI*2,c=o%2?r*.78:r;t.lineTo(Math.cos(a)*c*1.35,Math.sin(a)*c)}t.fill()}t.restore();for(let i=0;i<3e3;i++)t.fillStyle=`rgba(${vt()<.5?"0,0,0":"255,240,220"},${vt()*.05})`,t.fillRect(vt()*1024,vt()*768,3,3);return Fs(e,1,1)}function ji(s,e=.07){const{c:t,g:n}=fi(256,256);n.fillStyle=s,n.fillRect(0,0,256,256);for(let i=0;i<256;i+=3)n.fillStyle=`rgba(0,0,0,${e})`,n.fillRect(0,i,256,1);for(let i=0;i<256;i+=3)n.fillStyle=`rgba(255,255,255,${e*.5})`,n.fillRect(i,0,1,256);return Fs(t,2,2)}function ip(){const{c:s,g:e}=fi(512,512),t=e.createLinearGradient(0,0,0,512);t.addColorStop(0,"#0b1030"),t.addColorStop(.6,"#1b2350"),t.addColorStop(1,"#3a2c5a"),e.fillStyle=t,e.fillRect(0,0,512,512);for(let r=0;r<160;r++){e.fillStyle=`rgba(255,255,240,${.3+vt()*.7})`;const o=vt()*2;e.fillRect(vt()*512,vt()*360,o,o)}const n=e.createRadialGradient(370,120,10,370,120,90);n.addColorStop(0,"rgba(255,248,220,.9)"),n.addColorStop(.35,"rgba(255,240,200,.25)"),n.addColorStop(1,"rgba(255,240,200,0)"),e.fillStyle=n,e.fillRect(260,20,220,220),e.fillStyle="#f6edd0",e.beginPath(),e.arc(370,120,34,0,7),e.fill(),e.fillStyle="rgba(180,170,140,.35)",e.beginPath(),e.arc(360,112,7,0,7),e.arc(382,132,5,0,7),e.fill(),e.fillStyle="#070a18",e.beginPath(),e.moveTo(0,512);for(let r=0;r<=512;r+=16)e.lineTo(r,420-Math.abs(Math.sin(r*.05))*50-vt()*30);e.lineTo(512,512),e.fill(),e.lineWidth=14,e.strokeStyle="#070a18",e.lineCap="round",e.beginPath(),e.moveTo(-10,300),e.quadraticCurveTo(150,280,300,318),e.stroke(),e.lineWidth=6,e.beginPath(),e.moveTo(150,292),e.lineTo(210,250),e.stroke();const i=Fs(s);return i.wrapS=i.wrapT=Si,i}function Qh(){const{c:s,g:e}=fi(64,64),t=e.createRadialGradient(32,32,0,32,32,32);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.25,"rgba(255,255,255,.6)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),new Cr(s)}function TM(s){const{c:e,g:t}=fi(256,320);if(s===0){const i=t.createLinearGradient(0,0,0,320);i.addColorStop(0,"#c9a06a"),i.addColorStop(1,"#5b3a4e"),t.fillStyle=i,t.fillRect(0,0,256,320),t.fillStyle="#2c2440",t.beginPath(),t.moveTo(0,320),t.lineTo(0,210),t.lineTo(90,150),t.lineTo(150,200),t.lineTo(256,130),t.lineTo(256,320),t.fill(),t.fillStyle="#f2e6c4",t.beginPath(),t.arc(180,80,26,0,7),t.fill()}else t.fillStyle="#20324a",t.fillRect(0,0,256,320),t.fillStyle="#e8dcc0",t.beginPath(),t.ellipse(128,160,90,52,0,0,7),t.fill(),t.fillStyle="#3f8f86",t.beginPath(),t.arc(128,160,38,0,7),t.fill(),t.fillStyle="#0d1520",t.beginPath(),t.arc(128,160,16,0,7),t.fill(),t.fillStyle="#fff",t.beginPath(),t.arc(140,148,7,0,7),t.fill();const n=new Cr(e);return n.colorSpace=Bt,n}function EM(){const{c:s,g:e}=fi(512,512),t=e.createLinearGradient(0,0,0,512);t.addColorStop(0,"#7fb4e6"),t.addColorStop(.7,"#cfe3f0"),t.addColorStop(1,"#f3e7cf"),e.fillStyle=t,e.fillRect(0,0,512,512),e.fillStyle="rgba(255,255,255,.85)";for(const[i,r,o]of[[120,120,1],[360,80,.7],[300,200,.5]])for(let a=0;a<6;a++)e.beginPath(),e.arc(i+a*22*o,r+Math.sin(a)*8*o,26*o,0,7),e.fill();e.fillStyle="#5f8a4a",e.beginPath(),e.moveTo(0,512);for(let i=0;i<=512;i+=16)e.lineTo(i,400-Math.abs(Math.sin(i*.04))*70-vt()*20);e.lineTo(512,512),e.fill(),e.fillStyle="#3f6b3a",e.beginPath(),e.moveTo(0,512);for(let i=0;i<=512;i+=12)e.lineTo(i,450-Math.abs(Math.sin(i*.07+1))*40);e.lineTo(512,512),e.fill();const n=Fs(s);return n.wrapS=n.wrapT=Si,n}function AM(s){const{c:e,g:t}=fi(256,320);t.fillStyle=["#fbf7ee","#f6f0ff","#eef8f2","#fff6e8"][s%4],t.fillRect(0,0,256,320),t.lineCap="round",t.lineJoin="round";const n=(a,c,l)=>{t.strokeStyle=a,t.lineWidth=c,t.beginPath(),l.forEach(([h,u],d)=>d?t.lineTo(h+(vt()-.5)*3,u+(vt()-.5)*3):t.moveTo(h,u)),t.stroke()},i=(a,c,l,h,u)=>{t.fillStyle=a,t.beginPath(),t.ellipse(c,l,h,u,0,0,7),t.fill()},r=s%4;if(r===0)i("#d9b07a",128,190,80,60),i("#d9b07a",128,120,60,50),i("#3a2a22",128,135,30,20),i("#222",105,110,7,8),i("#222",150,110,7,8),i("#e86a7a",128,160,9,14),n("#3a2a22",5,[[80,90],[70,120],[95,100]]),n("#3a2a22",5,[[175,90],[185,120],[160,100]]),n("#4a6cd1",4,[[30,290],[80,290],[130,286],[200,292]]);else if(r===1)i("#f3e2a0",200,60,26,26),n("#5a3a22",10,[[40,320],[60,200],[70,120]]),n("#5a3a22",6,[[60,200],[180,200]]),i("#8a6a4a",130,170,30,36),i("#fff",120,160,9,9),i("#fff",140,160,9,9),i("#000",120,160,4,4),i("#000",140,160,4,4);else if(r===2){n("#c0392b",5,[[40,300],[40,180],[128,110],[216,180],[216,300],[40,300]]),n("#7a3cff",5,[[110,300],[110,240],[146,240],[146,300]]),t.fillStyle="#7a3cff",t.font="bold 30px sans-serif",t.fillText("?",120,280);for(const[a,c]of[[70,"#6b3a2a"],[186,"#e8c25a"]])i(c,a,230,14,16),i("#f2c9a8",a,232,9,10),n("#333",3,[[a,245],[a,280],[a-10,300]]),n("#333",3,[[a,280],[a+10,300]])}else for(let a=100;a>5;a-=8)t.strokeStyle=["#7a3cff","#2fd4ff","#ff3d8b"][a/8%3|0],t.lineWidth=5,t.beginPath(),t.arc(128+Math.sin(a)*4,160,a,a*.1,a*.1+5.5),t.stroke();t.fillStyle=r%2?"#7a3cff":"#e8426f",t.font="italic bold 22px cursive",t.fillText(r%2?"Keira":"MILA",18,34);const o=new Cr(e);return o.colorSpace=Bt,o}function RM(){const{c:s,g:e}=fi(256,128);e.fillStyle="#f4f4f0",e.fillRect(0,0,256,128),e.fillStyle="#222";for(let n=0;n<12;n++){const i=n%6*44+(n>=6?22:0)+10,r=n>=6?90:38;e.beginPath();for(let o=0;o<5;o++){const a=o/5*6.283;e.lineTo(i+Math.cos(a)*12,r+Math.sin(a)*12)}e.fill()}const t=new Cr(s);return t.colorSpace=Bt,t}const ze={x0:-5,x1:5,z0:-3,z1:3.2,h:3,kitchenX:1.6},qt=2.1,$t=2.95,dh=1.05,Te=(s,e=.7,t={})=>new rt({color:s,roughness:e,...t});function st(s,e,t,n,i=.04,r=3){const o=new Z(new bM(s,e,t,r,Math.min(i,s/2,e/2,t/2)),n);return o.castShadow=!0,o.receiveShadow=!0,o}const xt=(s,e)=>(s.userData.item=e,s);function me(s,e,t,n=new rt){const i=new Z(new Fn(s,e,t),n);return i.castShadow=!0,i.receiveShadow=!0,i}function Ct(s,e,t,n,i=24){const r=new Z(new Pt(s,e,t,i),n);return r.castShadow=!0,r.receiveShadow=!0,r}const ee=(s,e,t,n,i)=>(s.position.set(e,t,n),i?.add(s),s);function CM(){const s=new He,e={body:ji("#8a6a3e",.09)},t=new Kt({map:e.body,roughness:.92,sheen:.4,sheenColor:new Be(14268810),sheenRoughness:.8}),n=2.5,i=1,r=ee(st(n,.3,i,t,.06),0,.27,0,s),o=ee(st(n,.62,.24,t,.1),0,.68,-i/2+.12,s),a=ee(st(.24,.5,i,t,.1),-n/2+.12,.5,0,s),c=ee(st(.24,.5,i,t,.1),n/2-.12,.5,0,s),l=Te(3876376,.5);for(const x of[-1,1])for(const L of[-1,1])ee(Ct(.035,.025,.12,l,10),x*(n/2-.12),.06,L*(i/2-.1),s);const h=(n-.48)/3,u=[];let d,f;for(let x=0;x<3;x++){const L=-h+x*h,R=st(h-.02,.17,i-.26,t,.07,4);x===1?(d=new He,d.position.set(L,.43,-i/2+.24),R.position.set(0,.085,(i-.26)/2),d.add(R),s.add(d),f=R):ee(R,L,.515,.12,s),u.push(R),ee(st(h-.03,.42,.16,t,.08,4),L,.78,-i/2+.3,s).rotation.x=-.18}const g=ee(me(h-.08,.02,i-.34,Te(1182228,1)),f.parent.position.x,.421,.13,s);g.castShadow=!1;const _=new Kt({map:ji("#c9a77a",.08),roughness:.9,sheen:.5,sheenColor:new Be(16777215)});ee(st(.42,.4,.14,_,.1,4),-n/2+.42,.78,-.12,s).rotation.set(-.3,.3,.1);const m=new Kt({color:2051390,roughness:.6,sheen:1,sheenColor:new Be(7328164),sheenRoughness:.35}),p=new Kt({color:12945966,roughness:.5,sheen:1,sheenColor:new Be(16769184)}),w=[r,o,a,c,...u];s.traverse(x=>{x.isMesh&&x.material===t&&(w.includes(x)||w.push(x))});const S=s.children.find(x=>x.material===_);return{group:s,cushionPivot:d,cushion:f,hitboxes:[f],restyle(x){for(const L of w)L.material=x?m:t;S.material=x?p:_,l.color.set(x?11570519:3876376),x&&(l.metalness=.8)}}}function PM(){const s=new He,e=new He;s.add(e);const t=Te(5913126,.6),n=1.6,i=2.3,r=.36;ee(me(n,.05,r,t),0,i,0,e),ee(me(.05,i,r,t),-n/2,i/2,0,e),ee(me(.05,i,r,t),n/2,i/2,0,e),ee(me(n,i,.03,Te(4007963,.8)),0,i/2,-r/2+.015,e);const o=[.08,.6,1.12,1.64];for(const g of o)ee(me(n-.05,.04,r-.02,t),0,g,0,e);const a=[8203834,2898524,4156250,13213802,5978702,9067051,547,10974013,4873850,7021616];let c,l=3;o.forEach((g,_)=>{let m=-n/2+.06;for(;m<n/2-.12;){l=(l*7+3)%97;const p=.04+l%5*.012,w=.3+l%7*.025;if(_===2&&m>.1&&!c){const x=me(.075,.42,.26,Te(2759485,.4,{emissive:6962431,emissiveIntensity:.18}));ee(x,m+.04,g+.02+.21,.02,e),c=x,m+=.09;continue}if(l%11===0){m+=.12;continue}const S=me(p,w,.24+l%3*.02,Te(a[l%a.length],.75));ee(S,m+p/2,g+.02+w/2,.02,e),l%13===0&&(S.rotation.z=.25),m+=p+.004}});const h=new He;s.add(h);const u=Te(460300,1);ee(me(1,2,.02),0,1,-r/2-.02,h).material=u;const d=new Z(new Wi(.42,40),Te(2826808,.5,{metalness:.4}));ee(d,0,1,-r/2-0,h);const f=new Z(new fs(.42,.035,10,48),Te(10254908,.3,{metalness:.9,emissive:6962431,emissiveIntensity:.3}));ee(f,0,1,-r/2+.02,h);for(let g=0;g<6;g++){const _=g/6*Math.PI*2,m=new Z(new Wi(.035,3),new on({color:10482687}));ee(m,Math.cos(_)*.28,1+Math.sin(_)*.28,-r/2+.01,h).rotation.z=_}return h.visible=!1,{group:s,slider:e,oddBook:c,doorway:h}}function IM(){const s=new He,e=new Kt({color:11126720,roughness:.35,clearcoat:.6}),t=.9,n=1.95,i=.72;ee(st(t,n,i,e,.06),0,n/2,0,s);const r=ee(me(t-.1,n-.5,.02,Te(16052714,.4,{emissive:16774880,emissiveIntensity:.25})),0,n/2-.15,i/2-.02,s);r.castShadow=!1;const o=new He;o.position.set(t/2,0,i/2),s.add(o);const a=ee(st(t,n-.04,.08,e,.05),-t/2,n/2,.04,o),c=Te(14540253,.15,{metalness:1});ee(st(.04,.6,.05,c,.02),-t+.1,n/2+.2,.11,o),ee(Ct(.03,.03,.01,Te(14721072)),-.5,1.5,.085,o).rotation.x=Math.PI/2,ee(Ct(.03,.03,.01,Te(4156250)),-.3,1.38,.085,o).rotation.x=Math.PI/2;const l=new hi(16773590,0,2.5,2);l.position.set(0,1.3,i/2+.3),s.add(l);const h=[];for(const u of[.55,.95,1.35]){const d=new He;d.position.set(0,u,.2),s.add(d),ee(me(t-.12,.02,.5,Te(15266559,.1,{transparent:!0,opacity:.6})),0,0,0,d),h.push(d)}return{group:s,door:o,doorMesh:a,light:l,shelves:h,hit:[a]}}function LM(s){const e=new He;if(s==="milk"){ee(st(.1,.24,.1,Te(16250094,.5),.02),0,.12,0,e),ee(me(.102,.06,.102,Te(2912191,.5)),0,.14,0,e);const t=ee(st(.26,.06,.12,Te(13152909,.9),.02),.22,.03,0,e);for(let n=0;n<4;n++)ee(new Z(new Ft(.025,12,8),Te(15918800,.6)),-.09+n*.06,.06,0,t).scale.y=1.25}else s==="fruit"?[12597547,15105570,8367676,13934615,12597547].forEach((n,i)=>ee(new Z(new Ft(.05,16,12),Te(n,.45)),-.24+i*.12,.05,i%2*.06,e)):s==="pizza"&&(ee(Ct(.2,.2,.05,Te(15260085,.9),6),0,.03,0,e),ee(st(.14,.18,.1,Te(9323693,.5),.02),.26,.09,0,e),ee(Ct(.05,.05,.02,Te(13934615,.4)),.26,.19,0,e));return e}function DM(){const s=new He,e=new Kt({color:10475752,roughness:.02,transmission:.9,thickness:.02,transparent:!0,opacity:.25});ee(me(1.15,.6,.42,e),0,.3,0,s).castShadow=!1;const t=ee(me(1.1,.5,.38,Te(1789803,.1,{emissive:933202,emissiveIntensity:.6,transparent:!0,opacity:.55})),0,.27,0,s);t.castShadow=!1,ee(me(1.17,.04,.44,Te(2236962,.4)),0,.62,0,s),ee(me(1.1,.05,.38,Te(12759680,1)),0,.03,0,s);for(let o=0;o<6;o++){const a=ee(Ct(.008,.015,.3+o%3*.08,Te(3046735,.8),5),-.45+o*.07,.2,-.1+o%2*.1,s);a.rotation.z=(o%3-1)*.15}ee(me(.14,.2,.03,Te(5913126)),.35,.15,-.12,s);const n=[],i=[16747069,7337983,16769354,12610303];for(let o=0;o<5;o++){const a=new He,c=new Z(new Ft(.04,12,8),Te(i[o%4],.4,{emissive:i[o%4],emissiveIntensity:.35}));c.scale.set(1.4,1,.6),a.add(c);const l=new Z(new wo(.03,.05,4),c.material);l.rotation.z=Math.PI/2,l.position.x=-.07,a.add(l),a.userData={r:.25+o*.05,s:.5+o*.13,y:.12+o*.07,p:o*1.7},s.add(a),n.push(a)}const r=new hi(6281471,1.2,2.2,2);return r.position.set(0,.5,.4),s.add(r),{group:s,fish:n}}function NM(){const s=new He;ee(Ct(.2,.15,.4,Te(2959925,.5)),0,.2,0,s);const e=Te(3107652,.6,{side:rn});for(let t=0;t<9;t++){const n=new Z(new Ft(.16,10,6),e);n.scale.set(.45,.08,1.4);const i=t/9*Math.PI*2;n.position.set(Math.cos(i)*.16,.7+t%3*.28,Math.sin(i)*.16),n.rotation.set(.6*Math.sin(i),-i,.6*Math.cos(i)),n.castShadow=!0,s.add(n),ee(Ct(.01,.01,.4+t%3*.28,Te(4020778),5),Math.cos(i)*.06,.4+(.4+t%3*.28)/2,Math.sin(i)*.06,s)}return s}function UM(){const s=new He;ee(st(.5,.1,.4,Te(6963496,.4),.02),0,.05,0,s);const e=ee(Ct(.17,.17,.01,Te(1118481,.25),32),-.04,.11,0,s);ee(Ct(.06,.06,.012,Te(14045242,.5)),0,.004,0,e);const t=ee(me(.02,.02,.24,Te(13421772,.2,{metalness:1})),.17,.13,-.02,s);return t.rotation.y=.35,{group:s,disc:e}}function FM(s,e,t,n){const i=new He,r=[],o=14;for(let h=0;h<=o;h++){const u=h/o;r.push(new A(s+(e-s)*u,t-Math.sin(u*Math.PI*3)**2*.22,n))}const a=new Gf(r);i.add(new Z(new Yh(a,80,.006,4),Te(2236962)));const c=new rt({color:16769704,emissive:16758861,emissiveIntensity:2.4});for(let h=0;h<22;h++){const u=a.getPoint(h/21);ee(new Z(new Ft(.025,8,6),c),u.x,u.y-.03,u.z,i)}const l=new hi(16758891,1.4,5,2);return l.position.set((s+e)/2,t-.3,n+.4),i.add(l),i}function OM(){const s=new He,e=Te(9071178,.85),t=Te(14271392,.9),n=ee(new Z(new Ft(.14,20,16),e),0,.15,0,s);n.scale.set(1,1.15,.9),n.castShadow=!0,ee(new Z(new Ft(.11,16,12),t),0,.12,.04,s).scale.set(.9,1.1,.8);const r=ee(new Z(new Ft(.12,20,16),e),0,.34,0,s);r.scale.set(1.1,.9,.95),r.castShadow=!0;const o=Te(15259832,.9),a=.35;for(const l of[-1,1]){const h=ee(new Z(new Wi(.06,24),o),l*.052,a,.105,s);h.rotation.y=l*.35;const u=ee(new Z(new Ft(.032,16,12),Te(16757279,.2,{emissive:16751104,emissiveIntensity:.5})),l*.052,a,.11,s);ee(new Z(new Ft(.017,12,8),Te(328965,.1)),0,0,.022,u);const d=ee(new Z(new wo(.03,.09,6),e),l*.085,.45,-.01,s);d.rotation.z=-l*.4}ee(new Z(new wo(.015,.04,6),Te(3811866)),0,.31,.125,s).rotation.x=Math.PI*.6;const c=[];for(const l of[-1,1]){const h=ee(new Z(new Ft(.1,12,10),e),l*.13,.15,-.01,s);h.scale.set(.35,1,.8),c.push(h)}return{group:s,wings:c,head:r}}function BM(){const s=new He,e=Te(6969994,.95),t=new Z(new fs(.38,.11,12,32),e);return t.rotation.x=Math.PI/2,t.position.y=.1,t.castShadow=!0,t.receiveShadow=!0,s.add(t),ee(Ct(.38,.38,.06,Te(13220256,1)),0,.04,0,s),s}function sp(){const s=new Ft(.45,32,20,0,Math.PI*2,0,Math.PI/2),e=s.attributes.position;for(let r=0;r<e.count;r++){const o=e.getX(r),a=e.getY(r),c=e.getZ(r),l=Math.sin(o*9)*Math.cos(c*8)*.03+Math.sin(o*23+c*17)*.01;e.setXYZ(r,o*1.25+l,a*.55+l*2,c+l)}s.computeVertexNormals();const t=new rt({map:ji("#a8743a",.12),roughness:.95}),n=new Z(s,t);n.castShadow=!0,n.receiveShadow=!0;const i=new He;i.add(n);for(let r=0;r<14;r++)ee(Ct(.006,.006,.07,Te(14731162),4),-.5+r*.075,.02,.43,i).rotation.x=1.2;return i}function kM(){const s=new He,{x0:e,x1:t,z0:n,z1:i,h:r,kitchenX:o}=ze,a=new Z(new Yt(o-e,i-n),new rt({map:Ro(),roughness:.55}));a.rotation.x=-Math.PI/2,a.position.set((e+o)/2,0,(n+i)/2),a.receiveShadow=!0,s.add(a);const c=new Z(new Yt(t-o,i-n),new rt({map:np(),roughness:.35}));c.rotation.x=-Math.PI/2,c.position.set((o+t)/2,.001,(n+i)/2),c.receiveShadow=!0,s.add(c),c.material.map.repeat.set(2.4,4.3);const l=Te(2760216,.9);ee(me(t-e+.3,.3,.15,l),(e+t)/2,-.15,i+.075,s),ee(me(.15,.3,i-n+.3),t+.075,-.15,(n+i)/2,s).material=l;const h=new Z(new Yt(40,40),new on({visible:!1}));h.rotation.x=-Math.PI/2,s.add(h);const u=new rt({map:cs(),roughness:.85}),d=new rt({map:cs("#cdbf9f","rgba(90,110,95,.18)"),roughness:.85}),f=Te(15525074,.5),g=Te(2760216,.9),_=.15,m=(J,ve,le,b,y)=>{const N=me(ve,b,_,y);return N.position.set(J,le+b/2,n-_/2),N.castShadow=!1,s.add(N),N},p=-.2,w=1.1,S=.95,x=2.3;m((e+p)/2,p-e,0,r,u),m((w+o)/2,o-w,0,r,u),m((p+w)/2,w-p,0,S,u),m((p+w)/2,w-p,x,r-x,u),m((o+t)/2,t-o,0,r,d),ee(me(t-e+_,.06,_+.02,g),(e+t)/2-_/2,r+.03,n-_/2,s);const L=(J,ve,le,b)=>{const y=me(_,b-le,ve-J,u);y.position.set(e-_/2,(le+b)/2,(J+ve)/2),y.castShadow=!1,s.add(y)};L(n,qt,0,r),L($t,i,0,r),L(qt,$t,2.05,r),ee(me(_+.02,.06,i-n+_),e-_/2,r+.03,(n+i)/2-_/2,s).material=g,ee(me(_+.02,r+.06,.06),e-_/2,(r+.06)/2,i+.03,s).material=g,ee(me(o-e,.14,.03),(e+o)/2,.07,n+.015,s).material=f,ee(me(.03,.14,qt-n),e+.015,.07,(n+qt)/2,s).material=f,ee(me(.03,.14,i-$t),e+.015,.07,($t+i)/2,s).material=f;for(const J of[qt-.04,$t+.04])ee(me(.05,2.12,.08),e+.02,1.06,J,s).material=f;ee(me(.05,.08,$t-qt+.16),e+.02,2.09,(qt+$t)/2,s).material=f,ee(me(o-e,.04,.03),(e+o)/2,2.55,n+.015,s).material=f,ee(me(.03,.04,i-n),e+.015,2.55,(n+i)/2,s).material=f;const R=Te(15327695,.45),I=new Z(new Yt(4,3.4),new on({map:ip()}));I.position.set((p+w)/2+.3,(S+x)/2+.1,n-1.4),s.add(I);const T=(p+w)/2,v=(S+x)/2,M=w-p,C=x-S;ee(me(M+.12,.08,.26),T,S-.02,n+.02,s).material=R,ee(me(M+.12,.07,.12),T,x+.03,n-.02,s).material=R,ee(me(.07,C,.12),p-.03,v,n-.02,s).material=R,ee(me(.07,C,.12),w+.03,v,n-.02,s).material=R,ee(me(.04,C,.05),T,v,n-.06,s).material=R,ee(me(M,.04,.05),T,v+.1,n-.06,s).material=R;const z=new Z(new Yt(M,C),new Kt({color:9416920,roughness:.05,transparent:!0,opacity:.12}));z.position.set(T,v,n-.07),s.add(z);const O=new Z(new Yt(M,C),new on({visible:!1}));O.position.set(T,v,n+.01),s.add(O);const B=new rt({map:ji("#5b3a4e",.08),roughness:.95,side:rn});for(const J of[-1,1]){const ve=new Yt(.42,2.3,16,1),le=ve.attributes.position;for(let y=0;y<le.count;y++)le.setZ(y,Math.sin(le.getX(y)*40)*.035);ve.computeVertexNormals();const b=new Z(ve,B);b.position.set(T+J*(M/2+.2),1.45,n+.09),b.castShadow=!0,s.add(b)}ee(Ct(.015,.015,M+1.1,Te(9071162,.3,{metalness:.8})),T,2.62,n+.1,s).rotation.z=Math.PI/2;const W=Te(2826520,.4);[[-2.7,0],[-1.4,1]].forEach(([J,ve],le)=>{const b=le?.55:.7,y=le?.68:.88;xt(ee(me(b+.06,y+.06,.04,W),J,1.95,n+.02,s),le?"eyePainting":"painting");const N=new Z(new Yt(b,y),new rt({map:TM(ve),roughness:.6}));N.position.set(J,1.95,n+.045),s.add(N),xt(N,le?"eyePainting":"painting")});const k=new Z(new Yt(3.3,2.3),new rt({map:La(),roughness:1}));xt(k,"rug"),k.rotation.x=-Math.PI/2,k.position.set(-2.1,.006,-.7),k.receiveShadow=!0,s.add(k);const K=Te(5913124,.45),H=xt(new He,"coffeeTable");H.position.set(-2.1,0,-.7),s.add(H),ee(st(1.2,.06,.62,K,.02),0,.4,0,H);for(const J of[-1,1])for(const ve of[-1,1])ee(Ct(.025,.02,.38,K,8),J*.52,.19,ve*.24,H);ee(st(.3,.05,.22,Te(2898524),.01),-.3,.455,.05,H).rotation.y=.2,ee(st(.28,.04,.2,Te(8203834),.01),-.31,.5,.06,H).rotation.y=-.1,ee(Ct(.05,.04,.1,Te(14274752,.3)),.32,.48,-.05,H);const ce=ee(Ct(.04,.04,.12,Te(15722194,.6)),.1,.49,.1,H),fe=ee(new Z(new Ft(.012,8,6),new on({color:16761963})),0,.08,0,ce);fe.scale.y=1.8;const pe=xt(new He,"lamp");pe.position.set(-3.95,0,-2.45),s.add(pe);const Re=Te(11570519,.3,{metalness:.9});ee(Ct(.18,.2,.03,Re),0,.015,0,pe),ee(Ct(.015,.015,1.6,Re,8),0,.8,0,pe);const tt=ee(new Z(new Pt(.2,.3,.32,28,1,!0),Te(15785136,.9,{side:rn,emissive:16758880,emissiveIntensity:.55})),0,1.7,0,pe);tt.castShadow=!1;const j=new hi(16757611,6,7,1.6);j.position.set(-3.95,1.6,-2.2),s.add(j),xt(ee(st(1.3,.62,.42,K,.03),.45,.31,n+.23,s),"sideboard");for(const J of[-1,1])ee(me(.58,.48,.01,Te(6964784,.5)),.45+J*.31,.32,n+.445,s);ee(st(.46,.7,1.3,K,.03),e+.25,.35,dh,s);const ie=Te(4151890,.55),xe=Te(15130578,.25);xt(ee(st(2.4,.86,.62,ie,.02),2.95,.43,n+.31,s),"sink"),ee(me(2.46,.05,.66,xe),2.95,.885,n+.33,s);for(let J=0;J<4;J++)ee(me(.55,.7,.01,Te(4876126,.5)),2.95-.9+J*.6,.43,n+.625,s);const ae=xt(ee(me(.5,.02,.38,Te(12568264,.2,{metalness:.9})),2.4,.9,n+.32,s),"sink");ae.castShadow=!1;const Ie=ee(Ct(.015,.015,.3,Re,8),2.4,1.05,n+.1,s);ee(Ct(.012,.012,.14,Re,8),0,.15,.06,Ie).rotation.x=Math.PI/2,xt(ee(st(1.15,.7,.36,ie,.02),2.2,2.05,n+.18,s),"cupboardL");const De=new He;De.position.set(3.95,2.05,n+.37),s.add(De),ee(st(1,.7,.36,ie,.02),3.35,2.05,n+.18,s).scale.z=1;const ke=ee(st(1,.68,.03,Te(4876126,.5),.01),-.5,0,0,De);ee(Ct(.015,.015,.05,Re),-.92,-.2,.03,De).rotation.x=Math.PI/2;const Je=Te(2894896,.4),$=new hi(16766362,4,5,1.6);$.position.set(3.1,2.2,.6),s.add($),xt(ee(Ct(.55,.55,.05,Te(13215610,.4),32),3.1,.75,.6,s),"kitchenTable"),ee(Ct(.05,.08,.72,Je,10),3.1,.37,.6,s),ee(Ct(.3,.3,.03,Je,20),3.1,.015,.6,s);for(const J of[-1,1]){const ve=new He;ve.position.set(3.1+J*.85,0,.75),s.add(ve),ee(Ct(.2,.2,.05,Te(9067051,.5)),0,.5,0,ve),ee(Ct(.025,.04,.48,Je,8),0,.24,0,ve)}const se=CM();xt(se.group,"couch"),se.group.position.set(-2.1,0,-2.42),s.add(se.group);const P=PM();xt(P.slider,"bookshelf"),P.group.position.set(e+.19,0,-.5),P.group.rotation.y=Math.PI/2,s.add(P.group);const be=IM();be.group.position.set(4.45,0,n+.38),s.add(be.group);const te=(J,ve,le,b)=>new dc(new re(J-le/2,ve-b/2),new re(J+le/2,ve+b/2)),Se=[te(-2.1,-2.42,2.5,1),te(-2.1,-.7,1.25,.66),te(e+.19,-.5,.4,1.6),te(e+.25,dh,.5,1.3),te(-3.95,-2.45,.45,.45),te(.45,n+.23,1.3,.45),te(2.95,n+.31,2.4,.62),te(4.45,n+.38,.9,.75),te(3.1,.6,1.15,1.15),te(2.25,.75,.42,.42),te(3.95,.75,.42,.42)];return{group:s,floorHit:h,couch:se,shelf:P,fridge:be,windowSpot:new A(T,0,n+.85),windowHit:O,cabinetHit:ke,cabinetDoor:De,lamp:j,blockers:Se,mats:{floor:a.material,paper:u,kpaper:d,curtain:B,sky:I.material,rug:k.material,walnut:K,cab:ie,trim:f,tile:c.material},rug:k}}function rp(s=.3){const e=new He,t=new Ti({transparent:!0,depthWrite:!1,uniforms:{t:{value:0},open:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.); }",fragmentShader:`
      varying vec2 vUv; uniform float t; uniform float open;
      void main(){
        vec2 p = vUv*2.-1.; float r = length(p); float a = atan(p.y,p.x);
        float swirl = sin(a*3. + r*14. - t*4.) * .5 + .5;
        float swirl2 = sin(a*5. - r*9. + t*2.3) * .5 + .5;
        vec3 deep = vec3(.05,.02,.14), violet = vec3(.48,.24,1.), teal = vec3(.18,.85,1.);
        vec3 col = mix(deep, violet, swirl*(1.-r));
        col = mix(col, teal, pow(swirl2,4.)*(1.-r)*.9);
        col += vec3(1.,.95,.8) * pow(max(0.,1.-r*3.2),2.) * (.6+.4*sin(t*3.));
        float rim = smoothstep(.78,.96,r) * (1.-smoothstep(.96,1.,r));
        col += teal*rim*1.6;
        float alpha = (1.-smoothstep(.97,1.,r)) * open;
        gl_FragColor = vec4(col, alpha);
      }`}),n=new Z(new Wi(s,48),t);n.rotation.x=-Math.PI/2,e.add(n);const i=60,r=new Float32Array(i*3),o=new Float32Array(i);for(let d=0;d<i;d++)o[d]=Math.random();const a=new Zt;a.setAttribute("position",new an(r,3));const c=new lc(a,new Oo({map:Qh(),size:.06,color:10479871,transparent:!0,depthWrite:!1,blending:xo}));c.frustumCulled=!1,e.add(c);const l=new hi(9067775,0,3.5,1.8);l.position.y=.35,e.add(l);let h=0,u=0;return{group:e,hit:n,set open(d){u=d?1:0},get isOpen(){return u>.5},update(d,f,g=0){h+=(u-h)*Math.min(1,d*3),t.uniforms.t.value=f,t.uniforms.open.value=h,l.intensity=h*(3+Math.sin(f*3)*.6+g*20),e.visible=h>.01;for(let _=0;_<i;_++){const m=o[_],p=(f*(.25+m*.3)+m*7)%1,w=m*40+f*(.5+m),S=s*(.2+m*.7)*(1-p*.5);r[_*3]=Math.cos(w)*S,r[_*3+1]=p*(.9+g*2),r[_*3+2]=Math.sin(w)*S}a.attributes.position.needsUpdate=!0,c.material.opacity=h}}}function zM(s=16770984){const t=new Float32Array(18),n=new Zt;n.setAttribute("position",new an(t,3));const i=new Oo({map:Qh(),size:.09,color:s,transparent:!0,depthWrite:!1,blending:xo}),r=new lc(n,i);return r.frustumCulled=!1,{points:r,update(o){for(let a=0;a<6;a++){const c=(o*.5+a/6)%1,l=a*2.4+o*.3;t[a*3]=Math.cos(l)*.25,t[a*3+1]=c*.35,t[a*3+2]=Math.sin(l)*.25}n.attributes.position.needsUpdate=!0,i.opacity=.35+Math.sin(o*2.2)*.25}}}function zd(s,e){if(e===Sm)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===nh||e===Sf){let t=s.getIndex();if(t===null){const o=[],a=s.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===nh)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class HM extends Lr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new qM(t)}),this.register(function(t){return new YM(t)}),this.register(function(t){return new n1(t)}),this.register(function(t){return new i1(t)}),this.register(function(t){return new s1(t)}),this.register(function(t){return new KM(t)}),this.register(function(t){return new ZM(t)}),this.register(function(t){return new $M(t)}),this.register(function(t){return new JM(t)}),this.register(function(t){return new XM(t)}),this.register(function(t){return new QM(t)}),this.register(function(t){return new jM(t)}),this.register(function(t){return new t1(t)}),this.register(function(t){return new e1(t)}),this.register(function(t){return new GM(t)}),this.register(function(t){return new r1(t)}),this.register(function(t){return new o1(t)})}load(e,t,n,i){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const l=co.extractUrlBase(e);o=co.resolveURL(l,this.path)}else o=co.extractUrlBase(e);this.manager.itemStart(e);const a=function(l){i?i(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new tp(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===op){try{o[nt.KHR_BINARY_GLTF]=new a1(e)}catch(u){i&&i(u);return}r=JSON.parse(o[nt.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new y1(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case nt.KHR_MATERIALS_UNLIT:o[u]=new WM;break;case nt.KHR_DRACO_MESH_COMPRESSION:o[u]=new c1(r,this.dracoLoader);break;case nt.KHR_TEXTURE_TRANSFORM:o[u]=new l1;break;case nt.KHR_MESH_QUANTIZATION:o[u]=new h1;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function VM(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const nt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class GM{constructor(e){this.parser=e,this.name=nt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let l;const h=new Be(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],Tn);const u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Zh(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new hi(h),l.distance=u;break;case"spot":l=new Kh(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,ki(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}}class WM{constructor(){this.name=nt.KHR_MATERIALS_UNLIT}getMaterialType(){return on}extendParams(e,t,n){const i=[];e.color=new Be(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Tn),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,Bt))}return Promise.all(i)}}class XM{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class qM{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Kt}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new re(a,a)}return Promise.all(r)}}class YM{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Kt}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class jM{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Kt}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class KM{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Kt}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Be(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Tn)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Bt)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class ZM{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Kt}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class $M{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Kt}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Be().setRGB(a[0],a[1],a[2],Tn),Promise.all(r)}}class JM{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Kt}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class QM{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Kt}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Be().setRGB(a[0],a[1],a[2],Tn),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Bt)),Promise.all(r)}}class e1{constructor(e){this.parser=e,this.name=nt.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Kt}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class t1{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Kt}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class n1{constructor(e){this.parser=e,this.name=nt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class i1{constructor(e){this.parser=e,this.name=nt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class s1{constructor(e){this.parser=e,this.name=nt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class r1{constructor(e){this.name=nt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const c=i.byteOffset||0,l=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(f),h,u,d,i.mode,i.filter),f})})}else return null}}class o1{constructor(e){this.name=nt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const l of i.primitives)if(l.mode!==Hn.TRIANGLES&&l.mode!==Hn.TRIANGLE_STRIP&&l.mode!==Hn.TRIANGLE_FAN&&l.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],c={};for(const l in o)a.push(this.parser.getDependency("accessor",o[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{const h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,f=[];for(const g of u){const _=new Ye,m=new A,p=new oi,w=new A(1,1,1),S=new dy(g.geometry,g.material,d);for(let x=0;x<d;x++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,x),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,x),c.SCALE&&w.fromBufferAttribute(c.SCALE,x),S.setMatrixAt(x,_.compose(m,p,w));for(const x in c)if(x==="_COLOR_0"){const L=c[x];S.instanceColor=new oh(L.array,L.itemSize,L.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&g.geometry.setAttribute(x,c[x]);Ot.prototype.copy.call(S,g),this.parser.assignFinalMaterial(S),f.push(S)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const op="glTF",jr=12,Hd={JSON:1313821514,BIN:5130562};class a1{constructor(e){this.name=nt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,jr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==op)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-jr,r=new DataView(e,jr);let o=0;for(;o<i;){const a=r.getUint32(o,!0);o+=4;const c=r.getUint32(o,!0);if(o+=4,c===Hd.JSON){const l=new Uint8Array(e,jr+o,a);this.content=n.decode(l)}else if(c===Hd.BIN){const l=jr+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class c1{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=nt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(const h in o){const u=fh[h]||h.toLowerCase();a[u]=o[h]}for(const h in e.attributes){const u=fh[h]||h.toLowerCase();if(o[h]!==void 0){const d=n.accessors[e.attributes[h]],f=dr[d.componentType];l[u]=f.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(f){for(const g in f.attributes){const _=f.attributes[g],m=c[g];m!==void 0&&(_.normalized=m)}u(f)},a,l,Tn,d)})})}}class l1{constructor(){this.name=nt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class h1{constructor(){this.name=nt.KHR_MESH_QUANTIZATION}}class ap extends Bo{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=i-t,u=(n-t)/h,d=u*u,f=d*u,g=e*l,_=g-l,m=-2*f+3*d,p=f-d,w=1-m,S=p-d+u;for(let x=0;x!==a;x++){const L=o[_+x+a],R=o[_+x+c]*h,I=o[g+x+a],T=o[g+x]*h;r[x]=w*L+S*R+m*I+p*T}return r}}const u1=new oi;class d1 extends ap{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return u1.fromArray(r).normalize().toArray(r),r}}const Hn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},dr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Vd={9728:_n,9729:Nn,9984:uf,9985:Ta,9986:Qr,9987:Hi},Gd={33071:Si,33648:Va,10497:Cs},hl={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},fh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},rs={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},f1={CUBICSPLINE:void 0,LINEAR:Mo,STEP:yo},ul={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function p1(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new rt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:qi})),s.DefaultMaterial}function Ss(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function ki(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function m1(s,e,t){let n=!1,i=!1,r=!1;for(let l=0,h=e.length;l<h;l++){const u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const o=[],a=[],c=[];for(let l=0,h=e.length;l<h;l++){const u=e[l];if(n){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;o.push(d)}if(i){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;a.push(d)}if(r){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;c.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){const h=l[0],u=l[1],d=l[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function g1(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function _1(s){let e;const t=s.extensions&&s.extensions[nt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+dl(t.attributes):e=s.indices+":"+dl(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+dl(s.targets[n]);return e}function dl(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function ph(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function x1(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const v1=new Ye;class y1{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new VM,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const c=a.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&o<98?this.textureLoader=new nM(this.options.manager):this.textureLoader=new aM(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new tp(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return Ss(r,a,i),ki(a,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(const c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const o=t[i].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(o,a)=>{const c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(const[l,h]of o.children.entries())r(h,a.children[l])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[nt.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,o){n.load(co.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=hl[i.type],a=dr[i.componentType],c=i.normalized===!0,l=new a(i.count*o);return Promise.resolve(new an(l,o,c))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],c=hl[i.type],l=dr[i.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let _,m;if(f&&f!==u){const p=Math.floor(d/f),w="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let S=t.cache.get(w);S||(_=new l(a,p*f,i.count*f/h),S=new ay(_,f/h),t.cache.add(w,S)),m=new zh(S,c,d%f/h,g)}else a===null?_=new l(i.count*c):_=new l(a,d,i.count*c),m=new an(_,c,g);if(i.sparse!==void 0){const p=hl.SCALAR,w=dr[i.sparse.indices.componentType],S=i.sparse.indices.byteOffset||0,x=i.sparse.values.byteOffset||0,L=new w(o[1],S,i.sparse.count*p),R=new l(o[2],x,i.sparse.count*c);a!==null&&(m=new an(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let I=0,T=L.length;I<T;I++){const v=L[I];if(m.setX(v,R[I*c]),c>=2&&m.setY(v,R[I*c+1]),c>=3&&m.setZ(v,R[I*c+2]),c>=4&&m.setW(v,R[I*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const i=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const d=(r.samplers||{})[o.sampler]||{};return h.magFilter=Vd[d.magFilter]||Nn,h.minFilter=Vd[d.minFilter]||Hi,h.wrapS=Gd[d.wrapS]||Cs,h.wrapT=Gd[d.wrapT]||Cs,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==_n&&h.minFilter!==Nn,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const o=i.images[e],a=self.URL||self.webkitURL;let c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(u){l=!0;const d=new Blob([u],{type:o.mimeType});return c=a.createObjectURL(d),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(c).then(function(u){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(_){const m=new Jt(_);m.needsUpdate=!0,d(m)}),t.load(co.resolveURL(u,r.path),g,void 0,f)})}).then(function(u){return l===!0&&a.revokeObjectURL(c),ki(u,o),u.userData.mimeType=o.mimeType||x1(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[nt.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[nt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=r.associations.get(o);o=r.extensions[nt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new Oo,ai.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new Gh,ai.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return rt}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let o;const a={},c=r.extensions||{},l=[];if(c[nt.KHR_MATERIALS_UNLIT]){const u=i[nt.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),l.push(u.extendParams(a,r,t))}else{const u=r.pbrMetallicRoughness||{};if(a.color=new Be(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Tn),a.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",u.baseColorTexture,Bt)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=rn);const h=r.alphaMode||ul.OPAQUE;if(h===ul.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===ul.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==on&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new re(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==on&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==on){const u=r.emissiveFactor;a.emissive=new Be().setRGB(u[0],u[1],u[2],Tn)}return r.emissiveTexture!==void 0&&o!==on&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Bt)),Promise.all(l).then(function(){const u=new o(a);return r.name&&(u.name=r.name),ki(u,r),t.associations.set(u,{materials:e}),r.extensions&&Ss(i,u,r),u})}createUniqueName(e){const t=_t.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[nt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return Wd(c,a,t)})}const o=[];for(let a=0,c=e.length;a<c;a++){const l=e[a],h=_1(l),u=i[h];if(u)o.push(u.promise);else{let d;l.extensions&&l.extensions[nt.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=Wd(new Zt,l,t),i[h]={primitive:l,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){const h=o[c].material===void 0?p1(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){const l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let f=0,g=h.length;f<g;f++){const _=h[f],m=o[f];let p;const w=l[f];if(m.mode===Hn.TRIANGLES||m.mode===Hn.TRIANGLE_STRIP||m.mode===Hn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new ly(_,w):new Z(_,w),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===Hn.TRIANGLE_STRIP?p.geometry=zd(p.geometry,Sf):m.mode===Hn.TRIANGLE_FAN&&(p.geometry=zd(p.geometry,nh));else if(m.mode===Hn.LINES)p=new Vf(_,w);else if(m.mode===Hn.LINE_STRIP)p=new Wh(_,w);else if(m.mode===Hn.LINE_LOOP)p=new fy(_,w);else if(m.mode===Hn.POINTS)p=new lc(_,w);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&g1(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),ki(p,r),m.extensions&&Ss(i,p,m),t.assignFinalMaterial(p),u.push(p)}for(let f=0,g=u.length;f<g;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&Ss(i,u[0],r),u[0];const d=new He;r.extensions&&Ss(i,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Mn(Sn.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Bh(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),ki(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),o=i,a=[],c=[];for(let l=0,h=o.length;l<h;l++){const u=o[l];if(u){a.push(u);const d=new Ye;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Vh(a,c)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],c=[],l=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){const f=i.channels[u],g=i.samplers[f.sampler],_=f.target,m=_.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,w=i.parameters!==void 0?i.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",w)),l.push(g),h.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){const d=u[0],f=u[1],g=u[2],_=u[3],m=u[4],p=[];for(let w=0,S=d.length;w<S;w++){const x=d[w],L=f[w],R=g[w],I=_[w],T=m[w];if(x===void 0)continue;x.updateMatrix&&x.updateMatrix();const v=n._createAnimationTracks(x,L,R,I,T);if(v)for(let M=0;M<v.length;M++)p.push(v[M])}return new hh(r,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=i.weights.length;c<l;c++)a.morphTargetInfluences[c]=i.weights[c]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let l=0,h=a.length;l<h;l++)o.push(n.getDependency("node",a[l]));const c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){const h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,v1)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(l){return i._getNodeRef(i.cameraCache,r.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let h;if(r.isBone===!0?h=new Hf:l.length>1?h=new He:l.length===1?h=l[0]:h=new Ot,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=o),ki(h,r),r.extensions&&Ss(n,h,r),r.matrix!==void 0){const u=new Ye;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new He;n.name&&(r.name=i.createUniqueName(n.name)),ki(r,n),n.extensions&&Ss(t,r,n);const o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(i.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,u=c.length;h<u;h++)r.add(c[h]);const l=h=>{const u=new Map;for(const[d,f]of i.associations)(d instanceof ai||d instanceof Jt)&&u.set(d,f);return h.traverse(d=>{const f=i.associations.get(d);f!=null&&u.set(d,f)}),u};return i.associations=l(r),r})}_createAnimationTracks(e,t,n,i,r){const o=[],a=e.name?e.name:e.uuid,c=[];rs[r.path]===rs.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(a);let l;switch(rs[r.path]){case rs.weights:l=Mr;break;case rs.rotation:l=Sr;break;case rs.position:case rs.scale:l=wr;break;default:switch(n.itemSize){case 1:l=Mr;break;case 2:case 3:default:l=wr;break}break}const h=i.interpolation!==void 0?f1[i.interpolation]:Mo,u=this._getArrayFromAccessor(n);for(let d=0,f=c.length;d<f;d++){const g=new l(c[d]+"."+rs[r.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=ph(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof Sr?d1:ap;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function M1(s,e,t){const n=e.attributes,i=new di;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(i.set(new A(c[0],c[1],c[2]),new A(l[0],l[1],l[2])),a.normalized){const h=ph(dr[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new A,c=new A;for(let l=0,h=r.length;l<h;l++){const u=r[l];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const _=ph(dr[d.componentType]);c.multiplyScalar(_)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;const o=new Ei;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function Wd(s,e,t){const n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){s.setAttribute(a,c)})}for(const o in n){const a=fh[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){const o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return ot.workingColorSpace!==Tn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ot.workingColorSpace}" not supported.`),ki(s,e),M1(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?m1(s,e.targets,t):s})}const S1=new HM,w1=["UpperLeg_L","UpperLeg_R","LowerLeg_L","LowerLeg_R","UpperArm_L","UpperArm_R","LowerArm_L","LowerArm_R","Spine","Hips","Head","Foot_L","Foot_R","Leg_FL","Leg_FR","Leg_BL","Leg_BR"],Xd=["crouch","jump","land","flip","cartwheel","wave","cheer"];class Co{constructor(){this.root=new He,this.bones={},this.actions={},this.clip="idle",this.path=[],this.onArrive=null,this.faceTo=null,this.speed=1.05,this.walk=0,this.phase=0,this.time=Math.random()*9,this.quadruped=!1,this.cartwheels=!1,this.steer=0,this.steerTime=0,this.lastX=0,this.lastZ=0,this.moved=0,this.wheelYaw=0,this.travelYaw=0,this.cwCool=2.5,this.wheeling=!1,this.lockClip=!1,this.restQ={},this.hipsY=0,this.sit=0,this.sitW=0,this.vS=0,this.sm={},this.reading=!1,this.book=null,this.dance=0,this.danceW=0,this.beat=0,this.legA=.29,this.legB=.28,this.ankleY=.09}static async load(e,t=!1){const n=await S1.loadAsync(e),i=new Co;i.quadruped=t,i.model=n.scene,n.scene.traverse(r=>{r.name&&(i.bones[r.name]=r);const o=r;o.isMesh&&(o.castShadow=!0,o.frustumCulled=!1,/_flame/.test(r.name)&&(o.visible=!1))});for(const r of Object.keys(i.bones))/^Flame_/.test(r)&&i.bones[r].scale.setScalar(.001);i.root.add(n.scene),i.mixer=new MM(n.scene);for(const r of n.animations){r.tracks=r.tracks.filter(a=>!/^Flame_/.test(a.name));const o=i.mixer.clipAction(r);Xd.includes(r.name)&&(o.setLoop(Mf,1),o.clampWhenFinished=!0),i.actions[r.name]=o}i.actions.idle?.play();for(const r of w1)i.bones[r]&&(i.restQ[r]=i.bones[r].quaternion.clone());return i.bones.Hips&&(i.hipsY=i.bones.Hips.position.y,i.measureLegs()),i.bones.Body&&(i.hipsY=i.bones.Body.position.y),i}play(e,t=.2){const n=this.actions[e];if(!n||this.clip===e&&!Xd.includes(e))return;const i=this.actions[this.clip];n.reset().setEffectiveWeight(1).play(),i&&i!==n&&i.crossFadeTo(n,t,!1),this.clip=e}once(e,t){this.play(e,.12);const n=this.actions[e];if(!n){t?.();return}const i=r=>{r.action===n&&(this.mixer.removeEventListener("finished",i),this.clip===e&&this.play("idle",.3),t?.())};this.mixer.addEventListener("finished",i)}goTo(e,t,n){this.path=e.map(i=>i.clone()),this.onArrive=t||null,this.faceTo=n??null,this.path.length||this.arrive()}arrive(){const e=this.onArrive;this.onArrive=null,e?.()}remaining(){let e=0,t=this.root.position;for(const n of this.path)e+=Math.hypot(n.x-t.x,n.z-t.z),t=n;return e}get moving(){return this.path.length>0}update(e){this.time+=e;const t=this.root.position;let n=null;if(this.path.length){const c=this.path[0],l=c.x-t.x,h=c.z-t.z,u=Math.hypot(l,h),d=this.speed*e*(this.wheeling?1.25:.35+.65*this.walk);u<=d?(t.x=c.x,t.z=c.z,this.path.shift(),this.path.length||this.arrive()):(t.x+=l/u*d,t.z+=h/u*d,n=Math.atan2(l,h))}else this.faceTo!==null&&(n=this.faceTo);(this.path.length||this.steer>.08)&&(this.travelYaw=n??this.travelYaw);let i=8;if(this.wheeling&&(n=this.wheelYaw-Math.PI/2,i=30),n!==null){let c=n-this.root.rotation.y;c=Math.atan2(Math.sin(c),Math.cos(c));let l=c*Math.min(1,e*i);this.wheeling||(l=Math.max(-7*e,Math.min(7*e,l))),this.root.rotation.y+=l}this.steerTime=this.steer>.7?this.steerTime+e:0,this.cartwheels&&(this.path.length||this.steer>.7)&&!this.wheeling&&this.actions.cartwheel&&(this.cwCool-=e,this.cwCool<=0&&(this.remaining()>2.6||this.steerTime>1.2)&&(this.wheeling=!0,this.wheelYaw=this.travelYaw,this.cwCool=5+Math.random()*7,this.once("cartwheel",()=>{this.wheeling=!1})));const r=(this.path.length||this.steer>.08)&&!this.wheeling?1:0;this.walk+=(r-this.walk)*Math.min(1,e*6),this.moved=Math.hypot(t.x-this.lastX,t.z-this.lastZ),this.lastX=t.x,this.lastZ=t.z,this.moved>.5&&(this.moved=0);for(const c in this.restQ)this.bones[c].quaternion.copy(this.restQ[c]);const o=this.bones.Hips||this.bones.Body;o&&(o.position.y=this.hipsY),this.mixer.update(e),this.applyWalk(e),this.applyPose(e);const a=this.time%4.1<.12;for(const c of["Eye_L","Eye_R"])this.bones[c]&&this.clip!=="nap"&&(this.bones[c].scale.y=a?.1:1)}rot(e,t,n=0){const i=this.bones[e];i&&(i.rotation.x+=t,i.rotation.z+=n)}rotY(e,t){const n=this.bones[e];n&&(n.rotation.y+=t)}measureLegs(){const e=this.bones.UpperLeg_L,t=this.bones.LowerLeg_L,n=this.bones.Foot_L;!e||!t||!n||(this.legA=t.position.length(),this.legB=n.position.length(),this.ankleY=this.hipsY+e.position.y+t.position.y+n.position.y)}ikLeg(e,t,n,i,r){const o=this.bones.Hips,a=this.bones["UpperLeg_"+e],c=this.bones["LowerLeg_"+e],l=this.bones["Foot_"+e];if(!o||!a||!c||!l)return;const h=this.legA,u=this.legB,d=(h+u)*.999,f=n-o.position.y-a.position.y,g=t-a.position.z,_=Math.min(d,Math.max(.05,Math.hypot(f,g))),m=Math.PI-Math.acos(Math.min(1,Math.max(-1,(h*h+u*u-_*_)/(2*h*u)))),p=Math.acos(Math.min(1,Math.max(-1,(h*h+_*_-u*u)/(2*h*_)))),w=-(Math.atan2(g,-f)+p),S=(x,L)=>{x.rotation.x+=(L-x.rotation.x)*r};S(a,w),S(c,m),S(l,-(w+m)+i)}applyPose(e){if(this.quadruped)return;const t=Math.min(1,e*5);this.sitW+=(this.sit-this.sitW)*t,this.danceW+=(this.dance-this.danceW)*Math.min(1,e*4),this.book&&(this.book.visible=this.reading&&this.sitW>.6);const n=this.sitW;if(n>.01){const r=(o,a,c=0)=>{const l=this.bones[o];l&&(l.rotation.x+=(a-l.rotation.x)*n,l.rotation.z+=(c-l.rotation.z)*n)};if(r("UpperLeg_L",-1.5,-.04),r("UpperLeg_R",-1.5,.04),r("LowerLeg_L",1.35),r("LowerLeg_R",1.35),r("Foot_L",.25),r("Foot_R",.25),this.reading){const o=Math.max(0,Math.sin(this.time*.9))**30;r("UpperArm_L",-.5,-.22),r("UpperArm_R",-.5-o*.4,.22+o*.15),r("LowerArm_L",-.85),r("LowerArm_R",-.85),r("Head",.32+Math.sin(this.time*.37)*.03),r("Spine",.06)}else{r("UpperArm_L",-.25,-.05),r("UpperArm_R",-.25,.05),r("LowerArm_L",-.5),r("LowerArm_R",-.5);const o=this.bones.LowerLeg_L,a=this.bones.LowerLeg_R;o&&a&&(o.rotation.x-=Math.sin(this.time*2.4)*.25*n,a.rotation.x-=Math.sin(this.time*2.4+2)*.25*n)}}const i=this.danceW;if(i>.01&&this.bones.Hips){this.beat+=e*Math.PI*2*2.1;const r=this.beat,o=Math.floor(r/(Math.PI*2*8))%2,a=this.bones.Hips;a.position.y-=(.02+.03*(1-Math.cos(r))/2)*i,a.rotation.z+=Math.sin(r/2)*.07*i;const c=this.bones.Spine;c&&(c.rotation.z-=Math.sin(r/2)*.18*i,c.rotation.y+=Math.sin(r/4)*.2*i);const l=this.bones.Head;l&&(l.rotation.x+=Math.sin(r)*.1*i,l.rotation.z+=Math.sin(r/2)*.12*i);const h=Math.sin(r/2);if(o===0){const u=Math.pow(Math.abs(Math.cos(r/2)),6);this.rot("UpperArm_L",-.95*i,(-.12-.22*u+.15*h)*i),this.rot("UpperArm_R",-.95*i,(.12+.22*u+.15*h)*i),this.rot("LowerArm_L",-1.25*i),this.rot("LowerArm_R",-1.25*i)}else this.rot("UpperArm_L",-(.9+.5*Math.max(0,h))*i,-.15*i),this.rot("UpperArm_R",-(.9+.5*Math.max(0,-h))*i,.15*i),this.rot("LowerArm_L",-1.3*i),this.rot("LowerArm_R",-1.3*i);this.ikLeg("L",.01,this.ankleY,0,i),this.ikLeg("R",-.01,this.ankleY,0,i)}else this.beat=0}addBook(e=5974635){const t=this.bones.Chest||this.bones.Spine;if(!t||this.book)return;const n=new He,i=new rt({color:e,roughness:.6}),r=new rt({color:15919832,roughness:.9});for(const o of[-1,1]){const a=new He;a.rotation.y=o*.35,n.add(a);const c=new Z(new Fn(.11,.15,.006),i);c.position.x=o*.055,a.add(c);const l=new Z(new Fn(.1,.14,.012),r);l.position.set(o*.052,0,.009),a.add(l)}n.position.set(0,-.16,.19),n.rotation.x=-.85,n.visible=!1,t.add(n),this.book=n}applyWalk(e){const t=this.walk;if(t<.01||this.wheeling)return;const n=e>0?this.moved/e:0;if(this.quadruped){this.phase+=this.moved/.5;const T=Math.sin(this.phase*Math.PI*2),v=Math.cos(this.phase*Math.PI*2);this.rot("Leg_FL",T*.6*t),this.rot("Leg_BR",T*.6*t),this.rot("Leg_FR",-T*.6*t),this.rot("Leg_BL",-T*.6*t),this.bones.Body&&(this.bones.Body.position.y+=Math.abs(v)*.012*t);return}const i=(this.legA+this.legB)*.999,r=.6;this.vS+=(n-this.vS)*Math.min(1,e*3);const o=Math.min(i*1.3,i*(.6+.65*this.vS));this.phase=(this.phase+this.moved/o)%1;const a=r*o,c=Math.PI*2,l=this.bones.Hips;if(!l)return;const h=T=>(T=Math.min(1,Math.max(0,T)),T*T*(3-2*T)),u=T=>{let v,M=this.ankleY,C,z=T<r,O=0;if(z){const B=T/r;v=a/2-B*a,C=B<.15?-.22*(1-B/.15):.5*h((B-.7)/.3),C>0&&(M+=.075*Math.sin(C))}else{const B=(T-r)/(1-r);O=h((B-.6)/.4);const W=Math.min(1,Math.max(0,B)),k=-.5*(a/r)*(1-r),K=W*W,H=K*W;v=(2*H-3*K+1)*(-a/2)+(H-2*K+W)*k+(-2*H+3*K)*(a/2)+(H-K)*0,M+=.075*Math.sin(.5)*(1-h(B*2.5))+.045*Math.sin(Math.PI*Math.min(1,(1-Math.pow(1-B,1.5))/.95)),C=.5*(1-h(B*2.2))-.22*h((B-.55)/.45)}return{z:v,y:M,pitch:C,planted:z,land:O}},d=u(this.phase),f=u((this.phase+.5)%1),g=this.bones.UpperLeg_L,_=(this.legA+this.legB)*.995,m=T=>this.ankleY+Math.sqrt(Math.max(0,_*_-T*T))-g.position.y,p=Math.min(this.hipsY,m(0)),w=Math.max(m(a/2),p-.026),S=.5+.5*Math.cos(c*2*this.phase);l.position.y=this.hipsY+(p-(p-w)*S-this.hipsY)*t;const x=(T,v)=>{const M=this.bones["UpperLeg_"+T],C=this.bones["LowerLeg_"+T],z=this.bones["Foot_"+T];if(!M||!C||!z)return;const O=v.y-l.position.y-M.position.y,B=v.z-M.position.z,W=this.legA,k=this.legB,K=Math.min(i,Math.max(.05,Math.hypot(O,B))),H=Math.PI-Math.acos(Math.min(1,Math.max(-1,(W*W+k*k-K*K)/(2*W*k)))),ce=Math.acos(Math.min(1,Math.max(-1,(W*W+K*K-k*k)/(2*W*K)))),pe=-(Math.atan2(B,-O)+ce),Re=(xe,ae)=>{const Ie=this.sm[xe],De=Ie===void 0?ae:Ie+(ae-Ie)*Math.min(1,e*22);return this.sm[xe]=De,De},tt=Re("t"+T,pe),j=Re("k"+T,H),ie=Re("f"+T,-(pe+H)+v.pitch);M.rotation.x=tt*t,C.rotation.x=j*t,z.rotation.x=ie*t};x("L",d),x("R",f);const L=Math.cos(c*(this.phase-.5)),R=.22+.16*Math.min(1,n/1.2);this.rot("UpperArm_L",-L*R*t),this.rot("UpperArm_R",L*R*t),this.rot("LowerArm_L",-(.2+Math.max(0,L)*.3)*t),this.rot("LowerArm_R",-(.2+Math.max(0,-L)*.3)*t);const I=.07*Math.cos(c*this.phase);this.rotY("Spine",I*t),this.rotY("Head",-I*.7*t),this.rot("Spine",.05*t)}}function b1(s){const e=s.bones.Head;if(!e)return;const t=s.bones.Eye_L,n=s.bones.Eye_R,i=new He,r=new Kt({color:1314844,roughness:.08,metalness:.2,clearcoat:1,clearcoatRoughness:.05}),o=new rt({color:15221359,roughness:.35}),a=new Ka;a.absellipse(0,0,.026,.019,0,Math.PI*2,!1,0);const c=new Ao(a,{depth:.004,bevelEnabled:!0,bevelThickness:.002,bevelSize:.0025,bevelSegments:2,curveSegments:20});for(const l of[t,n]){if(!l)continue;const h=new Z(c,r);h.position.set(l.position.x*1.05,l.position.y,l.position.z+.012),h.rotation.y=l.position.x*3.2,i.add(h);const u=new Z(new fs(.024,.0035,6,24),o);u.scale.set(1.12,.84,1),u.position.copy(h.position),u.position.z+=.003,u.rotation.copy(h.rotation),i.add(u)}if(t&&n){const l=new Z(new Pt(.003,.003,Math.abs(t.position.x-n.position.x)*.5,6),o);l.rotation.z=Math.PI/2,l.position.set(0,t.position.y+.006,t.position.z+.018),i.add(l)}return e.add(i),i}class T1{constructor(){this.dead=!1}}const Gt=(s,e)=>new A(s,0,e),E1={stand:Gt(-2.75,-1.55),sit:Gt(-2.75,-2.2),y:-.03,face:0},qd={stand:Gt(-1.45,-1.55),sit:Gt(-1.45,-2.2),y:-.03,face:0},A1={stand:Gt(1.75,.95),sit:Gt(2.22,.75),y:-.1,face:Math.PI/2};class R1{constructor(e){this.c=e,this.token=null,this.standBack=null,this.rest=4,this.lastGeorge=-999,this.clock=0,this.active=!1,this.doing="",this.forced=null,this.keira=[{id:"read on the couch",weight:4,run:t=>this.sitOn(t,Math.random()<.5?E1:qd,!0,22+Math.random()*20)},{id:"kitchen table",weight:2,run:t=>this.sitOn(t,A1,!0,16+Math.random()*14)},{id:"sit and swing her feet",weight:1,run:t=>this.sitOn(t,qd,!1,10+Math.random()*8)},{id:"browse the shelf",weight:2,run:async t=>{const n=this.c.other(),i=Gt(-4.15,-.2+Math.random()*.6);if(this.clear(i)){await this.walk(t,i,-Math.PI/2);for(let r=0;r<3;r++)n.faceTo=-Math.PI/2+(Math.random()-.5)*.5,await this.wait(t,3+Math.random()*3)}}},{id:"look out the window",weight:1,run:async t=>{const n=this.c.other(),i=Gt(.05+(Math.random()-.5)*.6,-2.1);this.clear(i)&&(await this.walk(t,i,Math.PI),n.faceTo=Math.PI,await this.wait(t,8+Math.random()*6))}}],this.mila=[{id:"dance",weight:4,run:async t=>{const n=this.c.other(),i=this.spotFor([Gt(.2,1.5),Gt(-.6,1.9),Gt(1,2.1),Gt(-1.9,1.5)]);if(!i)return;await this.walk(t,i,.4),n.dance=1;const r=this.clock+9+Math.random()*7;for(;this.clock<r;)if(await this.wait(t,3.8),Math.random()<.6){const o=n.root.rotation.y,a=this.clock;for(n.faceTo=null;this.clock-a<.55;){if(t.dead)throw new Error("cancel");n.root.rotation.y=o+Math.PI*2*((this.clock-a)/.55),await this.wait(t,0)}n.root.rotation.y=o}n.dance=0,await this.wait(t,.4),n.once("cheer"),await this.wait(t,1.2)}},{id:"flips",weight:3,run:async t=>{const n=this.c.other(),i=this.spotFor([Gt(.3,1.4),Gt(-1.2,2.2),Gt(1.2,1.9)]);if(!i)return;await this.walk(t,i,Math.random()*Math.PI*2);const r=2+Math.floor(Math.random()*2);for(let o=0;o<r;o++){if(await new Promise(a=>n.once("flip",a)),t.dead)throw new Error("cancel");await this.wait(t,.8+Math.random())}n.once("cheer"),await this.wait(t,1.5)}},{id:"splits",weight:2,ok:()=>!!this.c.other().actions.splits,run:async t=>{const n=this.c.other(),i=this.spotFor([Gt(-.4,1.2),Gt(.8,1.7)]);i&&(await this.walk(t,i,.3),n.play("splits",.4),n.lockClip=!0,await this.wait(t,6+Math.random()*4),n.lockClip=!1,n.play("idle",.4),await this.wait(t,.6))}},{id:"cartwheel across the room",weight:2,run:async t=>{const n=this.c.other(),r=n.root.position.x<0?Gt(1.6,1.8):Gt(-2.6,1.8);this.clear(r)&&(n.cwCool=0,await this.walk(t,r),n.once("cheer"),await this.wait(t,1.4))}},{id:"bother George",weight:3,ok:()=>{const t=this.c.george();return!!t&&t.clip==="nap"&&this.clock-this.lastGeorge>90},run:async t=>{const n=this.c.other(),i=this.c.george(),r=i.root.position,o=Gt(r.x+.75,r.z+.15);if(!this.clear(o))return;this.lastGeorge=this.clock,await this.walk(t,o,Math.atan2(r.x-o.x,r.z-o.z)),await this.wait(t,.5),n.once("crouch"),await this.wait(t,.9),i.play("idle",.15),this.c.bark(),n.once("jump"),await this.wait(t,.5);const a=n.speed;n.speed=a*1.7;try{await this.walk(t,Gt(-.6,1.9))}finally{n.speed=a}n.faceTo=Math.atan2(r.x-n.root.position.x,r.z-n.root.position.z),n.once("cheer"),await this.wait(t,3),i.clip==="idle"&&i.play("nap",1)}}]}force(e){this.release(0),this.forced=e}release(e=6){const t=this.c.other();this.token&&(this.token.dead=!0),this.token=null,this.active=!1,t.sit=0,t.reading=!1,t.dance=0,t.lockClip=!1,t.sitW=0,t.danceW=0,t.root.position.y=0,this.standBack&&(t.root.position.x=this.standBack.x,t.root.position.z=this.standBack.z,this.standBack=null),t.clip!=="idle"&&t.play("idle",.2),this.rest=e}update(e){if(this.clock+=e,this.active){this.c.free()||this.release();return}if(!this.c.free()){this.rest=Math.max(this.rest,2);return}if(this.c.other().moving||(this.rest-=e,this.rest>0))return;const n=(this.c.who()==="keira"?this.keira:this.mila).filter(a=>!a.ok||a.ok());let i=Math.random()*n.reduce((a,c)=>a+c.weight,0);const r=this.forced&&n.find(a=>a.id===this.forced)||n.find(a=>(i-=a.weight)<=0)||n[0];this.forced=null,this.doing=r.id;const o=new T1;this.token=o,this.active=!0,r.run(o).catch(()=>{}).finally(()=>{this.token===o&&(this.token=null,this.active=!1,this.rest=5+Math.random()*8)})}wait(e,t){return new Promise((n,i)=>{const r=this.clock+t,o=()=>{if(e.dead)return i(new Error("cancel"));if(this.clock>=r)return n();requestAnimationFrame(o)};requestAnimationFrame(o)})}walk(e,t,n){const i=this.c.other();return new Promise((r,o)=>{if(e.dead)return o(new Error("cancel"));i.goTo([t],()=>e.dead?o(new Error("cancel")):r(),n);const a=()=>{if(e.dead)return i.goTo([]),o(new Error("cancel"));i.moving&&requestAnimationFrame(a)};requestAnimationFrame(a)})}clear(e){return e.distanceTo(this.c.me().root.position)>1.1}async slide(e,t,n,i,r,o){const a=this.c.other(),c=this.clock;for(;this.clock-c<o;){if(e.dead)throw new Error("cancel");const l=(this.clock-c)/o,h=l*l*(3-2*l);a.root.position.lerpVectors(t,n,h),a.root.position.y=i+(r-i)*h,await this.wait(e,0)}a.root.position.copy(n),a.root.position.y=r}async sitOn(e,t,n,i){const r=this.c.other();this.clear(t.stand)&&(await this.walk(e,t.stand,t.face),r.faceTo=t.face,await this.wait(e,.35),r.root.rotation.y=t.face,this.standBack=t.stand.clone(),r.reading=n,r.sit=1,await this.slide(e,t.stand,t.sit,0,t.y,.7),await this.wait(e,i),r.sit=0,await this.slide(e,t.sit,t.stand,t.y,0,.6),r.reading=!1,this.standBack=null)}spotFor(e){const t=e.filter(n=>this.clear(n));return t.length?t[Math.floor(Math.random()*t.length)]:null}}const mh="keiramila.save.v1",gh="kmhouse.v1",C1={companions:[],companion:null,inbox:[],owned:[],found:[],treasures:[],seenBolts:-1,hero:"keira",visits:0};function fc(s){try{return JSON.parse(localStorage.getItem(s)||"null")}catch{return null}}function cp(s,e){try{localStorage.setItem(s,JSON.stringify(e))}catch{}}function P1(){const s=fc(gh),e={...C1,...s&&typeof s=="object"?s:{}};for(const t of["companions","inbox","owned","found","treasures"])Array.isArray(e[t])||(e[t]=[]);return e}function I1(s){const e=fc(gh);if(e&&Array.isArray(e.inbox))for(const t of e.inbox)!s.inbox.includes(t)&&!s.treasures.includes(t)&&s.inbox.push(t);cp(gh,s)}function eu(){const s=fc(mh);return s&&typeof s.bolts=="number"?s.bolts:0}function tu(s){const e=fc(mh)||{};return e.bolts=Math.max(0,(typeof e.bolts=="number"?e.bolts:0)+s),cp(mh,e),e.bolts}const Nt=(s,e=.7,t={})=>new rt({color:s,roughness:e,...t}),Rt=(s,e,t,n,i)=>(s.position.set(e,t,n),i.add(s),s);function L1(s,e,t){s.traverse(n=>{const i=n.material;i&&i.color&&i.color.getHex()===e&&i.color.set(t)})}function fl(s,e,t,n,i){const r=np(e,t);r.repeat.set(2.4,4.3),zn(s.H.mats.tile,r),s.H.mats.cab.color.set(n),L1(s.scene,4876126,i)}function zn(s,e){const t=s;t.map?.dispose(),t.map=e,t.needsUpdate=!0}function pl(s,e,t=.4){const n=ji(e,.08);s.couch.group.traverse(i=>{const r=i.material;r&&r.isMeshPhysicalMaterial&&r.map&&(r.map=n,r.sheen=t,r.needsUpdate=!0)})}function ml(s,e={}){const t=new He;if(s.add(t),e.drawings!==!1){const w=Nt(15984840,.9,{transparent:!0,opacity:.85}),S=(L,R,I,T,v,M=0,C=1,z=t)=>{const O=new Z(new Yt(.34*C,.42*C),new rt({map:AM(L),roughness:.95}));O.position.set(R,I,T),O.rotation.set(0,M,v),z.add(O),xt(O,"drawing"+L);const B=new Z(new Yt(.1,.03),w);B.position.set(0,.2*C,.002),B.rotation.z=.2,O.add(B)};S(0,-3.35,1.7,ze.z0+.012,.08),S(2,-.75,1.55,ze.z0+.012,-.06),S(3,-.62,2.05,ze.z0+.012,.1,0,.8);const x=e.fridgeDoor;x&&(S(1,-.6,1.45,.086,-.05,0,.8,x),S(0,-.3,1.05,.086,.07,0,.7,x))}const n=(w,S,x,L)=>{const R=xt(new He,"shoes");return R.position.set(S,0,x),R.rotation.y=L,t.add(R),Rt(st(.11,.08,.26,Nt(w,.6),.04),0,.04,0,R),Rt(st(.115,.025,.27,Nt(16052714,.7),.01),0,.012,0,R),R};for(const w of[n(15221359,-.4,2.4,.4)])xt(w,"shoes");n(15221359,-.15,2.55,-.9).rotation.z=1.4,n(4156298,.6,2.1,2.2),n(4156298,.85,2.3,1.7);const i=xt(new He,"backpack");i.position.set(-.68,0,-2),i.rotation.set(0,-.5,-.12),t.add(i),Rt(st(.36,.44,.2,Nt(6967203,.8),.08),0,.22,0,i),Rt(st(.26,.16,.08,Nt(5915280,.8),.04),0,.14,.12,i),Rt(st(.04,.3,.02,Nt(2761272),.01),.1,.3,-.11,i);const r=xt(sp(),"throw");r.scale.set(.9,.45,.8),r.position.set(-3.05,.45,-2.2),r.rotation.set(.2,.4,-.35),t.add(r),r.children[0].material=new rt({map:ji("#3f6b5a",.14),roughness:.95}),xt(Rt(st(.45,.14,.45,new Kt({map:ji("#d9925a",.08),roughness:.9,sheen:.5}),.07,4),-1,.07,-1.1,t),"floorPillow").rotation.y=.6;const o=[8203834,2898524,13213802,4156250,5978702];for(let w=0;w<5;w++)xt(Rt(me(.26-w*.015,.05,.19,Nt(o[w],.7)),1.3,.025+w*.05,1.2,t),"bookStack").rotation.y=(w%2-.5)*.3;const a=new He;a.position.set(-2.85,.015,-.1),a.rotation.y=.7,t.add(a);for(const w of[-1,1]){const S=Rt(me(.17,.02,.24,Nt(2898524,.6)),w*.085,.03,0,a);S.rotation.z=-w*.25}const c=xt(Rt(new Z(new Ft(.11,24,16),new rt({map:RM(),roughness:.5})),.9,.11,1.4,t),"ball");c.castShadow=!0;const l=xt(new He,"laundry");l.position.set(-1.7,0,2.6),t.add(l);const h=Nt(12098154,.95);Rt(new Z(new Pt(.3,.25,.38,20,1,!0),Object.assign(h,{side:rn})),0,.19,0,l).castShadow=!0,[15913176,10273760,16052714,6967203,15254106].forEach((w,S)=>Rt(new Z(new Ft(.13,10,8),Nt(w,.95)),Math.cos(S*1.3)*.12,.36+S%2*.05,Math.sin(S*1.3)*.12,l).scale.set(1,.55,1.1));const u=Rt(st(.06,.03,.22,Nt(15913176),.015),-1.2,.015,2.3,t);u.rotation.y=.9;const d=xt(new He,"coffeeTable");d.position.set(-2.1,.43,-.7),t.add(d);for(let w=0;w<3;w++)Rt(me(.21,.002,.28,Nt(16513006,.9)),.05+w*.05,.002+w*.002,-.02+w*.03,d).rotation.y=w*.35-.3;[15221359,3134719,16769354,8011007,4170573].forEach((w,S)=>{Rt(new Z(new Pt(.008,.008,.09,8),Nt(w,.5)),.12+S*.03,.01,.16-S*.01,d).rotation.set(Math.PI/2,0,S*.4)});const g=Rt(new Z(new Ft(.08,20,10,0,Math.PI*2,Math.PI/2,Math.PI/2),Nt(16052714,.3,{side:rn})),-.45,.085,-.15,d);g.rotation.x=Math.PI;const _=xt(new He,"counterStuff");_.position.set(0,.91,ze.z0+.3),t.add(_),Rt(me(.2,.3,.07,Nt(15246141,.6)),3.6,.15,-.1,_).rotation.y=.15,Rt(me(.18,.27,.07,Nt(3829713,.6)),3.82,.135,-.08,_).rotation.y=-.1;const m=Rt(new Z(new Pt(.16,.1,.07,20),Nt(2898524,.4)),2.95,.035,.05,_);[15246141,12597547,8367676,13934615].forEach((w,S)=>Rt(new Z(new Ft(.05,12,8),Nt(w,.45)),Math.cos(S*1.6)*.07,.07,Math.sin(S*1.6)*.07,m));for(let w=0;w<4;w++)Rt(new Z(new Pt(.11,.11,.012,20),Nt(16052714,.3)),2.05,.13,-.05+w*.035,_).rotation.x=Math.PI/2-.2;const p=xt(Rt(new Z(new fs(.09,.025,8,20),Nt(12597547,.9)),-3,.025,1.6,t),"rope");return p.rotation.x=Math.PI/2,t.traverse(w=>{const S=w;S.isMesh&&(S.castShadow=!0,S.receiveShadow=!0)}),{g:t,ball:c}}function gl(s,e){for(const[t,n,i]of e){const r=xt(new He,"pottedPlant");r.position.set(t,0,n),r.scale.setScalar(i),s.add(r),Rt(new Z(new Pt(.16,.12,.3,16),Nt(11887418,.8)),0,.15,0,r);const o=Nt(4160074,.6,{side:rn});for(let a=0;a<7;a++){const c=a*.9,l=Rt(new Z(new Ft(.12,8,6),o),Math.cos(c)*.14,.42+a%3*.12,Math.sin(c)*.14,r);l.scale.set(.5,.1,1.3),l.rotation.set(.5,-c,.4),l.castShadow=!0}}}function D1(s){const e=new Hh(new Uint8Array([90,90,90,255,170,170,170,255,235,235,235,255,255,255,255,255]),4,1);e.minFilter=e.magFilter=_n,e.needsUpdate=!0;const t=new Map;s.traverse(n=>{const i=n;if(!i.isMesh)return;const r=o=>{const a=o;if(!a.isMeshStandardMaterial||a.isShaderMaterial)return o;if(t.has(o))return t.get(o);const c=new Wy({color:a.color,map:a.map,gradientMap:e,emissive:a.emissive,emissiveIntensity:a.emissiveIntensity,emissiveMap:a.emissiveMap,transparent:a.transparent,opacity:a.opacity,side:a.side});return t.set(o,c),c};i.material=Array.isArray(i.material)?i.material.map(r):r(i.material)})}const _h={now:{name:"Now: evening, a bit formal",apply:()=>{}},lived:{name:"Lived-in: same house, real family",apply:s=>{const{scene:e,H:t,hemi:n,key:i}=s;zn(t.mats.paper,cs("#6f8a7a","rgba(250,240,210,.18)")),zn(t.mats.kpaper,cs("#e8d9b8","rgba(200,120,80,.16)")),pl(t,"#a7643c",.5),zn(t.mats.rug,La(["#c9a06a","#3f5a6a","#f4ecdc","#7d4a3a","#e8a33d","#9c5a3a","#f4ecdc"])),fl(s,"#e6d6bc","#b5633a",8032106,9085050),ml(e,{fridgeDoor:s.fridgeDoor}),gl(e,[[-4.4,-2.75,1],[4.65,2.6,.9]]),n.intensity=.75,i.color.set(16767144),i.intensity=1.5,e.background=new Be(1906450)}},sunny:{name:"Sunny afternoon: bright, airy, colourful",apply:s=>{const{scene:e,H:t,hemi:n,key:i,moon:r,renderer:o}=s;zn(t.mats.paper,cs("#e9e4d8","rgba(120,150,170,.14)")),zn(t.mats.kpaper,cs("#f4efe4","rgba(232,66,111,.10)")),zn(t.mats.floor,Ro(["#d8b88c","#cfae80","#e0c39a","#c9a676","#dcbd92"])),zn(t.mats.rug,La(["#f2e9d8","#2fa3b0","#e8426f","#f2b134","#2fa3b0","#e8426f","#fff"])),pl(t,"#4f7fa8",.6),t.mats.curtain.map=ji("#f2b134",.06),t.mats.curtain.needsUpdate=!0,t.mats.sky.map=EM(),t.mats.sky.needsUpdate=!0,fl(s,"#ffffff","#bcd8e6",15921386,16447730),t.mats.walnut.color.set(13215350),t.lamp.intensity=0,ml(e,{fridgeDoor:s.fridgeDoor}),gl(e,[[-4.4,-2.75,1.1],[4.65,2.6,1],[1.3,-2.7,.8]]),n.color.set(14675967),n.groundColor.set(12098170),n.intensity=1.25,i.color.set(16773592),i.intensity=2.4,i.position.set(-2,8,6),r.color.set(16773328),r.intensity=1.6;const a=new Kh(16769712,30,9,.5,.6,1.2);a.position.set(.5,2.4,ze.z0-1.2),a.target.position.set(0,0,.4),a.castShadow=!0,e.add(a,a.target),o.toneMappingExposure=1.1,e.background=new Be(15327956)}},eclectic:{name:"Eclectic and a bit weird: deep colours, odd stuff",apply:s=>{const{scene:e,H:t,hemi:n,key:i}=s;zn(t.mats.paper,cs("#b8742f","rgba(40,20,60,.22)")),zn(t.mats.kpaper,cs("#2f5d6a","rgba(240,200,120,.2)")),zn(t.mats.floor,Ro(["#5a3a26","#4e3220","#64432c","#553621"])),zn(t.mats.rug,La(["#2a1f4a","#e8a33d","#2fd4ff","#6b2430","#e8426f","#3f6b5a","#f4ecdc"])),pl(t,"#6b2f5a",1),fl(s,"#f4ecdc","#1b1424",2761272,3813194),t.mats.curtain.map=ji("#2f5d6a",.08),t.mats.curtain.needsUpdate=!0,ml(e,{fridgeDoor:s.fridgeDoor}),gl(e,[[-4.4,-2.75,1.2],[4.65,2.6,1.2],[1.3,-2.7,1],[-.9,-2.6,.7],[-4.55,2.9,.9]]);const r=c=>Nt(c,.2,{emissive:c,emissiveIntensity:.9,transparent:!0,opacity:.8});[3134719,11570687,8388528,16758861].forEach((c,l)=>Rt(new Z(new Pt(.06,.06,.16+l%2*.06,16),r(c)),-.05+l*.17,.72,ze.z0+.25,e));const o=[[-3.9,2.25,.3,.38,2776143],[-3.45,2.35,.25,.25,15246141],[-.55,2.3,.4,.3,7021616],[-.15,1.75,.22,.3,2898524],[-.6,1.7,.28,.28,14070378]];for(const[c,l,h,u,d]of o)Rt(me(h+.04,u+.04,.03,Nt(14070378,.3,{metalness:.7})),c,l,ze.z0+.02,e),Rt(me(h,u,.032,Nt(d,.8)),c,l,ze.z0+.025,e);n.intensity=.45,i.intensity=.9,i.color.set(16763024),t.lamp.color.set(16751178),t.lamp.intensity=8;const a=new hi(8011007,3,4,1.8);a.position.set(-.4,1.5,-1.8),e.add(a),e.background=new Be(1182744)}},storybook:{name:"Storybook: flat painted shading",apply:s=>{_h.lived.apply(s),D1(s.scene),window.__outline=!0,s.hemi.intensity=1,s.key.intensity=1.8,s.scene.background=new Be(2760494)}}},gt=(s,e=.7,t={})=>new rt({color:s,roughness:e,...t}),qe=(s,e,t,n,i)=>(s.position.set(e,t,n),i.add(s),s),xn=3.3,zi=(qt+$t)/2;function N1(){const s=new He,e=ze.x0-.15,t=.9,n=e-t,i=gt(4866104,.9);qe(me(.05,3,$t-qt+.3),n,1.5,zi,s).material=i,qe(me(t,3,.05),e-t/2,1.5,qt-.15,s).material=i,qe(me(t,3,.05),e-t/2,1.5,$t+.15,s).material=i,qe(me(t,.02,$t-qt+.3),e-t/2,.01,zi,s).material=gt(6967360,.8);const r=new hi(16767136,0,2.2,2);r.position.set(e-.45,2.2,zi),s.add(r);const o=qe(new Z(new Pt(.012,.012,$t-qt+.25,8),gt(11184810,.3,{metalness:.9})),n+.28,1.85,zi,s);o.rotation.x=Math.PI/2;const a=[];[[2898524,-.3],[9058874,-.05],[4156250,.22]].forEach(([S,x])=>{const L=qe(st(.32,.9,.16,gt(S,.9),.07),n+.28,1.4,zi+x,s);L.rotation.y=Math.PI/2+x,a.push(L)}),qe(new Z(new Pt(.02,.05,.8,8),gt(1774628,.5)),n+.15,.4,$t-.05,s).rotation.z=.15;for(let S=0;S<2;S++)qe(st(.12,.3,.26,gt(13934615,.5),.05),n+.6,.15,qt+.1+S*.16,s);const c=new He;c.position.set(e-.35,3,zi+.1),s.add(c),qe(new Z(new Pt(.004,.004,1,4),gt(15261904)),0,-.5,0,c);const l=qe(new Z(new Ft(.035,12,8),gt(10251075,.4)),0,-1.02,0,c),h=qe(new Z(new Fn(.3,1.2,.3),new on({visible:!1})),0,-.6,0,c),u=new He;s.add(u);const d=gt(12098154,.6),f=3.4;for(const S of[-1,1])qe(me(.05,f,.06,d),0,f/2,S*.22,u);for(let S=0;S<10;S++)qe(me(.05,.035,.44,d),0,.2+S*.33,0,u);u.position.set(e-.55,0,zi),u.rotation.z=-.2;const g=[new vi(new A(0,-1,0),3)];d.clippingPlanes=g;const _=qe(new Z(new Fn(.5,2.6,.6),new on({visible:!1})),0,1.3,0,u),m=new He;m.position.set(ze.x0+.02,0,qt),s.add(m);const p=gt(15129803,.5),w=qe(st(.05,2.02,$t-qt-.02,p,.01),0,1.01,($t-qt)/2,m);for(const S of[.55,1.45])qe(me(.012,.6,$t-qt-.24),.03,S,($t-qt)/2,m).material=gt(14273976,.5);return qe(new Z(new Ft(.03,12,8),gt(11570519,.3,{metalness:.9})),.05,1,$t-qt-.08,m),s.traverse(S=>{const x=S;x.isMesh&&(x.castShadow=!0,x.receiveShadow=!0)}),{group:s,door:m,doorHit:w,cord:c,cordHit:h,bead:l,ladder:u,ladderHit:_,coats:a,light:r}}function U1(){const s=document.createElement("canvas");s.width=256,s.height=192;const e=s.getContext("2d");e.fillStyle="#e8d6ac",e.fillRect(0,0,256,192),e.strokeStyle="#6a4a2a",e.lineWidth=3,e.strokeRect(30,40,196,120),e.beginPath(),e.moveTo(130,40),e.lineTo(130,160),e.stroke(),e.fillStyle="#b8342a",e.font="bold 26px serif",e.fillText("X",60,110),e.fillText("X",170,140);const t=new Cr(s);return t.colorSpace=Bt,t}function F1(){const s=new He;s.position.y=xn;const e=ze.x0,t=1.2,n=ze.z0,i=2.9,r=-.1,o=2.8,a=.8,c=new rt({map:Ro(["#5a4636","#4e3c2e","#634d3a","#56422f"]),roughness:.85});c.map.repeat.set(1.6,1.6);const l=new Z(new Yt(t-e,i-n),c);l.rotation.x=-Math.PI/2,l.position.set((e+t)/2,.001,(n+i)/2),l.receiveShadow=!0,s.add(l);const h=gt(2760216,.9);qe(me(t-e,.3,i-n),(e+t)/2,-.15,(n+i)/2,s).material=h;const u=new Z(new Yt(40,40),new on({visible:!1}));u.rotation.x=-Math.PI/2,s.add(u);const d=new Ka;d.moveTo(n,0),d.lineTo(n,a),d.lineTo(r,o),d.lineTo(i,a),d.lineTo(i,0),d.lineTo(n,0);const f=new ja;f.absarc(-.3,1.55,.36,0,Math.PI*2,!0),d.holes.push(f);const g=new rt({map:Ro(["#7a6450","#6e5a48","#85705a"]),roughness:.9});g.map.repeat.set(.6,.6);const _=new Z(new Ao(d,{depth:.12,bevelEnabled:!1}),g);_.rotation.y=-Math.PI/2,_.position.set(e,0,0),_.receiveShadow=!0,s.add(_);const m=new Z(new Wi(.36,32),new on({map:ip()}));m.rotation.y=Math.PI/2,m.position.set(e-.1,1.55,-.3),s.add(m),xt(m,"roundWindow");const p=qe(new Z(new fs(.37,.04,8,32),gt(15327695,.5)),e+.01,1.55,-.3,s);p.rotation.y=Math.PI/2;for(const b of[0,Math.PI/2]){const y=qe(me(.02,.72,.025,gt(15327695)),e+.01,1.55,-.3,s);y.rotation.x=b}const w=new Kh(10466559,6,7,.45,.8,1.5);w.position.set(e-.3,1.6,-.3),w.target.position.set(-2.5,0,.8),s.add(w,w.target),qe(me(t-e,a,.1,g),(e+t)/2,a/2,n-.05,s);const S=Math.hypot(r-n,o-a),x=Math.atan2(o-a,r-n),L=new Z(new Yt(t-e,S),new rt({color:9073240,roughness:.95,side:rn}));L.position.set((e+t)/2,(a+o)/2,(n+r)/2),L.rotation.x=Math.PI/2-x,L.receiveShadow=!0,s.add(L);const R=gt(5914672,.8);for(let b=e+.3;b<t;b+=.75){const y=me(.09,.14,S,R);y.position.set(b,(a+o)/2-.06,(n+r)/2+.05),y.rotation.x=-x,s.add(y)}const I=me(t-e,.16,.12,R);I.position.set((e+t)/2,o-.05,r),s.add(I);const T=gt(2760216,.9);qe(me(.14,.06,i-n+.1),e-.06,.03,(n+i)/2,s).material=T;const v=xt(new He,"bulb");v.position.set(-2.4,o-.1,r),s.add(v),qe(new Z(new Pt(.004,.004,.8,4),gt(2236962)),0,-.4,0,v),qe(new Z(new Ft(.06,12,10),new rt({color:16773320,emissive:16762992,emissiveIntensity:3})),0,-.86,0,v);const M=new hi(16763008,5,6,1.6);M.position.set(0,-.95,0),M.castShadow=!0,M.shadow.mapSize.set(512,512),v.add(M);const C=gt(11569754,.95),z=gt(14271130,.8),O=(b,y,N,X,Q,q=0,Ae=0)=>{const ue=xt(qe(st(N,X,Q,C,.01),b,q+X/2,y,s),"boxes");return ue.rotation.y=Ae,qe(me(N+.005,.005,.08),0,X/2,0,ue).material=z,ue};O(-4.5,-2.5,.6,.45,.5),O(-4.45,-2.45,.5,.35,.45,.45,.2),O(-3.8,-2.55,.5,.5,.45,0,-.2),O(.6,-2.4,.55,.4,.5,0,.3),O(.65,-2.35,.4,.3,.35,.4,-.1),[[7021616,.7],[2898524,.6],[9071162,.5]].forEach(([b,y],N)=>xt(qe(st(y,.16,.4,gt(b,.6),.04),-1,.08+N*.16,-2.5,s),"suitcases").rotation.y=N*.15);const B=xt(new He,"rocker");B.position.set(-3.6,0,.9),B.rotation.y=-2.1,s.add(B);const W=gt(4861986,.6);qe(me(.5,.05,.45,W),0,.42,0,B),qe(me(.5,.6,.04,W),0,.75,-.22,B).rotation.x=-.15;for(const b of[-1,1])qe(me(.04,.42,.04,W),b*.22,.21,.18,B),qe(me(.04,.42,.04,W),b*.22,.21,-.18,B),qe(new Z(new fs(.6,.02,6,24,.9),W),b*.22,.6,0,B).rotation.set(0,Math.PI/2,Math.PI*1.5-.45);const k=new He;k.position.set(-1.9,0,-2.3),s.add(k);const K=gt(5913126,.55),H=gt(9075290,.3,{metalness:.8});qe(st(1,.45,.55,K,.03),0,.225,0,k);for(const b of[-.35,.35])qe(me(.06,.46,.56,H),b,.225,0,k);const ce=new He;ce.position.set(0,.45,-.275),k.add(ce);const fe=qe(new Z(new Pt(.275,.275,1,20,1,!1,0,Math.PI),K),0,0,.275,ce);fe.rotation.set(0,0,Math.PI/2),fe.scale.set(1,1,.5),fe.castShadow=!0,qe(me(.08,.1,.03,gt(13213802,.3,{metalness:.9})),0,.4,.28,k);const pe=qe(new Z(new Yt(.4,.3),new rt({map:U1(),roughness:.9})),.1,.452,.05,k);pe.rotation.set(-Math.PI/2,0,.3),pe.visible=!1;const Re=new He;Re.position.set(.25,0,-1),Re.rotation.y=-.6,s.add(Re);const tt=gt(10254908,.35,{metalness:.7}),j=new Ka;j.absellipse(0,0,.5,.85,0,Math.PI*2,!1,0);const ie=new ja;ie.absellipse(0,0,.42,.77,0,Math.PI*2,!0,0),j.holes.push(ie),qe(new Z(new Ao(j,{depth:.06,bevelEnabled:!0,bevelSize:.02,bevelThickness:.02,bevelSegments:2}),tt),0,1.05,0,Re).castShadow=!0;for(const b of[-1,1])qe(me(.05,.3,.3),b*.25,.12,.05,Re).material=tt;const xe=rp(.42);xe.group.rotation.x=Math.PI/2,xe.group.scale.set(1,1,.77/.42),xe.group.position.set(0,1.05,.04),Re.add(xe.group);const ae=qe(new Z(new Wi(.42,32),gt(5923952,.15,{metalness:.9})),0,1.05,.03,Re);ae.scale.y=.77/.42,qe(new Z(new Wi(.025,12),gt(657930)),0,.17,.09,Re);const Ie=new Yt(1.2,2,24,30),De=Ie.attributes.position;for(let b=0;b<De.count;b++){const y=De.getX(b),N=De.getY(b),X=Math.max(0,-N-.1);De.setXYZ(b,y*(1+X*.25),N,.12+Math.sin(y*14+N*2)*.03*(.3+X)+X*X*.15)}Ie.computeVertexNormals();const ke=new Z(Ie,new rt({color:15328472,roughness:1,side:rn}));ke.position.set(0,1,0),ke.castShadow=!0,Re.add(ke);const Je=80,$=new Float32Array(Je*3);for(let b=0;b<Je;b++)$[b*3]=-4+Math.random()*4.5,$[b*3+1]=Math.random()*2.4,$[b*3+2]=-2.5+Math.random()*4.5;const se=new Zt;se.setAttribute("position",new an($,3));const P=new lc(se,new Oo({map:Qh(),size:.035,color:16773328,transparent:!0,opacity:.6,depthWrite:!1,blending:xo}));s.add(P);const be=new He;be.position.set(ze.x0+.65,0,zi),s.add(be),qe(me(.8,.02,.7,gt(722950,1)),0,.006,0,be);for(const b of[-1,1])qe(me(.05,.5,.06,gt(12098154)),-.2,.25,b*.22,be);const te=qe(new Z(new Fn(.9,.6,.8),new on({visible:!1})),0,.3,0,be),Se=new Gh({color:16777215,transparent:!0,opacity:.25});for(const[b,y,N]of[[e+.01,a-.02,n+.01],[e+.01,o-.2,r]]){const X=[];for(let Q=0;Q<7;Q++){const q=Q/6*Math.PI/2;X.push(new A(b,y,N),new A(b+Math.cos(q)*.01,y-Math.sin(q)*.4,N+Math.cos(q)*.4))}for(const Q of[.15,.27,.38])for(let q=0;q<6;q++){const Ae=q/6*Math.PI/2,ue=(q+1)/6*Math.PI/2;X.push(new A(b,y-Math.sin(Ae)*Q,N+Math.cos(Ae)*Q),new A(b,y-Math.sin(ue)*Q,N+Math.cos(ue)*Q))}s.add(new Vf(new Zt().setFromPoints(X),Se))}s.traverse(b=>{const y=b;y.isMesh&&y.material!==ke.material&&(y.castShadow=y.castShadow||!1,y.receiveShadow=!0)});const J=(b,y,N,X)=>new dc(new re(b-N/2,y-X/2),new re(b+N/2,y+X/2)),ve=[J(-4.3,-2.5,1.3,.7),J(.62,-2.4,.7,.65),J(-1,-2.5,.8,.5),J(-1.9,-2.3,1.05,.6),J(-3.6,.9,.7,.7),J(.25,-1,.8,.6),J(ze.x0+.65,zi,.85,.75)],le={x0:e+.35,x1:t-.3,z0:n+.95,z1:i-.3};return{chair:B,group:s,floorHit:u,trunk:k,lid:ce,mapPaper:pe,mirror:Re,sheet:ke,glass:xe,hatch:be,hatchHit:te,motes:P,blockers:ve,bounds:le,bulb:M}}function O1(s,e){s.width=680,s.height=860;const i=s.getContext("2d"),r=i.createRadialGradient(680/2,860/2,100,680/2,860/2,600);r.addColorStop(0,"#efdfb8"),r.addColorStop(1,"#c9a874"),i.fillStyle=r,i.fillRect(0,0,680,860);for(let c=0;c<4e3;c++)i.fillStyle=`rgba(90,60,30,${Math.random()*.05})`,i.fillRect(Math.random()*680,Math.random()*860,3,3);i.strokeStyle="#5a3a22",i.fillStyle="#5a3a22",i.lineWidth=4,i.lineCap="round",i.font="italic 600 38px Fraunces, Georgia, serif",i.textAlign="center",i.fillText("Our House",680/2,70),i.font="italic 22px Fraunces, Georgia, serif",i.fillText("(the secret parts)",680/2,102);const o=(c,l,h,u,d)=>{i.strokeRect(c,l,h,u),i.font="italic 24px Fraunces, Georgia, serif",i.fillText(d,c+h/2,l+32)};i.beginPath(),i.moveTo(80,300),i.lineTo(300,150),i.lineTo(520,300),i.closePath(),i.stroke(),i.font="italic 24px Fraunces, Georgia, serif",i.fillText("Attic",300,280),o(80,300,440,220,"Living room"),o(520,300,120,220,"Kitchen"),o(80,520,560,170,"Basement ?"),i.setLineDash([8,10]),i.strokeRect(80,720,560,100),i.setLineDash([]),i.fillText("The garden",360,752);const a=(c,l,h,u)=>{i.save(),i.strokeStyle="#a8281e",i.fillStyle="#a8281e",i.lineWidth=6,h?(i.beginPath(),i.arc(c,l,26,0,Math.PI*2),i.stroke(),i.lineWidth=7,i.beginPath(),i.moveTo(c-14,l),i.lineTo(c-3,l+12),i.lineTo(c+16,l-14),i.stroke()):(i.beginPath(),i.moveTo(c-16,l-16),i.lineTo(c+16,l+16),i.moveTo(c+16,l-16),i.lineTo(c-16,l+16),i.stroke()),i.font="italic 20px Fraunces, Georgia, serif",i.fillText(u,c,l+50),i.restore()};a(250,400,e.includes("portal"),"couch"),a(130,440,e.includes("shelf"),"books"),a(420,240,e.includes("mirror"),"mirror"),a(580,420,!1,"fridge?"),a(300,620,!1,""),a(540,780,!1,"")}class B1{constructor(e,t={}){this.enabled=!0;const n=t.defaultThickness!==void 0?t.defaultThickness:.003,i=new Be().fromArray(t.defaultColor!==void 0?t.defaultColor:[0,0,0]),r=t.defaultAlpha!==void 0?t.defaultAlpha:1,o=t.defaultKeepAlive!==void 0?t.defaultKeepAlive:!1,a={},c=60,l={},h={},u={outlineThickness:{value:n},outlineColor:{value:i},outlineAlpha:{value:r}},d=["#include <common>","#include <uv_pars_vertex>","#include <displacementmap_pars_vertex>","#include <fog_pars_vertex>","#include <morphtarget_pars_vertex>","#include <skinning_pars_vertex>","#include <logdepthbuf_pars_vertex>","#include <clipping_planes_pars_vertex>","uniform float outlineThickness;","vec4 calculateOutline( vec4 pos, vec3 normal, vec4 skinned ) {","	float thickness = outlineThickness;","	const float ratio = 1.0;","	vec4 pos2 = projectionMatrix * modelViewMatrix * vec4( skinned.xyz + normal, 1.0 );","	vec4 norm = normalize( pos - pos2 );","	return pos + norm * thickness * pos.w * ratio;","}","void main() {","	#include <uv_vertex>","	#include <beginnormal_vertex>","	#include <morphnormal_vertex>","	#include <skinbase_vertex>","	#include <skinnormal_vertex>","	#include <begin_vertex>","	#include <morphtarget_vertex>","	#include <skinning_vertex>","	#include <displacementmap_vertex>","	#include <project_vertex>","	vec3 outlineNormal = - objectNormal;","	gl_Position = calculateOutline( gl_Position, outlineNormal, vec4( transformed, 1.0 ) );","	#include <logdepthbuf_vertex>","	#include <clipping_planes_vertex>","	#include <fog_vertex>","}"].join(`
`),f=["#include <common>","#include <fog_pars_fragment>","#include <logdepthbuf_pars_fragment>","#include <clipping_planes_pars_fragment>","uniform vec3 outlineColor;","uniform float outlineAlpha;","void main() {","	#include <clipping_planes_fragment>","	#include <logdepthbuf_fragment>","	gl_FragColor = vec4( outlineColor, outlineAlpha );","	#include <tonemapping_fragment>","	#include <colorspace_fragment>","	#include <fog_fragment>","	#include <premultiplied_alpha_fragment>","}"].join(`
`);function g(){return new Ti({type:"OutlineEffect",uniforms:If.merge([de.fog,de.displacementmap,u]),vertexShader:d,fragmentShader:f,side:gn})}function _(T){let v=a[T.uuid];return v===void 0&&(v={material:g(),used:!0,keepAlive:o,count:0},a[T.uuid]=v),v.used=!0,v.material}function m(T){const v=_(T);return l[v.uuid]=T,R(v,T),v}function p(T){const v=T.geometry,M=v!==void 0&&v.attributes.normal!==void 0;return T.isMesh===!0&&T.material!==void 0&&M===!0}function w(T){if(p(T)!==!1){if(Array.isArray(T.material))for(let v=0,M=T.material.length;v<M;v++)T.material[v]=m(T.material[v]);else T.material=m(T.material);h[T.uuid]=T.onBeforeRender,T.onBeforeRender=x}}function S(T){if(p(T)!==!1){if(Array.isArray(T.material))for(let v=0,M=T.material.length;v<M;v++)T.material[v]=l[T.material[v].uuid];else T.material=l[T.material.uuid];T.onBeforeRender=h[T.uuid]}}function x(T,v,M,C,z){const O=l[z.uuid];O!==void 0&&L(z,O)}function L(T,v){const M=v.userData.outlineParameters;T.uniforms.outlineAlpha.value=v.opacity,M!==void 0&&(M.thickness!==void 0&&(T.uniforms.outlineThickness.value=M.thickness),M.color!==void 0&&T.uniforms.outlineColor.value.fromArray(M.color),M.alpha!==void 0&&(T.uniforms.outlineAlpha.value=M.alpha)),v.displacementMap&&(T.uniforms.displacementMap.value=v.displacementMap,T.uniforms.displacementScale.value=v.displacementScale,T.uniforms.displacementBias.value=v.displacementBias)}function R(T,v){if(T.name==="invisible")return;const M=v.userData.outlineParameters;T.fog=v.fog,T.toneMapped=v.toneMapped,T.premultipliedAlpha=v.premultipliedAlpha,T.displacementMap=v.displacementMap,M!==void 0?(v.visible===!1?T.visible=!1:T.visible=M.visible!==void 0?M.visible:!0,T.transparent=M.alpha!==void 0&&M.alpha<1?!0:v.transparent,M.keepAlive!==void 0&&(a[v.uuid].keepAlive=M.keepAlive)):(T.transparent=v.transparent,T.visible=v.visible),(v.wireframe===!0||v.depthTest===!1)&&(T.visible=!1),v.clippingPlanes&&(T.clipping=!0,T.clippingPlanes=v.clippingPlanes,T.clipIntersection=v.clipIntersection,T.clipShadows=v.clipShadows),T.version=v.version}function I(){let T;T=Object.keys(l);for(let v=0,M=T.length;v<M;v++)l[T[v]]=void 0;T=Object.keys(h);for(let v=0,M=T.length;v<M;v++)h[T[v]]=void 0;T=Object.keys(a);for(let v=0,M=T.length;v<M;v++){const C=T[v];a[C].used===!1?(a[C].count++,a[C].keepAlive===!1&&a[C].count>c&&delete a[C]):(a[C].used=!1,a[C].count=0)}}this.render=function(T,v){if(this.enabled===!1){e.render(T,v);return}const M=e.autoClear;e.autoClear=this.autoClear,e.render(T,v),e.autoClear=M,this.renderOutline(T,v)},this.renderOutline=function(T,v){const M=e.autoClear,C=T.matrixWorldAutoUpdate,z=T.background,O=e.shadowMap.enabled;T.matrixWorldAutoUpdate=!1,T.background=null,e.autoClear=!1,e.shadowMap.enabled=!1,T.traverse(w),e.render(T,v),T.traverse(S),I(),T.matrixWorldAutoUpdate=C,T.background=z,e.autoClear=M,e.shadowMap.enabled=O},this.autoClear=e.autoClear,this.domElement=e.domElement,this.shadowMap=e.shadowMap,this.clear=function(T,v,M){e.clear(T,v,M)},this.getPixelRatio=function(){return e.getPixelRatio()},this.setPixelRatio=function(T){e.setPixelRatio(T)},this.getSize=function(T){return e.getSize(T)},this.setSize=function(T,v,M){e.setSize(T,v,M)},this.setViewport=function(T,v,M,C){e.setViewport(T,v,M,C)},this.setScissor=function(T,v,M,C){e.setScissor(T,v,M,C)},this.setScissorTest=function(T){e.setScissorTest(T)},this.setRenderTarget=function(T){e.setRenderTarget(T)}}}let Kr=null;const Dr=()=>{if(!Kr)try{Kr=new AudioContext}catch{return null}return Kr.state==="suspended"&&Kr.resume(),Kr};function qn(s,e,t,n="sine",i=.12){const r=Dr();if(!r)return;const o=r.createOscillator(),a=r.createGain();o.type=n,o.frequency.value=s,a.gain.setValueAtTime(0,r.currentTime+e),a.gain.linearRampToValueAtTime(i,r.currentTime+e+.01),a.gain.exponentialRampToValueAtTime(1e-4,r.currentTime+e+t),o.connect(a).connect(r.destination),o.start(r.currentTime+e),o.stop(r.currentTime+e+t+.05)}function zt(s=1){[[659],[784,988],[523,659,784,1047],[392,523,659,784,988,1319]][Math.min(3,s)].forEach((t,n)=>{qn(t,n*.08,.9,"sine",.09),qn(t*2,n*.08,.4,"triangle",.02)})}function pc(){qn(1319,0,.12,"square",.03),qn(1760,.07,.3,"square",.03)}function k1(){const s=Dr();if(!s)return;const e=s.createBufferSource(),t=s.createBuffer(1,s.sampleRate*1.2,s.sampleRate),n=t.getChannelData(0);for(let o=0;o<n.length;o++)n[o]=(Math.random()*2-1)*(1-o/n.length);e.buffer=t;const i=s.createBiquadFilter();i.type="bandpass",i.Q.value=3,i.frequency.setValueAtTime(300,s.currentTime),i.frequency.exponentialRampToValueAtTime(3e3,s.currentTime+1);const r=s.createGain();r.gain.value=.25,e.connect(i).connect(r).connect(s.destination),e.start(),[262,330,392,523,659].forEach((o,a)=>qn(o,.1+a*.07,.6,"sine",.06))}let Da=null;function z1(){const s=[110,98,87.3,82.4],e=[[220,262,330],[196,247,294],[175,220,262],[165,208,247]];let t=0;const n=()=>{const i=t%4;qn(s[i],0,1.6,"triangle",.08),e[i].forEach((r,o)=>qn(r,.4+o*.02,1,"sine",.035)),qn(e[i][2]*2,1.2,.5,"sine",.03),t++};n(),Da=window.setInterval(n,1800)}function H1(){Da&&clearInterval(Da),Da=null}function V1(){const s=Dr();if(!s)return()=>{};const e=s.createGain();e.gain.value=0,e.connect(s.destination),e.gain.linearRampToValueAtTime(.07,s.currentTime+1.5);const t=[55,82.4,110.7].map((r,o)=>{const a=s.createOscillator();return a.type=o?"sine":"triangle",a.frequency.value=r,a.connect(e),a.start(),a}),n=s.createOscillator(),i=s.createGain();return n.frequency.value=.3,i.gain.value=4,n.connect(i),i.connect(t[2].frequency),n.start(),()=>{e.gain.linearRampToValueAtTime(0,s.currentTime+1),setTimeout(()=>{t.forEach(r=>r.stop()),n.stop()},1200)}}function Po(s,e,t,n,i,r=0){const o=Dr();if(!o)return;const a=o.createBufferSource(),c=o.createBuffer(1,Math.ceil(o.sampleRate*s),o.sampleRate),l=c.getChannelData(0);for(let d=0;d<l.length;d++)l[d]=Math.random()*2-1;a.buffer=c;const h=o.createBiquadFilter();h.type="bandpass",h.Q.value=n,h.frequency.setValueAtTime(e,o.currentTime+r),h.frequency.exponentialRampToValueAtTime(t,o.currentTime+r+s);const u=o.createGain();u.gain.setValueAtTime(0,o.currentTime+r),u.gain.linearRampToValueAtTime(i,o.currentTime+r+.02),u.gain.exponentialRampToValueAtTime(.001,o.currentTime+r+s),a.connect(h).connect(u).connect(o.destination),a.start(o.currentTime+r),a.stop(o.currentTime+r+s+.05)}function G1(){Po(.18,300,140,4,.5),Po(.22,260,120,4,.45,.24),qn(90,0,.2,"sawtooth",.04)}function lp(){const s=Dr();if(s)for(const e of[0,.28]){const t=s.createOscillator(),n=s.createGain();t.type="sawtooth",t.frequency.setValueAtTime(520,s.currentTime+e),t.frequency.exponentialRampToValueAtTime(260,s.currentTime+e+.12),n.gain.setValueAtTime(1e-4,s.currentTime+e),n.gain.linearRampToValueAtTime(.12,s.currentTime+e+.01),n.gain.exponentialRampToValueAtTime(.001,s.currentTime+e+.16);const i=s.createBiquadFilter();i.type="lowpass",i.frequency.value=1400,t.connect(i).connect(n).connect(s.destination),t.start(s.currentTime+e),t.stop(s.currentTime+e+.2),Po(.1,900,500,2,.15,e)}}function W1(){qn(392,0,.35,"sine",.1),qn(349,.45,.6,"sine",.1)}function X1(){const s=Dr();if(!s)return;const e=s.createOscillator(),t=s.createGain();e.frequency.setValueAtTime(140,s.currentTime),e.frequency.exponentialRampToValueAtTime(420,s.currentTime+.25),t.gain.setValueAtTime(.12,s.currentTime),t.gain.exponentialRampToValueAtTime(.001,s.currentTime+.35),e.connect(t).connect(s.destination),e.start(),e.stop(s.currentTime+.4)}function Yd(s=1.5){Po(s,2500,1800,.6,.12)}function lo(){qn(110,0,.15,"sine",.2),Po(.08,400,200,1,.2)}const lt=s=>document.getElementById(s),Io=new URLSearchParams(location.search),q1="../index.html",Nr=lt("c"),jn=new oy({canvas:Nr,antialias:!0});jn.setPixelRatio(Math.min(devicePixelRatio,2));jn.outputColorSpace=Bt;jn.toneMapping=lf;jn.toneMappingExposure=1.05;jn.shadowMap.enabled=!0;jn.shadowMap.type=af;const ft=new zf;ft.background=new Be(1380636);const Y1=new sh(jn);ft.environment=Y1.fromScene(new wM,.04).texture;ft.environmentIntensity=.32;const jt=new Mn(36,1,.1,80),mc=new iM(12109032,4863014,.55);ft.add(mc);const pi=new Zh(16770764,1.25);pi.position.set(4,9,7);pi.castShadow=!0;pi.shadow.mapSize.set(2048,2048);Object.assign(pi.shadow.camera,{left:-7,right:7,top:6,bottom:-6,near:1,far:25});pi.shadow.bias=-4e-4;pi.shadow.normalBias=.02;pi.shadow.radius=4;ft.add(pi);const nu=new Zh(8363263,.5);nu.position.set(.5,3,-8);ft.add(nu);const jd=Io.get("style")||"lived",cn=kM();ft.add(cn.group);const{couch:ci,shelf:br,fridge:Lo}=cn,Ki=rp(.3);Ki.group.position.set(ci.cushionPivot.position.x,.432,.13);ci.group.add(Ki.group);const Ve=P1();Ve.visits++;let pn=eu(),Tr=!1;try{sessionStorage.getItem("km_went")&&(Tr=!0,sessionStorage.removeItem("km_went"))}catch{}Io.has("back")&&(Tr=!0);const hp=Ve.seenBolts>=0?pn-Ve.seenBolts:0;hp>0&&(Tr=!0);Tr&&!Ve.found.includes("traveled")&&Ve.found.push("traveled");Ve.seenBolts=pn;const Wt=()=>{Ve.seenBolts=pn,I1(Ve)};Wt();const Cn=s=>Ve.owned.includes(s),Le=s=>Ve.found.includes(s),$e={wallet:lt("wallet"),coins:lt("coinN"),toast:lt("toast"),shopBtn:lt("shopBtn"),shop:lt("shop"),shopList:lt("shopList"),fridge:lt("fridgeP"),fridgeList:lt("fridgeList"),jump:lt("jumpBtn"),who:lt("who"),buddy:lt("buddy"),flash:lt("flash"),intro:lt("intro")};function Ur(s){if(s===void 0){$e.coins.textContent=String(pn);return}const e=s,t=pn,n=performance.now(),i=()=>{const r=Math.min(1,(performance.now()-n)/1200);$e.coins.textContent=String(Math.round(e+(t-e)*r)),r<1&&requestAnimationFrame(i)};i(),$e.wallet.classList.remove("pop"),$e.wallet.offsetWidth,$e.wallet.classList.add("pop")}Ur();let Kd=0;function ht(s,e=3400){$e.toast.innerHTML=s,$e.toast.classList.add("show"),clearTimeout(Kd),Kd=window.setTimeout(()=>$e.toast.classList.remove("show"),e)}function up(s){if(pn=eu(),pn<s)return ht(`You need <b>${s-pn}</b> more pennies. The couch portal is a good place to find some.`),!1;const e=pn;return pn=tu(-s),Wt(),Ur(e),pc(),!0}function Ds(){const s={george:"George",owl:"Owl"};$e.buddy.classList.toggle("hidden",!Ve.companions.length),$e.buddy.innerHTML=Ve.companion?`Bringing <b>${s[Ve.companion]}</b>`:"No buddy"}Ds();const As={};let ge,wt,ui=null,wn=Io.get("hero")==="mila"?"mila":Io.get("hero")==="keira"?"keira":Ve.hero,bt=null;const xh=s=>`./${s}.glb`,j1=new A(-.6,0,.4),K1=new A(-1.2,0,1.3),gc=cn.blockers.map(s=>s.clone().expandByScalar(.28)),dp={x0:ze.x0+.35,x1:ze.x1-.35,z0:ze.z0+.4,z1:ze.z1-.3};let ko=gc,Un=dp,bn=0;function fp(s){s.x=Sn.clamp(s.x,Un.x0,Un.x1),s.z=Sn.clamp(s.z,Un.z0,Un.z1),s.y=bn?xn:0;for(const e of ko)if(s.x>e.min.x&&s.x<e.max.x&&s.z>e.min.y&&s.z<e.max.y){const t=[s.x-e.min.x,e.max.x-s.x,s.z-e.min.y,e.max.y-s.z],n=t.indexOf(Math.min(...t));n===0?s.x=e.min.x-.01:n===1?s.x=e.max.x+.01:n===2?s.z=e.min.y-.01:s.z=e.max.y+.01}return s}function er(s,e){for(const t of ko){const n=t.clone().expandByScalar(-.02);for(let i=0;i<=1;i+=.04){const r=s.x+(e.x-s.x)*i,o=s.z+(e.z-s.z)*i;if(r>n.min.x&&r<n.max.x&&o>n.min.y&&o<n.max.y)return t}}return null}function Er(s,e){if(!er(s,e))return[e];let t=null,n=1/0;const i=[];for(const r of ko)for(const[o,a]of[[r.min.x-.02,r.min.y-.02],[r.max.x+.02,r.min.y-.02],[r.min.x-.02,r.max.y+.02],[r.max.x+.02,r.max.y+.02]])i.push(new A(o,e.y,a));for(const r of i)if(!(r.x<Un.x0-.05||r.x>Un.x1+.05||r.z<Un.z0-.1||r.z>Un.z1+.1)&&!er(s,r)&&!er(r,e)){const o=s.distanceTo(r)+r.distanceTo(e);o<n&&(n=o,t=[r,e])}if(t)return t;for(const r of i)for(const o of i){if(er(s,r)||er(r,o)||er(o,e))continue;const a=s.distanceTo(r)+r.distanceTo(o)+o.distanceTo(e);a<n&&(n=a,t=[r,o,e])}return t||[e]}let Ut=!1;function Za(s,e,t){const n=fp(s.clone());ge.goTo(Er(ge.root.position,n),e,t)}const Tt=[],pp=[];function Zi(s,e,t){const n=zM(t);n.points.position.copy(s),ft.add(n.points),pp.push({h:n,show:e})}const li=new A(ci.group.position.x+ci.cushionPivot.position.x,0,ci.group.position.z+.2);let cr=0,Pn=0;const mn=s=>new Promise(e=>setTimeout(e,s));function wi(s,e){return new Promise(t=>{const n=performance.now(),i=()=>{const r=Math.min(1,(performance.now()-n)/s);e(r),r<1?requestAnimationFrame(i):t()};i()})}function mp(){Pn=1,Ki.open=!0,zt(1),$e.jump.textContent="Jump in",$e.jump.classList.remove("hidden")}function gp(){Pn=0,Ki.open=!1,$e.jump.classList.add("hidden")}const _p=new A(li.x,0,-1.55);Tt.push({id:"cushion",objs:[ci.cushion],stand:_p,face:Math.PI,act:()=>{if(Pn>.5){ge.once("crouch"),gp();return}if(!Le("portal")){tS();return}ge.once("crouch",mp)}});Tt.push({id:"portal",objs:[Ki.hit],stand:_p,face:Math.PI,act:()=>xp()});Zi(new A(li.x,.62,-2.2),()=>!Le("portal")&&Pn<.5,13084927);const as=lt("story"),Z1=lt("storyWho"),$1=lt("storyText");function hn(s,e){return as.classList.remove("hidden"),as.dataset.who=s.toLowerCase(),Z1.textContent=s,$1.innerHTML=e,as.classList.remove("in"),as.offsetWidth,as.classList.add("in"),new Promise(t=>{const n=i=>{i.stopPropagation(),as.removeEventListener("pointerup",n),setTimeout(t,50)};setTimeout(()=>as.addEventListener("pointerup",n),350)})}const _c=()=>as.classList.add("hidden");let ho=null;const J1=new Pt(.06,.06,.012,20),Q1=new rt({color:13136698,metalness:.85,roughness:.3,emissive:3807752});function eS(s){for(let e=0;e<s;e++){const t=new Z(J1,Q1);t.rotation.x=Math.PI/2;const n=new A(li.x+(Math.random()-.5)*.3,.45,-2.3+(Math.random()-.5)*.2);t.position.copy(n),ft.add(t);const i=e*380,r=2+Math.random()*3,o=(Math.random()-.5)*.8;setTimeout(()=>wi(3800,a=>{t.position.set(n.x+Math.sin(a*5)*.12+o*a,n.y+a*2.2,n.z+a*.6),t.rotation.z=a*r*6,t.scale.setScalar(a<.85?1:(1-a)/.15)}).then(()=>ft.remove(t)),i)}}async function tS(){if(Ut)return;Ut=!0,ui?.release();const s=t=>t===As.keira?"Keira":"Mila",e=wt;ho={at:new A(li.x+.4,.8,-1.9),dist:5.2},ge.once("crouch"),Ja(!0),await wi(900,t=>{Pn=.12*t,Ki.open=!0}),await hn(s(ge),ge===As.keira?"Mila. Come here. The couch is... <i>glowing</i>.":"Keira! KEIRA! The couch is glowing!"),e.goTo(Er(e.root.position,new A(li.x+.85,0,-1.45)),void 0,Math.PI*.9),await hn(s(e),e===As.mila?"Did you spill something radioactive on it again?":"Don't touch it. Glowing things are never a good sign. Usually."),await mn(400),Pn=1,zt(2),ou(),vh(!0),await mn(900),await hn("","Under the cushion, where the crumbs and lost pennies usually live, there was a hole. And at the bottom of the hole there was <b>sky</b>."),await hn("Keira","It's not a hole. It's a <b>door</b>."),await hn("Mila","A door to <i>where?</i>"),eS(7),await mn(1200),await hn("","A penny floated up out of the couch. Then another. Somewhere down there, someone had lost a <i>lot</i> of pennies."),await hn("Mila","Dibs on all of them."),await hn("Keira","Only one way to find out."),_c(),Ja(!1),Ve.found.push("portal"),Wt(),$e.jump.textContent="Step in",$e.jump.classList.remove("hidden"),Ut=!1}const nS=new vi(new A(0,1,0),-.43);jn.localClippingEnabled=!0;function iS(s,e){s.root.traverse(t=>{const n=t.material;n&&(n.clippingPlanes=[nS],n.needsUpdate=!0)})}async function Zd(s,e){await new Promise(i=>s.goTo(Er(s.root.position,new A(e.x,0,-1.55)),i,Math.PI)),s.faceTo=Math.PI,await mn(150),s.once("crouch"),await mn(250);const t=s.root.position.clone();await wi(450,i=>{s.root.position.set(t.x+(e.x-t.x)*i,Math.sin(i*Math.PI)*.25+.43*i,t.z+(-1.98-t.z)*i)}),s.once("land"),await mn(380),s.faceTo=.3,await mn(450),s.faceTo=Math.PI,await mn(250),iS(s),k1();const n=s.root.position.clone();await wi(1400,i=>{const r=i*i;s.root.position.set(n.x+(li.x-n.x)*Math.min(1,i*2.5),.43-r*1.7,n.z+(-2.3-n.z)*Math.min(1,i*2.5)),s.root.rotation.y=Math.PI+r*2,$a=Math.max($a,i*.6)}),s.root.visible=!1}async function xp(){if(Ut)return;Ut=!0,ui?.release(),$e.jump.classList.add("hidden"),_c(),Pn<.5&&(mp(),$e.jump.classList.add("hidden")),ho={at:new A(li.x+.3,.7,-1.9),dist:5.6};const s=Zd(ge,new A(li.x-.05,0,0));await mn(1300);const e=Zd(wt,new A(li.x+.12,0,0));await s,await e,$a=1,$e.flash.classList.add("on"),await mn(550);try{sessionStorage.setItem("km_went","1")}catch{}Ve.hero=wn,Wt(),location.href=`${q1}?from=house&hero=${wn}`}let $a=0,vp=0,ws=0;function vh(s){vp=s?1:0}let Zr=null;function Ja(s){s&&!Zr?Zr=V1():!s&&Zr&&(Zr(),Zr=null)}let Na=0,xc=Le("shelf")?1:0;Na=xc;br.doorway.visible=xc>0;const sS=new A(ze.x0+1.05,0,-.5);Tt.push({id:"book",objs:[br.oddBook],stand:sS,face:-Math.PI/2,act:()=>{if(Le("shelf")){ht("The shelf is already open. Something is behind that round door...");return}ge.once("wave",()=>{Ve.found.push("shelf"),Wt(),br.doorway.visible=!0,xc=1,zt(2),ou(),ht("The book was a <b>lever</b>! The whole shelf moved. There's a <b>hidden room</b> behind it...",4800)})}});Tt.push({id:"door",objs:[br.doorway],stand:new A(ze.x0+1,0,-.5),face:-Math.PI/2,act:()=>ht("A round door covered in glowing symbols. It's <b>sealed</b>. Another world is waiting behind this one... <i>(coming soon)</i>",4600)});Zi(new A(ze.x0+.3,1.25,-.5-.17),()=>!Le("shelf"),12033279);const vc=BM();vc.position.set(-3.7,0,.75);ft.add(vc);vc.visible=Le("george");const Mi=sp();Mi.position.set(-3.7,.05,.75);Mi.rotation.y=.5;ft.add(Mi);let _i=Le("george")?1:0;Mi.visible=!Le("george");cn.blockers.push(new dc(new re(-4.15,.3),new re(-3.25,1.2)));gc.push(cn.blockers[cn.blockers.length-1].clone().expandByScalar(.25));const _l=lt("zzz");Tt.push({id:"blanket",objs:[Mi],stand:new A(-2.75,0,.75),face:-Math.PI/2,act:async()=>{Le("george")||(ge.once("crouch"),Ve.found.push("george"),Ve.companions.includes("george")||Ve.companions.push("george"),Ve.companion||(Ve.companion="george"),Wt(),Ds(),zt(3),_i=.001,vc.visible=!0,await yp(),ht("<b>George!</b> Asleep under the blanket, of course. He'll come along on your next jump.",5200))}});Zi(new A(-3.7,.35,.75),()=>!Le("george"));function rS(){return{id:"george",objs:[bt.root],stand:new A(-2.75,0,.75),face:-Math.PI/2,act:()=>{Ve.companion=Ve.companion==="george"?null:"george",Wt(),Ds(),zt(1),bt.once("cheer"),ht(Ve.companion==="george"?"<b>George</b> is coming on the next adventure. (He's not happy about it.)":"George stays home to nap.")}}}async function yp(){bt=await Co.load(xh("george"),!0),bt.root.position.set(-3.7,.08,.75),bt.root.rotation.y=.9,bt.play("nap",0),ft.add(bt.root),bt.root.userData.spot="george",Tt.push(rS())}const nn=OM(),Mp=new A(.05,1.55,ze.z0-.75),zo=new He;zo.position.set(1.35,0,ze.z0+.45);ft.add(zo);{const s=new rt({color:6965808,roughness:.7}),e=(r,o,a,c)=>(r.position.set(o,a,c),r.castShadow=!0,r.receiveShadow=!0,zo.add(r),r);e(new Z(new Pt(.22,.25,.04,24),s),0,.02,0),e(new Z(new Pt(.025,.035,1.38,10),s),0,.71,0);const t=e(new Z(new Pt(.03,.04,.62,10),s),0,1.4,0);t.rotation.z=Math.PI/2+.08;const n=e(new Z(new Pt(.012,.02,.22,6),s),.24,1.48,0);n.rotation.z=-.6;const i=new rt({color:4880970,roughness:.7});for(const[r,o]of[[.3,1.58],[-.27,1.45]])e(new Z(new Ft(.05,8,6),i),r,o,0).scale.set(1.4,.4,.8);e(new Z(new Pt(.06,.04,.05,14),new rt({color:14274752,roughness:.4})),-.2,1.36,.06)}zo.visible=Le("owl");cn.blockers.push(new dc(new re(1.1,ze.z0+.2),new re(1.6,ze.z0+.7)));gc.push(cn.blockers[cn.blockers.length-1].clone().expandByScalar(.2));const Qa=new A(1.35,1.43,ze.z0+.45);let xi=-1;Le("owl")?(ft.add(nn.group),nn.group.position.copy(Qa),nn.group.rotation.y=.2,nn.group.scale.setScalar(1.1)):(nn.group.position.copy(Mp),ft.add(nn.group),nn.group.visible=Le("traveled"),nn.group.scale.setScalar(.9));Tt.push({id:"window",objs:[cn.windowHit,nn.group],stand:cn.windowSpot.clone(),face:Math.PI,act:()=>{if(Le("owl")){Ve.companion=Ve.companion==="owl"?null:"owl",Wt(),Ds(),zt(1),ht(Ve.companion==="owl"?"The <b>owl</b> will fly with you on the next jump.":"The owl stays on the shelf.");return}if(!Le("traveled")){ht("Just trees and the moon. It feels like something out there is <b>watching</b>... maybe come back after an adventure.");return}ge.once("wave",()=>{Ve.found.push("owl"),Ve.companions.push("owl"),Ve.companion||(Ve.companion="owl"),Wt(),Ds(),zt(3),xi=0,ht("An <b>owl</b> followed you home from the other world! She's moving in.",5e3)})}});Zi(new A(.45,1.3,ze.z0+.1),()=>Le("traveled")&&!Le("owl"),16762970);Tt.push({id:"owlHome",objs:[],stand:new A(1.35,0,ze.z0+1.35),face:Math.PI,act:()=>Tt.find(s=>s.id==="window").act()});let Ua=Le("jar")?1:0,uo=Ua;const yc=new Z(new Pt(.09,.08,.2,20),new Kt({color:13625568,roughness:.05,transparent:!0,opacity:.45}));yc.position.set(3.35,1.83,ze.z0+.2);ft.add(yc);const Mc=new Z(new Pt(.075,.07,.11,16),new rt({color:13136698,metalness:.8,roughness:.35}));Mc.position.y=-.04;yc.add(Mc);Tt.push({id:"cabinet",objs:[cn.cabinetHit,yc],stand:new A(3.4,0,ze.z0+1.15),face:Math.PI,act:()=>{if(Le("jar")){uo=uo?0:1;return}ge.once("jump",()=>{uo=1,Ve.found.push("jar"),Mc.visible=!1;const s=pn;pn=tu(100),Wt(),Ur(s),zt(2),pc(),ht("An old <b>penny jar</b> hidden behind the cereal! <b>+100 pennies</b>",4200)})}});Mc.visible=!Le("jar");Zi(new A(3.4,1.7,ze.z0+.45),()=>!Le("jar"));let Ma=0,Sc=0;Tt.push({id:"fridge",objs:Lo.hit,stand:new A(4.2,0,ze.z0+1.6),face:Math.PI*.95,act:()=>{Sc=1,zt(0),wp()}});const ec=[{id:"food_milk",name:"Milk and eggs",price:40,kind:"milk",shelf:0},{id:"food_fruit",name:"Fruit",price:70,kind:"fruit",shelf:1},{id:"food_pizza",name:"Leftover pizza and jam",price:110,kind:"pizza",shelf:2}];function Sp(){for(const s of ec){const e=Lo.shelves[s.shelf];Cn(s.id)&&!e.userData.filled&&(e.add(LM(s.kind)),e.userData.filled=!0)}}Sp();function wp(){$e.fridge.classList.remove("hidden"),$e.fridgeList.innerHTML="";const s=ec.filter(e=>Cn(e.id)).length;lt("fridgeNote").textContent=s===0?"Completely empty. Not even a pickle.":s===3?"Full! Nobody in this house is going hungry.":"Getting there.";for(const e of ec){const t=document.createElement("button");t.className="row"+(Cn(e.id)?" owned":""),t.innerHTML=`<span>${e.name}</span><span class="price">${Cn(e.id)?"In the fridge":`<i class="cn"></i>${e.price}`}</span>`,t.onclick=()=>{Cn(e.id)||up(e.price)&&(Ve.owned.push(e.id),Wt(),Sp(),zt(1),wp())},$e.fridgeList.appendChild(t)}}lt("fridgeClose").onclick=()=>{$e.fridge.classList.add("hidden"),Sc=0};const Wn=N1();ft.add(Wn.group);const at=F1();ft.add(at.group);at.group.visible=!1;const oS=at.blockers.map(s=>s.clone().expandByScalar(.28)),Ns=(qt+$t)/2,Ho=new A(ze.x0+.75,0,Ns);let Sa=0,Yn=0,fo=Le("attic")?1:0,fr=fo,Fa=0;Wn.ladder.visible=fo>0;Tt.push({id:"closet",objs:[Wn.doorHit],stand:Ho,face:-Math.PI/2,act:()=>{Yn=Yn?0:1,zt(0),Yn&&!Le("closet")&&(Ve.found.push("closet"),Wt(),ht("The hall closet. Coats, a broken umbrella, boots... and a <b>string</b> hanging down from the ceiling.",4800))}});Zi(new A(ze.x0+.2,1.2,Ns),()=>!Le("closet")&&Yn===0);Tt.push({id:"coats",objs:Wn.coats,stand:Ho,face:-Math.PI/2,act:()=>{if(Yn<1)return;if(Le("coatpocket")){ht("Just coats. One of them smells like a wet dog.");return}Ve.found.push("coatpocket");const s=pn;pn=tu(25),Wt(),Ur(s),pc(),zt(1),ht("Somebody left <b>25 pennies</b> in a coat pocket. Finders keepers.")}});Tt.push({id:"cord",objs:[Wn.cordHit],stand:Ho,face:-Math.PI/2,act:()=>{if(Yn<1){Yn=1;return}if(fr>0){iu();return}ge.once("jump",()=>{Fa=1,fr=1,Wn.ladder.visible=!0,ou(),zt(2),Le("attic")||aS()})}});Zi(new A(ze.x0-.5,1.9,Ns+.1),()=>Yn>.5&&!Le("attic"),13084927);Tt.push({id:"ladder",objs:[Wn.ladderHit],stand:Ho,face:-Math.PI/2,act:()=>iu()});async function aS(){Ut=!0,ui?.release(),await mn(900),await hn("Mila","There's an upstairs ABOVE the upstairs?"),await hn("Keira","It's an attic. Every house has one."),await hn("","A cold draft drifted down the ladder. It smelled like old books and rain. Somewhere up there, very quietly, something was <i>ticking</i>."),await hn("Keira","...Most attics don't tick, though."),_c(),Ve.found.push("attic"),Wt(),Ut=!1,ht("Tap the ladder to climb up.")}async function tc(s,e){if(e){await new Promise(n=>s.goTo(Er(s.root.position,Ho.clone()),n,-Math.PI/2));const t=s.root.position.clone();await wi(500,n=>s.root.position.set(t.x+(ze.x0-.45-t.x)*n,0,t.z+(Ns-t.z)*n)),await wi(700,n=>{s.root.position.y=n*1.6}),s.root.visible=!1}else{const t=at.hatch.position;await new Promise(i=>s.goTo(Er(s.root.position,new A(t.x+.75,xn,t.z)),i,-Math.PI/2));const n=s.root.position.clone();await wi(400,i=>s.root.position.set(n.x+(t.x-n.x)*i,xn,n.z+(t.z-n.z)*i)),await wi(700,i=>{s.root.position.y=xn-i*1.6}),s.root.visible=!1}}async function nc(s,e,t){if(s.root.visible=!0,e){const n=at.hatch.position;s.root.position.set(n.x,xn-1.4,n.z),await wi(800,i=>{s.root.position.y=xn-1.4+1.4*i})}else s.root.position.set(ze.x0-.45,1.4,Ns),await wi(700,n=>{s.root.position.y=1.4*(1-n)});s.once("land"),await new Promise(n=>s.goTo(Er(s.root.position,t),n,.3))}function bp(s){bn=s,ko=s?oS:gc,Un=s?at.bounds:dp,at.group.visible=s===1,$e.shopBtn.classList.toggle("hidden",s===1)}async function iu(){if(Ut)return;Ut=!0,ui?.release(),at.group.visible=!0;const s=mn(700).then(()=>tc(wt,!0));await tc(ge,!0),bp(1);const e=at.hatch.position;await nc(ge,!0,new A(e.x+1,xn,e.z-.3)),await s,nc(wt,!0,new A(e.x+1.1,xn,e.z+.45)),Le("upstairs")||(Ve.found.push("upstairs"),Wt(),ht("The attic. Dusty boxes, an old trunk, and something tall hiding under a sheet.",5e3)),Ut=!1}async function Tp(){if(Ut)return;Ut=!0,ui?.release();const s=mn(700).then(()=>tc(wt,!1));await tc(ge,!1),bp(0),at.group.visible=!0,await nc(ge,!1,new A(ze.x0+.9,0,Ns-.2)),await s,nc(wt,!1,new A(ze.x0+1.3,0,Ns+.3)).then(()=>{bn===0&&(at.group.visible=!1)}),Ut=!1}const cS=new A(at.hatch.position.x+.8,xn,at.hatch.position.z);Tt.push({id:"hatch",lvl:1,objs:[at.hatchHit],stand:cS,face:-Math.PI/2,act:()=>Tp()});let po=Le("map")?1:0,yh=po;at.mapPaper.visible=po>0;const Ep=lt("mapP");function $d(){O1(lt("mapCanvas"),Ve.found),Ep.classList.remove("hidden")}lt("mapClose").onclick=s=>{s.stopPropagation(),Ep.classList.add("hidden")};Tt.push({id:"trunk",lvl:1,objs:[at.trunk],stand:new A(-1.9,xn,-1.35),face:Math.PI,act:()=>{if(Le("map")){yh=1,$d();return}ge.once("crouch",()=>{yh=1,at.mapPaper.visible=!0,zt(2),Ve.found.push("map"),Wt(),setTimeout(()=>{$d(),ht("An old <b>map of the house</b>, with secret places marked. Some of them you've found. Some of them... you haven't.",6e3)},700)})}});Zi(new A(-1.9,xn+.5,-2.3),()=>bn===1&&!Le("map"));let ti=Le("mirror")?1:0;at.sheet.visible=!Le("mirror");at.glass.open=Le("mirror");Tt.push({id:"mirror",lvl:1,objs:[at.mirror],stand:new A(-.35,xn,-.35),face:2.2,act:async()=>{if(Le("mirror")){ht("The mirror is <b>locked</b>. There's a tiny keyhole at the bottom of the frame. The key has to be somewhere in this house...",5e3);return}Ut=!0,ui?.release(),ge.once("wave"),await mn(500),ti=.001,zt(2),Ja(!0),await mn(1200),at.glass.open=!0,vh(!0),await mn(800),await hn("Keira","That's not our reflection."),await hn("Mila","Good. I look way cooler than that."),await hn("","Inside the mirror was another attic. Darker. Bigger. Full of clocks, all ticking, none of them telling the same time."),await hn("Keira","It's locked. Look, there's a keyhole in the frame."),await hn("Mila","So we find the key. How hard can it be?"),_c(),Ja(!1),vh(!1),Ve.found.push("mirror"),Wt(),Ut=!1,ht("<b>The mirror world is coming soon.</b> Find the key...",4500)}});Zi(new A(.25,xn+1.6,-1),()=>bn===1&&!Le("mirror"),13084927);const ir=lt("card"),lS=lt("cardName"),hS=lt("cardText"),Jd=lt("cardOpts");let Mh=null;function Rn(){ir.classList.add("hidden"),Mh=null}lt("cardX").addEventListener("click",s=>{s.stopPropagation(),Rn()});const tr=s=>s[Math.floor(Math.random()*s.length)],nr=()=>wn==="keira",An=s=>()=>{Rn(),Tt.find(e=>e.id===s)?.act()};function mo(s){const e=Rp[s];if(e){Mh=s,lS.textContent=typeof e.name=="function"?e.name():e.name,hS.innerHTML=e.text(),Jd.innerHTML="";for(const[t,n]of e.opts?.()||[]){const i=document.createElement("button");i.textContent=t,i.onclick=r=>{r.stopPropagation(),n(),Mh===s&&!ir.classList.contains("hidden")&&mo(s)},Jd.appendChild(i)}ir.classList.remove("hidden"),ir.classList.remove("in"),ir.offsetWidth,ir.classList.add("in")}}function Qd(s,e=4,t="♥"){for(let n=0;n<e;n++)setTimeout(()=>{const i=s.clone().project(jt),r=document.createElement("div");r.className="heart",r.textContent=t,r.style.left=`${(i.x*.5+.5)*innerWidth+(Math.random()-.5)*30}px`,r.style.top=`${(-i.y*.5+.5)*innerHeight}px`,document.body.appendChild(r),setTimeout(()=>r.remove(),1400)},n*160)}let wa=!0,$r=!0,Oa=0,Ba=0;const Ap=()=>{let s=null;return ft.traverse(e=>{e.userData.item==="ball"&&(s=e)}),s},Bi=new A,Do=new Z(new Pt(.012,.018,.17,8),new rt({color:12576511,transparent:!0,opacity:.6,roughness:.05}));Do.position.set(2.4,1,ze.z0+.28);Do.visible=!1;ft.add(Do);const uS=["<i>A History of Doors That Shouldn't Be There</i>","<i>Owls, and Why They Stare</i>","<i>Cooking for Pugs</i>","<i>The Book of Weird Things, Volume Two</i>","<i>How to Tell If Your House Is Bigger on the Inside</i>","<i>Moths: A Love Story</i>"],ba=["Mila's drawing of George. He looks like a potato with legs. It's very accurate.","Keira's drawing of an owl in a tree, under the moon. The owl looks a lot like the one at the window...","A drawing of the house, the two girls, and a purple door with a question mark on it. Nobody remembers drawing it.","A swirl. Mila says it's a portal. Keira says it's a snail."],Rp={couch:{name:"The couch",text:()=>Le("portal")?"Comfy, a bit saggy, full of crumbs. If you put your ear on the middle cushion, it <i>hums</i>.":"Comfy, a bit saggy, and full of crumbs. The middle cushion sits a little higher than the others...",opts:()=>[[Pn>.5?"Close the cushion":"Lift the middle cushion",An("cushion")],...Pn>.5?[["Jump in",()=>{Rn(),xp()}]]:[],["Bounce on it",()=>{Rn(),ge.once("jump"),setTimeout(X1,250),ht(tr(["Boing.","Mom would not like this.","Best couch in the world for bouncing."]))}]]},coffeeTable:{name:"Coffee table",text:()=>"Crayons, a cold mug of something, and drawings nobody finished.",opts:()=>[["Draw something",()=>{Rn(),ge.once("crouch"),ht(nr()?`Keira draws an owl. It comes out <i>really</i> good. She says it's "fine".`:"Mila draws Keira as a potato. It's her best work.")}]]},rug:{name:"The rug",text:()=>"An old rug from Grandma's house. One corner keeps curling up, like something underneath is pushing on it..."},lamp:{name:"Floor lamp",text:()=>"A tall brass lamp. It flickers when the couch is humming.",opts:()=>[[wa?"Turn it off":"Turn it on",()=>{wa=!wa,_o.lamp=wa?wS:0,lo()}]]},painting:{name:"Painting",text:()=>`Mountains at sunset. Dad says it's "tasteful".`},eyePainting:{name:"Painting of an eye",text:()=>tr(["A painting of an eye. Pretty sure it just blinked.","A painting of an eye. It's looking at you. It's <i>always</i> looking at you.","An eye. Keira thinks it's Victorian. Mila thinks it's rude."])},bookshelf:{name:"Bookshelf",text:()=>nr()?"Too many books. Keira has read most of them twice. One of them doesn't look like the others.":"So many books. Mila has read the ones with pictures.",opts:()=>[["Read something",()=>{Rn(),ht(`${nr()?"Keira":"Mila"} pulls out ${tr(uS)}. ${nr()?"She reads three chapters standing up.":"She looks at the pictures and puts it back upside down."}`,5e3)}],...Le("shelf")?[]:[["Pull the odd book",An("book")]]]},sideboard:{name:"Sideboard",text:()=>"Holds the record player, three dead batteries, a single sock and a takeout menu from 2019."},window:{name:"The window",text:()=>Le("owl")?"Trees and the moon. The branch where the owl used to sit is empty now.":Le("traveled")?"There's an <b>owl</b> on the branch outside, staring right at you.":"Trees and the moon. It feels like something out there is watching.",opts:()=>Le("owl")?[]:[[Le("traveled")?"Open the window":"Look outside",An("window")]]},fridge:{name:"The fridge",text:()=>"It hums. Not the portal kind of hum, the normal kind. Probably.",opts:()=>[["Open it",An("fridge")]]},cabinet:{name:"Kitchen cupboard",text:()=>Le("jar")?"Cereal, crackers, and an empty penny jar.":"The cereal cupboard. Something in the back clinks when you lean on the counter.",opts:()=>[[uo?"Close it":"Open it",An("cabinet")]]},cupboardL:{name:"Kitchen cupboard",text:()=>"Plates, bowls, and the good glasses nobody is allowed to use."},sink:{name:"The sink",text:()=>nr()?"Somebody's turn to do the dishes. It's Mila's turn. Mila says it isn't.":"Somebody's turn to do the dishes. Definitely Keira's.",opts:()=>[["Turn on the tap",()=>{Rn(),Ba=2.2,Yd(2)}]]},kitchenTable:{name:"Kitchen table",text:()=>"Breakfast table. A little sticky. Nobody knows why."},counterStuff:{name:"Kitchen counter",text:()=>"Cereal (the good kind), a fruit bowl, and a dish rack that's been full since Tuesday."},aquarium:{name:"Aquarium",text:()=>"Glowing fish from the deep. One of them has teeth. Mila named him Gary.",opts:()=>[["Feed the fish",()=>{Rn(),Oa=4,zt(0),ht("The fish swarm to the top. Gary eats everyone's food.")}]]},plant:{name:"Big leafy plant",text:()=>"Mila named it Gerald. Gerald is thriving.",opts:()=>[["Water Gerald",()=>{Rn(),ge.once("crouch"),Yd(.6),ht("Gerald looks pleased. Somehow.")}]]},pottedPlant:{name:"Pot plant",text:()=>"A little plant. It leans toward the window at night, which is weird, because plants don't do that."},records:{name:"Record player",text:()=>"Old, crackly, and perfect.",opts:()=>[[Rs?"Stop the music":"Play a record",An("records")]]},lights:{name:"String lights",text:()=>"Warm little bulbs over the couch.",opts:()=>[[$r?"Turn them off":"Turn them on",()=>{$r=!$r,bc.traverse(s=>{s.isPointLight&&(s.intensity=$r?1.4:0);const e=s.material;e?.emissive&&(e.emissiveIntensity=$r?2.4:.05)}),lo()}]]},george:{name:"George",text:()=>bt&&bt.clip==="cheer"?"George snorts. That's pug for thank you.":bt&&bt.clip==="nap"?"A pug of very few interests: sleeping, snacks, and more sleeping. He's snoring.":"George is awake. This is rare. Enjoy it.",opts:()=>[["Pet him",()=>{const s=bt.clip==="nap";ge.once("crouch"),G1(),Qd(bt.root.position.clone().add(new A(0,.6,0)),5),bt.once("cheer",()=>{s&&bt.play("nap",.8)})}],[bt&&bt.clip==="nap"?"Wake him up":"Let him sleep",()=>{bt.clip==="nap"?(lp(),bt.play("idle"),ht("<b>WOOF.</b> He is awake, and he is not happy about it."),setTimeout(()=>bt&&bt.play("nap",1),9e3)):(bt.play("nap",1),ht("Back to sleep he goes."))}],[Ve.companion==="george"?"Leave him home":"Bring him along",()=>{Ve.companion=Ve.companion==="george"?null:"george",Wt(),Ds(),zt(1)}]]},owl:{name:"The owl",text:()=>"She doesn't have a name yet. She looks like she knows things.",opts:()=>[["Pet her",()=>{W1(),Qd(Qa.clone().add(new A(0,.4,0)),3)}],[Ve.companion==="owl"?"Leave her home":"Bring her along",()=>{Ve.companion=Ve.companion==="owl"?null:"owl",Wt(),Ds(),zt(1)}]]},blanket:{name:"A blanket",text:()=>"A lumpy blanket. It's... snoring?",opts:()=>[["Lift it",An("blanket")]]},throw:{name:"Throw blanket",text:()=>"Half on the couch, half on the floor. Its natural habitat."},floorPillow:{name:"A pillow",text:()=>"A couch pillow on the floor. Mila says it's lava-proof."},backpack:{name:"School backpack",text:()=>nr()?"Your backpack. Heavier than it looks. Mostly books.":"Keira's backpack. Mila checks for snacks. No snacks."},ball:{name:"Soccer ball",text:()=>"Not allowed inside. It's inside.",opts:()=>[["Kick it",()=>{Rn();const s=Ap();if(!s)return;ge.once("jump");const e=s.position.clone().sub(ge.root.position);e.y=0,e.normalize().multiplyScalar(4.5),Bi.copy(e),lo()}]]},laundry:{name:"Laundry basket",text:()=>"Clean laundry. Probably. Nobody has carried it upstairs in a week."},shoes:{name:"Shoes",text:()=>"Kicked off wherever. Nobody can ever find the other one in the morning."},rope:{name:"Rope toy",text:()=>"George's rope toy. Slightly damp. Don't ask."},bookStack:{name:"A stack of books",text:()=>"Library books. Two of them are overdue. One of them is overdue from a library that doesn't exist anymore."},drawing0:{name:"Drawing",text:()=>ba[0]},drawing1:{name:"Drawing",text:()=>ba[1]},drawing2:{name:"Drawing",text:()=>ba[2]},drawing3:{name:"Drawing",text:()=>ba[3]},closet:{name:"Hall closet",text:()=>Le("attic")?"Coats, boots, and a ladder up to the attic.":"Coats, a broken umbrella, boots...",opts:()=>[[Yn?"Close the door":"Open the door",An("closet")]]},coats:{name:"Coats",text:()=>"Lots of coats. Lots of pockets.",opts:()=>[["Check the pockets",An("coats")]]},cord:{name:"A string",text:()=>"A string hanging from the closet ceiling, with a wooden bead on the end.",opts:()=>[["Pull it",An("cord")]]},ladder:{name:"Attic ladder",text:()=>"It goes up into the dark. Something up there is ticking.",opts:()=>[["Climb up",An("ladder")]]},hatch:{name:"The hatch",text:()=>"The ladder back down to the house.",opts:()=>[["Climb down",An("hatch")]]},trunk:{name:"Old trunk",text:()=>Le("map")?"The trunk with the map of the house in it.":"A heavy old trunk with brass corners. It isn't locked.",opts:()=>[[Le("map")?"Read the map":"Open it",An("trunk")]]},mirror:{name:"Tall mirror",text:()=>Le("mirror")?"It shows a darker attic full of ticking clocks. There's a keyhole at the bottom of the frame.":"Something tall under a dust sheet.",opts:()=>[[Le("mirror")?"Try to open it":"Pull off the sheet",An("mirror")]]},boxes:{name:"Boxes",text:()=>tr(["A box labelled HOLIDAY STUFF.","A box labelled TAXES. Boring.","A box labelled DO NOT OPEN. It's taped shut. Very well taped.","A box labelled MILA BABY CLOTHES. Mila refuses to look."])},suitcases:{name:"Old suitcases",text:()=>"Stickers from places nobody in the family remembers going."},rocker:{name:"Rocking chair",text:()=>"An old rocking chair facing the round window. Sometimes it rocks on its own.",opts:()=>[["Give it a push",()=>{ka=4,ht("Creak... creak... creak...")}]]},bulb:{name:"Light bulb",text:()=>"A bare bulb on a long cord. It sways a little, even when nobody touches it."},roundWindow:{name:"Round window",text:()=>"You can see the whole street from up here. And the moon. And... is that a light in the garden shed?"},"girl:keira":{name:"Keira",text:()=>"Keira. Reading something, probably.",opts:()=>[["Play as Keira",()=>{Rn(),Ar()}],["Talk",()=>ht("<b>Keira:</b> "+tr(["Did you know owls can't move their eyes? That's why they turn their whole head.","I'm on chapter twelve. Don't ask what happens.","This house is weirder than it used to be. I like it.","If you find a key, don't touch it. Give it to me."]))]]},"girl:mila":{name:"Mila",text:()=>"Mila. Wearing sunglasses indoors, as usual.",opts:()=>[["Play as Mila",()=>{Rn(),Ar()}],["Talk",()=>{ht("<b>Mila:</b> "+tr(["Watch this.","Is it snack time? It feels like snack time.","I'm not scared of the attic. YOU'RE scared of the attic.","These are my cool glasses. I have regular glasses too. They're less cool."]))}]]}};let ka=0;Tt.push({id:"other",objs:[],stand:new A,face:0,act:()=>Ar()});const Fr=DM();Fr.group.position.set(ze.x0+.27,.7,dh);Fr.group.rotation.y=Math.PI/2;ft.add(Fr.group);const wc=NM();wc.position.set(-.45,0,ze.z0+.4);ft.add(wc);const Vo=UM();Vo.group.position.set(.25,.62,ze.z0+.25);ft.add(Vo.group);const bc=FM(-3.6,-.6,2.85,ze.z0+.06);ft.add(bc);let Rs=!1;Tt.push({id:"records",objs:[Vo.group],stand:new A(.3,0,ze.z0+1),face:Math.PI,act:()=>{Cn("records")&&(Rs=!Rs,Rs?z1():H1(),ht(Rs?"Spooky jazz. Good choice.":"Quiet again."))}});const su=[{id:"plant",name:"Big leafy plant",desc:"For the corner. It might be watching you.",price:60,obj:wc},{id:"lights",name:"String lights",desc:"Warm little bulbs over the couch.",price:120,obj:bc},{id:"records",name:"Record player",desc:"Tap it to play some music.",price:180,obj:Vo.group},{id:"aquarium",name:"Aquarium",desc:"Glowing fish from the deep.",price:300,obj:Fr.group},{id:"couch",name:"New velvet couch",desc:"Deep green, with gold feet. The portal comes too.",price:600,obj:null}];function Cp(){for(const s of su)s.obj&&(s.obj.visible=Cn(s.id));ci.restyle(Cn("couch"))}Cp();function ru(){$e.shop.classList.remove("hidden"),$e.shopList.innerHTML="";for(const t of su){const n=document.createElement("button");n.className="row"+(Cn(t.id)?" owned":""),n.innerHTML=`<span><b>${t.name}</b><small>${t.desc}</small></span><span class="price">${Cn(t.id)?"Yours":`<i class="cn"></i>${t.price}`}</span>`,n.onclick=()=>{Cn(t.id)||up(t.price)&&(Ve.owned.push(t.id),Wt(),Cp(),zt(2),ru(),t.obj&&(t.obj.scale.setScalar(.01),Sh.push({o:t.obj,t:0})),$e.shop.classList.add("hidden"),ht(`<b>${t.name}</b> is in the house!`),t.id==="couch"&&(ci.group.scale.setScalar(.01),Sh.push({o:ci.group,t:0})))},$e.shopList.appendChild(n)}const s=ec.filter(t=>!Cn(t.id)).length,e=document.createElement("p");e.className="tip",e.textContent=s?"Food for the fridge is in the fridge. Go open it.":"",$e.shopList.appendChild(e)}const Sh=[];$e.shopBtn.onclick=s=>{s.stopPropagation(),pn=eu(),Ur(),ru()};lt("shopClose").onclick=()=>$e.shop.classList.add("hidden");$e.jump.onclick=s=>{s.stopPropagation(),rc(Tt.find(e=>e.id==="portal"))};$e.who.onclick=s=>{s.stopPropagation(),Ar()};function ou(){no=.6;try{navigator.vibrate?.(80)}catch{}}let no=0;const go=new SM,ic=new re,os=56,za=lt("stick"),dS=lt("knob");let ln=null,Vt=null;const Xi=new Map;let ni=null,ps=1,Tc=0,No=!1;const Pp=.3,Ip=1.25,fS=-.32,pS=.75;function Lp(){const[s,e]=[...Xi.values()];return{d:Math.hypot(e.x-s.x,e.y-s.y),a:Math.atan2(e.y-s.y,e.x-s.x),mx:(s.x+e.x)/2,my:(s.y+e.y)/2}}const ef=new vi;function Dp(s,e){return ef.set(cu,-((bn?xn:0)+.6)),ic.set(s/innerWidth*2-1,-(e/innerHeight)*2+1),go.setFromCamera(ic,jt),go.ray.intersectPlane(ef,new A)}function au(){Vt=null,za.classList.add("hidden"),ge&&(ge.steer=0)}Nr.addEventListener("pointerdown",s=>{if(Xi.set(s.pointerId,{x:s.clientX,y:s.clientY}),Xi.size===2){au(),ln=null;const e=Lp();ni={d:e.d,a:e.a,zoom:ps,yaw:Tc,anchor:Dp(e.mx,e.my)};return}Xi.size>2||(ln={id:s.pointerId,x:s.clientX,y:s.clientY,t:performance.now()})});Nr.addEventListener("pointermove",s=>{if(!Xi.has(s.pointerId))return;if(Xi.set(s.pointerId,{x:s.clientX,y:s.clientY}),ni&&Xi.size>=2){const n=Lp();ps=Sn.clamp(ni.zoom*ni.d/Math.max(20,n.d),Pp,Ip);let i=n.a-ni.a;if(i=Math.atan2(Math.sin(i),Math.cos(i)),Tc=Sn.clamp(ni.yaw+i,fS,pS),No=!0,bh(),ni.anchor){const r=Dp(n.mx,n.my);r&&(Vn.x+=ni.anchor.x-r.x,Vn.z+=ni.anchor.z-r.z,Op(),bh())}return}if(!ln||s.pointerId!==ln.id||Ut)return;const e=s.clientX-ln.x,t=s.clientY-ln.y;if(!Vt&&Math.hypot(e,t)>14&&(Vt={x:ln.x,y:ln.y,jx:0,jy:0},za.style.transform=`translate(${ln.x}px, ${ln.y}px)`,za.classList.remove("hidden"),ge.goTo([]),No=!1,Up(),Rn()),Vt){const n=Math.hypot(e,t),i=Math.min(1,os/Math.max(1,n));Vt.jx=e*i/os,Vt.jy=t*i/os,n>os*1.6&&(Vt.x=s.clientX-e/n*os*1.6,Vt.y=s.clientY-t/n*os*1.6,ln.x=Vt.x,ln.y=Vt.y,za.style.transform=`translate(${Vt.x}px, ${Vt.y}px)`),dS.style.transform=`translate(${Vt.jx*os}px, ${Vt.jy*os}px)`}});const Np=s=>{Xi.delete(s.pointerId),Xi.size<2&&(ni=null)};Nr.addEventListener("pointercancel",s=>{Np(s),ln?.id===s.pointerId&&(ln=null,au())});Nr.addEventListener("wheel",s=>{s.preventDefault(),ps=Sn.clamp(ps*(1+s.deltaY*.001),Pp,Ip)},{passive:!1});function Up(){$e.shop.classList.add("hidden"),$e.fridge.classList.contains("hidden")||($e.fridge.classList.add("hidden"),Sc=0)}Nr.addEventListener("pointerup",s=>{if(Np(s),!ln||s.pointerId!==ln.id)return;const e=!!Vt;if(ln=null,au(),e||Ut)return;ic.set(s.clientX/innerWidth*2-1,-(s.clientY/innerHeight)*2+1),go.setFromCamera(ic,jt),Up(),Rn();const t=go.intersectObjects(bn?[at.group,ge.root,wt.root]:ft.children,!0);let n=null,i=null;for(const o of t){if(o.object===cn.floorHit||o.object===at.floorHit||o.object.isPoints||o.object.isLine||!_S(o.object)||o.object.material&&o.object.material.visible===!1&&!o.object.userData.spot)continue;let a=o.object;for(;a&&!a.userData.spot&&!a.userData.item;)a=a.parent;a&&(n=a.userData.spot||a.userData.item,i=a);break}const r=go.intersectObject(bn?at.floorHit:cn.floorHit)[0];if(n&&i){No=!1,xS(n,i);return}r&&(No=!1,Za(r.point))});const Jr=new A,tf=new A;function nf(s,e){if(s<Un.x0||s>Un.x1||e<Un.z0||e>Un.z1)return!0;for(const t of ko){const n=t.min.x+.08,i=t.max.x-.08,r=t.min.y+.08,o=t.max.y-.08;if(s>n&&s<i&&e>r&&e<o)return!0}return!1}const gi=new A;function mS(s){if(Ut||!ge){gi.set(0,0,0),ge&&(ge.steer=0);return}const e=new A,t=Vt?Math.min(1,Math.hypot(Vt.jx,Vt.jy)):0;if(Vt&&t>=.12){jt.getWorldDirection(Jr),Jr.y=0,Jr.normalize(),tf.crossVectors(Jr,cu).normalize();const a=tf.multiplyScalar(Vt.jx).add(Jr.clone().multiplyScalar(-Vt.jy));a.y=0,a.normalize(),e.copy(a).multiplyScalar(ge.speed*(.35+.75*t))}gi.lerp(e,Math.min(1,s*(e.lengthSq()>0?6:7)));const n=gi.length();if(n<.03){gi.set(0,0,0),ge.steer=0;return}const i=ge.root.position,r=i.x+gi.x*s,o=i.z+gi.z*s;nf(r,i.z)?gi.x=0:i.x=r,nf(i.x,o)?gi.z=0:i.z=o,ge.steer=Math.min(1,n/ge.speed+.1),n>.12&&(ge.faceTo=Math.atan2(gi.x,gi.z))}const Ha=lt("actBtn");let sc=null;const xl={cushion:()=>Pn>.5?"Close the cushion":Le("portal")?"Lift the cushion":"Look at the couch",book:()=>Le("shelf")?null:"Look at the odd book",door:()=>br.doorway.visible?"Look at the round door":null,blanket:()=>Le("george")?null:"Lift the blanket",george:()=>Ve.companion==="george"?"Leave George home":"Bring George along",window:()=>Le("owl")?null:"Look outside",cabinet:()=>Le("jar")?null:"Open the cupboard",fridge:()=>"Open the fridge",owlHome:()=>Le("owl")?Ve.companion==="owl"?"Leave the owl home":"Bring the owl along":null,records:()=>Cn("records")?Rs?"Stop the music":"Play a record":null,closet:()=>Yn>.5?fr>.5?null:"Close the closet":"Open the closet",cord:()=>Yn>.5&&fr<.5?"Pull the string":null,ladder:()=>fr>.5&&Wn.ladder.visible?"Climb the ladder":null,hatch:()=>"Climb down",trunk:()=>Le("map")?"Read the map":"Open the trunk",mirror:()=>Le("mirror")?"Look at the mirror":"Pull off the sheet"};function gS(){let s=null,e=1.25;if(!Ut&&ge&&!ge.moving)for(const t of Tt){if((t.lvl||0)!==bn||!xl[t.id]||!xl[t.id]())continue;const i=Math.hypot(t.stand.x-ge.root.position.x,t.stand.z-ge.root.position.z);i<e&&(e=i,s=t)}if(s!==sc&&(sc=s,Ha.classList.toggle("hidden",!s)),s){const t=xl[s.id]();Ha.textContent!==t&&(Ha.textContent=t)}}Ha.addEventListener("click",s=>{if(s.stopPropagation(),sc&&!Ut){const e=sc;ge.faceTo=e.face,e.act()}});function _S(s){let e=s;for(;e;){if(!e.visible)return!1;e=e.parent}return!0}function xS(s,e){if(Ut)return;if(s==="other"&&(s=wn==="keira"?"girl:mila":"girl:keira"),(s==="owlHome"||s==="window"&&Le("owl")&&e===nn.group)&&(s="owl"),s==="portal"){rc(Tt.find(o=>o.id==="portal"));return}if(s==="girl:"+wn)return;if(s.startsWith("girl:")){mo(s);return}const t=Tt.find(o=>o.id===s);if(!Rp[s]){t&&rc(t);return}let n,i;if(t&&t.stand.lengthSq()>0)n=t.stand,i=t.face;else{const o=new di().setFromObject(e).getCenter(new A),a=ge.root.position.clone().sub(o);a.y=0,a.lengthSq()<1e-4&&a.set(0,0,1),n=fp(o.clone().add(a.normalize().multiplyScalar(.95))),i=Math.atan2(o.x-n.x,o.z-n.z)}if(Math.hypot(n.x-ge.root.position.x,n.z-ge.root.position.z)<.35){ge.faceTo=i,mo(s);return}Za(n,()=>{ge.faceTo=i,mo(s)},i)}function rc(s){if(!Ut){if(s.id==="other"){Ar();return}if(s.id==="owlHome"){Za(s.stand,()=>s.act(),Math.PI);return}s.id==="records"&&!Cn("records")||Za(s.stand,()=>{ge.faceTo=s.face,setTimeout(()=>s.act(),160)},s.face)}}function Ar(){if(Ut||!wt)return;ui?.release(8);const s=ge.root.position.clone(),e=wt.root.position.clone();[ge,wt]=[wt,ge],wn=wn==="keira"?"mila":"keira",Ve.hero=wn,Wt(),ge.root.position.copy(e),wt.root.position.copy(s),wt.goTo([]),wt.faceTo=.2,ge.once("wave"),$e.who.textContent=wn==="keira"?"Keira":"Mila",$e.who.dataset.hero=wn,zt(0)}const Vn=new A(-1,.9,0);function Fp(){const s=innerWidth,e=innerHeight;jn.setSize(s,e,!1),jt.aspect=s/e,jt.updateProjectionMatrix()}addEventListener("resize",Fp);Fp();const sf=new A,cu=new A(0,1,0);let wh=12;function Op(){const s=(bn?xn:0)+.9;Vn.set(Sn.clamp(Vn.x,bn?-4.4:-4.6,bn?.8:4.6),s,Sn.clamp(Vn.z,-2.6,2.8))}function bh(){sf.set(.5,.78,1).normalize().multiplyScalar(wh*ps).applyAxisAngle(cu,Tc),jt.position.copy(Vn).add(sf),jt.lookAt(Vn),jt.updateMatrixWorld()}function vS(s){const e=jt.aspect<1;let t=e?9.4+(1-jt.aspect)*3:10;if(!ni){if(ho)Vn.lerp(ho.at,Math.min(1,s*2.5)),t=ho.dist*(e?1+(1-jt.aspect)*.6:1)/ps;else if(!No){const n=Sn.clamp((ps-.3)/.7,0,1),i=new A(ge.root.position.x,0,Sn.lerp(ge.root.position.z,Sn.clamp(ge.root.position.z*.6,-1,1.6),n));n>.5&&(i.x=bn?Sn.clamp(i.x,-3.6,0):Sn.clamp(i.x,-4.3,3.8)),Vn.x+=(i.x-Vn.x)*Math.min(1,s*3),Vn.z+=(i.z-Vn.z)*Math.min(1,s*3)}Op(),wh+=(t-wh)*Math.min(1,s*2.2)}bh(),no>0&&(no-=s,jt.position.x+=Math.sin(no*70)*.03*no)}const Bp=new cM;let ei=0;function kp(){window.__paused?Bp.getDelta():zp(),requestAnimationFrame(kp)}function zp(s){const e=s??Math.min(.05,Bp.getDelta());if(ei+=e,mS(e),gS(),ge.update(e),wt.update(e),bt?.update(e),ui?.update(e),Sa+=(Yn-Sa)*Math.min(1,e*4),Wn.door.rotation.y=1.6*Sa,Wn.light.intensity=Sa*4,fo+=(fr-fo)*Math.min(1,e*2.5),Wn.ladder.position.y=2.6*(1-fo),Fa=Math.max(0,Fa-e*3),Wn.cord.position.y=3-Math.sin(Fa*Math.PI)*.15,po+=(yh-po)*Math.min(1,e*4),at.lid.rotation.x=-1.7*po,ti>0&&ti<1&&(ti=Math.min(1,ti+e*.9),at.sheet.position.y=1-ti*ti*1.2,at.sheet.position.z=ti*.5,at.sheet.scale.y=1-ti*.6,at.sheet.rotation.x=ti*.9,ti>=1&&(at.sheet.visible=!1)),at.glass.update(e,ei,0),at.group.visible){const n=at.motes.geometry.attributes.position;for(let i=0;i<n.count;i++)n.setY(i,(n.getY(i)+e*.03*(1+i%3))%2.4),n.setX(i,n.getX(i)+Math.sin(ei*.3+i)*8e-4);n.needsUpdate=!0}if(cr+=(Pn-cr)*Math.min(1,e*5),ci.cushionPivot.rotation.x=-1.35*yS(cr),ci.cushionPivot.position.y=.43+.12*Math.sin(cr*Math.PI*.5)+(Pn?Math.sin(ei*6)*.006:0),Ki.update(e,ei,$a),ws+=(vp-ws)*Math.min(1,e*1.5),mc.intensity=_o.hemi*(1-ws*.6),pi.intensity=_o.key*(1-ws*.65),cn.lamp.intensity=_o.lamp*(1-ws*.7)*(ws>.05?.85+Math.random()*.15*ws:1),Na+=(xc-Na)*Math.min(1,e*1.6),br.slider.position.x=1.65*Na,Ma+=(Sc-Ma)*Math.min(1,e*5),Lo.door.rotation.y=1.9*Ma,Lo.light.intensity=Ma*3,Ua+=(uo-Ua)*Math.min(1,e*5),cn.cabinetDoor.rotation.y=1.7*Ua,_i>0&&_i<1&&(_i=Math.min(1,_i+e*1.3),Mi.position.y=.05+Math.sin(_i*Math.PI)*.9,Mi.position.x=-3.7-_i*.9,Mi.rotation.z=_i*1.4,Mi.scale.setScalar(1-_i*.5),_i>=1&&(Mi.visible=!1)),_l.style.opacity="0",!Le("george")||bt&&bt.clip==="nap"){const n=new A(-3.6,.7,.75).project(jt);_l.style.transform=`translate(${(n.x*.5+.5)*innerWidth}px, ${(-n.y*.5+.5)*innerHeight}px)`,_l.style.opacity=n.z<1?"1":"0"}if(nn.wings.forEach((n,i)=>{n.rotation.z=(i?-1:1)*(xi>=0&&xi<1?Math.sin(ei*30)*.9:.05*Math.sin(ei*2))}),nn.head.rotation.y=Math.sin(ei*.7)*.6,xi>=0&&xi<1){xi=Math.min(1,xi+e*.45);const n=Qa.clone();zo.visible=!0;const i=Mp.clone().lerp(n,MS(xi));i.y+=Math.sin(xi*Math.PI)*.8,nn.group.position.copy(i),nn.group.lookAt(n.x,i.y,n.z),xi>=1&&(nn.group.position.copy(Qa),nn.group.rotation.set(0,.2,0),nn.group.scale.setScalar(1.1),zt(1))}Oa=Math.max(0,Oa-e);for(const n of Fr.fish){const i=n.userData,r=ei*i.s+i.p;n.position.set(Math.cos(r)*i.r*1.6,(Oa>0?.42:i.y)+Math.sin(r*2)*.03,Math.sin(r)*.1),n.rotation.y=Math.atan2(Math.cos(r)*.1,-Math.sin(r)*i.r*1.6)+Math.PI}if(Rs&&(Vo.disc.rotation.y-=e*3.5),Ba=Math.max(0,Ba-e),Do.visible=Ba>0,Do.scale.y=.9+Math.random()*.2,ka>0?(ka-=e,at.chair.rotation.x=Math.sin(ei*3)*.12*Math.min(1,ka)):at.chair.rotation.x=0,Bi.lengthSq()>4e-4){const n=Ap();n?(n.position.addScaledVector(Bi,e),(n.position.x<ze.x0+.15||n.position.x>ze.x1-.15)&&(Bi.x*=-.6,lo(),n.position.x=Sn.clamp(n.position.x,ze.x0+.15,ze.x1-.15)),(n.position.z<ze.z0+.15||n.position.z>ze.z1-.15)&&(Bi.z*=-.6,lo(),n.position.z=Sn.clamp(n.position.z,ze.z0+.15,ze.z1-.15)),n.rotation.x+=Bi.z*e/.11,n.rotation.z-=Bi.x*e/.11,Bi.multiplyScalar(Math.pow(.35,e))):Bi.set(0,0,0)}for(const n of Sh)n.t=Math.min(1,n.t+e*2.2),n.o.scale.setScalar(SS(n.t));for(const n of pp)n.h.points.visible=n.show(),n.h.points.visible&&n.h.update(ei);if(!wt.moving&&!ui?.active){const n=ge.root.position.clone().sub(wt.root.position);wt.faceTo=Math.atan2(n.x,n.z)}window.__freeze||vS(e);const t=window.__side;if(t){const n=(window.__sideOther?wt:ge).root.position;jt.position.set(n.x+t[0],.75+n.y,n.z+t[1]),jt.lookAt(n.x,.65+n.y,n.z)}rf?rf.render(ft,jt):jn.render(ft,jt)}const yS=s=>1-(1-s)**3,MS=s=>s<.5?2*s*s:1-(-2*s+2)**2/2,SS=s=>1+(1.7+1)*(s-1)**3+1.7*(s-1)**2;_h[jd]&&_h[jd].apply({scene:ft,H:cn,hemi:mc,key:pi,moon:nu,renderer:jn,fridgeDoor:Lo.door});const rf=window.__outline?new B1(jn,{defaultThickness:.0035,defaultColor:[.12,.08,.1]}):null,_o={hemi:mc.intensity,key:pi.intensity,lamp:cn.lamp.intensity},wS=_o.lamp;(async()=>{const[s,e]=await Promise.all([Co.load(xh("keira")),Co.load(xh("mila"))]);if(As.keira=s,As.mila=e,e.bones.Mila_shades||b1(e),e.speed=1,e.cartwheels=!0,s.addBook(5974635),e.addBook(3107678),ui=new R1({me:()=>ge,other:()=>wt,who:()=>wn==="keira"?"mila":"keira",george:()=>bt,free:()=>!Ut&&bn===0&&wt.root.position.y<1.5,bark:lp}),ge=As[wn],wt=As[wn==="keira"?"mila":"keira"],ge.root.position.copy(j1),wt.root.position.copy(K1),ge.root.rotation.y=.3,wt.root.rotation.y=-.3,ft.add(s.root,e.root),$e.who.textContent=wn==="keira"?"Keira":"Mila",$e.who.dataset.hero=wn,Le("george")&&await yp(),Tr){cr=Pn=1,Ki.open=!0,ge.root.position.set(li.x,0,-1.55),ge.root.rotation.y=.2,wt.root.position.set(li.x+.9,0,-1.3),wt.root.rotation.y=-.3,ge.once("land"),wt.once("land"),setTimeout(()=>{gp(),zt(0)},1600);const t=Math.max(0,hp);setTimeout(()=>{t>0?(Ur(pn-t),pc(),ht(`Back home with <b>${t} pennies</b>!`+(Le("owl")?"":" <i>Hmm... something followed you. Check the window.</i>"),5200)):Le("owl")||ht("Back home. <i>Something followed you... check the window.</i>",5e3)},500)}Io.has("open")&&(cr=Pn=1,Ki.open=!0),lt("loading").classList.add("hidden"),!Tr&&Ve.visits<=1&&($e.intro.classList.remove("hidden"),lt("introGo").onclick=()=>{$e.intro.classList.add("hidden"),zt(0),ht("<b>Drag anywhere</b> to walk. Walk up to things, or tap them, to check them out. Sparkles mean something is hiding.",5200)});for(const t of Tt)for(const n of t.objs)n.userData.spot||(n.userData.spot=t.id);s.root.userData.item="girl:keira",e.root.userData.item="girl:mila",nn.group.userData.spot="owlHome",Fr.group.userData.item="aquarium",wc.userData.item="plant",bc.userData.item="lights",kp()})();window.__h={walkLine:(s,e,t,n)=>{ge.root.position.set(s,0,e),ge.speed=n,ge.goTo([new A(t,0,e)])},view:(s,e)=>{ps=s,Tc=e},climbUp:iu,climbDown:Tp,get level(){return bn},get busy(){return Ut},showAll:()=>{for(const s of su)s.obj&&(s.obj.visible=!0)},spot:s=>rc(Tt.find(e=>e.id===s)),swap:Ar,shop:ru,get me(){return ge},card:s=>mo(s),tick:(s,e)=>{for(let t=0;t<s;t++)zp(e)},screenOf:s=>{let e=null;if(ft.traverse(n=>{!e&&(n.userData.item===s||n.userData.spot===s)&&(e=n)}),!e)return null;const t=new di().setFromObject(e).getCenter(new A).project(jt);return[(t.x+1)/2*innerWidth,(1-t.y)/2*innerHeight]},get other(){return wt},get buddy(){return ui},setStick:(s,e=0)=>{Vt=s===null?null:{jx:s,jy:e}},camera:jt};window.__walk=s=>{ge.path=s?[new A(99,0,0)]:[],ge.speed=s?1e-4:1.7};

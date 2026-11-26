(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Gh="170",_m=0,ku=1,xm=2,Rf=1,Cf=2,Hi=3,$i=0,bn=1,hn=2,gs=0,pr=1,Co=2,Bu=3,zu=4,vm=5,Ps=100,ym=101,Mm=102,Sm=103,wm=104,bm=200,Tm=201,Em=202,Am=203,Dl=204,Nl=205,Rm=206,Cm=207,Pm=208,Im=209,Lm=210,Dm=211,Nm=212,Um=213,Om=214,Ul=0,Ol=1,Fl=2,Mr=3,kl=4,Bl=5,zl=6,Hl=7,Pf=0,Fm=1,km=2,_s=0,Bm=1,zm=2,Hm=3,If=4,Vm=5,Gm=6,Wm=7,Hu="attached",Xm="detached",Lf=300,Sr=301,wr=302,Vl=303,Gl=304,gc=306,Us=1e3,Ti=1001,ec=1002,Tn=1003,Df=1004,co=1005,kn=1006,Fa=1007,Xi=1008,Zi=1009,Nf=1010,Uf=1011,Po=1012,Wh=1013,Os=1014,li=1015,Yo=1016,Xh=1017,qh=1018,br=1020,Of=35902,Ff=1021,kf=1022,qn=1023,Bf=1024,zf=1025,mr=1026,Tr=1027,Yh=1028,jh=1029,Hf=1030,Kh=1031,$h=1033,ka=33776,Ba=33777,za=33778,Ha=33779,Wl=35840,Xl=35841,ql=35842,Yl=35843,jl=36196,Kl=37492,$l=37496,Zl=37808,Jl=37809,Ql=37810,eh=37811,th=37812,nh=37813,ih=37814,sh=37815,rh=37816,oh=37817,ah=37818,ch=37819,lh=37820,hh=37821,Va=36492,uh=36494,dh=36495,Vf=36283,fh=36284,ph=36285,mh=36286,Gf=2200,qm=2201,Ym=2202,Io=2300,Lo=2301,Bc=2302,lr=2400,hr=2401,tc=2402,Zh=2500,jm=2501,Km=0,Wf=1,gh=2,$m=3200,Zm=3201,Jh=0,Jm=1,ps="",zt="srgb",In="srgb-linear",_c="linear",Et="srgb",Ws=7680,Vu=519,Qm=512,e0=513,t0=514,Xf=515,n0=516,i0=517,s0=518,r0=519,_h=35044,Gu="300 es",qi=2e3,nc=2001;class Hs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const yn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Wu=1234567;const mo=Math.PI/180,Er=180/Math.PI;function jn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(yn[s&255]+yn[s>>8&255]+yn[s>>16&255]+yn[s>>24&255]+"-"+yn[e&255]+yn[e>>8&255]+"-"+yn[e>>16&15|64]+yn[e>>24&255]+"-"+yn[t&63|128]+yn[t>>8&255]+"-"+yn[t>>16&255]+yn[t>>24&255]+yn[n&255]+yn[n>>8&255]+yn[n>>16&255]+yn[n>>24&255]).toLowerCase()}function ln(s,e,t){return Math.max(e,Math.min(t,s))}function Qh(s,e){return(s%e+e)%e}function o0(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function a0(s,e,t){return s!==e?(t-s)/(e-s):0}function go(s,e,t){return(1-t)*s+t*e}function c0(s,e,t,n){return go(s,e,1-Math.exp(-t*n))}function l0(s,e=1){return e-Math.abs(Qh(s,e*2)-e)}function h0(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function u0(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function d0(s,e){return s+Math.floor(Math.random()*(e-s+1))}function f0(s,e){return s+Math.random()*(e-s)}function p0(s){return s*(.5-Math.random())}function m0(s){s!==void 0&&(Wu=s);let e=Wu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function g0(s){return s*mo}function _0(s){return s*Er}function x0(s){return(s&s-1)===0&&s!==0}function v0(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function y0(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function M0(s,e,t,n,i){const r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":s.set(a*h,c*u,c*d,a*l);break;case"YZY":s.set(c*d,a*h,c*u,a*l);break;case"ZXZ":s.set(c*u,c*d,a*h,a*l);break;case"XZX":s.set(a*h,c*g,c*f,a*l);break;case"YXY":s.set(c*f,a*h,c*g,a*l);break;case"ZYZ":s.set(c*g,c*f,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function ai(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function wt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Cn={DEG2RAD:mo,RAD2DEG:Er,generateUUID:jn,clamp:ln,euclideanModulo:Qh,mapLinear:o0,inverseLerp:a0,lerp:go,damp:c0,pingpong:l0,smoothstep:h0,smootherstep:u0,randInt:d0,randFloat:f0,randFloatSpread:p0,seededRandom:m0,degToRad:g0,radToDeg:_0,isPowerOfTwo:x0,ceilPowerOfTwo:v0,floorPowerOfTwo:y0,setQuaternionFromProperEuler:M0,normalize:wt,denormalize:ai};class re{constructor(e=0,t=0){re.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ln(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ze{constructor(e,t,n,i,r,o,a,c,l){Ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l)}set(e,t,n,i,r,o,a,c,l){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],_=i[0],m=i[3],p=i[6],w=i[1],v=i[4],x=i[7],L=i[2],R=i[5],C=i[8];return r[0]=o*_+a*w+c*L,r[3]=o*m+a*v+c*R,r[6]=o*p+a*x+c*C,r[1]=l*_+h*w+u*L,r[4]=l*m+h*v+u*R,r[7]=l*p+h*x+u*C,r[2]=d*_+f*w+g*L,r[5]=d*m+f*v+g*R,r[8]=d*p+f*x+g*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+i*r*l-i*o*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,d=a*c-h*r,f=l*r-o*c,g=t*u+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=u*_,e[1]=(i*l-h*n)*_,e[2]=(a*n-i*o)*_,e[3]=d*_,e[4]=(h*t-i*c)*_,e[5]=(i*r-a*t)*_,e[6]=f*_,e[7]=(n*c-l*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(zc.makeScale(e,t)),this}rotate(e){return this.premultiply(zc.makeRotation(-e)),this}translate(e,t){return this.premultiply(zc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const zc=new Ze;function qf(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Do(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function S0(){const s=Do("canvas");return s.style.display="block",s}const Xu={};function lo(s){s in Xu||(Xu[s]=!0,console.warn(s))}function w0(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function b0(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function T0(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const lt={enabled:!0,workingColorSpace:In,spaces:{},convert:function(s,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Et&&(s.r=Yi(s.r),s.g=Yi(s.g),s.b=Yi(s.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(s.applyMatrix3(this.spaces[e].toXYZ),s.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Et&&(s.r=gr(s.r),s.g=gr(s.g),s.b=gr(s.b))),s},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ps?_c:this.spaces[s].transfer},getLuminanceCoefficients:function(s,e=this.workingColorSpace){return s.fromArray(this.spaces[e].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,e,t){return s.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function Yi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function gr(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const qu=[.64,.33,.3,.6,.15,.06],Yu=[.2126,.7152,.0722],ju=[.3127,.329],Ku=new Ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),$u=new Ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);lt.define({[In]:{primaries:qu,whitePoint:ju,transfer:_c,toXYZ:Ku,fromXYZ:$u,luminanceCoefficients:Yu,workingColorSpaceConfig:{unpackColorSpace:zt},outputColorSpaceConfig:{drawingBufferColorSpace:zt}},[zt]:{primaries:qu,whitePoint:ju,transfer:Et,toXYZ:Ku,fromXYZ:$u,luminanceCoefficients:Yu,outputColorSpaceConfig:{drawingBufferColorSpace:zt}}});let Xs;class E0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Xs===void 0&&(Xs=Do("canvas")),Xs.width=e.width,Xs.height=e.height;const n=Xs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Xs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Do("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Yi(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Yi(t[n]/255)*255):t[n]=Yi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let A0=0;class Yf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:A0++}),this.uuid=jn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Hc(i[o].image)):r.push(Hc(i[o]))}else r=Hc(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Hc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?E0.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let R0=0;class tn extends Hs{constructor(e=tn.DEFAULT_IMAGE,t=tn.DEFAULT_MAPPING,n=Ti,i=Ti,r=kn,o=Xi,a=qn,c=Zi,l=tn.DEFAULT_ANISOTROPY,h=ps){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:R0++}),this.uuid=jn(),this.name="",this.source=new Yf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new re(0,0),this.repeat=new re(1,1),this.center=new re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Lf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Us:e.x=e.x-Math.floor(e.x);break;case Ti:e.x=e.x<0?0:1;break;case ec:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Us:e.y=e.y-Math.floor(e.y);break;case Ti:e.y=e.y<0?0:1;break;case ec:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}tn.DEFAULT_IMAGE=null;tn.DEFAULT_MAPPING=Lf;tn.DEFAULT_ANISOTROPY=1;class pt{constructor(e=0,t=0,n=0,i=1){pt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(l+1)/2,x=(f+1)/2,L=(p+1)/2,R=(h+d)/4,C=(u+_)/4,b=(g+m)/4;return v>x&&v>L?v<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(v),i=R/n,r=C/n):x>L?x<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(x),n=R/i,r=b/i):L<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(L),n=C/r,i=b/r),this.set(n,i,r,t),this}let w=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(w)<.001&&(w=1),this.x=(m-g)/w,this.y=(u-_)/w,this.z=(d-h)/w,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class C0 extends Hs{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new pt(0,0,e,t),this.scissorTest=!1,this.viewport=new pt(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:kn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new tn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Yf(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Fs extends C0{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class jf extends tn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=Ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class P0 extends tn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=Ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class hi{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3];const d=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(u!==_||c!==d||l!==f||h!==g){let m=1-a;const p=c*d+l*f+h*g+u*_,w=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){const L=Math.sqrt(v),R=Math.atan2(L,p*w);m=Math.sin(m*R)/L,a=Math.sin(a*R)/L}const x=a*w;if(c=c*m+d*x,l=l*m+f*x,h=h*m+g*x,u=u*m+_*x,m===1-a){const L=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=L,l*=L,h*=L,u*=L}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+h*u+c*f-l*d,e[t+1]=c*g+h*d+l*u-a*f,e[t+2]=l*g+h*f+a*d-c*u,e[t+3]=h*g-a*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),u=a(r/2),d=c(n/2),f=c(i/2),g=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-i)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+l)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(r-l)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ln(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+i*l-r*c,this._y=i*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class A{constructor(e=0,t=0,n=0){A.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Zu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Zu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*i-a*n),h=2*(a*t-r*i),u=2*(r*n-o*t);return this.x=t+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=i+c*u+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Vc.copy(this).projectOnVector(e),this.sub(Vc)}reflect(e){return this.sub(Vc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ln(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Vc=new A,Zu=new hi;class mi{constructor(e=new A(1/0,1/0,1/0),t=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ti.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ti.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=ti.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ti):ti.fromBufferAttribute(r,o),ti.applyMatrix4(e.matrixWorld),this.expandByPoint(ti);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ia.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ia.copy(n.boundingBox)),ia.applyMatrix4(e.matrixWorld),this.union(ia)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ti),ti.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(jr),sa.subVectors(this.max,jr),qs.subVectors(e.a,jr),Ys.subVectors(e.b,jr),js.subVectors(e.c,jr),is.subVectors(Ys,qs),ss.subVectors(js,Ys),ys.subVectors(qs,js);let t=[0,-is.z,is.y,0,-ss.z,ss.y,0,-ys.z,ys.y,is.z,0,-is.x,ss.z,0,-ss.x,ys.z,0,-ys.x,-is.y,is.x,0,-ss.y,ss.x,0,-ys.y,ys.x,0];return!Gc(t,qs,Ys,js,sa)||(t=[1,0,0,0,1,0,0,0,1],!Gc(t,qs,Ys,js,sa))?!1:(ra.crossVectors(is,ss),t=[ra.x,ra.y,ra.z],Gc(t,qs,Ys,js,sa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ti).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ti).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ui),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ui=[new A,new A,new A,new A,new A,new A,new A,new A],ti=new A,ia=new mi,qs=new A,Ys=new A,js=new A,is=new A,ss=new A,ys=new A,jr=new A,sa=new A,ra=new A,Ms=new A;function Gc(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Ms.fromArray(s,r);const a=i.x*Math.abs(Ms.x)+i.y*Math.abs(Ms.y)+i.z*Math.abs(Ms.z),c=e.dot(Ms),l=t.dot(Ms),h=n.dot(Ms);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const I0=new mi,Kr=new A,Wc=new A;class Ci{constructor(e=new A,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):I0.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Kr.subVectors(e,this.center);const t=Kr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Kr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Wc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Kr.copy(e.center).add(Wc)),this.expandByPoint(Kr.copy(e.center).sub(Wc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Oi=new A,Xc=new A,oa=new A,rs=new A,qc=new A,aa=new A,Yc=new A;class jo{constructor(e=new A,t=new A(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Oi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Oi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Oi.copy(this.origin).addScaledVector(this.direction,t),Oi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Xc.copy(e).add(t).multiplyScalar(.5),oa.copy(t).sub(e).normalize(),rs.copy(this.origin).sub(Xc);const r=e.distanceTo(t)*.5,o=-this.direction.dot(oa),a=rs.dot(this.direction),c=-rs.dot(oa),l=rs.lengthSq(),h=Math.abs(1-o*o);let u,d,f,g;if(h>0)if(u=o*c-a,d=o*a-c,g=r*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Xc).addScaledVector(oa,d),f}intersectSphere(e,t){Oi.subVectors(e.center,this.origin);const n=Oi.dot(this.direction),i=Oi.dot(Oi)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Oi)!==null}intersectTriangle(e,t,n,i,r){qc.subVectors(t,e),aa.subVectors(n,e),Yc.crossVectors(qc,aa);let o=this.direction.dot(Yc),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;rs.subVectors(this.origin,e);const c=a*this.direction.dot(aa.crossVectors(rs,aa));if(c<0)return null;const l=a*this.direction.dot(qc.cross(rs));if(l<0||c+l>o)return null;const h=-a*rs.dot(Yc);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class je{constructor(e,t,n,i,r,o,a,c,l,h,u,d,f,g,_,m){je.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l,h,u,d,f,g,_,m)}set(e,t,n,i,r,o,a,c,l,h,u,d,f,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new je().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Ks.setFromMatrixColumn(e,0).length(),r=1/Ks.setFromMatrixColumn(e,1).length(),o=1/Ks.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=o*h,f=o*u,g=a*h,_=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+g*l,t[5]=d-_*l,t[9]=-a*c,t[2]=_-d*l,t[6]=g+f*l,t[10]=o*c}else if(e.order==="YXZ"){const d=c*h,f=c*u,g=l*h,_=l*u;t[0]=d+_*a,t[4]=g*a-f,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-g,t[6]=_+d*a,t[10]=o*c}else if(e.order==="ZXY"){const d=c*h,f=c*u,g=l*h,_=l*u;t[0]=d-_*a,t[4]=-o*u,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*h,t[9]=_-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const d=o*h,f=o*u,g=a*h,_=a*u;t[0]=c*h,t[4]=g*l-f,t[8]=d*l+_,t[1]=c*u,t[5]=_*l+d,t[9]=f*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const d=o*c,f=o*l,g=a*c,_=a*l;t[0]=c*h,t[4]=_-d*u,t[8]=g*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=f*u+g,t[10]=d-_*u}else if(e.order==="XZY"){const d=o*c,f=o*l,g=a*c,_=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+_,t[5]=o*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=a*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(L0,e,D0)}lookAt(e,t,n){const i=this.elements;return On.subVectors(e,t),On.lengthSq()===0&&(On.z=1),On.normalize(),os.crossVectors(n,On),os.lengthSq()===0&&(Math.abs(n.z)===1?On.x+=1e-4:On.z+=1e-4,On.normalize(),os.crossVectors(n,On)),os.normalize(),ca.crossVectors(On,os),i[0]=os.x,i[4]=ca.x,i[8]=On.x,i[1]=os.y,i[5]=ca.y,i[9]=On.y,i[2]=os.z,i[6]=ca.z,i[10]=On.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],w=n[3],v=n[7],x=n[11],L=n[15],R=i[0],C=i[4],b=i[8],y=i[12],M=i[1],P=i[5],k=i[9],F=i[13],B=i[2],W=i[6],z=i[10],K=i[14],H=i[3],ce=i[7],pe=i[11],me=i[15];return r[0]=o*R+a*M+c*B+l*H,r[4]=o*C+a*P+c*W+l*ce,r[8]=o*b+a*k+c*z+l*pe,r[12]=o*y+a*F+c*K+l*me,r[1]=h*R+u*M+d*B+f*H,r[5]=h*C+u*P+d*W+f*ce,r[9]=h*b+u*k+d*z+f*pe,r[13]=h*y+u*F+d*K+f*me,r[2]=g*R+_*M+m*B+p*H,r[6]=g*C+_*P+m*W+p*ce,r[10]=g*b+_*k+m*z+p*pe,r[14]=g*y+_*F+m*K+p*me,r[3]=w*R+v*M+x*B+L*H,r[7]=w*C+v*P+x*W+L*ce,r[11]=w*b+v*k+x*z+L*pe,r[15]=w*y+v*F+x*K+L*me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+r*c*u-i*l*u-r*a*d+n*l*d+i*a*f-n*c*f)+_*(+t*c*f-t*l*d+r*o*d-i*o*f+i*l*h-r*c*h)+m*(+t*l*u-t*a*f-r*o*u+n*o*f+r*a*h-n*l*h)+p*(-i*a*h-t*c*u+t*a*d+i*o*u-n*o*d+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],w=u*m*l-_*d*l+_*c*f-a*m*f-u*c*p+a*d*p,v=g*d*l-h*m*l-g*c*f+o*m*f+h*c*p-o*d*p,x=h*_*l-g*u*l+g*a*f-o*_*f-h*a*p+o*u*p,L=g*u*c-h*_*c-g*a*d+o*_*d+h*a*m-o*u*m,R=t*w+n*v+i*x+r*L;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/R;return e[0]=w*C,e[1]=(_*d*r-u*m*r-_*i*f+n*m*f+u*i*p-n*d*p)*C,e[2]=(a*m*r-_*c*r+_*i*l-n*m*l-a*i*p+n*c*p)*C,e[3]=(u*c*r-a*d*r-u*i*l+n*d*l+a*i*f-n*c*f)*C,e[4]=v*C,e[5]=(h*m*r-g*d*r+g*i*f-t*m*f-h*i*p+t*d*p)*C,e[6]=(g*c*r-o*m*r-g*i*l+t*m*l+o*i*p-t*c*p)*C,e[7]=(o*d*r-h*c*r+h*i*l-t*d*l-o*i*f+t*c*f)*C,e[8]=x*C,e[9]=(g*u*r-h*_*r-g*n*f+t*_*f+h*n*p-t*u*p)*C,e[10]=(o*_*r-g*a*r+g*n*l-t*_*l-o*n*p+t*a*p)*C,e[11]=(h*a*r-o*u*r-h*n*l+t*u*l+o*n*f-t*a*f)*C,e[12]=L*C,e[13]=(h*_*i-g*u*i+g*n*d-t*_*d-h*n*m+t*u*m)*C,e[14]=(g*a*i-o*_*i-g*n*c+t*_*c+o*n*m-t*a*m)*C,e[15]=(o*u*i-h*a*i+h*n*c-t*u*c-o*n*d+t*a*d)*C,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,d=r*l,f=r*h,g=r*u,_=o*h,m=o*u,p=a*u,w=c*l,v=c*h,x=c*u,L=n.x,R=n.y,C=n.z;return i[0]=(1-(_+p))*L,i[1]=(f+x)*L,i[2]=(g-v)*L,i[3]=0,i[4]=(f-x)*R,i[5]=(1-(d+p))*R,i[6]=(m+w)*R,i[7]=0,i[8]=(g+v)*C,i[9]=(m-w)*C,i[10]=(1-(d+_))*C,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Ks.set(i[0],i[1],i[2]).length();const o=Ks.set(i[4],i[5],i[6]).length(),a=Ks.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],ni.copy(this);const l=1/r,h=1/o,u=1/a;return ni.elements[0]*=l,ni.elements[1]*=l,ni.elements[2]*=l,ni.elements[4]*=h,ni.elements[5]*=h,ni.elements[6]*=h,ni.elements[8]*=u,ni.elements[9]*=u,ni.elements[10]*=u,t.setFromRotationMatrix(ni),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=qi){const c=this.elements,l=2*r/(t-e),h=2*r/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i);let f,g;if(a===qi)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===nc)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=qi){const c=this.elements,l=1/(t-e),h=1/(n-i),u=1/(o-r),d=(t+e)*l,f=(n+i)*h;let g,_;if(a===qi)g=(o+r)*u,_=-2*u;else if(a===nc)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ks=new A,ni=new je,L0=new A(0,0,0),D0=new A(1,1,1),os=new A,ca=new A,On=new A,Ju=new je,Qu=new hi;class Ai{constructor(e=0,t=0,n=0,i=Ai.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(ln(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ln(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ln(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ln(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(ln(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-ln(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ju.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ju,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Qu.setFromEuler(this),this.setFromQuaternion(Qu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ai.DEFAULT_ORDER="XYZ";class eu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let N0=0;const ed=new A,$s=new hi,Fi=new je,la=new A,$r=new A,U0=new A,O0=new hi,td=new A(1,0,0),nd=new A(0,1,0),id=new A(0,0,1),sd={type:"added"},F0={type:"removed"},Zs={type:"childadded",child:null},jc={type:"childremoved",child:null};class Bt extends Hs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:N0++}),this.uuid=jn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Bt.DEFAULT_UP.clone();const e=new A,t=new Ai,n=new hi,i=new A(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new je},normalMatrix:{value:new Ze}}),this.matrix=new je,this.matrixWorld=new je,this.matrixAutoUpdate=Bt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new eu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return $s.setFromAxisAngle(e,t),this.quaternion.multiply($s),this}rotateOnWorldAxis(e,t){return $s.setFromAxisAngle(e,t),this.quaternion.premultiply($s),this}rotateX(e){return this.rotateOnAxis(td,e)}rotateY(e){return this.rotateOnAxis(nd,e)}rotateZ(e){return this.rotateOnAxis(id,e)}translateOnAxis(e,t){return ed.copy(e).applyQuaternion(this.quaternion),this.position.add(ed.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(td,e)}translateY(e){return this.translateOnAxis(nd,e)}translateZ(e){return this.translateOnAxis(id,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Fi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?la.copy(e):la.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),$r.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fi.lookAt($r,la,this.up):Fi.lookAt(la,$r,this.up),this.quaternion.setFromRotationMatrix(Fi),i&&(Fi.extractRotation(i.matrixWorld),$s.setFromRotationMatrix(Fi),this.quaternion.premultiply($s.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(sd),Zs.child=e,this.dispatchEvent(Zs),Zs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(F0),jc.child=e,this.dispatchEvent(jc),jc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Fi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Fi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Fi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(sd),Zs.child=e,this.dispatchEvent(Zs),Zs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($r,e,U0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($r,O0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Bt.DEFAULT_UP=new A(0,1,0);Bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ii=new A,ki=new A,Kc=new A,Bi=new A,Js=new A,Qs=new A,rd=new A,$c=new A,Zc=new A,Jc=new A,Qc=new pt,el=new pt,tl=new pt;class ci{constructor(e=new A,t=new A,n=new A){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),ii.subVectors(e,t),i.cross(ii);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){ii.subVectors(i,t),ki.subVectors(n,t),Kc.subVectors(e,t);const o=ii.dot(ii),a=ii.dot(ki),c=ii.dot(Kc),l=ki.dot(ki),h=ki.dot(Kc),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(l*c-a*h)*d,g=(o*h-a*c)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Bi)===null?!1:Bi.x>=0&&Bi.y>=0&&Bi.x+Bi.y<=1}static getInterpolation(e,t,n,i,r,o,a,c){return this.getBarycoord(e,t,n,i,Bi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Bi.x),c.addScaledVector(o,Bi.y),c.addScaledVector(a,Bi.z),c)}static getInterpolatedAttribute(e,t,n,i,r,o){return Qc.setScalar(0),el.setScalar(0),tl.setScalar(0),Qc.fromBufferAttribute(e,t),el.fromBufferAttribute(e,n),tl.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(Qc,r.x),o.addScaledVector(el,r.y),o.addScaledVector(tl,r.z),o}static isFrontFacing(e,t,n,i){return ii.subVectors(n,t),ki.subVectors(e,t),ii.cross(ki).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ii.subVectors(this.c,this.b),ki.subVectors(this.a,this.b),ii.cross(ki).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ci.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ci.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return ci.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return ci.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ci.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;Js.subVectors(i,n),Qs.subVectors(r,n),$c.subVectors(e,n);const c=Js.dot($c),l=Qs.dot($c);if(c<=0&&l<=0)return t.copy(n);Zc.subVectors(e,i);const h=Js.dot(Zc),u=Qs.dot(Zc);if(h>=0&&u<=h)return t.copy(i);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(Js,o);Jc.subVectors(e,r);const f=Js.dot(Jc),g=Qs.dot(Jc);if(g>=0&&f<=g)return t.copy(r);const _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(Qs,a);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return rd.subVectors(r,i),a=(u-h)/(u-h+(f-g)),t.copy(i).addScaledVector(rd,a);const p=1/(m+_+d);return o=_*p,a=d*p,t.copy(n).addScaledVector(Js,o).addScaledVector(Qs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Kf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},as={h:0,s:0,l:0},ha={h:0,s:0,l:0};function nl(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class ze{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=zt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,lt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=lt.workingColorSpace){return this.r=e,this.g=t,this.b=n,lt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=lt.workingColorSpace){if(e=Qh(e,1),t=ln(t,0,1),n=ln(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=nl(o,r,e+1/3),this.g=nl(o,r,e),this.b=nl(o,r,e-1/3)}return lt.toWorkingColorSpace(this,i),this}setStyle(e,t=zt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=zt){const n=Kf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Yi(e.r),this.g=Yi(e.g),this.b=Yi(e.b),this}copyLinearToSRGB(e){return this.r=gr(e.r),this.g=gr(e.g),this.b=gr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=zt){return lt.fromWorkingColorSpace(Mn.copy(this),e),Math.round(ln(Mn.r*255,0,255))*65536+Math.round(ln(Mn.g*255,0,255))*256+Math.round(ln(Mn.b*255,0,255))}getHexString(e=zt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=lt.workingColorSpace){lt.fromWorkingColorSpace(Mn.copy(this),t);const n=Mn.r,i=Mn.g,r=Mn.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(i-r)/u+(i<r?6:0);break;case i:c=(r-n)/u+2;break;case r:c=(n-i)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=lt.workingColorSpace){return lt.fromWorkingColorSpace(Mn.copy(this),t),e.r=Mn.r,e.g=Mn.g,e.b=Mn.b,e}getStyle(e=zt){lt.fromWorkingColorSpace(Mn.copy(this),e);const t=Mn.r,n=Mn.g,i=Mn.b;return e!==zt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(as),this.setHSL(as.h+e,as.s+t,as.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(as),e.getHSL(ha);const n=go(as.h,ha.h,t),i=go(as.s,ha.s,t),r=go(as.l,ha.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Mn=new ze;ze.NAMES=Kf;let k0=0;class ui extends Hs{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:k0++}),this.uuid=jn(),this.name="",this.blending=pr,this.side=$i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Dl,this.blendDst=Nl,this.blendEquation=Ps,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ze(0,0,0),this.blendAlpha=0,this.depthFunc=Mr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ws,this.stencilZFail=Ws,this.stencilZPass=Ws,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==pr&&(n.blending=this.blending),this.side!==$i&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Dl&&(n.blendSrc=this.blendSrc),this.blendDst!==Nl&&(n.blendDst=this.blendDst),this.blendEquation!==Ps&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Mr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Vu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ws&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ws&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ws&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class en extends ui{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ai,this.combine=Pf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Kt=new A,ua=new re;class dn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=_h,this.updateRanges=[],this.gpuType=li,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ua.fromBufferAttribute(this,t),ua.applyMatrix3(e),this.setXY(t,ua.x,ua.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix3(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix4(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyNormalMatrix(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.transformDirection(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ai(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=wt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ai(t,this.array)),t}setX(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ai(t,this.array)),t}setY(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ai(t,this.array)),t}setZ(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ai(t,this.array)),t}setW(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array),i=wt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array),i=wt(i,this.array),r=wt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==_h&&(e.usage=this.usage),e}}class $f extends dn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Zf extends dn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Tt extends dn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let B0=0;const Hn=new je,il=new Bt,er=new A,Fn=new mi,Zr=new mi,rn=new A;class jt extends Hs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:B0++}),this.uuid=jn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(qf(e)?Zf:$f)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ze().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Hn.makeRotationFromQuaternion(e),this.applyMatrix4(Hn),this}rotateX(e){return Hn.makeRotationX(e),this.applyMatrix4(Hn),this}rotateY(e){return Hn.makeRotationY(e),this.applyMatrix4(Hn),this}rotateZ(e){return Hn.makeRotationZ(e),this.applyMatrix4(Hn),this}translate(e,t,n){return Hn.makeTranslation(e,t,n),this.applyMatrix4(Hn),this}scale(e,t,n){return Hn.makeScale(e,t,n),this.applyMatrix4(Hn),this}lookAt(e){return il.lookAt(e),il.updateMatrix(),this.applyMatrix4(il.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(er).negate(),this.translate(er.x,er.y,er.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Tt(n,3))}else{for(let n=0,i=t.count;n<i;n++){const r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Fn.setFromBufferAttribute(r),this.morphTargetsRelative?(rn.addVectors(this.boundingBox.min,Fn.min),this.boundingBox.expandByPoint(rn),rn.addVectors(this.boundingBox.max,Fn.max),this.boundingBox.expandByPoint(rn)):(this.boundingBox.expandByPoint(Fn.min),this.boundingBox.expandByPoint(Fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ci);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new A,1/0);return}if(e){const n=this.boundingSphere.center;if(Fn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Zr.setFromBufferAttribute(a),this.morphTargetsRelative?(rn.addVectors(Fn.min,Zr.min),Fn.expandByPoint(rn),rn.addVectors(Fn.max,Zr.max),Fn.expandByPoint(rn)):(Fn.expandByPoint(Zr.min),Fn.expandByPoint(Zr.max))}Fn.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)rn.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(rn));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)rn.fromBufferAttribute(a,l),c&&(er.fromBufferAttribute(e,l),rn.add(er)),i=Math.max(i,n.distanceToSquared(rn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new dn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let b=0;b<n.count;b++)a[b]=new A,c[b]=new A;const l=new A,h=new A,u=new A,d=new re,f=new re,g=new re,_=new A,m=new A;function p(b,y,M){l.fromBufferAttribute(n,b),h.fromBufferAttribute(n,y),u.fromBufferAttribute(n,M),d.fromBufferAttribute(r,b),f.fromBufferAttribute(r,y),g.fromBufferAttribute(r,M),h.sub(l),u.sub(l),f.sub(d),g.sub(d);const P=1/(f.x*g.y-g.x*f.y);isFinite(P)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(P),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(P),a[b].add(_),a[y].add(_),a[M].add(_),c[b].add(m),c[y].add(m),c[M].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let b=0,y=w.length;b<y;++b){const M=w[b],P=M.start,k=M.count;for(let F=P,B=P+k;F<B;F+=3)p(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const v=new A,x=new A,L=new A,R=new A;function C(b){L.fromBufferAttribute(i,b),R.copy(L);const y=a[b];v.copy(y),v.sub(L.multiplyScalar(L.dot(y))).normalize(),x.crossVectors(R,y);const P=x.dot(c[b])<0?-1:1;o.setXYZW(b,v.x,v.y,v.z,P)}for(let b=0,y=w.length;b<y;++b){const M=w[b],P=M.start,k=M.count;for(let F=P,B=P+k;F<B;F+=3)C(e.getX(F+0)),C(e.getX(F+1)),C(e.getX(F+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new dn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new A,r=new A,o=new A,a=new A,c=new A,l=new A,h=new A,u=new A;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)rn.fromBufferAttribute(e,t),rn.normalize(),e.setXYZ(t,rn.x,rn.y,rn.z)}toNonIndexed(){function e(a,c){const l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h);let f=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*h;for(let p=0;p<h;p++)d[g++]=l[f++]}return new dn(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new jt,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=e(c,n);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){const d=l[h],f=e(d,n);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(i[c]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(t))}const r=e.morphAttributes;for(const l in r){const h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const od=new je,Ss=new jo,da=new Ci,ad=new A,fa=new A,pa=new A,ma=new A,sl=new A,ga=new A,cd=new A,_a=new A;class $ extends Bt{constructor(e=new jt,t=new en){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){ga.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],u=r[c];h!==0&&(sl.fromBufferAttribute(u,e),o?ga.addScaledVector(sl,h):ga.addScaledVector(sl.sub(t),h))}t.add(ga)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),da.copy(n.boundingSphere),da.applyMatrix4(r),Ss.copy(e.ray).recast(e.near),!(da.containsPoint(Ss.origin)===!1&&(Ss.intersectSphere(da,ad)===null||Ss.origin.distanceToSquared(ad)>(e.far-e.near)**2))&&(od.copy(r).invert(),Ss.copy(e.ray).applyMatrix4(od),!(n.boundingBox!==null&&Ss.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ss)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],w=Math.max(m.start,f.start),v=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let x=w,L=v;x<L;x+=3){const R=a.getX(x),C=a.getX(x+1),b=a.getX(x+2);i=xa(this,p,e,n,l,h,u,R,C,b),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const w=a.getX(m),v=a.getX(m+1),x=a.getX(m+2);i=xa(this,o,e,n,l,h,u,w,v,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],w=Math.max(m.start,f.start),v=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let x=w,L=v;x<L;x+=3){const R=x,C=x+1,b=x+2;i=xa(this,p,e,n,l,h,u,R,C,b),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const w=m,v=m+1,x=m+2;i=xa(this,o,e,n,l,h,u,w,v,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function z0(s,e,t,n,i,r,o,a){let c;if(e.side===bn?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,e.side===$i,a),c===null)return null;_a.copy(a),_a.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(_a);return l<t.near||l>t.far?null:{distance:l,point:_a.clone(),object:s}}function xa(s,e,t,n,i,r,o,a,c,l){s.getVertexPosition(a,fa),s.getVertexPosition(c,pa),s.getVertexPosition(l,ma);const h=z0(s,e,t,n,fa,pa,ma,cd);if(h){const u=new A;ci.getBarycoord(cd,fa,pa,ma,u),i&&(h.uv=ci.getInterpolatedAttribute(i,a,c,l,u,new re)),r&&(h.uv1=ci.getInterpolatedAttribute(r,a,c,l,u,new re)),o&&(h.normal=ci.getInterpolatedAttribute(o,a,c,l,u,new A),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new A,materialIndex:0};ci.getNormal(fa,pa,ma,d.normal),h.face=d,h.barycoord=u}return h}class un extends jt{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new Tt(l,3)),this.setAttribute("normal",new Tt(h,3)),this.setAttribute("uv",new Tt(u,2));function g(_,m,p,w,v,x,L,R,C,b,y){const M=x/C,P=L/b,k=x/2,F=L/2,B=R/2,W=C+1,z=b+1;let K=0,H=0;const ce=new A;for(let pe=0;pe<z;pe++){const me=pe*P-F;for(let Re=0;Re<W;Re++){const it=Re*M-k;ce[_]=it*w,ce[m]=me*v,ce[p]=B,l.push(ce.x,ce.y,ce.z),ce[_]=0,ce[m]=0,ce[p]=R>0?1:-1,h.push(ce.x,ce.y,ce.z),u.push(Re/C),u.push(1-pe/b),K+=1}}for(let pe=0;pe<b;pe++)for(let me=0;me<C;me++){const Re=d+me+W*pe,it=d+me+W*(pe+1),j=d+(me+1)+W*(pe+1),ie=d+(me+1)+W*pe;c.push(Re,it,ie),c.push(it,j,ie),H+=6}a.addGroup(f,H,y),f+=H,d+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new un(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ar(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function An(s){const e={};for(let t=0;t<s.length;t++){const n=Ar(s[t]);for(const i in n)e[i]=n[i]}return e}function H0(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Jf(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:lt.workingColorSpace}const Qf={clone:Ar,merge:An};var V0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,G0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ri extends ui{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=V0,this.fragmentShader=G0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ar(e.uniforms),this.uniformsGroups=H0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class ep extends Bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new je,this.projectionMatrix=new je,this.projectionMatrixInverse=new je,this.coordinateSystem=qi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const cs=new A,ld=new re,hd=new re;class Rn extends ep{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Er*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(mo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Er*2*Math.atan(Math.tan(mo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){cs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(cs.x,cs.y).multiplyScalar(-e/cs.z),cs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(cs.x,cs.y).multiplyScalar(-e/cs.z)}getViewSize(e,t){return this.getViewBounds(e,ld,hd),t.subVectors(hd,ld)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(mo*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const tr=-90,nr=1;class W0 extends Bt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Rn(tr,nr,e,t);i.layers=this.layers,this.add(i);const r=new Rn(tr,nr,e,t);r.layers=this.layers,this.add(r);const o=new Rn(tr,nr,e,t);o.layers=this.layers,this.add(o);const a=new Rn(tr,nr,e,t);a.layers=this.layers,this.add(a);const c=new Rn(tr,nr,e,t);c.layers=this.layers,this.add(c);const l=new Rn(tr,nr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===qi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===nc)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class tp extends tn{constructor(e,t,n,i,r,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:Sr,super(e,t,n,i,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class X0 extends Fs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new tp(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:kn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new un(5,5,5),r=new Ri({name:"CubemapFromEquirect",uniforms:Ar(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:bn,blending:gs});r.uniforms.tEquirect.value=t;const o=new $(i,r),a=t.minFilter;return t.minFilter===Xi&&(t.minFilter=kn),new W0(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}const rl=new A,q0=new A,Y0=new Ze;class Si{constructor(e=new A(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=rl.subVectors(n,t).cross(q0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(rl),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Y0.getNormalMatrix(e),i=this.coplanarPoint(rl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ws=new Ci,va=new A;class tu{constructor(e=new Si,t=new Si,n=new Si,i=new Si,r=new Si,o=new Si){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=qi){const n=this.planes,i=e.elements,r=i[0],o=i[1],a=i[2],c=i[3],l=i[4],h=i[5],u=i[6],d=i[7],f=i[8],g=i[9],_=i[10],m=i[11],p=i[12],w=i[13],v=i[14],x=i[15];if(n[0].setComponents(c-r,d-l,m-f,x-p).normalize(),n[1].setComponents(c+r,d+l,m+f,x+p).normalize(),n[2].setComponents(c+o,d+h,m+g,x+w).normalize(),n[3].setComponents(c-o,d-h,m-g,x-w).normalize(),n[4].setComponents(c-a,d-u,m-_,x-v).normalize(),t===qi)n[5].setComponents(c+a,d+u,m+_,x+v).normalize();else if(t===nc)n[5].setComponents(a,u,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ws.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ws.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ws)}intersectsSprite(e){return ws.center.set(0,0,0),ws.radius=.7071067811865476,ws.applyMatrix4(e.matrixWorld),this.intersectsSphere(ws)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(va.x=i.normal.x>0?e.max.x:e.min.x,va.y=i.normal.y>0?e.max.y:e.min.y,va.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(va)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function np(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function j0(s){const e=new WeakMap;function t(a,c){const l=a.array,h=a.usage,u=l.byteLength,d=s.createBuffer();s.bindBuffer(c,d),s.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=s.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=s.SHORT;else if(l instanceof Uint32Array)f=s.UNSIGNED_INT;else if(l instanceof Int32Array)f=s.INT;else if(l instanceof Int8Array)f=s.BYTE;else if(l instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const h=c.array,u=c.updateRanges;if(s.bindBuffer(l,a),u.length===0)s.bufferSubData(l,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],_=u[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const _=u[f];s.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(s.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:r,update:o}}class Zt extends jt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,u=e/a,d=t/c,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const w=p*d-o;for(let v=0;v<l;v++){const x=v*u-r;g.push(x,-w,0),_.push(0,0,1),m.push(v/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let w=0;w<a;w++){const v=w+l*p,x=w+l*(p+1),L=w+1+l*(p+1),R=w+1+l*p;f.push(v,x,R),f.push(x,L,R)}this.setIndex(f),this.setAttribute("position",new Tt(g,3)),this.setAttribute("normal",new Tt(_,3)),this.setAttribute("uv",new Tt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zt(e.width,e.height,e.widthSegments,e.heightSegments)}}var K0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$0=`#ifdef USE_ALPHAHASH
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
#endif`,Z0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,J0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Q0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,eg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,tg=`#ifdef USE_AOMAP
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
#endif`,ng=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ig=`#ifdef USE_BATCHING
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
#endif`,sg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,rg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,og=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ag=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,cg=`#ifdef USE_IRIDESCENCE
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
#endif`,lg=`#ifdef USE_BUMPMAP
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
#endif`,hg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ug=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,dg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,fg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,pg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,mg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,gg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,_g=`#if defined( USE_COLOR_ALPHA )
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
#endif`,xg=`#define PI 3.141592653589793
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
} // validated`,vg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,yg=`vec3 transformedNormal = objectNormal;
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
#endif`,Mg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Sg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,bg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Tg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Eg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ag=`#ifdef USE_ENVMAP
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
#endif`,Rg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Cg=`#ifdef USE_ENVMAP
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
#endif`,Pg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ig=`#ifdef USE_ENVMAP
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
#endif`,Lg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Dg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ng=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ug=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Og=`#ifdef USE_GRADIENTMAP
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
}`,Fg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,kg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Bg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zg=`uniform bool receiveShadow;
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
#endif`,Hg=`#ifdef USE_ENVMAP
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
#endif`,Vg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Gg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Wg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Xg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qg=`PhysicalMaterial material;
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
#endif`,Yg=`struct PhysicalMaterial {
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
}`,jg=`
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
#endif`,Kg=`#if defined( RE_IndirectDiffuse )
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
#endif`,$g=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Zg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Jg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,e_=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,t_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,n_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,i_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,s_=`#if defined( USE_POINTS_UV )
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
#endif`,r_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,o_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,a_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,c_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,l_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,h_=`#ifdef USE_MORPHTARGETS
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
#endif`,u_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,d_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,f_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,p_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,m_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,g_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,__=`#ifdef USE_NORMALMAP
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
#endif`,x_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,v_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,y_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,M_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,S_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,w_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,b_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,T_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,E_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,A_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,R_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,C_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,P_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,I_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,L_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,D_=`float getShadowMask() {
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
}`,N_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,U_=`#ifdef USE_SKINNING
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
#endif`,O_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,F_=`#ifdef USE_SKINNING
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
#endif`,k_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,B_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,z_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,H_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,V_=`#ifdef USE_TRANSMISSION
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
#endif`,G_=`#ifdef USE_TRANSMISSION
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
#endif`,W_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,X_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,q_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Y_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const j_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,K_=`uniform sampler2D t2D;
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
}`,$_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Z_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,J_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Q_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ex=`#include <common>
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
}`,tx=`#if DEPTH_PACKING == 3200
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
}`,nx=`#define DISTANCE
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
}`,ix=`#define DISTANCE
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
}`,sx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,rx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ox=`uniform float scale;
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
}`,ax=`uniform vec3 diffuse;
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
}`,cx=`#include <common>
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
}`,lx=`uniform vec3 diffuse;
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
}`,hx=`#define LAMBERT
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
}`,ux=`#define LAMBERT
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
}`,dx=`#define MATCAP
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
}`,fx=`#define MATCAP
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
}`,px=`#define NORMAL
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
}`,mx=`#define NORMAL
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
}`,gx=`#define PHONG
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
}`,_x=`#define PHONG
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
}`,xx=`#define STANDARD
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
}`,vx=`#define STANDARD
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
}`,yx=`#define TOON
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
}`,Mx=`#define TOON
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
}`,Sx=`uniform float size;
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
}`,wx=`uniform vec3 diffuse;
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
}`,bx=`#include <common>
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
}`,Tx=`uniform vec3 color;
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
}`,Ex=`uniform float rotation;
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
}`,Ax=`uniform vec3 diffuse;
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
}`,nt={alphahash_fragment:K0,alphahash_pars_fragment:$0,alphamap_fragment:Z0,alphamap_pars_fragment:J0,alphatest_fragment:Q0,alphatest_pars_fragment:eg,aomap_fragment:tg,aomap_pars_fragment:ng,batching_pars_vertex:ig,batching_vertex:sg,begin_vertex:rg,beginnormal_vertex:og,bsdfs:ag,iridescence_fragment:cg,bumpmap_pars_fragment:lg,clipping_planes_fragment:hg,clipping_planes_pars_fragment:ug,clipping_planes_pars_vertex:dg,clipping_planes_vertex:fg,color_fragment:pg,color_pars_fragment:mg,color_pars_vertex:gg,color_vertex:_g,common:xg,cube_uv_reflection_fragment:vg,defaultnormal_vertex:yg,displacementmap_pars_vertex:Mg,displacementmap_vertex:Sg,emissivemap_fragment:wg,emissivemap_pars_fragment:bg,colorspace_fragment:Tg,colorspace_pars_fragment:Eg,envmap_fragment:Ag,envmap_common_pars_fragment:Rg,envmap_pars_fragment:Cg,envmap_pars_vertex:Pg,envmap_physical_pars_fragment:Hg,envmap_vertex:Ig,fog_vertex:Lg,fog_pars_vertex:Dg,fog_fragment:Ng,fog_pars_fragment:Ug,gradientmap_pars_fragment:Og,lightmap_pars_fragment:Fg,lights_lambert_fragment:kg,lights_lambert_pars_fragment:Bg,lights_pars_begin:zg,lights_toon_fragment:Vg,lights_toon_pars_fragment:Gg,lights_phong_fragment:Wg,lights_phong_pars_fragment:Xg,lights_physical_fragment:qg,lights_physical_pars_fragment:Yg,lights_fragment_begin:jg,lights_fragment_maps:Kg,lights_fragment_end:$g,logdepthbuf_fragment:Zg,logdepthbuf_pars_fragment:Jg,logdepthbuf_pars_vertex:Qg,logdepthbuf_vertex:e_,map_fragment:t_,map_pars_fragment:n_,map_particle_fragment:i_,map_particle_pars_fragment:s_,metalnessmap_fragment:r_,metalnessmap_pars_fragment:o_,morphinstance_vertex:a_,morphcolor_vertex:c_,morphnormal_vertex:l_,morphtarget_pars_vertex:h_,morphtarget_vertex:u_,normal_fragment_begin:d_,normal_fragment_maps:f_,normal_pars_fragment:p_,normal_pars_vertex:m_,normal_vertex:g_,normalmap_pars_fragment:__,clearcoat_normal_fragment_begin:x_,clearcoat_normal_fragment_maps:v_,clearcoat_pars_fragment:y_,iridescence_pars_fragment:M_,opaque_fragment:S_,packing:w_,premultiplied_alpha_fragment:b_,project_vertex:T_,dithering_fragment:E_,dithering_pars_fragment:A_,roughnessmap_fragment:R_,roughnessmap_pars_fragment:C_,shadowmap_pars_fragment:P_,shadowmap_pars_vertex:I_,shadowmap_vertex:L_,shadowmask_pars_fragment:D_,skinbase_vertex:N_,skinning_pars_vertex:U_,skinning_vertex:O_,skinnormal_vertex:F_,specularmap_fragment:k_,specularmap_pars_fragment:B_,tonemapping_fragment:z_,tonemapping_pars_fragment:H_,transmission_fragment:V_,transmission_pars_fragment:G_,uv_pars_fragment:W_,uv_pars_vertex:X_,uv_vertex:q_,worldpos_vertex:Y_,background_vert:j_,background_frag:K_,backgroundCube_vert:$_,backgroundCube_frag:Z_,cube_vert:J_,cube_frag:Q_,depth_vert:ex,depth_frag:tx,distanceRGBA_vert:nx,distanceRGBA_frag:ix,equirect_vert:sx,equirect_frag:rx,linedashed_vert:ox,linedashed_frag:ax,meshbasic_vert:cx,meshbasic_frag:lx,meshlambert_vert:hx,meshlambert_frag:ux,meshmatcap_vert:dx,meshmatcap_frag:fx,meshnormal_vert:px,meshnormal_frag:mx,meshphong_vert:gx,meshphong_frag:_x,meshphysical_vert:xx,meshphysical_frag:vx,meshtoon_vert:yx,meshtoon_frag:Mx,points_vert:Sx,points_frag:wx,shadow_vert:bx,shadow_frag:Tx,sprite_vert:Ex,sprite_frag:Ax},fe={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},envMapRotation:{value:new Ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},wi={basic:{uniforms:An([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:nt.meshbasic_vert,fragmentShader:nt.meshbasic_frag},lambert:{uniforms:An([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new ze(0)}}]),vertexShader:nt.meshlambert_vert,fragmentShader:nt.meshlambert_frag},phong:{uniforms:An([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30}}]),vertexShader:nt.meshphong_vert,fragmentShader:nt.meshphong_frag},standard:{uniforms:An([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag},toon:{uniforms:An([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new ze(0)}}]),vertexShader:nt.meshtoon_vert,fragmentShader:nt.meshtoon_frag},matcap:{uniforms:An([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:nt.meshmatcap_vert,fragmentShader:nt.meshmatcap_frag},points:{uniforms:An([fe.points,fe.fog]),vertexShader:nt.points_vert,fragmentShader:nt.points_frag},dashed:{uniforms:An([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:nt.linedashed_vert,fragmentShader:nt.linedashed_frag},depth:{uniforms:An([fe.common,fe.displacementmap]),vertexShader:nt.depth_vert,fragmentShader:nt.depth_frag},normal:{uniforms:An([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:nt.meshnormal_vert,fragmentShader:nt.meshnormal_frag},sprite:{uniforms:An([fe.sprite,fe.fog]),vertexShader:nt.sprite_vert,fragmentShader:nt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:nt.background_vert,fragmentShader:nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ze}},vertexShader:nt.backgroundCube_vert,fragmentShader:nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:nt.cube_vert,fragmentShader:nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:nt.equirect_vert,fragmentShader:nt.equirect_frag},distanceRGBA:{uniforms:An([fe.common,fe.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:nt.distanceRGBA_vert,fragmentShader:nt.distanceRGBA_frag},shadow:{uniforms:An([fe.lights,fe.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:nt.shadow_vert,fragmentShader:nt.shadow_frag}};wi.physical={uniforms:An([wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag};const ya={r:0,b:0,g:0},bs=new Ai,Rx=new je;function Cx(s,e,t,n,i,r,o){const a=new ze(0);let c=r===!0?0:1,l,h,u=null,d=0,f=null;function g(w){let v=w.isScene===!0?w.background:null;return v&&v.isTexture&&(v=(w.backgroundBlurriness>0?t:e).get(v)),v}function _(w){let v=!1;const x=g(w);x===null?p(a,c):x&&x.isColor&&(p(x,1),v=!0);const L=s.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(w,v){const x=g(v);x&&(x.isCubeTexture||x.mapping===gc)?(h===void 0&&(h=new $(new un(1,1,1),new Ri({name:"BackgroundCubeMaterial",uniforms:Ar(wi.backgroundCube.uniforms),vertexShader:wi.backgroundCube.vertexShader,fragmentShader:wi.backgroundCube.fragmentShader,side:bn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,R,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),bs.copy(v.backgroundRotation),bs.x*=-1,bs.y*=-1,bs.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(bs.y*=-1,bs.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Rx.makeRotationFromEuler(bs)),h.material.toneMapped=lt.getTransfer(x.colorSpace)!==Et,(u!==x||d!==x.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,f=s.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new $(new Zt(2,2),new Ri({name:"BackgroundMaterial",uniforms:Ar(wi.background.uniforms),vertexShader:wi.background.vertexShader,fragmentShader:wi.background.fragmentShader,side:$i,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=lt.getTransfer(x.colorSpace)!==Et,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,u=x,d=x.version,f=s.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null))}function p(w,v){w.getRGB(ya,Jf(s)),n.buffers.color.setClear(ya.r,ya.g,ya.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(w,v=1){a.set(w),c=v,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(w){c=w,p(a,c)},render:_,addToRenderList:m}}function Px(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,o=!1;function a(M,P,k,F,B){let W=!1;const z=u(F,k,P);r!==z&&(r=z,l(r.object)),W=f(M,F,k,B),W&&g(M,F,k,B),B!==null&&e.update(B,s.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,x(M,P,k,F),B!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function c(){return s.createVertexArray()}function l(M){return s.bindVertexArray(M)}function h(M){return s.deleteVertexArray(M)}function u(M,P,k){const F=k.wireframe===!0;let B=n[M.id];B===void 0&&(B={},n[M.id]=B);let W=B[P.id];W===void 0&&(W={},B[P.id]=W);let z=W[F];return z===void 0&&(z=d(c()),W[F]=z),z}function d(M){const P=[],k=[],F=[];for(let B=0;B<t;B++)P[B]=0,k[B]=0,F[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:k,attributeDivisors:F,object:M,attributes:{},index:null}}function f(M,P,k,F){const B=r.attributes,W=P.attributes;let z=0;const K=k.getAttributes();for(const H in K)if(K[H].location>=0){const pe=B[H];let me=W[H];if(me===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(me=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(me=M.instanceColor)),pe===void 0||pe.attribute!==me||me&&pe.data!==me.data)return!0;z++}return r.attributesNum!==z||r.index!==F}function g(M,P,k,F){const B={},W=P.attributes;let z=0;const K=k.getAttributes();for(const H in K)if(K[H].location>=0){let pe=W[H];pe===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(pe=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(pe=M.instanceColor));const me={};me.attribute=pe,pe&&pe.data&&(me.data=pe.data),B[H]=me,z++}r.attributes=B,r.attributesNum=z,r.index=F}function _(){const M=r.newAttributes;for(let P=0,k=M.length;P<k;P++)M[P]=0}function m(M){p(M,0)}function p(M,P){const k=r.newAttributes,F=r.enabledAttributes,B=r.attributeDivisors;k[M]=1,F[M]===0&&(s.enableVertexAttribArray(M),F[M]=1),B[M]!==P&&(s.vertexAttribDivisor(M,P),B[M]=P)}function w(){const M=r.newAttributes,P=r.enabledAttributes;for(let k=0,F=P.length;k<F;k++)P[k]!==M[k]&&(s.disableVertexAttribArray(k),P[k]=0)}function v(M,P,k,F,B,W,z){z===!0?s.vertexAttribIPointer(M,P,k,B,W):s.vertexAttribPointer(M,P,k,F,B,W)}function x(M,P,k,F){_();const B=F.attributes,W=k.getAttributes(),z=P.defaultAttributeValues;for(const K in W){const H=W[K];if(H.location>=0){let ce=B[K];if(ce===void 0&&(K==="instanceMatrix"&&M.instanceMatrix&&(ce=M.instanceMatrix),K==="instanceColor"&&M.instanceColor&&(ce=M.instanceColor)),ce!==void 0){const pe=ce.normalized,me=ce.itemSize,Re=e.get(ce);if(Re===void 0)continue;const it=Re.buffer,j=Re.type,ie=Re.bytesPerElement,xe=j===s.INT||j===s.UNSIGNED_INT||ce.gpuType===Wh;if(ce.isInterleavedBufferAttribute){const ae=ce.data,Ie=ae.stride,Ne=ce.offset;if(ae.isInstancedInterleavedBuffer){for(let He=0;He<H.locationSize;He++)p(H.location+He,ae.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let He=0;He<H.locationSize;He++)m(H.location+He);s.bindBuffer(s.ARRAY_BUFFER,it);for(let He=0;He<H.locationSize;He++)v(H.location+He,me/H.locationSize,j,pe,Ie*ie,(Ne+me/H.locationSize*He)*ie,xe)}else{if(ce.isInstancedBufferAttribute){for(let ae=0;ae<H.locationSize;ae++)p(H.location+ae,ce.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let ae=0;ae<H.locationSize;ae++)m(H.location+ae);s.bindBuffer(s.ARRAY_BUFFER,it);for(let ae=0;ae<H.locationSize;ae++)v(H.location+ae,me/H.locationSize,j,pe,me*ie,me/H.locationSize*ae*ie,xe)}}else if(z!==void 0){const pe=z[K];if(pe!==void 0)switch(pe.length){case 2:s.vertexAttrib2fv(H.location,pe);break;case 3:s.vertexAttrib3fv(H.location,pe);break;case 4:s.vertexAttrib4fv(H.location,pe);break;default:s.vertexAttrib1fv(H.location,pe)}}}}w()}function L(){b();for(const M in n){const P=n[M];for(const k in P){const F=P[k];for(const B in F)h(F[B].object),delete F[B];delete P[k]}delete n[M]}}function R(M){if(n[M.id]===void 0)return;const P=n[M.id];for(const k in P){const F=P[k];for(const B in F)h(F[B].object),delete F[B];delete P[k]}delete n[M.id]}function C(M){for(const P in n){const k=n[P];if(k[M.id]===void 0)continue;const F=k[M.id];for(const B in F)h(F[B].object),delete F[B];delete k[M.id]}}function b(){y(),o=!0,r!==i&&(r=i,l(r.object))}function y(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:b,resetDefaultState:y,dispose:L,releaseStatesOfGeometry:R,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:m,disableUnusedAttributes:w}}function Ix(s,e,t){let n;function i(l){n=l}function r(l,h){s.drawArrays(n,l,h),t.update(h,n,1)}function o(l,h,u){u!==0&&(s.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function a(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];t.update(f,n,1)}function c(l,h,u,d){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)o(l[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];t.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Lx(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(C){return!(C!==qn&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const b=C===Yo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Zi&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==li&&!b)}function c(C){if(C==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),w=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),v=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,R=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:w,maxVaryings:v,maxFragmentUniforms:x,vertexTextures:L,maxSamples:R}}function Dx(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new Si,a=new Ze,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!i||g===null||g.length===0||r&&!m)r?h(null):l();else{const w=r?0:n,v=w*4;let x=p.clippingState||null;c.value=x,x=h(g,d,v,f);for(let L=0;L!==v;++L)x[L]=t[L];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=w}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=f+_*4,w=d.matrixWorldInverse;a.getNormalMatrix(w),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,x=f;v!==_;++v,x+=4)o.copy(u[v]).applyMatrix4(w,a),o.normal.toArray(m,x),m[x+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function Nx(s){let e=new WeakMap;function t(o,a){return a===Vl?o.mapping=Sr:a===Gl&&(o.mapping=wr),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Vl||a===Gl)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new X0(c.height);return l.fromEquirectangularTexture(s,o),e.set(o,l),o.addEventListener("dispose",i),t(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class nu extends ep{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ur=4,ud=[.125,.215,.35,.446,.526,.582],Is=20,ol=new nu,dd=new ze;let al=null,cl=0,ll=0,hl=!1;const Rs=(1+Math.sqrt(5))/2,ir=1/Rs,fd=[new A(-Rs,ir,0),new A(Rs,ir,0),new A(-ir,0,Rs),new A(ir,0,Rs),new A(0,Rs,-ir),new A(0,Rs,ir),new A(-1,1,-1),new A(1,1,-1),new A(-1,1,1),new A(1,1,1)];class xh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){al=this._renderer.getRenderTarget(),cl=this._renderer.getActiveCubeFace(),ll=this._renderer.getActiveMipmapLevel(),hl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=md(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(al,cl,ll),this._renderer.xr.enabled=hl,e.scissorTest=!1,Ma(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Sr||e.mapping===wr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),al=this._renderer.getRenderTarget(),cl=this._renderer.getActiveCubeFace(),ll=this._renderer.getActiveMipmapLevel(),hl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:kn,minFilter:kn,generateMipmaps:!1,type:Yo,format:qn,colorSpace:In,depthBuffer:!1},i=pd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=pd(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ux(r)),this._blurMaterial=Ox(r,e,t)}return i}_compileMaterial(e){const t=new $(this._lodPlanes[0],e);this._renderer.compile(t,ol)}_sceneToCubeUV(e,t,n,i){const a=new Rn(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(dd),h.toneMapping=_s,h.autoClear=!1;const f=new en({name:"PMREM.Background",side:bn,depthWrite:!1,depthTest:!1}),g=new $(new un,f);let _=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,_=!0):(f.color.copy(dd),_=!0);for(let p=0;p<6;p++){const w=p%3;w===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):w===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const v=this._cubeSize;Ma(i,w*v,p>2?v:0,v,v),h.setRenderTarget(i),_&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Sr||e.mapping===wr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=gd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=md());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new $(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;Ma(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,ol)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=fd[(i-r-1)%fd.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new $(this._lodPlanes[i],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Is-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):Is;m>Is&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Is}`);const p=[];let w=0;for(let C=0;C<Is;++C){const b=C/_,y=Math.exp(-b*b/2);p.push(y),C===0?w+=y:C<m&&(w+=2*y)}for(let C=0;C<p.length;C++)p[C]=p[C]/w;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-n;const x=this._sizeLods[i],L=3*x*(i>v-ur?i-v+ur:0),R=4*(this._cubeSize-x);Ma(t,L,R,3*x,2*x),c.setRenderTarget(t),c.render(u,ol)}}function Ux(s){const e=[],t=[],n=[];let i=s;const r=s-ur+1+ud.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let c=1/a;o>s-ur?c=ud[o-s+ur-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,m=2,p=1,w=new Float32Array(_*g*f),v=new Float32Array(m*g*f),x=new Float32Array(p*g*f);for(let R=0;R<f;R++){const C=R%3*2/3-1,b=R>2?0:-1,y=[C,b,0,C+2/3,b,0,C+2/3,b+1,0,C,b,0,C+2/3,b+1,0,C,b+1,0];w.set(y,_*g*R),v.set(d,m*g*R);const M=[R,R,R,R,R,R];x.set(M,p*g*R)}const L=new jt;L.setAttribute("position",new dn(w,_)),L.setAttribute("uv",new dn(v,m)),L.setAttribute("faceIndex",new dn(x,p)),e.push(L),i>ur&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function pd(s,e,t){const n=new Fs(s,e,t);return n.texture.mapping=gc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ma(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Ox(s,e,t){const n=new Float32Array(Is),i=new A(0,1,0);return new Ri({name:"SphericalGaussianBlur",defines:{n:Is,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:iu(),fragmentShader:`

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
		`,blending:gs,depthTest:!1,depthWrite:!1})}function md(){return new Ri({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:iu(),fragmentShader:`

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
		`,blending:gs,depthTest:!1,depthWrite:!1})}function gd(){return new Ri({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:iu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gs,depthTest:!1,depthWrite:!1})}function iu(){return`

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
	`}function Fx(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Vl||c===Gl,h=c===Sr||c===wr;if(l||h){let u=e.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new xh(s)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return l&&f&&f.height>0||h&&f&&i(f)?(t===null&&(t=new xh(s)),u=l?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function i(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function kx(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&lo("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Bx(s,e,t,n){const i={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)e.remove(_[m])}d.removeEventListener("dispose",o),delete i[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function c(u){const d=u.attributes;for(const g in d)e.update(d[g],s.ARRAY_BUFFER);const f=u.morphAttributes;for(const g in f){const _=f[g];for(let m=0,p=_.length;m<p;m++)e.update(_[m],s.ARRAY_BUFFER)}}function l(u){const d=[],f=u.index,g=u.attributes.position;let _=0;if(f!==null){const w=f.array;_=f.version;for(let v=0,x=w.length;v<x;v+=3){const L=w[v+0],R=w[v+1],C=w[v+2];d.push(L,R,R,C,C,L)}}else if(g!==void 0){const w=g.array;_=g.version;for(let v=0,x=w.length/3-1;v<x;v+=3){const L=v+0,R=v+1,C=v+2;d.push(L,R,R,C,C,L)}}else return;const m=new(qf(d)?Zf:$f)(d,1);m.version=_;const p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function zx(s,e,t){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,f){s.drawElements(n,f,r,d*o),t.update(f,n,1)}function l(d,f,g){g!==0&&(s.drawElementsInstanced(n,f,r,d*o,g),t.update(f,n,g))}function h(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function u(d,f,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/o,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,g);let p=0;for(let w=0;w<g;w++)p+=f[w]*_[w];t.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Hx(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Vx(s,e,t){const n=new WeakMap,i=new pt;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let M=function(){b.dispose(),n.delete(a),a.removeEventListener("dispose",M)};var f=M;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],w=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let x=0;g===!0&&(x=1),_===!0&&(x=2),m===!0&&(x=3);let L=a.attributes.position.count*x,R=1;L>e.maxTextureSize&&(R=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const C=new Float32Array(L*R*4*u),b=new jf(C,L,R,u);b.type=li,b.needsUpdate=!0;const y=x*4;for(let P=0;P<u;P++){const k=p[P],F=w[P],B=v[P],W=L*R*4*P;for(let z=0;z<k.count;z++){const K=z*y;g===!0&&(i.fromBufferAttribute(k,z),C[W+K+0]=i.x,C[W+K+1]=i.y,C[W+K+2]=i.z,C[W+K+3]=0),_===!0&&(i.fromBufferAttribute(F,z),C[W+K+4]=i.x,C[W+K+5]=i.y,C[W+K+6]=i.z,C[W+K+7]=0),m===!0&&(i.fromBufferAttribute(B,z),C[W+K+8]=i.x,C[W+K+9]=i.y,C[W+K+10]=i.z,C[W+K+11]=B.itemSize===4?i.w:1)}}d={count:u,texture:b,size:new re(L,R)},n.set(a,d),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const _=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(s,"morphTargetBaseInfluence",_),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function Gx(s,e,t,n){let i=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=e.get(c,h);if(i.get(u)!==l&&(e.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return u}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}class ip extends tn{constructor(e,t,n,i,r,o,a,c,l,h=mr){if(h!==mr&&h!==Tr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===mr&&(n=Os),n===void 0&&h===Tr&&(n=br),super(null,i,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Tn,this.minFilter=c!==void 0?c:Tn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const sp=new tn,_d=new ip(1,1),rp=new jf,op=new P0,ap=new tp,xd=[],vd=[],yd=new Float32Array(16),Md=new Float32Array(9),Sd=new Float32Array(4);function Fr(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=xd[i];if(r===void 0&&(r=new Float32Array(i),xd[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function nn(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function sn(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function xc(s,e){let t=vd[e];t===void 0&&(t=new Int32Array(e),vd[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Wx(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Xx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;s.uniform2fv(this.addr,e),sn(t,e)}}function qx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(nn(t,e))return;s.uniform3fv(this.addr,e),sn(t,e)}}function Yx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;s.uniform4fv(this.addr,e),sn(t,e)}}function jx(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(nn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),sn(t,e)}else{if(nn(t,n))return;Sd.set(n),s.uniformMatrix2fv(this.addr,!1,Sd),sn(t,n)}}function Kx(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(nn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),sn(t,e)}else{if(nn(t,n))return;Md.set(n),s.uniformMatrix3fv(this.addr,!1,Md),sn(t,n)}}function $x(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(nn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),sn(t,e)}else{if(nn(t,n))return;yd.set(n),s.uniformMatrix4fv(this.addr,!1,yd),sn(t,n)}}function Zx(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Jx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;s.uniform2iv(this.addr,e),sn(t,e)}}function Qx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nn(t,e))return;s.uniform3iv(this.addr,e),sn(t,e)}}function ev(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;s.uniform4iv(this.addr,e),sn(t,e)}}function tv(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function nv(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;s.uniform2uiv(this.addr,e),sn(t,e)}}function iv(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nn(t,e))return;s.uniform3uiv(this.addr,e),sn(t,e)}}function sv(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;s.uniform4uiv(this.addr,e),sn(t,e)}}function rv(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(_d.compareFunction=Xf,r=_d):r=sp,t.setTexture2D(e||r,i)}function ov(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||op,i)}function av(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||ap,i)}function cv(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||rp,i)}function lv(s){switch(s){case 5126:return Wx;case 35664:return Xx;case 35665:return qx;case 35666:return Yx;case 35674:return jx;case 35675:return Kx;case 35676:return $x;case 5124:case 35670:return Zx;case 35667:case 35671:return Jx;case 35668:case 35672:return Qx;case 35669:case 35673:return ev;case 5125:return tv;case 36294:return nv;case 36295:return iv;case 36296:return sv;case 35678:case 36198:case 36298:case 36306:case 35682:return rv;case 35679:case 36299:case 36307:return ov;case 35680:case 36300:case 36308:case 36293:return av;case 36289:case 36303:case 36311:case 36292:return cv}}function hv(s,e){s.uniform1fv(this.addr,e)}function uv(s,e){const t=Fr(e,this.size,2);s.uniform2fv(this.addr,t)}function dv(s,e){const t=Fr(e,this.size,3);s.uniform3fv(this.addr,t)}function fv(s,e){const t=Fr(e,this.size,4);s.uniform4fv(this.addr,t)}function pv(s,e){const t=Fr(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function mv(s,e){const t=Fr(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function gv(s,e){const t=Fr(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function _v(s,e){s.uniform1iv(this.addr,e)}function xv(s,e){s.uniform2iv(this.addr,e)}function vv(s,e){s.uniform3iv(this.addr,e)}function yv(s,e){s.uniform4iv(this.addr,e)}function Mv(s,e){s.uniform1uiv(this.addr,e)}function Sv(s,e){s.uniform2uiv(this.addr,e)}function wv(s,e){s.uniform3uiv(this.addr,e)}function bv(s,e){s.uniform4uiv(this.addr,e)}function Tv(s,e,t){const n=this.cache,i=e.length,r=xc(t,i);nn(n,r)||(s.uniform1iv(this.addr,r),sn(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||sp,r[o])}function Ev(s,e,t){const n=this.cache,i=e.length,r=xc(t,i);nn(n,r)||(s.uniform1iv(this.addr,r),sn(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||op,r[o])}function Av(s,e,t){const n=this.cache,i=e.length,r=xc(t,i);nn(n,r)||(s.uniform1iv(this.addr,r),sn(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||ap,r[o])}function Rv(s,e,t){const n=this.cache,i=e.length,r=xc(t,i);nn(n,r)||(s.uniform1iv(this.addr,r),sn(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||rp,r[o])}function Cv(s){switch(s){case 5126:return hv;case 35664:return uv;case 35665:return dv;case 35666:return fv;case 35674:return pv;case 35675:return mv;case 35676:return gv;case 5124:case 35670:return _v;case 35667:case 35671:return xv;case 35668:case 35672:return vv;case 35669:case 35673:return yv;case 5125:return Mv;case 36294:return Sv;case 36295:return wv;case 36296:return bv;case 35678:case 36198:case 36298:case 36306:case 35682:return Tv;case 35679:case 36299:case 36307:return Ev;case 35680:case 36300:case 36308:case 36293:return Av;case 36289:case 36303:case 36311:case 36292:return Rv}}class Pv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=lv(t.type)}}class Iv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Cv(t.type)}}class Lv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const ul=/(\w+)(\])?(\[|\.)?/g;function wd(s,e){s.seq.push(e),s.map[e.id]=e}function Dv(s,e,t){const n=s.name,i=n.length;for(ul.lastIndex=0;;){const r=ul.exec(n),o=ul.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){wd(t,l===void 0?new Pv(a,s,e):new Iv(a,s,e));break}else{let u=t.map[a];u===void 0&&(u=new Lv(a),wd(t,u)),t=u}}}class Ga{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);Dv(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function bd(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const Nv=37297;let Uv=0;function Ov(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const Td=new Ze;function Fv(s){lt._getMatrix(Td,lt.workingColorSpace,s);const e=`mat3( ${Td.elements.map(t=>t.toFixed(4))} )`;switch(lt.getTransfer(s)){case _c:return[e,"LinearTransferOETF"];case Et:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Ed(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+Ov(s.getShaderSource(e),o)}else return i}function kv(s,e){const t=Fv(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Bv(s,e){let t;switch(e){case Bm:t="Linear";break;case zm:t="Reinhard";break;case Hm:t="Cineon";break;case If:t="ACESFilmic";break;case Gm:t="AgX";break;case Wm:t="Neutral";break;case Vm:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Sa=new A;function zv(){lt.getLuminanceCoefficients(Sa);const s=Sa.x.toFixed(4),e=Sa.y.toFixed(4),t=Sa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Hv(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ho).join(`
`)}function Vv(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Gv(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function ho(s){return s!==""}function Ad(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Rd(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Wv=/^[ \t]*#include +<([\w\d./]+)>/gm;function vh(s){return s.replace(Wv,qv)}const Xv=new Map;function qv(s,e){let t=nt[e];if(t===void 0){const n=Xv.get(e);if(n!==void 0)t=nt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return vh(t)}const Yv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Cd(s){return s.replace(Yv,jv)}function jv(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Pd(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}function Kv(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Rf?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Cf?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Hi&&(e="SHADOWMAP_TYPE_VSM"),e}function $v(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Sr:case wr:e="ENVMAP_TYPE_CUBE";break;case gc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Zv(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case wr:e="ENVMAP_MODE_REFRACTION";break}return e}function Jv(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Pf:e="ENVMAP_BLENDING_MULTIPLY";break;case Fm:e="ENVMAP_BLENDING_MIX";break;case km:e="ENVMAP_BLENDING_ADD";break}return e}function Qv(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function ey(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=Kv(t),l=$v(t),h=Zv(t),u=Jv(t),d=Qv(t),f=Hv(t),g=Vv(r),_=i.createProgram();let m,p,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ho).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ho).join(`
`),p.length>0&&(p+=`
`)):(m=[Pd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ho).join(`
`),p=[Pd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==_s?"#define TONE_MAPPING":"",t.toneMapping!==_s?nt.tonemapping_pars_fragment:"",t.toneMapping!==_s?Bv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",nt.colorspace_pars_fragment,kv("linearToOutputTexel",t.outputColorSpace),zv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ho).join(`
`)),o=vh(o),o=Ad(o,t),o=Rd(o,t),a=vh(a),a=Ad(a,t),a=Rd(a,t),o=Cd(o),a=Cd(a),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Gu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Gu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const v=w+m+o,x=w+p+a,L=bd(i,i.VERTEX_SHADER,v),R=bd(i,i.FRAGMENT_SHADER,x);i.attachShader(_,L),i.attachShader(_,R),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function C(P){if(s.debug.checkShaderErrors){const k=i.getProgramInfoLog(_).trim(),F=i.getShaderInfoLog(L).trim(),B=i.getShaderInfoLog(R).trim();let W=!0,z=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(W=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,L,R);else{const K=Ed(i,L,"vertex"),H=Ed(i,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+k+`
`+K+`
`+H)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(F===""||B==="")&&(z=!1);z&&(P.diagnostics={runnable:W,programLog:k,vertexShader:{log:F,prefix:m},fragmentShader:{log:B,prefix:p}})}i.deleteShader(L),i.deleteShader(R),b=new Ga(i,_),y=Gv(i,_)}let b;this.getUniforms=function(){return b===void 0&&C(this),b};let y;this.getAttributes=function(){return y===void 0&&C(this),y};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(_,Nv)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Uv++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=L,this.fragmentShader=R,this}let ty=0;class ny{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new iy(e),t.set(e,n)),n}}class iy{constructor(e){this.id=ty++,this.code=e,this.usedTimes=0}}function sy(s,e,t,n,i,r,o){const a=new eu,c=new ny,l=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return l.add(y),y===0?"uv":`uv${y}`}function m(y,M,P,k,F){const B=k.fog,W=F.geometry,z=y.isMeshStandardMaterial?k.environment:null,K=(y.isMeshStandardMaterial?t:e).get(y.envMap||z),H=K&&K.mapping===gc?K.image.height:null,ce=g[y.type];y.precision!==null&&(f=i.getMaxPrecision(y.precision),f!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));const pe=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,me=pe!==void 0?pe.length:0;let Re=0;W.morphAttributes.position!==void 0&&(Re=1),W.morphAttributes.normal!==void 0&&(Re=2),W.morphAttributes.color!==void 0&&(Re=3);let it,j,ie,xe;if(ce){const Mt=wi[ce];it=Mt.vertexShader,j=Mt.fragmentShader}else it=y.vertexShader,j=y.fragmentShader,c.update(y),ie=c.getVertexShaderID(y),xe=c.getFragmentShaderID(y);const ae=s.getRenderTarget(),Ie=s.state.buffers.depth.getReversed(),Ne=F.isInstancedMesh===!0,He=F.isBatchedMesh===!0,et=!!y.map,Z=!!y.matcap,se=!!K,I=!!y.aoMap,be=!!y.lightMap,te=!!y.bumpMap,Se=!!y.normalMap,J=!!y.displacementMap,ve=!!y.emissiveMap,le=!!y.metalnessMap,T=!!y.roughnessMap,S=y.anisotropy>0,N=y.clearcoat>0,X=y.dispersion>0,Q=y.iridescence>0,q=y.sheen>0,Ae=y.transmission>0,ue=S&&!!y.anisotropyMap,Ee=N&&!!y.clearcoatMap,ot=N&&!!y.clearcoatNormalMap,oe=N&&!!y.clearcoatRoughnessMap,Ce=Q&&!!y.iridescenceMap,Ge=Q&&!!y.iridescenceThicknessMap,We=q&&!!y.sheenColorMap,Pe=q&&!!y.sheenRoughnessMap,ut=!!y.specularMap,tt=!!y.specularColorMap,Ct=!!y.specularIntensityMap,D=Ae&&!!y.transmissionMap,_e=Ae&&!!y.thicknessMap,Y=!!y.gradientMap,ne=!!y.alphaMap,we=y.alphaTest>0,ye=!!y.alphaHash,Ke=!!y.extensions;let Vt=_s;y.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(Vt=s.toneMapping);const vn={shaderID:ce,shaderType:y.type,shaderName:y.name,vertexShader:it,fragmentShader:j,defines:y.defines,customVertexShaderID:ie,customFragmentShaderID:xe,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:He,batchingColor:He&&F._colorsTexture!==null,instancing:Ne,instancingColor:Ne&&F.instanceColor!==null,instancingMorph:Ne&&F.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ae===null?s.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:In,alphaToCoverage:!!y.alphaToCoverage,map:et,matcap:Z,envMap:se,envMapMode:se&&K.mapping,envMapCubeUVHeight:H,aoMap:I,lightMap:be,bumpMap:te,normalMap:Se,displacementMap:d&&J,emissiveMap:ve,normalMapObjectSpace:Se&&y.normalMapType===Jm,normalMapTangentSpace:Se&&y.normalMapType===Jh,metalnessMap:le,roughnessMap:T,anisotropy:S,anisotropyMap:ue,clearcoat:N,clearcoatMap:Ee,clearcoatNormalMap:ot,clearcoatRoughnessMap:oe,dispersion:X,iridescence:Q,iridescenceMap:Ce,iridescenceThicknessMap:Ge,sheen:q,sheenColorMap:We,sheenRoughnessMap:Pe,specularMap:ut,specularColorMap:tt,specularIntensityMap:Ct,transmission:Ae,transmissionMap:D,thicknessMap:_e,gradientMap:Y,opaque:y.transparent===!1&&y.blending===pr&&y.alphaToCoverage===!1,alphaMap:ne,alphaTest:we,alphaHash:ye,combine:y.combine,mapUv:et&&_(y.map.channel),aoMapUv:I&&_(y.aoMap.channel),lightMapUv:be&&_(y.lightMap.channel),bumpMapUv:te&&_(y.bumpMap.channel),normalMapUv:Se&&_(y.normalMap.channel),displacementMapUv:J&&_(y.displacementMap.channel),emissiveMapUv:ve&&_(y.emissiveMap.channel),metalnessMapUv:le&&_(y.metalnessMap.channel),roughnessMapUv:T&&_(y.roughnessMap.channel),anisotropyMapUv:ue&&_(y.anisotropyMap.channel),clearcoatMapUv:Ee&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:ot&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Ce&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:Ge&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:We&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&_(y.sheenRoughnessMap.channel),specularMapUv:ut&&_(y.specularMap.channel),specularColorMapUv:tt&&_(y.specularColorMap.channel),specularIntensityMapUv:Ct&&_(y.specularIntensityMap.channel),transmissionMapUv:D&&_(y.transmissionMap.channel),thicknessMapUv:_e&&_(y.thicknessMap.channel),alphaMapUv:ne&&_(y.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(Se||S),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!W.attributes.uv&&(et||ne),fog:!!B,useFog:y.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Ie,skinning:F.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:me,morphTextureStride:Re,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:Vt,decodeVideoTexture:et&&y.map.isVideoTexture===!0&&lt.getTransfer(y.map.colorSpace)===Et,decodeVideoTextureEmissive:ve&&y.emissiveMap.isVideoTexture===!0&&lt.getTransfer(y.emissiveMap.colorSpace)===Et,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===hn,flipSided:y.side===bn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Ke&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ke&&y.extensions.multiDraw===!0||He)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return vn.vertexUv1s=l.has(1),vn.vertexUv2s=l.has(2),vn.vertexUv3s=l.has(3),l.clear(),vn}function p(y){const M=[];if(y.shaderID?M.push(y.shaderID):(M.push(y.customVertexShaderID),M.push(y.customFragmentShaderID)),y.defines!==void 0)for(const P in y.defines)M.push(P),M.push(y.defines[P]);return y.isRawShaderMaterial===!1&&(w(M,y),v(M,y),M.push(s.outputColorSpace)),M.push(y.customProgramCacheKey),M.join()}function w(y,M){y.push(M.precision),y.push(M.outputColorSpace),y.push(M.envMapMode),y.push(M.envMapCubeUVHeight),y.push(M.mapUv),y.push(M.alphaMapUv),y.push(M.lightMapUv),y.push(M.aoMapUv),y.push(M.bumpMapUv),y.push(M.normalMapUv),y.push(M.displacementMapUv),y.push(M.emissiveMapUv),y.push(M.metalnessMapUv),y.push(M.roughnessMapUv),y.push(M.anisotropyMapUv),y.push(M.clearcoatMapUv),y.push(M.clearcoatNormalMapUv),y.push(M.clearcoatRoughnessMapUv),y.push(M.iridescenceMapUv),y.push(M.iridescenceThicknessMapUv),y.push(M.sheenColorMapUv),y.push(M.sheenRoughnessMapUv),y.push(M.specularMapUv),y.push(M.specularColorMapUv),y.push(M.specularIntensityMapUv),y.push(M.transmissionMapUv),y.push(M.thicknessMapUv),y.push(M.combine),y.push(M.fogExp2),y.push(M.sizeAttenuation),y.push(M.morphTargetsCount),y.push(M.morphAttributeCount),y.push(M.numDirLights),y.push(M.numPointLights),y.push(M.numSpotLights),y.push(M.numSpotLightMaps),y.push(M.numHemiLights),y.push(M.numRectAreaLights),y.push(M.numDirLightShadows),y.push(M.numPointLightShadows),y.push(M.numSpotLightShadows),y.push(M.numSpotLightShadowsWithMaps),y.push(M.numLightProbes),y.push(M.shadowMapType),y.push(M.toneMapping),y.push(M.numClippingPlanes),y.push(M.numClipIntersection),y.push(M.depthPacking)}function v(y,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),y.push(a.mask)}function x(y){const M=g[y.type];let P;if(M){const k=wi[M];P=Qf.clone(k.uniforms)}else P=y.uniforms;return P}function L(y,M){let P;for(let k=0,F=h.length;k<F;k++){const B=h[k];if(B.cacheKey===M){P=B,++P.usedTimes;break}}return P===void 0&&(P=new ey(s,M,y,r),h.push(P)),P}function R(y){if(--y.usedTimes===0){const M=h.indexOf(y);h[M]=h[h.length-1],h.pop(),y.destroy()}}function C(y){c.remove(y)}function b(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:L,releaseProgram:R,releaseShaderCache:C,programs:h,dispose:b}}function ry(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,c){s.get(o)[a]=c}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function oy(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Id(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Ld(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(u,d,f,g,_,m){let p=s[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},s[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),e++,p}function a(u,d,f,g,_,m){const p=o(u,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function c(u,d,f,g,_,m){const p=o(u,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function l(u,d){t.length>1&&t.sort(u||oy),n.length>1&&n.sort(d||Id),i.length>1&&i.sort(d||Id)}function h(){for(let u=e,d=s.length;u<d;u++){const f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:h,sort:l}}function ay(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new Ld,s.set(n,[o])):i>=r.length?(o=new Ld,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function cy(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new A,color:new ze};break;case"SpotLight":t={position:new A,direction:new A,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new A,color:new ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new A,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":t={color:new ze,position:new A,halfWidth:new A,halfHeight:new A};break}return s[e.id]=t,t}}}function ly(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let hy=0;function uy(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function dy(s){const e=new cy,t=ly(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new A);const i=new A,r=new je,o=new je;function a(l){let h=0,u=0,d=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,w=0,v=0,x=0,L=0,R=0,C=0;l.sort(uy);for(let y=0,M=l.length;y<M;y++){const P=l[y],k=P.color,F=P.intensity,B=P.distance,W=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=k.r*F,u+=k.g*F,d+=k.b*F;else if(P.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(P.sh.coefficients[z],F);C++}else if(P.isDirectionalLight){const z=e.get(P);if(z.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const K=P.shadow,H=t.get(P);H.shadowIntensity=K.intensity,H.shadowBias=K.bias,H.shadowNormalBias=K.normalBias,H.shadowRadius=K.radius,H.shadowMapSize=K.mapSize,n.directionalShadow[f]=H,n.directionalShadowMap[f]=W,n.directionalShadowMatrix[f]=P.shadow.matrix,w++}n.directional[f]=z,f++}else if(P.isSpotLight){const z=e.get(P);z.position.setFromMatrixPosition(P.matrixWorld),z.color.copy(k).multiplyScalar(F),z.distance=B,z.coneCos=Math.cos(P.angle),z.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),z.decay=P.decay,n.spot[_]=z;const K=P.shadow;if(P.map&&(n.spotLightMap[L]=P.map,L++,K.updateMatrices(P),P.castShadow&&R++),n.spotLightMatrix[_]=K.matrix,P.castShadow){const H=t.get(P);H.shadowIntensity=K.intensity,H.shadowBias=K.bias,H.shadowNormalBias=K.normalBias,H.shadowRadius=K.radius,H.shadowMapSize=K.mapSize,n.spotShadow[_]=H,n.spotShadowMap[_]=W,x++}_++}else if(P.isRectAreaLight){const z=e.get(P);z.color.copy(k).multiplyScalar(F),z.halfWidth.set(P.width*.5,0,0),z.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=z,m++}else if(P.isPointLight){const z=e.get(P);if(z.color.copy(P.color).multiplyScalar(P.intensity),z.distance=P.distance,z.decay=P.decay,P.castShadow){const K=P.shadow,H=t.get(P);H.shadowIntensity=K.intensity,H.shadowBias=K.bias,H.shadowNormalBias=K.normalBias,H.shadowRadius=K.radius,H.shadowMapSize=K.mapSize,H.shadowCameraNear=K.camera.near,H.shadowCameraFar=K.camera.far,n.pointShadow[g]=H,n.pointShadowMap[g]=W,n.pointShadowMatrix[g]=P.shadow.matrix,v++}n.point[g]=z,g++}else if(P.isHemisphereLight){const z=e.get(P);z.skyColor.copy(P.color).multiplyScalar(F),z.groundColor.copy(P.groundColor).multiplyScalar(F),n.hemi[p]=z,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=fe.LTC_FLOAT_1,n.rectAreaLTC2=fe.LTC_FLOAT_2):(n.rectAreaLTC1=fe.LTC_HALF_1,n.rectAreaLTC2=fe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const b=n.hash;(b.directionalLength!==f||b.pointLength!==g||b.spotLength!==_||b.rectAreaLength!==m||b.hemiLength!==p||b.numDirectionalShadows!==w||b.numPointShadows!==v||b.numSpotShadows!==x||b.numSpotMaps!==L||b.numLightProbes!==C)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=x+L-R,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=C,b.directionalLength=f,b.pointLength=g,b.spotLength=_,b.rectAreaLength=m,b.hemiLength=p,b.numDirectionalShadows=w,b.numPointShadows=v,b.numSpotShadows=x,b.numSpotMaps=L,b.numLightProbes=C,n.version=hy++)}function c(l,h){let u=0,d=0,f=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,w=l.length;p<w;p++){const v=l[p];if(v.isDirectionalLight){const x=n.directional[u];x.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),u++}else if(v.isSpotLight){const x=n.spot[f];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),f++}else if(v.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(v.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(v.width*.5,0,0),x.halfHeight.set(0,v.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){const x=n.point[d];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),d++}else if(v.isHemisphereLight){const x=n.hemi[_];x.direction.setFromMatrixPosition(v.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:n}}function Dd(s){const e=new dy(s),t=[],n=[];function i(h){l.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function fy(s){let e=new WeakMap;function t(i,r=0){const o=e.get(i);let a;return o===void 0?(a=new Dd(s),e.set(i,[a])):r>=o.length?(a=new Dd(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class py extends ui{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=$m,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class my extends ui{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const gy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_y=`uniform sampler2D shadow_pass;
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
}`;function xy(s,e,t){let n=new tu;const i=new re,r=new re,o=new pt,a=new py({depthPacking:Zm}),c=new my,l={},h=t.maxTextureSize,u={[$i]:bn,[bn]:$i,[hn]:hn},d=new Ri({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new re},radius:{value:4}},vertexShader:gy,fragmentShader:_y}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new jt;g.setAttribute("position",new dn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new $(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Rf;let p=this.type;this.render=function(R,C,b){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const y=s.getRenderTarget(),M=s.getActiveCubeFace(),P=s.getActiveMipmapLevel(),k=s.state;k.setBlending(gs),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const F=p!==Hi&&this.type===Hi,B=p===Hi&&this.type!==Hi;for(let W=0,z=R.length;W<z;W++){const K=R[W],H=K.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);const ce=H.getFrameExtents();if(i.multiply(ce),r.copy(H.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/ce.x),i.x=r.x*ce.x,H.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/ce.y),i.y=r.y*ce.y,H.mapSize.y=r.y)),H.map===null||F===!0||B===!0){const me=this.type!==Hi?{minFilter:Tn,magFilter:Tn}:{};H.map!==null&&H.map.dispose(),H.map=new Fs(i.x,i.y,me),H.map.texture.name=K.name+".shadowMap",H.camera.updateProjectionMatrix()}s.setRenderTarget(H.map),s.clear();const pe=H.getViewportCount();for(let me=0;me<pe;me++){const Re=H.getViewport(me);o.set(r.x*Re.x,r.y*Re.y,r.x*Re.z,r.y*Re.w),k.viewport(o),H.updateMatrices(K,me),n=H.getFrustum(),x(C,b,H.camera,K,this.type)}H.isPointLightShadow!==!0&&this.type===Hi&&w(H,b),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(y,M,P)};function w(R,C){const b=e.update(_);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,f.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Fs(i.x,i.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,s.setRenderTarget(R.mapPass),s.clear(),s.renderBufferDirect(C,null,b,d,_,null),f.uniforms.shadow_pass.value=R.mapPass.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,s.setRenderTarget(R.map),s.clear(),s.renderBufferDirect(C,null,b,f,_,null)}function v(R,C,b,y){let M=null;const P=b.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(P!==void 0)M=P;else if(M=b.isPointLight===!0?c:a,s.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const k=M.uuid,F=C.uuid;let B=l[k];B===void 0&&(B={},l[k]=B);let W=B[F];W===void 0&&(W=M.clone(),B[F]=W,C.addEventListener("dispose",L)),M=W}if(M.visible=C.visible,M.wireframe=C.wireframe,y===Hi?M.side=C.shadowSide!==null?C.shadowSide:C.side:M.side=C.shadowSide!==null?C.shadowSide:u[C.side],M.alphaMap=C.alphaMap,M.alphaTest=C.alphaTest,M.map=C.map,M.clipShadows=C.clipShadows,M.clippingPlanes=C.clippingPlanes,M.clipIntersection=C.clipIntersection,M.displacementMap=C.displacementMap,M.displacementScale=C.displacementScale,M.displacementBias=C.displacementBias,M.wireframeLinewidth=C.wireframeLinewidth,M.linewidth=C.linewidth,b.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const k=s.properties.get(M);k.light=b}return M}function x(R,C,b,y,M){if(R.visible===!1)return;if(R.layers.test(C.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&M===Hi)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,R.matrixWorld);const F=e.update(R),B=R.material;if(Array.isArray(B)){const W=F.groups;for(let z=0,K=W.length;z<K;z++){const H=W[z],ce=B[H.materialIndex];if(ce&&ce.visible){const pe=v(R,ce,y,M);R.onBeforeShadow(s,R,C,b,F,pe,H),s.renderBufferDirect(b,null,F,pe,R,H),R.onAfterShadow(s,R,C,b,F,pe,H)}}}else if(B.visible){const W=v(R,B,y,M);R.onBeforeShadow(s,R,C,b,F,W,null),s.renderBufferDirect(b,null,F,W,R,null),R.onAfterShadow(s,R,C,b,F,W,null)}}const k=R.children;for(let F=0,B=k.length;F<B;F++)x(k[F],C,b,y,M)}function L(R){R.target.removeEventListener("dispose",L);for(const b in l){const y=l[b],M=R.target.uuid;M in y&&(y[M].dispose(),delete y[M])}}}const vy={[Ul]:Ol,[Fl]:zl,[kl]:Hl,[Mr]:Bl,[Ol]:Ul,[zl]:Fl,[Hl]:kl,[Bl]:Mr};function yy(s,e){function t(){let D=!1;const _e=new pt;let Y=null;const ne=new pt(0,0,0,0);return{setMask:function(we){Y!==we&&!D&&(s.colorMask(we,we,we,we),Y=we)},setLocked:function(we){D=we},setClear:function(we,ye,Ke,Vt,vn){vn===!0&&(we*=Vt,ye*=Vt,Ke*=Vt),_e.set(we,ye,Ke,Vt),ne.equals(_e)===!1&&(s.clearColor(we,ye,Ke,Vt),ne.copy(_e))},reset:function(){D=!1,Y=null,ne.set(-1,0,0,0)}}}function n(){let D=!1,_e=!1,Y=null,ne=null,we=null;return{setReversed:function(ye){if(_e!==ye){const Ke=e.get("EXT_clip_control");_e?Ke.clipControlEXT(Ke.LOWER_LEFT_EXT,Ke.ZERO_TO_ONE_EXT):Ke.clipControlEXT(Ke.LOWER_LEFT_EXT,Ke.NEGATIVE_ONE_TO_ONE_EXT);const Vt=we;we=null,this.setClear(Vt)}_e=ye},getReversed:function(){return _e},setTest:function(ye){ye?ae(s.DEPTH_TEST):Ie(s.DEPTH_TEST)},setMask:function(ye){Y!==ye&&!D&&(s.depthMask(ye),Y=ye)},setFunc:function(ye){if(_e&&(ye=vy[ye]),ne!==ye){switch(ye){case Ul:s.depthFunc(s.NEVER);break;case Ol:s.depthFunc(s.ALWAYS);break;case Fl:s.depthFunc(s.LESS);break;case Mr:s.depthFunc(s.LEQUAL);break;case kl:s.depthFunc(s.EQUAL);break;case Bl:s.depthFunc(s.GEQUAL);break;case zl:s.depthFunc(s.GREATER);break;case Hl:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ne=ye}},setLocked:function(ye){D=ye},setClear:function(ye){we!==ye&&(_e&&(ye=1-ye),s.clearDepth(ye),we=ye)},reset:function(){D=!1,Y=null,ne=null,we=null,_e=!1}}}function i(){let D=!1,_e=null,Y=null,ne=null,we=null,ye=null,Ke=null,Vt=null,vn=null;return{setTest:function(Mt){D||(Mt?ae(s.STENCIL_TEST):Ie(s.STENCIL_TEST))},setMask:function(Mt){_e!==Mt&&!D&&(s.stencilMask(Mt),_e=Mt)},setFunc:function(Mt,Qn,Di){(Y!==Mt||ne!==Qn||we!==Di)&&(s.stencilFunc(Mt,Qn,Di),Y=Mt,ne=Qn,we=Di)},setOp:function(Mt,Qn,Di){(ye!==Mt||Ke!==Qn||Vt!==Di)&&(s.stencilOp(Mt,Qn,Di),ye=Mt,Ke=Qn,Vt=Di)},setLocked:function(Mt){D=Mt},setClear:function(Mt){vn!==Mt&&(s.clearStencil(Mt),vn=Mt)},reset:function(){D=!1,_e=null,Y=null,ne=null,we=null,ye=null,Ke=null,Vt=null,vn=null}}}const r=new t,o=new n,a=new i,c=new WeakMap,l=new WeakMap;let h={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,w=null,v=null,x=null,L=null,R=null,C=new ze(0,0,0),b=0,y=!1,M=null,P=null,k=null,F=null,B=null;const W=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,K=0;const H=s.getParameter(s.VERSION);H.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(H)[1]),z=K>=1):H.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),z=K>=2);let ce=null,pe={};const me=s.getParameter(s.SCISSOR_BOX),Re=s.getParameter(s.VIEWPORT),it=new pt().fromArray(me),j=new pt().fromArray(Re);function ie(D,_e,Y,ne){const we=new Uint8Array(4),ye=s.createTexture();s.bindTexture(D,ye),s.texParameteri(D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(D,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ke=0;Ke<Y;Ke++)D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY?s.texImage3D(_e,0,s.RGBA,1,1,ne,0,s.RGBA,s.UNSIGNED_BYTE,we):s.texImage2D(_e+Ke,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,we);return ye}const xe={};xe[s.TEXTURE_2D]=ie(s.TEXTURE_2D,s.TEXTURE_2D,1),xe[s.TEXTURE_CUBE_MAP]=ie(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),xe[s.TEXTURE_2D_ARRAY]=ie(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),xe[s.TEXTURE_3D]=ie(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ae(s.DEPTH_TEST),o.setFunc(Mr),te(!1),Se(ku),ae(s.CULL_FACE),I(gs);function ae(D){h[D]!==!0&&(s.enable(D),h[D]=!0)}function Ie(D){h[D]!==!1&&(s.disable(D),h[D]=!1)}function Ne(D,_e){return u[D]!==_e?(s.bindFramebuffer(D,_e),u[D]=_e,D===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=_e),D===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=_e),!0):!1}function He(D,_e){let Y=f,ne=!1;if(D){Y=d.get(_e),Y===void 0&&(Y=[],d.set(_e,Y));const we=D.textures;if(Y.length!==we.length||Y[0]!==s.COLOR_ATTACHMENT0){for(let ye=0,Ke=we.length;ye<Ke;ye++)Y[ye]=s.COLOR_ATTACHMENT0+ye;Y.length=we.length,ne=!0}}else Y[0]!==s.BACK&&(Y[0]=s.BACK,ne=!0);ne&&s.drawBuffers(Y)}function et(D){return g!==D?(s.useProgram(D),g=D,!0):!1}const Z={[Ps]:s.FUNC_ADD,[ym]:s.FUNC_SUBTRACT,[Mm]:s.FUNC_REVERSE_SUBTRACT};Z[Sm]=s.MIN,Z[wm]=s.MAX;const se={[bm]:s.ZERO,[Tm]:s.ONE,[Em]:s.SRC_COLOR,[Dl]:s.SRC_ALPHA,[Lm]:s.SRC_ALPHA_SATURATE,[Pm]:s.DST_COLOR,[Rm]:s.DST_ALPHA,[Am]:s.ONE_MINUS_SRC_COLOR,[Nl]:s.ONE_MINUS_SRC_ALPHA,[Im]:s.ONE_MINUS_DST_COLOR,[Cm]:s.ONE_MINUS_DST_ALPHA,[Dm]:s.CONSTANT_COLOR,[Nm]:s.ONE_MINUS_CONSTANT_COLOR,[Um]:s.CONSTANT_ALPHA,[Om]:s.ONE_MINUS_CONSTANT_ALPHA};function I(D,_e,Y,ne,we,ye,Ke,Vt,vn,Mt){if(D===gs){_===!0&&(Ie(s.BLEND),_=!1);return}if(_===!1&&(ae(s.BLEND),_=!0),D!==vm){if(D!==m||Mt!==y){if((p!==Ps||x!==Ps)&&(s.blendEquation(s.FUNC_ADD),p=Ps,x=Ps),Mt)switch(D){case pr:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Co:s.blendFunc(s.ONE,s.ONE);break;case Bu:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case zu:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case pr:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Co:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Bu:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case zu:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}w=null,v=null,L=null,R=null,C.set(0,0,0),b=0,m=D,y=Mt}return}we=we||_e,ye=ye||Y,Ke=Ke||ne,(_e!==p||we!==x)&&(s.blendEquationSeparate(Z[_e],Z[we]),p=_e,x=we),(Y!==w||ne!==v||ye!==L||Ke!==R)&&(s.blendFuncSeparate(se[Y],se[ne],se[ye],se[Ke]),w=Y,v=ne,L=ye,R=Ke),(Vt.equals(C)===!1||vn!==b)&&(s.blendColor(Vt.r,Vt.g,Vt.b,vn),C.copy(Vt),b=vn),m=D,y=!1}function be(D,_e){D.side===hn?Ie(s.CULL_FACE):ae(s.CULL_FACE);let Y=D.side===bn;_e&&(Y=!Y),te(Y),D.blending===pr&&D.transparent===!1?I(gs):I(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),r.setMask(D.colorWrite);const ne=D.stencilWrite;a.setTest(ne),ne&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),ve(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ae(s.SAMPLE_ALPHA_TO_COVERAGE):Ie(s.SAMPLE_ALPHA_TO_COVERAGE)}function te(D){M!==D&&(D?s.frontFace(s.CW):s.frontFace(s.CCW),M=D)}function Se(D){D!==_m?(ae(s.CULL_FACE),D!==P&&(D===ku?s.cullFace(s.BACK):D===xm?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ie(s.CULL_FACE),P=D}function J(D){D!==k&&(z&&s.lineWidth(D),k=D)}function ve(D,_e,Y){D?(ae(s.POLYGON_OFFSET_FILL),(F!==_e||B!==Y)&&(s.polygonOffset(_e,Y),F=_e,B=Y)):Ie(s.POLYGON_OFFSET_FILL)}function le(D){D?ae(s.SCISSOR_TEST):Ie(s.SCISSOR_TEST)}function T(D){D===void 0&&(D=s.TEXTURE0+W-1),ce!==D&&(s.activeTexture(D),ce=D)}function S(D,_e,Y){Y===void 0&&(ce===null?Y=s.TEXTURE0+W-1:Y=ce);let ne=pe[Y];ne===void 0&&(ne={type:void 0,texture:void 0},pe[Y]=ne),(ne.type!==D||ne.texture!==_e)&&(ce!==Y&&(s.activeTexture(Y),ce=Y),s.bindTexture(D,_e||xe[D]),ne.type=D,ne.texture=_e)}function N(){const D=pe[ce];D!==void 0&&D.type!==void 0&&(s.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function X(){try{s.compressedTexImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Q(){try{s.compressedTexImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function q(){try{s.texSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ae(){try{s.texSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ue(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ee(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ot(){try{s.texStorage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function oe(){try{s.texStorage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ce(){try{s.texImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ge(){try{s.texImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function We(D){it.equals(D)===!1&&(s.scissor(D.x,D.y,D.z,D.w),it.copy(D))}function Pe(D){j.equals(D)===!1&&(s.viewport(D.x,D.y,D.z,D.w),j.copy(D))}function ut(D,_e){let Y=l.get(_e);Y===void 0&&(Y=new WeakMap,l.set(_e,Y));let ne=Y.get(D);ne===void 0&&(ne=s.getUniformBlockIndex(_e,D.name),Y.set(D,ne))}function tt(D,_e){const ne=l.get(_e).get(D);c.get(_e)!==ne&&(s.uniformBlockBinding(_e,ne,D.__bindingPointIndex),c.set(_e,ne))}function Ct(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},ce=null,pe={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,w=null,v=null,x=null,L=null,R=null,C=new ze(0,0,0),b=0,y=!1,M=null,P=null,k=null,F=null,B=null,it.set(0,0,s.canvas.width,s.canvas.height),j.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ae,disable:Ie,bindFramebuffer:Ne,drawBuffers:He,useProgram:et,setBlending:I,setMaterial:be,setFlipSided:te,setCullFace:Se,setLineWidth:J,setPolygonOffset:ve,setScissorTest:le,activeTexture:T,bindTexture:S,unbindTexture:N,compressedTexImage2D:X,compressedTexImage3D:Q,texImage2D:Ce,texImage3D:Ge,updateUBOMapping:ut,uniformBlockBinding:tt,texStorage2D:ot,texStorage3D:oe,texSubImage2D:q,texSubImage3D:Ae,compressedTexSubImage2D:ue,compressedTexSubImage3D:Ee,scissor:We,viewport:Pe,reset:Ct}}function Nd(s,e,t,n){const i=My(n);switch(t){case Ff:return s*e;case Bf:return s*e;case zf:return s*e*2;case Yh:return s*e/i.components*i.byteLength;case jh:return s*e/i.components*i.byteLength;case Hf:return s*e*2/i.components*i.byteLength;case Kh:return s*e*2/i.components*i.byteLength;case kf:return s*e*3/i.components*i.byteLength;case qn:return s*e*4/i.components*i.byteLength;case $h:return s*e*4/i.components*i.byteLength;case ka:case Ba:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case za:case Ha:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Xl:case Yl:return Math.max(s,16)*Math.max(e,8)/4;case Wl:case ql:return Math.max(s,8)*Math.max(e,8)/2;case jl:case Kl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case $l:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Zl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Jl:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Ql:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case eh:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case th:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case nh:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case ih:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case sh:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case rh:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case oh:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case ah:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case ch:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case lh:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case hh:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Va:case uh:case dh:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Vf:case fh:return Math.ceil(s/4)*Math.ceil(e/4)*8;case ph:case mh:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function My(s){switch(s){case Zi:case Nf:return{byteLength:1,components:1};case Po:case Uf:case Yo:return{byteLength:2,components:1};case Xh:case qh:return{byteLength:2,components:4};case Os:case Wh:case li:return{byteLength:4,components:1};case Of:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function Sy(s,e,t,n,i,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new re,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,S){return f?new OffscreenCanvas(T,S):Do("canvas")}function _(T,S,N){let X=1;const Q=le(T);if((Q.width>N||Q.height>N)&&(X=N/Math.max(Q.width,Q.height)),X<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const q=Math.floor(X*Q.width),Ae=Math.floor(X*Q.height);u===void 0&&(u=g(q,Ae));const ue=S?g(q,Ae):u;return ue.width=q,ue.height=Ae,ue.getContext("2d").drawImage(T,0,0,q,Ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+q+"x"+Ae+")."),ue}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),T;return T}function m(T){return T.generateMipmaps}function p(T){s.generateMipmap(T)}function w(T){return T.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?s.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function v(T,S,N,X,Q=!1){if(T!==null){if(s[T]!==void 0)return s[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let q=S;if(S===s.RED&&(N===s.FLOAT&&(q=s.R32F),N===s.HALF_FLOAT&&(q=s.R16F),N===s.UNSIGNED_BYTE&&(q=s.R8)),S===s.RED_INTEGER&&(N===s.UNSIGNED_BYTE&&(q=s.R8UI),N===s.UNSIGNED_SHORT&&(q=s.R16UI),N===s.UNSIGNED_INT&&(q=s.R32UI),N===s.BYTE&&(q=s.R8I),N===s.SHORT&&(q=s.R16I),N===s.INT&&(q=s.R32I)),S===s.RG&&(N===s.FLOAT&&(q=s.RG32F),N===s.HALF_FLOAT&&(q=s.RG16F),N===s.UNSIGNED_BYTE&&(q=s.RG8)),S===s.RG_INTEGER&&(N===s.UNSIGNED_BYTE&&(q=s.RG8UI),N===s.UNSIGNED_SHORT&&(q=s.RG16UI),N===s.UNSIGNED_INT&&(q=s.RG32UI),N===s.BYTE&&(q=s.RG8I),N===s.SHORT&&(q=s.RG16I),N===s.INT&&(q=s.RG32I)),S===s.RGB_INTEGER&&(N===s.UNSIGNED_BYTE&&(q=s.RGB8UI),N===s.UNSIGNED_SHORT&&(q=s.RGB16UI),N===s.UNSIGNED_INT&&(q=s.RGB32UI),N===s.BYTE&&(q=s.RGB8I),N===s.SHORT&&(q=s.RGB16I),N===s.INT&&(q=s.RGB32I)),S===s.RGBA_INTEGER&&(N===s.UNSIGNED_BYTE&&(q=s.RGBA8UI),N===s.UNSIGNED_SHORT&&(q=s.RGBA16UI),N===s.UNSIGNED_INT&&(q=s.RGBA32UI),N===s.BYTE&&(q=s.RGBA8I),N===s.SHORT&&(q=s.RGBA16I),N===s.INT&&(q=s.RGBA32I)),S===s.RGB&&N===s.UNSIGNED_INT_5_9_9_9_REV&&(q=s.RGB9_E5),S===s.RGBA){const Ae=Q?_c:lt.getTransfer(X);N===s.FLOAT&&(q=s.RGBA32F),N===s.HALF_FLOAT&&(q=s.RGBA16F),N===s.UNSIGNED_BYTE&&(q=Ae===Et?s.SRGB8_ALPHA8:s.RGBA8),N===s.UNSIGNED_SHORT_4_4_4_4&&(q=s.RGBA4),N===s.UNSIGNED_SHORT_5_5_5_1&&(q=s.RGB5_A1)}return(q===s.R16F||q===s.R32F||q===s.RG16F||q===s.RG32F||q===s.RGBA16F||q===s.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function x(T,S){let N;return T?S===null||S===Os||S===br?N=s.DEPTH24_STENCIL8:S===li?N=s.DEPTH32F_STENCIL8:S===Po&&(N=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Os||S===br?N=s.DEPTH_COMPONENT24:S===li?N=s.DEPTH_COMPONENT32F:S===Po&&(N=s.DEPTH_COMPONENT16),N}function L(T,S){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==Tn&&T.minFilter!==kn?Math.log2(Math.max(S.width,S.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?S.mipmaps.length:1}function R(T){const S=T.target;S.removeEventListener("dispose",R),b(S),S.isVideoTexture&&h.delete(S)}function C(T){const S=T.target;S.removeEventListener("dispose",C),M(S)}function b(T){const S=n.get(T);if(S.__webglInit===void 0)return;const N=T.source,X=d.get(N);if(X){const Q=X[S.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&y(T),Object.keys(X).length===0&&d.delete(N)}n.remove(T)}function y(T){const S=n.get(T);s.deleteTexture(S.__webglTexture);const N=T.source,X=d.get(N);delete X[S.__cacheKey],o.memory.textures--}function M(T){const S=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(S.__webglFramebuffer[X]))for(let Q=0;Q<S.__webglFramebuffer[X].length;Q++)s.deleteFramebuffer(S.__webglFramebuffer[X][Q]);else s.deleteFramebuffer(S.__webglFramebuffer[X]);S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer[X])}else{if(Array.isArray(S.__webglFramebuffer))for(let X=0;X<S.__webglFramebuffer.length;X++)s.deleteFramebuffer(S.__webglFramebuffer[X]);else s.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&s.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let X=0;X<S.__webglColorRenderbuffer.length;X++)S.__webglColorRenderbuffer[X]&&s.deleteRenderbuffer(S.__webglColorRenderbuffer[X]);S.__webglDepthRenderbuffer&&s.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const N=T.textures;for(let X=0,Q=N.length;X<Q;X++){const q=n.get(N[X]);q.__webglTexture&&(s.deleteTexture(q.__webglTexture),o.memory.textures--),n.remove(N[X])}n.remove(T)}let P=0;function k(){P=0}function F(){const T=P;return T>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+i.maxTextures),P+=1,T}function B(T){const S=[];return S.push(T.wrapS),S.push(T.wrapT),S.push(T.wrapR||0),S.push(T.magFilter),S.push(T.minFilter),S.push(T.anisotropy),S.push(T.internalFormat),S.push(T.format),S.push(T.type),S.push(T.generateMipmaps),S.push(T.premultiplyAlpha),S.push(T.flipY),S.push(T.unpackAlignment),S.push(T.colorSpace),S.join()}function W(T,S){const N=n.get(T);if(T.isVideoTexture&&J(T),T.isRenderTargetTexture===!1&&T.version>0&&N.__version!==T.version){const X=T.image;if(X===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(N,T,S);return}}t.bindTexture(s.TEXTURE_2D,N.__webglTexture,s.TEXTURE0+S)}function z(T,S){const N=n.get(T);if(T.version>0&&N.__version!==T.version){j(N,T,S);return}t.bindTexture(s.TEXTURE_2D_ARRAY,N.__webglTexture,s.TEXTURE0+S)}function K(T,S){const N=n.get(T);if(T.version>0&&N.__version!==T.version){j(N,T,S);return}t.bindTexture(s.TEXTURE_3D,N.__webglTexture,s.TEXTURE0+S)}function H(T,S){const N=n.get(T);if(T.version>0&&N.__version!==T.version){ie(N,T,S);return}t.bindTexture(s.TEXTURE_CUBE_MAP,N.__webglTexture,s.TEXTURE0+S)}const ce={[Us]:s.REPEAT,[Ti]:s.CLAMP_TO_EDGE,[ec]:s.MIRRORED_REPEAT},pe={[Tn]:s.NEAREST,[Df]:s.NEAREST_MIPMAP_NEAREST,[co]:s.NEAREST_MIPMAP_LINEAR,[kn]:s.LINEAR,[Fa]:s.LINEAR_MIPMAP_NEAREST,[Xi]:s.LINEAR_MIPMAP_LINEAR},me={[Qm]:s.NEVER,[r0]:s.ALWAYS,[e0]:s.LESS,[Xf]:s.LEQUAL,[t0]:s.EQUAL,[s0]:s.GEQUAL,[n0]:s.GREATER,[i0]:s.NOTEQUAL};function Re(T,S){if(S.type===li&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===kn||S.magFilter===Fa||S.magFilter===co||S.magFilter===Xi||S.minFilter===kn||S.minFilter===Fa||S.minFilter===co||S.minFilter===Xi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(T,s.TEXTURE_WRAP_S,ce[S.wrapS]),s.texParameteri(T,s.TEXTURE_WRAP_T,ce[S.wrapT]),(T===s.TEXTURE_3D||T===s.TEXTURE_2D_ARRAY)&&s.texParameteri(T,s.TEXTURE_WRAP_R,ce[S.wrapR]),s.texParameteri(T,s.TEXTURE_MAG_FILTER,pe[S.magFilter]),s.texParameteri(T,s.TEXTURE_MIN_FILTER,pe[S.minFilter]),S.compareFunction&&(s.texParameteri(T,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(T,s.TEXTURE_COMPARE_FUNC,me[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Tn||S.minFilter!==co&&S.minFilter!==Xi||S.type===li&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const N=e.get("EXT_texture_filter_anisotropic");s.texParameterf(T,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function it(T,S){let N=!1;T.__webglInit===void 0&&(T.__webglInit=!0,S.addEventListener("dispose",R));const X=S.source;let Q=d.get(X);Q===void 0&&(Q={},d.set(X,Q));const q=B(S);if(q!==T.__cacheKey){Q[q]===void 0&&(Q[q]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,N=!0),Q[q].usedTimes++;const Ae=Q[T.__cacheKey];Ae!==void 0&&(Q[T.__cacheKey].usedTimes--,Ae.usedTimes===0&&y(S)),T.__cacheKey=q,T.__webglTexture=Q[q].texture}return N}function j(T,S,N){let X=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(X=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(X=s.TEXTURE_3D);const Q=it(T,S),q=S.source;t.bindTexture(X,T.__webglTexture,s.TEXTURE0+N);const Ae=n.get(q);if(q.version!==Ae.__version||Q===!0){t.activeTexture(s.TEXTURE0+N);const ue=lt.getPrimaries(lt.workingColorSpace),Ee=S.colorSpace===ps?null:lt.getPrimaries(S.colorSpace),ot=S.colorSpace===ps||ue===Ee?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ot);let oe=_(S.image,!1,i.maxTextureSize);oe=ve(S,oe);const Ce=r.convert(S.format,S.colorSpace),Ge=r.convert(S.type);let We=v(S.internalFormat,Ce,Ge,S.colorSpace,S.isVideoTexture);Re(X,S);let Pe;const ut=S.mipmaps,tt=S.isVideoTexture!==!0,Ct=Ae.__version===void 0||Q===!0,D=q.dataReady,_e=L(S,oe);if(S.isDepthTexture)We=x(S.format===Tr,S.type),Ct&&(tt?t.texStorage2D(s.TEXTURE_2D,1,We,oe.width,oe.height):t.texImage2D(s.TEXTURE_2D,0,We,oe.width,oe.height,0,Ce,Ge,null));else if(S.isDataTexture)if(ut.length>0){tt&&Ct&&t.texStorage2D(s.TEXTURE_2D,_e,We,ut[0].width,ut[0].height);for(let Y=0,ne=ut.length;Y<ne;Y++)Pe=ut[Y],tt?D&&t.texSubImage2D(s.TEXTURE_2D,Y,0,0,Pe.width,Pe.height,Ce,Ge,Pe.data):t.texImage2D(s.TEXTURE_2D,Y,We,Pe.width,Pe.height,0,Ce,Ge,Pe.data);S.generateMipmaps=!1}else tt?(Ct&&t.texStorage2D(s.TEXTURE_2D,_e,We,oe.width,oe.height),D&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,oe.width,oe.height,Ce,Ge,oe.data)):t.texImage2D(s.TEXTURE_2D,0,We,oe.width,oe.height,0,Ce,Ge,oe.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){tt&&Ct&&t.texStorage3D(s.TEXTURE_2D_ARRAY,_e,We,ut[0].width,ut[0].height,oe.depth);for(let Y=0,ne=ut.length;Y<ne;Y++)if(Pe=ut[Y],S.format!==qn)if(Ce!==null)if(tt){if(D)if(S.layerUpdates.size>0){const we=Nd(Pe.width,Pe.height,S.format,S.type);for(const ye of S.layerUpdates){const Ke=Pe.data.subarray(ye*we/Pe.data.BYTES_PER_ELEMENT,(ye+1)*we/Pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,ye,Pe.width,Pe.height,1,Ce,Ke)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,0,Pe.width,Pe.height,oe.depth,Ce,Pe.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Y,We,Pe.width,Pe.height,oe.depth,0,Pe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else tt?D&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,0,Pe.width,Pe.height,oe.depth,Ce,Ge,Pe.data):t.texImage3D(s.TEXTURE_2D_ARRAY,Y,We,Pe.width,Pe.height,oe.depth,0,Ce,Ge,Pe.data)}else{tt&&Ct&&t.texStorage2D(s.TEXTURE_2D,_e,We,ut[0].width,ut[0].height);for(let Y=0,ne=ut.length;Y<ne;Y++)Pe=ut[Y],S.format!==qn?Ce!==null?tt?D&&t.compressedTexSubImage2D(s.TEXTURE_2D,Y,0,0,Pe.width,Pe.height,Ce,Pe.data):t.compressedTexImage2D(s.TEXTURE_2D,Y,We,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):tt?D&&t.texSubImage2D(s.TEXTURE_2D,Y,0,0,Pe.width,Pe.height,Ce,Ge,Pe.data):t.texImage2D(s.TEXTURE_2D,Y,We,Pe.width,Pe.height,0,Ce,Ge,Pe.data)}else if(S.isDataArrayTexture)if(tt){if(Ct&&t.texStorage3D(s.TEXTURE_2D_ARRAY,_e,We,oe.width,oe.height,oe.depth),D)if(S.layerUpdates.size>0){const Y=Nd(oe.width,oe.height,S.format,S.type);for(const ne of S.layerUpdates){const we=oe.data.subarray(ne*Y/oe.data.BYTES_PER_ELEMENT,(ne+1)*Y/oe.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ne,oe.width,oe.height,1,Ce,Ge,we)}S.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,Ce,Ge,oe.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,We,oe.width,oe.height,oe.depth,0,Ce,Ge,oe.data);else if(S.isData3DTexture)tt?(Ct&&t.texStorage3D(s.TEXTURE_3D,_e,We,oe.width,oe.height,oe.depth),D&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,Ce,Ge,oe.data)):t.texImage3D(s.TEXTURE_3D,0,We,oe.width,oe.height,oe.depth,0,Ce,Ge,oe.data);else if(S.isFramebufferTexture){if(Ct)if(tt)t.texStorage2D(s.TEXTURE_2D,_e,We,oe.width,oe.height);else{let Y=oe.width,ne=oe.height;for(let we=0;we<_e;we++)t.texImage2D(s.TEXTURE_2D,we,We,Y,ne,0,Ce,Ge,null),Y>>=1,ne>>=1}}else if(ut.length>0){if(tt&&Ct){const Y=le(ut[0]);t.texStorage2D(s.TEXTURE_2D,_e,We,Y.width,Y.height)}for(let Y=0,ne=ut.length;Y<ne;Y++)Pe=ut[Y],tt?D&&t.texSubImage2D(s.TEXTURE_2D,Y,0,0,Ce,Ge,Pe):t.texImage2D(s.TEXTURE_2D,Y,We,Ce,Ge,Pe);S.generateMipmaps=!1}else if(tt){if(Ct){const Y=le(oe);t.texStorage2D(s.TEXTURE_2D,_e,We,Y.width,Y.height)}D&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ce,Ge,oe)}else t.texImage2D(s.TEXTURE_2D,0,We,Ce,Ge,oe);m(S)&&p(X),Ae.__version=q.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function ie(T,S,N){if(S.image.length!==6)return;const X=it(T,S),Q=S.source;t.bindTexture(s.TEXTURE_CUBE_MAP,T.__webglTexture,s.TEXTURE0+N);const q=n.get(Q);if(Q.version!==q.__version||X===!0){t.activeTexture(s.TEXTURE0+N);const Ae=lt.getPrimaries(lt.workingColorSpace),ue=S.colorSpace===ps?null:lt.getPrimaries(S.colorSpace),Ee=S.colorSpace===ps||Ae===ue?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);const ot=S.isCompressedTexture||S.image[0].isCompressedTexture,oe=S.image[0]&&S.image[0].isDataTexture,Ce=[];for(let ne=0;ne<6;ne++)!ot&&!oe?Ce[ne]=_(S.image[ne],!0,i.maxCubemapSize):Ce[ne]=oe?S.image[ne].image:S.image[ne],Ce[ne]=ve(S,Ce[ne]);const Ge=Ce[0],We=r.convert(S.format,S.colorSpace),Pe=r.convert(S.type),ut=v(S.internalFormat,We,Pe,S.colorSpace),tt=S.isVideoTexture!==!0,Ct=q.__version===void 0||X===!0,D=Q.dataReady;let _e=L(S,Ge);Re(s.TEXTURE_CUBE_MAP,S);let Y;if(ot){tt&&Ct&&t.texStorage2D(s.TEXTURE_CUBE_MAP,_e,ut,Ge.width,Ge.height);for(let ne=0;ne<6;ne++){Y=Ce[ne].mipmaps;for(let we=0;we<Y.length;we++){const ye=Y[we];S.format!==qn?We!==null?tt?D&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,we,0,0,ye.width,ye.height,We,ye.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,we,ut,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):tt?D&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,we,0,0,ye.width,ye.height,We,Pe,ye.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,we,ut,ye.width,ye.height,0,We,Pe,ye.data)}}}else{if(Y=S.mipmaps,tt&&Ct){Y.length>0&&_e++;const ne=le(Ce[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,_e,ut,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(oe){tt?D&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Ce[ne].width,Ce[ne].height,We,Pe,Ce[ne].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,ut,Ce[ne].width,Ce[ne].height,0,We,Pe,Ce[ne].data);for(let we=0;we<Y.length;we++){const Ke=Y[we].image[ne].image;tt?D&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,we+1,0,0,Ke.width,Ke.height,We,Pe,Ke.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,we+1,ut,Ke.width,Ke.height,0,We,Pe,Ke.data)}}else{tt?D&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,We,Pe,Ce[ne]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,ut,We,Pe,Ce[ne]);for(let we=0;we<Y.length;we++){const ye=Y[we];tt?D&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,we+1,0,0,We,Pe,ye.image[ne]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,we+1,ut,We,Pe,ye.image[ne])}}}m(S)&&p(s.TEXTURE_CUBE_MAP),q.__version=Q.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function xe(T,S,N,X,Q,q){const Ae=r.convert(N.format,N.colorSpace),ue=r.convert(N.type),Ee=v(N.internalFormat,Ae,ue,N.colorSpace),ot=n.get(S),oe=n.get(N);if(oe.__renderTarget=S,!ot.__hasExternalTextures){const Ce=Math.max(1,S.width>>q),Ge=Math.max(1,S.height>>q);Q===s.TEXTURE_3D||Q===s.TEXTURE_2D_ARRAY?t.texImage3D(Q,q,Ee,Ce,Ge,S.depth,0,Ae,ue,null):t.texImage2D(Q,q,Ee,Ce,Ge,0,Ae,ue,null)}t.bindFramebuffer(s.FRAMEBUFFER,T),Se(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,X,Q,oe.__webglTexture,0,te(S)):(Q===s.TEXTURE_2D||Q>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,X,Q,oe.__webglTexture,q),t.bindFramebuffer(s.FRAMEBUFFER,null)}function ae(T,S,N){if(s.bindRenderbuffer(s.RENDERBUFFER,T),S.depthBuffer){const X=S.depthTexture,Q=X&&X.isDepthTexture?X.type:null,q=x(S.stencilBuffer,Q),Ae=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ue=te(S);Se(S)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ue,q,S.width,S.height):N?s.renderbufferStorageMultisample(s.RENDERBUFFER,ue,q,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,q,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ae,s.RENDERBUFFER,T)}else{const X=S.textures;for(let Q=0;Q<X.length;Q++){const q=X[Q],Ae=r.convert(q.format,q.colorSpace),ue=r.convert(q.type),Ee=v(q.internalFormat,Ae,ue,q.colorSpace),ot=te(S);N&&Se(S)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ot,Ee,S.width,S.height):Se(S)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ot,Ee,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,Ee,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ie(T,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,T),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const X=n.get(S.depthTexture);X.__renderTarget=S,(!X.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),W(S.depthTexture,0);const Q=X.__webglTexture,q=te(S);if(S.depthTexture.format===mr)Se(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Q,0,q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Q,0);else if(S.depthTexture.format===Tr)Se(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Q,0,q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Ne(T){const S=n.get(T),N=T.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==T.depthTexture){const X=T.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),X){const Q=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,X.removeEventListener("dispose",Q)};X.addEventListener("dispose",Q),S.__depthDisposeCallback=Q}S.__boundDepthTexture=X}if(T.depthTexture&&!S.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");Ie(S.__webglFramebuffer,T)}else if(N){S.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[X]),S.__webglDepthbuffer[X]===void 0)S.__webglDepthbuffer[X]=s.createRenderbuffer(),ae(S.__webglDepthbuffer[X],T,!1);else{const Q=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,q=S.__webglDepthbuffer[X];s.bindRenderbuffer(s.RENDERBUFFER,q),s.framebufferRenderbuffer(s.FRAMEBUFFER,Q,s.RENDERBUFFER,q)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=s.createRenderbuffer(),ae(S.__webglDepthbuffer,T,!1);else{const X=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Q=S.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Q),s.framebufferRenderbuffer(s.FRAMEBUFFER,X,s.RENDERBUFFER,Q)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function He(T,S,N){const X=n.get(T);S!==void 0&&xe(X.__webglFramebuffer,T,T.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),N!==void 0&&Ne(T)}function et(T){const S=T.texture,N=n.get(T),X=n.get(S);T.addEventListener("dispose",C);const Q=T.textures,q=T.isWebGLCubeRenderTarget===!0,Ae=Q.length>1;if(Ae||(X.__webglTexture===void 0&&(X.__webglTexture=s.createTexture()),X.__version=S.version,o.memory.textures++),q){N.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(S.mipmaps&&S.mipmaps.length>0){N.__webglFramebuffer[ue]=[];for(let Ee=0;Ee<S.mipmaps.length;Ee++)N.__webglFramebuffer[ue][Ee]=s.createFramebuffer()}else N.__webglFramebuffer[ue]=s.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){N.__webglFramebuffer=[];for(let ue=0;ue<S.mipmaps.length;ue++)N.__webglFramebuffer[ue]=s.createFramebuffer()}else N.__webglFramebuffer=s.createFramebuffer();if(Ae)for(let ue=0,Ee=Q.length;ue<Ee;ue++){const ot=n.get(Q[ue]);ot.__webglTexture===void 0&&(ot.__webglTexture=s.createTexture(),o.memory.textures++)}if(T.samples>0&&Se(T)===!1){N.__webglMultisampledFramebuffer=s.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let ue=0;ue<Q.length;ue++){const Ee=Q[ue];N.__webglColorRenderbuffer[ue]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,N.__webglColorRenderbuffer[ue]);const ot=r.convert(Ee.format,Ee.colorSpace),oe=r.convert(Ee.type),Ce=v(Ee.internalFormat,ot,oe,Ee.colorSpace,T.isXRRenderTarget===!0),Ge=te(T);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ge,Ce,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ue,s.RENDERBUFFER,N.__webglColorRenderbuffer[ue])}s.bindRenderbuffer(s.RENDERBUFFER,null),T.depthBuffer&&(N.__webglDepthRenderbuffer=s.createRenderbuffer(),ae(N.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(q){t.bindTexture(s.TEXTURE_CUBE_MAP,X.__webglTexture),Re(s.TEXTURE_CUBE_MAP,S);for(let ue=0;ue<6;ue++)if(S.mipmaps&&S.mipmaps.length>0)for(let Ee=0;Ee<S.mipmaps.length;Ee++)xe(N.__webglFramebuffer[ue][Ee],T,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ee);else xe(N.__webglFramebuffer[ue],T,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);m(S)&&p(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ae){for(let ue=0,Ee=Q.length;ue<Ee;ue++){const ot=Q[ue],oe=n.get(ot);t.bindTexture(s.TEXTURE_2D,oe.__webglTexture),Re(s.TEXTURE_2D,ot),xe(N.__webglFramebuffer,T,ot,s.COLOR_ATTACHMENT0+ue,s.TEXTURE_2D,0),m(ot)&&p(s.TEXTURE_2D)}t.unbindTexture()}else{let ue=s.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ue=T.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ue,X.__webglTexture),Re(ue,S),S.mipmaps&&S.mipmaps.length>0)for(let Ee=0;Ee<S.mipmaps.length;Ee++)xe(N.__webglFramebuffer[Ee],T,S,s.COLOR_ATTACHMENT0,ue,Ee);else xe(N.__webglFramebuffer,T,S,s.COLOR_ATTACHMENT0,ue,0);m(S)&&p(ue),t.unbindTexture()}T.depthBuffer&&Ne(T)}function Z(T){const S=T.textures;for(let N=0,X=S.length;N<X;N++){const Q=S[N];if(m(Q)){const q=w(T),Ae=n.get(Q).__webglTexture;t.bindTexture(q,Ae),p(q),t.unbindTexture()}}}const se=[],I=[];function be(T){if(T.samples>0){if(Se(T)===!1){const S=T.textures,N=T.width,X=T.height;let Q=s.COLOR_BUFFER_BIT;const q=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ae=n.get(T),ue=S.length>1;if(ue)for(let Ee=0;Ee<S.length;Ee++)t.bindFramebuffer(s.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ee,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Ae.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ee,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let Ee=0;Ee<S.length;Ee++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(Q|=s.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(Q|=s.STENCIL_BUFFER_BIT)),ue){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ae.__webglColorRenderbuffer[Ee]);const ot=n.get(S[Ee]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ot,0)}s.blitFramebuffer(0,0,N,X,0,0,N,X,Q,s.NEAREST),c===!0&&(se.length=0,I.length=0,se.push(s.COLOR_ATTACHMENT0+Ee),T.depthBuffer&&T.resolveDepthBuffer===!1&&(se.push(q),I.push(q),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,I)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,se))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ue)for(let Ee=0;Ee<S.length;Ee++){t.bindFramebuffer(s.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ee,s.RENDERBUFFER,Ae.__webglColorRenderbuffer[Ee]);const ot=n.get(S[Ee]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Ae.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ee,s.TEXTURE_2D,ot,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&c){const S=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[S])}}}function te(T){return Math.min(i.maxSamples,T.samples)}function Se(T){const S=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function J(T){const S=o.render.frame;h.get(T)!==S&&(h.set(T,S),T.update())}function ve(T,S){const N=T.colorSpace,X=T.format,Q=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||N!==In&&N!==ps&&(lt.getTransfer(N)===Et?(X!==qn||Q!==Zi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),S}function le(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(l.width=T.naturalWidth||T.width,l.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(l.width=T.displayWidth,l.height=T.displayHeight):(l.width=T.width,l.height=T.height),l}this.allocateTextureUnit=F,this.resetTextureUnits=k,this.setTexture2D=W,this.setTexture2DArray=z,this.setTexture3D=K,this.setTextureCube=H,this.rebindTextures=He,this.setupRenderTarget=et,this.updateRenderTargetMipmap=Z,this.updateMultisampleRenderTarget=be,this.setupDepthRenderbuffer=Ne,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=Se}function wy(s,e){function t(n,i=ps){let r;const o=lt.getTransfer(i);if(n===Zi)return s.UNSIGNED_BYTE;if(n===Xh)return s.UNSIGNED_SHORT_4_4_4_4;if(n===qh)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Of)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Nf)return s.BYTE;if(n===Uf)return s.SHORT;if(n===Po)return s.UNSIGNED_SHORT;if(n===Wh)return s.INT;if(n===Os)return s.UNSIGNED_INT;if(n===li)return s.FLOAT;if(n===Yo)return s.HALF_FLOAT;if(n===Ff)return s.ALPHA;if(n===kf)return s.RGB;if(n===qn)return s.RGBA;if(n===Bf)return s.LUMINANCE;if(n===zf)return s.LUMINANCE_ALPHA;if(n===mr)return s.DEPTH_COMPONENT;if(n===Tr)return s.DEPTH_STENCIL;if(n===Yh)return s.RED;if(n===jh)return s.RED_INTEGER;if(n===Hf)return s.RG;if(n===Kh)return s.RG_INTEGER;if(n===$h)return s.RGBA_INTEGER;if(n===ka||n===Ba||n===za||n===Ha)if(o===Et)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ka)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ba)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===za)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ha)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ka)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ba)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===za)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ha)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Wl||n===Xl||n===ql||n===Yl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Wl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Xl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ql)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Yl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===jl||n===Kl||n===$l)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===jl||n===Kl)return o===Et?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===$l)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Zl||n===Jl||n===Ql||n===eh||n===th||n===nh||n===ih||n===sh||n===rh||n===oh||n===ah||n===ch||n===lh||n===hh)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Zl)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Jl)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ql)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===eh)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===th)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===nh)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ih)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===sh)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===rh)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===oh)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ah)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ch)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===lh)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===hh)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Va||n===uh||n===dh)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Va)return o===Et?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===uh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===dh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Vf||n===fh||n===ph||n===mh)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Va)return r.COMPRESSED_RED_RGTC1_EXT;if(n===fh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ph)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===mh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===br?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}class by extends Rn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Be extends Bt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ty={type:"move"};class dl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Be,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Be,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Be,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ty)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Be;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Ey=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ay=`
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

}`;class Ry{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new tn,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Ri({vertexShader:Ey,fragmentShader:Ay,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new $(new Zt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Cy extends Hs{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null;const _=new Ry,m=t.getContextAttributes();let p=null,w=null;const v=[],x=[],L=new re;let R=null;const C=new Rn;C.viewport=new pt;const b=new Rn;b.viewport=new pt;const y=[C,b],M=new by;let P=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ie=v[j];return ie===void 0&&(ie=new dl,v[j]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(j){let ie=v[j];return ie===void 0&&(ie=new dl,v[j]=ie),ie.getGripSpace()},this.getHand=function(j){let ie=v[j];return ie===void 0&&(ie=new dl,v[j]=ie),ie.getHandSpace()};function F(j){const ie=x.indexOf(j.inputSource);if(ie===-1)return;const xe=v[ie];xe!==void 0&&(xe.update(j.inputSource,j.frame,l||o),xe.dispatchEvent({type:j.type,data:j.inputSource}))}function B(){i.removeEventListener("select",F),i.removeEventListener("selectstart",F),i.removeEventListener("selectend",F),i.removeEventListener("squeeze",F),i.removeEventListener("squeezestart",F),i.removeEventListener("squeezeend",F),i.removeEventListener("end",B),i.removeEventListener("inputsourceschange",W);for(let j=0;j<v.length;j++){const ie=x[j];ie!==null&&(x[j]=null,v[j].disconnect(ie))}P=null,k=null,_.reset(),e.setRenderTarget(p),f=null,d=null,u=null,i=null,w=null,it.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(j){l=j},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(j){if(i=j,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",F),i.addEventListener("selectstart",F),i.addEventListener("selectend",F),i.addEventListener("squeeze",F),i.addEventListener("squeezestart",F),i.addEventListener("squeezeend",F),i.addEventListener("end",B),i.addEventListener("inputsourceschange",W),m.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(L),i.renderState.layers===void 0){const ie={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,ie),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),w=new Fs(f.framebufferWidth,f.framebufferHeight,{format:qn,type:Zi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ie=null,xe=null,ae=null;m.depth&&(ae=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=m.stencil?Tr:mr,xe=m.stencil?br:Os);const Ie={colorFormat:t.RGBA8,depthFormat:ae,scaleFactor:r};u=new XRWebGLBinding(i,t),d=u.createProjectionLayer(Ie),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),w=new Fs(d.textureWidth,d.textureHeight,{format:qn,type:Zi,depthTexture:new ip(d.textureWidth,d.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),it.setContext(i),it.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function W(j){for(let ie=0;ie<j.removed.length;ie++){const xe=j.removed[ie],ae=x.indexOf(xe);ae>=0&&(x[ae]=null,v[ae].disconnect(xe))}for(let ie=0;ie<j.added.length;ie++){const xe=j.added[ie];let ae=x.indexOf(xe);if(ae===-1){for(let Ne=0;Ne<v.length;Ne++)if(Ne>=x.length){x.push(xe),ae=Ne;break}else if(x[Ne]===null){x[Ne]=xe,ae=Ne;break}if(ae===-1)break}const Ie=v[ae];Ie&&Ie.connect(xe)}}const z=new A,K=new A;function H(j,ie,xe){z.setFromMatrixPosition(ie.matrixWorld),K.setFromMatrixPosition(xe.matrixWorld);const ae=z.distanceTo(K),Ie=ie.projectionMatrix.elements,Ne=xe.projectionMatrix.elements,He=Ie[14]/(Ie[10]-1),et=Ie[14]/(Ie[10]+1),Z=(Ie[9]+1)/Ie[5],se=(Ie[9]-1)/Ie[5],I=(Ie[8]-1)/Ie[0],be=(Ne[8]+1)/Ne[0],te=He*I,Se=He*be,J=ae/(-I+be),ve=J*-I;if(ie.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(ve),j.translateZ(J),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Ie[10]===-1)j.projectionMatrix.copy(ie.projectionMatrix),j.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const le=He+J,T=et+J,S=te-ve,N=Se+(ae-ve),X=Z*et/T*le,Q=se*et/T*le;j.projectionMatrix.makePerspective(S,N,X,Q,le,T),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function ce(j,ie){ie===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ie.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(i===null)return;let ie=j.near,xe=j.far;_.texture!==null&&(_.depthNear>0&&(ie=_.depthNear),_.depthFar>0&&(xe=_.depthFar)),M.near=b.near=C.near=ie,M.far=b.far=C.far=xe,(P!==M.near||k!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),P=M.near,k=M.far),C.layers.mask=j.layers.mask|2,b.layers.mask=j.layers.mask|4,M.layers.mask=C.layers.mask|b.layers.mask;const ae=j.parent,Ie=M.cameras;ce(M,ae);for(let Ne=0;Ne<Ie.length;Ne++)ce(Ie[Ne],ae);Ie.length===2?H(M,C,b):M.projectionMatrix.copy(C.projectionMatrix),pe(j,M,ae)};function pe(j,ie,xe){xe===null?j.matrix.copy(ie.matrixWorld):(j.matrix.copy(xe.matrixWorld),j.matrix.invert(),j.matrix.multiply(ie.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ie.projectionMatrix),j.projectionMatrixInverse.copy(ie.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Er*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(j){c=j,d!==null&&(d.fixedFoveation=j),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=j)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let me=null;function Re(j,ie){if(h=ie.getViewerPose(l||o),g=ie,h!==null){const xe=h.views;f!==null&&(e.setRenderTargetFramebuffer(w,f.framebuffer),e.setRenderTarget(w));let ae=!1;xe.length!==M.cameras.length&&(M.cameras.length=0,ae=!0);for(let Ne=0;Ne<xe.length;Ne++){const He=xe[Ne];let et=null;if(f!==null)et=f.getViewport(He);else{const se=u.getViewSubImage(d,He);et=se.viewport,Ne===0&&(e.setRenderTargetTextures(w,se.colorTexture,d.ignoreDepthValues?void 0:se.depthStencilTexture),e.setRenderTarget(w))}let Z=y[Ne];Z===void 0&&(Z=new Rn,Z.layers.enable(Ne),Z.viewport=new pt,y[Ne]=Z),Z.matrix.fromArray(He.transform.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.projectionMatrix.fromArray(He.projectionMatrix),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert(),Z.viewport.set(et.x,et.y,et.width,et.height),Ne===0&&(M.matrix.copy(Z.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ae===!0&&M.cameras.push(Z)}const Ie=i.enabledFeatures;if(Ie&&Ie.includes("depth-sensing")){const Ne=u.getDepthInformation(xe[0]);Ne&&Ne.isValid&&Ne.texture&&_.init(e,Ne,i.renderState)}}for(let xe=0;xe<v.length;xe++){const ae=x[xe],Ie=v[xe];ae!==null&&Ie!==void 0&&Ie.update(ae,ie,l||o)}me&&me(j,ie),ie.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ie}),g=null}const it=new np;it.setAnimationLoop(Re),this.setAnimationLoop=function(j){me=j},this.dispose=function(){}}}const Ts=new Ai,Py=new je;function Iy(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Jf(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,w,v,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,w,v):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===bn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===bn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const w=e.get(p),v=w.envMap,x=w.envMapRotation;v&&(m.envMap.value=v,Ts.copy(x),Ts.x*=-1,Ts.y*=-1,Ts.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Ts.y*=-1,Ts.z*=-1),m.envMapRotation.value.setFromMatrix4(Py.makeRotationFromEuler(Ts)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,w,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*w,m.scale.value=v*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,w){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===bn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const w=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Ly(s,e,t,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(w,v){const x=v.program;n.uniformBlockBinding(w,x)}function l(w,v){let x=i[w.id];x===void 0&&(g(w),x=h(w),i[w.id]=x,w.addEventListener("dispose",m));const L=v.program;n.updateUBOMapping(w,L);const R=e.render.frame;r[w.id]!==R&&(d(w),r[w.id]=R)}function h(w){const v=u();w.__bindingPointIndex=v;const x=s.createBuffer(),L=w.__size,R=w.usage;return s.bindBuffer(s.UNIFORM_BUFFER,x),s.bufferData(s.UNIFORM_BUFFER,L,R),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,v,x),x}function u(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(w){const v=i[w.id],x=w.uniforms,L=w.__cache;s.bindBuffer(s.UNIFORM_BUFFER,v);for(let R=0,C=x.length;R<C;R++){const b=Array.isArray(x[R])?x[R]:[x[R]];for(let y=0,M=b.length;y<M;y++){const P=b[y];if(f(P,R,y,L)===!0){const k=P.__offset,F=Array.isArray(P.value)?P.value:[P.value];let B=0;for(let W=0;W<F.length;W++){const z=F[W],K=_(z);typeof z=="number"||typeof z=="boolean"?(P.__data[0]=z,s.bufferSubData(s.UNIFORM_BUFFER,k+B,P.__data)):z.isMatrix3?(P.__data[0]=z.elements[0],P.__data[1]=z.elements[1],P.__data[2]=z.elements[2],P.__data[3]=0,P.__data[4]=z.elements[3],P.__data[5]=z.elements[4],P.__data[6]=z.elements[5],P.__data[7]=0,P.__data[8]=z.elements[6],P.__data[9]=z.elements[7],P.__data[10]=z.elements[8],P.__data[11]=0):(z.toArray(P.__data,B),B+=K.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,k,P.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(w,v,x,L){const R=w.value,C=v+"_"+x;if(L[C]===void 0)return typeof R=="number"||typeof R=="boolean"?L[C]=R:L[C]=R.clone(),!0;{const b=L[C];if(typeof R=="number"||typeof R=="boolean"){if(b!==R)return L[C]=R,!0}else if(b.equals(R)===!1)return b.copy(R),!0}return!1}function g(w){const v=w.uniforms;let x=0;const L=16;for(let C=0,b=v.length;C<b;C++){const y=Array.isArray(v[C])?v[C]:[v[C]];for(let M=0,P=y.length;M<P;M++){const k=y[M],F=Array.isArray(k.value)?k.value:[k.value];for(let B=0,W=F.length;B<W;B++){const z=F[B],K=_(z),H=x%L,ce=H%K.boundary,pe=H+ce;x+=ce,pe!==0&&L-pe<K.storage&&(x+=L-pe),k.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=x,x+=K.storage}}}const R=x%L;return R>0&&(x+=L-R),w.__size=x,w.__cache={},this}function _(w){const v={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(v.boundary=4,v.storage=4):w.isVector2?(v.boundary=8,v.storage=8):w.isVector3||w.isColor?(v.boundary=16,v.storage=12):w.isVector4?(v.boundary=16,v.storage=16):w.isMatrix3?(v.boundary=48,v.storage=48):w.isMatrix4?(v.boundary=64,v.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),v}function m(w){const v=w.target;v.removeEventListener("dispose",m);const x=o.indexOf(v.__bindingPointIndex);o.splice(x,1),s.deleteBuffer(i[v.id]),delete i[v.id],delete r[v.id]}function p(){for(const w in i)s.deleteBuffer(i[w]);o=[],i={},r={}}return{bind:c,update:l,dispose:p}}class Dy{constructor(e={}){const{canvas:t=S0(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const w=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=zt,this.toneMapping=_s,this.toneMappingExposure=1;const x=this;let L=!1,R=0,C=0,b=null,y=-1,M=null;const P=new pt,k=new pt;let F=null;const B=new ze(0);let W=0,z=t.width,K=t.height,H=1,ce=null,pe=null;const me=new pt(0,0,z,K),Re=new pt(0,0,z,K);let it=!1;const j=new tu;let ie=!1,xe=!1;const ae=new je,Ie=new je,Ne=new A,He=new pt,et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Z=!1;function se(){return b===null?H:1}let I=n;function be(E,U){return t.getContext(E,U)}try{const E={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Gh}`),t.addEventListener("webglcontextlost",ne,!1),t.addEventListener("webglcontextrestored",we,!1),t.addEventListener("webglcontextcreationerror",ye,!1),I===null){const U="webgl2";if(I=be(U,E),I===null)throw be(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let te,Se,J,ve,le,T,S,N,X,Q,q,Ae,ue,Ee,ot,oe,Ce,Ge,We,Pe,ut,tt,Ct,D;function _e(){te=new kx(I),te.init(),tt=new wy(I,te),Se=new Lx(I,te,e,tt),J=new yy(I,te),Se.reverseDepthBuffer&&d&&J.buffers.depth.setReversed(!0),ve=new Hx(I),le=new ry,T=new Sy(I,te,J,le,Se,tt,ve),S=new Nx(x),N=new Fx(x),X=new j0(I),Ct=new Px(I,X),Q=new Bx(I,X,ve,Ct),q=new Gx(I,Q,X,ve),We=new Vx(I,Se,T),oe=new Dx(le),Ae=new sy(x,S,N,te,Se,Ct,oe),ue=new Iy(x,le),Ee=new ay,ot=new fy(te),Ge=new Cx(x,S,N,J,q,f,c),Ce=new xy(x,q,Se),D=new Ly(I,ve,Se,J),Pe=new Ix(I,te,ve),ut=new zx(I,te,ve),ve.programs=Ae.programs,x.capabilities=Se,x.extensions=te,x.properties=le,x.renderLists=Ee,x.shadowMap=Ce,x.state=J,x.info=ve}_e();const Y=new Cy(x,I);this.xr=Y,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const E=te.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=te.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(E){E!==void 0&&(H=E,this.setSize(z,K,!1))},this.getSize=function(E){return E.set(z,K)},this.setSize=function(E,U,V=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=E,K=U,t.width=Math.floor(E*H),t.height=Math.floor(U*H),V===!0&&(t.style.width=E+"px",t.style.height=U+"px"),this.setViewport(0,0,E,U)},this.getDrawingBufferSize=function(E){return E.set(z*H,K*H).floor()},this.setDrawingBufferSize=function(E,U,V){z=E,K=U,H=V,t.width=Math.floor(E*V),t.height=Math.floor(U*V),this.setViewport(0,0,E,U)},this.getCurrentViewport=function(E){return E.copy(P)},this.getViewport=function(E){return E.copy(me)},this.setViewport=function(E,U,V,G){E.isVector4?me.set(E.x,E.y,E.z,E.w):me.set(E,U,V,G),J.viewport(P.copy(me).multiplyScalar(H).round())},this.getScissor=function(E){return E.copy(Re)},this.setScissor=function(E,U,V,G){E.isVector4?Re.set(E.x,E.y,E.z,E.w):Re.set(E,U,V,G),J.scissor(k.copy(Re).multiplyScalar(H).round())},this.getScissorTest=function(){return it},this.setScissorTest=function(E){J.setScissorTest(it=E)},this.setOpaqueSort=function(E){ce=E},this.setTransparentSort=function(E){pe=E},this.getClearColor=function(E){return E.copy(Ge.getClearColor())},this.setClearColor=function(){Ge.setClearColor.apply(Ge,arguments)},this.getClearAlpha=function(){return Ge.getClearAlpha()},this.setClearAlpha=function(){Ge.setClearAlpha.apply(Ge,arguments)},this.clear=function(E=!0,U=!0,V=!0){let G=0;if(E){let O=!1;if(b!==null){const he=b.texture.format;O=he===$h||he===Kh||he===jh}if(O){const he=b.texture.type,Me=he===Zi||he===Os||he===Po||he===br||he===Xh||he===qh,Ue=Ge.getClearColor(),Oe=Ge.getClearAlpha(),Xe=Ue.r,$e=Ue.g,Fe=Ue.b;Me?(g[0]=Xe,g[1]=$e,g[2]=Fe,g[3]=Oe,I.clearBufferuiv(I.COLOR,0,g)):(_[0]=Xe,_[1]=$e,_[2]=Fe,_[3]=Oe,I.clearBufferiv(I.COLOR,0,_))}else G|=I.COLOR_BUFFER_BIT}U&&(G|=I.DEPTH_BUFFER_BIT),V&&(G|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ne,!1),t.removeEventListener("webglcontextrestored",we,!1),t.removeEventListener("webglcontextcreationerror",ye,!1),Ee.dispose(),ot.dispose(),le.dispose(),S.dispose(),N.dispose(),q.dispose(),Ct.dispose(),D.dispose(),Ae.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",Pu),Y.removeEventListener("sessionend",Iu),vs.stop()};function ne(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function we(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const E=ve.autoReset,U=Ce.enabled,V=Ce.autoUpdate,G=Ce.needsUpdate,O=Ce.type;_e(),ve.autoReset=E,Ce.enabled=U,Ce.autoUpdate=V,Ce.needsUpdate=G,Ce.type=O}function ye(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Ke(E){const U=E.target;U.removeEventListener("dispose",Ke),Vt(U)}function Vt(E){vn(E),le.remove(E)}function vn(E){const U=le.get(E).programs;U!==void 0&&(U.forEach(function(V){Ae.releaseProgram(V)}),E.isShaderMaterial&&Ae.releaseShaderCache(E))}this.renderBufferDirect=function(E,U,V,G,O,he){U===null&&(U=et);const Me=O.isMesh&&O.matrixWorld.determinant()<0,Ue=pm(E,U,V,G,O);J.setMaterial(G,Me);let Oe=V.index,Xe=1;if(G.wireframe===!0){if(Oe=Q.getWireframeAttribute(V),Oe===void 0)return;Xe=2}const $e=V.drawRange,Fe=V.attributes.position;let ft=$e.start*Xe,Pt=($e.start+$e.count)*Xe;he!==null&&(ft=Math.max(ft,he.start*Xe),Pt=Math.min(Pt,(he.start+he.count)*Xe)),Oe!==null?(ft=Math.max(ft,0),Pt=Math.min(Pt,Oe.count)):Fe!=null&&(ft=Math.max(ft,0),Pt=Math.min(Pt,Fe.count));const Nt=Pt-ft;if(Nt<0||Nt===1/0)return;Ct.setup(O,G,Ue,V,Oe);let Ln,mt=Pe;if(Oe!==null&&(Ln=X.get(Oe),mt=ut,mt.setIndex(Ln)),O.isMesh)G.wireframe===!0?(J.setLineWidth(G.wireframeLinewidth*se()),mt.setMode(I.LINES)):mt.setMode(I.TRIANGLES);else if(O.isLine){let ke=G.linewidth;ke===void 0&&(ke=1),J.setLineWidth(ke*se()),O.isLineSegments?mt.setMode(I.LINES):O.isLineLoop?mt.setMode(I.LINE_LOOP):mt.setMode(I.LINE_STRIP)}else O.isPoints?mt.setMode(I.POINTS):O.isSprite&&mt.setMode(I.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)mt.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(te.get("WEBGL_multi_draw"))mt.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const ke=O._multiDrawStarts,Ni=O._multiDrawCounts,gt=O._multiDrawCount,ei=Oe?X.get(Oe).bytesPerElement:1,Gs=le.get(G).currentProgram.getUniforms();for(let Un=0;Un<gt;Un++)Gs.setValue(I,"_gl_DrawID",Un),mt.render(ke[Un]/ei,Ni[Un])}else if(O.isInstancedMesh)mt.renderInstances(ft,Nt,O.count);else if(V.isInstancedBufferGeometry){const ke=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Ni=Math.min(V.instanceCount,ke);mt.renderInstances(ft,Nt,Ni)}else mt.render(ft,Nt)};function Mt(E,U,V){E.transparent===!0&&E.side===hn&&E.forceSinglePass===!1?(E.side=bn,E.needsUpdate=!0,na(E,U,V),E.side=$i,E.needsUpdate=!0,na(E,U,V),E.side=hn):na(E,U,V)}this.compile=function(E,U,V=null){V===null&&(V=E),p=ot.get(V),p.init(U),v.push(p),V.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),E!==V&&E.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights();const G=new Set;return E.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const he=O.material;if(he)if(Array.isArray(he))for(let Me=0;Me<he.length;Me++){const Ue=he[Me];Mt(Ue,V,O),G.add(Ue)}else Mt(he,V,O),G.add(he)}),v.pop(),p=null,G},this.compileAsync=function(E,U,V=null){const G=this.compile(E,U,V);return new Promise(O=>{function he(){if(G.forEach(function(Me){le.get(Me).currentProgram.isReady()&&G.delete(Me)}),G.size===0){O(E);return}setTimeout(he,10)}te.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let Qn=null;function Di(E){Qn&&Qn(E)}function Pu(){vs.stop()}function Iu(){vs.start()}const vs=new np;vs.setAnimationLoop(Di),typeof self<"u"&&vs.setContext(self),this.setAnimationLoop=function(E){Qn=E,Y.setAnimationLoop(E),E===null?vs.stop():vs.start()},Y.addEventListener("sessionstart",Pu),Y.addEventListener("sessionend",Iu),this.render=function(E,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(U),U=Y.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,U,b),p=ot.get(E,v.length),p.init(U),v.push(p),Ie.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),j.setFromProjectionMatrix(Ie),xe=this.localClippingEnabled,ie=oe.init(this.clippingPlanes,xe),m=Ee.get(E,w.length),m.init(),w.push(m),Y.enabled===!0&&Y.isPresenting===!0){const he=x.xr.getDepthSensingMesh();he!==null&&kc(he,U,-1/0,x.sortObjects)}kc(E,U,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(ce,pe),Z=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,Z&&Ge.addToRenderList(m,E),this.info.render.frame++,ie===!0&&oe.beginShadows();const V=p.state.shadowsArray;Ce.render(V,E,U),ie===!0&&oe.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=m.opaque,O=m.transmissive;if(p.setupLights(),U.isArrayCamera){const he=U.cameras;if(O.length>0)for(let Me=0,Ue=he.length;Me<Ue;Me++){const Oe=he[Me];Du(G,O,E,Oe)}Z&&Ge.render(E);for(let Me=0,Ue=he.length;Me<Ue;Me++){const Oe=he[Me];Lu(m,E,Oe,Oe.viewport)}}else O.length>0&&Du(G,O,E,U),Z&&Ge.render(E),Lu(m,E,U);b!==null&&(T.updateMultisampleRenderTarget(b),T.updateRenderTargetMipmap(b)),E.isScene===!0&&E.onAfterRender(x,E,U),Ct.resetDefaultState(),y=-1,M=null,v.pop(),v.length>0?(p=v[v.length-1],ie===!0&&oe.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,w.pop(),w.length>0?m=w[w.length-1]:m=null};function kc(E,U,V,G){if(E.visible===!1)return;if(E.layers.test(U.layers)){if(E.isGroup)V=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(U);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||j.intersectsSprite(E)){G&&He.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Ie);const Me=q.update(E),Ue=E.material;Ue.visible&&m.push(E,Me,Ue,V,He.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||j.intersectsObject(E))){const Me=q.update(E),Ue=E.material;if(G&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),He.copy(E.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),He.copy(Me.boundingSphere.center)),He.applyMatrix4(E.matrixWorld).applyMatrix4(Ie)),Array.isArray(Ue)){const Oe=Me.groups;for(let Xe=0,$e=Oe.length;Xe<$e;Xe++){const Fe=Oe[Xe],ft=Ue[Fe.materialIndex];ft&&ft.visible&&m.push(E,Me,ft,V,He.z,Fe)}}else Ue.visible&&m.push(E,Me,Ue,V,He.z,null)}}const he=E.children;for(let Me=0,Ue=he.length;Me<Ue;Me++)kc(he[Me],U,V,G)}function Lu(E,U,V,G){const O=E.opaque,he=E.transmissive,Me=E.transparent;p.setupLightsView(V),ie===!0&&oe.setGlobalState(x.clippingPlanes,V),G&&J.viewport(P.copy(G)),O.length>0&&ta(O,U,V),he.length>0&&ta(he,U,V),Me.length>0&&ta(Me,U,V),J.buffers.depth.setTest(!0),J.buffers.depth.setMask(!0),J.buffers.color.setMask(!0),J.setPolygonOffset(!1)}function Du(E,U,V,G){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[G.id]===void 0&&(p.state.transmissionRenderTarget[G.id]=new Fs(1,1,{generateMipmaps:!0,type:te.has("EXT_color_buffer_half_float")||te.has("EXT_color_buffer_float")?Yo:Zi,minFilter:Xi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:lt.workingColorSpace}));const he=p.state.transmissionRenderTarget[G.id],Me=G.viewport||P;he.setSize(Me.z,Me.w);const Ue=x.getRenderTarget();x.setRenderTarget(he),x.getClearColor(B),W=x.getClearAlpha(),W<1&&x.setClearColor(16777215,.5),x.clear(),Z&&Ge.render(V);const Oe=x.toneMapping;x.toneMapping=_s;const Xe=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),p.setupLightsView(G),ie===!0&&oe.setGlobalState(x.clippingPlanes,G),ta(E,V,G),T.updateMultisampleRenderTarget(he),T.updateRenderTargetMipmap(he),te.has("WEBGL_multisampled_render_to_texture")===!1){let $e=!1;for(let Fe=0,ft=U.length;Fe<ft;Fe++){const Pt=U[Fe],Nt=Pt.object,Ln=Pt.geometry,mt=Pt.material,ke=Pt.group;if(mt.side===hn&&Nt.layers.test(G.layers)){const Ni=mt.side;mt.side=bn,mt.needsUpdate=!0,Nu(Nt,V,G,Ln,mt,ke),mt.side=Ni,mt.needsUpdate=!0,$e=!0}}$e===!0&&(T.updateMultisampleRenderTarget(he),T.updateRenderTargetMipmap(he))}x.setRenderTarget(Ue),x.setClearColor(B,W),Xe!==void 0&&(G.viewport=Xe),x.toneMapping=Oe}function ta(E,U,V){const G=U.isScene===!0?U.overrideMaterial:null;for(let O=0,he=E.length;O<he;O++){const Me=E[O],Ue=Me.object,Oe=Me.geometry,Xe=G===null?Me.material:G,$e=Me.group;Ue.layers.test(V.layers)&&Nu(Ue,U,V,Oe,Xe,$e)}}function Nu(E,U,V,G,O,he){E.onBeforeRender(x,U,V,G,O,he),E.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),O.onBeforeRender(x,U,V,G,E,he),O.transparent===!0&&O.side===hn&&O.forceSinglePass===!1?(O.side=bn,O.needsUpdate=!0,x.renderBufferDirect(V,U,G,O,E,he),O.side=$i,O.needsUpdate=!0,x.renderBufferDirect(V,U,G,O,E,he),O.side=hn):x.renderBufferDirect(V,U,G,O,E,he),E.onAfterRender(x,U,V,G,O,he)}function na(E,U,V){U.isScene!==!0&&(U=et);const G=le.get(E),O=p.state.lights,he=p.state.shadowsArray,Me=O.state.version,Ue=Ae.getParameters(E,O.state,he,U,V),Oe=Ae.getProgramCacheKey(Ue);let Xe=G.programs;G.environment=E.isMeshStandardMaterial?U.environment:null,G.fog=U.fog,G.envMap=(E.isMeshStandardMaterial?N:S).get(E.envMap||G.environment),G.envMapRotation=G.environment!==null&&E.envMap===null?U.environmentRotation:E.envMapRotation,Xe===void 0&&(E.addEventListener("dispose",Ke),Xe=new Map,G.programs=Xe);let $e=Xe.get(Oe);if($e!==void 0){if(G.currentProgram===$e&&G.lightsStateVersion===Me)return Ou(E,Ue),$e}else Ue.uniforms=Ae.getUniforms(E),E.onBeforeCompile(Ue,x),$e=Ae.acquireProgram(Ue,Oe),Xe.set(Oe,$e),G.uniforms=Ue.uniforms;const Fe=G.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Fe.clippingPlanes=oe.uniform),Ou(E,Ue),G.needsLights=gm(E),G.lightsStateVersion=Me,G.needsLights&&(Fe.ambientLightColor.value=O.state.ambient,Fe.lightProbe.value=O.state.probe,Fe.directionalLights.value=O.state.directional,Fe.directionalLightShadows.value=O.state.directionalShadow,Fe.spotLights.value=O.state.spot,Fe.spotLightShadows.value=O.state.spotShadow,Fe.rectAreaLights.value=O.state.rectArea,Fe.ltc_1.value=O.state.rectAreaLTC1,Fe.ltc_2.value=O.state.rectAreaLTC2,Fe.pointLights.value=O.state.point,Fe.pointLightShadows.value=O.state.pointShadow,Fe.hemisphereLights.value=O.state.hemi,Fe.directionalShadowMap.value=O.state.directionalShadowMap,Fe.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Fe.spotShadowMap.value=O.state.spotShadowMap,Fe.spotLightMatrix.value=O.state.spotLightMatrix,Fe.spotLightMap.value=O.state.spotLightMap,Fe.pointShadowMap.value=O.state.pointShadowMap,Fe.pointShadowMatrix.value=O.state.pointShadowMatrix),G.currentProgram=$e,G.uniformsList=null,$e}function Uu(E){if(E.uniformsList===null){const U=E.currentProgram.getUniforms();E.uniformsList=Ga.seqWithValue(U.seq,E.uniforms)}return E.uniformsList}function Ou(E,U){const V=le.get(E);V.outputColorSpace=U.outputColorSpace,V.batching=U.batching,V.batchingColor=U.batchingColor,V.instancing=U.instancing,V.instancingColor=U.instancingColor,V.instancingMorph=U.instancingMorph,V.skinning=U.skinning,V.morphTargets=U.morphTargets,V.morphNormals=U.morphNormals,V.morphColors=U.morphColors,V.morphTargetsCount=U.morphTargetsCount,V.numClippingPlanes=U.numClippingPlanes,V.numIntersection=U.numClipIntersection,V.vertexAlphas=U.vertexAlphas,V.vertexTangents=U.vertexTangents,V.toneMapping=U.toneMapping}function pm(E,U,V,G,O){U.isScene!==!0&&(U=et),T.resetTextureUnits();const he=U.fog,Me=G.isMeshStandardMaterial?U.environment:null,Ue=b===null?x.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:In,Oe=(G.isMeshStandardMaterial?N:S).get(G.envMap||Me),Xe=G.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,$e=!!V.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Fe=!!V.morphAttributes.position,ft=!!V.morphAttributes.normal,Pt=!!V.morphAttributes.color;let Nt=_s;G.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(Nt=x.toneMapping);const Ln=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,mt=Ln!==void 0?Ln.length:0,ke=le.get(G),Ni=p.state.lights;if(ie===!0&&(xe===!0||E!==M)){const zn=E===M&&G.id===y;oe.setState(G,E,zn)}let gt=!1;G.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==Ni.state.version||ke.outputColorSpace!==Ue||O.isBatchedMesh&&ke.batching===!1||!O.isBatchedMesh&&ke.batching===!0||O.isBatchedMesh&&ke.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&ke.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&ke.instancing===!1||!O.isInstancedMesh&&ke.instancing===!0||O.isSkinnedMesh&&ke.skinning===!1||!O.isSkinnedMesh&&ke.skinning===!0||O.isInstancedMesh&&ke.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&ke.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&ke.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&ke.instancingMorph===!1&&O.morphTexture!==null||ke.envMap!==Oe||G.fog===!0&&ke.fog!==he||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==oe.numPlanes||ke.numIntersection!==oe.numIntersection)||ke.vertexAlphas!==Xe||ke.vertexTangents!==$e||ke.morphTargets!==Fe||ke.morphNormals!==ft||ke.morphColors!==Pt||ke.toneMapping!==Nt||ke.morphTargetsCount!==mt)&&(gt=!0):(gt=!0,ke.__version=G.version);let ei=ke.currentProgram;gt===!0&&(ei=na(G,U,O));let Gs=!1,Un=!1,qr=!1;const Ut=ei.getUniforms(),xi=ke.uniforms;if(J.useProgram(ei.program)&&(Gs=!0,Un=!0,qr=!0),G.id!==y&&(y=G.id,Un=!0),Gs||M!==E){J.buffers.depth.getReversed()?(ae.copy(E.projectionMatrix),b0(ae),T0(ae),Ut.setValue(I,"projectionMatrix",ae)):Ut.setValue(I,"projectionMatrix",E.projectionMatrix),Ut.setValue(I,"viewMatrix",E.matrixWorldInverse);const ts=Ut.map.cameraPosition;ts!==void 0&&ts.setValue(I,Ne.setFromMatrixPosition(E.matrixWorld)),Se.logarithmicDepthBuffer&&Ut.setValue(I,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Ut.setValue(I,"isOrthographic",E.isOrthographicCamera===!0),M!==E&&(M=E,Un=!0,qr=!0)}if(O.isSkinnedMesh){Ut.setOptional(I,O,"bindMatrix"),Ut.setOptional(I,O,"bindMatrixInverse");const zn=O.skeleton;zn&&(zn.boneTexture===null&&zn.computeBoneTexture(),Ut.setValue(I,"boneTexture",zn.boneTexture,T))}O.isBatchedMesh&&(Ut.setOptional(I,O,"batchingTexture"),Ut.setValue(I,"batchingTexture",O._matricesTexture,T),Ut.setOptional(I,O,"batchingIdTexture"),Ut.setValue(I,"batchingIdTexture",O._indirectTexture,T),Ut.setOptional(I,O,"batchingColorTexture"),O._colorsTexture!==null&&Ut.setValue(I,"batchingColorTexture",O._colorsTexture,T));const Yr=V.morphAttributes;if((Yr.position!==void 0||Yr.normal!==void 0||Yr.color!==void 0)&&We.update(O,V,ei),(Un||ke.receiveShadow!==O.receiveShadow)&&(ke.receiveShadow=O.receiveShadow,Ut.setValue(I,"receiveShadow",O.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(xi.envMap.value=Oe,xi.flipEnvMap.value=Oe.isCubeTexture&&Oe.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&U.environment!==null&&(xi.envMapIntensity.value=U.environmentIntensity),Un&&(Ut.setValue(I,"toneMappingExposure",x.toneMappingExposure),ke.needsLights&&mm(xi,qr),he&&G.fog===!0&&ue.refreshFogUniforms(xi,he),ue.refreshMaterialUniforms(xi,G,H,K,p.state.transmissionRenderTarget[E.id]),Ga.upload(I,Uu(ke),xi,T)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Ga.upload(I,Uu(ke),xi,T),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Ut.setValue(I,"center",O.center),Ut.setValue(I,"modelViewMatrix",O.modelViewMatrix),Ut.setValue(I,"normalMatrix",O.normalMatrix),Ut.setValue(I,"modelMatrix",O.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const zn=G.uniformsGroups;for(let ts=0,ns=zn.length;ts<ns;ts++){const Fu=zn[ts];D.update(Fu,ei),D.bind(Fu,ei)}}return ei}function mm(E,U){E.ambientLightColor.needsUpdate=U,E.lightProbe.needsUpdate=U,E.directionalLights.needsUpdate=U,E.directionalLightShadows.needsUpdate=U,E.pointLights.needsUpdate=U,E.pointLightShadows.needsUpdate=U,E.spotLights.needsUpdate=U,E.spotLightShadows.needsUpdate=U,E.rectAreaLights.needsUpdate=U,E.hemisphereLights.needsUpdate=U}function gm(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(E,U,V){le.get(E.texture).__webglTexture=U,le.get(E.depthTexture).__webglTexture=V;const G=le.get(E);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=V===void 0,G.__autoAllocateDepthBuffer||te.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,U){const V=le.get(E);V.__webglFramebuffer=U,V.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(E,U=0,V=0){b=E,R=U,C=V;let G=!0,O=null,he=!1,Me=!1;if(E){const Oe=le.get(E);if(Oe.__useDefaultFramebuffer!==void 0)J.bindFramebuffer(I.FRAMEBUFFER,null),G=!1;else if(Oe.__webglFramebuffer===void 0)T.setupRenderTarget(E);else if(Oe.__hasExternalTextures)T.rebindTextures(E,le.get(E.texture).__webglTexture,le.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Fe=E.depthTexture;if(Oe.__boundDepthTexture!==Fe){if(Fe!==null&&le.has(Fe)&&(E.width!==Fe.image.width||E.height!==Fe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(E)}}const Xe=E.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(Me=!0);const $e=le.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray($e[U])?O=$e[U][V]:O=$e[U],he=!0):E.samples>0&&T.useMultisampledRTT(E)===!1?O=le.get(E).__webglMultisampledFramebuffer:Array.isArray($e)?O=$e[V]:O=$e,P.copy(E.viewport),k.copy(E.scissor),F=E.scissorTest}else P.copy(me).multiplyScalar(H).floor(),k.copy(Re).multiplyScalar(H).floor(),F=it;if(J.bindFramebuffer(I.FRAMEBUFFER,O)&&G&&J.drawBuffers(E,O),J.viewport(P),J.scissor(k),J.setScissorTest(F),he){const Oe=le.get(E.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+U,Oe.__webglTexture,V)}else if(Me){const Oe=le.get(E.texture),Xe=U||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Oe.__webglTexture,V||0,Xe)}y=-1},this.readRenderTargetPixels=function(E,U,V,G,O,he,Me){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=le.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Me!==void 0&&(Ue=Ue[Me]),Ue){J.bindFramebuffer(I.FRAMEBUFFER,Ue);try{const Oe=E.texture,Xe=Oe.format,$e=Oe.type;if(!Se.textureFormatReadable(Xe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Se.textureTypeReadable($e)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=E.width-G&&V>=0&&V<=E.height-O&&I.readPixels(U,V,G,O,tt.convert(Xe),tt.convert($e),he)}finally{const Oe=b!==null?le.get(b).__webglFramebuffer:null;J.bindFramebuffer(I.FRAMEBUFFER,Oe)}}},this.readRenderTargetPixelsAsync=async function(E,U,V,G,O,he,Me){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ue=le.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Me!==void 0&&(Ue=Ue[Me]),Ue){const Oe=E.texture,Xe=Oe.format,$e=Oe.type;if(!Se.textureFormatReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Se.textureTypeReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=E.width-G&&V>=0&&V<=E.height-O){J.bindFramebuffer(I.FRAMEBUFFER,Ue);const Fe=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Fe),I.bufferData(I.PIXEL_PACK_BUFFER,he.byteLength,I.STREAM_READ),I.readPixels(U,V,G,O,tt.convert(Xe),tt.convert($e),0);const ft=b!==null?le.get(b).__webglFramebuffer:null;J.bindFramebuffer(I.FRAMEBUFFER,ft);const Pt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await w0(I,Pt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Fe),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,he),I.deleteBuffer(Fe),I.deleteSync(Pt),he}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,U=null,V=0){E.isTexture!==!0&&(lo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,E=arguments[1]);const G=Math.pow(2,-V),O=Math.floor(E.image.width*G),he=Math.floor(E.image.height*G),Me=U!==null?U.x:0,Ue=U!==null?U.y:0;T.setTexture2D(E,0),I.copyTexSubImage2D(I.TEXTURE_2D,V,0,0,Me,Ue,O,he),J.unbindTexture()},this.copyTextureToTexture=function(E,U,V=null,G=null,O=0){E.isTexture!==!0&&(lo("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,E=arguments[1],U=arguments[2],O=arguments[3]||0,V=null);let he,Me,Ue,Oe,Xe,$e,Fe,ft,Pt;const Nt=E.isCompressedTexture?E.mipmaps[O]:E.image;V!==null?(he=V.max.x-V.min.x,Me=V.max.y-V.min.y,Ue=V.isBox3?V.max.z-V.min.z:1,Oe=V.min.x,Xe=V.min.y,$e=V.isBox3?V.min.z:0):(he=Nt.width,Me=Nt.height,Ue=Nt.depth||1,Oe=0,Xe=0,$e=0),G!==null?(Fe=G.x,ft=G.y,Pt=G.z):(Fe=0,ft=0,Pt=0);const Ln=tt.convert(U.format),mt=tt.convert(U.type);let ke;U.isData3DTexture?(T.setTexture3D(U,0),ke=I.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(T.setTexture2DArray(U,0),ke=I.TEXTURE_2D_ARRAY):(T.setTexture2D(U,0),ke=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,U.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,U.unpackAlignment);const Ni=I.getParameter(I.UNPACK_ROW_LENGTH),gt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),ei=I.getParameter(I.UNPACK_SKIP_PIXELS),Gs=I.getParameter(I.UNPACK_SKIP_ROWS),Un=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,Nt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Nt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Oe),I.pixelStorei(I.UNPACK_SKIP_ROWS,Xe),I.pixelStorei(I.UNPACK_SKIP_IMAGES,$e);const qr=E.isDataArrayTexture||E.isData3DTexture,Ut=U.isDataArrayTexture||U.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){const xi=le.get(E),Yr=le.get(U),zn=le.get(xi.__renderTarget),ts=le.get(Yr.__renderTarget);J.bindFramebuffer(I.READ_FRAMEBUFFER,zn.__webglFramebuffer),J.bindFramebuffer(I.DRAW_FRAMEBUFFER,ts.__webglFramebuffer);for(let ns=0;ns<Ue;ns++)qr&&I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,le.get(E).__webglTexture,O,$e+ns),E.isDepthTexture?(Ut&&I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,le.get(U).__webglTexture,O,Pt+ns),I.blitFramebuffer(Oe,Xe,he,Me,Fe,ft,he,Me,I.DEPTH_BUFFER_BIT,I.NEAREST)):Ut?I.copyTexSubImage3D(ke,O,Fe,ft,Pt+ns,Oe,Xe,he,Me):I.copyTexSubImage2D(ke,O,Fe,ft,Pt+ns,Oe,Xe,he,Me);J.bindFramebuffer(I.READ_FRAMEBUFFER,null),J.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else Ut?E.isDataTexture||E.isData3DTexture?I.texSubImage3D(ke,O,Fe,ft,Pt,he,Me,Ue,Ln,mt,Nt.data):U.isCompressedArrayTexture?I.compressedTexSubImage3D(ke,O,Fe,ft,Pt,he,Me,Ue,Ln,Nt.data):I.texSubImage3D(ke,O,Fe,ft,Pt,he,Me,Ue,Ln,mt,Nt):E.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,O,Fe,ft,he,Me,Ln,mt,Nt.data):E.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,O,Fe,ft,Nt.width,Nt.height,Ln,Nt.data):I.texSubImage2D(I.TEXTURE_2D,O,Fe,ft,he,Me,Ln,mt,Nt);I.pixelStorei(I.UNPACK_ROW_LENGTH,Ni),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,gt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,ei),I.pixelStorei(I.UNPACK_SKIP_ROWS,Gs),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Un),O===0&&U.generateMipmaps&&I.generateMipmap(ke),J.unbindTexture()},this.copyTextureToTexture3D=function(E,U,V=null,G=null,O=0){return E.isTexture!==!0&&(lo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,G=arguments[1]||null,E=arguments[2],U=arguments[3],O=arguments[4]||0),lo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,U,V,G,O)},this.initRenderTarget=function(E){le.get(E).__webglFramebuffer===void 0&&T.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?T.setTextureCube(E,0):E.isData3DTexture?T.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?T.setTexture2DArray(E,0):T.setTexture2D(E,0),J.unbindTexture()},this.resetState=function(){R=0,C=0,b=null,J.reset(),Ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=lt._getDrawingBufferColorSpace(e),t.unpackColorSpace=lt._getUnpackColorSpace()}}class cp extends Bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ai,this.environmentIntensity=1,this.environmentRotation=new Ai,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Ny{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=_h,this.updateRanges=[],this.version=0,this.uuid=jn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=jn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=jn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const En=new A;class su{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)En.fromBufferAttribute(this,t),En.applyMatrix4(e),this.setXYZ(t,En.x,En.y,En.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)En.fromBufferAttribute(this,t),En.applyNormalMatrix(e),this.setXYZ(t,En.x,En.y,En.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)En.fromBufferAttribute(this,t),En.transformDirection(e),this.setXYZ(t,En.x,En.y,En.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=ai(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=wt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ai(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ai(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ai(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ai(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array),i=wt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array),i=wt(i,this.array),r=wt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new dn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new su(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Ud=new A,Od=new pt,Fd=new pt,Uy=new A,kd=new je,wa=new A,fl=new Ci,Bd=new je,pl=new jo;class Oy extends ${constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Hu,this.bindMatrix=new je,this.bindMatrixInverse=new je,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new mi),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,wa),this.boundingBox.expandByPoint(wa)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Ci),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,wa),this.boundingSphere.expandByPoint(wa)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),fl.copy(this.boundingSphere),fl.applyMatrix4(i),e.ray.intersectsSphere(fl)!==!1&&(Bd.copy(i).invert(),pl.copy(e.ray).applyMatrix4(Bd),!(this.boundingBox!==null&&pl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,pl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new pt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Hu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Xm?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Od.fromBufferAttribute(i.attributes.skinIndex,e),Fd.fromBufferAttribute(i.attributes.skinWeight,e),Ud.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=Fd.getComponent(r);if(o!==0){const a=Od.getComponent(r);kd.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Uy.copy(Ud).applyMatrix4(kd),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class lp extends Bt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class ru extends tn{constructor(e=null,t=1,n=1,i,r,o,a,c,l=Tn,h=Tn,u,d){super(null,o,a,c,l,h,i,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const zd=new je,Fy=new je;class ou{constructor(e=[],t=[]){this.uuid=jn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new je)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new je;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:Fy;zd.multiplyMatrices(a,t[r]),zd.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new ou(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new ru(t,e,e,qn,li);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new lp),this.bones.push(o),this.boneInverses.push(new je().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class yh extends dn{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const sr=new je,Hd=new je,ba=[],Vd=new mi,ky=new je,Jr=new $,Qr=new Ci;class By extends ${constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new yh(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,ky)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new mi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,sr),Vd.copy(e.boundingBox).applyMatrix4(sr),this.boundingBox.union(Vd)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ci),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,sr),Qr.copy(e.boundingSphere).applyMatrix4(sr),this.boundingSphere.union(Qr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Jr.geometry=this.geometry,Jr.material=this.material,Jr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Qr.copy(this.boundingSphere),Qr.applyMatrix4(n),e.ray.intersectsSphere(Qr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,sr),Hd.multiplyMatrices(n,sr),Jr.matrixWorld=Hd,Jr.raycast(e,ba);for(let o=0,a=ba.length;o<a;o++){const c=ba[o];c.instanceId=r,c.object=this,t.push(c)}ba.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new yh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new ru(new Float32Array(i*this.count),i,this.count,Yh,li));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=i*e;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class au extends ui{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ic=new A,sc=new A,Gd=new je,eo=new jo,Ta=new Ci,ml=new A,Wd=new A;class cu extends Bt{constructor(e=new jt,t=new au){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)ic.fromBufferAttribute(t,i-1),sc.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=ic.distanceTo(sc);e.setAttribute("lineDistance",new Tt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ta.copy(n.boundingSphere),Ta.applyMatrix4(i),Ta.radius+=r,e.ray.intersectsSphere(Ta)===!1)return;Gd.copy(i).invert(),eo.copy(e.ray).applyMatrix4(Gd);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=l){const p=h.getX(_),w=h.getX(_+1),v=Ea(this,e,eo,c,p,w);v&&t.push(v)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(f),p=Ea(this,e,eo,c,_,m);p&&t.push(p)}}else{const f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=l){const p=Ea(this,e,eo,c,_,_+1);p&&t.push(p)}if(this.isLineLoop){const _=Ea(this,e,eo,c,g-1,f);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Ea(s,e,t,n,i,r){const o=s.geometry.attributes.position;if(ic.fromBufferAttribute(o,i),sc.fromBufferAttribute(o,r),t.distanceSqToSegment(ic,sc,ml,Wd)>n)return;ml.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(ml);if(!(c<e.near||c>e.far))return{distance:c,point:Wd.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}const Xd=new A,qd=new A;class hp extends cu{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Xd.fromBufferAttribute(t,i),qd.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Xd.distanceTo(qd);e.setAttribute("lineDistance",new Tt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class zy extends cu{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Ko extends ui{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Yd=new je,Mh=new jo,Aa=new Ci,Ra=new A;class vc extends Bt{constructor(e=new jt,t=new Ko){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Aa.copy(n.boundingSphere),Aa.applyMatrix4(i),Aa.radius+=r,e.ray.intersectsSphere(Aa)===!1)return;Yd.copy(i).invert(),Mh.copy(e.ray).applyMatrix4(Yd);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){const d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let g=d,_=f;g<_;g++){const m=l.getX(g);Ra.fromBufferAttribute(u,m),jd(Ra,m,c,i,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,_=f;g<_;g++)Ra.fromBufferAttribute(u,g),jd(Ra,g,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function jd(s,e,t,n,i,r,o){const a=Mh.distanceSqToPoint(s);if(a<t){const c=new A;Mh.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class kr extends tn{constructor(e,t,n,i,r,o,a,c,l){super(e,t,n,i,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Pi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-o,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===o)return i/(r-1);const h=n[i],d=n[i+1]-h,f=(o-h)/d;return(i+f)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),c=t||(o.isVector2?new re:new A);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new A,i=[],r=[],o=[],a=new A,c=new je;for(let f=0;f<=e;f++){const g=f/e;i[f]=this.getTangentAt(g,new A)}r[0]=new A,o[0]=new A;let l=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(ln(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(i[f],r[f])}if(t===!0){let f=Math.acos(ln(r[0].dot(r[e]),-1,1));f/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(i[g],f*g)),o[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class lu extends Pi{constructor(e=0,t=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new re){const n=t,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+e*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Hy extends lu{constructor(e,t,n,i,r,o){super(e,t,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function hu(){let s=0,e=0,t=0,n=0;function i(r,o,a,c){s=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){i(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let d=(o-r)/l-(a-r)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,f*=h,i(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return s+e*r+t*o+n*a}}}const Ca=new A,gl=new hu,_l=new hu,xl=new hu;class up extends Pi{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new A){const n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=i[(a-1)%r]:(Ca.subVectors(i[0],i[1]).add(i[0]),l=Ca);const u=i[a%r],d=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(Ca.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Ca),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),gl.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,_,m),_l.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,_,m),xl.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(gl.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),_l.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),xl.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(gl.calc(c),_l.calc(c),xl.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new A().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Kd(s,e,t,n,i){const r=(n-e)*.5,o=(i-t)*.5,a=s*s,c=s*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*s+t}function Vy(s,e){const t=1-s;return t*t*e}function Gy(s,e){return 2*(1-s)*s*e}function Wy(s,e){return s*s*e}function _o(s,e,t,n){return Vy(s,e)+Gy(s,t)+Wy(s,n)}function Xy(s,e){const t=1-s;return t*t*t*e}function qy(s,e){const t=1-s;return 3*t*t*s*e}function Yy(s,e){return 3*(1-s)*s*s*e}function jy(s,e){return s*s*s*e}function xo(s,e,t,n,i){return Xy(s,e)+qy(s,t)+Yy(s,n)+jy(s,i)}class dp extends Pi{constructor(e=new re,t=new re,n=new re,i=new re){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new re){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(xo(e,i.x,r.x,o.x,a.x),xo(e,i.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Ky extends Pi{constructor(e=new A,t=new A,n=new A,i=new A){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new A){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(xo(e,i.x,r.x,o.x,a.x),xo(e,i.y,r.y,o.y,a.y),xo(e,i.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class fp extends Pi{constructor(e=new re,t=new re){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new re){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new re){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class $y extends Pi{constructor(e=new A,t=new A){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new A){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new A){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class pp extends Pi{constructor(e=new re,t=new re,n=new re){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new re){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(_o(e,i.x,r.x,o.x),_o(e,i.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class mp extends Pi{constructor(e=new A,t=new A,n=new A){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new A){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(_o(e,i.x,r.x,o.x),_o(e,i.y,r.y,o.y),_o(e,i.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class gp extends Pi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new re){const n=t,i=this.points,r=(i.length-1)*e,o=Math.floor(r),a=r-o,c=i[o===0?o:o-1],l=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(Kd(a,c.x,l.x,h.x,u.x),Kd(a,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new re().fromArray(i))}return this}}var rc=Object.freeze({__proto__:null,ArcCurve:Hy,CatmullRomCurve3:up,CubicBezierCurve:dp,CubicBezierCurve3:Ky,EllipseCurve:lu,LineCurve:fp,LineCurve3:$y,QuadraticBezierCurve:pp,QuadraticBezierCurve3:mp,SplineCurve:gp});class Zy extends Pi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new rc[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const o=i[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const o=r[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new rc[i.type]().fromJSON(i))}return this}}class oc extends Zy{constructor(e){super(),this.type="Path",this.currentPoint=new re,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new fp(this.currentPoint.clone(),new re(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const r=new pp(this.currentPoint.clone(),new re(e,t),new re(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,o){const a=new dp(this.currentPoint.clone(),new re(e,t),new re(n,i),new re(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new gp(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,i,r,o),this}absarc(e,t,n,i,r,o){return this.absellipse(e,t,n,n,i,r,o),this}ellipse(e,t,n,i,r,o,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,i,r,o,a,c),this}absellipse(e,t,n,i,r,o,a,c){const l=new lu(e,t,n,i,r,o,a,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class ji extends jt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const r=[],o=[],a=[],c=[],l=new A,h=new re;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){const f=n+u/t*i;l.x=e*Math.cos(f),l.y=e*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Tt(o,3)),this.setAttribute("normal",new Tt(a,3)),this.setAttribute("uv",new Tt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ji(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class ht extends jt{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],d=[],f=[];let g=0;const _=[],m=n/2;let p=0;w(),o===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new Tt(u,3)),this.setAttribute("normal",new Tt(d,3)),this.setAttribute("uv",new Tt(f,2));function w(){const x=new A,L=new A;let R=0;const C=(t-e)/n;for(let b=0;b<=r;b++){const y=[],M=b/r,P=M*(t-e)+e;for(let k=0;k<=i;k++){const F=k/i,B=F*c+a,W=Math.sin(B),z=Math.cos(B);L.x=P*W,L.y=-M*n+m,L.z=P*z,u.push(L.x,L.y,L.z),x.set(W,C,z).normalize(),d.push(x.x,x.y,x.z),f.push(F,1-M),y.push(g++)}_.push(y)}for(let b=0;b<i;b++)for(let y=0;y<r;y++){const M=_[y][b],P=_[y+1][b],k=_[y+1][b+1],F=_[y][b+1];(e>0||y!==0)&&(h.push(M,P,F),R+=3),(t>0||y!==r-1)&&(h.push(P,k,F),R+=3)}l.addGroup(p,R,0),p+=R}function v(x){const L=g,R=new re,C=new A;let b=0;const y=x===!0?e:t,M=x===!0?1:-1;for(let k=1;k<=i;k++)u.push(0,m*M,0),d.push(0,M,0),f.push(.5,.5),g++;const P=g;for(let k=0;k<=i;k++){const B=k/i*c+a,W=Math.cos(B),z=Math.sin(B);C.x=y*z,C.y=m*M,C.z=y*W,u.push(C.x,C.y,C.z),d.push(0,M,0),R.x=W*.5+.5,R.y=z*.5*M+.5,f.push(R.x,R.y),g++}for(let k=0;k<i;k++){const F=L+k,B=P+k;x===!0?h.push(B,B+1,F):h.push(B+1,B,F),b+=3}l.addGroup(p,b,x===!0?1:2),p+=b}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ht(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Rr extends ht{constructor(e=1,t=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Rr(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class yc extends jt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const r=[],o=[];a(i),l(n),h(),this.setAttribute("position",new Tt(r,3)),this.setAttribute("normal",new Tt(r.slice(),3)),this.setAttribute("uv",new Tt(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(w){const v=new A,x=new A,L=new A;for(let R=0;R<t.length;R+=3)f(t[R+0],v),f(t[R+1],x),f(t[R+2],L),c(v,x,L,w)}function c(w,v,x,L){const R=L+1,C=[];for(let b=0;b<=R;b++){C[b]=[];const y=w.clone().lerp(x,b/R),M=v.clone().lerp(x,b/R),P=R-b;for(let k=0;k<=P;k++)k===0&&b===R?C[b][k]=y:C[b][k]=y.clone().lerp(M,k/P)}for(let b=0;b<R;b++)for(let y=0;y<2*(R-b)-1;y++){const M=Math.floor(y/2);y%2===0?(d(C[b][M+1]),d(C[b+1][M]),d(C[b][M])):(d(C[b][M+1]),d(C[b+1][M+1]),d(C[b+1][M]))}}function l(w){const v=new A;for(let x=0;x<r.length;x+=3)v.x=r[x+0],v.y=r[x+1],v.z=r[x+2],v.normalize().multiplyScalar(w),r[x+0]=v.x,r[x+1]=v.y,r[x+2]=v.z}function h(){const w=new A;for(let v=0;v<r.length;v+=3){w.x=r[v+0],w.y=r[v+1],w.z=r[v+2];const x=m(w)/2/Math.PI+.5,L=p(w)/Math.PI+.5;o.push(x,1-L)}g(),u()}function u(){for(let w=0;w<o.length;w+=6){const v=o[w+0],x=o[w+2],L=o[w+4],R=Math.max(v,x,L),C=Math.min(v,x,L);R>.9&&C<.1&&(v<.2&&(o[w+0]+=1),x<.2&&(o[w+2]+=1),L<.2&&(o[w+4]+=1))}}function d(w){r.push(w.x,w.y,w.z)}function f(w,v){const x=w*3;v.x=e[x+0],v.y=e[x+1],v.z=e[x+2]}function g(){const w=new A,v=new A,x=new A,L=new A,R=new re,C=new re,b=new re;for(let y=0,M=0;y<r.length;y+=9,M+=6){w.set(r[y+0],r[y+1],r[y+2]),v.set(r[y+3],r[y+4],r[y+5]),x.set(r[y+6],r[y+7],r[y+8]),R.set(o[M+0],o[M+1]),C.set(o[M+2],o[M+3]),b.set(o[M+4],o[M+5]),L.copy(w).add(v).add(x).divideScalar(3);const P=m(L);_(R,M+0,w,P),_(C,M+2,v,P),_(b,M+4,x,P)}}function _(w,v,x,L){L<0&&w.x===1&&(o[v]=w.x-1),x.x===0&&x.z===0&&(o[v]=L/2/Math.PI+.5)}function m(w){return Math.atan2(w.z,-w.x)}function p(w){return Math.atan2(-w.y,Math.sqrt(w.x*w.x+w.z*w.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yc(e.vertices,e.indices,e.radius,e.details)}}class uu extends yc{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new uu(e.radius,e.detail)}}class ac extends oc{constructor(e){super(e),this.uuid=jn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new oc().fromJSON(i))}return this}}const Jy={triangulate:function(s,e,t=2){const n=e&&e.length,i=n?e[0]*t:s.length;let r=_p(s,0,i,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,u,d,f;if(n&&(r=i1(s,e,r,t)),s.length>80*t){a=l=s[0],c=h=s[1];for(let g=t;g<i;g+=t)u=s[g],d=s[g+1],u<a&&(a=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);f=Math.max(l-a,h-c),f=f!==0?32767/f:0}return No(r,o,t,a,c,f,0),o}};function _p(s,e,t,n,i){let r,o;if(i===p1(s,e,t,n)>0)for(r=e;r<t;r+=n)o=$d(r,s[r],s[r+1],o);else for(r=t-n;r>=e;r-=n)o=$d(r,s[r],s[r+1],o);return o&&Mc(o,o.next)&&(Oo(o),o=o.next),o}function ks(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(Mc(t,t.next)||Ht(t.prev,t,t.next)===0)){if(Oo(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function No(s,e,t,n,i,r,o){if(!s)return;!o&&r&&c1(s,n,i,r);let a=s,c,l;for(;s.prev!==s.next;){if(c=s.prev,l=s.next,r?e1(s,n,i,r):Qy(s)){e.push(c.i/t|0),e.push(s.i/t|0),e.push(l.i/t|0),Oo(s),s=l.next,a=l.next;continue}if(s=l,s===a){o?o===1?(s=t1(ks(s),e,t),No(s,e,t,n,i,r,2)):o===2&&n1(s,e,t,n,i,r):No(ks(s),e,t,n,i,r,1);break}}}function Qy(s){const e=s.prev,t=s,n=s.next;if(Ht(e,t,n)>=0)return!1;const i=e.x,r=t.x,o=n.x,a=e.y,c=t.y,l=n.y,h=i<r?i<o?i:o:r<o?r:o,u=a<c?a<l?a:l:c<l?c:l,d=i>r?i>o?i:o:r>o?r:o,f=a>c?a>l?a:l:c>l?c:l;let g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&dr(i,a,r,c,o,l,g.x,g.y)&&Ht(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function e1(s,e,t,n){const i=s.prev,r=s,o=s.next;if(Ht(i,r,o)>=0)return!1;const a=i.x,c=r.x,l=o.x,h=i.y,u=r.y,d=o.y,f=a<c?a<l?a:l:c<l?c:l,g=h<u?h<d?h:d:u<d?u:d,_=a>c?a>l?a:l:c>l?c:l,m=h>u?h>d?h:d:u>d?u:d,p=Sh(f,g,e,t,n),w=Sh(_,m,e,t,n);let v=s.prevZ,x=s.nextZ;for(;v&&v.z>=p&&x&&x.z<=w;){if(v.x>=f&&v.x<=_&&v.y>=g&&v.y<=m&&v!==i&&v!==o&&dr(a,h,c,u,l,d,v.x,v.y)&&Ht(v.prev,v,v.next)>=0||(v=v.prevZ,x.x>=f&&x.x<=_&&x.y>=g&&x.y<=m&&x!==i&&x!==o&&dr(a,h,c,u,l,d,x.x,x.y)&&Ht(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;v&&v.z>=p;){if(v.x>=f&&v.x<=_&&v.y>=g&&v.y<=m&&v!==i&&v!==o&&dr(a,h,c,u,l,d,v.x,v.y)&&Ht(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;x&&x.z<=w;){if(x.x>=f&&x.x<=_&&x.y>=g&&x.y<=m&&x!==i&&x!==o&&dr(a,h,c,u,l,d,x.x,x.y)&&Ht(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function t1(s,e,t){let n=s;do{const i=n.prev,r=n.next.next;!Mc(i,r)&&xp(i,n,n.next,r)&&Uo(i,r)&&Uo(r,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Oo(n),Oo(n.next),n=s=r),n=n.next}while(n!==s);return ks(n)}function n1(s,e,t,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&u1(o,a)){let c=vp(o,a);o=ks(o,o.next),c=ks(c,c.next),No(o,e,t,n,i,r,0),No(c,e,t,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function i1(s,e,t,n){const i=[];let r,o,a,c,l;for(r=0,o=e.length;r<o;r++)a=e[r]*n,c=r<o-1?e[r+1]*n:s.length,l=_p(s,a,c,n,!1),l===l.next&&(l.steiner=!0),i.push(h1(l));for(i.sort(s1),r=0;r<i.length;r++)t=r1(i[r],t);return t}function s1(s,e){return s.x-e.x}function r1(s,e){const t=o1(s,e);if(!t)return e;const n=vp(t,s);return ks(n,n.next),ks(t,t.next)}function o1(s,e){let t=e,n=-1/0,i;const r=s.x,o=s.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const d=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=r&&d>n&&(n=d,i=t.x<t.next.x?t:t.next,d===r))return i}t=t.next}while(t!==e);if(!i)return null;const a=i,c=i.x,l=i.y;let h=1/0,u;t=i;do r>=t.x&&t.x>=c&&r!==t.x&&dr(o<l?r:n,o,c,l,o<l?n:r,o,t.x,t.y)&&(u=Math.abs(o-t.y)/(r-t.x),Uo(t,s)&&(u<h||u===h&&(t.x>i.x||t.x===i.x&&a1(i,t)))&&(i=t,h=u)),t=t.next;while(t!==a);return i}function a1(s,e){return Ht(s.prev,s,e.prev)<0&&Ht(e.next,s,s.next)<0}function c1(s,e,t,n){let i=s;do i.z===0&&(i.z=Sh(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,l1(i)}function l1(s){let e,t,n,i,r,o,a,c,l=1;do{for(t=s,s=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<l&&(a++,n=n.nextZ,!!n);e++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,a--):(i=n,n=n.nextZ,c--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;t=n}r.nextZ=null,l*=2}while(o>1);return s}function Sh(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function h1(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function dr(s,e,t,n,i,r,o,a){return(i-o)*(e-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(i-o)*(n-a)}function u1(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!d1(s,e)&&(Uo(s,e)&&Uo(e,s)&&f1(s,e)&&(Ht(s.prev,s,e.prev)||Ht(s,e.prev,e))||Mc(s,e)&&Ht(s.prev,s,s.next)>0&&Ht(e.prev,e,e.next)>0)}function Ht(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function Mc(s,e){return s.x===e.x&&s.y===e.y}function xp(s,e,t,n){const i=Ia(Ht(s,e,t)),r=Ia(Ht(s,e,n)),o=Ia(Ht(t,n,s)),a=Ia(Ht(t,n,e));return!!(i!==r&&o!==a||i===0&&Pa(s,t,e)||r===0&&Pa(s,n,e)||o===0&&Pa(t,s,n)||a===0&&Pa(t,e,n))}function Pa(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function Ia(s){return s>0?1:s<0?-1:0}function d1(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&xp(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function Uo(s,e){return Ht(s.prev,s,s.next)<0?Ht(s,e,s.next)>=0&&Ht(s,s.prev,e)>=0:Ht(s,e,s.prev)<0||Ht(s,s.next,e)<0}function f1(s,e){let t=s,n=!1;const i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function vp(s,e){const t=new wh(s.i,s.x,s.y),n=new wh(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function $d(s,e,t,n){const i=new wh(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Oo(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function wh(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function p1(s,e,t,n){let i=0;for(let r=e,o=t-n;r<t;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}class vo{static area(e){const t=e.length;let n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return vo.area(e)<0}static triangulateShape(e,t){const n=[],i=[],r=[];Zd(e),Jd(n,e);let o=e.length;t.forEach(Zd);for(let c=0;c<t.length;c++)i.push(o),o+=t[c].length,Jd(n,t[c]);const a=Jy.triangulate(n,i);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function Zd(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function Jd(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class Fo extends jt{constructor(e=new ac([new re(.5,.5),new re(-.5,.5),new re(-.5,-.5),new re(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],r=[];for(let a=0,c=e.length;a<c;a++){const l=e[a];o(l)}this.setAttribute("position",new Tt(i,3)),this.setAttribute("uv",new Tt(r,2)),this.computeVertexNormals();function o(a){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1;let d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,w=t.UVGenerator!==void 0?t.UVGenerator:m1;let v,x=!1,L,R,C,b;p&&(v=p.getSpacedPoints(h),x=!0,d=!1,L=p.computeFrenetFrames(h,!1),R=new A,C=new A,b=new A),d||(m=0,f=0,g=0,_=0);const y=a.extractPoints(l);let M=y.shape;const P=y.holes;if(!vo.isClockWise(M)){M=M.reverse();for(let Z=0,se=P.length;Z<se;Z++){const I=P[Z];vo.isClockWise(I)&&(P[Z]=I.reverse())}}const F=vo.triangulateShape(M,P),B=M;for(let Z=0,se=P.length;Z<se;Z++){const I=P[Z];M=M.concat(I)}function W(Z,se,I){return se||console.error("THREE.ExtrudeGeometry: vec does not exist"),Z.clone().addScaledVector(se,I)}const z=M.length,K=F.length;function H(Z,se,I){let be,te,Se;const J=Z.x-se.x,ve=Z.y-se.y,le=I.x-Z.x,T=I.y-Z.y,S=J*J+ve*ve,N=J*T-ve*le;if(Math.abs(N)>Number.EPSILON){const X=Math.sqrt(S),Q=Math.sqrt(le*le+T*T),q=se.x-ve/X,Ae=se.y+J/X,ue=I.x-T/Q,Ee=I.y+le/Q,ot=((ue-q)*T-(Ee-Ae)*le)/(J*T-ve*le);be=q+J*ot-Z.x,te=Ae+ve*ot-Z.y;const oe=be*be+te*te;if(oe<=2)return new re(be,te);Se=Math.sqrt(oe/2)}else{let X=!1;J>Number.EPSILON?le>Number.EPSILON&&(X=!0):J<-Number.EPSILON?le<-Number.EPSILON&&(X=!0):Math.sign(ve)===Math.sign(T)&&(X=!0),X?(be=-ve,te=J,Se=Math.sqrt(S)):(be=J,te=ve,Se=Math.sqrt(S/2))}return new re(be/Se,te/Se)}const ce=[];for(let Z=0,se=B.length,I=se-1,be=Z+1;Z<se;Z++,I++,be++)I===se&&(I=0),be===se&&(be=0),ce[Z]=H(B[Z],B[I],B[be]);const pe=[];let me,Re=ce.concat();for(let Z=0,se=P.length;Z<se;Z++){const I=P[Z];me=[];for(let be=0,te=I.length,Se=te-1,J=be+1;be<te;be++,Se++,J++)Se===te&&(Se=0),J===te&&(J=0),me[be]=H(I[be],I[Se],I[J]);pe.push(me),Re=Re.concat(me)}for(let Z=0;Z<m;Z++){const se=Z/m,I=f*Math.cos(se*Math.PI/2),be=g*Math.sin(se*Math.PI/2)+_;for(let te=0,Se=B.length;te<Se;te++){const J=W(B[te],ce[te],be);ae(J.x,J.y,-I)}for(let te=0,Se=P.length;te<Se;te++){const J=P[te];me=pe[te];for(let ve=0,le=J.length;ve<le;ve++){const T=W(J[ve],me[ve],be);ae(T.x,T.y,-I)}}}const it=g+_;for(let Z=0;Z<z;Z++){const se=d?W(M[Z],Re[Z],it):M[Z];x?(C.copy(L.normals[0]).multiplyScalar(se.x),R.copy(L.binormals[0]).multiplyScalar(se.y),b.copy(v[0]).add(C).add(R),ae(b.x,b.y,b.z)):ae(se.x,se.y,0)}for(let Z=1;Z<=h;Z++)for(let se=0;se<z;se++){const I=d?W(M[se],Re[se],it):M[se];x?(C.copy(L.normals[Z]).multiplyScalar(I.x),R.copy(L.binormals[Z]).multiplyScalar(I.y),b.copy(v[Z]).add(C).add(R),ae(b.x,b.y,b.z)):ae(I.x,I.y,u/h*Z)}for(let Z=m-1;Z>=0;Z--){const se=Z/m,I=f*Math.cos(se*Math.PI/2),be=g*Math.sin(se*Math.PI/2)+_;for(let te=0,Se=B.length;te<Se;te++){const J=W(B[te],ce[te],be);ae(J.x,J.y,u+I)}for(let te=0,Se=P.length;te<Se;te++){const J=P[te];me=pe[te];for(let ve=0,le=J.length;ve<le;ve++){const T=W(J[ve],me[ve],be);x?ae(T.x,T.y+v[h-1].y,v[h-1].x+I):ae(T.x,T.y,u+I)}}}j(),ie();function j(){const Z=i.length/3;if(d){let se=0,I=z*se;for(let be=0;be<K;be++){const te=F[be];Ie(te[2]+I,te[1]+I,te[0]+I)}se=h+m*2,I=z*se;for(let be=0;be<K;be++){const te=F[be];Ie(te[0]+I,te[1]+I,te[2]+I)}}else{for(let se=0;se<K;se++){const I=F[se];Ie(I[2],I[1],I[0])}for(let se=0;se<K;se++){const I=F[se];Ie(I[0]+z*h,I[1]+z*h,I[2]+z*h)}}n.addGroup(Z,i.length/3-Z,0)}function ie(){const Z=i.length/3;let se=0;xe(B,se),se+=B.length;for(let I=0,be=P.length;I<be;I++){const te=P[I];xe(te,se),se+=te.length}n.addGroup(Z,i.length/3-Z,1)}function xe(Z,se){let I=Z.length;for(;--I>=0;){const be=I;let te=I-1;te<0&&(te=Z.length-1);for(let Se=0,J=h+m*2;Se<J;Se++){const ve=z*Se,le=z*(Se+1),T=se+be+ve,S=se+te+ve,N=se+te+le,X=se+be+le;Ne(T,S,N,X)}}}function ae(Z,se,I){c.push(Z),c.push(se),c.push(I)}function Ie(Z,se,I){He(Z),He(se),He(I);const be=i.length/3,te=w.generateTopUV(n,i,be-3,be-2,be-1);et(te[0]),et(te[1]),et(te[2])}function Ne(Z,se,I,be){He(Z),He(se),He(be),He(se),He(I),He(be);const te=i.length/3,Se=w.generateSideWallUV(n,i,te-6,te-3,te-2,te-1);et(Se[0]),et(Se[1]),et(Se[3]),et(Se[1]),et(Se[2]),et(Se[3])}function He(Z){i.push(c[Z*3+0]),i.push(c[Z*3+1]),i.push(c[Z*3+2])}function et(Z){r.push(Z.x),r.push(Z.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return g1(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];n.push(a)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new rc[i.type]().fromJSON(i)),new Fo(n,e.options)}}const m1={generateTopUV:function(s,e,t,n,i){const r=e[t*3],o=e[t*3+1],a=e[n*3],c=e[n*3+1],l=e[i*3],h=e[i*3+1];return[new re(r,o),new re(a,c),new re(l,h)]},generateSideWallUV:function(s,e,t,n,i,r){const o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[i*3],f=e[i*3+1],g=e[i*3+2],_=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new re(o,1-c),new re(l,1-u),new re(d,1-g),new re(_,1-p)]:[new re(a,1-c),new re(h,1-u),new re(f,1-g),new re(m,1-p)]}};function g1(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class du extends yc{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new du(e.radius,e.detail)}}class bt extends jt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new A,d=new A,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const w=[],v=p/n;let x=0;p===0&&o===0?x=.5/t:p===n&&c===Math.PI&&(x=-.5/t);for(let L=0;L<=t;L++){const R=L/t;u.x=-e*Math.cos(i+R*r)*Math.sin(o+v*a),u.y=e*Math.cos(o+v*a),u.z=e*Math.sin(i+R*r)*Math.sin(o+v*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(R+x,1-v),w.push(l++)}h.push(w)}for(let p=0;p<n;p++)for(let w=0;w<t;w++){const v=h[p][w+1],x=h[p][w],L=h[p+1][w],R=h[p+1][w+1];(p!==0||o>0)&&f.push(v,x,R),(p!==n-1||c<Math.PI)&&f.push(x,L,R)}this.setIndex(f),this.setAttribute("position",new Tt(g,3)),this.setAttribute("normal",new Tt(_,3)),this.setAttribute("uv",new Tt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bt(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ji extends jt{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],c=[],l=[],h=new A,u=new A,d=new A;for(let f=0;f<=n;f++)for(let g=0;g<=i;g++){const _=g/i*r,m=f/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(_),u.y=(e+t*Math.cos(m))*Math.sin(_),u.z=t*Math.sin(m),a.push(u.x,u.y,u.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(g/i),l.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=i;g++){const _=(i+1)*f+g-1,m=(i+1)*(f-1)+g-1,p=(i+1)*(f-1)+g,w=(i+1)*f+g;o.push(_,m,w),o.push(m,p,w)}this.setIndex(o),this.setAttribute("position",new Tt(a,3)),this.setAttribute("normal",new Tt(c,3)),this.setAttribute("uv",new Tt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ji(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class fu extends jt{constructor(e=new mp(new A(-1,-1,0),new A(-1,1,0),new A(1,1,0)),t=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:r};const o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new A,c=new A,l=new re;let h=new A;const u=[],d=[],f=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new Tt(u,3)),this.setAttribute("normal",new Tt(d,3)),this.setAttribute("uv",new Tt(f,2));function _(){for(let v=0;v<t;v++)m(v);m(r===!1?t:0),w(),p()}function m(v){h=e.getPointAt(v/t,h);const x=o.normals[v],L=o.binormals[v];for(let R=0;R<=i;R++){const C=R/i*Math.PI*2,b=Math.sin(C),y=-Math.cos(C);c.x=y*x.x+b*L.x,c.y=y*x.y+b*L.y,c.z=y*x.z+b*L.z,c.normalize(),d.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,u.push(a.x,a.y,a.z)}}function p(){for(let v=1;v<=t;v++)for(let x=1;x<=i;x++){const L=(i+1)*(v-1)+(x-1),R=(i+1)*v+(x-1),C=(i+1)*v+x,b=(i+1)*(v-1)+x;g.push(L,R,b),g.push(R,C,b)}}function w(){for(let v=0;v<=t;v++)for(let x=0;x<=i;x++)l.x=v/t,l.y=x/i,f.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new fu(new rc[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class rt extends ui{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Jh,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ai,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Yt extends rt{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new re(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ln(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ze(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ze(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ze(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class _1 extends ui{static get type(){return"MeshToonMaterial"}constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.color=new ze(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Jh,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}function La(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function x1(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function v1(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Qd(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let c=0;c!==e;++c)i[o++]=s[a+c]}return i}function yp(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}class $o{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class y1 extends $o{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:lr,endingEnd:lr}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,o=e+1,a=i[r],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case hr:r=e,a=2*t-n;break;case tc:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case hr:o=e,c=2*n-t;break;case tc:o=1,c=n+i[1]-i[0];break;default:o=e-1,c=t}const l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),_=g*g,m=_*g,p=-d*m+2*d*_-d*g,w=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,v=(-1-f)*m+(1.5+f)*_+.5*g,x=f*m-f*_;for(let L=0;L!==a;++L)r[L]=p*o[h+L]+w*o[l+L]+v*o[c+L]+x*o[u+L];return r}}class Mp extends $o{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[l+d]*u+o[c+d]*h;return r}}class M1 extends $o{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Ii{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=La(t,this.TimeBufferType),this.values=La(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:La(e.times,Array),values:La(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new M1(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Mp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new y1(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Io:t=this.InterpolantFactoryMethodDiscrete;break;case Lo:t=this.InterpolantFactoryMethodLinear;break;case Bc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Io;case this.InterpolantFactoryMethodLinear:return Lo;case this.InterpolantFactoryMethodSmooth:return Bc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(i!==void 0&&x1(i))for(let a=0,c=i.length;a!==c;++a){const l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Bc,r=e.length-1;let o=1;for(let a=1;a<r;++a){let c=!1;const l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(i)c=!0;else{const u=a*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){const _=t[u+g];if(_!==t[d+g]||_!==t[f+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];const u=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Ii.prototype.TimeBufferType=Float32Array;Ii.prototype.ValueBufferType=Float32Array;Ii.prototype.DefaultInterpolation=Lo;class Br extends Ii{constructor(e,t,n){super(e,t,n)}}Br.prototype.ValueTypeName="bool";Br.prototype.ValueBufferType=Array;Br.prototype.DefaultInterpolation=Io;Br.prototype.InterpolantFactoryMethodLinear=void 0;Br.prototype.InterpolantFactoryMethodSmooth=void 0;class Sp extends Ii{}Sp.prototype.ValueTypeName="color";class Cr extends Ii{}Cr.prototype.ValueTypeName="number";class S1 extends $o{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(i-t);let l=e*a;for(let h=l+a;l!==h;l+=4)hi.slerpFlat(r,0,o,l-a,o,l,c);return r}}class Pr extends Ii{InterpolantFactoryMethodLinear(e){return new S1(this.times,this.values,this.getValueSize(),e)}}Pr.prototype.ValueTypeName="quaternion";Pr.prototype.InterpolantFactoryMethodSmooth=void 0;class zr extends Ii{constructor(e,t,n){super(e,t,n)}}zr.prototype.ValueTypeName="string";zr.prototype.ValueBufferType=Array;zr.prototype.DefaultInterpolation=Io;zr.prototype.InterpolantFactoryMethodLinear=void 0;zr.prototype.InterpolantFactoryMethodSmooth=void 0;class Ir extends Ii{}Ir.prototype.ValueTypeName="vector";class bh{constructor(e="",t=-1,n=[],i=Zh){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=jn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(b1(n[o]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(Ii.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);const h=v1(c);c=Qd(c,1,h),l=Qd(l,1,h),!i&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new Cr(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){const l=e[a],h=l.name.match(r);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(l)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,g,_){if(f.length!==0){const m=[],p=[];yp(f,m,p,g),m.length!==0&&_.push(new u(d,m,p))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let u=0;u<l.length;u++){const d=l[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)f[d[g].morphTargets[_]]=-1;for(const _ in f){const m=[],p=[];for(let w=0;w!==d[g].morphTargets.length;++w){const v=d[g];m.push(v.time),p.push(v.morphTarget===_?1:0)}i.push(new Cr(".morphTargetInfluence["+_+"]",m,p))}c=f.length*o}else{const f=".bones["+t[u].name+"]";n(Ir,f+".position",d,"pos",i),n(Pr,f+".quaternion",d,"rot",i),n(Ir,f+".scale",d,"scl",i)}}return i.length===0?null:new this(r,c,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function w1(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Cr;case"vector":case"vector2":case"vector3":case"vector4":return Ir;case"color":return Sp;case"quaternion":return Pr;case"bool":case"boolean":return Br;case"string":return zr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function b1(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=w1(s.type);if(s.times===void 0){const t=[],n=[];yp(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const ms={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class T1{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){const f=l[u],g=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}}const E1=new T1;class Hr{constructor(e){this.manager=e!==void 0?e:E1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Hr.DEFAULT_MATERIAL_NAME="__DEFAULT";const zi={};class A1 extends Error{constructor(e,t){super(e),this.response=t}}class wp extends Hr{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=ms.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(zi[e]!==void 0){zi[e].push({onLoad:t,onProgress:n,onError:i});return}zi[e]=[],zi[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=zi[e],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0;let _=0;const m=new ReadableStream({start(p){w();function w(){u.read().then(({done:v,value:x})=>{if(v)p.close();else{_+=x.byteLength;const L=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let R=0,C=h.length;R<C;R++){const b=h[R];b.onProgress&&b.onProgress(L)}p.enqueue(x),w()}},v=>{p.error(v)})}}});return new Response(m)}else throw new A1(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a===void 0)return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{ms.add(e,l);const h=zi[e];delete zi[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{const h=zi[e];if(h===void 0)throw this.manager.itemError(e),l;delete zi[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class R1 extends Hr{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=ms.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=Do("img");function c(){h(),ms.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(u){h(),i&&i(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class C1 extends Hr{constructor(e){super(e)}load(e,t,n,i){const r=new tn,o=new R1(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class Sc extends Bt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ze(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class P1 extends Sc{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Bt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ze(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const vl=new je,ef=new A,tf=new A;class pu{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new re(512,512),this.map=null,this.mapPass=null,this.matrix=new je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new tu,this._frameExtents=new re(1,1),this._viewportCount=1,this._viewports=[new pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;ef.setFromMatrixPosition(e.matrixWorld),t.position.copy(ef),tf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(tf),t.updateMatrixWorld(),vl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(vl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class I1 extends pu{constructor(){super(new Rn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Er*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class mu extends Sc{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Bt.DEFAULT_UP),this.updateMatrix(),this.target=new Bt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new I1}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const nf=new je,to=new A,yl=new A;class L1 extends pu{constructor(){super(new Rn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new re(4,2),this._viewportCount=6,this._viewports=[new pt(2,1,1,1),new pt(0,1,1,1),new pt(3,1,1,1),new pt(1,1,1,1),new pt(3,0,1,1),new pt(1,0,1,1)],this._cubeDirections=[new A(1,0,0),new A(-1,0,0),new A(0,0,1),new A(0,0,-1),new A(0,1,0),new A(0,-1,0)],this._cubeUps=[new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,0,1),new A(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),to.setFromMatrixPosition(e.matrixWorld),n.position.copy(to),yl.copy(n.position),yl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(yl),n.updateMatrixWorld(),i.makeTranslation(-to.x,-to.y,-to.z),nf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(nf)}}class Zn extends Sc{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new L1}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class D1 extends pu{constructor(){super(new nu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class gu extends Sc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Bt.DEFAULT_UP),this.updateMatrix(),this.target=new Bt,this.shadow=new D1}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class yo{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class N1 extends Hr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=ms.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{t&&t(l),r.manager.itemEnd(e)}).catch(l=>{i&&i(l)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return ms.add(e,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){i&&i(l),ms.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});ms.add(e,c),r.manager.itemStart(e)}}class U1{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=sf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=sf();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function sf(){return performance.now()}class O1{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,o;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,r=e*i+i;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[r+a]=n[a];o=t}else{o+=t;const a=t/o;this._mixBufferRegion(n,r,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const c=t*this._origIndex;this._mixBufferRegion(n,i,c,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){a.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,o=i;r!==o;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]}_slerp(e,t,n,i){hi.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){const o=this._workIndex*r;hi.multiplyQuaternionsFlat(e,o,e,t,e,n),hi.slerpFlat(e,t,e,t,e,o,i)}_lerp(e,t,n,i,r){const o=1-i;for(let a=0;a!==r;++a){const c=t+a;e[c]=e[c]*o+e[n+a]*i}}_lerpAdditive(e,t,n,i,r){for(let o=0;o!==r;++o){const a=t+o;e[a]=e[a]+e[n+o]*i}}}const _u="\\[\\]\\.:\\/",F1=new RegExp("["+_u+"]","g"),xu="[^"+_u+"]",k1="[^"+_u.replace("\\.","")+"]",B1=/((?:WC+[\/:])*)/.source.replace("WC",xu),z1=/(WCOD+)?/.source.replace("WCOD",k1),H1=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",xu),V1=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",xu),G1=new RegExp("^"+B1+z1+H1+V1+"$"),W1=["material","materials","bones","map"];class X1{constructor(e,t,n){const i=n||xt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class xt{constructor(e,t,n){this.path=t,this.parsedPath=n||xt.parseTrackName(t),this.node=xt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new xt.Composite(e,t,n):new xt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(F1,"")}static parseTrackName(e){const t=G1.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);W1.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const c=n(a.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=xt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const o=e[i];if(o===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}xt.Composite=X1;xt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};xt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};xt.prototype.GetterByBindingType=[xt.prototype._getValue_direct,xt.prototype._getValue_array,xt.prototype._getValue_arrayElement,xt.prototype._getValue_toArray];xt.prototype.SetterByBindingTypeAndVersioning=[[xt.prototype._setValue_direct,xt.prototype._setValue_direct_setNeedsUpdate,xt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_array,xt.prototype._setValue_array_setNeedsUpdate,xt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_arrayElement,xt.prototype._setValue_arrayElement_setNeedsUpdate,xt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_fromArray,xt.prototype._setValue_fromArray_setNeedsUpdate,xt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class q1{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const r=t.tracks,o=r.length,a=new Array(o),c={endingStart:lr,endingEnd:lr};for(let l=0;l!==o;++l){const h=r[l].createInterpolant(null);a[l]=h,h.settings=c}this._interpolantSettings=c,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=qm,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,r=e._clip.duration,o=r/i,a=i/r;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,r=i.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);const c=a.parameterPositions,l=a.sampleValues;return c[0]=r,c[1]=r+n,l[0]=e/o,l[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const c=(e-r)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);const o=this._updateTime(t),a=this._updateWeight(e);if(a>0){const c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case jm:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(o),l[h].accumulateAdditive(a);break;case Zh:default:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(o),l[h].accumulate(i,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,r=this._loopCount;const o=n===Ym;if(e===0)return r===-1?i:o&&(r&1)===1?t-i:i;if(n===Gf){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=t||i<0){const a=Math.floor(i/t);i-=t*a,r+=Math.abs(a);const c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){const l=e<0;this._setEndings(l,!l,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(o&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=hr,i.endingEnd=hr):(e?i.endingStart=this.zeroSlopeAtStart?hr:lr:i.endingStart=tc,t?i.endingEnd=this.zeroSlopeAtEnd?hr:lr:i.endingEnd=tc)}_scheduleFading(e,t,n){const i=this._mixer,r=i.time;let o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,c=o.sampleValues;return a[0]=r,c[0]=t,a[1]=r+e,c[1]=n,this}}const Y1=new Float32Array(1);class j1 extends Hs{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,o=e._propertyBindings,a=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName;let h=l[c];h===void 0&&(h={},l[c]=h);for(let u=0;u!==r;++u){const d=i[u],f=d.name;let g=h[f];if(g!==void 0)++g.referenceCount,o[u]=g;else{if(g=o[u],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,c,f));continue}const _=t&&t._propertyBindings[u].binding.parsedPath;g=new O1(xt.create(n,f,_),d.ValueTypeName,d.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,c,f),o[u]=g}a[u].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,r=this._actionsByClip;let o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{const a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,o=this._actionsByClip,a=o[r],c=a.knownActions,l=c[c.length-1],h=e._byClipCacheIndex;l._byClipCacheIndex=h,c[h]=l,c.pop(),e._byClipCacheIndex=null;const u=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],c.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,r=this._bindings;let o=i[t];o===void 0&&(o={},i[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[i],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new Mp(new Float32Array(2),new Float32Array(2),1,Y1),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){const i=t||this._root,r=i.uuid;let o=typeof e=="string"?bh.findByName(i,e):e;const a=o!==null?o.uuid:e,c=this._actionsByClip[a];let l=null;if(n===void 0&&(o!==null?n=o.blendMode:n=Zh),c!==void 0){const u=c.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;l=c.knownActions[0],o===null&&(o=l._clip)}if(o===null)return null;const h=new q1(this,o,t,n);return this._bindAction(h,l),this._addInactiveAction(h,a,r),h}existingAction(e,t){const n=t||this._root,i=n.uuid,r=typeof e=="string"?bh.findByName(n,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(i,e,r,o);const a=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)a[l].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){const o=r.knownActions;for(let a=0,c=o.length;a!==c;++a){const l=o[a];this._deactivateAction(l);const h=l._cacheIndex,u=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,c=a[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}const i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(const o in r){const a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}const rf=new je;class K1{constructor(e,t,n=0,i=1/0){this.ray=new jo(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new eu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return rf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(rf),this}intersectObject(e,t=!0,n=[]){return Th(e,this,n,t),n.sort(of),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)Th(e[i],this,n,t);return n.sort(of),n}}function of(s,e){return s.distance-e.distance}function Th(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let o=0,a=r.length;o<a;o++)Th(r[o],e,t,!0)}}const af=new re;class wc{constructor(e=new re(1/0,1/0),t=new re(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=af.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,af).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Gh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Gh);class $1 extends cp{constructor(){super();const e=new un;e.deleteAttribute("uv");const t=new rt({side:bn}),n=new rt,i=new Zn(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);const r=new $(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const o=new $(e,n);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);const a=new $(e,n);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);const c=new $(e,n);c.position.set(6.167,.857,7.803),c.rotation.set(0,.561,0),c.scale.set(3.927,6.285,3.687),this.add(c);const l=new $(e,n);l.position.set(-2.017,.018,6.124),l.rotation.set(0,.333,0),l.scale.set(2.002,4.566,2.064),this.add(l);const h=new $(e,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);const u=new $(e,n);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);const d=new $(e,rr(50));d.position.set(-16.116,14.37,8.208),d.scale.set(.1,2.428,2.739),this.add(d);const f=new $(e,rr(50));f.position.set(-16.109,18.021,-8.207),f.scale.set(.1,2.425,2.751),this.add(f);const g=new $(e,rr(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);const _=new $(e,rr(43));_.position.set(-.462,8.89,14.52),_.scale.set(4.38,5.441,.088),this.add(_);const m=new $(e,rr(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);const p=new $(e,rr(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function rr(s){const e=new en;return e.color.setScalar(s),e}const no=new A;function Vn(s,e,t,n,i,r){const o=2*Math.PI*i/4,a=Math.max(r-2*i,0),c=Math.PI/4;no.copy(e),no[n]=0,no.normalize();const l=.5*o/(o+a),h=1-no.angleTo(s)/c;return Math.sign(no[t])===1?h*l:a/(o+a)+l+l*(1-h)}class Z1 extends un{constructor(e=1,t=1,n=1,i=2,r=.1){if(i=i*2+1,r=Math.min(e/2,t/2,n/2,r),super(1,1,1,i,i,i),i===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const a=new A,c=new A,l=new A(e,t,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,f=h.length/6,g=new A,_=.5/i;for(let m=0,p=0;m<h.length;m+=3,p+=2)switch(a.fromArray(h,m),c.copy(a),c.x-=Math.sign(c.x)*_,c.y-=Math.sign(c.y)*_,c.z-=Math.sign(c.z)*_,c.normalize(),h[m+0]=l.x*Math.sign(a.x)+c.x*r,h[m+1]=l.y*Math.sign(a.y)+c.y*r,h[m+2]=l.z*Math.sign(a.z)+c.z*r,u[m+0]=c.x,u[m+1]=c.y,u[m+2]=c.z,Math.floor(m/f)){case 0:g.set(1,0,0),d[p+0]=Vn(g,c,"z","y",r,n),d[p+1]=1-Vn(g,c,"y","z",r,t);break;case 1:g.set(-1,0,0),d[p+0]=1-Vn(g,c,"z","y",r,n),d[p+1]=1-Vn(g,c,"y","z",r,t);break;case 2:g.set(0,1,0),d[p+0]=1-Vn(g,c,"x","z",r,e),d[p+1]=Vn(g,c,"z","x",r,n);break;case 3:g.set(0,-1,0),d[p+0]=1-Vn(g,c,"x","z",r,e),d[p+1]=1-Vn(g,c,"z","x",r,n);break;case 4:g.set(0,0,1),d[p+0]=1-Vn(g,c,"x","y",r,e),d[p+1]=1-Vn(g,c,"y","x",r,t);break;case 5:g.set(0,0,-1),d[p+0]=Vn(g,c,"x","y",r,e),d[p+1]=1-Vn(g,c,"y","x",r,t);break}}}function gi(s,e){const t=document.createElement("canvas");return t.width=s,t.height=e,{c:t,g:t.getContext("2d")}}function Vs(s,e=1,t=1,n=!0){const i=new kr(s);return i.wrapS=i.wrapT=Us,i.repeat.set(e,t),i.anisotropy=8,n&&(i.colorSpace=zt),i}let Ml=7;const yt=()=>(Ml=Ml*16807%2147483647,(Ml-1)/2147483646);function ko(s=["#9c6b43","#a97650","#8f603b","#b0805a","#99673f","#a5724a"]){const{c:e,g:t}=gi(1024,1024),n=8,i=1024/n;for(let r=0;r<n;r++){let o=-yt()*400;for(;o<1024;){const a=300+yt()*380;t.fillStyle=s[Math.floor(yt()*s.length)],t.fillRect(o,r*i,a,i);for(let c=0;c<26;c++){t.strokeStyle=`rgba(${yt()<.5?"60,35,15":"210,170,120"},${.05+yt()*.08})`,t.lineWidth=1+yt()*2;const l=r*i+yt()*i;t.beginPath(),t.moveTo(o,l),t.bezierCurveTo(o+a*.3,l+(yt()-.5)*10,o+a*.6,l+(yt()-.5)*10,o+a,l+(yt()-.5)*6),t.stroke()}t.fillStyle="rgba(40,22,10,.55)",t.fillRect(o,r*i,3,i),o+=a}t.fillStyle="rgba(40,22,10,.6)",t.fillRect(0,r*i,1024,3)}return Vs(e,2.2,2.2)}function fs(s="#2e4a47",e="rgba(214,190,130,.22)"){const{c:t,g:n}=gi(512,512);n.fillStyle=s,n.fillRect(0,0,512,512);for(let r=0;r<900;r++)n.fillStyle=`rgba(0,0,0,${yt()*.035})`,n.fillRect(yt()*512,yt()*512,8+yt()*30,8+yt()*30);n.strokeStyle=e,n.fillStyle=e,n.lineWidth=2.2;const i=(r,o,a)=>{n.save(),n.translate(r,o),n.scale(a,a),n.beginPath(),n.moveTo(0,22),n.quadraticCurveTo(2,0,0,-22),n.stroke();for(let c=-2;c<=2;c++)n.beginPath(),n.ellipse(-7,c*8,7,2.6,-.5,0,Math.PI*2),n.fill(),n.beginPath(),n.ellipse(7,c*8-3,7,2.6,.5,0,Math.PI*2),n.fill();n.restore()};for(let r=0;r<4;r++)for(let o=-1;o<4;o++)i(64+o*128+r%2*64,64+r*128,1);return Vs(t,3,1.5)}function bp(s="#d9d2bf",e="#5d6e62"){const{c:t,g:n}=gi(512,512),i=4,r=512/i;for(let o=0;o<i;o++)for(let a=0;a<i;a++){n.fillStyle=(a+o)%2?s:e,n.fillRect(a*r,o*r,r,r);for(let c=0;c<40;c++)n.fillStyle=`rgba(0,0,0,${yt()*.04})`,n.fillRect(a*r+yt()*r,o*r+yt()*r,6,6)}n.strokeStyle="rgba(60,55,45,.5)",n.lineWidth=3;for(let o=0;o<=i;o++)n.beginPath(),n.moveTo(o*r,0),n.lineTo(o*r,512),n.stroke(),n.beginPath(),n.moveTo(0,o*r),n.lineTo(512,o*r),n.stroke();return Vs(t,3,3)}function Wa(s=["#6b2430","#1f2a44","#d6b26a","#2c3a5c","#b9863c","#7d2e3a","#e2cfa0"]){const{c:e,g:t}=gi(1024,768);t.fillStyle=s[0],t.fillRect(0,0,1024,768);const n=(i,r,o)=>{t.strokeStyle=o,t.lineWidth=r,t.strokeRect(i,i,1024-i*2,768-i*2)};n(26,20,s[1]),n(60,6,s[2]),n(92,30,s[3]),n(120,4,s[2]),t.fillStyle=s[2];for(let i=120;i<910;i+=46)t.beginPath(),t.arc(i,92,7,0,7),t.arc(i,676,7,0,7),t.fill();for(let i=140;i<640;i+=46)t.beginPath(),t.arc(92,i,7,0,7),t.arc(932,i,7,0,7),t.fill();t.save(),t.translate(512,384);for(let i=0;i<4;i++){t.fillStyle=[s[1],s[4],s[5],s[6]][i],t.beginPath();const r=210-i*50;for(let o=0;o<=16;o++){const a=o/16*Math.PI*2,c=o%2?r*.78:r;t.lineTo(Math.cos(a)*c*1.35,Math.sin(a)*c)}t.fill()}t.restore();for(let i=0;i<3e3;i++)t.fillStyle=`rgba(${yt()<.5?"0,0,0":"255,240,220"},${yt()*.05})`,t.fillRect(yt()*1024,yt()*768,3,3);return Vs(e,1,1)}function Qi(s,e=.07){const{c:t,g:n}=gi(256,256);n.fillStyle=s,n.fillRect(0,0,256,256);for(let i=0;i<256;i+=3)n.fillStyle=`rgba(0,0,0,${e})`,n.fillRect(0,i,256,1);for(let i=0;i<256;i+=3)n.fillStyle=`rgba(255,255,255,${e*.5})`,n.fillRect(i,0,1,256);return Vs(t,2,2)}function Tp(){const{c:s,g:e}=gi(512,512),t=e.createLinearGradient(0,0,0,512);t.addColorStop(0,"#0b1030"),t.addColorStop(.6,"#1b2350"),t.addColorStop(1,"#3a2c5a"),e.fillStyle=t,e.fillRect(0,0,512,512);for(let r=0;r<160;r++){e.fillStyle=`rgba(255,255,240,${.3+yt()*.7})`;const o=yt()*2;e.fillRect(yt()*512,yt()*360,o,o)}const n=e.createRadialGradient(370,120,10,370,120,90);n.addColorStop(0,"rgba(255,248,220,.9)"),n.addColorStop(.35,"rgba(255,240,200,.25)"),n.addColorStop(1,"rgba(255,240,200,0)"),e.fillStyle=n,e.fillRect(260,20,220,220),e.fillStyle="#f6edd0",e.beginPath(),e.arc(370,120,34,0,7),e.fill(),e.fillStyle="rgba(180,170,140,.35)",e.beginPath(),e.arc(360,112,7,0,7),e.arc(382,132,5,0,7),e.fill(),e.fillStyle="#070a18",e.beginPath(),e.moveTo(0,512);for(let r=0;r<=512;r+=16)e.lineTo(r,420-Math.abs(Math.sin(r*.05))*50-yt()*30);e.lineTo(512,512),e.fill(),e.lineWidth=14,e.strokeStyle="#070a18",e.lineCap="round",e.beginPath(),e.moveTo(-10,300),e.quadraticCurveTo(150,280,300,318),e.stroke(),e.lineWidth=6,e.beginPath(),e.moveTo(150,292),e.lineTo(210,250),e.stroke();const i=Vs(s);return i.wrapS=i.wrapT=Ti,i}function vu(){const{c:s,g:e}=gi(64,64),t=e.createRadialGradient(32,32,0,32,32,32);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.25,"rgba(255,255,255,.6)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),new kr(s)}function J1(s){const{c:e,g:t}=gi(256,320);if(s===0){const i=t.createLinearGradient(0,0,0,320);i.addColorStop(0,"#c9a06a"),i.addColorStop(1,"#5b3a4e"),t.fillStyle=i,t.fillRect(0,0,256,320),t.fillStyle="#2c2440",t.beginPath(),t.moveTo(0,320),t.lineTo(0,210),t.lineTo(90,150),t.lineTo(150,200),t.lineTo(256,130),t.lineTo(256,320),t.fill(),t.fillStyle="#f2e6c4",t.beginPath(),t.arc(180,80,26,0,7),t.fill()}else t.fillStyle="#20324a",t.fillRect(0,0,256,320),t.fillStyle="#e8dcc0",t.beginPath(),t.ellipse(128,160,90,52,0,0,7),t.fill(),t.fillStyle="#3f8f86",t.beginPath(),t.arc(128,160,38,0,7),t.fill(),t.fillStyle="#0d1520",t.beginPath(),t.arc(128,160,16,0,7),t.fill(),t.fillStyle="#fff",t.beginPath(),t.arc(140,148,7,0,7),t.fill();const n=new kr(e);return n.colorSpace=zt,n}function Q1(){const{c:s,g:e}=gi(512,512),t=e.createLinearGradient(0,0,0,512);t.addColorStop(0,"#7fb4e6"),t.addColorStop(.7,"#cfe3f0"),t.addColorStop(1,"#f3e7cf"),e.fillStyle=t,e.fillRect(0,0,512,512),e.fillStyle="rgba(255,255,255,.85)";for(const[i,r,o]of[[120,120,1],[360,80,.7],[300,200,.5]])for(let a=0;a<6;a++)e.beginPath(),e.arc(i+a*22*o,r+Math.sin(a)*8*o,26*o,0,7),e.fill();e.fillStyle="#5f8a4a",e.beginPath(),e.moveTo(0,512);for(let i=0;i<=512;i+=16)e.lineTo(i,400-Math.abs(Math.sin(i*.04))*70-yt()*20);e.lineTo(512,512),e.fill(),e.fillStyle="#3f6b3a",e.beginPath(),e.moveTo(0,512);for(let i=0;i<=512;i+=12)e.lineTo(i,450-Math.abs(Math.sin(i*.07+1))*40);e.lineTo(512,512),e.fill();const n=Vs(s);return n.wrapS=n.wrapT=Ti,n}function eM(s){const{c:e,g:t}=gi(256,320);t.fillStyle=["#fbf7ee","#f6f0ff","#eef8f2","#fff6e8"][s%4],t.fillRect(0,0,256,320),t.lineCap="round",t.lineJoin="round";const n=(a,c,l)=>{t.strokeStyle=a,t.lineWidth=c,t.beginPath(),l.forEach(([h,u],d)=>d?t.lineTo(h+(yt()-.5)*3,u+(yt()-.5)*3):t.moveTo(h,u)),t.stroke()},i=(a,c,l,h,u)=>{t.fillStyle=a,t.beginPath(),t.ellipse(c,l,h,u,0,0,7),t.fill()},r=s%4;if(r===0)i("#d9b07a",128,190,80,60),i("#d9b07a",128,120,60,50),i("#3a2a22",128,135,30,20),i("#222",105,110,7,8),i("#222",150,110,7,8),i("#e86a7a",128,160,9,14),n("#3a2a22",5,[[80,90],[70,120],[95,100]]),n("#3a2a22",5,[[175,90],[185,120],[160,100]]),n("#4a6cd1",4,[[30,290],[80,290],[130,286],[200,292]]);else if(r===1)i("#f3e2a0",200,60,26,26),n("#5a3a22",10,[[40,320],[60,200],[70,120]]),n("#5a3a22",6,[[60,200],[180,200]]),i("#8a6a4a",130,170,30,36),i("#fff",120,160,9,9),i("#fff",140,160,9,9),i("#000",120,160,4,4),i("#000",140,160,4,4);else if(r===2){n("#c0392b",5,[[40,300],[40,180],[128,110],[216,180],[216,300],[40,300]]),n("#7a3cff",5,[[110,300],[110,240],[146,240],[146,300]]),t.fillStyle="#7a3cff",t.font="bold 30px sans-serif",t.fillText("?",120,280);for(const[a,c]of[[70,"#6b3a2a"],[186,"#e8c25a"]])i(c,a,230,14,16),i("#f2c9a8",a,232,9,10),n("#333",3,[[a,245],[a,280],[a-10,300]]),n("#333",3,[[a,280],[a+10,300]])}else for(let a=100;a>5;a-=8)t.strokeStyle=["#7a3cff","#2fd4ff","#ff3d8b"][a/8%3|0],t.lineWidth=5,t.beginPath(),t.arc(128+Math.sin(a)*4,160,a,a*.1,a*.1+5.5),t.stroke();t.fillStyle=r%2?"#7a3cff":"#e8426f",t.font="italic bold 22px cursive",t.fillText(r%2?"Keira":"MILA",18,34);const o=new kr(e);return o.colorSpace=zt,o}function tM(){const{c:s,g:e}=gi(256,128);e.fillStyle="#f4f4f0",e.fillRect(0,0,256,128),e.fillStyle="#222";for(let n=0;n<12;n++){const i=n%6*44+(n>=6?22:0)+10,r=n>=6?90:38;e.beginPath();for(let o=0;o<5;o++){const a=o/5*6.283;e.lineTo(i+Math.cos(a)*12,r+Math.sin(a)*12)}e.fill()}const t=new kr(s);return t.colorSpace=zt,t}const Ve={x0:-5,x1:5,z0:-3,z1:3.2,h:3,kitchenX:1.6},$t=2.1,Jt=2.95,Eh=1.05,Te=(s,e=.7,t={})=>new rt({color:s,roughness:e,...t});function ct(s,e,t,n,i=.04,r=3){const o=new $(new Z1(s,e,t,r,Math.min(i,s/2,e/2,t/2)),n);return o.castShadow=!0,o.receiveShadow=!0,o}const vt=(s,e)=>(s.userData.item=e,s);function ge(s,e,t,n=new rt){const i=new $(new un(s,e,t),n);return i.castShadow=!0,i.receiveShadow=!0,i}function Lt(s,e,t,n,i=24){const r=new $(new ht(s,e,t,i),n);return r.castShadow=!0,r.receiveShadow=!0,r}const ee=(s,e,t,n,i)=>(s.position.set(e,t,n),i?.add(s),s);function nM(){const s=new Be,e={body:Qi("#8a6a3e",.09)},t=new Yt({map:e.body,roughness:.92,sheen:.4,sheenColor:new ze(14268810),sheenRoughness:.8}),n=2.5,i=1,r=ee(ct(n,.3,i,t,.06),0,.27,0,s),o=ee(ct(n,.62,.24,t,.1),0,.68,-i/2+.12,s),a=ee(ct(.24,.5,i,t,.1),-n/2+.12,.5,0,s),c=ee(ct(.24,.5,i,t,.1),n/2-.12,.5,0,s),l=Te(3876376,.5);for(const x of[-1,1])for(const L of[-1,1])ee(Lt(.035,.025,.12,l,10),x*(n/2-.12),.06,L*(i/2-.1),s);const h=(n-.48)/3,u=[];let d,f;for(let x=0;x<3;x++){const L=-h+x*h,R=ct(h-.02,.17,i-.26,t,.07,4);x===1?(d=new Be,d.position.set(L,.43,-i/2+.24),R.position.set(0,.085,(i-.26)/2),d.add(R),s.add(d),f=R):ee(R,L,.515,.12,s),u.push(R),ee(ct(h-.03,.42,.16,t,.08,4),L,.78,-i/2+.3,s).rotation.x=-.18}const g=ee(ge(h-.08,.02,i-.34,Te(1182228,1)),f.parent.position.x,.421,.13,s);g.castShadow=!1;const _=new Yt({map:Qi("#c9a77a",.08),roughness:.9,sheen:.5,sheenColor:new ze(16777215)});ee(ct(.42,.4,.14,_,.1,4),-n/2+.42,.78,-.12,s).rotation.set(-.3,.3,.1);const m=new Yt({color:2051390,roughness:.6,sheen:1,sheenColor:new ze(7328164),sheenRoughness:.35}),p=new Yt({color:12945966,roughness:.5,sheen:1,sheenColor:new ze(16769184)}),w=[r,o,a,c,...u];s.traverse(x=>{x.isMesh&&x.material===t&&(w.includes(x)||w.push(x))});const v=s.children.find(x=>x.material===_);return{group:s,cushionPivot:d,cushion:f,hitboxes:[f],restyle(x){for(const L of w)L.material=x?m:t;v.material=x?p:_,l.color.set(x?11570519:3876376),x&&(l.metalness=.8)}}}function iM(){const s=new Be,e=new Be;s.add(e);const t=Te(5913126,.6),n=1.6,i=2.3,r=.36;ee(ge(n,.05,r,t),0,i,0,e),ee(ge(.05,i,r,t),-n/2,i/2,0,e),ee(ge(.05,i,r,t),n/2,i/2,0,e),ee(ge(n,i,.03,Te(4007963,.8)),0,i/2,-r/2+.015,e);const o=[.08,.6,1.12,1.64];for(const g of o)ee(ge(n-.05,.04,r-.02,t),0,g,0,e);const a=[8203834,2898524,4156250,13213802,5978702,9067051,547,10974013,4873850,7021616];let c,l=3;o.forEach((g,_)=>{let m=-n/2+.06;for(;m<n/2-.12;){l=(l*7+3)%97;const p=.04+l%5*.012,w=.3+l%7*.025;if(_===2&&m>.1&&!c){const x=ge(.075,.42,.26,Te(2759485,.4,{emissive:6962431,emissiveIntensity:.18}));ee(x,m+.04,g+.02+.21,.02,e),c=x,m+=.09;continue}if(l%11===0){m+=.12;continue}const v=ge(p,w,.24+l%3*.02,Te(a[l%a.length],.75));ee(v,m+p/2,g+.02+w/2,.02,e),l%13===0&&(v.rotation.z=.25),m+=p+.004}});const h=new Be;s.add(h);const u=Te(460300,1);ee(ge(1,2,.02),0,1,-r/2-.02,h).material=u;const d=new $(new ji(.42,40),Te(2826808,.5,{metalness:.4}));ee(d,0,1,-r/2-0,h);const f=new $(new Ji(.42,.035,10,48),Te(10254908,.3,{metalness:.9,emissive:6962431,emissiveIntensity:.3}));ee(f,0,1,-r/2+.02,h);for(let g=0;g<6;g++){const _=g/6*Math.PI*2,m=new $(new ji(.035,3),new en({color:10482687}));ee(m,Math.cos(_)*.28,1+Math.sin(_)*.28,-r/2+.01,h).rotation.z=_}return h.visible=!1,{group:s,slider:e,oddBook:c,doorway:h}}function sM(){const s=new Be,e=new Yt({color:11126720,roughness:.35,clearcoat:.6}),t=.9,n=1.95,i=.72;ee(ct(t,n,i,e,.06),0,n/2,0,s);const r=ee(ge(t-.1,n-.5,.02,Te(16052714,.4,{emissive:16774880,emissiveIntensity:.25})),0,n/2-.15,i/2-.02,s);r.castShadow=!1;const o=new Be;o.position.set(t/2,0,i/2),s.add(o);const a=ee(ct(t,n-.04,.08,e,.05),-t/2,n/2,.04,o),c=Te(14540253,.15,{metalness:1});ee(ct(.04,.6,.05,c,.02),-t+.1,n/2+.2,.11,o),ee(Lt(.03,.03,.01,Te(14721072)),-.5,1.5,.085,o).rotation.x=Math.PI/2,ee(Lt(.03,.03,.01,Te(4156250)),-.3,1.38,.085,o).rotation.x=Math.PI/2;const l=new Zn(16773590,0,2.5,2);l.position.set(0,1.3,i/2+.3),s.add(l);const h=[];for(const u of[.55,.95,1.35]){const d=new Be;d.position.set(0,u,.2),s.add(d),ee(ge(t-.12,.02,.5,Te(15266559,.1,{transparent:!0,opacity:.6})),0,0,0,d),h.push(d)}return{group:s,door:o,doorMesh:a,light:l,shelves:h,hit:[a]}}function rM(s){const e=new Be;if(s==="milk"){ee(ct(.1,.24,.1,Te(16250094,.5),.02),0,.12,0,e),ee(ge(.102,.06,.102,Te(2912191,.5)),0,.14,0,e);const t=ee(ct(.26,.06,.12,Te(13152909,.9),.02),.22,.03,0,e);for(let n=0;n<4;n++)ee(new $(new bt(.025,12,8),Te(15918800,.6)),-.09+n*.06,.06,0,t).scale.y=1.25}else s==="fruit"?[12597547,15105570,8367676,13934615,12597547].forEach((n,i)=>ee(new $(new bt(.05,16,12),Te(n,.45)),-.24+i*.12,.05,i%2*.06,e)):s==="pizza"&&(ee(Lt(.2,.2,.05,Te(15260085,.9),6),0,.03,0,e),ee(ct(.14,.18,.1,Te(9323693,.5),.02),.26,.09,0,e),ee(Lt(.05,.05,.02,Te(13934615,.4)),.26,.19,0,e));return e}function oM(){const s=new Be,e=new Yt({color:10475752,roughness:.02,transmission:.9,thickness:.02,transparent:!0,opacity:.25});ee(ge(1.15,.6,.42,e),0,.3,0,s).castShadow=!1;const t=ee(ge(1.1,.5,.38,Te(1789803,.1,{emissive:933202,emissiveIntensity:.6,transparent:!0,opacity:.55})),0,.27,0,s);t.castShadow=!1,ee(ge(1.17,.04,.44,Te(2236962,.4)),0,.62,0,s),ee(ge(1.1,.05,.38,Te(12759680,1)),0,.03,0,s);for(let o=0;o<6;o++){const a=ee(Lt(.008,.015,.3+o%3*.08,Te(3046735,.8),5),-.45+o*.07,.2,-.1+o%2*.1,s);a.rotation.z=(o%3-1)*.15}ee(ge(.14,.2,.03,Te(5913126)),.35,.15,-.12,s);const n=[],i=[16747069,7337983,16769354,12610303];for(let o=0;o<5;o++){const a=new Be,c=new $(new bt(.04,12,8),Te(i[o%4],.4,{emissive:i[o%4],emissiveIntensity:.35}));c.scale.set(1.4,1,.6),a.add(c);const l=new $(new Rr(.03,.05,4),c.material);l.rotation.z=Math.PI/2,l.position.x=-.07,a.add(l),a.userData={r:.25+o*.05,s:.5+o*.13,y:.12+o*.07,p:o*1.7},s.add(a),n.push(a)}const r=new Zn(6281471,1.2,2.2,2);return r.position.set(0,.5,.4),s.add(r),{group:s,fish:n}}function aM(){const s=new Be;ee(Lt(.2,.15,.4,Te(2959925,.5)),0,.2,0,s);const e=Te(3107652,.6,{side:hn});for(let t=0;t<9;t++){const n=new $(new bt(.16,10,6),e);n.scale.set(.45,.08,1.4);const i=t/9*Math.PI*2;n.position.set(Math.cos(i)*.16,.7+t%3*.28,Math.sin(i)*.16),n.rotation.set(.6*Math.sin(i),-i,.6*Math.cos(i)),n.castShadow=!0,s.add(n),ee(Lt(.01,.01,.4+t%3*.28,Te(4020778),5),Math.cos(i)*.06,.4+(.4+t%3*.28)/2,Math.sin(i)*.06,s)}return s}function cM(){const s=new Be;ee(ct(.5,.1,.4,Te(6963496,.4),.02),0,.05,0,s);const e=ee(Lt(.17,.17,.01,Te(1118481,.25),32),-.04,.11,0,s);ee(Lt(.06,.06,.012,Te(14045242,.5)),0,.004,0,e);const t=ee(ge(.02,.02,.24,Te(13421772,.2,{metalness:1})),.17,.13,-.02,s);return t.rotation.y=.35,{group:s,disc:e}}function lM(s,e,t,n){const i=new Be,r=[],o=14;for(let h=0;h<=o;h++){const u=h/o;r.push(new A(s+(e-s)*u,t-Math.sin(u*Math.PI*3)**2*.22,n))}const a=new up(r);i.add(new $(new fu(a,80,.006,4),Te(2236962)));const c=new rt({color:16769704,emissive:16758861,emissiveIntensity:2.4});for(let h=0;h<22;h++){const u=a.getPoint(h/21);ee(new $(new bt(.025,8,6),c),u.x,u.y-.03,u.z,i)}const l=new Zn(16758891,1.4,5,2);return l.position.set((s+e)/2,t-.3,n+.4),i.add(l),i}function hM(){const s=new Be,e=Te(9071178,.85),t=Te(14271392,.9),n=ee(new $(new bt(.14,20,16),e),0,.15,0,s);n.scale.set(1,1.15,.9),n.castShadow=!0,ee(new $(new bt(.11,16,12),t),0,.12,.04,s).scale.set(.9,1.1,.8);const r=ee(new $(new bt(.12,20,16),e),0,.34,0,s);r.scale.set(1.1,.9,.95),r.castShadow=!0;const o=Te(15259832,.9),a=.35;for(const l of[-1,1]){const h=ee(new $(new ji(.06,24),o),l*.052,a,.105,s);h.rotation.y=l*.35;const u=ee(new $(new bt(.032,16,12),Te(16757279,.2,{emissive:16751104,emissiveIntensity:.5})),l*.052,a,.11,s);ee(new $(new bt(.017,12,8),Te(328965,.1)),0,0,.022,u);const d=ee(new $(new Rr(.03,.09,6),e),l*.085,.45,-.01,s);d.rotation.z=-l*.4}ee(new $(new Rr(.015,.04,6),Te(3811866)),0,.31,.125,s).rotation.x=Math.PI*.6;const c=[];for(const l of[-1,1]){const h=ee(new $(new bt(.1,12,10),e),l*.13,.15,-.01,s);h.scale.set(.35,1,.8),c.push(h)}return{group:s,wings:c,head:r}}function uM(){const s=new Be,e=Te(6969994,.95),t=new $(new Ji(.38,.11,12,32),e);return t.rotation.x=Math.PI/2,t.position.y=.1,t.castShadow=!0,t.receiveShadow=!0,s.add(t),ee(Lt(.38,.38,.06,Te(13220256,1)),0,.04,0,s),s}function Ep(){const s=new bt(.45,32,20,0,Math.PI*2,0,Math.PI/2),e=s.attributes.position;for(let r=0;r<e.count;r++){const o=e.getX(r),a=e.getY(r),c=e.getZ(r),l=Math.sin(o*9)*Math.cos(c*8)*.03+Math.sin(o*23+c*17)*.01;e.setXYZ(r,o*1.25+l,a*.55+l*2,c+l)}s.computeVertexNormals();const t=new rt({map:Qi("#a8743a",.12),roughness:.95}),n=new $(s,t);n.castShadow=!0,n.receiveShadow=!0;const i=new Be;i.add(n);for(let r=0;r<14;r++)ee(Lt(.006,.006,.07,Te(14731162),4),-.5+r*.075,.02,.43,i).rotation.x=1.2;return i}function dM(){const s=new Be,{x0:e,x1:t,z0:n,z1:i,h:r,kitchenX:o}=Ve,a=new $(new Zt(o-e,i-n),new rt({map:ko(),roughness:.55}));a.rotation.x=-Math.PI/2,a.position.set((e+o)/2,0,(n+i)/2),a.receiveShadow=!0,s.add(a);const c=new $(new Zt(t-o,i-n),new rt({map:bp(),roughness:.35}));c.rotation.x=-Math.PI/2,c.position.set((o+t)/2,.001,(n+i)/2),c.receiveShadow=!0,s.add(c),c.material.map.repeat.set(2.4,4.3);const l=Te(2760216,.9);ee(ge(t-e+.3,.3,.15,l),(e+t)/2,-.15,i+.075,s),ee(ge(.15,.3,i-n+.3),t+.075,-.15,(n+i)/2,s).material=l;const h=new $(new Zt(40,40),new en({visible:!1}));h.rotation.x=-Math.PI/2,s.add(h);const u=new rt({map:fs(),roughness:.85}),d=new rt({map:fs("#cdbf9f","rgba(90,110,95,.18)"),roughness:.85}),f=Te(15525074,.5),g=Te(2760216,.9),_=.15,m=(J,ve,le,T,S)=>{const N=ge(ve,T,_,S);return N.position.set(J,le+T/2,n-_/2),N.castShadow=!1,s.add(N),N},p=-.2,w=1.1,v=.95,x=2.3;m((e+p)/2,p-e,0,r,u),m((w+o)/2,o-w,0,r,u),m((p+w)/2,w-p,0,v,u),m((p+w)/2,w-p,x,r-x,u),m((o+t)/2,t-o,0,r,d),ee(ge(t-e+_,.06,_+.02,g),(e+t)/2-_/2,r+.03,n-_/2,s);const L=(J,ve,le,T)=>{const S=ge(_,T-le,ve-J,u);S.position.set(e-_/2,(le+T)/2,(J+ve)/2),S.castShadow=!1,s.add(S)};L(n,$t,0,r),L(Jt,i,0,r),L($t,Jt,2.05,r),ee(ge(_+.02,.06,i-n+_),e-_/2,r+.03,(n+i)/2-_/2,s).material=g,ee(ge(_+.02,r+.06,.06),e-_/2,(r+.06)/2,i+.03,s).material=g,ee(ge(o-e,.14,.03),(e+o)/2,.07,n+.015,s).material=f,ee(ge(.03,.14,$t-n),e+.015,.07,(n+$t)/2,s).material=f,ee(ge(.03,.14,i-Jt),e+.015,.07,(Jt+i)/2,s).material=f;for(const J of[$t-.04,Jt+.04])ee(ge(.05,2.12,.08),e+.02,1.06,J,s).material=f;ee(ge(.05,.08,Jt-$t+.16),e+.02,2.09,($t+Jt)/2,s).material=f,ee(ge(o-e,.04,.03),(e+o)/2,2.55,n+.015,s).material=f,ee(ge(.03,.04,i-n),e+.015,2.55,(n+i)/2,s).material=f;const R=Te(15327695,.45),C=new $(new Zt(4,3.4),new en({map:Tp()}));C.position.set((p+w)/2+.3,(v+x)/2+.1,n-1.4),s.add(C);const b=(p+w)/2,y=(v+x)/2,M=w-p,P=x-v;ee(ge(M+.12,.08,.26),b,v-.02,n+.02,s).material=R,ee(ge(M+.12,.07,.12),b,x+.03,n-.02,s).material=R,ee(ge(.07,P,.12),p-.03,y,n-.02,s).material=R,ee(ge(.07,P,.12),w+.03,y,n-.02,s).material=R,ee(ge(.04,P,.05),b,y,n-.06,s).material=R,ee(ge(M,.04,.05),b,y+.1,n-.06,s).material=R;const k=new $(new Zt(M,P),new Yt({color:9416920,roughness:.05,transparent:!0,opacity:.12}));k.position.set(b,y,n-.07),s.add(k);const F=new $(new Zt(M,P),new en({visible:!1}));F.position.set(b,y,n+.01),s.add(F);const B=new rt({map:Qi("#5b3a4e",.08),roughness:.95,side:hn});for(const J of[-1,1]){const ve=new Zt(.42,2.3,16,1),le=ve.attributes.position;for(let S=0;S<le.count;S++)le.setZ(S,Math.sin(le.getX(S)*40)*.035);ve.computeVertexNormals();const T=new $(ve,B);T.position.set(b+J*(M/2+.2),1.45,n+.09),T.castShadow=!0,s.add(T)}ee(Lt(.015,.015,M+1.1,Te(9071162,.3,{metalness:.8})),b,2.62,n+.1,s).rotation.z=Math.PI/2;const W=Te(2826520,.4);[[-2.7,0],[-1.4,1]].forEach(([J,ve],le)=>{const T=le?.55:.7,S=le?.68:.88;vt(ee(ge(T+.06,S+.06,.04,W),J,1.95,n+.02,s),le?"eyePainting":"painting");const N=new $(new Zt(T,S),new rt({map:J1(ve),roughness:.6}));N.position.set(J,1.95,n+.045),s.add(N),vt(N,le?"eyePainting":"painting")});const z=new $(new Zt(3.3,2.3),new rt({map:Wa(),roughness:1}));vt(z,"rug"),z.rotation.x=-Math.PI/2,z.position.set(-2.1,.006,-.7),z.receiveShadow=!0,s.add(z);const K=Te(5913124,.45),H=vt(new Be,"coffeeTable");H.position.set(-2.1,0,-.7),s.add(H),ee(ct(1.2,.06,.62,K,.02),0,.4,0,H);for(const J of[-1,1])for(const ve of[-1,1])ee(Lt(.025,.02,.38,K,8),J*.52,.19,ve*.24,H);ee(ct(.3,.05,.22,Te(2898524),.01),-.3,.455,.05,H).rotation.y=.2,ee(ct(.28,.04,.2,Te(8203834),.01),-.31,.5,.06,H).rotation.y=-.1,ee(Lt(.05,.04,.1,Te(14274752,.3)),.32,.48,-.05,H);const ce=ee(Lt(.04,.04,.12,Te(15722194,.6)),.1,.49,.1,H),pe=ee(new $(new bt(.012,8,6),new en({color:16761963})),0,.08,0,ce);pe.scale.y=1.8;const me=vt(new Be,"lamp");me.position.set(-3.95,0,-2.45),s.add(me);const Re=Te(11570519,.3,{metalness:.9});ee(Lt(.18,.2,.03,Re),0,.015,0,me),ee(Lt(.015,.015,1.6,Re,8),0,.8,0,me);const it=ee(new $(new ht(.2,.3,.32,28,1,!0),Te(15785136,.9,{side:hn,emissive:16758880,emissiveIntensity:.55})),0,1.7,0,me);it.castShadow=!1;const j=new Zn(16757611,6,7,1.6);j.position.set(-3.95,1.6,-2.2),s.add(j),vt(ee(ct(1.3,.62,.42,K,.03),.45,.31,n+.23,s),"sideboard");for(const J of[-1,1])ee(ge(.58,.48,.01,Te(6964784,.5)),.45+J*.31,.32,n+.445,s);ee(ct(.46,.7,1.3,K,.03),e+.25,.35,Eh,s);const ie=Te(4151890,.55),xe=Te(15130578,.25);vt(ee(ct(2.4,.86,.62,ie,.02),2.95,.43,n+.31,s),"sink"),ee(ge(2.46,.05,.66,xe),2.95,.885,n+.33,s);for(let J=0;J<4;J++)ee(ge(.55,.7,.01,Te(4876126,.5)),2.95-.9+J*.6,.43,n+.625,s);const ae=vt(ee(ge(.5,.02,.38,Te(12568264,.2,{metalness:.9})),2.4,.9,n+.32,s),"sink");ae.castShadow=!1;const Ie=ee(Lt(.015,.015,.3,Re,8),2.4,1.05,n+.1,s);ee(Lt(.012,.012,.14,Re,8),0,.15,.06,Ie).rotation.x=Math.PI/2,vt(ee(ct(1.15,.7,.36,ie,.02),2.2,2.05,n+.18,s),"cupboardL");const Ne=new Be;Ne.position.set(3.95,2.05,n+.37),s.add(Ne),ee(ct(1,.7,.36,ie,.02),3.35,2.05,n+.18,s).scale.z=1;const He=ee(ct(1,.68,.03,Te(4876126,.5),.01),-.5,0,0,Ne);ee(Lt(.015,.015,.05,Re),-.92,-.2,.03,Ne).rotation.x=Math.PI/2;const et=Te(2894896,.4),Z=new Zn(16766362,4,5,1.6);Z.position.set(3.1,2.2,.6),s.add(Z),vt(ee(Lt(.55,.55,.05,Te(13215610,.4),32),3.1,.75,.6,s),"kitchenTable"),ee(Lt(.05,.08,.72,et,10),3.1,.37,.6,s),ee(Lt(.3,.3,.03,et,20),3.1,.015,.6,s);for(const J of[-1,1]){const ve=new Be;ve.position.set(3.1+J*.85,0,.75),s.add(ve),ee(Lt(.2,.2,.05,Te(9067051,.5)),0,.5,0,ve),ee(Lt(.025,.04,.48,et,8),0,.24,0,ve)}const se=nM();vt(se.group,"couch"),se.group.position.set(-2.1,0,-2.42),s.add(se.group);const I=iM();vt(I.slider,"bookshelf"),I.group.position.set(e+.19,0,-.5),I.group.rotation.y=Math.PI/2,s.add(I.group);const be=sM();be.group.position.set(4.45,0,n+.38),s.add(be.group);const te=(J,ve,le,T)=>new wc(new re(J-le/2,ve-T/2),new re(J+le/2,ve+T/2)),Se=[te(-2.1,-2.42,2.5,1),te(-2.1,-.7,1.25,.66),te(e+.19,-.5,.4,1.6),te(e+.25,Eh,.5,1.3),te(-3.95,-2.45,.45,.45),te(.45,n+.23,1.3,.45),te(2.95,n+.31,2.4,.62),te(4.45,n+.38,.9,.75),te(3.1,.6,1.15,1.15),te(2.25,.75,.42,.42),te(3.95,.75,.42,.42)];return{group:s,floorHit:h,couch:se,shelf:I,fridge:be,windowSpot:new A(b,0,n+.85),windowHit:F,cabinetHit:He,cabinetDoor:Ne,lamp:j,blockers:Se,mats:{floor:a.material,paper:u,kpaper:d,curtain:B,sky:C.material,rug:z.material,walnut:K,cab:ie,trim:f,tile:c.material},rug:z}}function Ap(s=.3){const e=new Be,t=new Ri({transparent:!0,depthWrite:!1,uniforms:{t:{value:0},open:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.); }",fragmentShader:`
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
      }`}),n=new $(new ji(s,48),t);n.rotation.x=-Math.PI/2,e.add(n);const i=60,r=new Float32Array(i*3),o=new Float32Array(i);for(let d=0;d<i;d++)o[d]=Math.random();const a=new jt;a.setAttribute("position",new dn(r,3));const c=new vc(a,new Ko({map:vu(),size:.06,color:10479871,transparent:!0,depthWrite:!1,blending:Co}));c.frustumCulled=!1,e.add(c);const l=new Zn(9067775,0,3.5,1.8);l.position.y=.35,e.add(l);let h=0,u=0;return{group:e,hit:n,set open(d){u=d?1:0},get isOpen(){return u>.5},update(d,f,g=0){h+=(u-h)*Math.min(1,d*3),t.uniforms.t.value=f,t.uniforms.open.value=h,l.intensity=h*(3+Math.sin(f*3)*.6+g*20),e.visible=h>.01;for(let _=0;_<i;_++){const m=o[_],p=(f*(.25+m*.3)+m*7)%1,w=m*40+f*(.5+m),v=s*(.2+m*.7)*(1-p*.5);r[_*3]=Math.cos(w)*v,r[_*3+1]=p*(.9+g*2),r[_*3+2]=Math.sin(w)*v}a.attributes.position.needsUpdate=!0,c.material.opacity=h}}}function fM(s=16770984){const t=new Float32Array(18),n=new jt;n.setAttribute("position",new dn(t,3));const i=new Ko({map:vu(),size:.09,color:s,transparent:!0,depthWrite:!1,blending:Co}),r=new vc(n,i);return r.frustumCulled=!1,{points:r,update(o){for(let a=0;a<6;a++){const c=(o*.5+a/6)%1,l=a*2.4+o*.3;t[a*3]=Math.cos(l)*.25,t[a*3+1]=c*.35,t[a*3+2]=Math.sin(l)*.25}n.attributes.position.needsUpdate=!0,i.opacity=.35+Math.sin(o*2.2)*.25}}}function cf(s,e){if(e===Km)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===gh||e===Wf){let t=s.getIndex();if(t===null){const o=[],a=s.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===gh)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class pM extends Hr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new vM(t)}),this.register(function(t){return new yM(t)}),this.register(function(t){return new CM(t)}),this.register(function(t){return new PM(t)}),this.register(function(t){return new IM(t)}),this.register(function(t){return new SM(t)}),this.register(function(t){return new wM(t)}),this.register(function(t){return new bM(t)}),this.register(function(t){return new TM(t)}),this.register(function(t){return new xM(t)}),this.register(function(t){return new EM(t)}),this.register(function(t){return new MM(t)}),this.register(function(t){return new RM(t)}),this.register(function(t){return new AM(t)}),this.register(function(t){return new gM(t)}),this.register(function(t){return new LM(t)}),this.register(function(t){return new DM(t)})}load(e,t,n,i){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const l=yo.extractUrlBase(e);o=yo.resolveURL(l,this.path)}else o=yo.extractUrlBase(e);this.manager.itemStart(e);const a=function(l){i?i(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new wp(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Rp){try{o[st.KHR_BINARY_GLTF]=new NM(e)}catch(u){i&&i(u);return}r=JSON.parse(o[st.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new YM(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case st.KHR_MATERIALS_UNLIT:o[u]=new _M;break;case st.KHR_DRACO_MESH_COMPRESSION:o[u]=new UM(r,this.dracoLoader);break;case st.KHR_TEXTURE_TRANSFORM:o[u]=new OM;break;case st.KHR_MESH_QUANTIZATION:o[u]=new FM;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function mM(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const st={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class gM{constructor(e){this.parser=e,this.name=st.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let l;const h=new ze(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],In);const u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new gu(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Zn(h),l.distance=u;break;case"spot":l=new mu(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,Gi(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}}class _M{constructor(){this.name=st.KHR_MATERIALS_UNLIT}getMaterialType(){return en}extendParams(e,t,n){const i=[];e.color=new ze(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],In),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,zt))}return Promise.all(i)}}class xM{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class vM{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Yt}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new re(a,a)}return Promise.all(r)}}class yM{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Yt}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class MM{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Yt}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class SM{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Yt}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new ze(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],In)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,zt)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class wM{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Yt}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class bM{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Yt}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new ze().setRGB(a[0],a[1],a[2],In),Promise.all(r)}}class TM{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Yt}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class EM{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Yt}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new ze().setRGB(a[0],a[1],a[2],In),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,zt)),Promise.all(r)}}class AM{constructor(e){this.parser=e,this.name=st.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Yt}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class RM{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Yt}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class CM{constructor(e){this.parser=e,this.name=st.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class PM{constructor(e){this.parser=e,this.name=st.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class IM{constructor(e){this.parser=e,this.name=st.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class LM{constructor(e){this.name=st.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const c=i.byteOffset||0,l=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(f),h,u,d,i.mode,i.filter),f})})}else return null}}class DM{constructor(e){this.name=st.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const l of i.primitives)if(l.mode!==Wn.TRIANGLES&&l.mode!==Wn.TRIANGLE_STRIP&&l.mode!==Wn.TRIANGLE_FAN&&l.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],c={};for(const l in o)a.push(this.parser.getDependency("accessor",o[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{const h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,f=[];for(const g of u){const _=new je,m=new A,p=new hi,w=new A(1,1,1),v=new By(g.geometry,g.material,d);for(let x=0;x<d;x++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,x),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,x),c.SCALE&&w.fromBufferAttribute(c.SCALE,x),v.setMatrixAt(x,_.compose(m,p,w));for(const x in c)if(x==="_COLOR_0"){const L=c[x];v.instanceColor=new yh(L.array,L.itemSize,L.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&g.geometry.setAttribute(x,c[x]);Bt.prototype.copy.call(v,g),this.parser.assignFinalMaterial(v),f.push(v)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const Rp="glTF",io=12,lf={JSON:1313821514,BIN:5130562};class NM{constructor(e){this.name=st.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,io),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Rp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-io,r=new DataView(e,io);let o=0;for(;o<i;){const a=r.getUint32(o,!0);o+=4;const c=r.getUint32(o,!0);if(o+=4,c===lf.JSON){const l=new Uint8Array(e,io+o,a);this.content=n.decode(l)}else if(c===lf.BIN){const l=io+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class UM{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=st.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(const h in o){const u=Ah[h]||h.toLowerCase();a[u]=o[h]}for(const h in e.attributes){const u=Ah[h]||h.toLowerCase();if(o[h]!==void 0){const d=n.accessors[e.attributes[h]],f=_r[d.componentType];l[u]=f.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(f){for(const g in f.attributes){const _=f.attributes[g],m=c[g];m!==void 0&&(_.normalized=m)}u(f)},a,l,In,d)})})}}class OM{constructor(){this.name=st.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class FM{constructor(){this.name=st.KHR_MESH_QUANTIZATION}}class Cp extends $o{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=i-t,u=(n-t)/h,d=u*u,f=d*u,g=e*l,_=g-l,m=-2*f+3*d,p=f-d,w=1-m,v=p-d+u;for(let x=0;x!==a;x++){const L=o[_+x+a],R=o[_+x+c]*h,C=o[g+x+a],b=o[g+x]*h;r[x]=w*L+v*R+m*C+p*b}return r}}const kM=new hi;class BM extends Cp{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return kM.fromArray(r).normalize().toArray(r),r}}const Wn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},_r={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},hf={9728:Tn,9729:kn,9984:Df,9985:Fa,9986:co,9987:Xi},uf={33071:Ti,33648:ec,10497:Us},Sl={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Ah={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ls={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},zM={CUBICSPLINE:void 0,LINEAR:Lo,STEP:Io},wl={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function HM(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new rt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:$i})),s.DefaultMaterial}function Es(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Gi(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function VM(s,e,t){let n=!1,i=!1,r=!1;for(let l=0,h=e.length;l<h;l++){const u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const o=[],a=[],c=[];for(let l=0,h=e.length;l<h;l++){const u=e[l];if(n){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;o.push(d)}if(i){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;a.push(d)}if(r){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;c.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){const h=l[0],u=l[1],d=l[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function GM(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function WM(s){let e;const t=s.extensions&&s.extensions[st.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+bl(t.attributes):e=s.indices+":"+bl(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+bl(s.targets[n]);return e}function bl(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function Rh(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function XM(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const qM=new je;class YM{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new mM,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const c=a.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&o<98?this.textureLoader=new C1(this.options.manager):this.textureLoader=new N1(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new wp(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return Es(r,a,i),Gi(a,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(const c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const o=t[i].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(o,a)=>{const c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(const[l,h]of o.children.entries())r(h,a.children[l])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[st.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,o){n.load(yo.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=Sl[i.type],a=_r[i.componentType],c=i.normalized===!0,l=new a(i.count*o);return Promise.resolve(new dn(l,o,c))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],c=Sl[i.type],l=_r[i.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let _,m;if(f&&f!==u){const p=Math.floor(d/f),w="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let v=t.cache.get(w);v||(_=new l(a,p*f,i.count*f/h),v=new Ny(_,f/h),t.cache.add(w,v)),m=new su(v,c,d%f/h,g)}else a===null?_=new l(i.count*c):_=new l(a,d,i.count*c),m=new dn(_,c,g);if(i.sparse!==void 0){const p=Sl.SCALAR,w=_r[i.sparse.indices.componentType],v=i.sparse.indices.byteOffset||0,x=i.sparse.values.byteOffset||0,L=new w(o[1],v,i.sparse.count*p),R=new l(o[2],x,i.sparse.count*c);a!==null&&(m=new dn(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let C=0,b=L.length;C<b;C++){const y=L[C];if(m.setX(y,R[C*c]),c>=2&&m.setY(y,R[C*c+1]),c>=3&&m.setZ(y,R[C*c+2]),c>=4&&m.setW(y,R[C*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const i=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const d=(r.samplers||{})[o.sampler]||{};return h.magFilter=hf[d.magFilter]||kn,h.minFilter=hf[d.minFilter]||Xi,h.wrapS=uf[d.wrapS]||Us,h.wrapT=uf[d.wrapT]||Us,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Tn&&h.minFilter!==kn,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const o=i.images[e],a=self.URL||self.webkitURL;let c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(u){l=!0;const d=new Blob([u],{type:o.mimeType});return c=a.createObjectURL(d),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(c).then(function(u){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(_){const m=new tn(_);m.needsUpdate=!0,d(m)}),t.load(yo.resolveURL(u,r.path),g,void 0,f)})}).then(function(u){return l===!0&&a.revokeObjectURL(c),Gi(u,o),u.userData.mimeType=o.mimeType||XM(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[st.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[st.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=r.associations.get(o);o=r.extensions[st.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new Ko,ui.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new au,ui.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return rt}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let o;const a={},c=r.extensions||{},l=[];if(c[st.KHR_MATERIALS_UNLIT]){const u=i[st.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),l.push(u.extendParams(a,r,t))}else{const u=r.pbrMetallicRoughness||{};if(a.color=new ze(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],In),a.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",u.baseColorTexture,zt)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=hn);const h=r.alphaMode||wl.OPAQUE;if(h===wl.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===wl.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==en&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new re(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==en&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==en){const u=r.emissiveFactor;a.emissive=new ze().setRGB(u[0],u[1],u[2],In)}return r.emissiveTexture!==void 0&&o!==en&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,zt)),Promise.all(l).then(function(){const u=new o(a);return r.name&&(u.name=r.name),Gi(u,r),t.associations.set(u,{materials:e}),r.extensions&&Es(i,u,r),u})}createUniqueName(e){const t=xt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[st.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return df(c,a,t)})}const o=[];for(let a=0,c=e.length;a<c;a++){const l=e[a],h=WM(l),u=i[h];if(u)o.push(u.promise);else{let d;l.extensions&&l.extensions[st.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=df(new jt,l,t),i[h]={primitive:l,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){const h=o[c].material===void 0?HM(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){const l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let f=0,g=h.length;f<g;f++){const _=h[f],m=o[f];let p;const w=l[f];if(m.mode===Wn.TRIANGLES||m.mode===Wn.TRIANGLE_STRIP||m.mode===Wn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new Oy(_,w):new $(_,w),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===Wn.TRIANGLE_STRIP?p.geometry=cf(p.geometry,Wf):m.mode===Wn.TRIANGLE_FAN&&(p.geometry=cf(p.geometry,gh));else if(m.mode===Wn.LINES)p=new hp(_,w);else if(m.mode===Wn.LINE_STRIP)p=new cu(_,w);else if(m.mode===Wn.LINE_LOOP)p=new zy(_,w);else if(m.mode===Wn.POINTS)p=new vc(_,w);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&GM(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Gi(p,r),m.extensions&&Es(i,p,m),t.assignFinalMaterial(p),u.push(p)}for(let f=0,g=u.length;f<g;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&Es(i,u[0],r),u[0];const d=new Be;r.extensions&&Es(i,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Rn(Cn.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new nu(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Gi(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),o=i,a=[],c=[];for(let l=0,h=o.length;l<h;l++){const u=o[l];if(u){a.push(u);const d=new je;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new ou(a,c)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],c=[],l=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){const f=i.channels[u],g=i.samplers[f.sampler],_=f.target,m=_.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,w=i.parameters!==void 0?i.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",w)),l.push(g),h.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){const d=u[0],f=u[1],g=u[2],_=u[3],m=u[4],p=[];for(let w=0,v=d.length;w<v;w++){const x=d[w],L=f[w],R=g[w],C=_[w],b=m[w];if(x===void 0)continue;x.updateMatrix&&x.updateMatrix();const y=n._createAnimationTracks(x,L,R,C,b);if(y)for(let M=0;M<y.length;M++)p.push(y[M])}return new bh(r,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=i.weights.length;c<l;c++)a.morphTargetInfluences[c]=i.weights[c]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let l=0,h=a.length;l<h;l++)o.push(n.getDependency("node",a[l]));const c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){const h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,qM)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(l){return i._getNodeRef(i.cameraCache,r.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let h;if(r.isBone===!0?h=new lp:l.length>1?h=new Be:l.length===1?h=l[0]:h=new Bt,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=o),Gi(h,r),r.extensions&&Es(n,h,r),r.matrix!==void 0){const u=new je;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new Be;n.name&&(r.name=i.createUniqueName(n.name)),Gi(r,n),n.extensions&&Es(t,r,n);const o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(i.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,u=c.length;h<u;h++)r.add(c[h]);const l=h=>{const u=new Map;for(const[d,f]of i.associations)(d instanceof ui||d instanceof tn)&&u.set(d,f);return h.traverse(d=>{const f=i.associations.get(d);f!=null&&u.set(d,f)}),u};return i.associations=l(r),r})}_createAnimationTracks(e,t,n,i,r){const o=[],a=e.name?e.name:e.uuid,c=[];ls[r.path]===ls.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(a);let l;switch(ls[r.path]){case ls.weights:l=Cr;break;case ls.rotation:l=Pr;break;case ls.position:case ls.scale:l=Ir;break;default:switch(n.itemSize){case 1:l=Cr;break;case 2:case 3:default:l=Ir;break}break}const h=i.interpolation!==void 0?zM[i.interpolation]:Lo,u=this._getArrayFromAccessor(n);for(let d=0,f=c.length;d<f;d++){const g=new l(c[d]+"."+ls[r.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Rh(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof Pr?BM:Cp;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function jM(s,e,t){const n=e.attributes,i=new mi;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(i.set(new A(c[0],c[1],c[2]),new A(l[0],l[1],l[2])),a.normalized){const h=Rh(_r[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new A,c=new A;for(let l=0,h=r.length;l<h;l++){const u=r[l];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const _=Rh(_r[d.componentType]);c.multiplyScalar(_)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;const o=new Ci;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function df(s,e,t){const n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){s.setAttribute(a,c)})}for(const o in n){const a=Ah[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){const o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return lt.workingColorSpace!==In&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${lt.workingColorSpace}" not supported.`),Gi(s,e),jM(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?VM(s,e.targets,t):s})}const KM=new pM,$M=["UpperLeg_L","UpperLeg_R","LowerLeg_L","LowerLeg_R","UpperArm_L","UpperArm_R","LowerArm_L","LowerArm_R","Spine","Hips","Head","Foot_L","Foot_R","Leg_FL","Leg_FR","Leg_BL","Leg_BR"],ff=["crouch","jump","land","flip","cartwheel","wave","cheer"];class Bo{constructor(){this.root=new Be,this.bones={},this.actions={},this.clip="idle",this.path=[],this.onArrive=null,this.faceTo=null,this.speed=1.05,this.walk=0,this.phase=0,this.time=Math.random()*9,this.quadruped=!1,this.cartwheels=!1,this.steer=0,this.steerTime=0,this.lastX=0,this.lastZ=0,this.moved=0,this.wheelYaw=0,this.travelYaw=0,this.cwCool=2.5,this.wheeling=!1,this.lockClip=!1,this.restQ={},this.hipsY=0,this.sit=0,this.sitW=0,this.vS=0,this.sm={},this.reading=!1,this.book=null,this.dance=0,this.danceW=0,this.beat=0,this.legA=.29,this.legB=.28,this.ankleY=.09}static async load(e,t=!1){const n=await KM.loadAsync(e),i=new Bo;i.quadruped=t,i.model=n.scene,n.scene.traverse(r=>{r.name&&(i.bones[r.name]=r);const o=r;o.isMesh&&(o.castShadow=!0,o.frustumCulled=!1,/_flame/.test(r.name)&&(o.visible=!1))});for(const r of Object.keys(i.bones))/^Flame_/.test(r)&&i.bones[r].scale.setScalar(.001);i.root.add(n.scene),i.mixer=new j1(n.scene);for(const r of n.animations){r.tracks=r.tracks.filter(a=>!/^Flame_/.test(a.name));const o=i.mixer.clipAction(r);ff.includes(r.name)&&(o.setLoop(Gf,1),o.clampWhenFinished=!0),i.actions[r.name]=o}i.actions.idle?.play();for(const r of $M)i.bones[r]&&(i.restQ[r]=i.bones[r].quaternion.clone());return i.bones.Hips&&(i.hipsY=i.bones.Hips.position.y,i.measureLegs()),i.bones.Body&&(i.hipsY=i.bones.Body.position.y),i}play(e,t=.2){const n=this.actions[e];if(!n||this.clip===e&&!ff.includes(e))return;const i=this.actions[this.clip];n.reset().setEffectiveWeight(1).play(),i&&i!==n&&i.crossFadeTo(n,t,!1),this.clip=e}once(e,t){this.play(e,.12);const n=this.actions[e];if(!n){t?.();return}const i=r=>{r.action===n&&(this.mixer.removeEventListener("finished",i),this.clip===e&&this.play("idle",.3),t?.())};this.mixer.addEventListener("finished",i)}goTo(e,t,n){this.path=e.map(i=>i.clone()),this.onArrive=t||null,this.faceTo=n??null,this.path.length||this.arrive()}arrive(){const e=this.onArrive;this.onArrive=null,e?.()}remaining(){let e=0,t=this.root.position;for(const n of this.path)e+=Math.hypot(n.x-t.x,n.z-t.z),t=n;return e}get moving(){return this.path.length>0}update(e){this.time+=e;const t=this.root.position;let n=null;if(this.path.length){const c=this.path[0],l=c.x-t.x,h=c.z-t.z,u=Math.hypot(l,h),d=this.speed*e*(this.wheeling?1.25:.35+.65*this.walk);u<=d?(t.x=c.x,t.z=c.z,this.path.shift(),this.path.length||this.arrive()):(t.x+=l/u*d,t.z+=h/u*d,n=Math.atan2(l,h))}else this.faceTo!==null&&(n=this.faceTo);(this.path.length||this.steer>.08)&&(this.travelYaw=n??this.travelYaw);let i=8;if(this.wheeling&&(n=this.wheelYaw-Math.PI/2,i=30),n!==null){let c=n-this.root.rotation.y;c=Math.atan2(Math.sin(c),Math.cos(c));let l=c*Math.min(1,e*i);this.wheeling||(l=Math.max(-7*e,Math.min(7*e,l))),this.root.rotation.y+=l}this.steerTime=this.steer>.7?this.steerTime+e:0,this.cartwheels&&(this.path.length||this.steer>.7)&&!this.wheeling&&this.actions.cartwheel&&(this.cwCool-=e,this.cwCool<=0&&(this.remaining()>2.6||this.steerTime>1.2)&&(this.wheeling=!0,this.wheelYaw=this.travelYaw,this.cwCool=5+Math.random()*7,this.once("cartwheel",()=>{this.wheeling=!1})));const r=(this.path.length||this.steer>.08)&&!this.wheeling?1:0;this.walk+=(r-this.walk)*Math.min(1,e*6),this.moved=Math.hypot(t.x-this.lastX,t.z-this.lastZ),this.lastX=t.x,this.lastZ=t.z,this.moved>.5&&(this.moved=0);for(const c in this.restQ)this.bones[c].quaternion.copy(this.restQ[c]);const o=this.bones.Hips||this.bones.Body;o&&(o.position.y=this.hipsY),this.mixer.update(e),this.applyWalk(e),this.applyPose(e);const a=this.time%4.1<.12;for(const c of["Eye_L","Eye_R"])this.bones[c]&&this.clip!=="nap"&&(this.bones[c].scale.y=a?.1:1)}rot(e,t,n=0){const i=this.bones[e];i&&(i.rotation.x+=t,i.rotation.z+=n)}rotY(e,t){const n=this.bones[e];n&&(n.rotation.y+=t)}measureLegs(){const e=this.bones.UpperLeg_L,t=this.bones.LowerLeg_L,n=this.bones.Foot_L;!e||!t||!n||(this.legA=t.position.length(),this.legB=n.position.length(),this.ankleY=this.hipsY+e.position.y+t.position.y+n.position.y)}ikLeg(e,t,n,i,r){const o=this.bones.Hips,a=this.bones["UpperLeg_"+e],c=this.bones["LowerLeg_"+e],l=this.bones["Foot_"+e];if(!o||!a||!c||!l)return;const h=this.legA,u=this.legB,d=(h+u)*.999,f=n-o.position.y-a.position.y,g=t-a.position.z,_=Math.min(d,Math.max(.05,Math.hypot(f,g))),m=Math.PI-Math.acos(Math.min(1,Math.max(-1,(h*h+u*u-_*_)/(2*h*u)))),p=Math.acos(Math.min(1,Math.max(-1,(h*h+_*_-u*u)/(2*h*_)))),w=-(Math.atan2(g,-f)+p),v=(x,L)=>{x.rotation.x+=(L-x.rotation.x)*r};v(a,w),v(c,m),v(l,-(w+m)+i)}applyPose(e){if(this.quadruped)return;const t=Math.min(1,e*5);this.sitW+=(this.sit-this.sitW)*t,this.danceW+=(this.dance-this.danceW)*Math.min(1,e*4),this.book&&(this.book.visible=this.reading&&this.sitW>.6);const n=this.sitW;if(n>.01){const r=(o,a,c=0)=>{const l=this.bones[o];l&&(l.rotation.x+=(a-l.rotation.x)*n,l.rotation.z+=(c-l.rotation.z)*n)};if(r("UpperLeg_L",-1.5,-.04),r("UpperLeg_R",-1.5,.04),r("LowerLeg_L",1.35),r("LowerLeg_R",1.35),r("Foot_L",.25),r("Foot_R",.25),this.reading){const o=Math.max(0,Math.sin(this.time*.9))**30;r("UpperArm_L",-.5,-.22),r("UpperArm_R",-.5-o*.4,.22+o*.15),r("LowerArm_L",-.85),r("LowerArm_R",-.85),r("Head",.32+Math.sin(this.time*.37)*.03),r("Spine",.06)}else{r("UpperArm_L",-.25,-.05),r("UpperArm_R",-.25,.05),r("LowerArm_L",-.5),r("LowerArm_R",-.5);const o=this.bones.LowerLeg_L,a=this.bones.LowerLeg_R;o&&a&&(o.rotation.x-=Math.sin(this.time*2.4)*.25*n,a.rotation.x-=Math.sin(this.time*2.4+2)*.25*n)}}const i=this.danceW;if(i>.01&&this.bones.Hips){this.beat+=e*Math.PI*2*2.1;const r=this.beat,o=Math.floor(r/(Math.PI*2*8))%2,a=this.bones.Hips;a.position.y-=(.02+.03*(1-Math.cos(r))/2)*i,a.rotation.z+=Math.sin(r/2)*.07*i;const c=this.bones.Spine;c&&(c.rotation.z-=Math.sin(r/2)*.18*i,c.rotation.y+=Math.sin(r/4)*.2*i);const l=this.bones.Head;l&&(l.rotation.x+=Math.sin(r)*.1*i,l.rotation.z+=Math.sin(r/2)*.12*i);const h=Math.sin(r/2);if(o===0){const u=Math.pow(Math.abs(Math.cos(r/2)),6);this.rot("UpperArm_L",-.95*i,(-.12-.22*u+.15*h)*i),this.rot("UpperArm_R",-.95*i,(.12+.22*u+.15*h)*i),this.rot("LowerArm_L",-1.25*i),this.rot("LowerArm_R",-1.25*i)}else this.rot("UpperArm_L",-(.9+.5*Math.max(0,h))*i,-.15*i),this.rot("UpperArm_R",-(.9+.5*Math.max(0,-h))*i,.15*i),this.rot("LowerArm_L",-1.3*i),this.rot("LowerArm_R",-1.3*i);this.ikLeg("L",.01,this.ankleY,0,i),this.ikLeg("R",-.01,this.ankleY,0,i)}else this.beat=0}addBook(e=5974635){const t=this.bones.Chest||this.bones.Spine;if(!t||this.book)return;const n=new Be,i=new rt({color:e,roughness:.6}),r=new rt({color:15919832,roughness:.9});for(const o of[-1,1]){const a=new Be;a.rotation.y=o*.35,n.add(a);const c=new $(new un(.11,.15,.006),i);c.position.x=o*.055,a.add(c);const l=new $(new un(.1,.14,.012),r);l.position.set(o*.052,0,.009),a.add(l)}n.position.set(0,-.16,.19),n.rotation.x=-.85,n.visible=!1,t.add(n),this.book=n}applyWalk(e){const t=this.walk;if(t<.01||this.wheeling)return;const n=e>0?this.moved/e:0;if(this.quadruped){this.phase+=this.moved/.5;const b=Math.sin(this.phase*Math.PI*2),y=Math.cos(this.phase*Math.PI*2);this.rot("Leg_FL",b*.6*t),this.rot("Leg_BR",b*.6*t),this.rot("Leg_FR",-b*.6*t),this.rot("Leg_BL",-b*.6*t),this.bones.Body&&(this.bones.Body.position.y+=Math.abs(y)*.012*t);return}const i=(this.legA+this.legB)*.999,r=.6;this.vS+=(n-this.vS)*Math.min(1,e*3);const o=Math.min(i*1.3,i*(.6+.65*this.vS));this.phase=(this.phase+this.moved/o)%1;const a=r*o,c=Math.PI*2,l=this.bones.Hips;if(!l)return;const h=b=>(b=Math.min(1,Math.max(0,b)),b*b*(3-2*b)),u=b=>{let y,M=this.ankleY,P,k=b<r,F=0;if(k){const B=b/r;y=a/2-B*a,P=B<.15?-.22*(1-B/.15):.5*h((B-.7)/.3),P>0&&(M+=.075*Math.sin(P))}else{const B=(b-r)/(1-r);F=h((B-.6)/.4);const W=Math.min(1,Math.max(0,B)),z=-.5*(a/r)*(1-r),K=W*W,H=K*W;y=(2*H-3*K+1)*(-a/2)+(H-2*K+W)*z+(-2*H+3*K)*(a/2)+(H-K)*0,M+=.075*Math.sin(.5)*(1-h(B*2.5))+.045*Math.sin(Math.PI*Math.min(1,(1-Math.pow(1-B,1.5))/.95)),P=.5*(1-h(B*2.2))-.22*h((B-.55)/.45)}return{z:y,y:M,pitch:P,planted:k,land:F}},d=u(this.phase),f=u((this.phase+.5)%1),g=this.bones.UpperLeg_L,_=(this.legA+this.legB)*.995,m=b=>this.ankleY+Math.sqrt(Math.max(0,_*_-b*b))-g.position.y,p=Math.min(this.hipsY,m(0)),w=Math.max(m(a/2),p-.026),v=.5+.5*Math.cos(c*2*this.phase);l.position.y=this.hipsY+(p-(p-w)*v-this.hipsY)*t;const x=(b,y)=>{const M=this.bones["UpperLeg_"+b],P=this.bones["LowerLeg_"+b],k=this.bones["Foot_"+b];if(!M||!P||!k)return;const F=y.y-l.position.y-M.position.y,B=y.z-M.position.z,W=this.legA,z=this.legB,K=Math.min(i,Math.max(.05,Math.hypot(F,B))),H=Math.PI-Math.acos(Math.min(1,Math.max(-1,(W*W+z*z-K*K)/(2*W*z)))),ce=Math.acos(Math.min(1,Math.max(-1,(W*W+K*K-z*z)/(2*W*K)))),me=-(Math.atan2(B,-F)+ce),Re=(xe,ae)=>{const Ie=this.sm[xe],Ne=Ie===void 0?ae:Ie+(ae-Ie)*Math.min(1,e*22);return this.sm[xe]=Ne,Ne},it=Re("t"+b,me),j=Re("k"+b,H),ie=Re("f"+b,-(me+H)+y.pitch);M.rotation.x=it*t,P.rotation.x=j*t,k.rotation.x=ie*t};x("L",d),x("R",f);const L=Math.cos(c*(this.phase-.5)),R=.22+.16*Math.min(1,n/1.2);this.rot("UpperArm_L",-L*R*t),this.rot("UpperArm_R",L*R*t),this.rot("LowerArm_L",-(.2+Math.max(0,L)*.3)*t),this.rot("LowerArm_R",-(.2+Math.max(0,-L)*.3)*t);const C=.07*Math.cos(c*this.phase);this.rotY("Spine",C*t),this.rotY("Head",-C*.7*t),this.rot("Spine",.05*t)}}function ZM(s){const e=s.bones.Head;if(!e)return;const t=s.bones.Eye_L,n=s.bones.Eye_R,i=new Be,r=new Yt({color:1314844,roughness:.08,metalness:.2,clearcoat:1,clearcoatRoughness:.05}),o=new rt({color:15221359,roughness:.35}),a=new ac;a.absellipse(0,0,.026,.019,0,Math.PI*2,!1,0);const c=new Fo(a,{depth:.004,bevelEnabled:!0,bevelThickness:.002,bevelSize:.0025,bevelSegments:2,curveSegments:20});for(const l of[t,n]){if(!l)continue;const h=new $(c,r);h.position.set(l.position.x*1.05,l.position.y,l.position.z+.012),h.rotation.y=l.position.x*3.2,i.add(h);const u=new $(new Ji(.024,.0035,6,24),o);u.scale.set(1.12,.84,1),u.position.copy(h.position),u.position.z+=.003,u.rotation.copy(h.rotation),i.add(u)}if(t&&n){const l=new $(new ht(.003,.003,Math.abs(t.position.x-n.position.x)*.5,6),o);l.rotation.z=Math.PI/2,l.position.set(0,t.position.y+.006,t.position.z+.018),i.add(l)}return e.add(i),i}class JM{constructor(){this.dead=!1}}const qt=(s,e)=>new A(s,0,e),QM={stand:qt(-2.75,-1.55),sit:qt(-2.75,-2.2),y:-.03,face:0},pf={stand:qt(-1.45,-1.55),sit:qt(-1.45,-2.2),y:-.03,face:0},eS={stand:qt(1.75,.95),sit:qt(2.22,.75),y:-.1,face:Math.PI/2};class tS{constructor(e){this.c=e,this.token=null,this.standBack=null,this.rest=4,this.lastGeorge=-999,this.clock=0,this.active=!1,this.doing="",this.forced=null,this.keira=[{id:"read on the couch",weight:4,run:t=>this.sitOn(t,Math.random()<.5?QM:pf,!0,22+Math.random()*20)},{id:"kitchen table",weight:2,run:t=>this.sitOn(t,eS,!0,16+Math.random()*14)},{id:"sit and swing her feet",weight:1,run:t=>this.sitOn(t,pf,!1,10+Math.random()*8)},{id:"browse the shelf",weight:2,run:async t=>{const n=this.c.other(),i=qt(-4.15,-.2+Math.random()*.6);if(this.clear(i)){await this.walk(t,i,-Math.PI/2);for(let r=0;r<3;r++)n.faceTo=-Math.PI/2+(Math.random()-.5)*.5,await this.wait(t,3+Math.random()*3)}}},{id:"look out the window",weight:1,run:async t=>{const n=this.c.other(),i=qt(.05+(Math.random()-.5)*.6,-2.1);this.clear(i)&&(await this.walk(t,i,Math.PI),n.faceTo=Math.PI,await this.wait(t,8+Math.random()*6))}}],this.mila=[{id:"dance",weight:4,run:async t=>{const n=this.c.other(),i=this.spotFor([qt(.2,1.5),qt(-.6,1.9),qt(1,2.1),qt(-1.9,1.5)]);if(!i)return;await this.walk(t,i,.4),n.dance=1;const r=this.clock+9+Math.random()*7;for(;this.clock<r;)if(await this.wait(t,3.8),Math.random()<.6){const o=n.root.rotation.y,a=this.clock;for(n.faceTo=null;this.clock-a<.55;){if(t.dead)throw new Error("cancel");n.root.rotation.y=o+Math.PI*2*((this.clock-a)/.55),await this.wait(t,0)}n.root.rotation.y=o}n.dance=0,await this.wait(t,.4),n.once("cheer"),await this.wait(t,1.2)}},{id:"flips",weight:3,run:async t=>{const n=this.c.other(),i=this.spotFor([qt(.3,1.4),qt(-1.2,2.2),qt(1.2,1.9)]);if(!i)return;await this.walk(t,i,Math.random()*Math.PI*2);const r=2+Math.floor(Math.random()*2);for(let o=0;o<r;o++){if(await new Promise(a=>n.once("flip",a)),t.dead)throw new Error("cancel");await this.wait(t,.8+Math.random())}n.once("cheer"),await this.wait(t,1.5)}},{id:"splits",weight:2,ok:()=>!!this.c.other().actions.splits,run:async t=>{const n=this.c.other(),i=this.spotFor([qt(-.4,1.2),qt(.8,1.7)]);i&&(await this.walk(t,i,.3),n.play("splits",.4),n.lockClip=!0,await this.wait(t,6+Math.random()*4),n.lockClip=!1,n.play("idle",.4),await this.wait(t,.6))}},{id:"cartwheel across the room",weight:2,run:async t=>{const n=this.c.other(),r=n.root.position.x<0?qt(1.6,1.8):qt(-2.6,1.8);this.clear(r)&&(n.cwCool=0,await this.walk(t,r),n.once("cheer"),await this.wait(t,1.4))}},{id:"bother George",weight:3,ok:()=>{const t=this.c.george();return!!t&&t.clip==="nap"&&this.clock-this.lastGeorge>90},run:async t=>{const n=this.c.other(),i=this.c.george(),r=i.root.position,o=qt(r.x+.75,r.z+.15);if(!this.clear(o))return;this.lastGeorge=this.clock,await this.walk(t,o,Math.atan2(r.x-o.x,r.z-o.z)),await this.wait(t,.5),n.once("crouch"),await this.wait(t,.9),i.play("idle",.15),this.c.bark(),n.once("jump"),await this.wait(t,.5);const a=n.speed;n.speed=a*1.7;try{await this.walk(t,qt(-.6,1.9))}finally{n.speed=a}n.faceTo=Math.atan2(r.x-n.root.position.x,r.z-n.root.position.z),n.once("cheer"),await this.wait(t,3),i.clip==="idle"&&i.play("nap",1)}}]}force(e){this.release(0),this.forced=e}release(e=6){const t=this.c.other();this.token&&(this.token.dead=!0),this.token=null,this.active=!1,t.sit=0,t.reading=!1,t.dance=0,t.lockClip=!1,t.sitW=0,t.danceW=0,t.root.position.y=0,this.standBack&&(t.root.position.x=this.standBack.x,t.root.position.z=this.standBack.z,this.standBack=null),t.clip!=="idle"&&t.play("idle",.2),this.rest=e}update(e){if(this.clock+=e,this.active){this.c.free()||this.release();return}if(!this.c.free()){this.rest=Math.max(this.rest,2);return}if(this.c.other().moving||(this.rest-=e,this.rest>0))return;const n=(this.c.who()==="keira"?this.keira:this.mila).filter(a=>!a.ok||a.ok());let i=Math.random()*n.reduce((a,c)=>a+c.weight,0);const r=this.forced&&n.find(a=>a.id===this.forced)||n.find(a=>(i-=a.weight)<=0)||n[0];this.forced=null,this.doing=r.id;const o=new JM;this.token=o,this.active=!0,r.run(o).catch(()=>{}).finally(()=>{this.token===o&&(this.token=null,this.active=!1,this.rest=5+Math.random()*8)})}wait(e,t){return new Promise((n,i)=>{const r=this.clock+t,o=()=>{if(e.dead)return i(new Error("cancel"));if(this.clock>=r)return n();requestAnimationFrame(o)};requestAnimationFrame(o)})}walk(e,t,n){const i=this.c.other();return new Promise((r,o)=>{if(e.dead)return o(new Error("cancel"));i.goTo([t],()=>e.dead?o(new Error("cancel")):r(),n);const a=()=>{if(e.dead)return i.goTo([]),o(new Error("cancel"));i.moving&&requestAnimationFrame(a)};requestAnimationFrame(a)})}clear(e){return e.distanceTo(this.c.me().root.position)>1.1}async slide(e,t,n,i,r,o){const a=this.c.other(),c=this.clock;for(;this.clock-c<o;){if(e.dead)throw new Error("cancel");const l=(this.clock-c)/o,h=l*l*(3-2*l);a.root.position.lerpVectors(t,n,h),a.root.position.y=i+(r-i)*h,await this.wait(e,0)}a.root.position.copy(n),a.root.position.y=r}async sitOn(e,t,n,i){const r=this.c.other();this.clear(t.stand)&&(await this.walk(e,t.stand,t.face),r.faceTo=t.face,await this.wait(e,.35),r.root.rotation.y=t.face,this.standBack=t.stand.clone(),r.reading=n,r.sit=1,await this.slide(e,t.stand,t.sit,0,t.y,.7),await this.wait(e,i),r.sit=0,await this.slide(e,t.sit,t.stand,t.y,0,.6),r.reading=!1,this.standBack=null)}spotFor(e){const t=e.filter(n=>this.clear(n));return t.length?t[Math.floor(Math.random()*t.length)]:null}}const on=(s,e=.6,t=0)=>new rt({color:s,roughness:e,metalness:t}),Gt=(s,e,t=0,n=0,i=0)=>{const r=new $(s,e);return r.position.set(t,n,i),r.castShadow=!0,r},an=(...s)=>{const e=new Be;for(const t of s)e.add(t);return e},zo={treat:{name:"Dog treat",icon:"🦴",kind:"useful",text:"A crunchy bone-shaped treat. George can smell it from three rooms away.",make:()=>{const s=on(13209426,.7);return an(Gt(new un(.09,.022,.026),s,0,.013),...[-1,1].flatMap(e=>[Gt(new bt(.017,10,8),s,e*.048,.015,.012),Gt(new bt(.017,10,8),s,e*.048,.015,-.012)]))}},fishFood:{name:"Fish food",icon:"🐟",kind:"useful",text:'A little tub of fish flakes. The label says "for deep-sea fish only". Weird.',make:()=>an(Gt(new ht(.03,.03,.07,14),on(15194552,.5),0,.035),Gt(new ht(.032,.032,.015,14),on(3112332,.4),0,.075))},flashlight:{name:"Flashlight",icon:"🔦",kind:"useful",text:"A heavy old flashlight. It still works. Good for dark places.",make:()=>{const s=an(Gt(new ht(.02,.02,.15,12),on(2829104,.4,.5)),Gt(new ht(.032,.022,.04,14),on(12105916,.3,.8),0,.09));return s.rotation.z=Math.PI/2,s.position.y=.03,an(s)}},crayons:{name:"Crayons",icon:"🖍️",kind:"useful",text:"A box of crayons. The purple one is worn right down to a stub.",make:()=>{const s=an(Gt(new un(.1,.02,.06),on(15254855,.6),0,.01));return[14240330,4881369,6963104,4169818].forEach((e,t)=>s.add(Gt(new ht(.006,.006,.05,6),on(e),-.03+t*.02,.026,.03).rotateX(Math.PI/2))),s}},seeds:{name:"Seed packet",icon:"🌱",kind:"useful",text:"A packet of seeds. Hand-written on the front: <i>DO NOT PLANT INDOORS.</i>",make:()=>{const s=Gt(new un(.07,.004,.1),on(10251066,.8),0,.003);return s.rotation.y=.4,an(s)}},marble:{name:"Marble",icon:"🔮",kind:"junk",text:"A glass marble with a twist of blue inside. Keira says there's a galaxy in it.",make:()=>an(Gt(new bt(.022,16,12),new Yt({color:9422847,roughness:.05,transmission:.4,thickness:.02}),0,.022))},button:{name:"Button",icon:"🔘",kind:"junk",text:"A big coat button. Nobody's coat is missing one.",make:()=>an(Gt(new ht(.022,.022,.006,18),on(8010542,.4),0,.003))},cap:{name:"Bottle cap",icon:"⭕",kind:"junk",text:"A bottle cap. Mila is collecting them. She has one.",make:()=>an(Gt(new ht(.018,.018,.008,14),on(11874347,.4,.6),0,.004))},pebble:{name:"Smooth pebble",icon:"🪨",kind:"junk",text:"A perfectly smooth grey pebble. It's a little warm.",make:()=>{const s=Gt(new uu(.025,1),on(9079430,.9),0,.016);return s.scale.set(1.3,.6,1),an(s)}},feather:{name:"Feather",icon:"🪶",kind:"junk",text:"A soft grey-brown feather. It looks like one of the owl's.",make:()=>{const s=Gt(new Rr(.014,.12,8),on(10127990,.9),0,.006);return s.rotation.z=Math.PI/2,s.scale.set(1,1,.25),an(s)}},band:{name:"Rubber band",icon:"➰",kind:"junk",text:"A rubber band. Mila has already flicked it at Keira twice.",make:()=>{const s=Gt(new Ji(.025,.003,6,18),on(14262842,.7),0,.004);return s.rotation.x=Math.PI/2,an(s)}},sock:{name:"Odd sock",icon:"🧦",kind:"junk",text:"One sock. The other one is in another world, probably.",make:()=>{const s=Gt(new un(.05,.02,.17),on(8366025,.9),0,.01);return s.rotation.y=.7,an(s)}},spoon:{name:"Bent spoon",icon:"🥄",kind:"junk",text:"A spoon, bent in half. Nobody admits to it.",make:()=>{const s=on(13224396,.25,.9),e=an(Gt(new un(.1,.006,.012),s,0,.006),Gt(new bt(.02,10,8),s,.06,.01,0));return e.children[1].scale.set(1.3,.4,1),e.rotation.y=1.1,an(e)}},screw:{name:"Mystery screw",icon:"🔩",kind:"junk",text:"A screw. It came out of <i>something</i>. Hopefully not something important.",make:()=>{const s=an(Gt(new ht(.004,.004,.04,6),on(10132128,.3,.8),0,0,0),Gt(new ht(.009,.009,.004,10),on(10132128,.3,.8),0,.02,0));return s.rotation.z=Math.PI/2,s.position.y=.008,an(s)}},lint:{name:"Dust bunny",icon:"☁️",kind:"junk",text:"A big fluffy dust bunny. It might be alive.",make:()=>an(Gt(new du(.03,1),on(12170155,1),0,.025))}},nS=[{id:"treat",lvl:0,at:[3.55,-1.6]},{id:"crayons",lvl:0,at:[-.95,-.05]},{id:"seeds",lvl:0,at:[-.35,-2.55]},{id:"fishFood",lvl:0,at:[1.15,-2.45]},{id:"flashlight",lvl:1,at:[-.9,-1.7]}],iS=[[-4.3,1.9],[-.3,2.75],[1.9,-1],[4.3,2.6],[-3.3,-1.3],[.95,.5],[2.7,2.5],[-4.55,-2.5],[3.5,-.4],[-1.9,2.6]],sS=["marble","button","cap","pebble","feather","band","sock","spoon","screw","lint"],Ch=12,rS=9;function Pp(s,e){const t=s.find(n=>n.id===e&&n.n<rS);return t?(t.n++,!0):s.length>=Ch?!1:(s.push({id:e,n:1}),!0)}function Ph(s,e){const t=s.findIndex(n=>n.id===e);return t<0?!1:(--s[t].n<=0&&s.splice(t,1),!0)}const Ip=(s,e)=>s.filter(t=>t.id===e).reduce((t,n)=>t+n.n,0),Ih="keiramila.save.v1",Lh="kmhouse.v1",oS={companions:[],companion:null,inbox:[],owned:[],found:[],treasures:[],seenBolts:-1,hero:"keira",visits:0,bags:{keira:[],mila:[]},got:[],torch:!1};function bc(s){try{return JSON.parse(localStorage.getItem(s)||"null")}catch{return null}}function Lp(s,e){try{localStorage.setItem(s,JSON.stringify(e))}catch{}}function aS(){const s=bc(Lh),e={...oS,...s&&typeof s=="object"?s:{}};for(const t of["companions","inbox","owned","found","treasures","got"])Array.isArray(e[t])||(e[t]=[]);(!e.bags||typeof e.bags!="object")&&(e.bags={keira:[],mila:[]});for(const t of["keira","mila"])Array.isArray(e.bags[t])||(e.bags[t]=[]);return e}function cS(s){const e=bc(Lh);if(e&&Array.isArray(e.inbox))for(const t of e.inbox)!s.inbox.includes(t)&&!s.treasures.includes(t)&&s.inbox.push(t);Lp(Lh,s)}function yu(){const s=bc(Ih);return s&&typeof s.bolts=="number"?s.bolts:0}function Mu(s){const e=bc(Ih)||{};return e.bolts=Math.max(0,(typeof e.bolts=="number"?e.bolts:0)+s),Lp(Ih,e),e.bolts}const Ot=(s,e=.7,t={})=>new rt({color:s,roughness:e,...t}),It=(s,e,t,n,i)=>(s.position.set(e,t,n),i.add(s),s);function lS(s,e,t){s.traverse(n=>{const i=n.material;i&&i.color&&i.color.getHex()===e&&i.color.set(t)})}function Tl(s,e,t,n,i){const r=bp(e,t);r.repeat.set(2.4,4.3),Gn(s.H.mats.tile,r),s.H.mats.cab.color.set(n),lS(s.scene,4876126,i)}function Gn(s,e){const t=s;t.map?.dispose(),t.map=e,t.needsUpdate=!0}function El(s,e,t=.4){const n=Qi(e,.08);s.couch.group.traverse(i=>{const r=i.material;r&&r.isMeshPhysicalMaterial&&r.map&&(r.map=n,r.sheen=t,r.needsUpdate=!0)})}function Al(s,e={}){const t=new Be;if(s.add(t),e.drawings!==!1){const w=Ot(15984840,.9,{transparent:!0,opacity:.85}),v=(L,R,C,b,y,M=0,P=1,k=t)=>{const F=new $(new Zt(.34*P,.42*P),new rt({map:eM(L),roughness:.95}));F.position.set(R,C,b),F.rotation.set(0,M,y),k.add(F),vt(F,"drawing"+L);const B=new $(new Zt(.1,.03),w);B.position.set(0,.2*P,.002),B.rotation.z=.2,F.add(B)};v(0,-3.35,1.7,Ve.z0+.012,.08),v(2,-.75,1.55,Ve.z0+.012,-.06),v(3,-.62,2.05,Ve.z0+.012,.1,0,.8);const x=e.fridgeDoor;x&&(v(1,-.6,1.45,.086,-.05,0,.8,x),v(0,-.3,1.05,.086,.07,0,.7,x))}const n=(w,v,x,L)=>{const R=vt(new Be,"shoes");return R.position.set(v,0,x),R.rotation.y=L,t.add(R),It(ct(.11,.08,.26,Ot(w,.6),.04),0,.04,0,R),It(ct(.115,.025,.27,Ot(16052714,.7),.01),0,.012,0,R),R};for(const w of[n(15221359,-.4,2.4,.4)])vt(w,"shoes");n(15221359,-.15,2.55,-.9).rotation.z=1.4,n(4156298,.6,2.1,2.2),n(4156298,.85,2.3,1.7);const i=vt(new Be,"backpack");i.position.set(-.68,0,-2),i.rotation.set(0,-.5,-.12),t.add(i),It(ct(.36,.44,.2,Ot(6967203,.8),.08),0,.22,0,i),It(ct(.26,.16,.08,Ot(5915280,.8),.04),0,.14,.12,i),It(ct(.04,.3,.02,Ot(2761272),.01),.1,.3,-.11,i);const r=vt(Ep(),"throw");r.scale.set(.9,.45,.8),r.position.set(-3.05,.45,-2.2),r.rotation.set(.2,.4,-.35),t.add(r),r.children[0].material=new rt({map:Qi("#3f6b5a",.14),roughness:.95}),vt(It(ct(.45,.14,.45,new Yt({map:Qi("#d9925a",.08),roughness:.9,sheen:.5}),.07,4),-1,.07,-1.1,t),"floorPillow").rotation.y=.6;const o=[8203834,2898524,13213802,4156250,5978702];for(let w=0;w<5;w++)vt(It(ge(.26-w*.015,.05,.19,Ot(o[w],.7)),1.3,.025+w*.05,1.2,t),"bookStack").rotation.y=(w%2-.5)*.3;const a=new Be;a.position.set(-2.85,.015,-.1),a.rotation.y=.7,t.add(a);for(const w of[-1,1]){const v=It(ge(.17,.02,.24,Ot(2898524,.6)),w*.085,.03,0,a);v.rotation.z=-w*.25}const c=vt(It(new $(new bt(.11,24,16),new rt({map:tM(),roughness:.5})),.9,.11,1.4,t),"ball");c.castShadow=!0;const l=vt(new Be,"laundry");l.position.set(-1.7,0,2.6),t.add(l);const h=Ot(12098154,.95);It(new $(new ht(.3,.25,.38,20,1,!0),Object.assign(h,{side:hn})),0,.19,0,l).castShadow=!0,[15913176,10273760,16052714,6967203,15254106].forEach((w,v)=>It(new $(new bt(.13,10,8),Ot(w,.95)),Math.cos(v*1.3)*.12,.36+v%2*.05,Math.sin(v*1.3)*.12,l).scale.set(1,.55,1.1));const u=It(ct(.06,.03,.22,Ot(15913176),.015),-1.2,.015,2.3,t);u.rotation.y=.9;const d=vt(new Be,"coffeeTable");d.position.set(-2.1,.43,-.7),t.add(d);for(let w=0;w<3;w++)It(ge(.21,.002,.28,Ot(16513006,.9)),.05+w*.05,.002+w*.002,-.02+w*.03,d).rotation.y=w*.35-.3;[15221359,3134719,16769354,8011007,4170573].forEach((w,v)=>{It(new $(new ht(.008,.008,.09,8),Ot(w,.5)),.12+v*.03,.01,.16-v*.01,d).rotation.set(Math.PI/2,0,v*.4)});const g=It(new $(new bt(.08,20,10,0,Math.PI*2,Math.PI/2,Math.PI/2),Ot(16052714,.3,{side:hn})),-.45,.085,-.15,d);g.rotation.x=Math.PI;const _=vt(new Be,"counterStuff");_.position.set(0,.91,Ve.z0+.3),t.add(_),It(ge(.2,.3,.07,Ot(15246141,.6)),3.6,.15,-.1,_).rotation.y=.15,It(ge(.18,.27,.07,Ot(3829713,.6)),3.82,.135,-.08,_).rotation.y=-.1;const m=It(new $(new ht(.16,.1,.07,20),Ot(2898524,.4)),2.95,.035,.05,_);[15246141,12597547,8367676,13934615].forEach((w,v)=>It(new $(new bt(.05,12,8),Ot(w,.45)),Math.cos(v*1.6)*.07,.07,Math.sin(v*1.6)*.07,m));for(let w=0;w<4;w++)It(new $(new ht(.11,.11,.012,20),Ot(16052714,.3)),2.05,.13,-.05+w*.035,_).rotation.x=Math.PI/2-.2;const p=vt(It(new $(new Ji(.09,.025,8,20),Ot(12597547,.9)),-3,.025,1.6,t),"rope");return p.rotation.x=Math.PI/2,t.traverse(w=>{const v=w;v.isMesh&&(v.castShadow=!0,v.receiveShadow=!0)}),{g:t,ball:c}}function Rl(s,e){for(const[t,n,i]of e){const r=vt(new Be,"pottedPlant");r.position.set(t,0,n),r.scale.setScalar(i),s.add(r),It(new $(new ht(.16,.12,.3,16),Ot(11887418,.8)),0,.15,0,r);const o=Ot(4160074,.6,{side:hn});for(let a=0;a<7;a++){const c=a*.9,l=It(new $(new bt(.12,8,6),o),Math.cos(c)*.14,.42+a%3*.12,Math.sin(c)*.14,r);l.scale.set(.5,.1,1.3),l.rotation.set(.5,-c,.4),l.castShadow=!0}}}function hS(s){const e=new ru(new Uint8Array([90,90,90,255,170,170,170,255,235,235,235,255,255,255,255,255]),4,1);e.minFilter=e.magFilter=Tn,e.needsUpdate=!0;const t=new Map;s.traverse(n=>{const i=n;if(!i.isMesh)return;const r=o=>{const a=o;if(!a.isMeshStandardMaterial||a.isShaderMaterial)return o;if(t.has(o))return t.get(o);const c=new _1({color:a.color,map:a.map,gradientMap:e,emissive:a.emissive,emissiveIntensity:a.emissiveIntensity,emissiveMap:a.emissiveMap,transparent:a.transparent,opacity:a.opacity,side:a.side});return t.set(o,c),c};i.material=Array.isArray(i.material)?i.material.map(r):r(i.material)})}const Dh={now:{name:"Now: evening, a bit formal",apply:()=>{}},lived:{name:"Lived-in: same house, real family",apply:s=>{const{scene:e,H:t,hemi:n,key:i}=s;Gn(t.mats.paper,fs("#6f8a7a","rgba(250,240,210,.18)")),Gn(t.mats.kpaper,fs("#e8d9b8","rgba(200,120,80,.16)")),El(t,"#a7643c",.5),Gn(t.mats.rug,Wa(["#c9a06a","#3f5a6a","#f4ecdc","#7d4a3a","#e8a33d","#9c5a3a","#f4ecdc"])),Tl(s,"#e6d6bc","#b5633a",8032106,9085050),Al(e,{fridgeDoor:s.fridgeDoor}),Rl(e,[[-4.4,-2.75,1],[4.65,2.6,.9]]),n.intensity=.75,i.color.set(16767144),i.intensity=1.5,e.background=new ze(1906450)}},sunny:{name:"Sunny afternoon: bright, airy, colourful",apply:s=>{const{scene:e,H:t,hemi:n,key:i,moon:r,renderer:o}=s;Gn(t.mats.paper,fs("#e9e4d8","rgba(120,150,170,.14)")),Gn(t.mats.kpaper,fs("#f4efe4","rgba(232,66,111,.10)")),Gn(t.mats.floor,ko(["#d8b88c","#cfae80","#e0c39a","#c9a676","#dcbd92"])),Gn(t.mats.rug,Wa(["#f2e9d8","#2fa3b0","#e8426f","#f2b134","#2fa3b0","#e8426f","#fff"])),El(t,"#4f7fa8",.6),t.mats.curtain.map=Qi("#f2b134",.06),t.mats.curtain.needsUpdate=!0,t.mats.sky.map=Q1(),t.mats.sky.needsUpdate=!0,Tl(s,"#ffffff","#bcd8e6",15921386,16447730),t.mats.walnut.color.set(13215350),t.lamp.intensity=0,Al(e,{fridgeDoor:s.fridgeDoor}),Rl(e,[[-4.4,-2.75,1.1],[4.65,2.6,1],[1.3,-2.7,.8]]),n.color.set(14675967),n.groundColor.set(12098170),n.intensity=1.25,i.color.set(16773592),i.intensity=2.4,i.position.set(-2,8,6),r.color.set(16773328),r.intensity=1.6;const a=new mu(16769712,30,9,.5,.6,1.2);a.position.set(.5,2.4,Ve.z0-1.2),a.target.position.set(0,0,.4),a.castShadow=!0,e.add(a,a.target),o.toneMappingExposure=1.1,e.background=new ze(15327956)}},eclectic:{name:"Eclectic and a bit weird: deep colours, odd stuff",apply:s=>{const{scene:e,H:t,hemi:n,key:i}=s;Gn(t.mats.paper,fs("#b8742f","rgba(40,20,60,.22)")),Gn(t.mats.kpaper,fs("#2f5d6a","rgba(240,200,120,.2)")),Gn(t.mats.floor,ko(["#5a3a26","#4e3220","#64432c","#553621"])),Gn(t.mats.rug,Wa(["#2a1f4a","#e8a33d","#2fd4ff","#6b2430","#e8426f","#3f6b5a","#f4ecdc"])),El(t,"#6b2f5a",1),Tl(s,"#f4ecdc","#1b1424",2761272,3813194),t.mats.curtain.map=Qi("#2f5d6a",.08),t.mats.curtain.needsUpdate=!0,Al(e,{fridgeDoor:s.fridgeDoor}),Rl(e,[[-4.4,-2.75,1.2],[4.65,2.6,1.2],[1.3,-2.7,1],[-.9,-2.6,.7],[-4.55,2.9,.9]]);const r=c=>Ot(c,.2,{emissive:c,emissiveIntensity:.9,transparent:!0,opacity:.8});[3134719,11570687,8388528,16758861].forEach((c,l)=>It(new $(new ht(.06,.06,.16+l%2*.06,16),r(c)),-.05+l*.17,.72,Ve.z0+.25,e));const o=[[-3.9,2.25,.3,.38,2776143],[-3.45,2.35,.25,.25,15246141],[-.55,2.3,.4,.3,7021616],[-.15,1.75,.22,.3,2898524],[-.6,1.7,.28,.28,14070378]];for(const[c,l,h,u,d]of o)It(ge(h+.04,u+.04,.03,Ot(14070378,.3,{metalness:.7})),c,l,Ve.z0+.02,e),It(ge(h,u,.032,Ot(d,.8)),c,l,Ve.z0+.025,e);n.intensity=.45,i.intensity=.9,i.color.set(16763024),t.lamp.color.set(16751178),t.lamp.intensity=8;const a=new Zn(8011007,3,4,1.8);a.position.set(-.4,1.5,-1.8),e.add(a),e.background=new ze(1182744)}},storybook:{name:"Storybook: flat painted shading",apply:s=>{Dh.lived.apply(s),hS(s.scene),window.__outline=!0,s.hemi.intensity=1,s.key.intensity=1.8,s.scene.background=new ze(2760494)}}},_t=(s,e=.7,t={})=>new rt({color:s,roughness:e,...t}),qe=(s,e,t,n,i)=>(s.position.set(e,t,n),i.add(s),s),fn=3.3,Wi=($t+Jt)/2;function uS(){const s=new Be,e=Ve.x0-.15,t=.9,n=e-t,i=_t(4866104,.9);qe(ge(.05,3,Jt-$t+.3),n,1.5,Wi,s).material=i,qe(ge(t,3,.05),e-t/2,1.5,$t-.15,s).material=i,qe(ge(t,3,.05),e-t/2,1.5,Jt+.15,s).material=i,qe(ge(t,.02,Jt-$t+.3),e-t/2,.01,Wi,s).material=_t(6967360,.8);const r=new Zn(16767136,0,2.2,2);r.position.set(e-.45,2.2,Wi),s.add(r);const o=qe(new $(new ht(.012,.012,Jt-$t+.25,8),_t(11184810,.3,{metalness:.9})),n+.28,1.85,Wi,s);o.rotation.x=Math.PI/2;const a=[];[[2898524,-.3],[9058874,-.05],[4156250,.22]].forEach(([v,x])=>{const L=qe(ct(.32,.9,.16,_t(v,.9),.07),n+.28,1.4,Wi+x,s);L.rotation.y=Math.PI/2+x,a.push(L)}),qe(new $(new ht(.02,.05,.8,8),_t(1774628,.5)),n+.15,.4,Jt-.05,s).rotation.z=.15;for(let v=0;v<2;v++)qe(ct(.12,.3,.26,_t(13934615,.5),.05),n+.6,.15,$t+.1+v*.16,s);const c=new Be;c.position.set(e-.35,3,Wi+.1),s.add(c),qe(new $(new ht(.004,.004,1,4),_t(15261904)),0,-.5,0,c);const l=qe(new $(new bt(.035,12,8),_t(10251075,.4)),0,-1.02,0,c),h=qe(new $(new un(.3,1.2,.3),new en({visible:!1})),0,-.6,0,c),u=new Be;s.add(u);const d=_t(12098154,.6),f=3.4;for(const v of[-1,1])qe(ge(.05,f,.06,d),0,f/2,v*.22,u);for(let v=0;v<10;v++)qe(ge(.05,.035,.44,d),0,.2+v*.33,0,u);u.position.set(e-.55,0,Wi),u.rotation.z=-.2;const g=[new Si(new A(0,-1,0),3)];d.clippingPlanes=g;const _=qe(new $(new un(.5,2.6,.6),new en({visible:!1})),0,1.3,0,u),m=new Be;m.position.set(Ve.x0+.02,0,$t),s.add(m);const p=_t(15129803,.5),w=qe(ct(.05,2.02,Jt-$t-.02,p,.01),0,1.01,(Jt-$t)/2,m);for(const v of[.55,1.45])qe(ge(.012,.6,Jt-$t-.24),.03,v,(Jt-$t)/2,m).material=_t(14273976,.5);return qe(new $(new bt(.03,12,8),_t(11570519,.3,{metalness:.9})),.05,1,Jt-$t-.08,m),s.traverse(v=>{const x=v;x.isMesh&&(x.castShadow=!0,x.receiveShadow=!0)}),{group:s,door:m,doorHit:w,cord:c,cordHit:h,bead:l,ladder:u,ladderHit:_,coats:a,light:r}}function dS(){const s=document.createElement("canvas");s.width=256,s.height=192;const e=s.getContext("2d");e.fillStyle="#e8d6ac",e.fillRect(0,0,256,192),e.strokeStyle="#6a4a2a",e.lineWidth=3,e.strokeRect(30,40,196,120),e.beginPath(),e.moveTo(130,40),e.lineTo(130,160),e.stroke(),e.fillStyle="#b8342a",e.font="bold 26px serif",e.fillText("X",60,110),e.fillText("X",170,140);const t=new kr(s);return t.colorSpace=zt,t}function fS(){const s=new Be;s.position.y=fn;const e=Ve.x0,t=1.2,n=Ve.z0,i=2.9,r=-.1,o=2.8,a=.8,c=new rt({map:ko(["#5a4636","#4e3c2e","#634d3a","#56422f"]),roughness:.85});c.map.repeat.set(1.6,1.6);const l=new $(new Zt(t-e,i-n),c);l.rotation.x=-Math.PI/2,l.position.set((e+t)/2,.001,(n+i)/2),l.receiveShadow=!0,s.add(l);const h=_t(2760216,.9);qe(ge(t-e,.3,i-n),(e+t)/2,-.15,(n+i)/2,s).material=h;const u=new $(new Zt(40,40),new en({visible:!1}));u.rotation.x=-Math.PI/2,s.add(u);const d=new ac;d.moveTo(n,0),d.lineTo(n,a),d.lineTo(r,o),d.lineTo(i,a),d.lineTo(i,0),d.lineTo(n,0);const f=new oc;f.absarc(-.3,1.55,.36,0,Math.PI*2,!0),d.holes.push(f);const g=new rt({map:ko(["#7a6450","#6e5a48","#85705a"]),roughness:.9});g.map.repeat.set(.6,.6);const _=new $(new Fo(d,{depth:.12,bevelEnabled:!1}),g);_.rotation.y=-Math.PI/2,_.position.set(e,0,0),_.receiveShadow=!0,s.add(_);const m=new $(new ji(.36,32),new en({map:Tp()}));m.rotation.y=Math.PI/2,m.position.set(e-.1,1.55,-.3),s.add(m),vt(m,"roundWindow");const p=qe(new $(new Ji(.37,.04,8,32),_t(15327695,.5)),e+.01,1.55,-.3,s);p.rotation.y=Math.PI/2;for(const T of[0,Math.PI/2]){const S=qe(ge(.02,.72,.025,_t(15327695)),e+.01,1.55,-.3,s);S.rotation.x=T}const w=new mu(10466559,6,7,.45,.8,1.5);w.position.set(e-.3,1.6,-.3),w.target.position.set(-2.5,0,.8),s.add(w,w.target),qe(ge(t-e,a,.1,g),(e+t)/2,a/2,n-.05,s);const v=Math.hypot(r-n,o-a),x=Math.atan2(o-a,r-n),L=new $(new Zt(t-e,v),new rt({color:9073240,roughness:.95,side:hn}));L.position.set((e+t)/2,(a+o)/2,(n+r)/2),L.rotation.x=Math.PI/2-x,L.receiveShadow=!0,s.add(L);const R=_t(5914672,.8);for(let T=e+.3;T<t;T+=.75){const S=ge(.09,.14,v,R);S.position.set(T,(a+o)/2-.06,(n+r)/2+.05),S.rotation.x=-x,s.add(S)}const C=ge(t-e,.16,.12,R);C.position.set((e+t)/2,o-.05,r),s.add(C);const b=_t(2760216,.9);qe(ge(.14,.06,i-n+.1),e-.06,.03,(n+i)/2,s).material=b;const y=vt(new Be,"bulb");y.position.set(-2.4,o-.1,r),s.add(y),qe(new $(new ht(.004,.004,.8,4),_t(2236962)),0,-.4,0,y),qe(new $(new bt(.06,12,10),new rt({color:16773320,emissive:16762992,emissiveIntensity:3})),0,-.86,0,y);const M=new Zn(16763008,5,6,1.6);M.position.set(0,-.95,0),M.castShadow=!0,M.shadow.mapSize.set(512,512),y.add(M);const P=_t(11569754,.95),k=_t(14271130,.8),F=(T,S,N,X,Q,q=0,Ae=0)=>{const ue=vt(qe(ct(N,X,Q,P,.01),T,q+X/2,S,s),"boxes");return ue.rotation.y=Ae,qe(ge(N+.005,.005,.08),0,X/2,0,ue).material=k,ue};F(-4.5,-2.5,.6,.45,.5),F(-4.45,-2.45,.5,.35,.45,.45,.2),F(-3.8,-2.55,.5,.5,.45,0,-.2),F(.6,-2.4,.55,.4,.5,0,.3),F(.65,-2.35,.4,.3,.35,.4,-.1),[[7021616,.7],[2898524,.6],[9071162,.5]].forEach(([T,S],N)=>vt(qe(ct(S,.16,.4,_t(T,.6),.04),-1,.08+N*.16,-2.5,s),"suitcases").rotation.y=N*.15);const B=vt(new Be,"rocker");B.position.set(-3.6,0,.9),B.rotation.y=-2.1,s.add(B);const W=_t(4861986,.6);qe(ge(.5,.05,.45,W),0,.42,0,B),qe(ge(.5,.6,.04,W),0,.75,-.22,B).rotation.x=-.15;for(const T of[-1,1])qe(ge(.04,.42,.04,W),T*.22,.21,.18,B),qe(ge(.04,.42,.04,W),T*.22,.21,-.18,B),qe(new $(new Ji(.6,.02,6,24,.9),W),T*.22,.6,0,B).rotation.set(0,Math.PI/2,Math.PI*1.5-.45);const z=new Be;z.position.set(-1.9,0,-2.3),s.add(z);const K=_t(5913126,.55),H=_t(9075290,.3,{metalness:.8});qe(ct(1,.45,.55,K,.03),0,.225,0,z);for(const T of[-.35,.35])qe(ge(.06,.46,.56,H),T,.225,0,z);const ce=new Be;ce.position.set(0,.45,-.275),z.add(ce);const pe=qe(new $(new ht(.275,.275,1,20,1,!1,0,Math.PI),K),0,0,.275,ce);pe.rotation.set(0,0,Math.PI/2),pe.scale.set(1,1,.5),pe.castShadow=!0,qe(ge(.08,.1,.03,_t(13213802,.3,{metalness:.9})),0,.4,.28,z);const me=qe(new $(new Zt(.4,.3),new rt({map:dS(),roughness:.9})),.1,.452,.05,z);me.rotation.set(-Math.PI/2,0,.3),me.visible=!1;const Re=new Be;Re.position.set(.25,0,-1),Re.rotation.y=-.6,s.add(Re);const it=_t(10254908,.35,{metalness:.7}),j=new ac;j.absellipse(0,0,.5,.85,0,Math.PI*2,!1,0);const ie=new oc;ie.absellipse(0,0,.42,.77,0,Math.PI*2,!0,0),j.holes.push(ie),qe(new $(new Fo(j,{depth:.06,bevelEnabled:!0,bevelSize:.02,bevelThickness:.02,bevelSegments:2}),it),0,1.05,0,Re).castShadow=!0;for(const T of[-1,1])qe(ge(.05,.3,.3),T*.25,.12,.05,Re).material=it;const xe=Ap(.42);xe.group.rotation.x=Math.PI/2,xe.group.scale.set(1,1,.77/.42),xe.group.position.set(0,1.05,.04),Re.add(xe.group);const ae=qe(new $(new ji(.42,32),_t(5923952,.15,{metalness:.9})),0,1.05,.03,Re);ae.scale.y=.77/.42,qe(new $(new ji(.025,12),_t(657930)),0,.17,.09,Re);const Ie=new Zt(1.2,2,24,30),Ne=Ie.attributes.position;for(let T=0;T<Ne.count;T++){const S=Ne.getX(T),N=Ne.getY(T),X=Math.max(0,-N-.1);Ne.setXYZ(T,S*(1+X*.25),N,.12+Math.sin(S*14+N*2)*.03*(.3+X)+X*X*.15)}Ie.computeVertexNormals();const He=new $(Ie,new rt({color:15328472,roughness:1,side:hn}));He.position.set(0,1,0),He.castShadow=!0,Re.add(He);const et=80,Z=new Float32Array(et*3);for(let T=0;T<et;T++)Z[T*3]=-4+Math.random()*4.5,Z[T*3+1]=Math.random()*2.4,Z[T*3+2]=-2.5+Math.random()*4.5;const se=new jt;se.setAttribute("position",new dn(Z,3));const I=new vc(se,new Ko({map:vu(),size:.035,color:16773328,transparent:!0,opacity:.6,depthWrite:!1,blending:Co}));s.add(I);const be=new Be;be.position.set(Ve.x0+.65,0,Wi),s.add(be),qe(ge(.8,.02,.7,_t(722950,1)),0,.006,0,be);for(const T of[-1,1])qe(ge(.05,.5,.06,_t(12098154)),-.2,.25,T*.22,be);const te=qe(new $(new un(.9,.6,.8),new en({visible:!1})),0,.3,0,be),Se=new au({color:16777215,transparent:!0,opacity:.25});for(const[T,S,N]of[[e+.01,a-.02,n+.01],[e+.01,o-.2,r]]){const X=[];for(let Q=0;Q<7;Q++){const q=Q/6*Math.PI/2;X.push(new A(T,S,N),new A(T+Math.cos(q)*.01,S-Math.sin(q)*.4,N+Math.cos(q)*.4))}for(const Q of[.15,.27,.38])for(let q=0;q<6;q++){const Ae=q/6*Math.PI/2,ue=(q+1)/6*Math.PI/2;X.push(new A(T,S-Math.sin(Ae)*Q,N+Math.cos(Ae)*Q),new A(T,S-Math.sin(ue)*Q,N+Math.cos(ue)*Q))}s.add(new hp(new jt().setFromPoints(X),Se))}s.traverse(T=>{const S=T;S.isMesh&&S.material!==He.material&&(S.castShadow=S.castShadow||!1,S.receiveShadow=!0)});const J=(T,S,N,X)=>new wc(new re(T-N/2,S-X/2),new re(T+N/2,S+X/2)),ve=[J(-4.3,-2.5,1.3,.7),J(.62,-2.4,.7,.65),J(-1,-2.5,.8,.5),J(-1.9,-2.3,1.05,.6),J(-3.6,.9,.7,.7),J(.25,-1,.8,.6),J(Ve.x0+.65,Wi,.85,.75)],le={x0:e+.35,x1:t-.3,z0:n+.95,z1:i-.3};return{chair:B,group:s,floorHit:u,trunk:z,lid:ce,mapPaper:me,mirror:Re,sheet:He,glass:xe,hatch:be,hatchHit:te,motes:I,blockers:ve,bounds:le,bulb:M}}function pS(s,e){s.width=680,s.height=860;const i=s.getContext("2d"),r=i.createRadialGradient(680/2,860/2,100,680/2,860/2,600);r.addColorStop(0,"#efdfb8"),r.addColorStop(1,"#c9a874"),i.fillStyle=r,i.fillRect(0,0,680,860);for(let c=0;c<4e3;c++)i.fillStyle=`rgba(90,60,30,${Math.random()*.05})`,i.fillRect(Math.random()*680,Math.random()*860,3,3);i.strokeStyle="#5a3a22",i.fillStyle="#5a3a22",i.lineWidth=4,i.lineCap="round",i.font="italic 600 38px Fraunces, Georgia, serif",i.textAlign="center",i.fillText("Our House",680/2,70),i.font="italic 22px Fraunces, Georgia, serif",i.fillText("(the secret parts)",680/2,102);const o=(c,l,h,u,d)=>{i.strokeRect(c,l,h,u),i.font="italic 24px Fraunces, Georgia, serif",i.fillText(d,c+h/2,l+32)};i.beginPath(),i.moveTo(80,300),i.lineTo(300,150),i.lineTo(520,300),i.closePath(),i.stroke(),i.font="italic 24px Fraunces, Georgia, serif",i.fillText("Attic",300,280),o(80,300,440,220,"Living room"),o(520,300,120,220,"Kitchen"),o(80,520,560,170,"Basement ?"),i.setLineDash([8,10]),i.strokeRect(80,720,560,100),i.setLineDash([]),i.fillText("The garden",360,752);const a=(c,l,h,u)=>{i.save(),i.strokeStyle="#a8281e",i.fillStyle="#a8281e",i.lineWidth=6,h?(i.beginPath(),i.arc(c,l,26,0,Math.PI*2),i.stroke(),i.lineWidth=7,i.beginPath(),i.moveTo(c-14,l),i.lineTo(c-3,l+12),i.lineTo(c+16,l-14),i.stroke()):(i.beginPath(),i.moveTo(c-16,l-16),i.lineTo(c+16,l+16),i.moveTo(c+16,l-16),i.lineTo(c-16,l+16),i.stroke()),i.font="italic 20px Fraunces, Georgia, serif",i.fillText(u,c,l+50),i.restore()};a(250,400,e.includes("portal"),"couch"),a(130,440,e.includes("shelf"),"books"),a(420,240,e.includes("mirror"),"mirror"),a(580,420,!1,"fridge?"),a(300,620,!1,""),a(540,780,!1,"")}class mS{constructor(e,t={}){this.enabled=!0;const n=t.defaultThickness!==void 0?t.defaultThickness:.003,i=new ze().fromArray(t.defaultColor!==void 0?t.defaultColor:[0,0,0]),r=t.defaultAlpha!==void 0?t.defaultAlpha:1,o=t.defaultKeepAlive!==void 0?t.defaultKeepAlive:!1,a={},c=60,l={},h={},u={outlineThickness:{value:n},outlineColor:{value:i},outlineAlpha:{value:r}},d=["#include <common>","#include <uv_pars_vertex>","#include <displacementmap_pars_vertex>","#include <fog_pars_vertex>","#include <morphtarget_pars_vertex>","#include <skinning_pars_vertex>","#include <logdepthbuf_pars_vertex>","#include <clipping_planes_pars_vertex>","uniform float outlineThickness;","vec4 calculateOutline( vec4 pos, vec3 normal, vec4 skinned ) {","	float thickness = outlineThickness;","	const float ratio = 1.0;","	vec4 pos2 = projectionMatrix * modelViewMatrix * vec4( skinned.xyz + normal, 1.0 );","	vec4 norm = normalize( pos - pos2 );","	return pos + norm * thickness * pos.w * ratio;","}","void main() {","	#include <uv_vertex>","	#include <beginnormal_vertex>","	#include <morphnormal_vertex>","	#include <skinbase_vertex>","	#include <skinnormal_vertex>","	#include <begin_vertex>","	#include <morphtarget_vertex>","	#include <skinning_vertex>","	#include <displacementmap_vertex>","	#include <project_vertex>","	vec3 outlineNormal = - objectNormal;","	gl_Position = calculateOutline( gl_Position, outlineNormal, vec4( transformed, 1.0 ) );","	#include <logdepthbuf_vertex>","	#include <clipping_planes_vertex>","	#include <fog_vertex>","}"].join(`
`),f=["#include <common>","#include <fog_pars_fragment>","#include <logdepthbuf_pars_fragment>","#include <clipping_planes_pars_fragment>","uniform vec3 outlineColor;","uniform float outlineAlpha;","void main() {","	#include <clipping_planes_fragment>","	#include <logdepthbuf_fragment>","	gl_FragColor = vec4( outlineColor, outlineAlpha );","	#include <tonemapping_fragment>","	#include <colorspace_fragment>","	#include <fog_fragment>","	#include <premultiplied_alpha_fragment>","}"].join(`
`);function g(){return new Ri({type:"OutlineEffect",uniforms:Qf.merge([fe.fog,fe.displacementmap,u]),vertexShader:d,fragmentShader:f,side:bn})}function _(b){let y=a[b.uuid];return y===void 0&&(y={material:g(),used:!0,keepAlive:o,count:0},a[b.uuid]=y),y.used=!0,y.material}function m(b){const y=_(b);return l[y.uuid]=b,R(y,b),y}function p(b){const y=b.geometry,M=y!==void 0&&y.attributes.normal!==void 0;return b.isMesh===!0&&b.material!==void 0&&M===!0}function w(b){if(p(b)!==!1){if(Array.isArray(b.material))for(let y=0,M=b.material.length;y<M;y++)b.material[y]=m(b.material[y]);else b.material=m(b.material);h[b.uuid]=b.onBeforeRender,b.onBeforeRender=x}}function v(b){if(p(b)!==!1){if(Array.isArray(b.material))for(let y=0,M=b.material.length;y<M;y++)b.material[y]=l[b.material[y].uuid];else b.material=l[b.material.uuid];b.onBeforeRender=h[b.uuid]}}function x(b,y,M,P,k){const F=l[k.uuid];F!==void 0&&L(k,F)}function L(b,y){const M=y.userData.outlineParameters;b.uniforms.outlineAlpha.value=y.opacity,M!==void 0&&(M.thickness!==void 0&&(b.uniforms.outlineThickness.value=M.thickness),M.color!==void 0&&b.uniforms.outlineColor.value.fromArray(M.color),M.alpha!==void 0&&(b.uniforms.outlineAlpha.value=M.alpha)),y.displacementMap&&(b.uniforms.displacementMap.value=y.displacementMap,b.uniforms.displacementScale.value=y.displacementScale,b.uniforms.displacementBias.value=y.displacementBias)}function R(b,y){if(b.name==="invisible")return;const M=y.userData.outlineParameters;b.fog=y.fog,b.toneMapped=y.toneMapped,b.premultipliedAlpha=y.premultipliedAlpha,b.displacementMap=y.displacementMap,M!==void 0?(y.visible===!1?b.visible=!1:b.visible=M.visible!==void 0?M.visible:!0,b.transparent=M.alpha!==void 0&&M.alpha<1?!0:y.transparent,M.keepAlive!==void 0&&(a[y.uuid].keepAlive=M.keepAlive)):(b.transparent=y.transparent,b.visible=y.visible),(y.wireframe===!0||y.depthTest===!1)&&(b.visible=!1),y.clippingPlanes&&(b.clipping=!0,b.clippingPlanes=y.clippingPlanes,b.clipIntersection=y.clipIntersection,b.clipShadows=y.clipShadows),b.version=y.version}function C(){let b;b=Object.keys(l);for(let y=0,M=b.length;y<M;y++)l[b[y]]=void 0;b=Object.keys(h);for(let y=0,M=b.length;y<M;y++)h[b[y]]=void 0;b=Object.keys(a);for(let y=0,M=b.length;y<M;y++){const P=b[y];a[P].used===!1?(a[P].count++,a[P].keepAlive===!1&&a[P].count>c&&delete a[P]):(a[P].used=!1,a[P].count=0)}}this.render=function(b,y){if(this.enabled===!1){e.render(b,y);return}const M=e.autoClear;e.autoClear=this.autoClear,e.render(b,y),e.autoClear=M,this.renderOutline(b,y)},this.renderOutline=function(b,y){const M=e.autoClear,P=b.matrixWorldAutoUpdate,k=b.background,F=e.shadowMap.enabled;b.matrixWorldAutoUpdate=!1,b.background=null,e.autoClear=!1,e.shadowMap.enabled=!1,b.traverse(w),e.render(b,y),b.traverse(v),C(),b.matrixWorldAutoUpdate=P,b.background=k,e.autoClear=M,e.shadowMap.enabled=F},this.autoClear=e.autoClear,this.domElement=e.domElement,this.shadowMap=e.shadowMap,this.clear=function(b,y,M){e.clear(b,y,M)},this.getPixelRatio=function(){return e.getPixelRatio()},this.setPixelRatio=function(b){e.setPixelRatio(b)},this.getSize=function(b){return e.getSize(b)},this.setSize=function(b,y,M){e.setSize(b,y,M)},this.setViewport=function(b,y,M,P){e.setViewport(b,y,M,P)},this.setScissor=function(b,y,M,P){e.setScissor(b,y,M,P)},this.setScissorTest=function(b){e.setScissorTest(b)},this.setRenderTarget=function(b){e.setRenderTarget(b)}}}let so=null;const Vr=()=>{if(!so)try{so=new AudioContext}catch{return null}return so.state==="suspended"&&so.resume(),so};function Kn(s,e,t,n="sine",i=.12){const r=Vr();if(!r)return;const o=r.createOscillator(),a=r.createGain();o.type=n,o.frequency.value=s,a.gain.setValueAtTime(0,r.currentTime+e),a.gain.linearRampToValueAtTime(i,r.currentTime+e+.01),a.gain.exponentialRampToValueAtTime(1e-4,r.currentTime+e+t),o.connect(a).connect(r.destination),o.start(r.currentTime+e),o.stop(r.currentTime+e+t+.05)}function Ft(s=1){[[659],[784,988],[523,659,784,1047],[392,523,659,784,988,1319]][Math.min(3,s)].forEach((t,n)=>{Kn(t,n*.08,.9,"sine",.09),Kn(t*2,n*.08,.4,"triangle",.02)})}function Tc(){Kn(1319,0,.12,"square",.03),Kn(1760,.07,.3,"square",.03)}function gS(){const s=Vr();if(!s)return;const e=s.createBufferSource(),t=s.createBuffer(1,s.sampleRate*1.2,s.sampleRate),n=t.getChannelData(0);for(let o=0;o<n.length;o++)n[o]=(Math.random()*2-1)*(1-o/n.length);e.buffer=t;const i=s.createBiquadFilter();i.type="bandpass",i.Q.value=3,i.frequency.setValueAtTime(300,s.currentTime),i.frequency.exponentialRampToValueAtTime(3e3,s.currentTime+1);const r=s.createGain();r.gain.value=.25,e.connect(i).connect(r).connect(s.destination),e.start(),[262,330,392,523,659].forEach((o,a)=>Kn(o,.1+a*.07,.6,"sine",.06))}let Xa=null;function _S(){const s=[110,98,87.3,82.4],e=[[220,262,330],[196,247,294],[175,220,262],[165,208,247]];let t=0;const n=()=>{const i=t%4;Kn(s[i],0,1.6,"triangle",.08),e[i].forEach((r,o)=>Kn(r,.4+o*.02,1,"sine",.035)),Kn(e[i][2]*2,1.2,.5,"sine",.03),t++};n(),Xa=window.setInterval(n,1800)}function xS(){Xa&&clearInterval(Xa),Xa=null}function vS(){const s=Vr();if(!s)return()=>{};const e=s.createGain();e.gain.value=0,e.connect(s.destination),e.gain.linearRampToValueAtTime(.07,s.currentTime+1.5);const t=[55,82.4,110.7].map((r,o)=>{const a=s.createOscillator();return a.type=o?"sine":"triangle",a.frequency.value=r,a.connect(e),a.start(),a}),n=s.createOscillator(),i=s.createGain();return n.frequency.value=.3,i.gain.value=4,n.connect(i),i.connect(t[2].frequency),n.start(),()=>{e.gain.linearRampToValueAtTime(0,s.currentTime+1),setTimeout(()=>{t.forEach(r=>r.stop()),n.stop()},1200)}}function Ho(s,e,t,n,i,r=0){const o=Vr();if(!o)return;const a=o.createBufferSource(),c=o.createBuffer(1,Math.ceil(o.sampleRate*s),o.sampleRate),l=c.getChannelData(0);for(let d=0;d<l.length;d++)l[d]=Math.random()*2-1;a.buffer=c;const h=o.createBiquadFilter();h.type="bandpass",h.Q.value=n,h.frequency.setValueAtTime(e,o.currentTime+r),h.frequency.exponentialRampToValueAtTime(t,o.currentTime+r+s);const u=o.createGain();u.gain.setValueAtTime(0,o.currentTime+r),u.gain.linearRampToValueAtTime(i,o.currentTime+r+.02),u.gain.exponentialRampToValueAtTime(.001,o.currentTime+r+s),a.connect(h).connect(u).connect(o.destination),a.start(o.currentTime+r),a.stop(o.currentTime+r+s+.05)}function Dp(){Ho(.18,300,140,4,.5),Ho(.22,260,120,4,.45,.24),Kn(90,0,.2,"sawtooth",.04)}function Np(){const s=Vr();if(s)for(const e of[0,.28]){const t=s.createOscillator(),n=s.createGain();t.type="sawtooth",t.frequency.setValueAtTime(520,s.currentTime+e),t.frequency.exponentialRampToValueAtTime(260,s.currentTime+e+.12),n.gain.setValueAtTime(1e-4,s.currentTime+e),n.gain.linearRampToValueAtTime(.12,s.currentTime+e+.01),n.gain.exponentialRampToValueAtTime(.001,s.currentTime+e+.16);const i=s.createBiquadFilter();i.type="lowpass",i.frequency.value=1400,t.connect(i).connect(n).connect(s.destination),t.start(s.currentTime+e),t.stop(s.currentTime+e+.2),Ho(.1,900,500,2,.15,e)}}function yS(){Kn(392,0,.35,"sine",.1),Kn(349,.45,.6,"sine",.1)}function MS(){const s=Vr();if(!s)return;const e=s.createOscillator(),t=s.createGain();e.frequency.setValueAtTime(140,s.currentTime),e.frequency.exponentialRampToValueAtTime(420,s.currentTime+.25),t.gain.setValueAtTime(.12,s.currentTime),t.gain.exponentialRampToValueAtTime(.001,s.currentTime+.35),e.connect(t).connect(s.destination),e.start(),e.stop(s.currentTime+.4)}function mf(s=1.5){Ho(s,2500,1800,.6,.12)}function xr(){Kn(110,0,.15,"sine",.2),Ho(.08,400,200,1,.2)}const Je=s=>document.getElementById(s),Vo=new URLSearchParams(location.search),SS="../index.html",Gr=Je("c"),Jn=new Dy({canvas:Gr,antialias:!0});Jn.setPixelRatio(Math.min(devicePixelRatio,2));Jn.outputColorSpace=zt;Jn.toneMapping=If;Jn.toneMappingExposure=1.05;Jn.shadowMap.enabled=!0;Jn.shadowMap.type=Cf;const dt=new cp;dt.background=new ze(1380636);const wS=new xh(Jn);dt.environment=wS.fromScene(new $1,.04).texture;dt.environmentIntensity=.32;const Xt=new Rn(36,1,.1,80),Ec=new P1(12109032,4863014,.55);dt.add(Ec);const _i=new gu(16770764,1.25);_i.position.set(4,9,7);_i.castShadow=!0;_i.shadow.mapSize.set(2048,2048);Object.assign(_i.shadow.camera,{left:-7,right:7,top:6,bottom:-6,near:1,far:25});_i.shadow.bias=-4e-4;_i.shadow.normalBias=.02;_i.shadow.radius=4;dt.add(_i);const Su=new gu(8363263,.5);Su.position.set(.5,3,-8);dt.add(Su);const gf=Vo.get("style")||"lived",pn=dM();dt.add(pn.group);const{couch:di,shelf:Lr,fridge:Go}=pn,es=Ap(.3);es.group.position.set(di.cushionPivot.position.x,.432,.13);di.group.add(es.group);const De=aS();De.visits++;let Sn=yu(),Dr=!1;try{sessionStorage.getItem("km_went")&&(Dr=!0,sessionStorage.removeItem("km_went"))}catch{}Vo.has("back")&&(Dr=!0);const Up=De.seenBolts>=0?Sn-De.seenBolts:0;Up>0&&(Dr=!0);Dr&&!De.found.includes("traveled")&&De.found.push("traveled");De.seenBolts=Sn;const Dt=()=>{De.seenBolts=Sn,cS(De)};Dt();const Pn=s=>De.owned.includes(s),Le=s=>De.found.includes(s),Qe={wallet:Je("wallet"),coins:Je("coinN"),toast:Je("toast"),shopBtn:Je("shopBtn"),shop:Je("shop"),shopList:Je("shopList"),fridge:Je("fridgeP"),fridgeList:Je("fridgeList"),jump:Je("jumpBtn"),who:Je("who"),buddy:Je("buddy"),flash:Je("flash"),intro:Je("intro")};function Wr(s){if(s===void 0){Qe.coins.textContent=String(Sn);return}const e=s,t=Sn,n=performance.now(),i=()=>{const r=Math.min(1,(performance.now()-n)/1200);Qe.coins.textContent=String(Math.round(e+(t-e)*r)),r<1&&requestAnimationFrame(i)};i(),Qe.wallet.classList.remove("pop"),Qe.wallet.offsetWidth,Qe.wallet.classList.add("pop")}Wr();let _f=0;function Ye(s,e=3400){Qe.toast.innerHTML=s,Qe.toast.classList.add("show"),clearTimeout(_f),_f=window.setTimeout(()=>Qe.toast.classList.remove("show"),e)}function Op(s){if(Sn=yu(),Sn<s)return Ye(`You need <b>${s-Sn}</b> more pennies. The couch portal is a good place to find some.`),!1;const e=Sn;return Sn=Mu(-s),Dt(),Wr(e),Tc(),!0}function Bs(){const s={george:"George",owl:"Owl"};Qe.buddy.classList.toggle("hidden",!De.companions.length),Qe.buddy.innerHTML=De.companion?`Bringing <b>${s[De.companion]}</b>`:"No buddy"}Bs();const Ls={};let de,At,pi=null,Qt=Vo.get("hero")==="mila"?"mila":Vo.get("hero")==="keira"?"keira":De.hero,St=null;const Nh=s=>`./${s}.glb`,bS=new A(-.6,0,.4),TS=new A(-1.2,0,1.3),Ac=pn.blockers.map(s=>s.clone().expandByScalar(.28)),Fp={x0:Ve.x0+.35,x1:Ve.x1-.35,z0:Ve.z0+.4,z1:Ve.z1-.3};let Zo=Ac,Bn=Fp,xn=0;function kp(s){s.x=Cn.clamp(s.x,Bn.x0,Bn.x1),s.z=Cn.clamp(s.z,Bn.z0,Bn.z1),s.y=xn?fn:0;for(const e of Zo)if(s.x>e.min.x&&s.x<e.max.x&&s.z>e.min.y&&s.z<e.max.y){const t=[s.x-e.min.x,e.max.x-s.x,s.z-e.min.y,e.max.y-s.z],n=t.indexOf(Math.min(...t));n===0?s.x=e.min.x-.01:n===1?s.x=e.max.x+.01:n===2?s.z=e.min.y-.01:s.z=e.max.y+.01}return s}function or(s,e){for(const t of Zo){const n=t.clone().expandByScalar(-.02);for(let i=0;i<=1;i+=.04){const r=s.x+(e.x-s.x)*i,o=s.z+(e.z-s.z)*i;if(r>n.min.x&&r<n.max.x&&o>n.min.y&&o<n.max.y)return t}}return null}function Nr(s,e){if(!or(s,e))return[e];let t=null,n=1/0;const i=[];for(const r of Zo)for(const[o,a]of[[r.min.x-.02,r.min.y-.02],[r.max.x+.02,r.min.y-.02],[r.min.x-.02,r.max.y+.02],[r.max.x+.02,r.max.y+.02]])i.push(new A(o,e.y,a));for(const r of i)if(!(r.x<Bn.x0-.05||r.x>Bn.x1+.05||r.z<Bn.z0-.1||r.z>Bn.z1+.1)&&!or(s,r)&&!or(r,e)){const o=s.distanceTo(r)+r.distanceTo(e);o<n&&(n=o,t=[r,e])}if(t)return t;for(const r of i)for(const o of i){if(or(s,r)||or(r,o)||or(o,e))continue;const a=s.distanceTo(r)+r.distanceTo(o)+o.distanceTo(e);a<n&&(n=a,t=[r,o,e])}return t||[e]}let kt=!1;function Wo(s,e,t){const n=kp(s.clone());de.goTo(Nr(de.root.position,n),e,t)}const Rt=[],Bp=[];function Li(s,e,t){const n=fM(t);n.points.position.copy(s),dt.add(n.points),Bp.push({h:n,show:e})}const fi=new A(di.group.position.x+di.cushionPivot.position.x,0,di.group.position.z+.2);let fr=0,Nn=0;const wn=s=>new Promise(e=>setTimeout(e,s));function Ei(s,e){return new Promise(t=>{const n=performance.now(),i=()=>{const r=Math.min(1,(performance.now()-n)/s);e(r),r<1?requestAnimationFrame(i):t()};i()})}function zp(){Nn=1,es.open=!0,Ft(1),Qe.jump.textContent="Jump in",Qe.jump.classList.remove("hidden")}function Hp(){Nn=0,es.open=!1,Qe.jump.classList.add("hidden")}const Vp=new A(fi.x,0,-1.55);Rt.push({id:"cushion",objs:[di.cushion],stand:Vp,face:Math.PI,act:()=>{if(Nn>.5){de.once("crouch"),Hp();return}if(!Le("portal")){IS();return}de.once("crouch",zp)}});Rt.push({id:"portal",objs:[es.hit],stand:Vp,face:Math.PI,act:()=>Gp()});Li(new A(fi.x,.62,-2.2),()=>!Le("portal")&&Nn<.5,13084927);const us=Je("story"),ES=Je("storyWho"),AS=Je("storyText");function _n(s,e){return us.classList.remove("hidden"),us.dataset.who=s.toLowerCase(),ES.textContent=s,AS.innerHTML=e,us.classList.remove("in"),us.offsetWidth,us.classList.add("in"),new Promise(t=>{const n=i=>{i.stopPropagation(),us.removeEventListener("pointerup",n),setTimeout(t,50)};setTimeout(()=>us.addEventListener("pointerup",n),350)})}const Rc=()=>us.classList.add("hidden");let Mo=null;const RS=new ht(.06,.06,.012,20),CS=new rt({color:13136698,metalness:.85,roughness:.3,emissive:3807752});function PS(s){for(let e=0;e<s;e++){const t=new $(RS,CS);t.rotation.x=Math.PI/2;const n=new A(fi.x+(Math.random()-.5)*.3,.45,-2.3+(Math.random()-.5)*.2);t.position.copy(n),dt.add(t);const i=e*380,r=2+Math.random()*3,o=(Math.random()-.5)*.8;setTimeout(()=>Ei(3800,a=>{t.position.set(n.x+Math.sin(a*5)*.12+o*a,n.y+a*2.2,n.z+a*.6),t.rotation.z=a*r*6,t.scale.setScalar(a<.85?1:(1-a)/.15)}).then(()=>dt.remove(t)),i)}}async function IS(){if(kt)return;kt=!0,pi?.release();const s=t=>t===Ls.keira?"Keira":"Mila",e=At;Mo={at:new A(fi.x+.4,.8,-1.9),dist:5.2},de.once("crouch"),lc(!0),await Ei(900,t=>{Nn=.12*t,es.open=!0}),await _n(s(de),de===Ls.keira?"Mila. Come here. The couch is... <i>glowing</i>.":"Keira! KEIRA! The couch is glowing!"),e.goTo(Nr(e.root.position,new A(fi.x+.85,0,-1.45)),void 0,Math.PI*.9),await _n(s(e),e===Ls.mila?"Did you spill something radioactive on it again?":"Don't touch it. Glowing things are never a good sign. Usually."),await wn(400),Nn=1,Ft(2),Au(),Uh(!0),await wn(900),await _n("","Under the cushion, where the crumbs and lost pennies usually live, there was a hole. And at the bottom of the hole there was <b>sky</b>."),await _n("Keira","It's not a hole. It's a <b>door</b>."),await _n("Mila","A door to <i>where?</i>"),PS(7),await wn(1200),await _n("","A penny floated up out of the couch. Then another. Somewhere down there, someone had lost a <i>lot</i> of pennies."),await _n("Mila","Dibs on all of them."),await _n("Keira","Only one way to find out."),Rc(),lc(!1),De.found.push("portal"),Dt(),Qe.jump.textContent="Step in",Qe.jump.classList.remove("hidden"),kt=!1}const LS=new Si(new A(0,1,0),-.43);Jn.localClippingEnabled=!0;function DS(s,e){s.root.traverse(t=>{const n=t.material;n&&(n.clippingPlanes=[LS],n.needsUpdate=!0)})}async function xf(s,e){await new Promise(i=>s.goTo(Nr(s.root.position,new A(e.x,0,-1.55)),i,Math.PI)),s.faceTo=Math.PI,await wn(150),s.once("crouch"),await wn(250);const t=s.root.position.clone();await Ei(450,i=>{s.root.position.set(t.x+(e.x-t.x)*i,Math.sin(i*Math.PI)*.25+.43*i,t.z+(-1.98-t.z)*i)}),s.once("land"),await wn(380),s.faceTo=.3,await wn(450),s.faceTo=Math.PI,await wn(250),DS(s),gS();const n=s.root.position.clone();await Ei(1400,i=>{const r=i*i;s.root.position.set(n.x+(fi.x-n.x)*Math.min(1,i*2.5),.43-r*1.7,n.z+(-2.3-n.z)*Math.min(1,i*2.5)),s.root.rotation.y=Math.PI+r*2,cc=Math.max(cc,i*.6)}),s.root.visible=!1}async function Gp(){if(kt)return;kt=!0,pi?.release(),Qe.jump.classList.add("hidden"),Rc(),Nn<.5&&(zp(),Qe.jump.classList.add("hidden")),Mo={at:new A(fi.x+.3,.7,-1.9),dist:5.6};const s=xf(de,new A(fi.x-.05,0,0));await wn(1300);const e=xf(At,new A(fi.x+.12,0,0));await s,await e,cc=1,Qe.flash.classList.add("on"),await wn(550);try{sessionStorage.setItem("km_went","1")}catch{}De.hero=Qt,Dt(),location.href=`${SS}?from=house&hero=${Qt}`}let cc=0,Wp=0,As=0;function Uh(s){Wp=s?1:0}let ro=null;function lc(s){s&&!ro?ro=vS():!s&&ro&&(ro(),ro=null)}let qa=0,Cc=Le("shelf")?1:0;qa=Cc;Lr.doorway.visible=Cc>0;const NS=new A(Ve.x0+1.05,0,-.5);Rt.push({id:"book",objs:[Lr.oddBook],stand:NS,face:-Math.PI/2,act:()=>{if(Le("shelf")){Ye("The shelf is already open. Something is behind that round door...");return}de.once("wave",()=>{De.found.push("shelf"),Dt(),Lr.doorway.visible=!0,Cc=1,Ft(2),Au(),Ye("The book was a <b>lever</b>! The whole shelf moved. There's a <b>hidden room</b> behind it...",4800)})}});Rt.push({id:"door",objs:[Lr.doorway],stand:new A(Ve.x0+1,0,-.5),face:-Math.PI/2,act:()=>Ye("A round door covered in glowing symbols. It's <b>sealed</b>. Another world is waiting behind this one... <i>(coming soon)</i>",4600)});Li(new A(Ve.x0+.3,1.25,-.5-.17),()=>!Le("shelf"),12033279);const Pc=uM();Pc.position.set(-3.7,0,.75);dt.add(Pc);Pc.visible=Le("george");const bi=Ep();bi.position.set(-3.7,.05,.75);bi.rotation.y=.5;dt.add(bi);let yi=Le("george")?1:0;bi.visible=!Le("george");pn.blockers.push(new wc(new re(-4.15,.3),new re(-3.25,1.2)));Ac.push(pn.blockers[pn.blockers.length-1].clone().expandByScalar(.25));const Cl=Je("zzz");Rt.push({id:"blanket",objs:[bi],stand:new A(-2.75,0,.75),face:-Math.PI/2,act:async()=>{Le("george")||(de.once("crouch"),De.found.push("george"),De.companions.includes("george")||De.companions.push("george"),De.companion||(De.companion="george"),Dt(),Bs(),Ft(3),yi=.001,Pc.visible=!0,await Xp(),Ye("<b>George!</b> Asleep under the blanket, of course. He'll come along on your next jump.",5200))}});Li(new A(-3.7,.35,.75),()=>!Le("george"));function US(){return{id:"george",objs:[St.root],stand:new A(-2.75,0,.75),face:-Math.PI/2,act:()=>{De.companion=De.companion==="george"?null:"george",Dt(),Bs(),Ft(1),St.once("cheer"),Ye(De.companion==="george"?"<b>George</b> is coming on the next adventure. (He's not happy about it.)":"George stays home to nap.")}}}async function Xp(){St=await Bo.load(Nh("george"),!0),St.root.position.set(-3.7,.08,.75),St.root.rotation.y=.9,St.play("nap",0),dt.add(St.root),St.root.userData.spot="george",Rt.push(US())}const cn=hM(),qp=new A(.05,1.55,Ve.z0-.75),Jo=new Be;Jo.position.set(1.35,0,Ve.z0+.45);dt.add(Jo);{const s=new rt({color:6965808,roughness:.7}),e=(r,o,a,c)=>(r.position.set(o,a,c),r.castShadow=!0,r.receiveShadow=!0,Jo.add(r),r);e(new $(new ht(.22,.25,.04,24),s),0,.02,0),e(new $(new ht(.025,.035,1.38,10),s),0,.71,0);const t=e(new $(new ht(.03,.04,.62,10),s),0,1.4,0);t.rotation.z=Math.PI/2+.08;const n=e(new $(new ht(.012,.02,.22,6),s),.24,1.48,0);n.rotation.z=-.6;const i=new rt({color:4880970,roughness:.7});for(const[r,o]of[[.3,1.58],[-.27,1.45]])e(new $(new bt(.05,8,6),i),r,o,0).scale.set(1.4,.4,.8);e(new $(new ht(.06,.04,.05,14),new rt({color:14274752,roughness:.4})),-.2,1.36,.06)}Jo.visible=Le("owl");pn.blockers.push(new wc(new re(1.1,Ve.z0+.2),new re(1.6,Ve.z0+.7)));Ac.push(pn.blockers[pn.blockers.length-1].clone().expandByScalar(.2));const hc=new A(1.35,1.43,Ve.z0+.45);let Mi=-1;Le("owl")?(dt.add(cn.group),cn.group.position.copy(hc),cn.group.rotation.y=.2,cn.group.scale.setScalar(1.1)):(cn.group.position.copy(qp),dt.add(cn.group),cn.group.visible=Le("traveled"),cn.group.scale.setScalar(.9));Rt.push({id:"window",objs:[pn.windowHit,cn.group],stand:pn.windowSpot.clone(),face:Math.PI,act:()=>{if(Le("owl")){De.companion=De.companion==="owl"?null:"owl",Dt(),Bs(),Ft(1),Ye(De.companion==="owl"?"The <b>owl</b> will fly with you on the next jump.":"The owl stays on the shelf.");return}if(!Le("traveled")){Ye("Just trees and the moon. It feels like something out there is <b>watching</b>... maybe come back after an adventure.");return}de.once("wave",()=>{De.found.push("owl"),De.companions.push("owl"),De.companion||(De.companion="owl"),Dt(),Bs(),Ft(3),Mi=0,Ye("An <b>owl</b> followed you home from the other world! She's moving in.",5e3)})}});Li(new A(.45,1.3,Ve.z0+.1),()=>Le("traveled")&&!Le("owl"),16762970);Rt.push({id:"owlHome",objs:[],stand:new A(1.35,0,Ve.z0+1.35),face:Math.PI,act:()=>Rt.find(s=>s.id==="window").act()});let Ya=Le("jar")?1:0,So=Ya;const Ic=new $(new ht(.09,.08,.2,20),new Yt({color:13625568,roughness:.05,transparent:!0,opacity:.45}));Ic.position.set(3.35,1.83,Ve.z0+.2);dt.add(Ic);const Lc=new $(new ht(.075,.07,.11,16),new rt({color:13136698,metalness:.8,roughness:.35}));Lc.position.y=-.04;Ic.add(Lc);Rt.push({id:"cabinet",objs:[pn.cabinetHit,Ic],stand:new A(3.4,0,Ve.z0+1.15),face:Math.PI,act:()=>{if(Le("jar")){So=So?0:1;return}de.once("jump",()=>{So=1,De.found.push("jar"),Lc.visible=!1;const s=Sn;Sn=Mu(100),Dt(),Wr(s),Ft(2),Tc(),Ye("An old <b>penny jar</b> hidden behind the cereal! <b>+100 pennies</b>",4200)})}});Lc.visible=!Le("jar");Li(new A(3.4,1.7,Ve.z0+.45),()=>!Le("jar"));let Da=0,Dc=0;Rt.push({id:"fridge",objs:Go.hit,stand:new A(4.2,0,Ve.z0+1.6),face:Math.PI*.95,act:()=>{Dc=1,Ft(0),jp()}});const uc=[{id:"food_milk",name:"Milk and eggs",price:40,kind:"milk",shelf:0},{id:"food_fruit",name:"Fruit",price:70,kind:"fruit",shelf:1},{id:"food_pizza",name:"Leftover pizza and jam",price:110,kind:"pizza",shelf:2}];function Yp(){for(const s of uc){const e=Go.shelves[s.shelf];Pn(s.id)&&!e.userData.filled&&(e.add(rM(s.kind)),e.userData.filled=!0)}}Yp();function jp(){Qe.fridge.classList.remove("hidden"),Qe.fridgeList.innerHTML="";const s=uc.filter(e=>Pn(e.id)).length;Je("fridgeNote").textContent=s===0?"Completely empty. Not even a pickle.":s===3?"Full! Nobody in this house is going hungry.":"Getting there.";for(const e of uc){const t=document.createElement("button");t.className="row"+(Pn(e.id)?" owned":""),t.innerHTML=`<span>${e.name}</span><span class="price">${Pn(e.id)?"In the fridge":`<i class="cn"></i>${e.price}`}</span>`,t.onclick=()=>{Pn(e.id)||Op(e.price)&&(De.owned.push(e.id),Dt(),Yp(),Ft(1),jp())},Qe.fridgeList.appendChild(t)}}Je("fridgeClose").onclick=()=>{Qe.fridge.classList.add("hidden"),Dc=0};const Yn=uS();dt.add(Yn.group);const at=fS();dt.add(at.group);at.group.visible=!1;const OS=at.blockers.map(s=>s.clone().expandByScalar(.28)),zs=($t+Jt)/2,Qo=new A(Ve.x0+.75,0,zs);let Na=0,$n=0,wo=Le("attic")?1:0,vr=wo,ja=0;Yn.ladder.visible=wo>0;Rt.push({id:"closet",objs:[Yn.doorHit],stand:Qo,face:-Math.PI/2,act:()=>{$n=$n?0:1,Ft(0),$n&&!Le("closet")&&(De.found.push("closet"),Dt(),Ye("The hall closet. Coats, a broken umbrella, boots... and a <b>string</b> hanging down from the ceiling.",4800))}});Li(new A(Ve.x0+.2,1.2,zs),()=>!Le("closet")&&$n===0);Rt.push({id:"coats",objs:Yn.coats,stand:Qo,face:-Math.PI/2,act:()=>{if($n<1)return;if(Le("coatpocket")){Ye("Just coats. One of them smells like a wet dog.");return}De.found.push("coatpocket");const s=Sn;Sn=Mu(25),Dt(),Wr(s),Tc(),Ft(1),Ye("Somebody left <b>25 pennies</b> in a coat pocket. Finders keepers.")}});Rt.push({id:"cord",objs:[Yn.cordHit],stand:Qo,face:-Math.PI/2,act:()=>{if($n<1){$n=1;return}if(vr>0){wu();return}de.once("jump",()=>{ja=1,vr=1,Yn.ladder.visible=!0,Au(),Ft(2),Le("attic")||FS()})}});Li(new A(Ve.x0-.5,1.9,zs+.1),()=>$n>.5&&!Le("attic"),13084927);Rt.push({id:"ladder",objs:[Yn.ladderHit],stand:Qo,face:-Math.PI/2,act:()=>wu()});async function FS(){kt=!0,pi?.release(),await wn(900),await _n("Mila","There's an upstairs ABOVE the upstairs?"),await _n("Keira","It's an attic. Every house has one."),await _n("","A cold draft drifted down the ladder. It smelled like old books and rain. Somewhere up there, very quietly, something was <i>ticking</i>."),await _n("Keira","...Most attics don't tick, though."),Rc(),De.found.push("attic"),Dt(),kt=!1,Ye("Tap the ladder to climb up.")}async function dc(s,e){if(e){await new Promise(n=>s.goTo(Nr(s.root.position,Qo.clone()),n,-Math.PI/2));const t=s.root.position.clone();await Ei(500,n=>s.root.position.set(t.x+(Ve.x0-.45-t.x)*n,0,t.z+(zs-t.z)*n)),await Ei(700,n=>{s.root.position.y=n*1.6}),s.root.visible=!1}else{const t=at.hatch.position;await new Promise(i=>s.goTo(Nr(s.root.position,new A(t.x+.75,fn,t.z)),i,-Math.PI/2));const n=s.root.position.clone();await Ei(400,i=>s.root.position.set(n.x+(t.x-n.x)*i,fn,n.z+(t.z-n.z)*i)),await Ei(700,i=>{s.root.position.y=fn-i*1.6}),s.root.visible=!1}}async function fc(s,e,t){if(s.root.visible=!0,e){const n=at.hatch.position;s.root.position.set(n.x,fn-1.4,n.z),await Ei(800,i=>{s.root.position.y=fn-1.4+1.4*i})}else s.root.position.set(Ve.x0-.45,1.4,zs),await Ei(700,n=>{s.root.position.y=1.4*(1-n)});s.once("land"),await new Promise(n=>s.goTo(Nr(s.root.position,t),n,.3))}function Kp(s){xn=s,Zo=s?OS:Ac,Bn=s?at.bounds:Fp,at.group.visible=s===1,Qe.shopBtn.classList.toggle("hidden",s===1)}async function wu(){if(kt)return;kt=!0,pi?.release(),at.group.visible=!0;const s=wn(700).then(()=>dc(At,!0));await dc(de,!0),Kp(1);const e=at.hatch.position;await fc(de,!0,new A(e.x+1,fn,e.z-.3)),await s,fc(At,!0,new A(e.x+1.1,fn,e.z+.45)),Le("upstairs")||(De.found.push("upstairs"),Dt(),Ye("The attic. Dusty boxes, an old trunk, and something tall hiding under a sheet.",5e3)),kt=!1}async function $p(){if(kt)return;kt=!0,pi?.release();const s=wn(700).then(()=>dc(At,!1));await dc(de,!1),Kp(0),at.group.visible=!0,await fc(de,!1,new A(Ve.x0+.9,0,zs-.2)),await s,fc(At,!1,new A(Ve.x0+1.3,0,zs+.3)).then(()=>{xn===0&&(at.group.visible=!1)}),kt=!1}const kS=new A(at.hatch.position.x+.8,fn,at.hatch.position.z);Rt.push({id:"hatch",lvl:1,objs:[at.hatchHit],stand:kS,face:-Math.PI/2,act:()=>$p()});let bo=Le("map")?1:0,Oh=bo;at.mapPaper.visible=bo>0;const Zp=Je("mapP");function vf(){pS(Je("mapCanvas"),De.found),Zp.classList.remove("hidden")}Je("mapClose").onclick=s=>{s.stopPropagation(),Zp.classList.add("hidden")};Rt.push({id:"trunk",lvl:1,objs:[at.trunk],stand:new A(-1.9,fn,-1.35),face:Math.PI,act:()=>{if(Le("map")){Oh=1,vf();return}de.once("crouch",()=>{Oh=1,at.mapPaper.visible=!0,Ft(2),De.found.push("map"),Dt(),setTimeout(()=>{vf(),Ye("An old <b>map of the house</b>, with secret places marked. Some of them you've found. Some of them... you haven't.",6e3)},700)})}});Li(new A(-1.9,fn+.5,-2.3),()=>xn===1&&!Le("map"));let ri=Le("mirror")?1:0;at.sheet.visible=!Le("mirror");at.glass.open=Le("mirror");Rt.push({id:"mirror",lvl:1,objs:[at.mirror],stand:new A(-.35,fn,-.35),face:2.2,act:async()=>{if(Le("mirror")){Ye("The mirror is <b>locked</b>. There's a tiny keyhole at the bottom of the frame. The key has to be somewhere in this house...",5e3);return}kt=!0,pi?.release(),de.once("wave"),await wn(500),ri=.001,Ft(2),lc(!0),await wn(1200),at.glass.open=!0,Uh(!0),await wn(800),await _n("Keira","That's not our reflection."),await _n("Mila","Good. I look way cooler than that."),await _n("","Inside the mirror was another attic. Darker. Bigger. Full of clocks, all ticking, none of them telling the same time."),await _n("Keira","It's locked. Look, there's a keyhole in the frame."),await _n("Mila","So we find the key. How hard can it be?"),Rc(),lc(!1),Uh(!1),De.found.push("mirror"),Dt(),kt=!1,Ye("<b>The mirror world is coming soon.</b> Find the key...",4500)}});Li(new A(.25,fn+1.6,-1),()=>xn===1&&!Le("mirror"),13084927);const cr=Je("card"),BS=Je("cardName"),zS=Je("cardText"),yf=Je("cardOpts");let Fh=null;function mn(){cr.classList.add("hidden"),Fh=null}Je("cardX").addEventListener("click",s=>{s.stopPropagation(),mn()});const ar=s=>s[Math.floor(Math.random()*s.length)],Cs=()=>Qt==="keira",Dn=s=>()=>{mn(),Rt.find(e=>e.id===s)?.act()};function To(s){const e=Qp(s);if(e){Fh=s,BS.textContent=typeof e.name=="function"?e.name():e.name,zS.innerHTML=e.text(),yf.innerHTML="";for(const[t,n]of e.opts?.()||[]){const i=document.createElement("button");i.textContent=t,i.onclick=r=>{r.stopPropagation(),n(),Fh===s&&!cr.classList.contains("hidden")&&To(s)},yf.appendChild(i)}cr.classList.remove("hidden"),cr.classList.remove("in"),cr.offsetWidth,cr.classList.add("in")}}function kh(s,e=4,t="♥"){for(let n=0;n<e;n++)setTimeout(()=>{const i=s.clone().project(Xt),r=document.createElement("div");r.className="heart",r.textContent=t,r.style.left=`${(i.x*.5+.5)*innerWidth+(Math.random()-.5)*30}px`,r.style.top=`${(-i.y*.5+.5)*innerHeight}px`,document.body.appendChild(r),setTimeout(()=>r.remove(),1400)},n*160)}let Ua=!0,oo=!0,Eo=0,Ka=0;const Jp=()=>{let s=null;return dt.traverse(e=>{e.userData.item==="ball"&&(s=e)}),s},Vi=new A,Xo=new $(new ht(.012,.018,.17,8),new rt({color:12576511,transparent:!0,opacity:.6,roughness:.05}));Xo.position.set(2.4,1,Ve.z0+.28);Xo.visible=!1;dt.add(Xo);const HS=["<i>A History of Doors That Shouldn't Be There</i>","<i>Owls, and Why They Stare</i>","<i>Cooking for Pugs</i>","<i>The Book of Weird Things, Volume Two</i>","<i>How to Tell If Your House Is Bigger on the Inside</i>","<i>Moths: A Love Story</i>"],Oa=["Mila's drawing of George. He looks like a potato with legs. It's very accurate.","Keira's drawing of an owl in a tree, under the moon. The owl looks a lot like the one at the window...","A drawing of the house, the two girls, and a purple door with a question mark on it. Nobody remembers drawing it.","A swirl. Mila says it's a portal. Keira says it's a snail."],VS={couch:{name:"The couch",text:()=>Le("portal")?"Comfy, a bit saggy, full of crumbs. If you put your ear on the middle cushion, it <i>hums</i>.":"Comfy, a bit saggy, and full of crumbs. The middle cushion sits a little higher than the others...",opts:()=>[[Nn>.5?"Close the cushion":"Lift the middle cushion",Dn("cushion")],...Nn>.5?[["Jump in",()=>{mn(),Gp()}]]:[],["Bounce on it",()=>{mn(),de.once("jump"),setTimeout(MS,250),Ye(ar(["Boing.","Mom would not like this.","Best couch in the world for bouncing."]))}]]},coffeeTable:{name:"Coffee table",text:()=>"Crayons, a cold mug of something, and drawings nobody finished.",opts:()=>[["Draw something",()=>{mn(),de.once("crouch"),Ye(Cs()?`Keira draws an owl. It comes out <i>really</i> good. She says it's "fine".`:"Mila draws Keira as a potato. It's her best work.")}]]},rug:{name:"The rug",text:()=>"An old rug from Grandma's house. One corner keeps curling up, like something underneath is pushing on it..."},lamp:{name:"Floor lamp",text:()=>"A tall brass lamp. It flickers when the couch is humming.",opts:()=>[[Ua?"Turn it off":"Turn it on",()=>{Ua=!Ua,Ro.lamp=Ua?rw:0,xr()}]]},painting:{name:"Painting",text:()=>`Mountains at sunset. Dad says it's "tasteful".`},eyePainting:{name:"Painting of an eye",text:()=>ar(["A painting of an eye. Pretty sure it just blinked.","A painting of an eye. It's looking at you. It's <i>always</i> looking at you.","An eye. Keira thinks it's Victorian. Mila thinks it's rude."])},bookshelf:{name:"Bookshelf",text:()=>Cs()?"Too many books. Keira has read most of them twice. One of them doesn't look like the others.":"So many books. Mila has read the ones with pictures.",opts:()=>[["Read something",()=>{mn(),Ye(`${Cs()?"Keira":"Mila"} pulls out ${ar(HS)}. ${Cs()?"She reads three chapters standing up.":"She looks at the pictures and puts it back upside down."}`,5e3)}],...Le("shelf")?[]:[["Pull the odd book",Dn("book")]]]},sideboard:{name:"Sideboard",text:()=>"Holds the record player, three dead batteries, a single sock and a takeout menu from 2019."},window:{name:"The window",text:()=>Le("owl")?"Trees and the moon. The branch where the owl used to sit is empty now.":Le("traveled")?"There's an <b>owl</b> on the branch outside, staring right at you.":"Trees and the moon. It feels like something out there is watching.",opts:()=>Le("owl")?[]:[[Le("traveled")?"Open the window":"Look outside",Dn("window")]]},fridge:{name:"The fridge",text:()=>"It hums. Not the portal kind of hum, the normal kind. Probably.",opts:()=>[["Open it",Dn("fridge")]]},cabinet:{name:"Kitchen cupboard",text:()=>Le("jar")?"Cereal, crackers, and an empty penny jar.":"The cereal cupboard. Something in the back clinks when you lean on the counter.",opts:()=>[[So?"Close it":"Open it",Dn("cabinet")]]},cupboardL:{name:"Kitchen cupboard",text:()=>"Plates, bowls, and the good glasses nobody is allowed to use."},sink:{name:"The sink",text:()=>Cs()?"Somebody's turn to do the dishes. It's Mila's turn. Mila says it isn't.":"Somebody's turn to do the dishes. Definitely Keira's.",opts:()=>[["Turn on the tap",()=>{mn(),Ka=2.2,mf(2)}]]},kitchenTable:{name:"Kitchen table",text:()=>"Breakfast table. A little sticky. Nobody knows why."},counterStuff:{name:"Kitchen counter",text:()=>"Cereal (the good kind), a fruit bowl, and a dish rack that's been full since Tuesday."},aquarium:{name:"Aquarium",text:()=>"Glowing fish from the deep. One of them has teeth. Mila named him Gary.",opts:()=>[["Feed the fish",()=>{mn(),Eo=4,Ft(0),Ye("The fish swarm to the top. Gary eats everyone's food.")}]]},plant:{name:"Big leafy plant",text:()=>"Mila named it Gerald. Gerald is thriving.",opts:()=>[["Water Gerald",()=>{mn(),de.once("crouch"),mf(.6),Ye("Gerald looks pleased. Somehow.")}]]},pottedPlant:{name:"Pot plant",text:()=>"A little plant. It leans toward the window at night, which is weird, because plants don't do that."},records:{name:"Record player",text:()=>"Old, crackly, and perfect.",opts:()=>[[Ds?"Stop the music":"Play a record",Dn("records")]]},lights:{name:"String lights",text:()=>"Warm little bulbs over the couch.",opts:()=>[[oo?"Turn them off":"Turn them on",()=>{oo=!oo,Oc.traverse(s=>{s.isPointLight&&(s.intensity=oo?1.4:0);const e=s.material;e?.emissive&&(e.emissiveIntensity=oo?2.4:.05)}),xr()}]]},george:{name:"George",text:()=>St&&St.clip==="cheer"?"George snorts. That's pug for thank you.":St&&St.clip==="nap"?"A pug of very few interests: sleeping, snacks, and more sleeping. He's snoring.":"George is awake. This is rare. Enjoy it.",opts:()=>[["Pet him",()=>{const s=St.clip==="nap";de.once("crouch"),Dp(),kh(St.root.position.clone().add(new A(0,.6,0)),5),St.once("cheer",()=>{s&&St.play("nap",.8)})}],[St&&St.clip==="nap"?"Wake him up":"Let him sleep",()=>{St.clip==="nap"?(Np(),St.play("idle"),Ye("<b>WOOF.</b> He is awake, and he is not happy about it."),setTimeout(()=>St&&St.play("nap",1),9e3)):(St.play("nap",1),Ye("Back to sleep he goes."))}],...Ip(Nc(),"treat")?[["Give him a treat",()=>{mn(),em("treat")[1]()}]]:[],[De.companion==="george"?"Leave him home":"Bring him along",()=>{De.companion=De.companion==="george"?null:"george",Dt(),Bs(),Ft(1)}]]},owl:{name:"The owl",text:()=>"She doesn't have a name yet. She looks like she knows things.",opts:()=>[["Pet her",()=>{yS(),kh(hc.clone().add(new A(0,.4,0)),3)}],[De.companion==="owl"?"Leave her home":"Bring her along",()=>{De.companion=De.companion==="owl"?null:"owl",Dt(),Bs(),Ft(1)}]]},blanket:{name:"A blanket",text:()=>"A lumpy blanket. It's... snoring?",opts:()=>[["Lift it",Dn("blanket")]]},throw:{name:"Throw blanket",text:()=>"Half on the couch, half on the floor. Its natural habitat."},floorPillow:{name:"A pillow",text:()=>"A couch pillow on the floor. Mila says it's lava-proof."},backpack:{name:"School backpack",text:()=>Cs()?"Your backpack. Heavier than it looks. Mostly books.":"Keira's backpack. Mila checks for snacks. No snacks."},ball:{name:"Soccer ball",text:()=>"Not allowed inside. It's inside.",opts:()=>[["Kick it",()=>{mn();const s=Jp();if(!s)return;de.once("jump");const e=s.position.clone().sub(de.root.position);e.y=0,e.normalize().multiplyScalar(4.5),Vi.copy(e),xr()}]]},laundry:{name:"Laundry basket",text:()=>"Clean laundry. Probably. Nobody has carried it upstairs in a week."},shoes:{name:"Shoes",text:()=>"Kicked off wherever. Nobody can ever find the other one in the morning."},rope:{name:"Rope toy",text:()=>"George's rope toy. Slightly damp. Don't ask."},bookStack:{name:"A stack of books",text:()=>"Library books. Two of them are overdue. One of them is overdue from a library that doesn't exist anymore."},drawing0:{name:"Drawing",text:()=>Oa[0]},drawing1:{name:"Drawing",text:()=>Oa[1]},drawing2:{name:"Drawing",text:()=>Oa[2]},drawing3:{name:"Drawing",text:()=>Oa[3]},closet:{name:"Hall closet",text:()=>Le("attic")?"Coats, boots, and a ladder up to the attic.":"Coats, a broken umbrella, boots...",opts:()=>[[$n?"Close the door":"Open the door",Dn("closet")]]},coats:{name:"Coats",text:()=>"Lots of coats. Lots of pockets.",opts:()=>[["Check the pockets",Dn("coats")]]},cord:{name:"A string",text:()=>"A string hanging from the closet ceiling, with a wooden bead on the end.",opts:()=>[["Pull it",Dn("cord")]]},ladder:{name:"Attic ladder",text:()=>"It goes up into the dark. Something up there is ticking.",opts:()=>[["Climb up",Dn("ladder")]]},hatch:{name:"The hatch",text:()=>"The ladder back down to the house.",opts:()=>[["Climb down",Dn("hatch")]]},trunk:{name:"Old trunk",text:()=>Le("map")?"The trunk with the map of the house in it.":"A heavy old trunk with brass corners. It isn't locked.",opts:()=>[[Le("map")?"Read the map":"Open it",Dn("trunk")]]},mirror:{name:"Tall mirror",text:()=>Le("mirror")?"It shows a darker attic full of ticking clocks. There's a keyhole at the bottom of the frame.":"Something tall under a dust sheet.",opts:()=>[[Le("mirror")?"Try to open it":"Pull off the sheet",Dn("mirror")]]},boxes:{name:"Boxes",text:()=>ar(["A box labelled HOLIDAY STUFF.","A box labelled TAXES. Boring.","A box labelled DO NOT OPEN. It's taped shut. Very well taped.","A box labelled MILA BABY CLOTHES. Mila refuses to look."])},suitcases:{name:"Old suitcases",text:()=>"Stickers from places nobody in the family remembers going."},rocker:{name:"Rocking chair",text:()=>"An old rocking chair facing the round window. Sometimes it rocks on its own.",opts:()=>[["Give it a push",()=>{$a=4,Ye("Creak... creak... creak...")}]]},bulb:{name:"Light bulb",text:()=>"A bare bulb on a long cord. It sways a little, even when nobody touches it."},roundWindow:{name:"Round window",text:()=>"You can see the whole street from up here. And the moon. And... is that a light in the garden shed?"},"girl:keira":{name:"Keira",text:()=>"Keira. Reading something, probably.",opts:()=>[["Play as Keira",()=>{mn(),Or()}],["Talk",()=>Ye("<b>Keira:</b> "+ar(["Did you know owls can't move their eyes? That's why they turn their whole head.","I'm on chapter twelve. Don't ask what happens.","This house is weirder than it used to be. I like it.","If you find a key, don't touch it. Give it to me."]))]]},"girl:mila":{name:"Mila",text:()=>"Mila. Wearing sunglasses indoors, as usual.",opts:()=>[["Play as Mila",()=>{mn(),Or()}],["Talk",()=>{Ye("<b>Mila:</b> "+ar(["Watch this.","Is it snack time? It feels like snack time.","I'm not scared of the attic. YOU'RE scared of the attic.","These are my cool glasses. I have regular glasses too. They're less cool."]))}]]}};let $a=0;const yr=new Map;let GS=0;function Mf(s,e,t,n){const i=zo[s];if(!i)return;const r=new Be,o=i.make();r.add(o),r.position.set(t,e?fn:0,n),r.rotation.y=Math.random()*Math.PI*2;const a=new $(new bt(.2,8,6),new en({visible:!1}));a.position.y=.08,a.userData.hitbox=!0,r.add(a);const c="pick:"+GS++;r.userData.item=c,(e?at.group:dt).add(r),e&&(r.position.y=0),yr.set(c,{id:s,obj:r,lvl:e}),Li(new A(t,(e?fn:0)+.12,n),()=>!!r.parent&&xn===e,16773312)}function WS(){for(const t of nS)De.got.includes(t.id)||Mf(t.id,t.lvl,t.at[0],t.at[1]);const s=iS.slice().sort(()=>Math.random()-.5).slice(0,4),e=sS.slice().sort(()=>Math.random()-.5);s.forEach(([t,n],i)=>Mf(e[i],0,t,n))}const Nc=()=>De.bags[Qt],Pl=()=>Qt==="keira"?"Mila":"Keira",Bh=()=>Qt==="keira"?"Keira":"Mila";function XS(s,e){const t=e.clone().project(Xt),n=document.createElement("div");n.className="flyIcon",n.textContent=s;const i=(t.x*.5+.5)*innerWidth-14,r=(-t.y*.5+.5)*innerHeight-14;n.style.left=i+"px",n.style.top=r+"px",document.body.appendChild(n);const o=fo.getBoundingClientRect();requestAnimationFrame(()=>{n.style.transform=`translate(${o.left+o.width/2-i-14}px, ${o.top+o.height/2-r-14}px) scale(.6)`,n.style.opacity="0.2"}),setTimeout(()=>{n.remove(),fo.classList.remove("bump"),fo.offsetWidth,fo.classList.add("bump")},720)}function qS(s){const e=yr.get(s);e&&(mn(),de.once("crouch"),setTimeout(()=>{if(!yr.has(s))return;const t=zo[e.id];if(!Pp(Nc(),e.id)){Ye(`${Bh()}'s bag is full. Throw something away first.`);return}const n=new A;e.obj.getWorldPosition(n),e.obj.removeFromParent(),yr.delete(s),t.kind==="useful"&&!De.got.includes(e.id)&&De.got.push(e.id),Dt(),Ft(1),XS(t.icon,n),Ye(`${t.icon} <b>${t.name}</b> into ${Bh()}'s bag.`,2200)},420))}function YS(s){const e=yr.get(s);if(!e)return null;const t=zo[e.id];return{name:t.name,text:()=>t.text,opts:()=>[["Pick it up",()=>qS(s)]]}}const Qp=s=>VS[s]||(s.startsWith("pick:")?YS(s):null),uo=new Zn(16769704,0,4.5,1.6);dt.add(uo);const fo=Je("bagBtn"),bu=Je("bagP"),Sf=Je("bagGrid"),Il=Je("bagInfo");let ds=null;function em(s){switch(s){case"treat":return["Give it to George",()=>{if(!St||!Le("george")){Ye("There's no dog around to give it to. Yet.");return}Za();const e=St;Wo(new A(e.root.position.x+.75,0,e.root.position.z+.1),()=>{de.faceTo=Math.atan2(e.root.position.x-de.root.position.x,e.root.position.z-de.root.position.z),de.once("crouch"),Ph(Nc(),"treat"),Dt(),e.play("idle",.2),Dp(),setTimeout(()=>{e.once("cheer",()=>e.play("nap",1.2)),kh(e.root.position.clone().add(new A(0,.6,0)),6)},500),Ye("George wakes up instantly. <b>Crunch crunch crunch.</b> Best day of his life.",3600)})}];case"fishFood":return["Feed the fish",()=>{if(!Pn("aquarium")){Ye("No fish to feed. Maybe the house needs an aquarium...");return}Za(),Eo=4,Ft(0),Ye("A pinch of flakes. The deep-sea fish go wild. Gary gets most of it.")}];case"flashlight":return[De.torch?"Turn it off":"Turn it on",()=>{De.torch=!De.torch,Dt(),xr(),Ao()}];case"crayons":return["Draw something",()=>{Za(),de.once("crouch"),Ye(Cs()?"Keira draws a map of the attic from memory. It's weirdly accurate.":"Mila draws a mustache on the drawing of George. Perfect.")}];case"seeds":return["Plant them",()=>Ye("<i>DO NOT PLANT INDOORS.</i> Fine. Maybe there's a garden somewhere...")]}return null}function Ao(){const s=Nc();Je("bagTitle").textContent=`${Bh()}'s bag`,Je("bagSub").textContent=s.length?`${s.reduce((o,a)=>o+a.n,0)} things, ${Ch-s.length} empty spots`:"Empty. Tap on little things lying around the house to pick them up.",Sf.innerHTML="";for(let o=0;o<Ch;o++){const a=s[o],c=document.createElement("button");c.className="slot"+(a&&a.id===ds?" sel":""),a&&(c.innerHTML=`${zo[a.id]?.icon||"?"}${a.n>1?`<b>${a.n}</b>`:""}`,c.onclick=l=>{l.stopPropagation(),ds=a.id,Ao()}),Sf.appendChild(c)}if(Il.innerHTML="",!ds||!Ip(s,ds)){ds=null;return}const e=zo[ds],t=ds;Il.innerHTML=`<h3>${e.icon} ${e.name}</h3><p>${e.text}</p><div class="opts"></div>`;const n=Il.querySelector(".opts"),i=(o,a)=>{const c=document.createElement("button");c.textContent=o,c.onclick=l=>{l.stopPropagation(),a()},n.appendChild(c)},r=em(t);r&&i(r[0],r[1]),i(`Give to ${Pl()}`,()=>{const o=De.bags[Qt==="keira"?"mila":"keira"];if(!Pp(o,t)){Ye(`${Pl()}'s bag is full.`);return}Ph(s,t),Dt(),Ao(),Ye(`${e.icon} Gave the ${e.name.toLowerCase()} to ${Pl()}.`,2e3)}),e.kind==="junk"&&i("Throw it away",()=>{Ph(s,t),Dt(),Ao()})}function tm(){mn(),ds=null,Ao(),bu.classList.remove("hidden")}function Za(){bu.classList.add("hidden")}fo.onclick=s=>{s.stopPropagation(),tm()};Je("bagClose").onclick=s=>{s.stopPropagation(),Za()};bu.addEventListener("pointerdown",s=>s.stopPropagation());Rt.push({id:"other",objs:[],stand:new A,face:0,act:()=>Or()});const Xr=oM();Xr.group.position.set(Ve.x0+.27,.7,Eh);Xr.group.rotation.y=Math.PI/2;dt.add(Xr.group);const Uc=aM();Uc.position.set(-.45,0,Ve.z0+.4);dt.add(Uc);const ea=cM();ea.group.position.set(.25,.62,Ve.z0+.25);dt.add(ea.group);const Oc=lM(-3.6,-.6,2.85,Ve.z0+.06);dt.add(Oc);let Ds=!1;Rt.push({id:"records",objs:[ea.group],stand:new A(.3,0,Ve.z0+1),face:Math.PI,act:()=>{Pn("records")&&(Ds=!Ds,Ds?_S():xS(),Ye(Ds?"Spooky jazz. Good choice.":"Quiet again."))}});const Tu=[{id:"plant",name:"Big leafy plant",desc:"For the corner. It might be watching you.",price:60,obj:Uc},{id:"lights",name:"String lights",desc:"Warm little bulbs over the couch.",price:120,obj:Oc},{id:"records",name:"Record player",desc:"Tap it to play some music.",price:180,obj:ea.group},{id:"aquarium",name:"Aquarium",desc:"Glowing fish from the deep.",price:300,obj:Xr.group},{id:"couch",name:"New velvet couch",desc:"Deep green, with gold feet. The portal comes too.",price:600,obj:null}];function nm(){for(const s of Tu)s.obj&&(s.obj.visible=Pn(s.id));di.restyle(Pn("couch"))}nm();function Eu(){Qe.shop.classList.remove("hidden"),Qe.shopList.innerHTML="";for(const t of Tu){const n=document.createElement("button");n.className="row"+(Pn(t.id)?" owned":""),n.innerHTML=`<span><b>${t.name}</b><small>${t.desc}</small></span><span class="price">${Pn(t.id)?"Yours":`<i class="cn"></i>${t.price}`}</span>`,n.onclick=()=>{Pn(t.id)||Op(t.price)&&(De.owned.push(t.id),Dt(),nm(),Ft(2),Eu(),t.obj&&(t.obj.scale.setScalar(.01),zh.push({o:t.obj,t:0})),Qe.shop.classList.add("hidden"),Ye(`<b>${t.name}</b> is in the house!`),t.id==="couch"&&(di.group.scale.setScalar(.01),zh.push({o:di.group,t:0})))},Qe.shopList.appendChild(n)}const s=uc.filter(t=>!Pn(t.id)).length,e=document.createElement("p");e.className="tip",e.textContent=s?"Food for the fridge is in the fridge. Go open it.":"",Qe.shopList.appendChild(e)}const zh=[];Qe.shopBtn.onclick=s=>{s.stopPropagation(),Sn=yu(),Wr(),Eu()};Je("shopClose").onclick=()=>Qe.shop.classList.add("hidden");Qe.jump.onclick=s=>{s.stopPropagation(),mc(Rt.find(e=>e.id==="portal"))};Qe.who.onclick=s=>{s.stopPropagation(),Or()};function Au(){po=.6;try{navigator.vibrate?.(80)}catch{}}let po=0;const Ns=new K1,Ur=new re,hs=56,Ja=Je("stick"),jS=Je("knob");let gn=null,Wt=null;const Ki=new Map;let oi=null,xs=1,Fc=0,qo=!1;const im=.3,sm=1.25,KS=-.32,$S=.75;function rm(){const[s,e]=[...Ki.values()];return{d:Math.hypot(e.x-s.x,e.y-s.y),a:Math.atan2(e.y-s.y,e.x-s.x),mx:(s.x+e.x)/2,my:(s.y+e.y)/2}}const wf=new Si;function om(s,e){return wf.set(Cu,-((xn?fn:0)+.6)),Ur.set(s/innerWidth*2-1,-(e/innerHeight)*2+1),Ns.setFromCamera(Ur,Xt),Ns.ray.intersectPlane(wf,new A)}function Ru(){Wt=null,Ja.classList.add("hidden"),de&&(de.steer=0)}Gr.addEventListener("pointerdown",s=>{if(Ki.set(s.pointerId,{x:s.clientX,y:s.clientY}),Ki.size===2){Ru(),gn=null;const e=rm();oi={d:e.d,a:e.a,zoom:xs,yaw:Fc,anchor:om(e.mx,e.my)};return}Ki.size>2||(gn={id:s.pointerId,x:s.clientX,y:s.clientY,t:performance.now()})});Gr.addEventListener("pointermove",s=>{if(!Ki.has(s.pointerId))return;if(Ki.set(s.pointerId,{x:s.clientX,y:s.clientY}),oi&&Ki.size>=2){const n=rm();xs=Cn.clamp(oi.zoom*oi.d/Math.max(20,n.d),im,sm);let i=n.a-oi.a;if(i=Math.atan2(Math.sin(i),Math.cos(i)),Fc=Cn.clamp(oi.yaw+i,KS,$S),qo=!0,Vh(),oi.anchor){const r=om(n.mx,n.my);r&&(Xn.x+=oi.anchor.x-r.x,Xn.z+=oi.anchor.z-r.z,hm(),Vh())}return}if(!gn||s.pointerId!==gn.id||kt)return;const e=s.clientX-gn.x,t=s.clientY-gn.y;if(!Wt&&Math.hypot(e,t)>14&&(Wt={x:gn.x,y:gn.y,jx:0,jy:0},Ja.style.transform=`translate(${gn.x}px, ${gn.y}px)`,Ja.classList.remove("hidden"),de.goTo([]),qo=!1,cm(),mn()),Wt){const n=Math.hypot(e,t),i=Math.min(1,hs/Math.max(1,n));Wt.jx=e*i/hs,Wt.jy=t*i/hs,n>hs*1.6&&(Wt.x=s.clientX-e/n*hs*1.6,Wt.y=s.clientY-t/n*hs*1.6,gn.x=Wt.x,gn.y=Wt.y,Ja.style.transform=`translate(${Wt.x}px, ${Wt.y}px)`),jS.style.transform=`translate(${Wt.jx*hs}px, ${Wt.jy*hs}px)`}});const am=s=>{Ki.delete(s.pointerId),Ki.size<2&&(oi=null)};Gr.addEventListener("pointercancel",s=>{am(s),gn?.id===s.pointerId&&(gn=null,Ru())});Gr.addEventListener("wheel",s=>{s.preventDefault(),xs=Cn.clamp(xs*(1+s.deltaY*.001),im,sm)},{passive:!1});function cm(){Qe.shop.classList.add("hidden"),Qe.fridge.classList.contains("hidden")||(Qe.fridge.classList.add("hidden"),Dc=0)}Gr.addEventListener("pointerup",s=>{if(am(s),!gn||s.pointerId!==gn.id)return;const e=!!Wt;if(gn=null,Ru(),e||kt)return;Ur.set(s.clientX/innerWidth*2-1,-(s.clientY/innerHeight)*2+1),Ns.setFromCamera(Ur,Xt),cm(),mn();const t=Ns.intersectObjects(xn?[at.group,de.root,At.root]:dt.children,!0);let n=null,i=null;for(const o of t){if(o.object===pn.floorHit||o.object===at.floorHit||o.object.isPoints||o.object.isLine||!QS(o.object)||o.object.material&&o.object.material.visible===!1&&!o.object.userData.spot&&!o.object.userData.hitbox)continue;let a=o.object;for(;a&&!a.userData.spot&&!a.userData.item;)a=a.parent;a&&(n=a.userData.spot||a.userData.item,i=a);break}const r=Ns.intersectObject(xn?at.floorHit:pn.floorHit)[0];if(n&&i){qo=!1,ew(n,i);return}r&&(qo=!1,Wo(r.point))});const ao=new A,bf=new A;function Tf(s,e){if(s<Bn.x0||s>Bn.x1||e<Bn.z0||e>Bn.z1)return!0;for(const t of Zo){const n=t.min.x+.08,i=t.max.x-.08,r=t.min.y+.08,o=t.max.y-.08;if(s>n&&s<i&&e>r&&e<o)return!0}return!1}const vi=new A;function ZS(s){if(kt||!de){vi.set(0,0,0),de&&(de.steer=0);return}const e=new A,t=Wt?Math.min(1,Math.hypot(Wt.jx,Wt.jy)):0;if(Wt&&t>=.12){Xt.getWorldDirection(ao),ao.y=0,ao.normalize(),bf.crossVectors(ao,Cu).normalize();const a=bf.multiplyScalar(Wt.jx).add(ao.clone().multiplyScalar(-Wt.jy));a.y=0,a.normalize(),e.copy(a).multiplyScalar(de.speed*(.35+.75*t))}vi.lerp(e,Math.min(1,s*(e.lengthSq()>0?6:7)));const n=vi.length();if(n<.03){vi.set(0,0,0),de.steer=0;return}const i=de.root.position,r=i.x+vi.x*s,o=i.z+vi.z*s;Tf(r,i.z)?vi.x=0:i.x=r,Tf(i.x,o)?vi.z=0:i.z=o,de.steer=Math.min(1,n/de.speed+.1),n>.12&&(de.faceTo=Math.atan2(vi.x,vi.z))}const Qa=Je("actBtn");let pc=null;const Ll={cushion:()=>Nn>.5?"Close the cushion":Le("portal")?"Lift the cushion":"Look at the couch",book:()=>Le("shelf")?null:"Look at the odd book",door:()=>Lr.doorway.visible?"Look at the round door":null,blanket:()=>Le("george")?null:"Lift the blanket",george:()=>De.companion==="george"?"Leave George home":"Bring George along",window:()=>Le("owl")?null:"Look outside",cabinet:()=>Le("jar")?null:"Open the cupboard",fridge:()=>"Open the fridge",owlHome:()=>Le("owl")?De.companion==="owl"?"Leave the owl home":"Bring the owl along":null,records:()=>Pn("records")?Ds?"Stop the music":"Play a record":null,closet:()=>$n>.5?vr>.5?null:"Close the closet":"Open the closet",cord:()=>$n>.5&&vr<.5?"Pull the string":null,ladder:()=>vr>.5&&Yn.ladder.visible?"Climb the ladder":null,hatch:()=>"Climb down",trunk:()=>Le("map")?"Read the map":"Open the trunk",mirror:()=>Le("mirror")?"Look at the mirror":"Pull off the sheet"};function JS(){let s=null,e=1.25;if(!kt&&de&&!de.moving)for(const t of Rt){if((t.lvl||0)!==xn||!Ll[t.id]||!Ll[t.id]())continue;const i=Math.hypot(t.stand.x-de.root.position.x,t.stand.z-de.root.position.z);i<e&&(e=i,s=t)}if(s!==pc&&(pc=s,Qa.classList.toggle("hidden",!s)),s){const t=Ll[s.id]();Qa.textContent!==t&&(Qa.textContent=t)}}Qa.addEventListener("click",s=>{if(s.stopPropagation(),pc&&!kt){const e=pc;de.faceTo=e.face,e.act()}});function QS(s){let e=s;for(;e;){if(!e.visible)return!1;e=e.parent}return!0}function ew(s,e){if(kt)return;if(s==="other"&&(s=Qt==="keira"?"girl:mila":"girl:keira"),(s==="owlHome"||s==="window"&&Le("owl")&&e===cn.group)&&(s="owl"),s==="portal"){mc(Rt.find(o=>o.id==="portal"));return}if(s==="girl:"+Qt)return;if(s.startsWith("girl:")){To(s);return}const t=Rt.find(o=>o.id===s);if(!Qp(s)){t&&mc(t);return}let n,i;if(t&&t.stand.lengthSq()>0)n=t.stand,i=t.face;else{const o=new mi().setFromObject(e).getCenter(new A),a=de.root.position.clone().sub(o);a.y=0,a.lengthSq()<1e-4&&a.set(0,0,1),n=kp(o.clone().add(a.normalize().multiplyScalar(s.startsWith("pick:")?.42:.95))),i=Math.atan2(o.x-n.x,o.z-n.z)}if(Math.hypot(n.x-de.root.position.x,n.z-de.root.position.z)<.35){de.faceTo=i,To(s);return}Wo(n,()=>{de.faceTo=i,To(s)},i)}function mc(s){if(!kt){if(s.id==="other"){Or();return}if(s.id==="owlHome"){Wo(s.stand,()=>s.act(),Math.PI);return}s.id==="records"&&!Pn("records")||Wo(s.stand,()=>{de.faceTo=s.face,setTimeout(()=>s.act(),160)},s.face)}}function Or(){if(kt||!At)return;pi?.release(8);const s=de.root.position.clone(),e=At.root.position.clone();[de,At]=[At,de],Qt=Qt==="keira"?"mila":"keira",De.hero=Qt,Dt(),de.root.position.copy(e),At.root.position.copy(s),At.goTo([]),At.faceTo=.2,de.once("wave"),Qe.who.textContent=Qt==="keira"?"Keira":"Mila",Qe.who.dataset.hero=Qt,Ft(0)}const Xn=new A(-1,.9,0);function lm(){const s=innerWidth,e=innerHeight;Jn.setSize(s,e,!1),Xt.aspect=s/e,Xt.updateProjectionMatrix()}addEventListener("resize",lm);lm();const Ef=new A,Cu=new A(0,1,0);let Hh=12;function hm(){const s=(xn?fn:0)+.9;Xn.set(Cn.clamp(Xn.x,xn?-4.4:-4.6,xn?.8:4.6),s,Cn.clamp(Xn.z,-2.6,2.8))}function Vh(){Ef.set(.5,.78,1).normalize().multiplyScalar(Hh*xs).applyAxisAngle(Cu,Fc),Xt.position.copy(Xn).add(Ef),Xt.lookAt(Xn),Xt.updateMatrixWorld()}function tw(s){const e=Xt.aspect<1;let t=e?9.4+(1-Xt.aspect)*3:10;if(!oi){if(Mo)Xn.lerp(Mo.at,Math.min(1,s*2.5)),t=Mo.dist*(e?1+(1-Xt.aspect)*.6:1)/xs;else if(!qo){const n=Cn.clamp((xs-.3)/.7,0,1),i=new A(de.root.position.x,0,Cn.lerp(de.root.position.z,Cn.clamp(de.root.position.z*.6,-1,1.6),n));n>.5&&(i.x=xn?Cn.clamp(i.x,-3.6,0):Cn.clamp(i.x,-4.3,3.8)),Xn.x+=(i.x-Xn.x)*Math.min(1,s*3),Xn.z+=(i.z-Xn.z)*Math.min(1,s*3)}hm(),Hh+=(t-Hh)*Math.min(1,s*2.2)}Vh(),po>0&&(po-=s,Xt.position.x+=Math.sin(po*70)*.03*po)}const um=new U1;let si=0;function dm(){window.__paused?um.getDelta():fm(),requestAnimationFrame(dm)}function fm(s){const e=s??Math.min(.05,um.getDelta());if(si+=e,ZS(e),JS(),de.update(e),At.update(e),St?.update(e),pi?.update(e),Na+=($n-Na)*Math.min(1,e*4),Yn.door.rotation.y=1.6*Na,Yn.light.intensity=Na*4,wo+=(vr-wo)*Math.min(1,e*2.5),Yn.ladder.position.y=2.6*(1-wo),ja=Math.max(0,ja-e*3),Yn.cord.position.y=3-Math.sin(ja*Math.PI)*.15,bo+=(Oh-bo)*Math.min(1,e*4),at.lid.rotation.x=-1.7*bo,ri>0&&ri<1&&(ri=Math.min(1,ri+e*.9),at.sheet.position.y=1-ri*ri*1.2,at.sheet.position.z=ri*.5,at.sheet.scale.y=1-ri*.6,at.sheet.rotation.x=ri*.9,ri>=1&&(at.sheet.visible=!1)),at.glass.update(e,si,0),at.group.visible){const n=at.motes.geometry.attributes.position;for(let i=0;i<n.count;i++)n.setY(i,(n.getY(i)+e*.03*(1+i%3))%2.4),n.setX(i,n.getX(i)+Math.sin(si*.3+i)*8e-4);n.needsUpdate=!0}if(fr+=(Nn-fr)*Math.min(1,e*5),di.cushionPivot.rotation.x=-1.35*nw(fr),di.cushionPivot.position.y=.43+.12*Math.sin(fr*Math.PI*.5)+(Nn?Math.sin(si*6)*.006:0),es.update(e,si,cc),As+=(Wp-As)*Math.min(1,e*1.5),Ec.intensity=Ro.hemi*(1-As*.6),_i.intensity=Ro.key*(1-As*.65),pn.lamp.intensity=Ro.lamp*(1-As*.7)*(As>.05?.85+Math.random()*.15*As:1),qa+=(Cc-qa)*Math.min(1,e*1.6),Lr.slider.position.x=1.65*qa,Da+=(Dc-Da)*Math.min(1,e*5),Go.door.rotation.y=1.9*Da,Go.light.intensity=Da*3,Ya+=(So-Ya)*Math.min(1,e*5),pn.cabinetDoor.rotation.y=1.7*Ya,yi>0&&yi<1&&(yi=Math.min(1,yi+e*1.3),bi.position.y=.05+Math.sin(yi*Math.PI)*.9,bi.position.x=-3.7-yi*.9,bi.rotation.z=yi*1.4,bi.scale.setScalar(1-yi*.5),yi>=1&&(bi.visible=!1)),Cl.style.opacity="0",!Le("george")||St&&St.clip==="nap"){const n=new A(-3.6,.7,.75).project(Xt);Cl.style.transform=`translate(${(n.x*.5+.5)*innerWidth}px, ${(-n.y*.5+.5)*innerHeight}px)`,Cl.style.opacity=n.z<1?"1":"0"}if(cn.wings.forEach((n,i)=>{n.rotation.z=(i?-1:1)*(Mi>=0&&Mi<1?Math.sin(si*30)*.9:.05*Math.sin(si*2))}),cn.head.rotation.y=Math.sin(si*.7)*.6,Mi>=0&&Mi<1){Mi=Math.min(1,Mi+e*.45);const n=hc.clone();Jo.visible=!0;const i=qp.clone().lerp(n,iw(Mi));i.y+=Math.sin(Mi*Math.PI)*.8,cn.group.position.copy(i),cn.group.lookAt(n.x,i.y,n.z),Mi>=1&&(cn.group.position.copy(hc),cn.group.rotation.set(0,.2,0),cn.group.scale.setScalar(1.1),Ft(1))}Eo=Math.max(0,Eo-e);for(const n of Xr.fish){const i=n.userData,r=si*i.s+i.p;n.position.set(Math.cos(r)*i.r*1.6,(Eo>0?.42:i.y)+Math.sin(r*2)*.03,Math.sin(r)*.1),n.rotation.y=Math.atan2(Math.cos(r)*.1,-Math.sin(r)*i.r*1.6)+Math.PI}if(Ds&&(ea.disc.rotation.y-=e*3.5),Ka=Math.max(0,Ka-e),Xo.visible=Ka>0,Xo.scale.y=.9+Math.random()*.2,$a>0?($a-=e,at.chair.rotation.x=Math.sin(si*3)*.12*Math.min(1,$a)):at.chair.rotation.x=0,Vi.lengthSq()>4e-4){const n=Jp();n?(n.position.addScaledVector(Vi,e),(n.position.x<Ve.x0+.15||n.position.x>Ve.x1-.15)&&(Vi.x*=-.6,xr(),n.position.x=Cn.clamp(n.position.x,Ve.x0+.15,Ve.x1-.15)),(n.position.z<Ve.z0+.15||n.position.z>Ve.z1-.15)&&(Vi.z*=-.6,xr(),n.position.z=Cn.clamp(n.position.z,Ve.z0+.15,Ve.z1-.15)),n.rotation.x+=Vi.z*e/.11,n.rotation.z-=Vi.x*e/.11,Vi.multiplyScalar(Math.pow(.35,e))):Vi.set(0,0,0)}for(const n of zh)n.t=Math.min(1,n.t+e*2.2),n.o.scale.setScalar(sw(n.t));for(const n of Bp)n.h.points.visible=n.show(),n.h.points.visible&&n.h.update(si);if(!At.moving&&!pi?.active){const n=de.root.position.clone().sub(At.root.position);At.faceTo=Math.atan2(n.x,n.z)}if(uo.intensity+=((De.torch?xn?2.2:1.1:0)-uo.intensity)*Math.min(1,e*8),uo.intensity>.01){const n=de.root;uo.position.set(n.position.x+Math.sin(n.rotation.y)*.5,n.position.y+.9,n.position.z+Math.cos(n.rotation.y)*.5)}window.__freeze||tw(e);const t=window.__side;if(t){const n=(window.__sideOther?At:de).root.position;Xt.position.set(n.x+t[0],.75+n.y,n.z+t[1]),Xt.lookAt(n.x,.65+n.y,n.z)}Af?Af.render(dt,Xt):Jn.render(dt,Xt)}const nw=s=>1-(1-s)**3,iw=s=>s<.5?2*s*s:1-(-2*s+2)**2/2,sw=s=>1+(1.7+1)*(s-1)**3+1.7*(s-1)**2;Dh[gf]&&Dh[gf].apply({scene:dt,H:pn,hemi:Ec,key:_i,moon:Su,renderer:Jn,fridgeDoor:Go.door});const Af=window.__outline?new mS(Jn,{defaultThickness:.0035,defaultColor:[.12,.08,.1]}):null,Ro={hemi:Ec.intensity,key:_i.intensity,lamp:pn.lamp.intensity},rw=Ro.lamp;(async()=>{const[s,e]=await Promise.all([Bo.load(Nh("keira")),Bo.load(Nh("mila"))]);if(Ls.keira=s,Ls.mila=e,e.bones.Mila_shades||ZM(e),e.speed=1,e.cartwheels=!0,s.addBook(5974635),e.addBook(3107678),pi=new tS({me:()=>de,other:()=>At,who:()=>Qt==="keira"?"mila":"keira",george:()=>St,free:()=>!kt&&xn===0&&At.root.position.y<1.5,bark:Np}),de=Ls[Qt],At=Ls[Qt==="keira"?"mila":"keira"],de.root.position.copy(bS),At.root.position.copy(TS),de.root.rotation.y=.3,At.root.rotation.y=-.3,dt.add(s.root,e.root),Qe.who.textContent=Qt==="keira"?"Keira":"Mila",Qe.who.dataset.hero=Qt,Le("george")&&await Xp(),Dr){fr=Nn=1,es.open=!0,de.root.position.set(fi.x,0,-1.55),de.root.rotation.y=.2,At.root.position.set(fi.x+.9,0,-1.3),At.root.rotation.y=-.3,de.once("land"),At.once("land"),setTimeout(()=>{Hp(),Ft(0)},1600);const t=Math.max(0,Up);setTimeout(()=>{t>0?(Wr(Sn-t),Tc(),Ye(`Back home with <b>${t} pennies</b>!`+(Le("owl")?"":" <i>Hmm... something followed you. Check the window.</i>"),5200)):Le("owl")||Ye("Back home. <i>Something followed you... check the window.</i>",5e3)},500)}Vo.has("open")&&(fr=Nn=1,es.open=!0),Je("loading").classList.add("hidden"),!Dr&&De.visits<=1&&(Qe.intro.classList.remove("hidden"),Je("introGo").onclick=()=>{Qe.intro.classList.add("hidden"),Ft(0),Ye("<b>Drag anywhere</b> to walk. Walk up to things, or tap them, to check them out. Sparkles mean something is hiding.",5200)});for(const t of Rt)for(const n of t.objs)n.userData.spot||(n.userData.spot=t.id);s.root.userData.item="girl:keira",e.root.userData.item="girl:mila",cn.group.userData.spot="owlHome",Xr.group.userData.item="aquarium",Uc.userData.item="plant",Oc.userData.item="lights",WS(),dm()})();window.__h={walkLine:(s,e,t,n)=>{de.root.position.set(s,0,e),de.speed=n,de.goTo([new A(t,0,e)])},view:(s,e)=>{xs=s,Fc=e},climbUp:wu,climbDown:$p,get level(){return xn},get busy(){return kt},showAll:()=>{for(const s of Tu)s.obj&&(s.obj.visible=!0)},spot:s=>mc(Rt.find(e=>e.id===s)),swap:Or,shop:Eu,get me(){return de},card:s=>To(s),tick:(s,e)=>{for(let t=0;t<s;t++)fm(e)},screenOf:s=>{let e=null;if(dt.traverse(n=>{!e&&(n.userData.item===s||n.userData.spot===s)&&(e=n)}),!e)return null;const t=new mi().setFromObject(e).getCenter(new A).project(Xt);return[(t.x+1)/2*innerWidth,(1-t.y)/2*innerHeight]},get other(){return At},get buddy(){return pi},picks:yr,tapDebug:(s,e)=>(Ur.set(s/innerWidth*2-1,-(e/innerHeight)*2+1),Ns.setFromCamera(Ur,Xt),Ns.intersectObjects(dt.children,!0).slice(0,6).map(t=>{let n=t.object,i="";for(;n;)i+=(n.name||n.type)+(n.userData.item?"["+n.userData.item+"]":"")+(n.userData.spot?"{"+n.userData.spot+"}":"")+">",n=n.parent;const r=t.object.material;return t.distance.toFixed(2)+" "+i.slice(0,80)+" geo="+t.object.geometry?.type+" mat="+r?.type+" vis="+r?.visible+" op="+r?.opacity+" col="+r?.color?.getHexString()+" at="+t.point.toArray().map(o=>o.toFixed(2))})),openBag:tm,get house(){return De},setStick:(s,e=0)=>{Wt=s===null?null:{jx:s,jy:e}},camera:Xt};window.__walk=s=>{de.path=s?[new A(99,0,0)]:[],de.speed=s?1e-4:1.7};

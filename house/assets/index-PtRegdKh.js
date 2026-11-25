(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const eh="170",dp=0,Kh=1,fp=2,Dd=1,Nd=2,Ci=3,Oi=0,fn=1,Qt=2,is=0,Js=1,Jr=2,Zh=3,$h=4,pp=5,xs=100,mp=101,gp=102,_p=103,xp=104,vp=200,yp=201,Mp=202,Sp=203,Yc=204,jc=205,wp=206,bp=207,Tp=208,Ep=209,Ap=210,Rp=211,Cp=212,Pp=213,Ip=214,Kc=0,Zc=1,$c=2,ir=3,Jc=4,Qc=5,el=6,tl=7,Ud=0,Lp=1,Dp=2,ss=0,Np=1,Up=2,Fp=3,Fd=4,Op=5,Bp=6,zp=7,Jh="attached",kp="detached",Od=300,sr=301,rr=302,nl=303,il=304,Na=306,Ms=1e3,pi=1001,va=1002,pn=1003,Bd=1004,Br=1005,An=1006,sa=1007,Li=1008,Bi=1009,zd=1010,kd=1011,Qr=1012,th=1013,Ss=1014,Zn=1015,mo=1016,nh=1017,ih=1018,or=1020,Hd=35902,Vd=1021,Gd=1022,Un=1023,Wd=1024,Xd=1025,Qs=1026,ar=1027,sh=1028,rh=1029,qd=1030,oh=1031,ah=1033,ra=33776,oa=33777,aa=33778,ca=33779,sl=35840,rl=35841,ol=35842,al=35843,cl=36196,ll=37492,hl=37496,ul=37808,dl=37809,fl=37810,pl=37811,ml=37812,gl=37813,_l=37814,xl=37815,vl=37816,yl=37817,Ml=37818,Sl=37819,wl=37820,bl=37821,la=36492,Tl=36494,El=36495,Yd=36283,Al=36284,Rl=36285,Cl=36286,jd=2200,Hp=2201,Vp=2202,eo=2300,to=2301,ec=2302,qs=2400,Ys=2401,ya=2402,ch=2500,Gp=2501,Wp=0,Kd=1,Pl=2,Xp=3200,qp=3201,lh=0,Yp=1,ts="",Nt="srgb",vn="srgb-linear",Ua="linear",vt="srgb",Cs=7680,Qh=519,jp=512,Kp=513,Zp=514,Zd=515,$p=516,Jp=517,Qp=518,em=519,Il=35044,eu="300 es",Di=2e3,Ma=2001;class Es{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let tu=1234567;const Vr=Math.PI/180,cr=180/Math.PI;function On(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ln[s&255]+ln[s>>8&255]+ln[s>>16&255]+ln[s>>24&255]+"-"+ln[e&255]+ln[e>>8&255]+"-"+ln[e>>16&15|64]+ln[e>>24&255]+"-"+ln[t&63|128]+ln[t>>8&255]+"-"+ln[t>>16&255]+ln[t>>24&255]+ln[n&255]+ln[n>>8&255]+ln[n>>16&255]+ln[n>>24&255]).toLowerCase()}function Jt(s,e,t){return Math.max(e,Math.min(t,s))}function hh(s,e){return(s%e+e)%e}function tm(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function nm(s,e,t){return s!==e?(t-s)/(e-s):0}function Gr(s,e,t){return(1-t)*s+t*e}function im(s,e,t,n){return Gr(s,e,1-Math.exp(-t*n))}function sm(s,e=1){return e-Math.abs(hh(s,e*2)-e)}function rm(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function om(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function am(s,e){return s+Math.floor(Math.random()*(e-s+1))}function cm(s,e){return s+Math.random()*(e-s)}function lm(s){return s*(.5-Math.random())}function hm(s){s!==void 0&&(tu=s);let e=tu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function um(s){return s*Vr}function dm(s){return s*cr}function fm(s){return(s&s-1)===0&&s!==0}function pm(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function mm(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function gm(s,e,t,n,i){const r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),d=o((e-n)/2),p=r((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":s.set(a*h,c*u,c*d,a*l);break;case"YZY":s.set(c*d,a*h,c*u,a*l);break;case"ZXZ":s.set(c*u,c*d,a*h,a*l);break;case"XZX":s.set(a*h,c*g,c*p,a*l);break;case"YXY":s.set(c*p,a*h,c*g,a*l);break;case"ZYZ":s.set(c*g,c*p,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Yn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function _t(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const En={DEG2RAD:Vr,RAD2DEG:cr,generateUUID:On,clamp:Jt,euclideanModulo:hh,mapLinear:tm,inverseLerp:nm,lerp:Gr,damp:im,pingpong:sm,smoothstep:rm,smootherstep:om,randInt:am,randFloat:cm,randFloatSpread:lm,seededRandom:hm,degToRad:um,radToDeg:dm,isPowerOfTwo:fm,ceilPowerOfTwo:pm,floorPowerOfTwo:mm,setQuaternionFromProperEuler:gm,normalize:_t,denormalize:Yn};class re{constructor(e=0,t=0){re.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Jt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ze{constructor(e,t,n,i,r,o,a,c,l){Ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l)}set(e,t,n,i,r,o,a,c,l){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],p=n[5],g=n[8],_=i[0],m=i[3],f=i[6],b=i[1],S=i[4],x=i[7],L=i[2],C=i[5],P=i[8];return r[0]=o*_+a*b+c*L,r[3]=o*m+a*S+c*C,r[6]=o*f+a*x+c*P,r[1]=l*_+h*b+u*L,r[4]=l*m+h*S+u*C,r[7]=l*f+h*x+u*P,r[2]=d*_+p*b+g*L,r[5]=d*m+p*S+g*C,r[8]=d*f+p*x+g*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+i*r*l-i*o*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,d=a*c-h*r,p=l*r-o*c,g=t*u+n*d+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=u*_,e[1]=(i*l-h*n)*_,e[2]=(a*n-i*o)*_,e[3]=d*_,e[4]=(h*t-i*c)*_,e[5]=(i*r-a*t)*_,e[6]=p*_,e[7]=(n*c-l*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(tc.makeScale(e,t)),this}rotate(e){return this.premultiply(tc.makeRotation(-e)),this}translate(e,t){return this.premultiply(tc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const tc=new Ze;function $d(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function no(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function _m(){const s=no("canvas");return s.style.display="block",s}const nu={};function zr(s){s in nu||(nu[s]=!0,console.warn(s))}function xm(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function vm(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function ym(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const rt={enabled:!0,workingColorSpace:vn,spaces:{},convert:function(s,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===vt&&(s.r=Ni(s.r),s.g=Ni(s.g),s.b=Ni(s.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(s.applyMatrix3(this.spaces[e].toXYZ),s.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===vt&&(s.r=er(s.r),s.g=er(s.g),s.b=er(s.b))),s},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ts?Ua:this.spaces[s].transfer},getLuminanceCoefficients:function(s,e=this.workingColorSpace){return s.fromArray(this.spaces[e].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,e,t){return s.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function Ni(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function er(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const iu=[.64,.33,.3,.6,.15,.06],su=[.2126,.7152,.0722],ru=[.3127,.329],ou=new Ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),au=new Ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);rt.define({[vn]:{primaries:iu,whitePoint:ru,transfer:Ua,toXYZ:ou,fromXYZ:au,luminanceCoefficients:su,workingColorSpaceConfig:{unpackColorSpace:Nt},outputColorSpaceConfig:{drawingBufferColorSpace:Nt}},[Nt]:{primaries:iu,whitePoint:ru,transfer:vt,toXYZ:ou,fromXYZ:au,luminanceCoefficients:su,outputColorSpaceConfig:{drawingBufferColorSpace:Nt}}});let Ps;class Mm{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ps===void 0&&(Ps=no("canvas")),Ps.width=e.width,Ps.height=e.height;const n=Ps.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ps}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=no("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Ni(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ni(t[n]/255)*255):t[n]=Ni(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Sm=0;class Jd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Sm++}),this.uuid=On(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(nc(i[o].image)):r.push(nc(i[o]))}else r=nc(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function nc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Mm.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let wm=0;class Yt extends Es{constructor(e=Yt.DEFAULT_IMAGE,t=Yt.DEFAULT_MAPPING,n=pi,i=pi,r=An,o=Li,a=Un,c=Bi,l=Yt.DEFAULT_ANISOTROPY,h=ts){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wm++}),this.uuid=On(),this.name="",this.source=new Jd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new re(0,0),this.repeat=new re(1,1),this.center=new re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Od)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ms:e.x=e.x-Math.floor(e.x);break;case pi:e.x=e.x<0?0:1;break;case va:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ms:e.y=e.y-Math.floor(e.y);break;case pi:e.y=e.y<0?0:1;break;case va:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Yt.DEFAULT_IMAGE=null;Yt.DEFAULT_MAPPING=Od;Yt.DEFAULT_ANISOTROPY=1;class ht{constructor(e=0,t=0,n=0,i=1){ht.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],p=c[5],g=c[9],_=c[2],m=c[6],f=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(l+1)/2,x=(p+1)/2,L=(f+1)/2,C=(h+d)/4,P=(u+_)/4,E=(g+m)/4;return S>x&&S>L?S<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(S),i=C/n,r=P/n):x>L?x<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(x),n=C/i,r=E/i):L<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(L),n=P/r,i=E/r),this.set(n,i,r,t),this}let b=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(u-_)/b,this.z=(d-h)/b,this.w=Math.acos((l+p+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class bm extends Es{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ht(0,0,e,t),this.scissorTest=!1,this.viewport=new ht(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:An,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Yt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Jd(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ws extends bm{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Qd extends Yt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=pn,this.minFilter=pn,this.wrapR=pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Tm extends Yt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=pn,this.minFilter=pn,this.wrapR=pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $n{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3];const d=r[o+0],p=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(u!==_||c!==d||l!==p||h!==g){let m=1-a;const f=c*d+l*p+h*g+u*_,b=f>=0?1:-1,S=1-f*f;if(S>Number.EPSILON){const L=Math.sqrt(S),C=Math.atan2(L,f*b);m=Math.sin(m*C)/L,a=Math.sin(a*C)/L}const x=a*b;if(c=c*m+d*x,l=l*m+p*x,h=h*m+g*x,u=u*m+_*x,m===1-a){const L=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=L,l*=L,h*=L,u*=L}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=r[o],d=r[o+1],p=r[o+2],g=r[o+3];return e[t]=a*g+h*u+c*p-l*d,e[t+1]=c*g+h*d+l*u-a*p,e[t+2]=l*g+h*p+a*d-c*u,e[t+3]=h*g-a*u-c*d-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),u=a(r/2),d=c(n/2),p=c(i/2),g=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u+d*p*g;break;case"YZX":this._x=d*h*u+l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u-d*p*g;break;case"XZY":this._x=d*h*u-l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(o-i)*p}else if(n>a&&n>u){const p=2*Math.sqrt(1+n-a-u);this._w=(h-c)/p,this._x=.25*p,this._y=(i+o)/p,this._z=(r+l)/p}else if(a>u){const p=2*Math.sqrt(1+a-n-u);this._w=(r-l)/p,this._x=(i+o)/p,this._y=.25*p,this._z=(c+h)/p}else{const p=2*Math.sqrt(1+u-n-a);this._w=(o-i)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Jt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+i*l-r*c,this._y=i*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class A{constructor(e=0,t=0,n=0){A.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(cu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(cu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*i-a*n),h=2*(a*t-r*i),u=2*(r*n-o*t);return this.x=t+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=i+c*u+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ic.copy(this).projectOnVector(e),this.sub(ic)}reflect(e){return this.sub(ic.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Jt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ic=new A,cu=new $n;class Hi{constructor(e=new A(1/0,1/0,1/0),t=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Vn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Vn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Vn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Vn):Vn.fromBufferAttribute(r,o),Vn.applyMatrix4(e.matrixWorld),this.expandByPoint(Vn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Eo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Eo.copy(n.boundingBox)),Eo.applyMatrix4(e.matrixWorld),this.union(Eo)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Vn),Vn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Tr),Ao.subVectors(this.max,Tr),Is.subVectors(e.a,Tr),Ls.subVectors(e.b,Tr),Ds.subVectors(e.c,Tr),Xi.subVectors(Ls,Is),qi.subVectors(Ds,Ls),ls.subVectors(Is,Ds);let t=[0,-Xi.z,Xi.y,0,-qi.z,qi.y,0,-ls.z,ls.y,Xi.z,0,-Xi.x,qi.z,0,-qi.x,ls.z,0,-ls.x,-Xi.y,Xi.x,0,-qi.y,qi.x,0,-ls.y,ls.x,0];return!sc(t,Is,Ls,Ds,Ao)||(t=[1,0,0,0,1,0,0,0,1],!sc(t,Is,Ls,Ds,Ao))?!1:(Ro.crossVectors(Xi,qi),t=[Ro.x,Ro.y,Ro.z],sc(t,Is,Ls,Ds,Ao))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Vn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Vn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const wi=[new A,new A,new A,new A,new A,new A,new A,new A],Vn=new A,Eo=new Hi,Is=new A,Ls=new A,Ds=new A,Xi=new A,qi=new A,ls=new A,Tr=new A,Ao=new A,Ro=new A,hs=new A;function sc(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){hs.fromArray(s,r);const a=i.x*Math.abs(hs.x)+i.y*Math.abs(hs.y)+i.z*Math.abs(hs.z),c=e.dot(hs),l=t.dot(hs),h=n.dot(hs);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const Em=new Hi,Er=new A,rc=new A;class xi{constructor(e=new A,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Em.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Er.subVectors(e,this.center);const t=Er.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Er,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(rc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Er.copy(e.center).add(rc)),this.expandByPoint(Er.copy(e.center).sub(rc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const bi=new A,oc=new A,Co=new A,Yi=new A,ac=new A,Po=new A,cc=new A;class go{constructor(e=new A,t=new A(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,bi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=bi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(bi.copy(this.origin).addScaledVector(this.direction,t),bi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){oc.copy(e).add(t).multiplyScalar(.5),Co.copy(t).sub(e).normalize(),Yi.copy(this.origin).sub(oc);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Co),a=Yi.dot(this.direction),c=-Yi.dot(Co),l=Yi.lengthSq(),h=Math.abs(1-o*o);let u,d,p,g;if(h>0)if(u=o*c-a,d=o*a-c,g=r*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,p=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),p=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),p=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),p=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(oc).addScaledVector(Co,d),p}intersectSphere(e,t){bi.subVectors(e.center,this.origin);const n=bi.dot(this.direction),i=bi.dot(bi)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,bi)!==null}intersectTriangle(e,t,n,i,r){ac.subVectors(t,e),Po.subVectors(n,e),cc.crossVectors(ac,Po);let o=this.direction.dot(cc),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Yi.subVectors(this.origin,e);const c=a*this.direction.dot(Po.crossVectors(Yi,Po));if(c<0)return null;const l=a*this.direction.dot(ac.cross(Yi));if(l<0||c+l>o)return null;const h=-a*Yi.dot(cc);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ye{constructor(e,t,n,i,r,o,a,c,l,h,u,d,p,g,_,m){Ye.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l,h,u,d,p,g,_,m)}set(e,t,n,i,r,o,a,c,l,h,u,d,p,g,_,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=i,f[1]=r,f[5]=o,f[9]=a,f[13]=c,f[2]=l,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ye().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Ns.setFromMatrixColumn(e,0).length(),r=1/Ns.setFromMatrixColumn(e,1).length(),o=1/Ns.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=o*h,p=o*u,g=a*h,_=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=p+g*l,t[5]=d-_*l,t[9]=-a*c,t[2]=_-d*l,t[6]=g+p*l,t[10]=o*c}else if(e.order==="YXZ"){const d=c*h,p=c*u,g=l*h,_=l*u;t[0]=d+_*a,t[4]=g*a-p,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=p*a-g,t[6]=_+d*a,t[10]=o*c}else if(e.order==="ZXY"){const d=c*h,p=c*u,g=l*h,_=l*u;t[0]=d-_*a,t[4]=-o*u,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*h,t[9]=_-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const d=o*h,p=o*u,g=a*h,_=a*u;t[0]=c*h,t[4]=g*l-p,t[8]=d*l+_,t[1]=c*u,t[5]=_*l+d,t[9]=p*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const d=o*c,p=o*l,g=a*c,_=a*l;t[0]=c*h,t[4]=_-d*u,t[8]=g*u+p,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=p*u+g,t[10]=d-_*u}else if(e.order==="XZY"){const d=o*c,p=o*l,g=a*c,_=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+_,t[5]=o*h,t[9]=p*u-g,t[2]=g*u-p,t[6]=a*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Am,e,Rm)}lookAt(e,t,n){const i=this.elements;return bn.subVectors(e,t),bn.lengthSq()===0&&(bn.z=1),bn.normalize(),ji.crossVectors(n,bn),ji.lengthSq()===0&&(Math.abs(n.z)===1?bn.x+=1e-4:bn.z+=1e-4,bn.normalize(),ji.crossVectors(n,bn)),ji.normalize(),Io.crossVectors(bn,ji),i[0]=ji.x,i[4]=Io.x,i[8]=bn.x,i[1]=ji.y,i[5]=Io.y,i[9]=bn.y,i[2]=ji.z,i[6]=Io.z,i[10]=bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],p=n[13],g=n[2],_=n[6],m=n[10],f=n[14],b=n[3],S=n[7],x=n[11],L=n[15],C=i[0],P=i[4],E=i[8],y=i[12],M=i[1],I=i[5],B=i[9],O=i[13],G=i[2],j=i[6],H=i[10],Q=i[14],V=i[3],le=i[7],fe=i[11],me=i[15];return r[0]=o*C+a*M+c*G+l*V,r[4]=o*P+a*I+c*j+l*le,r[8]=o*E+a*B+c*H+l*fe,r[12]=o*y+a*O+c*Q+l*me,r[1]=h*C+u*M+d*G+p*V,r[5]=h*P+u*I+d*j+p*le,r[9]=h*E+u*B+d*H+p*fe,r[13]=h*y+u*O+d*Q+p*me,r[2]=g*C+_*M+m*G+f*V,r[6]=g*P+_*I+m*j+f*le,r[10]=g*E+_*B+m*H+f*fe,r[14]=g*y+_*O+m*Q+f*me,r[3]=b*C+S*M+x*G+L*V,r[7]=b*P+S*I+x*j+L*le,r[11]=b*E+S*B+x*H+L*fe,r[15]=b*y+S*O+x*Q+L*me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],p=e[14],g=e[3],_=e[7],m=e[11],f=e[15];return g*(+r*c*u-i*l*u-r*a*d+n*l*d+i*a*p-n*c*p)+_*(+t*c*p-t*l*d+r*o*d-i*o*p+i*l*h-r*c*h)+m*(+t*l*u-t*a*p-r*o*u+n*o*p+r*a*h-n*l*h)+f*(-i*a*h-t*c*u+t*a*d+i*o*u-n*o*d+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],p=e[11],g=e[12],_=e[13],m=e[14],f=e[15],b=u*m*l-_*d*l+_*c*p-a*m*p-u*c*f+a*d*f,S=g*d*l-h*m*l-g*c*p+o*m*p+h*c*f-o*d*f,x=h*_*l-g*u*l+g*a*p-o*_*p-h*a*f+o*u*f,L=g*u*c-h*_*c-g*a*d+o*_*d+h*a*m-o*u*m,C=t*b+n*S+i*x+r*L;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/C;return e[0]=b*P,e[1]=(_*d*r-u*m*r-_*i*p+n*m*p+u*i*f-n*d*f)*P,e[2]=(a*m*r-_*c*r+_*i*l-n*m*l-a*i*f+n*c*f)*P,e[3]=(u*c*r-a*d*r-u*i*l+n*d*l+a*i*p-n*c*p)*P,e[4]=S*P,e[5]=(h*m*r-g*d*r+g*i*p-t*m*p-h*i*f+t*d*f)*P,e[6]=(g*c*r-o*m*r-g*i*l+t*m*l+o*i*f-t*c*f)*P,e[7]=(o*d*r-h*c*r+h*i*l-t*d*l-o*i*p+t*c*p)*P,e[8]=x*P,e[9]=(g*u*r-h*_*r-g*n*p+t*_*p+h*n*f-t*u*f)*P,e[10]=(o*_*r-g*a*r+g*n*l-t*_*l-o*n*f+t*a*f)*P,e[11]=(h*a*r-o*u*r-h*n*l+t*u*l+o*n*p-t*a*p)*P,e[12]=L*P,e[13]=(h*_*i-g*u*i+g*n*d-t*_*d-h*n*m+t*u*m)*P,e[14]=(g*a*i-o*_*i-g*n*c+t*_*c+o*n*m-t*a*m)*P,e[15]=(o*u*i-h*a*i+h*n*c-t*u*c-o*n*d+t*a*d)*P,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,d=r*l,p=r*h,g=r*u,_=o*h,m=o*u,f=a*u,b=c*l,S=c*h,x=c*u,L=n.x,C=n.y,P=n.z;return i[0]=(1-(_+f))*L,i[1]=(p+x)*L,i[2]=(g-S)*L,i[3]=0,i[4]=(p-x)*C,i[5]=(1-(d+f))*C,i[6]=(m+b)*C,i[7]=0,i[8]=(g+S)*P,i[9]=(m-b)*P,i[10]=(1-(d+_))*P,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Ns.set(i[0],i[1],i[2]).length();const o=Ns.set(i[4],i[5],i[6]).length(),a=Ns.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Gn.copy(this);const l=1/r,h=1/o,u=1/a;return Gn.elements[0]*=l,Gn.elements[1]*=l,Gn.elements[2]*=l,Gn.elements[4]*=h,Gn.elements[5]*=h,Gn.elements[6]*=h,Gn.elements[8]*=u,Gn.elements[9]*=u,Gn.elements[10]*=u,t.setFromRotationMatrix(Gn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=Di){const c=this.elements,l=2*r/(t-e),h=2*r/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i);let p,g;if(a===Di)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Ma)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=Di){const c=this.elements,l=1/(t-e),h=1/(n-i),u=1/(o-r),d=(t+e)*l,p=(n+i)*h;let g,_;if(a===Di)g=(o+r)*u,_=-2*u;else if(a===Ma)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ns=new A,Gn=new Ye,Am=new A(0,0,0),Rm=new A(1,1,1),ji=new A,Io=new A,bn=new A,lu=new Ye,hu=new $n;class gi{constructor(e=0,t=0,n=0,i=gi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],u=i[2],d=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(Jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Jt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Jt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Jt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Jt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return lu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(lu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return hu.setFromEuler(this),this.setFromQuaternion(hu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}gi.DEFAULT_ORDER="XYZ";class uh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Cm=0;const uu=new A,Us=new $n,Ti=new Ye,Lo=new A,Ar=new A,Pm=new A,Im=new $n,du=new A(1,0,0),fu=new A(0,1,0),pu=new A(0,0,1),mu={type:"added"},Lm={type:"removed"},Fs={type:"childadded",child:null},lc={type:"childremoved",child:null};class Lt extends Es{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Cm++}),this.uuid=On(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Lt.DEFAULT_UP.clone();const e=new A,t=new gi,n=new $n,i=new A(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ye},normalMatrix:{value:new Ze}}),this.matrix=new Ye,this.matrixWorld=new Ye,this.matrixAutoUpdate=Lt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new uh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Us.setFromAxisAngle(e,t),this.quaternion.multiply(Us),this}rotateOnWorldAxis(e,t){return Us.setFromAxisAngle(e,t),this.quaternion.premultiply(Us),this}rotateX(e){return this.rotateOnAxis(du,e)}rotateY(e){return this.rotateOnAxis(fu,e)}rotateZ(e){return this.rotateOnAxis(pu,e)}translateOnAxis(e,t){return uu.copy(e).applyQuaternion(this.quaternion),this.position.add(uu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(du,e)}translateY(e){return this.translateOnAxis(fu,e)}translateZ(e){return this.translateOnAxis(pu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ti.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Lo.copy(e):Lo.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ar.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ti.lookAt(Ar,Lo,this.up):Ti.lookAt(Lo,Ar,this.up),this.quaternion.setFromRotationMatrix(Ti),i&&(Ti.extractRotation(i.matrixWorld),Us.setFromRotationMatrix(Ti),this.quaternion.premultiply(Us.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(mu),Fs.child=e,this.dispatchEvent(Fs),Fs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Lm),lc.child=e,this.dispatchEvent(lc),lc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ti.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ti.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ti),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(mu),Fs.child=e,this.dispatchEvent(Fs),Fs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ar,e,Pm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ar,Im,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Lt.DEFAULT_UP=new A(0,1,0);Lt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Wn=new A,Ei=new A,hc=new A,Ai=new A,Os=new A,Bs=new A,gu=new A,uc=new A,dc=new A,fc=new A,pc=new ht,mc=new ht,gc=new ht;class jn{constructor(e=new A,t=new A,n=new A){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Wn.subVectors(e,t),i.cross(Wn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Wn.subVectors(i,t),Ei.subVectors(n,t),hc.subVectors(e,t);const o=Wn.dot(Wn),a=Wn.dot(Ei),c=Wn.dot(hc),l=Ei.dot(Ei),h=Ei.dot(hc),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,p=(l*c-a*h)*d,g=(o*h-a*c)*d;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Ai)===null?!1:Ai.x>=0&&Ai.y>=0&&Ai.x+Ai.y<=1}static getInterpolation(e,t,n,i,r,o,a,c){return this.getBarycoord(e,t,n,i,Ai)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Ai.x),c.addScaledVector(o,Ai.y),c.addScaledVector(a,Ai.z),c)}static getInterpolatedAttribute(e,t,n,i,r,o){return pc.setScalar(0),mc.setScalar(0),gc.setScalar(0),pc.fromBufferAttribute(e,t),mc.fromBufferAttribute(e,n),gc.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(pc,r.x),o.addScaledVector(mc,r.y),o.addScaledVector(gc,r.z),o}static isFrontFacing(e,t,n,i){return Wn.subVectors(n,t),Ei.subVectors(e,t),Wn.cross(Ei).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Wn.subVectors(this.c,this.b),Ei.subVectors(this.a,this.b),Wn.cross(Ei).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return jn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return jn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return jn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return jn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return jn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;Os.subVectors(i,n),Bs.subVectors(r,n),uc.subVectors(e,n);const c=Os.dot(uc),l=Bs.dot(uc);if(c<=0&&l<=0)return t.copy(n);dc.subVectors(e,i);const h=Os.dot(dc),u=Bs.dot(dc);if(h>=0&&u<=h)return t.copy(i);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(Os,o);fc.subVectors(e,r);const p=Os.dot(fc),g=Bs.dot(fc);if(g>=0&&p<=g)return t.copy(r);const _=p*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(Bs,a);const m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return gu.subVectors(r,i),a=(u-h)/(u-h+(p-g)),t.copy(i).addScaledVector(gu,a);const f=1/(m+_+d);return o=_*f,a=d*f,t.copy(n).addScaledVector(Os,o).addScaledVector(Bs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const ef={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ki={h:0,s:0,l:0},Do={h:0,s:0,l:0};function _c(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Fe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Nt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=rt.workingColorSpace){return this.r=e,this.g=t,this.b=n,rt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=rt.workingColorSpace){if(e=hh(e,1),t=Jt(t,0,1),n=Jt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=_c(o,r,e+1/3),this.g=_c(o,r,e),this.b=_c(o,r,e-1/3)}return rt.toWorkingColorSpace(this,i),this}setStyle(e,t=Nt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Nt){const n=ef[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ni(e.r),this.g=Ni(e.g),this.b=Ni(e.b),this}copyLinearToSRGB(e){return this.r=er(e.r),this.g=er(e.g),this.b=er(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Nt){return rt.fromWorkingColorSpace(hn.copy(this),e),Math.round(Jt(hn.r*255,0,255))*65536+Math.round(Jt(hn.g*255,0,255))*256+Math.round(Jt(hn.b*255,0,255))}getHexString(e=Nt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=rt.workingColorSpace){rt.fromWorkingColorSpace(hn.copy(this),t);const n=hn.r,i=hn.g,r=hn.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(i-r)/u+(i<r?6:0);break;case i:c=(r-n)/u+2;break;case r:c=(n-i)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=rt.workingColorSpace){return rt.fromWorkingColorSpace(hn.copy(this),t),e.r=hn.r,e.g=hn.g,e.b=hn.b,e}getStyle(e=Nt){rt.fromWorkingColorSpace(hn.copy(this),e);const t=hn.r,n=hn.g,i=hn.b;return e!==Nt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Ki),this.setHSL(Ki.h+e,Ki.s+t,Ki.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ki),e.getHSL(Do);const n=Gr(Ki.h,Do.h,t),i=Gr(Ki.s,Do.s,t),r=Gr(Ki.l,Do.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const hn=new Fe;Fe.NAMES=ef;let Dm=0;class Jn extends Es{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Dm++}),this.uuid=On(),this.name="",this.blending=Js,this.side=Oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Yc,this.blendDst=jc,this.blendEquation=xs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Fe(0,0,0),this.blendAlpha=0,this.depthFunc=ir,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Cs,this.stencilZFail=Cs,this.stencilZPass=Cs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Js&&(n.blending=this.blending),this.side!==Oi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Yc&&(n.blendSrc=this.blendSrc),this.blendDst!==jc&&(n.blendDst=this.blendDst),this.blendEquation!==xs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ir&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Qh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Cs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Cs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Cs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class tn extends Jn{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gi,this.combine=Ud,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const zt=new A,No=new re;class nn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Il,this.updateRanges=[],this.gpuType=Zn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)No.fromBufferAttribute(this,t),No.applyMatrix3(e),this.setXY(t,No.x,No.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix3(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix4(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyNormalMatrix(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.transformDirection(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Yn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=_t(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Yn(t,this.array)),t}setX(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Yn(t,this.array)),t}setY(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Yn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Yn(t,this.array)),t}setW(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array),i=_t(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array),i=_t(i,this.array),r=_t(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Il&&(e.usage=this.usage),e}}class tf extends nn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class nf extends nn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Tt extends nn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Nm=0;const Pn=new Ye,xc=new Lt,zs=new A,Tn=new Hi,Rr=new Hi,$t=new A;class Wt extends Es{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Nm++}),this.uuid=On(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new($d(e)?nf:tf)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ze().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Pn.makeRotationFromQuaternion(e),this.applyMatrix4(Pn),this}rotateX(e){return Pn.makeRotationX(e),this.applyMatrix4(Pn),this}rotateY(e){return Pn.makeRotationY(e),this.applyMatrix4(Pn),this}rotateZ(e){return Pn.makeRotationZ(e),this.applyMatrix4(Pn),this}translate(e,t,n){return Pn.makeTranslation(e,t,n),this.applyMatrix4(Pn),this}scale(e,t,n){return Pn.makeScale(e,t,n),this.applyMatrix4(Pn),this}lookAt(e){return xc.lookAt(e),xc.updateMatrix(),this.applyMatrix4(xc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zs).negate(),this.translate(zs.x,zs.y,zs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Tt(n,3))}else{for(let n=0,i=t.count;n<i;n++){const r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Hi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Tn.setFromBufferAttribute(r),this.morphTargetsRelative?($t.addVectors(this.boundingBox.min,Tn.min),this.boundingBox.expandByPoint($t),$t.addVectors(this.boundingBox.max,Tn.max),this.boundingBox.expandByPoint($t)):(this.boundingBox.expandByPoint(Tn.min),this.boundingBox.expandByPoint(Tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new A,1/0);return}if(e){const n=this.boundingSphere.center;if(Tn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Rr.setFromBufferAttribute(a),this.morphTargetsRelative?($t.addVectors(Tn.min,Rr.min),Tn.expandByPoint($t),$t.addVectors(Tn.max,Rr.max),Tn.expandByPoint($t)):(Tn.expandByPoint(Rr.min),Tn.expandByPoint(Rr.max))}Tn.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)$t.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared($t));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)$t.fromBufferAttribute(a,l),c&&(zs.fromBufferAttribute(e,l),$t.add(zs)),i=Math.max(i,n.distanceToSquared($t))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new nn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let E=0;E<n.count;E++)a[E]=new A,c[E]=new A;const l=new A,h=new A,u=new A,d=new re,p=new re,g=new re,_=new A,m=new A;function f(E,y,M){l.fromBufferAttribute(n,E),h.fromBufferAttribute(n,y),u.fromBufferAttribute(n,M),d.fromBufferAttribute(r,E),p.fromBufferAttribute(r,y),g.fromBufferAttribute(r,M),h.sub(l),u.sub(l),p.sub(d),g.sub(d);const I=1/(p.x*g.y-g.x*p.y);isFinite(I)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(I),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(I),a[E].add(_),a[y].add(_),a[M].add(_),c[E].add(m),c[y].add(m),c[M].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let E=0,y=b.length;E<y;++E){const M=b[E],I=M.start,B=M.count;for(let O=I,G=I+B;O<G;O+=3)f(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const S=new A,x=new A,L=new A,C=new A;function P(E){L.fromBufferAttribute(i,E),C.copy(L);const y=a[E];S.copy(y),S.sub(L.multiplyScalar(L.dot(y))).normalize(),x.crossVectors(C,y);const I=x.dot(c[E])<0?-1:1;o.setXYZW(E,S.x,S.y,S.z,I)}for(let E=0,y=b.length;E<y;++E){const M=b[E],I=M.start,B=M.count;for(let O=I,G=I+B;O<G;O+=3)P(e.getX(O+0)),P(e.getX(O+1)),P(e.getX(O+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new nn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const i=new A,r=new A,o=new A,a=new A,c=new A,l=new A,h=new A,u=new A;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,p=t.count;d<p;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)$t.fromBufferAttribute(e,t),$t.normalize(),e.setXYZ(t,$t.x,$t.y,$t.z)}toNonIndexed(){function e(a,c){const l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h);let p=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?p=c[_]*a.data.stride+a.offset:p=c[_]*h;for(let f=0;f<h;f++)d[g++]=l[p++]}return new nn(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Wt,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=e(c,n);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){const d=l[h],p=e(d,n);c.push(p)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const p=l[u];h.push(p.toJSON(e.data))}h.length>0&&(i[c]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(t))}const r=e.morphAttributes;for(const l in r){const h=[],u=r[l];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const _u=new Ye,us=new go,Uo=new xi,xu=new A,Fo=new A,Oo=new A,Bo=new A,vc=new A,zo=new A,vu=new A,ko=new A;class J extends Lt{constructor(e=new Wt,t=new tn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){zo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],u=r[c];h!==0&&(vc.fromBufferAttribute(u,e),o?zo.addScaledVector(vc,h):zo.addScaledVector(vc.sub(t),h))}t.add(zo)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Uo.copy(n.boundingSphere),Uo.applyMatrix4(r),us.copy(e.ray).recast(e.near),!(Uo.containsPoint(us.origin)===!1&&(us.intersectSphere(Uo,xu)===null||us.origin.distanceToSquared(xu)>(e.far-e.near)**2))&&(_u.copy(r).invert(),us.copy(e.ray).applyMatrix4(_u),!(n.boundingBox!==null&&us.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,us)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=o[m.materialIndex],b=Math.max(m.start,p.start),S=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let x=b,L=S;x<L;x+=3){const C=a.getX(x),P=a.getX(x+1),E=a.getX(x+2);i=Ho(this,f,e,n,l,h,u,C,P,E),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const b=a.getX(m),S=a.getX(m+1),x=a.getX(m+2);i=Ho(this,o,e,n,l,h,u,b,S,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=o[m.materialIndex],b=Math.max(m.start,p.start),S=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let x=b,L=S;x<L;x+=3){const C=x,P=x+1,E=x+2;i=Ho(this,f,e,n,l,h,u,C,P,E),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,p.start),_=Math.min(c.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const b=m,S=m+1,x=m+2;i=Ho(this,o,e,n,l,h,u,b,S,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function Um(s,e,t,n,i,r,o,a){let c;if(e.side===fn?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,e.side===Oi,a),c===null)return null;ko.copy(a),ko.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(ko);return l<t.near||l>t.far?null:{distance:l,point:ko.clone(),object:s}}function Ho(s,e,t,n,i,r,o,a,c,l){s.getVertexPosition(a,Fo),s.getVertexPosition(c,Oo),s.getVertexPosition(l,Bo);const h=Um(s,e,t,n,Fo,Oo,Bo,vu);if(h){const u=new A;jn.getBarycoord(vu,Fo,Oo,Bo,u),i&&(h.uv=jn.getInterpolatedAttribute(i,a,c,l,u,new re)),r&&(h.uv1=jn.getInterpolatedAttribute(r,a,c,l,u,new re)),o&&(h.normal=jn.getInterpolatedAttribute(o,a,c,l,u,new A),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new A,materialIndex:0};jn.getNormal(Fo,Oo,Bo,d.normal),h.face=d,h.barycoord=u}return h}class ni extends Wt{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let d=0,p=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new Tt(l,3)),this.setAttribute("normal",new Tt(h,3)),this.setAttribute("uv",new Tt(u,2));function g(_,m,f,b,S,x,L,C,P,E,y){const M=x/P,I=L/E,B=x/2,O=L/2,G=C/2,j=P+1,H=E+1;let Q=0,V=0;const le=new A;for(let fe=0;fe<H;fe++){const me=fe*I-O;for(let Ce=0;Ce<j;Ce++){const st=Ce*M-B;le[_]=st*b,le[m]=me*S,le[f]=G,l.push(le.x,le.y,le.z),le[_]=0,le[m]=0,le[f]=C>0?1:-1,h.push(le.x,le.y,le.z),u.push(Ce/P),u.push(1-fe/E),Q+=1}}for(let fe=0;fe<E;fe++)for(let me=0;me<P;me++){const Ce=d+me+j*fe,st=d+me+j*(fe+1),Y=d+(me+1)+j*(fe+1),ie=d+(me+1)+j*fe;c.push(Ce,st,ie),c.push(st,Y,ie),V+=6}a.addGroup(p,V,y),p+=V,d+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ni(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function lr(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function _n(s){const e={};for(let t=0;t<s.length;t++){const n=lr(s[t]);for(const i in n)e[i]=n[i]}return e}function Fm(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function sf(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:rt.workingColorSpace}const rf={clone:lr,merge:_n};var Om=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Bm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _i extends Jn{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Om,this.fragmentShader=Bm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=lr(e.uniforms),this.uniformsGroups=Fm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class of extends Lt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ye,this.projectionMatrix=new Ye,this.projectionMatrixInverse=new Ye,this.coordinateSystem=Di}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Zi=new A,yu=new re,Mu=new re;class xn extends of{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=cr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Vr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return cr*2*Math.atan(Math.tan(Vr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Zi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Zi.x,Zi.y).multiplyScalar(-e/Zi.z),Zi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Zi.x,Zi.y).multiplyScalar(-e/Zi.z)}getViewSize(e,t){return this.getViewBounds(e,yu,Mu),t.subVectors(Mu,yu)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Vr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ks=-90,Hs=1;class zm extends Lt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new xn(ks,Hs,e,t);i.layers=this.layers,this.add(i);const r=new xn(ks,Hs,e,t);r.layers=this.layers,this.add(r);const o=new xn(ks,Hs,e,t);o.layers=this.layers,this.add(o);const a=new xn(ks,Hs,e,t);a.layers=this.layers,this.add(a);const c=new xn(ks,Hs,e,t);c.layers=this.layers,this.add(c);const l=new xn(ks,Hs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===Di)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ma)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class af extends Yt{constructor(e,t,n,i,r,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:sr,super(e,t,n,i,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class km extends ws{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new af(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:An}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new ni(5,5,5),r=new _i({name:"CubemapFromEquirect",uniforms:lr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:fn,blending:is});r.uniforms.tEquirect.value=t;const o=new J(i,r),a=t.minFilter;return t.minFilter===Li&&(t.minFilter=An),new zm(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}const yc=new A,Hm=new A,Vm=new Ze;class hi{constructor(e=new A(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=yc.subVectors(n,t).cross(Hm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(yc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Vm.getNormalMatrix(e),i=this.coplanarPoint(yc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ds=new xi,Vo=new A;class dh{constructor(e=new hi,t=new hi,n=new hi,i=new hi,r=new hi,o=new hi){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Di){const n=this.planes,i=e.elements,r=i[0],o=i[1],a=i[2],c=i[3],l=i[4],h=i[5],u=i[6],d=i[7],p=i[8],g=i[9],_=i[10],m=i[11],f=i[12],b=i[13],S=i[14],x=i[15];if(n[0].setComponents(c-r,d-l,m-p,x-f).normalize(),n[1].setComponents(c+r,d+l,m+p,x+f).normalize(),n[2].setComponents(c+o,d+h,m+g,x+b).normalize(),n[3].setComponents(c-o,d-h,m-g,x-b).normalize(),n[4].setComponents(c-a,d-u,m-_,x-S).normalize(),t===Di)n[5].setComponents(c+a,d+u,m+_,x+S).normalize();else if(t===Ma)n[5].setComponents(a,u,_,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ds.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ds.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ds)}intersectsSprite(e){return ds.center.set(0,0,0),ds.radius=.7071067811865476,ds.applyMatrix4(e.matrixWorld),this.intersectsSphere(ds)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Vo.x=i.normal.x>0?e.max.x:e.min.x,Vo.y=i.normal.y>0?e.max.y:e.min.y,Vo.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Vo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function cf(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Gm(s){const e=new WeakMap;function t(a,c){const l=a.array,h=a.usage,u=l.byteLength,d=s.createBuffer();s.bindBuffer(c,d),s.bufferData(c,l,h),a.onUploadCallback();let p;if(l instanceof Float32Array)p=s.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=s.HALF_FLOAT:p=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=s.SHORT;else if(l instanceof Uint32Array)p=s.UNSIGNED_INT;else if(l instanceof Int32Array)p=s.INT;else if(l instanceof Int8Array)p=s.BYTE;else if(l instanceof Uint8Array)p=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const h=c.array,u=c.updateRanges;if(s.bindBuffer(l,a),u.length===0)s.bufferSubData(l,0,h);else{u.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<u.length;p++){const g=u[d],_=u[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let p=0,g=u.length;p<g;p++){const _=u[p];s.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(s.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:r,update:o}}class Vt extends Wt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,u=e/a,d=t/c,p=[],g=[],_=[],m=[];for(let f=0;f<h;f++){const b=f*d-o;for(let S=0;S<l;S++){const x=S*u-r;g.push(x,-b,0),_.push(0,0,1),m.push(S/a),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let b=0;b<a;b++){const S=b+l*f,x=b+l*(f+1),L=b+1+l*(f+1),C=b+1+l*f;p.push(S,x,C),p.push(x,L,C)}this.setIndex(p),this.setAttribute("position",new Tt(g,3)),this.setAttribute("normal",new Tt(_,3)),this.setAttribute("uv",new Tt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vt(e.width,e.height,e.widthSegments,e.heightSegments)}}var Wm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Xm=`#ifdef USE_ALPHAHASH
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
#endif`,qm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ym=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Km=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Zm=`#ifdef USE_AOMAP
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
#endif`,$m=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Jm=`#ifdef USE_BATCHING
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
#endif`,Qm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,e0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,t0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,n0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,i0=`#ifdef USE_IRIDESCENCE
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
#endif`,s0=`#ifdef USE_BUMPMAP
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
#endif`,r0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,o0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,a0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,c0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,l0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,h0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,u0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,d0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,f0=`#define PI 3.141592653589793
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
} // validated`,p0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,m0=`vec3 transformedNormal = objectNormal;
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
#endif`,g0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,x0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,v0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,y0="gl_FragColor = linearToOutputTexel( gl_FragColor );",M0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,S0=`#ifdef USE_ENVMAP
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
#endif`,w0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,b0=`#ifdef USE_ENVMAP
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
#endif`,T0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,E0=`#ifdef USE_ENVMAP
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
#endif`,A0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,R0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,C0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,P0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,I0=`#ifdef USE_GRADIENTMAP
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
}`,L0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,D0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,N0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,U0=`uniform bool receiveShadow;
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
#endif`,F0=`#ifdef USE_ENVMAP
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
#endif`,O0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,B0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,z0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,k0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,H0=`PhysicalMaterial material;
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
#endif`,V0=`struct PhysicalMaterial {
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
}`,G0=`
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
#endif`,W0=`#if defined( RE_IndirectDiffuse )
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
#endif`,X0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,q0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Y0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,j0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,K0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Z0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,J0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Q0=`#if defined( USE_POINTS_UV )
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
#endif`,eg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,tg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ng=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ig=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rg=`#ifdef USE_MORPHTARGETS
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
#endif`,og=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ag=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,cg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,lg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ug=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,dg=`#ifdef USE_NORMALMAP
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
#endif`,fg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,pg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,mg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_g=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,xg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,vg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,yg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Mg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Sg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,bg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Tg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Eg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ag=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Rg=`float getShadowMask() {
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
}`,Cg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Pg=`#ifdef USE_SKINNING
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
#endif`,Ig=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Lg=`#ifdef USE_SKINNING
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
#endif`,Dg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ng=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ug=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Fg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Og=`#ifdef USE_TRANSMISSION
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
#endif`,Bg=`#ifdef USE_TRANSMISSION
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
#endif`,zg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Gg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Wg=`uniform sampler2D t2D;
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
}`,Xg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Yg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kg=`#include <common>
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
}`,Zg=`#if DEPTH_PACKING == 3200
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
}`,$g=`#define DISTANCE
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
}`,Jg=`#define DISTANCE
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
}`,Qg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,e_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,t_=`uniform float scale;
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
}`,n_=`uniform vec3 diffuse;
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
}`,i_=`#include <common>
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
}`,s_=`uniform vec3 diffuse;
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
}`,r_=`#define LAMBERT
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
}`,o_=`#define LAMBERT
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
}`,a_=`#define MATCAP
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
}`,c_=`#define MATCAP
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
}`,l_=`#define NORMAL
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
}`,h_=`#define NORMAL
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
}`,u_=`#define PHONG
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
}`,d_=`#define PHONG
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
}`,f_=`#define STANDARD
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
}`,p_=`#define STANDARD
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
}`,m_=`#define TOON
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
}`,g_=`#define TOON
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
}`,__=`uniform float size;
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
}`,x_=`uniform vec3 diffuse;
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
}`,v_=`#include <common>
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
}`,y_=`uniform vec3 color;
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
}`,M_=`uniform float rotation;
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
}`,S_=`uniform vec3 diffuse;
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
}`,et={alphahash_fragment:Wm,alphahash_pars_fragment:Xm,alphamap_fragment:qm,alphamap_pars_fragment:Ym,alphatest_fragment:jm,alphatest_pars_fragment:Km,aomap_fragment:Zm,aomap_pars_fragment:$m,batching_pars_vertex:Jm,batching_vertex:Qm,begin_vertex:e0,beginnormal_vertex:t0,bsdfs:n0,iridescence_fragment:i0,bumpmap_pars_fragment:s0,clipping_planes_fragment:r0,clipping_planes_pars_fragment:o0,clipping_planes_pars_vertex:a0,clipping_planes_vertex:c0,color_fragment:l0,color_pars_fragment:h0,color_pars_vertex:u0,color_vertex:d0,common:f0,cube_uv_reflection_fragment:p0,defaultnormal_vertex:m0,displacementmap_pars_vertex:g0,displacementmap_vertex:_0,emissivemap_fragment:x0,emissivemap_pars_fragment:v0,colorspace_fragment:y0,colorspace_pars_fragment:M0,envmap_fragment:S0,envmap_common_pars_fragment:w0,envmap_pars_fragment:b0,envmap_pars_vertex:T0,envmap_physical_pars_fragment:F0,envmap_vertex:E0,fog_vertex:A0,fog_pars_vertex:R0,fog_fragment:C0,fog_pars_fragment:P0,gradientmap_pars_fragment:I0,lightmap_pars_fragment:L0,lights_lambert_fragment:D0,lights_lambert_pars_fragment:N0,lights_pars_begin:U0,lights_toon_fragment:O0,lights_toon_pars_fragment:B0,lights_phong_fragment:z0,lights_phong_pars_fragment:k0,lights_physical_fragment:H0,lights_physical_pars_fragment:V0,lights_fragment_begin:G0,lights_fragment_maps:W0,lights_fragment_end:X0,logdepthbuf_fragment:q0,logdepthbuf_pars_fragment:Y0,logdepthbuf_pars_vertex:j0,logdepthbuf_vertex:K0,map_fragment:Z0,map_pars_fragment:$0,map_particle_fragment:J0,map_particle_pars_fragment:Q0,metalnessmap_fragment:eg,metalnessmap_pars_fragment:tg,morphinstance_vertex:ng,morphcolor_vertex:ig,morphnormal_vertex:sg,morphtarget_pars_vertex:rg,morphtarget_vertex:og,normal_fragment_begin:ag,normal_fragment_maps:cg,normal_pars_fragment:lg,normal_pars_vertex:hg,normal_vertex:ug,normalmap_pars_fragment:dg,clearcoat_normal_fragment_begin:fg,clearcoat_normal_fragment_maps:pg,clearcoat_pars_fragment:mg,iridescence_pars_fragment:gg,opaque_fragment:_g,packing:xg,premultiplied_alpha_fragment:vg,project_vertex:yg,dithering_fragment:Mg,dithering_pars_fragment:Sg,roughnessmap_fragment:wg,roughnessmap_pars_fragment:bg,shadowmap_pars_fragment:Tg,shadowmap_pars_vertex:Eg,shadowmap_vertex:Ag,shadowmask_pars_fragment:Rg,skinbase_vertex:Cg,skinning_pars_vertex:Pg,skinning_vertex:Ig,skinnormal_vertex:Lg,specularmap_fragment:Dg,specularmap_pars_fragment:Ng,tonemapping_fragment:Ug,tonemapping_pars_fragment:Fg,transmission_fragment:Og,transmission_pars_fragment:Bg,uv_pars_fragment:zg,uv_pars_vertex:kg,uv_vertex:Hg,worldpos_vertex:Vg,background_vert:Gg,background_frag:Wg,backgroundCube_vert:Xg,backgroundCube_frag:qg,cube_vert:Yg,cube_frag:jg,depth_vert:Kg,depth_frag:Zg,distanceRGBA_vert:$g,distanceRGBA_frag:Jg,equirect_vert:Qg,equirect_frag:e_,linedashed_vert:t_,linedashed_frag:n_,meshbasic_vert:i_,meshbasic_frag:s_,meshlambert_vert:r_,meshlambert_frag:o_,meshmatcap_vert:a_,meshmatcap_frag:c_,meshnormal_vert:l_,meshnormal_frag:h_,meshphong_vert:u_,meshphong_frag:d_,meshphysical_vert:f_,meshphysical_frag:p_,meshtoon_vert:m_,meshtoon_frag:g_,points_vert:__,points_frag:x_,shadow_vert:v_,shadow_frag:y_,sprite_vert:M_,sprite_frag:S_},de={common:{diffuse:{value:new Fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},envMapRotation:{value:new Ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new Fe(16777215)},opacity:{value:1},center:{value:new re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},ui={basic:{uniforms:_n([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:et.meshbasic_vert,fragmentShader:et.meshbasic_frag},lambert:{uniforms:_n([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Fe(0)}}]),vertexShader:et.meshlambert_vert,fragmentShader:et.meshlambert_frag},phong:{uniforms:_n([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Fe(0)},specular:{value:new Fe(1118481)},shininess:{value:30}}]),vertexShader:et.meshphong_vert,fragmentShader:et.meshphong_frag},standard:{uniforms:_n([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new Fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag},toon:{uniforms:_n([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new Fe(0)}}]),vertexShader:et.meshtoon_vert,fragmentShader:et.meshtoon_frag},matcap:{uniforms:_n([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:et.meshmatcap_vert,fragmentShader:et.meshmatcap_frag},points:{uniforms:_n([de.points,de.fog]),vertexShader:et.points_vert,fragmentShader:et.points_frag},dashed:{uniforms:_n([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:et.linedashed_vert,fragmentShader:et.linedashed_frag},depth:{uniforms:_n([de.common,de.displacementmap]),vertexShader:et.depth_vert,fragmentShader:et.depth_frag},normal:{uniforms:_n([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:et.meshnormal_vert,fragmentShader:et.meshnormal_frag},sprite:{uniforms:_n([de.sprite,de.fog]),vertexShader:et.sprite_vert,fragmentShader:et.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:et.background_vert,fragmentShader:et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ze}},vertexShader:et.backgroundCube_vert,fragmentShader:et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:et.cube_vert,fragmentShader:et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:et.equirect_vert,fragmentShader:et.equirect_frag},distanceRGBA:{uniforms:_n([de.common,de.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:et.distanceRGBA_vert,fragmentShader:et.distanceRGBA_frag},shadow:{uniforms:_n([de.lights,de.fog,{color:{value:new Fe(0)},opacity:{value:1}}]),vertexShader:et.shadow_vert,fragmentShader:et.shadow_frag}};ui.physical={uniforms:_n([ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new Fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new Fe(0)},specularColor:{value:new Fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag};const Go={r:0,b:0,g:0},fs=new gi,w_=new Ye;function b_(s,e,t,n,i,r,o){const a=new Fe(0);let c=r===!0?0:1,l,h,u=null,d=0,p=null;function g(b){let S=b.isScene===!0?b.background:null;return S&&S.isTexture&&(S=(b.backgroundBlurriness>0?t:e).get(S)),S}function _(b){let S=!1;const x=g(b);x===null?f(a,c):x&&x.isColor&&(f(x,1),S=!0);const L=s.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(b,S){const x=g(S);x&&(x.isCubeTexture||x.mapping===Na)?(h===void 0&&(h=new J(new ni(1,1,1),new _i({name:"BackgroundCubeMaterial",uniforms:lr(ui.backgroundCube.uniforms),vertexShader:ui.backgroundCube.vertexShader,fragmentShader:ui.backgroundCube.fragmentShader,side:fn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,C,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),fs.copy(S.backgroundRotation),fs.x*=-1,fs.y*=-1,fs.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(fs.y*=-1,fs.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(w_.makeRotationFromEuler(fs)),h.material.toneMapped=rt.getTransfer(x.colorSpace)!==vt,(u!==x||d!==x.version||p!==s.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,p=s.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new J(new Vt(2,2),new _i({name:"BackgroundMaterial",uniforms:lr(ui.background.uniforms),vertexShader:ui.background.vertexShader,fragmentShader:ui.background.fragmentShader,side:Oi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=rt.getTransfer(x.colorSpace)!==vt,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||p!==s.toneMapping)&&(l.material.needsUpdate=!0,u=x,d=x.version,p=s.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function f(b,S){b.getRGB(Go,sf(s)),n.buffers.color.setClear(Go.r,Go.g,Go.b,S,o)}return{getClearColor:function(){return a},setClearColor:function(b,S=1){a.set(b),c=S,f(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(b){c=b,f(a,c)},render:_,addToRenderList:m}}function T_(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,o=!1;function a(M,I,B,O,G){let j=!1;const H=u(O,B,I);r!==H&&(r=H,l(r.object)),j=p(M,O,B,G),j&&g(M,O,B,G),G!==null&&e.update(G,s.ELEMENT_ARRAY_BUFFER),(j||o)&&(o=!1,x(M,I,B,O),G!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function c(){return s.createVertexArray()}function l(M){return s.bindVertexArray(M)}function h(M){return s.deleteVertexArray(M)}function u(M,I,B){const O=B.wireframe===!0;let G=n[M.id];G===void 0&&(G={},n[M.id]=G);let j=G[I.id];j===void 0&&(j={},G[I.id]=j);let H=j[O];return H===void 0&&(H=d(c()),j[O]=H),H}function d(M){const I=[],B=[],O=[];for(let G=0;G<t;G++)I[G]=0,B[G]=0,O[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:B,attributeDivisors:O,object:M,attributes:{},index:null}}function p(M,I,B,O){const G=r.attributes,j=I.attributes;let H=0;const Q=B.getAttributes();for(const V in Q)if(Q[V].location>=0){const fe=G[V];let me=j[V];if(me===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(me=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(me=M.instanceColor)),fe===void 0||fe.attribute!==me||me&&fe.data!==me.data)return!0;H++}return r.attributesNum!==H||r.index!==O}function g(M,I,B,O){const G={},j=I.attributes;let H=0;const Q=B.getAttributes();for(const V in Q)if(Q[V].location>=0){let fe=j[V];fe===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(fe=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(fe=M.instanceColor));const me={};me.attribute=fe,fe&&fe.data&&(me.data=fe.data),G[V]=me,H++}r.attributes=G,r.attributesNum=H,r.index=O}function _(){const M=r.newAttributes;for(let I=0,B=M.length;I<B;I++)M[I]=0}function m(M){f(M,0)}function f(M,I){const B=r.newAttributes,O=r.enabledAttributes,G=r.attributeDivisors;B[M]=1,O[M]===0&&(s.enableVertexAttribArray(M),O[M]=1),G[M]!==I&&(s.vertexAttribDivisor(M,I),G[M]=I)}function b(){const M=r.newAttributes,I=r.enabledAttributes;for(let B=0,O=I.length;B<O;B++)I[B]!==M[B]&&(s.disableVertexAttribArray(B),I[B]=0)}function S(M,I,B,O,G,j,H){H===!0?s.vertexAttribIPointer(M,I,B,G,j):s.vertexAttribPointer(M,I,B,O,G,j)}function x(M,I,B,O){_();const G=O.attributes,j=B.getAttributes(),H=I.defaultAttributeValues;for(const Q in j){const V=j[Q];if(V.location>=0){let le=G[Q];if(le===void 0&&(Q==="instanceMatrix"&&M.instanceMatrix&&(le=M.instanceMatrix),Q==="instanceColor"&&M.instanceColor&&(le=M.instanceColor)),le!==void 0){const fe=le.normalized,me=le.itemSize,Ce=e.get(le);if(Ce===void 0)continue;const st=Ce.buffer,Y=Ce.type,ie=Ce.bytesPerElement,Se=Y===s.INT||Y===s.UNSIGNED_INT||le.gpuType===th;if(le.isInterleavedBufferAttribute){const ae=le.data,Pe=ae.stride,Oe=le.offset;if(ae.isInstancedInterleavedBuffer){for(let Be=0;Be<V.locationSize;Be++)f(V.location+Be,ae.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Be=0;Be<V.locationSize;Be++)m(V.location+Be);s.bindBuffer(s.ARRAY_BUFFER,st);for(let Be=0;Be<V.locationSize;Be++)S(V.location+Be,me/V.locationSize,Y,fe,Pe*ie,(Oe+me/V.locationSize*Be)*ie,Se)}else{if(le.isInstancedBufferAttribute){for(let ae=0;ae<V.locationSize;ae++)f(V.location+ae,le.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let ae=0;ae<V.locationSize;ae++)m(V.location+ae);s.bindBuffer(s.ARRAY_BUFFER,st);for(let ae=0;ae<V.locationSize;ae++)S(V.location+ae,me/V.locationSize,Y,fe,me*ie,me/V.locationSize*ae*ie,Se)}}else if(H!==void 0){const fe=H[Q];if(fe!==void 0)switch(fe.length){case 2:s.vertexAttrib2fv(V.location,fe);break;case 3:s.vertexAttrib3fv(V.location,fe);break;case 4:s.vertexAttrib4fv(V.location,fe);break;default:s.vertexAttrib1fv(V.location,fe)}}}}b()}function L(){E();for(const M in n){const I=n[M];for(const B in I){const O=I[B];for(const G in O)h(O[G].object),delete O[G];delete I[B]}delete n[M]}}function C(M){if(n[M.id]===void 0)return;const I=n[M.id];for(const B in I){const O=I[B];for(const G in O)h(O[G].object),delete O[G];delete I[B]}delete n[M.id]}function P(M){for(const I in n){const B=n[I];if(B[M.id]===void 0)continue;const O=B[M.id];for(const G in O)h(O[G].object),delete O[G];delete B[M.id]}}function E(){y(),o=!0,r!==i&&(r=i,l(r.object))}function y(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:E,resetDefaultState:y,dispose:L,releaseStatesOfGeometry:C,releaseStatesOfProgram:P,initAttributes:_,enableAttribute:m,disableUnusedAttributes:b}}function E_(s,e,t){let n;function i(l){n=l}function r(l,h){s.drawArrays(n,l,h),t.update(h,n,1)}function o(l,h,u){u!==0&&(s.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function a(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];t.update(p,n,1)}function c(l,h,u,d){if(u===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)o(l[g],h[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];t.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function A_(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(P){return!(P!==Un&&n.convert(P)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const E=P===mo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==Bi&&n.convert(P)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Zn&&!E)}function c(P){if(P==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),f=s.getParameter(s.MAX_VERTEX_ATTRIBS),b=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),S=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,C=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:b,maxVaryings:S,maxFragmentUniforms:x,vertexTextures:L,maxSamples:C}}function R_(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new hi,a=new Ze,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||n!==0||i;return i=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,p){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,f=s.get(u);if(!i||g===null||g.length===0||r&&!m)r?h(null):l();else{const b=r?0:n,S=b*4;let x=f.clippingState||null;c.value=x,x=h(g,d,S,p);for(let L=0;L!==S;++L)x[L]=t[L];f.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,p,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const f=p+_*4,b=d.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<f)&&(m=new Float32Array(f));for(let S=0,x=p;S!==_;++S,x+=4)o.copy(u[S]).applyMatrix4(b,a),o.normal.toArray(m,x),m[x+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function C_(s){let e=new WeakMap;function t(o,a){return a===nl?o.mapping=sr:a===il&&(o.mapping=rr),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===nl||a===il)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new km(c.height);return l.fromEquirectangularTexture(s,o),e.set(o,l),o.addEventListener("dispose",i),t(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class fh extends of{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const js=4,Su=[.125,.215,.35,.446,.526,.582],vs=20,Mc=new fh,wu=new Fe;let Sc=null,wc=0,bc=0,Tc=!1;const _s=(1+Math.sqrt(5))/2,Vs=1/_s,bu=[new A(-_s,Vs,0),new A(_s,Vs,0),new A(-Vs,0,_s),new A(Vs,0,_s),new A(0,_s,-Vs),new A(0,_s,Vs),new A(-1,1,-1),new A(1,1,-1),new A(-1,1,1),new A(1,1,1)];class Ll{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Sc=this._renderer.getRenderTarget(),wc=this._renderer.getActiveCubeFace(),bc=this._renderer.getActiveMipmapLevel(),Tc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Au(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Eu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Sc,wc,bc),this._renderer.xr.enabled=Tc,e.scissorTest=!1,Wo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===sr||e.mapping===rr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Sc=this._renderer.getRenderTarget(),wc=this._renderer.getActiveCubeFace(),bc=this._renderer.getActiveMipmapLevel(),Tc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:An,minFilter:An,generateMipmaps:!1,type:mo,format:Un,colorSpace:vn,depthBuffer:!1},i=Tu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Tu(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=P_(r)),this._blurMaterial=I_(r,e,t)}return i}_compileMaterial(e){const t=new J(this._lodPlanes[0],e);this._renderer.compile(t,Mc)}_sceneToCubeUV(e,t,n,i){const a=new xn(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(wu),h.toneMapping=ss,h.autoClear=!1;const p=new tn({name:"PMREM.Background",side:fn,depthWrite:!1,depthTest:!1}),g=new J(new ni,p);let _=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,_=!0):(p.color.copy(wu),_=!0);for(let f=0;f<6;f++){const b=f%3;b===0?(a.up.set(0,c[f],0),a.lookAt(l[f],0,0)):b===1?(a.up.set(0,0,c[f]),a.lookAt(0,l[f],0)):(a.up.set(0,c[f],0),a.lookAt(0,0,l[f]));const S=this._cubeSize;Wo(i,b*S,f>2?S:0,S,S),h.setRenderTarget(i),_&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===sr||e.mapping===rr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Au()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Eu());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new J(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;Wo(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Mc)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=bu[(i-r-1)%bu.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new J(this._lodPlanes[i],l),d=l.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*vs-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):vs;m>vs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${vs}`);const f=[];let b=0;for(let P=0;P<vs;++P){const E=P/_,y=Math.exp(-E*E/2);f.push(y),P===0?b+=y:P<m&&(b+=2*y)}for(let P=0;P<f.length;P++)f[P]=f[P]/b;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:S}=this;d.dTheta.value=g,d.mipInt.value=S-n;const x=this._sizeLods[i],L=3*x*(i>S-js?i-S+js:0),C=4*(this._cubeSize-x);Wo(t,L,C,3*x,2*x),c.setRenderTarget(t),c.render(u,Mc)}}function P_(s){const e=[],t=[],n=[];let i=s;const r=s-js+1+Su.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let c=1/a;o>s-js?c=Su[o-s+js-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,_=3,m=2,f=1,b=new Float32Array(_*g*p),S=new Float32Array(m*g*p),x=new Float32Array(f*g*p);for(let C=0;C<p;C++){const P=C%3*2/3-1,E=C>2?0:-1,y=[P,E,0,P+2/3,E,0,P+2/3,E+1,0,P,E,0,P+2/3,E+1,0,P,E+1,0];b.set(y,_*g*C),S.set(d,m*g*C);const M=[C,C,C,C,C,C];x.set(M,f*g*C)}const L=new Wt;L.setAttribute("position",new nn(b,_)),L.setAttribute("uv",new nn(S,m)),L.setAttribute("faceIndex",new nn(x,f)),e.push(L),i>js&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Tu(s,e,t){const n=new ws(s,e,t);return n.texture.mapping=Na,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Wo(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function I_(s,e,t){const n=new Float32Array(vs),i=new A(0,1,0);return new _i({name:"SphericalGaussianBlur",defines:{n:vs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ph(),fragmentShader:`

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
		`,blending:is,depthTest:!1,depthWrite:!1})}function Eu(){return new _i({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ph(),fragmentShader:`

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
		`,blending:is,depthTest:!1,depthWrite:!1})}function Au(){return new _i({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ph(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:is,depthTest:!1,depthWrite:!1})}function ph(){return`

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
	`}function L_(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===nl||c===il,h=c===sr||c===rr;if(l||h){let u=e.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Ll(s)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const p=a.image;return l&&p&&p.height>0||h&&p&&i(p)?(t===null&&(t=new Ll(s)),u=l?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function i(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function D_(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&zr("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function N_(s,e,t,n){const i={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,f=_.length;m<f;m++)e.remove(_[m])}d.removeEventListener("dispose",o),delete i[d.id];const p=r.get(d);p&&(e.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function c(u){const d=u.attributes;for(const g in d)e.update(d[g],s.ARRAY_BUFFER);const p=u.morphAttributes;for(const g in p){const _=p[g];for(let m=0,f=_.length;m<f;m++)e.update(_[m],s.ARRAY_BUFFER)}}function l(u){const d=[],p=u.index,g=u.attributes.position;let _=0;if(p!==null){const b=p.array;_=p.version;for(let S=0,x=b.length;S<x;S+=3){const L=b[S+0],C=b[S+1],P=b[S+2];d.push(L,C,C,P,P,L)}}else if(g!==void 0){const b=g.array;_=g.version;for(let S=0,x=b.length/3-1;S<x;S+=3){const L=S+0,C=S+1,P=S+2;d.push(L,C,C,P,P,L)}}else return;const m=new($d(d)?nf:tf)(d,1);m.version=_;const f=r.get(u);f&&e.remove(f),r.set(u,m)}function h(u){const d=r.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function U_(s,e,t){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,p){s.drawElements(n,p,r,d*o),t.update(p,n,1)}function l(d,p,g){g!==0&&(s.drawElementsInstanced(n,p,r,d*o,g),t.update(p,n,g))}function h(d,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];t.update(m,n,1)}function u(d,p,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)l(d[f]/o,p[f],_[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,_,0,g);let f=0;for(let b=0;b<g;b++)f+=p[b]*_[b];t.update(f,n,1)}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function F_(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function O_(s,e,t){const n=new WeakMap,i=new ht;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let M=function(){E.dispose(),n.delete(a),a.removeEventListener("dispose",M)};var p=M;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],b=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let x=0;g===!0&&(x=1),_===!0&&(x=2),m===!0&&(x=3);let L=a.attributes.position.count*x,C=1;L>e.maxTextureSize&&(C=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const P=new Float32Array(L*C*4*u),E=new Qd(P,L,C,u);E.type=Zn,E.needsUpdate=!0;const y=x*4;for(let I=0;I<u;I++){const B=f[I],O=b[I],G=S[I],j=L*C*4*I;for(let H=0;H<B.count;H++){const Q=H*y;g===!0&&(i.fromBufferAttribute(B,H),P[j+Q+0]=i.x,P[j+Q+1]=i.y,P[j+Q+2]=i.z,P[j+Q+3]=0),_===!0&&(i.fromBufferAttribute(O,H),P[j+Q+4]=i.x,P[j+Q+5]=i.y,P[j+Q+6]=i.z,P[j+Q+7]=0),m===!0&&(i.fromBufferAttribute(G,H),P[j+Q+8]=i.x,P[j+Q+9]=i.y,P[j+Q+10]=i.z,P[j+Q+11]=G.itemSize===4?i.w:1)}}d={count:u,texture:E,size:new re(L,C)},n.set(a,d),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const _=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(s,"morphTargetBaseInfluence",_),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function B_(s,e,t,n){let i=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=e.get(c,h);if(i.get(u)!==l&&(e.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return u}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}class lf extends Yt{constructor(e,t,n,i,r,o,a,c,l,h=Qs){if(h!==Qs&&h!==ar)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Qs&&(n=Ss),n===void 0&&h===ar&&(n=or),super(null,i,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:pn,this.minFilter=c!==void 0?c:pn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const hf=new Yt,Ru=new lf(1,1),uf=new Qd,df=new Tm,ff=new af,Cu=[],Pu=[],Iu=new Float32Array(16),Lu=new Float32Array(9),Du=new Float32Array(4);function gr(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=Cu[i];if(r===void 0&&(r=new Float32Array(i),Cu[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function jt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Kt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Fa(s,e){let t=Pu[e];t===void 0&&(t=new Int32Array(e),Pu[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function z_(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function k_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;s.uniform2fv(this.addr,e),Kt(t,e)}}function H_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(jt(t,e))return;s.uniform3fv(this.addr,e),Kt(t,e)}}function V_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;s.uniform4fv(this.addr,e),Kt(t,e)}}function G_(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(jt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Kt(t,e)}else{if(jt(t,n))return;Du.set(n),s.uniformMatrix2fv(this.addr,!1,Du),Kt(t,n)}}function W_(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(jt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Kt(t,e)}else{if(jt(t,n))return;Lu.set(n),s.uniformMatrix3fv(this.addr,!1,Lu),Kt(t,n)}}function X_(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(jt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Kt(t,e)}else{if(jt(t,n))return;Iu.set(n),s.uniformMatrix4fv(this.addr,!1,Iu),Kt(t,n)}}function q_(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Y_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;s.uniform2iv(this.addr,e),Kt(t,e)}}function j_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jt(t,e))return;s.uniform3iv(this.addr,e),Kt(t,e)}}function K_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;s.uniform4iv(this.addr,e),Kt(t,e)}}function Z_(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function $_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;s.uniform2uiv(this.addr,e),Kt(t,e)}}function J_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jt(t,e))return;s.uniform3uiv(this.addr,e),Kt(t,e)}}function Q_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;s.uniform4uiv(this.addr,e),Kt(t,e)}}function ex(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Ru.compareFunction=Zd,r=Ru):r=hf,t.setTexture2D(e||r,i)}function tx(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||df,i)}function nx(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||ff,i)}function ix(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||uf,i)}function sx(s){switch(s){case 5126:return z_;case 35664:return k_;case 35665:return H_;case 35666:return V_;case 35674:return G_;case 35675:return W_;case 35676:return X_;case 5124:case 35670:return q_;case 35667:case 35671:return Y_;case 35668:case 35672:return j_;case 35669:case 35673:return K_;case 5125:return Z_;case 36294:return $_;case 36295:return J_;case 36296:return Q_;case 35678:case 36198:case 36298:case 36306:case 35682:return ex;case 35679:case 36299:case 36307:return tx;case 35680:case 36300:case 36308:case 36293:return nx;case 36289:case 36303:case 36311:case 36292:return ix}}function rx(s,e){s.uniform1fv(this.addr,e)}function ox(s,e){const t=gr(e,this.size,2);s.uniform2fv(this.addr,t)}function ax(s,e){const t=gr(e,this.size,3);s.uniform3fv(this.addr,t)}function cx(s,e){const t=gr(e,this.size,4);s.uniform4fv(this.addr,t)}function lx(s,e){const t=gr(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function hx(s,e){const t=gr(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function ux(s,e){const t=gr(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function dx(s,e){s.uniform1iv(this.addr,e)}function fx(s,e){s.uniform2iv(this.addr,e)}function px(s,e){s.uniform3iv(this.addr,e)}function mx(s,e){s.uniform4iv(this.addr,e)}function gx(s,e){s.uniform1uiv(this.addr,e)}function _x(s,e){s.uniform2uiv(this.addr,e)}function xx(s,e){s.uniform3uiv(this.addr,e)}function vx(s,e){s.uniform4uiv(this.addr,e)}function yx(s,e,t){const n=this.cache,i=e.length,r=Fa(t,i);jt(n,r)||(s.uniform1iv(this.addr,r),Kt(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||hf,r[o])}function Mx(s,e,t){const n=this.cache,i=e.length,r=Fa(t,i);jt(n,r)||(s.uniform1iv(this.addr,r),Kt(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||df,r[o])}function Sx(s,e,t){const n=this.cache,i=e.length,r=Fa(t,i);jt(n,r)||(s.uniform1iv(this.addr,r),Kt(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||ff,r[o])}function wx(s,e,t){const n=this.cache,i=e.length,r=Fa(t,i);jt(n,r)||(s.uniform1iv(this.addr,r),Kt(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||uf,r[o])}function bx(s){switch(s){case 5126:return rx;case 35664:return ox;case 35665:return ax;case 35666:return cx;case 35674:return lx;case 35675:return hx;case 35676:return ux;case 5124:case 35670:return dx;case 35667:case 35671:return fx;case 35668:case 35672:return px;case 35669:case 35673:return mx;case 5125:return gx;case 36294:return _x;case 36295:return xx;case 36296:return vx;case 35678:case 36198:case 36298:case 36306:case 35682:return yx;case 35679:case 36299:case 36307:return Mx;case 35680:case 36300:case 36308:case 36293:return Sx;case 36289:case 36303:case 36311:case 36292:return wx}}class Tx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=sx(t.type)}}class Ex{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=bx(t.type)}}class Ax{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const Ec=/(\w+)(\])?(\[|\.)?/g;function Nu(s,e){s.seq.push(e),s.map[e.id]=e}function Rx(s,e,t){const n=s.name,i=n.length;for(Ec.lastIndex=0;;){const r=Ec.exec(n),o=Ec.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){Nu(t,l===void 0?new Tx(a,s,e):new Ex(a,s,e));break}else{let u=t.map[a];u===void 0&&(u=new Ax(a),Nu(t,u)),t=u}}}class ha{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);Rx(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Uu(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const Cx=37297;let Px=0;function Ix(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const Fu=new Ze;function Lx(s){rt._getMatrix(Fu,rt.workingColorSpace,s);const e=`mat3( ${Fu.elements.map(t=>t.toFixed(4))} )`;switch(rt.getTransfer(s)){case Ua:return[e,"LinearTransferOETF"];case vt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Ou(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+Ix(s.getShaderSource(e),o)}else return i}function Dx(s,e){const t=Lx(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Nx(s,e){let t;switch(e){case Np:t="Linear";break;case Up:t="Reinhard";break;case Fp:t="Cineon";break;case Fd:t="ACESFilmic";break;case Bp:t="AgX";break;case zp:t="Neutral";break;case Op:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Xo=new A;function Ux(){rt.getLuminanceCoefficients(Xo);const s=Xo.x.toFixed(4),e=Xo.y.toFixed(4),t=Xo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Fx(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(kr).join(`
`)}function Ox(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Bx(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function kr(s){return s!==""}function Bu(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function zu(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const zx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Dl(s){return s.replace(zx,Hx)}const kx=new Map;function Hx(s,e){let t=et[e];if(t===void 0){const n=kx.get(e);if(n!==void 0)t=et[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Dl(t)}const Vx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ku(s){return s.replace(Vx,Gx)}function Gx(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Hu(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}function Wx(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Dd?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Nd?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Ci&&(e="SHADOWMAP_TYPE_VSM"),e}function Xx(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case sr:case rr:e="ENVMAP_TYPE_CUBE";break;case Na:e="ENVMAP_TYPE_CUBE_UV";break}return e}function qx(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case rr:e="ENVMAP_MODE_REFRACTION";break}return e}function Yx(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Ud:e="ENVMAP_BLENDING_MULTIPLY";break;case Lp:e="ENVMAP_BLENDING_MIX";break;case Dp:e="ENVMAP_BLENDING_ADD";break}return e}function jx(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Kx(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=Wx(t),l=Xx(t),h=qx(t),u=Yx(t),d=jx(t),p=Fx(t),g=Ox(r),_=i.createProgram();let m,f,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(kr).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(kr).join(`
`),f.length>0&&(f+=`
`)):(m=[Hu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(kr).join(`
`),f=[Hu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ss?"#define TONE_MAPPING":"",t.toneMapping!==ss?et.tonemapping_pars_fragment:"",t.toneMapping!==ss?Nx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",et.colorspace_pars_fragment,Dx("linearToOutputTexel",t.outputColorSpace),Ux(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(kr).join(`
`)),o=Dl(o),o=Bu(o,t),o=zu(o,t),a=Dl(a),a=Bu(a,t),a=zu(a,t),o=ku(o),a=ku(a),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===eu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===eu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const S=b+m+o,x=b+f+a,L=Uu(i,i.VERTEX_SHADER,S),C=Uu(i,i.FRAGMENT_SHADER,x);i.attachShader(_,L),i.attachShader(_,C),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function P(I){if(s.debug.checkShaderErrors){const B=i.getProgramInfoLog(_).trim(),O=i.getShaderInfoLog(L).trim(),G=i.getShaderInfoLog(C).trim();let j=!0,H=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(j=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,L,C);else{const Q=Ou(i,L,"vertex"),V=Ou(i,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+B+`
`+Q+`
`+V)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(O===""||G==="")&&(H=!1);H&&(I.diagnostics={runnable:j,programLog:B,vertexShader:{log:O,prefix:m},fragmentShader:{log:G,prefix:f}})}i.deleteShader(L),i.deleteShader(C),E=new ha(i,_),y=Bx(i,_)}let E;this.getUniforms=function(){return E===void 0&&P(this),E};let y;this.getAttributes=function(){return y===void 0&&P(this),y};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(_,Cx)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Px++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=L,this.fragmentShader=C,this}let Zx=0;class $x{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Jx(e),t.set(e,n)),n}}class Jx{constructor(e){this.id=Zx++,this.code=e,this.usedTimes=0}}function Qx(s,e,t,n,i,r,o){const a=new uh,c=new $x,l=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return l.add(y),y===0?"uv":`uv${y}`}function m(y,M,I,B,O){const G=B.fog,j=O.geometry,H=y.isMeshStandardMaterial?B.environment:null,Q=(y.isMeshStandardMaterial?t:e).get(y.envMap||H),V=Q&&Q.mapping===Na?Q.image.height:null,le=g[y.type];y.precision!==null&&(p=i.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));const fe=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,me=fe!==void 0?fe.length:0;let Ce=0;j.morphAttributes.position!==void 0&&(Ce=1),j.morphAttributes.normal!==void 0&&(Ce=2),j.morphAttributes.color!==void 0&&(Ce=3);let st,Y,ie,Se;if(le){const gt=ui[le];st=gt.vertexShader,Y=gt.fragmentShader}else st=y.vertexShader,Y=y.fragmentShader,c.update(y),ie=c.getVertexShaderID(y),Se=c.getFragmentShaderID(y);const ae=s.getRenderTarget(),Pe=s.state.buffers.depth.getReversed(),Oe=O.isInstancedMesh===!0,Be=O.isBatchedMesh===!0,Je=!!y.map,K=!!y.matcap,se=!!Q,R=!!y.aoMap,we=!!y.lightMap,te=!!y.bumpMap,ye=!!y.normalMap,Z=!!y.displacementMap,_e=!!y.emissiveMap,he=!!y.metalnessMap,w=!!y.roughnessMap,v=y.anisotropy>0,N=y.clearcoat>0,W=y.dispersion>0,$=y.iridescence>0,X=y.sheen>0,Ee=y.transmission>0,ue=v&&!!y.anisotropyMap,Te=N&&!!y.clearcoatMap,nt=N&&!!y.clearcoatNormalMap,oe=N&&!!y.clearcoatRoughnessMap,Ae=$&&!!y.iridescenceMap,He=$&&!!y.iridescenceThicknessMap,Ge=X&&!!y.sheenColorMap,Re=X&&!!y.sheenRoughnessMap,ot=!!y.specularMap,Qe=!!y.specularColorMap,Mt=!!y.specularIntensityMap,D=Ee&&!!y.transmissionMap,ge=Ee&&!!y.thicknessMap,q=!!y.gradientMap,ne=!!y.alphaMap,Me=y.alphaTest>0,xe=!!y.alphaHash,je=!!y.extensions;let Bt=ss;y.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(Bt=s.toneMapping);const cn={shaderID:le,shaderType:y.type,shaderName:y.name,vertexShader:st,fragmentShader:Y,defines:y.defines,customVertexShaderID:ie,customFragmentShaderID:Se,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,batching:Be,batchingColor:Be&&O._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&O.instanceColor!==null,instancingMorph:Oe&&O.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ae===null?s.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:vn,alphaToCoverage:!!y.alphaToCoverage,map:Je,matcap:K,envMap:se,envMapMode:se&&Q.mapping,envMapCubeUVHeight:V,aoMap:R,lightMap:we,bumpMap:te,normalMap:ye,displacementMap:d&&Z,emissiveMap:_e,normalMapObjectSpace:ye&&y.normalMapType===Yp,normalMapTangentSpace:ye&&y.normalMapType===lh,metalnessMap:he,roughnessMap:w,anisotropy:v,anisotropyMap:ue,clearcoat:N,clearcoatMap:Te,clearcoatNormalMap:nt,clearcoatRoughnessMap:oe,dispersion:W,iridescence:$,iridescenceMap:Ae,iridescenceThicknessMap:He,sheen:X,sheenColorMap:Ge,sheenRoughnessMap:Re,specularMap:ot,specularColorMap:Qe,specularIntensityMap:Mt,transmission:Ee,transmissionMap:D,thicknessMap:ge,gradientMap:q,opaque:y.transparent===!1&&y.blending===Js&&y.alphaToCoverage===!1,alphaMap:ne,alphaTest:Me,alphaHash:xe,combine:y.combine,mapUv:Je&&_(y.map.channel),aoMapUv:R&&_(y.aoMap.channel),lightMapUv:we&&_(y.lightMap.channel),bumpMapUv:te&&_(y.bumpMap.channel),normalMapUv:ye&&_(y.normalMap.channel),displacementMapUv:Z&&_(y.displacementMap.channel),emissiveMapUv:_e&&_(y.emissiveMap.channel),metalnessMapUv:he&&_(y.metalnessMap.channel),roughnessMapUv:w&&_(y.roughnessMap.channel),anisotropyMapUv:ue&&_(y.anisotropyMap.channel),clearcoatMapUv:Te&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:nt&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Ae&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:He&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:Ge&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:Re&&_(y.sheenRoughnessMap.channel),specularMapUv:ot&&_(y.specularMap.channel),specularColorMapUv:Qe&&_(y.specularColorMap.channel),specularIntensityMapUv:Mt&&_(y.specularIntensityMap.channel),transmissionMapUv:D&&_(y.transmissionMap.channel),thicknessMapUv:ge&&_(y.thicknessMap.channel),alphaMapUv:ne&&_(y.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(ye||v),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!j.attributes.uv&&(Je||ne),fog:!!G,useFog:y.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Pe,skinning:O.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:me,morphTextureStride:Ce,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:s.shadowMap.enabled&&I.length>0,shadowMapType:s.shadowMap.type,toneMapping:Bt,decodeVideoTexture:Je&&y.map.isVideoTexture===!0&&rt.getTransfer(y.map.colorSpace)===vt,decodeVideoTextureEmissive:_e&&y.emissiveMap.isVideoTexture===!0&&rt.getTransfer(y.emissiveMap.colorSpace)===vt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Qt,flipSided:y.side===fn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:je&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(je&&y.extensions.multiDraw===!0||Be)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return cn.vertexUv1s=l.has(1),cn.vertexUv2s=l.has(2),cn.vertexUv3s=l.has(3),l.clear(),cn}function f(y){const M=[];if(y.shaderID?M.push(y.shaderID):(M.push(y.customVertexShaderID),M.push(y.customFragmentShaderID)),y.defines!==void 0)for(const I in y.defines)M.push(I),M.push(y.defines[I]);return y.isRawShaderMaterial===!1&&(b(M,y),S(M,y),M.push(s.outputColorSpace)),M.push(y.customProgramCacheKey),M.join()}function b(y,M){y.push(M.precision),y.push(M.outputColorSpace),y.push(M.envMapMode),y.push(M.envMapCubeUVHeight),y.push(M.mapUv),y.push(M.alphaMapUv),y.push(M.lightMapUv),y.push(M.aoMapUv),y.push(M.bumpMapUv),y.push(M.normalMapUv),y.push(M.displacementMapUv),y.push(M.emissiveMapUv),y.push(M.metalnessMapUv),y.push(M.roughnessMapUv),y.push(M.anisotropyMapUv),y.push(M.clearcoatMapUv),y.push(M.clearcoatNormalMapUv),y.push(M.clearcoatRoughnessMapUv),y.push(M.iridescenceMapUv),y.push(M.iridescenceThicknessMapUv),y.push(M.sheenColorMapUv),y.push(M.sheenRoughnessMapUv),y.push(M.specularMapUv),y.push(M.specularColorMapUv),y.push(M.specularIntensityMapUv),y.push(M.transmissionMapUv),y.push(M.thicknessMapUv),y.push(M.combine),y.push(M.fogExp2),y.push(M.sizeAttenuation),y.push(M.morphTargetsCount),y.push(M.morphAttributeCount),y.push(M.numDirLights),y.push(M.numPointLights),y.push(M.numSpotLights),y.push(M.numSpotLightMaps),y.push(M.numHemiLights),y.push(M.numRectAreaLights),y.push(M.numDirLightShadows),y.push(M.numPointLightShadows),y.push(M.numSpotLightShadows),y.push(M.numSpotLightShadowsWithMaps),y.push(M.numLightProbes),y.push(M.shadowMapType),y.push(M.toneMapping),y.push(M.numClippingPlanes),y.push(M.numClipIntersection),y.push(M.depthPacking)}function S(y,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),y.push(a.mask)}function x(y){const M=g[y.type];let I;if(M){const B=ui[M];I=rf.clone(B.uniforms)}else I=y.uniforms;return I}function L(y,M){let I;for(let B=0,O=h.length;B<O;B++){const G=h[B];if(G.cacheKey===M){I=G,++I.usedTimes;break}}return I===void 0&&(I=new Kx(s,M,y,r),h.push(I)),I}function C(y){if(--y.usedTimes===0){const M=h.indexOf(y);h[M]=h[h.length-1],h.pop(),y.destroy()}}function P(y){c.remove(y)}function E(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:x,acquireProgram:L,releaseProgram:C,releaseShaderCache:P,programs:h,dispose:E}}function ev(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,c){s.get(o)[a]=c}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function tv(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Vu(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Gu(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(u,d,p,g,_,m){let f=s[e];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},s[e]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=_,f.group=m),e++,f}function a(u,d,p,g,_,m){const f=o(u,d,p,g,_,m);p.transmission>0?n.push(f):p.transparent===!0?i.push(f):t.push(f)}function c(u,d,p,g,_,m){const f=o(u,d,p,g,_,m);p.transmission>0?n.unshift(f):p.transparent===!0?i.unshift(f):t.unshift(f)}function l(u,d){t.length>1&&t.sort(u||tv),n.length>1&&n.sort(d||Vu),i.length>1&&i.sort(d||Vu)}function h(){for(let u=e,d=s.length;u<d;u++){const p=s[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:h,sort:l}}function nv(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new Gu,s.set(n,[o])):i>=r.length?(o=new Gu,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function iv(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new A,color:new Fe};break;case"SpotLight":t={position:new A,direction:new A,color:new Fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new A,color:new Fe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new A,skyColor:new Fe,groundColor:new Fe};break;case"RectAreaLight":t={color:new Fe,position:new A,halfWidth:new A,halfHeight:new A};break}return s[e.id]=t,t}}}function sv(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let rv=0;function ov(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function av(s){const e=new iv,t=sv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new A);const i=new A,r=new Ye,o=new Ye;function a(l){let h=0,u=0,d=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let p=0,g=0,_=0,m=0,f=0,b=0,S=0,x=0,L=0,C=0,P=0;l.sort(ov);for(let y=0,M=l.length;y<M;y++){const I=l[y],B=I.color,O=I.intensity,G=I.distance,j=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=B.r*O,u+=B.g*O,d+=B.b*O;else if(I.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(I.sh.coefficients[H],O);P++}else if(I.isDirectionalLight){const H=e.get(I);if(H.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const Q=I.shadow,V=t.get(I);V.shadowIntensity=Q.intensity,V.shadowBias=Q.bias,V.shadowNormalBias=Q.normalBias,V.shadowRadius=Q.radius,V.shadowMapSize=Q.mapSize,n.directionalShadow[p]=V,n.directionalShadowMap[p]=j,n.directionalShadowMatrix[p]=I.shadow.matrix,b++}n.directional[p]=H,p++}else if(I.isSpotLight){const H=e.get(I);H.position.setFromMatrixPosition(I.matrixWorld),H.color.copy(B).multiplyScalar(O),H.distance=G,H.coneCos=Math.cos(I.angle),H.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),H.decay=I.decay,n.spot[_]=H;const Q=I.shadow;if(I.map&&(n.spotLightMap[L]=I.map,L++,Q.updateMatrices(I),I.castShadow&&C++),n.spotLightMatrix[_]=Q.matrix,I.castShadow){const V=t.get(I);V.shadowIntensity=Q.intensity,V.shadowBias=Q.bias,V.shadowNormalBias=Q.normalBias,V.shadowRadius=Q.radius,V.shadowMapSize=Q.mapSize,n.spotShadow[_]=V,n.spotShadowMap[_]=j,x++}_++}else if(I.isRectAreaLight){const H=e.get(I);H.color.copy(B).multiplyScalar(O),H.halfWidth.set(I.width*.5,0,0),H.halfHeight.set(0,I.height*.5,0),n.rectArea[m]=H,m++}else if(I.isPointLight){const H=e.get(I);if(H.color.copy(I.color).multiplyScalar(I.intensity),H.distance=I.distance,H.decay=I.decay,I.castShadow){const Q=I.shadow,V=t.get(I);V.shadowIntensity=Q.intensity,V.shadowBias=Q.bias,V.shadowNormalBias=Q.normalBias,V.shadowRadius=Q.radius,V.shadowMapSize=Q.mapSize,V.shadowCameraNear=Q.camera.near,V.shadowCameraFar=Q.camera.far,n.pointShadow[g]=V,n.pointShadowMap[g]=j,n.pointShadowMatrix[g]=I.shadow.matrix,S++}n.point[g]=H,g++}else if(I.isHemisphereLight){const H=e.get(I);H.skyColor.copy(I.color).multiplyScalar(O),H.groundColor.copy(I.groundColor).multiplyScalar(O),n.hemi[f]=H,f++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=de.LTC_FLOAT_1,n.rectAreaLTC2=de.LTC_FLOAT_2):(n.rectAreaLTC1=de.LTC_HALF_1,n.rectAreaLTC2=de.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const E=n.hash;(E.directionalLength!==p||E.pointLength!==g||E.spotLength!==_||E.rectAreaLength!==m||E.hemiLength!==f||E.numDirectionalShadows!==b||E.numPointShadows!==S||E.numSpotShadows!==x||E.numSpotMaps!==L||E.numLightProbes!==P)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=x+L-C,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=P,E.directionalLength=p,E.pointLength=g,E.spotLength=_,E.rectAreaLength=m,E.hemiLength=f,E.numDirectionalShadows=b,E.numPointShadows=S,E.numSpotShadows=x,E.numSpotMaps=L,E.numLightProbes=P,n.version=rv++)}function c(l,h){let u=0,d=0,p=0,g=0,_=0;const m=h.matrixWorldInverse;for(let f=0,b=l.length;f<b;f++){const S=l[f];if(S.isDirectionalLight){const x=n.directional[u];x.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),u++}else if(S.isSpotLight){const x=n.spot[p];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),p++}else if(S.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(S.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(S.width*.5,0,0),x.halfHeight.set(0,S.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(S.isPointLight){const x=n.point[d];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),d++}else if(S.isHemisphereLight){const x=n.hemi[_];x.direction.setFromMatrixPosition(S.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:n}}function Wu(s){const e=new av(s),t=[],n=[];function i(h){l.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function cv(s){let e=new WeakMap;function t(i,r=0){const o=e.get(i);let a;return o===void 0?(a=new Wu(s),e.set(i,[a])):r>=o.length?(a=new Wu(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class lv extends Jn{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Xp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class hv extends Jn{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const uv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,dv=`uniform sampler2D shadow_pass;
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
}`;function fv(s,e,t){let n=new dh;const i=new re,r=new re,o=new ht,a=new lv({depthPacking:qp}),c=new hv,l={},h=t.maxTextureSize,u={[Oi]:fn,[fn]:Oi,[Qt]:Qt},d=new _i({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new re},radius:{value:4}},vertexShader:uv,fragmentShader:dv}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new Wt;g.setAttribute("position",new nn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new J(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Dd;let f=this.type;this.render=function(C,P,E){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const y=s.getRenderTarget(),M=s.getActiveCubeFace(),I=s.getActiveMipmapLevel(),B=s.state;B.setBlending(is),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const O=f!==Ci&&this.type===Ci,G=f===Ci&&this.type!==Ci;for(let j=0,H=C.length;j<H;j++){const Q=C[j],V=Q.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);const le=V.getFrameExtents();if(i.multiply(le),r.copy(V.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/le.x),i.x=r.x*le.x,V.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/le.y),i.y=r.y*le.y,V.mapSize.y=r.y)),V.map===null||O===!0||G===!0){const me=this.type!==Ci?{minFilter:pn,magFilter:pn}:{};V.map!==null&&V.map.dispose(),V.map=new ws(i.x,i.y,me),V.map.texture.name=Q.name+".shadowMap",V.camera.updateProjectionMatrix()}s.setRenderTarget(V.map),s.clear();const fe=V.getViewportCount();for(let me=0;me<fe;me++){const Ce=V.getViewport(me);o.set(r.x*Ce.x,r.y*Ce.y,r.x*Ce.z,r.y*Ce.w),B.viewport(o),V.updateMatrices(Q,me),n=V.getFrustum(),x(P,E,V.camera,Q,this.type)}V.isPointLightShadow!==!0&&this.type===Ci&&b(V,E),V.needsUpdate=!1}f=this.type,m.needsUpdate=!1,s.setRenderTarget(y,M,I)};function b(C,P){const E=e.update(_);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new ws(i.x,i.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,s.setRenderTarget(C.mapPass),s.clear(),s.renderBufferDirect(P,null,E,d,_,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,s.setRenderTarget(C.map),s.clear(),s.renderBufferDirect(P,null,E,p,_,null)}function S(C,P,E,y){let M=null;const I=E.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(I!==void 0)M=I;else if(M=E.isPointLight===!0?c:a,s.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const B=M.uuid,O=P.uuid;let G=l[B];G===void 0&&(G={},l[B]=G);let j=G[O];j===void 0&&(j=M.clone(),G[O]=j,P.addEventListener("dispose",L)),M=j}if(M.visible=P.visible,M.wireframe=P.wireframe,y===Ci?M.side=P.shadowSide!==null?P.shadowSide:P.side:M.side=P.shadowSide!==null?P.shadowSide:u[P.side],M.alphaMap=P.alphaMap,M.alphaTest=P.alphaTest,M.map=P.map,M.clipShadows=P.clipShadows,M.clippingPlanes=P.clippingPlanes,M.clipIntersection=P.clipIntersection,M.displacementMap=P.displacementMap,M.displacementScale=P.displacementScale,M.displacementBias=P.displacementBias,M.wireframeLinewidth=P.wireframeLinewidth,M.linewidth=P.linewidth,E.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const B=s.properties.get(M);B.light=E}return M}function x(C,P,E,y,M){if(C.visible===!1)return;if(C.layers.test(P.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&M===Ci)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,C.matrixWorld);const O=e.update(C),G=C.material;if(Array.isArray(G)){const j=O.groups;for(let H=0,Q=j.length;H<Q;H++){const V=j[H],le=G[V.materialIndex];if(le&&le.visible){const fe=S(C,le,y,M);C.onBeforeShadow(s,C,P,E,O,fe,V),s.renderBufferDirect(E,null,O,fe,C,V),C.onAfterShadow(s,C,P,E,O,fe,V)}}}else if(G.visible){const j=S(C,G,y,M);C.onBeforeShadow(s,C,P,E,O,j,null),s.renderBufferDirect(E,null,O,j,C,null),C.onAfterShadow(s,C,P,E,O,j,null)}}const B=C.children;for(let O=0,G=B.length;O<G;O++)x(B[O],P,E,y,M)}function L(C){C.target.removeEventListener("dispose",L);for(const E in l){const y=l[E],M=C.target.uuid;M in y&&(y[M].dispose(),delete y[M])}}}const pv={[Kc]:Zc,[$c]:el,[Jc]:tl,[ir]:Qc,[Zc]:Kc,[el]:$c,[tl]:Jc,[Qc]:ir};function mv(s,e){function t(){let D=!1;const ge=new ht;let q=null;const ne=new ht(0,0,0,0);return{setMask:function(Me){q!==Me&&!D&&(s.colorMask(Me,Me,Me,Me),q=Me)},setLocked:function(Me){D=Me},setClear:function(Me,xe,je,Bt,cn){cn===!0&&(Me*=Bt,xe*=Bt,je*=Bt),ge.set(Me,xe,je,Bt),ne.equals(ge)===!1&&(s.clearColor(Me,xe,je,Bt),ne.copy(ge))},reset:function(){D=!1,q=null,ne.set(-1,0,0,0)}}}function n(){let D=!1,ge=!1,q=null,ne=null,Me=null;return{setReversed:function(xe){if(ge!==xe){const je=e.get("EXT_clip_control");ge?je.clipControlEXT(je.LOWER_LEFT_EXT,je.ZERO_TO_ONE_EXT):je.clipControlEXT(je.LOWER_LEFT_EXT,je.NEGATIVE_ONE_TO_ONE_EXT);const Bt=Me;Me=null,this.setClear(Bt)}ge=xe},getReversed:function(){return ge},setTest:function(xe){xe?ae(s.DEPTH_TEST):Pe(s.DEPTH_TEST)},setMask:function(xe){q!==xe&&!D&&(s.depthMask(xe),q=xe)},setFunc:function(xe){if(ge&&(xe=pv[xe]),ne!==xe){switch(xe){case Kc:s.depthFunc(s.NEVER);break;case Zc:s.depthFunc(s.ALWAYS);break;case $c:s.depthFunc(s.LESS);break;case ir:s.depthFunc(s.LEQUAL);break;case Jc:s.depthFunc(s.EQUAL);break;case Qc:s.depthFunc(s.GEQUAL);break;case el:s.depthFunc(s.GREATER);break;case tl:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ne=xe}},setLocked:function(xe){D=xe},setClear:function(xe){Me!==xe&&(ge&&(xe=1-xe),s.clearDepth(xe),Me=xe)},reset:function(){D=!1,q=null,ne=null,Me=null,ge=!1}}}function i(){let D=!1,ge=null,q=null,ne=null,Me=null,xe=null,je=null,Bt=null,cn=null;return{setTest:function(gt){D||(gt?ae(s.STENCIL_TEST):Pe(s.STENCIL_TEST))},setMask:function(gt){ge!==gt&&!D&&(s.stencilMask(gt),ge=gt)},setFunc:function(gt,kn,Mi){(q!==gt||ne!==kn||Me!==Mi)&&(s.stencilFunc(gt,kn,Mi),q=gt,ne=kn,Me=Mi)},setOp:function(gt,kn,Mi){(xe!==gt||je!==kn||Bt!==Mi)&&(s.stencilOp(gt,kn,Mi),xe=gt,je=kn,Bt=Mi)},setLocked:function(gt){D=gt},setClear:function(gt){cn!==gt&&(s.clearStencil(gt),cn=gt)},reset:function(){D=!1,ge=null,q=null,ne=null,Me=null,xe=null,je=null,Bt=null,cn=null}}}const r=new t,o=new n,a=new i,c=new WeakMap,l=new WeakMap;let h={},u={},d=new WeakMap,p=[],g=null,_=!1,m=null,f=null,b=null,S=null,x=null,L=null,C=null,P=new Fe(0,0,0),E=0,y=!1,M=null,I=null,B=null,O=null,G=null;const j=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,Q=0;const V=s.getParameter(s.VERSION);V.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(V)[1]),H=Q>=1):V.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),H=Q>=2);let le=null,fe={};const me=s.getParameter(s.SCISSOR_BOX),Ce=s.getParameter(s.VIEWPORT),st=new ht().fromArray(me),Y=new ht().fromArray(Ce);function ie(D,ge,q,ne){const Me=new Uint8Array(4),xe=s.createTexture();s.bindTexture(D,xe),s.texParameteri(D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(D,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let je=0;je<q;je++)D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY?s.texImage3D(ge,0,s.RGBA,1,1,ne,0,s.RGBA,s.UNSIGNED_BYTE,Me):s.texImage2D(ge+je,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Me);return xe}const Se={};Se[s.TEXTURE_2D]=ie(s.TEXTURE_2D,s.TEXTURE_2D,1),Se[s.TEXTURE_CUBE_MAP]=ie(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Se[s.TEXTURE_2D_ARRAY]=ie(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Se[s.TEXTURE_3D]=ie(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ae(s.DEPTH_TEST),o.setFunc(ir),te(!1),ye(Kh),ae(s.CULL_FACE),R(is);function ae(D){h[D]!==!0&&(s.enable(D),h[D]=!0)}function Pe(D){h[D]!==!1&&(s.disable(D),h[D]=!1)}function Oe(D,ge){return u[D]!==ge?(s.bindFramebuffer(D,ge),u[D]=ge,D===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=ge),D===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=ge),!0):!1}function Be(D,ge){let q=p,ne=!1;if(D){q=d.get(ge),q===void 0&&(q=[],d.set(ge,q));const Me=D.textures;if(q.length!==Me.length||q[0]!==s.COLOR_ATTACHMENT0){for(let xe=0,je=Me.length;xe<je;xe++)q[xe]=s.COLOR_ATTACHMENT0+xe;q.length=Me.length,ne=!0}}else q[0]!==s.BACK&&(q[0]=s.BACK,ne=!0);ne&&s.drawBuffers(q)}function Je(D){return g!==D?(s.useProgram(D),g=D,!0):!1}const K={[xs]:s.FUNC_ADD,[mp]:s.FUNC_SUBTRACT,[gp]:s.FUNC_REVERSE_SUBTRACT};K[_p]=s.MIN,K[xp]=s.MAX;const se={[vp]:s.ZERO,[yp]:s.ONE,[Mp]:s.SRC_COLOR,[Yc]:s.SRC_ALPHA,[Ap]:s.SRC_ALPHA_SATURATE,[Tp]:s.DST_COLOR,[wp]:s.DST_ALPHA,[Sp]:s.ONE_MINUS_SRC_COLOR,[jc]:s.ONE_MINUS_SRC_ALPHA,[Ep]:s.ONE_MINUS_DST_COLOR,[bp]:s.ONE_MINUS_DST_ALPHA,[Rp]:s.CONSTANT_COLOR,[Cp]:s.ONE_MINUS_CONSTANT_COLOR,[Pp]:s.CONSTANT_ALPHA,[Ip]:s.ONE_MINUS_CONSTANT_ALPHA};function R(D,ge,q,ne,Me,xe,je,Bt,cn,gt){if(D===is){_===!0&&(Pe(s.BLEND),_=!1);return}if(_===!1&&(ae(s.BLEND),_=!0),D!==pp){if(D!==m||gt!==y){if((f!==xs||x!==xs)&&(s.blendEquation(s.FUNC_ADD),f=xs,x=xs),gt)switch(D){case Js:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Jr:s.blendFunc(s.ONE,s.ONE);break;case Zh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case $h:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Js:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Jr:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Zh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case $h:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}b=null,S=null,L=null,C=null,P.set(0,0,0),E=0,m=D,y=gt}return}Me=Me||ge,xe=xe||q,je=je||ne,(ge!==f||Me!==x)&&(s.blendEquationSeparate(K[ge],K[Me]),f=ge,x=Me),(q!==b||ne!==S||xe!==L||je!==C)&&(s.blendFuncSeparate(se[q],se[ne],se[xe],se[je]),b=q,S=ne,L=xe,C=je),(Bt.equals(P)===!1||cn!==E)&&(s.blendColor(Bt.r,Bt.g,Bt.b,cn),P.copy(Bt),E=cn),m=D,y=!1}function we(D,ge){D.side===Qt?Pe(s.CULL_FACE):ae(s.CULL_FACE);let q=D.side===fn;ge&&(q=!q),te(q),D.blending===Js&&D.transparent===!1?R(is):R(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),r.setMask(D.colorWrite);const ne=D.stencilWrite;a.setTest(ne),ne&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),_e(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ae(s.SAMPLE_ALPHA_TO_COVERAGE):Pe(s.SAMPLE_ALPHA_TO_COVERAGE)}function te(D){M!==D&&(D?s.frontFace(s.CW):s.frontFace(s.CCW),M=D)}function ye(D){D!==dp?(ae(s.CULL_FACE),D!==I&&(D===Kh?s.cullFace(s.BACK):D===fp?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Pe(s.CULL_FACE),I=D}function Z(D){D!==B&&(H&&s.lineWidth(D),B=D)}function _e(D,ge,q){D?(ae(s.POLYGON_OFFSET_FILL),(O!==ge||G!==q)&&(s.polygonOffset(ge,q),O=ge,G=q)):Pe(s.POLYGON_OFFSET_FILL)}function he(D){D?ae(s.SCISSOR_TEST):Pe(s.SCISSOR_TEST)}function w(D){D===void 0&&(D=s.TEXTURE0+j-1),le!==D&&(s.activeTexture(D),le=D)}function v(D,ge,q){q===void 0&&(le===null?q=s.TEXTURE0+j-1:q=le);let ne=fe[q];ne===void 0&&(ne={type:void 0,texture:void 0},fe[q]=ne),(ne.type!==D||ne.texture!==ge)&&(le!==q&&(s.activeTexture(q),le=q),s.bindTexture(D,ge||Se[D]),ne.type=D,ne.texture=ge)}function N(){const D=fe[le];D!==void 0&&D.type!==void 0&&(s.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function W(){try{s.compressedTexImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function $(){try{s.compressedTexImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function X(){try{s.texSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ee(){try{s.texSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ue(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Te(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function nt(){try{s.texStorage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function oe(){try{s.texStorage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ae(){try{s.texImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function He(){try{s.texImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ge(D){st.equals(D)===!1&&(s.scissor(D.x,D.y,D.z,D.w),st.copy(D))}function Re(D){Y.equals(D)===!1&&(s.viewport(D.x,D.y,D.z,D.w),Y.copy(D))}function ot(D,ge){let q=l.get(ge);q===void 0&&(q=new WeakMap,l.set(ge,q));let ne=q.get(D);ne===void 0&&(ne=s.getUniformBlockIndex(ge,D.name),q.set(D,ne))}function Qe(D,ge){const ne=l.get(ge).get(D);c.get(ge)!==ne&&(s.uniformBlockBinding(ge,ne,D.__bindingPointIndex),c.set(ge,ne))}function Mt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},le=null,fe={},u={},d=new WeakMap,p=[],g=null,_=!1,m=null,f=null,b=null,S=null,x=null,L=null,C=null,P=new Fe(0,0,0),E=0,y=!1,M=null,I=null,B=null,O=null,G=null,st.set(0,0,s.canvas.width,s.canvas.height),Y.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ae,disable:Pe,bindFramebuffer:Oe,drawBuffers:Be,useProgram:Je,setBlending:R,setMaterial:we,setFlipSided:te,setCullFace:ye,setLineWidth:Z,setPolygonOffset:_e,setScissorTest:he,activeTexture:w,bindTexture:v,unbindTexture:N,compressedTexImage2D:W,compressedTexImage3D:$,texImage2D:Ae,texImage3D:He,updateUBOMapping:ot,uniformBlockBinding:Qe,texStorage2D:nt,texStorage3D:oe,texSubImage2D:X,texSubImage3D:Ee,compressedTexSubImage2D:ue,compressedTexSubImage3D:Te,scissor:Ge,viewport:Re,reset:Mt}}function Xu(s,e,t,n){const i=gv(n);switch(t){case Vd:return s*e;case Wd:return s*e;case Xd:return s*e*2;case sh:return s*e/i.components*i.byteLength;case rh:return s*e/i.components*i.byteLength;case qd:return s*e*2/i.components*i.byteLength;case oh:return s*e*2/i.components*i.byteLength;case Gd:return s*e*3/i.components*i.byteLength;case Un:return s*e*4/i.components*i.byteLength;case ah:return s*e*4/i.components*i.byteLength;case ra:case oa:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case aa:case ca:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case rl:case al:return Math.max(s,16)*Math.max(e,8)/4;case sl:case ol:return Math.max(s,8)*Math.max(e,8)/2;case cl:case ll:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case hl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ul:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case dl:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case fl:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case pl:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case ml:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case gl:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case _l:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case xl:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case vl:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case yl:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Ml:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Sl:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case wl:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case bl:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case la:case Tl:case El:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Yd:case Al:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Rl:case Cl:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function gv(s){switch(s){case Bi:case zd:return{byteLength:1,components:1};case Qr:case kd:case mo:return{byteLength:2,components:1};case nh:case ih:return{byteLength:2,components:4};case Ss:case th:case Zn:return{byteLength:4,components:1};case Hd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function _v(s,e,t,n,i,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new re,h=new WeakMap;let u;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,v){return p?new OffscreenCanvas(w,v):no("canvas")}function _(w,v,N){let W=1;const $=he(w);if(($.width>N||$.height>N)&&(W=N/Math.max($.width,$.height)),W<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const X=Math.floor(W*$.width),Ee=Math.floor(W*$.height);u===void 0&&(u=g(X,Ee));const ue=v?g(X,Ee):u;return ue.width=X,ue.height=Ee,ue.getContext("2d").drawImage(w,0,0,X,Ee),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+X+"x"+Ee+")."),ue}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),w;return w}function m(w){return w.generateMipmaps}function f(w){s.generateMipmap(w)}function b(w){return w.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?s.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function S(w,v,N,W,$=!1){if(w!==null){if(s[w]!==void 0)return s[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let X=v;if(v===s.RED&&(N===s.FLOAT&&(X=s.R32F),N===s.HALF_FLOAT&&(X=s.R16F),N===s.UNSIGNED_BYTE&&(X=s.R8)),v===s.RED_INTEGER&&(N===s.UNSIGNED_BYTE&&(X=s.R8UI),N===s.UNSIGNED_SHORT&&(X=s.R16UI),N===s.UNSIGNED_INT&&(X=s.R32UI),N===s.BYTE&&(X=s.R8I),N===s.SHORT&&(X=s.R16I),N===s.INT&&(X=s.R32I)),v===s.RG&&(N===s.FLOAT&&(X=s.RG32F),N===s.HALF_FLOAT&&(X=s.RG16F),N===s.UNSIGNED_BYTE&&(X=s.RG8)),v===s.RG_INTEGER&&(N===s.UNSIGNED_BYTE&&(X=s.RG8UI),N===s.UNSIGNED_SHORT&&(X=s.RG16UI),N===s.UNSIGNED_INT&&(X=s.RG32UI),N===s.BYTE&&(X=s.RG8I),N===s.SHORT&&(X=s.RG16I),N===s.INT&&(X=s.RG32I)),v===s.RGB_INTEGER&&(N===s.UNSIGNED_BYTE&&(X=s.RGB8UI),N===s.UNSIGNED_SHORT&&(X=s.RGB16UI),N===s.UNSIGNED_INT&&(X=s.RGB32UI),N===s.BYTE&&(X=s.RGB8I),N===s.SHORT&&(X=s.RGB16I),N===s.INT&&(X=s.RGB32I)),v===s.RGBA_INTEGER&&(N===s.UNSIGNED_BYTE&&(X=s.RGBA8UI),N===s.UNSIGNED_SHORT&&(X=s.RGBA16UI),N===s.UNSIGNED_INT&&(X=s.RGBA32UI),N===s.BYTE&&(X=s.RGBA8I),N===s.SHORT&&(X=s.RGBA16I),N===s.INT&&(X=s.RGBA32I)),v===s.RGB&&N===s.UNSIGNED_INT_5_9_9_9_REV&&(X=s.RGB9_E5),v===s.RGBA){const Ee=$?Ua:rt.getTransfer(W);N===s.FLOAT&&(X=s.RGBA32F),N===s.HALF_FLOAT&&(X=s.RGBA16F),N===s.UNSIGNED_BYTE&&(X=Ee===vt?s.SRGB8_ALPHA8:s.RGBA8),N===s.UNSIGNED_SHORT_4_4_4_4&&(X=s.RGBA4),N===s.UNSIGNED_SHORT_5_5_5_1&&(X=s.RGB5_A1)}return(X===s.R16F||X===s.R32F||X===s.RG16F||X===s.RG32F||X===s.RGBA16F||X===s.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function x(w,v){let N;return w?v===null||v===Ss||v===or?N=s.DEPTH24_STENCIL8:v===Zn?N=s.DEPTH32F_STENCIL8:v===Qr&&(N=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Ss||v===or?N=s.DEPTH_COMPONENT24:v===Zn?N=s.DEPTH_COMPONENT32F:v===Qr&&(N=s.DEPTH_COMPONENT16),N}function L(w,v){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==pn&&w.minFilter!==An?Math.log2(Math.max(v.width,v.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?v.mipmaps.length:1}function C(w){const v=w.target;v.removeEventListener("dispose",C),E(v),v.isVideoTexture&&h.delete(v)}function P(w){const v=w.target;v.removeEventListener("dispose",P),M(v)}function E(w){const v=n.get(w);if(v.__webglInit===void 0)return;const N=w.source,W=d.get(N);if(W){const $=W[v.__cacheKey];$.usedTimes--,$.usedTimes===0&&y(w),Object.keys(W).length===0&&d.delete(N)}n.remove(w)}function y(w){const v=n.get(w);s.deleteTexture(v.__webglTexture);const N=w.source,W=d.get(N);delete W[v.__cacheKey],o.memory.textures--}function M(w){const v=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(v.__webglFramebuffer[W]))for(let $=0;$<v.__webglFramebuffer[W].length;$++)s.deleteFramebuffer(v.__webglFramebuffer[W][$]);else s.deleteFramebuffer(v.__webglFramebuffer[W]);v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer[W])}else{if(Array.isArray(v.__webglFramebuffer))for(let W=0;W<v.__webglFramebuffer.length;W++)s.deleteFramebuffer(v.__webglFramebuffer[W]);else s.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&s.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let W=0;W<v.__webglColorRenderbuffer.length;W++)v.__webglColorRenderbuffer[W]&&s.deleteRenderbuffer(v.__webglColorRenderbuffer[W]);v.__webglDepthRenderbuffer&&s.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const N=w.textures;for(let W=0,$=N.length;W<$;W++){const X=n.get(N[W]);X.__webglTexture&&(s.deleteTexture(X.__webglTexture),o.memory.textures--),n.remove(N[W])}n.remove(w)}let I=0;function B(){I=0}function O(){const w=I;return w>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+i.maxTextures),I+=1,w}function G(w){const v=[];return v.push(w.wrapS),v.push(w.wrapT),v.push(w.wrapR||0),v.push(w.magFilter),v.push(w.minFilter),v.push(w.anisotropy),v.push(w.internalFormat),v.push(w.format),v.push(w.type),v.push(w.generateMipmaps),v.push(w.premultiplyAlpha),v.push(w.flipY),v.push(w.unpackAlignment),v.push(w.colorSpace),v.join()}function j(w,v){const N=n.get(w);if(w.isVideoTexture&&Z(w),w.isRenderTargetTexture===!1&&w.version>0&&N.__version!==w.version){const W=w.image;if(W===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(N,w,v);return}}t.bindTexture(s.TEXTURE_2D,N.__webglTexture,s.TEXTURE0+v)}function H(w,v){const N=n.get(w);if(w.version>0&&N.__version!==w.version){Y(N,w,v);return}t.bindTexture(s.TEXTURE_2D_ARRAY,N.__webglTexture,s.TEXTURE0+v)}function Q(w,v){const N=n.get(w);if(w.version>0&&N.__version!==w.version){Y(N,w,v);return}t.bindTexture(s.TEXTURE_3D,N.__webglTexture,s.TEXTURE0+v)}function V(w,v){const N=n.get(w);if(w.version>0&&N.__version!==w.version){ie(N,w,v);return}t.bindTexture(s.TEXTURE_CUBE_MAP,N.__webglTexture,s.TEXTURE0+v)}const le={[Ms]:s.REPEAT,[pi]:s.CLAMP_TO_EDGE,[va]:s.MIRRORED_REPEAT},fe={[pn]:s.NEAREST,[Bd]:s.NEAREST_MIPMAP_NEAREST,[Br]:s.NEAREST_MIPMAP_LINEAR,[An]:s.LINEAR,[sa]:s.LINEAR_MIPMAP_NEAREST,[Li]:s.LINEAR_MIPMAP_LINEAR},me={[jp]:s.NEVER,[em]:s.ALWAYS,[Kp]:s.LESS,[Zd]:s.LEQUAL,[Zp]:s.EQUAL,[Qp]:s.GEQUAL,[$p]:s.GREATER,[Jp]:s.NOTEQUAL};function Ce(w,v){if(v.type===Zn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===An||v.magFilter===sa||v.magFilter===Br||v.magFilter===Li||v.minFilter===An||v.minFilter===sa||v.minFilter===Br||v.minFilter===Li)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(w,s.TEXTURE_WRAP_S,le[v.wrapS]),s.texParameteri(w,s.TEXTURE_WRAP_T,le[v.wrapT]),(w===s.TEXTURE_3D||w===s.TEXTURE_2D_ARRAY)&&s.texParameteri(w,s.TEXTURE_WRAP_R,le[v.wrapR]),s.texParameteri(w,s.TEXTURE_MAG_FILTER,fe[v.magFilter]),s.texParameteri(w,s.TEXTURE_MIN_FILTER,fe[v.minFilter]),v.compareFunction&&(s.texParameteri(w,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(w,s.TEXTURE_COMPARE_FUNC,me[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===pn||v.minFilter!==Br&&v.minFilter!==Li||v.type===Zn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const N=e.get("EXT_texture_filter_anisotropic");s.texParameterf(w,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,i.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function st(w,v){let N=!1;w.__webglInit===void 0&&(w.__webglInit=!0,v.addEventListener("dispose",C));const W=v.source;let $=d.get(W);$===void 0&&($={},d.set(W,$));const X=G(v);if(X!==w.__cacheKey){$[X]===void 0&&($[X]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,N=!0),$[X].usedTimes++;const Ee=$[w.__cacheKey];Ee!==void 0&&($[w.__cacheKey].usedTimes--,Ee.usedTimes===0&&y(v)),w.__cacheKey=X,w.__webglTexture=$[X].texture}return N}function Y(w,v,N){let W=s.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(W=s.TEXTURE_2D_ARRAY),v.isData3DTexture&&(W=s.TEXTURE_3D);const $=st(w,v),X=v.source;t.bindTexture(W,w.__webglTexture,s.TEXTURE0+N);const Ee=n.get(X);if(X.version!==Ee.__version||$===!0){t.activeTexture(s.TEXTURE0+N);const ue=rt.getPrimaries(rt.workingColorSpace),Te=v.colorSpace===ts?null:rt.getPrimaries(v.colorSpace),nt=v.colorSpace===ts||ue===Te?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,nt);let oe=_(v.image,!1,i.maxTextureSize);oe=_e(v,oe);const Ae=r.convert(v.format,v.colorSpace),He=r.convert(v.type);let Ge=S(v.internalFormat,Ae,He,v.colorSpace,v.isVideoTexture);Ce(W,v);let Re;const ot=v.mipmaps,Qe=v.isVideoTexture!==!0,Mt=Ee.__version===void 0||$===!0,D=X.dataReady,ge=L(v,oe);if(v.isDepthTexture)Ge=x(v.format===ar,v.type),Mt&&(Qe?t.texStorage2D(s.TEXTURE_2D,1,Ge,oe.width,oe.height):t.texImage2D(s.TEXTURE_2D,0,Ge,oe.width,oe.height,0,Ae,He,null));else if(v.isDataTexture)if(ot.length>0){Qe&&Mt&&t.texStorage2D(s.TEXTURE_2D,ge,Ge,ot[0].width,ot[0].height);for(let q=0,ne=ot.length;q<ne;q++)Re=ot[q],Qe?D&&t.texSubImage2D(s.TEXTURE_2D,q,0,0,Re.width,Re.height,Ae,He,Re.data):t.texImage2D(s.TEXTURE_2D,q,Ge,Re.width,Re.height,0,Ae,He,Re.data);v.generateMipmaps=!1}else Qe?(Mt&&t.texStorage2D(s.TEXTURE_2D,ge,Ge,oe.width,oe.height),D&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,oe.width,oe.height,Ae,He,oe.data)):t.texImage2D(s.TEXTURE_2D,0,Ge,oe.width,oe.height,0,Ae,He,oe.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Qe&&Mt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ge,Ge,ot[0].width,ot[0].height,oe.depth);for(let q=0,ne=ot.length;q<ne;q++)if(Re=ot[q],v.format!==Un)if(Ae!==null)if(Qe){if(D)if(v.layerUpdates.size>0){const Me=Xu(Re.width,Re.height,v.format,v.type);for(const xe of v.layerUpdates){const je=Re.data.subarray(xe*Me/Re.data.BYTES_PER_ELEMENT,(xe+1)*Me/Re.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,q,0,0,xe,Re.width,Re.height,1,Ae,je)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,q,0,0,0,Re.width,Re.height,oe.depth,Ae,Re.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,q,Ge,Re.width,Re.height,oe.depth,0,Re.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Qe?D&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,q,0,0,0,Re.width,Re.height,oe.depth,Ae,He,Re.data):t.texImage3D(s.TEXTURE_2D_ARRAY,q,Ge,Re.width,Re.height,oe.depth,0,Ae,He,Re.data)}else{Qe&&Mt&&t.texStorage2D(s.TEXTURE_2D,ge,Ge,ot[0].width,ot[0].height);for(let q=0,ne=ot.length;q<ne;q++)Re=ot[q],v.format!==Un?Ae!==null?Qe?D&&t.compressedTexSubImage2D(s.TEXTURE_2D,q,0,0,Re.width,Re.height,Ae,Re.data):t.compressedTexImage2D(s.TEXTURE_2D,q,Ge,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qe?D&&t.texSubImage2D(s.TEXTURE_2D,q,0,0,Re.width,Re.height,Ae,He,Re.data):t.texImage2D(s.TEXTURE_2D,q,Ge,Re.width,Re.height,0,Ae,He,Re.data)}else if(v.isDataArrayTexture)if(Qe){if(Mt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ge,Ge,oe.width,oe.height,oe.depth),D)if(v.layerUpdates.size>0){const q=Xu(oe.width,oe.height,v.format,v.type);for(const ne of v.layerUpdates){const Me=oe.data.subarray(ne*q/oe.data.BYTES_PER_ELEMENT,(ne+1)*q/oe.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ne,oe.width,oe.height,1,Ae,He,Me)}v.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,Ae,He,oe.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ge,oe.width,oe.height,oe.depth,0,Ae,He,oe.data);else if(v.isData3DTexture)Qe?(Mt&&t.texStorage3D(s.TEXTURE_3D,ge,Ge,oe.width,oe.height,oe.depth),D&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,Ae,He,oe.data)):t.texImage3D(s.TEXTURE_3D,0,Ge,oe.width,oe.height,oe.depth,0,Ae,He,oe.data);else if(v.isFramebufferTexture){if(Mt)if(Qe)t.texStorage2D(s.TEXTURE_2D,ge,Ge,oe.width,oe.height);else{let q=oe.width,ne=oe.height;for(let Me=0;Me<ge;Me++)t.texImage2D(s.TEXTURE_2D,Me,Ge,q,ne,0,Ae,He,null),q>>=1,ne>>=1}}else if(ot.length>0){if(Qe&&Mt){const q=he(ot[0]);t.texStorage2D(s.TEXTURE_2D,ge,Ge,q.width,q.height)}for(let q=0,ne=ot.length;q<ne;q++)Re=ot[q],Qe?D&&t.texSubImage2D(s.TEXTURE_2D,q,0,0,Ae,He,Re):t.texImage2D(s.TEXTURE_2D,q,Ge,Ae,He,Re);v.generateMipmaps=!1}else if(Qe){if(Mt){const q=he(oe);t.texStorage2D(s.TEXTURE_2D,ge,Ge,q.width,q.height)}D&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ae,He,oe)}else t.texImage2D(s.TEXTURE_2D,0,Ge,Ae,He,oe);m(v)&&f(W),Ee.__version=X.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function ie(w,v,N){if(v.image.length!==6)return;const W=st(w,v),$=v.source;t.bindTexture(s.TEXTURE_CUBE_MAP,w.__webglTexture,s.TEXTURE0+N);const X=n.get($);if($.version!==X.__version||W===!0){t.activeTexture(s.TEXTURE0+N);const Ee=rt.getPrimaries(rt.workingColorSpace),ue=v.colorSpace===ts?null:rt.getPrimaries(v.colorSpace),Te=v.colorSpace===ts||Ee===ue?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);const nt=v.isCompressedTexture||v.image[0].isCompressedTexture,oe=v.image[0]&&v.image[0].isDataTexture,Ae=[];for(let ne=0;ne<6;ne++)!nt&&!oe?Ae[ne]=_(v.image[ne],!0,i.maxCubemapSize):Ae[ne]=oe?v.image[ne].image:v.image[ne],Ae[ne]=_e(v,Ae[ne]);const He=Ae[0],Ge=r.convert(v.format,v.colorSpace),Re=r.convert(v.type),ot=S(v.internalFormat,Ge,Re,v.colorSpace),Qe=v.isVideoTexture!==!0,Mt=X.__version===void 0||W===!0,D=$.dataReady;let ge=L(v,He);Ce(s.TEXTURE_CUBE_MAP,v);let q;if(nt){Qe&&Mt&&t.texStorage2D(s.TEXTURE_CUBE_MAP,ge,ot,He.width,He.height);for(let ne=0;ne<6;ne++){q=Ae[ne].mipmaps;for(let Me=0;Me<q.length;Me++){const xe=q[Me];v.format!==Un?Ge!==null?Qe?D&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Me,0,0,xe.width,xe.height,Ge,xe.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Me,ot,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Qe?D&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Me,0,0,xe.width,xe.height,Ge,Re,xe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Me,ot,xe.width,xe.height,0,Ge,Re,xe.data)}}}else{if(q=v.mipmaps,Qe&&Mt){q.length>0&&ge++;const ne=he(Ae[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,ge,ot,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(oe){Qe?D&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Ae[ne].width,Ae[ne].height,Ge,Re,Ae[ne].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,ot,Ae[ne].width,Ae[ne].height,0,Ge,Re,Ae[ne].data);for(let Me=0;Me<q.length;Me++){const je=q[Me].image[ne].image;Qe?D&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Me+1,0,0,je.width,je.height,Ge,Re,je.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Me+1,ot,je.width,je.height,0,Ge,Re,je.data)}}else{Qe?D&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Ge,Re,Ae[ne]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,ot,Ge,Re,Ae[ne]);for(let Me=0;Me<q.length;Me++){const xe=q[Me];Qe?D&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Me+1,0,0,Ge,Re,xe.image[ne]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Me+1,ot,Ge,Re,xe.image[ne])}}}m(v)&&f(s.TEXTURE_CUBE_MAP),X.__version=$.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function Se(w,v,N,W,$,X){const Ee=r.convert(N.format,N.colorSpace),ue=r.convert(N.type),Te=S(N.internalFormat,Ee,ue,N.colorSpace),nt=n.get(v),oe=n.get(N);if(oe.__renderTarget=v,!nt.__hasExternalTextures){const Ae=Math.max(1,v.width>>X),He=Math.max(1,v.height>>X);$===s.TEXTURE_3D||$===s.TEXTURE_2D_ARRAY?t.texImage3D($,X,Te,Ae,He,v.depth,0,Ee,ue,null):t.texImage2D($,X,Te,Ae,He,0,Ee,ue,null)}t.bindFramebuffer(s.FRAMEBUFFER,w),ye(v)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,W,$,oe.__webglTexture,0,te(v)):($===s.TEXTURE_2D||$>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,W,$,oe.__webglTexture,X),t.bindFramebuffer(s.FRAMEBUFFER,null)}function ae(w,v,N){if(s.bindRenderbuffer(s.RENDERBUFFER,w),v.depthBuffer){const W=v.depthTexture,$=W&&W.isDepthTexture?W.type:null,X=x(v.stencilBuffer,$),Ee=v.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ue=te(v);ye(v)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ue,X,v.width,v.height):N?s.renderbufferStorageMultisample(s.RENDERBUFFER,ue,X,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,X,v.width,v.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ee,s.RENDERBUFFER,w)}else{const W=v.textures;for(let $=0;$<W.length;$++){const X=W[$],Ee=r.convert(X.format,X.colorSpace),ue=r.convert(X.type),Te=S(X.internalFormat,Ee,ue,X.colorSpace),nt=te(v);N&&ye(v)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,nt,Te,v.width,v.height):ye(v)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,nt,Te,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,Te,v.width,v.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Pe(w,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,w),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const W=n.get(v.depthTexture);W.__renderTarget=v,(!W.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),j(v.depthTexture,0);const $=W.__webglTexture,X=te(v);if(v.depthTexture.format===Qs)ye(v)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,$,0,X):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,$,0);else if(v.depthTexture.format===ar)ye(v)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,$,0,X):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function Oe(w){const v=n.get(w),N=w.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==w.depthTexture){const W=w.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),W){const $=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,W.removeEventListener("dispose",$)};W.addEventListener("dispose",$),v.__depthDisposeCallback=$}v.__boundDepthTexture=W}if(w.depthTexture&&!v.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");Pe(v.__webglFramebuffer,w)}else if(N){v.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(t.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer[W]),v.__webglDepthbuffer[W]===void 0)v.__webglDepthbuffer[W]=s.createRenderbuffer(),ae(v.__webglDepthbuffer[W],w,!1);else{const $=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,X=v.__webglDepthbuffer[W];s.bindRenderbuffer(s.RENDERBUFFER,X),s.framebufferRenderbuffer(s.FRAMEBUFFER,$,s.RENDERBUFFER,X)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=s.createRenderbuffer(),ae(v.__webglDepthbuffer,w,!1);else{const W=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,$=v.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,$),s.framebufferRenderbuffer(s.FRAMEBUFFER,W,s.RENDERBUFFER,$)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Be(w,v,N){const W=n.get(w);v!==void 0&&Se(W.__webglFramebuffer,w,w.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),N!==void 0&&Oe(w)}function Je(w){const v=w.texture,N=n.get(w),W=n.get(v);w.addEventListener("dispose",P);const $=w.textures,X=w.isWebGLCubeRenderTarget===!0,Ee=$.length>1;if(Ee||(W.__webglTexture===void 0&&(W.__webglTexture=s.createTexture()),W.__version=v.version,o.memory.textures++),X){N.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(v.mipmaps&&v.mipmaps.length>0){N.__webglFramebuffer[ue]=[];for(let Te=0;Te<v.mipmaps.length;Te++)N.__webglFramebuffer[ue][Te]=s.createFramebuffer()}else N.__webglFramebuffer[ue]=s.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){N.__webglFramebuffer=[];for(let ue=0;ue<v.mipmaps.length;ue++)N.__webglFramebuffer[ue]=s.createFramebuffer()}else N.__webglFramebuffer=s.createFramebuffer();if(Ee)for(let ue=0,Te=$.length;ue<Te;ue++){const nt=n.get($[ue]);nt.__webglTexture===void 0&&(nt.__webglTexture=s.createTexture(),o.memory.textures++)}if(w.samples>0&&ye(w)===!1){N.__webglMultisampledFramebuffer=s.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let ue=0;ue<$.length;ue++){const Te=$[ue];N.__webglColorRenderbuffer[ue]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,N.__webglColorRenderbuffer[ue]);const nt=r.convert(Te.format,Te.colorSpace),oe=r.convert(Te.type),Ae=S(Te.internalFormat,nt,oe,Te.colorSpace,w.isXRRenderTarget===!0),He=te(w);s.renderbufferStorageMultisample(s.RENDERBUFFER,He,Ae,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ue,s.RENDERBUFFER,N.__webglColorRenderbuffer[ue])}s.bindRenderbuffer(s.RENDERBUFFER,null),w.depthBuffer&&(N.__webglDepthRenderbuffer=s.createRenderbuffer(),ae(N.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(X){t.bindTexture(s.TEXTURE_CUBE_MAP,W.__webglTexture),Ce(s.TEXTURE_CUBE_MAP,v);for(let ue=0;ue<6;ue++)if(v.mipmaps&&v.mipmaps.length>0)for(let Te=0;Te<v.mipmaps.length;Te++)Se(N.__webglFramebuffer[ue][Te],w,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Te);else Se(N.__webglFramebuffer[ue],w,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);m(v)&&f(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ee){for(let ue=0,Te=$.length;ue<Te;ue++){const nt=$[ue],oe=n.get(nt);t.bindTexture(s.TEXTURE_2D,oe.__webglTexture),Ce(s.TEXTURE_2D,nt),Se(N.__webglFramebuffer,w,nt,s.COLOR_ATTACHMENT0+ue,s.TEXTURE_2D,0),m(nt)&&f(s.TEXTURE_2D)}t.unbindTexture()}else{let ue=s.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ue=w.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ue,W.__webglTexture),Ce(ue,v),v.mipmaps&&v.mipmaps.length>0)for(let Te=0;Te<v.mipmaps.length;Te++)Se(N.__webglFramebuffer[Te],w,v,s.COLOR_ATTACHMENT0,ue,Te);else Se(N.__webglFramebuffer,w,v,s.COLOR_ATTACHMENT0,ue,0);m(v)&&f(ue),t.unbindTexture()}w.depthBuffer&&Oe(w)}function K(w){const v=w.textures;for(let N=0,W=v.length;N<W;N++){const $=v[N];if(m($)){const X=b(w),Ee=n.get($).__webglTexture;t.bindTexture(X,Ee),f(X),t.unbindTexture()}}}const se=[],R=[];function we(w){if(w.samples>0){if(ye(w)===!1){const v=w.textures,N=w.width,W=w.height;let $=s.COLOR_BUFFER_BIT;const X=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ee=n.get(w),ue=v.length>1;if(ue)for(let Te=0;Te<v.length;Te++)t.bindFramebuffer(s.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Te,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Ee.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Te,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let Te=0;Te<v.length;Te++){if(w.resolveDepthBuffer&&(w.depthBuffer&&($|=s.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&($|=s.STENCIL_BUFFER_BIT)),ue){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ee.__webglColorRenderbuffer[Te]);const nt=n.get(v[Te]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,nt,0)}s.blitFramebuffer(0,0,N,W,0,0,N,W,$,s.NEAREST),c===!0&&(se.length=0,R.length=0,se.push(s.COLOR_ATTACHMENT0+Te),w.depthBuffer&&w.resolveDepthBuffer===!1&&(se.push(X),R.push(X),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,R)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,se))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ue)for(let Te=0;Te<v.length;Te++){t.bindFramebuffer(s.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Te,s.RENDERBUFFER,Ee.__webglColorRenderbuffer[Te]);const nt=n.get(v[Te]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Ee.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Te,s.TEXTURE_2D,nt,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&c){const v=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[v])}}}function te(w){return Math.min(i.maxSamples,w.samples)}function ye(w){const v=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Z(w){const v=o.render.frame;h.get(w)!==v&&(h.set(w,v),w.update())}function _e(w,v){const N=w.colorSpace,W=w.format,$=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||N!==vn&&N!==ts&&(rt.getTransfer(N)===vt?(W!==Un||$!==Bi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),v}function he(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(l.width=w.naturalWidth||w.width,l.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(l.width=w.displayWidth,l.height=w.displayHeight):(l.width=w.width,l.height=w.height),l}this.allocateTextureUnit=O,this.resetTextureUnits=B,this.setTexture2D=j,this.setTexture2DArray=H,this.setTexture3D=Q,this.setTextureCube=V,this.rebindTextures=Be,this.setupRenderTarget=Je,this.updateRenderTargetMipmap=K,this.updateMultisampleRenderTarget=we,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=ye}function xv(s,e){function t(n,i=ts){let r;const o=rt.getTransfer(i);if(n===Bi)return s.UNSIGNED_BYTE;if(n===nh)return s.UNSIGNED_SHORT_4_4_4_4;if(n===ih)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Hd)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===zd)return s.BYTE;if(n===kd)return s.SHORT;if(n===Qr)return s.UNSIGNED_SHORT;if(n===th)return s.INT;if(n===Ss)return s.UNSIGNED_INT;if(n===Zn)return s.FLOAT;if(n===mo)return s.HALF_FLOAT;if(n===Vd)return s.ALPHA;if(n===Gd)return s.RGB;if(n===Un)return s.RGBA;if(n===Wd)return s.LUMINANCE;if(n===Xd)return s.LUMINANCE_ALPHA;if(n===Qs)return s.DEPTH_COMPONENT;if(n===ar)return s.DEPTH_STENCIL;if(n===sh)return s.RED;if(n===rh)return s.RED_INTEGER;if(n===qd)return s.RG;if(n===oh)return s.RG_INTEGER;if(n===ah)return s.RGBA_INTEGER;if(n===ra||n===oa||n===aa||n===ca)if(o===vt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ra)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===oa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===aa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ca)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ra)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===oa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===aa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ca)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===sl||n===rl||n===ol||n===al)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===sl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===rl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ol)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===al)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===cl||n===ll||n===hl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===cl||n===ll)return o===vt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===hl)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ul||n===dl||n===fl||n===pl||n===ml||n===gl||n===_l||n===xl||n===vl||n===yl||n===Ml||n===Sl||n===wl||n===bl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ul)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===dl)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===fl)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===pl)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ml)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===gl)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===_l)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===xl)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===vl)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===yl)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ml)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Sl)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===wl)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===bl)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===la||n===Tl||n===El)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===la)return o===vt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Tl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===El)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Yd||n===Al||n===Rl||n===Cl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===la)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Al)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Rl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Cl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===or?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}class vv extends xn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ze extends Lt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const yv={type:"move"};class Ac{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ze,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ze,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ze,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),f=this._getHandJoint(l,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;l.inputState.pinching&&d>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(yv)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ze;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Mv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Sv=`
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

}`;class wv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new Yt,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new _i({vertexShader:Mv,fragmentShader:Sv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new J(new Vt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class bv extends Es{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,p=null,g=null;const _=new wv,m=t.getContextAttributes();let f=null,b=null;const S=[],x=[],L=new re;let C=null;const P=new xn;P.viewport=new ht;const E=new xn;E.viewport=new ht;const y=[P,E],M=new vv;let I=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ie=S[Y];return ie===void 0&&(ie=new Ac,S[Y]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(Y){let ie=S[Y];return ie===void 0&&(ie=new Ac,S[Y]=ie),ie.getGripSpace()},this.getHand=function(Y){let ie=S[Y];return ie===void 0&&(ie=new Ac,S[Y]=ie),ie.getHandSpace()};function O(Y){const ie=x.indexOf(Y.inputSource);if(ie===-1)return;const Se=S[ie];Se!==void 0&&(Se.update(Y.inputSource,Y.frame,l||o),Se.dispatchEvent({type:Y.type,data:Y.inputSource}))}function G(){i.removeEventListener("select",O),i.removeEventListener("selectstart",O),i.removeEventListener("selectend",O),i.removeEventListener("squeeze",O),i.removeEventListener("squeezestart",O),i.removeEventListener("squeezeend",O),i.removeEventListener("end",G),i.removeEventListener("inputsourceschange",j);for(let Y=0;Y<S.length;Y++){const ie=x[Y];ie!==null&&(x[Y]=null,S[Y].disconnect(ie))}I=null,B=null,_.reset(),e.setRenderTarget(f),p=null,d=null,u=null,i=null,b=null,st.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(Y){if(i=Y,i!==null){if(f=e.getRenderTarget(),i.addEventListener("select",O),i.addEventListener("selectstart",O),i.addEventListener("selectend",O),i.addEventListener("squeeze",O),i.addEventListener("squeezestart",O),i.addEventListener("squeezeend",O),i.addEventListener("end",G),i.addEventListener("inputsourceschange",j),m.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(L),i.renderState.layers===void 0){const ie={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,t,ie),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),b=new ws(p.framebufferWidth,p.framebufferHeight,{format:Un,type:Bi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ie=null,Se=null,ae=null;m.depth&&(ae=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=m.stencil?ar:Qs,Se=m.stencil?or:Ss);const Pe={colorFormat:t.RGBA8,depthFormat:ae,scaleFactor:r};u=new XRWebGLBinding(i,t),d=u.createProjectionLayer(Pe),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new ws(d.textureWidth,d.textureHeight,{format:Un,type:Bi,depthTexture:new lf(d.textureWidth,d.textureHeight,Se,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),st.setContext(i),st.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function j(Y){for(let ie=0;ie<Y.removed.length;ie++){const Se=Y.removed[ie],ae=x.indexOf(Se);ae>=0&&(x[ae]=null,S[ae].disconnect(Se))}for(let ie=0;ie<Y.added.length;ie++){const Se=Y.added[ie];let ae=x.indexOf(Se);if(ae===-1){for(let Oe=0;Oe<S.length;Oe++)if(Oe>=x.length){x.push(Se),ae=Oe;break}else if(x[Oe]===null){x[Oe]=Se,ae=Oe;break}if(ae===-1)break}const Pe=S[ae];Pe&&Pe.connect(Se)}}const H=new A,Q=new A;function V(Y,ie,Se){H.setFromMatrixPosition(ie.matrixWorld),Q.setFromMatrixPosition(Se.matrixWorld);const ae=H.distanceTo(Q),Pe=ie.projectionMatrix.elements,Oe=Se.projectionMatrix.elements,Be=Pe[14]/(Pe[10]-1),Je=Pe[14]/(Pe[10]+1),K=(Pe[9]+1)/Pe[5],se=(Pe[9]-1)/Pe[5],R=(Pe[8]-1)/Pe[0],we=(Oe[8]+1)/Oe[0],te=Be*R,ye=Be*we,Z=ae/(-R+we),_e=Z*-R;if(ie.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(_e),Y.translateZ(Z),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Pe[10]===-1)Y.projectionMatrix.copy(ie.projectionMatrix),Y.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const he=Be+Z,w=Je+Z,v=te-_e,N=ye+(ae-_e),W=K*Je/w*he,$=se*Je/w*he;Y.projectionMatrix.makePerspective(v,N,W,$,he,w),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function le(Y,ie){ie===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(ie.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(i===null)return;let ie=Y.near,Se=Y.far;_.texture!==null&&(_.depthNear>0&&(ie=_.depthNear),_.depthFar>0&&(Se=_.depthFar)),M.near=E.near=P.near=ie,M.far=E.far=P.far=Se,(I!==M.near||B!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),I=M.near,B=M.far),P.layers.mask=Y.layers.mask|2,E.layers.mask=Y.layers.mask|4,M.layers.mask=P.layers.mask|E.layers.mask;const ae=Y.parent,Pe=M.cameras;le(M,ae);for(let Oe=0;Oe<Pe.length;Oe++)le(Pe[Oe],ae);Pe.length===2?V(M,P,E):M.projectionMatrix.copy(P.projectionMatrix),fe(Y,M,ae)};function fe(Y,ie,Se){Se===null?Y.matrix.copy(ie.matrixWorld):(Y.matrix.copy(Se.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(ie.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(ie.projectionMatrix),Y.projectionMatrixInverse.copy(ie.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=cr*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(Y){c=Y,d!==null&&(d.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let me=null;function Ce(Y,ie){if(h=ie.getViewerPose(l||o),g=ie,h!==null){const Se=h.views;p!==null&&(e.setRenderTargetFramebuffer(b,p.framebuffer),e.setRenderTarget(b));let ae=!1;Se.length!==M.cameras.length&&(M.cameras.length=0,ae=!0);for(let Oe=0;Oe<Se.length;Oe++){const Be=Se[Oe];let Je=null;if(p!==null)Je=p.getViewport(Be);else{const se=u.getViewSubImage(d,Be);Je=se.viewport,Oe===0&&(e.setRenderTargetTextures(b,se.colorTexture,d.ignoreDepthValues?void 0:se.depthStencilTexture),e.setRenderTarget(b))}let K=y[Oe];K===void 0&&(K=new xn,K.layers.enable(Oe),K.viewport=new ht,y[Oe]=K),K.matrix.fromArray(Be.transform.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale),K.projectionMatrix.fromArray(Be.projectionMatrix),K.projectionMatrixInverse.copy(K.projectionMatrix).invert(),K.viewport.set(Je.x,Je.y,Je.width,Je.height),Oe===0&&(M.matrix.copy(K.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ae===!0&&M.cameras.push(K)}const Pe=i.enabledFeatures;if(Pe&&Pe.includes("depth-sensing")){const Oe=u.getDepthInformation(Se[0]);Oe&&Oe.isValid&&Oe.texture&&_.init(e,Oe,i.renderState)}}for(let Se=0;Se<S.length;Se++){const ae=x[Se],Pe=S[Se];ae!==null&&Pe!==void 0&&Pe.update(ae,ie,l||o)}me&&me(Y,ie),ie.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ie}),g=null}const st=new cf;st.setAnimationLoop(Ce),this.setAnimationLoop=function(Y){me=Y},this.dispose=function(){}}}const ps=new gi,Tv=new Ye;function Ev(s,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,sf(s)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function i(m,f,b,S,x){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,x)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),_(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?c(m,f,b,S):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===fn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===fn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const b=e.get(f),S=b.envMap,x=b.envMapRotation;S&&(m.envMap.value=S,ps.copy(x),ps.x*=-1,ps.y*=-1,ps.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(ps.y*=-1,ps.z*=-1),m.envMapRotation.value.setFromMatrix4(Tv.makeRotationFromEuler(ps)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,b,S){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*b,m.scale.value=S*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,b){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===fn&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const b=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Av(s,e,t,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,S){const x=S.program;n.uniformBlockBinding(b,x)}function l(b,S){let x=i[b.id];x===void 0&&(g(b),x=h(b),i[b.id]=x,b.addEventListener("dispose",m));const L=S.program;n.updateUBOMapping(b,L);const C=e.render.frame;r[b.id]!==C&&(d(b),r[b.id]=C)}function h(b){const S=u();b.__bindingPointIndex=S;const x=s.createBuffer(),L=b.__size,C=b.usage;return s.bindBuffer(s.UNIFORM_BUFFER,x),s.bufferData(s.UNIFORM_BUFFER,L,C),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,S,x),x}function u(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){const S=i[b.id],x=b.uniforms,L=b.__cache;s.bindBuffer(s.UNIFORM_BUFFER,S);for(let C=0,P=x.length;C<P;C++){const E=Array.isArray(x[C])?x[C]:[x[C]];for(let y=0,M=E.length;y<M;y++){const I=E[y];if(p(I,C,y,L)===!0){const B=I.__offset,O=Array.isArray(I.value)?I.value:[I.value];let G=0;for(let j=0;j<O.length;j++){const H=O[j],Q=_(H);typeof H=="number"||typeof H=="boolean"?(I.__data[0]=H,s.bufferSubData(s.UNIFORM_BUFFER,B+G,I.__data)):H.isMatrix3?(I.__data[0]=H.elements[0],I.__data[1]=H.elements[1],I.__data[2]=H.elements[2],I.__data[3]=0,I.__data[4]=H.elements[3],I.__data[5]=H.elements[4],I.__data[6]=H.elements[5],I.__data[7]=0,I.__data[8]=H.elements[6],I.__data[9]=H.elements[7],I.__data[10]=H.elements[8],I.__data[11]=0):(H.toArray(I.__data,G),G+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,B,I.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(b,S,x,L){const C=b.value,P=S+"_"+x;if(L[P]===void 0)return typeof C=="number"||typeof C=="boolean"?L[P]=C:L[P]=C.clone(),!0;{const E=L[P];if(typeof C=="number"||typeof C=="boolean"){if(E!==C)return L[P]=C,!0}else if(E.equals(C)===!1)return E.copy(C),!0}return!1}function g(b){const S=b.uniforms;let x=0;const L=16;for(let P=0,E=S.length;P<E;P++){const y=Array.isArray(S[P])?S[P]:[S[P]];for(let M=0,I=y.length;M<I;M++){const B=y[M],O=Array.isArray(B.value)?B.value:[B.value];for(let G=0,j=O.length;G<j;G++){const H=O[G],Q=_(H),V=x%L,le=V%Q.boundary,fe=V+le;x+=le,fe!==0&&L-fe<Q.storage&&(x+=L-fe),B.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=x,x+=Q.storage}}}const C=x%L;return C>0&&(x+=L-C),b.__size=x,b.__cache={},this}function _(b){const S={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(S.boundary=4,S.storage=4):b.isVector2?(S.boundary=8,S.storage=8):b.isVector3||b.isColor?(S.boundary=16,S.storage=12):b.isVector4?(S.boundary=16,S.storage=16):b.isMatrix3?(S.boundary=48,S.storage=48):b.isMatrix4?(S.boundary=64,S.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),S}function m(b){const S=b.target;S.removeEventListener("dispose",m);const x=o.indexOf(S.__bindingPointIndex);o.splice(x,1),s.deleteBuffer(i[S.id]),delete i[S.id],delete r[S.id]}function f(){for(const b in i)s.deleteBuffer(i[b]);o=[],i={},r={}}return{bind:c,update:l,dispose:f}}class Rv{constructor(e={}){const{canvas:t=_m(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,f=null;const b=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Nt,this.toneMapping=ss,this.toneMappingExposure=1;const x=this;let L=!1,C=0,P=0,E=null,y=-1,M=null;const I=new ht,B=new ht;let O=null;const G=new Fe(0);let j=0,H=t.width,Q=t.height,V=1,le=null,fe=null;const me=new ht(0,0,H,Q),Ce=new ht(0,0,H,Q);let st=!1;const Y=new dh;let ie=!1,Se=!1;const ae=new Ye,Pe=new Ye,Oe=new A,Be=new ht,Je={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let K=!1;function se(){return E===null?V:1}let R=n;function we(T,U){return t.getContext(T,U)}try{const T={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${eh}`),t.addEventListener("webglcontextlost",ne,!1),t.addEventListener("webglcontextrestored",Me,!1),t.addEventListener("webglcontextcreationerror",xe,!1),R===null){const U="webgl2";if(R=we(U,T),R===null)throw we(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let te,ye,Z,_e,he,w,v,N,W,$,X,Ee,ue,Te,nt,oe,Ae,He,Ge,Re,ot,Qe,Mt,D;function ge(){te=new D_(R),te.init(),Qe=new xv(R,te),ye=new A_(R,te,e,Qe),Z=new mv(R,te),ye.reverseDepthBuffer&&d&&Z.buffers.depth.setReversed(!0),_e=new F_(R),he=new ev,w=new _v(R,te,Z,he,ye,Qe,_e),v=new C_(x),N=new L_(x),W=new Gm(R),Mt=new T_(R,W),$=new N_(R,W,_e,Mt),X=new B_(R,$,W,_e),Ge=new O_(R,ye,w),oe=new R_(he),Ee=new Qx(x,v,N,te,ye,Mt,oe),ue=new Ev(x,he),Te=new nv,nt=new cv(te),He=new b_(x,v,N,Z,X,p,c),Ae=new fv(x,X,ye),D=new Av(R,_e,ye,Z),Re=new E_(R,te,_e),ot=new U_(R,te,_e),_e.programs=Ee.programs,x.capabilities=ye,x.extensions=te,x.properties=he,x.renderLists=Te,x.shadowMap=Ae,x.state=Z,x.info=_e}ge();const q=new bv(x,R);this.xr=q,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const T=te.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=te.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(T){T!==void 0&&(V=T,this.setSize(H,Q,!1))},this.getSize=function(T){return T.set(H,Q)},this.setSize=function(T,U,z=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=T,Q=U,t.width=Math.floor(T*V),t.height=Math.floor(U*V),z===!0&&(t.style.width=T+"px",t.style.height=U+"px"),this.setViewport(0,0,T,U)},this.getDrawingBufferSize=function(T){return T.set(H*V,Q*V).floor()},this.setDrawingBufferSize=function(T,U,z){H=T,Q=U,V=z,t.width=Math.floor(T*z),t.height=Math.floor(U*z),this.setViewport(0,0,T,U)},this.getCurrentViewport=function(T){return T.copy(I)},this.getViewport=function(T){return T.copy(me)},this.setViewport=function(T,U,z,k){T.isVector4?me.set(T.x,T.y,T.z,T.w):me.set(T,U,z,k),Z.viewport(I.copy(me).multiplyScalar(V).round())},this.getScissor=function(T){return T.copy(Ce)},this.setScissor=function(T,U,z,k){T.isVector4?Ce.set(T.x,T.y,T.z,T.w):Ce.set(T,U,z,k),Z.scissor(B.copy(Ce).multiplyScalar(V).round())},this.getScissorTest=function(){return st},this.setScissorTest=function(T){Z.setScissorTest(st=T)},this.setOpaqueSort=function(T){le=T},this.setTransparentSort=function(T){fe=T},this.getClearColor=function(T){return T.copy(He.getClearColor())},this.setClearColor=function(){He.setClearColor.apply(He,arguments)},this.getClearAlpha=function(){return He.getClearAlpha()},this.setClearAlpha=function(){He.setClearAlpha.apply(He,arguments)},this.clear=function(T=!0,U=!0,z=!0){let k=0;if(T){let F=!1;if(E!==null){const ce=E.texture.format;F=ce===ah||ce===oh||ce===rh}if(F){const ce=E.texture.type,ve=ce===Bi||ce===Ss||ce===Qr||ce===or||ce===nh||ce===ih,Ie=He.getClearColor(),Le=He.getClearAlpha(),Xe=Ie.r,Ke=Ie.g,De=Ie.b;ve?(g[0]=Xe,g[1]=Ke,g[2]=De,g[3]=Le,R.clearBufferuiv(R.COLOR,0,g)):(_[0]=Xe,_[1]=Ke,_[2]=De,_[3]=Le,R.clearBufferiv(R.COLOR,0,_))}else k|=R.COLOR_BUFFER_BIT}U&&(k|=R.DEPTH_BUFFER_BIT),z&&(k|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ne,!1),t.removeEventListener("webglcontextrestored",Me,!1),t.removeEventListener("webglcontextcreationerror",xe,!1),Te.dispose(),nt.dispose(),he.dispose(),v.dispose(),N.dispose(),X.dispose(),Mt.dispose(),D.dispose(),Ee.dispose(),q.dispose(),q.removeEventListener("sessionstart",Hh),q.removeEventListener("sessionend",Vh),cs.stop()};function ne(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function Me(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const T=_e.autoReset,U=Ae.enabled,z=Ae.autoUpdate,k=Ae.needsUpdate,F=Ae.type;ge(),_e.autoReset=T,Ae.enabled=U,Ae.autoUpdate=z,Ae.needsUpdate=k,Ae.type=F}function xe(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function je(T){const U=T.target;U.removeEventListener("dispose",je),Bt(U)}function Bt(T){cn(T),he.remove(T)}function cn(T){const U=he.get(T).programs;U!==void 0&&(U.forEach(function(z){Ee.releaseProgram(z)}),T.isShaderMaterial&&Ee.releaseShaderCache(T))}this.renderBufferDirect=function(T,U,z,k,F,ce){U===null&&(U=Je);const ve=F.isMesh&&F.matrixWorld.determinant()<0,Ie=lp(T,U,z,k,F);Z.setMaterial(k,ve);let Le=z.index,Xe=1;if(k.wireframe===!0){if(Le=$.getWireframeAttribute(z),Le===void 0)return;Xe=2}const Ke=z.drawRange,De=z.attributes.position;let ct=Ke.start*Xe,St=(Ke.start+Ke.count)*Xe;ce!==null&&(ct=Math.max(ct,ce.start*Xe),St=Math.min(St,(ce.start+ce.count)*Xe)),Le!==null?(ct=Math.max(ct,0),St=Math.min(St,Le.count)):De!=null&&(ct=Math.max(ct,0),St=Math.min(St,De.count));const Et=St-ct;if(Et<0||Et===1/0)return;Mt.setup(F,k,Ie,z,Le);let yn,ut=Re;if(Le!==null&&(yn=W.get(Le),ut=ot,ut.setIndex(yn)),F.isMesh)k.wireframe===!0?(Z.setLineWidth(k.wireframeLinewidth*se()),ut.setMode(R.LINES)):ut.setMode(R.TRIANGLES);else if(F.isLine){let Ue=k.linewidth;Ue===void 0&&(Ue=1),Z.setLineWidth(Ue*se()),F.isLineSegments?ut.setMode(R.LINES):F.isLineLoop?ut.setMode(R.LINE_LOOP):ut.setMode(R.LINE_STRIP)}else F.isPoints?ut.setMode(R.POINTS):F.isSprite&&ut.setMode(R.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)ut.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(te.get("WEBGL_multi_draw"))ut.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Ue=F._multiDrawStarts,Si=F._multiDrawCounts,dt=F._multiDrawCount,Hn=Le?W.get(Le).bytesPerElement:1,Rs=he.get(k).currentProgram.getUniforms();for(let wn=0;wn<dt;wn++)Rs.setValue(R,"_gl_DrawID",wn),ut.render(Ue[wn]/Hn,Si[wn])}else if(F.isInstancedMesh)ut.renderInstances(ct,Et,F.count);else if(z.isInstancedBufferGeometry){const Ue=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,Si=Math.min(z.instanceCount,Ue);ut.renderInstances(ct,Et,Si)}else ut.render(ct,Et)};function gt(T,U,z){T.transparent===!0&&T.side===Qt&&T.forceSinglePass===!1?(T.side=fn,T.needsUpdate=!0,To(T,U,z),T.side=Oi,T.needsUpdate=!0,To(T,U,z),T.side=Qt):To(T,U,z)}this.compile=function(T,U,z=null){z===null&&(z=T),f=nt.get(z),f.init(U),S.push(f),z.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(f.pushLight(F),F.castShadow&&f.pushShadow(F))}),T!==z&&T.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(f.pushLight(F),F.castShadow&&f.pushShadow(F))}),f.setupLights();const k=new Set;return T.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const ce=F.material;if(ce)if(Array.isArray(ce))for(let ve=0;ve<ce.length;ve++){const Ie=ce[ve];gt(Ie,z,F),k.add(Ie)}else gt(ce,z,F),k.add(ce)}),S.pop(),f=null,k},this.compileAsync=function(T,U,z=null){const k=this.compile(T,U,z);return new Promise(F=>{function ce(){if(k.forEach(function(ve){he.get(ve).currentProgram.isReady()&&k.delete(ve)}),k.size===0){F(T);return}setTimeout(ce,10)}te.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let kn=null;function Mi(T){kn&&kn(T)}function Hh(){cs.stop()}function Vh(){cs.start()}const cs=new cf;cs.setAnimationLoop(Mi),typeof self<"u"&&cs.setContext(self),this.setAnimationLoop=function(T){kn=T,q.setAnimationLoop(T),T===null?cs.stop():cs.start()},q.addEventListener("sessionstart",Hh),q.addEventListener("sessionend",Vh),this.render=function(T,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(U),U=q.getCamera()),T.isScene===!0&&T.onBeforeRender(x,T,U,E),f=nt.get(T,S.length),f.init(U),S.push(f),Pe.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Y.setFromProjectionMatrix(Pe),Se=this.localClippingEnabled,ie=oe.init(this.clippingPlanes,Se),m=Te.get(T,b.length),m.init(),b.push(m),q.enabled===!0&&q.isPresenting===!0){const ce=x.xr.getDepthSensingMesh();ce!==null&&Qa(ce,U,-1/0,x.sortObjects)}Qa(T,U,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(le,fe),K=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,K&&He.addToRenderList(m,T),this.info.render.frame++,ie===!0&&oe.beginShadows();const z=f.state.shadowsArray;Ae.render(z,T,U),ie===!0&&oe.endShadows(),this.info.autoReset===!0&&this.info.reset();const k=m.opaque,F=m.transmissive;if(f.setupLights(),U.isArrayCamera){const ce=U.cameras;if(F.length>0)for(let ve=0,Ie=ce.length;ve<Ie;ve++){const Le=ce[ve];Wh(k,F,T,Le)}K&&He.render(T);for(let ve=0,Ie=ce.length;ve<Ie;ve++){const Le=ce[ve];Gh(m,T,Le,Le.viewport)}}else F.length>0&&Wh(k,F,T,U),K&&He.render(T),Gh(m,T,U);E!==null&&(w.updateMultisampleRenderTarget(E),w.updateRenderTargetMipmap(E)),T.isScene===!0&&T.onAfterRender(x,T,U),Mt.resetDefaultState(),y=-1,M=null,S.pop(),S.length>0?(f=S[S.length-1],ie===!0&&oe.setGlobalState(x.clippingPlanes,f.state.camera)):f=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function Qa(T,U,z,k){if(T.visible===!1)return;if(T.layers.test(U.layers)){if(T.isGroup)z=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(U);else if(T.isLight)f.pushLight(T),T.castShadow&&f.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Y.intersectsSprite(T)){k&&Be.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Pe);const ve=X.update(T),Ie=T.material;Ie.visible&&m.push(T,ve,Ie,z,Be.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Y.intersectsObject(T))){const ve=X.update(T),Ie=T.material;if(k&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Be.copy(T.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),Be.copy(ve.boundingSphere.center)),Be.applyMatrix4(T.matrixWorld).applyMatrix4(Pe)),Array.isArray(Ie)){const Le=ve.groups;for(let Xe=0,Ke=Le.length;Xe<Ke;Xe++){const De=Le[Xe],ct=Ie[De.materialIndex];ct&&ct.visible&&m.push(T,ve,ct,z,Be.z,De)}}else Ie.visible&&m.push(T,ve,Ie,z,Be.z,null)}}const ce=T.children;for(let ve=0,Ie=ce.length;ve<Ie;ve++)Qa(ce[ve],U,z,k)}function Gh(T,U,z,k){const F=T.opaque,ce=T.transmissive,ve=T.transparent;f.setupLightsView(z),ie===!0&&oe.setGlobalState(x.clippingPlanes,z),k&&Z.viewport(I.copy(k)),F.length>0&&bo(F,U,z),ce.length>0&&bo(ce,U,z),ve.length>0&&bo(ve,U,z),Z.buffers.depth.setTest(!0),Z.buffers.depth.setMask(!0),Z.buffers.color.setMask(!0),Z.setPolygonOffset(!1)}function Wh(T,U,z,k){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[k.id]===void 0&&(f.state.transmissionRenderTarget[k.id]=new ws(1,1,{generateMipmaps:!0,type:te.has("EXT_color_buffer_half_float")||te.has("EXT_color_buffer_float")?mo:Bi,minFilter:Li,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:rt.workingColorSpace}));const ce=f.state.transmissionRenderTarget[k.id],ve=k.viewport||I;ce.setSize(ve.z,ve.w);const Ie=x.getRenderTarget();x.setRenderTarget(ce),x.getClearColor(G),j=x.getClearAlpha(),j<1&&x.setClearColor(16777215,.5),x.clear(),K&&He.render(z);const Le=x.toneMapping;x.toneMapping=ss;const Xe=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),f.setupLightsView(k),ie===!0&&oe.setGlobalState(x.clippingPlanes,k),bo(T,z,k),w.updateMultisampleRenderTarget(ce),w.updateRenderTargetMipmap(ce),te.has("WEBGL_multisampled_render_to_texture")===!1){let Ke=!1;for(let De=0,ct=U.length;De<ct;De++){const St=U[De],Et=St.object,yn=St.geometry,ut=St.material,Ue=St.group;if(ut.side===Qt&&Et.layers.test(k.layers)){const Si=ut.side;ut.side=fn,ut.needsUpdate=!0,Xh(Et,z,k,yn,ut,Ue),ut.side=Si,ut.needsUpdate=!0,Ke=!0}}Ke===!0&&(w.updateMultisampleRenderTarget(ce),w.updateRenderTargetMipmap(ce))}x.setRenderTarget(Ie),x.setClearColor(G,j),Xe!==void 0&&(k.viewport=Xe),x.toneMapping=Le}function bo(T,U,z){const k=U.isScene===!0?U.overrideMaterial:null;for(let F=0,ce=T.length;F<ce;F++){const ve=T[F],Ie=ve.object,Le=ve.geometry,Xe=k===null?ve.material:k,Ke=ve.group;Ie.layers.test(z.layers)&&Xh(Ie,U,z,Le,Xe,Ke)}}function Xh(T,U,z,k,F,ce){T.onBeforeRender(x,U,z,k,F,ce),T.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),F.onBeforeRender(x,U,z,k,T,ce),F.transparent===!0&&F.side===Qt&&F.forceSinglePass===!1?(F.side=fn,F.needsUpdate=!0,x.renderBufferDirect(z,U,k,F,T,ce),F.side=Oi,F.needsUpdate=!0,x.renderBufferDirect(z,U,k,F,T,ce),F.side=Qt):x.renderBufferDirect(z,U,k,F,T,ce),T.onAfterRender(x,U,z,k,F,ce)}function To(T,U,z){U.isScene!==!0&&(U=Je);const k=he.get(T),F=f.state.lights,ce=f.state.shadowsArray,ve=F.state.version,Ie=Ee.getParameters(T,F.state,ce,U,z),Le=Ee.getProgramCacheKey(Ie);let Xe=k.programs;k.environment=T.isMeshStandardMaterial?U.environment:null,k.fog=U.fog,k.envMap=(T.isMeshStandardMaterial?N:v).get(T.envMap||k.environment),k.envMapRotation=k.environment!==null&&T.envMap===null?U.environmentRotation:T.envMapRotation,Xe===void 0&&(T.addEventListener("dispose",je),Xe=new Map,k.programs=Xe);let Ke=Xe.get(Le);if(Ke!==void 0){if(k.currentProgram===Ke&&k.lightsStateVersion===ve)return Yh(T,Ie),Ke}else Ie.uniforms=Ee.getUniforms(T),T.onBeforeCompile(Ie,x),Ke=Ee.acquireProgram(Ie,Le),Xe.set(Le,Ke),k.uniforms=Ie.uniforms;const De=k.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(De.clippingPlanes=oe.uniform),Yh(T,Ie),k.needsLights=up(T),k.lightsStateVersion=ve,k.needsLights&&(De.ambientLightColor.value=F.state.ambient,De.lightProbe.value=F.state.probe,De.directionalLights.value=F.state.directional,De.directionalLightShadows.value=F.state.directionalShadow,De.spotLights.value=F.state.spot,De.spotLightShadows.value=F.state.spotShadow,De.rectAreaLights.value=F.state.rectArea,De.ltc_1.value=F.state.rectAreaLTC1,De.ltc_2.value=F.state.rectAreaLTC2,De.pointLights.value=F.state.point,De.pointLightShadows.value=F.state.pointShadow,De.hemisphereLights.value=F.state.hemi,De.directionalShadowMap.value=F.state.directionalShadowMap,De.directionalShadowMatrix.value=F.state.directionalShadowMatrix,De.spotShadowMap.value=F.state.spotShadowMap,De.spotLightMatrix.value=F.state.spotLightMatrix,De.spotLightMap.value=F.state.spotLightMap,De.pointShadowMap.value=F.state.pointShadowMap,De.pointShadowMatrix.value=F.state.pointShadowMatrix),k.currentProgram=Ke,k.uniformsList=null,Ke}function qh(T){if(T.uniformsList===null){const U=T.currentProgram.getUniforms();T.uniformsList=ha.seqWithValue(U.seq,T.uniforms)}return T.uniformsList}function Yh(T,U){const z=he.get(T);z.outputColorSpace=U.outputColorSpace,z.batching=U.batching,z.batchingColor=U.batchingColor,z.instancing=U.instancing,z.instancingColor=U.instancingColor,z.instancingMorph=U.instancingMorph,z.skinning=U.skinning,z.morphTargets=U.morphTargets,z.morphNormals=U.morphNormals,z.morphColors=U.morphColors,z.morphTargetsCount=U.morphTargetsCount,z.numClippingPlanes=U.numClippingPlanes,z.numIntersection=U.numClipIntersection,z.vertexAlphas=U.vertexAlphas,z.vertexTangents=U.vertexTangents,z.toneMapping=U.toneMapping}function lp(T,U,z,k,F){U.isScene!==!0&&(U=Je),w.resetTextureUnits();const ce=U.fog,ve=k.isMeshStandardMaterial?U.environment:null,Ie=E===null?x.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:vn,Le=(k.isMeshStandardMaterial?N:v).get(k.envMap||ve),Xe=k.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Ke=!!z.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),De=!!z.morphAttributes.position,ct=!!z.morphAttributes.normal,St=!!z.morphAttributes.color;let Et=ss;k.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(Et=x.toneMapping);const yn=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,ut=yn!==void 0?yn.length:0,Ue=he.get(k),Si=f.state.lights;if(ie===!0&&(Se===!0||T!==M)){const Cn=T===M&&k.id===y;oe.setState(k,T,Cn)}let dt=!1;k.version===Ue.__version?(Ue.needsLights&&Ue.lightsStateVersion!==Si.state.version||Ue.outputColorSpace!==Ie||F.isBatchedMesh&&Ue.batching===!1||!F.isBatchedMesh&&Ue.batching===!0||F.isBatchedMesh&&Ue.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Ue.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Ue.instancing===!1||!F.isInstancedMesh&&Ue.instancing===!0||F.isSkinnedMesh&&Ue.skinning===!1||!F.isSkinnedMesh&&Ue.skinning===!0||F.isInstancedMesh&&Ue.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Ue.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Ue.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Ue.instancingMorph===!1&&F.morphTexture!==null||Ue.envMap!==Le||k.fog===!0&&Ue.fog!==ce||Ue.numClippingPlanes!==void 0&&(Ue.numClippingPlanes!==oe.numPlanes||Ue.numIntersection!==oe.numIntersection)||Ue.vertexAlphas!==Xe||Ue.vertexTangents!==Ke||Ue.morphTargets!==De||Ue.morphNormals!==ct||Ue.morphColors!==St||Ue.toneMapping!==Et||Ue.morphTargetsCount!==ut)&&(dt=!0):(dt=!0,Ue.__version=k.version);let Hn=Ue.currentProgram;dt===!0&&(Hn=To(k,U,F));let Rs=!1,wn=!1,wr=!1;const At=Hn.getUniforms(),oi=Ue.uniforms;if(Z.useProgram(Hn.program)&&(Rs=!0,wn=!0,wr=!0),k.id!==y&&(y=k.id,wn=!0),Rs||M!==T){Z.buffers.depth.getReversed()?(ae.copy(T.projectionMatrix),vm(ae),ym(ae),At.setValue(R,"projectionMatrix",ae)):At.setValue(R,"projectionMatrix",T.projectionMatrix),At.setValue(R,"viewMatrix",T.matrixWorldInverse);const Gi=At.map.cameraPosition;Gi!==void 0&&Gi.setValue(R,Oe.setFromMatrixPosition(T.matrixWorld)),ye.logarithmicDepthBuffer&&At.setValue(R,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&At.setValue(R,"isOrthographic",T.isOrthographicCamera===!0),M!==T&&(M=T,wn=!0,wr=!0)}if(F.isSkinnedMesh){At.setOptional(R,F,"bindMatrix"),At.setOptional(R,F,"bindMatrixInverse");const Cn=F.skeleton;Cn&&(Cn.boneTexture===null&&Cn.computeBoneTexture(),At.setValue(R,"boneTexture",Cn.boneTexture,w))}F.isBatchedMesh&&(At.setOptional(R,F,"batchingTexture"),At.setValue(R,"batchingTexture",F._matricesTexture,w),At.setOptional(R,F,"batchingIdTexture"),At.setValue(R,"batchingIdTexture",F._indirectTexture,w),At.setOptional(R,F,"batchingColorTexture"),F._colorsTexture!==null&&At.setValue(R,"batchingColorTexture",F._colorsTexture,w));const br=z.morphAttributes;if((br.position!==void 0||br.normal!==void 0||br.color!==void 0)&&Ge.update(F,z,Hn),(wn||Ue.receiveShadow!==F.receiveShadow)&&(Ue.receiveShadow=F.receiveShadow,At.setValue(R,"receiveShadow",F.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(oi.envMap.value=Le,oi.flipEnvMap.value=Le.isCubeTexture&&Le.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&U.environment!==null&&(oi.envMapIntensity.value=U.environmentIntensity),wn&&(At.setValue(R,"toneMappingExposure",x.toneMappingExposure),Ue.needsLights&&hp(oi,wr),ce&&k.fog===!0&&ue.refreshFogUniforms(oi,ce),ue.refreshMaterialUniforms(oi,k,V,Q,f.state.transmissionRenderTarget[T.id]),ha.upload(R,qh(Ue),oi,w)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(ha.upload(R,qh(Ue),oi,w),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&At.setValue(R,"center",F.center),At.setValue(R,"modelViewMatrix",F.modelViewMatrix),At.setValue(R,"normalMatrix",F.normalMatrix),At.setValue(R,"modelMatrix",F.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const Cn=k.uniformsGroups;for(let Gi=0,Wi=Cn.length;Gi<Wi;Gi++){const jh=Cn[Gi];D.update(jh,Hn),D.bind(jh,Hn)}}return Hn}function hp(T,U){T.ambientLightColor.needsUpdate=U,T.lightProbe.needsUpdate=U,T.directionalLights.needsUpdate=U,T.directionalLightShadows.needsUpdate=U,T.pointLights.needsUpdate=U,T.pointLightShadows.needsUpdate=U,T.spotLights.needsUpdate=U,T.spotLightShadows.needsUpdate=U,T.rectAreaLights.needsUpdate=U,T.hemisphereLights.needsUpdate=U}function up(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(T,U,z){he.get(T.texture).__webglTexture=U,he.get(T.depthTexture).__webglTexture=z;const k=he.get(T);k.__hasExternalTextures=!0,k.__autoAllocateDepthBuffer=z===void 0,k.__autoAllocateDepthBuffer||te.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,U){const z=he.get(T);z.__webglFramebuffer=U,z.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(T,U=0,z=0){E=T,C=U,P=z;let k=!0,F=null,ce=!1,ve=!1;if(T){const Le=he.get(T);if(Le.__useDefaultFramebuffer!==void 0)Z.bindFramebuffer(R.FRAMEBUFFER,null),k=!1;else if(Le.__webglFramebuffer===void 0)w.setupRenderTarget(T);else if(Le.__hasExternalTextures)w.rebindTextures(T,he.get(T.texture).__webglTexture,he.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const De=T.depthTexture;if(Le.__boundDepthTexture!==De){if(De!==null&&he.has(De)&&(T.width!==De.image.width||T.height!==De.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(T)}}const Xe=T.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(ve=!0);const Ke=he.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ke[U])?F=Ke[U][z]:F=Ke[U],ce=!0):T.samples>0&&w.useMultisampledRTT(T)===!1?F=he.get(T).__webglMultisampledFramebuffer:Array.isArray(Ke)?F=Ke[z]:F=Ke,I.copy(T.viewport),B.copy(T.scissor),O=T.scissorTest}else I.copy(me).multiplyScalar(V).floor(),B.copy(Ce).multiplyScalar(V).floor(),O=st;if(Z.bindFramebuffer(R.FRAMEBUFFER,F)&&k&&Z.drawBuffers(T,F),Z.viewport(I),Z.scissor(B),Z.setScissorTest(O),ce){const Le=he.get(T.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+U,Le.__webglTexture,z)}else if(ve){const Le=he.get(T.texture),Xe=U||0;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,Le.__webglTexture,z||0,Xe)}y=-1},this.readRenderTargetPixels=function(T,U,z,k,F,ce,ve){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=he.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ve!==void 0&&(Ie=Ie[ve]),Ie){Z.bindFramebuffer(R.FRAMEBUFFER,Ie);try{const Le=T.texture,Xe=Le.format,Ke=Le.type;if(!ye.textureFormatReadable(Xe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ye.textureTypeReadable(Ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=T.width-k&&z>=0&&z<=T.height-F&&R.readPixels(U,z,k,F,Qe.convert(Xe),Qe.convert(Ke),ce)}finally{const Le=E!==null?he.get(E).__webglFramebuffer:null;Z.bindFramebuffer(R.FRAMEBUFFER,Le)}}},this.readRenderTargetPixelsAsync=async function(T,U,z,k,F,ce,ve){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=he.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ve!==void 0&&(Ie=Ie[ve]),Ie){const Le=T.texture,Xe=Le.format,Ke=Le.type;if(!ye.textureFormatReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ye.textureTypeReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=T.width-k&&z>=0&&z<=T.height-F){Z.bindFramebuffer(R.FRAMEBUFFER,Ie);const De=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,De),R.bufferData(R.PIXEL_PACK_BUFFER,ce.byteLength,R.STREAM_READ),R.readPixels(U,z,k,F,Qe.convert(Xe),Qe.convert(Ke),0);const ct=E!==null?he.get(E).__webglFramebuffer:null;Z.bindFramebuffer(R.FRAMEBUFFER,ct);const St=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await xm(R,St,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,De),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,ce),R.deleteBuffer(De),R.deleteSync(St),ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,U=null,z=0){T.isTexture!==!0&&(zr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,T=arguments[1]);const k=Math.pow(2,-z),F=Math.floor(T.image.width*k),ce=Math.floor(T.image.height*k),ve=U!==null?U.x:0,Ie=U!==null?U.y:0;w.setTexture2D(T,0),R.copyTexSubImage2D(R.TEXTURE_2D,z,0,0,ve,Ie,F,ce),Z.unbindTexture()},this.copyTextureToTexture=function(T,U,z=null,k=null,F=0){T.isTexture!==!0&&(zr("WebGLRenderer: copyTextureToTexture function signature has changed."),k=arguments[0]||null,T=arguments[1],U=arguments[2],F=arguments[3]||0,z=null);let ce,ve,Ie,Le,Xe,Ke,De,ct,St;const Et=T.isCompressedTexture?T.mipmaps[F]:T.image;z!==null?(ce=z.max.x-z.min.x,ve=z.max.y-z.min.y,Ie=z.isBox3?z.max.z-z.min.z:1,Le=z.min.x,Xe=z.min.y,Ke=z.isBox3?z.min.z:0):(ce=Et.width,ve=Et.height,Ie=Et.depth||1,Le=0,Xe=0,Ke=0),k!==null?(De=k.x,ct=k.y,St=k.z):(De=0,ct=0,St=0);const yn=Qe.convert(U.format),ut=Qe.convert(U.type);let Ue;U.isData3DTexture?(w.setTexture3D(U,0),Ue=R.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(w.setTexture2DArray(U,0),Ue=R.TEXTURE_2D_ARRAY):(w.setTexture2D(U,0),Ue=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,U.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,U.unpackAlignment);const Si=R.getParameter(R.UNPACK_ROW_LENGTH),dt=R.getParameter(R.UNPACK_IMAGE_HEIGHT),Hn=R.getParameter(R.UNPACK_SKIP_PIXELS),Rs=R.getParameter(R.UNPACK_SKIP_ROWS),wn=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,Et.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Et.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Le),R.pixelStorei(R.UNPACK_SKIP_ROWS,Xe),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Ke);const wr=T.isDataArrayTexture||T.isData3DTexture,At=U.isDataArrayTexture||U.isData3DTexture;if(T.isRenderTargetTexture||T.isDepthTexture){const oi=he.get(T),br=he.get(U),Cn=he.get(oi.__renderTarget),Gi=he.get(br.__renderTarget);Z.bindFramebuffer(R.READ_FRAMEBUFFER,Cn.__webglFramebuffer),Z.bindFramebuffer(R.DRAW_FRAMEBUFFER,Gi.__webglFramebuffer);for(let Wi=0;Wi<Ie;Wi++)wr&&R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,he.get(T).__webglTexture,F,Ke+Wi),T.isDepthTexture?(At&&R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,he.get(U).__webglTexture,F,St+Wi),R.blitFramebuffer(Le,Xe,ce,ve,De,ct,ce,ve,R.DEPTH_BUFFER_BIT,R.NEAREST)):At?R.copyTexSubImage3D(Ue,F,De,ct,St+Wi,Le,Xe,ce,ve):R.copyTexSubImage2D(Ue,F,De,ct,St+Wi,Le,Xe,ce,ve);Z.bindFramebuffer(R.READ_FRAMEBUFFER,null),Z.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else At?T.isDataTexture||T.isData3DTexture?R.texSubImage3D(Ue,F,De,ct,St,ce,ve,Ie,yn,ut,Et.data):U.isCompressedArrayTexture?R.compressedTexSubImage3D(Ue,F,De,ct,St,ce,ve,Ie,yn,Et.data):R.texSubImage3D(Ue,F,De,ct,St,ce,ve,Ie,yn,ut,Et):T.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,F,De,ct,ce,ve,yn,ut,Et.data):T.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,F,De,ct,Et.width,Et.height,yn,Et.data):R.texSubImage2D(R.TEXTURE_2D,F,De,ct,ce,ve,yn,ut,Et);R.pixelStorei(R.UNPACK_ROW_LENGTH,Si),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,dt),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Hn),R.pixelStorei(R.UNPACK_SKIP_ROWS,Rs),R.pixelStorei(R.UNPACK_SKIP_IMAGES,wn),F===0&&U.generateMipmaps&&R.generateMipmap(Ue),Z.unbindTexture()},this.copyTextureToTexture3D=function(T,U,z=null,k=null,F=0){return T.isTexture!==!0&&(zr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,k=arguments[1]||null,T=arguments[2],U=arguments[3],F=arguments[4]||0),zr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,U,z,k,F)},this.initRenderTarget=function(T){he.get(T).__webglFramebuffer===void 0&&w.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?w.setTextureCube(T,0):T.isData3DTexture?w.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?w.setTexture2DArray(T,0):w.setTexture2D(T,0),Z.unbindTexture()},this.resetState=function(){C=0,P=0,E=null,Z.reset(),Mt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=rt._getDrawingBufferColorSpace(e),t.unpackColorSpace=rt._getUnpackColorSpace()}}class pf extends Lt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new gi,this.environmentIntensity=1,this.environmentRotation=new gi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Cv{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Il,this.updateRanges=[],this.version=0,this.uuid=On()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=On()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=On()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const gn=new A;class mh{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)gn.fromBufferAttribute(this,t),gn.applyMatrix4(e),this.setXYZ(t,gn.x,gn.y,gn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)gn.fromBufferAttribute(this,t),gn.applyNormalMatrix(e),this.setXYZ(t,gn.x,gn.y,gn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)gn.fromBufferAttribute(this,t),gn.transformDirection(e),this.setXYZ(t,gn.x,gn.y,gn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Yn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=_t(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Yn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Yn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Yn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Yn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array),i=_t(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array),i=_t(i,this.array),r=_t(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new nn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new mh(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const qu=new A,Yu=new ht,ju=new ht,Pv=new A,Ku=new Ye,qo=new A,Rc=new xi,Zu=new Ye,Cc=new go;class Iv extends J{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Jh,this.bindMatrix=new Ye,this.bindMatrixInverse=new Ye,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Hi),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,qo),this.boundingBox.expandByPoint(qo)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new xi),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,qo),this.boundingSphere.expandByPoint(qo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Rc.copy(this.boundingSphere),Rc.applyMatrix4(i),e.ray.intersectsSphere(Rc)!==!1&&(Zu.copy(i).invert(),Cc.copy(e.ray).applyMatrix4(Zu),!(this.boundingBox!==null&&Cc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Cc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new ht,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Jh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===kp?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Yu.fromBufferAttribute(i.attributes.skinIndex,e),ju.fromBufferAttribute(i.attributes.skinWeight,e),qu.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=ju.getComponent(r);if(o!==0){const a=Yu.getComponent(r);Ku.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Pv.copy(qu).applyMatrix4(Ku),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class mf extends Lt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class gh extends Yt{constructor(e=null,t=1,n=1,i,r,o,a,c,l=pn,h=pn,u,d){super(null,o,a,c,l,h,i,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const $u=new Ye,Lv=new Ye;class _h{constructor(e=[],t=[]){this.uuid=On(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ye)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ye;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:Lv;$u.multiplyMatrices(a,t[r]),$u.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new _h(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new gh(t,e,e,Un,Zn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new mf),this.bones.push(o),this.boneInverses.push(new Ye().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class Nl extends nn{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Gs=new Ye,Ju=new Ye,Yo=[],Qu=new Hi,Dv=new Ye,Cr=new J,Pr=new xi;class Nv extends J{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Nl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Dv)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Hi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Gs),Qu.copy(e.boundingBox).applyMatrix4(Gs),this.boundingBox.union(Qu)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new xi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Gs),Pr.copy(e.boundingSphere).applyMatrix4(Gs),this.boundingSphere.union(Pr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Cr.geometry=this.geometry,Cr.material=this.material,Cr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Pr.copy(this.boundingSphere),Pr.applyMatrix4(n),e.ray.intersectsSphere(Pr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Gs),Ju.multiplyMatrices(n,Gs),Cr.matrixWorld=Ju,Cr.raycast(e,Yo);for(let o=0,a=Yo.length;o<a;o++){const c=Yo[o];c.instanceId=r,c.object=this,t.push(c)}Yo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Nl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new gh(new Float32Array(i*this.count),i,this.count,sh,Zn));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=i*e;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class xh extends Jn{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Fe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Sa=new A,wa=new A,ed=new Ye,Ir=new go,jo=new xi,Pc=new A,td=new A;class vh extends Lt{constructor(e=new Wt,t=new xh){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Sa.fromBufferAttribute(t,i-1),wa.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Sa.distanceTo(wa);e.setAttribute("lineDistance",new Tt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),jo.copy(n.boundingSphere),jo.applyMatrix4(i),jo.radius+=r,e.ray.intersectsSphere(jo)===!1)return;ed.copy(i).invert(),Ir.copy(e.ray).applyMatrix4(ed);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const p=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=l){const f=h.getX(_),b=h.getX(_+1),S=Ko(this,e,Ir,c,f,b);S&&t.push(S)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(p),f=Ko(this,e,Ir,c,_,m);f&&t.push(f)}}else{const p=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=l){const f=Ko(this,e,Ir,c,_,_+1);f&&t.push(f)}if(this.isLineLoop){const _=Ko(this,e,Ir,c,g-1,p);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Ko(s,e,t,n,i,r){const o=s.geometry.attributes.position;if(Sa.fromBufferAttribute(o,i),wa.fromBufferAttribute(o,r),t.distanceSqToSegment(Sa,wa,Pc,td)>n)return;Pc.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(Pc);if(!(c<e.near||c>e.far))return{distance:c,point:td.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}const nd=new A,id=new A;class gf extends vh{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)nd.fromBufferAttribute(t,i),id.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+nd.distanceTo(id);e.setAttribute("lineDistance",new Tt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Uv extends vh{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class _o extends Jn{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Fe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const sd=new Ye,Ul=new go,Zo=new xi,$o=new A;class Oa extends Lt{constructor(e=new Wt,t=new _o){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Zo.copy(n.boundingSphere),Zo.applyMatrix4(i),Zo.radius+=r,e.ray.intersectsSphere(Zo)===!1)return;sd.copy(i).invert(),Ul.copy(e.ray).applyMatrix4(sd);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){const d=Math.max(0,o.start),p=Math.min(l.count,o.start+o.count);for(let g=d,_=p;g<_;g++){const m=l.getX(g);$o.fromBufferAttribute(u,m),rd($o,m,c,i,e,t,this)}}else{const d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let g=d,_=p;g<_;g++)$o.fromBufferAttribute(u,g),rd($o,g,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function rd(s,e,t,n,i,r,o){const a=Ul.distanceSqToPoint(s);if(a<t){const c=new A;Ul.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class _r extends Yt{constructor(e,t,n,i,r,o,a,c,l){super(e,t,n,i,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class vi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-o,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===o)return i/(r-1);const h=n[i],d=n[i+1]-h,p=(o-h)/d;return(i+p)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),c=t||(o.isVector2?new re:new A);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new A,i=[],r=[],o=[],a=new A,c=new Ye;for(let p=0;p<=e;p++){const g=p/e;i[p]=this.getTangentAt(g,new A)}r[0]=new A,o[0]=new A;let l=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(i[p-1],i[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Jt(i[p-1].dot(i[p]),-1,1));r[p].applyMatrix4(c.makeRotationAxis(a,g))}o[p].crossVectors(i[p],r[p])}if(t===!0){let p=Math.acos(Jt(r[0].dot(r[e]),-1,1));p/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(p=-p);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(i[g],p*g)),o[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class yh extends vi{constructor(e=0,t=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new re){const n=t,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+e*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,p=l-this.aY;c=d*h-p*u+this.aX,l=d*u+p*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Fv extends yh{constructor(e,t,n,i,r,o){super(e,t,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Mh(){let s=0,e=0,t=0,n=0;function i(r,o,a,c){s=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){i(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let d=(o-r)/l-(a-r)/(l+h)+(a-o)/h,p=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,p*=h,i(o,a,d,p)},calc:function(r){const o=r*r,a=o*r;return s+e*r+t*o+n*a}}}const Jo=new A,Ic=new Mh,Lc=new Mh,Dc=new Mh;class _f extends vi{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new A){const n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=i[(a-1)%r]:(Jo.subVectors(i[0],i[1]).add(i[0]),l=Jo);const u=i[a%r],d=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(Jo.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Jo),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(u),p),_=Math.pow(u.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(h),p);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Ic.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,_,m),Lc.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,_,m),Dc.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(Ic.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),Lc.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),Dc.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(Ic.calc(c),Lc.calc(c),Dc.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new A().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function od(s,e,t,n,i){const r=(n-e)*.5,o=(i-t)*.5,a=s*s,c=s*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*s+t}function Ov(s,e){const t=1-s;return t*t*e}function Bv(s,e){return 2*(1-s)*s*e}function zv(s,e){return s*s*e}function Wr(s,e,t,n){return Ov(s,e)+Bv(s,t)+zv(s,n)}function kv(s,e){const t=1-s;return t*t*t*e}function Hv(s,e){const t=1-s;return 3*t*t*s*e}function Vv(s,e){return 3*(1-s)*s*s*e}function Gv(s,e){return s*s*s*e}function Xr(s,e,t,n,i){return kv(s,e)+Hv(s,t)+Vv(s,n)+Gv(s,i)}class xf extends vi{constructor(e=new re,t=new re,n=new re,i=new re){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new re){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Xr(e,i.x,r.x,o.x,a.x),Xr(e,i.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Wv extends vi{constructor(e=new A,t=new A,n=new A,i=new A){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new A){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Xr(e,i.x,r.x,o.x,a.x),Xr(e,i.y,r.y,o.y,a.y),Xr(e,i.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class vf extends vi{constructor(e=new re,t=new re){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new re){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new re){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Xv extends vi{constructor(e=new A,t=new A){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new A){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new A){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class yf extends vi{constructor(e=new re,t=new re,n=new re){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new re){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(Wr(e,i.x,r.x,o.x),Wr(e,i.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Mf extends vi{constructor(e=new A,t=new A,n=new A){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new A){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(Wr(e,i.x,r.x,o.x),Wr(e,i.y,r.y,o.y),Wr(e,i.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Sf extends vi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new re){const n=t,i=this.points,r=(i.length-1)*e,o=Math.floor(r),a=r-o,c=i[o===0?o:o-1],l=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(od(a,c.x,l.x,h.x,u.x),od(a,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new re().fromArray(i))}return this}}var ba=Object.freeze({__proto__:null,ArcCurve:Fv,CatmullRomCurve3:_f,CubicBezierCurve:xf,CubicBezierCurve3:Wv,EllipseCurve:yh,LineCurve:vf,LineCurve3:Xv,QuadraticBezierCurve:yf,QuadraticBezierCurve3:Mf,SplineCurve:Sf});class qv extends vi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ba[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const o=i[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const o=r[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new ba[i.type]().fromJSON(i))}return this}}class Ta extends qv{constructor(e){super(),this.type="Path",this.currentPoint=new re,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new vf(this.currentPoint.clone(),new re(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const r=new yf(this.currentPoint.clone(),new re(e,t),new re(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,o){const a=new xf(this.currentPoint.clone(),new re(e,t),new re(n,i),new re(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Sf(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,i,r,o),this}absarc(e,t,n,i,r,o){return this.absellipse(e,t,n,n,i,r,o),this}ellipse(e,t,n,i,r,o,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,i,r,o,a,c),this}absellipse(e,t,n,i,r,o,a,c){const l=new yh(e,t,n,i,r,o,a,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Ui extends Wt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const r=[],o=[],a=[],c=[],l=new A,h=new re;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){const p=n+u/t*i;l.x=e*Math.cos(p),l.y=e*Math.sin(p),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Tt(o,3)),this.setAttribute("normal",new Tt(a,3)),this.setAttribute("uv",new Tt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ui(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Pt extends Wt{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],d=[],p=[];let g=0;const _=[],m=n/2;let f=0;b(),o===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new Tt(u,3)),this.setAttribute("normal",new Tt(d,3)),this.setAttribute("uv",new Tt(p,2));function b(){const x=new A,L=new A;let C=0;const P=(t-e)/n;for(let E=0;E<=r;E++){const y=[],M=E/r,I=M*(t-e)+e;for(let B=0;B<=i;B++){const O=B/i,G=O*c+a,j=Math.sin(G),H=Math.cos(G);L.x=I*j,L.y=-M*n+m,L.z=I*H,u.push(L.x,L.y,L.z),x.set(j,P,H).normalize(),d.push(x.x,x.y,x.z),p.push(O,1-M),y.push(g++)}_.push(y)}for(let E=0;E<i;E++)for(let y=0;y<r;y++){const M=_[y][E],I=_[y+1][E],B=_[y+1][E+1],O=_[y][E+1];(e>0||y!==0)&&(h.push(M,I,O),C+=3),(t>0||y!==r-1)&&(h.push(I,B,O),C+=3)}l.addGroup(f,C,0),f+=C}function S(x){const L=g,C=new re,P=new A;let E=0;const y=x===!0?e:t,M=x===!0?1:-1;for(let B=1;B<=i;B++)u.push(0,m*M,0),d.push(0,M,0),p.push(.5,.5),g++;const I=g;for(let B=0;B<=i;B++){const G=B/i*c+a,j=Math.cos(G),H=Math.sin(G);P.x=y*H,P.y=m*M,P.z=y*j,u.push(P.x,P.y,P.z),d.push(0,M,0),C.x=j*.5+.5,C.y=H*.5*M+.5,p.push(C.x,C.y),g++}for(let B=0;B<i;B++){const O=L+B,G=I+B;x===!0?h.push(G,G+1,O):h.push(G+1,G,O),E+=3}l.addGroup(f,E,x===!0?1:2),f+=E}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class io extends Pt{constructor(e=1,t=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new io(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ea extends Ta{constructor(e){super(e),this.uuid=On(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new Ta().fromJSON(i))}return this}}const Yv={triangulate:function(s,e,t=2){const n=e&&e.length,i=n?e[0]*t:s.length;let r=wf(s,0,i,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,u,d,p;if(n&&(r=Jv(s,e,r,t)),s.length>80*t){a=l=s[0],c=h=s[1];for(let g=t;g<i;g+=t)u=s[g],d=s[g+1],u<a&&(a=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);p=Math.max(l-a,h-c),p=p!==0?32767/p:0}return so(r,o,t,a,c,p,0),o}};function wf(s,e,t,n,i){let r,o;if(i===ly(s,e,t,n)>0)for(r=e;r<t;r+=n)o=ad(r,s[r],s[r+1],o);else for(r=t-n;r>=e;r-=n)o=ad(r,s[r],s[r+1],o);return o&&Ba(o,o.next)&&(oo(o),o=o.next),o}function bs(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(Ba(t,t.next)||Ut(t.prev,t,t.next)===0)){if(oo(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function so(s,e,t,n,i,r,o){if(!s)return;!o&&r&&iy(s,n,i,r);let a=s,c,l;for(;s.prev!==s.next;){if(c=s.prev,l=s.next,r?Kv(s,n,i,r):jv(s)){e.push(c.i/t|0),e.push(s.i/t|0),e.push(l.i/t|0),oo(s),s=l.next,a=l.next;continue}if(s=l,s===a){o?o===1?(s=Zv(bs(s),e,t),so(s,e,t,n,i,r,2)):o===2&&$v(s,e,t,n,i,r):so(bs(s),e,t,n,i,r,1);break}}}function jv(s){const e=s.prev,t=s,n=s.next;if(Ut(e,t,n)>=0)return!1;const i=e.x,r=t.x,o=n.x,a=e.y,c=t.y,l=n.y,h=i<r?i<o?i:o:r<o?r:o,u=a<c?a<l?a:l:c<l?c:l,d=i>r?i>o?i:o:r>o?r:o,p=a>c?a>l?a:l:c>l?c:l;let g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=p&&Ks(i,a,r,c,o,l,g.x,g.y)&&Ut(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Kv(s,e,t,n){const i=s.prev,r=s,o=s.next;if(Ut(i,r,o)>=0)return!1;const a=i.x,c=r.x,l=o.x,h=i.y,u=r.y,d=o.y,p=a<c?a<l?a:l:c<l?c:l,g=h<u?h<d?h:d:u<d?u:d,_=a>c?a>l?a:l:c>l?c:l,m=h>u?h>d?h:d:u>d?u:d,f=Fl(p,g,e,t,n),b=Fl(_,m,e,t,n);let S=s.prevZ,x=s.nextZ;for(;S&&S.z>=f&&x&&x.z<=b;){if(S.x>=p&&S.x<=_&&S.y>=g&&S.y<=m&&S!==i&&S!==o&&Ks(a,h,c,u,l,d,S.x,S.y)&&Ut(S.prev,S,S.next)>=0||(S=S.prevZ,x.x>=p&&x.x<=_&&x.y>=g&&x.y<=m&&x!==i&&x!==o&&Ks(a,h,c,u,l,d,x.x,x.y)&&Ut(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;S&&S.z>=f;){if(S.x>=p&&S.x<=_&&S.y>=g&&S.y<=m&&S!==i&&S!==o&&Ks(a,h,c,u,l,d,S.x,S.y)&&Ut(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;x&&x.z<=b;){if(x.x>=p&&x.x<=_&&x.y>=g&&x.y<=m&&x!==i&&x!==o&&Ks(a,h,c,u,l,d,x.x,x.y)&&Ut(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function Zv(s,e,t){let n=s;do{const i=n.prev,r=n.next.next;!Ba(i,r)&&bf(i,n,n.next,r)&&ro(i,r)&&ro(r,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),oo(n),oo(n.next),n=s=r),n=n.next}while(n!==s);return bs(n)}function $v(s,e,t,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&oy(o,a)){let c=Tf(o,a);o=bs(o,o.next),c=bs(c,c.next),so(o,e,t,n,i,r,0),so(c,e,t,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function Jv(s,e,t,n){const i=[];let r,o,a,c,l;for(r=0,o=e.length;r<o;r++)a=e[r]*n,c=r<o-1?e[r+1]*n:s.length,l=wf(s,a,c,n,!1),l===l.next&&(l.steiner=!0),i.push(ry(l));for(i.sort(Qv),r=0;r<i.length;r++)t=ey(i[r],t);return t}function Qv(s,e){return s.x-e.x}function ey(s,e){const t=ty(s,e);if(!t)return e;const n=Tf(t,s);return bs(n,n.next),bs(t,t.next)}function ty(s,e){let t=e,n=-1/0,i;const r=s.x,o=s.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const d=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=r&&d>n&&(n=d,i=t.x<t.next.x?t:t.next,d===r))return i}t=t.next}while(t!==e);if(!i)return null;const a=i,c=i.x,l=i.y;let h=1/0,u;t=i;do r>=t.x&&t.x>=c&&r!==t.x&&Ks(o<l?r:n,o,c,l,o<l?n:r,o,t.x,t.y)&&(u=Math.abs(o-t.y)/(r-t.x),ro(t,s)&&(u<h||u===h&&(t.x>i.x||t.x===i.x&&ny(i,t)))&&(i=t,h=u)),t=t.next;while(t!==a);return i}function ny(s,e){return Ut(s.prev,s,e.prev)<0&&Ut(e.next,s,s.next)<0}function iy(s,e,t,n){let i=s;do i.z===0&&(i.z=Fl(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,sy(i)}function sy(s){let e,t,n,i,r,o,a,c,l=1;do{for(t=s,s=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<l&&(a++,n=n.nextZ,!!n);e++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,a--):(i=n,n=n.nextZ,c--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;t=n}r.nextZ=null,l*=2}while(o>1);return s}function Fl(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function ry(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function Ks(s,e,t,n,i,r,o,a){return(i-o)*(e-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(i-o)*(n-a)}function oy(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!ay(s,e)&&(ro(s,e)&&ro(e,s)&&cy(s,e)&&(Ut(s.prev,s,e.prev)||Ut(s,e.prev,e))||Ba(s,e)&&Ut(s.prev,s,s.next)>0&&Ut(e.prev,e,e.next)>0)}function Ut(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function Ba(s,e){return s.x===e.x&&s.y===e.y}function bf(s,e,t,n){const i=ea(Ut(s,e,t)),r=ea(Ut(s,e,n)),o=ea(Ut(t,n,s)),a=ea(Ut(t,n,e));return!!(i!==r&&o!==a||i===0&&Qo(s,t,e)||r===0&&Qo(s,n,e)||o===0&&Qo(t,s,n)||a===0&&Qo(t,e,n))}function Qo(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function ea(s){return s>0?1:s<0?-1:0}function ay(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&bf(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function ro(s,e){return Ut(s.prev,s,s.next)<0?Ut(s,e,s.next)>=0&&Ut(s,s.prev,e)>=0:Ut(s,e,s.prev)<0||Ut(s,s.next,e)<0}function cy(s,e){let t=s,n=!1;const i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function Tf(s,e){const t=new Ol(s.i,s.x,s.y),n=new Ol(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function ad(s,e,t,n){const i=new Ol(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function oo(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Ol(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function ly(s,e,t,n){let i=0;for(let r=e,o=t-n;r<t;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}class qr{static area(e){const t=e.length;let n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return qr.area(e)<0}static triangulateShape(e,t){const n=[],i=[],r=[];cd(e),ld(n,e);let o=e.length;t.forEach(cd);for(let c=0;c<t.length;c++)i.push(o),o+=t[c].length,ld(n,t[c]);const a=Yv.triangulate(n,i);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function cd(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function ld(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class ao extends Wt{constructor(e=new Ea([new re(.5,.5),new re(-.5,.5),new re(-.5,-.5),new re(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],r=[];for(let a=0,c=e.length;a<c;a++){const l=e[a];o(l)}this.setAttribute("position",new Tt(i,3)),this.setAttribute("uv",new Tt(r,2)),this.computeVertexNormals();function o(a){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1;let d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:p-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const f=t.extrudePath,b=t.UVGenerator!==void 0?t.UVGenerator:hy;let S,x=!1,L,C,P,E;f&&(S=f.getSpacedPoints(h),x=!0,d=!1,L=f.computeFrenetFrames(h,!1),C=new A,P=new A,E=new A),d||(m=0,p=0,g=0,_=0);const y=a.extractPoints(l);let M=y.shape;const I=y.holes;if(!qr.isClockWise(M)){M=M.reverse();for(let K=0,se=I.length;K<se;K++){const R=I[K];qr.isClockWise(R)&&(I[K]=R.reverse())}}const O=qr.triangulateShape(M,I),G=M;for(let K=0,se=I.length;K<se;K++){const R=I[K];M=M.concat(R)}function j(K,se,R){return se||console.error("THREE.ExtrudeGeometry: vec does not exist"),K.clone().addScaledVector(se,R)}const H=M.length,Q=O.length;function V(K,se,R){let we,te,ye;const Z=K.x-se.x,_e=K.y-se.y,he=R.x-K.x,w=R.y-K.y,v=Z*Z+_e*_e,N=Z*w-_e*he;if(Math.abs(N)>Number.EPSILON){const W=Math.sqrt(v),$=Math.sqrt(he*he+w*w),X=se.x-_e/W,Ee=se.y+Z/W,ue=R.x-w/$,Te=R.y+he/$,nt=((ue-X)*w-(Te-Ee)*he)/(Z*w-_e*he);we=X+Z*nt-K.x,te=Ee+_e*nt-K.y;const oe=we*we+te*te;if(oe<=2)return new re(we,te);ye=Math.sqrt(oe/2)}else{let W=!1;Z>Number.EPSILON?he>Number.EPSILON&&(W=!0):Z<-Number.EPSILON?he<-Number.EPSILON&&(W=!0):Math.sign(_e)===Math.sign(w)&&(W=!0),W?(we=-_e,te=Z,ye=Math.sqrt(v)):(we=Z,te=_e,ye=Math.sqrt(v/2))}return new re(we/ye,te/ye)}const le=[];for(let K=0,se=G.length,R=se-1,we=K+1;K<se;K++,R++,we++)R===se&&(R=0),we===se&&(we=0),le[K]=V(G[K],G[R],G[we]);const fe=[];let me,Ce=le.concat();for(let K=0,se=I.length;K<se;K++){const R=I[K];me=[];for(let we=0,te=R.length,ye=te-1,Z=we+1;we<te;we++,ye++,Z++)ye===te&&(ye=0),Z===te&&(Z=0),me[we]=V(R[we],R[ye],R[Z]);fe.push(me),Ce=Ce.concat(me)}for(let K=0;K<m;K++){const se=K/m,R=p*Math.cos(se*Math.PI/2),we=g*Math.sin(se*Math.PI/2)+_;for(let te=0,ye=G.length;te<ye;te++){const Z=j(G[te],le[te],we);ae(Z.x,Z.y,-R)}for(let te=0,ye=I.length;te<ye;te++){const Z=I[te];me=fe[te];for(let _e=0,he=Z.length;_e<he;_e++){const w=j(Z[_e],me[_e],we);ae(w.x,w.y,-R)}}}const st=g+_;for(let K=0;K<H;K++){const se=d?j(M[K],Ce[K],st):M[K];x?(P.copy(L.normals[0]).multiplyScalar(se.x),C.copy(L.binormals[0]).multiplyScalar(se.y),E.copy(S[0]).add(P).add(C),ae(E.x,E.y,E.z)):ae(se.x,se.y,0)}for(let K=1;K<=h;K++)for(let se=0;se<H;se++){const R=d?j(M[se],Ce[se],st):M[se];x?(P.copy(L.normals[K]).multiplyScalar(R.x),C.copy(L.binormals[K]).multiplyScalar(R.y),E.copy(S[K]).add(P).add(C),ae(E.x,E.y,E.z)):ae(R.x,R.y,u/h*K)}for(let K=m-1;K>=0;K--){const se=K/m,R=p*Math.cos(se*Math.PI/2),we=g*Math.sin(se*Math.PI/2)+_;for(let te=0,ye=G.length;te<ye;te++){const Z=j(G[te],le[te],we);ae(Z.x,Z.y,u+R)}for(let te=0,ye=I.length;te<ye;te++){const Z=I[te];me=fe[te];for(let _e=0,he=Z.length;_e<he;_e++){const w=j(Z[_e],me[_e],we);x?ae(w.x,w.y+S[h-1].y,S[h-1].x+R):ae(w.x,w.y,u+R)}}}Y(),ie();function Y(){const K=i.length/3;if(d){let se=0,R=H*se;for(let we=0;we<Q;we++){const te=O[we];Pe(te[2]+R,te[1]+R,te[0]+R)}se=h+m*2,R=H*se;for(let we=0;we<Q;we++){const te=O[we];Pe(te[0]+R,te[1]+R,te[2]+R)}}else{for(let se=0;se<Q;se++){const R=O[se];Pe(R[2],R[1],R[0])}for(let se=0;se<Q;se++){const R=O[se];Pe(R[0]+H*h,R[1]+H*h,R[2]+H*h)}}n.addGroup(K,i.length/3-K,0)}function ie(){const K=i.length/3;let se=0;Se(G,se),se+=G.length;for(let R=0,we=I.length;R<we;R++){const te=I[R];Se(te,se),se+=te.length}n.addGroup(K,i.length/3-K,1)}function Se(K,se){let R=K.length;for(;--R>=0;){const we=R;let te=R-1;te<0&&(te=K.length-1);for(let ye=0,Z=h+m*2;ye<Z;ye++){const _e=H*ye,he=H*(ye+1),w=se+we+_e,v=se+te+_e,N=se+te+he,W=se+we+he;Oe(w,v,N,W)}}}function ae(K,se,R){c.push(K),c.push(se),c.push(R)}function Pe(K,se,R){Be(K),Be(se),Be(R);const we=i.length/3,te=b.generateTopUV(n,i,we-3,we-2,we-1);Je(te[0]),Je(te[1]),Je(te[2])}function Oe(K,se,R,we){Be(K),Be(se),Be(we),Be(se),Be(R),Be(we);const te=i.length/3,ye=b.generateSideWallUV(n,i,te-6,te-3,te-2,te-1);Je(ye[0]),Je(ye[1]),Je(ye[3]),Je(ye[1]),Je(ye[2]),Je(ye[3])}function Be(K){i.push(c[K*3+0]),i.push(c[K*3+1]),i.push(c[K*3+2])}function Je(K){r.push(K.x),r.push(K.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return uy(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];n.push(a)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new ba[i.type]().fromJSON(i)),new ao(n,e.options)}}const hy={generateTopUV:function(s,e,t,n,i){const r=e[t*3],o=e[t*3+1],a=e[n*3],c=e[n*3+1],l=e[i*3],h=e[i*3+1];return[new re(r,o),new re(a,c),new re(l,h)]},generateSideWallUV:function(s,e,t,n,i,r){const o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[i*3],p=e[i*3+1],g=e[i*3+2],_=e[r*3],m=e[r*3+1],f=e[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new re(o,1-c),new re(l,1-u),new re(d,1-g),new re(_,1-f)]:[new re(a,1-c),new re(h,1-u),new re(p,1-g),new re(m,1-f)]}};function uy(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class It extends Wt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new A,d=new A,p=[],g=[],_=[],m=[];for(let f=0;f<=n;f++){const b=[],S=f/n;let x=0;f===0&&o===0?x=.5/t:f===n&&c===Math.PI&&(x=-.5/t);for(let L=0;L<=t;L++){const C=L/t;u.x=-e*Math.cos(i+C*r)*Math.sin(o+S*a),u.y=e*Math.cos(o+S*a),u.z=e*Math.sin(i+C*r)*Math.sin(o+S*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(C+x,1-S),b.push(l++)}h.push(b)}for(let f=0;f<n;f++)for(let b=0;b<t;b++){const S=h[f][b+1],x=h[f][b],L=h[f+1][b],C=h[f+1][b+1];(f!==0||o>0)&&p.push(S,x,C),(f!==n-1||c<Math.PI)&&p.push(x,L,C)}this.setIndex(p),this.setAttribute("position",new Tt(g,3)),this.setAttribute("normal",new Tt(_,3)),this.setAttribute("uv",new Tt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new It(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class os extends Wt{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],c=[],l=[],h=new A,u=new A,d=new A;for(let p=0;p<=n;p++)for(let g=0;g<=i;g++){const _=g/i*r,m=p/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(_),u.y=(e+t*Math.cos(m))*Math.sin(_),u.z=t*Math.sin(m),a.push(u.x,u.y,u.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(g/i),l.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=i;g++){const _=(i+1)*p+g-1,m=(i+1)*(p-1)+g-1,f=(i+1)*(p-1)+g,b=(i+1)*p+g;o.push(_,m,b),o.push(m,f,b)}this.setIndex(o),this.setAttribute("position",new Tt(a,3)),this.setAttribute("normal",new Tt(c,3)),this.setAttribute("uv",new Tt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new os(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Sh extends Wt{constructor(e=new Mf(new A(-1,-1,0),new A(-1,1,0),new A(1,1,0)),t=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:r};const o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new A,c=new A,l=new re;let h=new A;const u=[],d=[],p=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new Tt(u,3)),this.setAttribute("normal",new Tt(d,3)),this.setAttribute("uv",new Tt(p,2));function _(){for(let S=0;S<t;S++)m(S);m(r===!1?t:0),b(),f()}function m(S){h=e.getPointAt(S/t,h);const x=o.normals[S],L=o.binormals[S];for(let C=0;C<=i;C++){const P=C/i*Math.PI*2,E=Math.sin(P),y=-Math.cos(P);c.x=y*x.x+E*L.x,c.y=y*x.y+E*L.y,c.z=y*x.z+E*L.z,c.normalize(),d.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,u.push(a.x,a.y,a.z)}}function f(){for(let S=1;S<=t;S++)for(let x=1;x<=i;x++){const L=(i+1)*(S-1)+(x-1),C=(i+1)*S+(x-1),P=(i+1)*S+x,E=(i+1)*(S-1)+x;g.push(L,C,E),g.push(C,P,E)}}function b(){for(let S=0;S<=t;S++)for(let x=0;x<=i;x++)l.x=S/t,l.y=x/i,p.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Sh(new ba[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class at extends Jn{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Fe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=lh,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Gt extends at{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new re(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Jt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Fe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Fe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Fe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class dy extends Jn{static get type(){return"MeshToonMaterial"}constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.color=new Fe(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=lh,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}function ta(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function fy(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function py(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function hd(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let c=0;c!==e;++c)i[o++]=s[a+c]}return i}function Ef(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}class xo{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class my extends xo{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:qs,endingEnd:qs}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,o=e+1,a=i[r],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Ys:r=e,a=2*t-n;break;case ya:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Ys:o=e,c=2*n-t;break;case ya:o=1,c=n+i[1]-i[0];break;default:o=e-1,c=t}const l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(n-t)/(i-t),_=g*g,m=_*g,f=-d*m+2*d*_-d*g,b=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,S=(-1-p)*m+(1.5+p)*_+.5*g,x=p*m-p*_;for(let L=0;L!==a;++L)r[L]=f*o[h+L]+b*o[l+L]+S*o[c+L]+x*o[u+L];return r}}class Af extends xo{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[l+d]*u+o[c+d]*h;return r}}class gy extends xo{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class yi{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ta(t,this.TimeBufferType),this.values=ta(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ta(e.times,Array),values:ta(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new gy(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Af(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new my(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case eo:t=this.InterpolantFactoryMethodDiscrete;break;case to:t=this.InterpolantFactoryMethodLinear;break;case ec:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return eo;case this.InterpolantFactoryMethodLinear:return to;case this.InterpolantFactoryMethodSmooth:return ec}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(i!==void 0&&fy(i))for(let a=0,c=i.length;a!==c;++a){const l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===ec,r=e.length-1;let o=1;for(let a=1;a<r;++a){let c=!1;const l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(i)c=!0;else{const u=a*n,d=u-n,p=u+n;for(let g=0;g!==n;++g){const _=t[u+g];if(_!==t[d+g]||_!==t[p+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];const u=a*n,d=o*n;for(let p=0;p!==n;++p)t[d+p]=t[u+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}yi.prototype.TimeBufferType=Float32Array;yi.prototype.ValueBufferType=Float32Array;yi.prototype.DefaultInterpolation=to;class xr extends yi{constructor(e,t,n){super(e,t,n)}}xr.prototype.ValueTypeName="bool";xr.prototype.ValueBufferType=Array;xr.prototype.DefaultInterpolation=eo;xr.prototype.InterpolantFactoryMethodLinear=void 0;xr.prototype.InterpolantFactoryMethodSmooth=void 0;class Rf extends yi{}Rf.prototype.ValueTypeName="color";class hr extends yi{}hr.prototype.ValueTypeName="number";class _y extends xo{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(i-t);let l=e*a;for(let h=l+a;l!==h;l+=4)$n.slerpFlat(r,0,o,l-a,o,l,c);return r}}class ur extends yi{InterpolantFactoryMethodLinear(e){return new _y(this.times,this.values,this.getValueSize(),e)}}ur.prototype.ValueTypeName="quaternion";ur.prototype.InterpolantFactoryMethodSmooth=void 0;class vr extends yi{constructor(e,t,n){super(e,t,n)}}vr.prototype.ValueTypeName="string";vr.prototype.ValueBufferType=Array;vr.prototype.DefaultInterpolation=eo;vr.prototype.InterpolantFactoryMethodLinear=void 0;vr.prototype.InterpolantFactoryMethodSmooth=void 0;class dr extends yi{}dr.prototype.ValueTypeName="vector";class Bl{constructor(e="",t=-1,n=[],i=ch){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=On(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(vy(n[o]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(yi.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);const h=py(c);c=hd(c,1,h),l=hd(l,1,h),!i&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new hr(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){const l=e[a],h=l.name.match(r);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(l)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,p,g,_){if(p.length!==0){const m=[],f=[];Ef(p,m,f,g),m.length!==0&&_.push(new u(d,m,f))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let u=0;u<l.length;u++){const d=l[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const p={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)p[d[g].morphTargets[_]]=-1;for(const _ in p){const m=[],f=[];for(let b=0;b!==d[g].morphTargets.length;++b){const S=d[g];m.push(S.time),f.push(S.morphTarget===_?1:0)}i.push(new hr(".morphTargetInfluence["+_+"]",m,f))}c=p.length*o}else{const p=".bones["+t[u].name+"]";n(dr,p+".position",d,"pos",i),n(ur,p+".quaternion",d,"rot",i),n(dr,p+".scale",d,"scl",i)}}return i.length===0?null:new this(r,c,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function xy(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return hr;case"vector":case"vector2":case"vector3":case"vector4":return dr;case"color":return Rf;case"quaternion":return ur;case"bool":case"boolean":return xr;case"string":return vr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function vy(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=xy(s.type);if(s.times===void 0){const t=[],n=[];Ef(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const ns={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class yy{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){const p=l[u],g=l[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}}const My=new yy;class yr{constructor(e){this.manager=e!==void 0?e:My,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}yr.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ri={};class Sy extends Error{constructor(e,t){super(e),this.response=t}}class Cf extends yr{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=ns.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Ri[e]!==void 0){Ri[e].push({onLoad:t,onProgress:n,onError:i});return}Ri[e]=[],Ri[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=Ri[e],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),p=d?parseInt(d):0,g=p!==0;let _=0;const m=new ReadableStream({start(f){b();function b(){u.read().then(({done:S,value:x})=>{if(S)f.close();else{_+=x.byteLength;const L=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:p});for(let C=0,P=h.length;C<P;C++){const E=h[C];E.onProgress&&E.onProgress(L)}f.enqueue(x),b()}},S=>{f.error(S)})}}});return new Response(m)}else throw new Sy(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a===void 0)return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,p=new TextDecoder(d);return l.arrayBuffer().then(g=>p.decode(g))}}}).then(l=>{ns.add(e,l);const h=Ri[e];delete Ri[e];for(let u=0,d=h.length;u<d;u++){const p=h[u];p.onLoad&&p.onLoad(l)}}).catch(l=>{const h=Ri[e];if(h===void 0)throw this.manager.itemError(e),l;delete Ri[e];for(let u=0,d=h.length;u<d;u++){const p=h[u];p.onError&&p.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class wy extends yr{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=ns.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=no("img");function c(){h(),ns.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(u){h(),i&&i(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class by extends yr{constructor(e){super(e)}load(e,t,n,i){const r=new Yt,o=new wy(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class za extends Lt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Fe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Ty extends za{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Fe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Nc=new Ye,ud=new A,dd=new A;class wh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new re(512,512),this.map=null,this.mapPass=null,this.matrix=new Ye,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new dh,this._frameExtents=new re(1,1),this._viewportCount=1,this._viewports=[new ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;ud.setFromMatrixPosition(e.matrixWorld),t.position.copy(ud),dd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(dd),t.updateMatrixWorld(),Nc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Nc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Nc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Ey extends wh{constructor(){super(new xn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=cr*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class bh extends za{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.target=new Lt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Ey}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const fd=new Ye,Lr=new A,Uc=new A;class Ay extends wh{constructor(){super(new xn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new re(4,2),this._viewportCount=6,this._viewports=[new ht(2,1,1,1),new ht(0,1,1,1),new ht(3,1,1,1),new ht(1,1,1,1),new ht(3,0,1,1),new ht(1,0,1,1)],this._cubeDirections=[new A(1,0,0),new A(-1,0,0),new A(0,0,1),new A(0,0,-1),new A(0,1,0),new A(0,-1,0)],this._cubeUps=[new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,0,1),new A(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Lr.setFromMatrixPosition(e.matrixWorld),n.position.copy(Lr),Uc.copy(n.position),Uc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Uc),n.updateMatrixWorld(),i.makeTranslation(-Lr.x,-Lr.y,-Lr.z),fd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fd)}}class ii extends za{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Ay}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Ry extends wh{constructor(){super(new fh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Th extends za{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.target=new Lt,this.shadow=new Ry}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Yr{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Cy extends yr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=ns.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{t&&t(l),r.manager.itemEnd(e)}).catch(l=>{i&&i(l)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return ns.add(e,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){i&&i(l),ns.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});ns.add(e,c),r.manager.itemStart(e)}}class Py{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=pd(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=pd();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function pd(){return performance.now()}class Iy{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,o;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,r=e*i+i;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[r+a]=n[a];o=t}else{o+=t;const a=t/o;this._mixBufferRegion(n,r,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const c=t*this._origIndex;this._mixBufferRegion(n,i,c,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){a.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,o=i;r!==o;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]}_slerp(e,t,n,i){$n.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){const o=this._workIndex*r;$n.multiplyQuaternionsFlat(e,o,e,t,e,n),$n.slerpFlat(e,t,e,t,e,o,i)}_lerp(e,t,n,i,r){const o=1-i;for(let a=0;a!==r;++a){const c=t+a;e[c]=e[c]*o+e[n+a]*i}}_lerpAdditive(e,t,n,i,r){for(let o=0;o!==r;++o){const a=t+o;e[a]=e[a]+e[n+o]*i}}}const Eh="\\[\\]\\.:\\/",Ly=new RegExp("["+Eh+"]","g"),Ah="[^"+Eh+"]",Dy="[^"+Eh.replace("\\.","")+"]",Ny=/((?:WC+[\/:])*)/.source.replace("WC",Ah),Uy=/(WCOD+)?/.source.replace("WCOD",Dy),Fy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ah),Oy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ah),By=new RegExp("^"+Ny+Uy+Fy+Oy+"$"),zy=["material","materials","bones","map"];class ky{constructor(e,t,n){const i=n||pt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class pt{constructor(e,t,n){this.path=t,this.parsedPath=n||pt.parseTrackName(t),this.node=pt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new pt.Composite(e,t,n):new pt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Ly,"")}static parseTrackName(e){const t=By.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);zy.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const c=n(a.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=pt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const o=e[i];if(o===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}pt.Composite=ky;pt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};pt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};pt.prototype.GetterByBindingType=[pt.prototype._getValue_direct,pt.prototype._getValue_array,pt.prototype._getValue_arrayElement,pt.prototype._getValue_toArray];pt.prototype.SetterByBindingTypeAndVersioning=[[pt.prototype._setValue_direct,pt.prototype._setValue_direct_setNeedsUpdate,pt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_array,pt.prototype._setValue_array_setNeedsUpdate,pt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_arrayElement,pt.prototype._setValue_arrayElement_setNeedsUpdate,pt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_fromArray,pt.prototype._setValue_fromArray_setNeedsUpdate,pt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Hy{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const r=t.tracks,o=r.length,a=new Array(o),c={endingStart:qs,endingEnd:qs};for(let l=0;l!==o;++l){const h=r[l].createInterpolant(null);a[l]=h,h.settings=c}this._interpolantSettings=c,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Hp,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,r=e._clip.duration,o=r/i,a=i/r;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,r=i.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);const c=a.parameterPositions,l=a.sampleValues;return c[0]=r,c[1]=r+n,l[0]=e/o,l[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const c=(e-r)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);const o=this._updateTime(t),a=this._updateWeight(e);if(a>0){const c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case Gp:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(o),l[h].accumulateAdditive(a);break;case ch:default:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(o),l[h].accumulate(i,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,r=this._loopCount;const o=n===Vp;if(e===0)return r===-1?i:o&&(r&1)===1?t-i:i;if(n===jd){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=t||i<0){const a=Math.floor(i/t);i-=t*a,r+=Math.abs(a);const c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){const l=e<0;this._setEndings(l,!l,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(o&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=Ys,i.endingEnd=Ys):(e?i.endingStart=this.zeroSlopeAtStart?Ys:qs:i.endingStart=ya,t?i.endingEnd=this.zeroSlopeAtEnd?Ys:qs:i.endingEnd=ya)}_scheduleFading(e,t,n){const i=this._mixer,r=i.time;let o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,c=o.sampleValues;return a[0]=r,c[0]=t,a[1]=r+e,c[1]=n,this}}const Vy=new Float32Array(1);class Gy extends Es{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,o=e._propertyBindings,a=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName;let h=l[c];h===void 0&&(h={},l[c]=h);for(let u=0;u!==r;++u){const d=i[u],p=d.name;let g=h[p];if(g!==void 0)++g.referenceCount,o[u]=g;else{if(g=o[u],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,c,p));continue}const _=t&&t._propertyBindings[u].binding.parsedPath;g=new Iy(pt.create(n,p,_),d.ValueTypeName,d.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,c,p),o[u]=g}a[u].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,r=this._actionsByClip;let o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{const a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,o=this._actionsByClip,a=o[r],c=a.knownActions,l=c[c.length-1],h=e._byClipCacheIndex;l._byClipCacheIndex=h,c[h]=l,c.pop(),e._byClipCacheIndex=null;const u=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],c.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,r=this._bindings;let o=i[t];o===void 0&&(o={},i[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[i],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new Af(new Float32Array(2),new Float32Array(2),1,Vy),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){const i=t||this._root,r=i.uuid;let o=typeof e=="string"?Bl.findByName(i,e):e;const a=o!==null?o.uuid:e,c=this._actionsByClip[a];let l=null;if(n===void 0&&(o!==null?n=o.blendMode:n=ch),c!==void 0){const u=c.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;l=c.knownActions[0],o===null&&(o=l._clip)}if(o===null)return null;const h=new Hy(this,o,t,n);return this._bindAction(h,l),this._addInactiveAction(h,a,r),h}existingAction(e,t){const n=t||this._root,i=n.uuid,r=typeof e=="string"?Bl.findByName(n,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(i,e,r,o);const a=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)a[l].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){const o=r.knownActions;for(let a=0,c=o.length;a!==c;++a){const l=o[a];this._deactivateAction(l);const h=l._cacheIndex,u=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,c=a[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}const i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(const o in r){const a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}const md=new Ye;class Wy{constructor(e,t,n=0,i=1/0){this.ray=new go(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new uh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return md.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(md),this}intersectObject(e,t=!0,n=[]){return zl(e,this,n,t),n.sort(gd),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)zl(e[i],this,n,t);return n.sort(gd),n}}function gd(s,e){return s.distance-e.distance}function zl(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let o=0,a=r.length;o<a;o++)zl(r[o],e,t,!0)}}const _d=new re;class ka{constructor(e=new re(1/0,1/0),t=new re(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=_d.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,_d).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:eh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=eh);class Xy extends pf{constructor(){super();const e=new ni;e.deleteAttribute("uv");const t=new at({side:fn}),n=new at,i=new ii(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);const r=new J(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const o=new J(e,n);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);const a=new J(e,n);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);const c=new J(e,n);c.position.set(6.167,.857,7.803),c.rotation.set(0,.561,0),c.scale.set(3.927,6.285,3.687),this.add(c);const l=new J(e,n);l.position.set(-2.017,.018,6.124),l.rotation.set(0,.333,0),l.scale.set(2.002,4.566,2.064),this.add(l);const h=new J(e,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);const u=new J(e,n);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);const d=new J(e,Ws(50));d.position.set(-16.116,14.37,8.208),d.scale.set(.1,2.428,2.739),this.add(d);const p=new J(e,Ws(50));p.position.set(-16.109,18.021,-8.207),p.scale.set(.1,2.425,2.751),this.add(p);const g=new J(e,Ws(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);const _=new J(e,Ws(43));_.position.set(-.462,8.89,14.52),_.scale.set(4.38,5.441,.088),this.add(_);const m=new J(e,Ws(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);const f=new J(e,Ws(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function Ws(s){const e=new tn;return e.color.setScalar(s),e}const Dr=new A;function In(s,e,t,n,i,r){const o=2*Math.PI*i/4,a=Math.max(r-2*i,0),c=Math.PI/4;Dr.copy(e),Dr[n]=0,Dr.normalize();const l=.5*o/(o+a),h=1-Dr.angleTo(s)/c;return Math.sign(Dr[t])===1?h*l:a/(o+a)+l+l*(1-h)}class qy extends ni{constructor(e=1,t=1,n=1,i=2,r=.1){if(i=i*2+1,r=Math.min(e/2,t/2,n/2,r),super(1,1,1,i,i,i),i===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const a=new A,c=new A,l=new A(e,t,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,p=h.length/6,g=new A,_=.5/i;for(let m=0,f=0;m<h.length;m+=3,f+=2)switch(a.fromArray(h,m),c.copy(a),c.x-=Math.sign(c.x)*_,c.y-=Math.sign(c.y)*_,c.z-=Math.sign(c.z)*_,c.normalize(),h[m+0]=l.x*Math.sign(a.x)+c.x*r,h[m+1]=l.y*Math.sign(a.y)+c.y*r,h[m+2]=l.z*Math.sign(a.z)+c.z*r,u[m+0]=c.x,u[m+1]=c.y,u[m+2]=c.z,Math.floor(m/p)){case 0:g.set(1,0,0),d[f+0]=In(g,c,"z","y",r,n),d[f+1]=1-In(g,c,"y","z",r,t);break;case 1:g.set(-1,0,0),d[f+0]=1-In(g,c,"z","y",r,n),d[f+1]=1-In(g,c,"y","z",r,t);break;case 2:g.set(0,1,0),d[f+0]=1-In(g,c,"x","z",r,e),d[f+1]=In(g,c,"z","x",r,n);break;case 3:g.set(0,-1,0),d[f+0]=1-In(g,c,"x","z",r,e),d[f+1]=1-In(g,c,"z","x",r,n);break;case 4:g.set(0,0,1),d[f+0]=1-In(g,c,"x","y",r,e),d[f+1]=1-In(g,c,"y","x",r,t);break;case 5:g.set(0,0,-1),d[f+0]=In(g,c,"x","y",r,e),d[f+1]=1-In(g,c,"y","x",r,t);break}}}function si(s,e){const t=document.createElement("canvas");return t.width=s,t.height=e,{c:t,g:t.getContext("2d")}}function As(s,e=1,t=1,n=!0){const i=new _r(s);return i.wrapS=i.wrapT=Ms,i.repeat.set(e,t),i.anisotropy=8,n&&(i.colorSpace=Nt),i}let Fc=7;const mt=()=>(Fc=Fc*16807%2147483647,(Fc-1)/2147483646);function co(s=["#9c6b43","#a97650","#8f603b","#b0805a","#99673f","#a5724a"]){const{c:e,g:t}=si(1024,1024),n=8,i=1024/n;for(let r=0;r<n;r++){let o=-mt()*400;for(;o<1024;){const a=300+mt()*380;t.fillStyle=s[Math.floor(mt()*s.length)],t.fillRect(o,r*i,a,i);for(let c=0;c<26;c++){t.strokeStyle=`rgba(${mt()<.5?"60,35,15":"210,170,120"},${.05+mt()*.08})`,t.lineWidth=1+mt()*2;const l=r*i+mt()*i;t.beginPath(),t.moveTo(o,l),t.bezierCurveTo(o+a*.3,l+(mt()-.5)*10,o+a*.6,l+(mt()-.5)*10,o+a,l+(mt()-.5)*6),t.stroke()}t.fillStyle="rgba(40,22,10,.55)",t.fillRect(o,r*i,3,i),o+=a}t.fillStyle="rgba(40,22,10,.6)",t.fillRect(0,r*i,1024,3)}return As(e,2.2,2.2)}function es(s="#2e4a47",e="rgba(214,190,130,.22)"){const{c:t,g:n}=si(512,512);n.fillStyle=s,n.fillRect(0,0,512,512);for(let r=0;r<900;r++)n.fillStyle=`rgba(0,0,0,${mt()*.035})`,n.fillRect(mt()*512,mt()*512,8+mt()*30,8+mt()*30);n.strokeStyle=e,n.fillStyle=e,n.lineWidth=2.2;const i=(r,o,a)=>{n.save(),n.translate(r,o),n.scale(a,a),n.beginPath(),n.moveTo(0,22),n.quadraticCurveTo(2,0,0,-22),n.stroke();for(let c=-2;c<=2;c++)n.beginPath(),n.ellipse(-7,c*8,7,2.6,-.5,0,Math.PI*2),n.fill(),n.beginPath(),n.ellipse(7,c*8-3,7,2.6,.5,0,Math.PI*2),n.fill();n.restore()};for(let r=0;r<4;r++)for(let o=-1;o<4;o++)i(64+o*128+r%2*64,64+r*128,1);return As(t,3,1.5)}function Pf(s="#d9d2bf",e="#5d6e62"){const{c:t,g:n}=si(512,512),i=4,r=512/i;for(let o=0;o<i;o++)for(let a=0;a<i;a++){n.fillStyle=(a+o)%2?s:e,n.fillRect(a*r,o*r,r,r);for(let c=0;c<40;c++)n.fillStyle=`rgba(0,0,0,${mt()*.04})`,n.fillRect(a*r+mt()*r,o*r+mt()*r,6,6)}n.strokeStyle="rgba(60,55,45,.5)",n.lineWidth=3;for(let o=0;o<=i;o++)n.beginPath(),n.moveTo(o*r,0),n.lineTo(o*r,512),n.stroke(),n.beginPath(),n.moveTo(0,o*r),n.lineTo(512,o*r),n.stroke();return As(t,3,3)}function ua(s=["#6b2430","#1f2a44","#d6b26a","#2c3a5c","#b9863c","#7d2e3a","#e2cfa0"]){const{c:e,g:t}=si(1024,768);t.fillStyle=s[0],t.fillRect(0,0,1024,768);const n=(i,r,o)=>{t.strokeStyle=o,t.lineWidth=r,t.strokeRect(i,i,1024-i*2,768-i*2)};n(26,20,s[1]),n(60,6,s[2]),n(92,30,s[3]),n(120,4,s[2]),t.fillStyle=s[2];for(let i=120;i<910;i+=46)t.beginPath(),t.arc(i,92,7,0,7),t.arc(i,676,7,0,7),t.fill();for(let i=140;i<640;i+=46)t.beginPath(),t.arc(92,i,7,0,7),t.arc(932,i,7,0,7),t.fill();t.save(),t.translate(512,384);for(let i=0;i<4;i++){t.fillStyle=[s[1],s[4],s[5],s[6]][i],t.beginPath();const r=210-i*50;for(let o=0;o<=16;o++){const a=o/16*Math.PI*2,c=o%2?r*.78:r;t.lineTo(Math.cos(a)*c*1.35,Math.sin(a)*c)}t.fill()}t.restore();for(let i=0;i<3e3;i++)t.fillStyle=`rgba(${mt()<.5?"0,0,0":"255,240,220"},${mt()*.05})`,t.fillRect(mt()*1024,mt()*768,3,3);return As(e,1,1)}function zi(s,e=.07){const{c:t,g:n}=si(256,256);n.fillStyle=s,n.fillRect(0,0,256,256);for(let i=0;i<256;i+=3)n.fillStyle=`rgba(0,0,0,${e})`,n.fillRect(0,i,256,1);for(let i=0;i<256;i+=3)n.fillStyle=`rgba(255,255,255,${e*.5})`,n.fillRect(i,0,1,256);return As(t,2,2)}function If(){const{c:s,g:e}=si(512,512),t=e.createLinearGradient(0,0,0,512);t.addColorStop(0,"#0b1030"),t.addColorStop(.6,"#1b2350"),t.addColorStop(1,"#3a2c5a"),e.fillStyle=t,e.fillRect(0,0,512,512);for(let r=0;r<160;r++){e.fillStyle=`rgba(255,255,240,${.3+mt()*.7})`;const o=mt()*2;e.fillRect(mt()*512,mt()*360,o,o)}const n=e.createRadialGradient(370,120,10,370,120,90);n.addColorStop(0,"rgba(255,248,220,.9)"),n.addColorStop(.35,"rgba(255,240,200,.25)"),n.addColorStop(1,"rgba(255,240,200,0)"),e.fillStyle=n,e.fillRect(260,20,220,220),e.fillStyle="#f6edd0",e.beginPath(),e.arc(370,120,34,0,7),e.fill(),e.fillStyle="rgba(180,170,140,.35)",e.beginPath(),e.arc(360,112,7,0,7),e.arc(382,132,5,0,7),e.fill(),e.fillStyle="#070a18",e.beginPath(),e.moveTo(0,512);for(let r=0;r<=512;r+=16)e.lineTo(r,420-Math.abs(Math.sin(r*.05))*50-mt()*30);e.lineTo(512,512),e.fill(),e.lineWidth=14,e.strokeStyle="#070a18",e.lineCap="round",e.beginPath(),e.moveTo(-10,300),e.quadraticCurveTo(150,280,300,318),e.stroke(),e.lineWidth=6,e.beginPath(),e.moveTo(150,292),e.lineTo(210,250),e.stroke();const i=As(s);return i.wrapS=i.wrapT=pi,i}function Rh(){const{c:s,g:e}=si(64,64),t=e.createRadialGradient(32,32,0,32,32,32);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.25,"rgba(255,255,255,.6)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),new _r(s)}function Yy(s){const{c:e,g:t}=si(256,320);if(s===0){const i=t.createLinearGradient(0,0,0,320);i.addColorStop(0,"#c9a06a"),i.addColorStop(1,"#5b3a4e"),t.fillStyle=i,t.fillRect(0,0,256,320),t.fillStyle="#2c2440",t.beginPath(),t.moveTo(0,320),t.lineTo(0,210),t.lineTo(90,150),t.lineTo(150,200),t.lineTo(256,130),t.lineTo(256,320),t.fill(),t.fillStyle="#f2e6c4",t.beginPath(),t.arc(180,80,26,0,7),t.fill()}else t.fillStyle="#20324a",t.fillRect(0,0,256,320),t.fillStyle="#e8dcc0",t.beginPath(),t.ellipse(128,160,90,52,0,0,7),t.fill(),t.fillStyle="#3f8f86",t.beginPath(),t.arc(128,160,38,0,7),t.fill(),t.fillStyle="#0d1520",t.beginPath(),t.arc(128,160,16,0,7),t.fill(),t.fillStyle="#fff",t.beginPath(),t.arc(140,148,7,0,7),t.fill();const n=new _r(e);return n.colorSpace=Nt,n}function jy(){const{c:s,g:e}=si(512,512),t=e.createLinearGradient(0,0,0,512);t.addColorStop(0,"#7fb4e6"),t.addColorStop(.7,"#cfe3f0"),t.addColorStop(1,"#f3e7cf"),e.fillStyle=t,e.fillRect(0,0,512,512),e.fillStyle="rgba(255,255,255,.85)";for(const[i,r,o]of[[120,120,1],[360,80,.7],[300,200,.5]])for(let a=0;a<6;a++)e.beginPath(),e.arc(i+a*22*o,r+Math.sin(a)*8*o,26*o,0,7),e.fill();e.fillStyle="#5f8a4a",e.beginPath(),e.moveTo(0,512);for(let i=0;i<=512;i+=16)e.lineTo(i,400-Math.abs(Math.sin(i*.04))*70-mt()*20);e.lineTo(512,512),e.fill(),e.fillStyle="#3f6b3a",e.beginPath(),e.moveTo(0,512);for(let i=0;i<=512;i+=12)e.lineTo(i,450-Math.abs(Math.sin(i*.07+1))*40);e.lineTo(512,512),e.fill();const n=As(s);return n.wrapS=n.wrapT=pi,n}function Ky(s){const{c:e,g:t}=si(256,320);t.fillStyle=["#fbf7ee","#f6f0ff","#eef8f2","#fff6e8"][s%4],t.fillRect(0,0,256,320),t.lineCap="round",t.lineJoin="round";const n=(a,c,l)=>{t.strokeStyle=a,t.lineWidth=c,t.beginPath(),l.forEach(([h,u],d)=>d?t.lineTo(h+(mt()-.5)*3,u+(mt()-.5)*3):t.moveTo(h,u)),t.stroke()},i=(a,c,l,h,u)=>{t.fillStyle=a,t.beginPath(),t.ellipse(c,l,h,u,0,0,7),t.fill()},r=s%4;if(r===0)i("#d9b07a",128,190,80,60),i("#d9b07a",128,120,60,50),i("#3a2a22",128,135,30,20),i("#222",105,110,7,8),i("#222",150,110,7,8),i("#e86a7a",128,160,9,14),n("#3a2a22",5,[[80,90],[70,120],[95,100]]),n("#3a2a22",5,[[175,90],[185,120],[160,100]]),n("#4a6cd1",4,[[30,290],[80,290],[130,286],[200,292]]);else if(r===1)i("#f3e2a0",200,60,26,26),n("#5a3a22",10,[[40,320],[60,200],[70,120]]),n("#5a3a22",6,[[60,200],[180,200]]),i("#8a6a4a",130,170,30,36),i("#fff",120,160,9,9),i("#fff",140,160,9,9),i("#000",120,160,4,4),i("#000",140,160,4,4);else if(r===2){n("#c0392b",5,[[40,300],[40,180],[128,110],[216,180],[216,300],[40,300]]),n("#7a3cff",5,[[110,300],[110,240],[146,240],[146,300]]),t.fillStyle="#7a3cff",t.font="bold 30px sans-serif",t.fillText("?",120,280);for(const[a,c]of[[70,"#6b3a2a"],[186,"#e8c25a"]])i(c,a,230,14,16),i("#f2c9a8",a,232,9,10),n("#333",3,[[a,245],[a,280],[a-10,300]]),n("#333",3,[[a,280],[a+10,300]])}else for(let a=100;a>5;a-=8)t.strokeStyle=["#7a3cff","#2fd4ff","#ff3d8b"][a/8%3|0],t.lineWidth=5,t.beginPath(),t.arc(128+Math.sin(a)*4,160,a,a*.1,a*.1+5.5),t.stroke();t.fillStyle=r%2?"#7a3cff":"#e8426f",t.font="italic bold 22px cursive",t.fillText(r%2?"Keira":"MILA",18,34);const o=new _r(e);return o.colorSpace=Nt,o}function Zy(){const{c:s,g:e}=si(256,128);e.fillStyle="#f4f4f0",e.fillRect(0,0,256,128),e.fillStyle="#222";for(let n=0;n<12;n++){const i=n%6*44+(n>=6?22:0)+10,r=n>=6?90:38;e.beginPath();for(let o=0;o<5;o++){const a=o/5*6.283;e.lineTo(i+Math.cos(a)*12,r+Math.sin(a)*12)}e.fill()}const t=new _r(s);return t.colorSpace=Nt,t}const We={x0:-5,x1:5,z0:-3,z1:3.2,h:3,kitchenX:1.6},Ht=2.1,qt=2.95,kl=1.05,be=(s,e=.7,t={})=>new at({color:s,roughness:e,...t});function it(s,e,t,n,i=.04,r=3){const o=new J(new qy(s,e,t,r,Math.min(i,s/2,e/2,t/2)),n);return o.castShadow=!0,o.receiveShadow=!0,o}function pe(s,e,t,n=new at){const i=new J(new ni(s,e,t),n);return i.castShadow=!0,i.receiveShadow=!0,i}function bt(s,e,t,n,i=24){const r=new J(new Pt(s,e,t,i),n);return r.castShadow=!0,r.receiveShadow=!0,r}const ee=(s,e,t,n,i)=>(s.position.set(e,t,n),i?.add(s),s);function $y(){const s=new ze,e={body:zi("#8a6a3e",.09)},t=new Gt({map:e.body,roughness:.92,sheen:.4,sheenColor:new Fe(14268810),sheenRoughness:.8}),n=2.5,i=1,r=ee(it(n,.3,i,t,.06),0,.27,0,s),o=ee(it(n,.62,.24,t,.1),0,.68,-i/2+.12,s),a=ee(it(.24,.5,i,t,.1),-n/2+.12,.5,0,s),c=ee(it(.24,.5,i,t,.1),n/2-.12,.5,0,s),l=be(3876376,.5);for(const x of[-1,1])for(const L of[-1,1])ee(bt(.035,.025,.12,l,10),x*(n/2-.12),.06,L*(i/2-.1),s);const h=(n-.48)/3,u=[];let d,p;for(let x=0;x<3;x++){const L=-h+x*h,C=it(h-.02,.17,i-.26,t,.07,4);x===1?(d=new ze,d.position.set(L,.43,-i/2+.24),C.position.set(0,.085,(i-.26)/2),d.add(C),s.add(d),p=C):ee(C,L,.515,.12,s),u.push(C),ee(it(h-.03,.42,.16,t,.08,4),L,.78,-i/2+.3,s).rotation.x=-.18}const g=ee(pe(h-.08,.02,i-.34,be(1182228,1)),p.parent.position.x,.421,.13,s);g.castShadow=!1;const _=new Gt({map:zi("#c9a77a",.08),roughness:.9,sheen:.5,sheenColor:new Fe(16777215)});ee(it(.42,.4,.14,_,.1,4),-n/2+.42,.78,-.12,s).rotation.set(-.3,.3,.1);const m=new Gt({color:2051390,roughness:.6,sheen:1,sheenColor:new Fe(7328164),sheenRoughness:.35}),f=new Gt({color:12945966,roughness:.5,sheen:1,sheenColor:new Fe(16769184)}),b=[r,o,a,c,...u];s.traverse(x=>{x.isMesh&&x.material===t&&(b.includes(x)||b.push(x))});const S=s.children.find(x=>x.material===_);return{group:s,cushionPivot:d,cushion:p,hitboxes:[p],restyle(x){for(const L of b)L.material=x?m:t;S.material=x?f:_,l.color.set(x?11570519:3876376),x&&(l.metalness=.8)}}}function Jy(){const s=new ze,e=new ze;s.add(e);const t=be(5913126,.6),n=1.6,i=2.3,r=.36;ee(pe(n,.05,r,t),0,i,0,e),ee(pe(.05,i,r,t),-n/2,i/2,0,e),ee(pe(.05,i,r,t),n/2,i/2,0,e),ee(pe(n,i,.03,be(4007963,.8)),0,i/2,-r/2+.015,e);const o=[.08,.6,1.12,1.64];for(const g of o)ee(pe(n-.05,.04,r-.02,t),0,g,0,e);const a=[8203834,2898524,4156250,13213802,5978702,9067051,547,10974013,4873850,7021616];let c,l=3;o.forEach((g,_)=>{let m=-n/2+.06;for(;m<n/2-.12;){l=(l*7+3)%97;const f=.04+l%5*.012,b=.3+l%7*.025;if(_===2&&m>.1&&!c){const x=pe(.075,.42,.26,be(2759485,.4,{emissive:6962431,emissiveIntensity:.18}));ee(x,m+.04,g+.02+.21,.02,e),c=x,m+=.09;continue}if(l%11===0){m+=.12;continue}const S=pe(f,b,.24+l%3*.02,be(a[l%a.length],.75));ee(S,m+f/2,g+.02+b/2,.02,e),l%13===0&&(S.rotation.z=.25),m+=f+.004}});const h=new ze;s.add(h);const u=be(460300,1);ee(pe(1,2,.02),0,1,-r/2-.02,h).material=u;const d=new J(new Ui(.42,40),be(2826808,.5,{metalness:.4}));ee(d,0,1,-r/2-0,h);const p=new J(new os(.42,.035,10,48),be(10254908,.3,{metalness:.9,emissive:6962431,emissiveIntensity:.3}));ee(p,0,1,-r/2+.02,h);for(let g=0;g<6;g++){const _=g/6*Math.PI*2,m=new J(new Ui(.035,3),new tn({color:10482687}));ee(m,Math.cos(_)*.28,1+Math.sin(_)*.28,-r/2+.01,h).rotation.z=_}return h.visible=!1,{group:s,slider:e,oddBook:c,doorway:h}}function Qy(){const s=new ze,e=new Gt({color:11126720,roughness:.35,clearcoat:.6}),t=.9,n=1.95,i=.72;ee(it(t,n,i,e,.06),0,n/2,0,s);const r=ee(pe(t-.1,n-.5,.02,be(16052714,.4,{emissive:16774880,emissiveIntensity:.25})),0,n/2-.15,i/2-.02,s);r.castShadow=!1;const o=new ze;o.position.set(t/2,0,i/2),s.add(o);const a=ee(it(t,n-.04,.08,e,.05),-t/2,n/2,.04,o),c=be(14540253,.15,{metalness:1});ee(it(.04,.6,.05,c,.02),-t+.1,n/2+.2,.11,o),ee(bt(.03,.03,.01,be(14721072)),-.5,1.5,.085,o).rotation.x=Math.PI/2,ee(bt(.03,.03,.01,be(4156250)),-.3,1.38,.085,o).rotation.x=Math.PI/2;const l=new ii(16773590,0,2.5,2);l.position.set(0,1.3,i/2+.3),s.add(l);const h=[];for(const u of[.55,.95,1.35]){const d=new ze;d.position.set(0,u,.2),s.add(d),ee(pe(t-.12,.02,.5,be(15266559,.1,{transparent:!0,opacity:.6})),0,0,0,d),h.push(d)}return{group:s,door:o,doorMesh:a,light:l,shelves:h,hit:[a]}}function eM(s){const e=new ze;if(s==="milk"){ee(it(.1,.24,.1,be(16250094,.5),.02),0,.12,0,e),ee(pe(.102,.06,.102,be(2912191,.5)),0,.14,0,e);const t=ee(it(.26,.06,.12,be(13152909,.9),.02),.22,.03,0,e);for(let n=0;n<4;n++)ee(new J(new It(.025,12,8),be(15918800,.6)),-.09+n*.06,.06,0,t).scale.y=1.25}else s==="fruit"?[12597547,15105570,8367676,13934615,12597547].forEach((n,i)=>ee(new J(new It(.05,16,12),be(n,.45)),-.24+i*.12,.05,i%2*.06,e)):s==="pizza"&&(ee(bt(.2,.2,.05,be(15260085,.9),6),0,.03,0,e),ee(it(.14,.18,.1,be(9323693,.5),.02),.26,.09,0,e),ee(bt(.05,.05,.02,be(13934615,.4)),.26,.19,0,e));return e}function tM(){const s=new ze,e=new Gt({color:10475752,roughness:.02,transmission:.9,thickness:.02,transparent:!0,opacity:.25});ee(pe(1.15,.6,.42,e),0,.3,0,s).castShadow=!1;const t=ee(pe(1.1,.5,.38,be(1789803,.1,{emissive:933202,emissiveIntensity:.6,transparent:!0,opacity:.55})),0,.27,0,s);t.castShadow=!1,ee(pe(1.17,.04,.44,be(2236962,.4)),0,.62,0,s),ee(pe(1.1,.05,.38,be(12759680,1)),0,.03,0,s);for(let o=0;o<6;o++){const a=ee(bt(.008,.015,.3+o%3*.08,be(3046735,.8),5),-.45+o*.07,.2,-.1+o%2*.1,s);a.rotation.z=(o%3-1)*.15}ee(pe(.14,.2,.03,be(5913126)),.35,.15,-.12,s);const n=[],i=[16747069,7337983,16769354,12610303];for(let o=0;o<5;o++){const a=new ze,c=new J(new It(.04,12,8),be(i[o%4],.4,{emissive:i[o%4],emissiveIntensity:.35}));c.scale.set(1.4,1,.6),a.add(c);const l=new J(new io(.03,.05,4),c.material);l.rotation.z=Math.PI/2,l.position.x=-.07,a.add(l),a.userData={r:.25+o*.05,s:.5+o*.13,y:.12+o*.07,p:o*1.7},s.add(a),n.push(a)}const r=new ii(6281471,1.2,2.2,2);return r.position.set(0,.5,.4),s.add(r),{group:s,fish:n}}function nM(){const s=new ze;ee(bt(.2,.15,.4,be(2959925,.5)),0,.2,0,s);const e=be(3107652,.6,{side:Qt});for(let t=0;t<9;t++){const n=new J(new It(.16,10,6),e);n.scale.set(.45,.08,1.4);const i=t/9*Math.PI*2;n.position.set(Math.cos(i)*.16,.7+t%3*.28,Math.sin(i)*.16),n.rotation.set(.6*Math.sin(i),-i,.6*Math.cos(i)),n.castShadow=!0,s.add(n),ee(bt(.01,.01,.4+t%3*.28,be(4020778),5),Math.cos(i)*.06,.4+(.4+t%3*.28)/2,Math.sin(i)*.06,s)}return s}function iM(){const s=new ze;ee(it(.5,.1,.4,be(6963496,.4),.02),0,.05,0,s);const e=ee(bt(.17,.17,.01,be(1118481,.25),32),-.04,.11,0,s);ee(bt(.06,.06,.012,be(14045242,.5)),0,.004,0,e);const t=ee(pe(.02,.02,.24,be(13421772,.2,{metalness:1})),.17,.13,-.02,s);return t.rotation.y=.35,{group:s,disc:e}}function sM(s,e,t,n){const i=new ze,r=[],o=14;for(let h=0;h<=o;h++){const u=h/o;r.push(new A(s+(e-s)*u,t-Math.sin(u*Math.PI*3)**2*.22,n))}const a=new _f(r);i.add(new J(new Sh(a,80,.006,4),be(2236962)));const c=new at({color:16769704,emissive:16758861,emissiveIntensity:2.4});for(let h=0;h<22;h++){const u=a.getPoint(h/21);ee(new J(new It(.025,8,6),c),u.x,u.y-.03,u.z,i)}const l=new ii(16758891,1.4,5,2);return l.position.set((s+e)/2,t-.3,n+.4),i.add(l),i}function rM(){const s=new ze,e=be(9071178,.85),t=be(14271392,.9),n=ee(new J(new It(.14,20,16),e),0,.15,0,s);n.scale.set(1,1.15,.9),n.castShadow=!0,ee(new J(new It(.11,16,12),t),0,.12,.04,s).scale.set(.9,1.1,.8);const r=ee(new J(new It(.12,20,16),e),0,.34,0,s);r.scale.set(1.1,.9,.95),r.castShadow=!0;const o=be(15259832,.9),a=.35;for(const l of[-1,1]){const h=ee(new J(new Ui(.06,24),o),l*.052,a,.105,s);h.rotation.y=l*.35;const u=ee(new J(new It(.032,16,12),be(16757279,.2,{emissive:16751104,emissiveIntensity:.5})),l*.052,a,.11,s);ee(new J(new It(.017,12,8),be(328965,.1)),0,0,.022,u);const d=ee(new J(new io(.03,.09,6),e),l*.085,.45,-.01,s);d.rotation.z=-l*.4}ee(new J(new io(.015,.04,6),be(3811866)),0,.31,.125,s).rotation.x=Math.PI*.6;const c=[];for(const l of[-1,1]){const h=ee(new J(new It(.1,12,10),e),l*.13,.15,-.01,s);h.scale.set(.35,1,.8),c.push(h)}return{group:s,wings:c,head:r}}function oM(){const s=new ze,e=be(6969994,.95),t=new J(new os(.38,.11,12,32),e);return t.rotation.x=Math.PI/2,t.position.y=.1,t.castShadow=!0,t.receiveShadow=!0,s.add(t),ee(bt(.38,.38,.06,be(13220256,1)),0,.04,0,s),s}function Lf(){const s=new It(.45,32,20,0,Math.PI*2,0,Math.PI/2),e=s.attributes.position;for(let r=0;r<e.count;r++){const o=e.getX(r),a=e.getY(r),c=e.getZ(r),l=Math.sin(o*9)*Math.cos(c*8)*.03+Math.sin(o*23+c*17)*.01;e.setXYZ(r,o*1.25+l,a*.55+l*2,c+l)}s.computeVertexNormals();const t=new at({map:zi("#a8743a",.12),roughness:.95}),n=new J(s,t);n.castShadow=!0,n.receiveShadow=!0;const i=new ze;i.add(n);for(let r=0;r<14;r++)ee(bt(.006,.006,.07,be(14731162),4),-.5+r*.075,.02,.43,i).rotation.x=1.2;return i}function aM(){const s=new ze,{x0:e,x1:t,z0:n,z1:i,h:r,kitchenX:o}=We,a=new J(new Vt(o-e,i-n),new at({map:co(),roughness:.55}));a.rotation.x=-Math.PI/2,a.position.set((e+o)/2,0,(n+i)/2),a.receiveShadow=!0,s.add(a);const c=new J(new Vt(t-o,i-n),new at({map:Pf(),roughness:.35}));c.rotation.x=-Math.PI/2,c.position.set((o+t)/2,.001,(n+i)/2),c.receiveShadow=!0,s.add(c),c.material.map.repeat.set(2.4,4.3);const l=be(2760216,.9);ee(pe(t-e+.3,.3,.15,l),(e+t)/2,-.15,i+.075,s),ee(pe(.15,.3,i-n+.3),t+.075,-.15,(n+i)/2,s).material=l;const h=new J(new Vt(40,40),new tn({visible:!1}));h.rotation.x=-Math.PI/2,s.add(h);const u=new at({map:es(),roughness:.85}),d=new at({map:es("#cdbf9f","rgba(90,110,95,.18)"),roughness:.85}),p=be(15525074,.5),g=be(2760216,.9),_=.15,m=(Z,_e,he,w,v)=>{const N=pe(_e,w,_,v);return N.position.set(Z,he+w/2,n-_/2),N.castShadow=!1,s.add(N),N},f=-.2,b=1.1,S=.95,x=2.3;m((e+f)/2,f-e,0,r,u),m((b+o)/2,o-b,0,r,u),m((f+b)/2,b-f,0,S,u),m((f+b)/2,b-f,x,r-x,u),m((o+t)/2,t-o,0,r,d),ee(pe(t-e+_,.06,_+.02,g),(e+t)/2-_/2,r+.03,n-_/2,s);const L=(Z,_e,he,w)=>{const v=pe(_,w-he,_e-Z,u);v.position.set(e-_/2,(he+w)/2,(Z+_e)/2),v.castShadow=!1,s.add(v)};L(n,Ht,0,r),L(qt,i,0,r),L(Ht,qt,2.05,r),ee(pe(_+.02,.06,i-n+_),e-_/2,r+.03,(n+i)/2-_/2,s).material=g,ee(pe(_+.02,r+.06,.06),e-_/2,(r+.06)/2,i+.03,s).material=g,ee(pe(o-e,.14,.03),(e+o)/2,.07,n+.015,s).material=p,ee(pe(.03,.14,Ht-n),e+.015,.07,(n+Ht)/2,s).material=p,ee(pe(.03,.14,i-qt),e+.015,.07,(qt+i)/2,s).material=p;for(const Z of[Ht-.04,qt+.04])ee(pe(.05,2.12,.08),e+.02,1.06,Z,s).material=p;ee(pe(.05,.08,qt-Ht+.16),e+.02,2.09,(Ht+qt)/2,s).material=p,ee(pe(o-e,.04,.03),(e+o)/2,2.55,n+.015,s).material=p,ee(pe(.03,.04,i-n),e+.015,2.55,(n+i)/2,s).material=p;const C=be(15327695,.45),P=new J(new Vt(4,3.4),new tn({map:If()}));P.position.set((f+b)/2+.3,(S+x)/2+.1,n-1.4),s.add(P);const E=(f+b)/2,y=(S+x)/2,M=b-f,I=x-S;ee(pe(M+.12,.08,.26),E,S-.02,n+.02,s).material=C,ee(pe(M+.12,.07,.12),E,x+.03,n-.02,s).material=C,ee(pe(.07,I,.12),f-.03,y,n-.02,s).material=C,ee(pe(.07,I,.12),b+.03,y,n-.02,s).material=C,ee(pe(.04,I,.05),E,y,n-.06,s).material=C,ee(pe(M,.04,.05),E,y+.1,n-.06,s).material=C;const B=new J(new Vt(M,I),new Gt({color:9416920,roughness:.05,transparent:!0,opacity:.12}));B.position.set(E,y,n-.07),s.add(B);const O=new J(new Vt(M,I),new tn({visible:!1}));O.position.set(E,y,n+.01),s.add(O);const G=new at({map:zi("#5b3a4e",.08),roughness:.95,side:Qt});for(const Z of[-1,1]){const _e=new Vt(.42,2.3,16,1),he=_e.attributes.position;for(let v=0;v<he.count;v++)he.setZ(v,Math.sin(he.getX(v)*40)*.035);_e.computeVertexNormals();const w=new J(_e,G);w.position.set(E+Z*(M/2+.2),1.45,n+.09),w.castShadow=!0,s.add(w)}ee(bt(.015,.015,M+1.1,be(9071162,.3,{metalness:.8})),E,2.62,n+.1,s).rotation.z=Math.PI/2;const j=be(2826520,.4);[[-2.7,0],[-1.4,1]].forEach(([Z,_e],he)=>{const w=he?.55:.7,v=he?.68:.88;ee(pe(w+.06,v+.06,.04,j),Z,1.95,n+.02,s);const N=new J(new Vt(w,v),new at({map:Yy(_e),roughness:.6}));N.position.set(Z,1.95,n+.045),s.add(N)});const H=new J(new Vt(3.3,2.3),new at({map:ua(),roughness:1}));H.rotation.x=-Math.PI/2,H.position.set(-2.1,.006,-.7),H.receiveShadow=!0,s.add(H);const Q=be(5913124,.45),V=new ze;V.position.set(-2.1,0,-.7),s.add(V),ee(it(1.2,.06,.62,Q,.02),0,.4,0,V);for(const Z of[-1,1])for(const _e of[-1,1])ee(bt(.025,.02,.38,Q,8),Z*.52,.19,_e*.24,V);ee(it(.3,.05,.22,be(2898524),.01),-.3,.455,.05,V).rotation.y=.2,ee(it(.28,.04,.2,be(8203834),.01),-.31,.5,.06,V).rotation.y=-.1,ee(bt(.05,.04,.1,be(14274752,.3)),.32,.48,-.05,V);const le=ee(bt(.04,.04,.12,be(15722194,.6)),.1,.49,.1,V),fe=ee(new J(new It(.012,8,6),new tn({color:16761963})),0,.08,0,le);fe.scale.y=1.8;const me=new ze;me.position.set(-3.95,0,-2.45),s.add(me);const Ce=be(11570519,.3,{metalness:.9});ee(bt(.18,.2,.03,Ce),0,.015,0,me),ee(bt(.015,.015,1.6,Ce,8),0,.8,0,me);const st=ee(new J(new Pt(.2,.3,.32,28,1,!0),be(15785136,.9,{side:Qt,emissive:16758880,emissiveIntensity:.55})),0,1.7,0,me);st.castShadow=!1;const Y=new ii(16757611,6,7,1.6);Y.position.set(-3.95,1.6,-2.2),s.add(Y),ee(it(1.3,.62,.42,Q,.03),.45,.31,n+.23,s);for(const Z of[-1,1])ee(pe(.58,.48,.01,be(6964784,.5)),.45+Z*.31,.32,n+.445,s);ee(it(.46,.7,1.3,Q,.03),e+.25,.35,kl,s);const ie=be(4151890,.55),Se=be(15130578,.25);ee(it(2.4,.86,.62,ie,.02),2.95,.43,n+.31,s),ee(pe(2.46,.05,.66,Se),2.95,.885,n+.33,s);for(let Z=0;Z<4;Z++)ee(pe(.55,.7,.01,be(4876126,.5)),2.95-.9+Z*.6,.43,n+.625,s);const ae=ee(pe(.5,.02,.38,be(12568264,.2,{metalness:.9})),2.4,.9,n+.32,s);ae.castShadow=!1;const Pe=ee(bt(.015,.015,.3,Ce,8),2.4,1.05,n+.1,s);ee(bt(.012,.012,.14,Ce,8),0,.15,.06,Pe).rotation.x=Math.PI/2,ee(it(1.15,.7,.36,ie,.02),2.2,2.05,n+.18,s);const Oe=new ze;Oe.position.set(3.95,2.05,n+.37),s.add(Oe),ee(it(1,.7,.36,ie,.02),3.35,2.05,n+.18,s).scale.z=1;const Be=ee(it(1,.68,.03,be(4876126,.5),.01),-.5,0,0,Oe);ee(bt(.015,.015,.05,Ce),-.92,-.2,.03,Oe).rotation.x=Math.PI/2;const Je=be(2894896,.4),K=new ii(16766362,4,5,1.6);K.position.set(3.1,2.2,.6),s.add(K),ee(bt(.55,.55,.05,be(13215610,.4),32),3.1,.75,.6,s),ee(bt(.05,.08,.72,Je,10),3.1,.37,.6,s),ee(bt(.3,.3,.03,Je,20),3.1,.015,.6,s);for(const Z of[-1,1]){const _e=new ze;_e.position.set(3.1+Z*.85,0,.75),s.add(_e),ee(bt(.2,.2,.05,be(9067051,.5)),0,.5,0,_e),ee(bt(.025,.04,.48,Je,8),0,.24,0,_e)}const se=$y();se.group.position.set(-2.1,0,-2.42),s.add(se.group);const R=Jy();R.group.position.set(e+.19,0,-.5),R.group.rotation.y=Math.PI/2,s.add(R.group);const we=Qy();we.group.position.set(4.45,0,n+.38),s.add(we.group);const te=(Z,_e,he,w)=>new ka(new re(Z-he/2,_e-w/2),new re(Z+he/2,_e+w/2)),ye=[te(-2.1,-2.42,2.5,1),te(-2.1,-.7,1.25,.66),te(e+.19,-.5,.4,1.6),te(e+.25,kl,.5,1.3),te(-3.95,-2.45,.45,.45),te(.45,n+.23,1.3,.45),te(2.95,n+.31,2.4,.62),te(4.45,n+.38,.9,.75),te(3.1,.6,1.15,1.15),te(2.25,.75,.42,.42),te(3.95,.75,.42,.42)];return{group:s,floorHit:h,couch:se,shelf:R,fridge:we,windowSpot:new A(E,0,n+.85),windowHit:O,cabinetHit:Be,cabinetDoor:Oe,lamp:Y,blockers:ye,mats:{floor:a.material,paper:u,kpaper:d,curtain:G,sky:P.material,rug:H.material,walnut:Q,cab:ie,trim:p,tile:c.material},rug:H}}function Df(s=.3){const e=new ze,t=new _i({transparent:!0,depthWrite:!1,uniforms:{t:{value:0},open:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.); }",fragmentShader:`
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
      }`}),n=new J(new Ui(s,48),t);n.rotation.x=-Math.PI/2,e.add(n);const i=60,r=new Float32Array(i*3),o=new Float32Array(i);for(let d=0;d<i;d++)o[d]=Math.random();const a=new Wt;a.setAttribute("position",new nn(r,3));const c=new Oa(a,new _o({map:Rh(),size:.06,color:10479871,transparent:!0,depthWrite:!1,blending:Jr}));c.frustumCulled=!1,e.add(c);const l=new ii(9067775,0,3.5,1.8);l.position.y=.35,e.add(l);let h=0,u=0;return{group:e,hit:n,set open(d){u=d?1:0},get isOpen(){return u>.5},update(d,p,g=0){h+=(u-h)*Math.min(1,d*3),t.uniforms.t.value=p,t.uniforms.open.value=h,l.intensity=h*(3+Math.sin(p*3)*.6+g*20),e.visible=h>.01;for(let _=0;_<i;_++){const m=o[_],f=(p*(.25+m*.3)+m*7)%1,b=m*40+p*(.5+m),S=s*(.2+m*.7)*(1-f*.5);r[_*3]=Math.cos(b)*S,r[_*3+1]=f*(.9+g*2),r[_*3+2]=Math.sin(b)*S}a.attributes.position.needsUpdate=!0,c.material.opacity=h}}}function cM(s=16770984){const t=new Float32Array(18),n=new Wt;n.setAttribute("position",new nn(t,3));const i=new _o({map:Rh(),size:.09,color:s,transparent:!0,depthWrite:!1,blending:Jr}),r=new Oa(n,i);return r.frustumCulled=!1,{points:r,update(o){for(let a=0;a<6;a++){const c=(o*.5+a/6)%1,l=a*2.4+o*.3;t[a*3]=Math.cos(l)*.25,t[a*3+1]=c*.35,t[a*3+2]=Math.sin(l)*.25}n.attributes.position.needsUpdate=!0,i.opacity=.35+Math.sin(o*2.2)*.25}}}function xd(s,e){if(e===Wp)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Pl||e===Kd){let t=s.getIndex();if(t===null){const o=[],a=s.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===Pl)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class lM extends yr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new pM(t)}),this.register(function(t){return new mM(t)}),this.register(function(t){return new bM(t)}),this.register(function(t){return new TM(t)}),this.register(function(t){return new EM(t)}),this.register(function(t){return new _M(t)}),this.register(function(t){return new xM(t)}),this.register(function(t){return new vM(t)}),this.register(function(t){return new yM(t)}),this.register(function(t){return new fM(t)}),this.register(function(t){return new MM(t)}),this.register(function(t){return new gM(t)}),this.register(function(t){return new wM(t)}),this.register(function(t){return new SM(t)}),this.register(function(t){return new uM(t)}),this.register(function(t){return new AM(t)}),this.register(function(t){return new RM(t)})}load(e,t,n,i){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const l=Yr.extractUrlBase(e);o=Yr.resolveURL(l,this.path)}else o=Yr.extractUrlBase(e);this.manager.itemStart(e);const a=function(l){i?i(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new Cf(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Nf){try{o[tt.KHR_BINARY_GLTF]=new CM(e)}catch(u){i&&i(u);return}r=JSON.parse(o[tt.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new VM(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case tt.KHR_MATERIALS_UNLIT:o[u]=new dM;break;case tt.KHR_DRACO_MESH_COMPRESSION:o[u]=new PM(r,this.dracoLoader);break;case tt.KHR_TEXTURE_TRANSFORM:o[u]=new IM;break;case tt.KHR_MESH_QUANTIZATION:o[u]=new LM;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function hM(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const tt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class uM{constructor(e){this.parser=e,this.name=tt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let l;const h=new Fe(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],vn);const u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Th(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new ii(h),l.distance=u;break;case"spot":l=new bh(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,Pi(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}}class dM{constructor(){this.name=tt.KHR_MATERIALS_UNLIT}getMaterialType(){return tn}extendParams(e,t,n){const i=[];e.color=new Fe(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],vn),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,Nt))}return Promise.all(i)}}class fM{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class pM{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Gt}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new re(a,a)}return Promise.all(r)}}class mM{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Gt}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class gM{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Gt}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class _M{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Gt}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Fe(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],vn)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Nt)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class xM{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Gt}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class vM{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Gt}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Fe().setRGB(a[0],a[1],a[2],vn),Promise.all(r)}}class yM{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Gt}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class MM{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Gt}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Fe().setRGB(a[0],a[1],a[2],vn),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Nt)),Promise.all(r)}}class SM{constructor(e){this.parser=e,this.name=tt.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Gt}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class wM{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Gt}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class bM{constructor(e){this.parser=e,this.name=tt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class TM{constructor(e){this.parser=e,this.name=tt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class EM{constructor(e){this.parser=e,this.name=tt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class AM{constructor(e){this.name=tt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const c=i.byteOffset||0,l=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(p){return p.buffer}):o.ready.then(function(){const p=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(p),h,u,d,i.mode,i.filter),p})})}else return null}}class RM{constructor(e){this.name=tt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const l of i.primitives)if(l.mode!==Dn.TRIANGLES&&l.mode!==Dn.TRIANGLE_STRIP&&l.mode!==Dn.TRIANGLE_FAN&&l.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],c={};for(const l in o)a.push(this.parser.getDependency("accessor",o[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{const h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,p=[];for(const g of u){const _=new Ye,m=new A,f=new $n,b=new A(1,1,1),S=new Nv(g.geometry,g.material,d);for(let x=0;x<d;x++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,x),c.ROTATION&&f.fromBufferAttribute(c.ROTATION,x),c.SCALE&&b.fromBufferAttribute(c.SCALE,x),S.setMatrixAt(x,_.compose(m,f,b));for(const x in c)if(x==="_COLOR_0"){const L=c[x];S.instanceColor=new Nl(L.array,L.itemSize,L.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&g.geometry.setAttribute(x,c[x]);Lt.prototype.copy.call(S,g),this.parser.assignFinalMaterial(S),p.push(S)}return h.isGroup?(h.clear(),h.add(...p),h):p[0]}))}}const Nf="glTF",Nr=12,vd={JSON:1313821514,BIN:5130562};class CM{constructor(e){this.name=tt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Nr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Nf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Nr,r=new DataView(e,Nr);let o=0;for(;o<i;){const a=r.getUint32(o,!0);o+=4;const c=r.getUint32(o,!0);if(o+=4,c===vd.JSON){const l=new Uint8Array(e,Nr+o,a);this.content=n.decode(l)}else if(c===vd.BIN){const l=Nr+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class PM{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=tt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(const h in o){const u=Hl[h]||h.toLowerCase();a[u]=o[h]}for(const h in e.attributes){const u=Hl[h]||h.toLowerCase();if(o[h]!==void 0){const d=n.accessors[e.attributes[h]],p=tr[d.componentType];l[u]=p.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(p){for(const g in p.attributes){const _=p.attributes[g],m=c[g];m!==void 0&&(_.normalized=m)}u(p)},a,l,vn,d)})})}}class IM{constructor(){this.name=tt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class LM{constructor(){this.name=tt.KHR_MESH_QUANTIZATION}}class Uf extends xo{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=i-t,u=(n-t)/h,d=u*u,p=d*u,g=e*l,_=g-l,m=-2*p+3*d,f=p-d,b=1-m,S=f-d+u;for(let x=0;x!==a;x++){const L=o[_+x+a],C=o[_+x+c]*h,P=o[g+x+a],E=o[g+x]*h;r[x]=b*L+S*C+m*P+f*E}return r}}const DM=new $n;class NM extends Uf{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return DM.fromArray(r).normalize().toArray(r),r}}const Dn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},tr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},yd={9728:pn,9729:An,9984:Bd,9985:sa,9986:Br,9987:Li},Md={33071:pi,33648:va,10497:Ms},Oc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Hl={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},$i={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},UM={CUBICSPLINE:void 0,LINEAR:to,STEP:eo},Bc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function FM(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new at({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Oi})),s.DefaultMaterial}function ms(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Pi(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function OM(s,e,t){let n=!1,i=!1,r=!1;for(let l=0,h=e.length;l<h;l++){const u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const o=[],a=[],c=[];for(let l=0,h=e.length;l<h;l++){const u=e[l];if(n){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;o.push(d)}if(i){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;a.push(d)}if(r){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;c.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){const h=l[0],u=l[1],d=l[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function BM(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function zM(s){let e;const t=s.extensions&&s.extensions[tt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+zc(t.attributes):e=s.indices+":"+zc(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+zc(s.targets[n]);return e}function zc(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function Vl(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function kM(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const HM=new Ye;class VM{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new hM,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const c=a.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&o<98?this.textureLoader=new by(this.options.manager):this.textureLoader=new Cy(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Cf(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return ms(r,a,i),Pi(a,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(const c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const o=t[i].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(o,a)=>{const c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(const[l,h]of o.children.entries())r(h,a.children[l])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[tt.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,o){n.load(Yr.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=Oc[i.type],a=tr[i.componentType],c=i.normalized===!0,l=new a(i.count*o);return Promise.resolve(new nn(l,o,c))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],c=Oc[i.type],l=tr[i.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=i.byteOffset||0,p=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let _,m;if(p&&p!==u){const f=Math.floor(d/p),b="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+f+":"+i.count;let S=t.cache.get(b);S||(_=new l(a,f*p,i.count*p/h),S=new Cv(_,p/h),t.cache.add(b,S)),m=new mh(S,c,d%p/h,g)}else a===null?_=new l(i.count*c):_=new l(a,d,i.count*c),m=new nn(_,c,g);if(i.sparse!==void 0){const f=Oc.SCALAR,b=tr[i.sparse.indices.componentType],S=i.sparse.indices.byteOffset||0,x=i.sparse.values.byteOffset||0,L=new b(o[1],S,i.sparse.count*f),C=new l(o[2],x,i.sparse.count*c);a!==null&&(m=new nn(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let P=0,E=L.length;P<E;P++){const y=L[P];if(m.setX(y,C[P*c]),c>=2&&m.setY(y,C[P*c+1]),c>=3&&m.setZ(y,C[P*c+2]),c>=4&&m.setW(y,C[P*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const i=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const d=(r.samplers||{})[o.sampler]||{};return h.magFilter=yd[d.magFilter]||An,h.minFilter=yd[d.minFilter]||Li,h.wrapS=Md[d.wrapS]||Ms,h.wrapT=Md[d.wrapT]||Ms,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==pn&&h.minFilter!==An,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const o=i.images[e],a=self.URL||self.webkitURL;let c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(u){l=!0;const d=new Blob([u],{type:o.mimeType});return c=a.createObjectURL(d),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(c).then(function(u){return new Promise(function(d,p){let g=d;t.isImageBitmapLoader===!0&&(g=function(_){const m=new Yt(_);m.needsUpdate=!0,d(m)}),t.load(Yr.resolveURL(u,r.path),g,void 0,p)})}).then(function(u){return l===!0&&a.revokeObjectURL(c),Pi(u,o),u.userData.mimeType=o.mimeType||kM(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[tt.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[tt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=r.associations.get(o);o=r.extensions[tt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new _o,Jn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new xh,Jn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return at}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let o;const a={},c=r.extensions||{},l=[];if(c[tt.KHR_MATERIALS_UNLIT]){const u=i[tt.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),l.push(u.extendParams(a,r,t))}else{const u=r.pbrMetallicRoughness||{};if(a.color=new Fe(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],vn),a.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",u.baseColorTexture,Nt)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Qt);const h=r.alphaMode||Bc.OPAQUE;if(h===Bc.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Bc.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==tn&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new re(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==tn&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==tn){const u=r.emissiveFactor;a.emissive=new Fe().setRGB(u[0],u[1],u[2],vn)}return r.emissiveTexture!==void 0&&o!==tn&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Nt)),Promise.all(l).then(function(){const u=new o(a);return r.name&&(u.name=r.name),Pi(u,r),t.associations.set(u,{materials:e}),r.extensions&&ms(i,u,r),u})}createUniqueName(e){const t=pt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[tt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return Sd(c,a,t)})}const o=[];for(let a=0,c=e.length;a<c;a++){const l=e[a],h=zM(l),u=i[h];if(u)o.push(u.promise);else{let d;l.extensions&&l.extensions[tt.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=Sd(new Wt,l,t),i[h]={primitive:l,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){const h=o[c].material===void 0?FM(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){const l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let p=0,g=h.length;p<g;p++){const _=h[p],m=o[p];let f;const b=l[p];if(m.mode===Dn.TRIANGLES||m.mode===Dn.TRIANGLE_STRIP||m.mode===Dn.TRIANGLE_FAN||m.mode===void 0)f=r.isSkinnedMesh===!0?new Iv(_,b):new J(_,b),f.isSkinnedMesh===!0&&f.normalizeSkinWeights(),m.mode===Dn.TRIANGLE_STRIP?f.geometry=xd(f.geometry,Kd):m.mode===Dn.TRIANGLE_FAN&&(f.geometry=xd(f.geometry,Pl));else if(m.mode===Dn.LINES)f=new gf(_,b);else if(m.mode===Dn.LINE_STRIP)f=new vh(_,b);else if(m.mode===Dn.LINE_LOOP)f=new Uv(_,b);else if(m.mode===Dn.POINTS)f=new Oa(_,b);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(f.geometry.morphAttributes).length>0&&BM(f,r),f.name=t.createUniqueName(r.name||"mesh_"+e),Pi(f,r),m.extensions&&ms(i,f,m),t.assignFinalMaterial(f),u.push(f)}for(let p=0,g=u.length;p<g;p++)t.associations.set(u[p],{meshes:e,primitives:p});if(u.length===1)return r.extensions&&ms(i,u[0],r),u[0];const d=new ze;r.extensions&&ms(i,d,r),t.associations.set(d,{meshes:e});for(let p=0,g=u.length;p<g;p++)d.add(u[p]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new xn(En.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new fh(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Pi(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),o=i,a=[],c=[];for(let l=0,h=o.length;l<h;l++){const u=o[l];if(u){a.push(u);const d=new Ye;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new _h(a,c)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],c=[],l=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){const p=i.channels[u],g=i.samplers[p.sampler],_=p.target,m=_.node,f=i.parameters!==void 0?i.parameters[g.input]:g.input,b=i.parameters!==void 0?i.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",f)),c.push(this.getDependency("accessor",b)),l.push(g),h.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){const d=u[0],p=u[1],g=u[2],_=u[3],m=u[4],f=[];for(let b=0,S=d.length;b<S;b++){const x=d[b],L=p[b],C=g[b],P=_[b],E=m[b];if(x===void 0)continue;x.updateMatrix&&x.updateMatrix();const y=n._createAnimationTracks(x,L,C,P,E);if(y)for(let M=0;M<y.length;M++)f.push(y[M])}return new Bl(r,void 0,f)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=i.weights.length;c<l;c++)a.morphTargetInfluences[c]=i.weights[c]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let l=0,h=a.length;l<h;l++)o.push(n.getDependency("node",a[l]));const c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){const h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(p){p.isSkinnedMesh&&p.bind(d,HM)});for(let p=0,g=u.length;p<g;p++)h.add(u[p]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(l){return i._getNodeRef(i.cameraCache,r.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let h;if(r.isBone===!0?h=new mf:l.length>1?h=new ze:l.length===1?h=l[0]:h=new Lt,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=o),Pi(h,r),r.extensions&&ms(n,h,r),r.matrix!==void 0){const u=new Ye;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new ze;n.name&&(r.name=i.createUniqueName(n.name)),Pi(r,n),n.extensions&&ms(t,r,n);const o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(i.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,u=c.length;h<u;h++)r.add(c[h]);const l=h=>{const u=new Map;for(const[d,p]of i.associations)(d instanceof Jn||d instanceof Yt)&&u.set(d,p);return h.traverse(d=>{const p=i.associations.get(d);p!=null&&u.set(d,p)}),u};return i.associations=l(r),r})}_createAnimationTracks(e,t,n,i,r){const o=[],a=e.name?e.name:e.uuid,c=[];$i[r.path]===$i.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(a);let l;switch($i[r.path]){case $i.weights:l=hr;break;case $i.rotation:l=ur;break;case $i.position:case $i.scale:l=dr;break;default:switch(n.itemSize){case 1:l=hr;break;case 2:case 3:default:l=dr;break}break}const h=i.interpolation!==void 0?UM[i.interpolation]:to,u=this._getArrayFromAccessor(n);for(let d=0,p=c.length;d<p;d++){const g=new l(c[d]+"."+$i[r.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Vl(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof ur?NM:Uf;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function GM(s,e,t){const n=e.attributes,i=new Hi;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(i.set(new A(c[0],c[1],c[2]),new A(l[0],l[1],l[2])),a.normalized){const h=Vl(tr[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new A,c=new A;for(let l=0,h=r.length;l<h;l++){const u=r[l];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],p=d.min,g=d.max;if(p!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),d.normalized){const _=Vl(tr[d.componentType]);c.multiplyScalar(_)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;const o=new xi;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function Sd(s,e,t){const n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){s.setAttribute(a,c)})}for(const o in n){const a=Hl[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){const o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return rt.workingColorSpace!==vn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${rt.workingColorSpace}" not supported.`),Pi(s,e),GM(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?OM(s,e.targets,t):s})}const WM=new lM,XM=["UpperLeg_L","UpperLeg_R","LowerLeg_L","LowerLeg_R","UpperArm_L","UpperArm_R","LowerArm_L","LowerArm_R","Spine","Hips","Head","Leg_FL","Leg_FR","Leg_BL","Leg_BR"],wd=["crouch","jump","land","flip","cartwheel","wave","cheer"];class lo{constructor(){this.root=new ze,this.bones={},this.actions={},this.clip="idle",this.path=[],this.onArrive=null,this.faceTo=null,this.speed=1.7,this.walk=0,this.phase=0,this.time=Math.random()*9,this.quadruped=!1,this.cartwheels=!1,this.steer=0,this.steerTime=0,this.lastX=0,this.lastZ=0,this.moved=0,this.wheelYaw=0,this.travelYaw=0,this.stride=.42,this.cwCool=2.5,this.wheeling=!1,this.lockClip=!1,this.restQ={},this.hipsY=0}static async load(e,t=!1){const n=await WM.loadAsync(e),i=new lo;i.quadruped=t,i.model=n.scene,n.scene.traverse(r=>{r.name&&(i.bones[r.name]=r);const o=r;o.isMesh&&(o.castShadow=!0,o.frustumCulled=!1,/_flame/.test(r.name)&&(o.visible=!1))});for(const r of Object.keys(i.bones))/^Flame_/.test(r)&&i.bones[r].scale.setScalar(.001);i.root.add(n.scene),i.mixer=new Gy(n.scene);for(const r of n.animations){r.tracks=r.tracks.filter(a=>!/^Flame_/.test(a.name));const o=i.mixer.clipAction(r);wd.includes(r.name)&&(o.setLoop(jd,1),o.clampWhenFinished=!0),i.actions[r.name]=o}i.actions.idle?.play();for(const r of XM)i.bones[r]&&(i.restQ[r]=i.bones[r].quaternion.clone());return i.bones.Hips&&(i.hipsY=i.bones.Hips.position.y,i.stride=i.hipsY*.62),i.bones.Body&&(i.hipsY=i.bones.Body.position.y),i}play(e,t=.2){const n=this.actions[e];if(!n||this.clip===e&&!wd.includes(e))return;const i=this.actions[this.clip];n.reset().setEffectiveWeight(1).play(),i&&i!==n&&i.crossFadeTo(n,t,!1),this.clip=e}once(e,t){this.play(e,.12);const n=this.actions[e];if(!n){t?.();return}const i=r=>{r.action===n&&(this.mixer.removeEventListener("finished",i),this.clip===e&&this.play("idle",.3),t?.())};this.mixer.addEventListener("finished",i)}goTo(e,t,n){this.path=e.map(i=>i.clone()),this.onArrive=t||null,this.faceTo=n??null,this.path.length||this.arrive()}arrive(){const e=this.onArrive;this.onArrive=null,e?.()}remaining(){let e=0,t=this.root.position;for(const n of this.path)e+=Math.hypot(n.x-t.x,n.z-t.z),t=n;return e}get moving(){return this.path.length>0}update(e){this.time+=e;const t=this.root.position;let n=null;if(this.path.length){const c=this.path[0],l=c.x-t.x,h=c.z-t.z,u=Math.hypot(l,h),d=this.speed*e*(this.wheeling?1.25:.35+.65*this.walk);u<=d?(t.x=c.x,t.z=c.z,this.path.shift(),this.path.length||this.arrive()):(t.x+=l/u*d,t.z+=h/u*d,n=Math.atan2(l,h))}else this.faceTo!==null&&(n=this.faceTo);(this.path.length||this.steer>.08)&&(this.travelYaw=n??this.travelYaw);let i=10;if(this.wheeling&&(n=this.wheelYaw-Math.PI/2,i=30),n!==null){let c=n-this.root.rotation.y;c=Math.atan2(Math.sin(c),Math.cos(c)),this.root.rotation.y+=c*Math.min(1,e*i)}this.steerTime=this.steer>.7?this.steerTime+e:0,this.cartwheels&&(this.path.length||this.steer>.7)&&!this.wheeling&&this.actions.cartwheel&&(this.cwCool-=e,this.cwCool<=0&&(this.remaining()>2.6||this.steerTime>1.2)&&(this.wheeling=!0,this.wheelYaw=this.travelYaw,this.cwCool=5+Math.random()*7,this.once("cartwheel",()=>{this.wheeling=!1})));const r=(this.path.length||this.steer>.08)&&!this.wheeling?1:0;this.walk+=(r-this.walk)*Math.min(1,e*8),this.moved=Math.hypot(t.x-this.lastX,t.z-this.lastZ),this.lastX=t.x,this.lastZ=t.z,this.moved>.5&&(this.moved=0);for(const c in this.restQ)this.bones[c].quaternion.copy(this.restQ[c]);const o=this.bones.Hips||this.bones.Body;o&&(o.position.y=this.hipsY),this.mixer.update(e),this.applyWalk(e);const a=this.time%4.1<.12;for(const c of["Eye_L","Eye_R"])this.bones[c]&&this.clip!=="nap"&&(this.bones[c].scale.y=a?.1:1)}rot(e,t,n=0){const i=this.bones[e];i&&(i.rotation.x+=t,i.rotation.z+=n)}rotY(e,t){const n=this.bones[e];n&&(n.rotation.y+=t)}applyWalk(e){const t=this.walk;if(t<.01||this.wheeling)return;this.phase+=this.moved/this.stride*Math.PI;const n=Math.sin(this.phase),i=Math.cos(this.phase);if(this.quadruped){this.rot("Leg_FL",n*.6*t),this.rot("Leg_BR",n*.6*t),this.rot("Leg_FR",-n*.6*t),this.rot("Leg_BL",-n*.6*t),this.bones.Body&&(this.bones.Body.position.y+=Math.abs(i)*.012*t);return}this.rot("UpperLeg_L",n*.45*t),this.rot("UpperLeg_R",-n*.45*t),this.rot("LowerLeg_L",-(.08+Math.max(0,i)*.85)*t),this.rot("LowerLeg_R",-(.08+Math.max(0,-i)*.85)*t),this.rot("UpperArm_L",-n*.38*t),this.rot("UpperArm_R",n*.38*t),this.rot("LowerArm_L",(.25-n*.12)*t),this.rot("LowerArm_R",(.25+n*.12)*t),this.rotY("Hips",n*.1*t),this.rotY("Spine",-n*.16*t),this.rotY("Head",n*.06*t),this.rot("Spine",.07*t),this.bones.Hips&&(this.bones.Hips.position.y+=(Math.abs(i)-.6)*.035*t)}}function qM(s){const e=s.bones.Head;if(!e)return;const t=s.bones.Eye_L,n=s.bones.Eye_R,i=new ze,r=new Gt({color:1314844,roughness:.08,metalness:.2,clearcoat:1,clearcoatRoughness:.05}),o=new at({color:15221359,roughness:.35}),a=new Ea;a.absellipse(0,0,.026,.019,0,Math.PI*2,!1,0);const c=new ao(a,{depth:.004,bevelEnabled:!0,bevelThickness:.002,bevelSize:.0025,bevelSegments:2,curveSegments:20});for(const l of[t,n]){if(!l)continue;const h=new J(c,r);h.position.set(l.position.x*1.05,l.position.y,l.position.z+.012),h.rotation.y=l.position.x*3.2,i.add(h);const u=new J(new os(.024,.0035,6,24),o);u.scale.set(1.12,.84,1),u.position.copy(h.position),u.position.z+=.003,u.rotation.copy(h.rotation),i.add(u)}if(t&&n){const l=new J(new Pt(.003,.003,Math.abs(t.position.x-n.position.x)*.5,6),o);l.rotation.z=Math.PI/2,l.position.set(0,t.position.y+.006,t.position.z+.018),i.add(l)}return e.add(i),i}const Gl="keiramila.save.v1",Wl="kmhouse.v1",YM={companions:[],companion:null,inbox:[],owned:[],found:[],treasures:[],seenBolts:-1,hero:"keira",visits:0};function Ha(s){try{return JSON.parse(localStorage.getItem(s)||"null")}catch{return null}}function Ff(s,e){try{localStorage.setItem(s,JSON.stringify(e))}catch{}}function jM(){const s=Ha(Wl),e={...YM,...s&&typeof s=="object"?s:{}};for(const t of["companions","inbox","owned","found","treasures"])Array.isArray(e[t])||(e[t]=[]);return e}function KM(s){const e=Ha(Wl);if(e&&Array.isArray(e.inbox))for(const t of e.inbox)!s.inbox.includes(t)&&!s.treasures.includes(t)&&s.inbox.push(t);Ff(Wl,s)}function Ch(){const s=Ha(Gl);return s&&typeof s.bolts=="number"?s.bolts:0}function Ph(s){const e=Ha(Gl)||{};return e.bolts=Math.max(0,(typeof e.bolts=="number"?e.bolts:0)+s),Ff(Gl,e),e.bolts}const Rt=(s,e=.7,t={})=>new at({color:s,roughness:e,...t}),wt=(s,e,t,n,i)=>(s.position.set(e,t,n),i.add(s),s);function ZM(s,e,t){s.traverse(n=>{const i=n.material;i&&i.color&&i.color.getHex()===e&&i.color.set(t)})}function kc(s,e,t,n,i){const r=Pf(e,t);r.repeat.set(2.4,4.3),Ln(s.H.mats.tile,r),s.H.mats.cab.color.set(n),ZM(s.scene,4876126,i)}function Ln(s,e){const t=s;t.map?.dispose(),t.map=e,t.needsUpdate=!0}function Hc(s,e,t=.4){const n=zi(e,.08);s.couch.group.traverse(i=>{const r=i.material;r&&r.isMeshPhysicalMaterial&&r.map&&(r.map=n,r.sheen=t,r.needsUpdate=!0)})}function Vc(s,e={}){const t=new ze;if(s.add(t),e.drawings!==!1){const f=Rt(15984840,.9,{transparent:!0,opacity:.85}),b=(x,L,C,P,E,y=0,M=1,I=t)=>{const B=new J(new Vt(.34*M,.42*M),new at({map:Ky(x),roughness:.95}));B.position.set(L,C,P),B.rotation.set(0,y,E),I.add(B);const O=new J(new Vt(.1,.03),f);O.position.set(0,.2*M,.002),O.rotation.z=.2,B.add(O)};b(0,-3.35,1.7,We.z0+.012,.08),b(2,-.75,1.55,We.z0+.012,-.06),b(3,-.62,2.05,We.z0+.012,.1,0,.8);const S=e.fridgeDoor;S&&(b(1,-.6,1.45,.086,-.05,0,.8,S),b(0,-.3,1.05,.086,.07,0,.7,S))}const n=(f,b,S,x)=>{const L=new ze;return L.position.set(b,0,S),L.rotation.y=x,t.add(L),wt(it(.11,.08,.26,Rt(f,.6),.04),0,.04,0,L),wt(it(.115,.025,.27,Rt(16052714,.7),.01),0,.012,0,L),L};n(15221359,-.4,2.4,.4),n(15221359,-.15,2.55,-.9).rotation.z=1.4,n(4156298,.6,2.1,2.2),n(4156298,.85,2.3,1.7);const i=new ze;i.position.set(-.68,0,-2),i.rotation.set(0,-.5,-.12),t.add(i),wt(it(.36,.44,.2,Rt(6967203,.8),.08),0,.22,0,i),wt(it(.26,.16,.08,Rt(5915280,.8),.04),0,.14,.12,i),wt(it(.04,.3,.02,Rt(2761272),.01),.1,.3,-.11,i);const r=Lf();r.scale.set(.9,.45,.8),r.position.set(-3.05,.45,-2.2),r.rotation.set(.2,.4,-.35),t.add(r),r.children[0].material=new at({map:zi("#3f6b5a",.14),roughness:.95}),wt(it(.45,.14,.45,new Gt({map:zi("#d9925a",.08),roughness:.9,sheen:.5}),.07,4),-1,.07,-1.1,t).rotation.y=.6;const o=[8203834,2898524,13213802,4156250,5978702];for(let f=0;f<5;f++)wt(pe(.26-f*.015,.05,.19,Rt(o[f],.7)),1.3,.025+f*.05,1.2,t).rotation.y=(f%2-.5)*.3;const a=new ze;a.position.set(-2.85,.015,-.1),a.rotation.y=.7,t.add(a);for(const f of[-1,1]){const b=wt(pe(.17,.02,.24,Rt(2898524,.6)),f*.085,.03,0,a);b.rotation.z=-f*.25}wt(new J(new It(.11,24,16),new at({map:Zy(),roughness:.5})),.9,.11,1.4,t).castShadow=!0;const c=new ze;c.position.set(-1.7,0,2.6),t.add(c);const l=Rt(12098154,.95);wt(new J(new Pt(.3,.25,.38,20,1,!0),Object.assign(l,{side:Qt})),0,.19,0,c).castShadow=!0,[15913176,10273760,16052714,6967203,15254106].forEach((f,b)=>wt(new J(new It(.13,10,8),Rt(f,.95)),Math.cos(b*1.3)*.12,.36+b%2*.05,Math.sin(b*1.3)*.12,c).scale.set(1,.55,1.1));const h=wt(it(.06,.03,.22,Rt(15913176),.015),-1.2,.015,2.3,t);h.rotation.y=.9;const u=new ze;u.position.set(-2.1,.43,-.7),t.add(u);for(let f=0;f<3;f++)wt(pe(.21,.002,.28,Rt(16513006,.9)),.05+f*.05,.002+f*.002,-.02+f*.03,u).rotation.y=f*.35-.3;[15221359,3134719,16769354,8011007,4170573].forEach((f,b)=>{wt(new J(new Pt(.008,.008,.09,8),Rt(f,.5)),.12+b*.03,.01,.16-b*.01,u).rotation.set(Math.PI/2,0,b*.4)});const p=wt(new J(new It(.08,20,10,0,Math.PI*2,Math.PI/2,Math.PI/2),Rt(16052714,.3,{side:Qt})),-.45,.085,-.15,u);p.rotation.x=Math.PI;const g=new ze;g.position.set(0,.91,We.z0+.3),t.add(g),wt(pe(.2,.3,.07,Rt(15246141,.6)),3.6,.15,-.1,g).rotation.y=.15,wt(pe(.18,.27,.07,Rt(3829713,.6)),3.82,.135,-.08,g).rotation.y=-.1;const _=wt(new J(new Pt(.16,.1,.07,20),Rt(2898524,.4)),2.95,.035,.05,g);[15246141,12597547,8367676,13934615].forEach((f,b)=>wt(new J(new It(.05,12,8),Rt(f,.45)),Math.cos(b*1.6)*.07,.07,Math.sin(b*1.6)*.07,_));for(let f=0;f<4;f++)wt(new J(new Pt(.11,.11,.012,20),Rt(16052714,.3)),2.05,.13,-.05+f*.035,g).rotation.x=Math.PI/2-.2;const m=wt(new J(new os(.09,.025,8,20),Rt(12597547,.9)),-3,.025,1.6,t);return m.rotation.x=Math.PI/2,t.traverse(f=>{const b=f;b.isMesh&&(b.castShadow=!0,b.receiveShadow=!0)}),t}function Gc(s,e){for(const[t,n,i]of e){const r=new ze;r.position.set(t,0,n),r.scale.setScalar(i),s.add(r),wt(new J(new Pt(.16,.12,.3,16),Rt(11887418,.8)),0,.15,0,r);const o=Rt(4160074,.6,{side:Qt});for(let a=0;a<7;a++){const c=a*.9,l=wt(new J(new It(.12,8,6),o),Math.cos(c)*.14,.42+a%3*.12,Math.sin(c)*.14,r);l.scale.set(.5,.1,1.3),l.rotation.set(.5,-c,.4),l.castShadow=!0}}}function $M(s){const e=new gh(new Uint8Array([90,90,90,255,170,170,170,255,235,235,235,255,255,255,255,255]),4,1);e.minFilter=e.magFilter=pn,e.needsUpdate=!0;const t=new Map;s.traverse(n=>{const i=n;if(!i.isMesh)return;const r=o=>{const a=o;if(!a.isMeshStandardMaterial||a.isShaderMaterial)return o;if(t.has(o))return t.get(o);const c=new dy({color:a.color,map:a.map,gradientMap:e,emissive:a.emissive,emissiveIntensity:a.emissiveIntensity,emissiveMap:a.emissiveMap,transparent:a.transparent,opacity:a.opacity,side:a.side});return t.set(o,c),c};i.material=Array.isArray(i.material)?i.material.map(r):r(i.material)})}const Xl={now:{name:"Now: evening, a bit formal",apply:()=>{}},lived:{name:"Lived-in: same house, real family",apply:s=>{const{scene:e,H:t,hemi:n,key:i}=s;Ln(t.mats.paper,es("#6f8a7a","rgba(250,240,210,.18)")),Ln(t.mats.kpaper,es("#e8d9b8","rgba(200,120,80,.16)")),Hc(t,"#a7643c",.5),Ln(t.mats.rug,ua(["#c9a06a","#3f5a6a","#f4ecdc","#7d4a3a","#e8a33d","#9c5a3a","#f4ecdc"])),kc(s,"#e6d6bc","#b5633a",8032106,9085050),Vc(e,{fridgeDoor:s.fridgeDoor}),Gc(e,[[-4.4,-2.75,1],[4.65,2.6,.9]]),n.intensity=.75,i.color.set(16767144),i.intensity=1.5,e.background=new Fe(1906450)}},sunny:{name:"Sunny afternoon: bright, airy, colourful",apply:s=>{const{scene:e,H:t,hemi:n,key:i,moon:r,renderer:o}=s;Ln(t.mats.paper,es("#e9e4d8","rgba(120,150,170,.14)")),Ln(t.mats.kpaper,es("#f4efe4","rgba(232,66,111,.10)")),Ln(t.mats.floor,co(["#d8b88c","#cfae80","#e0c39a","#c9a676","#dcbd92"])),Ln(t.mats.rug,ua(["#f2e9d8","#2fa3b0","#e8426f","#f2b134","#2fa3b0","#e8426f","#fff"])),Hc(t,"#4f7fa8",.6),t.mats.curtain.map=zi("#f2b134",.06),t.mats.curtain.needsUpdate=!0,t.mats.sky.map=jy(),t.mats.sky.needsUpdate=!0,kc(s,"#ffffff","#bcd8e6",15921386,16447730),t.mats.walnut.color.set(13215350),t.lamp.intensity=0,Vc(e,{fridgeDoor:s.fridgeDoor}),Gc(e,[[-4.4,-2.75,1.1],[4.65,2.6,1],[1.3,-2.7,.8]]),n.color.set(14675967),n.groundColor.set(12098170),n.intensity=1.25,i.color.set(16773592),i.intensity=2.4,i.position.set(-2,8,6),r.color.set(16773328),r.intensity=1.6;const a=new bh(16769712,30,9,.5,.6,1.2);a.position.set(.5,2.4,We.z0-1.2),a.target.position.set(0,0,.4),a.castShadow=!0,e.add(a,a.target),o.toneMappingExposure=1.1,e.background=new Fe(15327956)}},eclectic:{name:"Eclectic and a bit weird: deep colours, odd stuff",apply:s=>{const{scene:e,H:t,hemi:n,key:i}=s;Ln(t.mats.paper,es("#b8742f","rgba(40,20,60,.22)")),Ln(t.mats.kpaper,es("#2f5d6a","rgba(240,200,120,.2)")),Ln(t.mats.floor,co(["#5a3a26","#4e3220","#64432c","#553621"])),Ln(t.mats.rug,ua(["#2a1f4a","#e8a33d","#2fd4ff","#6b2430","#e8426f","#3f6b5a","#f4ecdc"])),Hc(t,"#6b2f5a",1),kc(s,"#f4ecdc","#1b1424",2761272,3813194),t.mats.curtain.map=zi("#2f5d6a",.08),t.mats.curtain.needsUpdate=!0,Vc(e,{fridgeDoor:s.fridgeDoor}),Gc(e,[[-4.4,-2.75,1.2],[4.65,2.6,1.2],[1.3,-2.7,1],[-.9,-2.6,.7],[-4.55,2.9,.9]]);const r=c=>Rt(c,.2,{emissive:c,emissiveIntensity:.9,transparent:!0,opacity:.8});[3134719,11570687,8388528,16758861].forEach((c,l)=>wt(new J(new Pt(.06,.06,.16+l%2*.06,16),r(c)),-.05+l*.17,.72,We.z0+.25,e));const o=[[-3.9,2.25,.3,.38,2776143],[-3.45,2.35,.25,.25,15246141],[-.55,2.3,.4,.3,7021616],[-.15,1.75,.22,.3,2898524],[-.6,1.7,.28,.28,14070378]];for(const[c,l,h,u,d]of o)wt(pe(h+.04,u+.04,.03,Rt(14070378,.3,{metalness:.7})),c,l,We.z0+.02,e),wt(pe(h,u,.032,Rt(d,.8)),c,l,We.z0+.025,e);n.intensity=.45,i.intensity=.9,i.color.set(16763024),t.lamp.color.set(16751178),t.lamp.intensity=8;const a=new ii(8011007,3,4,1.8);a.position.set(-.4,1.5,-1.8),e.add(a),e.background=new Fe(1182744)}},storybook:{name:"Storybook: flat painted shading",apply:s=>{Xl.lived.apply(s),$M(s.scene),window.__outline=!0,s.hemi.intensity=1,s.key.intensity=1.8,s.scene.background=new Fe(2760494)}}},ft=(s,e=.7,t={})=>new at({color:s,roughness:e,...t}),qe=(s,e,t,n,i)=>(s.position.set(e,t,n),i.add(s),s),mn=3.3,Ii=(Ht+qt)/2;function JM(){const s=new ze,e=We.x0-.15,t=.9,n=e-t,i=ft(4866104,.9);qe(pe(.05,3,qt-Ht+.3),n,1.5,Ii,s).material=i,qe(pe(t,3,.05),e-t/2,1.5,Ht-.15,s).material=i,qe(pe(t,3,.05),e-t/2,1.5,qt+.15,s).material=i,qe(pe(t,.02,qt-Ht+.3),e-t/2,.01,Ii,s).material=ft(6967360,.8);const r=new ii(16767136,0,2.2,2);r.position.set(e-.45,2.2,Ii),s.add(r);const o=qe(new J(new Pt(.012,.012,qt-Ht+.25,8),ft(11184810,.3,{metalness:.9})),n+.28,1.85,Ii,s);o.rotation.x=Math.PI/2;const a=[];[[2898524,-.3],[9058874,-.05],[4156250,.22]].forEach(([S,x])=>{const L=qe(it(.32,.9,.16,ft(S,.9),.07),n+.28,1.4,Ii+x,s);L.rotation.y=Math.PI/2+x,a.push(L)}),qe(new J(new Pt(.02,.05,.8,8),ft(1774628,.5)),n+.15,.4,qt-.05,s).rotation.z=.15;for(let S=0;S<2;S++)qe(it(.12,.3,.26,ft(13934615,.5),.05),n+.6,.15,Ht+.1+S*.16,s);const c=new ze;c.position.set(e-.35,3,Ii+.1),s.add(c),qe(new J(new Pt(.004,.004,1,4),ft(15261904)),0,-.5,0,c);const l=qe(new J(new It(.035,12,8),ft(10251075,.4)),0,-1.02,0,c),h=qe(new J(new ni(.3,1.2,.3),new tn({visible:!1})),0,-.6,0,c),u=new ze;s.add(u);const d=ft(12098154,.6),p=3.4;for(const S of[-1,1])qe(pe(.05,p,.06,d),0,p/2,S*.22,u);for(let S=0;S<10;S++)qe(pe(.05,.035,.44,d),0,.2+S*.33,0,u);u.position.set(e-.55,0,Ii),u.rotation.z=-.2;const g=[new hi(new A(0,-1,0),3)];d.clippingPlanes=g;const _=qe(new J(new ni(.5,2.6,.6),new tn({visible:!1})),0,1.3,0,u),m=new ze;m.position.set(We.x0+.02,0,Ht),s.add(m);const f=ft(15129803,.5),b=qe(it(.05,2.02,qt-Ht-.02,f,.01),0,1.01,(qt-Ht)/2,m);for(const S of[.55,1.45])qe(pe(.012,.6,qt-Ht-.24),.03,S,(qt-Ht)/2,m).material=ft(14273976,.5);return qe(new J(new It(.03,12,8),ft(11570519,.3,{metalness:.9})),.05,1,qt-Ht-.08,m),s.traverse(S=>{const x=S;x.isMesh&&(x.castShadow=!0,x.receiveShadow=!0)}),{group:s,door:m,doorHit:b,cord:c,cordHit:h,bead:l,ladder:u,ladderHit:_,coats:a,light:r}}function QM(){const s=document.createElement("canvas");s.width=256,s.height=192;const e=s.getContext("2d");e.fillStyle="#e8d6ac",e.fillRect(0,0,256,192),e.strokeStyle="#6a4a2a",e.lineWidth=3,e.strokeRect(30,40,196,120),e.beginPath(),e.moveTo(130,40),e.lineTo(130,160),e.stroke(),e.fillStyle="#b8342a",e.font="bold 26px serif",e.fillText("X",60,110),e.fillText("X",170,140);const t=new _r(s);return t.colorSpace=Nt,t}function e1(){const s=new ze;s.position.y=mn;const e=We.x0,t=1.2,n=We.z0,i=2.9,r=-.1,o=2.8,a=.8,c=new at({map:co(["#5a4636","#4e3c2e","#634d3a","#56422f"]),roughness:.85});c.map.repeat.set(1.6,1.6);const l=new J(new Vt(t-e,i-n),c);l.rotation.x=-Math.PI/2,l.position.set((e+t)/2,.001,(n+i)/2),l.receiveShadow=!0,s.add(l);const h=ft(2760216,.9);qe(pe(t-e,.3,i-n),(e+t)/2,-.15,(n+i)/2,s).material=h;const u=new J(new Vt(40,40),new tn({visible:!1}));u.rotation.x=-Math.PI/2,s.add(u);const d=new Ea;d.moveTo(n,0),d.lineTo(n,a),d.lineTo(r,o),d.lineTo(i,a),d.lineTo(i,0),d.lineTo(n,0);const p=new Ta;p.absarc(-.3,1.55,.36,0,Math.PI*2,!0),d.holes.push(p);const g=new at({map:co(["#7a6450","#6e5a48","#85705a"]),roughness:.9});g.map.repeat.set(.6,.6);const _=new J(new ao(d,{depth:.12,bevelEnabled:!1}),g);_.rotation.y=-Math.PI/2,_.position.set(e,0,0),_.receiveShadow=!0,s.add(_);const m=new J(new Ui(.36,32),new tn({map:If()}));m.rotation.y=Math.PI/2,m.position.set(e-.1,1.55,-.3),s.add(m);const f=qe(new J(new os(.37,.04,8,32),ft(15327695,.5)),e+.01,1.55,-.3,s);f.rotation.y=Math.PI/2;for(const w of[0,Math.PI/2]){const v=qe(pe(.02,.72,.025,ft(15327695)),e+.01,1.55,-.3,s);v.rotation.x=w}const b=new bh(10466559,6,7,.45,.8,1.5);b.position.set(e-.3,1.6,-.3),b.target.position.set(-2.5,0,.8),s.add(b,b.target),qe(pe(t-e,a,.1,g),(e+t)/2,a/2,n-.05,s);const S=Math.hypot(r-n,o-a),x=Math.atan2(o-a,r-n),L=new J(new Vt(t-e,S),new at({color:9073240,roughness:.95,side:Qt}));L.position.set((e+t)/2,(a+o)/2,(n+r)/2),L.rotation.x=Math.PI/2-x,L.receiveShadow=!0,s.add(L);const C=ft(5914672,.8);for(let w=e+.3;w<t;w+=.75){const v=pe(.09,.14,S,C);v.position.set(w,(a+o)/2-.06,(n+r)/2+.05),v.rotation.x=-x,s.add(v)}const P=pe(t-e,.16,.12,C);P.position.set((e+t)/2,o-.05,r),s.add(P);const E=ft(2760216,.9);qe(pe(.14,.06,i-n+.1),e-.06,.03,(n+i)/2,s).material=E;const y=new ze;y.position.set(-2.4,o-.1,r),s.add(y),qe(new J(new Pt(.004,.004,.8,4),ft(2236962)),0,-.4,0,y),qe(new J(new It(.06,12,10),new at({color:16773320,emissive:16762992,emissiveIntensity:3})),0,-.86,0,y);const M=new ii(16763008,5,6,1.6);M.position.set(0,-.95,0),M.castShadow=!0,M.shadow.mapSize.set(512,512),y.add(M);const I=ft(11569754,.95),B=ft(14271130,.8),O=(w,v,N,W,$,X=0,Ee=0)=>{const ue=qe(it(N,W,$,I,.01),w,X+W/2,v,s);return ue.rotation.y=Ee,qe(pe(N+.005,.005,.08),0,W/2,0,ue).material=B,ue};O(-4.5,-2.5,.6,.45,.5),O(-4.45,-2.45,.5,.35,.45,.45,.2),O(-3.8,-2.55,.5,.5,.45,0,-.2),O(.6,-2.4,.55,.4,.5,0,.3),O(.65,-2.35,.4,.3,.35,.4,-.1),[[7021616,.7],[2898524,.6],[9071162,.5]].forEach(([w,v],N)=>qe(it(v,.16,.4,ft(w,.6),.04),-1,.08+N*.16,-2.5,s).rotation.y=N*.15);const G=new ze;G.position.set(-3.6,0,.9),G.rotation.y=-2.1,s.add(G);const j=ft(4861986,.6);qe(pe(.5,.05,.45,j),0,.42,0,G),qe(pe(.5,.6,.04,j),0,.75,-.22,G).rotation.x=-.15;for(const w of[-1,1])qe(pe(.04,.42,.04,j),w*.22,.21,.18,G),qe(pe(.04,.42,.04,j),w*.22,.21,-.18,G),qe(new J(new os(.6,.02,6,24,.9),j),w*.22,.6,0,G).rotation.set(0,Math.PI/2,Math.PI*1.5-.45);const H=new ze;H.position.set(-1.9,0,-2.3),s.add(H);const Q=ft(5913126,.55),V=ft(9075290,.3,{metalness:.8});qe(it(1,.45,.55,Q,.03),0,.225,0,H);for(const w of[-.35,.35])qe(pe(.06,.46,.56,V),w,.225,0,H);const le=new ze;le.position.set(0,.45,-.275),H.add(le);const fe=qe(new J(new Pt(.275,.275,1,20,1,!1,0,Math.PI),Q),0,0,.275,le);fe.rotation.set(0,0,Math.PI/2),fe.scale.set(1,1,.5),fe.castShadow=!0,qe(pe(.08,.1,.03,ft(13213802,.3,{metalness:.9})),0,.4,.28,H);const me=qe(new J(new Vt(.4,.3),new at({map:QM(),roughness:.9})),.1,.452,.05,H);me.rotation.set(-Math.PI/2,0,.3),me.visible=!1;const Ce=new ze;Ce.position.set(.25,0,-1),Ce.rotation.y=-.6,s.add(Ce);const st=ft(10254908,.35,{metalness:.7}),Y=new Ea;Y.absellipse(0,0,.5,.85,0,Math.PI*2,!1,0);const ie=new Ta;ie.absellipse(0,0,.42,.77,0,Math.PI*2,!0,0),Y.holes.push(ie),qe(new J(new ao(Y,{depth:.06,bevelEnabled:!0,bevelSize:.02,bevelThickness:.02,bevelSegments:2}),st),0,1.05,0,Ce).castShadow=!0;for(const w of[-1,1])qe(pe(.05,.3,.3),w*.25,.12,.05,Ce).material=st;const Se=Df(.42);Se.group.rotation.x=Math.PI/2,Se.group.scale.set(1,1,.77/.42),Se.group.position.set(0,1.05,.04),Ce.add(Se.group);const ae=qe(new J(new Ui(.42,32),ft(5923952,.15,{metalness:.9})),0,1.05,.03,Ce);ae.scale.y=.77/.42,qe(new J(new Ui(.025,12),ft(657930)),0,.17,.09,Ce);const Pe=new Vt(1.2,2,24,30),Oe=Pe.attributes.position;for(let w=0;w<Oe.count;w++){const v=Oe.getX(w),N=Oe.getY(w),W=Math.max(0,-N-.1);Oe.setXYZ(w,v*(1+W*.25),N,.12+Math.sin(v*14+N*2)*.03*(.3+W)+W*W*.15)}Pe.computeVertexNormals();const Be=new J(Pe,new at({color:15328472,roughness:1,side:Qt}));Be.position.set(0,1,0),Be.castShadow=!0,Ce.add(Be);const Je=80,K=new Float32Array(Je*3);for(let w=0;w<Je;w++)K[w*3]=-4+Math.random()*4.5,K[w*3+1]=Math.random()*2.4,K[w*3+2]=-2.5+Math.random()*4.5;const se=new Wt;se.setAttribute("position",new nn(K,3));const R=new Oa(se,new _o({map:Rh(),size:.035,color:16773328,transparent:!0,opacity:.6,depthWrite:!1,blending:Jr}));s.add(R);const we=new ze;we.position.set(We.x0+.65,0,Ii),s.add(we),qe(pe(.8,.02,.7,ft(722950,1)),0,.006,0,we);for(const w of[-1,1])qe(pe(.05,.5,.06,ft(12098154)),-.2,.25,w*.22,we);const te=qe(new J(new ni(.9,.6,.8),new tn({visible:!1})),0,.3,0,we),ye=new xh({color:16777215,transparent:!0,opacity:.25});for(const[w,v,N]of[[e+.01,a-.02,n+.01],[e+.01,o-.2,r]]){const W=[];for(let $=0;$<7;$++){const X=$/6*Math.PI/2;W.push(new A(w,v,N),new A(w+Math.cos(X)*.01,v-Math.sin(X)*.4,N+Math.cos(X)*.4))}for(const $ of[.15,.27,.38])for(let X=0;X<6;X++){const Ee=X/6*Math.PI/2,ue=(X+1)/6*Math.PI/2;W.push(new A(w,v-Math.sin(Ee)*$,N+Math.cos(Ee)*$),new A(w,v-Math.sin(ue)*$,N+Math.cos(ue)*$))}s.add(new gf(new Wt().setFromPoints(W),ye))}s.traverse(w=>{const v=w;v.isMesh&&v.material!==Be.material&&(v.castShadow=v.castShadow||!1,v.receiveShadow=!0)});const Z=(w,v,N,W)=>new ka(new re(w-N/2,v-W/2),new re(w+N/2,v+W/2)),_e=[Z(-4.3,-2.5,1.3,.7),Z(.62,-2.4,.7,.65),Z(-1,-2.5,.8,.5),Z(-1.9,-2.3,1.05,.6),Z(-3.6,.9,.7,.7),Z(.25,-1,.8,.6),Z(We.x0+.65,Ii,.85,.75)],he={x0:e+.35,x1:t-.3,z0:n+.95,z1:i-.3};return{group:s,floorHit:u,trunk:H,lid:le,mapPaper:me,mirror:Ce,sheet:Be,glass:Se,hatch:we,hatchHit:te,motes:R,blockers:_e,bounds:he,bulb:M}}function t1(s,e){s.width=680,s.height=860;const i=s.getContext("2d"),r=i.createRadialGradient(680/2,860/2,100,680/2,860/2,600);r.addColorStop(0,"#efdfb8"),r.addColorStop(1,"#c9a874"),i.fillStyle=r,i.fillRect(0,0,680,860);for(let c=0;c<4e3;c++)i.fillStyle=`rgba(90,60,30,${Math.random()*.05})`,i.fillRect(Math.random()*680,Math.random()*860,3,3);i.strokeStyle="#5a3a22",i.fillStyle="#5a3a22",i.lineWidth=4,i.lineCap="round",i.font="italic 600 38px Fraunces, Georgia, serif",i.textAlign="center",i.fillText("Our House",680/2,70),i.font="italic 22px Fraunces, Georgia, serif",i.fillText("(the secret parts)",680/2,102);const o=(c,l,h,u,d)=>{i.strokeRect(c,l,h,u),i.font="italic 24px Fraunces, Georgia, serif",i.fillText(d,c+h/2,l+32)};i.beginPath(),i.moveTo(80,300),i.lineTo(300,150),i.lineTo(520,300),i.closePath(),i.stroke(),i.font="italic 24px Fraunces, Georgia, serif",i.fillText("Attic",300,280),o(80,300,440,220,"Living room"),o(520,300,120,220,"Kitchen"),o(80,520,560,170,"Basement ?"),i.setLineDash([8,10]),i.strokeRect(80,720,560,100),i.setLineDash([]),i.fillText("The garden",360,752);const a=(c,l,h,u)=>{i.save(),i.strokeStyle="#a8281e",i.fillStyle="#a8281e",i.lineWidth=6,h?(i.beginPath(),i.arc(c,l,26,0,Math.PI*2),i.stroke(),i.lineWidth=7,i.beginPath(),i.moveTo(c-14,l),i.lineTo(c-3,l+12),i.lineTo(c+16,l-14),i.stroke()):(i.beginPath(),i.moveTo(c-16,l-16),i.lineTo(c+16,l+16),i.moveTo(c+16,l-16),i.lineTo(c-16,l+16),i.stroke()),i.font="italic 20px Fraunces, Georgia, serif",i.fillText(u,c,l+50),i.restore()};a(250,400,e.includes("portal"),"couch"),a(130,440,e.includes("shelf"),"books"),a(420,240,e.includes("mirror"),"mirror"),a(580,420,!1,"fridge?"),a(300,620,!1,""),a(540,780,!1,"")}class n1{constructor(e,t={}){this.enabled=!0;const n=t.defaultThickness!==void 0?t.defaultThickness:.003,i=new Fe().fromArray(t.defaultColor!==void 0?t.defaultColor:[0,0,0]),r=t.defaultAlpha!==void 0?t.defaultAlpha:1,o=t.defaultKeepAlive!==void 0?t.defaultKeepAlive:!1,a={},c=60,l={},h={},u={outlineThickness:{value:n},outlineColor:{value:i},outlineAlpha:{value:r}},d=["#include <common>","#include <uv_pars_vertex>","#include <displacementmap_pars_vertex>","#include <fog_pars_vertex>","#include <morphtarget_pars_vertex>","#include <skinning_pars_vertex>","#include <logdepthbuf_pars_vertex>","#include <clipping_planes_pars_vertex>","uniform float outlineThickness;","vec4 calculateOutline( vec4 pos, vec3 normal, vec4 skinned ) {","	float thickness = outlineThickness;","	const float ratio = 1.0;","	vec4 pos2 = projectionMatrix * modelViewMatrix * vec4( skinned.xyz + normal, 1.0 );","	vec4 norm = normalize( pos - pos2 );","	return pos + norm * thickness * pos.w * ratio;","}","void main() {","	#include <uv_vertex>","	#include <beginnormal_vertex>","	#include <morphnormal_vertex>","	#include <skinbase_vertex>","	#include <skinnormal_vertex>","	#include <begin_vertex>","	#include <morphtarget_vertex>","	#include <skinning_vertex>","	#include <displacementmap_vertex>","	#include <project_vertex>","	vec3 outlineNormal = - objectNormal;","	gl_Position = calculateOutline( gl_Position, outlineNormal, vec4( transformed, 1.0 ) );","	#include <logdepthbuf_vertex>","	#include <clipping_planes_vertex>","	#include <fog_vertex>","}"].join(`
`),p=["#include <common>","#include <fog_pars_fragment>","#include <logdepthbuf_pars_fragment>","#include <clipping_planes_pars_fragment>","uniform vec3 outlineColor;","uniform float outlineAlpha;","void main() {","	#include <clipping_planes_fragment>","	#include <logdepthbuf_fragment>","	gl_FragColor = vec4( outlineColor, outlineAlpha );","	#include <tonemapping_fragment>","	#include <colorspace_fragment>","	#include <fog_fragment>","	#include <premultiplied_alpha_fragment>","}"].join(`
`);function g(){return new _i({type:"OutlineEffect",uniforms:rf.merge([de.fog,de.displacementmap,u]),vertexShader:d,fragmentShader:p,side:fn})}function _(E){let y=a[E.uuid];return y===void 0&&(y={material:g(),used:!0,keepAlive:o,count:0},a[E.uuid]=y),y.used=!0,y.material}function m(E){const y=_(E);return l[y.uuid]=E,C(y,E),y}function f(E){const y=E.geometry,M=y!==void 0&&y.attributes.normal!==void 0;return E.isMesh===!0&&E.material!==void 0&&M===!0}function b(E){if(f(E)!==!1){if(Array.isArray(E.material))for(let y=0,M=E.material.length;y<M;y++)E.material[y]=m(E.material[y]);else E.material=m(E.material);h[E.uuid]=E.onBeforeRender,E.onBeforeRender=x}}function S(E){if(f(E)!==!1){if(Array.isArray(E.material))for(let y=0,M=E.material.length;y<M;y++)E.material[y]=l[E.material[y].uuid];else E.material=l[E.material.uuid];E.onBeforeRender=h[E.uuid]}}function x(E,y,M,I,B){const O=l[B.uuid];O!==void 0&&L(B,O)}function L(E,y){const M=y.userData.outlineParameters;E.uniforms.outlineAlpha.value=y.opacity,M!==void 0&&(M.thickness!==void 0&&(E.uniforms.outlineThickness.value=M.thickness),M.color!==void 0&&E.uniforms.outlineColor.value.fromArray(M.color),M.alpha!==void 0&&(E.uniforms.outlineAlpha.value=M.alpha)),y.displacementMap&&(E.uniforms.displacementMap.value=y.displacementMap,E.uniforms.displacementScale.value=y.displacementScale,E.uniforms.displacementBias.value=y.displacementBias)}function C(E,y){if(E.name==="invisible")return;const M=y.userData.outlineParameters;E.fog=y.fog,E.toneMapped=y.toneMapped,E.premultipliedAlpha=y.premultipliedAlpha,E.displacementMap=y.displacementMap,M!==void 0?(y.visible===!1?E.visible=!1:E.visible=M.visible!==void 0?M.visible:!0,E.transparent=M.alpha!==void 0&&M.alpha<1?!0:y.transparent,M.keepAlive!==void 0&&(a[y.uuid].keepAlive=M.keepAlive)):(E.transparent=y.transparent,E.visible=y.visible),(y.wireframe===!0||y.depthTest===!1)&&(E.visible=!1),y.clippingPlanes&&(E.clipping=!0,E.clippingPlanes=y.clippingPlanes,E.clipIntersection=y.clipIntersection,E.clipShadows=y.clipShadows),E.version=y.version}function P(){let E;E=Object.keys(l);for(let y=0,M=E.length;y<M;y++)l[E[y]]=void 0;E=Object.keys(h);for(let y=0,M=E.length;y<M;y++)h[E[y]]=void 0;E=Object.keys(a);for(let y=0,M=E.length;y<M;y++){const I=E[y];a[I].used===!1?(a[I].count++,a[I].keepAlive===!1&&a[I].count>c&&delete a[I]):(a[I].used=!1,a[I].count=0)}}this.render=function(E,y){if(this.enabled===!1){e.render(E,y);return}const M=e.autoClear;e.autoClear=this.autoClear,e.render(E,y),e.autoClear=M,this.renderOutline(E,y)},this.renderOutline=function(E,y){const M=e.autoClear,I=E.matrixWorldAutoUpdate,B=E.background,O=e.shadowMap.enabled;E.matrixWorldAutoUpdate=!1,E.background=null,e.autoClear=!1,e.shadowMap.enabled=!1,E.traverse(b),e.render(E,y),E.traverse(S),P(),E.matrixWorldAutoUpdate=I,E.background=B,e.autoClear=M,e.shadowMap.enabled=O},this.autoClear=e.autoClear,this.domElement=e.domElement,this.shadowMap=e.shadowMap,this.clear=function(E,y,M){e.clear(E,y,M)},this.getPixelRatio=function(){return e.getPixelRatio()},this.setPixelRatio=function(E){e.setPixelRatio(E)},this.getSize=function(E){return e.getSize(E)},this.setSize=function(E,y,M){e.setSize(E,y,M)},this.setViewport=function(E,y,M,I){e.setViewport(E,y,M,I)},this.setScissor=function(E,y,M,I){e.setScissor(E,y,M,I)},this.setScissorTest=function(E){e.setScissorTest(E)},this.setRenderTarget=function(E){e.setRenderTarget(E)}}}let Ur=null;const Ih=()=>{if(!Ur)try{Ur=new AudioContext}catch{return null}return Ur.state==="suspended"&&Ur.resume(),Ur};function rs(s,e,t,n="sine",i=.12){const r=Ih();if(!r)return;const o=r.createOscillator(),a=r.createGain();o.type=n,o.frequency.value=s,a.gain.setValueAtTime(0,r.currentTime+e),a.gain.linearRampToValueAtTime(i,r.currentTime+e+.01),a.gain.exponentialRampToValueAtTime(1e-4,r.currentTime+e+t),o.connect(a).connect(r.destination),o.start(r.currentTime+e),o.stop(r.currentTime+e+t+.05)}function Xt(s=1){[[659],[784,988],[523,659,784,1047],[392,523,659,784,988,1319]][Math.min(3,s)].forEach((t,n)=>{rs(t,n*.08,.9,"sine",.09),rs(t*2,n*.08,.4,"triangle",.02)})}function Va(){rs(1319,0,.12,"square",.03),rs(1760,.07,.3,"square",.03)}function i1(){const s=Ih();if(!s)return;const e=s.createBufferSource(),t=s.createBuffer(1,s.sampleRate*1.2,s.sampleRate),n=t.getChannelData(0);for(let o=0;o<n.length;o++)n[o]=(Math.random()*2-1)*(1-o/n.length);e.buffer=t;const i=s.createBiquadFilter();i.type="bandpass",i.Q.value=3,i.frequency.setValueAtTime(300,s.currentTime),i.frequency.exponentialRampToValueAtTime(3e3,s.currentTime+1);const r=s.createGain();r.gain.value=.25,e.connect(i).connect(r).connect(s.destination),e.start(),[262,330,392,523,659].forEach((o,a)=>rs(o,.1+a*.07,.6,"sine",.06))}let da=null;function s1(){const s=[110,98,87.3,82.4],e=[[220,262,330],[196,247,294],[175,220,262],[165,208,247]];let t=0;const n=()=>{const i=t%4;rs(s[i],0,1.6,"triangle",.08),e[i].forEach((r,o)=>rs(r,.4+o*.02,1,"sine",.035)),rs(e[i][2]*2,1.2,.5,"sine",.03),t++};n(),da=window.setInterval(n,1800)}function r1(){da&&clearInterval(da),da=null}function o1(){const s=Ih();if(!s)return()=>{};const e=s.createGain();e.gain.value=0,e.connect(s.destination),e.gain.linearRampToValueAtTime(.07,s.currentTime+1.5);const t=[55,82.4,110.7].map((r,o)=>{const a=s.createOscillator();return a.type=o?"sine":"triangle",a.frequency.value=r,a.connect(e),a.start(),a}),n=s.createOscillator(),i=s.createGain();return n.frequency.value=.3,i.gain.value=4,n.connect(i),i.connect(t[2].frequency),n.start(),()=>{e.gain.linearRampToValueAtTime(0,s.currentTime+1),setTimeout(()=>{t.forEach(r=>r.stop()),n.stop()},1200)}}const xt=s=>document.getElementById(s),ho=new URLSearchParams(location.search),a1="../index.html",Mr=xt("c"),zn=new Rv({canvas:Mr,antialias:!0});zn.setPixelRatio(Math.min(devicePixelRatio,2));zn.outputColorSpace=Nt;zn.toneMapping=Fd;zn.toneMappingExposure=1.05;zn.shadowMap.enabled=!0;zn.shadowMap.type=Nd;const yt=new pf;yt.background=new Fe(1380636);const c1=new Ll(zn);yt.environment=c1.fromScene(new Xy,.04).texture;yt.environmentIntensity=.32;const en=new xn(36,1,.1,80),Ga=new Ty(12109032,4863014,.55);yt.add(Ga);const ri=new Th(16770764,1.25);ri.position.set(4,9,7);ri.castShadow=!0;ri.shadow.mapSize.set(2048,2048);Object.assign(ri.shadow.camera,{left:-7,right:7,top:6,bottom:-6,near:1,far:25});ri.shadow.bias=-4e-4;ri.shadow.normalBias=.02;ri.shadow.radius=4;yt.add(ri);const Lh=new Th(8363263,.5);Lh.position.set(.5,3,-8);yt.add(Lh);const bd=ho.get("style")||"lived",an=aM();yt.add(an.group);const{couch:Qn,shelf:fr,fridge:uo}=an,ki=Df(.3);ki.group.position.set(Qn.cushionPivot.position.x,.432,.13);Qn.group.add(ki.group);const Ve=jM();Ve.visits++;let un=Ch(),pr=!1;try{sessionStorage.getItem("km_went")&&(pr=!0,sessionStorage.removeItem("km_went"))}catch{}ho.has("back")&&(pr=!0);const Of=Ve.seenBolts>=0?un-Ve.seenBolts:0;Of>0&&(pr=!0);pr&&!Ve.found.includes("traveled")&&Ve.found.push("traveled");Ve.seenBolts=un;const Zt=()=>{Ve.seenBolts=un,KM(Ve)};Zt();const Mn=s=>Ve.owned.includes(s),ke=s=>Ve.found.includes(s),$e={wallet:xt("wallet"),coins:xt("coinN"),toast:xt("toast"),shopBtn:xt("shopBtn"),shop:xt("shop"),shopList:xt("shopList"),fridge:xt("fridgeP"),fridgeList:xt("fridgeList"),jump:xt("jumpBtn"),who:xt("who"),buddy:xt("buddy"),flash:xt("flash"),intro:xt("intro")};function Sr(s){if(s===void 0){$e.coins.textContent=String(un);return}const e=s,t=un,n=performance.now(),i=()=>{const r=Math.min(1,(performance.now()-n)/1200);$e.coins.textContent=String(Math.round(e+(t-e)*r)),r<1&&requestAnimationFrame(i)};i(),$e.wallet.classList.remove("pop"),$e.wallet.offsetWidth,$e.wallet.classList.add("pop")}Sr();let Td=0;function Ft(s,e=3400){$e.toast.innerHTML=s,$e.toast.classList.add("show"),clearTimeout(Td),Td=window.setTimeout(()=>$e.toast.classList.remove("show"),e)}function Bf(s){if(un=Ch(),un<s)return Ft(`You need <b>${s-un}</b> more pennies. The couch portal is a good place to find some.`),!1;const e=un;return un=Ph(-s),Zt(),Sr(e),Va(),!0}function fo(){const s={george:"George",owl:"Owl"};$e.buddy.classList.toggle("hidden",!Ve.companions.length),$e.buddy.innerHTML=Ve.companion?`Bringing <b>${s[Ve.companion]}</b>`:"No buddy"}fo();const ys={};let Ne,Ct,Kn=ho.get("hero")==="mila"?"mila":ho.get("hero")==="keira"?"keira":Ve.hero,di=null;const ql=s=>`./${s}.glb`,l1=new A(-.6,0,.4),h1=new A(-1.2,0,1.3),Wa=an.blockers.map(s=>s.clone().expandByScalar(.28)),zf={x0:We.x0+.35,x1:We.x1-.35,z0:We.z0+.4,z1:We.z1-.3};let vo=Wa,Rn=zf,Sn=0;function u1(s){s.x=En.clamp(s.x,Rn.x0,Rn.x1),s.z=En.clamp(s.z,Rn.z0,Rn.z1),s.y=Sn?mn:0;for(const e of vo)if(s.x>e.min.x&&s.x<e.max.x&&s.z>e.min.y&&s.z<e.max.y){const t=[s.x-e.min.x,e.max.x-s.x,s.z-e.min.y,e.max.y-s.z],n=t.indexOf(Math.min(...t));n===0?s.x=e.min.x-.01:n===1?s.x=e.max.x+.01:n===2?s.z=e.min.y-.01:s.z=e.max.y+.01}return s}function Xs(s,e){for(const t of vo){const n=t.clone().expandByScalar(-.02);for(let i=0;i<=1;i+=.04){const r=s.x+(e.x-s.x)*i,o=s.z+(e.z-s.z)*i;if(r>n.min.x&&r<n.max.x&&o>n.min.y&&o<n.max.y)return t}}return null}function mr(s,e){if(!Xs(s,e))return[e];let t=null,n=1/0;const i=[];for(const r of vo)for(const[o,a]of[[r.min.x-.02,r.min.y-.02],[r.max.x+.02,r.min.y-.02],[r.min.x-.02,r.max.y+.02],[r.max.x+.02,r.max.y+.02]])i.push(new A(o,e.y,a));for(const r of i)if(!(r.x<Rn.x0-.05||r.x>Rn.x1+.05||r.z<Rn.z0-.1||r.z>Rn.z1+.1)&&!Xs(s,r)&&!Xs(r,e)){const o=s.distanceTo(r)+r.distanceTo(e);o<n&&(n=o,t=[r,e])}if(t)return t;for(const r of i)for(const o of i){if(Xs(s,r)||Xs(r,o)||Xs(o,e))continue;const a=s.distanceTo(r)+r.distanceTo(o)+o.distanceTo(e);a<n&&(n=a,t=[r,o,e])}return t||[e]}let Ot=!1;function Yl(s,e,t){const n=u1(s.clone());Ne.goTo(mr(Ne.root.position,n),e,t)}const Dt=[],kf=[];function Vi(s,e,t){const n=cM(t);n.points.position.copy(s),yt.add(n.points),kf.push({h:n,show:e})}const ei=new A(Qn.group.position.x+Qn.cushionPivot.position.x,0,Qn.group.position.z+.2);let Zs=0,Bn=0;const dn=s=>new Promise(e=>setTimeout(e,s));function mi(s,e){return new Promise(t=>{const n=performance.now(),i=()=>{const r=Math.min(1,(performance.now()-n)/s);e(r),r<1?requestAnimationFrame(i):t()};i()})}function Hf(){Bn=1,ki.open=!0,Xt(1),$e.jump.textContent="Jump in",$e.jump.classList.remove("hidden")}function Vf(){Bn=0,ki.open=!1,$e.jump.classList.add("hidden")}const Gf=new A(ei.x,0,-1.55);Dt.push({id:"cushion",objs:[Qn.cushion],stand:Gf,face:Math.PI,act:()=>{if(Bn>.5){Ne.once("crouch"),Vf();return}if(!ke("portal")){_1();return}Ne.once("crouch",Hf)}});Dt.push({id:"portal",objs:[ki.hit],stand:Gf,face:Math.PI,act:()=>y1()});Vi(new A(ei.x,.62,-2.2),()=>!ke("portal")&&Bn<.5,13084927);const Qi=xt("story"),d1=xt("storyWho"),f1=xt("storyText");function rn(s,e){return Qi.classList.remove("hidden"),Qi.dataset.who=s.toLowerCase(),d1.textContent=s,f1.innerHTML=e,Qi.classList.remove("in"),Qi.offsetWidth,Qi.classList.add("in"),new Promise(t=>{const n=i=>{i.stopPropagation(),Qi.removeEventListener("pointerup",n),setTimeout(t,50)};setTimeout(()=>Qi.addEventListener("pointerup",n),350)})}const Xa=()=>Qi.classList.add("hidden");let jr=null;const p1=new Pt(.06,.06,.012,20),m1=new at({color:13136698,metalness:.85,roughness:.3,emissive:3807752});function g1(s){for(let e=0;e<s;e++){const t=new J(p1,m1);t.rotation.x=Math.PI/2;const n=new A(ei.x+(Math.random()-.5)*.3,.45,-2.3+(Math.random()-.5)*.2);t.position.copy(n),yt.add(t);const i=e*380,r=2+Math.random()*3,o=(Math.random()-.5)*.8;setTimeout(()=>mi(3800,a=>{t.position.set(n.x+Math.sin(a*5)*.12+o*a,n.y+a*2.2,n.z+a*.6),t.rotation.z=a*r*6,t.scale.setScalar(a<.85?1:(1-a)/.15)}).then(()=>yt.remove(t)),i)}}async function _1(){if(Ot)return;Ot=!0;const s=t=>t===ys.keira?"Keira":"Mila",e=Ct;jr={at:new A(ei.x+.4,.8,-1.9),dist:5.2},Ne.once("crouch"),Ra(!0),await mi(900,t=>{Bn=.12*t,ki.open=!0}),await rn(s(Ne),Ne===ys.keira?"Mila. Come here. The couch is... <i>glowing</i>.":"Keira! KEIRA! The couch is glowing!"),e.goTo(mr(e.root.position,new A(ei.x+.85,0,-1.45)),void 0,Math.PI*.9),await rn(s(e),e===ys.mila?"Did you spill something radioactive on it again?":"Don't touch it. Glowing things are never a good sign. Usually."),await dn(400),Bn=1,Xt(2),Oh(),jl(!0),await dn(900),await rn("","Under the cushion, where the crumbs and lost pennies usually live, there was a hole. And at the bottom of the hole there was <b>sky</b>."),await rn("Keira","It's not a hole. It's a <b>door</b>."),await rn("Mila","A door to <i>where?</i>"),g1(7),await dn(1200),await rn("","A penny floated up out of the couch. Then another. Somewhere down there, someone had lost a <i>lot</i> of pennies."),await rn("Mila","Dibs on all of them."),await rn("Keira","Only one way to find out."),Xa(),Ra(!1),Ve.found.push("portal"),Zt(),$e.jump.textContent="Step in",$e.jump.classList.remove("hidden"),Ot=!1}const x1=new hi(new A(0,1,0),-.43);zn.localClippingEnabled=!0;function v1(s,e){s.root.traverse(t=>{const n=t.material;n&&(n.clippingPlanes=[x1],n.needsUpdate=!0)})}async function Ed(s,e){await new Promise(i=>s.goTo(mr(s.root.position,new A(e.x,0,-1.55)),i,Math.PI)),s.faceTo=Math.PI,await dn(150),s.once("crouch"),await dn(250);const t=s.root.position.clone();await mi(450,i=>{s.root.position.set(t.x+(e.x-t.x)*i,Math.sin(i*Math.PI)*.25+.43*i,t.z+(-1.98-t.z)*i)}),s.once("land"),await dn(380),s.faceTo=.3,await dn(450),s.faceTo=Math.PI,await dn(250),v1(s),i1();const n=s.root.position.clone();await mi(1400,i=>{const r=i*i;s.root.position.set(n.x+(ei.x-n.x)*Math.min(1,i*2.5),.43-r*1.7,n.z+(-2.3-n.z)*Math.min(1,i*2.5)),s.root.rotation.y=Math.PI+r*2,Aa=Math.max(Aa,i*.6)}),s.root.visible=!1}async function y1(){if(Ot)return;Ot=!0,$e.jump.classList.add("hidden"),Xa(),Bn<.5&&(Hf(),$e.jump.classList.add("hidden")),jr={at:new A(ei.x+.3,.7,-1.9),dist:5.6};const s=Ed(Ne,new A(ei.x-.05,0,0));await dn(1300);const e=Ed(Ct,new A(ei.x+.12,0,0));await s,await e,Aa=1,$e.flash.classList.add("on"),await dn(550);try{sessionStorage.setItem("km_went","1")}catch{}Ve.hero=Kn,Zt(),location.href=`${a1}?from=house&hero=${Kn}`}let Aa=0,Wf=0,gs=0;function jl(s){Wf=s?1:0}let Fr=null;function Ra(s){s&&!Fr?Fr=o1():!s&&Fr&&(Fr(),Fr=null)}let fa=0,qa=ke("shelf")?1:0;fa=qa;fr.doorway.visible=qa>0;const M1=new A(We.x0+1.05,0,-.5);Dt.push({id:"book",objs:[fr.oddBook],stand:M1,face:-Math.PI/2,act:()=>{if(ke("shelf")){Ft("The shelf is already open. Something is behind that round door...");return}Ne.once("wave",()=>{Ve.found.push("shelf"),Zt(),fr.doorway.visible=!0,qa=1,Xt(2),Oh(),Ft("The book was a <b>lever</b>! The whole shelf moved. There's a <b>hidden room</b> behind it...",4800)})}});Dt.push({id:"door",objs:[fr.doorway],stand:new A(We.x0+1,0,-.5),face:-Math.PI/2,act:()=>Ft("A round door covered in glowing symbols. It's <b>sealed</b>. Another world is waiting behind this one... <i>(coming soon)</i>",4600)});Vi(new A(We.x0+.3,1.25,-.5-.17),()=>!ke("shelf"),12033279);const Ya=oM();Ya.position.set(-3.7,0,.75);yt.add(Ya);Ya.visible=ke("george");const fi=Lf();fi.position.set(-3.7,.05,.75);fi.rotation.y=.5;yt.add(fi);let ci=ke("george")?1:0;fi.visible=!ke("george");an.blockers.push(new ka(new re(-4.15,.3),new re(-3.25,1.2)));Wa.push(an.blockers[an.blockers.length-1].clone().expandByScalar(.25));const Wc=xt("zzz");Dt.push({id:"blanket",objs:[fi],stand:new A(-2.75,0,.75),face:-Math.PI/2,act:async()=>{ke("george")||(Ne.once("crouch"),Ve.found.push("george"),Ve.companions.includes("george")||Ve.companions.push("george"),Ve.companion||(Ve.companion="george"),Zt(),fo(),Xt(3),ci=.001,Ya.visible=!0,await Xf(),Ft("<b>George!</b> Asleep under the blanket, of course. He'll come along on your next jump.",5200))}});Vi(new A(-3.7,.35,.75),()=>!ke("george"));function S1(){return{id:"george",objs:[di.root],stand:new A(-2.75,0,.75),face:-Math.PI/2,act:()=>{Ve.companion=Ve.companion==="george"?null:"george",Zt(),fo(),Xt(1),di.once("cheer"),Ft(Ve.companion==="george"?"<b>George</b> is coming on the next adventure. (He's not happy about it.)":"George stays home to nap.")}}}async function Xf(){di=await lo.load(ql("george"),!0),di.root.position.set(-3.7,.08,.75),di.root.rotation.y=.9,di.play("nap",0),yt.add(di.root),Dt.push(S1())}const on=rM(),qf=new A(.05,1.55,We.z0-.75),yo=new ze;yo.position.set(1.35,0,We.z0+.45);yt.add(yo);{const s=new at({color:6965808,roughness:.7}),e=(r,o,a,c)=>(r.position.set(o,a,c),r.castShadow=!0,r.receiveShadow=!0,yo.add(r),r);e(new J(new Pt(.22,.25,.04,24),s),0,.02,0),e(new J(new Pt(.025,.035,1.38,10),s),0,.71,0);const t=e(new J(new Pt(.03,.04,.62,10),s),0,1.4,0);t.rotation.z=Math.PI/2+.08;const n=e(new J(new Pt(.012,.02,.22,6),s),.24,1.48,0);n.rotation.z=-.6;const i=new at({color:4880970,roughness:.7});for(const[r,o]of[[.3,1.58],[-.27,1.45]])e(new J(new It(.05,8,6),i),r,o,0).scale.set(1.4,.4,.8);e(new J(new Pt(.06,.04,.05,14),new at({color:14274752,roughness:.4})),-.2,1.36,.06)}yo.visible=ke("owl");an.blockers.push(new ka(new re(1.1,We.z0+.2),new re(1.6,We.z0+.7)));Wa.push(an.blockers[an.blockers.length-1].clone().expandByScalar(.2));const Kl=new A(1.35,1.43,We.z0+.45);let li=-1;ke("owl")?(yt.add(on.group),on.group.position.copy(Kl),on.group.rotation.y=.2,on.group.scale.setScalar(1.1)):(on.group.position.copy(qf),yt.add(on.group),on.group.visible=ke("traveled"),on.group.scale.setScalar(.9));Dt.push({id:"window",objs:[an.windowHit,on.group],stand:an.windowSpot.clone(),face:Math.PI,act:()=>{if(ke("owl")){Ve.companion=Ve.companion==="owl"?null:"owl",Zt(),fo(),Xt(1),Ft(Ve.companion==="owl"?"The <b>owl</b> will fly with you on the next jump.":"The owl stays on the shelf.");return}if(!ke("traveled")){Ft("Just trees and the moon. It feels like something out there is <b>watching</b>... maybe come back after an adventure.");return}Ne.once("wave",()=>{Ve.found.push("owl"),Ve.companions.push("owl"),Ve.companion||(Ve.companion="owl"),Zt(),fo(),Xt(3),li=0,Ft("An <b>owl</b> followed you home from the other world! She's moving in.",5e3)})}});Vi(new A(.45,1.3,We.z0+.1),()=>ke("traveled")&&!ke("owl"),16762970);Dt.push({id:"owlHome",objs:[],stand:new A(1.35,0,We.z0+1.35),face:Math.PI,act:()=>Dt.find(s=>s.id==="window").act()});let pa=ke("jar")?1:0,ma=pa;const ja=new J(new Pt(.09,.08,.2,20),new Gt({color:13625568,roughness:.05,transparent:!0,opacity:.45}));ja.position.set(3.35,1.83,We.z0+.2);yt.add(ja);const Ka=new J(new Pt(.075,.07,.11,16),new at({color:13136698,metalness:.8,roughness:.35}));Ka.position.y=-.04;ja.add(Ka);Dt.push({id:"cabinet",objs:[an.cabinetHit,ja],stand:new A(3.4,0,We.z0+1.15),face:Math.PI,act:()=>{if(ke("jar")){ma=ma?0:1;return}Ne.once("jump",()=>{ma=1,Ve.found.push("jar"),Ka.visible=!1;const s=un;un=Ph(100),Zt(),Sr(s),Xt(2),Va(),Ft("An old <b>penny jar</b> hidden behind the cereal! <b>+100 pennies</b>",4200)})}});Ka.visible=!ke("jar");Vi(new A(3.4,1.7,We.z0+.45),()=>!ke("jar"));let na=0,Za=0;Dt.push({id:"fridge",objs:uo.hit,stand:new A(4.2,0,We.z0+1.6),face:Math.PI*.95,act:()=>{Za=1,Xt(0),jf()}});const Ca=[{id:"food_milk",name:"Milk and eggs",price:40,kind:"milk",shelf:0},{id:"food_fruit",name:"Fruit",price:70,kind:"fruit",shelf:1},{id:"food_pizza",name:"Leftover pizza and jam",price:110,kind:"pizza",shelf:2}];function Yf(){for(const s of Ca){const e=uo.shelves[s.shelf];Mn(s.id)&&!e.userData.filled&&(e.add(eM(s.kind)),e.userData.filled=!0)}}Yf();function jf(){$e.fridge.classList.remove("hidden"),$e.fridgeList.innerHTML="";const s=Ca.filter(e=>Mn(e.id)).length;xt("fridgeNote").textContent=s===0?"Completely empty. Not even a pickle.":s===3?"Full! Nobody in this house is going hungry.":"Getting there.";for(const e of Ca){const t=document.createElement("button");t.className="row"+(Mn(e.id)?" owned":""),t.innerHTML=`<span>${e.name}</span><span class="price">${Mn(e.id)?"In the fridge":`<i class="cn"></i>${e.price}`}</span>`,t.onclick=()=>{Mn(e.id)||Bf(e.price)&&(Ve.owned.push(e.id),Zt(),Yf(),Xt(1),jf())},$e.fridgeList.appendChild(t)}}xt("fridgeClose").onclick=()=>{$e.fridge.classList.add("hidden"),Za=0};const Fn=JM();yt.add(Fn.group);const lt=e1();yt.add(lt.group);lt.group.visible=!1;const w1=lt.blockers.map(s=>s.clone().expandByScalar(.28)),Ts=(Ht+qt)/2,Mo=new A(We.x0+.75,0,Ts);let ia=0,ti=0,Kr=ke("attic")?1:0,nr=Kr,ga=0;Fn.ladder.visible=Kr>0;Dt.push({id:"closet",objs:[Fn.doorHit],stand:Mo,face:-Math.PI/2,act:()=>{ti=ti?0:1,Xt(0),ti&&!ke("closet")&&(Ve.found.push("closet"),Zt(),Ft("The hall closet. Coats, a broken umbrella, boots... and a <b>string</b> hanging down from the ceiling.",4800))}});Vi(new A(We.x0+.2,1.2,Ts),()=>!ke("closet")&&ti===0);Dt.push({id:"coats",objs:Fn.coats,stand:Mo,face:-Math.PI/2,act:()=>{if(ti<1)return;if(ke("coatpocket")){Ft("Just coats. One of them smells like a wet dog.");return}Ve.found.push("coatpocket");const s=un;un=Ph(25),Zt(),Sr(s),Va(),Xt(1),Ft("Somebody left <b>25 pennies</b> in a coat pocket. Finders keepers.")}});Dt.push({id:"cord",objs:[Fn.cordHit],stand:Mo,face:-Math.PI/2,act:()=>{if(ti<1){ti=1;return}if(nr>0){Dh();return}Ne.once("jump",()=>{ga=1,nr=1,Fn.ladder.visible=!0,Oh(),Xt(2),ke("attic")||b1()})}});Vi(new A(We.x0-.5,1.9,Ts+.1),()=>ti>.5&&!ke("attic"),13084927);Dt.push({id:"ladder",objs:[Fn.ladderHit],stand:Mo,face:-Math.PI/2,act:()=>Dh()});async function b1(){Ot=!0,await dn(900),await rn("Mila","There's an upstairs ABOVE the upstairs?"),await rn("Keira","It's an attic. Every house has one."),await rn("","A cold draft drifted down the ladder. It smelled like old books and rain. Somewhere up there, very quietly, something was <i>ticking</i>."),await rn("Keira","...Most attics don't tick, though."),Xa(),Ve.found.push("attic"),Zt(),Ot=!1,Ft("Tap the ladder to climb up.")}async function Pa(s,e){if(e){await new Promise(n=>s.goTo(mr(s.root.position,Mo.clone()),n,-Math.PI/2));const t=s.root.position.clone();await mi(500,n=>s.root.position.set(t.x+(We.x0-.45-t.x)*n,0,t.z+(Ts-t.z)*n)),await mi(700,n=>{s.root.position.y=n*1.6}),s.root.visible=!1}else{const t=lt.hatch.position;await new Promise(i=>s.goTo(mr(s.root.position,new A(t.x+.75,mn,t.z)),i,-Math.PI/2));const n=s.root.position.clone();await mi(400,i=>s.root.position.set(n.x+(t.x-n.x)*i,mn,n.z+(t.z-n.z)*i)),await mi(700,i=>{s.root.position.y=mn-i*1.6}),s.root.visible=!1}}async function Ia(s,e,t){if(s.root.visible=!0,e){const n=lt.hatch.position;s.root.position.set(n.x,mn-1.4,n.z),await mi(800,i=>{s.root.position.y=mn-1.4+1.4*i})}else s.root.position.set(We.x0-.45,1.4,Ts),await mi(700,n=>{s.root.position.y=1.4*(1-n)});s.once("land"),await new Promise(n=>s.goTo(mr(s.root.position,t),n,.3))}function Kf(s){Sn=s,vo=s?w1:Wa,Rn=s?lt.bounds:zf,lt.group.visible=s===1,$e.shopBtn.classList.toggle("hidden",s===1)}async function Dh(){if(Ot)return;Ot=!0,lt.group.visible=!0;const s=dn(700).then(()=>Pa(Ct,!0));await Pa(Ne,!0),Kf(1);const e=lt.hatch.position;await Ia(Ne,!0,new A(e.x+1,mn,e.z-.3)),await s,Ia(Ct,!0,new A(e.x+1.1,mn,e.z+.45)),ke("upstairs")||(Ve.found.push("upstairs"),Zt(),Ft("The attic. Dusty boxes, an old trunk, and something tall hiding under a sheet.",5e3)),Ot=!1}async function Zf(){if(Ot)return;Ot=!0;const s=dn(700).then(()=>Pa(Ct,!1));await Pa(Ne,!1),Kf(0),lt.group.visible=!0,await Ia(Ne,!1,new A(We.x0+.9,0,Ts-.2)),await s,Ia(Ct,!1,new A(We.x0+1.3,0,Ts+.3)).then(()=>{Sn===0&&(lt.group.visible=!1)}),Ot=!1}const T1=new A(lt.hatch.position.x+.8,mn,lt.hatch.position.z);Dt.push({id:"hatch",lvl:1,objs:[lt.hatchHit],stand:T1,face:-Math.PI/2,act:()=>Zf()});let Zr=ke("map")?1:0,Zl=Zr;lt.mapPaper.visible=Zr>0;const $f=xt("mapP");function Ad(){t1(xt("mapCanvas"),Ve.found),$f.classList.remove("hidden")}xt("mapClose").onclick=s=>{s.stopPropagation(),$f.classList.add("hidden")};Dt.push({id:"trunk",lvl:1,objs:[lt.trunk],stand:new A(-1.9,mn,-1.35),face:Math.PI,act:()=>{if(ke("map")){Zl=1,Ad();return}Ne.once("crouch",()=>{Zl=1,lt.mapPaper.visible=!0,Xt(2),Ve.found.push("map"),Zt(),setTimeout(()=>{Ad(),Ft("An old <b>map of the house</b>, with secret places marked. Some of them you've found. Some of them... you haven't.",6e3)},700)})}});Vi(new A(-1.9,mn+.5,-2.3),()=>Sn===1&&!ke("map"));let Xn=ke("mirror")?1:0;lt.sheet.visible=!ke("mirror");lt.glass.open=ke("mirror");Dt.push({id:"mirror",lvl:1,objs:[lt.mirror],stand:new A(-.35,mn,-.35),face:2.2,act:async()=>{if(ke("mirror")){Ft("The mirror is <b>locked</b>. There's a tiny keyhole at the bottom of the frame. The key has to be somewhere in this house...",5e3);return}Ot=!0,Ne.once("wave"),await dn(500),Xn=.001,Xt(2),Ra(!0),await dn(1200),lt.glass.open=!0,jl(!0),await dn(800),await rn("Keira","That's not our reflection."),await rn("Mila","Good. I look way cooler than that."),await rn("","Inside the mirror was another attic. Darker. Bigger. Full of clocks, all ticking, none of them telling the same time."),await rn("Keira","It's locked. Look, there's a keyhole in the frame."),await rn("Mila","So we find the key. How hard can it be?"),Xa(),Ra(!1),jl(!1),Ve.found.push("mirror"),Zt(),Ot=!1,Ft("<b>The mirror world is coming soon.</b> Find the key...",4500)}});Vi(new A(.25,mn+1.6,-1),()=>Sn===1&&!ke("mirror"),13084927);Dt.push({id:"other",objs:[],stand:new A,face:0,act:()=>Ja()});const So=tM();So.group.position.set(We.x0+.27,.7,kl);So.group.rotation.y=Math.PI/2;yt.add(So.group);const Nh=nM();Nh.position.set(-.45,0,We.z0+.4);yt.add(Nh);const wo=iM();wo.group.position.set(.25,.62,We.z0+.25);yt.add(wo.group);const Jf=sM(-3.6,-.6,2.85,We.z0+.06);yt.add(Jf);let $s=!1;Dt.push({id:"records",objs:[wo.group],stand:new A(.3,0,We.z0+1),face:Math.PI,act:()=>{Mn("records")&&($s=!$s,$s?s1():r1(),Ft($s?"Spooky jazz. Good choice.":"Quiet again."))}});const Uh=[{id:"plant",name:"Big leafy plant",desc:"For the corner. It might be watching you.",price:60,obj:Nh},{id:"lights",name:"String lights",desc:"Warm little bulbs over the couch.",price:120,obj:Jf},{id:"records",name:"Record player",desc:"Tap it to play some music.",price:180,obj:wo.group},{id:"aquarium",name:"Aquarium",desc:"Glowing fish from the deep.",price:300,obj:So.group},{id:"couch",name:"New velvet couch",desc:"Deep green, with gold feet. The portal comes too.",price:600,obj:null}];function Qf(){for(const s of Uh)s.obj&&(s.obj.visible=Mn(s.id));Qn.restyle(Mn("couch"))}Qf();function Fh(){$e.shop.classList.remove("hidden"),$e.shopList.innerHTML="";for(const t of Uh){const n=document.createElement("button");n.className="row"+(Mn(t.id)?" owned":""),n.innerHTML=`<span><b>${t.name}</b><small>${t.desc}</small></span><span class="price">${Mn(t.id)?"Yours":`<i class="cn"></i>${t.price}`}</span>`,n.onclick=()=>{Mn(t.id)||Bf(t.price)&&(Ve.owned.push(t.id),Zt(),Qf(),Xt(2),Fh(),t.obj&&(t.obj.scale.setScalar(.01),$l.push({o:t.obj,t:0})),$e.shop.classList.add("hidden"),Ft(`<b>${t.name}</b> is in the house!`),t.id==="couch"&&(Qn.group.scale.setScalar(.01),$l.push({o:Qn.group,t:0})))},$e.shopList.appendChild(n)}const s=Ca.filter(t=>!Mn(t.id)).length,e=document.createElement("p");e.className="tip",e.textContent=s?"Food for the fridge is in the fridge. Go open it.":"",$e.shopList.appendChild(e)}const $l=[];$e.shopBtn.onclick=s=>{s.stopPropagation(),un=Ch(),Sr(),Fh()};xt("shopClose").onclick=()=>$e.shop.classList.add("hidden");$e.jump.onclick=s=>{s.stopPropagation(),zh(Dt.find(e=>e.id==="portal"))};$e.who.onclick=s=>{s.stopPropagation(),Ja()};function Oh(){Hr=.6;try{navigator.vibrate?.(80)}catch{}}let Hr=0;const $r=new Wy,La=new re,Ji=56,_a=xt("stick"),E1=xt("knob");let sn=null,kt=null;const Fi=new Map;let qn=null,as=1,$a=0,po=!1;const ep=.3,tp=1.25,A1=-.32,R1=.75;function np(){const[s,e]=[...Fi.values()];return{d:Math.hypot(e.x-s.x,e.y-s.y),a:Math.atan2(e.y-s.y,e.x-s.x),mx:(s.x+e.x)/2,my:(s.y+e.y)/2}}const Rd=new hi;function ip(s,e){return Rd.set(kh,-((Sn?mn:0)+.6)),La.set(s/innerWidth*2-1,-(e/innerHeight)*2+1),$r.setFromCamera(La,en),$r.ray.intersectPlane(Rd,new A)}function Bh(){kt=null,_a.classList.add("hidden"),Ne&&(Ne.steer=0)}Mr.addEventListener("pointerdown",s=>{if(Fi.set(s.pointerId,{x:s.clientX,y:s.clientY}),Fi.size===2){Bh(),sn=null;const e=np();qn={d:e.d,a:e.a,zoom:as,yaw:$a,anchor:ip(e.mx,e.my)};return}Fi.size>2||(sn={id:s.pointerId,x:s.clientX,y:s.clientY,t:performance.now()})});Mr.addEventListener("pointermove",s=>{if(!Fi.has(s.pointerId))return;if(Fi.set(s.pointerId,{x:s.clientX,y:s.clientY}),qn&&Fi.size>=2){const n=np();as=En.clamp(qn.zoom*qn.d/Math.max(20,n.d),ep,tp);let i=n.a-qn.a;if(i=Math.atan2(Math.sin(i),Math.cos(i)),$a=En.clamp(qn.yaw+i,A1,R1),po=!0,Ql(),qn.anchor){const r=ip(n.mx,n.my);r&&(Nn.x+=qn.anchor.x-r.x,Nn.z+=qn.anchor.z-r.z,ap(),Ql())}return}if(!sn||s.pointerId!==sn.id||Ot)return;const e=s.clientX-sn.x,t=s.clientY-sn.y;if(!kt&&Math.hypot(e,t)>14&&(kt={x:sn.x,y:sn.y,jx:0,jy:0},_a.style.transform=`translate(${sn.x}px, ${sn.y}px)`,_a.classList.remove("hidden"),Ne.goTo([]),po=!1,rp()),kt){const n=Math.hypot(e,t),i=Math.min(1,Ji/Math.max(1,n));kt.jx=e*i/Ji,kt.jy=t*i/Ji,n>Ji*1.6&&(kt.x=s.clientX-e/n*Ji*1.6,kt.y=s.clientY-t/n*Ji*1.6,sn.x=kt.x,sn.y=kt.y,_a.style.transform=`translate(${kt.x}px, ${kt.y}px)`),E1.style.transform=`translate(${kt.jx*Ji}px, ${kt.jy*Ji}px)`}});const sp=s=>{Fi.delete(s.pointerId),Fi.size<2&&(qn=null)};Mr.addEventListener("pointercancel",s=>{sp(s),sn?.id===s.pointerId&&(sn=null,Bh())});Mr.addEventListener("wheel",s=>{s.preventDefault(),as=En.clamp(as*(1+s.deltaY*.001),ep,tp)},{passive:!1});function rp(){$e.shop.classList.add("hidden"),$e.fridge.classList.contains("hidden")||($e.fridge.classList.add("hidden"),Za=0)}Mr.addEventListener("pointerup",s=>{if(sp(s),!sn||s.pointerId!==sn.id)return;const e=!!kt;if(sn=null,Bh(),e||Ot)return;La.set(s.clientX/innerWidth*2-1,-(s.clientY/innerHeight)*2+1),$r.setFromCamera(La,en),rp();let t=null;for(const i of Dt){if(i.id!=="other"&&(i.lvl||0)!==Sn)continue;const o=(i.id==="other"?[Ct.root]:i.id==="owlHome"?ke("owl")?[on.group]:[]:i.objs).filter(c=>I1(c));if(!o.length)continue;const a=$r.intersectObjects(o,!0)[0];a&&(!t||a.distance<t.d)&&(t={s:i,d:a.distance})}const n=$r.intersectObject(Sn?lt.floorHit:an.floorHit)[0];if(t&&(!n||t.d<n.distance+.5)){po=!1,zh(t.s);return}n&&(po=!1,Yl(n.point))});const Or=new A,Cd=new A;function Pd(s,e){if(s<Rn.x0||s>Rn.x1||e<Rn.z0||e>Rn.z1)return!0;for(const t of vo){const n=t.min.x+.08,i=t.max.x-.08,r=t.min.y+.08,o=t.max.y-.08;if(s>n&&s<i&&e>r&&e<o)return!0}return!1}function C1(s){if(!kt||Ot){Ne&&(Ne.steer=0);return}const e=Math.min(1,Math.hypot(kt.jx,kt.jy));if(e<.12){Ne.steer=0;return}en.getWorldDirection(Or),Or.y=0,Or.normalize(),Cd.crossVectors(Or,kh).normalize();const t=Cd.multiplyScalar(kt.jx).add(Or.clone().multiplyScalar(-kt.jy));t.y=0,t.normalize();const n=Ne.speed*(.35+.75*e)*s,i=Ne.root.position,r=i.x+t.x*n,o=i.z+t.z*n;Pd(r,i.z)||(i.x=r),Pd(i.x,o)||(i.z=o),Ne.steer=e,Ne.faceTo=Math.atan2(t.x,t.z)}const xa=xt("actBtn");let Da=null;const Xc={cushion:()=>Bn>.5?"Close the cushion":ke("portal")?"Lift the cushion":"Look at the couch",book:()=>ke("shelf")?null:"Look at the odd book",door:()=>fr.doorway.visible?"Look at the round door":null,blanket:()=>ke("george")?null:"Lift the blanket",george:()=>Ve.companion==="george"?"Leave George home":"Bring George along",window:()=>ke("owl")?null:"Look outside",cabinet:()=>ke("jar")?null:"Open the cupboard",fridge:()=>"Open the fridge",owlHome:()=>ke("owl")?Ve.companion==="owl"?"Leave the owl home":"Bring the owl along":null,records:()=>Mn("records")?$s?"Stop the music":"Play a record":null,closet:()=>ti>.5?nr>.5?null:"Close the closet":"Open the closet",cord:()=>ti>.5&&nr<.5?"Pull the string":null,ladder:()=>nr>.5&&Fn.ladder.visible?"Climb the ladder":null,hatch:()=>"Climb down",trunk:()=>ke("map")?"Read the map":"Open the trunk",mirror:()=>ke("mirror")?"Look at the mirror":"Pull off the sheet"};function P1(){let s=null,e=1.25;if(!Ot&&Ne&&!Ne.moving)for(const t of Dt){if((t.lvl||0)!==Sn||!Xc[t.id]||!Xc[t.id]())continue;const i=Math.hypot(t.stand.x-Ne.root.position.x,t.stand.z-Ne.root.position.z);i<e&&(e=i,s=t)}if(s!==Da&&(Da=s,xa.classList.toggle("hidden",!s)),s){const t=Xc[s.id]();xa.textContent!==t&&(xa.textContent=t)}}xa.addEventListener("click",s=>{if(s.stopPropagation(),Da&&!Ot){const e=Da;Ne.faceTo=e.face,e.act()}});function I1(s){let e=s;for(;e;){if(!e.visible)return!1;e=e.parent}return!0}function zh(s){if(!Ot){if(s.id==="other"){Ja();return}if(s.id==="owlHome"){Yl(s.stand,()=>s.act(),Math.PI);return}s.id==="records"&&!Mn("records")||Yl(s.stand,()=>{Ne.faceTo=s.face,setTimeout(()=>s.act(),160)},s.face)}}function Ja(){if(Ot||!Ct)return;const s=Ne.root.position.clone(),e=Ct.root.position.clone();[Ne,Ct]=[Ct,Ne],Kn=Kn==="keira"?"mila":"keira",Ve.hero=Kn,Zt(),Ne.root.position.copy(e),Ct.root.position.copy(s),Ct.goTo([]),Ct.faceTo=.2,Ne.once("wave"),$e.who.textContent=Kn==="keira"?"Keira":"Mila",$e.who.dataset.hero=Kn,Xt(0)}const Nn=new A(-1,.9,0);function op(){const s=innerWidth,e=innerHeight;zn.setSize(s,e,!1),en.aspect=s/e,en.updateProjectionMatrix()}addEventListener("resize",op);op();const Id=new A,kh=new A(0,1,0);let Jl=12;function ap(){const s=(Sn?mn:0)+.9;Nn.set(En.clamp(Nn.x,Sn?-4.4:-4.6,Sn?.8:4.6),s,En.clamp(Nn.z,-2.6,2.8))}function Ql(){Id.set(.5,.78,1).normalize().multiplyScalar(Jl*as).applyAxisAngle(kh,$a),en.position.copy(Nn).add(Id),en.lookAt(Nn),en.updateMatrixWorld()}function L1(s){const e=en.aspect<1;let t=e?9.4+(1-en.aspect)*3:10;if(!qn){if(jr)Nn.lerp(jr.at,Math.min(1,s*2.5)),t=jr.dist*(e?1+(1-en.aspect)*.6:1)/as;else if(!po){const n=En.clamp((as-.3)/.7,0,1),i=new A(Ne.root.position.x,0,En.lerp(Ne.root.position.z,En.clamp(Ne.root.position.z*.6,-1,1.6),n));n>.5&&(i.x=Sn?En.clamp(i.x,-3.6,0):En.clamp(i.x,-4.3,3.8)),Nn.x+=(i.x-Nn.x)*Math.min(1,s*3),Nn.z+=(i.z-Nn.z)*Math.min(1,s*3)}ap(),Jl+=(t-Jl)*Math.min(1,s*2.2)}Ql(),Hr>0&&(Hr-=s,en.position.x+=Math.sin(Hr*70)*.03*Hr)}const D1=new Py;let ai=0;function cp(){const s=Math.min(.05,D1.getDelta());if(ai+=s,C1(s),P1(),Ne.update(s),Ct.update(s),di?.update(s),ia+=(ti-ia)*Math.min(1,s*4),Fn.door.rotation.y=1.6*ia,Fn.light.intensity=ia*4,Kr+=(nr-Kr)*Math.min(1,s*2.5),Fn.ladder.position.y=2.6*(1-Kr),ga=Math.max(0,ga-s*3),Fn.cord.position.y=3-Math.sin(ga*Math.PI)*.15,Zr+=(Zl-Zr)*Math.min(1,s*4),lt.lid.rotation.x=-1.7*Zr,Xn>0&&Xn<1&&(Xn=Math.min(1,Xn+s*.9),lt.sheet.position.y=1-Xn*Xn*1.2,lt.sheet.position.z=Xn*.5,lt.sheet.scale.y=1-Xn*.6,lt.sheet.rotation.x=Xn*.9,Xn>=1&&(lt.sheet.visible=!1)),lt.glass.update(s,ai,0),lt.group.visible){const t=lt.motes.geometry.attributes.position;for(let n=0;n<t.count;n++)t.setY(n,(t.getY(n)+s*.03*(1+n%3))%2.4),t.setX(n,t.getX(n)+Math.sin(ai*.3+n)*8e-4);t.needsUpdate=!0}if(Zs+=(Bn-Zs)*Math.min(1,s*5),Qn.cushionPivot.rotation.x=-1.35*N1(Zs),Qn.cushionPivot.position.y=.43+.12*Math.sin(Zs*Math.PI*.5)+(Bn?Math.sin(ai*6)*.006:0),ki.update(s,ai,Aa),gs+=(Wf-gs)*Math.min(1,s*1.5),Ga.intensity=qc.hemi*(1-gs*.6),ri.intensity=qc.key*(1-gs*.65),an.lamp.intensity=qc.lamp*(1-gs*.7)*(gs>.05?.85+Math.random()*.15*gs:1),fa+=(qa-fa)*Math.min(1,s*1.6),fr.slider.position.x=1.65*fa,na+=(Za-na)*Math.min(1,s*5),uo.door.rotation.y=1.9*na,uo.light.intensity=na*3,pa+=(ma-pa)*Math.min(1,s*5),an.cabinetDoor.rotation.y=1.7*pa,ci>0&&ci<1&&(ci=Math.min(1,ci+s*1.3),fi.position.y=.05+Math.sin(ci*Math.PI)*.9,fi.position.x=-3.7-ci*.9,fi.rotation.z=ci*1.4,fi.scale.setScalar(1-ci*.5),ci>=1&&(fi.visible=!1)),Wc.style.opacity="0",!ke("george")||di&&di.clip==="nap"){const t=new A(-3.6,.7,.75).project(en);Wc.style.transform=`translate(${(t.x*.5+.5)*innerWidth}px, ${(-t.y*.5+.5)*innerHeight}px)`,Wc.style.opacity=t.z<1?"1":"0"}if(on.wings.forEach((t,n)=>{t.rotation.z=(n?-1:1)*(li>=0&&li<1?Math.sin(ai*30)*.9:.05*Math.sin(ai*2))}),on.head.rotation.y=Math.sin(ai*.7)*.6,li>=0&&li<1){li=Math.min(1,li+s*.45);const t=Kl.clone();yo.visible=!0;const n=qf.clone().lerp(t,U1(li));n.y+=Math.sin(li*Math.PI)*.8,on.group.position.copy(n),on.group.lookAt(t.x,n.y,t.z),li>=1&&(on.group.position.copy(Kl),on.group.rotation.set(0,.2,0),on.group.scale.setScalar(1.1),Xt(1))}for(const t of So.fish){const n=t.userData,i=ai*n.s+n.p;t.position.set(Math.cos(i)*n.r*1.6,n.y+Math.sin(i*2)*.03,Math.sin(i)*.1),t.rotation.y=Math.atan2(Math.cos(i)*.1,-Math.sin(i)*n.r*1.6)+Math.PI}$s&&(wo.disc.rotation.y-=s*3.5);for(const t of $l)t.t=Math.min(1,t.t+s*2.2),t.o.scale.setScalar(F1(t.t));for(const t of kf)t.h.points.visible=t.show(),t.h.points.visible&&t.h.update(ai);if(!Ct.moving){const t=Ne.root.position.clone().sub(Ct.root.position);Ct.faceTo=Math.atan2(t.x,t.z)}window.__freeze||L1(s);const e=window.__side;if(e){const t=Ne.root.position;en.position.set(t.x+e[0],.75+t.y,t.z+e[1]),en.lookAt(t.x,.65+t.y,t.z)}Ld?Ld.render(yt,en):zn.render(yt,en),requestAnimationFrame(cp)}const N1=s=>1-(1-s)**3,U1=s=>s<.5?2*s*s:1-(-2*s+2)**2/2,F1=s=>1+(1.7+1)*(s-1)**3+1.7*(s-1)**2;Xl[bd]&&Xl[bd].apply({scene:yt,H:an,hemi:Ga,key:ri,moon:Lh,renderer:zn,fridgeDoor:uo.door});const Ld=window.__outline?new n1(zn,{defaultThickness:.0035,defaultColor:[.12,.08,.1]}):null,qc={hemi:Ga.intensity,key:ri.intensity,lamp:an.lamp.intensity};(async()=>{const[s,e]=await Promise.all([lo.load(ql("keira")),lo.load(ql("mila"))]);if(ys.keira=s,ys.mila=e,e.bones.Mila_shades||qM(e),e.speed=1.6,e.cartwheels=!0,Ne=ys[Kn],Ct=ys[Kn==="keira"?"mila":"keira"],Ne.root.position.copy(l1),Ct.root.position.copy(h1),Ne.root.rotation.y=.3,Ct.root.rotation.y=-.3,yt.add(s.root,e.root),$e.who.textContent=Kn==="keira"?"Keira":"Mila",$e.who.dataset.hero=Kn,ke("george")&&await Xf(),pr){Zs=Bn=1,ki.open=!0,Ne.root.position.set(ei.x,0,-1.55),Ne.root.rotation.y=.2,Ct.root.position.set(ei.x+.9,0,-1.3),Ct.root.rotation.y=-.3,Ne.once("land"),Ct.once("land"),setTimeout(()=>{Vf(),Xt(0)},1600);const t=Math.max(0,Of);setTimeout(()=>{t>0?(Sr(un-t),Va(),Ft(`Back home with <b>${t} pennies</b>!`+(ke("owl")?"":" <i>Hmm... something followed you. Check the window.</i>"),5200)):ke("owl")||Ft("Back home. <i>Something followed you... check the window.</i>",5e3)},500)}ho.has("open")&&(Zs=Bn=1,ki.open=!0),xt("loading").classList.add("hidden"),!pr&&Ve.visits<=1&&($e.intro.classList.remove("hidden"),xt("introGo").onclick=()=>{$e.intro.classList.add("hidden"),Xt(0),Ft("<b>Drag anywhere</b> to walk. Walk up to things, or tap them, to check them out. Sparkles mean something is hiding.",5200)}),cp()})();window.__h={walkLine:(s,e,t,n)=>{Ne.root.position.set(s,0,e),Ne.speed=n,Ne.goTo([new A(t,0,e)])},view:(s,e)=>{as=s,$a=e},climbUp:Dh,climbDown:Zf,get level(){return Sn},get busy(){return Ot},showAll:()=>{for(const s of Uh)s.obj&&(s.obj.visible=!0)},spot:s=>zh(Dt.find(e=>e.id===s)),swap:Ja,shop:Fh,get me(){return Ne},get other(){return Ct},camera:en};window.__walk=s=>{Ne.path=s?[new A(99,0,0)]:[],Ne.speed=s?1e-4:1.7};

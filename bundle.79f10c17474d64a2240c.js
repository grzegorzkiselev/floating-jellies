"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[179],{295:(e,n,t)=>{var o=t(477),a=t(108),i=t(458),s=t(484),r=t(157),c=t(711),p=t(175),w=t(125),d=t.n(w);const l=document.querySelector("canvas.webgl"),h={width:window.innerWidth,height:window.innerHeight},u={x:0,y:0},m=new o.FM8,g=new o.FM8,M=e=>{console.log(e.clientX,e.clientY),u.x=e.clientX/h.width-.5,u.y=-(e.clientY/h.height-.5),m.x=e.clientX/h.width*2-1,m.y=-e.clientY/h.height*2+1,g.x=e.clientX,g.y=e.clientY,console.log(u)};l.addEventListener("pointerdown",(e=>{l.setPointerCapture(e.pointerId),M(e),l.addEventListener("pointermove",(e=>{console.log("m"),M(e)})),l.addEventListener("pointerup",(e=>{l.hasPointerCapture(e.pointerId),l.removeEventListener("pointermove",M,{once:!0})}))}));const x=new o.xsS,y=new(d().World);y.broadphase=new(d().SAPBroadphase)(y),y.gravity.set(0,0,0);const v=new o.ybr("#A842FF",20,40);x.fog=v;const b=new o.dpR,f=new o.cBK,j=b.load("./textures/matcaps/10.jpeg"),P=new o.kaV({matcap:j});(new r.J).load("./fonts/Mabry Pro Black_Regular.json",(e=>{const n=new c.M("small fps energy",{font:e,size:.5,height:.2,curveSegments:3});n.center();const t=new o.Kj0(n,P);x.add(t)}));const k=f.load(["./textures/environmentMaps/cubeMap/px.jpg","./textures/environmentMaps/cubeMap/nx.jpg","./textures/environmentMaps/cubeMap/py.jpg","./textures/environmentMaps/cubeMap/ny.jpg","./textures/environmentMaps/cubeMap/pz.jpg","./textures/environmentMaps/cubeMap/nz.jpg"]);x.background=k;const B=b.load("./textures/environmentMaps/normal.jpeg");B.wrapS=o.rpg,B.wrapT=o.rpg,B.repeat.set(1,1);const V=[],C=[],z=new o.EJi({transmission:1,thickness:1.2,roughness:.05,envMap:k,envMapIntensity:1.5,clearcoat:1,clearcoatRoughness:.1,normalScale:new o.FM8(1),normalMap:B,clearcoatNormalMap:B,clearcoatNormalScale:new o.FM8(.3)}),F=z.clone(),S=new(d().Material),q=new(d().ContactMaterial)(S,S,{friction:.04,restitution:.01});y.addContactMaterial(q);const E=new(d().Box)(new(d().Vec3)(2.640500068664551,.3187499940395355,.10000000149011612)),A=new(d().Body)({mass:0,shape:E,material:S});y.addBody(A);const R=new(d().Box)(new(d().Vec3)(.4,.4,6)),L=new(d().Body)({mass:1,shape:R,material:S,force:new(d().Vec3)(1,1,1)});y.addBody(L);const Y=new p.k(.3,.3,.3,2,.05),I=new o.Kj0(Y,z),X=new(d().Box)(new(d().Vec3)(.15,.15,.15));for(let e=0;e<48;e++){const e=I.clone(),n=10*(Math.random()-.5),t=7*(Math.random()-.5),o=10*(Math.random()-.5);e.position.set(n,t,o);const a=new(d().Body)({mass:200,position:new(d().Vec3)(n,t,o),shape:X,material:S,angularDamping:.8,linearDamping:.31,angularVelocity:new(d().Vec3)(10,10,10),force:new(d().Vec3)(10,10,10)}),i=new(d().Vec3)(n,t,o);a.quaternion.setFromAxisAngle(i,n),e.quaternion.copy(a.quaternion),x.add(e),y.addBody(a),V.push(e),C.push(a)}window.addEventListener("resize",(()=>{h.width=window.innerWidth,h.height=window.innerHeight,K.aspect=h.width/h.height,K.updateProjectionMatrix(),O.setSize(h.width,h.height),O.setPixelRatio(Math.min(window.devicePixelRatio,2))}));const K=new o.cPb(45,h.width/h.height,.1,30);K.position.z=6,K.lookAt(0,0,0),x.add(K);const O=new o.CP7({antialias:!0,canvas:l,powerPreference:"high-performance"});O.setSize(h.width,h.height),O.setPixelRatio(Math.min(window.devicePixelRatio,2)),O.outputEncoding=o.knz,O.physicallyCorrectLights=!0;const W=new i.C(x,K),D=new s.m(new o.FM8(h.width,h.height),.5,.33,.85),H=new a.xC(O);H.addPass(W),H.addPass(D);const J=new o.SUY;let N=0;const T=new o.iMs;let U,_=[];const G=()=>{const e=J.getElapsedTime(),n=e-N;N=e,K.rotation.x=Math.sin(e/10),K.rotation.x+=.5*Math.sin(e)*.01,K.rotation.z=Math.sin(e/4)*u.x*.5,L.quaternion.copy(K.quaternion),K.position.x+=.01*(15*u.x-K.position.x),K.position.y+=.01*(15*u.y-K.position.y);const t=new o.Pa4(u.x,u.y,0);t.unproject(K),L.position.set(t.x/2,t.y/2,0),K.lookAt(0,0,0),T.setFromCamera(m,K);const a=T.intersectObjects(V);for(const e of V)F.roughness=Math.max(.05,F.roughness-=.001),.05===F.roughness&&(e.material=z);for(let e of a)U=a[0],U.object.material=F,U.object.material.roughness=Math.min(.35,U.object.material.roughness+=.09),_.push(U);y.step(1/60,n,3);for(let e=0;e<V.length;e++){const t=new(d().Vec3)(-C[e].position.x*n*(50*(.5-Math.abs(u.x))),-C[e].position.y*n*(50*(.5-Math.abs(u.x))),-C[e].position.z*n*(50*(.5-Math.abs(u.x))));C[e].applyImpulse(t,new(d().Vec3)(0,0,0)),V[e].position.copy(C[e].position),V[e].quaternion.copy(C[e].quaternion)}H.render(),window.requestAnimationFrame(G)};G()}},e=>{e.O(0,[216],(()=>(295,e(e.s=295)))),e.O()}]);
//# sourceMappingURL=bundle.79f10c17474d64a2240c.js.map
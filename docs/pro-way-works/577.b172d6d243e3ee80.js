"use strict";(self.webpackChunkpro_way_works=self.webpackChunkpro_way_works||[]).push([[577],{4577:(v,p,c)=>{c.r(p),c.d(p,{CartModule:()=>b});var s=c(6895),l=c(9541),t=c(1571),g=c(5415),C=c(3196),a=c(433);function d(e,r){if(1&e){const n=t.EpF();t.TgZ(0,"li"),t._UZ(1,"img",6),t.TgZ(2,"p"),t._uU(3),t.qZA(),t.TgZ(4,"p"),t._uU(5),t.ALo(6,"currency"),t.qZA(),t.TgZ(7,"label"),t._uU(8," Quantidade: "),t.TgZ(9,"input",7),t.NdJ("ngModelChange",function(i){const u=t.CHM(n).$implicit;return t.KtG(u.quantity=i)})("change",function(){t.CHM(n);const i=t.oxw(2);return t.KtG(i.calcTotal())}),t.qZA()(),t.TgZ(10,"button",8),t.NdJ("click",function(){const m=t.CHM(n).$implicit,u=t.oxw(2);return t.KtG(u.removeOfCart(m.id))}),t._UZ(11,"i",9),t.qZA()()}if(2&e){const n=r.$implicit;t.xp6(1),t.Q6J("src",n.image,t.LSH),t.xp6(2),t.Oqu(n.name),t.xp6(2),t.hij("Pre\xe7o ",t.Dn7(6,4,n.price,"BRL",!0)," "),t.xp6(4),t.Q6J("ngModel",n.quantity)}}function f(e,r){if(1&e){const n=t.EpF();t.TgZ(0,"section")(1,"ul"),t.YNc(2,d,12,8,"li",3),t.qZA(),t.TgZ(3,"h2",4),t._uU(4),t.ALo(5,"currency"),t.qZA(),t.TgZ(6,"button",5),t.NdJ("click",function(){t.CHM(n);const i=t.oxw();return t.KtG(i.buy())}),t._uU(7,"Comprar"),t.qZA()()}if(2&e){const n=t.oxw();t.xp6(2),t.Q6J("ngForOf",n.cartItems),t.xp6(2),t.hij("Total ",t.xi3(5,2,n.total,"BRL")," ")}}function _(e,r){1&e&&(t.TgZ(0,"h2",4),t._uU(1,"Nenhum produto adicionado!"),t.qZA())}const h=[{path:"",component:(()=>{class e{constructor(n,o,i){this.cartService=n,this.notificationService=o,this.router=i,this.cartItems=[],this.total=0}ngOnInit(){this.cartItems=this.cartService.getCartItems(),this.calcTotal()}buy(){this.notificationService.success("Parab\xe9ns, voc\xea finalizou a sua compra!"),this.cartService.clearCart(),this.router.navigate(["products"])}calcTotal(){this.total=this.cartItems.reduce((n,o)=>n+o.price*o.quantity,0)}removeOfCart(n){this.cartItems=this.cartItems.filter(o=>o.id!==n),this.cartService.removeOfCart(n),this.calcTotal()}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(g.N),t.Y36(C.g),t.Y36(l.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-cart"]],decls:5,vars:2,consts:[[1,"cart__title"],[4,"ngIf","ngIfElse"],["noProduct",""],[4,"ngFor","ngForOf"],[1,"cart__total"],["type","button",1,"buy-button",3,"click"],["width","200","alt","",3,"src"],["type","number","min","1",3,"ngModel","ngModelChange","change"],["type","button","title","Remover do Carrinho",1,"remove-button",3,"click"],[1,"fa-solid","fa-xmark"]],template:function(n,o){if(1&n&&(t.TgZ(0,"h2",0),t._uU(1,"Carrinho"),t.qZA(),t.YNc(2,f,8,5,"section",1),t.YNc(3,_,2,0,"ng-template",null,2,t.W1O)),2&n){const i=t.MAs(4);t.xp6(2),t.Q6J("ngIf",o.cartItems.length>0)("ngIfElse",i)}},dependencies:[s.sg,s.O5,a.Fj,a.wV,a.JJ,a.qQ,a.On,s.H9],styles:[".cart[_ngcontent-%COMP%]{font-size:24px;color:#58595b;font-weight:700;padding:8px 0}.cart__title[_ngcontent-%COMP%]{font-size:44px;color:#58595b;font-weight:700;padding:8px 0}li[_ngcontent-%COMP%]{display:flex;box-shadow:#64646f33 0 7px 29px;border-radius:8px;overflow:hidden;margin:10px 0;height:100px;align-items:center;justify-content:space-between}img[_ngcontent-%COMP%]{width:100px;display:block}.remove-button[_ngcontent-%COMP%]{background-color:red;border:none;color:#fff;padding:20px;height:100%;transition:.2s all}.remove-button[_ngcontent-%COMP%]:hover{filter:brightness(.9)}input[_ngcontent-%COMP%]{width:30px;text-align:center}.buy-button[_ngcontent-%COMP%]{background-color:#004a76;border:none;color:#fff;padding:10px;font-size:22px;margin-bottom:10px;transition:.3s all}.buy-button[_ngcontent-%COMP%]:hover{filter:brightness(.9)}"]}),e})()}];let x=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[l.Bz.forChild(h),l.Bz]}),e})(),b=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[s.ez,x,a.u5]}),e})()}}]);
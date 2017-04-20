/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */


import * as import0 from '@angular/core';
import * as import1 from '@angular/common';
import * as import2 from './ngx-loading.component';
const styles_LoadingComponent:any[] = ['.backdrop[_ngcontent-%COMP%] {\n                z-index: 50;\n                position: absolute;\n                top: 0;\n                left: 0;\n                right: 0;\n                bottom: 0;\n                background-color: rgba(0, 0, 0, 0.3);\n            }\n\n            .spinner-three-bounce[_ngcontent-%COMP%] {\n                width: 70px;\n                text-align: center;\n                position: absolute;\n                top: 0;\n                left: 0;\n                right: 0;\n                bottom: 0;\n                height: 20px;\n                margin: auto;\n                z-index: 51;\n            }\n\n            .spinner-three-bounce[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n                width: 18px;\n                height: 18px;\n                background-color: #ffffff;\n\n                border-radius: 100%;\n                display: inline-block;\n                -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;\n                animation: sk-bouncedelay 1.4s infinite ease-in-out both;\n            }\n\n            .spinner-three-bounce[_ngcontent-%COMP%]   .bounce1[_ngcontent-%COMP%] {\n                -webkit-animation-delay: -0.32s;\n                animation-delay: -0.32s;\n            }\n\n            .spinner-three-bounce[_ngcontent-%COMP%]   .bounce2[_ngcontent-%COMP%] {\n                -webkit-animation-delay: -0.16s;\n                animation-delay: -0.16s;\n            }\n\n            @-webkit-keyframes sk-bouncedelay {\n                0%, 80%, 100% { -webkit-transform: scale(0) }\n                40% { -webkit-transform: scale(1.0) }\n            }\n\n            @keyframes sk-bouncedelay {\n                0%, 80%, 100% { \n                    -webkit-transform: scale(0);\n                    transform: scale(0);\n                } 40% { \n                    -webkit-transform: scale(1.0);\n                    transform: scale(1.0);\n                }\n            }\n\n\n\n            \n\n            .spinner-sk-rotateplane[_ngcontent-%COMP%] {\n                width: 40px;\n                height: 40px;\n                background-color: #ffffff;\n                text-align: center;\n                position: absolute;\n                top: 0;\n                left: 0;\n                right: 0;\n                bottom: 0;\n                margin: auto;\n                z-index: 51;\n                -webkit-animation: sk-rotateplane 1.2s infinite ease-in-out;\n                animation: sk-rotateplane 1.2s infinite ease-in-out;\n            }\n\n            @-webkit-keyframes sk-rotateplane {\n                0% { -webkit-transform: perspective(120px) }\n                50% { -webkit-transform: perspective(120px) rotateY(180deg) }\n                100% { -webkit-transform: perspective(120px) rotateY(180deg)  rotateX(180deg) }\n            }\n\n            @keyframes sk-rotateplane {\n                0% { \n                    transform: perspective(120px) rotateX(0deg) rotateY(0deg);\n                    -webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg) \n                } 50% { \n                    transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);\n                    -webkit-transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg) \n                } 100% { \n                    transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);\n                    -webkit-transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);\n                }\n            }\n\n\n\n            \n\n            .spinner-rectangle-bounce[_ngcontent-%COMP%] {\n                width: 50px;\n                height: 40px;\n                font-size: 10px;\n                text-align: center;\n                position: absolute;\n                top: 0;\n                left: 0;\n                right: 0;\n                bottom: 0;\n                margin: auto;\n                z-index: 51;\n            }\n\n            .spinner-rectangle-bounce[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n                background-color: #ffffff;\n                height: 100%;\n                width: 6px;\n                display: inline-block;\n                \n                -webkit-animation: sk-stretchdelay 1.2s infinite ease-in-out;\n                animation: sk-stretchdelay 1.2s infinite ease-in-out;\n            }\n\n            .spinner-rectangle-bounce[_ngcontent-%COMP%]   .rect2[_ngcontent-%COMP%] {\n                -webkit-animation-delay: -1.1s;\n                animation-delay: -1.1s;\n            }\n\n            .spinner-rectangle-bounce[_ngcontent-%COMP%]   .rect3[_ngcontent-%COMP%] {\n                -webkit-animation-delay: -1.0s;\n                animation-delay: -1.0s;\n            }\n\n            .spinner-rectangle-bounce[_ngcontent-%COMP%]   .rect4[_ngcontent-%COMP%] {\n                -webkit-animation-delay: -0.9s;\n                animation-delay: -0.9s;\n            }\n\n            .spinner-rectangle-bounce[_ngcontent-%COMP%]   .rect5[_ngcontent-%COMP%] {\n                -webkit-animation-delay: -0.8s;\n                animation-delay: -0.8s;\n            }\n\n            @-webkit-keyframes sk-stretchdelay {\n                0%, 40%, 100% { -webkit-transform: scaleY(0.4) }  \n                20% { -webkit-transform: scaleY(1.0) }\n            }\n\n            @keyframes sk-stretchdelay {\n                0%, 40%, 100% { \n                    transform: scaleY(0.4);\n                    -webkit-transform: scaleY(0.4);\n                }  20% { \n                    transform: scaleY(1.0);\n                    -webkit-transform: scaleY(1.0);\n                }\n            }\n\n\n\n            \n\n            .spinner-wandering-cubes[_ngcontent-%COMP%] {\n                width: 60px;\n                height: 58px;\n                font-size: 10px;\n                text-align: center;\n                position: absolute;\n                top: 0;\n                left: 0;\n                right: 0;\n                bottom: 0;\n                margin: auto;\n                z-index: 51;\n            }\n\n            .cube1[_ngcontent-%COMP%], .cube2[_ngcontent-%COMP%] {\n                background-color: #ffffff;\n                width: 15px;\n                height: 15px;\n                position: absolute;\n                top: 0;\n                left: 0;\n                \n                -webkit-animation: sk-cubemove 1.8s infinite ease-in-out;\n                animation: sk-cubemove 1.8s infinite ease-in-out;\n            }\n\n            .cube2[_ngcontent-%COMP%] {\n                -webkit-animation-delay: -0.9s;\n                animation-delay: -0.9s;\n            }\n\n            @-webkit-keyframes sk-cubemove {\n                25% { -webkit-transform: translateX(42px) rotate(-90deg) scale(0.5) }\n                50% { -webkit-transform: translateX(42px) translateY(42px) rotate(-180deg) }\n                75% { -webkit-transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5) }\n                100% { -webkit-transform: rotate(-360deg) }\n            }\n\n            @keyframes sk-cubemove {\n                25% { \n                    transform: translateX(42px) rotate(-90deg) scale(0.5);\n                    -webkit-transform: translateX(42px) rotate(-90deg) scale(0.5);\n                } 50% { \n                    transform: translateX(42px) translateY(42px) rotate(-179deg);\n                    -webkit-transform: translateX(42px) translateY(42px) rotate(-179deg);\n                } 50.1% { \n                    transform: translateX(42px) translateY(42px) rotate(-180deg);\n                    -webkit-transform: translateX(42px) translateY(42px) rotate(-180deg);\n                } 75% { \n                    transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5);\n                    -webkit-transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5);\n                } 100% { \n                    transform: rotate(-360deg);\n                    -webkit-transform: rotate(-360deg);\n                }\n            }'];
export const RenderType_LoadingComponent:import0.RendererType2 = import0.ɵcrt({
  encapsulation: 0,
  styles: styles_LoadingComponent,
  data: {}
}
);
function View_LoadingComponent_1(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
      (l()(),import0.ɵeld(0,(null as any),(null as any),2,'div',[[
        'class',
        'backdrop'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    import0.ɵdid(139264,(null as any),0,import1.NgStyle,[
      import0.KeyValueDiffers,
      import0.ElementRef,
      import0.Renderer
    ]
      ,{ngStyle: [
        0,
        'ngStyle'
      ]
    },(null as any)),
    import0.ɵpod([
      'border-radius',
      'background-color'
    ]
    )
  ]
  ,(ck,v) => {
    var co:any = v.component;
    const currVal_0:any = ck(v,2,0,((co.loadingConfig == null)? (null as any): co.loadingConfig.backdropBorderRadius),((co.loadingConfig == null)? (null as any): co.loadingConfig.backdropBackgroundColour));
    ck(v,1,0,currVal_0);
  },(null as any));
}
function View_LoadingComponent_3(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
      (l()(),import0.ɵeld(0,(null as any),(null as any),13,'div',[[
        'class',
        'spinner-three-bounce'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n                '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),2,'div',[[
        'class',
        'bounce1'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    import0.ɵdid(139264,(null as any),0,import1.NgStyle,[
      import0.KeyValueDiffers,
      import0.ElementRef,
      import0.Renderer
    ]
      ,{ngStyle: [
        0,
        'ngStyle'
      ]
    },(null as any)),
    import0.ɵpod(['background-color']),
    (l()(),import0.ɵted((null as any),['\n                '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),2,'div',[[
        'class',
        'bounce2'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    import0.ɵdid(139264,(null as any),0,import1.NgStyle,[
      import0.KeyValueDiffers,
      import0.ElementRef,
      import0.Renderer
    ]
      ,{ngStyle: [
        0,
        'ngStyle'
      ]
    },(null as any)),
    import0.ɵpod(['background-color']),
    (l()(),import0.ɵted((null as any),['\n                '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),2,'div',[[
        'class',
        'bounce3'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    import0.ɵdid(139264,(null as any),0,import1.NgStyle,[
      import0.KeyValueDiffers,
      import0.ElementRef,
      import0.Renderer
    ]
      ,{ngStyle: [
        0,
        'ngStyle'
      ]
    },(null as any)),
    import0.ɵpod(['background-color']),
    (l()(),import0.ɵted((null as any),['\n            ']))
  ]
  ,(ck,v) => {
    var co:any = v.component;
    const currVal_0:any = ck(v,4,0,((co.loadingConfig == null)? (null as any): co.loadingConfig.primaryColour));
    ck(v,3,0,currVal_0);
    const currVal_1:any = ck(v,8,0,((co.loadingConfig == null)? (null as any): co.loadingConfig.secondaryColour));
    ck(v,7,0,currVal_1);
    const currVal_2:any = ck(v,12,0,((co.loadingConfig == null)? (null as any): co.loadingConfig.tertiaryColour));
    ck(v,11,0,currVal_2);
  },(null as any));
}
function View_LoadingComponent_4(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
      (l()(),import0.ɵeld(0,(null as any),(null as any),2,'div',[[
        'class',
        'spinner-sk-rotateplane'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    import0.ɵdid(139264,(null as any),0,import1.NgStyle,[
      import0.KeyValueDiffers,
      import0.ElementRef,
      import0.Renderer
    ]
      ,{ngStyle: [
        0,
        'ngStyle'
      ]
    },(null as any)),
    import0.ɵpod(['background-color'])
  ]
  ,(ck,v) => {
    var co:any = v.component;
    const currVal_0:any = ck(v,2,0,((co.loadingConfig == null)? (null as any): co.loadingConfig.primaryColour));
    ck(v,1,0,currVal_0);
  },(null as any));
}
function View_LoadingComponent_5(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
      (l()(),import0.ɵeld(0,(null as any),(null as any),21,'div',[[
        'class',
        'spinner-rectangle-bounce'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n                '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),2,'div',[[
        'class',
        'rect1'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    import0.ɵdid(139264,(null as any),0,import1.NgStyle,[
      import0.KeyValueDiffers,
      import0.ElementRef,
      import0.Renderer
    ]
      ,{ngStyle: [
        0,
        'ngStyle'
      ]
    },(null as any)),
    import0.ɵpod(['background-color']),
    (l()(),import0.ɵted((null as any),['\n                '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),2,'div',[[
        'class',
        'rect2'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    import0.ɵdid(139264,(null as any),0,import1.NgStyle,[
      import0.KeyValueDiffers,
      import0.ElementRef,
      import0.Renderer
    ]
      ,{ngStyle: [
        0,
        'ngStyle'
      ]
    },(null as any)),
    import0.ɵpod(['background-color']),
    (l()(),import0.ɵted((null as any),['\n                '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),2,'div',[[
        'class',
        'rect3'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    import0.ɵdid(139264,(null as any),0,import1.NgStyle,[
      import0.KeyValueDiffers,
      import0.ElementRef,
      import0.Renderer
    ]
      ,{ngStyle: [
        0,
        'ngStyle'
      ]
    },(null as any)),
    import0.ɵpod(['background-color']),
    (l()(),import0.ɵted((null as any),['\n                '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),2,'div',[[
        'class',
        'rect4'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    import0.ɵdid(139264,(null as any),0,import1.NgStyle,[
      import0.KeyValueDiffers,
      import0.ElementRef,
      import0.Renderer
    ]
      ,{ngStyle: [
        0,
        'ngStyle'
      ]
    },(null as any)),
    import0.ɵpod(['background-color']),
    (l()(),import0.ɵted((null as any),['\n                '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),2,'div',[[
        'class',
        'rect5'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    import0.ɵdid(139264,(null as any),0,import1.NgStyle,[
      import0.KeyValueDiffers,
      import0.ElementRef,
      import0.Renderer
    ]
      ,{ngStyle: [
        0,
        'ngStyle'
      ]
    },(null as any)),
    import0.ɵpod(['background-color']),
    (l()(),import0.ɵted((null as any),['\n            ']))
  ]
  ,(ck,v) => {
    var co:any = v.component;
    const currVal_0:any = ck(v,4,0,((co.loadingConfig == null)? (null as any): co.loadingConfig.primaryColour));
    ck(v,3,0,currVal_0);
    const currVal_1:any = ck(v,8,0,((co.loadingConfig == null)? (null as any): co.loadingConfig.primaryColour));
    ck(v,7,0,currVal_1);
    const currVal_2:any = ck(v,12,0,((co.loadingConfig == null)? (null as any): co.loadingConfig.primaryColour));
    ck(v,11,0,currVal_2);
    const currVal_3:any = ck(v,16,0,((co.loadingConfig == null)? (null as any): co.loadingConfig.primaryColour));
    ck(v,15,0,currVal_3);
    const currVal_4:any = ck(v,20,0,((co.loadingConfig == null)? (null as any): co.loadingConfig.primaryColour));
    ck(v,19,0,currVal_4);
  },(null as any));
}
function View_LoadingComponent_6(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
      (l()(),import0.ɵeld(0,(null as any),(null as any),9,'div',[[
        'class',
        'spinner-wandering-cubes'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n                '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),2,'div',[[
        'class',
        'cube1'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    import0.ɵdid(139264,(null as any),0,import1.NgStyle,[
      import0.KeyValueDiffers,
      import0.ElementRef,
      import0.Renderer
    ]
      ,{ngStyle: [
        0,
        'ngStyle'
      ]
    },(null as any)),
    import0.ɵpod(['background-color']),
    (l()(),import0.ɵted((null as any),['\n                '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),2,'div',[[
        'class',
        'cube2'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    import0.ɵdid(139264,(null as any),0,import1.NgStyle,[
      import0.KeyValueDiffers,
      import0.ElementRef,
      import0.Renderer
    ]
      ,{ngStyle: [
        0,
        'ngStyle'
      ]
    },(null as any)),
    import0.ɵpod(['background-color']),
    (l()(),import0.ɵted((null as any),['\n            ']))
  ]
  ,(ck,v) => {
    var co:any = v.component;
    const currVal_0:any = ck(v,4,0,((co.loadingConfig == null)? (null as any): co.loadingConfig.primaryColour));
    ck(v,3,0,currVal_0);
    const currVal_1:any = ck(v,8,0,((co.loadingConfig == null)? (null as any): co.loadingConfig.secondaryColour));
    ck(v,7,0,currVal_1);
  },(null as any));
}
function View_LoadingComponent_2(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵeld(0,(null as any),(null as any),13,'div',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n            '])),
    (l()(),import0.ɵand(8388608,(null as any),(null as any),1,(null as any),View_LoadingComponent_3)),
    import0.ɵdid(8192,(null as any),0,import1.NgIf,[
      import0.ViewContainerRef,
      import0.TemplateRef
    ]
      ,{ngIf: [
        0,
        'ngIf'
      ]
    },(null as any)),
    (l()(),import0.ɵted((null as any),['\n\n            '])),
    (l()(),import0.ɵand(8388608,(null as any),(null as any),1,(null as any),View_LoadingComponent_4)),
    import0.ɵdid(8192,(null as any),0,import1.NgIf,[
      import0.ViewContainerRef,
      import0.TemplateRef
    ]
      ,{ngIf: [
        0,
        'ngIf'
      ]
    },(null as any)),
    (l()(),import0.ɵted((null as any),['\n\n            '])),
    (l()(),import0.ɵand(8388608,(null as any),(null as any),1,(null as any),View_LoadingComponent_5)),
    import0.ɵdid(8192,(null as any),0,import1.NgIf,[
      import0.ViewContainerRef,
      import0.TemplateRef
    ]
      ,{ngIf: [
        0,
        'ngIf'
      ]
    },(null as any)),
    (l()(),import0.ɵted((null as any),['\n\n            '])),
    (l()(),import0.ɵand(8388608,(null as any),(null as any),1,(null as any),View_LoadingComponent_6)),
    import0.ɵdid(8192,(null as any),0,import1.NgIf,[
      import0.ViewContainerRef,
      import0.TemplateRef
    ]
      ,{ngIf: [
        0,
        'ngIf'
      ]
    },(null as any)),
    (l()(),import0.ɵted((null as any),['\n        ']))
  ]
  ,(ck,v) => {
    var co:any = v.component;
    const currVal_0:any = (co.getAnimationType(((co.loadingConfig == null)? (null as any): co.loadingConfig.animationType)) === co.ANIMATION_TYPE.threeBounce);
    ck(v,3,0,currVal_0);
    const currVal_1:any = (co.getAnimationType(((co.loadingConfig == null)? (null as any): co.loadingConfig.animationType)) === co.ANIMATION_TYPE.rotatingPlane);
    ck(v,6,0,currVal_1);
    const currVal_2:any = (co.getAnimationType(((co.loadingConfig == null)? (null as any): co.loadingConfig.animationType)) === co.ANIMATION_TYPE.rectangleBounce);
    ck(v,9,0,currVal_2);
    const currVal_3:any = (co.getAnimationType(((co.loadingConfig == null)? (null as any): co.loadingConfig.animationType)) === co.ANIMATION_TYPE.wanderingCubes);
    ck(v,12,0,currVal_3);
  },(null as any));
}
export function View_LoadingComponent_0(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵted((null as any),['\n        '])),
    (l()(),import0.ɵand(8388608,(null as any),(null as any),1,(null as any),View_LoadingComponent_1)),
    import0.ɵdid(8192,(null as any),0,import1.NgIf,[
      import0.ViewContainerRef,
      import0.TemplateRef
    ]
      ,{ngIf: [
        0,
        'ngIf'
      ]
    },(null as any)),
    (l()(),import0.ɵted((null as any),['\n        '])),
    (l()(),import0.ɵand(8388608,(null as any),(null as any),1,(null as any),View_LoadingComponent_2)),
    import0.ɵdid(8192,(null as any),0,import1.NgIf,[
      import0.ViewContainerRef,
      import0.TemplateRef
    ]
      ,{ngIf: [
        0,
        'ngIf'
      ]
    },(null as any)),
    (l()(),import0.ɵted((null as any),['\n    ']))
  ]
  ,(ck,v) => {
    var co:import2.LoadingComponent = v.component;
    const currVal_0:any = co.show;
    ck(v,2,0,currVal_0);
    const currVal_1:any = co.show;
    ck(v,5,0,currVal_1);
  },(null as any));
}
function View_LoadingComponent_Host_0(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'ngx-loading',([] as any[]),(null as any),(null as any),(null as any),View_LoadingComponent_0,RenderType_LoadingComponent)),
    import0.ɵdid(57344,(null as any),0,import2.LoadingComponent,([] as any[]),(null as any),(null as any))
  ]
  ,(ck,v) => {
    ck(v,1,0);
  },(null as any));
}
export const LoadingComponentNgFactory:import0.ComponentFactory<import2.LoadingComponent> = import0.ɵccf('ngx-loading',import2.LoadingComponent,View_LoadingComponent_Host_0,{
  show: 'show',
  loadingConfig: 'loadingConfig'
}
,{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiQzovUmVwby9uZ3gtbG9hZGluZy9zcmMvbmd4LWxvYWRpbmcuY29tcG9uZW50Lm5nZmFjdG9yeS50cyIsInZlcnNpb24iOjMsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5nOi8vL0M6L1JlcG8vbmd4LWxvYWRpbmcvc3JjL25neC1sb2FkaW5nLmNvbXBvbmVudC50cyIsIm5nOi8vL0M6L1JlcG8vbmd4LWxvYWRpbmcvc3JjL25neC1sb2FkaW5nLmNvbXBvbmVudC50cy5Mb2FkaW5nQ29tcG9uZW50Lmh0bWwiLCJuZzovLy9DOi9SZXBvL25neC1sb2FkaW5nL3NyYy9uZ3gtbG9hZGluZy5jb21wb25lbnQudHMuTG9hZGluZ0NvbXBvbmVudF9Ib3N0Lmh0bWwiXSwic291cmNlc0NvbnRlbnQiOlsiICIsIlxuICAgICAgICA8ZGl2ICpuZ0lmPVwic2hvd1wiIGNsYXNzPVwiYmFja2Ryb3BcIiBbbmdTdHlsZV09XCJ7J2JvcmRlci1yYWRpdXMnOiBsb2FkaW5nQ29uZmlnPy5iYWNrZHJvcEJvcmRlclJhZGl1cywgJ2JhY2tncm91bmQtY29sb3InOiBsb2FkaW5nQ29uZmlnPy5iYWNrZHJvcEJhY2tncm91bmRDb2xvdXJ9XCI+PC9kaXY+XG4gICAgICAgIDxkaXYgKm5nSWY9XCJzaG93XCI+XG4gICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiZ2V0QW5pbWF0aW9uVHlwZShsb2FkaW5nQ29uZmlnPy5hbmltYXRpb25UeXBlKSA9PT0gQU5JTUFUSU9OX1RZUEUudGhyZWVCb3VuY2VcIiBjbGFzcz1cInNwaW5uZXItdGhyZWUtYm91bmNlXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJvdW5jZTFcIiBbbmdTdHlsZV09XCJ7J2JhY2tncm91bmQtY29sb3InOiBsb2FkaW5nQ29uZmlnPy5wcmltYXJ5Q29sb3VyfVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3VuY2UyXCIgW25nU3R5bGVdPVwieydiYWNrZ3JvdW5kLWNvbG9yJzogbG9hZGluZ0NvbmZpZz8uc2Vjb25kYXJ5Q29sb3VyfVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3VuY2UzXCIgW25nU3R5bGVdPVwieydiYWNrZ3JvdW5kLWNvbG9yJzogbG9hZGluZ0NvbmZpZz8udGVydGlhcnlDb2xvdXJ9XCI+PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNwaW5uZXItc2stcm90YXRlcGxhbmVcIiAqbmdJZj1cImdldEFuaW1hdGlvblR5cGUobG9hZGluZ0NvbmZpZz8uYW5pbWF0aW9uVHlwZSkgPT09IEFOSU1BVElPTl9UWVBFLnJvdGF0aW5nUGxhbmVcIiBbbmdTdHlsZV09XCJ7J2JhY2tncm91bmQtY29sb3InOiBsb2FkaW5nQ29uZmlnPy5wcmltYXJ5Q29sb3VyfVwiPjwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3Bpbm5lci1yZWN0YW5nbGUtYm91bmNlXCIgKm5nSWY9XCJnZXRBbmltYXRpb25UeXBlKGxvYWRpbmdDb25maWc/LmFuaW1hdGlvblR5cGUpID09PSBBTklNQVRJT05fVFlQRS5yZWN0YW5nbGVCb3VuY2VcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVjdDFcIiBbbmdTdHlsZV09XCJ7J2JhY2tncm91bmQtY29sb3InOiBsb2FkaW5nQ29uZmlnPy5wcmltYXJ5Q29sb3VyfVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZWN0MlwiIFtuZ1N0eWxlXT1cInsnYmFja2dyb3VuZC1jb2xvcic6IGxvYWRpbmdDb25maWc/LnByaW1hcnlDb2xvdXJ9XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJlY3QzXCIgW25nU3R5bGVdPVwieydiYWNrZ3JvdW5kLWNvbG9yJzogbG9hZGluZ0NvbmZpZz8ucHJpbWFyeUNvbG91cn1cIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVjdDRcIiBbbmdTdHlsZV09XCJ7J2JhY2tncm91bmQtY29sb3InOiBsb2FkaW5nQ29uZmlnPy5wcmltYXJ5Q29sb3VyfVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZWN0NVwiIFtuZ1N0eWxlXT1cInsnYmFja2dyb3VuZC1jb2xvcic6IGxvYWRpbmdDb25maWc/LnByaW1hcnlDb2xvdXJ9XCI+PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNwaW5uZXItd2FuZGVyaW5nLWN1YmVzXCIgKm5nSWY9XCJnZXRBbmltYXRpb25UeXBlKGxvYWRpbmdDb25maWc/LmFuaW1hdGlvblR5cGUpID09PSBBTklNQVRJT05fVFlQRS53YW5kZXJpbmdDdWJlc1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjdWJlMVwiIFtuZ1N0eWxlXT1cInsnYmFja2dyb3VuZC1jb2xvcic6IGxvYWRpbmdDb25maWc/LnByaW1hcnlDb2xvdXJ9XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImN1YmUyXCIgW25nU3R5bGVdPVwieydiYWNrZ3JvdW5kLWNvbG9yJzogbG9hZGluZ0NvbmZpZz8uc2Vjb25kYXJ5Q29sb3VyfVwiPjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICIsIjxuZ3gtbG9hZGluZz48L25neC1sb2FkaW5nPiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O01DQ1E7UUFBQTtRQUFBO01BQUE7SUFBQTtnQkFBQTs7OztJQUFBO09BQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtnQkFBbUM7TUFBQTtNQUFBO0lBQUE7SUFBQTs7OztJQUFBO0lBQW5DLFNBQW1DLFNBQW5DOzs7OztNQUVJO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFBd0g7TUFDcEg7UUFBQTtRQUFBO01BQUE7SUFBQTtnQkFBQTs7OztJQUFBO09BQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtnQkFBcUI7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
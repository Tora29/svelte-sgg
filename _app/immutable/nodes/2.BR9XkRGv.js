import{a as b,t as x}from"../chunks/disclose-version.DBbZFaiD.js";import{p as G,h as w,t as S,i as z,s as g,g as r,j as t,k as e,l as s,m as O}from"../chunks/runtime.DOvr4Zuz.js";import{e as B,s as a}from"../chunks/render.DK8jSJI-.js";import{p as E,o as F,i as K}from"../chunks/index-client.ZUpuhF06.js";import{i as P}from"../chunks/lifecycle.COTW7Vq6.js";async function T(){return console.log("SSG 実行時にこのログが吐き出される"),{ssgData:{content:"Svelte Kit SSG の挙動確認サンプル"}}}const W=Object.freeze(Object.defineProperty({__proto__:null,load:T},Symbol.toStringTag,{value:"Module"})),q={name:"Svelte",version:"4.0",description:"これはレンダリング後にDOM を直接編集しています。"},A=`
    // 実際のコード
    // レンダリング前のデータ
    let dynamicContent = 'クライアントサイドでまだ更新されていません';

    // レンダリング後のデータ
    onMount(() => {
      dynamicContent = 'クライアントサイドで更新されました！';
    });
  `;var H=x("<pre> </pre>"),I=x("<h1> </h1> <h2>・レンダリング後はBuild 時に生成した静的ファイルには触らずにDOM を直接編集する</h2> <h3>F12を押下して開発者ツールを表示し、「Elements（要素）」タブに移動してください。<br> ボタンを押下した際に&lt;pre> タグの中のJSONデータが表示・非表示される際、ツリーが動的に更新されることを確認してください。<br> DOMが更新されると、その部分が自動的にハイライトされるので、変更箇所がすぐに分かります。</h3> <button> </button> <!> <h2>・レンダリング後の動的コンテンツについて</h2> <h3> </h3> <h3>Svelte kit では、レンダリング後に実行する処理をonMount関数内に記述します。<br> プロジェクトルートに生成された.bulid ファイルからindex.html を開き<br> 上記文字列が「クライアントサイドでまだ更新されていません」なっていることを確認してください。</h3> <h3><pre><code> </code></pre></h3>",1);function X(c,h){G(h,!1);let y=E(h,"data",8),o=O(!1);const D=()=>g(o,!r(o));let m=O("クライアントサイドでまだ更新されていません。");F(()=>{g(m,"クライアントサイドで更新されました！")}),P();var v=I(),i=w(v),M=t(i);e(i);var n=s(i,6),k=t(n);e(n);var d=s(n,2);K(d,()=>r(o),C=>{var p=H(),N=t(p);S(()=>a(N,JSON.stringify(q,null,2))),e(p),b(C,p)});var l=s(d,4),J=t(l);e(l);var u=s(l,4),_=t(u),f=t(_),j=t(f);e(f),e(_),e(u),S(()=>{a(M,y().ssgData.content),a(k,r(o)?"JSONデータを非表示":"JSONデータを表示"),a(J,r(m)),a(j,`
    ${A}
  `)}),B("click",n,D),b(c,v),z()}export{X as component,W as universal};

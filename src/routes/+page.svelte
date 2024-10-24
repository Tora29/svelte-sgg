<script lang="ts">
	// Svelte LifeCycle Hooks
	import { onMount } from 'svelte';

	// 定数ファイルのimport
	import * as constData from './constData';

	// +page.ts からロード関数のdata変数を取得
	export let data;

	// ボタンの初期値
	let showJson = false;

	// ボタンを押下するたびに表示非表示を切り替える
	const handleClick = () => (showJson = !showJson);

	// クライアントサイドで動的に表示されるデータ
	let dynamicContent = 'クライアントサイドでまだ更新されていません。';

	onMount(() => {
		dynamicContent = 'クライアントサイドで更新されました！';
	});
</script>

<h1>{data.ssgData.content}</h1>

<h2>・レンダリング後はBuild 時に生成した静的ファイルには触らずにDOM を直接編集する</h2>
<h3>
	F12を押下して開発者ツールを表示し、「Elements（要素）」タブに移動してください。<br />
	ボタンを押下した際に&lt;pre> タグの中のJSONデータが表示・非表示される際、ツリーが動的に更新されることを確認してください。<br />
	DOMが更新されると、その部分が自動的にハイライトされるので、変更箇所がすぐに分かります。
</h3>

<!-- クリックイベントを紐付けたボタン -->
<button on:click={handleClick}>
	{showJson ? 'JSONデータを非表示' : 'JSONデータを表示'}
</button>

<!-- ボタンが押されたらJSONデータを表示 -->
{#if showJson}
	<pre>{JSON.stringify(constData.jsonData, null, 2)}</pre>
{/if}

<!-- クライアントサイドで更新されるデータ -->
<h2>・レンダリング後の動的コンテンツについて</h2>
<h3>{dynamicContent}</h3>
<h3>
  Svelte kit では、レンダリング後に実行する処理をonMount関数内に記述します。<br />
	プロジェクトルートに生成された.bulid ファイルからindex.html を開き<br />
	上記文字列が「クライアントサイドでまだ更新されていません」なっていることを確認してください。
</h3>

<h3>
	<pre><code>
    {constData.codeSnippet}
  </code></pre>
</h3>

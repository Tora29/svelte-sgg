// +page.ts
export async function load() {
	// ログ出力
	console.log('SSG 実行時にこのログが吐き出される');

	// json データと文字列をクライアント側に渡す
	const ssgData = { content: 'Svelte Kit SSG の挙動確認サンプル' };
	return {
		ssgData
	};
}

// Json のサンプルデータ
export const jsonData = {
	name: 'Svelte',
	version: '4.0',
	description: 'これはレンダリング後にDOM を直接編集しています。'
};

// 表示するコードをまとめて文字列として定義
export const codeSnippet = `
    // 実際のコード
    // レンダリング前のデータ
    let dynamicContent = 'クライアントサイドでまだ更新されていません';

    // レンダリング後のデータ
    onMount(() => {
      dynamicContent = 'クライアントサイドで更新されました！';
    });
  `;

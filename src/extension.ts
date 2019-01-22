import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	const disposable = vscode.commands.registerTextEditorCommand('hugo.updateTimestamp', (editor, edit) => {
		const pos = editor.selection.start;
		const line = editor.document.lineAt(pos);
		if (line.text.startsWith('date')) {
			const newTimestamp = `date: ${new Date().toISOString()}`;
			edit.replace(line.range, newTimestamp);
		}
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}

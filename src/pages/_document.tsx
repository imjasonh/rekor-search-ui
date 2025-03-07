import Document, { Html, Head, Main, NextScript } from "next/document";

class AppDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<link
						rel="stylesheet"
						href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
					/>
					<link
						rel="stylesheet"
						href="https://fonts.googleapis.com/css?family=Inter:300,400,500,700&display=swap"
					/>
					<link
						rel="stylesheet"
						href="https://fonts.googleapis.com/icon?family=Material+Icons"
					/>
					<link
						rel="stylesheet"
						href="/monokai-sublime.css"
					></link>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default AppDocument;

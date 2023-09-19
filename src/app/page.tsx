"use client";

import DownloadCode from "@/components/DownloadCode";
import Editor from "@/components/Editor";
import LangChoose from "@/components/LangChoose";
import ThemeChoose from "@/components/ThemeChoose";
import lang_model from "@/lib/lang-model";
import theme_model from "@/lib/theme-model";
import { useEffect, useState } from "react";

export default function Home() {

	const [language, setLanguage] = useState([{ value: 1, label: 'C' }]);
	const [chosenTheme, setChosenTheme] = useState([{ value: 1, label: 'Monokai' }]);

	const [code, setCode] = useState<string>(lang_model[language[0].label].boilerplate);
	
	const [mode, setMode] = useState(lang_model[language[0].label].mode_ace);
	const [theme, setTheme] = useState("monokai");
	const [fontSize, setFontSize] = useState(14);
	const [showPrintMargin, setShowPrintMargin] = useState(true);
	const [showGutter, setShowGutter] = useState(true);
	const [highlightActiveLine, setHighlightActiveLine] = useState(true);
	const [options, setOptions] = useState({
		enableBasicAutocompletion: true,
		enableLiveAutocompletion: true,
		enableSnippets: true,
		showLineNumbers: true,
		tabSize: 4
	});

	useEffect(() => {
		setMode(lang_model[language[0].label].mode_ace);
		setCode(lang_model[language[0].label].boilerplate);

	}, [language]);
	useEffect(() => {
		setTheme(theme_model[chosenTheme[0].label].ace_theme);
	}, [chosenTheme]);

	const onSubmit = async () => {
		const response: any = await fetch("/api/executecode/", {
			method: "POST",
			headers: { "Content-type": "application/json" },
			body: JSON.stringify({
				"lang": lang_model[language[0].label].hackerearthapi,
				"source": code,
				"input": "",
				"callback": "",
			})
		});
		const res = await response.json();
		alert(JSON.stringify(res.result.run_status));
	}

	return (
		<div className="flex w-full h-full m-auto border-2 border-black justify-center">
			<div className="w-full lg:w-3/4 lg:max-w-2/3 mx-5 p-2 border-2 border-black bg-[#f5f5f5]">
				<div className="flex">
					<div className="w-1/4 border-2 border-pink-600">
						<LangChoose value={language} onChange={(language: any) => setLanguage(language)} />
					</div>
					<div className="w-1/4 border-2 border-pink-600">
						<ThemeChoose value={chosenTheme} onChange={(chosenTheme: any) => setChosenTheme(chosenTheme)}/>
					</div>
					<div className="flex w-1/2 border-2 border-pink-600 justify-end">
						<div className="mx-10 border-0 my-auto border-green-600">
							<DownloadCode /> 
						</div>
					</div>
				</div>
				<div className="border-2 border-green-600 w-full">
					<Editor
						mode={mode}
						theme={theme}
						onChange={(e: any) => { setCode(e) }}
						fontSize={fontSize}
						showPrintMargin={showPrintMargin}
						showGutter={showGutter}
						highlightActiveLine={highlightActiveLine}
						value={code}
						setOptions={{
							enableBasicAutocompletion: options.enableBasicAutocompletion,
							enableLiveAutocompletion: options.enableLiveAutocompletion,
							enableSnippets: options.enableSnippets,
							showLineNumbers: options.showLineNumbers,
							tabSize: options.tabSize,
						}}
					/>
				</div>
				<div>
					<button type="button" onClick={onSubmit} className="outline-none bg-transparent border-none">
						soobmit
					</button>
				</div>
			</div>
		</div>
	);
};

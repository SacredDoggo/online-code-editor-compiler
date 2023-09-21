"use client";

import { useEffect, useState } from "react";

import DownloadCode from "@/components/DownloadCode";
import Editor from "@/components/Editor";
import LangChoose from "@/components/LangChoose";
import ThemeChoose from "@/components/ThemeChoose";
import Input from "@/components/Input";
import Output from "@/components/Output";

import lang_model from "@/lib/lang-model";
import theme_model from "@/lib/theme-model";

export default function Home() {

	const [language, setLanguage] = useState([{ value: 1, label: 'C' }]);
	const [chosenTheme, setChosenTheme] = useState([{ value: 1, label: 'Monokai' }]);
	const [input, setInput] = useState('');
	const [output, setOutput] = useState({
		output : "", 
		status : "",
        status_detail : "",
        time_used : 0,
        memory_used : 0
	});

	const [code, setCode] = useState<string>(lang_model[language[0].label].boilerplate);

	const [compiling, setCompiling] = useState(false);
	
	const [mode, setMode] = useState(lang_model[language[0].label].mode_ace);
	const [theme, setTheme] = useState("monokai");
	const [fontSize, setFontSize] = useState(14);
	const [showPrintMargin, setShowPrintMargin] = useState(false);
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
		setCompiling(true);
		const response: any = await fetch("/api/executecode/", {
			method: "POST",
			headers: { "Content-type": "application/json" },
			body: JSON.stringify({
				"lang": lang_model[language[0].label].hackerearthapi,
				"source": code,
				"input": input,
				"callback": "",
			})
		}).then(res => res.json());
		const resp_part3 = await fetch(response.result.run_status.output).then(res => res.text());
		response.result.run_status.output = resp_part3;
		setOutput(response.result.run_status);
		setCompiling(false);
	}

	return (
		<div className="flex w-full h-full m-auto border-4 border-black justify-center">
			<div className="w-full lg:w-3/4 lg:max-w-2/3 mx-5 p-2 border-2 border-black bg-[#dedede]">
				<div className="flex">
					<div className="w-1/4 border-0 border-pink-600">
						<LangChoose value={language} onChange={(language: any) => setLanguage(language)} />
					</div>
					<div className="w-1/4 border-0 border-pink-600">
						<ThemeChoose value={chosenTheme} onChange={(chosenTheme: any) => setChosenTheme(chosenTheme)}/>
					</div>
					<div className="flex w-1/2 border-2 border-pink-600 justify-end">
						<div className="mx-10 border-0 my-auto border-green-600">
							<DownloadCode code={code} lang_extension={lang_model[language[0].label].extension} /> 
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
				<div className="border-2 border-blue-600 text-right px-10 py-2">
					<button type="button" onClick={onSubmit} className="bg-green-500 text-sm text-white px-5 py-2 rounded-md hover:bg-green-600" disabled={compiling}>
						{compiling ? 'Compiling...' : 'Submit'}
					</button>
				</div>
				<div className="flex">
				<div className="border-2 border-blue-600 py-2 w-1/2">
					<span className="text-slate-800">Input: </span>
					<Input value={input} onChange={(e: any) => setInput(e.target.value)}/>
				</div>
				<div className="border-2 border-blue-600 py-2 w-1/2">
					<Output output={output} />
				</div>
				</div>
			</div>
		</div>
	);
};

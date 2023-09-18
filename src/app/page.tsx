"use client";

import DownloadCode from "@/components/DownloadCode";
import Editor from "@/components/Editor";
import LangChoose from "@/components/LangChoose";
import lang from "@/lib/lang-model";
import { useState } from "react";

export default function Home() {
	const [code, setCode] = useState<string>(lang.cpp.boilerplate);
	const onChange = (e: string) => {setCode(e);}
	const onSubmit = async () => {
		const response = await fetch("/api/executecode/", {
			method: "POST",
			headers: { "Content-type" : "application/json" },
			body: JSON.stringify({
				"lang": "CPP14",
				"source": code,
				"input": "",
				"callback": "",
			})
		});
		const res = await response.json();
		console.log(res);
	}

	return (
		<div className="flex w-full h-full m-auto border-2 border-black justify-center">
			<div className="w-2/3 mx-5 p-2 border-2 border-black bg-[#f5f5f5]">
				<div className="flex justify-between">
					<div className="w-1/2 border-2 border-pink-600"><LangChoose /></div>
					<div className="w=1/2 border-2 border-pink-600 "><DownloadCode /> </div>
				</div>
				<div className="border-2 border-green-600 w-full">
					<textarea className="w-full" onChange={(e: any) => {setCode(e);}} value={code} />
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

import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: Request) {

	try {
        const req = await request.json();
        const url = "https://api.hackerearth.com/v4/partner/code-evaluation/submissions/";
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "content-Type": "application/json",
                "client-secret": process.env.CLIENT_SECRET_KEY
            },
            body: JSON.stringify(req), 
        }).then(response => response.json());

		return NextResponse.json(response);

	} catch (error: any) {
		return NextResponse.json({name: "Error", error: error.message});
	}
}
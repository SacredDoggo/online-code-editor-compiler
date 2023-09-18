import { NextRequest, NextResponse } from 'next/server';

interface body {
    "lang": string, // language
    "source": string, // code
    "input": string, // inputs
    "memory_limit"?: number,
    "time_limit"?: number,
    "context"?: string | Object,
    "callback"?: string,
    "id"?: string
}

interface header {
    "Content-type": string,
    "client-secret": string | undefined
}


/*
{'result': 
    {'run_status': 
        {'status': 'NA'}, 
        'compile_status': 'Compiling...'
    }, 
    'he_id': '3064ee0f-9189-499b-be2c-f0fc68c8c9ab', 
    'status_update_url': 'https://api.hackerearth.com/v4/partner/code-evaluation/submissions/3064ee0f-9189-499b-be2c-f0fc68c8c9ab/', 
    'request_status': {'code': 'REQUEST_QUEUED', 'message': 'Your request has been queued in the evaluation pipeline'}
}
*/
export async function POST(request: Request) {

    try {
        const req = await request.json();
        console.log(req.code);
        
        const newBody:body = {
            "lang": req.lang,
            "source": req.source,
            "input": req.source,
            'time_limit': 5,
            'memory_limit': 246323,
            'callback': req.callback,
            'id': "OCEC"
        }

        const url = "https://api.hackerearth.com/v4/partner/code-evaluation/submissions/";
        
        const requestHeaders: HeadersInit = new Headers();
        requestHeaders.set('Content-Type', 'application/json');
        requestHeaders.set('client-secret', process.env.CLIENT_SECRET_KEY!)

        const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify(newBody),
            headers: requestHeaders,
        });
        const res = await response.json();
        return NextResponse.json(res);

    } catch (error: any) {
        return NextResponse.json({ name: "Error", error: error });
    }
}
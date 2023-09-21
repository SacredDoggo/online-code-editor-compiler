import { useEffect, useState } from "react";

interface InputProps {
  result: {
    compile_status: string;
    run_status: {
      output: string;
      status: string;
      status_detail: string;
      time_used: number;
      memory_used: number;
    };
  };
}

const Output: React.FC<InputProps> = ({ result }) => {
  const rows = 3;
  const [someError, setSomeError] = useState(result.compile_status != 'OK');
  useEffect(() => {
    setSomeError(result.compile_status != 'OK');
  }, [result])
  return (
    <div>
      <div className="flex w-full justify-between px-2">
        <span>{`Status: '${result.run_status.status}'`}</span>
        <span>Time: {result.run_status.time_used}</span>
        <span>Memory: {result.run_status.memory_used}</span>
      </div>
      <div>
        <textarea
          className={`w-full resize-none rounded-sm text-sm py-0.5 ${someError ? 'bg-red-200 text-red-500' : ''}`}
          rows={rows}
          value={someError ? result.compile_status : result.run_status.output}
          readOnly
        />
      </div>
    </div>
  );
};

export default Output;

/*  
{
    "output":"https://he-s3.s3.amazonaws.com/media/userdata/AnonymousUser/code/dc11608",
    "status":"AC",
    "status_detail":"NA",
    "time_used":0.00849,
    "memory_used":2
} 
*/

/* 
{
    "he_id":"7eb1dfbb-e633-4f31-97ca-f36d905b9296",
    "request_status":
    {
        "code":"REQUEST_COMPLETED",
        "message":"Your request has been completed successfully"
    },
    "status_update_url":"https://api.hackerearth.com/v4/partner/code-evaluation/submissions/7eb1dfbb-e633-4f31-97ca-f36d905b9296/",
    "result":
    {
        "compile_status":"OK",
        "run_status":
        {
            "output":"https://he-s3.s3.amazonaws.com/media/userdata/AnonymousUser/code/400d6c9",
            "status":"AC",
            "status_detail":"NA",
            "time_used":0.009134,
            "memory_used":2
        }
    }
}
*/

/* Compile Error
{
    "he_id":"bc5a7126-b4fe-4f53-a32e-93e46ce43fbc",
    "request_status":
    {
        "code":"CODE_COMPILED",
        "message":"Compilation step is over"
    },
    "status_update_url":"https://api.hackerearth.com/v4/partner/code-evaluation/submissions/bc5a7126-b4fe-4f53-a32e-93e46ce43fbc/",
    "result":
    {
        "compile_status":" In function 'int main()':\n6:42: error: expected ';' before 'return'\n:cout << \"Hello, World! from C++ 17\"\n\n\n\n\n\n",
        "run_status":
        {
            "output":null,
            "status":"NA",
            "status_detail":null,
            "time_used":0,
            "memory_used":0
        }
    }
}
*/

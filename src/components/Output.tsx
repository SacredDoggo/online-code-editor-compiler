interface InputProps {
  output: {
    output: string;
    status: string;
    status_detail: string;
    time_used: number;
    memory_used: number;
  };
}

const Output: React.FC<InputProps> = ({ output }) => {
    const rows = 3;
    
  return (
    <div>
      <div className="flex w-full justify-between px-2">
        <span>{`Status: '${output.status}'`}</span>
        <span>Time: {output.time_used}</span>
        <span>Memory: {output.memory_used}</span>
      </div>
      <div>
        <textarea
          rows={rows}
          value={output.output}
          className="w-full resize-none rounded-sm text-sm py-0.5"
        ></textarea>
      </div>
    </div>
  );
};

export default Output;

/*  {
        "output":"https://he-s3.s3.amazonaws.com/media/userdata/AnonymousUser/code/dc11608",
        "status":"AC",
        "status_detail":"NA",
        "time_used":0.00849,
        "memory_used":2
    } 
*/

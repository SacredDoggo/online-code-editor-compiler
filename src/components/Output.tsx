
interface InputProps {
    Output : {
        output : string;
        status : string;
        status_detail : string;
        time_used : number;
        memory_used : number;
    }
};

const Output: React.FC<InputProps> = ({ Output }) => {
    return (
        'Output'
    )
}

export default Output;

/*  {
        "output":"https://he-s3.s3.amazonaws.com/media/userdata/AnonymousUser/code/dc11608",
        "status":"AC",
        "status_detail":"NA",
        "time_used":0.00849,
        "memory_used":2
    } 
*/
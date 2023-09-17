import { download } from "@/images";

function DownloadCode() {
    
    return (
        <button type="button" onClick={() => {console.log("download code")}} className="outline-none bg-transparent border-none">
            <img src={download.src} alt="download" className="w-6 h-6 object-contain" />
          </button>
    );
};

export default DownloadCode;
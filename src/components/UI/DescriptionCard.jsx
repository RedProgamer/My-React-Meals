import Card from "./Card";

function DescriptionCard() {
    return (
        <Card className="text-left text-white">
            <div className="w-[60%] h-[80%] ml-6">
                <h1 className="text-5xl subpixel-antialiased font-extrabold mb-3 mb:text-2xl lg:text-5xl sm:text-5xl">Delimcious Food, Delivered To You</h1>
                <div className="flex mt-6">
                    <button className="flex items-center rounded-lg px-5 py-3 mr-5 bg-zinc-800 hover:bg-black focus:ring-2 focus:ring-black focus:ring-offset-2">
                        Deliver
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                    </button>
                    <button className="flex items-center rounded-lg px-5 py-3 bg-zinc-800 hover:bg-black focus:ring-2 focus:ring-black focus:ring-offset-2">
                        Takeout
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
            </div>
        </Card>
    );
}

export default DescriptionCard;
const BottomMenuComp = () => {
    return (
        <div className="mt-8 bg-sky-500  overflow-x-auto rounded  md:mx-28 lg:mx-40  2xl:mx-80  w-auto h-14  flex lg:rounded-[20px] lg:justify-center">
            <ul className="flex justify-evenly   m-auto mx-4 text-white font-bold text-base font-sans lg:w-full lg:mx-auto ">
                <li className="after:border-l-2 flex mr-2 md:mr-1">
                    <button className="mr-2 min-w-max xl:mr-8">Take a Tour</button>
                </li>
                <li className="after:border-l-2 flex mr-2 md:mr-1 lg:mr-0">
                    <button className="mr-2 min-w-max xl:mr-8">Demo</button>
                </li>
                <li className="after:border-l-2 flex mr-2 md:mr-1">
                    <button className="mr-2 min-w-max xl:mr-8">Resources</button>
                </li>
                <li className="after:border-l-2 flex mr-2 md:mr-1">
                    <button className="mr-2 min-w-max xl:mr-8">Resources</button>
                </li>
                <li className="after:border-l-2 flex mr-2 md:mr-1">
                    <button className="mr-2 min-w-max xl:mr-8">Resources</button>
                </li>
                <li className="after:border-l-2 flex mr-2 md:mr-1">
                    <button className="mr-2 min-w-max xl:mr-8">Webinars</button>
                </li>
                <li className="flex">
                    <button className="min-w-max">Hands-on Labs</button>
                </li>
            </ul>
        </div>
    );
}

export default BottomMenuComp;
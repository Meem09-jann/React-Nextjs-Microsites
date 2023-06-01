import { AiOutlineSearch } from 'react-icons/ai';
const SearchComp = () => {
    return (
        <div className="bg-sky-500 text-white  hover:bg-cyan-600 hover:shadow-lg  active:text-white rounded-md w-52 h-8 flex px-[13px]">

            <input className="text-left w-4/5 h-8 mr-2 text-sm bg-sky-500 text-white  hover:bg-cyan-600 hover:shadow-lg  active:text-white placeholder-sky-50" type="text" placeholder="Search" />
            <button className="w-1/5 h-auto flex m-auto justify-end" type="submit">
                <AiOutlineSearch></AiOutlineSearch>
            </button>
        </div>
    );
}

export default SearchComp;
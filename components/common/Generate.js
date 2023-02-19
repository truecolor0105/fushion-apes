export default function Generate() {
    return (
        <div className="w-[500px] m-auto my-[30px]">
            <input type="search"
                className="pl-[20px] rounded-l-[50px] w-[80%] h-[80px] bg-[#FBFBFB] border border-[#EDB731] leading-[100px  ]"
                placeholder="Describe your imagination"
                required
            />
            <button
                type="submit"
                className="w-[20%] h-[80px] bg-[#EDB731] rounded-r-[50px] text-base border border-[#EDB731]">
                <span className="font-['Roboto'] font-normal text-[24px] leading-[150%] text-[#000000]">Generate</span>
            </button>
        </div>
    );
}
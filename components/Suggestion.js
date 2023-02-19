export default function Suggestion({ width }) {
    const style = `mr-[10px] rounded-[24px] bg-[#EDB731] border border-[#EDB731] px-[17px] py-[9px] font-['Roboto'] font-normal leading-[150%] text-black w-[${width}px] mt-[10px]`;

    return (
        <div className={style} style={{width: width}}>
            Suggestion heres
        </div>
    );
}
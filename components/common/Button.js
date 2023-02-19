export default function Buttton({ title, btnColor, textColor, borderColor = '#EDB731' }) {
    let style = `
        mr-[10px]
        w-fit
        border border-[${borderColor}] rounded-[23px]
        text-[${textColor}]
        font-['Roboto'] font-medium leading-[150%] text-[16px]
        px-[22px] py-[6px]`;
    btnColor ? style += ` bg-[${btnColor}]` : style += ` bg-white`;
    return (
        <>
            <button
                type="button"
                className={style}>{title}
            </button>
        </>
    );
}
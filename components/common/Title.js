export default function Title({ font, content, fontSize, fontColor }) {
    return (
        <div className={"pb-[20px] font-[" + font + "] font-normal text-[" + fontSize + "px] leading-[150%] m-auto text-center text-["+ fontColor + "]"}>
            {content}
        </div>
    );
}
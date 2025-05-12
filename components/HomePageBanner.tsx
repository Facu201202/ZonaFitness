
import Link from "next/link"

type HomePageBannerProps = {
    title: string,
    text: string,
    buttonText: string,
    bgColor: string
    textColor?: string

}

export default function HomePageBanner({title, text, buttonText, bgColor, textColor}: HomePageBannerProps) {
    return (
        <div className={`bg-[${bgColor}] text-white py-8 flex flex-col items-center gap-3`}>
            <h1 className="text-3xl font-bold">{title}</h1>
            <p className={`text-xl ${textColor && textColor}`}>{text}</p>
            <div className="py-4">
                <Link
                    href={""}
                    className=" rounded-full px-5 py-2 bg-white hover:bg-gray-100 text-[#2D5DA2] text-xl"
                >{buttonText}</Link>
            </div>
        </div>
    )
}

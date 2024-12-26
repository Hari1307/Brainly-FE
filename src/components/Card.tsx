import { ShareIcon } from "../icons/shareIcon"
interface CardProps {
    title: string;
    link: string;
    type: "Twitter" | "Youtube"
}
const Card = ({ title, link, type }: CardProps) => {
    return (
        <div className="bg-white min-w-80 p-4 border rounded-md border-gray-200">
            <div className="flex justify-between ">
                <div className="flex items-center text-md">
                    <div className="pr-2 text-gray-500">
                        <ShareIcon />
                    </div>
                    <p>
                        {title}
                    </p>
                </div>
                <div className="flex space-x-3 text-gray-500 items-center">
                    <a href={link} target="_blank">
                        <ShareIcon />
                    </a>
                    <ShareIcon />
                </div>
            </div>
            <div className="pt-3 pb-1">
                {type === "Youtube" &&
                    <div className="pt-3">
                        <iframe className="w-full rounded-xl bg-slate-100 p-2" src={link.replace("watch", "embed").replace("?v=", "/")} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                }
                {type === "Twitter" &&
                    <blockquote className="twitter-tweet w-full h-5">
                        <a href={link.replace("x", "twitter")} />
                    </blockquote>
                }
            </div>
            <div>
                footer
            </div>
        </div>
    )
}

export default Card
import { BrainIcon } from "../icons/brainIcon"
import { XIcon } from "../icons/xIcon"
import { YoutubeIcon } from "../icons/youtubeIcon"
import SidebarItems from "./SidebarItems"

const Sidebar = () => {
    return (
        <div className="h-screen bg-white border-r-2 border-gray-300 w-72 fixed left-0 top-0 hover:shadow-xl transition duration-1000 ease-linear">

            <div className="flex gap-3 pt-4 pl-4">
                <BrainIcon />
                <h1 className="text-4xl font-sans font-semibold">
                    Brainly
                </h1>
            </div>
            <div className="pt-5 pl-5">
                <SidebarItems text="Twitter" icon={<XIcon />} />
                <SidebarItems text="Youtube" icon={<YoutubeIcon />} />
            </div>
        </div>
    )
}

export default Sidebar
import axios from "axios";
import { useRef } from "react";
import { BACKEND_URL } from "../config";
import { CrossIcon } from "../icons/crossIcon";
import Button from "./Button";
import { Input } from "./Input";

interface contentProps {
    open: boolean;
    onClose: () => void
}
const CreateContent = ({ open, onClose }: contentProps) => {
    const titleRef = useRef<HTMLInputElement>(null);
    const linkRef = useRef<HTMLInputElement>(null);
    const typeRef = useRef<HTMLInputElement>(null);

    const createContent = async () => {
        const title = titleRef.current?.value;
        const link = linkRef.current?.value;
        const type = typeRef.current?.value;

        const authentication = localStorage.getItem("token");
        const response = await axios.post(`${BACKEND_URL}/api/v1/content`,
            { title, link, type }, {
            headers: {
                "Authorization": "Bearer " + authentication
            }
        })

        console.log(response);

        onClose();
    }
    if (!open) return null;
    return (
        <div className="fixed inset-0 z-10">
            <div onClick={onClose} className="bg-slate-500 w-screen h-screen fixed top-0 left-0 opacity-45" />

            <div className="flex justify-center items-center min-h-screen fixed w-screen inset-0 z-20 pointer-events-none">
                <div className="flex flex-col bg-white relative p-2 rounded-lg pointer-events-auto">
                    <div onClick={onClose} className="absolute top-2 right-2 cursor-pointer hover:bg-purple-100 transition duration-700 ease-in-out w-5 h-5 flex justify-center items-center">
                        <CrossIcon />
                    </div>
                    <div className="flex flex-col justify-center mt-4 p-7">
                        <Input ref={titleRef} type="text" placeholder="Title" />
                        <Input ref={linkRef} type="text" placeholder="Link" />
                        <Input ref={typeRef} type="text" placeholder="Type (Youtube or Twitter)" />
                        <div className="flex justify-center mt-2">
                            <Button onClick={createContent} variant="Primary" text="Submit" normalButton={true} />
                        </div>
                    </div>
                </div>
            </div>
        </div >

    )
}

export default CreateContent
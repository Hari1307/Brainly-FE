import axios from "axios";
import { useRef } from "react";
import { BACKEND_URL } from "../config";
import Button from "./Button";
import { Input } from "./Input";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();
    const signup = async () => {
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;

        const response = await axios.post(`${BACKEND_URL}/api/v1/signup`, {
            username,
            password
        });

        if (response) {
            console.log("Signup success")
            alert("Signup success")
            navigate("/signin");
        }

        console.log(response);
    }

    return (
        <div className="flex w-screen h-screen justify-center items-center bg-slate-300">
            <div className="bg-white min-w-48 border rounded-md p-10 flex flex-col justify-center items-center">
                <Input ref={usernameRef} type="text" placeholder="Username" />
                <Input ref={passwordRef} type="password" placeholder="Password" />
                <div className="mt-4 ">
                    <Button onClick={signup} variant="Primary" text="Signup" normalButton={true} />
                </div>

            </div>
        </div>
    )
}

export default Signup

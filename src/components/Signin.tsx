import axios from "axios";
import { useRef } from "react";
import { BACKEND_URL } from "../config";
import Button from "./Button";
import { Input } from "./Input";
import { useNavigate } from "react-router-dom";

const Signin = () => {
    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();
    const signin = async () => {
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;

        const response = await axios.post(`${BACKEND_URL}/api/v1/signin`, {
            username,
            password
        });

        if (response.status === 200) {
            const token = response.data.token;
            localStorage.setItem("token", token);
            // alert(response.data.message)
            // console.log(response.data.message);
            navigate("/dashboard");
        } else {
            alert(response.data.message)
            console.log(response.data.message);
        }
    }

    return (
        <div className="flex w-screen h-screen justify-center items-center bg-slate-300">
            <div className="bg-white min-w-48 border rounded-md p-10 flex flex-col justify-center items-center">
                <Input ref={usernameRef} type="text" placeholder="Username" />
                <Input ref={passwordRef} type="password" placeholder="Password" />
                <div className="mt-4 ">
                    <Button onClick={signin} variant="Primary" text="Signin" normalButton={true} />
                </div>

            </div>
        </div>
    )
}

export default Signin

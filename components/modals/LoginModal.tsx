import {useCallback, useState} from "react";
import useLoginModal from "@/hooks/useLoginModal";
import Input from "../Input"
import Modal from "../Modal";
import useRegistryModal from "@/hooks/useRegistryModal";
import axios from "axios";

const LoginModal = () => {
    const loginModal = useLoginModal()
    const registerModal = useRegistryModal()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const onToggle = useCallback(() => {
        if (isLoading) {
            return
        }

        loginModal.onClose()
        registerModal.onOpen()
    }, [isLoading, registerModal, loginModal])

    const onSubmit = useCallback(async () => {
        try {
            setIsLoading(true)

            await axios.post("/api/login", {
                email,
                password,
            })

            loginModal.onClose()
            window.location.reload();
        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false)
        }
    }, [loginModal, email, password])

    const bodyContent = (
        <div className="flex flex-col gap-4">
            <Input
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                disabled={isLoading}
            />
            <Input
                placeholder="Password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                disabled={isLoading}
            />
        </div>
    )

    const footerContent = (
        <div className="text-neutral-400 text-center mt-4">
            <p>First time using Twitter?
                <span
                    onClick={onToggle}
                    className="
                text-white
                cursor-pointer
                hover:underline
                "
                > Create an account
                </span>
            </p>
        </div>
    )

    return (
        <Modal
            disabled={isLoading}
            isOpen={loginModal.isOpen}
            title="Login"
            actionLabel="Sign In"
            onClose={loginModal.onClose}
            onSubmit={onSubmit}
            body={bodyContent}
            footer={footerContent}
        />
    )
}
export default LoginModal;
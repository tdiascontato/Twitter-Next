import { useCallback, useState} from "react";
import useLoginModal from "@/hooks/useLoginModal"; 
import useRegisterModal from "@/hooks/useRegisterModal";
import Input from "../Input";
import Modal from "../Modal";

const LoginModal = () => {
    const loginModal = useLoginModal();
    const registerModal = useRegisterModal();
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); 
    const [isLoading, setIsLoading] = useState(false);

    const onToggle = useCallback(()=>{
        if(isLoading){
            return;
        }
        loginModal.onClose();
        registerModal.onOpen();
    }, [isLoading, registerModal, loginModal])

    const onSubmit = useCallback(async () => { 
        try{
        setIsLoading(true);
        // TODO ADD LOG IN
        loginModal.onClose();
    } catch (error) { 
        console.log(error); 
    } finally {
        setIsLoading(false);
    }
    }, [loginModal]);

    const bodyContent = (
        <div className="flex flex-col gap-4">
            <Input
            placeholder="Email" 
            onChange={(e)=> setEmail(e.target.value)} 
            value = {email}
            disabled = {isLoading}
            />
            <Input
            placeholder="Senha" 
            onChange={(e)=>setPassword(e.target.value)} 
            value = {password}
            disabled = {isLoading}
            />

        </div>
    )

    const footerContent = (
        <div className="text-neutal-400 text-center mt-4">
            <p className="
                text-white">Primeira vez aqui?
            <span
                onClick={onToggle} 
                className="
                text-white p-4 cursor-pointer 
                hover:underline">
                Criar conta!
            </span>
            </p>
        </div>
    )

    return (
    <Modal 
        disabled = {isLoading}
        isOpen = {loginModal.isOpen}
        title = "Login"
        actionLabel = "Entrar"
        onClose = {loginModal.onClose}
        onSubmit = {onSubmit}
        body={bodyContent}
        footer={footerContent}
    />
    );
}
export default LoginModal;
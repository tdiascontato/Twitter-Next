import { useCallback, useState} from "react";
import useLoginModal from "@/hooks/useLoginModal"; 
import useRegisterModal from "@/hooks/useRegisterModal";
import Input from "../Input";
import Modal from "../Modal";

const RegisterModal = () => {
    const loginModal = useLoginModal();
    const registerModal = useRegisterModal();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); 
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const onToggle = useCallback(()=>{
        if(isLoading){
            return;
        }
        registerModal.onClose();
        loginModal.onOpen();
    }, [isLoading, registerModal, loginModal])

    const onSubmit = useCallback(async () => { 
        try{
        setIsLoading(true);
        // TODO ADD REGISTER AND LOG IN
        registerModal.onClose();
    } catch (error) { 
        console.log(error); 
    } finally {
        setIsLoading(false);
    }
    }, [registerModal]);

    const bodyContent = (
        <div className="flex flex-col gap-4">
            <Input
            placeholder="Email" 
            onChange={(e)=> setEmail(e.target.value)} 
            value = {email}
            disabled = {isLoading}
            />
            <Input
            placeholder="Name" 
            onChange={(e)=> setName(e.target.value)} 
            value = {name}
            disabled = {isLoading}
            />
            <Input
            placeholder="Username" 
            onChange={(e)=> setUsername(e.target.value)} 
            value = {username}
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
                <p className="text-white">Já possui uma conta?
                <span
                    onClick={onToggle} 
                    className="
                    text-white p-4 cursor-pointer 
                    hover:underline">
                    Entrar
                </span>
                </p>
            </div>
        )
    return (
    <Modal 
        disabled = {isLoading}
        isOpen = {registerModal.isOpen}
        title = "Cadastro"
        actionLabel = "Register"
        onClose = {registerModal.onClose}
        onSubmit = {onSubmit}
        body={bodyContent}
        footer={footerContent}
    />
    );
}
export default RegisterModal;
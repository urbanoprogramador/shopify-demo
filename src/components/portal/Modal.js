import { Portal } from "./Portal";


export const Modal = ({ children }) => {


    return (<Portal>
        <div className="modal background">
            {children}
        </div>
    </Portal>);
}
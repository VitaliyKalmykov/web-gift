import React, { createContext, useState, ReactNode } from 'react';

// Інтерфейс для контексту
interface ICallContextType {
    isCallVisible: boolean;
    setIsCallVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

// Створення контексту
const CallContext = createContext<ICallContextType | undefined>(undefined);

const CallProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isCallVisible, setIsCallVisible] = useState<boolean>(false);

    return (
        <CallContext.Provider value={{ isCallVisible, setIsCallVisible }}>
            {children}
        </CallContext.Provider>
    );
};

export { CallContext, CallProvider };
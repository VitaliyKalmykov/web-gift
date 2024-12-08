import {IJerk} from "../../../../../typization/types";

interface ModalDescriptionProps {
    selectedJerk: IJerk | null;
}

const ModalOrderDescription= ({selectedJerk}: ModalDescriptionProps) => {

    return (
        <div>
            <h2 className="text-lg text-center font-bold mb-8">{selectedJerk?.name}</h2>

            <img className="mx-auto mb-8" src={selectedJerk?.image} alt={selectedJerk?.name}/>

            <p>{selectedJerk?.description}</p>
        </div>
    );

};

export default ModalOrderDescription;
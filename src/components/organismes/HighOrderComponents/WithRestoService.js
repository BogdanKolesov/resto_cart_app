import React from 'react';
import RestoServicesContext from '../RestoServiceContext';


const WithRestoService = () => (Wrapped) => {
    return (props) => {
        return (
            <RestoServicesContext.Consumer>
                {
                    (RestoService) => {
                        return <Wrapped {...props} RestoService={RestoService} />
                    }
                }
            </RestoServicesContext.Consumer>
        )
    };
};

export { WithRestoService };
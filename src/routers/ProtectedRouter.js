import React from 'react'
import PropTypes from 'prop-types'


/* import { Route, Routes } from 'react-router-dom'; */
import { Navigate } from 'react-router-dom';





export const ProtectedRouter = ({
    showRouter,
    component: Component,
    to = '/'
}) => {

    if(showRouter){
        return <Component/>
    }else{
        return <Navigate to={to} />;
    }





   /*  return (
        <Routes>
            <Route {...resto}
                element={
                    (props) => (
                        (showRouter)
                            ? <Component {...props} />
                            : null
                    )

                }

            />
        </Routes>

    ) */
};

ProtectedRouter.propTypes = {
    showRouter: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}

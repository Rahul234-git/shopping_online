import React from 'react';
import {BrowserRouter as Router,Routes,Route,Navigate} from 'react-router-dom';


// Payment....>>>>>>
import PaymentHome from './Componets/Payment/Home';
import SuccessPayment from './Componets/Payment/SuccessPayment';

const MainRouter = () => {
    return (
        <Router>
            <Routes>

                {/* Payment...>>>>> */}

                <Route path='/paymentHome' element={<PaymentHome />} />
                <Route path='/paymentsuccess' element={<SuccessPayment />} />

                <Route path='/' element={<Navigate to="/" />} />
            </Routes>
        </Router>
    )

}

export default MainRouter;
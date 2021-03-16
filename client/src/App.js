// import logo from './logo.svg';
import './App.css';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Landing from './components/landing/Landing';
import StudentRequestFormPage from './components/forms/StudentRequestFormPage';
import DefermentRequestFormPage from './components/forms/DefermentRequestFormPage';
import TransferRequestFormPage from './components/forms/TransferRequestFormPage';
import ClearanceRequestFormPage from './components/forms/ClearanceRequestFormPage';
import FinancialDepartment from './components/financialDepartment/FinancialDepartment';
import HeadOfDepartment from './components/headOfDepartment/HeadOfDepartment';
import Library from './components/library/Library';

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path='/' component={Landing} />
				<Route
					path='/studentRequestFormPage'
					component={StudentRequestFormPage}
				/>
				<Route
					path='/defermentRequestFormPage'
					component={DefermentRequestFormPage}
				/>
				<Route
					path='/transferRequestFormPage'
					component={TransferRequestFormPage}
				/>
				<Route
					path='/clearanceRequestFormPage'
					component={ClearanceRequestFormPage}
				/>
				<Route path='/financialDepartment' component={FinancialDepartment} />
				<Route path='/headOfDepartment' component={HeadOfDepartment} />
				<Route path='/library' component={Library} />
			</Switch>
		</Router>
	);
}

export default App;


import AppInfo from '../app-info/app-info';
import SeachPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter'
import EmployeesList from '../emploees-list/emploees-list'
import EmployeesAddForm from '../emploees-add-form/employees-add-form';

import '../search-panel/search-panel.css'
import './app.css';

function App() {

	const data = [
		{ name: 'Ilia', salary: 1555, increase: false },
		{ name: 'Kate', salary: 600, increase: false },
		{ name: 'Biba', salary: 15000, increase: true },
	];

	return (
		<div className="app">
			<AppInfo />
			<div className="search-panel">
				<SeachPanel />
				<AppFilter />
			</div>
			<EmployeesList data={data}/>
			<EmployeesAddForm />
		</div>
	);
}

export default App;
import './App.css';

import Main from './components/Main/Main';
import About from './components/About/About';
import Services from './components/Services/Services';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
    return (
        <div className="roboto">
            <Main/>
            <About/>
            <Services/>
        </div>
    )
}
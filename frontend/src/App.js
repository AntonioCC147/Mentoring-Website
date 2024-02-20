import './App.css';

import Main from './components/Main/Main';
import About from './components/About/About';
import Services from './components/Services/Services';
import Feedback from './components/FAQ/FAQ';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
    return (
        <div className="roboto">
            <Main/>
            <About/>
            <Services/>
            <Feedback/>
        </div>
    )
}
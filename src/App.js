import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';
import { Bar, Line, Pie } from 'react-chartjs-2';
import { BrowserRouter as Router,Route, Routes} from 'react-router-dom'; // Import BrowserRouter
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './components/Dashboard/dashboard';
import NewsFeeds from './components/NewsFeeds/newsFeeds';
import CreateNewnewsfeed from './components/CreateNewnewsfeed/CreateNewnewsfeed';
import PerformanceReport from './components/PerformanceReport/performanceReport';


function App() {
  return (
    <div className="App">
      <Router> {/* Wrap your components with Router */}
        <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/manage-newsfeeds" element={<NewsFeeds/>} />
          <Route path="/create-new-newsfeed" element={<CreateNewnewsfeed/>} />
          <Route path="/performance-reports" element={<PerformanceReport/>} />
          {/* Add more routes as needed */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;

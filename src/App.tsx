import Header from '@/components/Header';
import Main from '@/components/Main';
import Menu from '@/components/Menu';
import Properties from '@/components/Properties';
import './App.scss';

const App = () => {
  return (
    <div className="wrap">
      <Header />
      <div className="editor">
        <Menu />
        <Main />
        <Properties />
      </div>
    </div>
  );
};

export default App;

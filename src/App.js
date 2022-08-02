import LandingPage from './LandingPage.png';
import './App.css';

function App() {
  const handleCopyClipBoard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);        
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <div className="ImgWrapper">
      <img src={LandingPage}/>
      
      <button className="Button" onClick={() => handleCopyClipBoard('https://founder.vercel.app/')}>링크 복사하기</button>
      
      </div>
    </div>
  );
}

export default App;


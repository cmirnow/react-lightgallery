import GalleryComponent from "./components/GalleryComponent";
import Background from "./Background"
import Footer from "./Footer";
import "./App.css";

function App() {
  return (
    <div className="Gallery">
      <h1 className="font-face-ps">Children's Summer Camp 'Aurora'</h1>
        <GalleryComponent />
      <Footer />
      <Background />
    </div>
  );
}

export default App;

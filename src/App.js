import GalleryComponent from "./components/GalleryComponent";
import Background from "./components/Background";
import Footer from "./components/Footer";
import styles from "./styles/App.module.css";

function App() {
  return (
    <div className={styles.gallery}>
      <h1 className={styles.title}>Children's Summer Camp 'Aurora'</h1>
      <GalleryComponent />
      <Footer />
      <Background />
    </div>
  );
}

export default App;

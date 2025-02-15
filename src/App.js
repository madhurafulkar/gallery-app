import React, { useState } from 'react';
import { data } from './content/data';
import Header from './components/Header';
import Card from './components/Card';
import "./App.css";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [selectedContent, setSelectedContent] = useState(null);

  const openCard = (content) => {
    setSelectedContent(content);
    setShowModal(true);
  };

  const closeCard = () => {
    setShowModal(false);
  };

  return (
    <>
      {showModal && <Card content={selectedContent} onClose={closeCard} imageThumbnails={data} />} 
  
      <div style={styles.main}>
        <Header title="Photo Gallery" subtitle="A Photo Gallery App " />
        <div className="container" style={styles.container}>
          {data.map((image_data, index) => {
            return (
              <div
                className="imageContainer"
                style={styles.imageContainer}
                onClick={() => {
                  openCard(image_data);
                }}
                key={index}
              >
                <img style={styles.image} src={image_data.url} alt={image_data.name} />
                <div style={styles.imageDescription}>
                  <p style={styles.imageDescriptionText}>{image_data.name}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

const styles = {
  main: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: '#f0f0f0',
    margin: 'auto',
    flexDirection: 'column',
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center', 
    gap: '60px 80px', 
    maxWidth: '100%', 
    padding: '50px', 
  },
  imageContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    cursor: 'pointer',
    width: '300px', 
    height: '300px', 
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'top center', 
  },
  imageDescription: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    width: '100%',
    height: '50px',
    backgroundColor: '#000000',
  },
  imageContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    cursor: "pointer",
  },
  image: {
    width: "300px",
    height: "300px",
    objectFit: "cover",
  },
};

export default App;

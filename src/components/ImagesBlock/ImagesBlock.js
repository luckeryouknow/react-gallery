import styles from "./ImagesBlock.module.css";

export default function ImagesBlock ({ apiDataProp}) {
  let iterationCounter = -1;
  
  return (
    <div className={styles.ImagesBlock}>
      {apiDataProp.map(() => {
        iterationCounter += 1;

        return (
          <img 
            className={styles.Image}
            alt={apiDataProp[iterationCounter].alt_description} 
            key={iterationCounter} 
            src={apiDataProp[iterationCounter].urls.small} 
          />
        );
      })}
    </div>
  );
}
import photo from '../graphics/Gwen_Icon.jpg'

export default function Imagen(props){
    return(
        <img style={styles.reSize} src={photo} />
    );
}

const styles = {
    reSize: {
        width: 200,
        height: 500,
    },
};
export default function Texto(props){
    return(
        <p style={styles.colorText}>{props.p}</p>
    );
}

const styles = {
    colorText: {
        color: "turquoise",
        textAlign: "center",
        fontSize: 50,
        fontFamily: "cursive",
    },
};
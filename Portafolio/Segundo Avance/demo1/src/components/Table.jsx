export default function Tabla(props){
    return(
        <table>
            <thead>
                <th>{props.th1}</th>
                <th>{props.th2}</th>
                <th>{props.th3}</th>
            </thead>
            <tbody>
                <tr>
                    <td>Celda 1</td>
                    <td>Celda 2</td>
                    <td>Celda 3</td>
                </tr>
                <tr>
                    <td>Celda 4</td>
                    <td>Celda 5</td>
                    <td>Celda 6</td>
                </tr>
                <tr>
                    <td>Celda 7</td>
                    <td>Celda 8</td>
                    <td>Celda 9</td>
                </tr>
            </tbody>
        </table>
    );
}
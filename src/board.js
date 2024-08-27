import './board.css';
import { FaChessPawn } from "react-icons/fa6";
import { FaChessQueen } from "react-icons/fa6";
import { FaChessBishop } from "react-icons/fa";
import { FaChessKing } from "react-icons/fa";
import { FaChessKnight } from "react-icons/fa";
import { FaChessRook } from "react-icons/fa";

const Board=()=>{
    return(
    <div className="container">
        <table>
            <tbody>
                <tr>
                    <td><FaChessRook class="icon"/></td>
                    <td><FaChessKnight class="icon"/></td>
                    <td><FaChessBishop class="icon"/></td>
                    <td><FaChessQueen class="icon"/></td>
                    <td><FaChessKing class="icon"/></td>
                    <td><FaChessBishop class="icon"/></td>
                    <td><FaChessKnight class="icon"/></td>
                    <td><FaChessRook class="icon"/></td>
                </tr>
                <tr>
                    <td><FaChessPawn class="icon"/></td>
                    <td><FaChessPawn class="icon"/></td>
                    <td><FaChessPawn class="icon"/></td>
                    <td><FaChessPawn class="icon"/></td>
                    <td><FaChessPawn class="icon"/></td>
                    <td><FaChessPawn class="icon"/></td>
                    <td><FaChessPawn class="icon"/></td>
                    <td><FaChessPawn class="icon"/></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td><FaChessPawn class="icon" style={{color:"white"}}/></td>
                    <td><FaChessPawn class="icon" style={{color:"white"}}/></td>
                    <td><FaChessPawn class="icon" style={{color:"white"}}/></td>
                    <td><FaChessPawn class="icon" style={{color:"white"}}/></td>
                    <td><FaChessPawn class="icon" style={{color:"white"}}/></td>
                    <td><FaChessPawn class="icon" style={{color:"white"}}/></td>
                    <td><FaChessPawn class="icon" style={{color:"white"}}/></td>
                    <td><FaChessPawn class="icon" style={{color:"white"}}/></td>
                </tr>
                <tr>
                    <td><FaChessRook class="icon" style={{color:"white"}}/></td>
                    <td><FaChessKnight class="icon" style={{color:"white"}}/></td>
                    <td><FaChessBishop class="icon" style={{color:"white"}}/></td>
                    <td><FaChessKing class="icon" style={{color:"white"}}/></td>
                    <td><FaChessQueen class="icon" style={{color:"white"}}/></td>
                    <td><FaChessBishop class="icon" style={{color:"white"}}/></td>
                    <td><FaChessKnight class="icon" style={{color:"white"}}/></td>
                    <td><FaChessRook class="icon" style={{color:"white"}}/></td>
                </tr>
            </tbody>
        </table>
    </div>
    )
}

export default Board;
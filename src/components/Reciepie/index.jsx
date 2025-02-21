import "./index.css";
import { Link } from "react-router-dom";
export default function Reciepie() {
  return (
    <div className="h-screen flex justify-center items-center flex-col gap-5">
      <div className="receipt">
        <p className="shop-name">UI Market</p>
        <p className="info">
          1234 Market Street, Suite 101
          <br />
          City, State ZIP
          <br />
          Date: 12/27/2025
          <br />
          Time: 03:15 PM
        </p>

        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Qty</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Item 1</td>
              <td>2</td>
              <td>$20.00</td>
            </tr>
            <tr>
              <td>Item 2</td>
              <td>1</td>
              <td>$10.00</td>
            </tr>
            <tr>
              <td>Item 3</td>
              <td>3</td>
              <td>$15.00</td>
            </tr>
          </tbody>
        </table>

        <div className="total">
          <p>Total:</p>
          <p>$45.00</p>
        </div>

        <p className="thanks">Thank you for shopping with us!</p>
      </div>
      <Link to="/" className="w-full h-10 bg-green-900 text-center flex justify-center items-center rounded-2xl">
          Назад
      </Link>
    </div>
  );
}

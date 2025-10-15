import "./App.css";
import { PineconeLogo } from "./icons/PineconeLogo";

export function AllSet() {
  return (
    <div className="allSet">
      <div className="allSetdiv">
        <div>
          <PineconeLogo />
        </div>
        <div className="allSetText1 inter">You're All Set 🔥</div>
        <div className="allSetText2 inter">
          We have received your submission. Thank you!
        </div>
      </div>
    </div>
  );
}


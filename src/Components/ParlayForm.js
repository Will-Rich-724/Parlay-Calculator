import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

const ParlayForm = (props) => {
    const [betAmount, setBetAmount] = useState("0");
    const [firstOdds, setFirstOdds] = useState("");
    const [secondOdds, setSecondOdds] = useState("");
    const [thirdOdds, setThirdOdds] = useState("");
    const [fourthOdds, setFourthOdds] = useState("");
    const [fifthOdds, setFifthOdds] = useState("");
    const [payout, setPayout] = useState("0");

    const calculate = () => {
        if (firstOdds >= 0) {
            var decimalone = (betone/100)+1;
        }else{
            var decimalone = (100/Math.abs(betone))+1;
        }

        if (secondOdds >= 0) {
            var decimaltwo = (bettwo/100)+1;
        }else if (secondOdds < 0) {
            var decimaltwo = (100/Math.abs(bettwo))+1;
        }

        if (thirdOdds >= 0) {
            var decimalthree = (betthree/100)+1;
        }else if (thirdOdds < 0) {
            var decimalthree = (100/Math.abs(betthree))+1;
        }

        if (fourthOdds >= 0) {
            var decimalfour = (betfour/100)+1;
        }else if (fourthOdds < 0) {
            var decimalfour = (100/Math.abs(betfour))+1;
        }

        if (fifthOdds >= 0) {
            var decimalfive = (betfive/100)+1;
        }else if (fifthOdds < 0) {
            var decimalfive = (100/Math.abs(betfive))+1;
        }
        
        const decimaltotal = decimalone * decimaltwo * decimalthree * decimalfour * decimalfive;

        setPayout(decimaltotal * betAmount);


    };

    return(
        <div>
            <Form>
                <Form.group>
                    <Form.Label>Bet Amount: $</Form.Label>
                    <Form.Control type="number" value="0" onChange={e => setBetAmount(e.target.value)} />
                </Form.group>
                <Form.group>
                    <Form.Label>Bet 1 Odds: </Form.Label>
                    <Form.Control type="number" value="0" step="10" onChange={e => setFirstOdds(e.target.value)} />
                </Form.group>
                <Form.group>
                    <Form.Label>Bet 2 Odds: </Form.Label>
                    <Form.Control type="number" value="0" step="10" onChange={e => setSecondOdds(e.target.value)} />
                </Form.group>
                <Form.group>
                    <Form.Label>Bet 3 Odds: </Form.Label>
                    <Form.Control type="number" value="0" step="10" onChange={e => setThirdOdds(e.target.value)} />
                </Form.group>
                <Form.group>
                    <Form.Label>Bet 4 Odds: </Form.Label>
                    <Form.Control type="number" value="0" step="10" onChange={e => setFourthOdds(e.target.value)} />
                </Form.group>
                <Form.group>
                    <Form.Label>Bet 5 Odds: </Form.Label>
                    <Form.Control type="number" value="0" step="10" onChange={e => setFifthOdds(e.target.value)} />
                </Form.group>
            </Form>
            <h3>Parlay Payout: {payout ? `$${payout}` : null} </h3>
            <Button onClick={e => calculate()}>Calculate Payout</Button>
        </div>
    )
};

export default ParlayForm;
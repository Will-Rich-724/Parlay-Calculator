import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ParlayForm = (props) => {
    const [betAmount, setBetAmount] = useState("0");
    const [firstOdds, setFirstOdds] = useState("");
    const [secondOdds, setSecondOdds] = useState("");
    const [thirdOdds, setThirdOdds] = useState("");
    const [fourthOdds, setFourthOdds] = useState("");
    const [fifthOdds, setFifthOdds] = useState("");
    const [payout, setPayout] = useState("0");

    const calculate = () => {
        var decimalone
        var decimaltwo
        var decimalthree
        var decimalfour
        var decimalfive

        if (firstOdds >= 0) {
            decimalone = (firstOdds / 100) + 1;
        } else {
            decimalone = (100 / Math.abs(firstOdds)) + 1;
        }

        if (secondOdds >= 0) {
            decimaltwo = (secondOdds / 100) + 1;
        } else if (secondOdds < 0) {
            decimaltwo = (100 / Math.abs(secondOdds)) + 1;
        }

        if (thirdOdds >= 0) {
            decimalthree = (thirdOdds / 100) + 1;
        } else if (thirdOdds < 0) {
            decimalthree = (100 / Math.abs(thirdOdds)) + 1;
        }

        if (fourthOdds >= 0) {
            decimalfour = (fourthOdds / 100) + 1;
        } else if (fourthOdds < 0) {
            decimalfour = (100 / Math.abs(fourthOdds)) + 1;
        }

        if (fifthOdds >= 0) {
            decimalfive = (fifthOdds / 100) + 1;
        } else if (fifthOdds < 0) {
            decimalfive = (100 / Math.abs(fifthOdds)) + 1;
        }

        const decimaltotal = decimalone * decimaltwo * decimalthree * decimalfour * decimalfive;
        var finalPayout = decimaltotal * betAmount
        setPayout(finalPayout.toFixed(2));
    };

    return (
        <div className="main">
            <Form>
                <Form.Group as={Row}>
                    <Form.Label column sm="4">Bet Amount:</Form.Label>
                    <Col sm="7">
                        <Form.Control type="number" onChange={e => setBetAmount(e.target.value)} />
                    </Col>
                </Form.Group>
                <Form.Group as={Row}>
                    <Form.Label column sm="4">Bet 1 Odds: </Form.Label>
                    <Col sm="7">
                        <Form.Control type="number" step="10" onChange={e => setFirstOdds(e.target.value)} />
                    </Col>
                </Form.Group>
                <Form.Group as={Row}>
                    <Form.Label column sm="4">Bet 2 Odds: </Form.Label>
                    <Col sm="7">
                        <Form.Control type="number" step="10" onChange={e => setSecondOdds(e.target.value)} />
                    </Col>
                </Form.Group>
                <Form.Group as={Row}>
                    <Form.Label column sm="4">Bet 3 Odds: </Form.Label>
                    <Col sm="7">
                        <Form.Control type="number" step="10" onChange={e => setThirdOdds(e.target.value)} />
                    </Col>
                </Form.Group>
                <Form.Group as={Row}>
                    <Form.Label column sm="4">Bet 4 Odds: </Form.Label>
                    <Col sm="7">
                        <Form.Control type="number" step="10" onChange={e => setFourthOdds(e.target.value)} />
                    </Col>
                </Form.Group>
                <Form.Group as={Row}>
                    <Form.Label column sm="4">Bet 5 Odds: </Form.Label>
                    <Col sm="7">
                        <Form.Control type="number" step="10" onChange={e => setFifthOdds(e.target.value)} />
                    </Col>
                </Form.Group>
            </Form>
            <Button variant="primary" onClick={e => calculate()}>Calculate Payout</Button>
            <h3>Parlay Payout: {payout ? `$${payout}` : null} </h3>
            
        </div>
    )
};

export default ParlayForm;
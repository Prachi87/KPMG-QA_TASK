import React from 'react';
import { Layout } from '../shared/layout';

export const RandomSquare = () => {
    return (
        <Layout pageId="randomSquare">
            <p>
                TODO: Calculate random square (i.e. rand(0, n)^2), where random number is between 0 and n.
            </p>
            <p>
                User inputs a number (n) in a textbox, then clicks a button to calculate Fib(n) via a corresponding API call.
                Then the correct result is displayed on the page.
            </p>
            <label> 
                Number 
            </label>
            <span style={{paddingLeft: '10px'}}></span>
            <input type="text" name="number"/>
            <span style={{paddingLeft: '10px'}}></span>
            <button type="submit">
                Calculate
            </button>
            <br /><br></br>
            <span style={{paddingLeft: '10px'}}></span>
            <label> 
                Result 
            </label>
            <span style={{paddingTop: '150px'}}></span>
            <input id="text34" type="text" disabled></input> 
        </Layout>
    );
};
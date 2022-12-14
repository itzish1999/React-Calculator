//Parent Component
import React from 'react';
import CalculatorTitle from './calculatorTitle';
import OutputScreen from './outputScreen';
import Button from './button';


class Calculator extends React.Component {

    constructor() {
        super();
    
        //setting default state
        this.state = {
            question: "",
            answer: ""
        }
    
        //Bind our handleClick method (set 'this' to refer to this component)
        //'this' refers to the source of click events
        this.handleClick = this.handleClick.bind(this);
    }


    render()
    {
        return(
        <div className="frame">
            <CalculatorTitle value="Calculator"/>
            <div class="mainCalc">
                <OutputScreen answer = {this.state.answer} question = {this.state.question}/>
                <div className="button-row">
                    <Button label={"Clear"} handleClick = {this.handleClick}/>
                    <Button label={"Delete"} handleClick = {this.handleClick}/>
                    <Button label={"."} handleClick = {this.handleClick}/>
                    <Button label={"/"} handleClick = {this.handleClick}/>
                </div>
                <div className="button-row">
                    <Button label={"7"} handleClick = {this.handleClick}/>
                    <Button label={"8"} handleClick = {this.handleClick}/>
                    <Button label={"9"} handleClick = {this.handleClick}/>
                    <Button label={"*"} handleClick = {this.handleClick}/>
                </div>
                <div className="button-row">
                    <Button label={"4"} handleClick = {this.handleClick}/>
                    <Button label={"5"} handleClick = {this.handleClick}/>
                    <Button label={"6"} handleClick = {this.handleClick}/>
                    <Button label={"-"} handleClick = {this.handleClick}/>
                </div>
                <div className="button-row">
                    <Button label={"1"} handleClick = {this.handleClick}/>
                    <Button label={"2"} handleClick = {this.handleClick}/>
                    <Button label={"3"} handleClick = {this.handleClick}/>
                    <Button label={"+"} handleClick = {this.handleClick}/>
                </div>
                <div className="button-row">
                    <Button label={"0"} handleClick = {this.handleClick}/>
                    <Button label={"="} handleClick = {this.handleClick}/>
                </div>
            </div>
        </div>
        );
    }
    // Method will handle clicks of the button
    handleClick(event) {
        // Get value from target element button
        const value = event.target.value;

        switch (value) {
            case "=": {
                // If it is an =, use the eval module to evaluate the question,
                // convert the answer (in nums) to string
                if(this.state.question!=="")
                {
                    var ans="";
                    try
                    {
                        ans = eval(this.state.question);
                    }
                    catch(err)
                    {
                        this.setState({answer: "Math Error"});
                    }
                    if (ans === undefined)
                        this.setState({answer: "Math Error"});

                        // Update the answer in our input
                        else
                            this.setState({ answer: ans , question: ""});
                        break;
                }
            }
            case "Clear": {
                // If it is clear just remove the question and answer in the state
                this.setState({ question: "", answer: "" });
                break;
            }
            case "Delete": {
                var str = this.state.question;
                str = str.substr(0,str.length-1);
                this.setState({question: str});
                break;
            }

            default: {
                // This is for every cmd, update the answer in its state
                this.setState({ question: this.state.question += value});
                break;
            }
        }
    }
}


export default Calculator;
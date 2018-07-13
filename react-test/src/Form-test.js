import React, {Component} from 'react'

class FormTest extends Component{
    constructor(props){
        super(props)
        this.state = {value: '', areaValue: '', selectValue: 'Apple', radioValue: true, numberValue: 18, birthValue: 'Liaoning'}
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        // this.handleAreaChange = this.handleAreaChange.bind(this)
        // this.handleSelectChange = this.handleSelectChange.bind(this)
    }

    handleSubmit(event){
        alert(`your name is ${this.state.value}, and the description is ${this.state.areaValue}
        your favorite fruit is ${this.state.selectValue}
        `)
        event.preventDefault()
    }

    handleChange(event){
        const target = event.target
        const value = target.type === 'radio' ? target.checked :target.value
        const id = target.id
        this.setState({[id]: value})
    }

    // handleAreaChange(event){
    //     this.setState({areaValue: event.target.value})
    // }

    // handleSelectChange(event){
    //     this.setState({selectValue: event.target.value})
    // }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>
                        Name:
                        <input type='text' value={this.state.value} id='value' onChange={this.handleChange} />
                    </label>
                </div>
                <div>
                    <label>
                        Gender:
                        <input id='male' type='radio' name='radioValue' value='male' checked={this.state.radioValue} onChange={this.handleChange} />Male
                        <input id='female' type='radio' name='radioValue' value='female' checked={this.state.radioValue} onChange={this.handleChange} />Female
                    </label>
                </div>
                <div>
                    <label>
                        Favorite fruit
                        <select id='selectValue' multiple={true} name='selectValue' value={[this.state.selectValue, 'Apple']} onChange={this.handleChange}>
                            <option value='Apple'>Apple</option>
                            <option value='Pineapple'>Pineapple</option>
                            <option value='Peach'>Peach</option>
                            <option value='Pear'>Pear</option>
                        </select>
                    </label>
                </div>
                <div>
                    <label>
                        Age:
                        <input id='numberValue' type='number' name='numberValue' value={[this.state.numberValue]} onChange={this.handleChange} />
                    </label>
                </div>
                <div>
                    <label>
                        Description：
                        <textarea id='areaValue' value={this.state.areaValue} name='areaValue' onChange={this.handleChange} />
                    </label>
                </div>
                <div>
                    <fieldset>
                        <legend>Input your birth place:</legend>
                        <input type='text' value={this.state.birthValue} name='birthValue' id='birthValue' onChange={this.handleChange} />
                        <BirthPlace name={this.state.birthValue} />
                    </fieldset>
                </div>
                <div>
                    <TempCalcu scale='c' />
                    <TempCalcu scale='f' />
                </div>
                <input type='submit' value='submit' />
            </form>
        )
    }
}

function BirthPlace(props) {
    if(props.name === 'Liaoning'){
        return <p>Welcome home place</p>
    }else{
        return <p>Welcome also</p>
    }   
}

function toCelsius(fahrenheit){
    return (fahrenheit-32)*5/9
}

function toFahrenheit(celsius){
    return (celsius*9/5)+32
}

class TempCalcu extends React.Component{
    constructor(props){
        super(props)
        this.state = {temp: ''}
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(e){
        this.setState({temp: e.target.value})
        alert(this.state.temp)
    }
    render(){
        let scaleName = {
            c: 'Celsius',
            f: 'Fahrenheit'
        }
        const scale = this.props.scale
        return (
            <fieldset>
                <legend>Enter Temp in {scaleName[scale]}:</legend>
                <input value={this.state.temp} onChange={this.handleChange}/>
            </fieldset>
        )
    }
}

export default FormTest;
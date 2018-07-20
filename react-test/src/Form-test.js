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
                    <BorderColor color='aquamarine'>
                        <TempCalcu scale='c' />
                    </BorderColor>
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

function BorderColor(props){
    return (
        <div className={'BorderColor BorderColor-' + props.color } >
            {props.children}
        </div>
    )
}

function toCelsius(fahrenheit){
    return (fahrenheit-32)*5/9
}

function toFahrenheit(celsius){
    return (celsius*9/5)+32
}

function tryConver(temperature, convert){
    const input = parseFloat(temperature)
    if (Number.isNaN(input)){
        return ''
    }
    const output = convert(input)
    const rounded = Math.round(output * 1000) / 1000
    return rounded.toString()
}

class TempInput extends Component{
    constructor(props){
        super(props)
        // this.state = {temp: ''}
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        // this.setState({temp: event.target.value})
        this.props.onTempChange(event.target.value)
    }

    render(){
        let scaleName = {
            c: 'Celsius',
            f: 'Fahrenheit'
        }
        const temperature = this.props.temperature
        const scale = this.props.scale
        return(
            <fieldset>
                <legend>Enter Temp in {scaleName[scale]}:</legend>
                <input value={temperature} onChange={this.handleChange}/>
            </fieldset>
        )
    }
}

class TempCalcu extends React.Component{
    constructor(props){
        super(props)
        this.state = {temperature: '', scale: 'c'}
        this.handleCChange = this.handleCChange.bind(this)
        this.handleFChange = this.handleFChange.bind(this)
    }
    handleCChange(temperature){
        this.setState({scale: 'c', temperature: temperature})
    }
    handleFChange(temperature){
        this.setState({scale: 'f', temperature: temperature})
    }
    render(){
        const scale = this.state.scale
        const temperature = this.state.temperature
        const celsius = scale === 'c' ? temperature : tryConver(temperature, toCelsius)
        const fahrenheit = scale === 'f' ? temperature : tryConver(temperature, toFahrenheit)

        return (
            <div>
                <TempInput scale='c' temperature={celsius} onTempChange={this.handleCChange} />
                <TempInput scale='f' temperature={fahrenheit} onTempChange={this.handleFChange} />
            </div>
        )
    }
}

export default FormTest;
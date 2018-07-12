import React, {Component} from 'react'

class FormTest extends Component{
    constructor(props){
        super(props)
        this.state = {value: '', areaValue: '', selectValue: 'Apple'}
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleAreaChange = this.handleAreaChange.bind(this)
        this.handleSelectChange = this.handleSelectChange.bind(this)
    }

    handleSubmit(event){
        alert(`your name is ${this.state.value}, and the description is ${this.state.areaValue}
        your favorite fruit is ${this.state.selectValue}
        `)
        event.preventDefault()
    }

    handleChange(event){
        this.setState({value: event.target.value.toUpperCase()})
    }

    handleAreaChange(event){
        this.setState({areaValue: event.target.value})
    }

    handleSelectChange(event){
        this.setState({selectValue: event.target.value})
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>
                        Name:
                        <input type='text' value={this.state.value} onChange={this.handleChange} />
                    </label>
                </div>
                <div>
                    <label>
                        Favorite fruit
                        <select multiple={true} value={[this.state.selectValue, 'Apple']} onChange={this.handleSelectChange}>
                            <option value='Apple'>Apple</option>
                            <option value='Pineapple'>Pineapple</option>
                            <option value='Peach'>Peach</option>
                            <option value='Pear'>Pear</option>
                        </select>
                    </label>
                </div>
                <div>
                    <label>
                        Description：
                        <textarea value={this.state.areaValue} onChange={this.handleAreaChange} />
                    </label>
                </div>
                <input type='submit' value='submit' />
            </form>
        )
    }
}

export default FormTest;
import React from 'react'
import styled from 'styled-components'

const Bar = styled.input`
    width: 100%;
    height: 4vh;
    box-sizing: border-box;
    font-size: 16px;

    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;

    /* Then Style */
    border-radius: 2px;
    border: 1px solid #BBB;
    line-height: 20px;
    outline: none;    
`;

const Top = styled.div`
    position: sticky;
    top: 0;
    height: 6vh;
    padding-top: 1vh;
    box-sizing: border-box;
    background: white;
`;

class Searchbar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            search: '',
        }
    }

    handleChange(event) {
        this.setState({ search: event.target.value });
    }

    handleSubmit(event) {
        console.log('Submitted');
    }

    render() {
        return (
            <Top>
                <Bar type="text" value={this.state.search} onChange={event => this.handleChange(event)} />
            </Top>
        );
    }
}

export default Searchbar;
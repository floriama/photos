import React from 'react'
import Images from './Images'
import Searchbar from './Searchbar'
import media from './media'
import styled from 'styled-components'

const Container = styled.div`
   ${media.mobile`
      margin: 4%;
   `}
   ${media.web`
      margin: 0% 35%;
   `}
`


function App() {
    return (
        <Container className="App">
            <Searchbar />
            <Images />
        </Container>
    );
}

export default App;

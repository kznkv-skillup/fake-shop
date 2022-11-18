import CssBaseline from "@mui/material/CssBaseline"
import Header from "container/Header/Header"
import Main from "../Main/Main"
import Footer from "../Footer/Footer"
import { StyledEngineProvider } from "@mui/material"

const App = () => {
    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header />
            <Main />
            <Footer />
        </StyledEngineProvider>
    )
}

export default App

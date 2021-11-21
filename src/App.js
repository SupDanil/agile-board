import useStore from "./hooks/useStore";
import {observer} from "mobx-react-lite"
import DashBoard from "./components/DashBoard";
import Header from "./components/Header"

function App() {
    return (
        <>
            <Header/>
            <main>
                <DashBoard/>
            </main>
        </>
    );
}

export default observer(App);

import { Component } from "react";
import HeaderComp from "./HeaderComponent";

class ParentComponent extends Component
{
    constructor ()
    {
        super()
        this.state = {
            welcomeMessage:"Hello 10K Coders .. Welcome to React JS Training Sessions",
            employee: {
                fname:"srirama"
            }
        }
    }
    render ()
    {
        return <div>
            <h1>Jai SriRam</h1>
            <HeaderComp {...this.state} />
        </div>
    }
}
export default ParentComponent
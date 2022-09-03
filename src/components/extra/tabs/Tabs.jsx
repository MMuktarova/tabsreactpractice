import {Component} from 'react'
    import {tabs} from './data'
    class Tabs extends Component{
        constructor(){
            super()
            this.state ={
                tabs:tabs,
                selected:0
            }
        }
        changeTab = (index) =>{
            const copyState = {...this.state}
            copyState.selected = index
            this.setState({...copyState})
            //this.setState({...this.state,selected:index})
        }
        render(){
            const {tabs,selected} = this.state

            return(
                <>
                <h1>Tabs</h1>
                {
                    tabs.map((tab,index)=>{
                        return(
                            <button 
                            key={tab.id}
                            onClick={()=> this.changeTab(index)}
                            >{tab.title}</button>
                        )
                    })
                }
                
                <div>
                    <h3>
                        {this.state.tabs[selected].title}
                    </h3>
                    {this.state.tabs[selected].description}
                </div>
                </>
            )
        }
    }

    export default Tabs
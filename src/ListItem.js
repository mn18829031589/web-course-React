import React, {Component} from 'react';
import './ListItem.css';

class ListItem extends Component{
    constructor(props){
        super(props)
    }

    onUpdateDone = (event) => {
        const listitem = this.props.item;
        listitem.done = ! listitem.done;

        this.setState({
            done : listitem.done
        })
    }

    onUpdateChange = () =>{
        this.setState({
            done: this.props.item.done
        })
    }

   // onDelBtnclick = (event) => {
    //    const listitem = this.props.item;
    //    listitem.content = '';

    //    this.setState({
     //       content : ''
     //   })
    //}

    render(){
        const item = this.props.item;

        if (item.done){
            return (
            <div>
              <p className="done-item">  
                  <input type="checkbox"   checked={item.done}  onChange={this.onUpdateChange}/>
                  {item.content}
              </p>
             
            </div>
            );
        }
        else{
            return (
                <div>
                  <p className="item">  
                    <input type="checkbox" onClick={this.onUpdateDone}  checked={item.done} onChange={this.onUpdateChange}/> 
                    {item.content}
                  </p>
                </div>
            );
        }
    }
}

export default ListItem;
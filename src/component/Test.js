
import React, { Component } from 'react';
import {MenuItem,ContextMenu,ContextMenuTrigger} from 'react-contextmenu';

const MENU_TYPE = 'SIMPLE';

export default class Test extends Component {
    constructor(props) {
        super(props);

        this.state = { logs: [] };
    }

    handleClick = (e, data) => {
        this.setState(({ logs }) => ({
            logs: [`Clicked on menu ${data.item}`, ...logs]
        }));
    }

    render() {
        return (
            <div>
                <h3>Simple Menu</h3>
                <p>This demo simple usage of a context menu.</p>
                <ContextMenuTrigger id={MENU_TYPE} holdToDisplay={1000}>
                    <div className='well'><button onClick = {() =>{alert("testts")}}>test</button></div>
                </ContextMenuTrigger>
                <div>
                    {this.state.logs.map((log, i) => <p key={i}>{log}</p>)}
                </div>
                <ContextMenu id={MENU_TYPE}>
                    <MenuItem onClick={this.handleClick} data={{ item: 'item 1' }}>Menu Item 1</MenuItem>
                    <MenuItem onClick={this.handleClick} data={{ item: 'item 2' }}>Menu Item 2</MenuItem>
                    <MenuItem divider />
                    <MenuItem onClick={this.handleClick} data={{ item: 'item 3' }}>Menu Item 3</MenuItem>
                </ContextMenu>
            </div>
        );
    }
}


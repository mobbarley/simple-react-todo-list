import React from 'react';
import css from './css/add-item.css';

class AddItem extends React.Component {
    // Handle events
    onSubmit(evt) {
        evt.preventDefault();
        this.props.onAdd(this.refs.newItem.value);
        this.refs.newItem.value = '';
    }
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <form id="add-item" onSubmit={this.onSubmit}>
                <input type="text" required ref="newItem" />
                <input type="submit" value="Add Task" />
            </form>
        );
    }
}

export default AddItem;

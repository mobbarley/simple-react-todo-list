import React from 'react';
import css from './css/add-item.css';

class AddItem extends React.Component {
    constructor(props) {
        super(props);
        // Handle events
        this.onSubmit = (evt) => {
            evt.preventDefault();
            this.props.onAdd(this.refs.newItem.value);
            this.refs.newItem.value = '';
        };
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

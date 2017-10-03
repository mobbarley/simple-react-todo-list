import React from 'react';
import FaTrash from 'react-icons/lib/fa/trash';
import css from './css/list-item.css';

class ListItem extends React.Component {
    constructor(props) {
        super(props);
    }
    // Handle Event
    deleteItem() {
        this.props.onDelete(this.props.item);
    }
    render() {
        return(
            <li>
                <div className="todo-item">
                    <span className="item-name">{this.props.item}</span>
                    <span className="item-delete" onClick={this.deleteItem}><FaTrash /></span>
                </div>
            </li>
        );
    }
}

export default ListItem;

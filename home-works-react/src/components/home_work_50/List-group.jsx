import React from "react";

class ListGroup extends React.Component {
    render() {
        const { children } = this.props;
        return (
            <ul className="list-group">
                {React.Children.map(children, (child) => {
                    return <li className="list-group-item">{child}</li>;
                })}
            </ul>
        );
    }
}

export default ListGroup;
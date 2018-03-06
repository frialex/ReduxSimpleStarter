import React, { Component } from 'react'
import { connect } from 'react-redux'


class BookDetail extends Component {

    render() {
        return (
            <div>
                <h3> Details for: </h3>
                <div> {this.props.books.title} </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    debugger;
    return {
        book: state.activeBook
    };
}

export default connect(mapStateToProps)(BookDetail);
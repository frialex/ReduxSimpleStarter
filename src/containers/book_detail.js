import React, { Component } from 'react'
import { connect } from 'react-redux'


class BookDetail extends Component {

    render() {
        if(!this.props.book){
            return <div>select a book </div>
        } 

        return (
            <div>
                <h3> Details for: </h3>
                <div> {this.props.book.title} </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    console.log("book_detail-> mapStateToProps : " + state.activeBook)
    return {
        book: state.activeBook
    };
}

export default connect(mapStateToProps)(BookDetail);
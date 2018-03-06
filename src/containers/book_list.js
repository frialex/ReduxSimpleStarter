import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectBook } from '../actions/index'
import { bindActionCreators } from 'redux'

class BookList extends Component {
    renderList(){
        return this.props.books.map((book) => {
             return (
                <li key={book.title} 
                    className="list-group-item"
                    onClick={()=> this.props.selectBook(book)}>
                    {book.title}
                </li>
             );
        });
    }

    render(){
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        );
    }
}


//glue between react and redux
function mapStateToProps(state){
    return {
        books: state.books
    };
}

//anything returned from this function will endup as props
//on the BookList container.
function mapDispatchToProps(dispatch){
    return bindActionCreators({ selectBook: selectBook}, dispatch);
}

//wire up react with redux
export default connect(mapStateToProps, mapDispatchToProps)(BookList)
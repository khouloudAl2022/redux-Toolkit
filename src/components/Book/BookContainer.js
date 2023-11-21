import React, { Fragment } from "react";
import BookInfo from "./BookInfo";
import BooksList from "./BooksList";
import { useDispatch } from "react-redux";
import { getBooks } from "../../store/bookSlice";

import "./book.css";

const PostContainer = () => {
  return (
    <Fragment>
      <hr className="my-5" />
      <div className="row">
        <div className="col">
          <BooksList />
        </div>
        <div className="col side-line">
          <BookInfo />
        </div>
      </div>
    </Fragment>
  );
};

export default PostContainer;

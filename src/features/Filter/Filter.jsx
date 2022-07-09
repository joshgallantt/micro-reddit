import React from "react";
import "./Filter.css";
import { useSelector, useDispatch } from "react-redux";
import { changeFilter } from "./filterSlice";

function Filter() {
  const filter = useSelector((state) => state.filterSelection.filter);
  const dispatch = useDispatch();

  return (
    <div className="filters">
      <div
        className={
          filter === "hot" ? "filters--entry blue" : "filters--entry black"
        }
        onClick={() => dispatch(changeFilter("hot"))}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path d="M323.5 51.25C302.8 70.5 284 90.75 267.4 111.1C240.1 73.62 206.2 35.5 168 0C69.75 91.12 0 210 0 281.6C0 408.9 100.2 512 224 512s224-103.1 224-230.4C448 228.4 396 118.5 323.5 51.25zM304.1 391.9C282.4 407 255.8 416 226.9 416c-72.13 0-130.9-47.73-130.9-125.2c0-38.63 24.24-72.64 72.74-130.8c7 8 98.88 125.4 98.88 125.4l58.63-66.88c4.125 6.75 7.867 13.52 11.24 19.9C364.9 290.6 353.4 357.4 304.1 391.9z" />
        </svg>
        <h4>Hot</h4>
      </div>
      <div
        className={
          filter === "new" ? "filters--entry blue" : "filters--entry black"
        }
        onClick={() => dispatch(changeFilter("new"))}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M480 32H128C110.3 32 96 46.33 96 64v336C96 408.8 88.84 416 80 416S64 408.8 64 400V96H32C14.33 96 0 110.3 0 128v288c0 35.35 28.65 64 64 64h384c35.35 0 64-28.65 64-64V64C512 46.33 497.7 32 480 32zM272 416h-96C167.2 416 160 408.8 160 400C160 391.2 167.2 384 176 384h96c8.836 0 16 7.162 16 16C288 408.8 280.8 416 272 416zM272 320h-96C167.2 320 160 312.8 160 304C160 295.2 167.2 288 176 288h96C280.8 288 288 295.2 288 304C288 312.8 280.8 320 272 320zM432 416h-96c-8.836 0-16-7.164-16-16c0-8.838 7.164-16 16-16h96c8.836 0 16 7.162 16 16C448 408.8 440.8 416 432 416zM432 320h-96C327.2 320 320 312.8 320 304C320 295.2 327.2 288 336 288h96C440.8 288 448 295.2 448 304C448 312.8 440.8 320 432 320zM448 208C448 216.8 440.8 224 432 224h-256C167.2 224 160 216.8 160 208v-96C160 103.2 167.2 96 176 96h256C440.8 96 448 103.2 448 112V208z" />
        </svg>
        <h4>New</h4>
      </div>
      <div
        className={
          filter === "rising" ? "filters--entry blue" : "filters--entry black"
        }
        onClick={() => dispatch(changeFilter("rising"))}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
          <path d="M384 160C366.3 160 352 145.7 352 128C352 110.3 366.3 96 384 96H544C561.7 96 576 110.3 576 128V288C576 305.7 561.7 320 544 320C526.3 320 512 305.7 512 288V205.3L342.6 374.6C330.1 387.1 309.9 387.1 297.4 374.6L191.1 269.3L54.63 406.6C42.13 419.1 21.87 419.1 9.372 406.6C-3.124 394.1-3.124 373.9 9.372 361.4L169.4 201.4C181.9 188.9 202.1 188.9 214.6 201.4L320 306.7L466.7 159.1L384 160z" />
        </svg>
        <h4>Rising</h4>
      </div>
      <div
        className={
          filter === "top" ? "filters--entry blue" : "filters--entry black"
        }
        onClick={() => dispatch(changeFilter("top"))}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path d="M160 80C160 53.49 181.5 32 208 32H240C266.5 32 288 53.49 288 80V432C288 458.5 266.5 480 240 480H208C181.5 480 160 458.5 160 432V80zM0 272C0 245.5 21.49 224 48 224H80C106.5 224 128 245.5 128 272V432C128 458.5 106.5 480 80 480H48C21.49 480 0 458.5 0 432V272zM400 96C426.5 96 448 117.5 448 144V432C448 458.5 426.5 480 400 480H368C341.5 480 320 458.5 320 432V144C320 117.5 341.5 96 368 96H400z" />
        </svg>
        <h4>Top</h4>
      </div>
    </div>
  );
}

export default Filter;

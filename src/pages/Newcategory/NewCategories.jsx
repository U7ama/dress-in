import React, { useState } from "react";

const NewCategories = () => {
  const [buttonText, setbuttonText] = useState("Matts");
  const [buttonImg, setbuttonImg] = useState("/images/Asset 26.png");
  const [rotate, setRotate] = useState("");
  return (
    <>
      <h1 className="text-center my-5 text-lg">Shop the Job</h1>
      <div className="mx-auto my-auto p-[15px] w-[24rem] h-[24rem] rounded-full bg-gray-900 border-solid border-[15px] border-pink-900">
        <div className="ml-[40px] grid grid-cols-6 gap-4">
          <div className="col-start-3 col-span-1">
            <button
              onMouseMove={() => {
                setbuttonText("Matts");
                setbuttonImg("/images/Asset 26.png");
                setRotate("rotate-[0deg]");
              }}
              onClick={() => {
                History.push("/products/Matts");
                window.location.reload(false);
              }}
            >
              <img src="/images/Asset 26.png" alt="products" />
            </button>
          </div>
          <div className="col-start-1 col-end-2">
            <button
              onMouseMove={() => {
                setbuttonText("Find");
                setbuttonImg("/images/Asset 27.png");
                setRotate("rotate-[310deg]");
              }}
              onClick={() => {
                History.push("/products/Find");
                window.location.reload(false);
              }}
            >
              <img src="/images/Asset 27.png" alt="products" />
            </button>
          </div>
          <div className="col-end-6 col-span-1">
            <button
              onMouseMove={() => {
                setbuttonText("Walls");
                setbuttonImg("/images/Asset 25.png");
                setRotate("rotate-[50deg]");
              }}
              onClick={() => {
                History.push("/products/Walls");
                window.location.reload(false);
              }}
            >
              <img src="/images/Asset 25.png" alt="products" />
            </button>
          </div>
          <div className="col-start-1 col-end-2 ml-[-45px] mt-[25px]">
            <button
              onMouseMove={() => {
                setbuttonText("Thanks");
                setbuttonImg("/images/Asset 22.png");
                setRotate("rotate-[270deg]");
              }}
              onClick={() => {
                History.push("/products/Thanks");
                window.location.reload(false);
              }}
            >
              <img
                className="w-[30px] h-[50px]"
                src="/images/Asset 22.png"
                alt="products"
              />
            </button>
          </div>
          <div className="z-10 ml-[50px] mt-[20px]">
            <button
              className=""
              onClick={() => {
                History.push(`/products/${buttonText}`);
                window.location.reload(false);
              }}
            >
              <img className="h-[50px]" src={buttonImg} alt="products" />
              <span>{buttonText}</span>
            </button>
          </div>
          <div
            className={`z-0 col-start-3 mt-[-5px] ml-[-38px] bg-white  w-[120px] h-[120px] rounded-full col-span-1 ${rotate}`}
          >
            <div className="mt-[-50px] ml-[60px] h-[50px] border-solid border-l-[1px] border-pink-900"></div>
          </div>
          <div className="col-end-7  col-span-1  mt-[25px]">
            <button
              onMouseMove={() => {
                setbuttonText("Bath");
                setbuttonImg("/images/Asset 23.png");
                setRotate("rotate-[85deg]");
              }}
              onClick={() => {
                History.push("/products/Bath");
                window.location.reload(false);
              }}
            >
              <img src="/images/Asset 23.png" alt="products" />
            </button>
          </div>
          <div className="col-start-1 col-end-2">
            <button
              onMouseMove={() => {
                setbuttonText("Insect");
                setbuttonImg("/images/Asset 29.png");
                setRotate("rotate-[227deg]");
              }}
              onClick={() => {
                History.push("/products/Insect");
                window.location.reload(false);
              }}
            >
              <img src="/images/Asset 29.png" alt="products" />
            </button>
          </div>
          <div className="col-end-6 col-span-1">
            <button
              onMouseMove={() => {
                setbuttonText("Decore");
                setbuttonImg("/images/Asset 19.png");
                setRotate("rotate-[135deg]");
              }}
              onClick={() => {
                History.push("/products/Decore");
                window.location.reload(false);
              }}
            >
              <img src="/images/Asset 19.png" alt="products" />
            </button>
          </div>
          <div className="col-start-3 col-span-1">
            <button
              onMouseMove={() => {
                setbuttonText("Hunt");
                setbuttonImg("/images/Asset 28.png");
                setRotate("rotate-[180deg]");
              }}
              onClick={() => {
                History.push("/products/Hunt");
                window.location.reload(false);
              }}
            >
              <img src="/images/Asset 28.png" alt="products" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default NewCategories;

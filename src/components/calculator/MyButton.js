import React from "react";
import "./MyCalculator.css"; // 引入計算機的 CSS 樣式檔

function MyButton(props) {
    // handelClick 函式處理按鈕點擊事件
    const handelClick = (e) => {
        props.buttonClicked(e.target.value); // 將按鈕的 value 傳遞給父元件的處理函式
        // alert(e.target.value); // 註解掉的提示框，用於顯示按鈕的值
    }
    
    return (
        <div className="board">
            {/* 渲染第一行按鈕 */}
            <div>
                <button className="btn btn-action" value="c" onClick={handelClick}>C</button>
                <button className="btn btn-action" value="+/-" onClick={handelClick}>+/-</button>
                <button className="btn btn-action" value="%" onClick={handelClick}>%</button>
                <button className="btn btn-operator" value="/" onClick={handelClick}>/</button>
            </div>
            {/* 渲染第二行按鈕 */}
            <div>
                <button className="btn" value="7" onClick={handelClick}>7</button>
                <button className="btn" value="8" onClick={handelClick}>8</button>
                <button className="btn" value="9" onClick={handelClick}>9</button>
                <button className="btn btn-operator" value="*" onClick={handelClick}>*</button>
            </div>
            {/* 渲染第三行按鈕 */}
            <div>
                <button className="btn" value="4" onClick={handelClick}>4</button>
                <button className="btn" value="5" onClick={handelClick}>5</button>
                <button className="btn" value="6" onClick={handelClick}>6</button>
                <button className="btn btn-operator" value="-" onClick={handelClick}>-</button>
            </div>
            {/* 渲染第四行按鈕 */}
            <div>
                <button className="btn" value="1" onClick={handelClick}>1</button>
                <button className="btn" value="2" onClick={handelClick}>2</button>
                <button className="btn" value="3" onClick={handelClick}>3</button>
                <button className="btn btn-operator" value="+" onClick={handelClick}>+</button>
            </div>
            {/* 渲染第五行按鈕 */}
            <div>
                <button className="btn btn-0" value="0" onClick={handelClick}>0</button>
                <button className="btn" value="." onClick={handelClick}>.</button>
                <button className="btn btn-operator" value="=" onClick={handelClick}>=</button>
            </div>
        </div>
    );
}

export default MyButton;

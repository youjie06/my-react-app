import React from "react";
import "./MyCalculator.css";

// MyButton 元件負責渲染計算器按鈕
function MyButton(props) {
    // handelClick 函數處理按鈕點擊事件
    const handelClick = (e) =>{
        props.buttonClicked(e.target.value); // 將按鈕的值傳遞給父元件的 buttonClicked 函數
        // alert(e.target.value); // 調試用途，彈出提示框顯示按鈕值
    }

    // 返回按鈕佈局的 JSX
    return (
        <div className="board"> {/* 主容器 */}
            <div>
                {/* 行 1: 清除、正負號、百分比、除法 */}
                <button className="btn btn-action" value="c" onClick={handelClick}>C</button>
                <button className="btn btn-action" value="+/-" onClick={handelClick}>+/-</button>
                <button className="btn btn-action" value="%" onClick={handelClick}>%</button>
                <button className="btn btn-operator" value="/" onClick={handelClick}>/</button>
            </div>
            <div>
                {/* 行 2: 數字 7, 8, 9 和乘法 */}
                <button className="btn" value="7" onClick={handelClick}>7</button>
                <button className="btn" value="8" onClick={handelClick}>8</button>
                <button className="btn" value="9" onClick={handelClick}>9</button>
                <button className="btn btn-operator" value="*" onClick={handelClick}>*</button>
            </div>
            <div>
                {/* 行 3: 數字 4, 5, 6 和減法 */}
                <button className="btn" value="4" onClick={handelClick}>4</button>
                <button className="btn" value="5" onClick={handelClick}>5</button>
                <button className="btn" value="6" onClick={handelClick}>6</button>
                <button className="btn btn-operator" value="-" onClick={handelClick}>-</button>
            </div>
            <div>
                {/* 行 4: 數字 1, 2, 3 和加法 */}
                <button className="btn" value="1" onClick={handelClick}>1</button>
                <button className="btn" value="2" onClick={handelClick}>2</button>
                <button className="btn" value="3" onClick={handelClick}>3</button>
                <button className="btn btn-operator" value="+" onClick={handelClick}>+</button>
            </div>
            <div>
                {/* 行 5: 數字 0、小數點和等於 */}
                <button className="btn btn-0" value="0" onClick={handelClick}>0</button>
                <button className="btn" value="." onClick={handelClick}>.</button>
                <button className="btn btn-operator" value="=" onClick={handelClick}>=</button>
            </div>
        </div>
    );
}

export default MyButton;

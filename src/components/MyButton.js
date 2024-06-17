import React from "react";
import "./MyCalculator.css"; // 引入計算機按鈕樣式

function MyButton(props) {
    // 點擊按鈕處理函式，將按鈕值傳遞給父組件的 buttonClicked 函式
    const handelClick = (e) => {
        props.buttonClicked(e.target.value);
    };

    return (
        <div className="board"> {/* 計算機按鈕面板的外層容器 */}
            <div>
                {/* 第一行按鈕：清除、正負號、百分比、除號 */}
                <button className="btn btn-action" value="c" onClick={handelClick}>C</button>
                <button className="btn btn-action" value="+/-" onClick={handelClick}>+/-</button>
                <button className="btn btn-action" value="%" onClick={handelClick}>%</button>
                <button className="btn btn-operator" value="/" onClick={handelClick}>/</button>
            </div>
            <div>
                {/* 第二行按鈕：數字 7、8、9、乘號 */}
                <button className="btn" value="7" onClick={handelClick}>7</button>
                <button className="btn" value="8" onClick={handelClick}>8</button>
                <button className="btn" value="9" onClick={handelClick}>9</button>
                <button className="btn btn-operator" value="*" onClick={handelClick}>*</button>
            </div>
            <div>
                {/* 第三行按鈕：數字 4、5、6、減號 */}
                <button className="btn" value="4" onClick={handelClick}>4</button>
                <button className="btn" value="5" onClick={handelClick}>5</button>
                <button className="btn" value="6" onClick={handelClick}>6</button>
                <button className="btn btn-operator" value="-" onClick={handelClick}>-</button>
            </div>
            <div>
                {/* 第四行按鈕：數字 1、2、3、加號 */}
                <button className="btn" value="1" onClick={handelClick}>1</button>
                <button className="btn" value="2" onClick={handelClick}>2</button>
                <button className="btn" value="3" onClick={handelClick}>3</button>
                <button className="btn btn-operator" value="+" onClick={handelClick}>+</button>
            </div>
            <div>
                {/* 第五行按鈕：數字 0、小數點、等號 */}
                <button className="btn btn-0" value="0" onClick={handelClick}>0</button>
                <button className="btn" value="." onClick={handelClick}>.</button>
                <button className="btn btn-operator" value="=" onClick={handelClick}>=</button>
            </div>
        </div>
    );
}

export default MyButton;

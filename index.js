'use strict';
    const trueBlue = document.getElementById('true-choice');
    const falseRed1 = document.getElementById('wrong-choice1')
    const falseRed2 = document.getElementById('wrong-choice2')
    // 正解をクリックした時の処理
    trueBlue.addEventListener('click', () => {
        const answerBox1 = document.getElementById('result-true');
        trueBlue.classList.add('button1');
        answerBox1.classList.add('result-true');
        falseRed1.classList.add('unClick');
        falseRed2.classList.add('unClick');
    } , false);
    // addEventListener 使い方 対象要素.addEventListener( 種類, 関数, false )
    // クリックした時に正解を青くして、正解のボックスを出す
    
    // 不正解をクリックしたときの処理
    falseRed1.addEventListener('click',() => {
        const answerBox2 = document.getElementById('result-false');
        trueBlue.classList.add('button1','unClick');
        falseRed1.classList.add('button2');
        falseRed2.classList.add('unClick');
        answerBox2.classList.add('result-true');
        
    } , false);
    falseRed2.addEventListener('click',() => {
        const answerBox2 = document.getElementById('result-false');
        trueBlue.classList.add('button1','unClick');
        falseRed1.classList.add('unClick');
        falseRed2.classList.add('button2');
        answerBox2.classList.add('result-true');
    } , false);
    // クリックをしたときに正解を青く、不正解を赤く、不正解のボックスを出す
    // 繰り返しの時は文字列として認識してもらう

'use strict';
    const blue = document.getElementById('true-choice');
    // 正解をクリックした時の処理
    blue.addEventListener('click', () => {
        const answerBox1 = document.getElementById('result-true');

        blue.classList.add('button1');
        answerBox1.classList.add('result-true');
    } , false);
    // addEventListener 使い方 対象要素.addEventListener( 種類, 関数, false )
    // クリックした時に正解を青くして、正解のボックスを出す

    const red = document.getElementById('wrong-choice')
    // 不正解をクリックしたときの処理
    red.addEventListener('click',() => {
        const answerBox2 = document.getElementById('result-false');

        blue.classList.add('button1');
        red.classList.add('button2');
        answerBox2.classList.add('result-true');
    } )
    // クリックをしたときに正解を青く、不正解を赤く、不正解のボックスを出す

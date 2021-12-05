'use strict';

function color1(){
    document.getElementById('true-choice').addEventListener('click',function(){
        //要素の取得 → 背景色を変える
        document.getElementById('true-choice').style.background='red';
    })
}